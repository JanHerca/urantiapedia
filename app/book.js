//Reader/Writer for The Urantia Book in different formats (HTML/LaTeX/JSON/Wiki)

const {app} = require('electron').remote;
const LSep = require('./enums').LaTeXSeparator;
const HSep = require('./enums').HTMLSeparator;
const BibleAbbs = require('./abb');
const {extractStr, reflectPromise, extendArray, replaceTags, removeHTMLTags, 
	removeAllHTML, readFrom, readFile, replaceWords, getAllIndexes, strformat, 
	getWikijsHeader, getWikijsLinks, getWikijsBookLink, getWikijsBookCopyright, 
	writeHTMLToWikijs, getWikijsBookButtons, getWikijsBookTitles, getBookPaperTitle, 
	getError, replaceSpecialChars, replaceInverseSpecialChars, getWikijsBookParRef,
	getWikijsBookSectionTitles, getWikijsBookIndexLink, getWikijsBookIndexPartTitle,
	getWikijsBookIndexPartDesc, getWikijsBookIndexPaper} = require('./utils');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const Strings = require('./strings');

class Book {
	language = 'en';
	errorString = '{0}, línea {1}: {2}';
	pars = [];
	papers = [];
	corrections = [];
	onProgressFn = null;
	warnings = [];
	HTMLconfigs = [
		{
			name: 'generic',
			paperTitle: 'h1[id=U{paperIndex}_0_0]',
			secs: 'h2',
			pars: 'p',
			titlesFile: /02-.+html/,
			authors: [
				{item: 'tr', index: ['td a', 0], author: ['td', 2]},
				{item: 'p', index: ['span', 0], author: ['span', 2]}
			],
			languages: ['ar', 'bg', 'cs', 'da', 'de', 'en', 'es', 'es-1993', 
				'es-2021', 'et', 'fa', 'fi', 'fr', 'hu', 'id', 'it', 'ko',
				'lt', 'nl', 'pl', 'pt', 'ro', 'ru', 'sv', 'tr', 'zh']
		},
		{
			name: 'french-weiss',
			paperTitle: 'h1',
			secs: 'h2',
			sec_exception: '* * *',
			pars: 'p',
			titlesFile: /02-.+html/,
			languages: ['fr-weiss']
		},
		{
			name: 'greek',
			paperTitle: 'h3',
			secs: 'h4',
			sec_exception: '* * *',
			removeTagsInSecs: true,
			pars: 'p',
			titlesFile: /FM_Titles.htm/,
			languages: ['el']
		},
		{
			name: 'hebrew,japanese',
			paperTitle: 'h1:last',
			secs: 'h4',
			sec_exception: '* * *',
			pars: 'p',
			titlesFile: /FM_Titles.htm/,
			languages: ['he', 'ja']
		},
		{
			name: 'korean-2000',
			paperTitle: 'h3',
			secs: 'h4',
			removeTagsInSecs: true,
			sec_exception: '* * *',
			pars: 'p,div:has(h4)',
			pars_ok: 'p',
			titlesFile: /FM_Titles.htm/,
			languages: ['ko-2000']
		},
		{
			name: 'korean-urka',
			paperTitle: 'h1',
			secs: 'h2',
			sec_exception: '* * *',
			pars:'p',
			titlesFile: /FM_Titles.htm/,
			languages: ['ko-urka']
		},
		{
			name: 'korean-christian-minister',
			paperTitle: 'h1',
			secs: 'h2',
			removeTagsInSecs: true,
			sec_exception: '* * *',
			pars:'p',
			titlesFile: /FM_Titles.htm/,
			languages: ['ko-christian-minister']
		},
		{
			name: 'russian-usgny',
			paperTitle: 'h1',
			secs: 'h2',
			sec_exception: '* * *',
			pars:'p',
			titlesFile: /FM_Titles.htm/,
			languages: ['ru-usgny']
		},
		{
			name: 'spanish-angel-francisco-sanchez-escobar',
			paperTitle: 'h1',
			secs: 'h2',
			sec_exception: '* * *',
			pars:'p',
			titlesFile: /FM_Titles.htm/,
			languages: ['es-afse']
		},
		{
			name: 'croatian',
			paperTitle: 'h1',
			secs: 'h2',
			sec_exception: '* * *',
			pars:'p',
			titlesFile: /02-.+html/,
			languages: ['hr']
		}
	];
	footnotes = [];
	audio = ['en', 'es', 'fr', 'it', 'pt', 'de'];
	isMaster = false;
	year = 0;
	copyright = Strings.foundation['en'];
	label = '';
	colors = ['blue', 'purple', 'teal', 'deep-orange', 'indigo',
		'pink', 'blue-grey']; //Colors for up to 7 columns max

	setLanguage = (language) => {
		this.language = language;
	};

	setAsMaster = () => {
		this.isMaster = true;
	};

	setYear = (year) => {
		this.year = year;
	};

	setCopyright = (copyright) => {
		this.copyright = copyright;
	};

	setLabel = (label) => {
		this.label = label;
	};

