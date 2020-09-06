//Reader/Writer para El Libro de Urantia en diferentes formatos (LaTeX/JSON/Wiki)

const LaTeXSeparator = require('./enums').LaTeXSeparator;
const extractStr = require('./utils').extractStr;
const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const fs = require('fs');
const path = require('path');

class Book {
	errorString = '{0}, línea {1}: {2}';
	pars = [];
	papers = [];
	onProgressFn = null;

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
			if (line.startsWith(LaTeXSeparator.CHAPTER_START)) {
				//Si es un documento
				extract = extractStr(line, LaTeXSeparator.CHAPTER_START,
					LaTeXSeparator.END);
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
			} else if (line.startsWith(LaTeXSeparator.SECTION_START)) {
				//Si es una seccion
				extract = extractStr(line, LaTeXSeparator.SECTION_START,
					LaTeXSeparator.END);
				if (!extract) {
					errors.push(this.createError(baseName, i,
						'No se pudo extraer el inicio de sección'));
				} else {
					currentSectionIndex++;
					currentSection = {
						section_index: currentSectionIndex,
						section_ref: `${paperIndex}:${currentSectionIndex}`,
						section_title: extract,
						pars: []
					};
					paper.sections.push(currentSection);
				}
			} else if (line.startsWith(LaTeXSeparator.PAGEREF_START)) {
				//Si es la línea con la antigua referencia
				linePrevious = line;
				linePreviousPos = i;
				extractPrevious = extractStr(line, LaTeXSeparator.PAGEREF_START,
					LaTeXSeparator.PAGEREF_END);
				if (!extractPrevious) {
					errors.push(this.createError(baseName, i,
						'No se pudo extraer la referencia tipo página'));
				}
			} else if (line.startsWith(LaTeXSeparator.TEXT_START)) {
				//Si es un párrafo
				if (linePreviousPos === i - 1) {
					extract = extractStr(line, LaTeXSeparator.TEXT_START,
						LaTeXSeparator.END);
					if (!extract) {
						errors.push(this.createError(baseName, i,
							'No se pudo extraer la referencia de párrafo'));
					} else if (extractPrevious) {
						j = LaTeXSeparator.TEXT_START.length + extract.length + 
							LaTeXSeparator.END.length;
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
		while (i < content.length) {
			index = content.indexOf(LaTeXSeparator.FOOTNOTE_START, i);
			if (index === -1) {
				extract += content.substring(i);
				break;
			} else {
				extract += content.substring(i, index);
			}
			fi = index + LaTeXSeparator.FOOTNOTE_START.length;
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
			footnoteExtract = this.replaceItalicsFromLaTeX(baseName, lnum, 
				footnoteExtract, errors);
			footnoteExtract = this.replaceSpecialChars(footnoteExtract);
			footnotes.push(footnoteExtract);
		}
		extract = this.replaceItalicsFromLaTeX(baseName, lnum, extract, errors);
		extract = this.replaceSpecialChars(extract);
		return extract;
	};

	replaceItalicsFromLaTeX = (baseName, lnum, content, errors) => {
		let result = '', ii, i = 0, index;
		while (i < content.length) {
			index = content.indexOf(LaTeXSeparator.ITALIC_START, i);
			if (index === -1) {
				result += content.substring(i);
				break;
			} else {
				result += content.substring(i, index);
			}
			ii = index + LaTeXSeparator.ITALIC_START.length;
			i = content.indexOf(LaTeXSeparator.END, ii);
			if (i === -1) {
				errors.push(this.createError(baseName, lnum,
					'No existe cierre de itálicas correcto'))
				return content;
			}
			result += '*' + content.substring(ii, i) + '*';
			i++;
		}
		return result;
	};

	replaceSpecialChars = (content) => {
		return content.replace(/(\\\"u)/g, 'ü').replace(/(---)/g, '—');
	};

	writeToLaTeX = (dirPath) => {
		return this.writeTo(dirPath, 'tex');
	};

	writeFileToLaTeX = (filePath) => {

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
						const errors = results.filter(r => r.error != null);
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
			if (paper.paper_title) {
				ptitle = paper.paper_title.toUpperCase();
				wiki += `== ${ptitle} ==${end}`;
			}
			if (!Array.isArray(paper.sections)) {
				error = 'El documento no tiene secciones';
				reject(new Error(`${filePath}: ${error}`));
				return;
			}
			const wfootnotes = (Array.isArray(paper.footnotes) &&
				paper.footnotes.length > 0 ?
				this.footnotesToWiki(paper.footnotes) : []);
			let footnoteIndex = 0;

			paper.sections.forEach(section => {
				let ref, anchor, stitle;
				if (!section.section_ref) {
					error = 'Una sección no tiene referencia';
					return;
				}
				ref = section.section_ref.replace(':', '_');
				anchor = `{{anchor|LU_${ref}}}`;
				if (section.section_title) {
					stitle = section.section_title.toUpperCase();
					wiki += `== ${anchor} ${stitle} ==${end}`;
				} else {
					wiki += `${anchor}${end}`;
				}
				if (!Array.isArray(section.pars)) {
					error = 'Una sección no tiene párrafos';
					return;
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
					if (wfootnotes.length > 0 && 
						footnoteIndex < wfootnotes.length &&
						pcontent.indexOf(`{${footnoteIndex}}`) != -1) {
						pcontent = pcontent.replace(`{${footnoteIndex}}`,
							wfootnotes[footnoteIndex]);
						footnoteIndex++;
					}
					wiki += `${panchor} ${pcontent}${end}`;
				});
			});

			if (wfootnotes.length > 0) {
				wiki += `== Referencias ==${end}<references/>${end}`;
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
						//TODO: añadir referencias

						xml += `${panchor}<Free_Text>&lt;p&gt;${pcontent}&lt;/p&gt;</Free_Text>\r\n`;
					});
				});
				xml += '</Page>\r\n'
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

	footnotesToWiki = (footnotes) => {
		return footnotes.map(f => {
			return `<ref>${f.replace(/\*/g, '\'\'')}</ref>`;
		});
	};

	footnotesToWikiXML = (footnotes) => {

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
					const filePath = path.join(dirPath, `Doc${stri}.${format}`);
					let p;
					if (format === 'json') {
						p = this.writeFileToJSON(filePath, paper);
					} else if (format === 'tex') {
						p = this.writeFileToLaTeX(filePath, paper);
					} else if (format = 'wiki') {
						p = this.writeFileToWiki(filePath, paper);
					} else {
						p = Promise.resolve(null);
					}
					return reflectPromise(p);
				});
				Promise.all(promises)
					.then((results) => {
						const errors = results.filter(r => r.error != null);
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