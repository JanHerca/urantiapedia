const fs = require('fs');
const path = require('path');
const Strings = require('./strings');

/**
 * Formats a string using '{x}' pattern where x in a number 0..n.
 * First arg must be the string, and the rest the values.
 * @param {...string} params Strings.
 * @return {string}
 */
exports.strformat = (...params) => {
	const str = params[0];
	return str.replace(/{(\d+)}/g, function(match, number) {
		const n = (parseInt(number)+1).toString();
		return typeof params[n] != 'undefined' ? params[n] : match;
	});
};

/**
 * Corrects a string with some replacements.
 * @param {string} text Text to correct.
 * @param {Object} correction Object with strings to search as keys and strings
 * to use instead as values.
 * @return {string}
 */
exports.autoCorrect = (text, correction) => {
	let result = text;
	Object.keys(correction).forEach(c => {
		const reg = new RegExp(c, 'g');
		result = result.replace(reg, correction[c]);
	});
	return result;
};

/**
 * Extracts part of a text enclosed in two other texts. It is extracted the 
 * first appearance, the rest are ignored.
 * @param {string} content Text from which extract.
 * @param {string} start Starting text.
 * @param {string} end Ending text.
 * @return {?string}
 */
exports.extractStr = (content, start, end) => {
	const index = content.indexOf(start);
	if (index === -1) return null;
	const index2 = content.indexOf(end, index);
	if (index2 === -1) return null;
	return content.substring(index + start.length, index2);
};

/**
 * Returns all indexes in which a char is found.
 * @param {string} content Text to search.
 * @param {string} char A char.
 * @return {number[]}
 */
exports.getAllIndexes = (content, char) => {
	let indexes = [], i = -1;
	while ((i = content.indexOf(char, i+1)) != -1) {
		indexes.push(i);
	}
	return indexes;
};

/**
 * Returns an error.
 * @param  {...any} params Params.
 * @returns {Error}
 */
exports.getError = (...params) => {
	const language = params[0];
	const msg = params[1];
	let text = Strings[msg][language];
	if (!text) {
		text = Strings[msg]['en'];
	}
	return new Error(exports.strformat(text, ...params.slice(2)));
};

/**
 * Returns a new promise using the one passed that is always set and never
 * rejects, returning an object with `value` if promise is resolved or 
 * `error` if promise is rejected.
 * This new type of promise is useful to execute a Promise.all that iterates
 * through all promises even if some are rejected.
 * @param {Promise} promise Promise to reflect.
 * @return {Promise}
 */
exports.reflectPromise = (promise) => {
	return promise.then((value) => {
		return {value: value}
	}, (err) => {
		return {error: err}
	});
};

/**
 * Extends an array.
 * @param {Array.<VALUE>} arr Array to modify.
 * @param {Array.<VALUE>|VALUE|undefined} data Array to add.
 * @template VALUE
 */
exports.extendArray = function(arr, data) {
	if (data == null) {
		return;
	}
	var i;
	var extension = Array.isArray(data) ? data : [data];
	var length = extension.length;
	for (i = 0; i < length; i++) {
		arr[arr.length] = extension[i];
	}
};

/**
 * Replaces inside a string a start and end tag with other start and end text.
 * @param {string} content String to replace.
 * @param {string} initTag Starting tag.
 * @param {string} endTag Ending tag.
 * @param {string} initTag2 Tag to use to replace starting tag.
 * @param {string} endTag2 Tag to use to replace ending tag.
 * @param {string[]} errors Array of messages for errors.
 * @return {string}
 */
exports.replaceTags = function(content, initTag, endTag, initTag2, endTag2, errors) {
	let result = '', ii, i = 0, index;
	while (i < content.length) {
		index = content.indexOf(initTag, i);
		if (index === -1) {
			result += content.substring(i);
			break;
		} else {
			result += content.substring(i, index);
		}
		ii = index + initTag.length;
		i = content.indexOf(endTag, ii);
		if (i === -1) {
			errors.push('book_tag_no_closing');
			return content;
		}
		result += initTag2 + content.substring(ii, i) + endTag2;
		i += endTag.length;
	}
	return result;
};

/**
 * Removes inside a string all content between a starting and end tags in
 * all occurrences or only tags. Starting and ending tags must be HTML tags. 
 * Removes not only tags but also attributes. Also removes double blank
 * spaces.
 * @example
 * const text = 'This text <span class="extra">with a tag</span> inside';
 * const text2 = removeHTMLTags(text, '<span>', '</span>', false, []);
 * // returns 'This text with a tag inside'
 * const text3 = removeHTMLTags(text, '<span>', '</span>', true, []);
 * // return 'This text inside'
 * @param {string} content String to replace.
 * @param {string} initTag Starting tag.
 * @param {string} endTag End tag.
 * @param {boolean} removeContent If remove text inside tags or not.
 * @param {string[]} errors Array to store errors.
 * @return {string}
 */
exports.removeHTMLTags = function(content, initTag, endTag, removeContent, errors) {
	let result = '', ii, i = 0, index;
	const iTag = initTag.substring(0, initTag.length - 1);
	while (i < content.length) {
		index = content.indexOf(iTag, i);
		if (index === -1) {
			result += content.substring(i);
			break;
		}
		result += content.substring(i, index);
		ii = index + iTag.length;
		index = content.indexOf('>', ii);
		i = content.indexOf(endTag, ii);
		if (i === -1 || index === -1 || index >= content.length - 4 || index >= i) {
			errors.push('book_tag_no_closing');
			break;
		}
		if (!removeContent) {
			result += content.substring(index + 1, i);
		}
		i += endTag.length;
	}
	return result;
};

