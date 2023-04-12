//Reader/Writer for converting articles to *.wiki

const {app} = require('electron').remote;
const markdownIt = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
});
const {readFrom, readFile, reflectPromise, extendArray, getError, getAllIndexes,
	writeFile, getWikijsHeader, sentenceSimilarity, strformat,
	fixWikijsHeader} = require('./utils');
const fs = require('fs');
const path = require('path');
const Strings = require('./strings');
const pug = require('pug');

class Articles {
	language = 'en';
	docs = [];
	files = [];
	onProgressFn = null;
	index = {
		title: null,
		issues: [],
		volumes: []
	};

	createIndexFn = pug.compileFile(path.join(app.getAppPath(), 'app', 'templates', 'articleindex.pug'), {pretty: true});

	// issueTemplate =
	// 	'<h2>{0}</h2>\r\n' +
	// 	'<br />\r\n' +
	// 	'<figure class="image urantiapedia image-style-align-left">\r\n' +
	// 	'  <img src="{1}" />\r\n' +
	// 	'</figure>\r\n' +
	// 	'<table>\r\n' +
	// 	'  <tbody>\r\n' +
	// 	'  {2}' +
	// 	'  </tbody>\r\n' +
	// 	'</table>\r\n' +
	// 	'<br />\r\n';

	// articleTemplate =
	// 	'<tr>\r\n' +
	// 	'  <td>\r\n' +
	// 	'    <a href="{0}" class="title">{1}</a>\r\n' +
	// 	'    <br><a href="{2}" class="mr-2">{3}</span>\r\n' +
	// 	'    {4}' +
	// 	'  </td>\r\n' +
	// 	'</tr>\r\n';

	// tagTemplate = 
	// 	'<a href="/t/{0}"\r\n' +
	// 	'  class="mr-1 mb-1 v-chip v-chip--clickable v-chip--label v-chip--link theme--light v-size--default teal lighten-5">\r\n' +
	// 	'  <span class="v-chip__content">\r\n' +
	// 	'    <i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-tag theme--light teal--text" style="font-size: 16px;"></i>\r\n' +
	// 	'    <span class="teal--text text--darken-2">{0}</span>\r\n' +
	// 	'  </span>\r\n' +
	// 	'</a>\r\n';

	setLanguage = (language) => {
		this.language = language;
	};
	
	/**
	 * Reads all articles in TXT format in a folder.
	 * @param {string} dirPath Input folder.
	 * @returns {Promise}
	 */
	readFromTXT = (dirPath) => {
		return readFrom(dirPath, '.txt', this.clearDocs,
			this.readFileFromTXT, this);
	};

	/**
	 * Reads all articles in Markdown format in a folder.
	 */
	readFromMarkdown = (dirPath) => {
		return readFrom(dirPath, '.md', this.clearFiles,
			this.readFileFromMarkdown, this);
	};

	/**
	 * Clears articles previously read.
	 */
	clearDocs = () => {
		this.docs = [];
	};

	/**
	 * Clears files previously read.
	 */
	clearFiles = () => {
		this.files = [];
	};

	//***********************************************************************
	// TXT
	//***********************************************************************

