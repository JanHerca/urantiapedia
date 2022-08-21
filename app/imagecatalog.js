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
		const title2 = `title_${this.language}`;
		const text2 = `text_${this.language}`;
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
						s.list
							.filter(i => i.text == values[0])
							.forEach(i => i[text2] = values[1]);
						s.list
							.filter(i => i.title == values[0])
							.forEach(i => i[title2] = values[1]);
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
		/*
		TODO: Could be interesting create an algorythm to locate floating right images:
		- using image-style-align-right and style="margin:10px 0 10px 10px;" in figure tag
		- adding @media (max-width: 1000px){.v-main .contents figure.image-style-align-right{float:none;}}
		to each page in CSS injected to avoid floating in small devices
		- problem is that floating floats next paragraphs, not previous
		and we are locating images after paragraphs
		- also this option should not be use when images are horizontal or when
		other images are close, so it is difficult
		*/
		let img = null;
		this.images.find(s => {
			const i = s.list.find(item => item.ref === ref);
			const link = (s.path.indexOf('Jesus_life') != -1 ?
				'Wikimedia' : (s.path.indexOf('Gary_Tonge') != -1 ?
				'Vision Afar' : 'Link'));
			if (i && s.path && i.file) {
				const id = ref.replace(/:|\./g, '_');
				let text =  (this.language === 'en' ?
					i.text : i[`text_${this.language}`]) ;
				text = (text ? text : '');
				let title =  (this.language === 'en' ?
					i.title : i[`title_${this.language}`]) ;
				title = (title ? '<em>' + title + '</em>': '');
				const author = (i.author && i.author != '' ? i.author : '');
				const year = (i.year && i.year != '' ? i.year : '');
				const url = (i.url && i.url != '' ? 
					`<a href="${i.url}" target="_blank">${link}</a>` : '');
				const captions = [text, title, author, year, url]
					.filter(n => n != '');
				let footer = '';
				if (captions.length > 0) {
					footer = 
						`<figcaption>\r\n` +
							`${captions.join(', ')}\r\n` +
						`</figcaption>\r\n`;
				}
				let cls = 'image urantiapedia';
				if (i.float === 'R') {
					cls += ' image-style-align-right';
				} else if (i.float === 'L') {
					cls += ' image-style-align-left';
				}

				img = 
					`<figure id="Figure_${id}" class="${cls}">\r\n` + 
						`<img src="${s.path}/${i.file}">\r\n` +
						`${footer}` +
					`</figure>\r\n`;
			}
			return (i != null);
		});
		return img;
	};
};

module.exports = ImageCatalog;
