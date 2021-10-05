const {dialog, app} = require('electron').remote;
const path = require('path');
const fs = require('fs');
const Book = require('./book');
const Bible = require('./bible');
const BibleRef = require('./bibleref');
const TopicIndex = require('./topicindex');
const Articles = require('./articles');
const Processes = require('./processes');
const Strings = require('./strings');
const strformat = require('./utils').strformat;

const book = new Book();
const bible = new Bible();
const bibleref = new BibleRef();
const topicindex = new TopicIndex();
const articles = new Articles();

const controls = {
	dirHButton: null,
	dirHTextbox: null,
	lblHTextbox: null,
	dirTButton: null,
	dirTTextbox: null,
	lblTTextbox: null,
	dirLButton: null,
	dirLTextbox: null,
	lblLTextbox: null,
	dirJButton: null,
	dirJTextbox: null,
	lblJTextbox: null,
	dirWButton: null,
	dirWTextbox: null,
	lblWTextbox: null,
	drpLanguage: null,
	lblLanguage: null,
	drpProcess: null,
	lblProcess: null,
	exeButton: null,
	logArea: null,
	collapseButton: null,
	progress: null,
	chkMerge: null,
	chkMergeLabel: null,
	drpTopics: null,
	lblTopics: null,
	drpCategories: null,
	lblCategories: null
};
let collapsed = false;

const collapsableControls = ['dirHTextbox', 'dirTTextbox', 'dirLTextbox', 
	'dirJTextbox', 'dirWTextbox', 'chkMerge', 'drpCategories', 'drpTopics'];

const topicTypes = ['TODOS', 'PERSONA', 'LUGAR', 'ORDEN', 'RAZA', 'RELIGION', 
	'OTRO'];

const onLoad = () => {
	Object.keys(controls).forEach(id => controls[id] = document.querySelector('#' + id));
	updateUI();
	controls.dirHButton.addEventListener('click', 
		handle_dirButtonClick.bind(this, controls.dirHTextbox));
	controls.dirTButton.addEventListener('click', 
		handle_dirButtonClick.bind(this, controls.dirTTextbox));
	controls.dirLButton.addEventListener('click', 
		handle_dirButtonClick.bind(this, controls.dirLTextbox));
	controls.dirJButton.addEventListener('click', 
		handle_dirButtonClick.bind(this, controls.dirJTextbox));
	controls.dirWButton.addEventListener('click', 
		handle_dirButtonClick.bind(this, controls.dirWTextbox));
	controls.exeButton.addEventListener('click', handle_exeButtonClick);
	controls.collapseButton.addEventListener('click', handle_collapseButtonClick);
	controls.drpLanguage.addEventListener('change', handle_drpLanguageChange);
	controls.drpProcess.addEventListener('change', handle_drpProcessChange);
	controls.drpTopics.addEventListener('change', handle_drpTopicsChange);
	book.onProgressFn = onProgress;
	bible.onProgressFn = onProgress;
	bibleref.onProgressFn = onProgress;
	topicindex.onProgressFn = onProgress;
	articles.onProgressFn = onProgress;

	handle_drpLanguageChange();
	handle_drpProcessChange();
};

const updateUI = () => {
	const lan = controls.drpLanguage.value;
	const process = controls.drpProcess.value;

	controls.drpProcess.innerHTML = Object.keys(Processes).map(key => {
		const p = Processes[key];
		const desc = p.desc[lan];
		const sel = (process == key ? ' selected' : '');
		return (p.active ? `<option value="${key}"${sel}>${desc}</option>` : '');
	}).join('');

	controls.drpCategories.innerHTML = topicTypes
		.map(t => `<option value="${t}">${t}</option>`)
		.join('');

	Object.keys(controls).forEach(key => {
		const control = controls[key];
		const tagName = control.tagName.toUpperCase();
		const text = (Strings[key] ? Strings[key][lan] : '');
		if (tagName === 'LABEL' || tagName === 'BUTTON') {
			control.innerHTML = text;
		} else if (tagName === 'INPUT' && text != '') {
			control.setAttribute('placeholder', text);
		}
	});
};

const handle_dirButtonClick = (textbox) => {
	dialog.showOpenDialog({
		title: 'Selecciona una carpeta',
		properties: ['openDirectory']
	}).then(result => {
		if (!result.canceled && result.filePaths) {
			const dirPath = result.filePaths[0];
			textbox.value = dirPath;
		}
	});
};

const handle_collapseButtonClick = () => {
	collapsed = !collapsed;
	handle_drpProcessChange();
};

