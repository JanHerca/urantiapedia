// Connection with Google Cloud Translation API, both Basic and Advanced
// IMPORTANT: Basic API uses API Keys, but Advanced API uses ADC credentials

// Imports the Google Cloud Translation library
// const { TranslationServiceClient } = require('@google-cloud/translate');
const { Translate } = require('@google-cloud/translate').v2;

const { strformat, readFile, writeFile, getFiles, extendArray, createFolders,
	reflectPromise } = require('./utils');
const Strings = require('./strings');

class GoogleTranslate {
	apiKey = null;
	projectID = null;
	isLibraryBook = false;
	translate = null;
	sourceBook = null;
	targetBook = null;
	objects = {};
	//location = 'global';
	// translationClient = new TranslationServiceClient();

	// translateText = (text, sourceLan, targetLan) => {
	// 	const request = {
	// 		parent: `projects/${this.projectID}/locations/${this.location}`,
	// 		contents: [text],
	// 		mimeType: 'text/plain', // mime types: text/plain, text/html
	// 		sourceLanguageCode: sourceLan,
	// 		targetLanguageCode: targetLan,
	// 	};
	// 	return this.translationClient.translateText(request)
	// 		.then(response => {
	// 			return response.translations.map(t => t.translatedText);
	// 		});
	// };

	/**
	 * Configures client.
	 * @param {string} apiKey Optional API Key.
	 * @param {string} projectID Optional Project ID.
	 * @param {boolean} isLibraryBook If input are library books, not articles.
	 */
	configure = (apiKey, projectID, isLibraryBook) => {
		this.objects = {};
		this.apiKey = apiKey;
		this.projectID = projectID;
		this.isLibraryBook = isLibraryBook;
		this.translate = new Translate({
			projectId: projectID,
			key: apiKey
		});
	};

	/**
	 * Configures books for quote translations.
	 * @param {Book} sourceBook Urantia Book in source language.
	 * @param {Book} targetBook Urantia Book in target language.
	 */
	configureBooks = (sourceBook, targetBook) => {
		this.sourceBook = sourceBook;
		this.targetBook = targetBook;
	};

	/**
	 * Translates a single text or an array of texts.
	 * @param {(string|string[])} text Text to translate.
	 * @param {string} sourceLan Source language code, like `en`.
	 * @param {string} targetLan Target language code, like `es`.
	 * @return {Promise} Promise that returns an array of string for resolve or
	 * error for reject.
	 */
	translateText = (text, sourceLan, targetLan) => {
		if (!this.translate) {
			return Promise.reject('Client configuration required.');
		}
		//Google API has a limit of 128 lines, we will use 120 as limit
		let texts = [[text]];
		if (Array.isArray(text)) {
			texts = text.reduce((ac, cur) => {
				if (ac.length === 0 || ac[ac.length - 1].length === 120) {
					ac.push([cur]);
				} else {
					ac[ac.length - 1].push(cur);
				}
				return ac;
			}, []);
		}
		const promises = texts.map(t => {
			return this.translate.translate(t, {
				from: sourceLan,
				to: targetLan
			});
		})
		return Promise.all(promises)
			.then(responses => {
				const translations = [];
				responses.forEach(response => {
					extendArray(translations, response[0]);
				});
				return translations;
			});
	};

