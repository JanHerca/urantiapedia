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
	/**
	 * @example
	 * topics = [
	 *   {
	 *      name: 'name1',
	 *      lines: [
	 *        {
	 *           text: 'text 1',
	 *           seeAlso: ['see x'],
	 *           refs: ['100:0.1']
	 *        },
	 *        {
	 *          ...
	 *        }
	 *      ],
	 *      seeAlso: ['see 1', 'see 2'],
	 *      refs: ['0:0.1', '0:0.2'],
	 *      type: 'PERSONA',
	 *      revised: 'NO',
	 *      order: 'a1'
	 *   },
	 *   {
	 *    ...
	 *   }
	 * ];
	 */
	topics = [];

	/**
	 * @example
	 * redirects is equals that topics but each topic has no lines
	 */
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
				let ignored = false;
				lines.forEach((line, i) => {
					let data, data2, refs, seeAlso;
					const tline = line.trim();
					if (tline.startsWith('#')) {
						return;
					}
					data = tline.split('|').map(i => i.trim());
					
					if (current && (tline === '' || i === lines.length - 1)) {
						if (!ignored) {
							if (isRedirect) {
								this.redirects.push(current);
							} else {
								this.topics.push(current);
							}
						}
						current = null;
					} else if (current && tline.length > 0) {
						if (data.length === 0) {
							errors.push(new Error(`${baseName}, línea ${i}: ${tline}`));
						} else {
							data = tline.split(/\([^)]*\)/g)
								.filter(i => i.trim() != '')
								.map(i => i.trim().replace(/^\.|\.$/g, '').trim());
							refs = tline.replace(/[^()](?=([^()]*\([^()]*\))*[^()]*$)/g, '')
								.split(/[()]/g)
								.filter(i => i.trim() != '');
							topicline = {
								text: ''
							};
							if (data.length === 0) {
								errors.push(new Error(`${baseName}, línea ${i}: ${tline}`));
							} else {
								data2 = data[0].split('.').map(p => p.trim());
								seeAlso = data2.findIndex(d => d.startsWith('Ver '));
								if (seeAlso === -1) {
									topicline.text = data[0];
								} else {
									topicline.text = data2.slice(0, seeAlso).join('. ');
									topicline.seeAlso = data2[seeAlso].substring(4).split(';')
										.map(s => s.trim());
								}
								topicline.refs = refs;
								current.lines.push(topicline);
							}
						}
					} else if (!current && tline.length > 0) {
						isRedirect = (!lines[i + 1] || 
							lines[i + 1].trim().length === 0);
						if (data.length === 0) {
							errors.push(new Error(`${baseName}, línea ${i}: ${tline}`));
						} else if (data.length === 5) {
							ignored = (tline.substring(tline.length - 2) === 'OK');
							if (data[1].startsWith('(') && data[1].endsWith(')')) {
								refs = data[1].split(/[()]/g).filter(i => i.trim() != '');
							}
							if (data[2].startsWith('Ver ')) {
								seeAlso = data[2].substring(4).split(';').map(s => s.trim());
							}
							current = {
								name: data[0],
								lines: [],
								type: (data[3] === '' ? 'OTRO' : data[3]),
								revised: (data[4] === '' ? 'NO' : 'SI'),
								order: baseName + ':' + i.toString().padStart(5, '0')
							};
							current.seeAlso = (seeAlso ? seeAlso : []);
							current.refs = (refs ? refs : []);
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

	normalize = (dirPath) => {
		return readFrom(dirPath, '.txt', this.clear, this.normalizeFile, this);
	};

	normalizeFile = (filePath) => {
		const baseName = path.basename(filePath);
		return new Promise((resolve, reject) => {
			if (this.onProgressFn) {
				this.onProgressFn(baseName);
			}
			

			fs.readFile(filePath, (errFile, buf) => {
				if (errFile) {
					reject([errFile]);
					return;
				}
				const lines = buf.toString().split('\n');
				const errors = [];
				let result = '';
				let nfilePath = filePath.replace('.txt', '_normalized.txt');
				
				let current = null;
				const topicTypes = ['PERSONA', 'LUGAR', 'ORDEN', 'RAZA', 'OTRO'];

				lines.forEach((line, i) => {
					let data, name, refs, seeAlso, type, ok;
					const tline = line.trim();
					if (line.startsWith('#') || (!current && tline === '')) {
						result += line;
					} else if (current && (tline === '' || i === lines.length - 1)) {
						result += line;
						current = null;
					} else if (current && tline.length > 0) {
						result += line;
					} else if (!current && tline.length > 0) {
						current = {};
						data = tline.split('|').map(i => i.trim());

						if (data.length === 0) {
							errors.push(new Error(`${baseName}, línea ${i}: ${tline}`));
						} else if (data.length === 5) {
							name = data[0];
							refs = data[1];
							seeAlso = data[2];
							type = data[3];
							ok = data[4];
							if ((name === '') || 
								(refs != '' && refs.indexOf('(') === -1) ||
								(seeAlso != '' && !seeAlso.startsWith('Ver ')) ||
								(type != '' && topicTypes.indexOf(type) === -1) ||
								(ok != '' && ok != 'OK')) {
								errors.push(new Error(`${baseName}, línea ${i}: ${tline}`));
							}
							result += line;
						} else if (data.length > 1) {
							name = data[0];
							refs = data.find(d => d.startsWith('(')) || '';
							refs = (refs.length > 0 ? refs + ' ': refs);
							seeAlso = data.find(d => d.startsWith('Ver ')) || '';
							seeAlso = (seeAlso.length > 0 ? seeAlso + ' ' : seeAlso);
							type = data.find(d => topicTypes.indexOf(d) != -1) || '';
							type = (type.length > 0 ? type + ' ' : type);
							ok = data.find(d => d === 'OK') || '';
							result += `${name} | ${refs}| ${seeAlso}| ${type}| ${ok}\r\n`;
						} else {
							result += tline + ' | | | | \r\n';
						}
					}
				});

				if (errors.length === 0) {
					fs.writeFile(nfilePath, result, 'utf-8', (err) => {
						if (err) {
							reject(err);
							return;
						}
						resolve(null);
					});
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