const handle_drpLanguageChange = (evt) => {
	updateUI();
};

const handle_drpProcessChange = (evt) => {
	const process = controls.drpProcess.value;
	if (!process || !Processes[process]) {
		return;
	}
	const cnames = Processes[process].controls;
	const paths = Processes[process].paths;
	const lan = controls.drpLanguage.value;
	const subpath = (Processes[process].subpath ? 
		Processes[process].subpath[lan] : '');
	collapsableControls.forEach(c => {
		const hide = (collapsed || cnames.indexOf(c) === -1);
		controls[c].parentNode.parentNode.parentNode.classList.toggle('d-none',
			hide);
	});
	cnames.forEach((c,i) => {
		if (paths && paths[i]) {
			const folderpath = path.join(app.getAppPath(), 'input',
				strformat(paths[i], lan, `/${subpath}`));
			controls[c].value = folderpath;
		}
	});
};

const handle_exeButtonClick = () => {
	showProgress(true);
	
	const process = controls.drpProcess.value;
	const okMsgs = ['Conversión realizada con éxito'];
	const htmlDir = controls.dirHTextbox.value;
	const latexDir = controls.dirLTextbox.value;
	const jsonDir = controls.dirJTextbox.value;
	const txtDir = controls.dirTTextbox.value;
	const wikiDir = controls.dirWTextbox.value;
	const category = controls.drpCategories.value;
	const merge = controls.chkMerge.checked;
	const ctrls = Processes[process].controls;

	if (!checkControls(ctrls)) {
		return;
	}

	if (process ==='BIBREF_TXT_LU_JSON_TO_TXT') {
		// Leemos LU (*.json) + Refs Biblia (*.txt) => escribimos traducción (*.txt)
		book.readFromJSON(jsonDir)
			.then(() => bibleref.readFromTXT(txtDir))
			.then(() => bibleref.translate(txtDir, book))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_JSON_TO_BIBREF_JSON') {
		// Leemos LU (*.json) de una traducción con Refs Biblia => escribimos (*.json)
		book.readFromJSON(jsonDir)
			.then(() => book.writeRefsToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_JSON_BIBLEREF_JSON_TO_JSON') {
		//Leemos LU (*.json) + Refs Biblia (*.json) => escribimos (*.json)
		book.readFromJSON(jsonDir)
			.then(() => book.readRefsFromJSON(jsonDir))
			.then(() => book.updateRefs())
			.then(() => {
				const baseName = path.basename(jsonDir);
				let parentPath = path.dirname(jsonDir);
				let newjsonDir = path.join(parentPath, `${baseName}-footnotes`);
				if (!fs.existsSync(newjsonDir)) {
					return Promise.reject(
						[new Error(`Es necesario crear la carpeta ${baseName}-footnotes`)]);
				}
				return book.writeToJSON(newjsonDir);
			})
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_HTML_TO_JSON') {
		// Leemos LU (*.html) => escribimos (*.json)
		book.readFromHTML(htmlDir)
			.then(() => book.writeToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_TEX_TO_JSON') {
		// Leemos LU (*.tex) => escribimos (*.json)
		book.readFromLaTeX(latexDir)
			.then(() => book.writeToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_TEX_TOPIC_TXT_TO_WIKI') {
		// Leemos LU (*.tex) + Topic Index (*.txt) => escribimos (*.wiki)
		book.readFromLaTeX(latexDir)
			.then(() => topicindex.readFromTXT(txtDir, category))
			.then(() => book.writeToWiki(wikiDir, topicindex))
			.then(() => book.writeWarnings(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_TEX_TO_XML') {
		// Leemos LU (*.tex) => escribimos Wiki (*.xml)
		// book.readFromLaTeX(latexDir)
		// 	.then(() => book.writeToWikiXML(wikiDir, merge))
		// 	.then(() => onSuccess(okMsgs))
		// 	.catch(onFail);
	} else if (process === 'LU_JSON_TO_TEX') {
		// Leemos LU (*.json) => escribimos (*.tex) 
		book.readFromJSON(jsonDir)
			.then(() => book.writeToLaTeX(latexDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_JSON_TOPIC_TXT_TO_WIKI') {
		// Leemos LU (*.json) + Topic Index (*.txt) => escribimos (*.wiki)
		book.readFromJSON(jsonDir)
			.then(() => topicindex.readFromTXT(txtDir, category))
			.then(() => book.writeToWiki(wikiDir, topicindex))
			.then(() => book.writeWarnings(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_JSON_TO_XML') {
		// Leemos LU (*.json) => escribimos Wiki (*.xml)
		// book.readFromJSON(jsonDir)
		// 	.then(() => book.writeToWikiXML(wikiDir))
		// 	.then(() => onSuccess(okMsgs))
		// 	.catch(onFail);
	} else if (process === 'LUINDEX_JSON_TO_WIKI') {
		//Leemos LU (*.json) => escribimos Indices (*.wiki)
		book.readFromJSON(jsonDir)
			.then(() => book.writeIndexToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIB_TEX_BIBREF_TXT_TO_WIKI') {
		// Leemos Refs Biblia (*.txt) + leemos Biblia (*.tex) => escribimos (*.wiki)
		bibleref.readFromTXT(txtDir)
			.then(() => bible.readFromLaTeX(latexDir))
			.then(() => bible.writeToWiki(wikiDir, bibleref))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIB_TEX_TO_BIBINDEX_WIKI') {
		// Leemos Biblia (*.tex) => escribimos índice (*.wiki)
		bible.readFromLaTeX(latexDir)
			.then(() => bible.writeIndexToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIB_TEX_TO_XML') {
		// Leemos Biblia (*.tex) => escribimos Wiki (*.xml)
		// bible.readFromLaTeX(latexDir)
		// 	.then(() => bible.writeToWikiXML(wikiDir, merge))
		// 	.then(() => onSuccess(okMsgs))
		// 	.catch(onFail);
	} else if (process === 'TOPIC_TXT_TO_WIKI') {
		// Leemos TopicIndex (*.txt) => escribimos en (*.wiki)
		topicindex.readFromTXT(txtDir, category)
			.then(() => topicindex.writeToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'TOPICINDEX_TXT_TO_WIKI') {
		// Leemos Indice de TopicIndex (*.txt) => escribimos (*.wiki)
		topicindex.readFromTXT(txtDir, category)
			.then(() => topicindex.writeIndexToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'REVIEW_TOPIC_TXT_LU_JSON') {
		// Leemos TopicIndex (*.txt) => luego leemos LU (*.json)
		topicindex.readFromTXT(txtDir, category)
			.then(() => book.readFromJSON(jsonDir))
			.then(() => topicindex.check(book))
			.then(() => topicindex.writeErrors(txtDir))
			.then(() => {
				showTopicList();
				onSuccess(okMsgs);
				showTopic(topicindex.topics[0].name);
			}).catch(onFail);
	} else if (process === 'SUM_TOPIC_TXT') {
		// Leemos TopicIndex (*.txt) => luego sacamos un resumen
		topicindex.readFromTXT(txtDir, 'TODOS')
			.then(() => {
				let summary = topicindex.getSummary();
				onSuccess(okMsgs);
				showTopicSummary(summary);
			}).catch(onFail);
	} else if (process === 'NORM_TOPIC_TXT') {
		// Leemos TopicIndex (*.txt) => volvemos a escribir igual
		// pero modificando la primera línea de cada entrada
		topicindex.normalize(txtDir)
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'ARTICLE_TXT_TO_WIKI') {
		// Leemos carpeta con TXT => escribimos (*.wiki)
		articles.readFromTXT(txtDir)
			.then(() => articles.writeToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	}
};

const handle_drpTopicsChange = (evt) => {
	showTopic(controls.drpTopics.value);
};

const checkControls = (cnames) => {
	const ctrls = cnames.map(c => controls[c]);
	if (ctrls.find(cc => cc.localName === 'input' && cc.value === '')) {
		onFail([new Error('Falta uno de los directorios de entrada')]);
		return false;
	}
	return true;
};

const onSuccess = (infos) => {
	showInfos(infos);
	showProgress(false);
};

const onFail = (errors) => {
	showErrors(errors);
	showProgress(false);
};

const showProgress = (show) => {
	controls.progress.classList.toggle('d-none', !show);
};

const showErrors = (errors) => {
	controls.logArea.innerHTML = errors.map(err=> {
		return `<p class="text-danger mb-1">${err.message}</p>`;
	}).join('');
};

const showInfos = (infos) => {
	controls.logArea.innerHTML = infos.map(info=> {
		return `<p class="mb-1">${info}</p>`;
	}).join('');
};

const showTopicList = () => {
	// Rellenamos desplegable
	const topics = topicindex.topics
		/*.filter(t => t.type != 'OTRO' && t.lines.length < 4)*/
		.sort((a, b) => {
			if (a.sorting > b.sorting) return 1;
			if (a.sorting < b.sorting) return -1;
			return 0;
		});
	controls.drpTopics.innerHTML = topics
		.map(t => {
			const n = t.name;
			const errs = t.errors && t.errors.length > 0 ? 
				`  [Errors: ${t.errors.length}]` : '';
			const style = t.errors && t.errors.length > 0 ? 
				` style="background-color:#f8d7da"` : '';
			return `<option value="${n}"${style}>${n} [${t.type}]${errs}</option>`;
		})
		.join('');
};

const showTopic = (name) => {
	let html = `<h2 class="mb-1">${name}</h2>`;
	
	const topic = topicindex.topics.find(t => t.name === name);
	if (topic) {
		html += `<h4 class="mb-1">${topic.sorting}</h4>`;
		html += topic.errors.map(err => {
			return `<p class="mb-0 alert alert-danger">${err.desc} [${topic.filename}:${err.fileline}]</p>`;
		}).join('');
		html += topic.lines.map(line => {
			return `<p class="mb-1"><strong>${line.text}</strong></p>` +
				line.refs.map(ref => {
					let arRefs = null;
					try {
						arRefs = book.getRefs(ref);
					} catch (er) {
						return `<p class="mb-0 alert alert-danger">Error en referencia ${ref}</p>`;
					}
					return arRefs.map(r => {
						const par = book.getPar(r[0], r[1], r[2]);
						return `<p class="mb-2"><em>${par.par_content}</em> [LU ${r[0]}:${r[1]}.${r[2]}]</p>`;
					}).join('');
					
					// const data = ref.split(/[:.]/g);
					// if (data.length < 2) return null;
					// const doc = parseInt(data[0]), sec = parseInt(data[1]);
					// const ppar = (data.length > 2 ? data[2].match(/^[0-9]+/g) : null);
					// let par = (ppar ? parseInt(ppar[0]) : null);
					// par = (par == null || isNaN(par) ? 1 : par);
					// if (isNaN(doc) || isNaN(sec)) return null;
					// const paper = book.papers.find(p => p.paper_index === doc);
					// if (!paper) return null;
					// const section = paper.sections.find(s => s.section_index === sec);
					// if (!section) return null;
					// const parr = section.pars.find(p =>
					// 	p.par_ref === `${doc}:${sec}.${par}`);
					// if (!parr) return null;
					
					
				}).filter(r => r != null).join('');
		}).join('');
	}
	controls.logArea.innerHTML = html;
};

const showTopicSummary = (obj) => {
	var columns = ['#', 'PERSONA', 'LUGAR', 'ORDEN', 'RAZA', 'RELIGION', 'OTRO', 
		'REDIREC', 'REVISADO', 'TOTAL'];
	var columns2 = columns.slice(1);
	let headers = columns.map(c => `<th scope="col">${c}</th>`).join('');
	let header = `<thead class="thead-dark"><tr>${headers}</tr></thead>`;
	let footerTh = '<th scope="row">TOTAL</th>';

	const buildTableBody = (isLines) => {
		let b = '';
		for (let letter in obj) {
			const o = (isLines ? obj[letter].lines : obj[letter]);
			const r = columns2.map(c => {
				const len = (o[c] != undefined ? o[c] : '-');
				return `<th>${len}</th>`;
			}).join('');
			b += `<tr><th scope="row">${letter.toUpperCase()}</th>${r}</tr>`;
		}
		return b;
	};
	const buildTableFooter = (isLines) => {
		return footerTh + columns2.map(c => {
			let len = 0;
			for (let letter in obj) {
				const o = (isLines ? obj[letter].lines : obj[letter]);
				len += (o[c] != undefined ? o[c] : 0);
			}
			return `<th>${len}</th>`;
		}).join('');
	};

	//Tabla de número de términos
	const body = buildTableBody(false);
	const footer = buildTableFooter(false);
	const html = `<table class="table table-striped">${header}` +
		`<tbody>${body}<tr>${footer}</tr></tbody></table>`;

	//Tabla de número de líneas
	const body2 = buildTableBody(true);
	const footer2 = buildTableFooter(true);
	const html2 = `<table class="table table-striped">${header}` +
		`<tbody>${body2}<tr>${footer2}</tr></tbody></table>`;
	
	controls.logArea.innerHTML = html + html2;
};

const onProgress = (baseName) => {
	showInfos(['Procesando documento ' + baseName]);
};

document.addEventListener('DOMContentLoaded', onLoad);