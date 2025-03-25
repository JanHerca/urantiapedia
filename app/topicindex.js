//Reader/Writer to convert Uversa Press topic index to Wiki

const {reflectPromise, extendArray, readFrom, testWords, strformat,
	readFile, getWikijsHeader, fixWikijsHeader, getWikijsBookRefLink,
	getError, containsRef} = require('./utils');
const fs = require('fs');
const path = require('path');
const Strings = require('./strings');
const topicTypes = ['PERSON', 'PLACE', 'ORDER', 'RACE', 'RELIGION', 'OTHER'];

class TopicIndex {
	/**
	 * @example
	 * topics = [
	 *   {
	 *      name: 'angels',
	 *      nameEN: 'angels',
	 *      names: ['angels', 'angel', 'the angels'],
	 *      altnames: ['angel', 'the angels'],
	 *      links: [
	 *          '<a href="/es/The_Urantia_Book/angels">angels</a>',
	 *          '<a href="/es/The_Urantia_Book/angels">angel</a>',
	 *          '<a href="/es/The_Urantia_Book/angels">the angels</a>'
	 *      ],
	 *      lines: [
	 *        {
	 *           text: 'personalities of Infinite Spirit',
	 *           level: 0,
	 *           seeAlso: ['personalidades'],
	 *           refs: ['30:2.82'],
	 *           fileline: 1295
	 *        },
	 *        {
	 *          ...
	 *        }
	 *      ],
	 *      seeAlso: ['Infinite Spirit:family'],
	 *      externalLinks: [https://en.wikipedia.org/wiki/Angels],
	 *      refs: ['26:1'],
	 *      type: 'ORDER',
	 *      revised: false,
	 *      sorting: 'a.txt:01294',
	 *      filename: 'a.txt',
	 *      fileline: 1294,
	 *      errors: [
	 *         {
	 *            desc: 'seeAlso personalities not found',
	 *            fileline: 1296
	 *         }
	 *      ]
	 *   },
	 *   {
	 *    ...
	 *   }
	 * ];
	 */
	topics = [];
	
	/**
	 * Array, each item for one paper ordered by index. 
	 * Each paper item an array, each item for one section ordered by index.
	 * Each section item an array, each item for one paragrpah ordered by index.
	 * Each paragrpah item an array, each item with topics names that reference
	 * that paragrpah.
	 */
	ref_topics = [];

	onProgressFn = null;
	language = 'en';

	setLanguage = (language) => {
		this.language = language;
	};

	//***********************************************************************
	// TXT
	//***********************************************************************

	/**
	 * Returns if a Topic Index exists or not.
	 * @param {string} dirPath Input folder.
	 * @return {Promise} Never rejects.
	 */
	exists = (dirPath) => {
		return new Promise((resolve, reject) => {
			fs.readdir(dirPath, (err, files) => {
				if (err) {
					resolve(false);
					return;
				}
				const formats = ['.txt'];
				const ffiles = files.filter(file => {
					return (formats.indexOf(path.extname(file)) != -1);
				});
				if (ffiles.length === 0) {
					resolve(false);
					return;
				}
				resolve(true);
			});
		});
	};

	/**
	 * Reads Topic Index files in TXT format from a folder.
	 * @param {string} dirPath Input folder.
	 * @param {string} category Category of topics from Topic Index that must
	 * be read. Those out the category are ignored. To read all use `ALL`.
	 * @param {string} letter Letter of topics from Topic Index that must be
	 * read. Those out of the letter are ignored. To read all use `ALL` or null.
	 * @return {Promise}
	 */
	readFromTXT = (dirPath, category, letter) => {
		return readFrom(dirPath, '.txt', this.clear, 
			this.readFileFromTXT.bind(this, category, letter), this);
	};

	/**
	 * Clears objects stored in the Topic Index.
	 */
	clear = () => {
		this.topics = [];
	};

	/**
	 * Reads a TXT file from Topic Index.
	 * @param {string} category Category of topics from Topic Index that must
	 * be read. Those out the category are ignored. To read all use 'ALL' or
	 * null and to read none 'NONE'.
	 * @param {string} letter Letter in lowercase of topics from Topic Index
	 * that must be read. Those out of the letter are ignored. To read all 
	 * use `ALL` or unll.
	 * @param {string} filePath TXT file path from Topic Index.
	 * @return {Promise}
	 */
	readFileFromTXT = (category, letter, filePath) => {
		category = category || 'ALL';
		letter = letter || 'ALL';
		const baseName = path.basename(filePath);
		if (letter != 'ALL' && !baseName.startsWith(letter)) {
			return Promise.resolve(null);
		}
		return new Promise((resolve, reject) => {
			const captionPattern = '\t<figcaption>{0}</figcaption>\r\n';
			const imgPattern = 
				'<figure id="Figure_{0}" class="image urantiapedia{1}">\r\n' +
				'\t<img src="{2}">\r\n' +
				'{3}' +
				'</figure>\r\n';
			if (this.onProgressFn) {
				this.onProgressFn(baseName);
			}

			if (category === 'NONE') {
				resolve(null);
				return;
			}

			fs.readFile(filePath, (errFile, buf) => {
				if (errFile) {
					reject([errFile]);
					return;
				}
				const lines = buf.toString().split('\n');
				const errors = [];
				let current = null;
				let topicline = null;
				lines.forEach((line, i) => {
					let data, text, refs, seeAlso, level, groups, img;
					const tline = line.trim();
					const err = this.getError('topic_err', baseName, i+1, tline);
					if (line.startsWith('<')) {
						return;
					}
					level = line.split(/\t/g).findIndex(a => a != '');
					data = tline.split('|').map(i => i.trim());
					
					if (
						current && 
						tline === ''
					) {
						//End line of an entry
						if (category === 'ALL' || category === current.type) {
							this.topics.push(current);
						}
						current = null;
					} else if (
						current && 
						tline.length > 0 && 
						tline.startsWith('>')
					) {
						//Line of entry with a link
						if (!current.externalLinks) {
							current.externalLinks = [];
						}
						current.externalLinks.push(tline.substring(1).trim());
					} else if (
						current && 
						tline.length > 0 && 
						tline.startsWith('[')
					) {
						//Line with an image
						groups = [...tline.matchAll(/\[(.+)\]|\((.+)\)|{(.+)}/g)];
						if (groups.length < 2) {
							errors.push(err);
						} else {
							img = groups
								.reduce((ac, cur) => {
									if (cur[1]) ac[0] = cur[1];
									if (cur[2]) ac[1] = cur[2];
									if (cur[3]) ac[2] = cur[3];
									return ac;
								}, [null, null, null]);

							topicline = {
								text: strformat(imgPattern, i + 1, 
									(img[2] ? ' ' + img[2] : ''), img[1],
									(img[0] ? strformat(captionPattern, img[0]) : '')),
								level: level,
								fileline: i + 1,
								seeAlso: [],
								refs: []
							};
							current.lines.push(topicline);
						}
						
					} else if (
						current && 
						tline.length > 0
					) {
						//Line of entry without a link or image (any other line)
						topicline = {
							text: '',
							level: level,
							fileline: i + 1
						};

						if (data.length === 0) {
							errors.push(err);
						} else if (data.length === 1) {
							[ text, refs ] = this.extractTextRefs(data[0]);
							
							if (text === "") {
								errors.push(err);
							} else {
								topicline.text = text;
								topicline.seeAlso = [];
								topicline.refs = refs;
							}
							current.lines.push(topicline);
						} else if (data.length === 2) {
							[ text, refs ] = this.extractTextRefs(data[0]);
							if (text === "") {
								errors.push(err);
							} else {
								topicline.text = text;
								topicline.seeAlso = data[1].split(';')
									.filter(i => i.trim() != '')
									.map(s => s.trim());
								topicline.refs = refs;
							}
							current.lines.push(topicline);
						} else {
							errors.push(err);
						}
					} else if (
						!current && 
						tline.length > 0
					) {
						//First line of an entry
						if (data.length === 0) {
							errors.push(err);
						} else if (data.length === 5) {
							if (
								data[1].startsWith('(') && 
								data[1].endsWith(')')
							) {
								refs = data[1].split(/[()]/g)
									.filter(i => i.replace(/\s+/, '') != '');
							}
							seeAlso = data[2].split(';')
								.filter(i => i.trim() != '')
								.map(s => s.trim());
							current = {
								name: data[0].split(';')[0].trim(),
								altnames: data[0].split(';')
									.slice(1).map(a=>a.trim()),
								lines: [],
								type: (data[3] === '' ? 'OTHER' : data[3]),
								revised: (data[4] === '' ? false : true),
								sorting: baseName + ':' + 
									(i + 1).toString().padStart(5, '0'),
								filename: baseName,
								fileline: i + 1,
								seeAlso : seeAlso
							};
							current.refs = (refs ? refs : []);
							current.isRedirect = ((!lines[i + 1] || 
								lines[i + 1].trim().length === 0) && 
								current.refs.length === 0);
						}
					}

					if (current && i === lines.length - 1) {
						if (category === 'ALL' || category === current.type) {
							this.topics.push(current);
						}
						current = null;
					}
				});

				if (errors.length === 0) {
					resolve(null);
				} else {
					reject(errors);
				}
			});
		});
	};

