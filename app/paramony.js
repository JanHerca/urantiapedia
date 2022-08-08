//Reader/Writer for a Paramony file in Markdown format (md)
//The path of this file is fixed: /input/markdown/xx/paramony/yyyy.md
//The english path contains the main tables, and the other the translations

const {app} = require('electron').remote;
const BibleAbbs = require('./abb');
const readFile = require('./utils').readFile;
const getError = require('./utils').getError;
const fs = require('fs');
const path = require('path');

class Paramony {
	language = 'en';
	footnotes = [];
	translations = [];


	setLanguage = (language) => {
		this.language = language;
	};

	/**
	 * Clears any content read.
	 */
	clear = () => {
		this.footnotes = [];
	};

	/**
	 * Reads the default location of the Paramony in Markdown.
	 * @param {string} bookFileName Book file name, as `The Urantia Book`, 
	 * `1 Chronicles`, etc.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	readFromMarkdown = (bookFileName) => {
		const filePathEN = path.join(app.getAppPath(), 
			`input/markdown/en/paramony/${bookFileName}.md`);
		const filePathCur = path.join(app.getAppPath(), 
			`input/markdown/${this.language}/paramony/${bookFileName}.md`);
		return new Promise((resolve, reject) => {
			const promises = (this.language === 'en' ?
				[readFile(filePathEN)] : 
				[readFile(filePathEN), readFile(filePathCur)]);
			Promise.all(promises)
				.then(results => {
					const linesEN = results[0];
					const linesOther = (results.length > 1 ? results[1] : null);
					this.clear();
					this.readFileEN(linesEN);
					if (!linesOther) {
						resolve(null);
						return;
					}
					this.readFileOther(linesOther);
					resolve(null);
				})
				.catch(reject);
		});
	};

	/**
	 * Read the file in English.
	 * @param {string[]} lines Lines.
	 */
	readFileEN = (lines) => {
		let comment = false;
		lines.forEach(line => {
			if (!comment && line.startsWith('<!--')) {
				comment = true;
			}
			if (!comment && line.indexOf('|') != -1) {
				const values = line.trim()
					.replace(/^\||\|$/g, '')
					.split('|').map(v => v.trim());
				if (values.length >= 5 &&
					values[0] != 'num' && 
					values[0].indexOf('---') === -1) {
					const num = parseInt(values[0]);
					const pos = parseInt(values[1]);
					const index = parseInt(values[2].split(':')[0]);
					let paper = this.footnotes.find(p => p.paperIndex === index);
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
			}
			if (comment && line.trim().endsWith('-->')) {
				comment = false;
			}
		});
	};

	/**
	 * Read the file in a language other than English.
	 * @param {string[]} lines Lines.
	 */
	readFileOther = (lines) => {
		let comment = false;
		this.translations.length = 0;
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
			this.clear();
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