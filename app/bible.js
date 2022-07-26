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
const getWikijsHeader = require('./utils').getWikijsHeader;
const getWikijsLinks = require('./utils').getWikijsLinks;
const getWikijsBookRefLink = require('./utils').getWikijsBookRefLink;
const getError = require('./utils').getError;
const fs = require('fs');
const path = require('path');
const Strings = require('./strings');

class Bible {
	language = 'en';
	/**
	 * @example
	 * biblebooks = [
	 *   {
	 *     title: 'Genesis',
	 *     titleEN: 'Genesis',
	 *     path: '/en/Bible/Genesis',
	 *     abb: 'Gn',
	 *     file: '001_Genesis.tex',
	 *     chapters: [
	 *       {
	 *          title: '1',
	 *          pars: [
	 *            'In the beginning God created the heavens and the earth.',
	 *            'And the earth was waste and void; and darkness was upon ...',
	 *            ...
	 *          ],
	 *          sections: []
	 *       },
	 *       ...
	 *     ]
	 *   },
	 *   ...
	 * ];
	 */
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
		let bookIndex = -1;
		let currentChapter = null;
		let currentSection = null;
		const booknames = Object.values(BibleAbbs[this.language]).map(e => e[0]);
		const booknamesEN = Object.values(BibleAbbs['en']).map(e=> e[0]);
		const bookpaths = Object.values(BibleAbbs[this.language]).map(e => e[1]);
		const bookabbs = Object.keys(BibleAbbs[this.language]);

