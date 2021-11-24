//Reader/Writer for The Urantia Book in different formats (HTML/LaTeX/JSON/Wiki)

const LSep = require('./enums').LaTeXSeparator;
const HSep = require('./enums').HTMLSeparator;
const BibleAbbs = require('./abb');
const extractStr = require('./utils').extractStr;
const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const replaceTags = require('./utils').replaceTags;
const removeHTMLTags = require('./utils').removeHTMLTags;
const readFrom = require('./utils').readFrom;
const replaceWords = require('./utils').replaceWords;
const getAllIndexes = require('./utils').getAllIndexes;
const strformat = require('./utils').strformat;
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const Strings = require('./strings');

class Book {
	language = 'en';
	errorString = '{0}, línea {1}: {2}';
	pars = [];
	papers = [];
	onProgressFn = null;
	warnings = [];
	HTMLconfigs = [
		{
			name: 'generic',
			paperTitle: 'h1[id=U{paperIndex}_0_0]',
			secs: 'h2',
			pars: 'p',
			languages: ['bg', 'cs', 'da', 'de', 'en', 'es', 'es-1993', 'et',
				'fi', 'fr', 'hu', 'id', 'it', 'lt', 'nl', 'pl', 'pt', 'ro',
				'ru', 'sv']
		},
		{
			name: 'greek',
			paperTitle: 'h3',
			secs: 'h4',
			pars: 'p',
			languages: ['el']
		},
		{
			name: 'farsi,korean',
			paperTitle: 'h3',
			secs: 'h4',
			pars: 'p',
			languages: ['fa', 'ko']
		},
		{
			name: 'hebrew,japanese',
			paperTitle: 'h1:last',
			secs: 'h4',
			pars: 'p',
			languages: ['he', 'ja']
		}
	];
	footnotes = [];

	setLanguage = (language) => {
		this.language = language;
	};