/**
 * Converts a text in LaTeX format to HTML format, replacing special chars 
 * with same chars but adapted to Wiki formats.
 * @param {string} content Content.
 * @returns {string}
 */
exports.replaceSpecialChars = (content) => {
	return content
		.replace(/(\\\"u)/g, 'ü')
		.replace(/(---)/g, '—')
		.replace(/`/g, '‘')
		.replace(/'/g, '’')
		.replace(/\\bigbreak/g, '<br/>')
		.replace(/{\\textdegree}/g, '&deg;')
		.replace(/{\\textordmasculine}/g, 'º')
		.replace(/{\\textordfeminine}/g, 'ª')
		.replace(/\\textsuperscript\{27\}/g, '<sup>27</sup>')
		.replace(/\\textsuperscript\{3\}/g, '<sup>3</sup>')
		.replace(/{\\textonequarter}/g, '&frac14;');
};

/**
 * Returns a text in any format except LaTeX replacing special chars with  
 * the same chars but adapted to LaTeX format.
 * @param {string} content Content.
 * @returns {string}
 */
exports.replaceInverseSpecialChars = (content) => {
	return content
		.replace(/(ü)/g, '\\\"u')
		.replace(/(—)/g, '---')
		.replace(/<br\/>/g, '\\bigbreak')
		.replace(/&deg;/g, '{\\textdegree}')
		.replace(/º/g, '{\\textordmasculine}')
		.replace(/ª/g, '{\\textordfeminine}')
		.replace(/<sup>27<\/sup>/g, '\\textsuperscript{27}')
		.replace(/<sup>3<\/sup>/g, '\\textsuperscript{3}')
		.replace(/&frac14;/g, '{\\textonequarter}');
};

/**
 * Returns a promise that reads a folder, search files in a format and executes
 * a given function with each file. If any file rejects, then all the promise
 * rejects.
 * @param {string} dirPath Folder path.
 * @param {string} format Format as '.txt' or '.tex'. Several formats can be
 * passed this way: '.html;.htm'
 * @param {Function} clearFunction Function to clear data before reading. It must
 * be a function without params that returns nothing.
 * @param {Function} readFunction Function to execute with each file. It must be
 * a function with a filePath param that returns a promise.
 * @param {Object} thisObj Object to pass as 'this'.
 * @return {Promise}
 */
exports.readFrom = function(dirPath, format, clearFunction, readFunction, thisObj) {
	return new Promise((resolve, reject) => {
		fs.readdir(dirPath, (err, files) => {
			if (err) {
				reject([exports.getError(thisObj.language, 'folder_not_exists', dirPath)]);
				return;
			}
			const formats = format.split(';');
			const ffiles = files.filter(file => {
				return (formats.indexOf(path.extname(file)) != -1);
			});
			if (ffiles.length === 0) {
				reject([exports.getError(thisObj.language, 'files_not_with_format', format)]);
				return;
			}
			
			clearFunction.call(thisObj);

			const promises = ffiles.map(file => {
				const filePath = path.join(dirPath, file);
				return exports.reflectPromise(readFunction.call(thisObj, filePath));
			});

			Promise.all(promises)
				.then((results) => {
					const errors = [];
					results.forEach(r => exports.extendArray(errors, r.error));
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
 * Reads a text file and returns an arry of lines.
 * @param {string} filePath File.
 * @return {Promise}
 */
exports.readFile = (filePath) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, (errFile, buf) => {
			if (errFile) {
				reject([errFile]);
				return;
			}
			const lines = buf.toString().split('\n');
			resolve(lines);
		});
	});
};

/**
 * Get files recursively in a folder and inmediate subfolders.
 * @param {string} dirPath Folder.
 * @return {Promise}
 */
exports.getFiles = (dirPath) => {
	return new Promise((resolve, reject) => {
		fs.readdir(dirPath, {withFileTypes: true}, (err, dirents) => {
			if (err) {
				reject(err);
				return;
			}
			var promises = dirents.map(dirent => {
				const res = path.resolve(dirPath, dirent.name);
				if (!dirent.isDirectory()) {
					return Promise.resolve(res);
				}
				return new Promise((resolve2, reject2) => {
					fs.readdir(res, (err, files) => {
						if (err) {
							reject2(err);
							return;
						}
						resolve2(files.map(file => path.join(res, file)));
					});
				});
			});
			Promise.all(promises).then(arr => {
				resolve(Array.prototype.concat(...arr));
			}, reject);
		});
	});
};

/**
 * Reads file pairs (in english and another language) and call the given
 * functions.
 * @param {string} filePathEN File path in English.
 * @param {string} filePathOther File path in other language.
 * @param {string} language Language to process.
 * @param {Function} clearFn Clear function.
 * @param {Function} readENFn Function to read file in English.
 * @param {Function} readOtherFn Function to read file in other language.
 * @param {Object} thisObj Object to pass as 'this'.
 * @returns {Promise} Promise that returns null in resolve function or an 
 * array of errors in reject function.
 */
exports.readFilePairs = (filePathEN, filePathOther, language, clearFn,
	readENFn, readOtherFn, thisObj) => {
	return new Promise((resolve, reject) => {
		const promises = (language === 'en' ?
			[exports.readFile(filePathEN)] : 
			[exports.readFile(filePathEN), exports.readFile(filePathOther)]);
		Promise.all(promises)
			.then(results => {
				const linesEN = results[0];
				const linesOther = (results.length > 1 ? results[1] : null);
				clearFn.call(thisObj);
				readENFn.call(thisObj, linesEN);
				if (!linesOther) {
					resolve(null);
					return;
				}
				readOtherFn.call(thisObj, linesOther);
				resolve(null);
			})
			.catch(reject);
	});
};

/**
 * Read several books in JSON. First book must be in English, the others one or 
 * several translations in a given language.
 * @param {string[]} folders Paths to folders with JSON files.
 * @param {string} language The language of books from second on.
 * @returns {Promise} Promise that returns an array of Book for resolve function
 * or an array of errors for reject function.
 */
exports.readBooksFromJSON = (folders, language) => {
	const books = folders.map((f, i) => {
		const folderLan = (i === 0 ? 'en' : language);
		const folderBook = new Book();
		folderBook.setLanguage(folderLan);
		if (f.endsWith(`book-${language}-footnotes`)) {
			folderBook.setAsMaster();
			folderBook.setYear(Strings.bookMasterYear[language]);
		} else if (f.endsWith('book-en-footnotes')) {
			folderBook.setYear(Strings.bookMasterYear.en);
		} else {
			folderBook.setYear(f.substring(f.lastIndexOf('-')+1));
		}
		return folderBook;
	});
	const promises = books.map((b, i) => {
		return b.readFromJSON(folders[i]);
	});
	return Promise.all(promises).then(() => {
		return books;
	});
};

/**
 * Writes a text file.
 * @param {string} filePath File.
 * @param {string} content Content.
 * @return {Promise}
 */
exports.writeFile = (filePath, content) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(filePath, content, 'utf-8', (err) => {
			if (err) {
				reject([err]);
				return;
			}
			resolve(null);
		});
	});
};

/**
 * Writes a HTML for Wiki.js only if content is new or file not exists.
 * Updates date of last modification avoiding a new date for creation date.
 * @param {string} filePath File.
 * @param {string} header Header.
 * @param {string} body Body.
 * @return {Promise}
 */
exports.writeHTMLToWikijs = (filePath, header, body) => {
	return new Promise((resolve, reject) => {
		exports.readFile(filePath)
			.then(previousLines => {
				const curLines = (header + body).split('\n');
				const newHeader = exports.fixWikijsHeader(header, 
					previousLines, curLines);
				if (newHeader) {
					exports.writeFile(filePath, newHeader + body)
						.then(resolve, reject);
					return;
				}
				resolve(null);
			})
			.catch(err => {
				exports.writeFile(filePath, header + body)
					.then(resolve, reject);
			});
	});
};

/**
 * Checks a text with an array of components.
 * This function is required because RegExp has problems to search components
 * that are full words and start or end with spacial chars like accent.
 * @param {Array.<string>} arItems Array of components. If any of them appear 
 * then test is valid.
 * @param {string} text Text to test.
 * @return {boolean}
 */
exports.testWords = function(arItems, text) {
	let ini = 0, fin = 0, j, testIni, testFin;
	const regex = /[a-z0-9áéíóúü]/i;
	const len = text.length;
	for (j = 0; j < arItems.length; j++) {
		ini = 0;
		while (ini != -1) {
			ini = text.indexOf(arItems[j], ini);
			fin = ini + arItems[j].length - 1;
			testIni = !regex.test(text.substring(ini - 1, ini));
			testFin = !regex.test(text.substring(fin + 1, fin + 2));
			if (ini != -1) {
				if ((ini === 0 || (ini > 0 && testIni)) && 
					(fin === len - 1 || (fin < len - 1 && testFin))) {
					return true;
				}
				ini = fin + 1;
				if (ini === len - 1) {
					break;
				}
			}
		}
	}
	return false;
};

/**
 * Replaces a text with an array of components by other array of components.
 * This function is required because RegExp has problems searching components
 * that are full words starting or ending with accent.
 * @param {Array.<string>} arItems Array of components to search.
 * @param {Array.<string>} arReplaces Array of components to replace.
 * @param {string} text Text to modify.
 * @param {?boolean} ignoreCase Optional ignore case. By default is false.
 * @param {?boolean} replaceAll Optional replace all occurrences. By default is
 * false.
 * @param {?boolean} useExisting Optional replace with existing case. If case
 * existing is different with what is sent, use existing. By default is false.
 * @return {string} Modified text.
 */
exports.replaceWords = function(arItems, arReplaces, text, ignoreCase, replaceAll,
	useExisting) {
	let result = text, ini = 0, fin = 0, j, item, testIni, testFin, p1, p2,
		ip1, ip2, existing, ireplace, index;
	const regex = /[a-z0-9áéíóúüñ'-]/i;
	const len = text.length;
	const replaces = [];
	ignoreCase = ignoreCase || false;
	replaceAll = replaceAll || false;
	useExisting = useExisting || false;
	let iresult = (ignoreCase ? result.toLowerCase() : result);
	for (j = 0; j < arItems.length; j++) {
		item = (ignoreCase ? arItems[j].toLowerCase() : arItems[j]);
		ini = 0;
		while (ini != -1) {
			ini = iresult.indexOf(item, ini);
			fin = ini + item.length - 1;
			testIni = !regex.test(iresult.substring(ini - 1, ini));
			testFin = !regex.test(iresult.substring(fin + 1, fin + 2));
			if (ini != -1) {
				if ((ini === 0 || (ini > 0 && testIni)) && 
					(fin === len - 1 || (fin < len - 1 && testFin))) {
					p1 = result.substring(0, ini);
					p2 = result.substring(ini);
					existing = p2.substring(0, item.length);
					ireplace = (useExisting ? 
						arReplaces[j].replace(arItems[j], existing) : 
						arReplaces[j]);
					replaces.push(ireplace);
					index = replaces.length - 1;
					result = p1 + `#${index}#` + p2.substring(item.length);
					ip1 = iresult.substring(0, ini);
					ip2 = iresult.substring(ini);
					iresult = ip1 + `#${index}#` + ip2.substring(item.length);
					if (!replaceAll) break;
				}
				ini = fin + 1;
				if (ini === len - 1) {
					break;
				}
			}
		}
	}
	for (j = 0; j < replaces.length; j++) {
		result = result.replace(new RegExp(`#${j}#`, 'g'), replaces[j]);
	}
	return result;
};

