//Reader/Writer para `El Libro de Urantia` en diferentes formatos (HTML/LaTeX/JSON/Wiki)

const LSep = require('./enums').LaTeXSeparator;
const HSep = require('./enums').HTMLSeparator;
const BibleAbb = require('./enums').BibleAbb;
const extractStr = require('./utils').extractStr;
const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const replaceTags = require('./utils').replaceTags;
const removeHTMLTags = require('./utils').removeHTMLTags;
const readFrom = require('./utils').readFrom;
const replaceWords = require('./utils').replaceWords;
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

class Book {
	errorString = '{0}, línea {1}: {2}';
	pars = [];
	papers = [];
	onProgressFn = null;
	warnings = [];

	/**
	 * Devuelve un array de tres valores [paper_id, section_id, par_id]
	 * Por ejemplo: para '101:2.1' devuelve [101,2,1]
	 * El input siempre debe tener los tres valores o lanzará una excepción.
	 * @param {string} lu_ref Referencia al LU.
	 * @return {Array}
	 */
	getRef = (lu_ref) => {
		let data, data2, paper_id, section_id, par_id;
		const err = new Error(`La referencia LU ${lu_ref} está mal o no existe`);
		data = lu_ref.split(':');
		if (data.length != 2) {
			throw err;
		}
		paper_id = parseInt(data[0]);
		if (isNaN(paper_id)) {
			throw err;
		}
		data2 = data[1].split('.');
		if (data2.length != 2) {
			throw err;
		}
		section_id = parseInt(data2[0]);
		par_id = parseInt(data2[1]);
		if (isNaN(section_id) || isNaN(par_id)) {
			throw err;
		}
		return [paper_id, section_id, par_id];
	};

	/**
	 * Devuelve un array de arrays de tres valores [paper_id, section_id, par_id]
	 * con todos los párrafos incluídos en la referencia.
	 * Por ejemplo '101' devuelve un array con todos los párrafos del documento 101.
	 * Por ejemplo '101:2.1,3-4' devuelve [[101,2,1], [101,2,3], [101,2,4]]
	 * Comprueba si las referencias existen.
	 * Si algo va mal lanza una excepción. 
	 * @param {string} lu_ref Referencia al LU.
	 * @return {Array}
	 */
	getRefs = (lu_ref) => {
		let data, data2, data3, dd, paper_id, section_id, paper, section, min, max;
		const err = new Error(`La referencia LU ${lu_ref} está mal o no existe`);
		data = lu_ref.split(':');
		let result = [];
		let fail = false;
		paper_id = parseInt(data[0]);
		if (isNaN(paper_id)) {
			throw err;
		}
		paper = this.papers.find(p => p.paper_index === paper_id);
		if (!paper) {
			throw err;
		}
		if (data.length === 1) {
			//Caso de sólo el documento
			paper.sections.forEach(s => {
				s.pars.forEach(p => {
					result.push(this.getRef(p.par_ref));
				});
			});
		} else if (data.length > 1) {
			data2 = data[1].split('.');
			if (data2.length === 1) {
				//Caso de sólo documento y sección/secciones
				dd = data2[0].split('-');
				min = parseInt(dd[0]);
				max = (dd.length > 1 ? parseInt(dd[1]) : parseInt(dd[0]));
				if (isNaN(min) || isNaN(max) ||
					!paper.sections.find(s => s.section_index === min) ||
					!paper.sections.find(s => s.section_index === max)) {
					throw err;
				}
				paper.sections.forEach(s => {
					if (s.section_index >= min && s.section_index <= max) {
						s.pars.forEach(p => {
							result.push(this.getRef(p.par_ref));
						});
					}
				});
			} else if (data.length > 1) {
				if (data2[0].indexOf('-') != -1) {
					throw err;
				}
				section_id = parseInt(data2[0]);
				if (isNaN(section_id)) {
					throw err;
				}
				section = paper.sections.find(s => s.section_index === section_id);
				if (!section) {
					throw err;
				}
				data3 = data2[1].split(',');
				data3.forEach(d => {
					dd = d.split('-');
					min = parseInt(dd[0]);
					max = (dd.length > 1 ? parseInt(dd[1]) : parseInt(dd[0]));
					if (isNaN(min) || isNaN(max) ||
						section.pars.length < min || section.pars.length < max) {
						fail = true;
					} else {
						section.pars.slice(min - 1, max).forEach(p => {
							result.push(this.getRef(p.par_ref));
						});
					}
				});
				if (fail) {
					throw err;
				}
			}
		}
		return result;
	};

	/**
	 * Devuelve true si la referencia en forma de texto contiene a la referencia
	 * en forma numérica. Por ejemplo: '101:2.3,6-10' contiene a [101,2,3],
	 * y [101,2,7] pero no a [101,2,4]. Funciona también dando como referencia
	 * un documento entero o una sección entera.
	 * @param {string} lu_ref Referencia al libro en forma de texto.
	 * @param {number} paperIndex Índice de documento empezando en 0.
	 * @param {number} sectionIndex Índice de la sección empezando en 0.
	 * @param {number} parIndex Índice del párrafo empezando en 1.
	 * @return {boolean}
	 */
	containsRef = (lu_ref, paperIndex, sectionIndex, parIndex) => {
		let data, data2, data3, paper_id, section_id;
		data = lu_ref.split(':');
		paper_id = parseInt(data[0]);
		if (data.length === 1) {
			return (paper_id === paperIndex);
		} else if (data.length > 1 && paper_id === paperIndex) {
			data2 = data[1].split('.');
			section_id = parseInt(data2[0]);
			if (data2.length === 1) {
				return (section_id === sectionIndex);
			} else if (data2.length > 1 && section_id === sectionIndex) {
				data3 = data2[1].split(',');
				return (data3.find(d => {
					const dd = d.split('-');
					if (dd.length === 1 && parseInt(d) === parIndex ) {
						return true;
					} else if (dd.length > 1 &&
						!isNaN(parseInt(dd[0])) && !isNaN(parseInt(dd[1])) &&
						parseInt(dd[0]) <= parIndex && parseInt(dd[1]) >= parIndex) {
						return true;
					}
					return false;
				}) != null);
			}
		}
		return false;
	};

