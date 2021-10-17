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
const extendArray = require('./utils').extendArray;

const book = new Book();
const bible = new Bible();
const bibleref = new BibleRef();
const topicindex = new TopicIndex();
const articles = new Articles();

const topicindexEdit = new TopicIndex();

let lan = 'en';
let uilan = 'en';

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
	drpUILanguage: null,
	lblUILanguage: null,
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
	lblCategories: null,
	lblProccesses: null,
	lblTopicIndex: null,
	drpCategories2: null,
	lblCategories2: null,
	lbxTopics: null,
	drpTopicLanguage1: null,
	drpTopicLanguage2: null
};
let collapsed = false;

const collapsableControls = ['dirHTextbox', 'dirTTextbox', 'dirLTextbox', 
	'dirJTextbox', 'dirWTextbox', 'chkMerge', 'drpCategories', 'drpTopics'];

const topicTypes = ['ALL', 'PERSON', 'PLACE', 'ORDER', 'RACE', 'RELIGION', 
	'OTHER', 'NONE'];

const onLoad = () => {
	Object.keys(controls).forEach(id => controls[id] = document.querySelector('#' + id));

	//Fill Book language dropdown
	[controls.drpLanguage, controls.drpTopicLanguage1, controls.drpTopicLanguage2]
		.forEach(c => {
			c.innerHTML = Object.keys(Strings['bookLanguages']).map(key => {
				const desc = Strings['bookLanguages'][key];
				const sel = (lan == key ? ' selected' : '');
				return `<option value="${key}"${sel}>${desc}</option>`;
			}).join('');
		});

	//Set handlers
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
	controls.drpUILanguage.addEventListener('change', handle_drpUILanguageChange);
	controls.drpProcess.addEventListener('change', handle_drpProcessChange);
	controls.drpTopics.addEventListener('change', handle_drpTopicsChange);
	controls.drpCategories2.addEventListener('change', handle_drpCategories2Change);
	book.onProgressFn = onProgress;
	bible.onProgressFn = onProgress;
	bibleref.onProgressFn = onProgress;
	topicindex.onProgressFn = onProgress;
	articles.onProgressFn = onProgress;

	//Update tabbable
	$('#myTab a').on('click', function(e) {
		e.preventDefault();
		$(this).tab('show');
	});

	//Update UI
	handle_drpUILanguageChange();
	handle_drpProcessChange();
};

const updateUI = () => {
	const process = controls.drpProcess.value;

	controls.drpProcess.innerHTML = Object.keys(Processes).map(key => {
		const p = Processes[key];
		const desc = p.desc[uilan];
		const sel = (process == key ? ' selected' : '');
		return (p.active ? `<option value="${key}"${sel}>${desc}</option>` : '');
	}).join('');

	controls.drpCategories.innerHTML = topicTypes
		.map(t => `<option value="${t}">${t}</option>`)
		.join('');
	controls.drpCategories2.innerHTML = topicTypes
		.map(t => `<option value="${t}">${t}</option>`)
		.join('');

	Object.keys(controls).forEach(key => {
		const control = controls[key];
		const tagName = control.tagName.toUpperCase();
		const text = (Strings[key] ? Strings[key][uilan] : '');
		if (tagName === 'LABEL' || tagName === 'BUTTON' || tagName === 'SPAN') {
			control.innerHTML = text;
		} else if (tagName === 'INPUT' && text != '') {
			control.setAttribute('placeholder', text);
		}
	});
};

