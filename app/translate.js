// Connection with Google Cloud Translation API, both Basic and Advanced
// IMPORTANT: Basic API uses API Keys, but Advanced API uses ADC credentials

// Imports the Google Cloud Translation library
// const { TranslationServiceClient } = require('@google-cloud/translate');
const { Translate } = require('@google-cloud/translate').v2;

const { strformat, readFile, writeFile } = require('./utils');
const Strings = require('./strings');

class GoogleTranslate {
	apiKey = null;
	projectID = null;
	translate = null;
	sourceBook = null;
	targetBook = null;
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
	 */
	configure = (apiKey, projectID) => {
		this.apiKey = apiKey;
		this.projectID = projectID;
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
		return this.translate.translate(text, {
			from: sourceLan,
			to: targetLan
		})
		.then(response => {
			let [translations] = response;
			translations = Array.isArray(translations) ? translations :
				[translations];
			return translations;
		});
	};

	/**
	 * Translates a Markdown file.
	 * @param {string} sourcePath Source file path.
	 * @param {string} targetPath Target file path.
	 * @param {string} sourceLan Source language code, like `en`.
	 * @param {string} targetLan Target language code, like `es`.
	 * @return {Promise} Promise that returns an array of strings with a report
	 * of issues found for resolve or error for reject.
	 */
	translateFile = (sourcePath, targetPath, sourceLan, targetLan) => {
		if (!this.translate) {
			return Promise.reject('Client configuration required.');
		}
		const objects = [];
		const errors = [];
		const msg1 = 'Total text in file: {0}';
		const msg2 = 'Text sent to translate in file: {0}';
		//Read the file
		return readFile(sourcePath)
			.then(lines => {
				//Process lines and translate
				this.processLines(lines, sourceLan, targetLan, errors)
					.forEach(obj => objects.push(obj));
				const texts = objects
					.filter(obj => obj.ignore != true)
					.map(obj => obj.text);
				console.log(objects);
				return this.translateText(texts, sourceLan, targetLan);
			})
			.then(translations => {
				//Process translations and write
				objects
					.filter(obj => obj.ignore != true)
					.forEach((obj, i) => obj.translation = translations[i]);
				const translatedLines = this.finalizeTranslation(objects,
					sourceLan, targetLan, errors);
				console.log(translatedLines);
				return writeFile(targetPath, translatedLines.join('\n'));
			})
			.then(result => {
				//Return any issue
				const lineCount = objects.reduce((ac,cur) => {
					return ac + cur.line.length;
				}, 0);
				const trCount = objects.reduce((ac,cur) => {
					return ac + (cur.text ? cur.text.length : 0);
				}, 0);
				errors.push(strformat(msg1, lineCount));
				errors.push(strformat(msg2, trCount));
				return errors;
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
		let insideImage = false;
		let insideMath = false;
		const reAnchor = new RegExp('<a id="a\\d+_\\d+"><\\/a>', 'g');
		const reUBLink = new RegExp(`\\[[^\\]]+\\]\\(\/${sourceLan}\/` +
			'The_Urantia_Book\/(\\d+)#p(\\d+)(?:_(\\d+))?\\)', 'g');
		const reUPLink = new RegExp(`\\(?\/${sourceLan}\/[^\\)]+\\)?`, 'g');
		const reLinks = new RegExp(
			`\\(?(https?:\\/\\/[\\w\\d./?=#\\-\\%\\(\\)]+)\\)?`, 'g');
		const reMath = new RegExp('\\$([^ ][^$]*)\\$', 'g');
		const sourceAbb = Strings.bookAbb[sourceLan];
		const targetAbb = Strings.bookAbb[targetLan];

		return lines.map((line, i, array) => {
			let ignore = false;
			let remove = false;
			let text = null;
			let text_length = 0;
			let extractIndex = -1;
			let line_type = 'other';
			const extracts = [];
			const prev = (i > 0 ? array[i - 1] : null);
			const isSep = line.startsWith('---');
			const isTitle = line.startsWith('title:');
			const isDesc = line.startsWith('description:');
			const hasDesc = (isDesc && 
				line.replace('description:', '').trim() != '');
			const isCopy = line.startsWith('<p class="v-card');
			const isNavStart = line.startsWith('<figure class=' +
				'"table chapter-navigator">');
			const isImgStart = line.indexOf('class="image urantiapedia') != -1;
			const isFigCaption = line.startsWith('<figcaption');
			const isPrevEnd = (prev && prev.startsWith('</figure>'));
			const isClear = line.startsWith('<br style="clear:both" />');
			const isMathSep = line.startsWith('$$');
			const isQuote = line.startsWith('> ');
			const ubLinks = [...line.matchAll(reUBLink)];
			const ubLink = (ubLinks.length === 1 ? 
				[1,2,3].map(i => parseInt(ubLinks[0][i])) : []);
			if (ubLink.findIndex(i => isNaN(i)) != -1) ubLink.length = 0;
			const hasOneUBLink = (ubLink.length > 0);

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
				line_type = 'header';
			}
			//Check if line is copyright
			if (isCopy) {
				line_type = 'copyright';
			}
			//Check if line is inside navigator
			//Navigator not only must be ignored but also removed from output
			insideNavigator = (!insideNavigator && isNavStart ? true :
				(insideNavigator && isPrevEnd ? false : insideNavigator));
			if (insideNavigator) {
				ignore = true;
				remove = true;
				line_type = 'navigator';
			}
			//Check empty line or clear line
			if (line.trim() === '' || isClear) {
				line_type = 'blank';
				ignore = true;
			}
			//Check image (only translate figcaption)
			insideImage = (!insideImage && isImgStart ? true :
				(insideImage && isPrevEnd ? false : insideImage));
			if (insideImage && !isFigCaption) {
				ignore = true;
			}
			if (insideImage) {
				line_type = 'image';
			}
			//Check Math LaTeX block
			insideMath = (!insideMath && isMathSep ? true :
				(insideMath && isMathSep ? false : insideMath));
			if (insideMath || isMathSep) {
				ignore = true;
				line_type = 'math';
			}
			//Check anchors (better remove because they are added automatically)
			if (!ignore) {
				text = line.replace(reAnchor, '');
			}
			//Check Urantiapedia links and external links
			if (!ignore) {
				//Check Urantia Book quotes
				if (isQuote && hasOneUBLink && 
					array[i-1] && !array[i-1].startsWith('> ') &&
					array[i+1] && !array[i+1].startsWith('> ')) {
					ignore = true;
					line_type = 'quote';
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
				text = text.replace(reUPLink, match => {
					let extract = match;
					extractIndex++;
					extract = extract.replace(`/${sourceLan}/`, 
						`/${targetLan}/`);
					extracts.push(extract);
					return `%%${extractIndex}%%`;
				});
				//External links
				text = text.replace(reLinks, match => {
					extractIndex++;
					extracts.push(match);
					return `%%${extractIndex}%%`;
				});
			}
			//Check Math LaTeX
			if (!ignore) {
				text = (text ? text : line).replace(reMath, match => {
					extractIndex++;
					extracts.push(match);
					return `%%${extractIndex}%%`;
				});
			}

			//Return
			return {
				index: i,
				line: line,
				line_length: line.length,
				line_type: line_type,
				text: text,
				text_length: text_length,
				translation: null,
				ignore: ignore,
				remove: remove,
				extracts: extracts,
				ubLink: ubLink
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
		const qStart = Strings.quotationStart[sourceLan];
		const qEnd = Strings.quotationEnd[sourceLan];
		const qStart2 = Strings.quotationStart[targetLan];
		const qEnd2 = Strings.quotationEnd[targetLan];
		const reExtract = new RegExp('%%([\\d| ]+)%%', 'g');
		const reQuotations = new RegExp(`${qStart}([^${qEnd}]*)${qEnd}`, 'g');
		const reQuotations2 = new RegExp(`"([^"]*)"`, 'g');
		const reBlanks = new RegExp('^[\\t| ]+', 'g');
		const err1 = 'Extract mark {0} is not valid in translation: <i>{1}</i>';
		const err2 = 'Extract marks number fail in translation: <i>{0}</i>';
		const err3 = 'Paragraph of Urantia Book not found: <i>{0}</i>';
		const link = ``
		
		return objects
			.filter(obj => obj.remove != true)
			.map(obj => {
				let tr = obj.translation;
				let numExtracts = 0;
				let par = null;
				if (obj.ignore && obj.line_type != 'quote') {
					return obj.line;
				}
				//Replace quotes
				if (obj.line_type === 'quote' && obj.ubLink.length === 3) {
					par = this.targetBook.getPar(obj.ubLink[0], obj.ubLink[1], 
						obj.ubLink[2]);
					if (!par) {
						errors.push(strformat(err3, obj.ubLink));
					} else {
						tr = '> ' + par.par_content + ' (%%0%%)';
					}
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