	/**
	 * Devolvemos las footnotes que contenga un determinado párrafo de `El Libro
	 * de Urantia`.
	 * @param {string} lu_ref Referencia a `El Libro de Urantia`.
	 * @return {Array}
	 */
	getFootnotes = (lu_ref) => {
		let paper, section, par_content, footnotes = [];
		const err2 = new Error(`La referencia LU ${lu_ref} está mal o no existe`);
		//
		let ref;
		try {
			ref = this.getRef(lu_ref);
		} catch (err) {
			throw err;
		}
		const paper_id = ref[0], section_id = ref[1], par_id = ref[2];
		paper = this.papers.find(p => p.paper_index === paper_id);
		if (!paper) {
			throw err2;
		}
		section = paper.sections.find(s => 
			s.section_index === section_id);
		if (!section) {
			throw err2;
		}
		par_content = (section.pars[par_id - 1] ?
			section.pars[par_id - 1].par_content : null);
		if (!par_content) {
			throw err2;
		}
		for (let i = 0; i < paper.footnotes.length; i++) {
			if (par_content.indexOf(`{${i}}`) != -1) {
				footnotes.push(paper.footnotes[i]);
			}
		}
		return footnotes;
	};

	/**
	 * Devuelve un array con pares [texto, ref bíblica].
	 * @param {Array} footnotes Array de footnotes.
	 * @return {Array}
	 */
	getSubFootnotes = (footnotes) => {
		const subfootnotes = [];
		const err = new Error(`Error extrayendo subfootnotes`);
		footnotes.forEach(f => {
			let parts, text, text2, fs, ab;
			parts = f.split('*').filter(n => n.trim() != '');
			if (parts.length === 0 || parts.length % 2 != 0) {
				throw err;
			}
			
			for (let p = 0; p < parts.length; p = p + 2) {
				text = parts[p];
				text2 = parts[p + 1];
				if (text2[0] === ':') {
					text2 = text2.substring(1).trim();
					if (text2[text2.length - 1] === '.') {
						text2 = text2.substring(0, text2.length - 1);
					}
				}
				fs = text2.split(';');

				fs.forEach(fss => {
					fss = fss.trim();
					let ref = null;
					let ab2 = this.findAbr(fss);
					if (ab2) {
						ab = ab2;
						ref = fss.substring(ab.length).trim();
					} else {
						ref = fss;
					}
					if (ab && ref) {
						subfootnotes.push([text, `${ab} ${ref}`]);
					}
				});
			}
		});
		return subfootnotes;
	};

	/**
	 * Devuelve un párrafo del libro usando una referencia.
	 * Si la referencia no existe devuelve null.
	 * @param {number} paperIndex Índice del documento empezando en 0.
	 * @param {number} sectionIndex Índice de sección empezando en 0.
	 * @param {number} parIndex Índice de párrafo empezando en 1.
	 * @return {Object}
	 */
	getPar = (paperIndex, sectionIndex, parIndex) => {
		const paper = this.papers.find(p => 
			p.paper_index === paperIndex);
		if (!paper) {
			return null;
		}
		const section = paper.sections.find(s => 
			s.section_index === sectionIndex);
		if (!section) {
			return null;
		}
		return section.pars[parIndex - 1];
	};