/**
 * Returns the default header for a Wiki.js page.
 * @param {string} title Title.
 * @param {string[]} tags Tags.
 * @return {string}
 */
exports.getWikijsHeader = (title, tags) => {
	const date = new Date();
	const datestr = 
		`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}` +
		`T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}Z`;
	return `<!--\r\n` +
		`title: ${title}\r\n` +
		`description: \r\n` +
		`published: true\r\n` +
		`date: ${datestr}\r\n` +
		`tags: ${(tags ? tags.join(', ') : '')}\r\n` +
		`editor: ckeditor\r\n` +
		`dateCreated: ${datestr}\r\n` +
		`-->\r\n`;
};

/**
 * Fixes the header of a Wiki.js maintaing previous creation date.
 * @param {string} header Header.
 * @param {string[]} prevLines Previous lines.
 * @param {string[]} curLines Current lines.
 * @return {?string}
 */
exports.fixWikijsHeader = (header, prevLines, curLines) => {
	let newHeader = null;
	const prevDate = prevLines
		.findIndex(line => line.startsWith('dateCreated:'));
	const curDate = curLines
		.findIndex(line => line.startsWith('dateCreated:'));
	const changedLines = prevLines
		.filter((line, i) => line != curLines[i] && !line.startsWith('date'));
	if (changedLines.length > 0) {
		if (prevDate != -1 && curDate != -1) {
			newHeader = header.replace(curLines[curDate], prevLines[prevDate]);
		} else {
			newHeader = header;
		}
	}
	return newHeader;
};

