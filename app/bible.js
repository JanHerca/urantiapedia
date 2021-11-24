//Reader/Writer for Bible in different formats (LaTeX/JSON/Wiki)

const LaTeXSeparator = require('./enums').LaTeXSeparator;
//TODO: Books to add:
// Macabeos I y II, Eclesiástico, Sabiduría, Historia de Bel y el Dragón,
// Oración de Manasés, Tobit, Enoc, Asunción de Moisés
const BibleAbbs = require('./abb');
const extractStr = require('./utils').extractStr;
const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const readFrom = require('./utils').readFrom;
const fs = require('fs');
const path = require('path');
const Strings = require('./strings');

class Bible {
	language = 'en';
	biblebooks = [];
	onProgressFn = null;

	setLanguage = (language) => {
		this.language = language;
	};

	//***********************************************************************
	// LaTeX
	//***********************************************************************

	readFromLaTeX = (dirPath) => {
		return readFrom(dirPath, '.tex', this.clear, this.readFileFromLaTeX, this);
	};

	clear = () => {
		this.biblebooks = [];
	};

	readFileFromLaTeX = (filePath) => {
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
				const book = this.extractFromLaTex(baseName, lines, errors);
				if (errors.length === 0) {
					this.biblebooks.push(book);
					resolve(book);
				} else {
					reject(errors);
				}
			});
		});
	};

	extractFromLaTex = (baseName, lines, errors) => {
		let extract;
		const book = {
			chapters: []
		};
		let currentChapter = null;
		let currentSection = null;
		const booknames = Object.values(BibleAbbs[this.language]).map(e => e[0]);
		const bookabbs = Object.keys(BibleAbbs[this.language]);

		lines.forEach((line, i) => {
			if (line.startsWith(LaTeXSeparator.TITLE_START)) {
				extract = extractStr(line, LaTeXSeparator.TITLE_START,
					LaTeXSeparator.END);
				if (!extract) {
					errors.push(this.getError('bible_no_title', baseName, i));
				} else {
					book.file = path.basename(baseName, '.tex');
					book.title = extract;
					book.abb = bookabbs[booknames.indexOf(book.title)];
				}
			} else if (line.startsWith(LaTeXSeparator.CHAPTER_START)) {
				extract = extractStr(line, LaTeXSeparator.CHAPTER_START,
					LaTeXSeparator.END);
				if (!extract) {
					errors.push(this.getError('bible_no_chapter', baseName, i));
				} else {
					currentChapter = {
						title: extract,
						pars: [],
						sections: []
					};
					book.chapters.push(currentChapter);
					currentSection = null;
				}
			} else if (line.startsWith(LaTeXSeparator.SECTION_START)) {
				extract = extractStr(line, LaTeXSeparator.SECTION_START,
					LaTeXSeparator.END);
				if (!extract) {
					errors.push(this.getError('bible_no_section', baseName, i));
				} else {
					currentSection = {
						title: extract,
						pars: []
					};
					if (!currentChapter) {
						errors.push(this.getError('bible_section_order', baseName, i));
					} else {
						currentChapter.sections.push(currentSection);
					}
				}
			} else if (line.startsWith(LaTeXSeparator.PAR_START)) {
				extract = line.substring(5).trim();
				if (!currentSection && currentChapter) {
					currentChapter.pars.push(extract);
				} else if (currentSection) {
					currentSection.pars.push(extract);
				}
			}
		});
		return book;
	};

	//***********************************************************************
	// Wiki
	//***********************************************************************

	writeToWikiText = (dirPath, bibleref) => {
		return this.writeTo(dirPath, 'wiki', bibleref);
	};

	writeToWikiXML = (dirPath, merge) => {
		const baseName = path.basename(dirPath);
		const filePath = path.join(dirPath, 'wiki_xml_import.xml');
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('dir_no_access', baseName)]);
					return;
				}
				let files = [];
				this.biblebooks.forEach((book, i) => {
					const j = (merge ? 0 : i);
					if (!files[j]) {
						files[j] = {
							chapters: [],
							filePath: (merge ? filePath : 
								path.join(dirPath, `${book.file}.xml`))
						};
					}
					book.chapters.forEach(chapter => {
						chapter.booktitle = book.title;
						files[j].chapters.push(chapter);
					});
				});

				const promises = files.map(file => {
					const p = this.writeFileToWikiXML(file.filePath,
						file.chapters);
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

	writeFileToWikiText = (filePath, book_abb, chapter, chapter_bibleref) => {
		return new Promise((resolve, reject) => {
			let wiki = '';
			const end = '\r\n\r\n';
			let fnAdded = false;
			const writePar = (par) => {
				const v = par.substring(0, par.indexOf(' '));
				const p = par.substring(par.indexOf(' '));
				const isNumber = !isNaN(parseInt(v));
				const anchor = (isNumber ? `{{anchor|${v}}} ` : '');
				const vers = (isNumber ? `<small>${v}</small>` : '');
				const text = (isNumber ? p : par);
				const footnotes = (isNumber ? this.footnotesToWiki(book_abb, 
					parseInt(chapter.title), parseInt(v), chapter_bibleref) : '');
				if (footnotes != '') {
					fnAdded = true;
				}
				wiki += `${anchor}${vers}${text}${footnotes}<br>\r\n`;
			};
			chapter.pars.forEach(writePar);

			chapter.sections.forEach(section => {
				wiki += `== ${section.title} ==${end}`;
				section.pars.forEach(writePar);
			});

			if (fnAdded) {
				wiki += `== Referencias ==${end}<references />\r\n`;
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

	writeFileToWikiXML = (filePath, chapters) => {
		return new Promise((resolve, reject) => {
			let xml = '<Pages>\r\n';
			const writePar = (par) => {
				const v = par.substring(0, par.indexOf(' '));
				const p = par.substring(par.indexOf(' '));
				const isNumber = !isNaN(parseInt(v));
				const anchor = (isNumber ? 
					`<Template Name="anchor"><Field Name="1">${v}</Field></Template>` : 
					'');
				const vers = (isNumber ? `&lt;small&gt;${v}&lt;/small&gt;` : '');
				const text = (isNumber ? p : par);
				xml += `${anchor}<Free_Text>${vers}${text}&lt;br&gt;</Free_Text>\r\n`;
			};

			chapters.forEach(chapter => {
				let title = chapter.booktitle.replace(/ /g,"_");
				xml += `<Page Title="${title}_${chapter.title}">\r\n`;
				chapter.pars.forEach(writePar);
				chapter.sections.forEach(section => {
					xml += `<Free_Text>== ${section.title} ==</Free_Text>\r\n`;
					section.pars.forEach(writePar);
				});
				xml += '</Page>\r\n'
			});
			xml += '</Pages>';

			fs.writeFile(filePath, xml, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	writeIndexToWikiText = (dirPath) => {
		return new Promise((resolve, reject) => {
			const filePath = path.join(dirPath, 'index.wiki');
			const booknames = Object.values(BibleAbbs[this.language]).map(e => e[0]);
			let wiki = '';

			booknames.forEach(name => {
				wiki += `* ${name}: `;
				const book = this.biblebooks.find(book => book.title === name);
				if (book) {
					wiki += book.chapters
						.map((c, i) => `[[${name} ${i+1}|${i+1}]]`)
						.join(' ');
					wiki += '\r\n';
				}
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

	footnotesToWiki = (book_abb, chapter, vers, chapter_bibleref) => {
		let wiki = '';
		if (!chapter_bibleref || !chapter_bibleref[vers - 1] ||
			!Array.isArray(chapter_bibleref[vers - 1]) ||
			chapter_bibleref[vers - 1].length === 0) {
			return wiki;
		}
		const name = `${book_abb}_${chapter}_${vers}`;
		// const ref = `${book_abb} ${chapter}:${vers}`;
		chapter_bibleref[vers - 1].forEach(ref => {
			let list, lus;
			if (!ref.used) {
				list = chapter_bibleref[vers - 1]
					.filter(r => r.text === ref.text);
				lus = list
					.map(r => r.lu_ref)
					.sort()
					.map(lu =>this.getLULink(lu))
					.join('; ');
				wiki += ` <ref>${ref.bible_ref} ''${ref.text}'': ${lus}.</ref>`;
				list.forEach(r => r.used = true);
			}
		});
		return wiki;
	};

	getLULink = (lu_ref) => {
		let link = '';
		let ref = lu_ref.replace(/[:.,-]/g,"|");
		let data = ref.split('|');
		if (data.length > 3) {
			data = data.slice(0 , 3);
			link = `{{lib|LU|${data[0]}|${data[1]}|${data[2]}|${lu_ref}}}`;
		} else {
			link = `{{lib|LU|${ref}}}`;
		}
		return link;
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
		return new Error(
			strformat(Strings[msg][this.language], ...params.slice(1)));
	};

	writeTo = (dirPath, format, bibleref) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('dir_no_access', baseName)]);
					return;
				}
				let promises = [];
				this.biblebooks.forEach(book => {
					book.chapters.forEach((chapter, n) => {
						const fileName = book.title.replace(/ /g, '_');
						const filePath = path.join(dirPath, 
							`${fileName}_${chapter.title}.${format}`);
						let p, book_bibleref, chapter_bibleref;
						if (bibleref) {
							book_bibleref = bibleref.biblebooks.find(b => 
								b.file === fileName);
							if (book_bibleref) {
								chapter_bibleref = book_bibleref.chapters[n];
							}
						}
						if (format = 'wiki') {
							p = this.writeFileToWikiText(filePath, book.abb, chapter, 
								chapter_bibleref);
							promises.push(reflectPromise(p));
						}
					});
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
}

module.exports = Bible;