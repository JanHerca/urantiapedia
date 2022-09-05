//Reader/Writer for a Paramony file in Markdown format (md)
//The path of this file is fixed: /input/markdown/xx/paramony/yyyy.md
//The english path contains the main tables, and the other the translations

const {app} = require('electron').remote;
const BibleAbbs = require('./abb');
const readFile = require('./utils').readFile;
const getError = require('./utils').getError;
const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const fs = require('fs');
const path = require('path');

class Paramony {
	language = 'en';
	/**
	 * @example
	 * 
	 * footnotes = [
	 *   {
	 *      paperIndex: 0,
	 *      footnotes: [
	 *         texts: [
	 *            ['God as Creator of everything', 
	 *             'God as Creator of heaven, earth']
	 *         ],
	 *         bible_refs: [
	 *            ['Gn 1:1-27; Gn 2:4-23; Ex 20:11; Neh 9:6',
	 *             'Ex 31:17; 2 Ki 19:15; 2 Ch 2:12']
	 *         ],
	 *         locations: ['0:2.12#1']
	 *      ]
	 *   },
	 *   ...
	 * ];
	 */
	footnotes = [];
	/**
	 * @example
	 * 
	 * biblebooks = [
	 *   {
	 *     titleEN: '1 Chronicles',
	 *     title: 'I Crónicas',
	 *     file: '1 Chronicles.md',
	 *     abb: '1 Cr',
	 *     refs: [
	 *       {
	 *         bible_ref: '10:1-5',
	 *         bible_chapter: 10,
	 *         bible_vers: 1,
	 *         ub_ref: '134:9.5',
	 *         text: 'Gilboa, donde murió Saúl',
	 *         type: 'C'
	 *       },
	 *       ...
	 *     ]
	 *   }
	 * ];
	 */
	biblebooks = [];
	/**
	 * @example
	 * 
	 * translations = [
	 *   {
	 *      text: 'God as Creator of everything',
	 *      translation: 'Dios como Creador de todo'
	 *   },
	 *   ...
	 * ];
	 */
	translations = [];

	noTranslated = [];

	booknamesEN = Object.values(BibleAbbs.en).map(e => e[0]);
	booknames = Object.values(BibleAbbs.en).map(e => e[0]);
	bookabbs = Object.keys(BibleAbbs.en);

	setLanguage = (language) => {
		this.language = language;
		this.booknames = Object.values(BibleAbbs[language]).map(e => e[0]);
		this.bookabbs = Object.keys(BibleAbbs[language]);
	};

	/**
	 * Clears any content read.
	 */
	clear = () => {
		this.footnotes.length = 0;
		this.biblebooks.length = 0;
		this.translations.length = 0;
		this.noTranslated.length = 0;
	};

