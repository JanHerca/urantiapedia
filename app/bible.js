//Reader/Writer for Bible in different formats (LaTeX/JSON/Wiki)

const LaTeXSeparator = require('./enums').LaTeXSeparator;
const BibleAbbs = require('./abb');
const {extractStr, reflectPromise, extendArray, readFrom, getWikijsHeader, 
	getWikijsLinks, getWikijsNavLinks, getWikijsBookRefLink, getError, 
	writeFile, writeHTMLToWikijs, replaceTags} = require('./utils');
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
		let previousVer = 0;
		let currentVer = 0;
		let m = 0;
		const isTR = this.language === 'tr';
		const booknames = Object.values(BibleAbbs[this.language]).map(e => e[0]);
		const booknamesEN = Object.values(BibleAbbs['en']).map(e=> e[0]);
		const bookpaths = Object.values(BibleAbbs[this.language]).map(e => e[1]);
		const bookabbs = Object.keys(BibleAbbs[this.language]);

		lines.forEach((line, i) => {
			const replaceErr = [];
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
				previousVer = 0;
				currentVer = null;
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
			} else if (line.startsWith(LaTeXSeparator.PAR_START) &&
				!line.startsWith(LaTeXSeparator.PART_START)) {
				extract = line.substring(5).trim();
				extract = replaceTags(extract, LaTeXSeparator.ITALIC_START, 
					LaTeXSeparator.END, '<i>', '</i>', replaceErr);
				if (replaceErr.length > 0) {
					errors.push(this.getError('bible_chapter_wrong_italics',
						baseName, book.chapters.length, extract));
				}
				currentVer = extract.substring(0, extract.indexOf(' '));
				currentVer = (!isNaN(parseInt(currentVer)) ? 
					parseInt(currentVer) : null);
				if (currentVer != null && (currentVer <= previousVer ||
					(!isTR && currentVer != previousVer + 1))) {
					errors.push(this.getError('bible_chapter_missing_verses', baseName, book.chapters.length, 
						extract + `; Solution: \\par ${previousVer + 1} [${book.chapters.length}:${previousVer}]`));
				} else {
					m = 1;
					if (isTR && previousVer != null && currentVer != null &&
						previousVer + m < currentVer) {
						//A fix for weird verses in Turkish
						while (previousVer + m < currentVer) {
							if (!currentSection && currentChapter) {
								currentChapter.pars.push(`${previousVer + m} ` +
									`(#${book.chapters.length}:${previousVer})`);
							} else if (currentSection) {
								currentSection.pars.push(`${previousVer + m} ` +
									`(#${book.chapters.length}:${previousVer})`);
							}
							m++;
						}
						
					}
					if (!currentSection && currentChapter) {
						currentChapter.pars.push(extract);
					} else if (currentSection) {
						currentSection.pars.push(extract);
					}
				}
				if (currentVer != null) {
					previousVer = currentVer;
				}
			}
		});
		return book;
	};

	//***********************************************************************
	// Wiki.js
	//***********************************************************************

	/**
	 * Writes `Bible` in HTML format for Wiki.js, each chapter
	 * a file. It requires reading previously from any format.
	 * @param {string} dirPath Folder path.
	 * @param {?Object[]} bibleref An optional Bible Reference.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	writeToWikijs = (dirPath, bibleref) => {
		return this.writeTo(dirPath, 'html', bibleref);
	};

	/**
	 * Writes a chapter of `Bible` in HTML format for Wiki.js.
	 * @param {string} filePath Output file.
	 * @param {Object} book Book object.
	 * @param {Object} chapter Object with chapter data.
	 * @param {?Object} book_bibleref Object with Bible refs.
	 * @return {Promise} Promise that returns null in resolve function and an
	 * error in reject function.
	 */
	writeFileToWikijs = (filePath, book, chapter, book_bibleref) => {
		return new Promise((resolve, reject) => {
			const chIndex = book.chapters
				.findIndex(c => c.title === chapter.title);
			if (chIndex === -1) {
				reject(this.getError('bible_chapter_not_found', filePath, 
					chapter.title));
				return;
			}
			const refs = book_bibleref ? 
				book_bibleref.refs.filter(r=> r.bible_chapter === chIndex + 1) 
				: [];
			const wfootnotes = this.footnotesToWikijs(refs);
			const fnStyle = (wfootnotes.length > 10 ? 
				' style="column-width: 30em;"' : '');
			const foundVers = [];
			const missingVers = [];

			//Header
			let body = '';
			let header = '';
			const chapterText = this.tr('bookChapter');
			const navText = `${book.title} - ${chapterText}`;
			// const prevChapter = book.chapters
			// 	.find(c=>c.title === (chIndex - 1).toString());
			// const nextChapter = book.chapters
			// 	.find(c=>c.title === (chIndex + 1).toString());
			const prevChapter = book.chapters[chIndex - 1];
			const nextChapter = book.chapters[chIndex + 1];
			const title = `"${navText} ${chapter.title}"`;
			const bookPath = book.path.startsWith('/' + this.language) ?
				book.path : '/' + this.language + book.path;
			const extraTag = (book_bibleref ? ['bible—' + book.titleEN.toLowerCase()] : []);

			header += getWikijsHeader(title, ['bible', ...extraTag]);
			header += '\r\n';
			const navigation = getWikijsNavLinks({
				prevTitle: prevChapter ? 
					`${navText} ${prevChapter.title}` : null, 
				prevPath: prevChapter ? 
					`${book.path}/${prevChapter.title}` : null, 
				nextTitle: nextChapter ?
					`${navText} ${nextChapter.title}` : null, 
				nextPath: nextChapter ? 
					`${book.path}/${nextChapter.title}` : null, 
				indexPath: `${bookPath}/${this.tr('bookIndexName', 'en')}`
			});
			body += navigation;
			// body += `<h1>${title}</h1>\r\n`;
			
			const writePar = (par) => {
				const v = par.substring(0, par.indexOf(' '));
				const p = par.substring(par.indexOf(' '));
				const isNumber = !isNaN(parseInt(v));
				if (isNumber) {
					foundVers.push(parseInt(v));
				}
				const id = (isNumber ? ` id="v${v}"` : '');
				const vers = (isNumber ? `<sup><small>${v}</small></sup>` : '');
				const text = (isNumber ? p : par);
				const footnotes = (isNumber ? wfootnotes
					.filter(f => f.bible_vers === parseInt(v))
					.map(f => {
						return `<sup id="cite${f.cite}">` +
							`<a href="#fn${f.cite}">[${f.cite}]</a></sup>`;
					}).join(' ') : '');
				body += `<p${id}>${vers} ${text} ${footnotes}</p>\r\n`;
			};

			//Verses previous to any section
			chapter.pars.forEach(writePar);

			//Verses in sections
			chapter.sections.forEach(section => {
				body += `<h2> ${section.title} </h2>\r\n`;
				section.pars.forEach(writePar);
			});

			//Check if we have all chapter verses
			const lastVer = Math.max(...foundVers);
			for (let iVer = 1; iVer <= lastVer; iVer++) {
				if (foundVers.indexOf(iVer) === -1) {
					missingVers.push(iVer);
				}
			}
			if (missingVers.length > 0) {
				reject(this.getError('bible_chapter_missing_verses', filePath, 
					chapter.title, missingVers.join(', ')));
				return;
			}

			//Footer
			body += '<br/>\r\n';
			body += navigation;

			//References section
			if (wfootnotes.length > 0) {
				body += `<h2>${this.tr('topic_references')}</h2>\r\n`;
				body += `<div${fnStyle}>\r\n<ol>\r\n`;
				wfootnotes.forEach(f => body += '  ' + f.html);
				body += '</ol>\r\n</div>\r\n';
			}

			//Only write if content is new or file not exists
			//Avoid a new date for creation date
			writeHTMLToWikijs(filePath, header, body)
				.then(resolve, reject);
		});
	};

	/**
	 * Converts the array of references to HTML for Wiki.js.
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
	 * Writes a full index of `Bible` in HTML format for Wiki.js.
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
			const bibleIndex = this.tr('bibleFullIndex');

			//Header
			let body = '';
			let header = '';
			header += getWikijsHeader(bibleIndex);
			header += '\r\n';
			body += '\r\n<ul>\r\n';
			body += booknames.map(name => {
				const book = this.biblebooks.find(book => book.title === name);
				if (!book) return '';
				// const bookNameEN = book.titleEN.replace(/ /g, '_');
				const bookNameEN = book.path.split('/').reverse()[0];
				const chapters = book.chapters.map((c, i) => {
					const path = `/${this.language}/Bible/${bookNameEN}/${i+1}`;
					return `<a href="${path}">${i+1}</a>`;
				}).join(' ');
				return `\t<li>${name}: ${chapters}</li>\r\n`;
			}).join('');
			body += '</ul>\r\n';

			//Only write if content is new or file not exists
			//Avoid a new date for creation date
			writeHTMLToWikijs(filePath, header, body)
				.then(resolve, reject);
		});
	};

	/**
	 * Writes an index of `Bible` in HTML format for Wiki.js.
	 * It requires reading previously from any format.
	 * @param {string} dirPath Folder path.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	writeIndexToWikijs = (dirPath) => {
		return new Promise((resolve, reject) => {
			const booknames = Object.values(BibleAbbs[this.language])
				.map(e => e[0]);
			const indexName = this.tr('bookIndexName');
			const chapterName = this.tr('bookChapter');
			const bibleIndex = this.tr('bibleFullIndex');
			const frontPage = this.tr('frontpage').toUpperCase();
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
						const bookpath = this.language === 'en'?
								`/en${book.path}` : `${book.path}`;
						// const bookNameEN = book.titleEN.replace(/ /g, '_');
						const bookNameEN = book.path.split('/').reverse()[0];
						const title = `${book.title} - ${indexName}`;
						const filePath = path.join(dirPath, bookNameEN, 
							`Index.html`);
						let header = '';
						let body = '';
						header += getWikijsHeader(title, ['Bible', 'index']);
						header += '\r\n';
						body += `<ul>\r\n`;
						body += `\t<li><a href="${bookpath}">${frontPage}</a></li>\r\n`;
						body += book.chapters
							.map(c => {
								const p = `${bookpath}/${c.title}`;
								const text = `${chapterName} ${c.title}`;
								return `\t<li><a href="${p}">${text}</a></li>\r\n`;
							})
							.join(' ');
						body += '</ul>\r\n';
						body += `<p><a href="${bibleIndexPath}" ` +
							`title="${bibleIndex}">` + 
							`${bibleIndex}</a></p>\r\n`;
						//Only write if content is new or file not exists
						//Avoid a new date for creation date
						writeHTMLToWikijs(filePath, header, body)
							.then(resolve2, reject2);
					});
			});
			promises.push(this.writeFullIndexToWikijs(indexPath));
			Promise.all(promises).then(resolve, reject);
		});
	};

	/**
	 * Updates titles in Bible pages.
	 * @param {string} dirPath Folder path.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	updateWikijsTitles = (dirPath) => {
		return readFrom(dirPath, '.md', () => {return null;}, (filePath) => {
			return new Promise((resolve, reject) => {
				fs.readFile(filePath, (errFile, buf) => {
					if (errFile) {
						reject([errFile]);
						return;
					}
					const lines = buf.toString().split('\n');
					const idx = lines.findIndex(line => line.startsWith('title: '));
					if (idx === -1) {
						reject([new Error('Title line not found')]);
						return;
					}
					const title = lines[idx].split(':')[1].trim();
					const booknames = Object.values(BibleAbbs[this.language])
						.map(e => e[0]);
					const booknamesEN = Object.values(BibleAbbs['en'])
						.map(e=> e[0]);
					const iTitle = booknamesEN.indexOf(title);
					if (iTitle === -1) {
						reject([new Error(`Title ${title} not found`)]);
						return;
					}
					const newTitle = booknames[iTitle];
					lines[idx] = `title: ${newTitle}`;
					writeFile(filePath, lines.join('\n'))
						.then(resolve, reject);
				});
			});
		}, this);
	};



	//***********************************************************************
	// MediaWiki
	//***********************************************************************

	/**
	 * Writes `Bible` in MediaWiki format, each chapter a file.
	 * It requires reading previously from any format.
	 * @param {string} dirPath Folder path.
	 * @param {?Object[]} bibleref An optional Bible Reference.
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
	 * @param {?Object[]} bibleref An optional Bible Reference.
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
						// const bookNameEN = book.titleEN.replace(/ /g, '_');
						const bookNameEN = book.path.split('/').reverse()[0];
						const filePathWiki = path.join(dirPath, 
							`${bookName}_${chapter.title}.${format}`);
						const filePathHTML = path.join(dirPath,
							bookNameEN, `${chapter.title}.${format}`);

						let p, book_bibleref;
						if (bibleref) {
							book_bibleref = bibleref.find(b => 
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
						const errors = results.reduce((acc, r) => {
							return acc.concat(r.error ? r.error : [] );
						}, []);
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
	 * Translates a text.
	 * @param {string} code Code of text to translate.
	 * @param {?string} lan Optional language instead of current.
	 */
	tr = (code, lan) => {
		const language = lan ? lan : this.language;
		const t = Strings[code][language];
		const t2 = Strings[code]['en'];
		return t ? t : t2;
	};
}

module.exports = Bible;