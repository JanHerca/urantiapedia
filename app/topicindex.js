//Reader/Writer para pasar los términos del Uversa Topic Index a *.wiki

const LaTeXSeparator = require('./enums').LaTeXSeparator;
const BibleAbb = require('./enums').BibleAbb;
const extractStr = require('./utils').extractStr;
const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const readFrom = require('./utils').readFrom;
const fs = require('fs');
const path = require('path');

class TopicIndex {
	topics = [];
	redirects = [];

	//***********************************************************************
	// TXT
	//***********************************************************************

	readFromTXT = (dirPath) => {
		return readFrom(dirPath, '.txt', this.clear, this.readFileFromTXT, this);
	};

	clear = () => {
		this.topics = [];
		this.redirects = [];
	};

	readFileFromTXT = (filePath) => {
		const baseName = path.basename(filePath);
		return new Promise((resolve, reject) => {
			if (this.onProgressFn) {
				this.onProgressFn(baseName);
			}

			const addRefs = (d, d2, obj) => {
				if (d2.length > 1 && d2[1].startsWith('Ver ')) {
					obj.seeAlso = d2[1].substring(4).split(';')
						.map(s => s.trim());
				} else if (d.length === 2 && d[1].startsWith('Ver '))  {
					obj.seeAlso = d[1].substring(4).split(';')
						.map(s => s.trim());
				}
			};

			fs.readFile(filePath, (errFile, buf) => {
				if (errFile) {
					reject([errFile]);
					return;
				}
				const lines = buf.toString().split('\n');
				const errors = [];
				let current = null;
				let topicline = null;
				let isRedirect = false;
				lines.forEach((line, i) => {
					let data, data2, refs;
					const tline = line.trim();
					if (tline.startsWith('#')) {
						return;
					}
					data = tline.split(/\([^)]*\)/g)
						.filter(i => i.trim() != '')
						.map(i => i.trim().replace(/^\.|\.$/g, '').trim());
					refs = tline.replace(/[^()](?=([^()]*\([^()]*\))*[^()]*$)/g, '')
						.split(/[()]/g)
						.filter(i => i.trim() != '');
					if (current && (tline === '' || i === lines.length - 1)) {
						if (isRedirect) {
							this.redirects.push(current);
						} else {
							this.topics.push(current);
						}
						current = null;
					} else if (current && tline.length > 0) {
						if (data.length === 0) {
							errors.push(new Error(`${baseName}, línea ${i}: ${tline}`));
						} else {
							topicline = {
								text: ''
							};
							data2 = data[0].split('.').map(p => p.trim());
							topicline.text = data2[0];
							addRefs(data2, data, topicline);
							topicline.refs = refs;
							current.lines.push(topicline);
						}
					} else if (!current && tline.length > 0) {
						isRedirect = (!lines[i + 1] || 
							lines[i + 1].trim().length === 0);
						if (data.length === 0) {
							errors.push(new Error(`${baseName}, línea ${i}: ${tline}`));
						} else {
							current = {
								name: '',
								lines: []
							};
							data2 = data[0].split('.').map(p => p.trim());
							current.name = data2[0];
							addRefs(data2, data, current);
							current.refs = refs;
						}
					}
				});
				
				if (errors.length === 0) {
					resolve(null);
				} else {
					reject(errors);
				}
			});
		});
	};

	//***********************************************************************
	// Wiki
	//***********************************************************************

	writeToWiki = (dirPath) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([new Error(`El directorio ${baseName} no está accesible`)]);
					return;
				}
				const promises = this.topics.map(topic => {
					let filePath = path.join(dirPath, `${topic.name}.wiki`);
					let p = this.writeFileToWiki(filePath, topic);
					return reflectPromise(p);
				});
				Promise.all(promises)
					.then((results) => {
						const errors = [];
						results.forEach(r => extendArray(errors, r.error));
						if (errors.length === 0) {
							resolve(null);
						} else {
							reject(errors);
						}
					});
			});
		});
	};

	writeFileToWiki = (filePath, topic) => {
		return new Promise((resolve, reject) => {
			let wiki = '';
			const end = '\r\n\r\n';
			topic.lines.forEach(line => {
				wiki += line.text.substring(0, 1).toUpperCase() + 
					line.text.substring(1);
				if (line[line.length - 1] != '.') {
					wiki += '. ';
				}
				line.refs.forEach(ref => {
					let data = ref.split(/[:.]/g);
					wiki += '<ref>{{lib|LU|';
					if (data.length === 1) {
						wiki += data[0];
					} else if (data.length === 2) {
						wiki += `${data[0]}|${data[1]}`;
					} else if (data.length === 3) {
						wiki += `${data[0]}|${data[1]}|${data[2]}`;
					}
					wiki += '}}</ref> '; 
				});
			});

			if (topic.seeAlso && topic.seeAlso.length > 0) {
				wiki += `${end}== Véase también ==${end}`;
				topic.seeAlso.forEach(also => wiki += `* [[${also}]]\r\n`);
			}

			wiki += `${end}== Referencias ==${end}<references />\r\n`;

			fs.writeFile(filePath, wiki, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};
};

module.exports = TopicIndex;