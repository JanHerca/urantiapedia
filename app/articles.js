//Reader/Writer for converting articles to *.wiki

const {app} = require('electron').remote;
const markdownIt = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
});
const {readFrom, readFile, reflectPromise, extendArray, getError, getAllIndexes,
	writeFile, getWikijsHeader, sentenceSimilarity, replaceTags, strformat,
	fixWikijsHeader, getWikijsArticleLinks, getFiles, autoCorrect} = require('./utils');
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
		link: null,
		sourceText: "Source: ",
		tags: [],
		issues: [],
		volumes: [],
		language: 'en'
	};
	items = [];
	articles = [];
	paralells = [];
	publications = [
		'Innerface International',
		'Fellowship Herald', 
		'Mighty Messenger', 
		'Luz y Vida',
		'Urantian News',
		'Urantia Foundation News Online'
	];

	createIndexFn = pug.compileFile(path.join(app.getAppPath(), 'app', 'templates', 'articleindex.pug'), {pretty: true});

	setLanguage = (language) => {
		this.language = language;
		this.index.language = language;
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

	/**
	 * Clears the index previously read.
	 */
	clearIndex = () => {
		this.index.title = null;
		this.index.link = null;
		this.index.tags.length = 0;
		this.index.issues.length = 0;
		this.index.volumes.length = 0;
		this.items.length = 0;
	};

	/**
	 * Clears the list of articles.
	 */
	clearArticles = () => {
		this.articles.length = 0;
	};

	/**
	 * Clears the list of paralells.
	 */
	clearParalells = () => {
		this.paralells.length = 0;
	};

	/**
	 * Gets the paralells for a given paper in The Urantia Book.
	 * @param {number} paperIndex Urantia Book paper index starting at zero.
	 * [0-196].
	 * @return {Object[]} Returns an array of objects with the paralells. The 
	 * objects have these values:
	 * - par_ref: paragraph reference
	 * - sorting: a value for sorting
	 * - location: the sentence index in which insert the footnote. If 999
	 * the footnote must be inserted at the end of the paragraph.
	 * - html: HTML fragment to add in the References section of Urantia Book 
	 * paper.
	 * - suffix: 'a' for articles or 's' for study aids.
	 * Returns an empty array if no paralell exists.
	 */
	getParalells = (paperIndex) => {
		const paralells = this.paralells
			.filter(p => p.ref.startsWith(`${paperIndex},`));
		const urls = {
			a: paralells.filter(p => p.anchor[0] === 'a')
				.map(p => p.url).filter((u, i, ar) => ar.indexOf(u) === i)
				.sort(),
			s: paralells.filter(p => p.anchor[0] === 's')
				.map(p => p.url).filter((u, i, ar) => ar.indexOf(u) === i)
				.sort()
		};

		const result = paralells
			.reduce((ac, cur, i, arr) => {
				const prev = ac.find(p => p.url === cur.url);
				if (!prev) {
					const newp = {...cur};
					delete newp.anchor;
					delete newp.ref;
					newp.refs = arr
						.filter(p => p.url === cur.url)
						.sort((a,b) => {
							if (a.ref > b.ref) return 1;
							if (a.ref < b.ref) return -1;
							return 0;
						})
						.reduce((ac2, cur2) => {
							const prev2 = ac2.find(r => r.ref === cur2.ref);
							if (prev2) {
								prev2.anchors.push(cur2.anchor);
							} else {
								ac2.push({
									ref: cur2.ref,
									anchors: [cur2.anchor]
								});
							}
							return ac2;
						}, []);
					newp.refs.forEach(r => r.anchors.sort());
					newp.suffix = cur.anchor[0];
					ac.push(newp);
				}
				return ac;
			}, [])
			.map(p => {
				const r0 = p.refs[0].ref.split(',');
				const s = parseInt(r0[1]) * 1000 + 
					(r0.length === 3 ? parseInt(r0[2]) : 0);
				const back = '<a href="{0}">↑ <small{1}>{2}</small></a>';
				const refs = [];
				const link = p.refs.map(r => {
					const ra = r.ref.split(',');
					const ref = (ra.length == 2 ? `${ra[0]}:${ra[1]}` :
						`${ra[0]}:${ra[1]}.${ra[2]}`);
					const index = urls[p.suffix].indexOf(p.url);
					const cite_format = (ra.length == 2 ? '#p{0}' :
						'#cite_{0}{1}_{2}_{3}');
					const cite_id = (ra.length == 2 ?
						strformat(cite_format, ra[1]) :
						strformat(cite_format, p.suffix, ra[1], ra[2], index));
					const small_id = (ra.length == 2 ? '' : 
						' id="' + cite_id.replace('#cite', 'fn') + '"');
					const hback = strformat(back, cite_id, small_id, ref);
					const links = r.anchors.map((a, j) => {
						return `<a href="${p.url + '#' + a}">#${j+1}</a>`;
					}).join(', ');
					refs.push(ref);
					return hback + ': ' + links;
				}).join('; ') + '.';
				const title = ` <a href="${p.url}"><i>${p.title}</i></a>`;
				const author = (p.author != '' ? 
					`, ${replaceTags(p.author, '_', '_', '<i>', '</i>', [])}` : 
					'')
				const pub = (p.publication != '' ? `, ${p.publication}` : '');
				const year = (p.year != '' ? `, ${p.year}` : '');
				const html = ' ' + link + title + author + pub + year;
				return {
					par_refs: refs,
					sorting: s,
					location: 999,
					html: html,
					suffix: p.suffix,
					url: p.url
				};
			});
		result.sort((a, b) => a.sorting - b.sorting);
		return result;
	};

	//***********************************************************************
	// TXT, TSV
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
	readIndexFileFromTSV = (filePath) => {
		const baseName = path.basename(filePath);
		const baseName2 = path.basename(filePath, '.tsv');
		const indexPath = `/${this.language}/index/${baseName2}`;
		const correction = {
			"\\.": "",
			" ": "_",
			"-": "_",
			"á": "a",
			"â": "a",
			"é": "e",
			"í": "i",
			"ó": "o",
			"ú": "u",
			"ñ": "n",
			"ö": "o",
			"õ": "o",
			"“": "",
			"”": "",
			"'": "",
			"è": "e"
		};
		const correction2 = {
			"[\\.,\\(\\)—\\-]": "",
			"( +)": "-"
		};
		return new Promise((resolve, reject) => {
			if (this.onProgressFn) {
				this.onProgressFn(baseName);
			}

			fs.readFile(filePath, (errFile, buf) => {
				const lan = this.language;
				if (errFile) {
					reject([errFile]);
					return;
				}
				const lines = buf.toString().split('\n');
				if (lines.length === 0) {
					reject([this.getError('article_index_no_lines')]);
					return;
				}
				if (filePath.indexOf('articles-en') != -1) {
					this.clearIndex();
				}
				let currentVolume = null;
				let currentIssue = null;
				let currentArticle = null;
				let issueAnchor = null;
				const len = lines[0].split('\t').length;
				if (len != 2 && len != 4) {
					reject([this.getError('article_index_missing_data', 1)]);
					return;
				}
				const errIndex = lines.findIndex(line => {
					return (line.split('\t').length != len);
				});
				if (errIndex != -1) {
					reject([this.getError('article_index_missing_data', 
						errIndex + 1)]);
					return;
				}
				if (len === 2) {
					lines.forEach((line, i) => {
						const [title, translation] = line.trim().split('\t');
						if (i === 0) {
							this.index.title = translation;
							return;
						}
						const item = this.items.find(t => t.line === i);
						if (item) {
							item.title = translation;
						}
						if (item.articles) {
							issueAnchor = autoCorrect(translation, correction2)
								.toLowerCase();
							item.path = indexPath + '#' + issueAnchor;
						} else if (item.path) {
							item.path = 
								item.path.replace('/en/', `/${lan}/`);
						}
						if (item.authorLink) {
							item.authorLink =
								item.authorLink.replace('/en/', `/${lan}/`);
						}
					});
				} else {
					lines.forEach((line, i) => {
						const [title, path, author, tags] = line.split('\t');
						const author2 = (author != '' && 
							!author.startsWith('-') &&
							!author.startsWith('is-') ? 
							autoCorrect(author, correction) : '');
						const authorLink = (author ? 
							`/${lan}/article/${author2}` : '');
						if (author === 'is-title') {
							this.index.title = title.trim();
							this.index.link = path;
							this.index.tags = ['Index', 'Article', tags];
							this.index.sourceText = 
								Strings.articlesSource[lan] + ': ';
						} else if (this.index.title && author === 'is-volume') {
							currentVolume = {
								title: title,
								line: i,
								issues: []
							};
							this.index.volumes.push(currentVolume);
							this.items.push(currentVolume);
						} else if (this.index.title && author === 'is-issue') {
							issueAnchor = autoCorrect(title, correction2)
								.toLowerCase();
							currentIssue = {
								title: title,
								line: i,
								path: indexPath + '#' + issueAnchor,
								imagePath: path ? path : '',
								articles: []
							};
							if (currentVolume) {
								currentVolume.issues.push(currentIssue);
							} else {
								this.index.issues.push(currentIssue);
							}
							this.items.push(currentIssue);
						} else if (currentIssue && title && path) {
							currentArticle = {
								title: title,
								line: i,
								path: path,
								author: (author != '' && 
									!author.startsWith('-') ? author : ''),
								authorLink: authorLink,
								tags: tags ? tags.split(',')
									.map(t => t.trim().toLowerCase()) : []
							};
							currentIssue.articles.push(currentArticle);
							this.items.push(currentArticle);
						}
					});
				}
				resolve(null);
			});
		});
	};

	/**
	 * Reads cross refs (paralells) between articles and Urantia Book.
	 * @param {string} filePath File with cross refs. (.tsv)
	 * @return {Promise}
	 */
	readUBParalellsFromTSV = (filePath) => {
		return new Promise((resolve, reject) => {
			this.clearParalells();
			fs.readFile(filePath, (errFile, buf) => {
				const lan = this.language;
				if (errFile) {
					reject([errFile]);
					return;
				}
				const lines = buf.toString().split('\n');
				this.paralells = lines.map(line => {
					const data = line.split('\t');
					return {
						anchor: data[0],
						ref: data[1],
						title: data[2],
						url: data[3],
						author: data[4],
						publication: data[5],
						year: data[6]
					};
				});
				resolve(null);
			});
		});
	};

	/**
	 * Writes cross refs (paralells) between articles and Urantia Book.
	 * Requires a previous call to readArticlesFromWikijs.
	 * @param {string} filePath Output file.
	 * @return {Promise}
	 */
	writeUBParalellsToTSV = (filePath) => {
		return new Promise((resolve, reject) => {
			let lines = [];
			if (this.articles.length == 0) {
				return null;
			}
			this.articles.forEach(article => {
				if (article.refs.length == 0) {
					return;
				}
				article.refs.forEach(ref => {
					const author = (article.author ? article.author : '');
					const year = (article.year ? article.year : '');
					const pub = (article.publication ? 
						article.publication : '');
					const content = `${ref.anchor}\t${ref.ref.join(',')}\t` +
						`${article.title}\t${article.url}\t${author}\t` +
						`${pub}\t${year}`;
					lines.push(content);
				});
			});
			const errors = this.articles
				.filter(a => a.errors.length > 0)
				.map(a => {
					const errs = a.errors.join('; ');
					return new Error(`Error in ${a.url}: ${errs}`);
				});
			writeFile(filePath, lines.join('\n'))
				.then(() => {
					if (errors.length > 0) {
						reject(errors);
					} else {
						resolve(null);
					}
				}, reject);
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
	 * Reads articles in Wiki.js format, collecting metadata of the articles,
	 * anchor and link info, and cheking that links are ok.
	 * @param {string} dirPath Output folder of articles.
	 * @param {Book} ubook Urantia Book.
	 * @return {Promise}
	 */
	readArticlesFromWikijs = (dirPath, ubook) => {
		return getFiles(dirPath)
			.then(files => {
				const formats = ['.md'];
				const ffiles = files.filter(file => {
					return (formats.indexOf(path.extname(file)) != -1);
				});
				if (ffiles.length === 0) {
					return Promise.reject([this.getError('files_not_with_format', formats.toString())]);
				}

				this.clearArticles();

				const reLink = new RegExp('<a id="([as]\\d+_\\d+)"><\\/a>' +
					'\\[[^\\]]+\\]' + `\\(\/${this.language}\/` +
					'The_Urantia_Book\/(\\d+)#p(\\d+)(?:_(\\d+))?\\)', 'g');
				const reCopy = new RegExp('© ([\\d-]+) ([^\\d<]+)', 'g');
				
				const promises = ffiles.map(filePath => {
					return readFile(filePath)
						.then(lines => {
							const url = `/${this.language}/article` +
								filePath
									.replace(dirPath, '')
									.replace('.md', '')
									.replace(/\\/g, '/');
							const article = {
								title: '',
								author: '',
								publication: '',
								year: '',
								path: filePath,
								url: url,
								refs: [],
								errors: []
							};
							let isMetadata = false;
							let ignore = false;
							lines.forEach(line => {
								if (ignore) {
									return;
								}
								const matches = [...line.matchAll(reLink)];
								const copys = [...line.matchAll(reCopy)];
								if (!isMetadata && line.startsWith('---')) {
									isMetadata = true;
								}
								if (isMetadata && line.startsWith('title:')) {
									article.title = line.replace('title:', '')
										.trim().replace(/"/g, '');
								}
								if (isMetadata && line.startsWith('tags:')) {
									//Pages with bio of authors must be ignored
									if (line.startsWith('tags: author')) {
										ignore = true;
									}
									const pub = this.publications.find(p => {
										return line.toLowerCase()
											.indexOf(p.toLowerCase()) != -1;
									});
									if (pub) {
										article.publication = pub;
									}
								}
								if (line.startsWith('<p class="v-card') &&
									copys.length > 0) {
									if (copys[0].length > 2) {
										article.author = copys[0][2];
										article.year = copys[0][1];
									} else if (copys[0].length > 1) {
										article.year = copys[0][1];
									}
								}
								if (matches.length == 0) {
									return;
								}
								matches.forEach(m => {
									const ref = [m[2], m[3]];
									if (m[4]) {
										ref[2] = m[4];
									}
									article.refs.push({ 
										anchor: m[1], 
										ref: ref 
									});
									const strRef = (ref.length === 2 ?
										`${ref[0]}:${ref[1]}` :
										`${ref[0]}:${ref[1]}.${ref[2]}`);
									const ar = ubook.getArrayOfRefs([strRef]);
									if (!ar[0]) {
										article.errors.push(strRef);
									}
								});
							});
							if (!ignore) {
								this.articles.push(article);
							}
						});
				});
				return Promise.all(promises);
			});
	};

	/**
	 * Writes articles only with header, author and external link. Requires a
	 * previous read of metadata of articles with `readCatalog` and 
	 * `searchFiles`.
	 * @param {string} dirPath Output folder.
	 * @param {string} source Name of the source to process (for example 
	 * `Innerface International`) or null to process all them.
	 * @return {Promise}
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

			html2 += getWikijsHeader(this.index.title.trim(), 
				this.index.tags.map(t=>t.trim()));
			html2 += '\r\n';
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

	/**
	 * Writes navigation headers of articles in Wiki.js format. 
	 * Articles must be in Markdown format, and if a header is already 
	 * detected, it is not added.
	 * @param {string} dirPath Output folder.
	 * @return {Promise}
	 */
	writeNavigationHeadersToWikijs = (dirPath) => {
		return new Promise((resolve, reject) => {
			//Loop through issues/articles
			const issues = [];
			if (this.index.issues.length > 0) {
				this.index.issues.forEach(issue => issues.push(issue));
			} else if (this.index.volumes.length > 0) {
				this.index.volumes.forEach(volume => {
					volume.issues.forEach(issue => issues.push(issue));
				});
			}
			if (issues.length == 0) {
				reject([this.getError('article_index_no_issues')]);
				return;
			}

			const promises = [];
			const hStart = '<figure class="table chapter-navigator">';
			issues.forEach(issue => {
				issue.articles.forEach((article, i) => {
					const apath = article.path
						.replace(`/${this.language}/article/`, '')
						.split('/');
					const filePath = path.join(dirPath, ...apath) + '.md';
					const promise = readFile(filePath)
						.then(lines => {
							if (lines.find(line => line.startsWith(hStart))) {
								return Promise.resolve(null);
							}
							const index = lines.findIndex(line => {
								return line.startsWith('<p class="v-card');
							});
							if (index === -1) {
								const err = this.getError(
									'article_has_no_copyright_card', 
									article.path);
								return Promise.reject(err);
							}
							const prev = (i === 0 ? null : issue.articles[i-1]);
							const next = (i === issue.articles.length - 1 ?
								null : issue.articles[i+1]);
							const header = getWikijsArticleLinks(prev, issue, 
								next);
							const hasNotes = (lines.findIndex(line => {
								return line.startsWith('[^1]:');
							}) != -1);
							let index2 = -1;
							lines.forEach((line, j) => {
								if (line.startsWith('## ')) {
									index2 = j;
								}
							});
							index2 = (hasNotes && index2 != -1 ? index2 : -1);
							const n1 = lines.slice(0, index+1);
							const n2 = header.split('\n');
							const n3 = (index2 != -1 ? 
								lines.slice(index+1, index2) :
								lines.slice(index+1));
							const n4 = ['', ...header.split('\n')];
							const n5 = (index2 != -1 ?
								lines.slice(index2) : []);
							const newlines = [
								...n1, ...n2, ...n3, ...n4, ...n5];
							return Promise.resolve(newlines);
						})
						.then(lines => {
							if (!lines) {
								return null;
							}
							const content = lines.join('\n');
							return writeFile(filePath, content);
						});
					promises.push(reflectPromise(promise));
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
				})
		});
	};

	/**
	 * Writes anchors for links in Wiki.js format. 
	 * Articles must be in Markdown format, and creates links for Urantia Book.
	 * @param {string} dirPath Output folder.
	 * @return {Promise}
	 */
	writeAnchorsToWikijs = (dirPath) => {
		return getFiles(dirPath)
			.then(files => {
				const studyAidPaths = this.index.issues.reduce((ac, cur) => {
					cur.articles.forEach(article => ac.push(article.path));
					return ac;
				}, []);
				const formats = ['.md'];
				const ffiles = files.filter(file => {
					return (formats.indexOf(path.extname(file)) != -1);
				});
				if (ffiles.length === 0) {
					return Promise.reject([this.getError('files_not_with_format', formats.toString())]);
				}
				const reLink = new RegExp('\\[[^\\]]+\\]' +
					`\\(\/${this.language}\/` +
					'The_Urantia_Book\/(\\d+)#p(\\d+)(?:_(\\d+))?\\)', 'g');
				const reAnchor = new RegExp('<a id="a\\d+_\\d+"><\\/a>', 'g');
				const promises = ffiles.map(filePath => {
					const filePath2 = filePath.replace(/\\/g, '/');
					const isStudyAid = studyAidPaths
						.find(p => filePath2.indexOf(p) != -1) != null;
					const prefix = (isStudyAid ? 's' : 'a');
					return readFile(filePath)
						.then(lines => {
							return lines.map((line, i) => {
								const newLine = line.replace(reAnchor, '');
								let newLine2 = '';
								const matches = [...newLine.matchAll(reLink)];
								if (matches.length === 0) {
									return newLine;
								}
								const indexes = matches.map(m => m.index);
								indexes.forEach((index, n) => {
									const prev = (n === 0 ? 0 : indexes[n-1]);
									const s = newLine.substring(prev, index);
									const id = `${prefix}${i}_${index}`;
									newLine2 += s + `<a id="${id}"></a>`;
								});
								newLine2 += newLine.substring(
									indexes[indexes.length-1]);
								return newLine2;
							});
						})
						.then(lines => {
							if (!lines) {
								return null;
							}
							const content = lines.join('\n');
							return writeFile(filePath, content);
						});
				});
				return Promise.all(promises);
			});
	};

	/**
	 * Creates blank articles (only with header) using the current index.
	 * @param {string} dirPath Output folder.
	 * @return {Promise}
	 */
	createBlankArticles = (dirPath) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('folder_no_access', baseName)]);
					return;
				}
				var data = [];
				var issues = [];
				this.index.volumes.forEach(volume => {
					volume.issues.forEach(issue => issues.push(issue));
				});
				this.index.issues.forEach(issue => issues.push(issue));
				issues.forEach(issue => {
					const reYear = [...issue.title.matchAll(/(\d{4})/g)];
					const year = (reYear.length > 0 ? reYear[0][0] : '');
					issue.articles.forEach(article => {
						const m = `/${this.language}/article`;
						const subpath = article.path.replace(m, '');
						const filepath = path.join(dirPath, subpath + '.md');
						data.push({
							path: filepath,
							title: article.title,
							author: article.author,
							year: year
						});
					});
				});
				const errs = [];
				data.forEach(d => {
					const folder = path.dirname(d.path);
					try {
						if (!fs.existsSync(folder)) {
							fs.mkdirSync(folder);
						}
					} catch (er) {
						errs.push(this.getError('folder_no_access', folder));
					}
				});
				if (errs.length > 0) {
					reject(errs);
					return;
				}
				const tags = this.index.tags.filter(t => {
					return (t.toLowerCase() != 'index' &&
						t.toLowerCase() != 'article');
				}).map(t => t.trim()).join(', ');
				const name = this.index.title
					.replace('Index of ', '')
					.replace(' articles', '');
				const promises = data.map(d => {
					const date = new Date();
					const year = date.getFullYear();
					const month = date.getMonth()+1;
					const day = date.getDate();
					const datestr = `${year}-${month}-${day}` +
						`T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}Z`;
					const cls = 'v-card v-sheet theme--light gray lighten-3 px-2';
					const author = (d.author != '' ? 
						`© ${d.year} ${d.author}<br>` : '');
					
					let md = `---\r\n` +
						`title: "${d.title}"\r\n` +
						`description: \r\n` +
						`published: true\r\n` +
						`date: ${datestr}\r\n` +
						`tags: ${tags + ', article'}\r\n` +
						`editor: markdown\r\n` +
						`dateCreated: ${datestr}\r\n` +
						`---\r\n` +
						`\r\n` +
						`<p class="${cls}">${author}© ${d.year} ${tags}</p>` +
						`\r\n\r\n\r\n\r\n\r\n` +
						`## References\r\n` +
						`\r\n` +
						`- ${name}: ${this.index.link}\r\n\r\n`;
					return reflectPromise(writeFile(d.path, md));
				});
				Promise.all(promises).
					then(objs => {
						const er = objs
							.filter(obj => obj.error != null)
							.map(obj => obj.error);
						if (er.length > 0) {
							reject(er);
							return;
						}
						resolve(null);
					});
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