	/**
	 * Devuelve un texto en formato LaTeX reemplazando caracteres especiales por
	 * los mismos caracteres pero para que se vean bien en formato Wiki.
	 * @param {string} content Contenido.
	 * @returns {string}
	 */
	replaceSpecialChars = (content) => {
		return content
			.replace(/(\\\"u)/g, 'ü')
			.replace(/(---)/g, '—')
			.replace(/`/g, '‘')
			.replace(/'/g, '’')
			.replace(/\\bigbreak/g, '<br/>')
			.replace(/{\\textdegree}/g, '&deg;')
			.replace(/{\\textordmasculine}/g, 'º')
			.replace(/{\\textordfeminine}/g, 'ª')
			.replace(/\\textsuperscript\{27\}/g, '<sup>27</sup>')
			.replace(/\\textsuperscript\{3\}/g, '<sup>3</sup>')
			.replace(/{\\textonequarter}/g, '&frac14;');
	};
	
	/**
	 * Devuelve un texto en cualquier formato que no sea LaTeX reemplazando 
	 * caracteres especiales por los mismos caracteres pero para que se vea
	 * bien en formato LaTeX.
	 * @param {string} content Contenido.
	 * @returns {string}
	 */
	replaceInverseSpecialChars = (content) => {
		return content
			.replace(/(ü)/g, '\\\"u')
			.replace(/(—)/g, '---')
			.replace(/<br\/>/g, '\\bigbreak')
			.replace(/&deg;/g, '{\\textdegree}')
			.replace(/º/g, '{\\textordmasculine}')
			.replace(/ª/g, '{\\textordfeminine}')
			.replace(/<sup>27<\/sup>/g, '\\textsuperscript{27}')
			.replace(/<sup>3<\/sup>/g, '\\textsuperscript{3}')
			.replace(/&frac14;/g, '{\\textonequarter}');
	};

	/**
	 * Limpia cualquier contenido leído.
	 */
	clear = () => {
		this.papers = [];
	};

	//***********************************************************************
	// LaTeX
	//***********************************************************************

	/**
	 * Lee `El Libro de Urantia` de una carpeta con archivos en fomato LaTeX.
	 * @param {string} dirPath Ruta de la carpeta.
	 * @returns {Promise} Promesa que devuelve null en la función resolve o un 
	 * array de errores en la función reject.
	 */
	readFromLaTeX = (dirPath) => {
		return readFrom(dirPath, '.tex', this.clear, this.readFileFromLaTeX, this);
	};

	/**
	 * Lee un documento de `El Libro de Urantia` de un archivo en formato LaTeX.
	 * @param {string} filePath Ruta del archivo.
	 * @returns {Promise} Promesa que devuelve un objeto con el contenido del 
	 * documento en la función resolve o un array de errores en la función reject.
	 */
	readFileFromLaTeX = (filePath) => {
		const baseName = path.basename(filePath);
		return new Promise((resolve, reject) => {
			if (this.onProgressFn) {
				this.onProgressFn(baseName);
			}
			const paperIndex = parseInt(extractStr(baseName, 'Doc', '.tex'));
			if (isNaN(paperIndex)) {
				reject([this.createError(baseName, 0, 
					'El nombre de archivo no contiene el número de documento')]);
				return;
			}
			fs.readFile(filePath, (errFile, buf) => {
				if (errFile) {
					reject([errFile]);
					return;
				}
				const lines = buf.toString().split('\n');
				const errors = [];
				const paper = this.extractPaperFromLaTex(baseName, paperIndex, 
					lines, errors);
				if (errors.length === 0) {
					this.papers.push(paper);
					resolve(paper);
				} else {
					reject(errors);
				}
			});
		});
	};

	/**
	 * Lee y extrae el contenido de un documento de `El Libro de Urantia` a partir
	 * de una array de líneas leídas de un archivo en formato LaTeX.
	 * @param {string} baseName Nombre sin extensión del archivo.
	 * @param {number} paperIndex Índice del documento.
	 * @param {string[]} lines Array de líneas.
	 * @param {Error[]} errors Array de errores en el que almacenar los errores.
	 * @returns {Object} Objeto con el documento.
	 */
	extractPaperFromLaTex = (baseName, paperIndex, lines, errors) => {
		let extract;
		const paper = {
			paper_index: paperIndex,
			sections: [],
			footnotes: []
		};
		let currentSection = null;
		let currentSectionIndex = -1;
		let currentPar = null;
		let linePrevious = '';
		let linePreviousPos = 0;
		let extractPrevious = null;
		lines.forEach((line, i) => {
			let j = 0;
			if (line.startsWith(LSep.CHAPTER_START)) {
				//Si es un documento
				extract = extractStr(line, LSep.CHAPTER_START, LSep.END);
				if (!extract) {
					errors.push(this.createError(baseName, i,
						'No se pudo extraer el inicio del documento'));
				} else {
					paper.paper_title = extract;
					currentSectionIndex++;
					currentSection = {
						section_index: currentSectionIndex,
						section_ref: `${paperIndex}:${currentSectionIndex}`,
						pars: []
					};
					paper.sections.push(currentSection);
				}
			} else if (line.startsWith(LSep.SECTION_START)) {
				//Si es una seccion
				extract = extractStr(line, LSep.SECTION_START, LSep.END);
				if (!extract) {
					errors.push(this.createError(baseName, i,
						'No se pudo extraer el inicio de sección'));
				} else {
					extract = this.replaceSpecialChars(extract);
					//Caso especial de la sección 139:9 (que no existe)
					if (extract.startsWith('9. y 10.')) {
						currentSectionIndex += 2;
					} else {
						currentSectionIndex++;
					}
					currentSection = {
						section_index: currentSectionIndex,
						section_ref: `${paperIndex}:${currentSectionIndex}`,
						section_title: extract,
						pars: []
					};
					paper.sections.push(currentSection);
				}
			} else if (line.startsWith(LSep.PAGEREF_START)) {
				//Si es la línea con la antigua referencia
				linePrevious = line;
				linePreviousPos = i;
				extractPrevious = extractStr(line, LSep.PAGEREF_START,
					LSep.PAGEREF_END);
				if (!extractPrevious) {
					errors.push(this.createError(baseName, i,
						'No se pudo extraer la referencia tipo página'));
				}
			} else if (line.startsWith(LSep.TEXT_START)) {
				//Si es un párrafo
				if (linePreviousPos === i - 1) {
					extract = extractStr(line, LSep.TEXT_START, LSep.END);
					if (!extract) {
						errors.push(this.createError(baseName, i,
							'No se pudo extraer la referencia de párrafo'));
					} else if (extractPrevious) {
						j = LSep.TEXT_START.length + extract.length + 
							LSep.END.length;
						currentPar = {
							par_ref: extract,
							par_pageref: extractPrevious,
							par_content: this.extractParContentFromLaTeX(baseName,
								i + 1, line.substring(j).trim(), paper.footnotes, 
								errors)
						};
						if (currentSection) {
							currentSection.pars.push(currentPar);
						} else {
							errors.push(this.createError(baseName, i,
								'No se pudo añadir párrafo sin una sección previa'));
						}
					}
				} else {
					errors.push(this.createError(baseName, i,
						'No existe en línea previa la referencia tipo página'));
				}
			}
		});
		return paper;
	};

	/**
	 * Lee y extrae el contenido de un párrafo de `El Libro de Urantia` a partir
	 * de un contenido en formato LaTeX.
	 * @param {string} baseName Nombre sin extensión del archivo.
	 * @param {number} lnum Índice de la línea.
	 * @param {string} content Contenido del párrafo en formato LaTeX.
	 * @param {string[]} footnotes Array en el que almacenar las notas al pie.
	 * @param {Error[]} errors Array de errores en el que almacenar los errores.
	 * @returns {string} Contenido del párrafo extraído.
	 */
	extractParContentFromLaTeX = (baseName, lnum, content, footnotes, errors) => {
		let extract = '', fi, i = 0, open = 0, index, c, footnoteExtract;
		let replaceErr = null;
		while (i < content.length) {
			index = content.indexOf(LSep.FOOTNOTE_START, i);
			if (index === -1) {
				extract += content.substring(i);
				break;
			} else {
				extract += content.substring(i, index);
			}
			fi = index + LSep.FOOTNOTE_START.length;
			i = fi;
			open = 1;
			while (i < content.length && open > 0) {
				c = content[i];
				if (c === '{') open++;
				else if (c === '}') open--;
				i++;
			}
			if (open != 0) {
				errors.push(this.createError(baseName, lnum,
					'No existe cierre de footnote correcto'))
				return content;
			}
			extract += `{${footnotes.length}}`;
			footnoteExtract = content.substring(fi, i - 1);
			replaceErr = [];
			footnoteExtract = replaceTags(footnoteExtract, LSep.ITALIC_START, 
				LSep.END, '*', '*', replaceErr);
			if (replaceErr.length > 0) {
				extendArray(errors, replaceErr.map(e =>
					this.createError(baseName, lnum, e)));
			}
			footnoteExtract = this.replaceSpecialChars(footnoteExtract);
			footnotes.push(footnoteExtract);
		}
		replaceErr = [];
		extract = replaceTags(extract, LSep.ITALIC_START, LSep.END, '*', '*', 
			replaceErr);
		if (replaceErr.length > 0) {
			extendArray(errors, replaceErr.map(e => 
				this.createError(baseName, lnum, e)));
		}
		extract = this.replaceSpecialChars(extract);
		return extract;
	};

	/**
	 * Escribe `El Libro de Urantia` en formato LaTeX.
	 * @param {string} dirPath Ruta de la carpeta.
	 * @returns {Promise} Promesa que devuelve null en la función resolve o un 
	 * array de errores en la función reject.
	 */
	writeToLaTeX = (dirPath) => {
		return this.writeTo(dirPath, 'tex');
	};

	/**
	 * Escribe un documento de `El Libro de Urantia` en formato LaTeX.
	 * @param {string} filePath Ruta del archivo.
	 * @param {Object} paper Objeto con el documento.
	 * @returns {Promise} Promesa que devuelve null en la función resolve o un 
	 * error en la función reject.
	 */
	writeFileToLaTeX = (filePath, paper) => {
		return new Promise((resolve, reject) => {
			let latex = '', error;

			if (!Array.isArray(paper.sections)) {
				error = 'El documento no tiene secciones';
			} else if (paper.sections.find(s => s.section_ref == null)) {
				error = 'Una sección no tiene referencia';
			} else if (paper.sections.find(s => !Array.isArray(s.pars))) {
				error = 'Una sección no tiene párrafos';
			} else if (!paper.paper_title) {
				error = 'El documento no tiene título';
			}

			if (error) {
				reject(new Error(`${filePath}: ${error}`));
				return;
			}

			latex += `\\chapter{${paper.paper_title}}\r\n`;
			if (paper.paper_index === 1) {
				latex += `\\setcounter{chapter}{${paper.paper_index}}\r\n`;
			}

			const lfootnotes = (Array.isArray(paper.footnotes) &&
				paper.footnotes.length > 0 ?
				this.footnotesToLaTeX(paper.footnotes) : []);
			let footnoteIndex = 0;

			paper.sections.forEach((section, i) => {
				if (section.section_title) {
					latex += `\\section*{${section.section_title}}\r\n`;
				}
				section.pars.forEach((par, j) => {
					let pcontent, replaceErr = [], end;
					if (!par.par_ref || !par.par_content || !par.par_pageref) {
						error = 'Un párafo no tiene referencia o contenido';
						return;
					}
					pcontent = replaceTags(par.par_content, '*', '*', 
						LSep.ITALIC_START, LSep.END, replaceErr);
					if (replaceErr.length > 0) {
						error = replaceErr[0];
						return;
					}
					pcontent = this.replaceInverseSpecialChars(pcontent);
					while (lfootnotes.length > 0 &&
						footnoteIndex < lfootnotes.length &&
						pcontent.indexOf(`{${footnoteIndex}}`) != -1) {
						pcontent = pcontent.replace(`{${footnoteIndex}}`,
							`${lfootnotes[footnoteIndex]}`);
						footnoteIndex++;
					}
					latex += `\\par\r\n%\\textsuperscript{(${par.par_pageref})}\r\n`;
					end = (i === paper.sections.length - 1 &&
						j === section.pars.length - 1 ? '' : '\r\n\r\n');
					latex += `\\textsuperscript{${par.par_ref}} ${pcontent}${end}`;
				});
			});

			if (error) {
				reject(new Error(`${filePath}: ${error}`));
				return;
			}

			fs.writeFile(filePath, latex, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	/**
	 * Convierte un array de notas al pie en el texto de nota al pie para un
	 * archivo en formato LaTeX. Las notas al pie incorrectamente codificadas
	 * se devuelven como el texto FOOTNOTE ERROR.
	 * @param {string[]} footnotes Array de notas al pie.
	 * @returns {string}
	 */
	footnotesToLaTeX = (footnotes) => {
		return footnotes.map((f, n) => {
			let text, fs, replaceErr = [];
			text = replaceTags(f, '*', '*', LSep.ITALIC_START, LSep.END, 
				replaceErr);
			text = this.replaceInverseSpecialChars(text);
			if (replaceErr.length > 0) {
				return 'FOOTNOTE ERROR';
			}
			return `\\footnote{${text}}`;
		});
	};

	//***********************************************************************
	// JSON
	//***********************************************************************

	/**
	 * Lee `El Libro de Urantia` de una carpeta con archivos en fomato JSON.
	 * @param {string} dirPath Ruta de la carpeta.
	 * @returns {Promise} Promesa que devuelve null en la función resolve o un 
	 * array de errores en la función reject.
	 */
	readFromJSON = (dirPath) => {
		return readFrom(dirPath, '.json', this.clear, this.readFileFromJSON, this);
	};

	/**
	 * Lee un documento de `El Libro de Urantia` de un archivo en formato JSON.
	 * @param {string} filePath Ruta del archivo.
	 * @returns {Promise} Promesa que devuelve un objeto con el contenido del 
	 * documento en la función resolve o un array de errores en la función reject.
	 */
	readFileFromJSON = (filePath) => {
		const baseName = path.basename(filePath);
		return new Promise((resolve, reject) => {
			if (this.onProgressFn) {
				this.onProgressFn(baseName);
			}
			const paperIndex = parseInt(extractStr(baseName, 'Doc', '.json'));
			if (isNaN(paperIndex)) {
				reject([this.createError(baseName, 0, 
					'El nombre de archivo no contiene el número de documento')]);
				return;
			}
			fs.readFile(filePath, (errFile, buf) => {
				if (errFile) {
					reject([errFile]);
					return;
				}
				const content = buf.toString();
				try {
					const paper = JSON.parse(content);
					this.papers.push(paper);
					resolve(paper);
				} catch (err) {
					reject([err]);
				}
			});
		});
	};

	/**
	 * Escribe `El Libro de Urantia` en formato JSON.
	 * @param {string} dirPath Ruta de la carpeta.
	 * @returns {Promise} Promesa que devuelve null en la función resolve o un 
	 * array de errores en la función reject.
	 */
	writeToJSON = (dirPath) => {
		return this.writeTo(dirPath, 'json');
	};

	/**
	 * Escribe un documento de `El Libro de Urantia` en formato JSON.
	 * @param {string} filePath Ruta del archivo.
	 * @param {Object} paper Objeto con el documento.
	 * @returns {Promise} Promesa que devuelve null en la función resolve o un 
	 * error en la función reject.
	 */
	writeFileToJSON = (filePath, paper) => {
		return new Promise((resolve, reject) => {
			fs.writeFile(filePath, JSON.stringify(paper, null, 4), 'utf-8', 
				(err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	//***********************************************************************
	// HTML
	//***********************************************************************

	/**
	 * Lee `El Libro de Urantia` de una carpeta con archivos en fomato HTML.
	 * @param {string} dirPath Ruta de la carpeta.
	 * @returns {Promise} Promesa que devuelve null en la función resolve o un 
	 * array de errores en la función reject.
	 */
	readFromHTML = (dirPath) => {
		return readFrom(dirPath, '.html;.htm', this.clear, this.readFileFromHTML, this);
	};

	/**
	 * Lee un documento de `El Libro de Urantia` de un archivo en formato HTML.
	 * @param {string} filePath Ruta del archivo.
	 * @returns {Promise} Promesa que devuelve un objeto con el contenido del 
	 * documento en la función resolve o un array de errores en la función reject.
	 */
	readFileFromHTML = (filePath) => {
		const baseName = path.basename(filePath);
		return new Promise((resolve, reject) => {
			if (this.onProgressFn) {
				this.onProgressFn(baseName);
			}
			const fname = baseName.replace('.html', '');
			const paperIndex = parseInt(fname.substring(fname.length - 3));
			const names = ['small', 'em', 'span'];
			//Ignoramos archivos HTML que no tengan número de documento
			if (isNaN(paperIndex)) {
				resolve(null);
				return;
			}
			fs.readFile(filePath, (errFile, buf) => {
				if (errFile) {
					reject([errFile]);
					return;
				}
				const content = buf.toString();
				let errors = [];
				try {
					const $ = cheerio.load(content);
					const paperTitle = $(`h1[id=U${paperIndex}_0_0]`).text();
					const secs = $('h2');
					const pars = $('p');

					let paper = {
						paper_index: paperIndex,
						sections: [],
						footnotes: [],
						paper_title: paperTitle
					};
					let i = 0, p, s, removeErr, text, tags = [], msg, j = 0, n;
					let pId, secId, ref, pref, sec;
					//Añadimos la sección 0 si es que la hay
					for (i = 0; i < pars.length; i++) {
						p = pars[i];
						if (!p.attribs || !p.attribs.id || p.attribs.id[0] != 'U') {
							continue;
						}
						pId = p.attribs.id.replace('U', '').split('_');
						if (pId[1] === '0') {
							paper.sections.push({
								section_index: parseInt(pId[1]),
								section_ref: `${paperIndex}:${pId[1]}`,
								pars: []
							});
							break;
						}
					};
					//Añadimos el resto de secciones
					for (i = 0; i < secs.length; i++) {
						s = secs[i];
						secId = s.attribs.id.replace('U', '').split('_');
						paper.sections.push({
							section_index: parseInt(secId[1]),
							section_ref: `${paperIndex}:${secId[1]}`,
							pars: []
						});
					};
					//Añadimos párrafos
					for (i = 0; i < pars.length; i++) {
						p = pars[i];
						if (!p.attribs || !p.attribs.id || 
							p.attribs.id[0] != 'U' ||
							$(p).find('small').length === 0) {
							continue;
						}
						pId = p.attribs.id.replace('U', '').split('_');
						pref = extractStr($(p).find('small').text(), '(', ')');
						ref = `${paperIndex}:${pId[1]}.${pId[2]}`;
						sec = paper.sections.find(s => s.section_index === 
							parseInt(pId[1]));
						text = $(p).html();
						removeErr = [];
						text = removeHTMLTags(text, HSep.SMALL_START, HSep.SMALL_END, 
							true, removeErr);
						text = replaceTags(text, HSep.ITALIC_START, 
							HSep.ITALIC_END, '*', '*', removeErr);
						text = replaceTags(text, HSep.SMALLCAPS_START, 
							HSep.SMALLCAPS_END, '$', '$', removeErr);
						text = replaceTags(text, HSep.UNDERLINE_START, 
							HSep.UNDERLINE_END, '|', '|', removeErr);
						text = replaceTags(text, HSep.UNDERLINE2_START, 
							HSep.UNDERLINE2_END, '|', '|', removeErr);
						text = replaceTags(text, HSep.RIGHT_START, HSep.RIGHT_END,
							'', '', removeErr);
						text = removeHTMLTags(text, HSep.SPAN_START, HSep.SPAN_END, 
							false, removeErr);
						if (removeErr.length > 0) {
							extendArray(errors, removeErr.map(e =>
								this.createError(baseName, -999, e)));
						}
						sec.pars.push({
							par_ref: ref,
							par_pageref: pref,
							par_content: text.trim()
						});
						//Chequeo de si el párrafo contiene tags extrañas
						//para luego incluirlas en un reformateo
						for (j = 0; j < p.children.length; j++) {
							n = p.children[j];
							if (n.type === 'tag' && names.indexOf(n.name) === -1) {
								msg = `${baseName} - ${ref} - Tag: ${n.name}`;
								if (tags.indexOf(msg) === -1) {
									tags.push(msg);
								}
							}
						}
					};

					if (tags.length > 0) {
						console.log(tags);
					}

					if (errors.length > 0) {
						reject(errors);
						return;
					}

					this.papers.push(paper);
					resolve(paper);
				} catch (err) {
					reject([err]);
				}
			});
		});
	};

	//***********************************************************************
	// Wiki
	//***********************************************************************

	/**
	 * Escribe `El Libro de Urantia` en formato Wiki, cada documento en un archivo.
	 * Requiere previamente haber leido el libro desde algun otro formato.
	 * @param {string} dirPath Carpeta de salida.
	 * @param {?TopicIndex} topicIndex Un Topic Index opcional.
	 * @return {Promise} Promesa que devuelve null en la función resolve y un
	 * array de errores en la función reject.
	 */
	writeToWiki = (dirPath, topicIndex) => {
		return this.writeTo(dirPath, 'wiki', topicIndex);
	};

	/**
	 * Escribe en un fichero warnings.json un volcado de los warnings encontrados.
	 * Los warnings no son errores sino cosas que potencialmente necesitan una
	 * revisión.
	 * @param {string} dirPath Carpeta de salida.
	 * @return {Promise} Promesa que devuelve null en la función resolve y un
	 * error en la función reject.
	 */
	writeWarnings = (dirPath) => {
		const baseName = path.basename(dirPath);
		const filePath = path.join(dirPath, 'warnings.json');
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([new Error(`El directorio ${baseName} no está accesible`)]);
					return;
				}

				fs.writeFile(filePath, JSON.stringify(this.warnings, null, 4), 'utf-8', 
					(err) => {
						if (err) {
							reject(err);
							return;
						}
						resolve(null);
					});
			});
		});
	};

	/**
	 * Escribe las páginas de índices de `El Libro de Urantia` en formato Wiki.
	 * El nombre de los ficheros resultantes son `El_Libro_de_Urantia_Indice.wiki`
	 * y `El_Libro_de_Urantia_Indice_extendido.wiki`
	 * @param {*} dirPath Carpeta de salida.
	 * @return {Promise} Promesa que devuelve null en la función resolve y un
	 * error en la función reject.
	 */
	writeIndexToWiki = (dirPath) => {
		return new Promise((resolve, reject) => {
			const lu = 'El_Libro_de_Urantia';
			const filePath1 = path.join(dirPath, `${lu}_Indice.wiki`);
			const filePath2 = path.join(dirPath, `${lu}_Indice_extendido.wiki`);
			let wiki1 = '__NOTOC__\r\n\r\n';
			let wiki2 = '__NOTOC__\r\n\r\n';
			let errs = [];

			let papers = this.papers.slice().sort((a, b) => 
				a.paper_index - b.paper_index);

			papers.forEach(paper => {
				const i = paper.paper_index;
				let title = paper.paper_title;
				let error = null;

				if (!Array.isArray(paper.sections)) {
					error = 'El documento no tiene secciones';
				} else if (paper.sections.find(s => s.section_ref == null)) {
					error = 'Una sección no tiene referencia';
				} else if (!paper.paper_title) {
					error = 'El documento no tiene título';
				}

				if (error) {
					errs.push(new Error(`${filePath1}: ${error}`));
					return;
				}

				let part = null;
				title = this.replaceSpecialChars(title);

				if (i === 0) {
					part = '== PRÓLOGO ==';
				} else if (i === 1) {
					part = '== PRIMERA PARTE - EL UNIVERSO CENTRAL Y LOS SUPERUNIVERSOS ==';
				} else if (i === 32) {
					part = '== SEGUNDA PARTE - EL UNIVERSO CENTRAL ==';
				} else if (i === 57) {
					part = '== TERCERA PARTE - LA HISTORIA DE URANTIA ==';
				} else if (i === 120) {
					part = '== CUARTA PARTE - LA VIDA Y LAS ENSEÑANZAS DE JESÚS ==';
				}
				if (part) {
					wiki1 += `${part}\r\n\r\n`;
					wiki2 += `${part}\r\n\r\n`;
				}
				
				wiki1 += `* [[${lu}_Doc_${i}|${title}]]\r\n`;
				wiki2 += `=== ${title} ===\r\n\r\n`;

				paper.sections.forEach((section, n) => {
					const ref = section.section_ref.replace(':', '_');
					if (section.section_title) {
						const stitle = this.replaceSpecialChars(section.section_title);
						wiki2 += `* [[${lu}_Doc_${i}#LU_${ref}|${stitle}]]\r\n`;
					}
					if (n === paper.sections.length - 1) {
						wiki2 += '\r\n';
					}
				});
			});

			if (errs.length > 0) {
				reject(errs);
				return;
			}

			const p1 = new Promise((resolve1, reject1) => {
				fs.writeFile(filePath1, wiki1, 'utf-8', (err) => {
					resolve1(err ? {error: err} : {value: null});
				});
			});
			const p2 = new Promise((resolve2, reject2) => {
				fs.writeFile(filePath2, wiki2, 'utf-8', (err) => {
					resolve2(err ? {error: err} : {value: null});
				});
			});

			Promise.all([p1,p2])
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
	};