/**
 * Returns the links to show on top and bottom of a chapter of a book.
 * @param {string} prevLink Link to previous chapter.
 * @param {string} indexLink Link to index of the book.
 * @param {string} nextLink Link to next chapter.
 * @return {string}
 */
exports.getWikijsLinks = (prevLink, indexLink, nextLink) => {
	const links =
		`<figure class="table chapter-navigator">\r\n` +
		`  <table>\r\n` +
		`    <tbody>\r\n` +
		`      <tr>\r\n` +
		`        <td>\r\n` +
				`${prevLink}` +
		`        </td>\r\n` +
		`        <td>\r\n` +
				`${indexLink}` +
		`        </td>\r\n` +
		`        <td>\r\n` +
				`${nextLink}` +
		`        </td>\r\n` +
		`      </tr>\r\n` +
		`    </tbody>\r\n` +
		`  </table>\r\n` +
		`</figure>\r\n`;
	return links;
};

/**
 * Returns the links to show on top and bottom of an article of a issue.
 * @param {?Object} prevArticle Previous article.
 * @param {Object} issue Issue.
 * @param {?Object} nextArticle Next article.
 * @return {string}
 */
exports.getWikijsArticleLinks = (prevArticle, issue, nextArticle) => {
	const lan = issue.path.split('/')[1];
	const indexName = issue.title + ' — ' + Strings.bookIndexName[lan];
	const prevLink = (prevArticle ?
		`        <a href="${prevArticle.path}">\r\n` +
		`          <span class="mdi mdi-arrow-left-drop-circle"></span>` +
			`<span class="pl-2">${prevArticle.title}</span>\r\n` +
		`        </a>\r\n` : '');
	const indexLink = 
		`        <a href="${issue.path}">\r\n` +
		`          <span class="mdi mdi-book-open-variant"></span>` +
			`<span class="pl-2">${indexName}</span>\r\n` +
		`        </a>\r\n`;
	const nextLink = (nextArticle ?
		`        <a href="${nextArticle.path}">\r\n` +
		`          <span class="pr-2">${nextArticle.title}</span>` +
			`<span class="mdi mdi-arrow-right-drop-circle"></span>\r\n` +
		`        </a>\r\n` : '');
	return exports.getWikijsLinks(prevLink, indexLink, nextLink);
};

/**
 * Gets the HTML fragment in Wiki.js for the copyright of the Urantia Book.
 * @param {number[]} years The array of years of each translation.
 * @param {string} language Language code.
 * @returns {string}
 */
exports.getWikijsBookCopyright = (years, language) => {
	const multi = years.length > 1;
	const masterYear = Strings.bookMasterYear[language];
	const foundation = Strings.foundation[language];
	const freedomain = Strings.freedomain[language];
	const translations = Strings.translations[language];
	let html = '<p class="v-card v-sheet theme--light grey lighten-3 px-2 mb-4">';
	if (multi) {
		const strYears = years.slice(1).join(', ');
		html += `${freedomain}. <br>` +
			`${translations} © ${strYears} ${foundation}`;
	} else {
		html += (language === 'en' ? freedomain : `© ${masterYear} ${foundation}`);
	}
	html += '</p>\r\n';
	return html;
};