	/**
	 * Checks if a book has the same papers, sections, and pars as current.
	 * @param {Book} book Another book to check.
	 * @return {Error[]}
	 */
	checkBook = (book) => {
		const errs = [];
		this.papers.forEach(paper => {
			const index = paper.paper_index;
			const paper2 = book.papers.find(p => p.paper_index === index);
			if (!paper2) {
				errs.push(this.getError('book_paper_not_found', index));
				return;
			}
			if (!Array.isArray(paper2.sections) || paper2.sections.length == 0) {
				errs.push(this.getError('book_no_sections', index));
				return;
			}
			paper.sections.forEach(section => {
				const sref = section.section_ref;
				const section2 = paper2.sections.find(s => s.section_ref === sref);
				if (!section2) {
					errs.push(this.getError('book_section_not_found', sref));
					return;
				}
				if (!Array.isArray(section2.pars) || section2.pars.length == 0) {
					errs.push(this.getError('book_section_no_pars', sref));
					return;
				}
				section.pars.forEach(par => {
					const pref = par.par_ref;
					const par2 = section2.pars.find(p => p.par_ref == pref);
					if (!par2) {
						errs.push(this.getError('book_par_not_found', pref, index));
						return;
					}
				});
			})
		});

		return errs;
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
	 * @param {string} ref UB reference.
	 * @return {Array.<number[]>}
	 */
	getRefs = (ref) => {
		let data, data2, data3, dd, paper_id, section_id, paper, section, min, max;
		const err = this.getError('book_wrong_reference', ref);
		data = ref.split(':');
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
	 * Returns an array of arrays with three values 
	 * [paper_id, section_id, par_id]
	 * with all paragraphs included in the references.
	 * For example '101' returns an array of all paragraphs of paper 101.
	 * For example '101:2.1,3-4' returns [[101,2,1], [101,2,3], [101,2,4]]
	 * Checks if references exist. References that fail are returned as nulls.
	 * References are not duplicated.
	 * @param {string[]} refs UB references.
	 * @return {Array.<number[]>}
	 */
	getArrayOfRefs = (refs) => {
		const result = [];
		const strRefs = [];
		refs.forEach(ref => {
			let arRefs = null;
			try {
				arRefs = this.getRefs(ref);
			} catch (er) {}
	
			if (arRefs) {
				arRefs = arRefs.filter(r => {
					const str = `${r[0]}:${r[1]}.${r[2]}`;
					const added = (strRefs.indexOf(str) != -1);
					if (!added) {
						strRefs.push(str);
					}
					return !added;
				});
				extendArray(result, arRefs);
			} else {
				result.push(null);
			}
		});
		return result;
	};

	/**
	 * Returns an array of arrays with three values [paper_id, section_id, par_id]
	 * with all paragraphs included in the old references.
	 * For example: '1390.1' returns [[126,3,6]].
	 * For example: '1501' returns [[135,5,6], [135,5,7], [135,5,8], [135,6,1], [135,6,2]]
	 * Checks if reference exist. References that fail are returned as nulls.
	 * References are not duplicated.
	 * @param {string[]} refs UB old references.
	 * @return {Array.<number[]>}
	 */
	getArrayOfRefsFromOldRefs = (refs) => {
		const result = [];
		const strRefs = [];
		const strRefs2 = [];
		refs.forEach(ref => {
			const data = ref.split('.').map(d => parseInt(d));
			const invalid = (data.find(d => isNaN(d)) != null);
			let str;
			if (invalid || data.length == 0) {
				result.push(null);
			} else {
				str = data[0].toString() + '.' + (data.length === 1 ? '' :
					data[1].toString());
				if (strRefs.indexOf(str) === -1) {
					strRefs.push(str);
				}
			}
		});
		this.papers.forEach(paper => {
			paper.sections.forEach(section => {
				section.pars.forEach(par => {
					const pref = par.par_ref;
					const ref = par.par_pageref;
					const index = strRefs.findIndex(r => ref.startsWith(r));
					if (index != -1 && strRefs2.indexOf(pref) == -1) {
						strRefs2.push(pref);
						result.push(this.getRef(pref));
					}
				});
			});
		});
		return result;
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
	 * Returns an array with pairs [text, biblical ref].
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
	 * Returns the referenced paragraph in plain text without any tag or mark.
	 * @param {number[]} ref Reference as an array of three numbers.
	 * @param {string[]} errs Array to store errors.
	 * @returns {string}
	 */
	toParInPlainText = (ref, errs) => {
		let result = '';
		if (!ref) {
			errs.push('Error: Ref is null');
			return result;
		}
		const par = this.getPar(ref[0], ref[1], ref[2]);
		if (!par) {
			errs.push(`Error: Ref ${ref[0]}:${ref[1]}.${ref[2]}} not found`);
			return result;
		}
		//Remove the references to footnotes and marks
		result = par.par_content
			.replace(/{(\d+)}|\*|\$/g, function(match, number) {return '';});
		return result;
	};

	search = (text) => {
		const result = [];
		this.papers.forEach(paper => {
			paper.sections.forEach(section => {
				section.pars.forEach(par => {
					const par_content = par.par_content.replace(/_|\*/g, '');
					if (par_content.indexOf(text) != -1 &&
						result.indexOf(par.par_ref) === -1) {
						result.push(par.par_ref);
					}
				});
			});
		});
		return result;
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
					extract = replaceSpecialChars(extract);
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
			footnoteExtract = replaceSpecialChars(footnoteExtract);
			footnotes.push(footnoteExtract);
		}
		replaceErr = [];
		extract = replaceTags(extract, LSep.ITALIC_START, LSep.END, '*', '*', 
			replaceErr);
		if (replaceErr.length > 0) {
			extendArray(errors, replaceErr.map(e => 
				this.getError(e, baseName, lnum + 1)));
		}
		extract = replaceSpecialChars(extract);
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
					//Replace italics (avoiding special pars with asterisks)
					pcontent = pcontent.indexOf('* * *') != -1
						? pcontent
						: replaceTags(par.par_content, '*', '*', 
							LSep.ITALIC_START, LSep.END, replaceErr);
					if (replaceErr.length > 0) {
						error = replaceErr[0];
						return;
					}
					pcontent = replaceInverseSpecialChars(pcontent);
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
			text = replaceInverseSpecialChars(text);
			if (replaceErr.length > 0) {
				return 'FOOTNOTE ERROR';
			}
			return `\\footnote{${text}}`;
		});
	};

	//***********************************************************************
	// TXT 
	//***********************************************************************

