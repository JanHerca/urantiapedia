//Reader/Writer para pasar los términos del Uversa Topic Index a *.wiki

const LaTeXSeparator = require('./enums').LaTeXSeparator;
const BibleAbb = require('./enums').BibleAbb;
const extractStr = require('./utils').extractStr;
const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const readFrom = require('./utils').readFrom;
const testWords = require('./utils').testWords;
const fs = require('fs');
const path = require('path');

class TopicIndex {
	/**
	 * @example
	 * topics = [
	 *   {
	 *      name: 'ángeles',
	 *      altnames: ['ángel', 'los ángeles'],
	 *      lines: [
	 *        {
	 *           text: 'personalidades del Espíritu Infinito',
	 *           level: 0,
	 *           seeAlso: ['personalidades'],
	 *           refs: ['30:2.82'],
	 *           fileline: 1295
	 *        },
	 *        {
	 *          ...
	 *        }
	 *      ],
	 *      seeAlso: ['Espíritu Infinito:familia'],
	 *      links: [https://es.wikipedia.org/wiki/Ángeles],
	 *      refs: ['26:1'],
	 *      type: 'ORDEN',
	 *      revised: 'NO',
	 *      sorting: 'a.txt:01294',
	 *      filename: 'a.txt',
	 *      fileline: 1294,
	 *      errors: [
	 *         {
	 *            desc: 'seeAlso personalidades no encontrado',
	 *            fileline: 1296
	 *         }
	 *      ]
	 *   },
	 *   {
	 *    ...
	 *   }
	 * ];
	 */
	topics = [];

	//***********************************************************************
	// TXT
	//***********************************************************************

	/**
	 * Lee todos los archivos del Topic Index en formato TXT de una carpeta.
	 * @param {string} dirPath Carpeta de entrada.
	 * @param {string} category La categoría de los términos del Topic Index
	 * que deben ser leídos. Los que no entren dentro de la categoría serán
	 * ignorados. Para leer todo usar 'TODOS'.
	 * @return {Promise}
	 */
	readFromTXT = (dirPath, category) => {
		return readFrom(dirPath, '.txt', this.clear, 
			this.readFileFromTXT.bind(this, category), this);
	};

	/**
	 * Limpia los objetos que almacenan el Topic Index.
	 */
	clear = () => {
		this.topics = [];
	};