		lines.forEach((line, i) => {
			if (line.startsWith(LaTeXSeparator.TITLE_START)) {
				extract = extractStr(line, LaTeXSeparator.TITLE_START,
					LaTeXSeparator.END);
				if (!extract) {
					errors.push(this.getError('bible_no_title', baseName, i));
				} else if (booknames.indexOf(extract) === -1) {
					errors.push(this.getError('bible_title_invalid', baseName, i));
				} else {
					bookIndex = booknames.indexOf(extract);
					book.file = path.basename(baseName, '.tex');
					book.title = extract;
					book.titleEN = booknamesEN[bookIndex];
					book.path = bookpaths[bookIndex];
					book.abb = bookabbs[bookIndex];
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
	// Wiki.js
	//***********************************************************************

	/**
	 * Writes `Bible` in HTML format that can be imported in Wiki.js, each chapter
	 * a file. It requires reading previously from any format.
	 * @param {string} dirPath Folder path.
	 * @param {?BibleRef} bibleref An optional Bible Reference.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	writeToWikijs = (dirPath, bibleref) => {
		return this.writeTo(dirPath, 'html', bibleref);
	};

	/**
	 * Writes a chapter of `Bible` in HTML format that can be imported in Wiki.js.
	 * @param {string} filePath Output file.
	 * @param {Object} book Book object.
	 * @param {Object} chapter Object with chapter data.
	 * @param {?Object} book_bibleref Object with Bible refs.
	 * @return {Promise} Promise that returns null in resolve function and an
	 * error in reject function.
	 */
	writeFileToWikijs = (filePath, book, chapter, book_bibleref) => {
		return new Promise((resolve, reject) => {
			let html = '';
			const chIndex = parseInt(chapter.title);
			const refs = (book_bibleref && !isNaN(chIndex) ? 
				book_bibleref.refs.filter(r=> r.bible_chapter === chIndex) : []);
			const wfootnotes = this.footnotesToWikijs(refs);
			const fnStyle = (wfootnotes.length > 10 ? 
				' style="column-width: 30em;"' : '');
			if (isNaN(chIndex)) {
				reject(this.getError('bible_section_not_number', filePath, 
					chapter.title));
				return;
			}

			//Header
			const chapterText = Strings['bookChapter'][this.language];
			const prevChapter = book.chapters
				.find(c=>c.title === (chIndex - 1).toString());
			const nextChapter = book.chapters
				.find(c=>c.title === (chIndex + 1).toString());
			const prevLink = (prevChapter ? 
				`<a href="${book.path}/${chIndex - 1}">` +
				`${book.title} - ${chapterText} ${chIndex - 1}</a>` : ' ');
			const nextLink = (nextChapter ? 
				`<a href="${book.path}/${chIndex + 1}">` +
				`${book.title} - ${chapterText} ${chIndex + 1}</a>` : ' ');
			const indexLink = 
				`<a href="${book.path}/${Strings['bookIndexName'].en}">` +
				`${Strings['bookIndexName'][this.language]}</a>`;
			const title = `${book.title} - ${chapterText} ${chapter.title}`;

			html += getWikijsHeader(title);
			html += '\r\n';
			html += getWikijsLinks(prevLink, indexLink, nextLink);
			// html += `<h1>${title}</h1>\r\n`;

			const writePar = (par) => {
				const v = par.substring(0, par.indexOf(' '));
				const p = par.substring(par.indexOf(' '));
				const isNumber = !isNaN(parseInt(v));
				const id = (isNumber ? ` id="v${v}"` : '');
				const vers = (isNumber ? `<sup><small>${v}</small></sup>` : '');
				const text = (isNumber ? p : par);
				const footnotes = (isNumber ? wfootnotes
					.filter(f => f.bible_vers === parseInt(v))
					.map(f => {
						return `<sup id="cite${f.cite}">` +
							`<a href="#fn${f.cite}">[${f.cite}]</a></sup>`;
					}).join(' ') : '');
				html += `<p${id}>${vers} ${text} ${footnotes}</p>\r\n`;
			};

			//Verses previous to any section
			chapter.pars.forEach(writePar);

			//Verses in sections
			chapter.sections.forEach(section => {
				html += `<h2> ${section.title} </h2>\r\n`;
				section.pars.forEach(writePar);
			});

			//References section
			if (wfootnotes.length > 0) {
				html += `<h2>${Strings['topic_references'][this.language]}</h2>\r\n`;
				html += `<div${fnStyle}>\r\n<ol>\r\n`;
				wfootnotes.forEach(f => html += '  ' + f.html);
				html += '</ol>\r\n</div>\r\n';
			}

			fs.writeFile(filePath, html, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	/**
	 * Converts the array of references to Wiki.js, the format for Wiki.js.
	 * @param {Array.<Object>} refs References.
	 * @return {Array.<string>}
	 */
	footnotesToWikijs = (refs) => {
		return refs.reduce((ac, cur) => {
			const link = getWikijsBookRefLink(cur.lu_ref, this.language);
			const html = `<i>${cur.text}</i>: ${link}. `;
			const index = ac.findIndex(i => i.bible_ref === cur.bible_ref);
			if (index === -1) {
				ac.push({
					bible_ref: cur.bible_ref,
					bible_chapter: cur.bible_chapter,
					bible_vers: cur.bible_vers,
					html: `${cur.bible_ref} ${html}`
				});
			} else {
				ac[index].html = ac[index].html + ' ' + html;
			}
			return ac;
		}, []).map((cur, i) => {
			const html = 
				`<li id="fn${i+1}"><a href="#cite${i+1}">↑</a> ${cur.html}</li>\r\n`;
			return {
				bible_ref: cur.bible_ref,
				bible_chapter: cur.bible_chapter,
				bible_vers: cur.bible_vers,
				html: `${html}`,
				cite: i + 1
			};
		});
	};

	/**
	 * Writes a full index of `Bible` in HTML format that can be imported in Wiki.js.
	 * It requires reading previously from any format.
	 * @param {string} dirPath Folder path.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	writeFullIndexToWikijs = (dirPath) => {
		return new Promise((resolve, reject) => {
			const booknames = Object.values(BibleAbbs[this.language])
				.map(e => e[0]);
			const filePath = path.join(dirPath, `bible.html`);
			const bibleIndex = Strings['bibleFullIndex'][this.language];
			let html = '';
			html += getWikijsHeader(bibleIndex);
			html += '\r\n<ul>\r\n';
			html += booknames.map(name => {
				const book = this.biblebooks.find(book => book.title === name);
				if (!book) return '';
				const bookNameEN = book.titleEN.replace(/ /g, '_');
				const chapters = book.chapters.map((c, i) => {
					const path = `/${this.language}/Bible/${bookNameEN}/${i+1}`;
					return `<a href="${path}">${i+1}</a>`;
				}).join(' ');
				return `\t<li>${name}: ${chapters}</li>\r\n`;
			}).join('');
			html += '</ul>\r\n';
			fs.writeFile(filePath, html, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	/**
	 * Writes an index of `Bible` in HTML format that can be imported in Wiki.js.
	 * It requires reading previously from any format.
	 * @param {string} dirPath Folder path.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	writeIndexToWikijs = (dirPath) => {
		return new Promise((resolve, reject) => {
			const booknames = Object.values(BibleAbbs[this.language])
				.map(e => e[0]);
			const indexName = Strings['bookIndexName'][this.language];
			const chapterName = Strings['bookChapter'][this.language];
			const bibleIndex = Strings['bibleFullIndex'][this.language];
			const bibleIndexPath = `/${this.language}/index/bible`;
			const indexPath = dirPath.replace('Bible', 'index');

			const promises = booknames
				.filter(name => {
					return this.biblebooks
						.find(book => book.title === name) != undefined;
				})
				.map(name => {
					return new Promise((resolve2, reject2) => {
						const book = this.biblebooks
							.find(book => book.title === name);
						const bookNameEN = book.titleEN.replace(/ /g, '_');
						const title = `${book.title} - ${indexName}`;
						const filePath = path.join(dirPath, bookNameEN, 
							`Index.html`);
						let html = '';
						html += getWikijsHeader(title);
						html += `<ul>\r\n`;
						html += book.chapters
							.map((c, i) => {
								const path = `${book.path}/${i+1}`;
								const text = `${chapterName} ${i+1}`;
								return `\t<li><a href="${path}">${text}</a></li>\r\n`;
							})
							.join(' ');
						html += '</ul>\r\n';
						html += `<p><a href="${bibleIndexPath}" ` +
							`title="${bibleIndex}">` + 
							`${bibleIndex}</a></p>\r\n`;
						fs.writeFile(filePath, html, 'utf-8', (err) => {
							if (err) {
								reject2(err);
								return;
							}
							resolve2(null);
						});
					});
			});
			promises.push(this.writeFullIndexToWikijs(indexPath));
			Promise.all(promises).then(resolve, reject);
		});
	};

	//***********************************************************************
	// MediaWiki
	//***********************************************************************

	/**
	 * Writes `Bible` in MediaWiki format, each chapter a file.
	 * It requires reading previously from any format.
	 * @param {string} dirPath Folder path.
	 * @param {?BibleRef} bibleref An optional Bible Reference.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	writeToWikiText = (dirPath, bibleref) => {
		return this.writeTo(dirPath, 'wiki', bibleref);
	};

	/**
	 * Writes a chapter of `Bible` in MediaWiki format.
	 * @param {string} filePath Output file.
	 * @param {string} book_abb Book abbreviation.
	 * @param {Object} chapter Object with chapter data.
	 * @param {?Object} book_bibleref Object with Bible refs.
	 * @return {Promise} Promise that returns null in resolve function and an
	 * error in reject function.
	 */
	writeFileToWikiText = (filePath, book_abb, chapter, book_bibleref) => {
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
				const footnotes = (isNumber ? this.footnotesToWikiText(book_abb, 
					parseInt(chapter.title), parseInt(v), chapter_bibleref) : '');
				if (footnotes != '') {
					fnAdded = true;
				}
				wiki += `${anchor}${vers}${text}${footnotes}<br>\r\n`;
			};

			//Verses previous to any section
			chapter.pars.forEach(writePar);

			//Verses in sections
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

	/**
	 * Writes an index of `Bible` in MediaWiki format.
	 * It requires reading previously from any format.
	 * @param {string} dirPath Folder path.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
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

	footnotesToWikiText = (book_abb, chapter, vers, chapter_bibleref) => {
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
	// Wiki XML
	//***********************************************************************

	/**
	 * Writes `Bible` in XML format of DataTransfer extension for
	 * MediaWiki, each chapter in a file if merge is false or in one file
	 * called `wiki_xml_import.xml` if not.
	 * @deprecated It is not recommended to use DataTransfer and use Wiki format
	 * with mantenaince script `importTextFiles.php`.
	 * @param {string} dirPath Output folder.
	 * @param {?boolean} merge If join all output files or not. Fase by default.
	 * @return {Promise} Promise that returns null in resolve function and an
	 * array of errors in reject function.
	 */
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

	/**
	 * Writes one or more chapters of `Bible` in XML format for 
	 * DataTransfer extension of MediaWiki.
	 * @deprecated It is not recommended to use DataTransfer and use Wiki format
	 * with the maintenance script `importTextFiles.php`.
	 * @param {string} filePath Output file.
	 * @param {Array.<Object>} chapters Array of JSON objects with chapters.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * error in reject function.
	 */
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

	//***********************************************************************
	// Help functions
	//***********************************************************************

	/**
	 * Returns an error.
	 * @param  {...any} params Params.
	 * @returns {Error}
	 */
	getError = (...params) => {
		return getError(this.language, ...params);
	};

	/**
	 * Writes `Bible` in the giving format, each chapter in a file.
	 * Requires previously to read the Bible in any format.
	 * @param {string} dirPath Folder path.
	 * @param {string} format Output format: `wiki`, `html`.
	 * @param {?BibleRef} bibleref An optional Bible Reference.
	 * @return {Promise} Promise that returns null in resolve function or
	 * an array of errors in reject function.
	 */
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
						const bookName = book.title.replace(/ /g, '_');
						const bookNameEN = book.titleEN.replace(/ /g, '_');
						const filePathWiki = path.join(dirPath, 
							`${bookName}_${chapter.title}.${format}`);
						const filePathHTML = path.join(dirPath,
							bookNameEN, `${(n + 1).toString()}.${format}`);

						let p, book_bibleref;
						if (bibleref) {
							book_bibleref = bibleref.biblebooks.find(b => 
								b.titleEN === book.titleEN);
						}
						if (format === 'wiki') {
							p = this.writeFileToWikiText(filePathWiki, book.abb, 
								chapter, book_bibleref);
							promises.push(reflectPromise(p));
						} else if (format === 'html') {
							if (!fs.existsSync(path.join(dirPath, bookNameEN))) {
								fs.mkdirSync(path.join(dirPath, bookNameEN));
							}
							p = this.writeFileToWikijs(filePathHTML, book, 
								chapter, book_bibleref);
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