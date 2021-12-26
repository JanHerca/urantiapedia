const {dialog, app} = require('electron').remote;
const shell = require('electron').shell;
const Store = require('electron-store');
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
const replaceTags = require('./utils').replaceTags;
const extendArray = require('./utils').extendArray;

const store = new Store();

const book = new Book();
const bible = new Bible();
const bibleref = new BibleRef();
const topicindex = new TopicIndex();
const topicindexEN = new TopicIndex();
const articles = new Articles();

const topicindexEdit = new TopicIndex();
const topicindexEdit2 = new TopicIndex();
const bookEdit = new Book();
const bookEdit2 = new Book();

let lan = 'en';

const controls = {
	btnLogo: null,
	lblProccesses: null,
	lblTopicIndex: null,
	lblSettings: null,
	//Processes
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
	drpTopics: null,
	lblTopics: null,
	drpLanguage: null,
	lblLanguage: null,
	lblCategories: null,
	drpCategories: null,
	lblProcess: null,
	drpProcess: null,
	exeButton: null,
	logArea: null,
	collapseButton: null,
	progress: null,
	chkMerge: null,
	chkMergeLabel: null,
	//Topic index editor
	drpTICategories: null,
	lblTICategories: null,
	spinTILoading: null,
	lbxTITopics: null,
	drpTILanguage1: null,
	drpTILanguage2: null,
	lblTILanguage1: null,
	lblTILanguage2: null,
	lblTIName: null,
	lblTIAliases: null,
	lblTIRevised: null,
	lblTIRefs: null,
	lblTISeeAlso: null,
	lblTILinks: null,
	lblTICategory: null,
	txtTIName: null,
	drpTIAliases: null,
	drpTIRefs: null,
	drpTISeeAlso: null,
	drpTILinks: null,
	drpTICategory: null,
	lbxTILines: null,
	lbxTIUBLines: null,
	btnTIAddTopic: null,
	btnTIRemoveTopic: null,
	btnTIRenameTopic: null,
	btnTISaveChanges: null,
	btnTIAddAlias: null,
	btnTIRemoveAlias: null,
	btnTIAddRef: null,
	btnTIRemoveRef: null,
	btnTIAddSeeAlso: null,
	btnTIRemoveSeeAlso: null,
	btnTIAddLink: null,
	btnTIRemoveLink: null,
	txtTIName: null,
	chkTopicRevised: null,
	lblTILetters: null,
	drpTILetters: null,
	btnTILoadTopics: null,
	igrTILoadTopics: null,
	lblTIFilterRevised: null,
	chkTopicFilterRevised: null,
	lblTIFilterErrors: null,
	chkTopicFilterErrors: null,
	//Settings
	drpUILanguage: null,
	lblUILanguage: null,
	drpTheme: null,
	lblTheme: null
};
let collapsed = false;
let topicEditing = null;
let filelineEditing = null;
const settings = {
	language: 'en',
	theme: 'default'
};
const logInfos = [];

const collapsableControls = ['dirHTextbox', 'dirTTextbox', 'dirLTextbox', 
	'dirJTextbox', 'dirWTextbox', 'chkMerge', 'drpCategories'/*, 'drpTopics'*/];
const topicTypes = ['PERSON', 'PLACE', 'ORDER', 'RACE', 'RELIGION', 'OTHER'];
const topicFilters = ['ALL', ...topicTypes];

const themes = ['Default', 'Cerulean', 'Darkly', 'Litera', 'Materia', 'Pulse',
	'Simplex', 'Solar', 'United', 'Cosmo<', 'Flatly', 'Lumen', 'Minty',
	'Sketchy', 'Spacelab', 'Cyborg', 'Journal', 'Lux', 'Sandstone', 'Slate',
	'Superhero', 'Yeti'];

