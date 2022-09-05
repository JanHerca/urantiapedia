//Reader/Writer for converting articles to *.wiki

const {app} = require('electron').remote;
const readFrom = require('./utils').readFrom;
const readFile = require('./utils').readFile;
const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const getError = require('./utils').getError;
const fs = require('fs');
const path = require('path');
const Strings = require('./strings');

class Articles {
	language = 'en';
	docs = [];
	onProgressFn = null;

	setLanguage = (language) => {
		this.language = language;
	};
	
	/**
	 * Reads all articles in TXT format in a folder.
	 * @param {string} dirPath Input folder.
	 * @returns {Promise}
	 */
	readFromTXT = (dirPath) => {
		return readFrom(dirPath, '.txt', this.clear,
			this.readFileFromTXT, this);
	};

	/**
	 * Clears articles previously read.
	 */
	clear = () => {
		this.docs = [];
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
		filePath = filePath || path.join(app.getAppPath(), 'output', 'wikijs', 
			`${this.language}`, 'index', 'articles.md')
		return new Promise((resolve, reject) => {
			this.clear();
			readFile(filePath)
				.then(lines => {
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
								//TODO: add to article a valid file name and a valid path (mainly a valid author name)
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
				})
				.catch(reject);
		});
	};

	//***********************************************************************
	// Wiki.js
	//***********************************************************************

	/**
	 * Writes articles only with header, author and external link. Requires a
	 * previous read of metadata of articles with `readCatalog`.
	 * @param {string} dirPath Output folder.
	 * @param {string} source Name of the source to process (for example 
	 * `Innerface International`) or null to process all them.
	 */
	writeEmptyArticles = (dirPath, source) => {
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('folder_no_access', dirPath)]);
					return;
				}
			});
			const sources = this.docs
				.filter(section => source == null || section.name === source);
			const promises = [];
			sources.forEach(src => {
				src.list.forEach(article => {
					//TODO: Add to promises a reflected one that writes an article
					//TODO: Check if file exists and return a resolved promise
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