	/**
	 * Reads the default location of the Paramony in Markdown for Urantia Book.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	readForUB = () => {
		const filePathEN = path.join(app.getAppPath(), 'input', 'markdown', 
			'en', 'paramony', 'The Urantia Book.md');
		const filePathOther = path.join(app.getAppPath(), 'input', 'markdown',
			`${this.language}`,'paramony', 'The Urantia Book.md');
		return new Promise((resolve, reject) => {
			this.footnotes.length = 0;
			this.translations.length = 0;
			readFile(filePathEN)
				.then(linesEN => this.readFileEN('The Urantia Book', linesEN))
				.then(() => {
					return (this.language === 'en' ? Promise.resolve(null) :
						readFile(filePathOther));
				})
				.then(linesOther => {
					if (linesOther) {
						this.readFileOther('The Urantia Book', linesOther);
					}
					resolve(null);
				})
				.catch(reject);
		});
	};

	/**
	 * Reads the default location of the Paramony in Markdown for Bible.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	readForBible = () => {
		const bookNames = this.booknamesEN.filter(name => {
			const filePathEN = path.join(app.getAppPath(), 'input', 'markdown',
				'en', 'paramony', `${name}.md`);
			return fs.existsSync(filePathEN);
		});
		const filePathOtherUB = path.join(app.getAppPath(), 'input', 'markdown',
			`${this.language}`,'paramony', 'The Urantia Book.md');
		const filePathOtherBible = path.join(app.getAppPath(), 'input', 
			'markdown', `${this.language}`, 'paramony', 'Bible.md');
		return new Promise((resolve, reject) => {
			this.biblebooks.length = 0;
			this.translations.length = 0;
			this.noTranslated.length = 0;
			const promises = bookNames.map(name => {
				const promise = new Promise((resolve2, reject2) => {
					const filePathEN = path.join(app.getAppPath(), 'input', 
						'markdown', 'en', 'paramony', `${name}.md`);
					readFile(filePathEN)
						.then(linesEN => this.readFileEN(name, linesEN))
						.then(resolve2)
						.catch(reject2);
				});
				return reflectPromise(promise);
			});
			Promise.all(promises)
				.then(results => {
					const errors = [];
					results.forEach(r => extendArray(errors, r.error));
					if (errors.length === 0) {
						return (this.language === 'en' ? Promise.resolve(null) :
							Promise.all([readFile(filePathOtherUB),
								readFile(filePathOtherBible)]));
					}
					return Promise.reject(errors);
				})
				.then(linesAr => {
					if (linesAr) {
						const lines = [...linesAr[0], ...linesAr[1]];
						this.readFileOther('Bible', lines);
					}
					resolve(null);
				})
				.catch(reject);;
		});
	};

	/**
	 * Read the file of a book in English.
	 * @param {string} bookFileName Book file name in English, as 
	 * `The Urantia Book`, `1 Chronicles`, etc.
	 * @param {string[]} lines Lines.
	 * @returns {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	readFileEN = (bookFileName, lines) => {
		return new Promise((resolve, reject) => {
			const errors = [];
			let comment = false;
			const bookIndex = this.booknamesEN.indexOf(bookFileName);
			const addError = (code, i) => {
				errors.push(this.getError(code, bookFileName + '.md', i));
			};
			lines.forEach((line, i) => {
				if (!comment && line.startsWith('<!--')) {
					comment = true;
				}
				if (!comment && line.indexOf('|') != -1) {
					const values = line.trim()
						.replace(/^\||\|$/g, '')
						.split('|').map(v => v.trim());
					if (bookFileName === 'The Urantia Book') {
						//Case of Urantia Book
						if (values.length >= 5 && values[0] != 'num' && 
							values[0].indexOf('---') === -1) {
							const num = parseInt(values[0]);
							const pos = parseInt(values[1]);
							const index = parseInt(values[2].split(':')[0]);
							let paper = this.footnotes
								.find(p => p.paperIndex === index);
							if (!paper) {
								paper = {
									paperIndex: index,
									footnotes: {
										texts: [],
										bible_refs: [],
										locations: []
									}
								};
								this.footnotes.push(paper);
							}
							if (!paper.footnotes.texts[num]) {
								paper.footnotes.texts[num] = [];
							}
							if (!paper.footnotes.bible_refs[num]) {
								paper.footnotes.bible_refs[num] = [];
							}
							paper.footnotes.texts[num][pos] = values[3];
							paper.footnotes.bible_refs[num][pos] = values[4];
							paper.footnotes.locations[num] = values[2];
						}
					} else if (bookIndex != -1) {
						//Case of Bible book
						if (values.length >= 6 && values[0] != 'book' &&
							values[0].indexOf('---') === -1) {
							const bookName = values[0];
							let bible_ref = values[1];
							const par_pageref = values[2];
							const par_ref = values[3];
							const text = values[4];
							const type = values[5];
							let book = this.biblebooks
								.find(b => b.titleEN === bookFileName);
							let data2, data3, chapter, vers, ref;
							if (!book) {
								book = {
									titleEN: bookFileName,
									title: this.booknames[bookIndex],
									abb: this.bookabbs[bookIndex],
									file: bookFileName + '.md',
									refs: []
								};
								this.biblebooks.push(book);
							}
	
							data2 = bible_ref.split(':');
							data3 = par_ref.split('/');
							if (data2.length < 2) {
								addError('bibleref_bad_ref', i);
							} else if (data3.length != 2) {
								addError('bibleref_bad_ub_ref', i);
							} else {
								chapter = parseInt(data2[0]);
								vers = this.extractVers(data2[1]);
								if (vers === 'all') {
									bible_ref = chapter.toString();
									vers = 1;
								}
								if (chapter === 0 || vers === 0 || isNaN(chapter) || vers == null) {
									addError('bibleref_bad_number', i);
								} else {
									ref = {
										bible_ref: bible_ref,
										bible_chapter: chapter,
										bible_vers: vers,
										lu_ref: data3[0],
										text: text,
										type: type
									};
									book.refs.push(ref);
								}
							}
						}
					}
				}
				if (comment && line.trim().endsWith('-->')) {
					comment = false;
				}
			});
			if (errors.length > 0) {
				reject(errors);
				return
			}
			resolve(null);
		});
	};

	/**
	 * Read the file in a language other than English.
	 * @param {string} type Type of Paramony, `The Urantia Book` or `Bible`.
	 * @param {string[]} lines Lines.
	 */
	readFileOther = (type, lines) => {
		let comment = false;
		lines.forEach(line => {
			if (!comment && line.startsWith('<!--')) {
				comment = true;
			}
			if (!comment && line.indexOf('|') != -1) {
				const values = line.trim()
					.replace(/^\||\|$/g, '')
					.split('|').map(v => v.trim());
				if (values.length == 2 &&
					values[0] != 'text' && 
					values[0].indexOf('---') === -1) {
					this.translations.push({
						text: values[0],
						translation: values[1]
					});
				}
			}
			if (comment && line.trim().endsWith('-->')) {
				comment = false;
			}
		});
		if (type === 'The Urantia Book') {
			this.footnotes.forEach(paper => {
				paper.footnotes.texts.forEach(textAr => {
					const newAr = textAr.map(text => {
						const tr = this.translations.find(t => t.text === text);
						return (tr ? tr.translation : text);
					});
					newAr.forEach((text,i) => {
						textAr[i] = text;
					});
				});
				paper.footnotes.bible_refs.forEach(refsAr => {
					const newAr = refsAr.map(refs => {
						const fs = refs.split(';')
							.map(n=> n.trim().replace(/^:|\.$/g, '').trim())
							.map(n => this.translateBibleRef(n)).join('; ');
						return fs;
					});
					newAr.forEach((refs,i) => {
						refsAr[i] = refs;
					});
				});
			});
		} else if (type === 'Bible') {
			this.biblebooks.forEach(book => {
				book.refs.forEach(ref => {
					const tr = this.translations.find(t => t.text === ref.text);
					if (tr) {
						ref.text = tr.translation;
					} else {
						this.noTranslated.push({
							titleEN: book.titleEN,
							bible_ref: ref.bible_ref,
							lu_ref: ref.lu_ref,
							text: ref.text
						});
					}
				});
			});
		}
	};