const onLoad = () => {
	Object.keys(controls).forEach(id => controls[id] = document.querySelector('#' + id));

	//Fill Book language dropdown
	[controls.drpLanguage, controls.drpTILanguage1, controls.drpTILanguage2]
		.forEach(c => {
			c.innerHTML = Object.keys(Strings['bookLanguages']).map(key => {
				const desc = Strings['bookLanguages'][key];
				const sel = (lan == key ? ' selected' : '');
				return `<option value="${key}"${sel}>${desc}</option>`;
			}).join('');
		});

	//Set handlers
	controls.btnLogo.addEventListener('click',
		handle_btnLogoClick);
	//Processes
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
	controls.exeButton.addEventListener('click', 
		handle_exeButtonClick);
	controls.collapseButton.addEventListener('click', 
		handle_collapseButtonClick);
	controls.drpLanguage.addEventListener('change', 
		handle_drpLanguageChange);
	controls.drpProcess.addEventListener('change', 
		handle_drpProcessChange);
	controls.drpTopics.addEventListener('change', 
		handle_drpTopicsChange);
	//Topic Index Editor
	controls.drpTILanguage1.addEventListener('change', 
		handle_drpTILanguage1Change);
	controls.drpTILanguage2.addEventListener('change', 
		handle_drpTILanguage2Change);
	controls.btnTISaveChanges.addEventListener('click',
		handle_btnTISaveChangesClick);
	controls.igrTILoadTopics.addEventListener('click',
		handle_igrTILoadTopicsClick);
	//Settings
	controls.drpUILanguage.addEventListener('change', 
		handle_drpUILanguageChange);
	controls.drpTheme.addEventListener('change',
		handle_drpThemeChange);

	//Set progress funcs
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

	//Update tooltips
	$('[data-toggle="tooltip"]').tooltip();

	//Update UI
	settings.language = store.get('language', settings.language);
	settings.theme = store.get('theme', settings.theme);
	fillDropdown(controls.drpTheme, themes.map(t => t.toLowerCase()), themes,
		settings.theme);
	controls.drpUILanguage.value = settings.language;
	controls.drpTheme.value = settings.theme;
	handle_drpUILanguageChange();
	handle_drpThemeChange();
	handle_drpProcessChange();

	setTIDisabledStatus(true);
};

const fillDropdown = (control, values, descs, currentValue) => {
	control.innerHTML = values.map((v, i) => {
		const sel = (currentValue == v ? ' selected' : '');
		return `<option value="${v}"${sel}>${descs[i]}</option>`;
	}).join('');
};

const handle_btnLogoClick = () => {
	shell.openExternal('https://github.com/JanHerca/urantiapedia');
};

const updateUI = () => {
	const uilan = settings.language;
	const procs = Object.keys(Processes).map(key => {
		const p = Processes[key];
		return {key: key, desc: p.desc[uilan], active: p.active};
	}).filter(p => p.active === true);
	const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const lettersVals = ['ALL', '_', ...letters];
	const lettersDescs = ['ALL', 'NUMBER', ...letters.map(l => l.toUpperCase())];

	const data = {
		drpProcess: {values: procs.map(p => p.key), descs: procs.map(p => p.desc)},
		drpCategories: {values: topicFilters, descs: topicFilters},
		drpTICategories: {values: topicFilters, descs: topicFilters},
		drpTICategory: {values: topicTypes, descs: topicTypes},
		drpTILetters: {values: lettersVals, descs: lettersDescs}
	};
	
	Object.keys(data).forEach(key => {
		fillDropdown(controls[key], data[key].values, data[key].descs, 
			controls[key].value);
	});

	Object.keys(controls).forEach(key => {
		const control = controls[key];
		const tagName = control.tagName.toUpperCase();
		const text = (Strings[key] ? Strings[key][uilan] : null);
		if (!text) return;
		if (tagName === 'LABEL' || tagName === 'BUTTON' || tagName === 'SPAN') {
			control.innerHTML = text;
		} else if (tagName === 'INPUT' && text != '') {
			control.setAttribute('placeholder', text);
		}
	});
};

// -----------------------------------------------------------------------------
// Processes
// -----------------------------------------------------------------------------

