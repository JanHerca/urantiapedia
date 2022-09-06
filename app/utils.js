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
		.filter((line, i) => line.trim() != curLines[i].trim() && !line.startsWith('date'));
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