	/**
	 * Translates a Markdown file.
	 * @param {string} sourcePath Source file path.
	 * @param {string} targetPath Target file path.
	 * @param {string} sourceLan Source language code, like `en`.
	 * @param {string} targetLan Target language code, like `es`.
	 * @param {?string[]} errors Optional array for issues.
	 * @return {Promise} Promise that returns an array of strings with a report
	 * of issues found for resolve or error for reject.
	 */
	translateFile = (sourcePath, targetPath, sourceLan, targetLan, errors) => {
		if (!this.translate) {
			return Promise.reject('Client configuration required.');
		}
		errors = (errors || []);
		this.objects[sourcePath] = {};
		const result = this.objects[sourcePath];
		const msg1 = 'Total text in file: {0}';
		const msg2 = 'Text sent to translate in file: {0}';
		//Read the file
		return readFile(sourcePath)
			.then(lines => {
				//Process lines and translate
				result.objects = this.processLines(lines, sourceLan, targetLan, 
					errors);
				const texts = result.objects
					.filter(obj => obj.ignore != true)
					.map(obj => obj.text);
				return this.translateText(texts, sourceLan, targetLan);
			})
			.then(translations => {
				//Process translations and write
				result.objects
					.filter(obj => obj.ignore != true)
					.forEach((obj, i) => obj.translation = translations[i]);
				const translatedLines = this.finalizeTranslation(result.objects,
					sourceLan, targetLan, errors);
				return writeFile(targetPath, translatedLines.join('\n'));
			})
			.then(result => {
				//Return any issue
				const lineCount = result.objects
					.reduce((ac,cur) => {
						return ac + cur.line.length;
					}, 0);
				result.lineCount = lineCount;
				const trCount = result.objects
					.filter(obj => obj.ignore != true)
					.reduce((ac,cur) => {
						return ac + (cur.text ? cur.text.length : 0);
					}, 0);
				result.trCount = trCount;
				errors.push(strformat(msg1, lineCount));
				errors.push(strformat(msg2, trCount));
				return errors;
			});
	};

	/**
	 * Estimates number of characters required for translation in a Markdown
	 * file.
	 * @param {string} sourcePath Source file path.
	 * @param {string} sourceLan Source language code, like `en`.
	 * @param {string} targetLan Target language code, like `es`.
	 * @param {?string[]} errors Optional array for issues.
	 * @return {Promise} Promise that returns an array of strings with a report
	 * of issues found for resolve or error for reject.
	 */
	estimateFile = (sourcePath, sourceLan, targetLan, errors) => {
		errors = (errors || []);
		//Read the file
		return readFile(sourcePath)
			.then(lines => {
				//Process lines and translate
				this.objects[sourcePath] = {};
				const result = this.objects[sourcePath];
				result.objects = this.processLines(lines, sourceLan, targetLan, 
					errors);
				result.errors = errors.slice();
				//Return any issue
				const lineCount = result.objects
					.reduce((ac,cur) => {
						return ac + cur.line.length;
					}, 0);
				result.lineCount = lineCount;
				const trCount = result.objects
					.filter(obj => obj.ignore != true)
					.reduce((ac,cur) => {
						return ac + (cur.text ? cur.text.length : 0);
					}, 0);
				result.trCount = trCount;
				return [errors[0], lineCount, trCount];
			})
	}

	/**
	 * Translates the Markdown files inside a folder.
	 * @param {string} sourcePath Source file path.
	 * @param {string} targetPath Target file path.
	 * @param {string} sourceLan Source language code, like `en`.
	 * @param {string} targetLan Target language code, like `es`.
	 * @return {Promise} Promise that never rejects and returns an array of 
	 * arrays of strings or Errors with a report of issues or errors found.
	 */
	translateFolder = (sourcePath, targetPath, sourceLan, targetLan) => {
		if (!this.translate) {
			return Promise.reject('Client configuration required.');
		}

		return createFolders(sourcePath, targetPath)
			.then(folders => getFiles(sourcePath))
			.then(files => {
				const promises = files.map(file => {
					const target = file.replace(sourcePath, targetPath);
					const issues = [file];
					return reflectPromise(this.translateFile(file, target, 
						sourceLan, targetLan, issues));
				});
				return Promise.all(promises);
			})
			.then(arObjs => {
				const msg1 = 'Total text in all files: <b>{0}</b><br>';
				const msg2 = 'Text sent to translate in all files: <b>{0}</b>';
				let lineCount = 0;
				let trCount = 0;

				const arMsgs = arObjs.map(obj => {
					if (obj.value) {
						const i = obj.value;
						const c = parseInt(i[i.length-2].match(/\d+/)[0]);
						const tc = parseInt(i[i.length-1].match(/\d+/)[0]);
						lineCount += c;
						trCount += tc;
						return i;
					}
					return obj.error;
				});
				arMsgs.push([strformat(msg1, lineCount) +
					strformat(msg2, trCount)]);

				return arMsgs;
			});
	};