/**
 * Gets the HTML fragment in Wiki.js for the top buttons that switch the
 * visibility of translations in a multi-version mode.
 * @param {number[]} years The array of years of each translation.
 * @param {string} language Language code.
 * @returns {string}
 */
exports.getWikijsBookButtons = (years, language) => {
	const colors = ['blue', 'purple', 'teal', 'deep-orange'];
	let html = '<div class="d-sm-flex mt-2">\r\n';
	html += years.map((year, i) => {
		const lname = (i === 0 ? Strings.enLanguage[language] :
			Strings.ownLanguage[language]);
		return (
			'  <div class="pr-sm-5" style="flex-basis:100%">\r\n' +
			`    <a id="urantiapedia-button-${i+1}"` +
				` class="v-btn title white--text ${colors[i]} rounded-lg ` +
				`py-1 px-2 d-flex align-center">\r\n` +
			`      <i class="mdi mdi-radiobox-marked pr-2"></i>` +
				`<span>${lname} ${year}</span>\r\n` +
			'    </a>\r\n' +
			'  </div>\r\n'
		);
	}).join('');
	html += '</div>\r\n';
	return html;
};

/**
 * Gets the HTML in Wiki.js for the titles of papers in a multi-version mode.
 * @param {Object[]} papers The array of objects with the papers of each
 * translation.
 * @param {string} language Language code.
 * @returns {string}
 */
exports.getWikijsBookTitles = (papers, language) => {
	const html = '<div class="d-sm-flex">\r\n' +
		papers.map((p, pi) => {
			const lan = (pi === 0 ? 'en' : language);
			const paperWord = Strings.bookPaper[lan];
			const pt = p.paper_title.replace(paperWord, '').toUpperCase();
			return (
				`  <div class="urantiapedia-column-${pi+1} pr-sm-5" ` +
					`style="flex-basis:100%">\r\n` +
				`    <p class="text-h4 font-weight-bold"> ${pt} </p>\r\n` +
				'  </div>\r\n'
			);
		}).join('') +
		'</div>\r\n';
	return html;
};

/**
 * Gets the HTML in Wiki.js for the titles of sections in single-version or 
 * multi-version mode.
 * @param {(Object|Object[])} papers The array of objects with the papers of each
 * translation or only one object to obtain the single version.
 * @returns {string}
 */
exports.getWikijsBookSectionTitles = (papers, section_index) => {
	let html = '';
	const multi = Array.isArray(papers);
	const masterIndex = (multi ? papers.findIndex(p => p.isMaster) : -1);
	const paper = (multi ? papers[masterIndex] : papers);
	const section = paper.sections[section_index];
	const stitle = (section.section_title ? 
		exports.replaceSpecialChars(section.section_title).toUpperCase() : null);
	const cls = (multi ? ' mt-0' : '');
	const cls2 = (multi ? ' class="mt-0"' : '');
	const hidden1 = (multi ? ' style="visibility: hidden; height: 5px;"' : '');
	if (stitle) {
		html += `<h2 id="p${section_index}" class="toc-header${cls}"${hidden1}>` +
			`<a href="#p${section_index}" class="toc-anchor">¶</a> ${stitle} </h2>\r\n`;
	} else {
		html += `<span id="p${section_index}"${cls2}${hidden1}>` +
			`<a href="#p${section_index}" class="toc-anchor">¶</a> </span>\r\n`;
	}

	if (multi && stitle) {
		html += '<div class="d-sm-flex">\r\n' +
			papers.map((p, pi) => {
				const st = p.sections[section_index].section_title;
				const st2 = exports.replaceSpecialChars(st).toUpperCase();
				return (
					`  <div class="urantiapedia-column-${pi+1} pr-sm-5" ` +
						`style="flex-basis:100%">\r\n` +
					`    <p class="text-h5 font-weight-bold"> ${st2} </p>\r\n` +
					'  </div>\r\n'
				);
			}).join('') +
			'</div>\r\n';
	}

	return html;
};

/**
 * Gets the HTML fragment in Wiki.js with the reference that is added before
 * each paragraph.
 * @param {boolean} multi If HTML is for multi-version or not.
 * @param {string} ref The reference of the 
 * @param {string} language Language code.
 * @param {?string} color Optional color.
 * @param {?number} year Optional year.
 * @returns {string}
 */
exports.getWikijsBookParRef = (multi, ref, language, color, year) => {
	color = color || 'blue';
	year = (year != null ? year : 1955);
	let html = '';
	if (multi) {
		html += `<sup class="white--text ${color} rounded px-1">` +
			`<small>${year}</small></sup>   `;
	}
	const vals = ref.replace(/[:.]/g,"|").split('|');
	const suffix = (multi && language != 'en' ? '_Multiple' : '');
	const path = `/${language}/The_Urantia_Book${suffix}/` +
		`${vals[0]}#p${vals[1]}_${vals[2]}`;
	const link = `<a href="${path}">${ref}</a>`
	html += `<sup><small>${link}</small></sup>  `;
	return html;
};

/**
 * Gets the HTML fragment in Wiki.js for a reference to The Urantia Book.
 * @param {string} book_ref Book ref.
 * @param {string} language Language code.
 * @returns {string}
 */
exports.getWikijsBookRefLink = (book_ref, language) => {
	const bookAbb = Strings.bookAbb[language];
	const bookName = Strings.bookName.en.replace(/ /g,"_");
	const lan = (language === 'en' ? '' : '/' + language);
	const path = `${lan}/${bookName}`;
	const text = `${bookAbb} ${book_ref}`;
	let link = '';
	let ref = book_ref.replace(/[:.,-]/g,"|");
	let data = ref.split('|');
	if (data.length >= 3) {
		link = `<a href="${path}/${data[0]}#p${data[1]}_${data[2]}">${text}</a>`;
	} else if (data.length === 2) {
		link = `<a href="${path}/${data[0]}#p${data[1]}">${text}</a>`;
	} else if (data.length === 1) {
		link = `<a href="${path}/${data[0]}">${text}</a>`;
	}
	return link;
};

