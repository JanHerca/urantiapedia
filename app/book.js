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
			if (line.startsWith(LaTeXSeparator.PAPER_START)) {
				//Si es un documento
				extract = extractStr(line, LaTeXSeparator.PAPER_START,
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
			} else if (line.startsWith(LaTeXSeparator.PAR_START)) {
				//Si es un párrafo
				if (linePreviousPos === i - 1) {
					extract = extractStr(line, LaTeXSeparator.PAR_START,
						LaTeXSeparator.END);
					if (!extract) {
						errors.push(this.createError(baseName, i,
							'No se pudo extraer la referencia de párrafo'));
					} else if (extractPrevious) {
						j = LaTeXSeparator.PAR_START.length + extract.length + 
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
			footnotes.push(footnoteExtract);
		}
		extract = this.replaceItalicsFromLaTeX(baseName, lnum, extract, errors);
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
		//TODO: reemplazar \"u con ü, --- con —, 
	};

	writeToLaTeX = (dirPath) => {

	};

	writeFileToLaTeX = (filePath) => {

	};

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
					const filePath = path.join(dirPath, `Doc${stri}.json`);
					return reflectPromise(this.writeFileToJSON(filePath, paper));
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

	createError = (file, linenum, msg) => {
		return new Error(`${file}, línea ${linenum}: ${msg}`);
	};
}

module.exports = Book;