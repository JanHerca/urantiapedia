const {dialog} = require('electron').remote;
const Book = require('./book');
const Bible = require('./bible');
const BibleRef = require('./bibleref');
const TopicIndex = require('./topicindex');

const book = new Book();
const bible = new Bible();
const bibleref = new BibleRef();
const topicindex = new TopicIndex();
const controlIDs = [
	'dirTButton', 'dirTTextbox',
	'dirLButton', 'dirLTextbox', 
	'dirJButton', 'dirJTextbox', 
	'dirWButton', 'dirWTextbox', 
	'drpProcess', 'exeButton', 'logArea', 'collapseButton',
	'progress', 'chkMerge', 
	'drpTopics', 'drpCategories'];
const controls = {};
let collapsed = false;

const onLoad = () => {
	controlIDs.forEach(id => controls[id] = document.querySelector('#' + id));
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
	controls.drpTopics.addEventListener('change', handle_drpTopicsChange);
	showCategoriesList();
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
	document.querySelectorAll('form > div').forEach((e, i, ar) => {
		if (i < ar.length - 2) {
			if (collapsed) e.classList.add('d-none');
			else e.classList.remove('d-none');
		}
	});
};

const handle_exeButtonClick = () => {
	showProgress(true);
	book.onProgressFn = onProgress;
	const process = controls.drpProcess.value;
	const okMsgs = ['Conversión realizada con éxito'];
	const latexDir = controls.dirLTextbox.value;
	const jsonDir = controls.dirJTextbox.value;
	const txtDir = controls.dirTTextbox.value;
	const wikiDir = controls.dirWTextbox.value;
	const category = controls.drpCategories.value;

	if (process ==='ttt' && checkControls(['dirJTextbox', 'dirTTextbox'])) {
		// Leemos LU (*.json) + Referencias Biblia (*.txt) => escribimos traducción (*.txt)
		book.readFromJSON(jsonDir)
			.then(() => bibleref.readFromTXT(txtDir))
			.then(() => bibleref.translate(txtDir, book))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'clj' && checkControls(['dirLTextbox', 'dirJTextbox'])) {
		// Leemos LU (*.tex) => escribimos (*.json)
		book.readFromLaTeX(latexDir)
			.then(() => book.writeToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'clw' && checkControls(['dirLTextbox', 'dirTTextbox', 'dirWTextbox'])) {
		// Leemos LU (*.tex) + Topic Index (*.txt) => escribimos (*.wiki)
		book.readFromLaTeX(latexDir)
			.then(() => topicindex.readFromTXT(txtDir, category))
			.then(() => book.writeToWiki(wikiDir, topicindex))
			.then(() => book.writeWarnings(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} /*else if (process === 'clx' && checkControls(['dirLTextbox', 'dirWTextbox'])) {
		// Leemos LU (*.tex) => escribimos Wiki (*.xml)
		book.readFromLaTeX(latexDir)
			.then(() => book.writeToWikiXML(wikiDir, controls.chkMerge.checked))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	}*/ else if (process === 'cjl' && checkControls(['dirJTextbox', 'dirLTextbox'])) {
		// Leemos LU (*.json) => escribimos (*.tex) 
		book.readFromJSON(jsonDir)
			.then(() => book.writeToLaTeX(latexDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'cjw' && checkControls(['dirJTextbox', 'dirTTextbox', 'dirWTextbox'])) {
		// Leemos LU (*.json) + Topic Index (*.txt) => escribimos (*.wiki)
		book.readFromJSON(jsonDir)
			.then(() => topicindex.readFromTXT(txtDir, category))
			.then(() => book.writeToWiki(wikiDir, topicindex))
			.then(() => book.writeWarnings(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} /*else if (process === 'cjx' && checkControls(['dirJTextbox', 'dirWTextbox'])) {
		// Leemos LU (*.json) => escribimos Wiki (*.xml)
		book.readFromJSON(jsonDir)
			.then(() => book.writeToWikiXML(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	}*/ else if (process === 'cijw' && checkControls(['dirJTextbox', 'dirWTextbox'])) {
		//Leemos LU (*.json) => escribimos Indices (*.wiki)
		book.readFromJSON(jsonDir)
			.then(() => book.writeIndexToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'cblw' && checkControls(['dirTTextbox', 'dirLTextbox', 'dirWTextbox'])) {
		// Leemos Referencias Biblia (*.txt) + leemos Biblia (*.tex) => escribimos (*.wiki)
		bibleref.readFromTXT(txtDir)
			.then(() => bible.readFromLaTeX(latexDir))
			.then(() => bible.writeToWiki(wikiDir, bibleref))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'cbi' && checkControls(['dirLTextbox', 'dirWTextbox'])) {
		// Leemos Biblia (*.tex) => escribimos índice (*.wiki)
		bible.readFromLaTeX(latexDir)
			.then(() => bible.writeIndexToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} /*else if (process === 'cblx' && checkControls(['dirLTextbox', 'dirWTextbox'])) {
		// Leemos Biblia (*.tex) => escribimos Wiki (*.xml)
		bible.readFromLaTeX(latexDir)
			.then(() => bible.writeToWikiXML(wikiDir, controls.chkMerge.checked))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	}*/ else if (process === 'ctiw' && checkControls(['dirTTextbox', 'dirWTextbox'])) {
		// Leemos TopicIndex (*.txt) => escribimos en (*.wiki)
		topicindex.readFromTXT(txtDir, category)
			.then(() => topicindex.writeToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'citw' && checkControls(['dirTTextbox', 'dirWTextbox'])) {
		// Leemos Indice de TopicIndex (*.txt) => escribimos (*.wiki)
		topicindex.readFromTXT(txtDir, category)
			.then(() => topicindex.writeIndexToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'rti' && checkControls(['dirTTextbox', 'dirJTextbox'])) {
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
	} else if (process === 'sti' && checkControls(['dirTTextbox'])) {
		// Leemos TopicIndex (*.txt) => luego sacamos un resumen
		topicindex.readFromTXT(txtDir, 'TODOS')
			.then(() => {
				let summary = topicindex.getSummary();
				onSuccess(okMsgs);
				showTopicSummary(summary);
			}).catch(onFail);
	} else if (process === 'nti' && checkControls(['dirTTextbox'])) {
		// Leemos TopicIndex (*.txt) => volvemos a escribir igual
		// pero modificando la primera línea de cada entrada
		topicindex.normalize(txtDir)
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	}
};

const handle_drpTopicsChange = (evt) => {
	showTopic(controls.drpTopics.value);
};

const checkControls = (cnames) => {
	if (cnames.map(c => controls[c]).find(cc => cc.value === '')) {
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

const showCategoriesList = () => {
	const topicTypes = [
		'TODOS', 'PERSONA', 'LUGAR', 'ORDEN', 'RAZA', 'RELIGION', 'OTRO'];
	controls.drpCategories.innerHTML = topicTypes
		.map(t => `<option value="${t}">${t}</option>`)
		.join('');
};

const onProgress = (baseName) => {
	showInfos(['Procesando documento ' + baseName]);
};

document.addEventListener('DOMContentLoaded', onLoad);