/**
 * Gets the HTML fragment in Wiki.js for a top header link to a paper of 
 * The Urantia Book.
 * @param {(Object|null)} paper Paper object or null.
 * @param {string} language Language code.
 * @param {boolean} isMultiple If it is The Urantia Book shown as multiple
 * versions or not.
 * @param {(boolean|null)} isPrev If the link is for a previous paper (true),
 * a next paper (false) or other (null).
 * @return {string}
 */
exports.getWikijsBookLink = (paper, language, isMultiple, isPrev) => {
	if (!paper) {
		return ' ';
	}
	const i = paper.paper_index;
	const isIndex = (isPrev === null);
	const multiple = isMultiple ? '_Multiple' : '';
	const bookName = Strings.bookName.en.replace(/ /g,"_");
	const path = `/${language}/${bookName}${multiple}`;
	
	let html = '';
	if (isIndex) {
		const indexName = Strings.bookIndexName[language];
		const indexNameEN = Strings.bookIndexName.en;
		const path2 = (isMultiple ? `/${language}/${bookName}/${i}` :
			`/${language}/${bookName}_Multiple/${i}`);
		const icon = (isMultiple ? 'mdi-view-array' : 'mdi-view-parallel');
		const key = (isMultiple ? 'bookSingleVersion' : 'bookMultipleVersion');
		const text2 = Strings[key][language];
		html += (
			`        <a href="${path}/${indexNameEN}">\r\n` +
			`          <span class="mdi mdi-book-open-variant"></span>` +
				`<span class="pl-2">${indexName}</span>\r\n` +
			`        </a>\r\n`
		);
		if (language != 'en') {
			html += '        <br>\r\n';
			html += (
				`        <a href="${path2}">\r\n` +
				`          <span class="mdi ${icon}"></span>` +
					`<span class="pl-2">${text2}</span>\r\n` +
				`        </a>\r\n`
			);
		}
		return html;
	} else {
		const text = exports.getBookPaperTitle(paper, language);
		if (isPrev === true) {
			html += (
				`        <a href="${path}/${i}">\r\n` +
				`          <span class="mdi mdi-arrow-left-drop-circle"></span>` +
					`<span class="pl-2">${text}</span>\r\n` +
				`        </a>\r\n`
			);
		} else if (isPrev === false) {
			html += (
				`        <a href="${path}/${i}">\r\n` +
				`          <span class="pr-2">${text}</span>` +
					`<span class="mdi mdi-arrow-right-drop-circle"></span>\r\n` +
				`        </a>\r\n`
			);
		}
	}
	return html;
};

/**
 * Gets the HTML fragment in Wiki.js top header link in index of The Urantia Book.
 * @param {string} language Language code.
 * @param {boolean} isMultiple If it is The Urantia Book shown as multiple
 * versions or not.
 * @param {boolean} isExtended If index is extended one.
 * @return {string}
 */
exports.getWikijsBookIndexLink = (language, isMultiple, isExtended) => {
	let html = '';
	const bookName = Strings.bookName.en.replace(/ /g,"_");
	const multiple = (isMultiple ? '' : '_Multiple');
	const icon = (isMultiple ? 'mdi-view-array' : 'mdi-view-parallel');
	const key = (isMultiple ? 'bookSingleVersion' : 'bookMultipleVersion');
	const suffix = (isExtended ? '_Extended' : '');
	const path2 = `/${language}/${bookName}${multiple}/Index${suffix}`;
	const text2 = Strings[key][language];
	if (language != 'en') {
		html += (
			`        <a href="${path2}">\r\n` +
			`          <span class="mdi ${icon}"></span>` +
				`<span class="pl-2">${text2}</span>\r\n` +
			`        </a>\r\n`
		);
	}
	return html;
};

/**
 * Gets the HTML fragment in Wiki.js for the part title in index of The Urantia Book.
 * @param {Object[]} data Array of objects with needed data.
 * @param {number} index Index of the part.
 * @param {boolean} isMultiple If it is The Urantia Book shown as multiple
 * versions or not.
 * @return {string}
 */
exports.getWikijsBookIndexPartTitle = (data, index, isMultiple) => {
	let html = '';
	if (isMultiple) {
		const mtitle = data.find(d => d.isMaster).parts_titles[index];
		html += `<h2 class="toc-header mt-0" style="visibility: hidden; height: 5px;">${mtitle}</h2>\r\n`;
		html += (
			'<div class="d-sm-flex">\r\n' +
			data.map((d, c) => {
				const title = d.parts_titles[index];
				return (
					`  <div class="urantiapedia-column-${c+1} pr-sm-5" ` +
						`style="flex-basis:100%">\r\n` +
					`    <p class="text-h5 font-weight-bold"> ${title} </p>\r\n` +
					`  </div>\r\n`
				);
			}).join('') +
			'</div>\r\n'
		);
	} else {
		html += `<h2> ${data[0].parts_titles[index]} </h2>\r\n`;
	}
	return html;
};

/**
 * Gets the HTML fragment in Wiki.js for the part description in index of The Urantia Book.
 * @param {Object[]} data Array of objects with needed data.
 * @param {number} index Index of the part.
 * @param {boolean} isMultiple If it is The Urantia Book shown as multiple
 * versions or not.
 * @return {string}
 */
