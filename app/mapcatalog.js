//Reader/Writer for a map catalog in Markdown format (md)
//The path of this catalog is fixed: /input/markdown/xx/map_catalog.md
//The english path contains the main tables, and the other the translations

const {app} = require('electron').remote;
const path = require('path');
const readFilePairs = require('./utils').readFilePairs;
const strformat = require('./utils').strformat;
const Strings = require('./strings');

class MapCatalog {
	language = 'en';
	maps = [];
	translations = [];
	supported = ['en', 'es'];

	// Values:
	// 0 - title of map
	// 1 - quote from UB
	// 2 - ref from UB
	// 3 - map path
	// 4 - Open map text
	// 5 - map thumbnail path
	// CSS is in override.css
	template = 
		'<blockquote class="is-map">\r\n' +
		'  <div>\r\n' +
		'    <p><b>{0}</b></p>\r\n' +
		'    <p><i>{1}</i> [{2}]</p>\r\n' +
		'    <p>\r\n' +
		'      <button type="button" class="v-btn theme--dark v-size--default blue-grey">\r\n' +
		'        <span class="v-btn__content">\r\n' +
		'          <span class="text-none">\r\n' +
		'            <a href="{3}">{4}</a>\r\n' +
		'          </span>\r\n' +
		'        </span>\r\n' +
		'      </button>\r\n' +
		'    </p>\r\n' +
		'  </div>\r\n' +
		'  <div>\r\n' +
		'    <img src="{5}">\r\n' +
		'  </div>\r\n' +
		'</blockquote>\r\n';

	setLanguage = (language) => {
		this.language = language;
	};

	/**
	 * Clears any content read.
	 */
	clear = () => {
		this.maps = [];
		this.translations = [];
	};

	/**
	 * Reads the default location of the map catalog.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	read = () => {
		if (!this.supported.includes(this.language)) {
			return Promise.resolve(null);
		}
		const filePathEN = path.join(app.getAppPath(), 
			`input/markdown/en/map_catalog.md`);
		const filePathCur = path.join(app.getAppPath(), 
			`input/markdown/${this.language}/map_catalog.md`);
		return readFilePairs(filePathEN, filePathCur, this.language,
			this.clear, this.readFileEN, this.readFileOther, this);
	};

	/**
	 * Reads the lines and stored them in result array.
	 * @param {string[]} lines Lines.
	 * @param {string} firstColum Name of first column in expected table.
	 * @param {Array} result Array to stored results.
	 */
	readFileLines = (lines, firstColumn, result) => {
		let comment = false;
		let header = [];
		lines.forEach(line => {
			if (!comment && line.startsWith('<!--')) {
				comment = true;
			}
			if (!comment && line.indexOf('|') != -1) {
				const values = line.trim()
					.replace(/^\||\|$/g, '')
					.split('|').map(v => v.trim());
				if (values[0] === firstColumn) {
					header = values;
				} else if (values.length > 0 &&
					values[0] != firstColumn && 
					values[0].indexOf('---') === -1 &&
					header.length === values.length) {
					const obj = {};
					values.forEach((v,i) => obj[header[i]] = v);
					result.push(obj);
				}
			}
			if (comment && line.trim().endsWith('-->')) {
				comment = false;
			}
		});
	};

	/**
	 * Read the file in english.
	 * @param {string[]} lines Lines.
	 */
	readFileEN = (lines) => {
		this.readFileLines(lines, 'ref', this.maps);
	};

	/**
	 * Read the file in other language not english.
	 * @param {string[]} lines Lines.
	 */
	readFileOther = (lines) => {
		this.readFileLines(lines, 'text', this.translations);
	};

	/**
	 * Gets map for the given ref or null if no one.
	 * @param {string} ref Reference.
	 * @return {?string}
	 */
	getMapForRef = (ref) => {
		const map = this.maps.find(m => m.ref === ref);
		if (!map) {
			return null;
		}
		const title2 = this.translations.find(t => t.text === map.title);
		const title = (this.language === 'en' ? map.title :
			(title2 ? title2.translation : map.title));
		const quote2 = this.translations.find(t => t.text === map.quote);
		const quote = (this.language === 'en' ? map.quote :
			(quote2 ? quote2.translation : map.quote));
		const ref2 = this.tr('bookAbb') + ' ' + ref;
		const path = `/${this.language}${map.path}`;
		const label = this.tr('lblOpenMap');
		const html = strformat(this.template, title, quote, ref2, path, label,
			map.thumbnail);
		return html;
	};

	/** 
	 * Translates a text.
	 * @param {string} code Code of text to translate.
	 */
	tr = (code) => {
		const t = Strings[code][this.language];
		const t2 = Strings[code]['en'];
		return t ? t : t2;
	};

};


module.exports = MapCatalog;