	/**
	 * Writes `The Urantia Book` in TXT format. This format removes any
	 * formatting tag leaving the text as simple as possible for use it
	 * in audio conversion.
	 * @param {string} dirPath Folder path.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	writeToTXT = (dirPath) => {
		return this.writeTo(dirPath, 'txt');
	};

	/**
	 * Writes a paper of `The Urantia Book` in TXT format. This format removes 
	 * any formatting tag leaving the text as simple as possible for use it
	 * in audio conversion.
	 * @param {string} filePath File path.
	 * @param {Object} paper Paper object.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * error in reject function.
	 */
	writeFileToTXT = (filePath, paper) => {
		return new Promise((resolve, reject) => {
			let txt = '', error;

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

			txt += `${paper.paper_title}\r\n{{Pause=2000}}\r\n`;

			paper.sections.forEach((section, i) => {
				if (section.section_title) {
					txt += `${section.section_title}\r\n{{Pause=2000}}\r\n`;
				}
				section.pars.forEach((par, j) => {
					let pcontent, end;
					if (!par.par_content) {
						error = 'book_par_no_refcontent';
						return;
					}
					pcontent = par.par_content
						.replace(/\*/g,'')
						.replace(/{\d+}/g,'');
					end = (j === section.pars.length - 1 ? 
						'\r\n{{Pause=2000}}\r\n' : '{{Pause=1000}}\r\n');
					txt += `${pcontent}${end}`;
				});
			});

			if (error) {
				reject(this.getError(error, filePath));
				return;
			}

			fs.writeFile(filePath, txt, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	//***********************************************************************
	// TSV
	//***********************************************************************

	readSubsections = (filePath) => {
		return new Promise((resolve, reject) => {
			fs.readFile(filePath, (errFile, buf) => {
				if (errFile) {
					reject([errFile]);
					return;
				}
				const lines = buf.toString().split('\n');
				if (lines.length === 0) {
					reject([this.getError('subsections_no_lines')]);
					return;
				}
				lines.forEach((line, i) => {
					//Skip first line
					if (i === 0) return;
					const [ref, texts] = line.trim().split('\t');
					if (!ref || !texts) {
						reject([this.getError('subsections_no_values', i)]);
						return;
					}
					const [paperIndex, sectionIndex] = ref.split(':');
					if (paperIndex == undefined || sectionIndex == undefined) {
						reject([this.getError('subsections_no_values', i)]);
						return;
					}
					const paper = this.papers
						.find(p=>p.paper_index.toString() === paperIndex);
					if (!paper) {
						reject([this.getError('subsections_ref_invalid', ref)]);
						return;
					}
					const section = paper.sections
						.find(s=>s.section_ref === ref);
					section.subsections = texts.split('|').map(t=>t.trim());
				});
				resolve(null);
			});
		});
	}

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
	 * Reads references (footnotes) from a file called `footnotes-book-xx.json` 
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
					reject([this.getError('file_not_exists', filePath)]);
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
	 * Also saves info of position of each sub-reference to be able to apply
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
	 * @param {number} length Max number of footnotes of the paper, that 
	 * represents the max number to search a reference.
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
				if (!texts || !bible_refs || !locations ||
					texts.length != bible_refs.length || 
					texts.length != locations.length) {
					errors.push(this.getError('book_invalid_number', index));
					return;
				}
				paper.footnotes = texts.map((t, i) => {
					return t
						.map((title, j) => `*${title}*: ${bible_refs[i][j]}.`)
						.map(f => f.replace(/\.\.$/, '.'))
						.join(' ');
				});
				const usedRefs = [];
				locations.forEach((location, i) => {
					const par_ref = location.split('#')[0];
					//Sentence index is the index of the sentence in paragraph
					// starting at 0 for first sentence
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
					//If the file already contains footnote marks then exit
					//Some files has footnote marks added manually so maintain
					if (usedRefs.indexOf(par_ref) === -1 && 
						par.par_content.indexOf('{') != -1) {
						return;
					}
					usedRefs.push(par_ref);
					const ii = getAllIndexes(par.par_content, '.');
					if (sentenceIndex != -1 && sentenceIndex < ii.length) {
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
					const is_b = [31,56,120].includes(paperIndex);
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
						//Special case of par with asterisks (docs 31,56,120,134,144)
						// 31:10.21, 56:10.22, 120:3.11 (repeats, so we add 'b')
						// 134:6.14 (do not repeats, is a common par)
						// 144:5.11,25,38,54,73,87 (do not repeats, is a common par)
						if ($(p).text().indexOf('* * *') != -1) {
							const b = is_b ? 'b' : '';
							if (!is_b) {
								pId[2] = pId[2] + 1;
							}
							pdata = {
								par_ref: `${pId[0]}:${pId[1]}.${pId[2]}${b}`,
								par_pageref: `${pdata.par_pageref}${b}`,
								par_content: $(p).text().trim(),
								hide_ref: true
							};
							sec.pars.push(pdata);
							continue;
						}
						//Skip pars that are not ones (added for previous special case)
						if (config.pars_ok && p.name != config.pars_ok) {
							continue;
						}
						pdata = this.getParFromHTML($, p, config, paperIndex);
						if (!pdata) {
							continue;
						}
						pId = this.getRef(pdata.par_ref);
						sec = paper.sections.find(s => s.section_index === pId[1]);
						if (!sec) {
							extendArray(errors, 
								this.getError('book_section_not_found', 
									`${paperIndex}:${pId[1]}`, -999));
							continue;
						}
						text = $(p).html();
						text = text.replace(/<sup>\d+:\d+\.\d+<\/sup>/,'');
						text = text.replace(/<sup>\(\d+.\d+\)<\/sup>/, '');
						text = text.replace(/<sup><\/sup>/, '');
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

	readAuthorsFromHTML = (dirPath) => {
		return new Promise((resolve, reject) => {
			const language = path.basename(dirPath).replace('book-', '');
			fs.readdir(dirPath, (err, files) => {
				const config = this.HTMLconfigs
					.find(c => c.languages.indexOf(language) != -1);
				if (err) {
					reject([this.getError(this.language, 'folder_not_exists', 
						dirPath)]);
					return;
				}
				const file = files.find(filename => {
					return config.titlesFile.test(filename);
				});
				if (!file) {
					reject([this.getError(this.language, 'file_not_exists', 
						'"Titles"')])
					return;
				}
				const filePath = path.join(dirPath, file);
				fs.readFile(filePath, (errFile, buf) => {
					if (errFile) {
						reject([errFile]);
						return;
					}
					const content = buf.toString();
					try {
						const $ = cheerio.load(content);
						const authors = this.getAuthorsFromHTML($);
						//Write authors
						this.papers.forEach(p => p.author = authors[p.paper_index]);
						resolve(null);
					} catch (err) {
						reject([err]);
					}
				});
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
		let i, node, c, a, result = [], id = 0, title;
		for (i = 0; i < nodes.length; i++) {
			node = nodes[i];
			c = node.children;
			if (config.name === 'generic') {
				a = node.attribs;
				id = parseInt(a.id.split('_')[1]);
				title = c[0].data;
			} else {
				title = $(node).html();
				if (config.removeTagsInSecs === true) {
					title = removeHTMLTags(title, HSep.ANCHOR_START, HSep.ANCHOR_END, 
						false, []);
				}
			}
			title = replaceTags(title, HSep.ITALIC_START, HSep.ITALIC_END, 
				'*', '*', []);
			if (config.sec_exception && title.indexOf(config.sec_exception) != -1) {
				continue;
			}
			if (config.name != 'generic') {
				id++;
				//Exception in document 139
				if (paperIndex === 139 && id === 9) {
					id++;
				}
			}
			result.push({
				section_index: id,
				section_ref: `${paperIndex}:${id}`,
				section_title: title,
				pars: []
			});
		};
		return result;
	};

	getAuthorsFromHTML = ($) => {
		const authorConfig = this.HTMLconfigs[0].authors;
		let i, node, result = [], index, author;
		if (!authorConfig) return result;
		const nodes = authorConfig.map(a => $(a.item));
		const n = nodes.findIndex(nn => nn.length > 0);
		if (n === -1) return result;
		const indexsel = authorConfig[n].index[0];
		const indexpos = authorConfig[n].index[1];
		const authorsel = authorConfig[n].author[0];
		const authorpos = authorConfig[n].author[1];
		for (i = 0; i < nodes[n].length; i++) {
			node = nodes[n][i];
			index = $($(node).find(indexsel)[indexpos]).html();
			author = $($(node).find(authorsel)[authorpos]).html();
			if (index && author && !isNaN(parseInt(index))) {
				result[parseInt(index)] = author;
			}
		}
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
		const sectionTag = config.secs;
		const titleTags = `h1,h3,${sectionTag}`;
		const is_b = [31,56,120].includes(paperIndex);
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
			const exc = config.sec_exception;
			const filterFunc = 
				(i, e) => !exc || !is_b || (is_b && $(e).text().indexOf(exc) === -1);
			const filterFunc2 = (i, e)=> $(e).text().indexOf('(') != -1;
			pindex = $(node).prevAll()
				.filter(filterFunc)
				.map((i,e)=> {
					return (
						titleTags.indexOf(e.name) != -1 ||
						$(e).children().filter(titleTags).length > 0
					);
				})
				.toArray()
				.indexOf(true) + 1;
			sId = $(node).prevAll(`${sectionTag},div:has(${sectionTag})`)
				.filter(filterFunc).length;
			//Exception in document 139
			if (paperIndex === 139 && sId >= 9) {
				sId = sId + 1;
			}
			pref = '';
			n = $(node).find('sup').filter(filterFunc2);
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
		text = removeHTMLTags(text, HSep.SMALL_START, HSep.SMALL_END, true, errs);
		text = replaceTags(text, HSep.ITALIC_START, HSep.ITALIC_END, '*', '*', errs);
		text = replaceTags(text, HSep.SMALLCAPS_START, HSep.SMALLCAPS_END, '$', '$', errs);
		text = replaceTags(text, HSep.UNDERLINE_START, HSep.UNDERLINE_END, '|', '|', errs);
		text = replaceTags(text, HSep.UNDERLINE2_START, HSep.UNDERLINE2_END, '|', '|', errs);
		text = replaceTags(text, HSep.UNDERLINE3_START, HSep.UNDERLINE3_END, '|', '|', errs);
		text = replaceTags(text, HSep.RIGHT_START, HSep.RIGHT_END, '', '', errs);
		text = replaceTags(text, HSep.BOLD_START, HSep.BOLD_END, '<b>', '</b>', errs);
		text = removeHTMLTags(text, HSep.SPAN_START, HSep.SPAN_END, false, errs);
		text = removeHTMLTags(text, HSep.ANCHOR_START, HSep.ANCHOR_END, false, 
			errs);
		text = text.trim();
		return text;
	};

	/**
	 * Returns the referenced paragraph in HTML.
	 * @param {number[]} ref Reference as an array of three numbers.
	 * @param {string[]} errs Array to store errors.
	 * @returns {string}
	 */
	toParInHTML = (ref, errs) => {
		const errs2 = [];
		let result = this.toParInMarkdown(ref, errs2);
		if (errs2.length > 0) {
			extendArray(errs, errs2);
			return;
		}
		//Replace italics (avoiding special pars with asterisks)
		result = result.indexOf('* * *') != -1
			? result
			: replaceTags(result, '*', '*', '<i>', '</i>', errs);
		return result;
	};

	/**
	 * Returns the referenced paragraph in HTML.
	 * @param {number[]} ref Reference as an array of three numbers.
	 * @param {string[]} errs Array to store errors.
	 * @returns {string}
	 */
	toParInMarkdown = (ref, errs) => {
		let result = '';
		if (!ref) {
			errs.push('Error: Ref is null');
			return result;
		}
		const par = this.getPar(ref[0], ref[1], ref[2]);
		if (!par) {
			errs.push(`Error: Ref ${ref[0]}:${ref[1]}.${ref[2]}} not found`);
			return result;
		}
		//Remove the references to footnotes
		result = par.par_content
			.replace(/{(\d+)}/g, function(match, number) {return '';});
		//Replace smallcaps tags with HTML
		result = replaceTags(result, '$', '$', 
			'<span style="font-variant: small-caps;">', '</span>', errs);
		return result;
	};

	//***********************************************************************
	// Wiki.js
	//***********************************************************************

	/**
	 * Writes `The Urantia Book` in HTML format that can be imported in Wiki.js, 
	 * each paper a file. It requires reading previously from any format.
	 * @param {string} dirPath Folder path.
	 * @param {?TopicIndex} topicIndex An optional Topic Index.
	 * @param {?TopicIndex} topicIndexEN An optional Topic Index in english. If
	 * previous param is english then this is not required. If it is not english
	 * then this param is required.
	 * @param {?ImageCatalog} imageCatalog Image catalog.
	 * @param {?MapCatalog} mapCatalog Map catalog.
	 * @param {?Paralells} paralells Paralells.
	 * @param {?Articles} articles Articles.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	writeToWikijs = (dirPath, topicIndex, topicIndexEN, imageCatalog,
		mapCatalog, paralells, articles) => {
		return this.writeTo(dirPath, 'html', topicIndex, topicIndexEN, 
			imageCatalog, mapCatalog, paralells, articles);
	};

	/**
	 * Writes `The Urantia Book` (mutiple versions mode) in HTML format that 
	 * can be imported in Wiki.js, each paper a file.
	 * @param {string} dirPath Folder path.
	 * @param {Book[]} books Array of Book objects with the book in several 
	 * versions. The first one must be the master version, which will have 
	 * links to footnotes.
	 * @param {?TopicIndex} topicIndex An optional Topic Index.
	 * @param {?TopicIndex} topicIndexEN An optional Topic Index in english. If
	 * previous param is english then this is not required. If it is not english
	 * then this param is required.
	 * @param {?ImageCatalog} imageCatalog Image catalog.
	 * @param {?MapCatalog} mapCatalog Map catalog.
	 * @param {?Paralells} paralells Paralells.
	 * @param {?Articles} articles Articles.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * array of errors in reject function.
	 */
	writeMultipleToWikijs = (dirPath, books, topicIndex, topicIndexEN, 
		imageCatalog, mapCatalog, paralells, articles) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('folder_no_access', baseName)]);
					return;
				}
			});
			const promises = books[0].papers.map(paper => {
				const index = paper.paper_index;
				const papers = books.map(b => {
					const p2 = b.papers.find(p1 => p1.paper_index === index);
					p2.isMaster = b.isMaster;
					p2.year = b.year;
					p2.copyright = b.copyright;
					p2.label = this.language === 'en' 
						? '1955 SRT'
						: b.label;
					return p2;
				});
				//For English we add here the old 1955 version
				if (this.language === 'en') {
					const originalPaper = this.getOriginalPaper(index);
					originalPaper.year = paper.year;
					originalPaper.copyright = paper.copyright;
					originalPaper.label = '1955 ORIGINAL';
					papers.push(originalPaper);
				}
				const filePath = path.join(dirPath, `${index}.html`);
				const p = this.writeFileToWikijs(filePath, papers, topicIndex, 
					topicIndexEN, imageCatalog, mapCatalog, paralells, 
					articles);
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
	};

	/**
	 * Writes a paper of `The Urantia Book` in HTML format that can be imported 
	 * in Wiki.js.
	 * @param {string} filePath Output file.
	 * @param {(Object|Object[])} papers JSON object with the paper or array of
	 * JSON objects with paper in several versions. The first one must be the
	 * english version, and one must be the master version, with links to footnotes.
	 * @param {?TopicIndex} topicIndex An optional Topic Index.
	 * @param {?TopicIndex} topicIndexEN An optional Topic Index in english. If
	 * previous param is english then this is not required. If it is not english
	 * then this param is required.
	 * @param {?ImageCatalog} imageCatalog Image catalog.
	 * @param {?MapCatalog} mapCatalog Map catalog.
	 * @param {?Paralells} paralells Paralells.
	 * @param {?Articles} articles Articles.
	 * @return {Promise} Promise that returns null in resolve function and an
	 * error in reject function.
	 */
	writeFileToWikijs = (filePath, papers, topicIndex, topicIndexEN, 
		imageCatalog, mapCatalog, paralells, articles) => {
		return new Promise((resolve, reject) => {
			const multi = Array.isArray(papers);
			const years = multi 
				? papers.map(p=>p.year)
				: [this.tr('bookMasterYear')];
			const copyrights = multi
				? papers.map(p=>p.copyright)
				: ["UF"];
			const topicIndexes = multi 
				? papers.map((p, i) => (i === 0 ? topicIndexEN : topicIndex)) 
				: [topicIndex];
			const masterIndex = multi 
				? papers.findIndex(pp => pp.isMaster) 
				: -1;
			const paper = multi 
				? papers[masterIndex] 
				: papers;
			const index = paper.paper_index;
			const prev = index - 1;
			const next = index + 1;
			let error = null;

			//Get all footnotes: Bible (paramony), books (paralells), articles
			const paramonyFn = (Array.isArray(paper.footnotes) &&
				paper.footnotes.length > 0 ?
				this.footnotesToObjects(paper) : []);
			const paramonyFnErr = paramonyFn
				.filter(f => f.html === 'FOOTNOTE ERROR')
				.map(f => f.index);
			const paralellsFn = (paralells ? 
				paralells.getParalells(index) : []);
			const aParalells = (articles ? articles.getParalells(index) : []);
			const articlesFn = aParalells.filter(p => p.suffix === 'a');
			const study_aidsFn = aParalells.filter(p => p.suffix === 's');
			const pCorrections = this.corrections.filter(c => {
				const r = c.par_ref.split(/[:\.]/);
				return parseInt(r[0]) === index;
			});

			const footnoteDef = [
				{section: this.tr('articles'), 
					footnotes: articlesFn, index: 0, 
					suffix: 'a', twemoji: '1f4c3', alt: '📃'},
				{section: this.tr('study_aids'),
					footnotes: study_aidsFn, index: 0,
					suffix: 's', twemoji: '1f4d3', alt: '📓'},
				{section: this.tr('bibleName'), 
					footnotes: paramonyFn, index: 0, 
					suffix: 'b', twemoji: '1f4d5', alt: '📕'},
				{section: this.tr('booksOther'), 
					footnotes: paralellsFn, index: 0, 
					suffix: 'o', twemoji: '1f4da', alt: '📚'},
				/* This last section is only available for English */
				{section: 'Corrections to original English 1955',
					footnotes: pCorrections, index: 0,
					suffix: 'c', twemoji: '1f4d8', alt: '📘'}
			];

			//Checks
			if (!Array.isArray(paper.sections)) {
				error = this.getError('book_no_sections', filePath);
			} else if (paper.sections.find(s => s.section_ref == null)) {
				error = this.getError('book_section_no_reference', filePath);
			} else if (paper.sections.find(s => !Array.isArray(s.pars))) {
				error = this.getError('book_section_no_pars', filePath);
			} else if (!paper.paper_title) {
				error = this.getError('book_paper_no_title', filePath);
			} else if (paramonyFnErr.length > 0) {
				error = this.getError('book_error_footnotes', filePath, 
					paramonyFnErr.join(','));
			}
			if (error) {
				reject(error);
				return;
			}

			//Header
			let body = '';
			let header = '';
			let error_par_ref;
			const prevPaper = this.papers.find(p=>p.paper_index === prev);
			const nextPaper = this.papers.find(p=>p.paper_index === next);
			const prevLink = getWikijsBookLink(prevPaper, this.language, multi, true);
			const nextLink = getWikijsBookLink(nextPaper, this.language, multi, false);
			const indexLink = getWikijsBookLink(paper, this.language, multi, null);
			const title = getBookPaperTitle(paper, this.language, true);
			// let footnoteIndex = 0;
			let rErr = [];
			let topicErr = [];

			//Write header
			header += getWikijsHeader(title, ['the urantia book—papers']);
			header += '\r\n';
			//Write copyright
			body += getWikijsBookCopyright(years, copyrights, this.language);
			//Write top links
			body += getWikijsLinks(prevLink, indexLink, nextLink);
			//Write top buttons
			if (multi) {
				body += getWikijsBookButtons(papers.map(p=>p.label), 
					this.language, this.colors);
			}
			//Write audio controls (only in single-mode)
			if (!multi) {
				body += this.audioToWikijs(index);
			}
			// Write papers title (only for multi-version)
			if (multi) {
				body += getWikijsBookTitles(papers, this.language);
			}
			//Sections & paragraphs
			paper.sections.forEach((section, sec_i) => {
				const previousPars = [];
				//Add of section title (or titles in multi-version)
				body += getWikijsBookSectionTitles(papers, sec_i);

				section.pars.forEach((par, par_i) => {
					const pars = (multi ? papers.map(p => {
						return (p.sections[sec_i] ? 
							p.sections[sec_i].pars[par_i] : null);
					}) : [par]);
					let aref, di, si, pi, image, map;
					pars.forEach(p => p.usedTopicNames = []);

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
					rErr = [];

					//Create paragraphs for all versions (multi/single)
					const parHtmls = pars.map((p, ppi) => {
						let parHtml = '';
						let pcontent = p.par_content;
						let used, topics;
						const topicNames = [];
						const center = p.hide_ref ? ' class="text-center"' : '';

						parHtml += (multi 
							? `<p${center}>`
							: `<p${center} id="p${si}_${pi}${p.hide_ref ? 'b' : ''}">`);
						parHtml += getWikijsBookParRef(
							multi, 
							p.par_ref, 
							this.language, 
							this.colors[ppi], 
							(multi ? papers[ppi].label : null),
							p.hide_ref
						);
						//Replacements (avoiding special pars with asterisks)
						pcontent = pcontent.indexOf('* * *') != -1
							? pcontent
							: replaceTags(pcontent, '*', '*', '<i>', '</i>', rErr);
						pcontent = replaceTags(pcontent, '$', '$', 
							'<span style="font-variant: small-caps;">', '</span>', rErr);
						if (this.language === 'ko') {
							pcontent = replaceTags(pcontent, '|', '|', '<u>', '</u>', rErr);
						}
						if (rErr.length > 0) {
							error_par_ref = p.par_ref;
							error = rErr[0];
						}

						//Topic index links
						if (topicIndexes[ppi]) {
							used = (previousPars[ppi] ? 
								previousPars[ppi].usedTopicNames : []);
							topics = topicIndexes[ppi].filterTopicsInParagraph(
								p.par_content, di, si, pi, topicNames, used);
							previousPars[ppi] = p;
							extendArray(p.usedTopicNames, topics.map(t => t.name));
							if (topicNames.length > 0) {
								topicNames.sort((a,b) => {
									if (a.name === b.name) {
										return (a.link.length - b.link.length);
									}
									return (b.name.length - a.name.length);
								});
								pcontent = replaceWords(
									topicNames.map(i=>i.name),
									topicNames.map(i=>i.link), 
									pcontent
								);
							}
						}

						//Footnote marks
						// If par is from master UB or only one UB
						if (masterIndex === ppi || !multi) {
							//Add footnote marks to paragraph content
							pcontent = this.addFootnoteMarks(footnoteDef, 
								pcontent, p);
						}
						//The first item is always in English
						if (multi && ppi === 0) {
							//Remove footnote marks (they are in master)
							pcontent = pcontent.replace(/\{(\d+)\}/g, '');
						}
						parHtml += `${pcontent}</p>\r\n`;
						return parHtml;
					});

					//Write paragraphs (multi/single)
					if (multi) {
						body += `<div id="p${si}_${pi}" class="d-sm-flex">\r\n`;
						body += parHtmls.map((ph, n, arrp) => {
							var cls = (n < arrp.length ? 
								` class="urantiapedia-column-${n+1} pr-sm-5"` : '') +
								' style="flex-basis:100%"';
							return `  <div${cls}>\r\n    ${ph}  </div>\r\n`;
						}).join('');
						body += '</div>\r\n';
					} else {
						body += parHtmls[0];
					}

					//Image if exists
					if (imageCatalog) {
						image = imageCatalog.getImageForRef(par.par_ref);
						if (image) {
							body += image;
						}
					}

					//Map if exists
					if (mapCatalog) {
						map = mapCatalog.getMapForRef(par.par_ref);
						if (map) {
							body += map;
						}
					}
				});
			});

			//Footer
			body += '<br/>\r\n';
			body += getWikijsLinks(prevLink, indexLink, nextLink);

			//References section
			if (footnoteDef.find(fdef => fdef.footnotes.length > 0)) {
				body += this.referencesSectionToWikijs(footnoteDef);
			}
			
			if (error) {
				reject(this.getError(error, filePath, error_par_ref));
				return;
			} else if (topicErr.length > 0) {
				reject(new Error(topicErr.map(e => e.message).join(', ')));
				return;
			}
			//Only write if content is new or file not exists
			//Update date created avoiding a new date for it
			// resolve(null);
			writeHTMLToWikijs(filePath, header, body)
				.then(resolve, reject);
		});
	};

	/**
	 * Adds footnote marks in the paragraph text and returns it.
	 * @param {Object[]} footnoteDef An array with the definition of the
	 * footnotes for all the footnote sections.
	 * @param {string} pcontent Final text of the paragraph.
	 * @param {Object} par Object with paragraph data.
	 * @return {string}
	 */
	addFootnoteMarks = (footnoteDef, pcontent, par) => {
		const cite = `<sup id="{0}"><a href="{1}">[{2}]</a></sup>`;
		const icon = `<img class="emoji" draggable="false" alt="{0}" ` +
			`src="/_assets/svg/twemoji/{1}.svg">`;
		const r = par.par_ref.split(/[:\.]/);
		footnoteDef.forEach(fnsection => {
			const oldFn = !['a','s'].includes(fnsection.suffix);
			const urls = oldFn 
				? [] 
				: fnsection.footnotes.map(f => f.url ? f.url : '').sort();
			fnsection.footnotes
				.filter(fn => {
					return fn.par_ref 
						? fn.par_ref === par.par_ref
						: fn.par_refs.indexOf(par.par_ref) != -1;
				})
				.forEach((fn, k) => {
					fnsection.index++;
					const fni = oldFn
						? fnsection.index
						: fnsection.footnotes.indexOf(fn) + 1;
					const {index: citei, suffix: fns, alt: fna, twemoji: fnt} 
						= fnsection;
					const i = urls.indexOf(fn.url ? fn.url : '');
					const cite_id = oldFn
						? `cite_${fns}${citei}`
						: `cite_${fns}${r[1]}_${r[2]}_${i}`;
					const link = oldFn
						? `#fn_${fns}${fni}`
						: `#fn_${fns}${r[1]}_${r[2]}_${i}`;
					const text = strformat(cite, cite_id, link, fni);
					const fnicon = strformat(icon, fna, fnt);
					if (fn.index != null) {
						const i2 = par.par_content.indexOf(`{${fn.index}}`);
						const i1 = par.par_content.indexOf(`{${fn.index-1}}`);
						if (k == 0 || (i2 - i1 > 4)) {
							pcontent = pcontent.replace(`{${fn.index}}`, 
								fnicon + text);
						} else {
							pcontent = pcontent.replace(`{${fn.index}}`, text);
						}
					} else if (fn.location === 999) {
						if (k == 0) {
							pcontent += fnicon;
						}
						pcontent += text;
					} else if (fn.location != null) {
						const indexes = getAllIndexes(pcontent, '.');
						const tindex = indexes[fn.location - 1];
						pcontent = pcontent.substring(0, tindex) +
							fnicon + text + pcontent.substring(tindex);
					} else if (fnsection.suffix === 'c' && fn.corrected) {
						//Case for English 1955 corrections
						const seps = ['.', ',', ';', ':', '?', '!'];
						const indexesHtml = getAllIndexes(pcontent, seps);
						const indexesNoHtml = getAllIndexes(par.par_content, seps);
						const contentNoHtml = removeAllHTML(par.par_content)
							.replace(/[\*\$]/g, '')
							.replace(/\{\d+\}/g, '');
						const correctedNoHtml = removeAllHTML(fn.corrected);
						if (indexesHtml.length != indexesNoHtml.length) {
							console.log('Error in footnotes: indexes', pcontent);
							return;
						}
						let cindex = contentNoHtml.indexOf(correctedNoHtml);
						if (cindex === -1) {
							console.log('Error in footnotes: not found:', pcontent);
							return;
						}
						cindex = cindex + correctedNoHtml.length - 1;
						const cindexNoHtml = indexesNoHtml.findIndex(i => i >= cindex);
						if (cindexNoHtml === -1) {
							console.log('Error in footnotes: index fails:', pcontent);
							return;
						}
						cindex = indexesHtml[cindexNoHtml];
						pcontent = pcontent.substring(0, cindex) +
							fnicon + text + pcontent.substring(cindex);
					}
				});
		});
		return pcontent;
	};

	/**
	 * Converts array of Paramony footnotes to objects with sorting info.
	 * The output is already sorted.
	 * @param {Object} paper Paper object.
	 * @returns {Object[]} Returns and array of objects with footnotes. The
	 * objects have these values:
	 * - index: number used to mark the footnote in paper.
	 * - par_ref: paragraph reference
	 * - sorting: a value for sorting
	 * - html: HTML fragment to add in the References section of Urantia Book
	 * paper.
	 * Returns an empty array if no Paramony footnotes exists.
	 */
	footnotesToObjects = (paper) => {
		const result = [];
		const footnotes = paper.footnotes;
		paper.sections.forEach(section => {
			if (result.length === footnotes.length) {
				return;
			}
			section.pars.forEach(par => {
				if (result.length === footnotes.length ||
					!par.par_ref || !par.par_content) {
					return;
				}
				this.getRefsLocations(par.par_content, footnotes.length)
					.map(loc => loc === -1 ? 998 : loc + 1)
					.forEach(loc => {
						const footnote = footnotes[result.length];
						const location = par.par_ref + `#${loc}`;
						const s = location.split(/[:\.#]/g)
							.map(v => parseInt(v)).slice(1)
							.map(v => v + 1000).join('');
						
						result.push({
							index: result.length,
							par_ref: par.par_ref,
							sorting: s,
							html: this.footnoteToWikijs(footnote)
						});
					});
				
			});
		});
		result.sort((a, b) => a.sorting - b.sorting);
		return result;
	};

	/**
	 * Returns the HTML fragment for Wiki.js of a footnote.
	 * @param {string} footnote Footnote.
	 * @returns {string}
	 */
	footnoteToWikijs = (footnote) => {
		let html = '', parts, text, fs, ab;
		parts = footnote.split('*').filter(m => m.trim() != '');
		//Check
		if (parts.length === 0 || parts.length % 2 != 0) {
			return 'FOOTNOTE ERROR';
		}
		for (let p = 0; p < parts.length; p = p + 2) {
			text = parts[p];
			html += ` <i>${text}</i>: `;

			fs = parts[p + 1].split(';')
				.map(n=> n.trim().replace(/^:|\.$/g, '').trim());
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
		return html;
	};

	/**
	 * Returns the References section from the array of footnotes to Wiki.js.
	 * @param {Object[]} footnoteDef An array with the definition of the
	 * footnotes for all the footnote sections.
	 * @return {string}
	 */
	referencesSectionToWikijs = (footnoteDef) => {
		const icon = `<img class="emoji" draggable="false" alt="{0}" ` +
			`src="/_assets/svg/twemoji/{1}.svg">`;
		const style = '-moz-column-width: 30em; -webkit-column-width: 30em; ' +
			'column-width: 30em; margin-top: 1em;';
		const cite = 
			`  <li{0}><a href="#cite_{2}{1}">↑ <small id="fn_{2}{1}">`+
			`{4}</small></a>{3}</li>\r\n`;
		const cite2 = `  <li{0}>{1}</li>\r\n`;
		let html = '';
		html += `<h2>${this.tr('topic_references')}</h2>\r\n`;
		footnoteDef.forEach(fnsection => {
			if (fnsection.footnotes.length === 0) {
				return;
			}
			const fns = fnsection.suffix;
			const fna = fnsection.alt;
			const fnt = fnsection.twemoji;
			const fnicon = strformat(icon, fna, fnt);
			html += `<h3>${fnicon} ${fnsection.section}</h3>\r\n`;

			html += `<div style="${style}">\r\n<ol style="margin: 0; ` +
				`padding-top: 0px;">\r\n`;
			fnsection.footnotes.forEach((f, n) => {
				const style2 = (n === 0 ? ' style="margin-top:0px;"' : '');
				if (fns === 'a' || fns === 's') {
					html += strformat(cite2, style2, f.html);
				} else {
					html += strformat(cite, style2, n+1, fns, f.html, 
						f.par_ref);
				}
			});
			html += '</ol>\r\n</div>\r\n';
		});
		
		return html;
	};

	/**
	 * Returns audio HTML fragment for Wiki.js.
	 * @param {number} paperIndex Paper index.
	 * @returns {string}
	 */
	audioToWikijs = (paperIndex) => {
		let html = '';
		let stri = (paperIndex > 99 ? `${paperIndex}` : 
			(paperIndex > 9 ? `0${paperIndex}` : `00${paperIndex}`));
		if (this.audio.includes(this.language)) {
			stri = (paperIndex === 0 ? stri + '_1' : stri);
			html += `<p style="text-align: center;">\r\n` +
				`<audio controls="controls" style="width:100%;max-width:400px;" preload="none">\r\n` +
				`<source src="/audio/audio_${this.language}/ub_${stri}.mp3" type="audio/mpeg">\r\n` +
				`</audio>\r\n` +
				`</p>\r\n`;
		}
		return html;
	};

	/**
	 * Writes index pages of `The Urantia Book` in Wiki.js format.
	 * The name of resulting files are `Index.html` and `Index_Extended.html`.
	 * @param {string} dirPath Folder path.
	 * @param {?Book[]} papers Optional array of other Books with the papers
	 * in several versions. The first one must be the english version, and one
	 * must be the master version, with links to footnotes.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * error in reject function.
	 */
	writeIndexToWikijs = (dirPath, books) => {
		return new Promise((resolve, reject) => {
			const lan = this.language;
			const multi = (books != null);
			const copyrights = multi
				? books.map(b=>b.copyright)
				: ["UF"];
			const iparts = [0, 1, 2, 3, 4];
			const idocs = [0, 1, 32, 57, 120];
			const data = (books ? books : [this]).map(book => {
				const isMaster = (books ? book.isMaster : true);
				const isExtra = (book.language != 'en' && !isMaster);
				const key = book.language + (isExtra ? `${book.year}` : '');
				const tparts = iparts.map(i => {
					return this.tr(`bookPart${i}`, key).toUpperCase();
				});
				const dparts = iparts.map(i => {
					if (i === 0) return null;
					return this.tr(`bookPart${i}Desc`, key)
						.split('|').map(d=>d.trim());
				});
				const tpapers = book.papers
					.slice()
					.sort((a, b) => a.paper_index - b.paper_index)
					.map(paper => ({
						index: paper.paper_index,
						title: replaceSpecialChars(getBookPaperTitle(paper, 
							book.language, false)),
						sections: paper.sections.map(s=> ({
							index: s.section_index,
							title: (s.section_title ?
								replaceSpecialChars(s.section_title) : null)
						})),
						author: paper.author
					}));
				return {
					language: book.language,
					parts_titles: tparts,
					parts_descs: dparts,
					year: book.year,
					label: lan === 'en' && multi ? '1955 SRT' : book.label,
					papers: tpapers,
					isMaster: isMaster
				};
			});
			if (lan === 'en' && multi) {
				data.push({
					...data[0],
					label: '1955 ORIGINAL',
					isMaster: false
				});
			}
			const years = data.map(d => d.year);
			const labels = data.map(d => d.label);
			const filePath1 = path.join(dirPath, 'Index.html');
			const filePath2 = path.join(dirPath, 'Index_Extended.html');
			const title1 = `${this.tr('bookName', lan)} — ${this.tr('bookIndexName', lan)}`;
			const title2 = `${this.tr('bookName', lan)} — ${this.tr('bookExtIndexName', lan)}`;
			const copyright = getWikijsBookCopyright(years, copyrights, lan);
			const indexLink1 = getWikijsBookIndexLink(lan, multi, false);
			const indexLink2 = getWikijsBookIndexLink(lan, multi, true);
			let header1 = '';
			let header2 = '';
			let body1 = '';
			let body2 = '';
			let errs = [];

			let papers = this.papers.slice().sort((a, b) => 
				a.paper_index - b.paper_index);

			//Write header
			header1 += getWikijsHeader(title1, ['the urantia book—papers']);
			header1 += '\r\n';
			header2 += getWikijsHeader(title2, ['the urantia book—papers']);
			header2 += '\r\n';
			//Write copyright
			body1 += copyright;
			body2 += copyright;
			//Write top links
			body1 += getWikijsLinks('', indexLink1, '');
			body2 += getWikijsLinks('', indexLink2, '');
			//Write top buttons
			if (multi) {
				const buttons = getWikijsBookButtons(labels, lan, this.colors);
				body1 += buttons;
				body2 += buttons;
			}
			papers.forEach(paper => {
				const i = paper.paper_index;
				const ipart = idocs.indexOf(i);
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
				//Part title & description
				if (ipart != -1) {
					const partTitle = getWikijsBookIndexPartTitle(data, ipart,
						multi);
					const partDesc = getWikijsBookIndexPartDesc(data, ipart,
						multi);
					body1 += partTitle;
					body2 += partTitle;
					body1 += partDesc;
					body2 += partDesc;
					if (!multi) body1 += '<ul>\r\n';
				}
				//Paper titles (and section titles for extended index)
				body1 += getWikijsBookIndexPaper(data, i, multi, false);
				body2 += getWikijsBookIndexPaper(data, i, multi, true);
				if ((idocs.indexOf(i+1) != -1 || i === papers.length - 1) && !multi) {
					body1 += '</ul>\r\n';
				}
			});

			//Write bottom links
			body1 += '<br>\r\n';
			body1 += getWikijsLinks('', indexLink1, '');
			body2 += '<br>\r\n';
			body2 += getWikijsLinks('', indexLink2, '');

			if (errs.length > 0) {
				reject(errs);
				return;
			}

			const p1 = reflectPromise(writeHTMLToWikijs(filePath1, header1, body1));
			const p2 = reflectPromise(writeHTMLToWikijs(filePath2, header2, body2));

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
	 * Writes an index pages of paralells of `The Urantia Book` in Wiki.js format.
	 * The name of resulting file is `paralells.md`.
	 * @param {string} dirPath Folder path.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * error in reject function.
	 */
	writeParalells = (dirPath) => {
		return new Promise((resolve, reject) => {
			const ub = this.tr('bookName', 'en').replace(/\s/g, '_');
			const part0 = this.tr('bookPart0');
			const part1 = this.tr('bookPart1');
			const part2 = this.tr('bookPart2');
			const part3 = this.tr('bookPart3');
			const part4 = this.tr('bookPart4');
			const ot = this.tr('bibleOldTestament');
			const nt = this.tr('bibleNewTestament');
			const ap = this.tr('bibleApocrypha');
			const filePath = path.join(dirPath, 'paralells_.md');
			const abbs = BibleAbbs[this.language];
			const getBooks = c => {
				return Object.values(abbs)
					.filter(a => a[2] == c).map(a => a[0]);
			};
			const otBooks = getBooks('OT');
			const ntBooks = getBooks('NT');
			const apBooks = getBooks('APO');
			let md = '';
			let errs = [];

			let papers = this.papers.slice().sort((a, b) => 
				a.paper_index - b.paper_index);

			papers.forEach(paper => {
				try {
					let error = null;
					const i = paper.paper_index;
					let title = paper.paper_title;
					const path = `/${this.language}/${ub}/${i}`;
					const bookAbbsAll = paper.footnotes
						.map(f => {
							const bAbbs = f.split('*')
								.filter((n,j) => n.trim() != '' && j % 2 == 0)
								.map(n => n.trim().replace(/^:|\.$/g, '').trim())
								.map(n => n.split(';').map(i=>i.trim()))
								.reduce((a,b) => [...a,...b], [])
								.map(n => this.findAbr(n));
							if (bAbbs.findIndex(n => n == null) != -1) {
								error = 'bibleref_bad_ref';
								errs.push(this.getError(error, `Paper ${i}`, f));
							}
							return bAbbs;
						})
						.reduce((a,b) => [...a,...b], []);

					if (!paper.paper_title) {
						errs.push(this.getError('book_paper_no_title', `Paper ${i}`));
						return;
					} else if (error === 'bibleref_bad_ref') {
						return;
					}
	
					const bookAbbs = bookAbbsAll
						.filter((n,j,ar) => ar.indexOf(n) == j);
					const bibleBooks = bookAbbs.map(n => abbs[n]);

					const booksOT = bibleBooks
						.filter(n => otBooks.indexOf(n[0]) != -1)
						.sort((a,b) => otBooks.indexOf(a[0]) - otBooks.indexOf(b[0]))
						.map(a => `[${a[0]}](${a[1]}/Index)`)
						.join(', ');
					const booksNT = bibleBooks
						.filter(n => ntBooks.indexOf(n[0]) != -1)
						.sort((a,b) => ntBooks.indexOf(a[0]) - ntBooks.indexOf(b[0]))
						.map(a => `[${a[0]}](${a[1]}/Index)`)
						.join(', ');
					const booksAP = bibleBooks
						.filter(n => apBooks.indexOf(n[0]) != -1)
						.sort((a,b) => apBooks.indexOf(a[0]) - apBooks.indexOf(b[0]))
						.map(a => `[${a[0]}](${a[1]}/Index)`)
						.join(', ');
	
					title = getBookPaperTitle(paper, this.language, false);
					title = replaceSpecialChars(title);
					md += (i === 0 ? `### ${part0}\r\n\r\n` : '');
					md += (i === 1 ? `### ${part1}\r\n\r\n` : '');
					md += (i === 32 ? `### ${part2}\r\n\r\n` : '');
					md += (i === 57 ? `### ${part3}\r\n\r\n` : '');
					md += (i === 120 ? `### ${part4}\r\n\r\n` : '');
					md += `* [${title}](${path})\r\n`;
					md += (booksOT == '' ? '' : `  - ${ot}: ${booksOT}\r\n`);
					md += (booksNT == '' ? '' : `  - ${nt}: ${booksNT}\r\n`);
					md += (booksAP == '' ? '' : `  - ${ap}: ${booksAP}\r\n`);
					md += [0,31, 56, 119, 196].indexOf(i) != -1 ? '\r\n' : '';
				} catch(e) {
					errs.push(new Error(e.message + ':' + `Paper ${i}`));
				}
			});

			if (errs.length > 0) {
				reject(errs);
				return;
			}

			fs.writeFile(filePath, md, 'utf-8', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(null);
			});
		});
	};

	//***********************************************************************
	// Corrections
	//***********************************************************************

	/**
	 * Reads the file that contains corrections done in the English 1955 edition,
	 * to add them as footnotes and to generate a Multi-column version in English.
	 * The default location is `input/txt/ub_corrections.tsv`.
	 * @returns {Promise} Promise that returns null in resolve function or an 
	 * array of errors in reject function.
	 */
	readCorrections = () => {
		const filePath = path.join(app.getAppPath(), 'input', 'txt', 
			'ub_corrections.tsv');
		if (this.language != 'en') return Promise.resolve(null);
		return new Promise((resolve, reject) => {
			readFile(filePath)
				.then(lines => {
					const items = [];
					lines.forEach((line, i) => {
						if (i === 0) return;
						const [ref, original, corrected, review, decision] 
							= line.split('\t');
						const m = ref.match(/^(\d+:\d+\.\d+)\s*(?:\((\d+\.\d+)\))?$/);
						if (!m) throw new Error(`Invalid ref format: ${line}`);
						const [_, par_ref, par_pageref] = m;
						const html = 
							` ${original}<br/>Review: ${review}<br/>Decision: ${decision}`;

						items.push({
							par_ref,
							par_pageref,
							original,
							corrected,
							review,
							decision,
							html
						})
					});
					this.corrections = items;
					resolve(null);
				})
				.catch(reject);
		});
	};

	/**
	 * Returns a clone of a paper but replacing the corrections to obtain
	 * the original 1955 paper. This only works for English edition.
	 * @param {number} paper_index Index of paper.
	 */
	getOriginalPaper = (paper_index) => {
		const paper = this.papers.find(p => p.paper_index === paper_index);
		const clone = {
			...paper,
			sections: paper.sections.map(section => {
				return {
					...section,
					pars: section.pars.map(p => ({...p}))
				};
			}),
			footnotes: paper.footnotes.slice()
		};
		const corrections = this.corrections.filter(c => {
			const r = c.par_ref.split(/[:\.]/);
			return parseInt(r[0]) === paper_index;
		});
		corrections.forEach(c => {
			clone.sections.forEach(section => {
				section.pars.forEach(p => {
					if (p.par_ref === c.par_ref) {
						let original = c.original.indexOf('...') != -1
							? c.original.split('...')[1]
							: c.original;
						original = original.indexOf('. (') != -1
							? original.split('. (')[0]
							: original;
						original = replaceTags(original, HSep.ITALIC_START, 
							HSep.ITALIC_END, '*', '*', []);
						const corrected = replaceTags(c.corrected, HSep.ITALIC_START, 
							HSep.ITALIC_END, '*', '*', []);
						if (p.par_content.indexOf(corrected) === -1) {
							console.log('Error finding corrected text', p.par_ref);
						}
						p.par_content = p.par_content.replace(corrected,
							original);
					}
				});
			});
		});
		return clone;
	}

	//***********************************************************************
	// MediaWiki
	//***********************************************************************

	/**
	 * Writes `The Urantia Book` in MediaWiki format, each paper a file.
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
	 * Writes a paper of `The Urantia Book` in MediaWiki format.
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
			const eldu = this.tr('bookName');
			const abb = this.tr('bookAbb');
			const docAbb = this.tr('bookPaperAbb');
			const indexName = this.tr('bookIndexName');
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

			ptitle = replaceSpecialChars(paper.paper_title);
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
					stitle = replaceSpecialChars(section.section_title);
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
						// topics = topicIndex.filterTopicsWithRef(di, si, pi);
						topics = topicIndex.filterTopicsInParagraph(pcontent,
							di, si, pi);
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
				wiki += `== ${this.tr('topic_references')} ==` +
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
	 * Writes index pages of `The Urantia Book` in MediaWiki format.
	 * The name of resulting files are `El_Libro_de_Urantia_Indice.wiki`
	 * and `El_Libro_de_Urantia_Indice_extendido.wiki` or english equivalents.
	 * @param {string} dirPath Folder path.
	 * @return {Promise} Promise that returns null in resolve function or an
	 * error in reject function.
	 */
	writeIndexToWikiText = (dirPath) => {
		return new Promise((resolve, reject) => {
			const lu = this.tr('bookName').replace(/\s/g, '_');
			const abb = this.tr('bookAbb');
			const pabb = this.tr('bookPaperAbb');
			const ind = this.tr('bookIndexName').replace(/\s/g, '_');
			const eind = this.tr('bookExtIndexName').replace(/\s/g, '_');
			const part0 = this.tr('bookPart0').toUpperCase();
			const part1 = this.tr('bookPart1').toUpperCase();
			const part2 = this.tr('bookPart2').toUpperCase();
			const part3 = this.tr('bookPart3').toUpperCase();
			const part4 = this.tr('bookPart4').toUpperCase();
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
				title = replaceSpecialChars(title);

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
						const stitle = replaceSpecialChars(section.section_title);
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
	 * Converts the array of footnotes to MediaWiki.
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
					const stri = (index > 99 ? `${index}` : 
						(index > 9 ? `0${index}` : `00${index}`));
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
			const abb = this.tr('bookAbb');
			const lu = this.tr('bookName').replace(/\s/g, '_');
			const pabb = this.tr('bookPaperAbb');

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
						`${this.tr('topic_references')} ` +
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
		return getError(this.language, ...params);
	};

	/**
	 * Adds a warning to internal lst of warnings.
	 * @param  {...any} params Params. First param must be a string or a template
	 * for the rest of the params.
	 * @returns {Error}
	 */
	addWarning = (...params) => {
		const msg = params[0];
		const text = this.tr(msg);
		this.warnings.push(strformat(text, ...params.slice(1)));
	};

	/**
	 * Writes `The Urantia Book` in the giving format, each paper in a file.
	 * Requires previously to read the book in any format.
	 * @param {string} dirPath Folder path.
	 * @param {string} format Output format: `json`, `tex`, `wiki`, `html`,
	 * `txt`.
	 * @param {?TopicIndex} topicIndex An optional Topic Index.
	 * @param {?TopicIndex} topicIndexEN An optional Topic Index in english. If
	 * previous param is english then this is not required. If it is not english
	 * then this param is required.
	 * @param {?ImageCatalog} imageCatalog Image catalog.
	 * @param {?Paralells} paralells Paralells.
	 * @param {?Articles} articles Articles.
	 * @return {Promise} Promise that returns null in resolve function or
	 * an array of errors in reject function.
	 */
	writeTo = (dirPath, format, topicIndex, topicIndexEN, imageCatalog, 
		mapCatalog, paralells, articles) => {
		const baseName = path.basename(dirPath);
		return new Promise((resolve, reject) => {
			fs.access(dirPath, fs.constants.W_OK, (err) => {
				if (err) {
					reject([this.getError('folder_no_access', baseName)]);
					return;
				}
				const promises = this.papers
				/*.filter(paper => paper.paper_index === 0)*/
				.map(paper => {
					const bookName = this.tr('bookName')
						.replace(/\s/g, '_');
					const paperAbb = this.tr('bookPaperAbb');
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
						filePath = path.join(dirPath, `${i}.${format}`);
						p = this.writeFileToWikijs(filePath, paper, topicIndex,
							topicIndexEN, imageCatalog, mapCatalog, paralells,
							articles);
					} else if (format === 'txt') {
						filePath = path.join(dirPath, 
							`UB_${stri}${i == 0 ? '_1' : ''}.${format}`);
						p = this.writeFileToTXT(filePath, paper);
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

	/** 
	 * Translates a text.
	 * @param {string} code Code of text to translate.
	 * @param {?string} lan Optional language instead of current.
	 */
	tr = (code, lan) => {
		const language = lan ? lan : this.language;
		const t = Strings[code][language];
		const t2 = Strings[code]['en'];
		return t ? t : t2;
	};
}

module.exports = Book;