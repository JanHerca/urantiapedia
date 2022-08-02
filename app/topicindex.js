//Reader/Writer to convert Uversa Press topic index to Wiki


const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const readFrom = require('./utils').readFrom;
const testWords = require('./utils').testWords;
const strformat = require('./utils').strformat;
const readFile = require('./utils').readFile;
const getWikijsHeader = require('./utils').getWikijsHeader;
const fixWikijsHeader = require('./utils').fixWikijsHeader;
const getWikijsBookRefLink = require('./utils').getWikijsBookRefLink;
const getError = require('./utils').getError;
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
	 *      altnames: ['angel', 'the angels'],
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
	 *      links: [https://en.wikipedia.org/wiki/Angels],
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
	 * read. Those out of the letter are ignored. To read all use `ALL`.
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
	 * be read. Those out the category are ignored. To read all use 'ALL' and 
	 * to read none 'NONE'.
	 * @param {string} letter Letter of topics from Topic Index that must be
	 * read. Those out of the letter are ignored. To read all use `ALL`.
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
					let data, texts, refs, seeAlso, level;
					const tline = line.trim();
					const err = this.getError('topic_err', baseName, i+1, tline);
					if (line.startsWith('<')) {
						return;
					}
					level = line.split(/\t/g).findIndex(a => a != '');
					data = tline.split('|').map(i => i.trim());
					
					if (current && tline === '') {
						//End line of an entry
						if (category === 'ALL' || category === current.type) {
							this.topics.push(current);
						}
						current = null;
					} else if (current && tline.length > 0 && tline.startsWith('>')) {
						//Line of entry with a link
						if (!current.links) {
							current.links = [];
						}
						current.links.push(tline.substring(1).trim());
					} else if (current && tline.length > 0) {
						//Line of entry without a link (any other line)
						topicline = {
							text: '',
							level: level,
							fileline: i + 1
						};

						if (data.length === 0) {
							errors.push(err);
						} else if (data.length === 1) {
							texts = tline.split(/\([^)]*\)/g)
								.filter(i => i.trim() != '')
								.map(i => i.trim());
								// .map(i => i.trim().replace(/^\.|\.$/g, '').trim());
							refs = this.extractRefs(tline);
							
							if (texts.length === 0) {
								errors.push(err);
							} else {
								topicline.text = texts[0];
								topicline.seeAlso = [];
								topicline.refs = refs;
							}
							current.lines.push(topicline);
						} else if (data.length === 2) {
							texts = data[0].split(/\([^)]*\)/g)
								.filter(i => i.trim() != '')
								.map(i => i.trim());
								// .map(i => i.trim().replace(/^\.|\.$/g, '').trim());
							refs = this.extractRefs(data[0]);
							if (texts.length === 0) {
								errors.push(err);
							} else {
								topicline.text = texts[0];
								topicline.seeAlso = data[1].split(';')
									.filter(i => i.trim() != '')
									.map(s => s.trim());
								topicline.refs = refs;
							}
							current.lines.push(topicline);
						} else {
							errors.push(err);
						}
					} else if (!current && tline.length > 0) {
						//First line of an entry
						if (data.length === 0) {
							errors.push(err);
						} else if (data.length === 5) {
							if (data[1].startsWith('(') && data[1].endsWith(')')) {
								refs = data[1].split(/[()]/g)
									.filter(i => i.replace(/\s+/, '') != '');
							}
							seeAlso = data[2].split(';')
								.filter(i => i.trim() != '')
								.map(s => s.trim());
							current = {
								name: data[0].split(';')[0].trim(),
								altnames: data[0].split(';').slice(1).map(a=>a.trim()),
								lines: [],
								type: (data[3] === '' ? 'OTHER' : data[3]),
								revised: (data[4] === '' ? false : true),
								sorting: baseName + ':' + (i + 1).toString().padStart(5, '0'),
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
				'<' + '_'.repeat(82),
				'<',
				'<' + ' '.repeat(21) + (letter === '_' ? 'NUMBER' : letter.toUpperCase()),
				'< Urantia Book Uversa Press Topical index converted to text file',
				'< Each entry has a previous blank line',
				'< Entry = Name | Refs | See also | Category | OK (= revised)',
				'< An entry can have one or several sub-entries (= the lines after entry)',
				'< A sub-entry can have sub-sub-entries with tabs and so on',
				'< Help: https://urantiapedia.org/en/help/github#translation-and-' +
					'review-of-the-topic-index-from-english-to-target-language',
				'<' + '_'.repeat(82)
			].join('\r\n') + '\r\n\r\n';
			//Search for topics and loop through them
			const topics = this.topics
				.filter(t => t.filename === fileName)
				.sort((a, b) => {
					if (a.sorting > b.sorting) return 1;
					if (a.sorting < b.sorting) return -1;
					return 0;
				});;
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
						(topic.links == undefined || topic.links.length === 0));
					const linedata = [
						line.text, 
						line.refs.map(r => `(${r})`).join(' '),
						(line.seeAlso.length > 0 ? '| ' : '') + line.seeAlso.join('; ')
					].filter(ld => ld != '');
					txt += '\t'.repeat(line.level) + linedata.join(' ');
					txt += (lastTopic && lastLine ? '' : '\r\n');
				});
				if (topic.links) {
					topic.links.forEach((link, j) => {
						const lastLink = (j === topic.links.length - 1);
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
	 * Extracts references from a text.
	 * @param {string} text Text.
	 * @return {Array.<string>}
	 */
	extractRefs = (text) => {
		return text.replace(/[^()](?=([^()]*\([^()]*\))*[^()]*$)/g, '')
			.split(/[()]/g)
			.filter(i => i.trim() != '');
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
	 */
	check = (book) => {
		return new Promise((resolve, reject) => {
			this.topics.forEach(t => this.checkTopic(t, book));
			resolve(true);
		});
	};

	/**
	 * Checks a topic, writing errors in it.
	 * @param {Object} topic Topic.
	 * @param {Book} book The Urantia Book object.
	 */
	checkTopic = (topic, book) => {
		topic.errors = [];
		//Checking duplicates
		const other = this.topics.filter(tt => tt != topic && tt.name === topic.name);
		if (other.length > 0) {
			const errors = other.map(tt => 
				`${tt.name}|${tt.filename}:${tt.fileline}`).join(' ');
			topic.errors.push({
				desc: Strings['topic_duplicated'][this.language] + errors,
				fileline: topic.fileline
			});
		}

		//Checking refs
		this.checkRefs(topic, book);

		//Checking own names in the paragraphs
		const firstLetter = topic.name.substring(0, 1);
		const isUpperCase = (firstLetter === firstLetter.toUpperCase());
		if (isUpperCase) {
			this.checkNamesInPars(topic, book);
		}

		//Checking links to other topics
		this.checkSeeAlso(topic.seeAlso, topic.fileline, topic.errors);
		topic.lines.forEach(line => {
			this.checkSeeAlso(line.seeAlso, line.fileline, topic.errors);
		});
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
					desc: Strings['topic_invalid_refs'][this.language] + 
						invalid.join(' | '),
					fileline: fileline
				});
			}
		};
		fnRefs(topic.refs, topic.fileline);
		topic.lines.forEach(line => fnRefs(line.refs ? line.refs : [], line.fileline));
	};

	/**
	 * Checks the if own names are found in any parragraph of Urantia Book. If
	 * any name is not found in any parragraph or the times founded is less than
	 * a 20% adds an error in an array of error objects (with desc and fileline).
	 * This function require a previous call to checkRefs.
	 * @param {Object} topic Topic.
	 * @param {Book} book The Urantia Book object.
	 */
	checkNamesInPars = (topic, book) => {
		const names = [topic.name.split('(')[0].trim()];
		extendArray(names, topic.altnames);
		const refs = topic.refs.slice();
		topic.lines.forEach(line => extendArray(refs, line.refs));
		if (refs.length === 0) return;
		//Filter valid refs
		const validRefs = refs.filter(ref => 
			topic.errors.find(er => er.desc.indexOf(ref) != -1) == undefined);
		const validArRefs = book.getArrayOfRefs(validRefs);
		const notfounded = validArRefs.filter(validArRef => {
			const par = book.getPar(validArRef[0], validArRef[1], validArRef[2]);
			return (par == null || !testWords(names, par.par_content));
		}).map(r => `${r[0]}:${r[1]}.${r[2]}`);

		if (notfounded.length === validArRefs.length) {
			topic.errors.push({
				desc: strformat(Strings['topic_not_in_ref'][this.language], 
					topic.name, notfounded.join(' | ')),
				fileline: topic.fileline
			});
		} else if (notfounded.length / validArRefs.length > 0.8) {
			topic.errors.push({
				desc: strformat(Strings['topic_in_less_20%'][this.language], 
					topic.name, notfounded.join(' | ')),
				fileline: topic.fileline
			});
		}
	};

	/**
	 * Checks an array of links to other topics and add errors in an array
	 * of error objects (with desc and fileline).
	 * @param {Array.<string>} seeAlso Array of links to other topics.
	 * @param {number} fileline Line number.
	 * @param {Array.<Object>} errors Array for the errors.
	 */
	checkSeeAlso = (seeAlso, fileline, errors) => {
		if (seeAlso && seeAlso.length > 0) {
			seeAlso.forEach(sa => {
				const term = sa.split(':')[0];
				if (!this.topics.find(t => t.name === term)) {
					errors.push({
						desc: strformat(
							Strings['topic_seealso_not_found'][this.language], sa),
						fileline: fileline
					});
				}
				//TODO: check if seeAlso anchors point to topic 1st level headers
			});
		}
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
	 * @param {?TopicIndex} topicIndexEN An optional Topic Index in english. If
	 * current language is english then this is not required. If it is not english
	 * then this param is required.
	 * @return {Promise}
	 */
	writeToWikijs = (dirPath, topicIndexEN) => {
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
				const promises = this.topics.map(topic => {
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
					const p = this.writeFileToWikijs(filePath, topic, topicEN,
						tiNames);
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
			const seeAlsoTxt = Strings['topic_see_also'][this.language];
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
			

			html2 += getWikijsHeader(title, tags);
			html2 += '\r\n';
			// html += `<h1>${title}</h1>\r\n`;

			// const end = '\r\n\r\n';
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
				
				let subcontent = content.replace(/^[#|\*]*/g,'').trim();
				subcontent = subcontent.substring(0, 1).toUpperCase() + 
						subcontent.substring(1);
				
				if (nextline && level < nextlevel) {
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
					} else if (i === 0 || 
						(prevline && level != prevlevel) ||
						(prevline && level === prevlevel /*&& marks.length === 0*/ && prevMarks.length > 0) ||
						large) {
						//Add start of paragraph
						html += '<p>';
					}

					//Add links to internal topics
					const nameslinks = [];
					const words = subcontent
						.match(/[a-z0-9áéíóúüñ'-]+(?:'[a-z0-9áéíóúüñ'-]+)*/gi);
					tiNames.forEach(nn => {
						if (nn.name === topic.name) return;
						nn.names.forEach(n => {
							if (subcontent.indexOf(n) != -1 && nn.nameEN &&
								words.find(w => n.startsWith(w))) {
								const ln = nn.nameEN.replace(/\s/g, '_');
								if (nameslinks.find(i=>i.name === n) == undefined)  {
									nameslinks.push({
										name: n,
										link: `<a href="${tpath}/${ln}">${n}</a>`
									});
								}
							}
						});
					});
					if (nameslinks.length > 0) {
						//Order using longest topic names before
						nameslinks.sort((a,b) => b.name.length - a.name.length);
						subcontent = replaceWords(nameslinks.map(i=>i.name),
						nameslinks.map(i=>i.link), subcontent);
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

			//Add Links
			if (seeAlsoObjs && seeAlsoObjs.length > 0) {
				html += `<h2>${Strings['topic_links'][this.language]}</h2>\r\n`;
				html += '<div>\r\n<ul>\r\n';
				seeAlsoObjs.forEach(alsoObj => {
					const alsoName = alsoObj.seeAlso;
					const alsoNameEN = alsoObj.seeAlsoEN;
					const alsoLink = alsoNameEN.replace(/ /g, '_').replace(/:/, '#');
					const alsoText = alsoName.substring(0, 1).toUpperCase() + 
						alsoName.substring(1);
					html += `<li><a href="${tpath}/${alsoLink}">${alsoText}</a></li>\r\n`;
				});
				html += '</ul>\r\n</div>\r\n';
			}
			
			//Add External Links
			if (topic.links && topic.links.length > 0) {
				html+= `<h2>${Strings['topic_external_links'][this.language]}</h2>\r\n`;
				html += '<div>\r\n<ul>\r\n';
				topic.links.forEach(link => {
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
				html += `<h2>${Strings['topic_references'][this.language]}</h2>\r\n`;
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
		const emojiDone = '<img draggable="false" alt="☑️" src="/_assets/svg/twemoji/2611.svg" class="emoji">';
		const emojiTodo = '<img draggable="false" alt="🔳" src="/_assets/svg/twemoji/1f533.svg" class="emoji">';
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
			const title = Strings[`topicIndexTitle_${category}`][this.language];
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
				// const revised = (topic.revised ? '  &diams;' : '');
				const revised = (topic.revised ? emojiDone : emojiTodo);
				const lan = (this.language === 'en' ? '' : '/' + this.language);
				const href = `${lan}/topic/${pagename}`;
				html += `\t<div>${revised} <a href="${href}">${topic.name}</a></div>\r\n`;
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
				wiki += Strings['topic_see_also'][this.languge] + ': ' + 
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
						wiki += Strings['topic_see_also'][this.languge] + ': ' + 
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
				wiki += `${end}== ${Strings['topic_links'][this.language]} ==${end}`;
				seeAlso.forEach(also => {
					let alsoLink = also.replace(/ /g, '_').replace(/:/, '#');
					let alsoText = also.substring(0, 1).toUpperCase() + 
						also.substring(1);
					wiki += `* [[${alsoLink}|${alsoText}]]\r\n`;
				});
			}
			
			//Add External Links
			if (topic.links && topic.links.length > 0) {
				wiki+= `${end}== ${Strings['topic_external_links'][this.language]} ==${end}`;
				topic.links.forEach(link => {
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
				wiki += `${end}== ${Strings['topic_references'][this.language]} ==` +
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
	 * Entries are stores in a property called `links` contains an array of
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
				//List of book references in which search
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
};

module.exports = TopicIndex;