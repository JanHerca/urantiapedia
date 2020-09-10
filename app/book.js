//Reader/Writer para El Libro de Urantia en diferentes formatos (LaTeX/JSON/Wiki)

const LSep = require('./enums').LaTeXSeparator;
const BibleAbb = require('./enums').BibleAbb;
const extractStr = require('./utils').extractStr;
const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const replaceTags = require('./utils').replaceTags;
const fs = require('fs');
const path = require('path');

class Book {
	errorString = '{0}, línea {1}: {2}';
	pars = [];
	papers = [];
	onProgressFn = null;

	/**
	 * Devuelve un array de tres valores [paper_id, section_id, par_id]
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
	 * Devolvemos las footnotes que contenga un determinado párrafo del LU
	 * @param {string} lu_ref Referencia al LU.
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
	 * Devolvemos un array con pares [texto, ref bíblica]
	 * @param {Array} footnotes Array de footnotes
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

	//***********************************************************************
	// LaTeX
	//***********************************************************************

	readFromLaTeX = (dirPath) => {
		return new Promise((resolve, reject) => {
			fs.readdir(dirPath, (err, files) => {
				if (err) {
					reject([err]);
					return;
				}
				var texFiles = files.filter(file => {
					return path.extname(file) === '.tex';
				});
				if (texFiles.length === 0) {
					reject([new Error('No se han encontrado archivos LaTeX')]);
					return;
				}

				this.papers = [];
				
				var promises = texFiles.map(file => {
					const filePath = path.join(dirPath, file);
					return reflectPromise(this.readFileFromLaTeX(filePath));
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
						currentSection.pars.push(currentPar);
					}
				} else {
					errors.push(this.createError(baseName, i,
						'No existe en línea previa la referencia tipo página'));
				}
			}
		});
		return paper;
	};

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
			replaceErr = null;
			footnoteExtract = replaceTags(footnoteExtract, LSep.ITALIC_START, 
				LSep.END, '*', '*', replaceErr);
			if (replaceErr) {
				errors.push(this.createError(baseName, lnum, replaceErr));
			}
			footnoteExtract = this.replaceSpecialChars(footnoteExtract);
			footnotes.push(footnoteExtract);
		}
		replaceErr = null;
		extract = replaceTags(extract, LSep.ITALIC_START, LSep.END, '*', '*', 
			replaceErr);
		if (replaceErr) {
			errors.push(this.createError(baseName, lnum, replaceErr));
		}
		extract = this.replaceSpecialChars(extract);
		return extract;
	};

	replaceSpecialChars = (content) => {
		return content
			.replace(/(\\\"u)/g, 'ü')
			.replace(/(---)/g, '—')
			.replace('\\bigbreak', '<br/>');
	};

	replaceInverseSpecialChars = (content) => {
		return content
			.replace(/(ü)/g, '\\\"u')
			.replace(/(—)/g, '---')
			.replace('<br/>', '\\bigbreak');
	};

	writeToLaTeX = (dirPath) => {
		return this.writeTo(dirPath, 'tex');
	};

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
					let pcontent, replaceErr = null, end;
					if (!par.par_ref || !par.par_content || !par.par_pageref) {
						error = 'Un párafo no tiene referencia o contenido';
						return;
					}
					pcontent = replaceTags(par.par_content, '*', '*', LSep.ITALIC_START,
						LSep.END, replaceErr);
					if (replaceErr) {
						error = replaceErr;
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

	footnotesToLaTeX = (footnotes) => {
		return footnotes.map((f, n) => {
			let text, fs, replaceErr;
			text = replaceTags(f, '*', '*', LSep.ITALIC_START, LSep.END, 
				replaceErr);
			text = this.replaceInverseSpecialChars(text);
			if (replaceErr) {
				return 'FOOTNOTE ERROR';
			}
			return `\\footnote{${text}}`;
		});
	};

	//***********************************************************************
	// JSON
	//***********************************************************************

	readFromJSON = (dirPath) => {
		return new Promise((resolve, reject) => {
			fs.readdir(dirPath, (err, files) => {
				if (err) {
					reject([err]);
					return;
				}
				var jsonFiles = files.filter(file => {
					return path.extname(file) === '.json';
				});
				if (jsonFiles.length === 0) {
					reject([new Error('No se han encontrado archivos JSON')]);
					return;
				}

				this.papers = [];
				
				var promises = jsonFiles.map(file => {
					const filePath = path.join(dirPath, file);
					return reflectPromise(this.readFileFromJSON(filePath));
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

	writeToJSON = (dirPath) => {
		return this.writeTo(dirPath, 'json');
	};

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
	// Wiki
	//***********************************************************************

	writeToWiki = (dirPath) => {
		return this.writeTo(dirPath, 'wiki');
	};

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

	writeFileToWiki = (filePath, paper) => {
		return new Promise((resolve, reject) => {
			let wiki = '', ptitle, error;
			const end = '\r\n\r\n';

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

			ptitle = paper.paper_title.toUpperCase();
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

			paper.sections.forEach(section => {
				let ref, anchor, stitle;
				ref = section.section_ref.replace(':', '_');
				anchor = `{{anchor|LU_${ref}}}`;
				if (section.section_title) {
					stitle = section.section_title.toUpperCase();
					wiki += `== ${anchor} ${stitle} ==${end}`;
				} else {
					wiki += `${anchor}${end}`;
				}

				section.pars.forEach(par => {
					let pref, panchor, pcontent;
					if (!par.par_ref || !par.par_content) {
						error = 'Un párafo no tiene referencia o contenido';
						return;
					}
					pref = par.par_ref.replace(/[:\.]/g,'_');
					panchor = `{{anchor|LU_${pref}}}`;
					pcontent = par.par_content.replace(/\*/g, '\'\'');
					while (wfootnotes.length > 0 && 
						footnoteIndex < wfootnotes.length &&
						pcontent.indexOf(`{${footnoteIndex}}`) != -1) {
						pcontent = pcontent.replace(`{${footnoteIndex}}`,
							`<ref name="n${footnoteIndex}"/>`);
						footnoteIndex++;
					}
					wiki += `${panchor} ${pcontent}${end}`;
				});
			});

			if (wfootnotes.length > 0) {
				wiki += `== Referencias ==${end}<references>\r\n`;
				wfootnotes.forEach(f => wiki += f);
				wiki += '</references>'
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

	createError = (file, linenum, msg) => {
		return new Error(`${file}, línea ${linenum}: ${msg}`);
	};

	writeTo = (dirPath, format) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([new Error(`El directorio ${baseName} no está accesible`)]);
					return;
				}
				var promises = this.papers.map(paper => {
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
						p = this.writeFileToWiki(filePath, paper);
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