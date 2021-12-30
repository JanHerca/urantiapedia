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
}

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
 * @param {string} content String to replaceCadena a reemplazar
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
 * // return 'This text inside dentro'
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
 * Returns a promise that reads a folder, search files in a format and executes
 * a given function with each file. If any file rejects, then all the promise
 * rejects.
 * @param {string} dirPath Folder path.
 * @param {string} format Format as '.txt' or '.tex'. Several formats can be
 * passed tis way: '.html;.htm'
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
				reject([err]);
				return;
			}
			const formats = format.split(';');
			const ffiles = files.filter(file => {
				return (formats.indexOf(path.extname(file)) != -1);
			});
			if (ffiles.length === 0) {
				//TODO: how to localize this string?
				reject([new Error('No se han encontrado archivos ' + format)]);
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
 * Replaces a text with an array of components by other array of components but
 * only first appearance of each component.
 * This function is required because RegExp has problems searching components
 * that are full words starting or ending with accent.
 * @param {Array.<string>} arItems Array of components to search.
 * @param {Array.<string>} arReplaces Array of components to replace.
 * @param {string} text Text to modify.
 * @return {string} Modified text.
 */
exports.replaceWords = function(arItems, arReplaces, text) {
	let result = text, ini = 0, fin = 0, j, testIni, testFin, part1, part2;
	const regex = /[a-z0-9áéíóúüñ'-]/i;
	const len = text.length;
	for (j = 0; j < arItems.length; j++) {
		ini = 0;
		while (ini != -1) {
			ini = result.indexOf(arItems[j], ini);
			fin = ini + arItems[j].length - 1;
			testIni = !regex.test(result.substring(ini - 1, ini));
			testFin = !regex.test(result.substring(fin + 1, fin + 2));
			if (ini != -1) {
				if ((ini === 0 || (ini > 0 && testIni)) && 
					(fin === len - 1 || (fin < len - 1 && testFin))) {
					part1 = result.substring(0, ini);
					part2 = result.substring(ini);
					result = part1 + part2.replace(arItems[j], `#${j}#`);
					break;
				}
				ini = fin + 1;
				if (ini === len - 1) {
					break;
				}
			}
		}
	}
	for (j = 0; j < arReplaces.length; j++) {
		result = result.replace(new RegExp(`#${j}#`, 'g'), arReplaces[j]);
	}
	return result;
};

exports.getWikijsHeader = function(title) {
	const date = new Date();
	const datestr = 
		`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}` +
		`T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}Z`;
	return `<!--\r\n` +
		`title: ${title}\r\n` +
		`description: \r\n` +
		`published: true\r\n` +
		`date: ${datestr}\r\n` +
		`tags: \r\n` +
		`editor: ckeditor\r\n` +
		`dateCreated: ${datestr}\r\n` +
		`-->\r\n`;
};

exports.getWikijsLinks = function(prevLink, indexLink, nextLink) {
	// const colorBg = '#ffffff;';
	const borderB = '0.2em solid #c8ccd1;';
	const borderO = '1px solid #c8ccd1;';
	const styleTable = /*`background-color:${colorBg}` +*/
		`border-bottom:${borderB}` +
		`border-left:${borderO}` +
		`border-right:${borderO}` +
		`border-top:${borderO}` +
		`table-layout: fixed; width: 100%;`;
		/*`width: 100%;`;*/
	const styleCell = `padding:0.4em 0.5em;border:${borderO};width:33%;`;
	const links =
		`<figure class="table">\r\n` +
		`  <table style="${styleTable}">\r\n` +
		`    <tbody>\r\n` +
		`      <tr>\r\n` +
		`        <td style="${styleCell}">${prevLink}</td>\r\n` +
		`        <td style="${styleCell}text-align: center;">${indexLink}</td>\r\n` +
		`        <td style="${styleCell}text-align: right;">${nextLink}</td>\r\n` +
		`      </tr>\r\n` +
		`    </tbody>\r\n` +
		`  </table>\r\n` +
		`</figure>\r\n`;
	return links;
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
 * Gets the HTML fragment in Wiki.js for a paper of The Urantia Book.
 * If paper = 'index' returns the Index page link.
 * @param {(Object|string)} paper Paper object or 'index'.
 * @param {string} language Language code.
 * @return {string}
 */
exports.getWikijsBookLink = (paper, language) => {
	if (!paper) {
		return ' ';
	}
	const bookName = Strings.bookName.en.replace(/ /g,"_");
	const lan = (language === 'en' ? '' : '/' + language);
	const path = `${lan}/${bookName}`;
	const indexName = Strings['bookIndexName'][language];
	const indexNameEN = Strings['bookIndexName'].en;
	if (paper === 'index') {
		return `<a href="${path}/${indexNameEN}">${indexName}</a>`;
	}
	const i = paper.paper_index;
	const text = exports.getBookTitle(paper, language);
	return `<a href="${path}/${i}">${text}</a>`;
};

/**
 * Returns the title of a paper from The Urantia Book.
 * @param {?Object} paper Paper.
 * @param {string} language Language code.
 * @param {?boolean} upper If return in upper case or not.
 * @returns {string}
 */
exports.getBookTitle = (paper, language, upper) => {
	upper = (upper != undefined ? upper : false);
	if (!paper) {
		return ' ';
	}
	const paperWord = Strings['bookPaper'][language];
	const t = paper.paper_title;
	const i = paper.paper_index;
	const tu = t.toUpperCase();
	const tt = (upper ? tu : t);
	if (i === 0) {
		//Prologue
		return tt;
	}
	return (tu.startsWith(paperWord.toUpperCase()) ? tt : 
		`${(upper ? paperWord.toUpperCase() : paperWord)} ${i}. ${tt}`);
};