	/**
	 * Updates the list of topic names.
	 * @param {TopicIndex} topicIndexEN Topic index in English.
	 * @return {Promise}
	 */
	updateTopicNames = (topicindexEN) => {
		return new Promise((resolve, reject) => {
			const topicErr = [];
			const tpath = `/${this.language}/topic/`;
			this.topics.forEach(topic => {
				const tEN = (this.language === 'en' 
					? topic 
					: topicindexEN.topics.find(t => {
						return (t.filename === topic.filename &&
							t.fileline === topic.fileline);
					}));
				if (this.language != 'en' && !tEN) {
					topicErr.push(this.getError('topic_en_not_found',
						topic.name));
				}
				const nameEN = (tEN ? tEN.name : null);
				const urlName = (nameEN ? nameEN.replace(/\s/g, '_') : null);
				const names = this.getNames(topic);
				const links = names.map(name => {
					return `<a href="${tpath}${urlName}">${name}</a>`;
				});
				topic.nameEN = nameEN;
				topic.names = names;
				topic.links = links;
			});
			if (topicErr.length > 0) {
				reject(new Error(topicErr.map(e => e.message).join(', ')));
			} else {
				resolve(null);
			}
		});
	};

	/**
	 * Returns of the possible names for a topic to use when searching.
	 * @param {Object} topic A topic entry.
	 * @return {string[]}
	 */
	getNames = (topic) => {
		const name = topic.name.split('(')[0].trim();
		const names = [name];
		extendArray(names, topic.altnames);
		if (this.language === "en" ||this.language === "fr") {
			extendArray(names, names.map(i => i.replace(/'/g, '’')));
		}
		if (this.language === "fr") {
			extendArray(names, names
				.map(i => ['L','l','D','d','qu','s'].map(j => `${j}’${i}`))
				.flat()
			);
		}
		return names.filter((n,i,ar) => ar.indexOf(n) === i);
	}

	/**
	 * Updates an internal array to be be used for fast searches.
	 * @param {Book} book Book to be used for extract references.
	 * @return {Promise}
	 */
	updateRefsForSearching = (book) => {
		return new Promise((resolve, reject) => {
			this.topics.forEach(topic => {
				const refs = [];
				extendArray(refs, topic.refs);
				topic.lines.forEach(line => extendArray(refs, line.refs));
				const nrefs = book.getArrayOfRefs(refs);
				nrefs.forEach(nref => {
					if (nref) {
						const [pi, si, par_i] = nref;
						if (!this.ref_topics[pi]) {
							this.ref_topics[pi] = [];
						}
						if (!this.ref_topics[pi][si]) {
							this.ref_topics[pi][si] = [];
						}
						if (!this.ref_topics[pi][si][par_i]) {
							this.ref_topics[pi][si][par_i] = [];
						}
						if (this.ref_topics[pi][si][par_i].indexOf(topic.name) === -1) {
							this.ref_topics[pi][si][par_i].push(topic.name);
						}
					}
				});
			});
			resolve(null);
		});
	};

	/**
	 * Writes all entries in Topic Index in TXT format.
	 * @param {string} dirPath Output folder.
	 * @return {Promise}
	 */
	writeToTXT = (dirPath) => {
		const letters = '_abcdefghijklmnopqrstuvwxyz';
		const promises = letters.split('').map(letter => 
			this.writeFileToTXT(dirPath, letter));
		return Promise.all(promises);
	};

	/**
	 * Writes all entries in a letter in Topic Index in TXT format.
	 * @param {string} dirPath Output folder.
	 * @param {string} letter Letter.
	 * @returns {Promise}
	 */
	writeFileToTXT = (dirPath, letter) => {
		const letters = '_abcdefghijklmnopqrstuvwxyz';
		if (letter == undefined || letter.length != 1 ||
			letters.indexOf(letter) === -1) {
			return Promise.reject(this.getError('topic_err_writing', 
				'Invalid letter ' + letter));
		}
		return new Promise((resolve, reject) => {
			const fileName = `${letter}.txt`;
			const filePath = path.join(dirPath, fileName);

			if (this.onProgressFn) {
				this.onProgressFn(filePath);
			}

			let txt = '';

			// Write header
			txt += [
				'<' + '_'.repeat(77),
				'<',
				'<' + ' '.repeat(21) + (letter === '_' ? 'NUMBER' : letter.toUpperCase()),
				'< Urantia Book Uversa Press Topical index converted to text file',
				'< Each entry has a previous blank line',
				'< Entry = Name | Refs | See also | Category | OK (= revised)',
				'< An entry can have one or several sub-entries (= the lines after entry)',
				'< A sub-entry can have sub-sub-entries with tabs and so on',
				'< Help: https://urantiapedia.org/en/help/github#translation-and-' +
					'review-of-the-topic-index-from-english-to-target-language',
				'<' + '_'.repeat(77)
			].join('\r\n') + '\r\n\r\n';
			//Search for topics and loop through them
			const topics = this.topics
				.filter(t => t.filename === fileName)
				.sort((a, b) => {
					if (a.sorting > b.sorting) return 1;
					if (a.sorting < b.sorting) return -1;
					return 0;
				});
			if (topics.length === 0) {
				reject(this.getError('topic_err_writing', 
					'No topics with letter ' + letter));
				return;
			}

			topics.forEach((topic, n) => {
				const lastTopic = (n === topics.length - 1);
				//Write topic data
				const tdata = [
					[topic.name, ...topic.altnames].join('; '), 
					topic.refs.map(r => `(${r})`).join(' '), 
					topic.seeAlso.join('; '), 
					(topic.type === 'OTHER' ? '' : topic.type), 
					(topic.revised ? 'OK': '')
				];
				txt += tdata.map((td, i) => {
						return (td === '' ? ' ' : `${(i === 0 ? '' : ' ')}${td} `);
					}).join('|');
				txt += (lastTopic && topic.lines.length === 0 ? '' : '\r\n');
				topic.lines.forEach((line, j) => {
					const lastLine = (j === topic.lines.length - 1 &&
						(topic.externalLinks == undefined || 
						topic.externalLinks.length === 0));
					const linedata = [
						line.text, 
						line.refs.map(r => `(${r})`).join(' '),
						(line.seeAlso.length > 0 ? '| ' : '') + line.seeAlso.join('; ')
					].filter(ld => ld != '');
					txt += '\t'.repeat(line.level) + linedata.join(' ');
					txt += (lastTopic && lastLine ? '' : '\r\n');
				});
				if (topic.externalLinks) {
					topic.externalLinks.forEach((link, j) => {
						const lastLink = (j === topic.externalLinks.length - 1);
						txt += '> ' + link + (lastTopic && lastLink ? '' : '\r\n');
					});
				}
				txt += (lastTopic ? '' : '\r\n');
			});

			//Write
			fs.writeFile(filePath, txt, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	/**
	 * Gets an object containing a summary with the number of topics of each
	 * type and totals, as well as redirects number.
	 * @return {Object}
	 */
	getSummary = () => {
		const letters = '_abcdefghijklmnopqrstuvwxyz';
		let result = {};
		const columns = ['#', ...topicTypes, 'REDIREC', 'REVISED', 'TOTAL'];
		result.topics = [columns];
		result.lines = [columns];

		letters.split('').forEach(letter => {
			const rowTopics = [letter.toUpperCase()];
			const rowLines = [letter.toUpperCase()];
			const tt = this.topics.filter(t => t.filename === letter + '.txt');
			//Categories
			topicTypes.forEach(type => {
				const tf = tt.filter(t => t.type === type);
				const lines = tf.reduce((a, t) => a += t.lines.length, 0);
				rowTopics.push(tf.length);
				rowLines.push(lines);
			});
			//Redirects
			rowTopics.push(tt.filter(t => t.lines.length === 0).length);
			rowLines.push(0);
			//Revised
			const tr = tt.filter(t => t.revised);
			rowTopics.push(tr.length);
			rowLines.push(tr.reduce((a, t) => a += t.lines.length, 0));
			//Totals
			rowTopics.push(tt.length);
			rowLines.push(tt.reduce((a, t) => a += t.lines.length, 0));
			result.topics.push(rowTopics);
			result.lines.push(rowLines);
		});

		const rowTopicsTotal = columns.map((c, i) => {
			return (i === 0 ? 'TOTAL' : result.topics
				.reduce((a, r, j) => a += (j != 0 ? r[i] : 0), 0));
		});
		result.topics.push(rowTopicsTotal);

		const rowLinesTotal = columns.map((c, i) => {
			return (i === 0 ? 'TOTAL' : result.lines
				.reduce((a, r, j) => a += (j != 0 ? r[i] : 0), 0));
		});
		result.lines.push(rowLinesTotal);

		return result;
	};

	/**
	 * Extracts content and references from a text.
	 * @param {string} text Text.
	 * @return {Array.<string>}
	 */
	extractTextRefs = (text) => {
		const refRegEx = /\(\d+[:.,\d-]*\)(?:\s+\(\d+[:.,\d-]*\))*/g;
		const arr = [...text.matchAll(refRegEx)];
		const refs = arr.length === 0 
			? [] 
			: arr[0][0].split(/[()]/g).filter(i => i.trim() != '');
		const content = text.replace(refRegEx, '').trim();
		return [content, refs];
	};

	/**
	 * Write errors in a file called 'errors.json'.
	 * @param {string} dirPath Output folder.
	 * @return {Promise}
	 */
	writeErrors = (dirPath) => {
		return new Promise((resolve, reject) => {
			const filePath = path.join(dirPath, 'errors.json');
			let errors = [];

			this.topics.forEach(t => {
				const errs = t.errors.map(e => {
					const fileline = e.fileline.toString().padStart(4, '0');
					return `${t.filename}:${fileline} > '${t.name}': ${e.desc}`
				});
				if (errs.length > 0) {
					extendArray(errors, errs);
				}
			});

			errors.sort();
			
			fs.writeFile(filePath, JSON.stringify(errors, null, 4), 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	/**
	 * Checks topics, writing errors found inside topics.
	 * @param {Book} book The Urantia Book object.
	 * @param {?TopicIndex} topicIndexEN An optional TopicIndex in English
	 * to obtain valid seeAlsos, if they exist.
	 */
	check = (book, topicIndexEN) => {
		return new Promise((resolve, reject) => {
			this.topics.forEach(t => this.checkTopic(t, book, topicIndexEN));
			resolve(true);
		});
	};

	/**
	 * Checks a topic, writing errors in it.
	 * @param {Object} topic Topic.
	 * @param {Book} book The Urantia Book object.
	 * @param {?TopicIndex} topicIndexEN An optional TopicIndex in English
	 * to obtain valid seeAlsos, if they exist.
	 */
	checkTopic = (topic, book, topicIndexEN) => {
		topic.errors = [];
		try {
			//Checking duplicates
			const other = this.topics.filter(tt => tt != topic && tt.name === topic.name);
			if (other.length > 0) {
				const errors = other.map(tt => 
					`${tt.name}|${tt.filename}:${tt.fileline}`).join(' ');
				topic.errors.push({
					desc: this.tr('topic_duplicated') + ' ' + errors,
					fileline: topic.fileline
				});
			}
	
			//Checking refs
			this.checkRefs(topic, book);
	
			//Checking names in paragraphs
			// const firstLetter = topic.name.substring(0, 1);
			// const isUpperCase = (firstLetter === firstLetter.toUpperCase());
			// if (isUpperCase) {
			// 	this.checkNamesInPars(topic, book);
			// }
			this.checkNamesInPars(topic, book);
	
			//Checking links to other topics
			this.checkSeeAlso(topic, undefined, topicIndexEN);
			topic.lines.forEach(line => {
				this.checkSeeAlso(topic, line, topicIndexEN);
			});

		} catch (err) {
			topic.errors.push({
				desc: err.message,
				fileline: topic.fileline
			});
		}
	};

	/**
	 * Checks the references in a topic and add errors in an array of error
	 * objects (with desc and fileline).
	 * @param {Object} topic Topic.
	 * @param {Book} book The Urantia Book object.
	 */
	checkRefs = (topic, book) => {
		const fnRefs = (refs, fileline) => {
			const invalid = refs.filter(ref => {
				const arRefs = book.getArrayOfRefs([ref]);
				return (arRefs.length === 0 || arRefs[0] == null);
			});
			if (invalid.length > 0) {
				topic.errors.push({
					desc: this.tr('topic_invalid_refs') + invalid.join('; '),
					fileline: fileline
				});
			}
		};
		fnRefs(topic.refs, topic.fileline);
		topic.lines.forEach(line => fnRefs(line.refs ? line.refs : [], line.fileline));
	};

	/**
	 * Checks if names are found in any paragraph of Urantia Book and adds an 
	 * error in an array of error objects (with desc and fileline). This 
	 * function requires a previous call to checkRefs to remove invalid refs
	 * from the check.
	 * @param {Object} topic Topic.
	 * @param {Book} book The Urantia Book object.
	 */
	checkNamesInPars = (topic, book) => {
		const names = this.getNames(topic);
		const refs = topic.refs.slice();
		topic.lines.forEach(line => extendArray(refs, line.refs));
		if (refs.length === 0) return;
		//Filter valid refs
		const validRefs = refs.filter(ref => 
			topic.errors.find(er => er.desc.indexOf(ref) != -1) == undefined);
		const validArRefs = book.getArrayOfRefs(validRefs);
		const notfounded = validArRefs.filter(validArRef => {
			const par = book.getPar(...validArRef);
			const content = par ? par.par_content.replace(/\*|\$/g, ''): null;
			return (content == null || !testWords(names, content));
		}).map(r => `${r[0]}:${r[1]}.${r[2]}`);

		if (notfounded.length === validArRefs.length) {
			topic.errors.push({
				desc: strformat(this.tr('topic_not_in_ref'), 
					topic.name, notfounded.join('; ')),
				fileline: topic.fileline
			});
		}
	};

	/**
	 * Checks an array of links to other topics and add errors in an array
	 * of error objects (with desc and fileline).
	 * @param {Object} topic Topic to check.
	 * @param {?Object} line Line inside a topic (optional for checking lines).
	 * @param {?TopicIndex} topicIndexEN An optional TopicIndex in English
	 * to obtain valid seeAlsos, if they exist.
	 */
	checkSeeAlso = (topic, line, topicIndexEN) => {
		const { errors, filename } = topic;
		const { seeAlso, fileline } = (line ? line : topic);
		if (seeAlso && seeAlso.length > 0) {
			let tEN = null;
			seeAlso.forEach((sa, i) => {
				const term = sa.split(':')[0];
				let correctTerm = '';
				if (!this.topics.find(t => t.name === term)) {
					if (topicIndexEN && tEN === null) {
						tEN = topicIndexEN.topics
							.find(t => t.filename === filename && 
								t.fileline === topic.fileline);
					}
					if (tEN) {
						const lineEN = line 
							? tEN.lines.find(l => l.fileline === line.fileline)
							: null;
						const seeAlsoEN = lineEN ? lineEN.seeAlso : tEN.seeAlso;
						const saEN = seeAlsoEN ? seeAlsoEN[i] : null;
						const termEN = saEN ? saEN.split(':')[0] : null;
						const t2EN = termEN ? topicIndexEN.topics
							.find(t => t.name === termEN) : null;
						if (t2EN) {
							const t2 = this.topics
								.find(t => t.filename === t2EN.filename && 
									t.fileline === t2EN.fileline);
							correctTerm = `, better use '${t2.name}'`;
						}
					}
					errors.push({
						desc: strformat(this.tr('topic_seealso_not_found'), sa, 
							correctTerm),
						fileline: fileline
					});
				}
				//TODO: check if seeAlso anchors point to topic 1st level headers
			});
		}
	};

	/**
	 * Compares this topic index with another one to check if they are equals.
	 * Write errors inside topics of this topic index.
	 * @param {TopicIndex} topicIndex2 Other topic index.
	 */
	compare = (topicIndex2) => {
		const lan2 = topicIndex2.language;
		const ok = `({0}) '{1}': OK`;
		const err1 = `({0}) '{1}': topic not found`;
		const err2 = `({0}) '{1}': {2} not equal: {3} != {4}`;
		const err3 = `({0}) '{1}': {2} not same length: {3} != {4}`;
		const err4 = `({0}) '{1}': line {2} not equal: {3} != {4}`;
		const sorting = (a, b) => {
			if (a.sorting > b.sorting) return 1;
			if (a.sorting < b.sorting) return -1;
			return 0;
		};
		
		return new Promise((resolve, reject) => {
			const sortedTopics = this.topics.sort(sorting);
			const sortedTopics2 = topicIndex2.topics.sort(sorting);
			sortedTopics.forEach((topic, i) => {
				if (!Array.isArray(topic.errors)) {
					topic.errors = [];
				}
				const { fileline, errors } = topic;
				const topic2 = sortedTopics2[i];
				const name = topic2 ? topic2.name : 'undefined';
				const data = ['filename', 'fileline', 'type', 'revised', 
					'sorting'];
				const nums = ['lines', 'seeAlso', 'externalLinks', 'refs', ];
				let desc = null;
				//Check topic
				if (!topic2) {
					desc = strformat(err1, lan2, name, filename);
					errors.push({desc, fileline});
					return;
				}
				//Check filename, fileline, type, revised, sorting
				data.forEach(d => {
					if (topic[d] != topic2[d]) {
						desc = strformat(err2, lan2, name, d, topic[d], 
							topic2[d]);
						errors.push({desc, fileline});
					}
				});
				//Checks arrays has same number
				nums.forEach(d => {
					const len = 
						Array.isArray(topic[d]) ? topic[d].length : 0;
					const len2 = 
						Array.isArray(topic2[d]) ? topic2[d].length : 0;
					if (len != len2) {
						const t1 = d === 'lines' ? topic[d].length : topic[d];
						const t2 = d === 'lines' ? topic2[d].length : topic2[d];
						desc = strformat(err3, lan2, name, d, t1, t2);
						errors.push({desc, fileline});
					}
				});
				//Check lines
				topic.lines.forEach((line, i) => {
					const line2 = topic2.lines[i];
					if (line.level != line2.level) {
						desc = strformat(err4, lan2, name, i, line.level, 
							line2.level);
						errors.push({desc, fileline: line.fileline});
					}
					const lineSA = line.seeAlso ? line.seeAlso : [];
					const lineSA2 = line2.seeAlso ? line2.seeAlso : [];
					if (lineSA.length != lineSA2.length) {
						desc = strformat(err4, lan2, name, i, lineSA, 
							lineSA2);
						errors.push({desc, fileline: line.fileline});
					}
					const lineRefs = line.refs ? JSON.stringify(line.refs) : '';
					const lineRefs2 = line2.refs ? JSON.stringify(line2.refs) 
						: '';
					if (lineRefs != lineRefs2) {
						desc = strformat(err4, lan2, name, i, lineRefs, 
							lineRefs2);
						errors.push({desc, fileline: line.fileline});
					}
				});
				//refs must be same length and equal
			});
			resolve(null);
		});
	};

	/**
	 * Normalizes every TXT file from Topic Index inside a folder.
	 * Normalization basically adds a '|' separator between info in each entry
	 * to slice later the data.
	 * @param {string} dirPath Input folder.
	 * @return {Promise}
	 */
	normalize = (dirPath) => {
		return readFrom(dirPath, '.txt', this.clear, this.normalizeFile, this);
	};

	/**
	 * Normalizes a TXT file from Topic Index.
	 * @param {string} filePath TXT file from Topic Index.
	 * @return {Promise}
	 */
	normalizeFile = (filePath) => {
		const baseName = path.basename(filePath);
		return new Promise((resolve, reject) => {
			if (this.onProgressFn) {
				this.onProgressFn(baseName);
			}
			

			fs.readFile(filePath, (errFile, buf) => {
				if (errFile) {
					reject([errFile]);
					return;
				}
				const lines = buf.toString().split('\n');
				const errors = [];
				let result = '';
				let nfilePath = filePath.replace('.txt', '_normalized.txt');
				
				let current = null;
				lines.forEach((line, i) => {
					let data, name, refs, seeAlso, type, ok;
					const tline = line.trim();
					if (line.startsWith('#') || (!current && tline === '')) {
						result += line;
					} else if (current && (tline === '' || i === lines.length - 1)) {
						result += line;
						current = null;
					} else if (current && tline.length > 0) {
						result += line;
					} else if (!current && tline.length > 0) {
						current = {};
						data = tline.split('|').map(i => i.trim());

						if (data.length === 0) {
							errors.push(new Error(`${baseName}, línea ${i}: ${tline}`));
						} else if (data.length === 5) {
							name = data[0];
							refs = data[1];
							seeAlso = data[2];
							type = data[3];
							ok = data[4];
							if ((name === '') || 
								(refs != '' && refs.indexOf('(') === -1) ||
								(seeAlso != '' && !seeAlso.startsWith('Ver ')) ||
								(type != '' && topicTypes.indexOf(type) === -1) ||
								(ok != '' && ok != 'OK')) {
								errors.push(new Error(`${baseName}, línea ${i}: ${tline}`));
							}
							result += line;
						} else if (data.length > 1) {
							name = data[0];
							refs = data.find(d => d.startsWith('(')) || '';
							refs = (refs.length > 0 ? refs + ' ': refs);
							seeAlso = data.find(d => d.startsWith('Ver ')) || '';
							seeAlso = (seeAlso.length > 0 ? seeAlso + ' ' : seeAlso);
							type = data.find(d => topicTypes.indexOf(d) != -1) || '';
							type = (type.length > 0 ? type + ' ' : type);
							ok = data.find(d => d === 'OK') || '';
							result += `${name} | ${refs}| ${seeAlso}| ${type}| ${ok}\r\n`;
						} else {
							result += tline + ' | | | | \r\n';
						}
					}
				});

				if (errors.length === 0) {
					fs.writeFile(nfilePath, result, 'utf-8', (err) => {
						if (err) {
							reject(err);
							return;
						}
						resolve(null);
					});
				} else {
					reject(errors);
				}
			});
		});
	};

	//***********************************************************************
	// Wiki.js
	//***********************************************************************

	/**
	 * Writes all entries in Topic Index in Wiki.js format.
	 * @param {string} dirPath Output folder.
	 * @param {string} letter Letter in lowercase of topics from Topic Index 
	 * that must be read. Those out of the letter are ignored. To read all 
	 * use `ALL`.
	 * @param {?TopicIndex} topicIndexEN An optional Topic Index in english. If
	 * current language is english then this is not required. If it is not english
	 * then this param is required.
	 * @return {Promise}
	 */
	writeToWikijs = (dirPath, letter, topicIndexEN) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('dir_no_access', baseName, 0)]);
					return;
				}
				const tiOK = (this.language === 'en' || 
					(this.language != 'en' && topicIndexEN));
				const tiEN = (this.language === 'en' ? this : topicIndexEN);
				if (!tiOK) {
					reject([this.getError('topic_en_required', baseName)]);
					return;
				}

				const tiNames = this.topics.map(topic => {
					const tEN = (this.language === 'en' ? topic :
						tiEN.topics.find(t => {
							return (t.filename === topic.filename &&
								t.fileline === topic.fileline);
						}));
					return {
						name: topic.name,
						nameEN: (tEN ? tEN.name : null),
						names: [topic.name.split('(')[0].trim(), ...topic.altnames]
					};
				});


				const topicErr = [];
				const promises = this.topics
					// .filter(t => t.name === 'Miguel de Nebadon')
					.map(topic => {
						const topicEN = (this.language === 'en' ? topic :
							tiEN.topics.find(t => {
								return (t.filename === topic.filename &&
									t.fileline === topic.fileline);
							}));
						if (!topicEN) {
							topicErr.push(this.getError('topic_en_not_found',
								topic.name));
							return;
						}
						const fileName = topicEN.name.replace(/ /g, '_');
						const filePath = path.join(dirPath, `${fileName}.html`);
						const isLetter = letter != 'ALL' && 
							!topicEN.name.toLowerCase().startsWith(letter);
						const p = (isLetter ? Promise.resolve(null) :
							this.writeFileToWikijs(filePath, topic, topicEN,
							tiNames));
						return reflectPromise(p);
					});
				if (topicErr.length > 0) {
					reject(topicErr);
					return;
				}
				Promise.all(promises)
					.then((results) => {
						const errors = [];
						results.forEach(r => extendArray(errors, r.error));
						if (errors.length === 0) {
							resolve(null);
						} else {
							reject(errors);
						}
					});
			});
		});
	};

	/**
	 * Writes an entry of Topic Index in Wiki.js format.
	 * @param {string} filePath Output Wiki file.
	 * @param {Object} topic Object with Topic Index entry.
	 * @param {Object} topicEN Object with topic Index entry in english. If 
	 * current language is english this object is the same than topic.
	 * @param {Array.<Object>} tiNames An array of objects with topic names in
	 * current Topic Index, in english, and with aliases.
	 * @return {Promise}
	 */
	writeFileToWikijs = (filePath, topic, topicEN, tiNames) => {
		return new Promise((resolve, reject) => {
			if (this.onProgressFn) {
				this.onProgressFn(filePath);
			}
			let html = '';
			let html2 = '';
			const tpath = (this.language === 'en' ? '/topic' : 
				`/${this.language}/topic`);
			const title = topic.name.substring(0, 1).toUpperCase() +
						topic.name.substring(1);
			const description = this.language === 'en' 
				? undefined 
				: this.tr('topicOriginalName') + ': ' + topicEN.name;
			const seeAlsoTxt = this.tr('topic_see_also');
			const isRedirect = (
				topic.lines.length === 0 && 
				topic.refs.length === 0 &&
				topic.seeAlso.length > 0 &&
				topic.revised
			);
			const redirectText = isRedirect ? this.tr('topicRedirect') : null;
			const notRevisedText = !topic.revised 
				? this.tr('topicNotRevised') 
				: null;
			const redirectsThis = this.topics
				.filter(t => {
					return (
						t.seeAlso.find(i => i.split(':')[0] === topic.name) && 
						t.name != topic.name &&
						t.revised
					);
				}).map(t => {
					const ti = tiNames.find(i => i.name === t.name);
					return {name: t.name, nameEN: ti.nameEN};
				});
			const tags = ['topic', ...(topic.type && topic.type != 'OTHER' ? 
				[topic.type.toLowerCase()] : [])];
			const lineRefs = [];
			let otherRefs = [...topic.refs];
			const writeRefs = (refs) => {
				if (refs && refs.length > 0) {
					html += `<p>${seeAlsoTxt}: `;
					html += refs
						.map(r => getWikijsBookRefLink(r, this.language))
						.join('; ');
					html += '.</p>\r\n';
				}
			};
			const writeFile = () => {
				fs.writeFile(filePath, html2 + html, 'utf-8', (err) => {
					if (err) {
						reject(err);
						return;
					}
					resolve(null);
				});
			};
			

			html2 += getWikijsHeader(title, tags, description);
			html2 += '\r\n';

			// const refs = this.sortUniqueRefs(topic);
			// let refsUsed = refs.map(ru => false);
			const seeAlsoErr = [];
			const seeAlsoObjs = this.sortUniqueSeeAlsoWikijs(topic, topicEN, 
				seeAlsoErr);
			//TODO: Uncomment for get errors
			// if (seeAlsoErr.length > 0) {
			// 	reject(new Error(seeAlsoErr.map(e => e.message).join(', ')));
			// 	return;
			// }
			//If topic is a redirect
			if (isRedirect) {
				html += `<blockquote class="is-info"><p><em>${redirectText}</em></p></blockquote>\r\n`;
			}
			//If topic is not revised
			if (!topic.revised) {
				html += `<blockquote class="is-warning"><p><img draggable="false" alt="🚧" src="/_assets/svg/twemoji/1f6a7.svg" class="emoji"> <em>${notRevisedText}</em></p></blockquote>\r\n`;
			}

			//Add line content with headings and references
			topic.lines.forEach((line, i, lines) => {
				const content = line.text;
				const prevline = lines[i - 1];
				const nextline = lines[i + 1];
				const nextline2 = lines[i + 2];
				const level = line.level;
				const prevlevel = (prevline ? prevline.level : -1);
				const nextlevel = (nextline ? nextline.level : -1);
				const nextlevel2 =  (nextline2 ? nextline2.level : -1);
				const marks = content.match(/^[#|\*]*/g)[0];
				const prevMarks = (prevline ? 
					prevline.text.match(/^[#|\*]*/g)[0] : "");
				const nextMarks = (nextline ?
					nextline.text.match(/^[#|\*]*/g)[0] : "");
				const large = (content.length > 150);
				const nextlarge = (nextline && nextline.text.length > 150);
				const isImage = (content.startsWith('<figure'));
				
				let subcontent = content.replace(/^[#|\*]*/g,'').trim();
				subcontent = subcontent.substring(0, 1).toUpperCase() + 
						subcontent.substring(1);

				if (isImage) {
					//Image content is already in HTML
					html += content;
				} else if (nextline && level < nextlevel) {
					const h = `h${line.level + 2}`;
					html += `<${h}> ${subcontent} </${h}>\r\n`;
					otherRefs = [...otherRefs, ...line.refs];
				} else {
					if (!subcontent.match(/[.:!?]$/)) {
						subcontent += '.';
					}
					if (marks.length > 0) {
						if (prevMarks.length < marks.length) {
							//Add start of list
							html += (marks[marks.length - 1] === '#' ? '<ol>': 
								'<ul>') + '\r\n';
						}
					} else if (
						i === 0 || 
						(prevline && level != prevlevel) ||
						(prevline && level === prevlevel 
							&& prevMarks.length > 0) ||
						large
					) {
						//Add start of paragraph
						html += '<p>';
					}

					//Add links to internal topics
					const nameslinks = [];
					//TODO: Next word separation only works for English and Spanish
					const words = subcontent
						.match(/[a-z0-9áéíóúüñ'-]+(?:'[a-z0-9áéíóúüñ'-]+)*/gi);
					tiNames.forEach(nn => {
						if (nn.name === topic.name) return;
						const ln = nn.nameEN.replace(/\s/g, '_');
						const path = `${tpath}/${ln}`;
						const ipath = html.indexOf(path);
						//If topic used very close skip
						if (
							ipath != -1 && 
							html.length - ipath - path.length < 1000
						) {
							return;
						}
						nn.names.forEach(n => {
							if (!(this.isLinkableName(n, subcontent))) return;
							if (
								subcontent.indexOf(n) != -1 && 
								nn.nameEN &&
								words.find(w => n.startsWith(w))
							) {
								const link = `<a href="${path}">${n}</a>`;
								if (!nameslinks.find(i=>i.name === n)) {
									nameslinks.push({
										name: n,
										link
									});
								}
							}
						});
					});
					if (nameslinks.length > 0) {
						//Order using longest topic names before
						nameslinks.sort((a,b) => b.name.length - a.name.length);
						subcontent = replaceWords(
							nameslinks.map(i=>i.name),
							nameslinks.map(i=>i.link), 
							subcontent
						);
					}

					//Add start list item
					html += (marks.length > 0 ? '<li>' : '');
					//Add subcontent
					html += subcontent + ' ';
					html += (marks.length > 0 &&
						marks.length < nextMarks.length ? '\r\n' : '');

					//Add refs
					if (line.refs && line.refs.length > 0) {
						const j = lineRefs.length + 1;
						lineRefs.push(
							`<li id="fn${j}"><a href="#cite${j}">↑</a>` +
							line.refs
								.map(r => getWikijsBookRefLink(r, this.language))
								.join('; ') +
							'</li>\r\n');
						html += `<sup id="cite${j}">` +
							`<a href="#fn${j}">[${j}]</a>` +
							`</sup> `;
					}

					if (marks.length > 0) {
						if (marks.length === nextMarks.length) {
							//Add end list item
							html += '</li>\r\n';
						} else if (marks.length > nextMarks.length) {
							//Add end list item
							html += '</li>\r\n';
							//Add end of list
							for (let n = 1; n <= marks.length - nextMarks.length; n++) {
								html += (marks[marks.length - n] === '#' ? '</ol>': 
									'</ul>') + '\r\n';
								html += (marks.length - n > 0 ? '</li>\r\n' : '');
							}
						}
					} else if (i === lines.length - 1 || 
						(nextline && level === nextlevel && nextMarks.length > 0) ||
						(nextline && level != nextlevel) ||
						(nextline2 && nextlevel < nextlevel2) ||
						nextlarge) {
						//Add end of paragraph
						html += '</p>\r\n';
					}
				}
			});

			//Add redirects to this
			if (redirectsThis.length > 0) {
				html+= `<h2>${this.tr('topicRedirectsThis')}</h2>\r\n`;
				html += '<div>\r\n<ul>\r\n';
				redirectsThis.forEach(redir => {
					const redirName = redir.name;
					const redirNameEN = redir.nameEN;
					const redirLink = redirNameEN.replace(/ /g, '_');
					// const redirText = 
					// 	redirName.substring(0, 1).toUpperCase() + 
					// 	redirName.substring(1);
					html += `<li><a href="${tpath}/${redirLink}">${redirName}</a></li>\r\n`;
				});
				html += '</ul>\r\n</div>\r\n';
			}

			//Add Links
			if (seeAlsoObjs && seeAlsoObjs.length > 0) {
				html += `<h2>${this.tr('topic_links')}</h2>\r\n`;
				html += '<div>\r\n<ul>\r\n';
				seeAlsoObjs.forEach(alsoObj => {
					const alsoName = alsoObj.seeAlso;
					const alsoNameEN = alsoObj.seeAlsoEN;
					const alsoLink = alsoNameEN.replace(/ /g, '_').replace(/:/, '#');
					// const alsoText = 
					// 	alsoName.substring(0, 1).toUpperCase() + 
					// 	alsoName.substring(1);
					html += `<li><a href="${tpath}/${alsoLink}">${alsoName}</a></li>\r\n`;
				});
				html += '</ul>\r\n</div>\r\n';
			}
			
			//Add External Links
			if (topic.externalLinks && topic.externalLinks.length > 0) {
				html+= `<h2>${this.tr('topic_external_links')}</h2>\r\n`;
				html += '<div>\r\n<ul>\r\n';
				topic.externalLinks.forEach(link => {
					if (link.indexOf('wikipedia') != -1) {
						let linkname = link.substring(link.lastIndexOf('/') + 1)
							.replace(/_/g, ' ');
						html += `<li><a href="${link}">Wikipedia: ${linkname}</a></li>\r\n`;
					} else {
						html += `<li><a href="${link}">${link}</a></li>\r\n`;
					}
				});
				html += '</ul>\r\n</div>\r\n';
			}

			//Add references
			if (lineRefs.length > 0) {
				const fnStyle = (lineRefs.length > 10 ? 
					' style="column-width: 30em;"' : '');
				html += `<h2>${this.tr('topic_references')}</h2>\r\n`;
				html += `<div${fnStyle}>\r\n<ol>\r\n`;
				lineRefs.forEach(f => html += '  ' + f);
				html += '</ol>\r\n</div>\r\n';
			}
			//Add the seeAlso references at Topic level after other references
			writeRefs(otherRefs);

			//Only write if content is new or file not exists
			//Update date created avoiding a new date for it
			readFile(filePath)
				.then(previousLines => {
					const curLines = (html2 + html).split('\n');
					const newHeader = fixWikijsHeader(html2, previousLines, 
						curLines);
					if (newHeader) {
						html2 = newHeader;
						writeFile();
						return;
					}
					resolve(null);
				})
				.catch(err2 => {
					writeFile();
				});
		});
	};

	/**
	 * Writes the index page with topics of Topic Index in Wiki.js format.
	 * Name of created files are 'topics.html', 'people.html', 'places.html',
	 * 'beings.html', 'races.html' and 'religions.html'.
	 * @param {string} dirPath Output folder.
	 * @param {string} category Category of topics from Topic Index that must
	 * be write. Those out the category are ignored. To write all use 'ALL'.
	 * @param {?TopicIndex} topicIndexEN An optional Topic Index in english. If
	 * current language is english then this is not required. If it is not english
	 * then this param is required.
	 * @return {Promise}
	 */
	writeIndexToWikijs = (dirPath, category, topicIndexEN) => {
		let filename = null;
		const baseName = path.basename(dirPath);
		if (category === 'ALL') {
			filename = 'topics.html';
		} else if (category === 'PERSON') {
			filename = 'people.html';
		} else if (category === 'PLACE') {
			filename = 'places.html';
		} else if (category === 'ORDER') {
			filename = 'beings.html';
		} else if (category === 'RACE') {
			filename = 'races.html';
		} else if (category === 'RELIGION') {
			filename = 'religions.html';
		} else {
			return Promise.reject([new Error('Invalid topic category.')]);
		}
		return new Promise((resolve, reject) => {
			const filePath = path.join(dirPath, filename);
			const title = this.tr(`topicIndexTitle_${category}`);
			const redirectText = this.tr('topicRedirectsTo');
			let html = '';
			let curLetter = null;

			const tiOK = (this.language === 'en' || 
				(this.language != 'en' && topicIndexEN));
			const tiEN = (this.language === 'en' ? this : topicIndexEN);
			if (!tiOK) {
				reject([this.getError('topic_en_required', baseName)]);
				return;
			}

			html += getWikijsHeader(title);
			html += '\r\n';

			const topics = this.topics
				.filter(t => category === 'ALL' || t.type === category)
				.sort((a, b) => {
					//Normalization to remove accents when sorting
					const a2 = a.name.toLowerCase()
						.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
					const b2 = b.name.toLowerCase()
						.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
					if (a2 > b2) {
						return 1;
					}
					if (a2 < b2) {
						return -1;
					}
					return 0;
				});
			
			const letters = [];
			
			topics.forEach(topic => {
				const filenameLetter = topic.filename.substring(0, 1);
				if (filenameLetter != '_' && 
					!letters.includes(filenameLetter)) 
				{
					letters.push(filenameLetter);
				}
			});

			letters.sort((a, b) => {
				return a.toLowerCase().localeCompare(b.toLowerCase());
			});
			html += 
				'<div class="d-flex layout row wrap justify-start" ' +
					'style="gap: 10px;">\r\n' +
				letters.map(l => {
					return '<div class="d-flex mx-1 my-1" ' +
						'style="flex-basis: auto;">\r\n' +
						`<a href="#${l}" class="mx-0 v-btn v-btn--depressed ` +
							'v-btn--flat v-btn--outlined v-btn--router ' +
							'theme--light v-size--small indigo--text ' +
							'is-internal-link is-valid-page">' +
							'<span class="v-btn__content">' +
								'<div class="caption">' +
									`<strong>${l.toUpperCase()}</strong>` +
								'</div>' +
							'</span>' +
						'</a>\r\n'+
					'</div>';
				}).join('\r\n') +
				'</div>\r\n';

			const topicErr = [];
			topics.forEach((topic, i) => {
				const topicEN = (this.language === 'en' ? topic :
					tiEN.topics.find(t => {
						return (t.filename === topic.filename &&
							t.fileline === topic.fileline);
					}));
				if (!topicEN) {
					topicErr.push(this.getError('topic_en_not_found',
						topic.name));
					return;
				}
				const fileLetter = topic.name.substring(0, 1).toUpperCase()
					.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
				const newLetter = (isNaN(parseInt(fileLetter)) ? fileLetter : null);
				if (i === 0 || newLetter != curLetter) {
					//Closing previous
					if (newLetter != curLetter) {
						html += '</div>\r\n';
					}
					if (newLetter) {
						html += `<h2>${newLetter}</h2>\r\n`;
					}
					html += '<br/>\r\n<div style="display:grid; gap: 1rem; ' +
						'grid-template-columns: ' +
						'repeat(auto-fill, minmax(15rem, 1fr));">\r\n';
					if (newLetter) {
						curLetter = newLetter;
					}
				}
				const pagename = topicEN.name.replace(/ /g, '_');
				const lan = (this.language === 'en' ? '' : '/' + this.language);
				const href = `${lan}/topic/${pagename}`;
				html += `\t<div>`;
				html += `\t\t<a href="${href}">${topic.name}</a>`;
				//Resolve redirects
				if (topic.isRedirect && topic.seeAlso.length === 1) {
					const seeAlso = topic.seeAlso[0];
					const seeAlsoTopic = 
						this.topics.find(t => t.name === seeAlso);
					if (seeAlsoTopic) {
						const seeAlsoName = this.language === 'en' 
							? seeAlsoTopic.name
							: seeAlsoTopic.nameEN;
						html += `\t\t<br>\r\n`;
						html += `\t\t<small>&nbsp;&nbsp;&nbsp;→ ${redirectText}: <a href="${lan}/topic/${seeAlsoName}">${seeAlso}</a></small>\r\n`;
					}
				}
				html += `\t</div>\r\n`;
				if (i === topics.length - 1) {
					html += '</div>\r\n';
				}
			});
			
			if (topicErr.length > 0) {
				reject(topicErr);
				return;
			}

			fs.writeFile(filePath, html, 'utf-8', (err) => {
				if (err) {
					reject([err]);
					return;
				}
				resolve(null);
			});

		});
	};

	/**
	 * Extracts all different link from a topic (and sort them by alphabetic order).
	 * @param {Object} topic Topic.
	 * @param {Object} topicEN Topic in english.
	 * @param {Array.<Error>} err Array of errors.
	 * @return {Array.<Object>}
	 */
	sortUniqueSeeAlsoWikijs = (topic, topicEN, err) => {
		let seeAlso = [];
		let seeAlsoObj = [];

		if (topic.lines.length != topicEN.lines.length) {
			err.push(this.getError('topic_invalid_see', topic.name));
			return seeAlsoObj;
		}

		const addSeeAlso = (sa, saEN) => {
			if ((sa && !saEN) || (!sa && saEN) ||
				(sa && saEN && sa.length != saEN.length)) {
				err.push(this.getError('topic_invalid_see', topic.name));
				return;
			}
			if (sa && sa.length > 0) {
				sa.forEach((s, i) => {
					if (seeAlso.indexOf(s) === -1) {
						seeAlso.push(s);
						seeAlsoObj.push({seeAlso: s, seeAlsoEN: saEN[i]});
					}
				});
			}
		};

		addSeeAlso(topic.seeAlso, topicEN.seeAlso);
		topic.lines.forEach((line, i) => {
			addSeeAlso(line.seeAlso, topicEN.lines[i].seeAlso);
		});

		seeAlsoObj.sort((a,b) => {
			return a.seeAlso.toLowerCase().localeCompare(b.seeAlso.toLowerCase());
		});

		return seeAlsoObj;
	};


	//***********************************************************************
	// MediaWiki
	//***********************************************************************

	/**
	 * Writes all entries in Topic Index in MediaWiki format.
	 * Also creates an archive 'Dónde_puedo_aportar_contenido.wiki' to fill that
	 * page easily.
	 * @param {string} dirPath Output folder.
	 * @return {Promise}
	 */
	writeToWikiText = (dirPath) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('dir_no_access', baseName)]);
					return;
				}
				const promises = this.topics.map(topic => {
					const name = topic.name.substring(0, 1).toUpperCase() +
						topic.name.substring(1);
					let filePath = path.join(dirPath, `${name}.wiki`);
					let p = this.writeFileToWikiText(filePath, topic);
					return reflectPromise(p);
				});
				Promise.all(promises)
					.then((results) => {
						const errors = [];
						results.forEach(r => extendArray(errors, r.error));
						if (errors.length === 0) {
							resolve(null);
						} else {
							reject(errors);
						}
					});
			});
		});
	};

	/**
	 * Writes an entry of Topic Index in Wiki text.
	 * @param {string} filePath Output Wiki file.
	 * @param {Object} topic Object with Topic Index entry.
	 * @return {Promise}
	 */
	writeFileToWikiText = (filePath, topic) => {
		return new Promise((resolve, reject) => {
			let wiki = '';
			const end = '\r\n\r\n';
			const refs = this.sortUniqueRefs(topic);
			let refsUsed = refs.map(ru => false);
			const seeAlso = this.sortUniqueSeeAlso(topic);

			const refsToTags = (rr) => {
				return rr.map(r => {
					const i = refs.indexOf(r);
					const used = refsUsed[i];
					refsUsed[i] = true;
					return (used ? `<ref name="n${i}"/> ` : this.refToWiki(r, i));
				}).join('');
			};

			//Resolve redirects
			if (topic.isRedirect && topic.seeAlso.length === 1) {
				wiki = `#REDIRECT [[${topic.seeAlso[0]}]]`;
			}

			//Add references at Topic level on top
			if (topic.refs && topic.refs.length > 0) {
				wiki += this.tr('topic_see_also') + ': ' + 
					refsToTags(topic.refs) + end;
			}

			//Add line content with headings and references
			topic.lines.forEach((line, i) => {
				let heading = '=';
				const nextline = topic.lines[i + 1];
				let content = line.text/*.replace(/#/g, 'núm.')*/;
				const acontent = content.replace(/ /g, '_');
				const anchor = `{{anchor|${acontent}}}`;
				content = content.substring(0, 1).toUpperCase() + 
					content.substring(1);
				
				if (nextline && line.level < nextline.level) {
					heading += '='.repeat(line.level + 1);
					wiki += `${end}${heading} ${anchor} ${content} ${heading}${end}`;
					if (line.refs && line.refs.length > 0) {
						wiki += this.tr('topic_see_also') + ': ' + 
							refsToTags(line.refs) + end;
					}
				} else {
					const subcontent = content.replace(/^[#\*]*/g,'').trim();
					const isub = content.indexOf(subcontent);
					if (content.startsWith('#') || content.startsWith('*')) {
						content = content.substring(0, isub) + 
							content.substring(isub, isub+1).toUpperCase() + 
							content.substring(isub+1);
					}

					if (!content.startsWith('#') && !content.endsWith('.')) {
						content += '.';
					}
					wiki += content;

					if (line.refs && line.refs.length > 0) {
						wiki += ' ' + refsToTags(line.refs);
					} else {
						wiki += ' ';
					}

					if (content.startsWith('#') || content.startsWith('*')) {
						wiki += '\r\n';
					}
				}
				
			});

			//Add Links
			if (seeAlso && seeAlso.length > 0) {
				wiki += `${end}== ${this.tr('topic_links')} ==${end}`;
				seeAlso.forEach(also => {
					let alsoLink = also.replace(/ /g, '_').replace(/:/, '#');
					let alsoText = also.substring(0, 1).toUpperCase() + 
						also.substring(1);
					wiki += `* [[${alsoLink}|${alsoText}]]\r\n`;
				});
			}
			
			//Add External Links
			if (topic.externalLinks && topic.externalLinks.length > 0) {
				wiki+= `${end}== ${this.tr('topic_external_links')} ==${end}`;
				topic.externalLinks.forEach(link => {
					if (link.indexOf('wikipedia') != -1) {
						let linkname = link.substring(link.lastIndexOf('/') + 1)
							.replace(/_/g, ' ');
						wiki += `* [${link} Wikipedia: ${linkname}]\r\n`;
					} else {
						wiki += `* [${link}]\r\n`;
					}
				});
			}

			//Add references
			if (refs.length > 0) {
				wiki += `${end}== ${this.tr('topic_references')} ==` +
					`${end}<references/>\r\n`;
			}

			fs.writeFile(filePath, wiki, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	/**
	 * Converts a reference to Wiki format.
	 * @param {string} ref Reference.
	 * @param {number} i Reference index.
	 * @return {string}
	 */
	refToWiki = (ref, i) => {
		//TODO: Support 'LU' and 'UB' in Lua module
		let wiki = '';
		let data = ref.split(/[:.]/g);
		wiki += `<ref name="n${i}">{{lib|LU|`;
		if (data.length === 1) {
			wiki += data[0];
		} else if (data.length === 2) {
			wiki += `${data[0]}|${data[1]}`;
		} else if (data.length === 3) {
			wiki += `${data[0]}|${data[1]}|${data[2]}`;
		}
		wiki += '}}</ref> ';
		return wiki;
	};

	/**
	 * Gets a number from a reference to be able to sort them.
	 * @param {string} ref Reference to The Urantia Book.
	 * @return {number}
	 */
	refToNumber = (ref) => {
		let data = ref.split(/[:.]/g);
		data = data.map(d => parseInt(d.match(/^[^\d]*(\d+)/)[0]));
		if (data.length < 3) {
			data.push(0);
		}
		if (data.length < 3) {
			data.push(0);
		}
		return data[0] * 10000 + data[1] * 100 + data[2];
	};

	/**
	 * Extract all different references from a topic (and sort them by appearance
	 * order in The Urantia Book). The sorting is now undone.
	 * @param {Object} topic Topic.
	 * @return {Array.<string>}
	 */
	sortUniqueRefs = (topic) => {
		let refs = [];
		const addRefs = (rr) => {
			if (rr && rr.length > 0) {
				rr.filter(r => refs.indexOf(r) === -1).forEach(r => refs.push(r));
			}
		};

		addRefs(topic.refs);
		topic.lines.forEach(line => addRefs(line.refs));
		
		//For now we are not sorting references because MediaWiki by default
		// sort them by appearance order in the page and it is not possible
		// to impose an order
		// refs.sort((a, b) => this.refToNumber(a) - this.refToNumber(b));
		return refs;
	};

	/**
	 * Extracts all different link from a topic (and sort them by alphabetic order).
	 * @param {Object} topic Topic.
	 * @return {Array.<string>}
	 */
	sortUniqueSeeAlso = (topic) => {
		let seeAlso = [];
		const addSeeAlso = (sa) => {
			if (sa && sa.length > 0) {
				sa.filter(s => seeAlso.indexOf(s) === -1)
					.forEach(s => seeAlso.push(s));
			}
		};

		addSeeAlso(topic.seeAlso);
		topic.lines.forEach(line => addSeeAlso(line.seeAlso));

		seeAlso.sort((a,b) => {
			return a.toLowerCase().localeCompare(b.toLowerCase());
		});

		return seeAlso;
	};

	/**
	 * Writes the index page with topics of Topic Index in Wiki format.
	 * Name of created file is '_indice.wiki', '_index.wiki', etc. and its content
	 * must go inside the 'Manual:Dónde_puedo_aportar_contenido' page because there
	 * is explained with more detail what pages exists in Wiki and what must be
	 * revised.
	 * @param {string} dirPath Output folder.
	 * @return {Promise}
	 */
	writeIndexToWikiText = (dirPath) => {
		return new Promise((resolve, reject) => {
			const filePath = path.join(dirPath, '_indice.wiki');
			//TODO: categories names in spanish and english
			const typeTitles = [
				'Personalidades, personas, nombres de dioses, o grupos',
				'Lugares, tanto en la Tierra como en el Universo',
				'Órdenes y tipologías de seres',
				'Razas, tribus o pueblos que se han dado en la Tierra',
				'Religiones, cultos, creencias',
				'Otros términos'];
			let wiki = '';
			let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
			let curLetter = null;

			topicTypes.forEach((tt, i) => {
				wiki += `== ${typeTitles[i]} ==\r\n`;
				const topics = this.topics
					.filter(t => t.type === tt)
					.sort((a, b) => {
						if (a.name.toLowerCase() > b.name.toLowerCase()) {
							return 1;
						}
						if (a.name.toLowerCase() < b.name.toLowerCase()) {
							return -1;
						}
						return 0;
					});
				wiki += '<div style="column-count:4;-moz-column-count:4;-webkit-column-count:4">\r\n';
				topics.forEach(topic => {
					const first = topic.name.substring(0, 1).toUpperCase();
					if (letters.indexOf(first) != -1 && first != curLetter) {
						wiki += `\r\n<span style="font-size:120%; font-weight: bold;">${first}</span>\r\n`;
						curLetter = first;
					}
					const name = first + topic.name.substring(1);
					const revised = (topic.revised ? '  &diams;' : '');
					wiki += `* [[${name}]]${revised}\r\n`;
				});
				wiki += '</div>\r\n';
			});

			fs.writeFile(filePath, wiki, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});

		});
	};

	/**
	 * Writes all entries from Topic Index in JSON format from Urantia Book. 
	 * Entries are stored in a property called `links` contains an array of
	 * objects with the definition of each link to be created. Saving is done
	 * incrementally. It is not removed an existing array but it is updated
	 * with new entries if needed.
	 * @param {Book} book The Urantia Book.
	 */
	writeToJSON = (book) => {
		return new Promise((resolve, reject) => {
			this.topics.forEach(topic => {
				//Texts to search
				let names = [topic.name];
				extendArray(names, topic.altnames);
				//List of UB references in which search
				let refs = topic.refs.slice();
				topic.lines.forEach(line => extendArray(refs, line.refs));
				//Convert references in an array of distinct paragraphs
				let pars = [];
				let errors = [];
				refs.forEach(ref => {
					try {
						let ppars = book.getRefs(ref).filter(ppar => {
							return pars.find(p => {
								return (JSON.stringify(p) === JSON.stringify(ppar));
							}) == undefined;
						});
						extendArray(pars, ppars);
					} catch (er) {
						errors.push(er);
					}
				});
				if (errors.length > 0) {
					reject(errors);
					return;
				}
				//Loop through all paragraphs to search
				pars.forEach(par => {
					const parObj = book.getPar(par[0], par[1], par[2]);
					names.forEach(name => {
						//TODO:
					});
				});
			});
		});
	};

	/**
	 * Returns an error.
	 * @param  {...any} params Params.
	 * @returns {Error}
	 */
	getError = (...params) => {
		return getError(this.language, ...params);
	};

	/**
	 * Checks if the given topic name is suitable for creating a link in the
	 * given content.
	 * 
	 * In some languages can happen that a topic name collides with a common
	 * word. We must avoid creating links for them. For example: in Spanish
	 * the word `El` can be an article for masculine or a Jewish god.
	 * @param {string} name Topic name in current selected language.
	 * @param {string} content Full paragraph in which search for topic name.
	 */
	isLinkableName = (name, content) => {
		//TODO: This function now is very specific only to Spanish
		//TODO: checks if there is any single sentence starting with name
		// How to check if we have name in the middle of a sentence
		// and how to return that position when creating link
		const index = content.indexOf(name);
		if (index == -1) return false;
		//Words that cannot be found at beginning of line
		const noStartES = ['El', 'Esta', 'Sin'];
		//Words that we do not link for now because are very generic
		const excludeES = ['difícil', 'ejemplo', 'valor', 'iguales',
			'fin', 'todo', 'ser', 'gracias', 'era', 'hechos'];
		const sentences = (content.match(/[^\.!\?:]+[\.!\?:\*]+/g) || [])
			.map(r=>r.trim());
		if (this.language === 'es') {
			if (noStartES.includes(name) && 
				sentences.find(s=>s.match(new RegExp(`^[«|\\*]?${name}`)))) {
				return false;
			}
			if (excludeES.includes(name)) {
				return false;
			}
		}
		return true;
	};

	/**
	 * Filter all topics and return those with a reference that is contained
	 * within the passed reference. For example, if a topic contains the 
	 * reference `10:1.1-4` and the passed reference is `10:1.1`, then the 
	 * topic will be returned in the result.
	 * @param {number} paper Paper index.
	 * @param {number} section Section index.
	 * @param {number} par Paragraph index.
	 * @return {Array.<Object>} Objects with topics.
	 */
	filterTopicsWithRef = (paper, section, par) => {
		if (!this.ref_topics[paper]) return [];
		if (!this.ref_topics[paper][section]) return [];
		if (!this.ref_topics[paper][section][par]) return [];
		const topicNames = this.ref_topics[paper][section][par];
		return topicNames.map(n => {
			return this.topics.find(t => t.name === n);
		})
	};

	/**
	 * Filter all the topics and return those that appear inside the text
	 * of a given UB paragraph. The text must be in JSON format, with no HTML
	 * markup. Numbers are only returned if the reference matches the ones
	 * in a number.
	 * @param {string} text Paragraph text without HTML markup.
	 * @param {number} paper Paper index.
	 * @param {number} section Section index.
	 * @param {number} par Paragraph index.
	 * @param {Array.<Object>} topicNames Array in which store the names and 
	 * links for the paragraph, avoiding repetition.
	 * @param {string[]} used Array of topic names already used in previous
	 * paragraph that must be avoided.
	 * @return {Array.<Object>} Objects with topics.
	 */
	filterTopicsInParagraph = (text, paper, section, par, topicNames, used) => {
		//How to separate words in all languages??
		const words = text
			.match(/[a-z0-9áéíóúäëïöüàèìòùâêîôûñ'-]+(?:'[a-z0-9áéíóúäëïöüàèìòùâêîôûñ'-]+)*/gi);
		//TODO: Instead of a loop through all topics, a loop through words
		return this.topics.filter(t => {
			if (used.includes(t.name)) {
				return false;
			}
			const isProperNoun = ((t.name.toUpperCase()[0] === t.name[0] ||
				t.type === 'ORDER') && isNaN(parseInt(t.name)));
			const index = t.names.findIndex(n => {
				if (!this.isLinkableName(n, text) || text.indexOf(n) === -1) {
					return false;
				}
				const word = words.find(w => n.startsWith(w));
				if (!word) {
					return false;
				}
				if (!isProperNoun || !isNaN(parseInt(word))) {
					const tts = this.filterTopicsWithRef(paper, section, par);
					return tts.filter(tt => tt.names.includes(n)).length > 0;
				}
				return true;
			});
			if (index != -1) {
				extendArray(topicNames, {
					name: t.names[index], 
					link: t.links[index]
				});
			}
			return (index != -1);
		});
	};

	/** 
	 * Translates a text.
	 * @param {string} code Code of text to translate.
	 */
	tr = (code) => {
		const t = Strings[code][this.language];
		const t2 = Strings[code]['en'];
		return t ? t : t2;
	};
};

module.exports = TopicIndex;