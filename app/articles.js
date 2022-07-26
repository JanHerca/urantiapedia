//Reader/Writer for converting articles to *.wiki

const readFrom = require('./utils').readFrom;
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