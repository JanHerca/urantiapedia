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
	 *      name: 'ángeles',
	 *      lines: [
	 *        {
	 *           text: 'personalidades del Espíritu Infinito',
	 *           level: 0,
	 *           seeAlso: ['personalidades'],
	 *           refs: ['30:2.82']
	 *        },
	 *        {
	 *          ...
	 *        }
	 *      ],
	 *      seeAlso: ['Espíritu Infinito:familia'],
	 *      refs: ['26:1'],
	 *      type: 'ORDEN',
	 *      revised: 'NO',
	 *      order: 'a.txt:01294'
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

	/**
	 * Lee todos los archivos del Topic Index en formato TXT de una carpeta.
	 * @param {string} dirPath Carpeta de entrada.
	 * @return {Promise}
	 */
	readFromTXT = (dirPath) => {
		return readFrom(dirPath, '.txt', this.clear, this.readFileFromTXT, this);
	};

	/**
	 * Limpia los objetos que almacenan el Topic Index.
	 */
	clear = () => {
		this.topics = [];
		this.redirects = [];
	};

	/**
	 * Lee un archivo TXT del Topic Index.
	 * @param {*} filePath Archivo TXT del Topic Index.
	 * @return {Promise}
	 */
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
				lines.forEach((line, i) => {
					let data, data2, refs, seeAlso, level;
					const tline = line.trim();
					if (tline.startsWith('#')) {
						return;
					}
					level = line.split(/\t/g).findIndex(a => a != '');
					data = tline.split('|').map(i => i.trim());
					
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
							data = tline.split(/\([^)]*\)/g)
								.filter(i => i.trim() != '')
								.map(i => i.trim().replace(/^\.|\.$/g, '').trim());
							refs = tline.replace(/[^()](?=([^()]*\([^()]*\))*[^()]*$)/g, '')
								.split(/[()]/g)
								.filter(i => i.trim() != '');
							topicline = {
								text: '',
								level: level
							};
							if (data.length === 0) {
								errors.push(new Error(`${baseName}, línea ${i}: ${tline}`));
							} else {
								data2 = data[0].split('|').map(p => p.trim());
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

	/**
	 * Normaliza todos los archivos TXT del Topic Index en una carpeta.
	 * La normalización básicamente coloca un separador '|' entre cada información
	 * de cada entrada para fragmentar luego adecuamente los datos.
	 * @param {string} dirPath Carpeta de entrada.
	 * @return {Promise}
	 */
	normalize = (dirPath) => {
		return readFrom(dirPath, '.txt', this.clear, this.normalizeFile, this);
	};

	/**
	 * Normaliza un archivo TXT del Topic Index.
	 * @param {string} filePath Archivo TXT del Topic Index.
	 * @return {Promise}
	 */
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

	/**
	 * Escribe todas las entradas del Topic Index en formato Wiki.
	 * También crea un archivo 'Dónde_puedo_aportar_contenido.wiki' para poder
	 * rellenar esta página del Manual más fácilmente.
	 * @param {string} dirPath Carpeta de salida.
	 * @return {Promise}
	 */
	writeToWiki = (dirPath) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([new Error(`El directorio ${baseName} no está accesible`)]);
					return;
				}
				const promises = this.topics.map(topic => {
					const name = topic.name.substring(0, 1).toUpperCase() +
						topic.name.substring(1);
					let filePath = path.join(dirPath, `${name}.wiki`);
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

	/**
	 * Escribe una entrada del Topic Index a Wiki.
	 * @param {string} filePath Archivo Wiki de salida.
	 * @param {Object} topic Objeto con la entrada del Topic Index.
	 * @return {Promise}
	 */
	writeFileToWiki = (filePath, topic) => {
		return new Promise((resolve, reject) => {
			let wiki = '';
			const end = '\r\n\r\n';
			topic.lines.forEach((line, i) => {
				let heading = '=';
				const nextline = topic.lines[i + 1];
				let content = line.text.replace(/#/g, 'núm.');
				const acontent = content.replace(/ /g, '_');
				const anchor = `{{anchor|${acontent}}}`;
				content = content.substring(0, 1).toUpperCase() + 
					content.substring(1);
				
				if (nextline && line.level < nextline.level) {
					heading += '='.repeat(line.level + 1);
					wiki += `${end}${heading} ${anchor} ${content} ${heading}${end}`;
				} else {
					content = content.replace(/^[1-9]\./g, '#');
					if (content.startsWith('# ')) {
						content = '# ' + content.substring(2, 3).toUpperCase() + 
							content.substring(3) + '\r\n';
					} else if (!content.endsWith('.')) {
						content += '. ';
					}
					wiki += content;
					
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

					if (nextline && line.level > nextline.level) {
						wiki += `${end}`;
					}
				}
				
			});

			if (topic.seeAlso && topic.seeAlso.length > 0) {
				wiki += `${end}== Enlaces ==${end}`;
				topic.seeAlso.forEach(also => {
					let also2 = also.replace(/ /g, '_').replace(/:/g, '#');
					also2 = also2.substring(0, 1).toUpperCase() + also2.substring(1);
					wiki += `* [[${also2}]]\r\n`;
				})
			}
			topic.lines.forEach((line, i) => {
				if (line.seeAlso) {
					wiki += '* ';
					line.seeAlso.forEach((also, j) => {
						let also2 = also.replace(/ /g, '_').replace(/:/g, '#');
						also2 = also2.substring(0, 1).toUpperCase() + also2.substring(1);
						const e = (j === line.seeAlso.length - 1 ? '' : ', ');
						wiki += `[[${also2}]]${e}`;
					});
					wiki += '\r\n';
				}
			});

			wiki += `${end}== Referencias ==\r\n<references />\r\n`;

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