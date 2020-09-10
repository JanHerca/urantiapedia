//Reader/Writer para pasar las refs de la Biblia de unos TXT en los *.wiki

const LaTeXSeparator = require('./enums').LaTeXSeparator;
const extractStr = require('./utils').extractStr;
const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const fs = require('fs');
const path = require('path');
const BibleAbb = require('./enums').BibleAbb;

class BibleRef {
	biblebooks = [];

	//***********************************************************************
	// TXT
	//***********************************************************************

	readFromTXT = (dirPath) => {
		return new Promise((resolve, reject) => {
			fs.readdir(dirPath, (err, files) => {
				if (err) {
					reject([err]);
					return;
				}
				var txtFiles = files.filter(file => {
					return path.extname(file) === '.txt';
				});
				if (txtFiles.length === 0) {
					reject([new Error('No se han encontrado archivos TXT')]);
					return;
				}

				this.biblebooks = [];

				var promises = txtFiles.map(file => {
					const filePath = path.join(dirPath, file);
					return reflectPromise(this.readFileFromTXT(filePath));
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
		const book = {
			file: path.basename(baseName, '.txt'),
			chapters: []
		};
		const booknames = Object.values(BibleAbb).map(n => n.replace(/ /g,"_"));
		book.abb = Object.keys(BibleAbb)[booknames.indexOf(book.file)];

		lines.forEach((line, i) => {
			let data = null, ref, data2, data3, bible_ref, chapter, vers;
			if (line.trim() != '' && !line.startsWith('#') && !line.startsWith('Book')) {
				data = line.split('\t');
				if (data.length < 6) {
					errors.push(this.createError(baseName, i,
						'No hay suficientes datos en la referencia'));
				} else {
					bible_ref = data[1];
					data2 = bible_ref.split(':');
					data3 = data[3].split('/');
					if (data2.length < 2) {
						errors.push(this.createError(baseName, i,
							'La referencia de la Biblia está mal'));
					} else if (data3.length != 2) {
						errors.push(this.createError(baseName, i,
							'La referencia de El Libro de Urantia está mal'));
					} else {
						chapter = parseInt(data2[0]);
						vers = this.extractVers(data2[1]);
						if (vers === 'all') {
							bible_ref = chapter.toString();
							vers = 1;
						}
						if (chapter === 0 || vers === 0 || isNaN(chapter) || vers == null) {
							errors.push(this.createError(baseName, i,
								'El número de capítulo o versículo está mal'));
						} else {
							if (!book.chapters[chapter - 1]) {
								book.chapters[chapter - 1] = [];
							}
							if (!book.chapters[chapter - 1][vers - 1]) {
								book.chapters[chapter - 1][vers - 1] = [];
							}
							
							ref = {
								bible_ref: bible_ref,
								bible_chapter: chapter,
								bible_vers: vers,
								lu_ref: data3[0],
								text: data[4],
								type: data[5].trim()
							};
							book.chapters[chapter - 1][vers - 1].push(ref);
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

	createError = (file, linenum, msg) => {
		return new Error(`${file}, línea ${linenum}: ${msg}`);
	};

};

module.exports = BibleRef;