//Reader/Writer for a image catalog in Markdown format (md)
//The path of this catalog is fixed: /input/markdown/xx/image_catalog.md
//The english path contains the main tables, and the other the translations

const {app} = require('electron').remote;
const path = require('path');
const readFile = require('./utils').readFile;

class ImageCatalog {
	language = 'en';
	images = [];

	setLanguage = (language) => {
		this.language = language;
	};

	/**
	 * Clears any content read.
	 */
	clear = () => {
		this.images = [];
	};

	/**
	 * Reads the default location of the image catalog.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	read = () => {
		const filePathEN = path.join(app.getAppPath(), 
			`input/markdown/en/image_catalog.md`);
		const filePathCur = path.join(app.getAppPath(), 
			`input/markdown/${this.language}/image_catalog.md`)
		return new Promise((resolve, reject) => {
			const promises = (this.language === 'en' ?
				[readFile(filePathEN)] : 
				[readFile(filePathEN), readFile(filePathCur)]);
			Promise.all(promises)
				.then(results => {
					const linesEN = results[0];
					const linesOther = (results.length > 1 ? results[1] : null);
					this.clear();
					this.readFileEN(linesEN);
					if (!linesOther) {
						resolve(null);
						return;
					}
					this.readFileOther(linesOther);
					resolve(null);
				})
				.catch(reject);
		});
	};

	/**
	 * Read the file in english.
	 * @param {string[]} lines Lines.
	 */
	readFileEN = (lines) => {
		let comment = false;
		let section = null;
		let header = [];
		lines.forEach(line => {
			if (!comment && line.startsWith('<!--')) {
				comment = true;
			}
			if (!comment && line.startsWith('#')) {
				section = {
					path: line.replace(/#/g, '').trim(),
					list: []
				};
				this.images.push(section);
			}
			if (!comment && line.indexOf('|') != -1) {
				const values = line.trim()
					.replace(/^\||\|$/g, '')
					.split('|').map(v => v.trim());
				if (values[0] === 'ref') {
					header = values;
				} else if (section && values.length > 0 &&
					values[0] != 'ref' && 
					values[0].indexOf('---') === -1 &&
					header.length === values.length) {
					const img = {};
					values.forEach((v,i) => img[header[i]] = v);
					section.list.push(img);
				}
			}
			if (comment && line.trim().endsWith('-->')) {
				comment = false;
			}
		});
	};

	/**
	 * Read the file in other language not english.
	 * @param {string[]} lines Lines.
	 */
	readFileOther = (lines) => {
		let comment = false;
		lines.forEach(line => {
			if (!comment && line.startsWith('<!--')) {
				comment = true;
			}
			if (!comment && line.indexOf('|') != -1) {
				const values = line.trim()
					.replace(/^\||\|$/g, '')
					.split('|').map(v => v.trim());
				if (values.length == 2 &&
					values[0] != 'title' && 
					values[0].indexOf('---') === -1) {
					this.images.forEach(s => {
						const imgs = s.list
							.filter(i => i.title == values[0]);
						imgs.forEach(i => {
							i[`title_${this.language}`] = values[1];
						});

					});
				}
			}
			if (comment && line.trim().endsWith('-->')) {
				comment = false;
			}
		});
	};

	/**
	 * Gets image for the given ref or null if no one.
	 * @param {string} ref Reference.
	 * @return {?string}
	 */
	getImageForRef = (ref) => {
		let img = null;
		this.images.find(s => {
			const i = s.list.find(item => item.ref === ref);
			if (i && s.path && i.file) {
				let title = (this.language === 'en' ?
					i.title : i[`title_${this.language}`]);
				title = (title ? title : '');
				const author = (i.author && i.author != '' ? ', ' + i.author : '');
				const year = (i.year && i.year != '' ? ', ' + i.year : '');
				const url = (i.url && i.url != '' ? 
					` (<a href="${i.url}" target="_blank">Wikimedia</a>)` : '');
				const footer = title + author + year + url;

				img = 
					`<figure id="Figure_${ref}" class="image image_resized">\r\n` + 
						`<img src="${s.path}/${i.file}">\r\n` +
					`</figure>\r\n` +
					(footer != '' ? `<em>${footer}</em>\r\n` : '');
			}
			return (i != null);
		});
		return img;
	};
};

module.exports = ImageCatalog;
