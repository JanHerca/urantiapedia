//Reader/Writer to convert Uverse Press topic index to *.wiki


const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const readFrom = require('./utils').readFrom;
const testWords = require('./utils').testWords;
const strformat = require('./utils').strformat;
const fs = require('fs');
const path = require('path');
const Strings = require('./strings');

class TopicIndex {
	/**
	 * @example
	 * topics = [
	 *   {
	 *      name: 'ángeles',
	 *      altnames: ['ángel', 'los ángeles'],
	 *      lines: [
	 *        {
	 *           text: 'personalidades del Espíritu Infinito',
	 *           level: 0,
	 *           seeAlso: ['personalidades'],
	 *           refs: ['30:2.82'],
	 *           fileline: 1295
	 *        },
	 *        {
	 *          ...
	 *        }
	 *      ],
	 *      seeAlso: ['Espíritu Infinito:familia'],
	 *      links: [https://es.wikipedia.org/wiki/Ángeles],
	 *      refs: ['26:1'],
	 *      type: 'ORDEN',
	 *      revised: 'NO',
	 *      sorting: 'a.txt:01294',
	 *      filename: 'a.txt',
	 *      fileline: 1294,
	 *      errors: [
	 *         {
	 *            desc: 'seeAlso personalidades no encontrado',
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
	 * Reads Topic Index files in TXT format from a folder.
	 * @param {string} dirPath Input folder.
	 * @param {string} category Category of topics from Topic Index that must
	 * be read. Those out the categy are ignored. To read all use 'TODOS' or 'ALL'.
	 * @return {Promise}
	 */
	readFromTXT = (dirPath, category) => {
		return readFrom(dirPath, '.txt', this.clear, 
			this.readFileFromTXT.bind(this, category), this);
	};

	/**
	 * Clears objects stores in the Topic Index.
	 */
	clear = () => {
		this.topics = [];
	};