	/**
	 * Escribe `El Libro de Urantia` en formato XML de la extensión DataTransfer
	 * para MediaWiki, cada documento en un archivo si merge es false y si no
	 * se genera un único archivo `wiki_xml_import.xml`.
	 * @deprecated No se aconseja usar DataTransfer y usar el formato wiki con
	 * el script de mantenimiento importTextFiles.php.
	 * @param {string} dirPath Carpeta de salida.
	 * @param {?boolean} merge Si fusionar todos los archivos de salida en uno.
	 * Por defecto es false.
	 * @return {Promise} Promesa que devuelve null en la función resolve y un
	 * array de errores en la función reject.
	 */
	writeToWikiXML = (dirPath, merge) => {
		const baseName = path.basename(dirPath);
		const filePath = path.join(dirPath, 'wiki_xml_import.xml');
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([new Error(`El directorio ${baseName} no está accesible`)]);
					return;
				}
				let files = [];
				this.papers.forEach((paper, i) => {
					const j = (merge ? 0 : i);
					const index = paper.paper_index;
					const stri = (index > 99 ? `${index}` : (i > 9 ? `0${index}` : 
						`00${index}`));
					const fp = path.join(dirPath, `Doc${stri}.xml`);
					if (!files[j]) {
						files[j] = {
							papers: [],
							filePath: (merge ? filePath : fp)
						};
					}
					files[j].papers.push(paper);
				});

