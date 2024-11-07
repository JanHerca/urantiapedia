//Reader/Writer for converting library books to Wiki.js

const fs = require('fs');
const path = require('path');
const {writeFile, reflectPromise, getWikijsNavLinks} = require('./utils');
const Strings = require('./strings');

class Library {
	language = 'en';
	book = {
		title: null,
		folder_name: null,
		shelf_name: null,
		tag: null,
		cover: '',
		index: [],
		links: []
	};

	setLanguage = (language) => {
		this.language = language;
	};

	/**
	 * Reads the information for a book from a Markdown file.
	 */
	readFileFromMarkdown = (filePath) => {
		return new Promise((resolve, reject) => {
			fs.readFile(filePath, (errFile, buf) => {
				if (errFile) {
					reject([errFile]);
					return;
				}
				const lines = buf.toString().split('\n');
				if (lines.length === 0) {
					reject([this.getError('library_book_no_lines')]);
					return;
				}
				let section = null;
				lines.forEach((line, i) => {
					const index = line.indexOf(':');
					if (line.startsWith('## title:')) {
						this.book.title = line.substring(index+1).trim();
					} else if (line.startsWith('## folder_name:')) {
						this.book.folder_name = line.substring(index+1).trim();
					} else if (line.startsWith('## shelf_name:')) {
						this.book.shelf_name = line.substring(index+1).trim();
					} else if (line.startsWith('## tag:')) {
						this.book.tag = line.substring(index+1).trim();
					} else if (line.startsWith('## cover:')) {
						section = 'cover';
					} else if (line.startsWith('## index:')) {
						section = 'index';
					} else if (line.startsWith('## links:')) {
						section = 'links';
					}
					if (section === 'cover') {
						this.book.cover += line + '\r\n';
					}
					if (section === 'index') {
						this.book.index
							.push(line.split('|')
							.map(n => [n[0].trimRight(), n[1].trim()]));
					}
					if (section === 'links') {
						this.book.links.push(line);
					}
				});
				resolve(null);
			});
		});
	};

	/**
	 * Creates blank files (only with header) using the current book info.
	 * @param {string} dirPath Output folder.
	 * @return {Promise}
	 */
	createBlankFiles = (dirPath) => {
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('folder_no_access', dirPath)]);
					return;
				}
				const errs = [];
				const {title, folder_name, shelf_name, tag, cover, index, links} = this.book;
				const folder = path.join(dirPath, folder_name);
				const indexText = Strings[this.language]['bookIndexName'];
				const linksText = Strings[this.language]['topic_external_links'];
				
				try {
					if (!fs.existsSync(folder)) {
						fs.mkdirSync(folder);
					}
				} catch (er) {
					errs.push(this.getError('folder_no_access', folder));
				}
				if (errs.length > 0) {
					reject(errs);
					return;
				}
				const tags = tag.split(',').map(n => n.trim());

				const promises = index.reduce((acc, cur, i, arr) => {
					if (cur[1].indexOf('#') === -1) {
						const filePath = path.join(folder, cur[1]);
						const datestr = this.getDate();
						const path = `/${this.language}/book/${shelf_name}/${folder_name}`;
						const navLinks = getWikijsNavLinks({
							prevTitle: i === 0 ? null : arr[i-1][0],
							prevPath: i === 0 ? null : `${path}/${arr[i-1][1]}`,
							nextTitle: i === arr.length - 1 ? null : arr[i+1][0],
							nextPath: i === arr.length - 1 ? null : `${path}/${arr[i+1][1]}`,
							indexTitle: indexText,
							indexPath: path
						});
						let md = `---\r\n` +
							`title: "${cur[0].trim()}"\r\n` +
							`description: ${title}\r\n` +
							`published: true\r\n` +
							`date: ${datestr}\r\n` +
							`tags: ${[...tags, 'book'].join(', ')}\r\n` +
							`editor: markdown\r\n` +
							`dateCreated: ${datestr}\r\n` +
							`---\r\n` +
							`\r\n` +
							navLinks +
							`\r\n` +
							`\r\n` +
							`\r\n` +
							navLinks;


						acc.push(reflectPromise(writeFile(filePath, md)));
					}
					return acc;
				}, []);
				promises.push(...[null].map(n => {
					const filePath = path.join(dirPath, `${folder_name}.md`);
					const datestr = this.getDate();
					const indexContent = index.map(i => {
						const path = `/${this.language}/book/${shelf_name}/${folder_name}/${i[1]}`;
						const tabs = i[0].startsWith('\t')
							? i[0].match(/\t/g).join('') : '';
						return `${tabs}- [${i[0].trim()}](${path})\r\n`;
					}).join('');
					const linksContent = links.map(l => `${l}\r\n`).join('');
					let md = `---\r\n` +
							`title: "${title}"\r\n` +
							`description: \r\n` +
							`published: true\r\n` +
							`date: ${datestr}\r\n` +
							`tags: ${[...tags, 'book'].join(', ')}\r\n` +
							`editor: markdown\r\n` +
							`dateCreated: ${datestr}\r\n` +
							`---\r\n` +
							`\r\n` +
							cover +
							`\r\n` +
							`## ${indexText}\r\n` +
							`\r\n` +
							indexContent +
							`\r\n` +
							`## ${linksText}\r\n` +
							`\r\n` +
							linksContent;
					return reflectPromise(writeFile(filePath, md));
				}));
				Promise.all(promises)
					then(objs => {
						const er = objs
							.filter(obj => obj.error != null)
							.map(obj => obj.error);
						if (er.length > 0) {
							reject(er);
							return;
						}
						resolve(null);
					});

			});
		});
	};

	clear = () => {
		book = {
			title: null,
			folder_name: null,
			shelf_name: null,
			tag: null,
			cover: '',
			index: [],
			links: []
		}
	};

	getDate = () => {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth()+1;
		const day = date.getDate();
		const datestr = `${year}-${month}-${day}` +
			`T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}Z`;
		return datestr;
	};

	/**
	 * Returns an error.
	 * @param  {...any} params Params.
	 * @returns {Error}
	 */
	getError = (...params) => {
		return getError(this.language, ...params);
	};
}

module.exports = Library;