	/**
	 * Reads a TXT file from Topic Index.
	 * @param {string} category Category of topics from Topic Index that must
	 * be read. Those out the category are ignored. To read all use 'ALL' and 
	 * to read none 'NONE'.
	 * @param {string} filePath TXT file path from Topic Index.
	 * @return {Promise}
	 */
	readFileFromTXT = (category, filePath) => {
		const baseName = path.basename(filePath);
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
					let data, refs, seeAlso, level;
					const tline = line.trim();
					const err = this.getError('topic_err', baseName, i+1, tline);
					if (line.startsWith('#')) {
						return;
					}
					level = line.split(/\t/g).findIndex(a => a != '');
					data = tline.split('|').map(i => i.trim());
					
					if (current && tline === '') {
						if (category === 'ALL' || category === current.type) {
							this.topics.push(current);
						}
						current = null;
					} else if (current && tline.length > 0 && tline.startsWith('>')) {
						if (!current.links) {
							current.links = [];
						}
						current.links.push(tline.substring(1).trim());
					} else if (current && tline.length > 0) {
						topicline = {
							text: '',
							level: level,
							fileline: i + 1
						};

						if (data.length === 0) {
							errors.push(err);
						} else if (data.length === 1) {
							data = tline.split(/\([^)]*\)/g)
								.filter(i => i.trim() != '')
								.map(i => i.trim().replace(/^\.|\.$/g, '').trim());
							refs = this.extractRefs(tline);
							
							if (data.length === 0) {
								errors.push(err);
							} else {
								if (data[0].indexOf('Ver ') != -1) {
									errors.push(err);
								} else {
									topicline.text = data[0];
									topicline.seeAlso = [];
									topicline.refs = refs;
									current.lines.push(topicline);
								}
							}
						} else if (data.length === 2) {
							topicline.text = data[0];
							if (data[1].startsWith('Ver ')) {
								topicline.seeAlso = data[1].substring(4).split(';')
									.map(s => s.trim());
								topicline.refs = [];
							} else {
								topicline.seeAlso = [];
								topicline.refs = this.extractRefs(data[1]);
							}
							current.lines.push(topicline);
						} else if (data.length === 3) {
							if (!data[1].startsWith('Ver ')) {
								errors.push(err);
							} else {
								topicline.text = data[0];
								topicline.seeAlso = data[1].substring(4).split(';')
									.map(s => s.trim());
								topicline.refs = this.extractRefs(data[2]);
								current.lines.push(topicline);
							}
						} else {
							errors.push(err);
						}
					} else if (!current && tline.length > 0) {
						if (data.length === 0) {
							errors.push(err);
						} else if (data.length === 5) {
							if (data[1].startsWith('(') && data[1].endsWith(')')) {
								refs = data[1].split(/[()]/g).filter(i => i.trim() != '' &&
									i.trim().length > 2);
							}
							if (data[2].startsWith('Ver ')) {
								seeAlso = data[2].substring(4).split(';').map(s => s.trim());
							}
							current = {
								name: data[0].split(';')[0].trim(),
								altnames: data[0].split(';').slice(1).map(a=>a.trim()),
								lines: [],
								type: (data[3] === '' ? 'OTHER' : data[3]),
								revised: (data[4] === '' ? 'NO' : 'SI'),
								sorting: baseName + ':' + (i + 1).toString().padStart(5, '0'),
								filename: baseName,
								fileline: i + 1
							};
							current.seeAlso = (seeAlso ? seeAlso : []);
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
	 * Gets an object containing a summary with the number of topics of each
	 * type and totals, as well as redirects number.
	 * @return {Object}
	 */
	getSummary = () => {
		const letters = '_abcdefghijklmnopqrstuvwxyz';
		const types = ['PERSONA', 'LUGAR', 'ORDEN', 'RAZA', 'RELIGION', 'OTRO'];
		const etypes = ['PERSON', 'PLACE', 'ORDER', 'RACE', 'RELIGION', 'OTHER']
		let result = {};
		letters.split('').forEach(letter => {
			let obj = {};
			let objLines = {};
			let totalLines = 0;
			const tt = this.topics.filter(t => t.filename === letter + '.txt');
			obj.TOTAL = tt.length;
			//Categories
			types.forEach((type, i) => {
				const tf = tt.filter(t => t.type === type || t.type === etypes[i]);
				let lines = 0;
				tf.forEach(t => lines += t.lines.length);
				obj[type] = tf.length;
				objLines[type] = lines;
				totalLines += lines;
			});
			//Redirects
			obj.REDIREC = tt.filter(t => t.lines.length === 0).length;
			objLines.REDIREC = obj.REDIREC;
			totalLines += obj.REDIREC;
			//Revised
			let revLines = 0;
			const tr = tt.filter(t => t.revised === 'SI');
			tr.forEach(t => revLines += t.lines.length);
			objLines.REVISADO = revLines;
			obj.REVISADO = tr.length;
			//Totals
			objLines.TOTAL = totalLines;
			result[letter] = obj;
			result[letter].lines = objLines;
		});
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
				const errs = t.errors.map(e => `${t.filename}:${e.fileline} > ${e.desc}`);
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
			this.topics.forEach(t => {
				t.errors = [];
				//Checking duplicates
				const other = this.topics.filter(tt => tt != t && tt.name === t.name);
				if (other.length > 0) {
					const errors = other.map(tt => 
						`${tt.name}|${tt.filename}:${tt.fileline}`).join(' ');
					t.errors.push({
						desc: Strings['topic_duplicated'][this.language] + errors,
						fileline: t.fileline
					});
				}
				//Checking redirects
				if (t.isRedirect && t.seeAlso.length > 1) {
					t.errors.push({
						desc: Strings['topic_many_see'][this.language],
						fileline: t.fileline
					});
				}
				//Checking own names in the paragraphs
				const firstLetter = t.name.substring(0, 1);
				const isUpperCase = (firstLetter === firstLetter.toUpperCase());
				if (isUpperCase /*&& t.revised === 'NO'*/) {
					let names = [t.name.split('(')[0].trim()];
					extendArray(names, t.altnames);
					// const exps = names.map(n => 
					// 	'\\b' + n.replace(/^[áéíóú]/i,'.').replace(/[áéíóú]$/i, '.') + '\\b'
					// ).join('|');
					// const regex = new RegExp(exps, 'g');
					let refs = t.refs.slice();
					let invalid = [];
					t.lines.forEach(line => extendArray(refs, line.refs));
					const notFound = refs.filter(ref => {
						let refsToFind = null;
						try {
							refsToFind = book.getRefs(ref);
						} catch (err) {
							invalid.push(ref);
						}
						let founded = false;
						if (refsToFind) {
							founded = (refsToFind.find(r => {
								const par = book.getPar(r[0], r[1], r[2]);
								if (!par) {
									invalid.push(ref);
								}
								// return (par && regex.test(par.par_content));
								return (par && testWords(names, par.par_content));
							}) != null);
						}
						return !founded;
					});
					if (invalid.length > 0) {
						t.errors.push({
							desc: Strings['topic_invalid_refs'][this.language] + 
								invalid.join('|'),
							fileline: t.fileline
						});
					}
					if (refs.length > 0 && notFound.length === refs.length) {
						t.errors.push({
							desc: strformat(Strings['topic_not_in_ref'][this.language],
								t.name, notFound.join('|')),
							fileline: t.fileline
						});
					}
				}
				//Checking links to other topics
				this.checkSeeAlso(t.seeAlso, t.fileline, t.errors);
				t.lines.forEach(line => {
					this.checkSeeAlso(line.seeAlso, line.fileline, t.errors);
				});
			});
			resolve(true);
		});
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
						desc: `seeAlso '${sa}' no encontrado`,
						fileline: fileline
					});
				}
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
				const topicTypes = [
					'PERSONA', 'LUGAR', 'ORDEN', 'RAZA', 'RELIGION', 'OTRO'];

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
	// Wiki
	//***********************************************************************

	/**
	 * Writes all entries in Topic Index in Wiki format.
	 * Also creates an archive 'Dónde_puedo_aportar_contenido.wiki' to fill that
	 * page easily.
	 * @param {string} dirPath Carpeta de salida.
	 * @return {Promise}
	 */
	writeToWiki = (dirPath) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([new Error(`El directorio ${baseName} no está accesible`)]);
					return;
				}
				const promises = this.topics.map(topic => {
					const name = topic.name.substring(0, 1).toUpperCase() +
						topic.name.substring(1);
					let filePath = path.join(dirPath, `${name}.wiki`);
					let p = this.writeFileToWiki(filePath, topic);
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
	writeFileToWiki = (filePath, topic) => {
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
	 * @param {string} ref Refernce to The Urantia Book.
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
	writeIndexToWiki = (dirPath) => {
		return new Promise((resolve, reject) => {
			const filePath = path.join(dirPath, '_indice.wiki');
			//TODO: categories in spanish and english
			const topicTypes = [
				'PERSONA', 'LUGAR', 'ORDEN', 'RAZA', 'RELIGION'/*, 'OTRO'*/];
			//TODO: categories names in spanish and english
			const typeTitles = [
				'Personalidades, personas, nombres de dioses, o grupos',
				'Lugares, tanto en la Tierra como en el Universo',
				'Órdenes y tipologías de seres',
				'Razas, tribus o pueblos que se han dado en la Tierra',
				'Religiones, cultos, creencias'/*,
			'Otros términos'*/];
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
					const revised = (topic.revised === 'NO' ? '' : '  &diams;');
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
		const msg = params[0];
		return new Error(
			strformat(Strings[msg][this.language], ...params.slice(1)));
	};
};

module.exports = TopicIndex;