const updateDefaultPaths = () => {
	const process = controls.drpProcess.value;
	if (!process || !Processes[process]) {
		return;
	}
	const cnames = Processes[process].controls;
	const paths = Processes[process].paths;
	const subpath = (Processes[process].subpath ? 
		Processes[process].subpath[lan] : '');
	cnames.forEach((c,i) => {
		if (paths && paths[i]) {
			const folderpath = path.join(app.getAppPath(), 'input',
				strformat(paths[i], lan, `/${subpath}`));
			controls[c].value = folderpath;
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
	lan = controls.drpLanguage.value;
	book.setLanguage(lan);
	bible.setLanguage(lan);
	bibleref.setLanguage(lan);
	topicindex.setLanguage(lan);
	articles.setLanguage(lan);
	updateDefaultPaths();
};

const handle_drpUILanguageChange = (evt) => {
	uilan = controls.drpUILanguage.value;
	updateUI();
};

const handle_drpProcessChange = (evt) => {
	const process = controls.drpProcess.value;
	if (!process || !Processes[process]) {
		return;
	}
	const cnames = Processes[process].controls;
	collapsableControls.forEach(c => {
		// const control = controls[c];
		
		// const tagName = control.tagName.toUpperCase();
		const hide = (collapsed || cnames.indexOf(c) === -1);
		$(controls[c]).closest('.form-group').toggleClass('d-none', hide);
		// const parent = (tagName === 'INPUT' ? control.parentNode.parentNode :
		// 	control.parentNode.parentNode.parentNode);
		// parent.classList.toggle('d-none', hide);
	});
	updateDefaultPaths();
};

const handle_drpCategories2Change = () => {
	const category = controls.drpCategories2.value;
	const txtDir = path.join(app.getAppPath(), 'input', `txt/topic-index-${lan}`);
	topicindexEdit.readFromTXT(txtDir, category)
		.then(() => showTopicListEdit())
		.catch(onFail);
};

const handle_exeButtonClick = () => {
	showProgress(true);
	
	const process = controls.drpProcess.value;
	const okMsgs = [Strings['success'][uilan]];
	const htmlDir = controls.dirHTextbox.value;
	const latexDir = controls.dirLTextbox.value;
	const jsonDir = controls.dirJTextbox.value;
	const txtDir = controls.dirTTextbox.value;
	const wikiDir = controls.dirWTextbox.value;
	const category = controls.drpCategories.value;
	// const merge = controls.chkMerge.checked;
	const ctrls = Processes[process].controls;

	if (!checkControls(ctrls)) {
		return;
	}

	if (process ==='BIBREF_TXT_LU_JSON_TO_TXT') {
		// Read UB (*.json) + Bible Refs (*.txt) => write translation (*.txt)
		book.readFromJSON(jsonDir)
			.then(() => bibleref.readFromTXT(txtDir))
			.then(() => bibleref.translate(txtDir, book))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_JSON_TO_BIBREF_JSON') {
		// Read UB (*.json) from a translation with Bible Refs => write (*.json)
		book.readFromJSON(jsonDir)
			.then(() => book.writeRefsToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_JSON_BIBLEREF_JSON_TO_JSON') {
		//Read UB (*.json) + Bible Refs (*.json) => write (*.json)
		book.readFromJSON(jsonDir)
			.then(() => book.readRefsFromJSON(jsonDir))
			.then(() => book.updateRefs())
			.then(() => {
				const baseName = path.basename(jsonDir);
				let parentPath = path.dirname(jsonDir);
				let newjsonDir = path.join(parentPath, `${baseName}-footnotes`);
				if (!fs.existsSync(newjsonDir)) {
					return Promise.reject([new Error(
						strformat(Strings['footnotes_folder_required'][uilan],
						baseName))]);
				}
				return book.writeToJSON(newjsonDir);
			})
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_HTML_TO_JSON') {
		// Read UB (*.html) => write (*.json)
		book.readFromHTML(htmlDir)
			.then(() => book.writeToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_TEX_TO_JSON') {
		// Read UB (*.tex) => write (*.json)
		book.readFromLaTeX(latexDir)
			.then(() => book.writeToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_TEX_TOPIC_TXT_TO_WIKI') {
		// Read UB (*.tex) + Topic Index (*.txt) => write (*.wiki)
		book.readFromLaTeX(latexDir)
			.then(() => topicindex.readFromTXT(txtDir, category))
			.then(() => book.writeToWiki(wikiDir, topicindex))
			.then(() => book.writeWarnings(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_TEX_TO_XML') {
		// Read UB (*.tex) => write Wiki (*.xml)
		// book.readFromLaTeX(latexDir)
		// 	.then(() => book.writeToWikiXML(wikiDir, merge))
		// 	.then(() => onSuccess(okMsgs))
		// 	.catch(onFail);
	} else if (process === 'LU_JSON_TO_TEX') {
		// Read UB (*.json) => write (*.tex) 
		book.readFromJSON(jsonDir)
			.then(() => book.writeToLaTeX(latexDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_JSON_TOPIC_TXT_TO_WIKI') {
		// Read UB (*.json) + Topic Index (*.txt) => write (*.wiki)
		book.readFromJSON(jsonDir)
			.then(() => topicindex.readFromTXT(txtDir, category))
			.then(() => book.writeToWiki(wikiDir, topicindex))
			.then(() => book.writeWarnings(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'LU_JSON_TO_XML') {
		// Read UB (*.json) => write Wiki (*.xml)
		// book.readFromJSON(jsonDir)
		// 	.then(() => book.writeToWikiXML(wikiDir))
		// 	.then(() => onSuccess(okMsgs))
		// 	.catch(onFail);
	} else if (process === 'LUINDEX_JSON_TO_WIKI') {
		//Read UB (*.json) => write Indexes (*.wiki)
		book.readFromJSON(jsonDir)
			.then(() => book.writeIndexToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIB_TEX_BIBREF_TXT_TO_WIKI') {
		// Read Bible Refs (*.txt) + read Bible (*.tex) => write (*.wiki)
		bibleref.readFromTXT(txtDir)
			.then(() => bible.readFromLaTeX(latexDir))
			.then(() => bible.writeToWiki(wikiDir, bibleref))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIB_TEX_TO_BIBINDEX_WIKI') {
		// Read Bible (*.tex) => write index (*.wiki)
		bible.readFromLaTeX(latexDir)
			.then(() => bible.writeIndexToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIB_TEX_TO_XML') {
		// Read Bible (*.tex) => write Wiki (*.xml)
		// bible.readFromLaTeX(latexDir)
		// 	.then(() => bible.writeToWikiXML(wikiDir, merge))
		// 	.then(() => onSuccess(okMsgs))
		// 	.catch(onFail);
	} else if (process === 'TOPIC_TXT_TO_WIKI') {
		// Read TopicIndex (*.txt) => write (*.wiki)
		topicindex.readFromTXT(txtDir, category)
			.then(() => topicindex.writeToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'TOPICINDEX_TXT_TO_WIKI') {
		// Read TopicIndex index (*.txt) => write (*.wiki)
		topicindex.readFromTXT(txtDir, category)
			.then(() => topicindex.writeIndexToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'REVIEW_TOPIC_TXT_LU_JSON') {
		// Read TopicIndex (*.txt) => Read UB (*.json) => check
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
		// Read TopicIndex (*.txt) => summary
		topicindex.readFromTXT(txtDir, 'TODOS')
			.then(() => {
				let summary = topicindex.getSummary();
				onSuccess(okMsgs);
				showTopicSummary(summary);
			}).catch(onFail);
	} else if (process === 'NORM_TOPIC_TXT') {
		// Read TopicIndex (*.txt) => rewrite but modifying first entry line
		topicindex.normalize(txtDir)
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'ARTICLE_TXT_TO_WIKI') {
		// Read TXT folder => write (*.wiki)
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
		onFail([new Error(Strings['folder_required'][uilan])]);
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
		const stack = err.stack.split('at').slice(0, 2).join('at');
		return `<p class="text-danger mb-1">${err.message} | ${stack}</p>`;
	}).join('');
};

const showInfos = (infos) => {
	controls.logArea.innerHTML = infos.map(info=> {
		return `<p class="mb-1">${info}</p>`;
	}).join('');
};

const showTopicList = () => {
	// Fill dropdown
	const topics = topicindex.topics
		/*.filter(t => t.type != 'OTHER' && t.lines.length < 4)*/
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

const showTopicListEdit = () => {
	// Fill dropdown
	const topics = topicindexEdit.topics
		/*.filter(t => t.type != 'OTHER' && t.lines.length < 4)*/
		.sort((a, b) => {
			if (a.sorting > b.sorting) return 1;
			if (a.sorting < b.sorting) return -1;
			return 0;
		});
	controls.lbxTopics.innerHTML = topics
		.map(t => {
			const n = t.name;
			const errs = t.errors && t.errors.length > 0 ? 
				`  [Errors: ${t.errors.length}]` : '';
			const style = t.errors && t.errors.length > 0 ? 
				` style="background-color:#f8d7da"` : '';
			return `<div class="list-group-item btn-sm list-group-item-action py-0 px-2 flex-column align-items-start">
					<div class="d-flex w-100 justify-content-between pb-1">
						<div>${n}</div>
						<div>${t.type}</div>
					</div>
				</div>`;
				// 'list-group-item btn-sm list-group-item-action px-0' + 
				// ' flex-column align-items-start'
			// return `<option value="${n}"${style}>${n} [${t.type}]${errs}</option>`;
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
	const columns = ['#', 'PERSON', 'PLACE', 'ORDER', 'RACE', 'RELIGION', 'OTHER', 
		'REDIREC', 'REVISED', 'TOTAL'];
	const columns2 = columns.slice(1);
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

	//Table of topic count
	const body = buildTableBody(false);
	const footer = buildTableFooter(false);
	const html = `<table class="table table-striped">${header}` +
		`<tbody>${body}<tr>${footer}</tr></tbody></table>`;

	//Table of line count
	const body2 = buildTableBody(true);
	const footer2 = buildTableFooter(true);
	const html2 = `<table class="table table-striped">${header}` +
		`<tbody>${body2}<tr>${footer2}</tr></tbody></table>`;
	
	controls.logArea.innerHTML = html + html2;
};

const onProgress = (baseName) => {
	showInfos([strformat(Strings['proccessing'][lan], baseName)]);
};

document.addEventListener('DOMContentLoaded', onLoad);