	/**
	 * Reads the default location of the Paramony in JSON.
	 * Files are called `footnotes-book-xx.json`.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	readFromJSON = () => {
		const filePath = path.join(app.getAppPath(), 
			`input/json/footnotes-book-${this.language}.json`);
		return new Promise((resolve, reject) => {
			if (!fs.existsSync(filePath)) {
				reject([this.getError('file_not_exists', filePath)]);
				return;
			}
			this.footnotes.length = 0;
			fs.readFile(filePath, (errFile, buf) => {
				if (errFile) {
					reject([errFile]);
					return;
				}
				const content = buf.toString();
				try {
					const obj = JSON.parse(content);
					this.footnotes = obj.content;
					resolve(null);
				} catch (err) {
					reject([err]);
				}
			});
		});
	};

	/**
	 * Write the Paramony in Markdown to the default location.
	 * @param {string} bookFileName Book file name, as `The Urantia Book`, 
	 * `1 Chronicles`, etc.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	writeToMarkdown = (bookFileName) => {
		const filePath = path.join(app.getAppPath(), 
			`input/markdown/${this.language}/paramony/${bookFileName}.md`);
		return new Promise((resolve, reject) => {
			let md = '', error;
			if (bookFileName === 'The Urantia Book') {
				md += '| num | pos | location | text | bible_ref |\r\n';
				md += '| --- | --- | --- | --- | --- |\r\n';
				this.footnotes.forEach(paper => {
					const footnotes = paper.footnotes;
					if (!footnotes) {
						error = this.getError('book_error_footnotes', filePath, 
							`No footnotes for paper ${paper.paperIndex}.`);
						return;
					}
					const texts = footnotes.texts;
					const bible_refs = footnotes.bible_refs;
					const locations = footnotes.locations;
					if (!Array.isArray(texts) || !Array.isArray(bible_refs) ||
						!Array.isArray(locations) || 
						texts.length != bible_refs.length ||
						texts.length != locations.length) {
						error = this.getError('book_error_footnotes', filePath, 
							`Footnotes items not arrays or not same length` +
							` in paper ${paper.paperIndex}.`);
						return;
					}
					texts.forEach((textAr, i) => {
						const refsAr = bible_refs[i];
						const location = locations[i];
						if (!Array.isArray(textAr)) {
							error = this.getError('book_error_footnotes', 
								filePath, `Text not array on paper` +
								` ${paper.paperIndex}.`);
							return;
						}
						if (!Array.isArray(refsAr)) {
							error = this.getError('book_error_footnotes', 
								filePath, `Bible refs not array on paper` +
								` ${paper.paperIndex}.`);
							return;
						}
						if (textAr.length != refsAr.length) {
							error = this.getError('book_error_footnotes', 
								filePath, `Texts and refs not same length` +
								` on paper ${paper.paperIndex}.`);
							return;
						}
						textAr.forEach((text, j) => {
							md += `| ${i} | ${j} | ${location} | ${text} | ${refsAr[j]} |\r\n`;
						});
					});
				});
			}
			if (error) {
				reject([error]);
				return;
			}
			fs.writeFile(filePath, md, 'utf-8', (err) => {
				if (err) {
					reject([err]);
					return;
				}
				resolve(null);
			});
		});
	};

	/**
	 * Translates the current ref in English to current language.
	 * @param {string} ref Bible ref.
	 * @return {string}
	 */
	translateBibleRef = (ref) => {
		let abb, abb2;
		for (abb in BibleAbbs.en) {
			if (ref.startsWith(`${abb} `)) {
				const path = `/${this.language}` + BibleAbbs.en[abb][1];
				for (abb2 in BibleAbbs[this.language]) {
					if (BibleAbbs[this.language][abb2][1] === path) {
						return ref.replace(abb, abb2);
					}
				}
			}
		}
		return ref;
	};

	/**
	 * Extracts the first verse in the reference for verses.
	 * @param {string} text Text with the verses portion.
	 * @return {?number} The number of the first verse or null if not found.
	 */
	extractVers = (text) => {
		let num = '', i = 0;
		if (text.length === 0) {
			return null;
		} else if (text === 'all') {
			return text;
		}
		while(!isNaN(text[i])) {
			num += text[i];
			i++;
		}
		return (isNaN(parseInt(num)) ? null : parseInt(num));
	};

	/**
	 * Returns an error.
	 * @param  {...any} params Params. First param must be a string or a template
	 * for the rest of the params.
	 * @returns {Error}
	 */
	getError = (...params) => {
		return getError(this.language, ...params);
	};

};

module.exports = Paramony;