	/**
	 * Estimates number of characters required for translation in all Markdown
	 * files inside a folder.
	 * @param {string} sourcePath Source file path.
	 * @param {string} sourceLan Source language code, like `en`.
	 * @param {string} targetLan Target language code, like `es`.
	 * @return {Promise} Promise that never rejects and returns an array of 
	 * arrays of strings or Errors with a report of issues or errors found.
	 */
	estimateFolder = (sourcePath, sourceLan, targetLan) => {
		return getFiles(sourcePath)
			.then(files => {
				const promises = files.map(file => {
					const issues = [file];
					return reflectPromise(this.estimateFile(file, 
						sourceLan, targetLan, issues));
				});
				return Promise.all(promises);
			})
			.then(arObjs => {
				let lineCount = 0;
				let trCount = 0;

				const arMsgs = arObjs.map(obj => {
					if (obj.value) {
						const i = obj.value;
						lineCount += i[1];
						trCount += i[2];
						return i;
					}
					return obj.error;
				});
				arMsgs.push(['Total', lineCount, trCount]);

				return arMsgs;
			});
	};

	/**
	 * Create an array of objects from an array of lines that reduce content
	 * to be translated removing parts that are not required for translation.
	 * @param {string[]} lines Lines to translate.
	 * @param {string} sourceLan Source language code, like `en`.
	 * @param {string} targetLan Target language code, like `es`.
	 * @param {string[]} errors Array of errors for adding any issue found.
	 * @return {Object[]} Array of objects.
	 */
	processLines = (lines, sourceLan, targetLan, errors) => {
		let headerRead = false;
		let insideHeader = false;
		let insideNavigator = false;
		let insideBookFront = false;
		let insideImage = false;
		let insideMath = false;
		const reAnchor = new RegExp('<a id="[a|s]\\d+_\\d+"><\\/a>', 'g');
		const reUBLink = new RegExp(`\\[[^\\]]+\\]\\(\/${sourceLan}\/` +
			'The_Urantia_Book\/(\\d+)#p(\\d+)(?:_(\\d+))?\\)', 'g');
		const reUBMulti = new RegExp('(\\d+):(\\d+).(\\d+)-(\\d+)', 'g');
		const reUPLink = new RegExp(`\\(?\/${sourceLan}\/[^\\)]+\\)?`, 'g');
		const reUPLink2 = new RegExp(`"\/${sourceLan}\/[^"]+"`, 'g');
		const rePageNumber = new RegExp(`<span id="p[^"]+">` +
			`\\[<sup><small>p[^<]+</small></sup>\\]</span>`, 'g');
		const reVerseNumber = new RegExp(`<span id="v[^"]+">` + 
			`<sup><small>[^<]+</small></sup></span>`, 'g')
		const reLinks = new RegExp(
			`\\(?(https?:\\/\\/[\\w\\d./?=#\\-\\%\\(\\)]+)\\)?`, 'g');
		const reMath = new RegExp('\\$([^ ][^$]*)\\$', 'g');
		const sourceAbb = Strings.bookAbb[sourceLan];
		const targetAbb = Strings.bookAbb[targetLan];

		//Get an array of quote groups. Each contains:
		// [quote_start_index, quote_end_index, ub_ref_as_array]
		const quotesIndexes = lines
			.reduce((ac, cur, i, array) => {
				if (cur.startsWith('>')) {
					if (i === 0 || !array[i - 1].startsWith('>')) {
						ac.push([i, i]);
					} else if (array[i + 1] && !array[1 + 1].startsWith('>')) {
						ac[ac.length - 1][1] = i;
					}
				}
				return ac;
			}, [])
			.map(indexes => {
				let n, count = 0, ubLinks, ubLink, ubMultiLinks, link;
				for (n = indexes[0]; n <= indexes[1]; n++) {
					ubLinks = [...lines[n].matchAll(reUBLink)];
					ubLink = (ubLinks.length === 1 ? 
						[1,2,3].map(i => parseInt(ubLinks[0][i])) : []);
					ubMultiLinks = [...lines[n].matchAll(reUBMulti)];
					if (ubLink.length > 0 &&
						ubLink.findIndex(i => isNaN(i)) === -1) {
						link = ubLink.slice();
						if (ubMultiLinks.length === 1 &&
							!isNaN(parseInt(ubMultiLinks[0][4]))) {
							link.push(parseInt(ubMultiLinks[0][4]));
						}
						count++;
					}
					if (count > 1) {
						break;
					}
				}
				return [...indexes, (count === 1 ? link : null)];
			})
			.filter(indexes => indexes[2] != null);

		return lines.map((line, i, array) => {
			let ignore = false;
			let remove = false;
			let text = null;
			let extractIndex = -1;
			let line_type = 'other';
			const extracts = [];
			const msg1 = 'Urantia Book ref in line: {0}<br><i>{1}:{2}.{3}</i>' +
				' {4}';
			const prev = (i > 0 ? array[i - 1] : null);
			const isSep = line.startsWith('---');
			const isTitle = line.startsWith('title:');
			const isDesc = line.startsWith('description:');
			const hasDesc = (isDesc && 
				line.replace('description:', '').replace(/"/g,'').trim() != '');
			const isCopy = line.startsWith('<p class="v-card');
			const isNavStart = line.startsWith('<figure class=' +
				'"table chapter-navigator">');
			const isImgStart = line.indexOf('class="image urantiapedia') != -1;
			const isBookFrontStart = line.startsWith('<div class="urantiapedia-book-front');
			const isBookFrontText = line.trim().startsWith('<text style="');
			const isFigCaption = line.startsWith('<figcaption');
			const isNavText = line.trim().startsWith('<span class="');
			const isNavLink = line.trim().startsWith('<a href="/');
			const isPrevEnd = (prev && prev.startsWith('</figure>'));
			const isDivEnd = (prev && prev.startsWith('</div>'));
			const isHtml = 
				line.startsWith('<br style="clear:both"') ||
				line.startsWith('<p style="text-align:center;"') ||
				line.startsWith('<br>') || 
				line.startsWith('<br/>') ||
				line.startsWith('</p>') || 
				line.trim() == '<br>' ||
				line.trim() == '<br/>';
			const isMathSep = line.startsWith('$$');
			const isMathLine = line.startsWith('$$') && line.endsWith('$$');
			const isQuote = line.startsWith('>');
			const isBlock = line.startsWith('{.is-');
			const isQuoteBlank = isQuote && line.length < 7;
			const ubLinks = [...line.matchAll(reUBLink)].reduce((ac, cur) => {
				const nums = [1,2,3].map(i => parseInt(cur[i]));
				let par = null;
				if (nums.findIndex(i => isNaN(i)) === -1) {
					par = this.targetBook.getPar(nums[0], nums[1], nums[2]);
					nums.push(par.par_content);
					ac.push(nums);
				}
				return ac;
			}, []);
			const quoteGroup = quotesIndexes.find(qi => {
				return (qi[0] <= i && qi[1] >= i);
			});

			//Check if line is inside header or is a separator
			if (!headerRead && isSep) {
				if (insideHeader) {
					headerRead = true;
				}
				insideHeader = !insideHeader;
			}
			if ((insideHeader && !(isTitle || hasDesc)) || isSep) {
				ignore = true;
			}
			if (insideHeader) {
				line_type = isTitle ? 'title' : hasDesc ? 
					'description' : 'header';
			}
			//Check if line is copyright
			if (isCopy) {
				line_type = 'copyright';
			}
			//Check if line is inside navigator: in articles must be ignored 
			// and removed, but not in books
			insideNavigator = (!insideNavigator && isNavStart ? true :
				(insideNavigator && isPrevEnd ? false : insideNavigator));
			if (insideNavigator) {
				ignore = !this.isLibraryBook || !(isNavText || isNavLink);
				remove = !this.isLibraryBook;
				line_type = 'navigator';
			}
			//Check empty line, break line, or other html to ignore
			if (line.trim() === '' || isHtml || isQuoteBlank || isBlock) {
				line_type = 'blank';
				ignore = true;
			}
			//Check book front
			insideBookFront = (!insideBookFront && isBookFrontStart ? true :
				(insideBookFront && isDivEnd ? false : insideBookFront));
			if (insideBookFront) {
				ignore = !this.isLibraryBook || !isBookFrontText;
				line_type = 'bookfront';
			}
			//Check image (only translate figcaption)
			insideImage = (!insideImage && isImgStart ? true :
				(insideImage && isPrevEnd ? false : insideImage));
			if (insideImage) {
				ignore = !isFigCaption;
				line_type = 'image';
			}
			//Check Math LaTeX block
			insideMath = (!insideMath && isMathSep && !isMathLine 
				? true 
				: (insideMath && isMathSep && !isMathLine ? false : insideMath)
			);
			if (insideMath || (isMathSep && !isMathLine)) {
				ignore = true;
				line_type = 'math';
			}
			if (isMathLine) {
				ignore = true;
				line_type = 'math';
			}
			
			//Update text to be translated
			if (!ignore) {
				//Anchors: remove, they are added automatically (in articles)
				if (!this.isLibraryBook) {
					text = line.replace(reAnchor, '');
				}
				//Title
				if (isTitle) {
					text = line.replace('title:', '')
						.replace(/"/g, '').trim();
				}
				//Description
				if (hasDesc) {
					text = line.replace('description:', '')
						.replace(/"/g, '').trim();
				}
				//Check Urantia Book quotes
				if (quoteGroup) {
					ignore = true;
					line_type = 'quote';
				} else if (ubLinks.length > 0) {
					ubLinks.forEach(ubl => {
						errors.push(strformat(msg1, i + 1, ubl[0], ubl[1],
							ubl[2], ubl[3]));
					});
				}
				//Urantia Book links
				text = (text ? text : line).replace(reUBLink, match => {
					let extract = match;
					extractIndex++;
					if (match.indexOf(sourceAbb) != -1) {
						extract = extract.replace(sourceAbb, targetAbb);
					}
					extract = extract.replace(`/${sourceLan}/`, 
						`/${targetLan}/`);
					extracts.push(extract);
					return `%%${extractIndex}%%`;
				});
				//Other UP links
				text = text.replace(
					insideNavigator ? reUPLink2 : reUPLink, 
					match => {
						let extract = match;
						extractIndex++;
						extract = extract.replace(`/${sourceLan}/`, 
							`/${targetLan}/`);
						extracts.push(extract);
						return `%%${extractIndex}%%`;
					}
				);
				//Page numbers and verse numbers
				if (this.isLibraryBook) {
					text = text.replace(rePageNumber, match => {
						extractIndex++;
						extracts.push(match);
						return `%%${extractIndex}%%`;
					});
					text = text.replace(reVerseNumber, match => {
						extractIndex++;
						extracts.push(match);
						return `%%${extractIndex}%%`;
					});
				}
				//External links
				text = text.replace(reLinks, match => {
					extractIndex++;
					extracts.push(match);
					return `%%${extractIndex}%%`;
				});
				//Math LaTeX
				text = text.replace(reMath, match => {
					extractIndex++;
					extracts.push(match);
					return `%%${extractIndex}%%`;
				});

				//If text has collapsed set to ignore
				if (insideNavigator && text.trim() === '<a href=%%0%%>') {
					ignore = true;
				}

				if (text.trim() === '%%0%%') {
					ignore = true;
				}
			}

			//Return
			return {
				index: i,
				line,
				line_type,
				text,
				translation: null,
				ignore,
				remove,
				extracts,
				quoteGroup
			};
		});
	};

	/**
	 * Create an array of lines from an array of objects that reconstruct the
	 * final translation adding the parts not required for translation.
	 * @param {Object[]} objects Objects with original and translation info.
	 * @param {string} sourceLan Source language code, like `en`.
	 * @param {string} targetLan Target language code, like `es`.
	 * @param {string[]} errors Array of errors for adding any issue found.
	 * @return {string[]} Array of lines.
	 */
	finalizeTranslation = (objects, sourceLan, targetLan, errors) => {
		const sourceAbb = Strings.bookAbb[sourceLan];
		const targetAbb = Strings.bookAbb[targetLan];
		const qStart = Strings.quotationStart[sourceLan];
		const qEnd = Strings.quotationEnd[sourceLan];
		const qStart2 = Strings.quotationStart[targetLan];
		const qEnd2 = Strings.quotationEnd[targetLan];
		const reExtract = new RegExp('%%([\\d| ]+)%%', 'g');
		const reQuotations = new RegExp(`${qStart}([^${qEnd}]*)${qEnd}`, 'g');
		const reQuotations2 = new RegExp(`"([^"]*)"`, 'g');
		const reBlanks = new RegExp('^[\\t| ]+', 'g');
		const reAbb = new RegExp(`${sourceAbb}([ .;:?!-—])`, 'g');
		const reDocEN = new RegExp('document (\\d+)', 'g');
		const reBr = new RegExp('<br[\\/]?>$', 'g');
		const err1 = 'Extract mark {0} is not valid in translation: <i>{1}</i>';
		const err2 = 'Extract marks number fail in translation: <i>{0}</i>';
		const err3 = 'Paragraph of Urantia Book not found: <i>{0}</i>';
		const err4 = 'Quote group with different length than ref: <i>{0}</i>';
		
		return objects
			.filter(obj => obj.remove != true)
			.map((obj, j, array) => {
				let tr = obj.translation;
				let numExtracts = 0;
				let par = null;
				let q = obj.quoteGroup;
				let objGroup = null;
				let qindex = 0;
				let quotated = false;
				let italic = false;
				//If nothing to translate or replace exit with original text
				if (obj.ignore && 
					obj.line_type != 'quote' && 
					obj.extracts.length === 0) {
					return obj.line;
				}
				//If nothing to translate but yes to replace take text
				if (obj.ignore && !tr && obj.extracts.length > 0) {
					tr = obj.text;
				}
				//Replace title
				if (obj.line_type === 'title') {
					tr = `title: "${tr}"`;
				}
				//Replace description
				if (obj.line_type === 'description') {
					tr = `description: "${tr}"`;
				}
				//Replace quotes
				if (obj.line_type === 'quote' && q) {
					if (obj.line.length < 7) {
						return obj.line;
					}
					quotated = obj.line.substring(0, 8).indexOf(qStart) != -1;
					italic = obj.line.substring(0, 8).indexOf('_') != -1;
					
					if (q[2].length === 4) {
						//Quote with multiple lines
						objGroup = array.filter(m => {
							return (q[0] <= m.index && q[1] >= m.index &&
								m.line.length >= 7);
						});
						if (objGroup.length != (q[2][3] - q[2][2] + 1)) {
							errors.push(strformat(err4, q[2]));
							return obj.line;
						}
						qindex = objGroup.findIndex(m => m.index === obj.index);
					}

					par = this.targetBook.getPar(q[2][0], q[2][1], 
						q[2][2] + qindex);
					if (!par) {
						errors.push(strformat(err3, q[2]));
						return obj.line;
					}
					tr = '> ' + (quotated ? qStart2 : '') + 
						(italic ? '_' : '') + par.par_content + 
						(italic ? '_' : '') + (quotated ? qEnd2 : '') +
						(obj.text.indexOf('%%0%%') != -1 ? ' (%%0%%)' : '');
				}
				//Replace extracts
				if (obj.extracts.length > 0) {
					tr = tr.replace(reExtract, (match, p1) => {
						const i = parseInt(p1);
						if (isNaN(i) || !obj.extracts[i]) {
							errors.push(strformat(err1, match, obj.translation));
						} else {
							numExtracts++;
						}
						return (isNaN(i) ? match : obj.extracts[i]);
					});
					if (numExtracts != obj.extracts.length) {
						errors.push(strformat(err2, obj.translation))
					}
				}
				//Replace quotation marks
				if (obj.line_type === 'other') {
					tr = tr.replace(reQuotations, (match, p1) => {
						return `${qStart2}${p1}${qEnd2}`;
					});
					tr = tr.replace(reQuotations2, (match, p1) => {
						return `${qStart2}${p1}${qEnd2}`;
					});
				}
				//Replace wrong UB abbs
				if ([...obj.line.matchAll(reAbb)].length > 0 &&
					[...tr.matchAll(reAbb)].length > 0) {
					tr = tr.replace(reAbb, (match, p1) => `${targetAbb}${p1}`);
				}
				//Replace 'document \d+' with 'paper \d+' if target is English
				if (targetLan === 'en' && 
					[...tr.matchAll(reDocEN)].length > 0) {
					tr = tr.replace(reDocEN, (match, p1) => `paper ${p1}`);
				}
				// Do a fix if ends in <br> and it is no more
				if ([...obj.line.trim().matchAll(reBr)].length > 0 &&
					[...tr.trim().matchAll(reBr)].length === 0) {
					tr += '<br>';
				}
				//Replace starting blank spaces
				const blanks = [...obj.line.matchAll(reBlanks)].map(n => n[0]);
				if (blanks[0]) {
					tr = tr.replace(reBlanks, '');
					tr = blanks[0] + tr;
				}
				return tr;
			});
	};
}

module.exports = GoogleTranslate;