//Reader/Writer for a Paralells file in Markdown format (md)
//The path of this file is fixed: /input/markdown/xx/paralells.md
//The english path contains the main tables, and the other the translations

const {app} = require('electron').remote;
const path = require('path');
const fs = require('fs');
const readFile = require('./utils').readFile;
const Strings = require('./strings');

class Paralells {
	language = 'en';

	/**
	 * @example
	 * 
	 * footnotes = [
	 *   {
	 *     ub_ref: '0:1.20-26',
	 *     book_location: 'Hartshorne1-1-8'
	 *   }
	 * ];
	 */
	footnotes = [];

	/**
	 * @example
	 * 
	 * books = [
	 *   {
	 *     title: 'Man’s Vision of God and the Logic of Theism',
	 *     code: 'Hartshorne1',
	 *     author: 'Charles Hartshorne',
	 *     year: '1941',
	 *     edition: 'Willett, Clark & Company, Chicago, New York, 1941',
	 *     path: 'Charles_Hartshorne/Mans_Vision_of_God'
	 *   }
	 * ];
	 */
	books = [];

	/**
	 * @example
	 * 
	 * translations = [
	 *   {
	 *      text: 'Man’s Vision of God and the Logic of Theism',
	 *      translation: 'La visión del hombre de Dios y la lógica del teísmo'
	 *   },
	 *   ...
	 * ];
	 */
	translations = [];

	setLanguage = (language) => {
		this.language = language;
	};

	/**
	 * Clears any content read.
	 */
	clear = () => {
		this.footnotes.length = 0;
		this.books.length = 0;
		this.translations.length = 0;
	};

	/**
	 * Reads the default location of the Paralells in Markdown.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	read = () => {
		const filePathEN = path.join(app.getAppPath(), 'input', 'markdown', 
			'en', 'paralells.md');
		const filePathOther = path.join(app.getAppPath(), 'input', 'markdown',
			`${this.language}`,'paralells.md');
		const existsOther = fs.existsSync(filePathOther);
		return new Promise((resolve, reject) => {
			this.clear();
			readFile(filePathEN)
				.then(linesEN => this.readFileEN(linesEN))
				.then(() => {
					return (this.language === 'en' || !existsOther ? 
						Promise.resolve(null) :
						readFile(filePathOther));
				})
				.then(linesOther => {
					if (linesOther) {
						this.readFileOther(linesOther);
					}
					resolve(null);
				})
				.catch(reject);
		});
	};

	/**
	 * Reads the Markdown file.
	 * @param {string[]} lines Lines.
	 * @returns {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	readFileEN = (lines) => {
		return new Promise((resolve, reject) => {
			let comment = false;
			let target = null;
			let header = [];
			lines.forEach((line, i) => {
				if (!comment && line.startsWith('<!--')) {
					comment = true;
				}
				if (!comment && line.startsWith('#')) {
					if (line.indexOf('Books') != -1) {
						target = this.books;
					} else if (line.indexOf('Paralells') != -1) {
						target = this.footnotes;
					}
				}
				if (!comment && line.indexOf('|') != -1) {
					const values = line.trim()
						.replace(/^\||\|$/g, '')
						.split('|').map(v => v.trim());
					if (values[0] === 'title' || values[0] === 'ub_ref') {
						header = values;
					} else if (target && values.length > 0 &&
						values[0] != 'title' && values[0] != 'ub_ref' && 
						values[0].indexOf('---') === -1 &&
						header.length === values.length) {
						const obj = {};
						values.forEach((v,i) => obj[header[i]] = v);
						target.push(obj);
					}
				}
				if (comment && line.trim().endsWith('-->')) {
					comment = false;
				}
			});
			resolve(null);
		});
	};

	/**
	 * Reads the Markdown file.
	 * @param {string[]} lines Lines.
	 * @returns {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	readFileOther = (lines) => {
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
	};

	/**
	 * Gets the paralells for a given paper in The Urantia Book.
	 * The result is already sorted.
	 * @param {number} paperIndex Urantia Book paper index starting at zero.
	 * [0-196].
	 * @returns {Object[]} Returns an array of objects with the paralells. The 
	 * objects have these values:
	 * - ub_refs: full UB ref
	 * - par_ref: paragraph reference
	 * - sorting: a value for sorting
	 * - location: the sentence index in which insert the footnote. If 999
	 * the footnote must be inserted at the end of the paragraph.
	 * - html: HTML fragment to add in the References section of Urantia Book 
	 * paper.
	 * Returns an empty array if no paralell exists.
	 */
	getParalells = (paperIndex) => {
		const lan = this.language;
		const result = this.footnotes
			.filter(f => {
				const pindex = parseInt(f.ub_ref.split(':')[0]);
				return paperIndex === pindex;
			})
			.map(f => {
				const location = (f.ub_ref.indexOf('#') != -1 ? 
					parseInt(f.ub_ref.split('#')[1]) : 999);
				const r = f.ub_ref.split(/[:\.-]/g).map(v => parseInt(v));
				const s = r.slice(1, 3).map(v => v + 1000).join('') + 
					(location + 1000).toString();
				const vals = f.book_location.split('-');
				const code = vals[0];
				const book = this.books.find(b =>b.code === code);
				const tr = this.translations.find(t => t.text === book.title);
				const title = (lan === 'en' ? book.title : 
					(tr ? tr.translation : book.title));
				const blan = (tr ? lan : 'en');
				const chapter = vals[1];
				const ch = (isNaN(parseInt(chapter)) ? '' :
					this.tr('bookChapter').toLowerCase() + ' ');
				const page = vals[2];
				const path = `/${blan}/book/${book.path}/${chapter}#p${page}`;
				const html = ` ${f.ub_ref}: <i>${title}</i>, ${book.author}, ` +
					`<a href="${path}">${ch}${chapter}, p. ${page}</a>`;
				return {
					ub_ref: f.ub_ref,
					par_ref: `${r[0]}:${r[1]}.${r[2]}`,
					sorting: s,
					location: location,
					html: html
				};
			});
		result.sort((a, b) => a.sorting - b.sorting);
		return result;
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

module.exports = Paralells;