				const promises = files.map(file => {
					const p = this.writeFileToWikiXML(file.filePath,
						file.papers);
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
	 * Escribe un documento de `El Libro de Urantia` en formato Wiki.
	 * @param {string} filePath Archivo de salida.
	 * @param {Object} paper Objeto JSON con el documento.
	 * @param {?TopicIndex} topicIndex Un Topic Index opcional.
	 * @return {Promise} Promesa que devuelve null en la función resolve y un
	 * error en la función reject.
	 */
	writeFileToWiki = (filePath, paper, topicIndex) => {
		return new Promise((resolve, reject) => {
			let wiki = '', ptitle, error;
			const end = '\r\n\r\n';
			const eldu = 'El Libro de Urantia';
			const prev = paper.paper_index - 1;
			const next = paper.paper_index + 1;
			let docPrev = (paper.paper_index === 0 ? null :
				this.papers.find(p=>p.paper_index === prev).paper_title);
			let docNext = (paper.paper_index === 196 ? ' ' :
				this.papers.find(p=>p.paper_index === next).paper_title);
			docPrev = (docPrev ? `[[${eldu} Doc ${prev}|${docPrev}]]` : ' ');
			docNext = (docNext ? `[[${eldu} Doc ${next}|${docNext}]]` : ' ');

			let header = '\r\n{| class="wikitable" style="width:100%;"\r\n' +
				`| ${docPrev} || [[${eldu} Indice|Índice]] || ${docNext}\r\n|}${end}`;

			if (!Array.isArray(paper.sections)) {
				error = 'El documento no tiene secciones';
			} else if (paper.sections.find(s => s.section_ref == null)) {
				error = 'Una sección no tiene referencia';
			} else if (paper.sections.find(s => !Array.isArray(s.pars))) {
				error = 'Una sección no tiene párrafos';
			} else if (!paper.paper_title) {
				error = 'El documento no tiene título';
			}

			if (error) {
				reject(new Error(`${filePath}: ${error}`));
				return;
			}

			ptitle = this.replaceSpecialChars(paper.paper_title);
			ptitle = ptitle.toUpperCase();
			wiki += '<div class="noautonum">__TOC__</div>\r\n';
			wiki += header;
			wiki += `== ${ptitle} ==${end}`;

			const wfootnotes = (Array.isArray(paper.footnotes) &&
				paper.footnotes.length > 0 ?
				this.footnotesToWiki(paper.footnotes) : []);
			const wfnErr = [];
			wfootnotes.forEach((wf, i) => {
				if (wf === 'FOOTNOTE ERROR') {
					wfnErr.push(i);
				}
			});
			if (wfnErr.length > 0) {
				reject(new Error(`${filePath}: Error en footnotes: ${wfnErr.join(',')}`));
				return;
			}
			let footnoteIndex = 0;
			let replaceErr = [];

			paper.sections.forEach(section => {
				let ref, anchor, stitle;
				ref = section.section_ref.replace(':', '_');
				anchor = `{{anchor|LU_${ref}}}`;
				if (section.section_title) {
					stitle = this.replaceSpecialChars(section.section_title);
					stitle = stitle.toUpperCase();
					wiki += `== ${anchor} ${stitle} ==${end}`;
				} else {
					wiki += `${anchor}${end}`;
				}

				section.pars.forEach(par => {
					let pref, supref, panchor, pcontent, aref, topics, di, si, pi;
					if (!par.par_ref || !par.par_content) {
						error = 'Un párafo no tiene referencia o contenido';
						return;
					}
					try {
						aref = this.getRef(par.par_ref);
					} catch (err) {
						error = 'La referencia no es válida en ' + par.par_ref;
					}
					if (!aref) {
						return;
					}
					di = aref[0];
					si = aref[1];
					pi = aref[2];
					pref = par.par_ref.replace(/[:\.]/g,'_');
					supref = `<sup><small>${par.par_ref}</small></sup>`;
					panchor = `{{anchor|LU_${pref}}}`;
					pcontent = par.par_content.replace(/\*/g, '\'\'');
					replaceErr = [];
					pcontent = replaceTags(pcontent, '$', '$', 
						'<span style="font-variant: small-caps;">', '</span>',
						replaceErr);
					if (replaceErr.length > 0) {
						error = replaceErr[0];
					}
					if (topicIndex) {
						topics = topicIndex.topics.filter(topic => {
							let contains = (topic.refs.find(r => 
								this.containsRef(r, di, si, pi)) != null);
							if (!contains) {
								topic.lines.forEach(line => {
									if (line.refs.find(r => 
										this.containsRef(r, di, si, pi))) {
										contains = true;
									}
								});
							}
							return contains;
						});
						topics.forEach(topic => {
							let names = [topic.name.split('(')[0].trim()];
							extendArray(names, topic.altnames);
							const links = names.map((name, i) => {
								return (i === 0 && topic.name.indexOf('(') != -1 ?
									`[[${topic.name}|${name}]]` : `[[${name}]]`);
							});
							const previous = pcontent;
							pcontent = replaceWords(names, links, pcontent);
							if (previous === pcontent) {
								this.warnings.push(
									`${topic.name} no encontrado en ${par.par_ref}`);
							}
						});
					}
					while (wfootnotes.length > 0 && 
						footnoteIndex < wfootnotes.length &&
						pcontent.indexOf(`{${footnoteIndex}}`) != -1) {
						pcontent = pcontent.replace(`{${footnoteIndex}}`,
							`<ref name="n${footnoteIndex}"/>`);
						footnoteIndex++;
					}
					// pcontent = `<p class="p-book">${pcontent}</p>`;
					wiki += `${panchor} ${supref} ${pcontent}${end}`;
				});
			});

			wiki += header;

			if (wfootnotes.length > 0) {
				wiki += `== Referencias ==${end}<references>\r\n`;
				wfootnotes.forEach(f => wiki += f);
				wiki += '</references>';
			}
			if (error) {
				reject(new Error(`${filePath}: ${error}`));
				return;
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
	 * Escribe uno o varios documentos de `El Libro de Urantia` en formato XML de 
	 * la extensión DataTransfer para MediaWiki.
	 * @deprecated No se aconseja usar DataTransfer y usar el formato wiki con
	 * el script de mantenimiento importTextFiles.php
	 * @param {string} filePath Archivo de salida.
	 * @param {Array.<Object>} papers Array de objetos JSON con los documentos.
	 * @return {Promise} Promesa que devuelve null en la función resolve y un
	 * error en la función reject.
	 */
	writeFileToWikiXML = (filePath, papers) => {
		return new Promise((resolve, reject) => {
			let xml = '<Pages>\r\n';
			let error;

			papers.forEach(paper => {
				if (!Array.isArray(paper.sections)) {
					error = 'El documento no tiene secciones';
				} else if (paper.sections.find(s => s.section_ref == null)) {
					error = 'Una sección no tiene referencia';
				} else if (paper.sections.find(s => !Array.isArray(s.pars))) {
					error = 'Una sección no tiene párrafos';
				} else if (!paper.paper_title) {
					error = 'El documento no tiene título';
				}

				if (error) {
					reject(new Error(`${filePath}: ${error}`));
					return;
				}

				xml += `<Page Title="El_Libro_de_Urantia_Doc_${paper.paper_index}">\r\n`;
				
				const section0 = paper.sections.find(s => s.section_index === 0);
				const ptitle = paper.paper_title.toUpperCase();
				if (!section0) {
					xml += `<Free_Text>== ${ptitle} ==</Free_Text>\r\n`;
				}

				const wfootnotes = (Array.isArray(paper.footnotes) &&
					paper.footnotes.length > 0 ?
					this.footnotesToWiki(paper.footnotes, true) : []);
				const wfnErr = [];
				wfootnotes.forEach((wf, i) => {
					if (wf === 'FOOTNOTE ERROR') {
						wfnErr.push(i);
					}
				});
				if (wfnErr.length > 0) {
					reject(new Error(`${filePath}: Error en footnotes: ${wfnErr.join(',')}`));
					return;
				}
				let footnoteIndex = 0;
				
				paper.sections.forEach(section => {
					let ref, anchor, stitle;
					ref = section.section_ref.replace(':', '_');
					anchor = '<Template Name="anchor">' +
						`<Field Name="1">LU_${ref}</Field>` +
						'</Template>';
					if (section.section_title) {
						stitle = section.section_title.toUpperCase();
						xml += `${anchor}<Free_Text>== ${stitle} ==</Free_Text>\r\n`;
					} else {
						xml += `${anchor}\r\n`;
					}
					if (section0 && section.section_index === 0) {
						xml += `<Free_Text>== ${ptitle} ==</Free_Text>\r\n`;
					}
					section.pars.forEach(par => {
						let pref, panchor, pcontent;
						if (!par.par_ref || !par.par_content) {
							error = 'Un párafo no tiene referencia o contenido';
							return;
						}
						pref = par.par_ref.replace(/[:\.]/g,'_');
						panchor = '<Template Name="anchor">' +
							`<Field Name="1">LU_${pref}</Field>` +
							'</Template>';
						pcontent = par.par_content.replace(/\*/g, '\'\'');
						while (wfootnotes.length > 0 && 
							footnoteIndex < wfootnotes.length &&
							pcontent.indexOf(`{${footnoteIndex}}`) != -1) {
							pcontent = pcontent.replace(`{${footnoteIndex}}`,
								`&lt;ref name="n${footnoteIndex}"/&gt;`);
							footnoteIndex++;
						}

						xml += `${panchor}<Free_Text>&lt;p&gt;${pcontent}&lt;/p&gt;</Free_Text>\r\n`;
					});
				});
				if (wfootnotes.length > 0) {
					xml += `<Free_Text>== Referencias ==</Free_Text>\r\n`;
					xml += `<Free_Text>&lt;references&gt;</Free_Text>\r\n`;
					wfootnotes.forEach(f => xml += f);
					xml += '<Free_Text>&lt;/references&gt;</Free_Text>\r\n'
				}
				xml += '</Page>\r\n';
			});

			xml += '</Pages>';

			if (error) {
				reject(new Error(`${filePath}: ${error}`));
				return;
			}

			fs.writeFile(filePath, xml, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	/**
	 * Convierte el array de las notas a pie de página en formato Wiki o en
	 * el formato XML de la extensión DataTransfer de MediaWiki si xml=true.
	 * @param {Array.<Object>} footnotes Array de las notas al pie de página.
	 * @param {boolean} xml Si true se convierte al formato XML, si no a Wiki.
	 * @return {string}
	 */
	footnotesToWiki = (footnotes, xml) => {
		return footnotes.map((f, n) => {
			let wiki, parts, text, text2, fs, ab;
			parts = f.split('*').filter(n => n.trim() != '');
			if (parts.length === 0 || parts.length % 2 != 0) {
				return 'FOOTNOTE ERROR';
			}
			if (xml) {
				wiki = `<Free_Text>&lt;ref name="n${n}"&gt;</Free_Text>`;
			} else {
				wiki = `<ref name="n${n}">`;
			}
			
			for (let p = 0; p < parts.length; p = p + 2) {
				text = parts[p];
				if (xml) {
					wiki += `<Free_Text>''${text}'':</Free_Text>`
				} else {
					wiki += `''${text}'':`;
				}

				text2 = parts[p + 1];
				if (text2[0] === ':') {
					text2 = text2.substring(1).trim();
					if (text2[text2.length - 1] === '.') {
						text2 = text2.substring(0, text2.length - 1);
					}
				}
				fs = text2.split(';');

				fs.forEach((fss, i) => {
					fss = fss.trim();
					let chapter = null;
					let vers = null;
					let ref = null;
					let ab2 = this.findAbr(fss);
					if (ab2) {
						ab = ab2;
						ref = fss.substring(ab.length).trim();
					} else {
						ref = fss;
					}
					if (ab && ref) {
						if (ref.indexOf(':')) {
							chapter = ref.substring(0, ref.indexOf(':'));
							vers = ref.substring(ref.indexOf(':') + 1);
						}
						if (chapter && vers) {
							if (xml) {
								wiki += ' <Template Name="lib">' +
									`<Field Name="1">${ab}</Field>` +
									`<Field Name="2">${chapter}</Field>` +
									`<Field Name="3">${vers}</Field>` +
									'</Template>';
							} else {
								wiki += ` {{lib|${ab}|${chapter}|${vers}}}`;
							}
						} else {
							if (xml) {
								wiki += ' <Template Name="lib">' +
									`<Field Name="1">${ab}</Field>` +
									`<Field Name="2">1</Field>` +
									'</Template>';
							} else {
								wiki += ` {{lib|${ab}|1}}`;
							}
						}
						if (xml) {
							wiki += '<Free_Text>' + 
								(i != fs.length - 1 ? ';' : '. ') +
								'</Free_Text>';
						} else {
							wiki += (i != fs.length - 1 ? ';' : '. ');
						}
					}
				});
			}
			if (xml) {
				wiki += '<Free_Text>&lt;/ref&gt;</Free_Text>\r\n';
			} else {
				wiki += '</ref>\r\n';
			}
			
			return wiki;
		});
	};

	/**
	 * Obtiene la abreviatura de la Biblia para una referencia.
	 * @param {string} content Referencia de la Biblia.
	 * @return {string}
	 */
	findAbr = (content) => {
		//Localiza cuál es la abreviatura
		for (let ab in BibleAbb) {
			if (content.startsWith(ab)) {
				return ab;
			}
		}
		return null;
	};


	//***********************************************************************
	// Help functions
	//***********************************************************************

	/**
	 * Devuelve un error con los datos dados.
	 * @param {string} file Archivo en el que se produce el error.
	 * @param {number} linenum Línea con el error.
	 * @param {string} msg Mensaje de error.
	 * @return {Error}
	 */
	createError = (file, linenum, msg) => {
		return new Error(`${file}, línea ${linenum + 1}: ${msg}`);
	};

	/**
	 * Escribe `El Libro de Urantia` en el formato especificado, cada documento 
	 * en un archivo.
	 * Requiere previamente haber leido el libro desde algun otro formato.
	 * @param {string} dirPath Carpeta de salida.
	 * @param {string} format Formato de salida. Puede ser `json`, `tex` o `wiki`.
	 * @param {?TopicIndex} topicIndex Un Topic Index opcional.
	 * @return {Promise} Promesa que devuelve null en la función resolve y un
	 * array de errores en la función reject.
	 */
	writeTo = (dirPath, format, topicIndex) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([new Error(`El directorio ${baseName} no está accesible`)]);
					return;
				}
				const promises = this.papers.map(paper => {
					const i = paper.paper_index;
					const stri = (i > 99 ? `${i}` : (i > 9 ? `0${i}` : `00${i}`));
					let filePath = path.join(dirPath, `Doc${stri}.${format}`);
					let p;
					if (format === 'json') {
						p = this.writeFileToJSON(filePath, paper);
					} else if (format === 'tex') {
						p = this.writeFileToLaTeX(filePath, paper);
					} else if (format = 'wiki') {
						filePath = path.join(dirPath, 
							`El_Libro_de_Urantia_Doc_${i}.${format}`);
						p = this.writeFileToWiki(filePath, paper, topicIndex);
					} else {
						p = Promise.resolve(null);
					}
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
}

module.exports = Book;