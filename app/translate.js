// Connection with Google Cloud Translation API, both Basic and Advanced
// IMPORTANT: Basic API uses API Keys, but Advanced API uses ADC credentials

// Imports the Google Cloud Translation library
// const { TranslationServiceClient } = require('@google-cloud/translate');
const { Translate } = require('@google-cloud/translate').v2;

const { readFile, writeFile } = require('./utils');

class GoogleTranslate {
	apiKey = null;
	projectID = null;
	translate = null;
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
	 * @return {Promise} Promise that returns an array of string for resolve or
	 * error for reject.
	 */
	translateFile = (sourcePath, targetPath, sourceLan, targetLan) => {
		if (!this.translate) {
			return Promise.reject('Client configuration required.');
		}
		const objects = [];
		//Read the file and create an array of objects
		return readFile(sourcePath)
			.then(lines => {
				this.processLines(lines).forEach(obj => objects.push(obj));
				const texts = objects
					.filter(obj => obj.ignore != true)
					.map(obj => obj.text);
				console.log(objects);
				//return this.translateText(texts, sourceLan, targetLan);
			})/*
			.then(translations => {
				objects
					.filter(obj => obj.ignore != true)
					.forEach((obj, i) => obj.translation = translations[i]);
				const translatedLines = this.finalizeTranslation(objects);
				return writeFile(targetPath, translatedLines.join('\n'));
			})*/;
	};

	/**
	 * Create an array of objects from an array of lines that reduce content
	 * to be translated removing parts that are not required for translation.
	 * @param {string[]} lines Lines to translate.
	 * @return {Object[]} Array of objects.
	 */
	processLines = (lines) => {
		let headerRead = false;
		let insideHeader = false;
		let insideNavigator = false;
		return lines.map((line, i) => {
			let ignore = false;
			let remove = false;
			let text = null;
			let text_length = 0;
			const isSep = line.startsWith('---');
			const isTitle = line.startsWith('title:');
			const isDesc = line.startsWith('description:');
			const hasDesc = (isDesc && 
				line.replace('description:', '').trim() != '');
			const isNavStart = line.startsWith('<figure class=' +
				'"table chapter-navigator">');
			const isNavEnd = line.startsWith('</figure>');

			//Check if line is inside header
			if (!headerRead && isSep) {
				if (insideHeader) {
					headerRead = true;
				}
				insideHeader = !insideHeader;
			}
			if ((insideHeader && !(isTitle || hasDesc)) || isSep) {
				ignore = true;
			}
			//Check if line is inside navigator
			//Navigator not only must be ignored but also removed from output
			insideNavigator = (!insideNavigator && isNavStart ? true :
				(insideNavigator && isNavEnd ? false : insideNavigator));
			if (insideNavigator || isNavEnd) {
				ignore = true;
				remove = true;
			}
			//Check empty line
			if (line.trim() === '') {
				ignore = true;
			}
			//Check image (only translate figcaption)

			//Check anchors (better remove because they are added automatic)

			//Check Urantiapedia links and external links

			//Check Urantia Book quotes (if link exists to one paragraph)


			return {
				index: i,
				line: line,
				line_length: line.length,
				text: text,
				text_length: text_length,
				translation: null,
				ignore: ignore,
				remove: remove
			};
		});
	};

	/**
	 * Create an array of lines from an array of objects that reconstruct the
	 * final translation adding the parts not required for translation.
	 * @param {Object[]} objects Objects with original and translation info.
	 * @return {string[]} Array of lines.
	 */
	finalizeTranslation = (objects) => {
		
		//Check quotation marks

		//Check glossary names (extracted from Topic Index)
	};

	//TODO: Add a log like in the process pane
	//TODO: Send an array when translating where add errors, like replace chars
	//not being found and warnings to check some lines (with UB quotes) and show
	//these errors as a report in the log pane
}

module.exports = GoogleTranslate;