	/**
	 * Reads an article in TXT format.
	 * @param {string} filePath TXT file.
	 * @return {Promise}
	 */
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
				let pars = [];
				let currentPar = null;
				lines.forEach((line, i) => {
					const tline = line.trim();
					if (tline.startsWith('---') && tline.indexOf('Page') != -1) {
						return;
					}
					
					if (currentPar) {
						if (tline.length > 0) {
							currentPar += ' ' + tline;
						}
						if (!lines[i+1] || lines[i+1].trim() === '') {
							pars.push(this.replaceChars(currentPar));
							currentPar = null;
						}
					} else {
						if (tline.length > 0) {
							currentPar = tline;
						}
					}
				});
				this.docs.push({
					filename: baseName,
					pars: pars
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
	 * Reads articles index file from TSV file.
	 * @param {string} filePath Input TSV file (a TXT file with tabs).
	 * @return {Promise}
	 */
	readIndexFileFromTXT = (filePath) => {
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
				this.index.title = null;
				this.index.issues.length = 0;
				this.index.volumes.length = 0;
				let currentVolume = null;
				let currentIssue = null;
				lines.forEach(line => {
					const [title, path, author, tags] = line.trim().split('\t');
					const author2 = (author ? 
						author.replace(/\./g, '').replace(/ /g, '_') : null);
					const authorLink = (author ? 
						`/${this.language}/article/${author2}` : '');
					if (title && author === 'is-title') {
						this.index.title = title;
					} else if (title && this.index.title && 
						author === 'is-volume') {
						currentVolume = {
							title: title,
							issues: []
						};
						this.index.volumes.push(currentVolume);
					} else if (title && path && this.index.title && 
						author === 'is-issue') {
						currentIssue = {
							title: title,
							imagePath: path,
							articles: []
						};
						if (currentVolume) {
							currentVolume.issues.push(currentIssue);
						} else {
							this.index.issues.push(currentIssue);
						}
					} else if (currentIssue && title && path && author) {
						currentIssue.articles.push({
							title: title,
							path: path,
							author: author,
							authorLink: authorLink,
							tags: tags ? tags.split(',')
								.map(t => t.trim().toLowerCase()) : []
						});
					}
				});
				resolve(null);
			});
		});
	};

	/**
	 * Replace some common strings wrongly typed.
	 * @param {string} content Text to change.
	 * @returns {string}
	 */
	replaceChars = (content) => {
		//TODO: support english
		return content
			.replace(/  /g, ' ')
			.replace(/del LU/g, 'de El Libro de Urantia')
			.replace(/el LU/g, 'El Libro de Urantia')
			.replace(/LU/g, 'El Libro de Urantia')
			.replace(/“/g, '«')
			.replace(/”/g, '»')
			.replace(/P.(?=\d*:\d*)/g, '');
	};

	//***********************************************************************
	// Markdown
	//***********************************************************************

	/**
	 * Reads the catalog of articles (in /output/wikijs/xx/index/articles.md)
	 * if nothing is provided in path.
	 * @param {string} filePath File with catalog of articles.
	 * @return {Promise}
	 */
	readCatalog = (filePath) => {
		// filePath = filePath || path.join(app.getAppPath(), 'output', 'wikijs', 
		// 	`${this.language}`, 'index', 'articles.md');
		filePath = filePath || path.join(app.getAppPath(), 'tests', 
			'article', 'articles.md');
		return new Promise((resolve, reject) => {
			this.clearDocs();
			readFile(filePath).then(lines => {
				const errors = [];
				let comment = false;
				let section = null;
				let header = [];
				lines.forEach((line, i) => {
					if (!comment && line.startsWith('---')) {
						comment = true;
					}
					if (!comment && line.startsWith('#')) {
						section = {
							name: line.replace(/#/g, '').trim(),
							list: []
						};
						this.docs.push(section);
					}
					if (!comment && line.indexOf('|') != -1) {
						const values = line.trim()
							.replace(/^\||\|$/g, '')
							.split('|').map(v => v.trim());
						if (values[0] === 'Status') {
							header = values;
						} else if (section && values.length > 0 &&
							values[0] != 'Status' && 
							values[0].indexOf('---') === -1 &&
							header.length === values.length) {
							const article = {};
							values.forEach((v,i) => article[header[i]] = v);
							// this.fixArticleData(article);
							section.list.push(article);
						}
					}
					if (comment && line.trim().startsWith('---')) {
						comment = false;
					}
				});
				if (errors.length > 0) {
					reject(errors);
					return
				}
				resolve(null);
			}).catch(reject);
		});
	};

	/**
	 * Fixes article data.
	 * @param {Object} article Article.
	 * @param {Error[]} errors Errors.
	 */
	fixArticleData = (article, errors) => {
		if (article.Title && getAllIndexes(article.Title, '(').length > 1) {
			errors.push(this.getError('article_bad_title'));
			return;
		}
		if (article.Status === ':white_square_button:' && 
			article.Title && article.Title.startsWith('[')) {
			const titleParts = articleTitle
				.split(/[\[\]\(\)]/g).filter(p=>p!='');
			if (titleParts.length != 2) {
				errors.push(this.getError('article_bad_title'));
				return;
			}
			article.Title = titleParts[0];

		}
	};

	/**
	 * Reads an article file in Markdown.
	 * @param {string} filePath File path.
	 * @return {Promise}
	 */
	readFileFromMarkdown = (filePath) => {
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

				const rendered = markdownIt.render(buf.toString());
				this.files.push({
					filename: baseName,
					words: baseName
						.replace(/\.md$/g, '')
						.replace(/\-\-|__/g, ' ')
						.replace(/[—\-_]/g,' '),
					content: rendered
				});
				resolve(null);
			});
		});
	};

	/**
	 * Searches files.
	 * @param {string} dirPath Output folder.
	 * @param {string} format Format as '.txt' or '.tex'. Several formats can be
	 * passed this way: '.html;.htm'
	 */
	searchFiles = (dirPath, format) => {
		return new Promise((resolve, reject) => {
			this.clearFiles();
			const inputFolder = path.join(dirPath, '__input');
			fs.readdir(inputFolder, (err, files) => {
				if (err) {
					reject([this.getError('folder_no_access', inputFolder)]);
					return;
				}
				const formats = format.split(';');
				const ffiles = files.filter(file => {
					return (formats.indexOf(path.extname(file)) != -1);
				});
				if (ffiles.length === 0) {
					reject([this.getError('files_not_with_format', format)]);
					return;
				}
				this.files = ffiles.map(file => {
					return {
						filename: file,
						words: file
							.replace(/\.md$/g, '')
							.replace(/\-\-|__/g, ' ')
							.replace(/[—\-_]/g,' ')
					}
				});
				resolve(null);
			});
		});
	};

	//***********************************************************************
	// Wiki.js
	//***********************************************************************

	/**
	 * Writes articles only with header, author and external link. Requires a
	 * previous read of metadata of articles with `readCatalog` and 
	 * `searchFiles`.
	 * @param {string} dirPath Output folder.
	 * @param {string} source Name of the source to process (for example 
	 * `Innerface International`) or null to process all them.
	 */
	writeToWikijs = (dirPath, source) => {
		return new Promise((resolve, reject) => {
			const newCatalog = path.join(dirPath, '__articles.md');
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('folder_no_access', dirPath)]);
					return;
				}
			});
			const sources = this.docs
				.filter(section => (source == null || section.name === source));
			const promises = [];
			sources.forEach(src => {
				src.list.forEach(article => {
					article.File = '  ';
					article.Input = '  ';

					if (article.Status === ':ballot_box_with_check:') {
						promises.push(reflectPromise(Promise.resolve(null)));
						return;
					}
			
					const words = article.Title
						.replace(/[“'”]/g, '')
						.replace(/[—-]/g, ' ');
					const arFN = this.files.map(f => {
						return [f.filename, sentenceSimilarity(f.words, words)];
					});
					arFN.sort((a,b) => b[1] - a[1]);
					const ok = arFN[0][1] > 0.5;
					if (!ok) {
						promises.push(reflectPromise(Promise.resolve(null)));
						return;
					}
					const input = arFN[0][0];
					article.File = input
						.replace(/\.md$/g, '')
						.replace(/\-\-|__/g, ' ')
						.replace(/[\.:,“'”\?!\(\)]/g, '')
						.replace(/[ —\-]/g, '_');
					article.Input = input;

					const folder = article.Author
						.replace(/[\.']/g, '')
						.replace(/ /g, '_');
					const filePath = (article.Author === '' ?
						path.join(dirPath, article.File + '.html') :
						path.join(dirPath, folder, article.File + '.html'));
					const title = '"' + article.Title + '"';
					const tags = (article.Tags && article.Tags.length > 0 ?
						article.Tags.split(',').map(i => i.trim()) : null);
					const author = article.Author;
					const web = `<a href="${article.Webpage}">${article.Webpage}</a>`;
					const content = this.files
						.find(f => f.filename === input).content;

					article.Title = `[${article.Title}](/${this.language}/` +
						`article${article.Author === '' ? '' : '/' + folder}/` +
						`${article.File})`;

					let md = getWikijsHeader(title, tags);
					md += '\r\n';
					md += (article.Author === '' ? '' :
						`<p>Author: <b>${author}</b></p>\r\n\r\n`);
					md += content + '\r\n\r\n';
					md += `<h2>External links</h2>\r\n\r\n`;
					md += `<ul>\r\n<li>Article in ${source}: ${web}</li>\r\n</ul>\r\n\r\n`;

					if (article.Author != '' && 
						!fs.existsSync(path.join(dirPath, folder))) {
						fs.mkdirSync(path.join(dirPath, folder));
					}
					promises.push(reflectPromise(writeFile(filePath, md)));
				});
			});
			let nc = '';
			sources.forEach(src => {
				nc += `## ${src.name}\r\n\r\n`;
				src.list.forEach((article, i) => {
					const values = Object.values(article);
					const keys = Object.keys(article);
					const sep = keys.map(k => k.replace(/./g,'-'));
					if (i == 0) {
						nc += '| ' + keys.join(' | ') + ' |\r\n';
						nc += '| ' + sep.join(' | ') +' |\r\n';
					}
					nc += '| ' + values.join(' | ') + ' |\r\n';
				});
			});
			promises.push(reflectPromise(writeFile(newCatalog, nc)));

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

	/**
	 * Writes the current index read to Wiki.js HTML format.
	 * @param {string} filePath Output Wiki file.
	 * @return {Promise}
	 */
	writeIndexFileToWikijs = (filePath) => {
		return new Promise((resolve, reject) => {
			if (this.onProgressFn) {
				this.onProgressFn(filePath);
			}
			let html = '';
			let html2 = '';

			const writeFile = () => {
				fs.writeFile(filePath, html2 + html, 'utf-8', (err) => {
					if (err) {
						reject([err]);
						return;
					}
					resolve(null);
				});
			};

			html2 += getWikijsHeader(this.index.title, ['index', 'article']);
			html2 += '\r\n';

			// html = this.index.issues
			// 	.map(issue => {
			// 		const { title, imagePath, articles } = issue;
			// 		const htmlArticles = articles
			// 			.map(article => {
			// 				const { title: t, path, author, tags } = article;
			// 				const htmlTags = tags
			// 					.map(tag => {
			// 						return strformat(this.tagTemplate, tag);
			// 					})
			// 					.join('');
			// 				return strformat(this.articleTemplate, path, t, 
			// 					author, htmlTags);
			// 			})
			// 			.join('');
			// 		return strformat(this.issueTemplate, title, imagePath, 
			// 			htmlArticles);
			// 	})
			// 	.join('');

			html = this.createIndexFn(this.index);

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

	//***********************************************************************
	// MediaWiki
	//***********************************************************************

	/**
	 * Writes articles in Wiki format.
	 * @param {string} dirPath Output folder.
	 * @return {Promise}
	 */
	writeToWikiText = (dirPath) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('folder_no_access', baseName)]);
					return;
				}
				const promises = this.docs.map(doc => {
					let filename = doc.filename.replace('.txt', '');
					let filePath = path.join(dirPath, `${filename}.wiki`);
					let p = this.writeFileToWikiText(filePath, doc);
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
	 * Writes an article to Wiki format.
	 * @param {string} filePath Output file.
	 * @param {Object} doc Article object.
	 * @return {Promise}
	 */
	writeFileToWikiText = (filePath, doc) => {
		return new Promise((resolve, reject) => {
			let wiki = '';
			const end = '\r\n\r\n';

			doc.pars.forEach((par, i) => {
				const refs = par.match(/\d+:(\d*)(\.\d)?/g)
				if (refs) {
					const refs2 = refs.map(this.refToWiki);
					refs.forEach((r,i) => par = par.replace(r, refs2[i]));
				}
				par = par.replace(/El Libro de Urantia/g, '\'\'El Libro de Urantia\'\'');
				
				wiki += par + end;
			});

			//TODO: Fix blank spaces if more than 2 between words

			//TODO: Add blockquotes when detecting a quote

			//TODO: Add references section


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
	 * @return {string}
	 */
	refToWiki = (ref) => {
		let wiki = '';
		let data = ref.split(/[:.]/g);
		wiki += `<ref>{{lib|LU|`;
		if (data.length === 1) {
			wiki += data[0];
		} else if (data.length === 2) {
			wiki += `${data[0]}|${data[1]}`;
		} else if (data.length === 3) {
			wiki += `${data[0]}|${data[1]}|${data[2]}`;
		}
		wiki += '}}</ref>';
		return wiki;
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

module.exports = Articles;