	/**
	 * Lee un archivo TXT del Topic Index.
	 * @param {string} category La categoría de los términos del Topic Index
	 * que deben ser leídos. Los que no entren dentro de la categoría serán
	 * ignorados. Para leer todo usar 'TODOS'.
	 * @param {string} filePath Archivo TXT del Topic Index.
	 * @return {Promise}
	 */
	readFileFromTXT = (category, filePath) => {
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
				lines.forEach((line, i) => {
					let data, refs, seeAlso, level;
					const tline = line.trim();
					if (line.startsWith('#')) {
						return;
					}
					level = line.split(/\t/g).findIndex(a => a != '');
					data = tline.split('|').map(i => i.trim());
					
					if (current && (tline === '' || i === lines.length - 1)) {
						if (category === 'TODOS' || category === current.type) {
							this.topics.push(current);
						}
						current = null;
					} else if (current && tline.length > 0 && tline.startsWith('>')) {
						if (!current.links) {
							current.links = [];
						}
						current.links.push(tline.substring(1).trim());
					} else if (current && tline.length > 0) {
						topicline = {
							text: '',
							level: level,
							fileline: i + 1
						};

						if (data.length === 0) {
							errors.push(new Error(`${baseName}, línea ${i+1}: ${tline}`));
						} else if (data.length === 1) {
							data = tline.split(/\([^)]*\)/g)
								.filter(i => i.trim() != '')
								.map(i => i.trim().replace(/^\.|\.$/g, '').trim());
							refs = this.extractRefs(tline);
							
							if (data.length === 0) {
								errors.push(new Error(`${baseName}, línea ${i+1}: ${tline}`));
							} else {
								if (data[0].indexOf('Ver ') != -1) {
									errors.push(new Error(`${baseName}, línea ${i+1}: ${tline}`));
								} else {
									topicline.text = data[0];
									topicline.seeAlso = [];
									topicline.refs = refs;
									current.lines.push(topicline);
								}
							}
						} else if (data.length === 2) {
							topicline.text = data[0];
							if (data[1].startsWith('Ver ')) {
								topicline.seeAlso = data[1].substring(4).split(';')
									.map(s => s.trim());
								topicline.refs = [];
							} else {
								topicline.seeAlso = [];
								topicline.refs = this.extractRefs(data[1]);
							}
							current.lines.push(topicline);
						} else if (data.length === 3) {
							if (!data[1].startsWith('Ver ')) {
								errors.push(new Error(`${baseName}, línea ${i+1}: ${tline}`));
							} else {
								topicline.text = data[0];
								topicline.seeAlso = data[1].substring(4).split(';')
									.map(s => s.trim());
								topicline.refs = this.extractRefs(data[2]);
								current.lines.push(topicline);
							}
						} else {
							errors.push(new Error(`${baseName}, línea ${i+1}: ${tline}`));
						}
					} else if (!current && tline.length > 0) {
						if (data.length === 0) {
							errors.push(new Error(`${baseName}, línea ${i+1}: ${tline}`));
						} else if (data.length === 5) {
							if (data[1].startsWith('(') && data[1].endsWith(')')) {
								refs = data[1].split(/[()]/g).filter(i => i.trim() != '' &&
									i.trim().length > 2);
							}
							if (data[2].startsWith('Ver ')) {
								seeAlso = data[2].substring(4).split(';').map(s => s.trim());
							}
							current = {
								name: data[0].split(';')[0].trim(),
								altnames: data[0].split(';').slice(1).map(a=>a.trim()),
								lines: [],
								type: (data[3] === '' ? 'OTRO' : data[3]),
								revised: (data[4] === '' ? 'NO' : 'SI'),
								sorting: baseName + ':' + (i + 1).toString().padStart(5, '0'),
								filename: baseName,
								fileline: i + 1
							};
							current.seeAlso = (seeAlso ? seeAlso : []);
							current.refs = (refs ? refs : []);
							current.isRedirect = ((!lines[i + 1] || 
								lines[i + 1].trim().length === 0) && 
								current.refs.length === 0);
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
	 * Extract references from a text.
	 * @param {string} text Text.
	 * @return {Array.<string>}
	 */
	extractRefs = (text) => {
		return text.replace(/[^()](?=([^()]*\([^()]*\))*[^()]*$)/g, '')
			.split(/[()]/g)
			.filter(i => i.trim() != '');
	};

	/**
	 * Escribe los errores en un fichero llamado 'errors.json'.
	 * @param {string} dirPath Carpeta de salida.
	 * @return {Promise}
	 */
	writeErrors = (dirPath) => {
		return new Promise((resolve, reject) => {
			const filePath = path.join(dirPath, 'errors.json');
			let errors = [];

			this.topics.forEach(t => {
				const errs = t.errors.map(e => `${t.filename}:${e.fileline} > ${e.desc}`);
				if (errs.length > 0) {
					extendArray(errors, errs);
				}
			});

			errors.sort();
			
			fs.writeFile(filePath, JSON.stringify(errors, null, 4), 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	/**
	 * Comprueba los términos, escribiendo los errores encontrados dentro
	 * de los propios términos.
	 * @param {Book} book The Urantia Book object.
	 */
	check = (book) => {
		return new Promise((resolve, reject) => {
			this.topics.forEach(t => {
				t.errors = [];
				//Chequeo de duplicidades
				const other = this.topics.filter(tt => tt != t && tt.name === t.name);
				if (other.length > 0) {
					const errors = other.map(tt => 
						`${tt.name}|${tt.filename}:${tt.fileline}`).join(' ');
					t.errors.push({
						desc: 'término duplicado en ' + errors,
						fileline: t.fileline
					});
				}
				//Chequeo de redirects
				if (t.isRedirect && t.seeAlso.length > 1) {
					t.errors.push({
						desc: 'demasiados seeAlso',
						fileline: t.fileline
					});
				}
				//Chequeo de que los nombres propios aparecen en los párrafos
				const firstLetter = t.name.substring(0, 1);
				const isUpperCase = (firstLetter === firstLetter.toUpperCase());
				if (isUpperCase /*&& t.revised === 'NO'*/) {
					let names = [t.name.split('(')[0].trim()];
					extendArray(names, t.altnames);
					// const exps = names.map(n => 
					// 	'\\b' + n.replace(/^[áéíóú]/i,'.').replace(/[áéíóú]$/i, '.') + '\\b'
					// ).join('|');
					// const regex = new RegExp(exps, 'g');
					let refs = t.refs.slice();
					let invalid = [];
					t.lines.forEach(line => extendArray(refs, line.refs));
					const notFound = refs.filter(ref => {
						let refsToFind = null;
						try {
							refsToFind = book.getRefs(ref);
						} catch (err) {
							invalid.push(ref);
						}
						let founded = false;
						if (refsToFind) {
							founded = (refsToFind.find(r => {
								const par = book.getPar(r[0], r[1], r[2]);
								if (!par) {
									invalid.push(ref);
								}
								// return (par && regex.test(par.par_content));
								return (par && testWords(names, par.par_content));
							}) != null);
						}
						return !founded;
					});
					if (invalid.length > 0) {
						t.errors.push({
							desc: 'referencias inválidas: ' + invalid.join('|'),
							fileline: t.fileline
						});
					}
					if (refs.length > 0 && notFound.length === refs.length) {
						t.errors.push({
							desc: `'${t.name}' en ninguna ref: ${notFound.join('|')}`,
							fileline: t.fileline
						});
					}
				}
				//Chequeo de enlaces a otros términos
				this.checkSeeAlso(t.seeAlso, t.fileline, t.errors);
				t.lines.forEach(line => {
					this.checkSeeAlso(line.seeAlso, line.fileline, t.errors);
				});
			});
			resolve(true);
		});
	};

	/**
	 * Comprueba un array de enlaces a otros términos y añade los errores en
	 * un array de objetos de error (con desc y fileline).
	 * @param {Array.<string>} seeAlso Array de enlaces a otros términos.
	 * @param {number} fileline Número de línea.
	 * @param {Array.<Object>} errors El array donde almacenar los errores.
	 */
	checkSeeAlso = (seeAlso, fileline, errors) => {
		if (seeAlso && seeAlso.length > 0) {
			seeAlso.forEach(sa => {
				const term = sa.split(':')[0];
				if (!this.topics.find(t => t.name === term)) {
					errors.push({
						desc: `seeAlso '${sa}' no encontrado`,
						fileline: fileline
					});
				}
			});
		}
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
				const topicTypes = [
					'PERSONA', 'LUGAR', 'ORDEN', 'RAZA', 'RELIGION', 'OTRO'];

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
			const refs = this.sortUniqueRefs(topic);
			let refsUsed = refs.map(ru => false);
			const seeAlso = this.sortUniqueSeeAlso(topic);

			const refsToTags = (rr) => {
				return rr.map(r => {
					const i = refs.indexOf(r);
					const used = refsUsed[i];
					refsUsed[i] = true;
					return (used ? `<ref name="n${i}"/> ` : this.refToWiki(r, i));
				}).join('');
			};

			//Resolvemos redireccionamientos
			if (topic.isRedirect && topic.seeAlso.length === 1) {
				wiki = `#REDIRECT [[${topic.seeAlso[0]}]]`;
			}

			//Añadimos las Referencias a nivel del Topic arriba del todo
			if (topic.refs && topic.refs.length > 0) {
				wiki += 'Véase: ' + refsToTags(topic.refs) + end;
			}

			//Añadimos el contenido de las líneas en headings junto a sus Referencias
			topic.lines.forEach((line, i) => {
				let heading = '=';
				const nextline = topic.lines[i + 1];
				let content = line.text/*.replace(/#/g, 'núm.')*/;
				const acontent = content.replace(/ /g, '_');
				const anchor = `{{anchor|${acontent}}}`;
				content = content.substring(0, 1).toUpperCase() + 
					content.substring(1);
				
				if (nextline && line.level < nextline.level) {
					heading += '='.repeat(line.level + 1);
					wiki += `${end}${heading} ${anchor} ${content} ${heading}${end}`;
					if (line.refs && line.refs.length > 0) {
						wiki += 'Véase: ' + refsToTags(line.refs) + end;
					}
				} else {
					const subcontent = content.replace(/^[#\*]*/g,'').trim();
					const isub = content.indexOf(subcontent);
					if (content.startsWith('#') || content.startsWith('*')) {
						content = content.substring(0, isub) + 
							content.substring(isub, isub+1).toUpperCase() + 
							content.substring(isub+1);
					}

					if (!content.startsWith('#') && !content.endsWith('.')) {
						content += '.';
					}
					wiki += content;

					if (line.refs && line.refs.length > 0) {
						wiki += ' ' + refsToTags(line.refs);
					} else {
						wiki += ' ';
					}

					if (content.startsWith('#') || content.startsWith('*')) {
						wiki += '\r\n';
					}
				}
				
			});

			//Añadimos los Enlaces
			if (seeAlso && seeAlso.length > 0) {
				wiki += `${end}== Enlaces ==${end}`;
				seeAlso.forEach(also => {
					let alsoLink = also.replace(/ /g, '_').replace(/:/, '#');
					let alsoText = also.substring(0, 1).toUpperCase() + 
						also.substring(1);
					wiki += `* [[${alsoLink}|${alsoText}]]\r\n`;
				});
			}
			
			//Añadimos los Enlaces externos
			if (topic.links && topic.links.length > 0){
				wiki+= `${end}== Enlaces externos ==${end}`;
				topic.links.forEach(link => {
					if (link.indexOf('wikipedia') != -1) {
						let linkname = link.substring(link.lastIndexOf('/') + 1)
							.replace(/_/g, ' ');
						wiki += `* [${link} Wikipedia: ${linkname}]\r\n`;
					} else {
						wiki += `* [${link}]\r\n`;
					}
				});
			}

			//Añadimos las Referencias
			if (refs.length > 0) {
				wiki += `${end}== Referencias ==${end}<references/>\r\n`;
			}

			fs.writeFile(filePath, wiki, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	/**
	 * Convierte una referencia a formato Wiki.
	 * @param {string} ref Referencia.
	 * @param {number} i Indice ed la referencia.
	 * @return {string}
	 */
	refToWiki = (ref, i) => {
		let wiki = '';
		let data = ref.split(/[:.]/g);
		wiki += `<ref name="n${i}">{{lib|LU|`;
		if (data.length === 1) {
			wiki += data[0];
		} else if (data.length === 2) {
			wiki += `${data[0]}|${data[1]}`;
		} else if (data.length === 3) {
			wiki += `${data[0]}|${data[1]}|${data[2]}`;
		}
		wiki += '}}</ref> ';
		return wiki;
	};

	/**
	 * Obtiene un número a partir de una referencia. Para luego poder ordenar.
	 * @param {string} ref Referncia a El Libro de Urantia.
	 * @return {number}
	 */
	refToNumber = (ref) => {
		let data = ref.split(/[:.]/g);
		data = data.map(d => parseInt(d.match(/^[^\d]*(\d+)/)[0]));
		if (data.length < 3) {
			data.push(0);
		}
		if (data.length < 3) {
			data.push(0);
		}
		return data[0] * 10000 + data[1] * 100 + data[2];
	};

	/**
	 * Extrae todas las referencias diferentes de un topic (y las ordena por orden de
	 * aparición en El Libro de Urantia). La ordenación ya no la hacemos.
	 * @param {Object} topic El topic.
	 * @return {Array.<string>}
	 */
	sortUniqueRefs = (topic) => {
		let refs = [];
		const addRefs = (rr) => {
			if (rr && rr.length > 0) {
				rr.filter(r => refs.indexOf(r) === -1).forEach(r => refs.push(r));
			}
		};

		addRefs(topic.refs);
		topic.lines.forEach(line => addRefs(line.refs));
		
		//De momento no ordenamos las referencias porque WikiMedia por defecto
		// las ordena por orden de aparición en la página y no se puede imponer
		// un orden
		// refs.sort((a, b) => this.refToNumber(a) - this.refToNumber(b));
		return refs;
	};

	/**
	 * Extrae todos los enlaces diferentes de un topic (y los ordena por orden)
	 * alfabético.
	 * @param {Object} topic El topic.
	 * @return {Array.<string>}
	 */
	sortUniqueSeeAlso = (topic) => {
		let seeAlso = [];
		const addSeeAlso = (sa) => {
			if (sa && sa.length > 0) {
				sa.filter(s => seeAlso.indexOf(s) === -1)
					.forEach(s => seeAlso.push(s));
			}
		};

		addSeeAlso(topic.seeAlso);
		topic.lines.forEach(line => addSeeAlso(line.seeAlso));

		seeAlso.sort((a,b) => {
			return a.toLowerCase().localeCompare(b.toLowerCase());
		});

		return seeAlso;
	};

	/**
	 * Escribe la página de índice de los términos del Topic Index en formato Wiki.
	 * El nombre del fichero generado es '_indice.wiki' y su contenido debe ir
	 * dentro de la página 'Manual:Dónde_puedo_aportar_contenido' porque allí se
	 * explica con más detalle qué páginas existen en la Wiki y cuáles se deberían
	 * revisar.
	 * @param {string} dirPath Carpeta de salida.
	 * @return {Promise}
	 */
	writeIndexToWiki = (dirPath) => {
		return new Promise((resolve, reject) => {
			const filePath = path.join(dirPath, '_indice.wiki');
			const topicTypes = [
				'PERSONA', 'LUGAR', 'ORDEN', 'RAZA', 'RELIGION'/*, 'OTRO'*/];
			const typeTitles = [
				'Personalidades, personas, nombres de dioses, o grupos',
				'Lugares, tanto en la Tierra como en el Universo',
				'Órdenes y tipologías de seres',
				'Razas, tribus o pueblos que se han dado en la Tierra',
				'Religiones, cultos, creencias'/*,
			'Otros términos'*/];
			let wiki = '';
			let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
			let curLetter = null;

			topicTypes.forEach((tt, i) => {
				wiki += `== ${typeTitles[i]} ==\r\n`;
				const topics = this.topics
					.filter(t => t.type === tt)
					.sort((a, b) => {
						if (a.name.toLowerCase() > b.name.toLowerCase()) {
							return 1;
						}
						if (a.name.toLowerCase() < b.name.toLowerCase()) {
							return -1;
						}
						return 0;
					});
				wiki += '<div style="column-count:4;-moz-column-count:4;-webkit-column-count:4">\r\n';
				topics.forEach(topic => {
					const first = topic.name.substring(0, 1).toUpperCase();
					if (letters.indexOf(first) != -1 && first != curLetter) {
						wiki += `\r\n<span style="font-size:120%; font-weight: bold;">${first}</span>\r\n`;
						curLetter = first;
					}
					const name = first + topic.name.substring(1);
					const revised = (topic.revised === 'NO' ? '' : '  &diams;');
					wiki += `* [[${name}]]${revised}\r\n`;
				});
				wiki += '</div>\r\n';
			});

			fs.writeFile(filePath, wiki, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});

		});
	};

	/**
	 * Escribe todas las entradas del Topic Index en formato JSON de El Libro
	 * de Urantia. Las entradas se guardan en una propriedad links que contiene
	 * un array de objetos con la definición de cada enlace a crear. El guardado
	 * se hace de forma incremental. No se elimina un array ya existente sino que
	 * se actualiza con nuevas entradas si es necesario.
	 * @param {Book} book El Libro de Urantia.
	 */
	writeToJSON = (book) => {
		return new Promise((resolve, reject) => {
			this.topics.forEach(topic => {
				//Textos a buscar
				let names = [topic.name];
				extendArray(names, topic.altnames);
				//Lista de referencias en el libro donde buscar
				let refs = topic.refs.slice();
				topic.lines.forEach(line => extendArray(refs, line.refs));
				//Convertimos las referencias en un array de párrafos no repetidos
				let pars = [];
				let errors = [];
				refs.forEach(ref => {
					try {
						let ppars = book.getRefs(ref).filter(ppar => {
							return pars.find(p => {
								return (JSON.stringify(p) === JSON.stringify(ppar));
							}) == undefined;
						});
						extendArray(pars, ppars);
					} catch (er) {
						errors.push(er);
					}
				});
				if (errors.length > 0) {
					reject(errors);
					return;
				}
				//Bucle por todos los párrafos a buscar
				pars.forEach(par => {
					const parObj = book.getPar(par[0], par[1], par[2]);
					names.forEach(name => {
						//TODO:
					});
				});
			});
		});
	};
};

module.exports = TopicIndex;