exports.getWikijsBookIndexPartDesc = (data, index, isMultiple) => {
	let html = '';
	const firstDescs = data[0].parts_descs[index];
	if (!firstDescs) return html;
	if (isMultiple) {
		html += firstDescs
			.map((desc0, n) => {
				return (
					`<div id="p${index}_${n+1}" class="d-sm-flex">\r\n` +
					data.map((d, c) => {
						const desc = d.parts_descs[index];
						return (
							`  <div class="urantiapedia-column-${c+1} pr-sm-5" ` +
								`style="flex-basis:100%">\r\n` +
							`    <p>${desc}</p>\r\n` +
							`  </div>\r\n`
						);
					}).join('') +
					'</div>\r\n'
				);
			}).join('');
	} else {
		html += firstDescs.map((desc0, n) => {
				return `<p id="p${index}_${n+1}">${desc0}</p>\r\n`;
			}).join('');
	}
	return html;
};

/**
 * Gets the HTML fragment in Wiki.js for the paper content in index of The Urantia Book.
 * @param {Object[]} data Array of objects with needed data.
 * @param {number} index Index of the paper.
 * @param {boolean} isMultiple If it is The Urantia Book shown as multiple
 * versions or not.
 * @param {boolean} isExtended If index is extended one.
 * @return {string}
 */
exports.getWikijsBookIndexPaper = (data, index, isMultiple, isExtended) => {
	let html = '';
	const ub = Strings.bookName.en.replace(/\s/g, '_');
	const getExtended = (d) => {
		const space = (isMultiple ? '    ' : '');
		let h = `${space}<ul>\r\n`;
		const suffix = (isMultiple && d.language != 'en' ? '_Multiple' : '');
		const p = `/${d.language}/${ub}${suffix}/${index}`;
		d.papers[index].sections.forEach(section => {
			if (section.title) {
				h += `${space}  <li><a href="${p}#p${section.index}">` +
					`${section.title}</a></li>\r\n`;
			}
		});
		h += `${space}</ul>\r\n`;
		return h;
	};
	if (isMultiple) {
		if (isExtended) {
			const mtitle = data.find(d => d.isMaster).papers[index].title;
			html += `<h3 class="toc-header mt-0" ` +
				`style="visibility: hidden; height: 2px;">${mtitle}</h3>\r\n`;
			html += (
				`<div class="d-sm-flex">\r\n` +
				data.map((d, c) => {
					const title = d.papers[index].title;
					return (
						`  <div class="urantiapedia-column-${c+1} pr-sm-5" ` +
							`style="flex-basis:100%">\r\n` +
						`    <p class="text-h6 font-weight-bold">${title}</p>\r\n` +
						`  </div>\r\n`
					);
				}).join('') +
				'</div>\r\n'
			);
			html += (
				`<div class="d-sm-flex">\r\n` +
				data.map((d, c) => {
					return (
						`  <div class="urantiapedia-column-${c+1} pr-sm-5" ` +
							`style="flex-basis:100%">\r\n` +
						getExtended(d) +
						`  </div>\r\n`
					);
				}).join('') +
				'</div>\r\n'
			);
		} else {
			html += (
				`<div class="d-sm-flex">\r\n` +
				data.map((d, c) => {
					const title = d.papers[index].title;
					const suffix = (isMultiple && d.language != 'en' ? '_Multiple' : '');
					const path = `/${d.language}/${ub}${suffix}/${index}`;
					return (
						`  <div class="urantiapedia-column-${c+1} pr-sm-5" ` +
							`style="flex-basis:100%">\r\n` +
						`    <p><a href="${path}">${title}</a></p>\r\n` +
						`  </div>\r\n`
					);
				}).join('') +
				'</div>\r\n'
			);
		}
	} else {
		const pTitle = data[0].papers[index].title;
		const pPath = `/${data[0].language}/${ub}/${index}`;
		if (isExtended) {
			html += `<h3> ${pTitle} </h3>\r\n`;
			html += getExtended(data[0]);
		} else {
			html += `  <li><a href="${pPath}">${pTitle}</a></li>\r\n`;
		}
	}
	return html;
};

/**
 * Returns the title of a paper from The Urantia Book.
 * @param {?Object} paper Paper.
 * @param {string} language Language code.
 * @param {?boolean} upper If return in upper case or not.
 * @returns {string}
 */
exports.getBookPaperTitle = (paper, language, upper) => {
	upper = (upper != undefined ? upper : false);
	if (!paper) {
		return ' ';
	}
	const paperWord = Strings['bookPaper'][language];
	const t = paper.paper_title;
	const i = paper.paper_index;
	const paperWord2 = (paperWord.indexOf('{') != -1 ? 
		exports.strformat(paperWord, i) : paperWord);
	const tu = t.toUpperCase();
	const pu = paperWord2.toUpperCase();
	const tt = (upper ? tu : t);
	if (i === 0) {
		//Prologue
		return tt;
	}
	if (tu.startsWith(pu)) {
		return tt;
	} else if (paperWord.indexOf('{') != -1) {
		return `${upper ? pu : paperWord2}. ${tt}`;
	}
	return `${(upper ? pu : paperWord)} ${i}. ${tt}`;
};

/**
 * Returns a value between [0,1] that gives the similarity of two strings based
 * on Levenshtein distance. 1 means both strings are identical. If strings are
 * empty returns 1.
 * Params should be in english to work correctly.
 * Based in: https://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely
 * @param {string} s1 String 1.
 * @param {string} s2 String 2.
 * @returns {number}
 */