	/**
	 * Returns an array with three values [paper_id, section_id, par_id]
	 * For example: for '101:2.1' returns [101,2,1]
	 * Input always must have three value or triggers an exception.
	 * @param {string} lu_ref Reference to UB.
	 * @return {Array}
	 */
	getRef = (lu_ref) => {
		let data, data2, paper_id, section_id, par_id;
		const err = this.getError('book_wrong_reference', lu_ref);
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
	 * Returns an array of arrays with three values [paper_id, section_id, par_id]
	 * with all paragraphs included in the reference.
	 * For example '101' returns an array of all paragraphs of paper 101.
	 * For example '101:2.1,3-4' returns [[101,2,1], [101,2,3], [101,2,4]]
	 * Checks if references exist.
	 * If anything goes wrong returns an exception.
	 * @param {string} lu_ref UB reference.
	 * @return {Array}
	 */
	getRefs = (lu_ref) => {
		let data, data2, data3, dd, paper_id, section_id, paper, section, min, max;
		const err = this.getError('book_wrong_reference', lu_ref);
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
			//Only paper case
			paper.sections.forEach(s => {
				s.pars.forEach(p => {
					result.push(this.getRef(p.par_ref));
				});
			});
		} else if (data.length > 1) {
			data2 = data[1].split('.');
			if (data2.length === 1) {
				//Case of only paper and section/sections
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
	 * Returns true if the reference in text form contains the reference in number
	 * form. For example: '101:2.3,6-10' contains [101,2,3],
	 * and [101,2,7] but not [101,2,4]. Works also giving the reference of a full
	 * paper or a full section.
	 * @param {string} lu_ref Book reference in text form.
	 * @param {number} paperIndex Paper index starting in zero.
	 * @param {number} sectionIndex Section index starting in zero.
	 * @param {number} parIndex Paragraph index starting in 1.
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
	 * Returns footnotes that contain a giving paragraph from `The Urantia Book`.
	 * @param {string} lu_ref Reference to `The Urantia Book`.
	 * @return {Array}
	 */
	getFootnotes = (lu_ref) => {
		let paper, section, par_content, footnotes = [];
		const err2 = this.getError('book_wrong_reference', lu_ref);
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
	 * Returns an arrat with pairs [text, biblical ref].
	 * @param {Array} footnotes Array of footnotes.
	 * @return {Array}
	 */
	getSubFootnotes = (footnotes) => {
		const subfootnotes = [];
		const err = this.getError('book_wrong_footnotes');
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
	 * Returns a paragraph from book using a reference.
	 * If the reference does not exist returns null.
	 * @param {number} paperIndex Paper index starting at zero.
	 * @param {number} sectionIndex Section index starting at zero.
	 * @param {number} parIndex Paragraph index starting at 1.
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
	 * Converts a text in LaTeX format to HTML format, replacing special chars 
	 * with same chars but adapted to Wiki formats.
	 * @param {string} content Content.
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
	 * Returns a text in any format except LaTeX replacing special chars with  
	 * the same chars but adapted to LaTeX format.
	 * @param {string} content Content.
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
	 * Clears any content read.
	 */
	clear = () => {
		this.papers = [];
	};

	//***********************************************************************
	// LaTeX
	//***********************************************************************

	/**
	 * Reads `The Urantia Book` from a folder with files in LaTeX format.
	 * @param {string} dirPath Folder path.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	readFromLaTeX = (dirPath) => {
		return readFrom(dirPath, '.tex', this.clear, this.readFileFromLaTeX, this);
	};

	/**
	 * Reads a `The Urantia Book` paper from a file in LaTeX format.
	 * @param {string} filePath File path.
	 * @returns {Promise} Promise that returns an object with the paper content 
	 * in resolve function or an array of errors in reject function.
	 */
	readFileFromLaTeX = (filePath) => {
		const baseName = path.basename(filePath);
		return new Promise((resolve, reject) => {
			if (this.onProgressFn) {
				this.onProgressFn(baseName);
			}
			const paperIndex = parseInt(extractStr(baseName, 'Doc', '.tex'));
			if (isNaN(paperIndex)) {
				reject([this.getError('book_no_paper_index', baseName, 1)]);
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
	 * Reads and extracts the content of a `The Urantia Book` paper from an
	 * array of lines read from a file in LaTeX format.
	 * @param {string} baseName File name without extension.
	 * @param {number} paperIndex Paper index.
	 * @param {string[]} lines Array of lines.
	 * @param {Error[]} errors Array to store errors.
	 * @returns {Object} Paper object.
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
				//If it is a paper
				extract = extractStr(line, LSep.CHAPTER_START, LSep.END);
				if (!extract) {
					errors.push(this.getError('book_no_paper_start', baseName, i + 1));
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
				//If it is a section
				extract = extractStr(line, LSep.SECTION_START, LSep.END);
				if (!extract) {
					errors.push(this.getError('book_no_section_start', baseName, i + 1));
				} else {
					extract = this.replaceSpecialChars(extract);
					//Special case of section 139:9 (that do not exists)
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
				//If it is a line with old reference
				linePrevious = line;
				linePreviousPos = i;
				extractPrevious = extractStr(line, LSep.PAGEREF_START,
					LSep.PAGEREF_END);
				if (!extractPrevious) {
					errors.push(this.getError('book_no_pageref', baseName, i + 1));
				}
			} else if (line.startsWith(LSep.TEXT_START)) {
				//If it is a paragraph
				if (linePreviousPos === i - 1) {
					extract = extractStr(line, LSep.TEXT_START, LSep.END);
					if (!extract) {
						errors.push(this.getError('book_no_parref', baseName, i + 1));
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
							errors.push(this.getError('book_no_add_par', baseName, i + 1));
						}
					}
				} else {
					errors.push(this.getError('book_no_ref_previous', baseName, i + 1));
				}
			}
		});
		return paper;
	};

	/**
	 * Reads and extracts the content a paragraph from `The Urantia Book` using a
	 * content in LaTeX format.
	 * @param {string} baseName File name without extension.
	 * @param {number} lnum Line index.
	 * @param {string} content Paragraph content in LaTeX format.
	 * @param {string[]} footnotes Array to store footnotes.
	 * @param {Error[]} errors Array to store errors.
	 * @returns {string} Content of paragraph.
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
				errors.push(this.getError('book_no_closing_footnote', baseName, lnum + 1))
				return content;
			}
			extract += `{${footnotes.length}}`;
			footnoteExtract = content.substring(fi, i - 1);
			replaceErr = [];
			footnoteExtract = replaceTags(footnoteExtract, LSep.ITALIC_START, 
				LSep.END, '*', '*', replaceErr);
			if (replaceErr.length > 0) {
				extendArray(errors, replaceErr.map(e => 
					this.getError(e, baseName, lnum + 1)));
			}
			footnoteExtract = this.replaceSpecialChars(footnoteExtract);
			footnotes.push(footnoteExtract);
		}
		replaceErr = [];
		extract = replaceTags(extract, LSep.ITALIC_START, LSep.END, '*', '*', 
			replaceErr);
		if (replaceErr.length > 0) {
			extendArray(errors, replaceErr.map(e => 
				this.getError(e, baseName, lnum + 1)));
		}
		extract = this.replaceSpecialChars(extract);
		return extract;
	};

	/**
	 * Writes `The Urantia Book` in LaTeX format.
	 * @param {string} dirPath Folder path.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	writeToLaTeX = (dirPath) => {
		return this.writeTo(dirPath, 'tex');
	};

	/**
	 * Writes a paper of `The Urantia Book` in LaTeX format.
	 * @param {string} filePath File path.
	 * @param {Object} paper Paper object.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * error in reject function.
	 */
	writeFileToLaTeX = (filePath, paper) => {
		return new Promise((resolve, reject) => {
			let latex = '', error;

			if (!Array.isArray(paper.sections)) {
				error = 'book_no_sections';
			} else if (paper.sections.find(s => s.section_ref == null)) {
				error = 'book_section_no_reference';
			} else if (paper.sections.find(s => !Array.isArray(s.pars))) {
				error = 'book_section_no_pars';
			} else if (!paper.paper_title) {
				error = 'book_paper_no_title';
			}

			if (error) {
				reject(this.getError(error, filePath));
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
						error = 'book_par_no_refcontent';
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
				reject(this.getError(error, filePath));
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
	 * Converts an array of footnotes in text to be a footnote in a file
	 * in LaTeX format. Footnotes not correctly coded are returned as the
	 * text FOOTNOTE ERROR.
	 * @param {string[]} footnotes Array of footnotes.
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
	 * Reads `The Urantia Book` from a folder with files in JSON format.
	 * @param {string} dirPath Folder path.
	 * @returns {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	readFromJSON = (dirPath) => {
		return readFrom(dirPath, '.json', this.clear, this.readFileFromJSON, this);
	};

	/**
	 * Reads a paper from `The Urantia Book` from a file in JSON format.
	 * @param {string} filePath File path.
	 * @returns {Promise} Promise that returns an object with paper content in 
	 * resolve function or an array of errors in reject function.
	 */
	readFileFromJSON = (filePath) => {
		const baseName = path.basename(filePath);
		return new Promise((resolve, reject) => {
			if (this.onProgressFn) {
				this.onProgressFn(baseName);
			}
			const paperIndex = parseInt(extractStr(baseName, 'Doc', '.json'));
			if (isNaN(paperIndex)) {
				reject([this.getError('book_no_paper_index', baseName, 1)]);
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
	 * Writes `The Urantia Book` in JSON format.
	 * @param {string} dirPath Folder path.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	writeToJSON = (dirPath) => {
		return this.writeTo(dirPath, 'json');
	};

	/**
	 * Writes a paper of `The Urantia Book` in JSON format.
	 * @param {string} filePath File path.
	 * @param {Object} paper Paper object.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * error in reject function.
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

	/**
	 * Reads references (footnotes) from a file called`footnotes-book-xx.json` 
	 * in parent folder of the one passed in param and stores everything in a
	 * footnotes object.
	 * @param {string} dirPath Folder path.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	readRefsFromJSON = (dirPath) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('folder_no_access',  baseName)]);
					return;
				}
				let parentPath = path.dirname(dirPath);
				let filePath = path.join(parentPath, `footnotes-${baseName}.json`);
				if (!fs.existsSync(filePath)) {
					reject([this.getError('folder_not_exists', filePath)]);
					return;
				}
				this.footnotes.length = 0;
				fs.readFile(filePath, (errFile, buf) => {
					if (errFile) {
						reject([errFile]);
						return;
					}
					const content = buf.toString();
					try {
						const obj = JSON.parse(content);
						this.footnotes = obj.content;
						resolve(null);
					} catch (err) {
						reject([err]);
					}
				});
			});
		});
	};

	/**
	 * Writes references (footnotes) in a file called `footnotes-book-xx.json` 
	 * in the parent folder of the one passed by param.
	 * Also saves info of position of eachsub-reference to be able to apply
	 * to other translations.
	 * @param {string} dirPath Folder path.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	writeRefsToJSON = (dirPath) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('folder_no_access',  baseName)]);
					return;
				}
				let parentPath = path.dirname(dirPath);
				let filePath = path.join(parentPath, `footnotes-${baseName}.json`);
				let result = {
					content: []
				};
				let n, paper, paperFNs, footnotes, errors = [];
				for (n = 0; n < 197; n++) {
					paper = this.papers.find(p => p.paper_index === n);
					if (!paper) {
						continue;
					}
					footnotes = {
						texts: [],
						bible_refs: [],
						locations: []
					}
					paperFNs = {
						paperIndex: n,
						footnotes: footnotes
					};
					result.content.push(paperFNs);
					paper.sections.forEach(section => {
						section.pars.forEach(par => {
							try {
								const ff = this.getFootnotes(par.par_ref);
								ff.forEach(f => {
									const sff = this.getSubFootnotes([f]);
									if (sff.length > 0) {
										let texts = [];
										sff.forEach(sf => {
											if (texts.indexOf(sf[0]) === -1) {
												texts.push(sf[0]);
											}
										});
										let bible_refs = texts.map(t => {
											return sff
												.filter(sf => sf[0] === t)
												.map(sf => sf[1]).join('; ');
										});
										footnotes.texts.push(texts);
										footnotes.bible_refs.push(bible_refs);
									}
								});
								let locations = this.getRefsLocations(
									par.par_content, paper.footnotes.length)
									.map(loc => par.par_ref + '#' + loc);
								extendArray(footnotes.locations, locations);
							} catch (e) {
								errors.push(e);
							}
						})
					});
				}
				if (errors.length > 0) {
					reject(errors);
					return;
				}
				fs.writeFile(filePath, JSON.stringify(result, null, 4), 'utf-8', 
					(err) => {
					if (err) {
						reject([err]);
						return;
					}
					resolve(null);
				});
			});
		});
	};

	/**
	 * Writes in a file called `warnings.json` the found warnings.
	 * Warnings are not errors but things that require a review.
	 * @param {string} dirPath Folder path.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * error in reject function.
	 */
	writeWarnings = (dirPath) => {
		const baseName = path.basename(dirPath);
		const filePath = path.join(dirPath, 'warnings.json');
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('folder_no_access', baseName)]);
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
	 * Returns an array with position indexes of the references in sentences
	 * separated by periods inside the paragraph.
	 * @param {string} content Paragraph content.
	 * @param {number} length Max number of footnotes of the paper, that represents
	 * the max number to search a reference.
	 * @return {number[]} Returns -1 when periods are not found.
	 */
	getRefsLocations = (content, length) => {
		let indexes = [], index;
		const ii = getAllIndexes(content, '.');
		
		for (let i = 0; i < length; i++) {
			index = content.indexOf(`{${i}}`);
			if (index != -1) {
				if (ii.length === 0) {
					indexes.push(-1);
				} else {
					indexes.push(ii.findIndex(e => e > index));
				}
			}
		}
		return indexes;
	};

	/**
	 * Updates references (footnotes) using the read through `readRefsFromJSON` 
	 * and that are in variable footnotes.
	 * @returns {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	updateRefs = () => {
		return new Promise((resolve, reject) => {
			let errors = [];
			//Loop in each paper
			this.papers.forEach(paper => {
				const index = paper.paper_index;
				const paperFootnotes = this.footnotes
					.find(f => f.paperIndex === index);
				if (!paperFootnotes) {
					return;
				}
				const texts = paperFootnotes.footnotes.texts;
				const bible_refs = paperFootnotes.footnotes.bible_refs;
				const locations = paperFootnotes.footnotes.locations;
				if (texts.length != bible_refs.length || 
					texts.length != locations.length) {
					errors.push(this.getError('book_invalid_number', index));
					return;
				}
				paper.footnotes = texts.map((t, i) => {
					return t
						.map((title, j) => `*${title}*: ${bible_refs[i][j]}.`)
						.join(' ');
				});
				locations.forEach((location, i) => {
					const par_ref = location.split('#')[0];
					const sentenceIndex = parseInt(location.split('#')[1]);
					let par = null;
					paper.sections.find(section => {
						const p = section.pars.find(pp => pp.par_ref === par_ref);
						if (p) {
							par = p;
						}
						return (p != undefined);
					});
					if (!par) {
						errors.push(this.getError('book_par_not_found', par_ref, index));
						return;
					}
					const ii = getAllIndexes(par.par_content, '.');
					if (sentenceIndex != -1 && ii.length >= sentenceIndex) {
						const pos = ii[sentenceIndex];
						par.par_content = par.par_content.substring(0, pos) +
							`{${i}}` + par.par_content.substring(pos);
					} else {
						par.par_content = par.par_content + `{${i}}`;
					}
				});
			});
			if (errors.length > 0) {
				reject(errors);
				return;
			}
			resolve(null);
		});
	};

	//***********************************************************************
	// HTML
	//***********************************************************************

	/**
	 * Reads `The Urantia Book` from a folder with files in HTML format.
	 * @param {string} dirPath Folder path.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	readFromHTML = (dirPath) => {
		return readFrom(dirPath, '.html;.htm', this.clear, this.readFileFromHTML, this);
	};

	/**
	 * Reads a paper from `The Urantia Book` from a file in HTML format.
	 * @param {string} filePath File path.
	 * @returns {Promise} Promise that returns an object with paper content 
	 * in resolve function or an array of errors in reject function.
	 */
	readFileFromHTML = (filePath) => {
		const baseName = path.basename(filePath);
		const dirPath = path.dirname(filePath);
		const ext = path.extname(filePath);
		const fname = baseName.replace(ext, '');
		const language = path.basename(dirPath).replace('book-', '');
		const paperIndex = parseInt(fname.substring(fname.length - 3));
		const config = this.HTMLconfigs
			.find(c => c.languages.indexOf(language) != -1);

		//Ignore HTML files that do not have paper number
		if (isNaN(paperIndex)) {
			return Promise.resolve(null);
		}

		return new Promise((resolve, reject) => {
			if (this.onProgressFn) {
				this.onProgressFn(baseName);
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
					const paperTitleQuery = config.paperTitle.replace(
						'{paperIndex}', paperIndex.toString());
					const paperTitle = $(paperTitleQuery).text();
					const secs = $(config.secs);
					const pars = $(config.pars);

					let paper = {
						paper_index: paperIndex,
						sections: [],
						footnotes: [],
						paper_title: paperTitle
					};
					let i = 0, p, removeErr, text, pId, sec, pdata;
					//Add section 0 if it exists
					paper.sections.push({
						section_index: 0,
						section_ref: `${paperIndex}:0`,
						pars: []
					});
					//Add the rest of sections
					extendArray(paper.sections, 
						this.getSectionsFromHTML($, secs, config, paperIndex));
					//Add paragraphs
					for (i = 0; i < pars.length; i++) {
						p = pars[i];
						pdata = this.getParFromHTML($, p, config, paperIndex);
						if (!pdata) {
							continue;
						}
						pId = this.getRef(pdata.par_ref);
						sec = paper.sections.find(s => s.section_index === pId[1]);
						if (!sec) {
							extendArray(errors, 
								this.getError('book_section_not_found', pId[1], -999));
							continue;
						}
						text = $(p).html();
						text = text.replace(`<sup>(${pdata.par_pageref})</sup>`,'');
						text = text.replace(`<sup>${pdata.par_ref}</sup>`, '');
						removeErr = [];
						text = this.modifyTagsInHTML(text, removeErr);
						if (removeErr.length > 0) {
							extendArray(errors, removeErr.map(e =>
								this.getError(e, baseName, -999)));
						}
						pdata.par_content = text;
						sec.pars.push(pdata);
					};

					if (errors.length > 0) {
						reject(errors);
						return;
					}

					//Remove section 0 if it is empty
					sec = paper.sections.find(s => s.section_index === 0);
					if (sec.pars.length === 0) {
						paper.sections.splice(paper.sections.indexOf(sec), 1);
					}

					this.papers.push(paper);
					resolve(paper);
				} catch (err) {
					reject([err]);
				}
			});
		});
	};

	/**
	 * Returns an array of section objects from the given HTML. Section zero
	 * is not included.
	 * @param {Object} $ Object with the document as a jQuery object.
	 * @param {NodeList} nodes List of HTML nodes to use.
	 * @param {Object} config Config to use.
	 * @param {int} paperIndex Paper index.
	 * @return {Object[]}
	 */
	getSectionsFromHTML = ($, nodes, config, paperIndex) => {
		let i, node, c, a, result = [], id, title;
		for (i = 0; i < nodes.length; i++) {
			node = nodes[i];
			c = node.children;
			if (config.name === 'generic') {
				a = node.attribs;
				id = parseInt(a.id.split('_')[1]);
				title = c[0].data;
			} else {
				id = i + 1;
				title = $(node).html();
				if (config.name === 'greek' || config.name === 'farsi,korean') {
					title = removeHTMLTags(title, HSep.ANCHOR_START, HSep.ANCHOR_END, 
						false, []);
				}
			}
			title = replaceTags(title, HSep.ITALIC_START, HSep.ITALIC_END, 
				'*', '*', []);
			result.push({
				section_index: id,
				section_ref: `${paperIndex}:${id}`,
				section_title: title,
				pars: []
			});
		};
		return result;
	};

	/**
	 * Returns data from a paragraph from an HTML node with the paragraph.
	 * Returns null if it is not a valid paragraph and must be ignored.
	 * @param {Object} $ Object with the document as a jQuery object.
	 * @param {Node} node HTML node.
	 * @param {Object} config Config to use.
	 * @param {int} paperIndex Paper index.
	 * @return {Object}
	 */
	getParFromHTML = ($, node, config, paperIndex) => {
		const a = node.attribs, c = node.children;
		let pId, sId, pindex = 0, ref, pref, n;
		if (config.name === 'generic') {
			if (!a || !a.id || a.id[0] != 'U' || c.length === 0 || 
				c[0].type != 'tag' || c[0].name != 'small') {
				return null;
			}
			pId = a.id.split('_');
			sId = pId[1];
			pindex = pId[2];
			pref = extractStr(c[0].children[0].data, '(', ')');
		} else {
			pindex = $(node).prevUntil('h4,div:has(h1,h3,h4)').length + 1;
			sId = $(node).prevAll('h4,div:has(h4)').length;
			pref = '';
			n = $(node).find('sup').filter((i, e)=> $(e).text().indexOf('(')!=-1);
			if (n.length > 0) {
				pref = n.text().replace('(', '').replace(')', '');
			}
		}

		ref = `${paperIndex}:${sId}.${pindex}`;
		return {
			par_ref: ref,
			par_pageref: pref
		};
	};

	/**
	 * Modifies special tags in an HTML content.
	 * @param {string} text Text with HTML tags.
	 * @param {string[]} errs Array for error messages.
	 * @return {string}
	 */
	modifyTagsInHTML = (text, errs) => {
		text = removeHTMLTags(text, HSep.SMALL_START, HSep.SMALL_END, 
			true, errs);
		text = replaceTags(text, HSep.ITALIC_START, HSep.ITALIC_END, '*', '*', 
			errs);
		text = replaceTags(text, HSep.SMALLCAPS_START, HSep.SMALLCAPS_END, 
			'$', '$', errs);
		text = replaceTags(text, HSep.UNDERLINE_START, HSep.UNDERLINE_END, 
			'|', '|', errs);
		text = replaceTags(text, HSep.UNDERLINE2_START, HSep.UNDERLINE2_END, 
			'|', '|', errs);
		text = replaceTags(text, HSep.RIGHT_START, HSep.RIGHT_END, '', '', errs);
		text = removeHTMLTags(text, HSep.SPAN_START, HSep.SPAN_END, false, errs);
		text = removeHTMLTags(text, HSep.ANCHOR_START, HSep.ANCHOR_END, false, 
			errs);
		text = text.trim();
		return text;
	};

	//***********************************************************************
	// Wiki HTML
	//***********************************************************************

	/**
	 * Writes `The Urantia Book` in HTML format that can be imported in Wiki.js, 
	 * each paper a file. It requires reading previously from any format.
	 * @param {string} dirPath Folder path.
	 * @param {?TopicIndex} topicIndex An optional Topic Index.
	 * @param {?TopicIndex} topicIndexEN An optional Topic Index in english. If
	 * previous param is english then this is not required. If it is not english
	 * then this param is required.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	writeToWikiHTML = (dirPath, topicIndex, topicIndexEN) => {
		return this.writeTo(dirPath, 'html', topicIndex, topicIndexEN);
	};

	/**
	 * Writes a paper of `The Urantia Book` in HTML format that can be imported 
	 * in Wiki.js.
	 * @param {string} filePath Output file.
	 * @param {Object} paper JSON object with the paper.
	 * @param {?TopicIndex} topicIndex An optional Topic Index.
	 * @param {?TopicIndex} topicIndexEN An optional Topic Index in english. If
	 * previous param is english then this is not required. If it is not english
	 * then this param is required.
	 * @return {Promise} Promise that returns null in resolve function and an
	 * error in reject function.
	 */
	writeFileToWikiHTML = (filePath, paper, topicIndex, topicIndexEN) => {
		return new Promise((resolve, reject) => {
			//Checks
			let error = null;
			const wfootnotes = (Array.isArray(paper.footnotes) &&
				paper.footnotes.length > 0 ?
				this.footnotesToWikiHTML(paper.footnotes) : []);
			const wfnErr = wfootnotes
				.map((wf,i) => wf === 'FOOTNOTE ERROR' ? i : null)
				.filter(i => i != null);
			if (!Array.isArray(paper.sections)) {
				error = this.getError('book_no_sections', filePath);
			} else if (paper.sections.find(s => s.section_ref == null)) {
				error = this.getError('book_section_no_reference', filePath);
			} else if (paper.sections.find(s => !Array.isArray(s.pars))) {
				error = this.getError('book_section_no_pars', filePath);
			} else if (!paper.paper_title) {
				error = this.getError('book_paper_no_title', filePath);
			} else if (wfnErr.length > 0) {
				error = this.getError('book_error_footnotes', filePath, 
					wfnErr.join(','));
			}
			if (error) {
				reject(error);
				return;
			}

			//Header
			let html = '', error_par_ref;
			const prev = paper.paper_index - 1;
			const next = paper.paper_index + 1;
			const prevPaper = this.papers.find(p=>p.paper_index === prev);
			const nextPaper = this.papers.find(p=>p.paper_index === next);
			const prevLink = this.getWikiHTMLLink(this.getTitle(prevPaper), prev);
			const nextLink = this.getWikiHTMLLink(this.getTitle(nextPaper), next);
			const indexLink = this.getWikiHTMLLink('bookIndexName');
			const tpath = `/${this.language}/topic/`;
			const tiOK = (topicIndex && (this.language === 'en' ||
				(this.language != 'en' && topicIndexEN)));
			const tiEN = (this.language === 'en' ? topicIndex : topicIndexEN);

			const title = this.getTitle(paper, true);
			const date = new Date();
			const datestr = 
				`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}` +
				`T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}Z`;
			const colorBg = 'rgb(255, 255, 255);';
			const borderB = '0.2em solid rgb(200, 204, 209);';
			const borderO = '1px solid rgb(200, 204, 209);';
			const styleTable = `background-color:${colorBg}` +
				`border-bottom:${borderB}` +
				`border-left:${borderO}` +
				`border-right:${borderO}` +
				`border-top:${borderO}` +
				`width: 100%;`;
			const styleCell = `padding:0.4em 0.5em;` +
				`border:${borderO}`;

			const comment = `<!--\r\n` +
				`title: ${title}\r\n` +
				`description: \r\n` +
				`published: true\r\n` +
				`date: ${datestr}\r\n` +
				`tags: \r\n` +
				`editor: ckeditor\r\n` +
				`dateCreated: ${datestr}\r\n` +
				`-->\r\n`;
			const header = 
				`<figure class="table">\r\n` +
				`  <table style="${styleTable}">\r\n` +
				`    <tbody>\r\n` +
				`      <tr>\r\n` +
				`        <td style="${styleCell}">${prevLink}</td>\r\n` +
				`        <td style="${styleCell}">${indexLink}</td>\r\n` +
				`        <td style="${styleCell}text-align: right;">${nextLink}</td>\r\n` +
				`      </tr>\r\n` +
				`    </tbody>\r\n` +
				`  </table>\r\n` +
				`</figure>\r\n`;

			html += comment;
			html += '\r\n';
			html += header;
			html += `<h1>${title}</h1>\r\n`;

			//Sections & paragraphs
			let footnoteIndex = 0, fni;
			let replaceErr = [];
			let topicErr = [];
			paper.sections.forEach(section => {
				let stitle;
				if (section.section_title) {
					stitle = this.replaceSpecialChars(section.section_title)
						.toUpperCase();
					html += `<h2 id="p${section.section_index}"> ${stitle} </h2>\r\n`;
				} else {
					html += `<span id="p${section.section_index}"></span>\r\n`;
				}

				section.pars.forEach(par => {
					let pcontent, aref, topics, di, si, pi;
					const all_items = [];
					if (!par.par_ref || !par.par_content) {
						error = 'book_par_no_refcontent';
						return;
					}
					try {
						aref = this.getRef(par.par_ref);
					} catch (err) {
						error_par_ref = par.par_ref;
						error = 'book_no_valid_reference';
					}
					if (!aref) {
						return;
					}
					di = aref[0];
					si = aref[1];
					pi = aref[2];
					html += `<p id="p${si}_${pi}">`;
					html += `<sup><small>${par.par_ref}</small></sup>  `;

					replaceErr = [];
					pcontent = replaceTags(par.par_content, '*', '*', 
						'<i>', '</i>', replaceErr);
					pcontent = replaceTags(pcontent, '$', '$', 
						'<span style="font-variant: small-caps;">', '</span>',
						replaceErr);
					if (replaceErr.length > 0) {
						error = replaceErr[0];
					}
					if (tiOK) {
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
							const topicEN = tiEN.topics.find(t => {
								return (t.filename === topic.filename &&
									t.fileline === topic.fileline);
							});
							if (!topicEN) {
								topicErr.push(this.getError('topic_EN_not_found',
									topic.name));
								return;
							}
							const tnameEN = topicEN.name.replace(/\s/g, '_');
							let names = [topic.name.split('(')[0].trim()];
							extendArray(names, topic.altnames);
							const links = names.map(name => {
								return `<a href="${tpath}${tnameEN}">${name}</a>`;
							});
							extendArray(all_items, names.map((n,i) => {
								return {
									name: n,
									link: links[i]
								}
							}));
							const modified = replaceWords(names, links, pcontent);
							if (pcontent === modified) {
								this.addWarning('book_item_no_found',
									topic.name, par.par_ref);
							}
						});
						if (all_items.length > 0) {
							//Order using longest topic names before
							all_items.sort((a,b) => b.name.length - a.name.length);
							pcontent = replaceWords(all_items.map(i=>i.name),
								all_items.map(i=>i.link), pcontent);
						}
					}
					while (wfootnotes.length > 0 && 
						footnoteIndex < wfootnotes.length &&
						pcontent.indexOf(`{${footnoteIndex}}`) != -1) {
						fni = footnoteIndex + 1;
						pcontent = pcontent.replace(`{${footnoteIndex}}`,
							`<sup id="cite${fni}">` +
							`<a href="#fn${fni}">[${fni}]</a>` +
							`</sup>`);
						footnoteIndex++;
					}
					html += `${pcontent}</p>\r\n`;
				});
			});

			//Footer
			html += '<br/>\r\n'
			html += header;

			//References section
			if (wfootnotes.length > 0) {
				html += `<h2>${Strings['topic_references'][this.language]}</h2>\r\n`;
				html += '<div style="column-width: 30em;">\r\n<ol>\r\n';
				wfootnotes.forEach(f => html += '  ' + f);
				html += '</ol>\r\n</div>\r\n';
			}
			
			if (error) {
				reject(this.getError(error, filePath, error_par_ref));
				return;
			} else if (topicErr.length > 0) {
				reject(new Error(topicErr.map(e => e.message).join(', ')));
				return;
			}
			fs.writeFile(filePath, html, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	/**
	 * Converts the array of footnotes to Wiki HTML, the format for Wiki.js.
	 * @param {Array.<string>} footnotes Array of footnotes.
	 * @return {Array.<string>}
	 */
	footnotesToWikiHTML = (footnotes) => {
		return footnotes.map((f, n) => {
			let html, parts, text, text2, fs, ab;
			parts = f.split('*').filter(n => n.trim() != '');
			if (parts.length === 0 || parts.length % 2 != 0) {
				return 'FOOTNOTE ERROR';
			}
			html = `<li id="fn${n+1}"><a href="#cite${n+1}">↑</a>`;
			for (let p = 0; p < parts.length; p = p + 2) {
				text = parts[p];
				html += ` <i>${text}</i>: `;

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
					let chapter = null, vers = null, ver = null, ref = null, 
						path = null;
					let ab2 = this.findAbr(fss);
					if (ab2) {
						ab = ab2;
						ref = fss.substring(ab.length).trim();
					} else {
						ref = fss;
					}
					if (ab && ref) {
						path = BibleAbbs[this.language][ab][1];
						if (ref.indexOf(':')) {
							chapter = ref.substring(0, ref.indexOf(':'));
							vers = ref.substring(ref.indexOf(':') + 1);
							ver = vers.replace(/[-/,]/g, '|').split('|')[0];
							if (ver === '') {
								ver = '1';
							}
						}
						html += (chapter && vers && ver ?
							`<a href="${path}/${chapter}#v${ver}">` +
								`${ab} ${chapter}:${vers}` +
							`</a>` : 
							`<a href="${path}/1">` +
								`${ab} 1` +
							`</a>`);
						html += (i != fs.length - 1 ? '; ' : '. ');
					}
				});
			}
			html += '</li>\r\n';
			return html;
		});
	};

	/**
	 * Returns the HTML fragment with a link to a document/section/paragraph
	 * in a Wiki.js. If text = 'bookIndexName' returns the link to generic index.
	 * @param {string} text Text for the link.
	 * @param {?number} paper_index Optional paper index.
	 * @param {?number} section_index Optional section index.
	 * @param {?number} par_index Optional paragraph index.
	 * @return {string}
	 */
	getWikiHTMLLink = (text, paper_index, section_index, par_index) => {
		par_index = (par_index != undefined ? par_index : 1);
		const bookNameEN = Strings['bookName'].en.replace(/\s/g, '_');
		// const paperAbbEN = Strings['bookPaperAbb'].en;
		const indexName = Strings['bookIndexName'][this.language];
		const indexNameEN = Strings['bookIndexName'].en;
		let href = `/${this.language}/${bookNameEN}/`;
		if (text == 'bookIndexName' || paper_index == undefined) {
			href += `${indexNameEN}`;
			return `<a href="${href}">${indexName}</a>`;
		}
		const stri = (paper_index > 99 ? `${paper_index}` : 
			(paper_index > 9 ? `0${paper_index}` : `00${paper_index}`));
		// href += `${paperAbbEN}_${stri}`;
		href += `${stri}`;
		if (section_index != undefined) {
			href += `#p${section_index}_${par_index}`;
		}
		return `<a href="${href}">${text}</a>`;
	};

	//***********************************************************************
	// Wiki Text
	//***********************************************************************

	/**
	 * Writes `The Urantia Book` in Wiki Text format, each paper a file.
	 * It requires reading previously from any format.
	 * @param {string} dirPath Folder path.
	 * @param {?TopicIndex} topicIndex An optional Topic Index.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	writeToWikiText = (dirPath, topicIndex) => {
		return this.writeTo(dirPath, 'wiki', topicIndex);
	};

	/**
	 * Writes a paper of `The Urantia Book` in Wiki Text format.
	 * @param {string} filePath Output file.
	 * @param {Object} paper JSON object with the paper.
	 * @param {?TopicIndex} topicIndex An optional Topic Index.
	 * @return {Promise} Promise that returns null in resolve function and an
	 * error in reject function.
	 */
	writeFileToWikiText = (filePath, paper, topicIndex) => {
		return new Promise((resolve, reject) => {
			//Checks
			let error = null;
			const wfootnotes = (Array.isArray(paper.footnotes) &&
				paper.footnotes.length > 0 ?
				this.footnotesToWikiText(paper.footnotes) : []);
			const wfnErr = wfootnotes
				.map((wf,i) => wf === 'FOOTNOTE ERROR' ? i : null)
				.filter(i => i != null);
			if (!Array.isArray(paper.sections)) {
				error = this.getError('book_no_sections', filePath);
			} else if (paper.sections.find(s => s.section_ref == null)) {
				error = this.getError('book_section_no_reference', filePath);
			} else if (paper.sections.find(s => !Array.isArray(s.pars))) {
				error = this.getError('book_section_no_pars', filePath);
			} else if (!paper.paper_title) {
				error = this.getError('book_paper_no_title', filePath);
			} else if (wfnErr.length > 0) {
				error = this.getError('book_error_footnotes', filePath, 
					wfnErr.join(','));
			}
			if (error) {
				reject(error);
				return;
			}

			//Header
			let wiki = '', ptitle, error_par_ref;
			const end = '\r\n\r\n';
			const eldu = Strings['bookName'][this.language];
			const abb = Strings['bookAbb'][this.language];
			const docAbb = Strings['bookPaperAbb'][this.language];
			const indexName = Strings['bookIndexName'][this.language];
			const prev = paper.paper_index - 1;
			const next = paper.paper_index + 1;
			let docPrev = (paper.paper_index === 0 ? null :
				this.papers.find(p=>p.paper_index === prev).paper_title);
			let docNext = (paper.paper_index === 196 ? ' ' :
				this.papers.find(p=>p.paper_index === next).paper_title);
			docPrev = (docPrev ? `[[${eldu} ${docAbb} ${prev}|${docPrev}]]` : ' ');
			docNext = (docNext ? `[[${eldu} ${docAbb} ${next}|${docNext}]]` : ' ');

			let header = '\r\n{| class="wikitable" style="width:100%;"\r\n' +
				`| ${docPrev} || [[${eldu} ${indexName}|${indexName}]] ||` +
				` ${docNext}\r\n|}${end}`;

			ptitle = this.replaceSpecialChars(paper.paper_title);
			ptitle = ptitle.toUpperCase();
			wiki += '<div class="noautonum">__TOC__</div>\r\n';
			wiki += header;
			wiki += `== ${ptitle} ==${end}`;
			
			//Sections & paragraphs
			let footnoteIndex = 0;
			let replaceErr = [];
			paper.sections.forEach(section => {
				let ref, anchor, stitle;
				ref = section.section_ref.replace(':', '_');
				anchor = `{{anchor|${abb}_${ref}}}`;
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
						error = 'book_par_no_refcontent';
						return;
					}
					try {
						aref = this.getRef(par.par_ref);
					} catch (err) {
						error_par_ref = par.par_ref;
						error = 'book_no_valid_reference';
					}
					if (!aref) {
						return;
					}
					di = aref[0];
					si = aref[1];
					pi = aref[2];
					pref = par.par_ref.replace(/[:\.]/g,'_');
					supref = `<sup><small>${par.par_ref}</small></sup>`;
					panchor = `{{anchor|${abb}_${pref}}}`;
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
								this.addWarning('book_item_no_found',
									topic.name, par.par_ref);
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

			//Footer
			wiki += header;

			//References section
			if (wfootnotes.length > 0) {
				wiki += `== ${Strings['topic_references'][this.language]} ==` +
					`${end}<references>\r\n`;
				wfootnotes.forEach(f => wiki += f);
				wiki += '</references>';
			}
			if (error) {
				reject(this.getError(error, filePath, error_par_ref));
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
	 * Writes index pages of `The Urantia Book` in Wiki Text format.
	 * The name of resulting files are `El_Libro_de_Urantia_Indice.wiki`
	 * and `El_Libro_de_Urantia_Indice_extendido.wiki` or english equivalents.
	 * @param {string} dirPath Folder path.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * error in reject function.
	 */
	writeIndexToWikiText = (dirPath) => {
		return new Promise((resolve, reject) => {
			const lu = Strings['bookName'][this.language].replace(/\s/g, '_');
			const abb = Strings['bookAbb'][this.language];
			const pabb = Strings['bookPaperAbb'][this.language];
			const ind = Strings['bookIndexName'][this.language].replace(/\s/g, '_');
			const eind = Strings['bookExtIndexName'][this.language].replace(/\s/g, '_');
			const part0 = Strings['bookPart0'][this.language].toUpperCase();
			const part1 = Strings['bookPart1'][this.language].toUpperCase();
			const part2 = Strings['bookPart2'][this.language].toUpperCase();
			const part3 = Strings['bookPart3'][this.language].toUpperCase();
			const part4 = Strings['bookPart4'][this.language].toUpperCase();
			const filePath1 = path.join(dirPath, `${lu}_${ind}.wiki`);
			const filePath2 = path.join(dirPath, `${lu}_${eind}.wiki`);
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
					error = 'book_no_sections';
				} else if (paper.sections.find(s => s.section_ref == null)) {
					error = 'book_section_no_reference';
				} else if (!paper.paper_title) {
					error = 'book_paper_no_title';
				}

				if (error) {
					errs.push(this.getError(error, filePath1));
					return;
				}

				let part = null;
				title = this.replaceSpecialChars(title);

				if (i === 0) {
					part = `== ${part0} ==`;
				} else if (i === 1) {
					part = `== ${part1} ==`;
				} else if (i === 32) {
					part = `== ${part2} ==`;
				} else if (i === 57) {
					part = `== ${part3} ==`;
				} else if (i === 120) {
					part = `== ${part4} ==`;
				}
				if (part) {
					wiki1 += `${part}\r\n\r\n`;
					wiki2 += `${part}\r\n\r\n`;
				}
				
				wiki1 += `* [[${lu}_${pabb}_${i}|${title}]]\r\n`;
				wiki2 += `=== ${title} ===\r\n\r\n`;

				paper.sections.forEach((section, n) => {
					const ref = section.section_ref.replace(':', '_');
					if (section.section_title) {
						const stitle = this.replaceSpecialChars(section.section_title);
						wiki2 += `* [[${lu}_${pabb}_${i}#${abb}_${ref}|${stitle}]]\r\n`;
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
	 * Converts the array of footnotes to Wiki Text.
	 * @param {Array.<string>} footnotes Array of footnotes.
	 * @return {Array.<string>}
	 */
	footnotesToWikiText = (footnotes) => {
		return footnotes.map((f, n) => {
			let wiki, parts, text, text2, fs, ab;
			parts = f.split('*').filter(n => n.trim() != '');
			if (parts.length === 0 || parts.length % 2 != 0) {
				return 'FOOTNOTE ERROR';
			}
			wiki = `<ref name="n${n}">`;
			for (let p = 0; p < parts.length; p = p + 2) {
				text = parts[p];
				wiki += `''${text}'':`;

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
					let chapter = null, vers = null, ref = null;
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
						wiki += (chapter && vers ? 
							` {{lib|${ab}|${chapter}|${vers}}}` : 
							` {{lib|${ab}|1}}`);
						wiki += (i != fs.length - 1 ? ';' : '. ');
					}
				});
			}
			wiki += '</ref>\r\n';
			return wiki;
		});
	};

	//***********************************************************************
	// Wiki XML
	//***********************************************************************

	/**
	 * Writes `The Urantia Book` in XML format of DataTransfer extension for
	 * MediaWiki, each paper in a file if merge is false or in one file
	 * called `wiki_xml_import.xml` if not.
	 * @deprecated It is not recommended to use DataTransfer and use Wiki format
	 * with mantenaince script `importTextFiles.php`.
	 * @param {string} dirPath Output folder.
	 * @param {?boolean} merge If join all output files or not. Fase by default.
	 * @return {Promise} Promise that returns null in resolve function and an
	 * array of errors in reject function.
	 */
	writeToWikiXML = (dirPath, merge) => {
		const baseName = path.basename(dirPath);
		const filePath = path.join(dirPath, 'wiki_xml_import.xml');
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('folder_no_access', baseName)]);
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
	 * Writes one or more papers of `The Urantia Book` in XML format for 
	 * DataTransfer extension of MediaWiki.
	 * @deprecated It is not recommended to use DataTransfer and use Wiki format
	 * with the maintenance script `importTextFiles.php`.
	 * @param {string} filePath Output file.
	 * @param {Array.<Object>} papers Array of JSON objects with papers.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * error in reject function.
	 */
	writeFileToWikiXML = (filePath, papers) => {
		return new Promise((resolve, reject) => {
			const abb = Strings['bookAbb'][this.language];
			const lu = Strings['bookName'][this.language].replace(/\s/g, '_');
			const pabb = Strings['bookPaperAbb'][this.language];

			let xml = '<Pages>\r\n';
			let error;

			papers.forEach(paper => {
				

				if (!Array.isArray(paper.sections)) {
					error = 'book_no_sections';
				} else if (paper.sections.find(s => s.section_ref == null)) {
					error = 'book_section_no_reference';
				} else if (paper.sections.find(s => !Array.isArray(s.pars))) {
					error = 'book_section_no_pars';
				} else if (!paper.paper_title) {
					error = 'book_paper_no_title';
				}

				if (error) {
					reject(this.getError(error, filePath));
					return;
				}

				xml += `<Page Title="${lu}_${pabb}_${paper.paper_index}">\r\n`;
				
				const section0 = paper.sections.find(s => s.section_index === 0);
				const ptitle = paper.paper_title.toUpperCase();
				if (!section0) {
					xml += `<Free_Text>== ${ptitle} ==</Free_Text>\r\n`;
				}

				const wfootnotes = (Array.isArray(paper.footnotes) &&
					paper.footnotes.length > 0 ?
					this.footnotesToWikiXML(paper.footnotes, true) : []);
				const wfnErr = [];
				wfootnotes.forEach((wf, i) => {
					if (wf === 'FOOTNOTE ERROR') {
						wfnErr.push(i);
					}
				});
				if (wfnErr.length > 0) {
					reject(this.getError('book_error_footnotes', filePath, 
						wfnErr.join(',')));
					return;
				}
				let footnoteIndex = 0;
				
				paper.sections.forEach(section => {
					let ref, anchor, stitle;
					ref = section.section_ref.replace(':', '_');
					anchor = '<Template Name="anchor">' +
						`<Field Name="1">${abb}_${ref}</Field>` +
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
							error = 'book_par_no_refcontent';
							return;
						}
						pref = par.par_ref.replace(/[:\.]/g,'_');
						panchor = '<Template Name="anchor">' +
							`<Field Name="1">${abb}_${pref}</Field>` +
							'</Template>';
						pcontent = par.par_content.replace(/\*/g, '\'\'');
						while (wfootnotes.length > 0 && 
							footnoteIndex < wfootnotes.length &&
							pcontent.indexOf(`{${footnoteIndex}}`) != -1) {
							pcontent = pcontent.replace(`{${footnoteIndex}}`,
								`&lt;ref name="n${footnoteIndex}"/&gt;`);
							footnoteIndex++;
						}

						xml += `${panchor}<Free_Text>&lt;p&gt;${pcontent}` +
							`&lt;/p&gt;</Free_Text>\r\n`;
					});
				});
				if (wfootnotes.length > 0) {
					xml += `<Free_Text>== ` +
						`${Strings['topic_references'][this.language]} ` +
						`==</Free_Text>\r\n`;
					xml += `<Free_Text>&lt;references&gt;</Free_Text>\r\n`;
					wfootnotes.forEach(f => xml += f);
					xml += '<Free_Text>&lt;/references&gt;</Free_Text>\r\n'
				}
				xml += '</Page>\r\n';
			});

			xml += '</Pages>';

			if (error) {
				reject(this.getError(error, filePath));
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
	 * Converts the array of footnotes in Wiki XML format for MediaWiki DataTransfer
	 * extension.
	 * @param {Array.<Object>} footnotes Array of footnotes.
	 * @return {string}
	 */
	footnotesToWikiXML = (footnotes) => {
		return footnotes.map((f, n) => {
			let wiki, parts, text, text2, fs, ab;
			parts = f.split('*').filter(n => n.trim() != '');
			if (parts.length === 0 || parts.length % 2 != 0) {
				return 'FOOTNOTE ERROR';
			}
			wiki = `<Free_Text>&lt;ref name="n${n}"&gt;</Free_Text>`;
			
			for (let p = 0; p < parts.length; p = p + 2) {
				text = parts[p];
				wiki += `<Free_Text>''${text}'':</Free_Text>`;

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
						wiki += ' <Template Name="lib">' +
							`<Field Name="1">${ab}</Field>`;
						wiki += (chapter && vers ?
							`<Field Name="2">${chapter}</Field>` +
							`<Field Name="3">${vers}</Field>` +
							'</Template>' :
							`<Field Name="2">1</Field>` +
							'</Template>');
						wiki += '<Free_Text>' + 
							(i != fs.length - 1 ? ';' : '. ') +
							'</Free_Text>';
					}
				});
			}
			wiki += '<Free_Text>&lt;/ref&gt;</Free_Text>\r\n';
			return wiki;
		});
	};


	//***********************************************************************
	// Help functions
	//***********************************************************************

	/**
	 * Returns the title of a paper.
	 * @param {?Object} paper Paper.
	 * @param {?boolean} upper If return in upper case or not.
	 * @returns {string}
	 */
	getTitle = (paper, upper) => {
		upper = (upper != undefined ? upper : false);
		if (!paper) {
			return ' ';
		}
		const paperWord = Strings['bookPaper'][this.language].toUpperCase();
		const t = paper.paper_title;
		const i = paper.paper_index;
		const tu = t.toUpperCase();
		return (tu.startsWith(paperWord) ? (upper ? tu : t) : 
			`${paperWord} ${i}. ${(upper ? tu : t)}`);
	};

	/**
	 * Gets the Bible abbreviation for a reference or null if not found.
	 * @param {string} content Bible reference.
	 * @return {?string}
	 */
	findAbr = (content) => {
		const abbs = Object.keys(BibleAbbs[this.language]);
		const abbs_filter = abbs.filter(ab => content.startsWith(ab));
		return (abbs_filter.length === 0 ? null :
			abbs_filter.reduce((a,b) => a.length > b.length ? a : b));
	};

	/**
	 * Returns an error.
	 * @param  {...any} params Params. First param must be a string or a template
	 * for the rest of the params.
	 * @returns {Error}
	 */
	getError = (...params) => {
		const msg = params[0];
		return new Error(
			strformat(Strings[msg][this.language], ...params.slice(1)));
	};

	/**
	 * Adds a warning to internal lst of warnings.
	 * @param  {...any} params Params. First param must be a string or a template
	 * for the rest of the params.
	 * @returns {Error}
	 */
	addWarning = (...params) => {
		const msg = params[0];
		this.warnings.push(
			strformat(Strings[msg][this.language], ...params.slice(1)));
	};

	/**
	 * Writes `The Urantia Book` in the giving format, each paper in a file.
	 * Requires previously to read the book in any format.
	 * @param {string} dirPath Folder path.
	 * @param {string} format Output format: `json`, `tex`, `wiki`, `html`.
	 * @param {?TopicIndex} topicIndex An optional Topic Index.
	 * @param {?TopicIndex} topicIndexEN An optional Topic Index in english. If
	 * previous param is english then this is not required. If it is not english
	 * then this param is required.
	 * @return {Promise} Promise that returns null in resolve function or
	 * an array of errors in reject function.
	 */
	writeTo = (dirPath, format, topicIndex, topicIndexEN) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('folder_no_access', baseName)]);
					return;
				}
				const promises = this.papers.map(paper => {
					const bookName = Strings['bookName'][this.language]
						.replace(/\s/g, '_');
					const paperAbb = Strings['bookPaperAbb'][this.language];
					const i = paper.paper_index;
					const stri = (i > 99 ? `${i}` : (i > 9 ? `0${i}` : `00${i}`));
					let filePath = path.join(dirPath, `Doc${stri}.${format}`);
					let p;
					if (format === 'json') {
						p = this.writeFileToJSON(filePath, paper);
					} else if (format === 'tex') {
						p = this.writeFileToLaTeX(filePath, paper);
					} else if (format === 'wiki') {
						filePath = path.join(dirPath, 
							`${bookName}_${paperAbb}_${i}.${format}`);
						p = this.writeFileToWikiText(filePath, paper, topicIndex);
					} else if (format === 'html') {
						filePath = path.join(dirPath, `${stri}.${format}`);
						p = this.writeFileToWikiHTML(filePath, paper, topicIndex,
							topicIndexEN);
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