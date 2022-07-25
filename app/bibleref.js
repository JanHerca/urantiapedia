//Reader/Writer to converts Bible refs from TXT to *.wiki

const BibleAbbs = require('./abb');
const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const readFrom = require('./utils').readFrom;
const fs = require('fs');
const path = require('path');
const Strings = require('./strings');

class BibleRef {
	language = 'en';
	/**
	 * @example
	 * 
	 * biblebooks = [
	 *   {
	 *     titleEN: '1 Chronicles',
	 *     title: 'I Crónicas',
	 *     file: '1 Chronicles.txt',
	 *     abb: '1 Cr',
	 *     refs: [
	 *       {
	 *         bible_ref: '10:1-5',
	 *         bible_chapter: 10,
	 *         bible_vers: 1,
	 *         lu_ref: '134:9.5',
	 *         text: 'Gilboa, donde murió Saúl',
	 *         type: 'C'
	 *       },
	 *       ...
	 *     ]
	 *   }
	 * ];
	 */
	biblebooks = [];
	onProgressFn = null;

	setLanguage = (language) => {
		this.language = language;
	};

	//***********************************************************************
	// TXT
	//***********************************************************************

	readFromTXT = (dirPath) => {
		return readFrom(dirPath, '.txt', this.clear, this.readFileFromTXT, this);
	};

	clear = () => {
		this.biblebooks = [];
	};

	readFileFromTXT = (filePath) => {
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
				let book = null;
				try {
					book = this.extractFromTXT(baseName, lines, errors);
				} catch (err) {
					errors.push(err);
				}
				
				if (errors.length === 0) {
					this.biblebooks.push(book);
					resolve(book);
				} else {
					reject(errors);
				}
			});
		});
	};

	extractFromTXT = (baseName, lines, errors) => {
		const booknameEN = path.basename(baseName, '.txt');
		const booknamesEN = Object.values(BibleAbbs.en).map(e => e[0]);
		const booknames = Object.values(BibleAbbs[this.language]).map(e => e[0]);
		const bookabbs = Object.keys(BibleAbbs[this.language]);
		const bookIndex = booknamesEN.indexOf(booknameEN);
		if (bookIndex === -1) {
			errors.push(this.getError('bibleref_bookname_invalid', baseName, 0));
			return {};
		}
		const book = {
			titleEN: booknameEN,
			title: booknames[bookIndex],
			abb: bookabbs[bookIndex],
			file: baseName,
			refs: []
		};

		lines.forEach((line, i) => {
			let data = null, ref, data2, data3, bible_ref, chapter, vers;
			if (line.trim() != '' && !line.startsWith('#') && !line.startsWith('Book')) {
				data = line.split('\t');
				if (data.length < 6) {
					errors.push(this.getError('bibleref_no_data', baseName, i));
				} else {
					bible_ref = data[1];
					data2 = bible_ref.split(':');
					data3 = data[3].split('/');
					if (data2.length < 2) {
						errors.push(this.getError('bibleref_bad_ref', baseName, i));
					} else if (data3.length != 2) {
						errors.push(this.getError('bibleref_bad_ub_ref', baseName, i));
					} else {
						chapter = parseInt(data2[0]);
						vers = this.extractVers(data2[1]);
						if (vers === 'all') {
							bible_ref = chapter.toString();
							vers = 1;
						}
						if (chapter === 0 || vers === 0 || isNaN(chapter) || vers == null) {
							errors.push(this.getError('bibleref_bad_number', baseName, i));
						} else {
							ref = {
								bible_ref: bible_ref,
								bible_chapter: chapter,
								bible_vers: vers,
								lu_ref: data3[0],
								text: data[4],
								type: data[5].trim()
							};
							book.refs.push(ref);
						}
					}
				}
			}
		});
		return book;
	};

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

	translate = (dirPath, lu_book) => {
		return new Promise((resolve, reject) => {
			const errs = [];
			this.biblebooks.forEach(book => {
				book.chapters.forEach(chapter => {
					if (!chapter) {
						return;
					}
					chapter.forEach(vers => {
						if (!vers) {
							return;
						}
						vers.forEach(ref => {
							const bref = `${book.abb} ${ref.bible_ref}`;
							let footnotes, subfootnotes, subfootnote;
							if (!ref) {
								return;
							}
							try {
								footnotes = lu_book.getFootnotes(ref.lu_ref);
								subfootnotes = lu_book.getSubFootnotes(footnotes);
								subfootnote = subfootnotes.find(sf => {
									return sf[1] === bref;
								});
								if (subfootnote) {
									ref.text_es = subfootnote[0];
								}
							} catch (err) {
								errs.push(new Error(`${err.message}: ${bref}`));
							}
						});
					});
				});
			});

			if (errs.length != 0) {
				reject(errs);
				return;
			}

			const promises = this.biblebooks.map(book => {
				const filePath = path.join(dirPath, `${book.file}_es.txt`);
				return reflectPromise(this.writeFileToTXT(filePath, book));
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
	};

	writeFileToTXT = (filePath, book) => {
		return new Promise((resolve, reject) => {
			let txt = '';
			book.chapters.forEach(chapter => {
				if (!chapter) {
					return;
				}
				chapter.forEach(vers => {
					if (!vers) {
						return;
					}
					vers.forEach(ref => {
						if (!ref) {
							return;
						}
						const text_es = (ref.text_es ? ref.text_es : ref.text);
						const problem = (ref.text_es ? '#' : 'PROBLEM');
						txt += `${book.file}\t${ref.bible_ref}\t#\t${ref.lu_ref}/#\t` +
							`${text_es}\t${ref.type}\t${problem}\r\n`;
					});
				});
			});
			fs.writeFile(filePath, txt, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	//***********************************************************************
	// Help functions
	//***********************************************************************

	/**
	 * Returns an error.
	 * @param  {...any} params Params.
	 * @returns {Error}
	 */
	getError = (...params) => {
		const msg = params[0];
		let text = Strings[msg][this.language];
		if (!text) {
			text = Strings[msg]['en'];
		}
		return new Error(strformat(text, ...params.slice(1)));
	};

};

module.exports = BibleRef;