exports.stringSimilarity = (s1, s2) => {
	let longer = s1;
	let shorter = s2;
	if (s1.length < s2.length) {
		longer = s2;
		shorter = s1;
	}
	const longerLength = longer.length;
	if (longerLength == 0) {
		return 1.0;
	}

	longer = longer.toLowerCase();
	shorter = shorter.toLowerCase();

	const costs = [];
	for (let i = 0; i <= longer.length; i++) {
		let lastValue = i;
		for (let j = 0; j <= shorter.length; j++) {
		if (i == 0)
			costs[j] = j;
		else {
			if (j > 0) {
				let newValue = costs[j - 1];
				if (longer.charAt(i - 1) != shorter.charAt(j - 1))
					newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
				costs[j - 1] = lastValue;
				lastValue = newValue;
			}
		}
		}
		if (i > 0)
			costs[shorter.length] = lastValue;
	}
	const editDistance = costs[shorter.length];

	return (longerLength - editDistance) / parseFloat(longerLength);
};

/**
 * Returns a value between [0,1] that gives the similarity of two sentences.
 * It breaks the sentence in words and compares individual words to obtain
 * a value. 1 means both sentences have the same words no matter the occurrences. 
 * If strings are empty returns 1.
 * Params should be in english to work correctly.
 * @param {string} s1 Sentence.
 * @param {string} s2 Sentence to compare.
 * @returns {number}
 */
exports.sentenceSimilarity = (s1, s2) => {
	if (s1.length === 0 && s2.length === 0) return 1;
	if (s2.length === 0 || s2.length === 0) return 0;

	//Remove punctuation from strings
	const ss1 = s1.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
	const ss2 = s2.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
	//Break sentences in arrays of lowercase distinct words
	const ar1 = ss1.split(' ')
		.map(w => w.toLowerCase())
		.reduce((a,b) => {
			if (!a.includes(b)) a.push(b);
			return a;
		}, []);
	const ar2 = ss2.split(' ')
		.map(w => w.toLowerCase())
		.reduce((a,b) => {
			if (!a.includes(b)) a.push(b);
			return a;
		}, []);
	//Obtain words in 2 that are in 1
	const found = ar2.reduce((a,b) => {
		if (ar1.includes(b)) {
			a.push(b);
		}
		return a;
	}, []);
	return parseFloat(found.length) / parseFloat(ar2.length);
};

/**
 * Returns the most similar sentence in a paragraph to the given sentence. Returns
 * an array with the values: first the most similar sentence in english, second
 * the most similar sentence in the other language, and third the index of the
 * most similar in the list of sentences in the paragraph. If no sentence is found 
 * similar then returns an empty array. `parEN` and `sEN` params should be in 
 * english to work correctly.
 * @param {string} parEN Paragraph in english.
 * @param {string} par Paragraph in other language.
 * @param {string} sEN Sentence to search (in english).
 * @returns {Array}
 */
exports.getMostSimilarSentence = (parEN, par, sEN) => {
	//Split english parragraph into sentences
	const arSenEN = parEN.replace(/([.?!])/g, "$1|").split("|");
	//TODO: next line could fail for some languages with different sentence endings
	// and in spanish is breaking sentences at long numbers (ex: 2.000.000)
	const arSen = par.replace(/([.?!])/g, "$1|").split("|");

	if (arSenEN.length === 0 || arSen.length === 0) return [];

	//Map to arrays of [sentence, similarity]
	const arSenSimEN = arSenEN.map(sen => [sen, exports.sentenceSimilarity(sen, sEN)]);
	//Order arrays by similarity
	arSenSimEN.sort((a,b) => b[1] - a[1]);

	const mostSim = (arSenSimEN[0][1] > 0.5 ? arSenSimEN[0][0] : null);
	if (!mostSim) return [];
	const index = arSenEN.indexOf(mostSim);
	return [mostSim, arSen[index], index];
};

/**
 * Returns true if the reference in text form contains the reference in 
 * number form. For example: '101:2.3,6-10' contains [101,2,3], and 
 * [101,2,7] but not [101,2,4]. Works also giving the reference of a full 
 * paper or a full section.
 * @param {string} lu_ref Book reference in text form.
 * @param {number} paperIndex Paper index starting in zero.
 * @param {number} sectionIndex Section index starting in zero.
 * @param {number} parIndex Paragraph index starting in 1.
 * @return {boolean}
 */
exports.containsRef = (lu_ref, paperIndex, sectionIndex, parIndex) => {
	let data, data2, data3, paper_id, section_id;
	data = lu_ref.split(':');
	paper_id = parseInt(data[0]);
	if (data.length === 1) {
		return (paper_id === paperIndex);
	} else if (data.length > 1 && paper_id === paperIndex) {
		data2 = data[1].split('.');
		section_id = parseInt(data2[0]);
		if (data2.length === 1) {
			return (section_id === sectionIndex);
		} else if (data2.length > 1 && section_id === sectionIndex) {
			data3 = data2[1].split(',');
			return (data3.find(d => {
				const dd = d.split('-');
				if (dd.length === 1 && parseInt(d) === parIndex ) {
					return true;
				} else if (dd.length > 1 &&
					!isNaN(parseInt(dd[0])) && !isNaN(parseInt(dd[1])) &&
					parseInt(dd[0]) <= parIndex && parseInt(dd[1]) >= parIndex) {
					return true;
				}
				return false;
			}) != null);
		}
	}
	return false;
};