const updateDefaultPaths = () => {
	const process = controls.drpProcess.value;
	if (!process || !Processes[process]) {
		return;
	}
	const prc = Processes[process];
	const cnames = prc.controls;
	const paths = prc.paths;
	const extraPath = (prc.extraPath ? prc.extraPath[lan] : null);
	const emptyLan = prc.emptyLan;
	cnames.forEach((c,i) => {
		const lan2 = (emptyLan && emptyLan[i] === lan ? '' : lan);
		if (paths && paths[i]) {
			const folders = paths[i].map(p => {
				if (extraPath && p === '{extraPath}') {
					return extraPath;
				}
				return strformat(p, lan2);
			}).filter(p => p != '');
			const folderpath = path.join(app.getAppPath(), ...folders);
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

const handle_drpProcessChange = (evt) => {
	const process = controls.drpProcess.value;
	if (!process || !Processes[process]) {
		return;
	}
	const cnames = Processes[process].controls;
	collapsableControls.forEach(c => {
		const hide = (collapsed || cnames.indexOf(c) === -1);
		$(controls[c]).closest('.form-group').toggleClass('d-none', hide);
	});
	updateDefaultPaths();
};

const handle_exeButtonClick = () => {
	const uilan = settings.language;
	logInfos.length = 0;
	showInfos(logInfos);
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

	if (process ==='BIBLEREF_TXT_BOOK_JSON_TO_TXT') {
		// Read UB (*.json) + Bible Refs (*.txt) => write translation (*.txt)
		book.readFromJSON(jsonDir)
			.then(() => bibleref.readFromTXT(txtDir))
			.then(() => bibleref.translate(txtDir, book))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_JSON_TO_BIBLEREF_JSON') {
		// Read UB (*.json) from a translation with Bible Refs => write (*.json)
		book.readFromJSON(jsonDir)
			.then(() => book.writeRefsToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_JSON_BIBLEREF_JSON_TO_JSON') {
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
	} else if (process === 'BOOK_HTML_TO_JSON') {
		// Read UB (*.html) => write (*.json)
		book.readFromHTML(htmlDir)
			.then(() => book.writeToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_TEX_TO_JSON') {
		// Read UB (*.tex) => write (*.json)
		book.readFromLaTeX(latexDir)
			.then(() => book.writeToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_TEX_TOPICS_TXT_TO_MEDIAWIKI') {
		// Read UB (*.tex) + Topic Index (*.txt) => write (*.wiki)
		book.readFromLaTeX(latexDir)
			.then(() => topicindex.readFromTXT(txtDir, category))
			.then(() => book.writeToWikiText(wikiDir, topicindex))
			.then(() => book.writeWarnings(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_JSON_TOPIC_TXT_TO_WIKIJS') {
		book.readFromJSON(jsonDir)
			.then(() => topicindex.readFromTXT(txtDir, 'ALL'))
			.then(() => {
				const ti = txtDir.replace(`topic-index-${lan}`, 'topic-index-en');
				return (lan === 'en' ? Promise.resolve(null) : 
					topicindexEN.readFromTXT(ti, 'ALL'));
			})
			.then(() => book.writeToWikiHTML(htmlDir, topicindex, topicindexEN))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_JSON_TO_TEX') {
		// Read UB (*.json) => write (*.tex) 
		book.readFromJSON(jsonDir)
			.then(() => book.writeToLaTeX(latexDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_JSON_TOPICS_TXT_TO_MEDIAWIKI') {
		// Read UB (*.json) + Topic Index (*.txt) => write (*.wiki)
		book.readFromJSON(jsonDir)
			.then(() => topicindex.readFromTXT(txtDir, category))
			.then(() => book.writeToWikiText(wikiDir, topicindex))
			.then(() => book.writeWarnings(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_INDEX_JSON_TO_MEDIAWIKI') {
		//Read UB (*.json) => write Indexes (*.wiki)
		book.readFromJSON(jsonDir)
			.then(() => book.writeIndexToWikiText(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_INDEX_JSON_TO_WIKIJS') {
		//Read UB (*.json) => write Indexes (*.html)
		book.readFromJSON(jsonDir)
			.then(() => book.writeIndexToWikiHTML(htmlDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	}else if (process === 'BIBLE_TEX_BIBLEREF_TXT_TO_MEDIAWIKI') {
		// Read Bible Refs (*.txt) + read Bible (*.tex) => write (*.wiki)
		bibleref.readFromTXT(txtDir)
			.then(() => bible.readFromLaTeX(latexDir))
			.then(() => bible.writeToWikiText(wikiDir, bibleref))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIBLE_TEX_BIBLEREF_TXT_TO_WIKIJS') {
		// Read Bible Refs (*.txt) + read Bible (*.tex) => write (*.html)
		bibleref.readFromTXT(txtDir)
			.then(() => bible.readFromLaTeX(latexDir))
			.then(() => bible.writeToWikiHTML(htmlDir, bibleref))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIBLE_TEX_TO_BIBLEINDEX_MEDIAWIKI') {
		// Read Bible (*.tex) => write index (*.wiki)
		bible.readFromLaTeX(latexDir)
			.then(() => bible.writeIndexToWikiText(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIBLE_TEX_TO_WIKIXML') {
		// Read Bible (*.tex) => write Wiki (*.xml)
		bible.readFromLaTeX(latexDir)
			.then(() => bible.writeToWikiXML(wikiDir, merge))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'TOPICS_TXT_TO_MEDIAWIKI') {
		// Read TopicIndex (*.txt) => write (*.wiki)
		topicindex.readFromTXT(txtDir, category)
			.then(() => topicindex.writeToWikiText(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'TOPICS_TXT_TO_WIKIJS') {
		// Read TopicIndex (*.txt) => write (*.html)
		if (lan === 'en') {
			topicindex.readFromTXT(txtDir, category)
				.then(() => topicindex.writeToWikiHTML(htmlDir))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		} else {
			topicindex.readFromTXT(txtDir, category)
				.then(() => {
					const ti = txtDir.replace(`topic-index-${lan}`, 'topic-index-en');
					return topicindexEN.readFromTXT(ti, category);
				})
				.then(() => topicindex.writeToWikiHTML(htmlDir, topicindexEN))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		}
	} else if (process === 'TOPICS_INDEX_TXT_TO_MEDIAWIKI') {
		// Read TopicIndex index (*.txt) => write (*.wiki)
		topicindex.readFromTXT(txtDir, category)
			.then(() => topicindex.writeIndexToWikiText(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'TOPICS_INDEX_TXT_TO_WIKIJS') {
		// Read TopicIndex index (*.txt) => write (*.html)
		if (lan === 'en') {
			topicindex.readFromTXT(txtDir, category)
				.then(() => topicindex.writeIndexToWikiHTML(htmlDir, category))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		} else {
			topicindex.readFromTXT(txtDir, category)
				.then(() => {
					const ti = txtDir.replace(`topic-index-${lan}`, 'topic-index-en');
					return topicindexEN.readFromTXT(ti, category);
				})
				.then(() => topicindex.writeIndexToWikiHTML(htmlDir, category, 
					topicindexEN))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		}
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
		topicindex.readFromTXT(txtDir, 'ALL')
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
	} else if (process === 'ARTICLE_TXT_TO_MEDIAWIKI') {
		// Read TXT folder => write (*.wiki)
		articles.readFromTXT(txtDir)
			.then(() => articles.writeToWikiText(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'TEST') {
		const htmlDir2 = path.join(htmlDir, 'test.html');
		topicindex.readFromTXT(txtDir, 'ALL')
			.then(() => {
				const topic = topicindex.topics.find(t => t.name === 'triune-origin beings');
				return new Promise((resolve, reject) => {
					topicindex.writeFileToWikiHTML(htmlDir2, topic, topic)
						.then(resolve).catch(err => reject([err]));
				});
			})
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	}
};

const handle_drpTopicsChange = (evt) => {
	showTopic(controls.drpTopics.value);
};

const checkControls = (cnames) => {
	const uilan = settings.language;
	const ctrls = cnames.map(c => controls[c]);
	if (ctrls.find(cc => cc.localName === 'input' && cc.value === '')) {
		onFail([new Error(Strings['folder_required'][uilan])]);
		return false;
	}
	return true;
};

const onSuccess = (infos) => {
	showInfos(infos, true);
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

const showInfos = (infos, success) => {
	const cls = (success === true ? ' text-success' : '');
	controls.logArea.innerHTML = infos.map(info=> {
		return `<p class="mb-1${cls}">${info}</p>`;
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
	const uilan = settings.language;
	logInfos.splice(0, 0, strformat(Strings['proccessing'][uilan], baseName));
	showInfos(logInfos);
};

// -----------------------------------------------------------------------------
// Topic Index Editor
// -----------------------------------------------------------------------------

const handle_igrTILoadTopicsClick = (evt) => {
	loadTITopics(false);
	evt.preventDefault();
};

const handle_drpTILanguage1Change = (evt) => {
	loadTITopics(true);
};

const handle_drpTILanguage2Change = (evt) => {
	loadTITopics(true);
};

const loadTITopics = (forceLoad) => {
	//If previously read then show filtered topics and exit
	if (topicindexEdit.topics.length > 0 && !forceLoad) {
		setTILoading(true);
		setTimeout(() => {
			showTITopics();
			setTILoading(false);
		}, 200);
		return;
	}

	const lan1 = controls.drpTILanguage1.value;
	const lan2 = controls.drpTILanguage2.value;
	const root = app.getAppPath();
	// const dirTopics1 = path.join(root, 'input', 'txt', `topic-index-${lan1}`);
	// const dirTopics2 = path.join(root, 'input', 'txt', `topic-index-${lan2}`);
	const dirTopics1 = path.join(root, 'tests', `topic-index-${lan1}`);
	const dirTopics2 = path.join(root, 'tests', `topic-index-${lan2}`);
	const dirBook1 = path.join(root, 'input', 'json', `book-${lan1}-footnotes`);
	const dirBook2 = path.join(root, 'input', 'json', `book-${lan2}-footnotes`);
	//TODO: use either with or without footnotes, whichever exists

	setTILoading(true);
	
	const promises = [
		topicindexEdit.readFromTXT(dirTopics1, 'ALL'),
		topicindexEdit2.readFromTXT(dirTopics2, 'ALL'),
		bookEdit.readFromJSON(dirBook1),
		bookEdit2.readFromJSON(dirBook2),
		
	];
	Promise.all(promises)
		.then(() => Promise.all([
			topicindexEdit.check(bookEdit),
			topicindexEdit2.check(bookEdit2)
		]))
		.then(() => {
			showTITopics();
			setTILoading(false);
		})
		.catch((errs) => {
			onTIFail(errs);
			setTILoading(false);
		});
};

const showTITopics = () => {
	const category = controls.drpTICategories.value;
	const letter = controls.drpTILetters.value;
	const notrevised = controls.chkTopicFilterRevised.checked;
	const witherrs = controls.chkTopicFilterErrors.checked;

	//Unhandle
	$(controls.lbxTITopics).find('.list-group-item').off('click');

	//Fill topic list
	const topics = topicindexEdit.topics
		.filter(t => {
			return ((t.type === category || category === 'ALL') &&
				(t.filename.startsWith(letter) || letter === 'ALL') &&
				(t.revised != notrevised || !notrevised) &&
				((t.errors && t.errors.length > 0) === witherrs || !witherrs));
		})
		.sort((a, b) => {
			if (a.sorting > b.sorting) return 1;
			if (a.sorting < b.sorting) return -1;
			return 0;
		});
	controls.lbxTITopics.innerHTML = topics
		.map(t => {
			const n = t.name;
			const active = (n === topicEditing ? ' active' : '');
			// const errs = t.errors && t.errors.length > 0 ? 
			// 	`  [Errors: ${t.errors.length}]` : '';
			// const errcls = t.errors && t.errors.length > 0 ? 
			// 	` style="background-color:#f8d7da"` : '';
			const errcls = t.errors && t.errors.length > 0 ? ' alert-danger' : '';
			return `<div class="list-group-item btn-sm list-group-item-action 
					py-0 px-2 flex-column align-items-start${active}${errcls}">
					<div class="d-flex w-100 justify-content-between pb-1">
						<div>${n}</div>
						<div>${t.type}</div>
					</div>
				</div>`;
		})
		.join('');
	
	//Handle
	$(controls.lbxTITopics).find('.list-group-item').on('click', function() {
		setTITopicAsSelected(this);
	});
	//Select first topic by default
	if (topics.length > 0) {
		setTITopicAsSelected($(controls.lbxTITopics).find('.list-group-item')[0]);
	}
};

const setTITopicAsSelected = (htmlElement) => {
	const name = $(htmlElement).find('div > div:first-child').text();
	topicEditing = name;
	$(controls.lbxTITopics).find('.list-group-item').toggleClass('active', false);
	$(htmlElement).toggleClass('active', true);
	showTITopic();
};

const showTITopic = () => {
	if (!topicEditing) return;
	const topic = topicindexEdit.topics.find(t => t.name === topicEditing);
	const sorting = topic.sorting;
	const topic2 = topicindexEdit2.topics.find(t => t.sorting === sorting);
	const aliases = (topic.altnames ? topic.altnames : []);
	const refs = (topic.refs ? topic.refs : []);
	const seeAlso = (topic.seeAlso ? topic.seeAlso : []);
	const links = (topic.links ? topic.links : []);
	const lines = (topic.lines ? topic.lines : []);
	const lines2 = (topic2.lines ? topic2.lines : []);
	const fillFn = a => `<option value="${a}">${a}</option>`;

	controls.txtTIName.value = topicEditing;
	controls.drpTIAliases.innerHTML = aliases.map(fillFn).join('');
	controls.drpTIRefs.innerHTML = refs.map(fillFn).join('');
	controls.drpTISeeAlso.innerHTML = seeAlso.map(fillFn).join('');
	controls.drpTILinks.innerHTML = links.map(fillFn).join('');
	controls.drpTICategory.value = topic.type;

	//Unhandle
	$(controls.lbxTILines).find('.list-group-item').off('click');

	//Fill lines listbox
	controls.lbxTILines.innerHTML = lines
		.map((line, i) => {
			const line2 = lines2[i];
			const errs1 = (topic.errors ? 
				topic.errors.filter(er => er.fileline === line.fileline): []);
			const errs2 = (topic.errors ? 
				topic2.errors.filter(er => er.fileline === line2.fileline): []);
			const errRows = errs1.map(err => {
				const err2 = errs2.find(er => er.fileline === err.fileline);
				return `<div class="row alert alert-danger p-0 mb-0">
							<div class="col-6">${err.desc}</div>
							<div class="col-6">${(err2 ? err2.desc: '')}</div>
						</div>`;
			}).join('');
			return `<div class="list-group-item btn-sm list-group-item-action 
						py-0 px-2 flex-column align-items-start">
						<div class="row">
							<div class="d-none">${line.fileline}</div>
							<div class="col-6">${line.text}</div>
							<div class="col-6">${line2.text}</div>
						</div>
						${errRows}
						<div class="row">
							<div class="col-12 text-right">${line.refs.join(', ')}</div>
						</div>
					</div>`;
		})
		.join('');
	//Handle
	$(controls.lbxTILines).find('.list-group-item').on('click', function() {
		setTITopicLineAsSelected(this);
	});
	//Select first line by default
	if (lines.length > 0) {
		setTITopicLineAsSelected($(controls.lbxTILines).find('.list-group-item')[0]);
	}
};

const setTITopicLineAsSelected = (htmlElement) => {
	const fileline = $(htmlElement).find('div:first-child > div:first-child').text();
	filelineEditing = parseInt(fileline);
	$(controls.lbxTILines).find('.list-group-item').toggleClass('active', false);
	$(htmlElement).toggleClass('active', true);
	showTILinesUB();
};

const showTILinesUB = () => {
	const topic = topicindexEdit.topics.find(t => t.name === topicEditing);
	const line = topic.lines.find(ln => ln.fileline === filelineEditing);
	const fnGetPar = (r, book, errs) => {
		let par = 'Error: UB ref not found';
		if (r) {
			par = book.getPar(r[0], r[1], r[2]).par_content
				.replace(/{(\d+)}/g, function(match, number) {return '';});
			par = replaceTags(par, '*', '*', '<i>', '</i>', errs);
			par = replaceTags(par, '$', '$', 
				'<span style="font-variant: small-caps;">', '</span>', errs);
		}
		return par;
	};
	const fnGetPars = (r1, r2) => {
		const errs = [];
		const par1 = fnGetPar(r1, bookEdit, errs);
		const par2 = fnGetPar(r2, bookEdit2, errs);
		const ref1 = (r1 ? ` [${r1[0]}:${r1[1]}.${r1[2]}]` : '');
		const ref2 = (r2 ? ` [${r2[0]}:${r2[1]}.${r2[2]}]` : '');
		const ercls = (r1 == null || r2 == null ? ' alert alert-danger' : '');
		return `<div class="list-group-item btn-sm list-group-item-action 
					py-0 px-2 flex-column align-items-start${ercls}">
					<div class="row">
						<div class="col-6">${par1}</div>
						<div class="col-6">${par2}</div>
					</div>
					<div class="row">
						<div class="col-6 text-right">${ref1}</div>
						<div class="col-6 text-right">${ref2}</div>
					</div>
				</div>`;
	};
	controls.lbxTIUBLines.innerHTML = line.refs.map(ref => {
		let arRefs1 = null;
		let arRefs2 = null;
		try {
			arRefs1 = bookEdit.getRefs(ref);
		} catch (er) {}
		try {
			arRefs2 = bookEdit2.getRefs(ref);
		} catch (er) {}

		if (!arRefs1 || !arRefs2 || arRefs1.length != arRefs2.length) {
			arRefs1 = [null];
			arRefs2 = [null];
		}
		return arRefs1.map((r, i) => {
			return fnGetPars(arRefs1[i], arRefs2[i]);
		}).join('');
	}).join('');
};

const handle_btnTISaveChangesClick = () => {
	if (topicindexEdit.topics.length === 0) return;
	setTISaving(true);

	const lan1 = controls.drpTILanguage1.value;
	const root = app.getAppPath();
	const dirTopics1 = path.join(root, 'tests', `topic-index-${lan1}`);

	topicindexEdit.writeToTXT(dirTopics1)
		.then(result => setTISaving(false))
		.catch(errs => {
			onTIFail(errs);
			setTISaving(false);
		});

};

const setTIDisabledStatus = (disabled) => {
	const controlsToUpdate = ['btnTIAddTopic', 'btnTIRemoveTopic',
		'btnTIRenameTopic', 'btnTISaveChanges', 'btnTIAddAlias',
		'btnTIRemoveAlias', 'btnTIAddRef', 'btnTIRemoveRef',
		'btnTIAddSeeAlso', 'btnTIRemoveSeeAlso',
		'btnTIAddLink', 'btnTIRemoveLink',
		'drpTILanguage1', 'drpTILanguage2', 'chkTopicRevised',
		'drpTICategory', 'drpTIAliases', 'drpTIRefs',
		'drpTISeeAlso', 'drpTILinks'];
	controlsToUpdate.forEach(key => {
		$(controls[key]).attr('disabled', disabled ? 'disabled' : null);
	});
};

const setTILoading = (loading) => {
	const uilan = settings.language;
	$(controls.spinTILoading).toggleClass('d-none', !loading);
	const t = (loading ? 'btnTILoadTopics_loading' : 'btnTILoadTopics');
	$(controls.btnTILoadTopics).text(Strings[t][uilan]);
	$(controls.igrTILoadTopics).find('button').attr('disabled', 
		loading ? 'disabled' : null);
	setTIDisabledStatus(loading);
};

const setTISaving = (saving) => {
	$(controls.spinTISaving).toggleClass('d-none', !saving);
	$(controls.btnTISaveChanges).toggleClass('d-none', saving);
	setTIDisabledStatus(saving);
};

const onTIFail = (errors) => {
	setTIDisabledStatus(false);
	//Show errors
	//Unhandle
	$(controls.lbxTILines).find('.list-group-item').off('click');
	//Fill lines listbox
	controls.lbxTILines.innerHTML = errors
		.map((err, i) => {
			return `<div class="list-group-item btn-sm list-group-item-action 
						py-0 px-2 flex-column align-items-start">
						<div class="row">
							<div class="col-12 alert alert-danger p-x-2 py-1 mb-0 text-wrap">
								${err.message}
							</div>
						</div>
					</div>`;
		})
		.join('');

}

// -----------------------------------------------------------------------------
// Settings
// -----------------------------------------------------------------------------

const handle_drpUILanguageChange = (evt) => {
	const uilan = controls.drpUILanguage.value;
	settings.language = uilan;
	store.set('language', settings.language);
	updateUI();
};

const handle_drpThemeChange = (evt) => {
	const theme = controls.drpTheme.value;
	settings.theme = theme;
	store.set('theme', settings.theme);
	const link = document.getElementsByTagName('link')[0];
	link.href = (theme === 'default' ?
		'../node_modules/bootstrap/dist/css/bootstrap.css' :
		`../node_modules/bootswatch/dist/${theme}/bootstrap.css`);
};

document.addEventListener('DOMContentLoaded', onLoad);