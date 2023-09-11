const {dialog, app} = require('electron').remote;
const shell = require('electron').shell;
const {clipboard} = require('electron');
const Store = require('electron-store');
const path = require('path');
const fs = require('fs');
const pug = require('pug');

const Book = require('./book');
const Paramony = require('./paramony');
const Paralells = require('./paralells');
const Bible = require('./bible');
const BibleRef = require('./bibleref');
const TopicIndex = require('./topicindex');
const Articles = require('./articles');
const ImageCatalog = require('./imagecatalog');
const MapCatalog = require('./mapcatalog');
const Processes = require('./processes');
const Strings = require('./strings');
const BibleAbbs = require('./abb');
const {strformat, extendArray, replaceWords, getMostSimilarSentence, 
	getWikijsHeader, writeHTMLToWikijs, getError, 
	readFile, writeFile, readBooksFromJSON, getFiles} = require('./utils');
const DialogEditAlias = require('./dialog_editalias');
const DialogEditRefs = require('./dialog_editrefs');
const DialogEditSeeAlsos = require('./dialog_editseealsos');
const GoogleTranslate = require('./translate');
const AirTableConnector = require('./airtable');

const createSummaryFn = pug.compileFile(
	path.join(app.getAppPath(), 'app', 'templates', 'summary.pug'));
const createBookParsFn = pug.compileFile(
	path.join(app.getAppPath(), 'app', 'templates', 'bookpars.pug'));

const store = new Store();
//Instances for Processes
const book = new Book();
const paramony = new Paramony();
const paralells = new Paralells();
const bible = new Bible();
const bibleref = new BibleRef();
const topicindex = new TopicIndex();
const topicindexEN = new TopicIndex();
const articles = new Articles();
const imageCatalog = new ImageCatalog();
const mapCatalog = new MapCatalog();
const editAliasDialog = new DialogEditAlias();
const editRefsDialog = new DialogEditRefs();
const editSeeAlsosDialog = new DialogEditSeeAlsos();
//Instances for Search
const bookSearch = new Book();
const bookSearch2 = new Book();
//Instances for Topic Editor
const topicindexEdit = new TopicIndex();
const topicindexEdit2 = new TopicIndex();
const topicindexEditEN = new TopicIndex();
const bookEdit = new Book();
const bookEdit2 = new Book();
//Instances for Translate
const translator = new GoogleTranslate();
const bookTranslate = new Book();
const bookTranslate2 = new Book();
//Instances for AirTable
const airTable = new AirTableConnector();
const bookAirTable = new Book();

const controls = {
	//Main
	btnLogo: '', lblProccesses: '', lblTopicIndex: '', lblSettings: '',
		lblSearch: '',
	//Processes
	lblHTextbox: '', dirHTextbox: '', dirHButton: '', 
	lblTTextbox: '', dirTTextbox: '', dirTButton: '', 
	lblLTextbox: '', dirLTextbox: '', dirLButton: '', 
	lblJTextbox: '', dirJTextbox: '', dirJButton: '', 
	lblWTextbox: '', dirWTextbox: '', dirWButton: '', 
	lblfnTTextbox: '', fnTTextbox: '', fnTButton: '', 
	lblfnHTextbox: '', fnHTextbox: '', fnHButton: '', 
	lblTopics: '', drpTopics: '', 
	lblLanguage: '', drpLanguage: '', 
	lblCategories: '', drpCategories: '', lblLetters: '', drpLetters: '',
	lblProcess: '', drpProcess: '', 
	exeButton: '', logArea: '', collapseButton: '', progress: '', 
	chkMergeLabel: '', chkMerge: '', 
	//Search
	lblSearchOldRefs: '', txtSearchOldRefs: '', 
	lblSearchNewRefs: '', txtSearchNewRefs: '',
	lblSearchText: '', txtSearchText: '',
	lblSearchFile: '', fnSearch: '', fnSearchButton: '', fnClearButton: '',
	lblSearchFileLan: '', chkSearchFileLan: '',
	btnSearch: '', spinSearchLoading: '', igrSearch: '',
	btnAddQuotes: '', spinSearchAdding: '', igrAddQuotes: '',
	lblSearchLan: '', drpSearchLan: '',
	lblSearchSecondLan: '', drpSearchSecondLan: '', 
	lblSearchCopyQuotes: '', chkSearchCopyQuotes: '',
	lblSearchCopyLink: '', chkSearchCopyLink: '',
	lblSearchCopyType: '', drpSearchCopyType: '',
	lbxSearchResultLan: '',
	//Topic index editor
	lblTICategories: '', drpTICategories: '', 
	spinTILoading: '', lbxTITopics: '', btnTILoadTopics: '', igrTILoadTopics: '', 
	lblTILanguage1: '', drpTILanguage1: '', lblTILanguage2: '', drpTILanguage2: '', 
	lblTIName: '', txtTIName: '', btnTIURL: '',
	lblTIAliases: '', txtTIAliases: '', btnTIEditAlias: '', 
	lblTIRevised: '', chkTIRevised: '', 
	lblTIRefs: '', txtTIRefs: '', btnTIEditRef: '', 
	lblTISeeAlso: '', txtTISeeAlsos: '', btnTIEditSeeAlso: '', 
	lblTILinks: '', txtTILinks: '', btnTIEditLink: '', 
	lblTICategory: '', drpTICategory: '', 
	lblTILines: '', lbxTILines: '', lblTIUBLines: '', lbxTIUBLines: '', 
	btnTIAddTopic: '', btnTIRemoveTopic: '', btnTIRenameTopic: '', 
	btnTISaveChanges: '', btnTISaving: '',
	lblTILetters: '', drpTILetters: '', 
	lblTIFilterRevised: '', chkTopicFilterRevised: '', 
	lblTIFilterErrors: '', chkTopicFilterErrors: '', 
	//Translate
	lblTranslateLanguage1: '', drpTranslateLanguage1: '',
	lblTranslateLanguage2: '', drpTranslateLanguage2: '',
	lblTranslateOriginFolder: '', fnTranslateOriginFolder: '', 
		fnTranslateOriginClear: '', fnTranslateOriginOpen: '',
	lblTranslateTargetFolder: '', fnTranslateTargetFolder: '', 
		fnTranslateTargetClear: '', fnTranslateTargetOpen: '',
	translateButton: '', estimateButton: '',
	translateProgress: '', logAreaTranslate: '',
	//AirTable
	igrAirTableConnect: '', spinAirTableConnectWorking: '', btnAirTableConnect: '',
	igrAirTableImport: '', spinAirTableImportWorking: '', btnAirTableImport: '',
	igrAirTableSave: '', spinAirTableSaveWorking: '', btnAirTableSave: '',
	lbxAirTableTablesCont: '', lbxAirTableTables: '',
	lblAirTableData: '', lbxAirTableDataCont: '', lbxAirTableData: '',
	drpAirTableUBPaper: '', lblAirTableUB: '', lbxAirTableDataCont: '', lbxAirTableUB: '',
	btnAirTableNewPerson: '', btnAirTableAltPerson: '',
	btnAirTableNewLocation: '', btnAirTableAltLocation: '',
	btnAirTableCaseTitle: '', btnAirTableCaseUpper: '', btnAirTableCaseLower: '',
	//Settings
	lblUILanguage: '', drpUILanguage: '', 
	lblTheme: '', drpTheme: '',
	lblTranslateProjectID: '', txtTranslateProjectID: '', toggleTranslateProjectID: '',
	lblTranslateAPIKey: '', txtTranslateAPIKey: '', toggleTranslateAPIKey: '',
	lblAirTableAPIKey: '', txtAirTableAPIKey: '', toggleAirTableAPIKey: '',
	lblAirTableBaseID: '', txtAirTableBaseID: '', toggleAirTableBaseID: ''
};
const controlsToDisable = [
	'btnTIAddTopic', 'btnTIRemoveTopic', 'btnTIRenameTopic', 'btnTISaveChanges', 
	'btnTIEditAlias', 'btnTIEditRef', 'btnTIEditSeeAlso', 'btnTIEditLink', 
	'drpTILanguage1', 'drpTILanguage2', 'chkTIRevised', 'drpTICategory'
];

const controlsAirTableToDisable = [
	'igrAirTableConnect', 'igrAirTableSave', 'igrAirTableConnect', 'igrAirTableImport',
	'btnAirTableNewPerson', 'btnAirTableAltPerson', 
	'btnAirTableNewLocation', 'btnAirTableAltLocation'
];

const settings = {
	language: 'en',
	theme: 'default'
};
const logInfos = [];

const collapsableControls = ['dirHTextbox', 'dirTTextbox', 'dirLTextbox', 
	'dirJTextbox', 'dirWTextbox', 'chkMerge', 'drpCategories', 'drpLetters'];
const languageControls = ['drpLanguage', 'drpTILanguage1', 'drpTILanguage2',
	'drpSearchLan', 'drpSearchSecondLan', 'drpTranslateLanguage1',
	'drpTranslateLanguage2'];
const topicTypes = ['PERSON', 'PLACE', 'ORDER', 'RACE', 'RELIGION', 'OTHER'];
const topicFilters = ['ALL', ...topicTypes];
const copyTypes = ['Copy plain text', 'Copy Markdown', 'Copy HTML'];

const themes = ['Default', 'Cerulean', 'Darkly', 'Litera', 'Materia', 'Pulse',
	'Simplex', 'Solar', 'United', 'Cosmo', 'Flatly', 'Lumen', 'Minty',
	'Sketchy', 'Spacelab', 'Cyborg', 'Journal', 'Lux', 'Sandstone', 'Slate',
	'Superhero', 'Yeti'];

let lan = 'en';
let collapsed = false;
let topicEditing = null;
let filelineEditing = null;
let changed = false;
let airTableTableSelected = null;
let airTableRecordSelected = null;
let airTableConnectionEnabled = true;
let selectedText = null;

//Strings
let strSelectFolder = 'Select folder';
let strSelectFile = 'Select file';

//TODO: Convert all the app from imperative paradigm to declarative paradigm
//https://itnext.io/electron-application-with-vue-js-and-vuetify-f2a1f9c749b8

const onLoad = () => {
	Object.keys(controls).forEach(id => controls[id] = document.querySelector('#' + id));

	//Fill language dropdowns
	//TODO: For languages in drpTILanguageX set them as disabled if no TI exists
	languageControls
		.forEach(name => {
			const c = controls[name];
			c.innerHTML = Object.keys(Strings['bookLanguages']).map(key => {
				const desc = Strings['bookLanguages'][key];
				const sel = (lan == key ? ' selected' : '');
				return `<option value="${key}"${sel}>${desc}</option>`;
			}).join('');
		});

	//Dialogs
	editAliasDialog.update(document.body, {
		id: 'editaliasdialog', 
		title: 'Edit aliases',
		okHandler: handle_editAliasDialogOK
	});
	editRefsDialog.update(document.body, {
		id: 'editrefsdialog',
		title: 'Edit references',
		okHandler: handle_editRefsDialogOK
	});
	editSeeAlsosDialog.update(document.body, {
		id: 'editseealsosdialog',
		title: 'Edit See Alsos',
		okHandler: handle_editSeeAlsosDialogOK
	});

	//Set handlers
	var c = controls;
	var handlers = [
		[c.btnLogo, 'click', handle_btnLogoClick],
		//Processes
		[c.dirHButton, 'click', handle_dirButtonClick, c.dirHTextbox],
		[c.dirTButton, 'click', handle_dirButtonClick, c.dirTTextbox],
		[c.dirLButton, 'click', handle_dirButtonClick, c.dirLTextbox],
		[c.dirJButton, 'click', handle_dirButtonClick, c.dirJTextbox],
		[c.dirWButton, 'click', handle_dirButtonClick, c.dirWTextbox],
		[c.fnTButton, 'click', handle_fnButtonClick, c.fnTTextbox, 'TXT,TSV'],
		[c.fnHButton, 'click', handle_fnButtonClick, c.fnHTextbox, 'HTML'],
		[c.exeButton, 'click', handle_exeButtonClick],
		[c.collapseButton, 'click', handle_collapseButtonClick],
		[c.drpLanguage, 'change', handle_drpLanguageChange],
		[c.drpProcess, 'change', handle_drpProcessChange],
		[c.drpTopics, 'change', handle_drpTopicsChange],
		//Search
		[c.fnSearchButton, 'click', handle_fnSearchButton],
		[c.fnClearButton, 'click', handle_fnClearButton, c.fnSearch],
		[c.igrSearch, 'click', handle_SearchExecution],
		[c.igrAddQuotes, 'click', handle_igrAddQuotesClick],
		[c.drpSearchLan, 'change', handle_SearchExecution],
		[c.drpSearchSecondLan, 'change', handle_SearchExecution],
		[c.chkSearchFileLan, 'change', handle_SearchExecution],
		[c.chkSearchCopyQuotes, 'change', handle_SearchExecution],
		[c.chkSearchCopyLink, 'change', handle_SearchExecution],
		[c.drpSearchCopyType, 'change', handle_SearchExecution],
		//Topic Index Editor
		[c.drpTILanguage1, 'change', handle_drpTILanguage1Change],
		[c.drpTILanguage2, 'change', handle_drpTILanguage2Change],
		[c.btnTISaveChanges, 'click', handle_btnTISaveChangesClick],
		[c.igrTILoadTopics, 'click', handle_igrTILoadTopicsClick],
		[c.btnTIURL, 'click', handle_btnTIURLClick],
		[c.btnTIEditAlias, 'click', handle_btnTIEditAliasClick],
		[c.chkTIRevised, 'change', handle_chkTIRevisedChange],
		[c.btnTIEditRef, 'click', handle_btnTIEditRefsClick],
		[c.btnTIEditSeeAlso, 'click', handle_btnTIEditSeeAlsoClick],
		//Translate
		[c.fnTranslateOriginOpen, 'click', handle_dirButtonClick, c.fnTranslateOriginFolder],
		[c.fnTranslateOriginClear, 'click', handle_fnClearButton, c.fnTranslateOriginFolder],
		[c.fnTranslateTargetOpen, 'click', handle_dirButtonClick, c.fnTranslateTargetFolder],
		[c.fnTranslateTargetClear, 'click', handle_fnClearButton, c.fnTranslateTargetFolder],
		[c.translateButton, 'click', handle_translateButton],
		[c.estimateButton, 'click', handle_estimateButton],
		//AirTable
		[c.igrAirTableConnect, 'click', handle_igrAirTableConnect],
		[c.drpAirTableUBPaper, 'click', handle_drpAirTableUBPaper],
		[c.btnAirTableNewPerson, 'click', handle_btnAirTableNewPerson],
		[c.btnAirTableAltPerson, 'click', handle_btnAirTableAltPerson],
		[c.btnAirTableNewLocation, 'click', handle_btnAirTableNewLocation],
		[c.btnAirTableAltLocation, 'click', handle_btnAirTableAltLocation],
		[c.btnAirTableCaseTitle, 'click', handle_btnAirTableCase],
		[c.btnAirTableCaseUpper, 'click', handle_btnAirTableCase],
		[c.btnAirTableCaseLower, 'click', handle_btnAirTableCase],
		//Settings
		[c.drpUILanguage, 'change',  handle_drpUILanguageChange],
		[c.drpTheme, 'change', handle_drpThemeChange],
		[c.txtTranslateProjectID, 'input', handle_txtTranslateProjectID],
		[c.txtTranslateAPIKey, 'input', handle_txtTranslateAPIKey],
		[c.txtAirTableAPIKey, 'input', handle_txtAirTableAPIKey],
		[c.txtAirTableBaseID, 'input', handle_txtAirTableBaseID],
		[c.toggleTranslateProjectID, 'click', handle_toggleTranslateProjectID],
		[c.toggleTranslateAPIKey, 'click', handle_toggleTranslateAPIKey],
		[c.toggleAirTableAPIKey, 'click', handle_toggleAirTableAPIKey],
		[c.toggleAirTableBaseID, 'click', handle_toggleAirTableBaseID]
	];

	handlers.forEach(h => {
		const handler = (h[4] ?
			h[2].bind(this, h[3], h[4]) :
			h[3] ? h[2].bind(this, h[3]) : h[2]);
		h[0].addEventListener(h[1], handler);
	});

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
	settings.translateProjectID = store.get('translateProjectID',
		settings.translateProjectID);
	settings.translateAPIKey = store.get('translateAPIKey',
		settings.translateAPIKey);
	settings.airTableAPIKey = store.get('airTableAPIKey', 
		settings.airTableAPIKey);
	settings.airTableBaseID = store.get('airTableBaseID',
		settings.airTableBaseID);
	fillDropdown(c.drpTheme, themes.map(t => t.toLowerCase()), themes,
		settings.theme);
	c.drpUILanguage.value = settings.language;
	c.drpTheme.value = settings.theme;
	c.txtTranslateProjectID.value = (settings.translateProjectID || '');
	c.txtTranslateAPIKey.value = (settings.translateAPIKey || '');
	c.txtAirTableAPIKey.value = (settings.airTableAPIKey || '');
	c.txtAirTableBaseID.value = (settings.airTableBaseID || '');
	handle_drpUILanguageChange();
	handle_drpThemeChange();
	handle_drpProcessChange();

	setTIDisabledStatus(true);
	$(c.drpTILanguage1).attr('disabled', null);
	$(c.drpTILanguage2).attr('disabled', null);
};

const fillDropdown = (control, values, descs, currentValue) => {
	control.innerHTML = values.map((v, i) => {
		const sel = (currentValue == v ? ' selected' : '');
		return `<option value="${v}"${sel}>${descs[i]}</option>`;
	}).join('');
};

const handle_btnLogoClick = (evt) => {
	shell.openExternal('https://github.com/JanHerca/urantiapedia');
	evt.preventDefault();
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
		drpLetters: {values: lettersVals, descs: lettersDescs},
		drpTICategories: {values: topicFilters, descs: topicFilters},
		drpTICategory: {values: topicTypes, descs: topicTypes},
		drpTILetters: {values: lettersVals, descs: lettersDescs},
		drpSearchCopyType: {values: copyTypes, descs: copyTypes}
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

	strSelectFolder = Strings['strSelectFolder'][uilan];
	strSelectFile = Strings['strSelectFile'][uilan];
};

const handle_dirButtonClick = (textbox) => {
	dialog.showOpenDialog({
		title: strSelectFolder,
		properties: ['openDirectory']
	}).then(result => {
		if (!result.canceled && result.filePaths) {
			const dirPath = result.filePaths[0];
			textbox.value = dirPath;
		}
	});
};

const handle_fnButtonClick = (textbox, ext) => {
	const filters = ext.split(',').map(e => {
		return {name: e, extensions: [e.toLowerCase()]};
	});
	dialog.showOpenDialog({
		title: strSelectFile,
		defaultPath: path.dirname(textbox.value),
		properties: ['openFile'],
		filters: filters
	}).then(result => {
		if (!result.canceled && result.filePaths) {
			const dirPath = result.filePaths[0];
			textbox.value = dirPath;
		}
	});
};

const handle_fnClearButton = (textbox) => {
	textbox.value = '';
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
	const extraPath = (prc.extraPath && prc.extraPath[lan] ? 
		prc.extraPath[lan] : '');
	const emptyLan = prc.emptyLan;
	cnames.forEach((c,i) => {
		const lan2 = (emptyLan && emptyLan[i] === lan ? '' : lan);
		if (paths && paths[i]) {
			const folders = paths[i].map(p => {
				return (p === '{extraPath}' ? extraPath : strformat(p, lan2));
			}).filter(p => p != '');
			const folderpath = path.join(app.getAppPath(), ...folders);
			controls[c].value = folderpath;
		}
	});
};

const getPathsOfBookVersions = (jsonDir) => {
	if (lan === 'en') {
		return Promise.reject([new Error('English language cannot be used')]);
	}
	return new Promise((resolve, reject) => {
		fs.readdir(jsonDir, { withFileTypes: true }, (err, files) => {
			if (err) {
				reject([new Error('Error reading folder ' + jsonDir)]);
				return;
			}
			const regEx = new RegExp(`book-(en|${lan})-.+`);
			const folders = files
				.filter(dirent => {
					return (dirent.isDirectory() && 
						dirent.name.match(regEx) != null);
				})
				.map(dirent => {
					const vals = dirent.name.split('-');
					let year = parseInt(vals[2]);
					year = (dirent.name === 'book-en-footnotes' ?
						Strings.bookMasterYear.en : isNaN(year) ? 
						Strings.bookMasterYear[lan] : year);
					return {name: dirent.name, year: year};
				})
				.sort((a, b) => {
					//Sort from left (older) to right (newer)
					return (a.year - b.year);
				})
				.map(obj => path.join(jsonDir, obj.name));
			resolve(folders);
		});
	});
};

const handle_collapseButtonClick = () => {
	collapsed = !collapsed;
	handle_drpProcessChange();
};

const handle_drpLanguageChange = (evt) => {
	lan = controls.drpLanguage.value;
	book.setLanguage(lan);
	paramony.setLanguage(lan);
	paralells.setLanguage(lan);
	bible.setLanguage(lan);
	bibleref.setLanguage(lan);
	topicindex.setLanguage(lan);
	articles.setLanguage(lan);
	imageCatalog.setLanguage(lan);
	mapCatalog.setLanguage(lan);
	updateDefaultPaths();
};

const handle_drpProcessChange = (evt) => {
	const process = controls.drpProcess.value;
	if (!process || !Processes[process]) {
		return;
	}
	const cnames = Processes[process].controls;
	const toggableControls = [];
	for (const p in Processes) {
		const ctrls = (!Processes[p].controls ? [] :
			Processes[p].controls.filter(c=> !toggableControls.includes(c)));
		toggableControls.push(...ctrls);
	}
	toggableControls.forEach(c => {
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
	const txtFile = controls.fnTTextbox.value;
	const htmlFile = controls.fnHTextbox.value;
	const category = controls.drpCategories.value;
	const letter = controls.drpLetters.value;
	// const merge = controls.chkMerge.checked;
	const ctrls = Processes[process].controls;

	if (!checkControls(ctrls)) {
		return;
	}

	if (process === 'BIBLEREF_TXT_BOOK_JSON_TO_TXT') {
		// Reads UB (*.json) + 
		// Reads Bible Refs (*.txt) => 
		// Writes translation (*.txt)
		book.readFromJSON(jsonDir)
			.then(() => bibleref.readFromTXT(txtDir))
			.then(() => bibleref.translate(txtDir, book))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIBLEREF_JSON_TO_MARKDOWN') {
		// Reads Bible Refs (*.json) => 
		// Writes Bible Refs (*.md)
		paramony.readFromJSON()
			.then(() => paramony.writeToMarkdown('The Urantia Book'))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_JSON_TO_BIBLEREF_JSON') {
		// Reads UB (*.json) from a translation with Bible Refs => 
		// Writes (*.json)
		book.readFromJSON(jsonDir)
			.then(() => book.writeRefsToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_JSON_BIBLEREF_JSON_TO_JSON') {
		// Reads UB (*.json) + 
		// Reads Bible Refs (*.json) => 
		// Writes (*.json)
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
	} else if (process === 'BOOK_JSON_BIBLEREF_MARKDOWN_TO_JSON') {
		// Reads UB (*.json) + 
		// Reads Bible Refs (*.md) => 
		// Writes (*.json)
		book.readFromJSON(jsonDir)
			.then(() => paramony.readForUB())
			.then(() => {
				book.footnotes = paramony.footnotes;
				return book.updateRefs();
			})
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
		// Reads UB (*.html) => 
		// Writes (*.json)
		book.readFromHTML(htmlDir)
			.then(() => book.readAuthorsFromHTML(htmlDir))
			.then(() => book.writeToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_TEX_TO_JSON') {
		// Reads UB (*.tex) => 
		// Writes (*.json)
		book.readFromLaTeX(latexDir)
			.then(() => book.writeToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_TEX_TOPICS_TXT_TO_MEDIAWIKI') {
		// Reads UB (*.tex) + 
		// Reads Topic Index (*.txt) => 
		// Writes (*.wiki)
		book.readFromLaTeX(latexDir)
			.then(() => topicindex.readFromTXT(txtDir, category))
			.then(() => book.writeToWikiText(wikiDir, topicindex))
			.then(() => book.writeWarnings(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_JSON_TOPICS_TXT_TO_WIKIJS') {
		// Reads image catalog (*.md) + 
		// Reads map catalog (*.md) +
		// Reads book paralells (*.md) +
		// Reads UB (*.json) + 
		// Reads Topic Index (*.txt) => 
		// Reads articles paralells (*.tsv)
		// Writes (Wiki.js *.html)
		imageCatalog.read()
			.then(() => mapCatalog.read())
			.then(() => paralells.read())
			.then(() => book.readFromJSON(jsonDir))
			.then(() => topicindex.exists(txtDir))
			.then((exists) => {
				return (exists ? topicindex.readFromTXT(txtDir) : 
					Promise.resolve(null));
			})
			.then(() => {
				const ti = txtDir.replace(`topic-index-${lan}`, 'topic-index-en');
				return (lan === 'en' ? Promise.resolve(null) : 
					topicindexEN.readFromTXT(ti));
			})
			.then(() => topicindex.updateTopicNames(topicindexEN))
			.then(() => topicindex.updateRefsForSearching(book))
			.then(() => articles.readUBParalellsFromTSV(txtFile))
			.then(() => book.writeToWikijs(htmlDir, topicindex, topicindexEN, 
				imageCatalog, mapCatalog, paralells, articles))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_MULTIPLE_JSON_TOPICS_TXT_TO_WIKIJS' && 
		lan != 'en') {
		// Reads paralells (*.md) +
		// Reads master UB (*.json) + 
		// Reads Topic Index (*.txt) + 
		// Get paths to several UB versions +
		// Reads all UB versions (*.json) +
		// Checks book versions + Writes (Wiki.js *.html)
		//TODO: Add links to topics in english and master versions
		//TODO: Add Extended index in headers
		//TODO: Add authors in Index (not in Extended)
		//TODO: Add links in home page & About UB page to go directly to multi
		paralells.read()
			.then(() => articles.readUBParalellsFromTSV(txtFile))
			.then(() => {
				const masterDir = path.join(jsonDir, `book-${lan}-footnotes`);
				return book.readFromJSON(masterDir);
			})
			.then(() => topicindex.exists(txtDir))
			.then((exists) => {
				return (exists ? topicindex.readFromTXT(txtDir) : 
					Promise.resolve(null));
			})
			.then(() => {
				const ti = txtDir.replace(`topic-index-${lan}`, 'topic-index-en');
				return topicindexEN.readFromTXT(ti);
			})
			.then(() => topicindex.updateTopicNames(topicindexEN))
			.then(() => topicindexEN.updateTopicNames(topicindexEN))
			.then(() => topicindex.updateRefsForSearching(book))
			.then(() => topicindexEN.updateRefsForSearching(book))
			.then(() => getPathsOfBookVersions(jsonDir))
			.then((folders) => readBooksFromJSON(folders, lan))
			.then(books => {
				//Checks
				const master = books.find(b => b.isMaster);
				const bookErrors = books
					.map(b => {
						if (b.isMaster) return null;
						const bErrs = master.checkBook(b);
						if (bErrs.length === 0) return null;
						return bErrs;
					});
				const errs = bookErrors.find(e => e != null);
				if (errs) return Promise.reject(errs)
				//No errors, proceed
				return topicindexEN.updateRefsForSearching(books[0])
					.then(() => book.writeMultipleToWikijs(htmlDir, books, 
						topicindex, topicindexEN, null, null, paralells,
						articles));
			})
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_JSON_TO_TEX') {
		// Reads UB (*.json) => 
		// Writes (*.tex) 
		book.readFromJSON(jsonDir)
			.then(() => book.writeToLaTeX(latexDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_JSON_TO_TXT') {
		// Reads UB (*.json) => 
		// Writes (*.txt)
		book.readFromJSON(jsonDir)
			.then(() => book.writeToTXT(txtDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_JSON_TOPICS_TXT_TO_MEDIAWIKI') {
		// Reads UB (*.json) + 
		// Reads Topic Index (*.txt) => 
		// Writes (*.wiki)
		book.readFromJSON(jsonDir)
			.then(() => topicindex.readFromTXT(txtDir))
			.then(() => book.writeToWikiText(wikiDir, topicindex))
			.then(() => book.writeWarnings(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_INDEX_JSON_TO_MEDIAWIKI') {
		// Reads UB (*.json) => 
		// Writes Indexes (*.wiki)
		book.readFromJSON(jsonDir)
			.then(() => book.writeIndexToWikiText(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_INDEX_JSON_TO_WIKIJS') {
		// Reads UB (*.json) => 
		// Writes Indexes (*.html)
		book.readFromJSON(jsonDir)
			.then(() => book.writeIndexToWikijs(htmlDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BOOK_INDEX_MULTIPLE_JSON_TO_WIKIJS') {
		// Reads Master UB (*.json) => 
		// Get paths to several UB versions +
		// Reads all UB versions (*.json) +
		// Checks book versions + Writes (Wiki.js *.html)
		// Writes Indexes (*.html)
		const masterDir = path.join(jsonDir, `book-${lan}-footnotes`);
		book.readFromJSON(masterDir)
			.then(() => getPathsOfBookVersions(jsonDir))
			.then((folders) => readBooksFromJSON(folders, lan))
			.then(books => {
				//Checks
				const master = books.find(b => b.isMaster);
				const bookErrors = books
					.map(b => {
						if (b.isMaster) return null;
						const bErrs = master.checkBook(b);
						if (bErrs.length === 0) return null;
						return bErrs;
					});
				const errs = bookErrors.find(e => e != null);
				if (errs) return Promise.reject(errs)
				//No errors, proceed
				return book.writeIndexToWikijs(htmlDir, books);
			})
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIBLE_TEX_BIBLEREF_TXT_TO_MEDIAWIKI') {
		// Reads Bible Refs (*.txt) + 
		// Reads Bible (*.tex) => 
		// Write (*.wiki)
		bibleref.readFromTXT(txtDir)
			.then(() => bible.readFromLaTeX(latexDir))
			.then(() => bible.writeToWikiText(wikiDir, bibleref.biblebooks))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIBLE_TEX_BIBLEREF_TXT_TO_WIKIJS') {
		// Reads Bible Refs (*.txt) + 
		// Reads Bible (*.tex) => 
		// Writes (*.html)
		bibleref.readFromTXT(txtDir)
			.then(() => bible.readFromLaTeX(latexDir))
			.then(() => bible.writeToWikijs(htmlDir, bibleref.biblebooks))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIBLE_TEX_BIBLEREF_MARKDOWN_TO_WIKIJS') {
		// Reads Bible Refs (*.md) + 
		// Reads Bible (*.tex) => 
		// Writes (*.html)
		paramony.readForBible()
			// .then(() => {
			// 	return bibleref.readFromTXT(path.join(app.getAppPath(),
			// 		'input/txt/bible-refs-es'));
			// })
			// .then(() => {
			// 	const notfound = [];
			// 	paramony.noTranslated.forEach(nt => {
			// 		const book = bibleref.biblebooks.find(b => b.titleEN === nt.titleEN);
			// 		if (!book) {
			// 			notfound.push(`${nt.titleEN}|${nt.bible_ref}|${nt.lu_ref}|${nt.text}`);
			// 			return;
			// 		}
			// 		const ref = book.refs.find(r => r.bible_ref === nt.bible_ref && r.lu_ref === nt.lu_ref);
			// 		if (!ref) {
			// 			notfound.push(`${nt.titleEN}|${nt.bible_ref}|${nt.lu_ref}|${nt.text}`);
			// 			return;
			// 		}
			// 		nt.textES = ref.text;
			// 		nt.result = `| ${nt.text} | ${nt.textES}`;
			// 	});
			// 	const results = paramony.noTranslated.map(nt => nt.result).join('\n');
			// 	console.log(results);
			// 	console.log('Not found:');
			// 	console.log(notfound.join('\n'));
			// })
			.then(() => {
				const notr = paramony.noTranslated.map(nt => {
					return `${nt.titleEN}|${nt.bible_ref}|${nt.lu_ref}|${nt.text}`;
				});
				if (notr.length > 0) {
					console.log('Not translated:');
					console.log(notr.join('\n'));
				}
				return bible.readFromLaTeX(latexDir);
			})
			.then(() => bible.writeToWikijs(htmlDir, paramony.biblebooks))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIBLE_TEX_TO_BIBLEINDEX_MEDIAWIKI') {
		// Reads Bible (*.tex) => 
		// Writes index (*.wiki)
		bible.readFromLaTeX(latexDir)
			.then(() => bible.writeIndexToWikiText(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIBLE_TEX_TO_BIBLEINDEX_WIKIJS') {
		// Reads Bible (*.tex) => 
		// Writes index (*.html)
		bible.readFromLaTeX(latexDir)
			.then(() => bible.writeIndexToWikijs(htmlDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	}else if (process === 'BIBLE_TEX_TO_WIKIXML') {
		// Reads Bible (*.tex) => 
		// Writes Wiki (*.xml)
		bible.readFromLaTeX(latexDir)
			.then(() => bible.writeToWikiXML(wikiDir, merge))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'BIBLE_UPDATE_TITLES_WIKIJS') {
		// Reads Bible pages (*.md) => 
		// Updates titles => Writes (*.md)
		bible.updateWikijsTitles(txtDir)
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'TOPICS_TXT_TO_MEDIAWIKI') {
		// Reads TopicIndex (*.txt) => 
		// Writes (*.wiki)
		topicindex.readFromTXT(txtDir, category, letter)
			.then(() => topicindex.writeToWikiText(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'TOPICS_TXT_TO_WIKIJS') {
		// Reads TopicIndex (*.txt) => 
		// Writes (*.html)
		if (lan === 'en') {
			topicindex.readFromTXT(txtDir, category, 'ALL')
				.then(() => topicindex.writeToWikijs(htmlDir, letter))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		} else {
			topicindex.readFromTXT(txtDir, category, 'ALL')
				.then(() => {
					const ti = txtDir.replace(`topic-index-${lan}`, 'topic-index-en');
					return topicindexEN.readFromTXT(ti, category);
				})
				.then(() => topicindex.writeToWikijs(htmlDir, letter, topicindexEN))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		}
	} else if (process === 'TOPICS_INDEX_TXT_TO_MEDIAWIKI') {
		// Reads TopicIndex index (*.txt) => 
		// Writes (*.wiki)
		topicindex.readFromTXT(txtDir, category, letter)
			.then(() => topicindex.writeIndexToWikiText(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'TOPICS_INDEX_TXT_TO_WIKIJS') {
		// Reads TopicIndex index (*.txt) => 
		// Writes (*.html)
		if (lan === 'en') {
			topicindex.readFromTXT(txtDir, category, letter)
				.then(() => topicindex.writeIndexToWikijs(htmlDir, category))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		} else {
			topicindex.readFromTXT(txtDir, category, letter)
				.then(() => {
					const ti = txtDir.replace(`topic-index-${lan}`, 'topic-index-en');
					return topicindexEN.readFromTXT(ti, category);
				})
				.then(() => topicindex.writeIndexToWikijs(htmlDir, category, 
					topicindexEN))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		}
	} else if (process === 'REVIEW_TOPIC_TXT_LU_JSON') {
		// Reads TopicIndex (*.txt) => 
		// Reads UB (*.json) => 
		// Checks
		topicindex.readFromTXT(txtDir, category, letter)
			.then(() => book.readFromJSON(jsonDir))
			.then(() => topicindex.check(book))
			.then(() => topicindex.writeErrors(txtDir))
			.then(() => {
				showTopicList();
				onSuccess(okMsgs);
				showTopic(topicindex.topics[0].name);
			}).catch(onFail);
	} else if (process === 'SUM_TOPIC_TXT') {
		// Reads TopicIndex (*.txt) => 
		// Summary
		topicindex.readFromTXT(txtDir)
			.then(() => {
				let summary = topicindex.getSummary();
				onSuccess(okMsgs);
				showTopicSummary(summary);
			}).catch(onFail);
	} else if (process === 'NORM_TOPIC_TXT') {
		// Reads TopicIndex (*.txt) => 
		// Rewrites but modifying first entry line
		topicindex.normalize(txtDir)
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'ARTICLE_TXT_TO_MEDIAWIKI') {
		// Reads TXT folder => 
		// Writes (*.wiki)
		articles.readFromTXT(txtDir)
			.then(() => articles.writeToWikiText(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'ARTICLE_CATALOG_MARKDOWN_TO_WIKIJS') {
		// Reads Article Catalog (article.md) => 
		// Create pages in Wiki.js
		const sourceName = 'Innerface International';
		const inputFolder = path.join(htmlDir, '__input');
		articles.readCatalog()
			.then(() => articles.readFromMarkdown(inputFolder))
			.then(() => articles.writeToWikijs(htmlDir, sourceName))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'ARTICLE_INDEX_TO_WIKIJS') {
		// Reads Articles Index File (TSV)
		// Writes Articles Index in Wiki.js
		if (lan === 'en') {
			articles.readIndexFileFromTSV(txtFile)
				.then(() => articles.writeIndexFileToWikijs(htmlFile))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		} else {
			const txtFileEN = txtFile.replace('articles-' + lan, 'articles-en');
			articles.readIndexFileFromTSV(txtFileEN)
				.then(() => articles.readIndexFileFromTSV(txtFile))
				.then(() => articles.writeIndexFileToWikijs(htmlFile))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		}
	} else if (process === 'ARTICLE_NAVIGATION_HEADERS_IN_WIKIJS') {
		// Reads Articles Index File (TSV)
		// Writes navigation header/footer in Wiki.js
		if (lan === 'en') {
			articles.readIndexFileFromTSV(txtFile)
				.then(() => articles.writeNavigationHeadersToWikijs(htmlDir))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		} else {
			const txtFileEN = txtFile.replace('articles-' + lan, 'articles-en');
			articles.readIndexFileFromTSV(txtFileEN)
				.then(() => articles.readIndexFileFromTSV(txtFile))
				.then(() => articles.writeNavigationHeadersToWikijs(htmlDir))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		}
	} else if (process === 'ARTICLE_ANCHORS_IN_WIKIJS') {
		// Reads TSV file for Study Aids
		// Writes anchors in articles (*.md)
		const studyAids = path.join(app.getAppPath(), 
			'input/txt/articles-' + lan + '/study_aids.tsv');
		if (lan === 'en') {
			articles.readIndexFileFromTSV(studyAids)
				.then(() => articles.writeAnchorsToWikijs(htmlDir))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		} else {
			const studyAidsEN = studyAids.replace('articles-' + lan, 'articles-en');
			articles.readIndexFileFromTSV(studyAidsEN)
				.then(() => articles.readIndexFileFromTSV(studyAids))
				.then(() => articles.writeAnchorsToWikijs(htmlDir))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		}
	} else if (process === 'ARTICLE_CREATE_PARALELLS_FROM_WIKIJS') {
		//TODO: Add UF publications, not name Urantia Foundation
		//TODO: When creating UB papers, create new Study Aid section
		// Reads UB (*.json)
		// Reads articles (*.md)
		// Writes cross refs (paralells) (*.tsv)
		book.readFromJSON(jsonDir)
			.then(() => articles.readArticlesFromWikijs(htmlDir, book))
			.then(() => articles.writeUBParalellsToTSV(txtFile))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'ARTICLE_CREATE_BLANK_FROM_LIST') {
		// Reads Articles Index File (TSV)
		// Creates folders and files with blank content (only header)
		if (lan === 'en') {
			articles.readIndexFileFromTSV(txtFile)
				.then(() => articles.createBlankArticles(htmlDir))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		} else {
			const txtFileEN = txtFile.replace('articles-' + lan, 'articles-en');
			articles.readIndexFileFromTSV(txtFileEN)
				.then(() => articles.readIndexFileFromTSV(txtFile))
				.then(() => articles.createBlankArticles(htmlDir))
				.then(() => onSuccess(okMsgs))
				.catch(onFail);
		}
	} else if (process === 'ALL_INDEXES') {
		// Creates a page of all indexes
		getListOfAllIndexes(htmlDir)
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'PARALELL_INDEX') {
		// Reads UB (*.json)
		// Writes paralells (*.md) [IN PROGRESS]
		book.readFromJSON(jsonDir)
			.then(() => book.writeParalells(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'TEST') {
		// Process for doing tests
		const htmlDir2 = path.join(htmlDir, 'test.html');
		topicindex.readFromTXT(txtDir)
			.then(() => {
				const topic = topicindex.topics.find(t => t.name === 'triune-origin beings');
				return new Promise((resolve, reject) => {
					topicindex.writeFileToWikijs(htmlDir2, topic, topic)
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
		return err.stack.split('\n').map((s,i) => {
			return (i === 0 ?
				`<p class="text-danger mt-1 mb-0">${s}</p>` :
				`<p class="text-danger ml-3 mb-0 small">${s}</p>`);
		}).join('');
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
	controls.logArea.innerHTML = createSummaryFn(obj);
};

const onProgress = (baseName) => {
	const uilan = settings.language;
	logInfos.splice(0, 0, strformat(Strings['proccessing'][uilan], baseName));
	showInfos(logInfos);
};

const getListOfAllIndexes = (dirPath) => {
	return new Promise((resolve, reject) => {
		const baseName = path.basename(dirPath);
		fs.access(dirPath, fs.constants.W_OK, (err) => {
			if (err) {
				reject([getError(lan, 'dir_no_access', baseName)]);
				return;
			}
			const filePath = path.join(dirPath, 'index.html');
			const title = Strings['indexAll'][lan];
			const bname = Strings['bookName'][lan];
			const iname = Strings['bookIndexName'][lan];
			const ename = Strings['bookExtIndexName'][lan];
			const sname = Strings['bibleName'][lan];
			const bbooks = Object.values(BibleAbbs[lan]);
			const oldTestBooks = bbooks.filter(e => e[2] === 'OT');
			const newTestBooks = bbooks.filter(e => e[2] === 'NT');
			const apoBooks = bbooks.filter(e => e[2] === 'APO');
			const allBooks = [
				[Strings['bibleOldTestament'][lan], oldTestBooks],
				[Strings['bibleNewTestament'][lan], newTestBooks],
				[Strings['bibleApocrypha'][lan], apoBooks],
			];
			//Header
			let body = '';
			let header = '';
			header += getWikijsHeader(title, ['index']);
			header += '\r\n';

			body += `<p>${Strings['indexAllDesc'][lan]}</p>\r\n\r\n`;
			body += `<h2>${Strings['indexAllBooks'][lan]}</h2>\r\n\r\n`;
			body += `<h3>${bname}</h3>\r\n`;
			body += `<ul>\r\n` +
				`    <li><a href="/${lan}/The_Urantia_Book/Index" title="${bname} ${iname}">${bname} - ${iname}</a></li>\r\n` +
				`    <li><a href="/${lan}/The_Urantia_Book/Index_Extended" title="${bname} ${ename}">${bname} - ${ename}</a></li>\r\n` +
				`</ul>\r\n\r\n`;
			body += `<h3>${sname}</h3>\r\n\r\n`;
			body += `<ul>\r\n` +
				`    <li><a href="/${lan}/index/bible" title="${sname} ${iname}">${sname} - ${iname}</a></li>\r\n` +
				`</ul>\r\n\r\n`;
			allBooks.forEach((ab,j) => {
				const hstyle = (j != 2 ?
					' style="-moz-column-width: 11.5em; -webkit-column-width: 11.5em; column-width: 11.5em; margin-top: 1em;"' : '');
				body += `<h4${hstyle}>${ab[0]}</h4>\r\n`;
				body += `<div>\r\n`;
				body += `    <ul style="margin: 0; padding-top: 0px;">\r\n` +
					ab[1].map((book,i) => {
						const style = (j != 2 && i === 0 ? 
							' style="margin-top:0px;"' : '');
						return `        <li${style}><a href="${book[1]}" title="${book[0]}">${book[0]}</a></li>\r\n`;
					}).join('') +
					`    </ul>\r\n` +
					`</div>\r\n\r\n`;
			});
			
			//Only write if content is new or file not exists
			//Avoid a new date for creation date
			writeHTMLToWikijs(filePath, header, body)
				.then(resolve, reject);
		});
	});
};

// -----------------------------------------------------------------------------
// Search
// -----------------------------------------------------------------------------

const handle_fnSearchButton = (evt) => {
	dialog.showOpenDialog({
		title: strSelectFile,
		properties: ['openFile'],
		filters: [
			{name: 'All supported', extensions: ['html', 'htm', 'md']},
			{name: 'HTML', extensions: ['html', 'htm']}, 
			{name: 'Markdown', extensions: ['md']}]
	}).then(result => {
		if (!result.canceled && result.filePaths) {
			let dirPath = result.filePaths[0];
			//Show local path and later join
			dirPath = dirPath.replace(app.getAppPath(), '');
			controls.fnSearch.value = dirPath;
		}
	});
};

const handle_SearchExecution = (evt) => {
	const fileRelPath = controls.fnSearch.value;
	const isFile = (fileRelPath != '');
	const filePath = path.join(app.getAppPath(), fileRelPath);

	setSearchSearching(true);
	loadSearchBooks()
		.then(() => {
			return (isFile ? readFile(filePath) : Promise.resolve(null));
		})
		.then(lines => {
			executeSearch(lines);
			setSearchSearching(false);
		})
		.catch((errs) => {
			alert(Array.isArray(errs) ? errs.map(e => e.message).join('\n') :
				errs.message);
			setSearchSearching(false);
		});
	evt.preventDefault();
};

const handle_igrAddQuotesClick = (evt) => {
	const fileRelPath = controls.fnSearch.value;
	const copyType = controls.drpSearchCopyType.value;
	const copyLink = controls.chkSearchCopyLink.checked;
	const isFile = (fileRelPath != '');
	const filePath = path.join(app.getAppPath(), fileRelPath);
	if (!isFile) {
		return;
	}

	setSearchAdding(true);
	loadSearchBooks()
		.then(() => readFile(filePath))
		.then(lines => {
			const modifLines = lines.map(line => {
				//Get refs in line
				const refs = getRefsInLines([line])[0];
				if (refs.length === 0) {
					return line;
				}
				//Get UB pars
				const additions = refs.map(r => {
					const refs2 = bookSearch2.getArrayOfRefs([r]);
					if (refs2.length > 20) {
						return '**TOO MANY PARAGRAPHS IN QUOTE**';
					}
					let link = '';
					if (refs2.length > 0 && copyLink) {
						const rn1 = refs2[0];
						const rn = `${rn1[0]}:${rn1[1]}.${rn1[2]}`;
						const rn2 = `${rn}-${refs2[refs2.length-1][2]}`;
						link = ' ' + getParLink(bookSearch2, rn1, copyType);
						if (refs2.length > 1) {
							link = link.replace(rn, rn2);
						}
					}
					let text = refs2.map((r2, i) => {
						return getParText(bookSearch2, r2) + 
							(i === refs2.length - 1 ? link : '');
					}).join('\n');
					
					return text;
				});
				//Modify lines
				return line + additions.join('');
			});

			//Write file
			return writeFile(filePath, modifLines.join('\n'));
		})
		.then(() => {
			setSearchAdding(false);
		})
		.catch((errs) => {
			alert(Array.isArray(errs) ? errs.map(e => e.message).join('\n') :
				errs.message);
			setSearchAdding(false);
		});
	evt.preventDefault();
	
};

const loadSearchBooks = () => {
	const lan1 = controls.drpSearchLan.value;
	const lan2 = controls.drpSearchSecondLan.value;
	const root = app.getAppPath();
	const dirBook1 = path.join(root, 'input', 'json', `book-${lan1}`);
	const dirBook2 = path.join(root, 'input', 'json', `book-${lan2}`);
	
	const load1 = (bookSearch.language != lan1 || 
		bookSearch.papers.length == 0);
	const load2 = (bookSearch2.language != lan2 || 
		bookSearch2.papers.length == 0);

	if (load1) {
		bookSearch.setLanguage(lan1);
	}
	if (load2) {
		bookSearch2.setLanguage(lan2);
	}
	const promises = [
		(load1 ? bookSearch.readFromJSON(dirBook1) : Promise.resolve(true)),
		(load2 ? bookSearch2.readFromJSON(dirBook2) : Promise.resolve(true))
	];
	return Promise.all(promises);
};

const executeSearch = (lines) => {
	const text = controls.txtSearchText.value;
	const txtOldRefs = controls.txtSearchOldRefs.value;
	const txtNewRefs = controls.txtSearchNewRefs.value;
	let finalContent = '';

	//Unhandle
	$(controls.lbxSearchResultLan).find('button').off('click');

	//Clean
	controls.lbxSearchResultLan.innerHTML = '';

	//Fill listbox
	if (lines) {
		lines.forEach(line => {
			finalContent += getSearchParsForLine(line);
		});
	} else {
		if (txtOldRefs != '') {
			const oldRefs = txtOldRefs.split(';').map(s => s.trim());
			finalContent += getSearchParsForOldRefs(oldRefs, null, text);
		}
		if (txtNewRefs != '') {
			const newRefs = txtNewRefs.split(';').map(s => s.trim());
			finalContent += getSearchParsForNewRefs(newRefs, null, text);
		}
		if (txtOldRefs === '' && txtNewRefs === '' && text != '') {
			finalContent += getSearchParsForText(text);
		}
	}
	controls.lbxSearchResultLan.innerHTML = finalContent;

	//Handle
	if (finalContent != '') {
		$(controls.lbxSearchResultLan).find('button').on('click', 
			function(evt) {
				const dtext = $(evt.currentTarget).attr('data-text');
				clipboard.writeText(dtext);
				evt.stopPropagation();
			});
	}
};

const highlightPar = (line, quotes, text) => {
	const pattern = `<span class="text-primary">{0}</span>`;
	const text2 = (!text || text === '' ? null : strformat(pattern, text));
	let finalLine = line;
	if (quotes && quotes.length > 0) {
		quotes.forEach(q => {
			const plainq = q.replace(/_|\*/g, '');
			if (finalLine.indexOf(plainq) != -1) {
				let q2 = plainq;
				let parts = finalLine.split(plainq);
				if (text2) {
					q2 = plainq.replace(text, text2);
					parts = parts.map(p => p.replace(text, text2));
				}
				finalLine = parts.join(`<b>${q2}</b>`);
			}

		});
	} else if (text2) {
		finalLine = line.replace(text, text2);
	}
	return finalLine;
};

const getSearchParsForLine = (line) => {
	const text = controls.txtSearchText.value;
	const lanIndex = (controls.chkSearchFileLan.checked ? 1 : 0);
	const refs = getRefsInLines([line])[0];
	const obj = getOldRefsInLines([line])[0];
	const classes = ['alert', 'alert-info', 'mx-0', 'my-0', 'px-0', 'py-0'];

	if (refs.length === 0 && obj.refs.length === 0) return '';

	//Line from file
	const finalLine = highlightPar(line, obj.quotes, text);
	const pars = [], rrefs = [];
	pars[lanIndex] = finalLine;
	rrefs[lanIndex] = obj.refs.join('; ') + 
		(obj.refs.length > 0 ? '; ' : '') + refs.join(';');
	const lineText = createBookParsFn({
		rowclass: classes,
		errclass: classes,
		pars: pars,
		refs: rrefs,
		textToCopy: ['', ''],
		linkToCopy: ['', '']
	});
	//Old refs
	const oldRefsContent = getSearchParsForOldRefs(obj.refs, obj.quotes, text);
	//New refs
	const newRefsContent = getSearchParsForNewRefs(refs, obj.quotes, text);
	return lineText + oldRefsContent + newRefsContent;
};

const getSearchParsForOldRefs = (oldRefs, quotes, text) => {
	const content = oldRefs.map(r => {
		const refs1 = bookSearch.getArrayOfRefsFromOldRefs([r]);
		const refs2 = bookSearch2.getArrayOfRefsFromOldRefs([r]);
		return refs1.map((rr, j) => {
			const par = getSearchPars(rr, refs2[j], r, true);
			return highlightPar(par, quotes, text);
		}).join('');
	}).join('');
	return content;
};

const getSearchParsForNewRefs = (newRefs, quotes, text) => {
	const content = newRefs.map(r => {
		const refs1 = bookSearch.getArrayOfRefs([r]);
		const refs2 = bookSearch2.getArrayOfRefs([r]);
		let result = refs1.map((rr, j) => {
			const par = getSearchPars(rr, refs2[j], r, false);
			return highlightPar(par, quotes, text);
		}).join('');
		if (refs1.length > 1) {
			result += getSearchParsMulti(refs1, refs2, r);
		}
		return result;
	}).join('');
	return content;
};

const getSearchParsForText = (text) => {
	const refs = bookSearch.search(text);
	if (refs.length > 0) {
		return getSearchParsForNewRefs(refs, null, text);
	}
};

const getRefsInLines = (lines) => {
	const pattern = '(\\d{1,3}):(\\d{1,2})(\\.\\d{1,3})?(-\\d{1,3})?';
	const abbs = Object.values(Strings.bookAbb).join('|');
	const regEx1 = new RegExp(pattern, 'g');
	const regEx = new RegExp(`(${abbs}) ${pattern}`, 'g');
	return lines.map(line => {
		const matched = line.match(regEx);
		return (matched ? matched.map(r => r.match(regEx1)[0]) : []);
	});
};

const getOldRefsInLines = (lines) => {
	const refRegEx = new RegExp('\\(\\d{1,4}(\\.\\d{1,2})?\\)', 'g');
	const quoteRegEx = new RegExp('"([^"]*)"|“([^”]*)”|«([^»]*)»', 'g');
	return lines.map(line => {
		const refsMatched = line.match(refRegEx);
		const quotesMatched = line.match(quoteRegEx);
		return {
			refs: (refsMatched ? 
				[...new Set(refsMatched)].map(m => m.replace(/[\(|\)]/g,'')) : 
				[]),
			quotes: (quotesMatched ?
				quotesMatched.map(m => m.replace(/["“”«»]/g, '')) : [])
		};
	});
};

const getSearchPars = (r1, r2, r, old) => {
	const copyType = controls.drpSearchCopyType.value;
	const copyLink = controls.chkSearchCopyLink.checked;
	const errs1 = [], errs2 = [];
	const par1 = bookSearch.toParInHTML(r1, errs1);
	const par2 = bookSearch2.toParInHTML(r2, errs2);
	const link1 = getParLink(bookSearch, r1, copyType);
	const link2 = getParLink(bookSearch2, r2, copyType);
	const par1Plain = getParText(bookSearch, r1, 
		(copyLink ? ' ' + link1 : ''));
	const par2Plain = getParText(bookSearch2, r2, 
		(copyLink ? ' ' + link2 : ''));
	const oldref = (old ? ' (' + r + ')' : '');
	const ref1 = (r1 ? ` [${r1[0]}:${r1[1]}.${r1[2]}]` + oldref : 
		(errs1.join(';') + ': [' + r + ']'));
	const ref2 = (r2 ? ` [${r2[0]}:${r2[1]}.${r2[2]}]` + oldref : 
		(errs2.join(';') + ': [' + r + ']'));
	
	return createBookParsFn({
		rowClass: [],
		errclass: (r1 == null || r2 == null ? 
			['alert', 'alert-danger', 'mb-0', 'py-0'] : []),
		pars: [par1, par2],
		refs: [ref1, ref2],
		textToCopy: [par1Plain, par2Plain],
		linkToCopy: [link1, link2]
	});
};

const getSearchParsMulti = (refs1, refs2, r) => {
	const copyType = controls.drpSearchCopyType.value;
	const copyLink = controls.chkSearchCopyLink.checked;
	const rn1 = refs1[0];
	const rn = `${rn1[0]}:${rn1[1]}.${rn1[2]}`;
	const rn2 = `${rn}-${refs1[refs1.length-1][2]}`;
	const link1 = (copyLink ? getParLink(bookSearch, rn1, copyType)
		.replace(rn, rn2) : '');
	const link2 = (copyLink ? getParLink(bookSearch2, rn1, copyType)
		.replace(rn, rn2) : '');
	const pars1Plain = refs1.map(r1 => getParText(bookSearch, r1)).join('') +
		(copyLink ? ' ' + link1 : '');
	const pars2Plain = refs2.map(r2 => getParText(bookSearch2, r2)).join('') +
		(copyLink ? ' ' + link2 : '');
	const ref = `[${r}]`;

	return createBookParsFn({
		rowClass: [],
		errclass: [],
		pars: [],
		refs: [ref, ref],
		textToCopy: [pars1Plain, pars2Plain],
		linkToCopy: [link1, link2]
	});
};

const getParText = (book, ref, link) => {
	const copyType = controls.drpSearchCopyType.value;
	const quotes = controls.chkSearchCopyQuotes.checked;
	const qStart = Strings['quotationStart'][book.language];
	const qEnd = Strings['quotationEnd'][book.language];
	link = (link ? link : '');
	let parText = '', bqStart = '', bqEnd = '';

	if (copyType === copyTypes[0]) {
		parText = book.toParInPlainText(ref, []);
	} else if (copyType === copyTypes[1]) {
		parText = book.toParInMarkdown(ref, []);
		bqStart = '\t> ';
		bqEnd = '';
	} else {
		parText = book.toParInHTML(ref, []);
		bqStart = '\t<blockquote>';
		bqEnd = '</blockquote>';
	}
	if (quotes) {
		parText = `${bqStart}${qStart}${parText}${qEnd}${link}${bqEnd}`;
	}
	return parText;
};

const getParLink = (book, ref, copyType) => {
	if (!ref) return '';
	const lan = book.language;
	const bookAbb = Strings.bookAbb[lan];
	const linkPLPattern = `/${lan}/The_Urantia_Book/{0}#p{1}_{2}`;
	const p = `${bookAbb} {0}:{1}.{2}`;
	const linkMDPattern = `[${p}](/${lan}/The_Urantia_Book/{0}#p{1}_{2})`;
	const linkHTMLPattern = 
		`<a href="/${lan}/The_Urantia_Book/{0}#p{1}_{2}">${p}</a>`;
	
	let pattern = linkHTMLPattern;

	if (copyType === copyTypes[0]) {
		pattern = linkPLPattern;
	} else if (copyType === copyTypes[1]) {
		pattern = linkMDPattern;
	}
	return strformat(pattern, ref[0], ref[1], ref[2]);
};

const setSearchSearching = (searching) => {
	const uilan = settings.language;
	$(controls.spinSearchLoading).toggleClass('d-none', !searching);
	const t = (searching ? 'btnSearch_searching' : 'btnSearch');
	$(controls.btnSearch).text(Strings[t][uilan]);
	$(controls.igrSearch).find('button').attr('disabled', 
	searching ? 'disabled' : null);
};

const setSearchAdding = (adding) => {
	const uilan = settings.language;
	$(controls.spinSearchAdding).toggleClass('d-none', !adding);
	const t = (adding ? 'btnAddQuotes_adding' : 'btnAddQuotes');
	$(controls.btnAddQuotes).text(Strings[t][uilan]);
	$(controls.igrSearch).find('button').attr('disabled', 
	adding ? 'disabled' : null);
};

// -----------------------------------------------------------------------------
// Topic Index Editor
// -----------------------------------------------------------------------------

const handle_igrTILoadTopicsClick = (evt) => {
	loadTITopics(false);
	evt.preventDefault();
};

const handle_btnTIURLClick = (evt) => {
	const url = $(controls.btnTIURL).text();
	shell.openExternal(url);
	evt.preventDefault();
};

const handle_drpTILanguage1Change = (evt) => {
	const lan1 = controls.drpTILanguage1.value;
	topicindexEdit.setLanguage(lan1);
	bookEdit.setLanguage(lan1);
	loadTITopics(true);
};

const handle_drpTILanguage2Change = (evt) => {
	const lan2 = controls.drpTILanguage2.value;
	topicindexEdit2.setLanguage(lan2);
	bookEdit2.setLanguage(lan2);
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
	const dirTopics1 = path.join(root, 'input', 'txt', `topic-index-${lan1}`);
	const dirTopics2 = path.join(root, 'input', 'txt', `topic-index-${lan2}`);
	const dirTopicsEN = path.join(root, 'input', 'txt', 'topic-index-en');
	const dirBook1 = path.join(root, 'input', 'json', `book-${lan1}-footnotes`);
	const dirBook2 = path.join(root, 'input', 'json', `book-${lan2}-footnotes`);
	//TODO: use either with or without footnotes, whichever exists

	setTILoading(true);
	
	const promises = [
		topicindexEdit.readFromTXT(dirTopics1, 'ALL'),
		topicindexEdit2.readFromTXT(dirTopics2, 'ALL'),
		topicindexEditEN.readFromTXT(dirTopicsEN, 'ALL'),
		bookEdit.readFromJSON(dirBook1),
		bookEdit2.readFromJSON(dirBook2)
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
	let activeFound = false;
	controls.lbxTITopics.innerHTML = topics
		.map(t => {
			const n = t.name;
			const len = t.errors ? t.errors.length : 0;
			const active = (n === topicEditing ? ' active' : '');
			if (active != '') activeFound = true;
			const errcls = len > 0 ? ' alert alert-danger ' : ' ';
			const badge = len > 0 ? 
				`<span class="badge badge-pill badge-danger mr-1">${len}</span>` : '';
			return `<div class="list-group-item btn-sm list-group-item-action 
						flex-column p-0 align-items-start${active}">
						<div class="d-flex w-100 justify-content-between${errcls}px-2 py-1 mb-0">
							<div>${n}</div>
							<div>${badge}${t.type}</div>
						</div>
					</div>`;
		})
		.join('');
	
	//Handle
	$(controls.lbxTITopics).find('.list-group-item').on('click', function() {
		setTITopicAsSelected(this);
	});
	//Select first topic by default if no one is active
	if (!activeFound && topics.length > 0) {
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

const getTITopicSelected = () => {
	if (!topicEditing) return null;
	const topic = topicindexEdit.topics.find(t => t.name === topicEditing);
	return topic;
};

const showTITopic = () => {
	//TODO: //https://jsfiddle.net/KyleMit/LczLqsoa/
	const topic = getTITopicSelected();
	if (!topic) return;

	const topicEN = topicindexEditEN.topics.find(t => {
		return (t.filename === topic.filename &&
			t.fileline === topic.fileline);
	});
	let lan1 = controls.drpTILanguage1.value;
	const sorting = topic.sorting;
	const topic2 = topicindexEdit2.topics.find(t => t.sorting === sorting);
	const aliases = (topic.altnames ? topic.altnames : []);
	const refs = (topic.refs ? topic.refs : []);
	const seeAlso = (topic.seeAlso ? topic.seeAlso : []);
	const links = (topic.externalLinks ? topic.externalLinks : []);
	const lines = (topic.lines ? topic.lines : []);
	const lines2 = (topic2.lines ? topic2.lines : []);
	const topicErrs = (topic.errors ? 
		topic.errors.filter(er => er.fileline === topic.fileline) : []);
	const pagename = (topicEN ? topicEN.name.replace(/ /g, '_') : 'not_found');
	lan1 = (lan1 === 'en' ? '' : '/' + lan1);
	const url = `http://urantiapedia.org${lan1}/topic/${pagename}`

	controls.txtTIName.value = topicEditing;
	controls.txtTIAliases.value = aliases.join('; ');
	controls.chkTIRevised.checked = topic.revised;
	controls.txtTIRefs.value = refs.join('; ');
	controls.txtTISeeAlsos.value = seeAlso.join('; ');
	controls.txtTILinks.value = links.join('; ');
	controls.drpTICategory.value = topic.type;
	$(controls.btnTIURL).html(url);

	//Unhandle
	$(controls.lbxTILines).find('.list-group-item').off('click');

	//Fill lines listbox
	const linesHTML = [];
	extendArray(linesHTML, topicErrs
		.map(er => {
			return `<div class="list-group-item btn-sm list-group-item-action 
						flex-column align-items-start p-0">
						<div class="alert alert-danger py-0 px-2 mb-0">${er.desc}</div>
					</div>`;
		}));
	extendArray(linesHTML, lines
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
							<div class="d-none up-fileline">${line.fileline}</div>
							<div class="col-6">${line.text}</div>
							<div class="col-6">${line2.text}</div>
						</div>
						${errRows}
						<div class="row">
							<div class="col-12 text-right">${line.refs.join(', ')}</div>
						</div>
					</div>`;
		}));
	controls.lbxTILines.innerHTML = linesHTML.join('');

	//Handle
	$(controls.lbxTILines).find('.list-group-item').on('click', function() {
		setTITopicLineAsSelected(this);
	});

	//Select first line by default
	if (lines.length > 0) {
		setTITopicLineAsSelected($(controls.lbxTILines)
			.find(`.list-group-item:nth-child(${topicErrs.length + 1})`)[0]);
	} else {
		controls.lbxTIUBLines.innerHTML = '';
	}
};

const setTITopicLineAsSelected = (htmlElement) => {
	const $fileline = $(htmlElement).find('.up-fileline');
	if ($fileline.length === 0) return;
	const fileline = $fileline.text();
	filelineEditing = parseInt(fileline);
	$(controls.lbxTILines).find('.list-group-item').toggleClass('active', false);
	$(htmlElement).toggleClass('active', true);
	showTILinesUB();
};

const showTILinesUB = () => {
	const topic = getTITopicSelected();
	if (!topic) return;
	const topic2 = topicindexEdit2.topics.find(t => {
		return (t.filename === topic.filename && t.fileline === topic.fileline);
	});
	const is1EN = (bookEdit.language === 'en');
	const is2EN = (bookEdit2.language === 'en');

	const line1 = topic.lines.find(ln => ln.fileline === filelineEditing);
	const line2 = topic2.lines.find(ln => ln.fileline === filelineEditing);

	const names1 = [topic.name.split('(')[0].trim(), ...topic.altnames];
	const spans1 = names1.map(name => `<span class="text-primary">${name}</span>`);
	const names2 = (topic2 ? 
		[topic2.name.split('(')[0].trim(), ...topic2.altnames] : []);
	const spans2 = names2.map(name => `<span class="text-primary">${name}</span>`);
	const fnGetPars = (r1, r2) => {
		const errs = [];
		let similarSen1 = '';
		let par1 = bookEdit.toParInHTML(r1, errs);
		const par1Plain = bookEdit.toParInPlainText(r1, []);
		par1 = replaceWords(names1, spans1, par1);

		let similarSen2 = '';
		let par2 = bookEdit2.toParInHTML(r2, errs);
		const par2Plain = bookEdit2.toParInPlainText(r2, []);
		par2 = replaceWords(names2, spans2, par2);

		const ref1 = (r1 ? ` [${r1[0]}:${r1[1]}.${r1[2]}]` : '');
		const ref2 = (r2 ? ` [${r2[0]}:${r2[1]}.${r2[2]}]` : '');
		const linkref1 = getParLink(bookEdit, r1, copyTypes[0]);
		const linkref2 = getParLink(bookEdit2, r2, copyTypes[0]);

		//Highlight and show a Copy button in the sentence most similar to current
		// This is only available when one language is english and the other not
		// This restriction is due to english is an index created manually and any
		// other language is created by translations from english
		const parEN = (is1EN ? par1Plain : is2EN ? par2Plain : null);
		const parNotEN = (!is1EN ? par1Plain : !is2EN ? par2Plain : null);
		const lineEN = (is1EN ? line1 : is2EN ? line2 : null);
		if (parEN && parNotEN && lineEN) {
			const similar = getMostSimilarSentence(parEN, parNotEN, lineEN.text);
			//TODO: If no similar sentence is found but there is only one ref to
			// one par then use all par as similar
			if (similar.length > 0) {
				const similarSenEN = similar[0];
				const similarSenNotEN = similar[1];
				const index = similar[2];
				similarSen1 = (is1EN ? similarSenEN : similarSenNotEN);
				similarSen2 = (is2EN ? similarSenEN : similarSenNotEN);
				
				//TODO: next lines could fail for some languages with different sentence endings
				const arSen1 = par1.replace(/([.?!])/g, "$1|").split("|");
				const arSen2 = par2.replace(/([.?!])/g, "$1|").split("|");
				if (arSen1.length > index && arSen2.length > index) {
					arSen1[index] = `<strong>${arSen1[index]}</strong>`;
					arSen2[index] = `<strong>${arSen2[index]}</strong>`;
				}
				par1 = arSen1.join(' ');
				par2 = arSen2.join(' ');
			}
		}
		
		return createBookParsFn({
			rowClass: [],
			errclass: (r1 == null || r2 == null ? 
				['alert', 'alert-danger', 'mb-0', 'py-0'] : []),
			pars: [par1, par2],
			refs: [ref1, ref2],
			textToCopy: [similarSen1, similarSen2],
			linkToCopy: [linkref1, linkref2]
		});
	};
	const refs1 = bookEdit.getArrayOfRefs(line1.refs);
	const refs2 = bookEdit2.getArrayOfRefs(line1.refs);

	//Unhandle
	$(controls.lbxTIUBLines).find('button').off('click');

	//Fill listbox
	controls.lbxTIUBLines.innerHTML = refs1.map((r, i) => {
		return fnGetPars(refs1[i], refs2[i]);
	}).join('');

	//Handle
	$(controls.lbxTIUBLines).find('button').on('click', function(evt) {
		const text = $(evt.currentTarget).attr('data-text');
		clipboard.writeText(text);
		evt.stopPropagation();
	});
};

const handle_btnTISaveChangesClick = () => {
	const uilan = settings.language;
	if (topicindexEdit.topics.length === 0) return;

	const msgOpts = {
		message: Strings["topicindex_save_confirm"][uilan],
		type: 'question',
		buttons: ['Yes', 'No'],
		title: 'Urantiapedia'
	};
	if (dialog.showMessageBoxSync(msgOpts) === 1) return;

	setTISaving(true);

	const lan1 = controls.drpTILanguage1.value;
	const root = app.getAppPath();
	const dirTopics1 = path.join(root, 'tests', `topic-index-${lan1}`);

	topicindexEdit.writeToTXT(dirTopics1)
		.then(result => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					setTISaving(false);
					$(controls.btnTISaveChanges).toggleClass('text-warning', false);
					resolve();
				}, 200);
			});
		})
		.catch(errs => {
			onTIFail(errs);
			setTISaving(false);
		});
};

const handle_btnTIEditAliasClick = (evt) => {
	const topic = getTITopicSelected();
	if (!topic) return;
	editAliasDialog.updateLists(topic, bookEdit);
	editAliasDialog.showModal();
};

const handle_editAliasDialogOK = (data) => {
	const topic = getTITopicSelected();
	if (!topic) return;
	//Check changes
	const altnames = data.altnames.slice();;
	changed = (JSON.stringify(topic.altnames) != JSON.stringify(altnames));
	if (changed) {
		topic.altnames = altnames;
		controls.txtTIAliases.value = altnames.join('; ');
		$(controls.btnTISaveChanges).toggleClass('text-warning', true);
		topicindexEdit.checkTopic(topic, bookEdit);
		showTITopics();
	}
};

const handle_chkTIRevisedChange = (evt) => {
	const topic = getTITopicSelected();
	if (!topic) return;
	changed = true;
	topic.revised = controls.chkTIRevised.checked;
	$(controls.btnTISaveChanges).toggleClass('text-warning', true);
};

const handle_btnTIEditRefsClick = (evt) => {
	const topic = getTITopicSelected();
	if (!topic) return;
	editRefsDialog.updateLists(topic, bookEdit);
	editRefsDialog.showModal();
};

const handle_editRefsDialogOK = (data) => {
	const topic = getTITopicSelected();
	if (!topic) return;
	//Check changes
	const refs = data.refs.slice();;
	changed = (JSON.stringify(topic.refs) != JSON.stringify(refs));
	if (changed) {
		topic.refs = refs;
		controls.txtTIRefs.value = refs.join('; ');
		$(controls.btnTISaveChanges).toggleClass('text-warning', true);
		topicindexEdit.checkTopic(topic, bookEdit);
		showTITopics();
	}
};

const handle_btnTIEditSeeAlsoClick = (evt) => {
	const topic = getTITopicSelected();
	if (!topic) return;
	editSeeAlsosDialog.updateLists(topic, bookEdit);
	editSeeAlsosDialog.showModal();
};

const handle_editSeeAlsosDialogOK = (data) => {

};

const setTIDisabledStatus = (disabled) => {
	controlsToDisable.forEach(key => {
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
	$(controls.btnTISaving).toggleClass('d-none', !saving);
	$(controls.btnTISaveChanges).toggleClass('d-none', saving);
	setTIDisabledStatus(saving);
};

const onTIFail = (errors) => {
	errors = (Array.isArray(errors) ? errors : [errors]);
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
								${err.message} ${err.stack}
							</div>
						</div>
					</div>`;
		})
		.join('');

};

// -----------------------------------------------------------------------------
// Translate
// -----------------------------------------------------------------------------

const handle_translateButton = (evt) => {
	const sourceLan = controls.drpTranslateLanguage1.value;
	const targetLan = controls.drpTranslateLanguage2.value;
	const originFolder = controls.fnTranslateOriginFolder.value;
	const targetFolder = controls.fnTranslateTargetFolder.value;

	if (!originFolder || originFolder == '' || !targetFolder || targetFolder == '') {
		showTranslateError([new Error('Folder missing.')]);
		return;
	}

	translator.configure(settings.translateAPIKey, settings.translateProjectID);
	
	//Test to translate a text
	// translator.translateText('¡Hola mundo!', sourceLan, targetLan)
	// 	.then(translations => alert(translations));

	loadTranslateBooks()
		.then(() => {
			translator.configureBooks(bookTranslate, bookTranslate2);
			return translator.translateFolder(originFolder, targetFolder, 
				sourceLan, 	targetLan);
		})
		.then(issues => showTranslateLog(issues))
		.catch(err => showTranslateError([err]));
};

const handle_estimateButton = (evt) => {
	const sourceLan = controls.drpTranslateLanguage1.value;
	const targetLan = controls.drpTranslateLanguage2.value;
	const originFolder = controls.fnTranslateOriginFolder.value;

	if (!originFolder || originFolder == '') {
		showTranslateError([new Error('Origin folder missing.')]);
		return;
	}

	loadTranslateBooks()
		.then(() => {
			translator.configureBooks(bookTranslate, bookTranslate2);
			return translator.estimateFolder(originFolder, sourceLan, targetLan);
		})
		.then(issues => {
			const msgs = issues.map(i => {
				if (i instanceof Error) {
					return i;
				}
				return [i[0], `Text in file / Text to translate: ${i[1]} / ${i[2]}`];
			});
			showTranslateLog(msgs);
		})
		.catch(err => showTranslateError([err]));
};

const loadTranslateBooks = () => {
	const sourceLan = controls.drpTranslateLanguage1.value;
	const targetLan = controls.drpTranslateLanguage2.value;
	const root = app.getAppPath();
	const dirBook1 = path.join(root, 'input', 'json', `book-${sourceLan}`);
	const dirBook2 = path.join(root, 'input', 'json', `book-${targetLan}`);
	
	const load1 = (bookTranslate.language != sourceLan || 
		bookTranslate.papers.length == 0);
	const load2 = (bookTranslate2.language != targetLan || 
		bookTranslate2.papers.length == 0);

	if (load1) {
		bookTranslate.setLanguage(sourceLan);
	}
	if (load2) {
		bookTranslate2.setLanguage(targetLan);
	}
	const promises = [
		(load1 ? bookTranslate.readFromJSON(dirBook1) : Promise.resolve(true)),
		(load2 ? bookTranslate2.readFromJSON(dirBook2) : Promise.resolve(true))
	];
	return Promise.all(promises);
};

const showTranslateLog = (issues) => {
	controls.logAreaTranslate.innerHTML = issues
		.map(arIssuesOrErr => {
			if (arIssuesOrErr instanceof Error) {
				return arIssuesOrErr.stack.split('\n').map((s,i) => {
					return (i === 0 ?
						`<p class="text-danger mt-1 mb-0">${s}</p>` :
						`<p class="text-danger ml-3 mb-0 small">${s}</p>`);
				}).join('');
			}
			return arIssuesOrErr.map((info, i) => {
				return (i == 0 ?
					`<p class="mb-1">${info}</p>` :
					`<p class="mb-1 alert alert-light small">${info}</p>`);
			}).join('');
		}).join('');
};

const showTranslateError = (errors) => {
	controls.logAreaTranslate.innerHTML = errors.map(err=> {
		return err.stack.split('\n').map((s,i) => {
			return (i === 0 ?
				`<p class="text-danger mt-1 mb-0">${s}</p>` :
				`<p class="text-danger ml-3 mb-0 small">${s}</p>`);
		}).join('');
	}).join('');
};

// -----------------------------------------------------------------------------
// AirTable
// -----------------------------------------------------------------------------
//TODO: Implement Import tool to upload non existing names to AirTable

const handle_igrAirTableConnect = (evt) => {
	if (!airTableConnectionEnabled) {
		return;
	}
	if (!settings.airTableAPIKey || !settings.airTableBaseID) {
		window.alert('Add AirTable API Key and Base ID to settings');
		return;
	}

	airTableConnectionEnabled = false;
	setAirTableWorkingStatus(true, 'spinAirTableConnectWorking');

	if (!airTable.connected()) {
		airTable.configure(settings.airTableAPIKey, settings.airTableBaseID);
	}

	//Unhandle
	$(controls.lbxAirTableTables).find('.list-group-item').off('click');

	//Fill
	controls.lbxAirTableTables.innerHTML = airTable.getTableNames()
		.map(name => {
			const active = (airTableTableSelected === name ? ' active' : '');
			return airTable.getTableRender(name, active);
		})
		.join('');

	//Handle
	$(controls.lbxAirTableTables).find('.list-group-item').on('click', function() {
		if (airTableConnectionEnabled) {
			setAirTableTableAsSelected(this);
		}
	});

	//Request all tables
	airTable.getAllTables()
		.then(tables => {
			//Show first table by default
			const firstElement = $(controls.lbxAirTableTables)
				.find('.list-group-item:first-child').get(0);
			setAirTableTableAsSelected(firstElement);
			//Next step is load UB
			return loadBookForAirTable();
		})
		.then(() => {
			//Fill UB papers
			const html = bookAirTable.papers
				.sort((a,b)=>a.paper_index - b.paper_index)
				.map(paper => {
					const i = paper.paper_index;
					const t = (i === 0 ? '' : 
						`Paper ${i}. `) + paper.paper_title;
					return `<option value="${i}">${t}</option>`;
				});
			$(controls.drpAirTableUBPaper).html(html);
			showBookPaperForAirTable();
			//Finally disable the connect button when connection went well
			$(controls.igrAirTableConnect).find('button').toggleClass('disabled', 
				true);
			airTableConnectionEnabled = true;
			setAirTableWorkingStatus(false, 'spinAirTableConnectWorking');
		})
		.catch(err => {
			alert(err.message);
			console.log(err);
			airTableConnectionEnabled = true;
			setAirTableWorkingStatus(false, 'spinAirTableConnectWorking');
		});
};

const handle_drpAirTableUBPaper = (evt) => {
	showBookPaperForAirTable();
};

const handle_btnAirTableNewPerson = (evt) => {
	addAirTableRecord('Person');
};

const handle_btnAirTableAltPerson = (evt) => {
	updateAirTableRecord('Person');
};

const handle_btnAirTableNewLocation = (evt) => {
	addAirTableRecord('Location');
};

const handle_btnAirTableAltLocation = (evt) => {
	updateAirTableRecord('Location');
};

const handle_btnAirTableCase = (evt) => {
	const cs = ['Lower', 'Title', 'Upper'];
	const precs = 'btnAirTableCase';
	const isActive = $(evt.currentTarget).hasClass('active');
	cs.forEach(c => $(controls[`${precs}${c}`]).toggleClass('active', false));
	$(evt.currentTarget).toggleClass('active', isActive ? false : true);
};

const setAirTableTableAsSelected = (htmlElementOrName) => {
	const htmlElement = (typeof htmlElementOrName === 'string' ?
		$(controls.lbxAirTableTables)
			.find(`.list-group-item:contains("${htmlElementOrName}")`).get(0) : 
		htmlElementOrName
	);
	const name = $(htmlElement).find('div > div:first-child').text();
	airTableTableSelected = name;
	airTableRecordSelected = null;
	$(controls.lbxAirTableTables).find('.list-group-item')
		.toggleClass('active', false);
	$(htmlElement).toggleClass('active', true);
	showAirTableTable();
};

const showAirTableTable = () => {
	const clsRecord = '.list-group-item .list-group-item';
	//TODO: add this in toggleAirTableRecord
	// const clsInputs = '.list-group-item .flex-shrink-0 input';

	//Unhandle
	$(controls.lbxAirTableData).find(clsRecord).off('click');
	// $(controls.lbxAirTableData).find(clsInputs).off('blur');
	
	//Fill
	const html = airTable.getRecordNameRenders(airTableTableSelected);
	$(controls.lbxAirTableData).html(html);

	//Handle
	$(controls.lbxAirTableData).find(clsRecord).on('click', function(evt) {
		toggleAirTableRecord(this);
		evt.stopPropagation();
	});
	// $(controls.lbxAirTableData).find(clsInputs).on('blur', function(evt) {
	// 	console.log(evt.currentTarget.localName);
	// 	evt.stopPropagation();
	// });
};

const toggleAirTableRecord = (htmlElement) => {
	const elem = $(htmlElement).find('div:first-child');
	const name = $(elem).find('span').text();
	const rec = airTable.getRecord(airTableTableSelected, name);
	airTableRecordSelected = rec;
	let collapsed = ($(elem).find('i').attr('class') === 'bi-chevron-right');
	collapsed = !collapsed;
	const chevron = (collapsed ? 'bi-chevron-right' : 'bi-chevron-down');
	$(controls.lbxAirTableData).find('.list-group-item .list-group-item')
		.toggleClass('active', false);
	$(htmlElement).toggleClass('active', true);
	$(elem).find('i').attr('class', chevron);

	if (collapsed) {
		$(htmlElement).parent().find('> div:nth-child(2)').remove();
	} else {
		const html = airTable.getRecordForm(airTableTableSelected, rec);
		$(htmlElement).parent().append(html);
	}
};

const setAirTableWorkingStatus = (working, control) => {
	$(controls[control]).toggleClass('d-none', !working);
	setAirTableDisabledStatus(working);
};

const setAirTableDisabledStatus = (disabled) => {
	controlsAirTableToDisable.forEach(key => {
		(controls[key].localName === 'button' ?
			$(controls[key]) : $(controls[key]).find('button'))
			.toggleClass('disabled', disabled);
	});
};

const loadBookForAirTable = () => {
	//We are using English only for now
	const root = app.getAppPath();
	const dirBook = path.join(root, 'input', 'json', `book-en`);
	bookAirTable.setLanguage('en');
	return bookAirTable.readFromJSON(dirBook);
};

const showBookPaperForAirTable = () => {
	const index = parseInt(controls.drpAirTableUBPaper.value);
	const paper = bookAirTable.papers.find(p => p.paper_index === index);
	const html = [];
	const errs = [];
	const classes = 'list-group-item btn-sm list-group-item-action py-2 px-2';
	const searches = [], replaces = [];

	//Unhandle
	$(controls.lbxAirTableUB).find('.list-group-item').off('mouseup');

	//Fill
	airTable.getTableNames().forEach(tableName => {
		const arNames = airTable.getRecordNamesAndAlternates(tableName);
		const cls = tableName.toLowerCase();
		arNames.forEach(ar => {
			ar.forEach(name => {
				searches.push(name);
				replaces.push(`<mark class="${cls}">${name}</mark>`);
			});
		});
	});

	paper.sections.forEach(section => {
		if (section.section_title) {
			html.push(`<b>${section.section_title}</b>`);
		}
		section.pars.forEach((par, i) => {
			const ref = [index, section.section_index, i + 1];
			const href = 'https://urantiapedia.org/en/The_Urantia_Book/' +
				`${index}#p${section.section_index}_${i + 1}`;
			const link = `<a href="${href}" target="_blank">${par.par_ref}</a>`;
			const refHtml = `<sup><small>${link}</small></sup>`;
			const parHtml = bookAirTable.toParInHTML(ref, errs);
			const parHtml2 = replaceWords(searches, replaces, parHtml, true, true, 
				true);

			html.push(`${refHtml}   ${parHtml2}`);
		});
	});
	
	const html2 = html.map(h => `<div class="${classes}">${h}</div>`).join('');
	$(controls.lbxAirTableUB).html(html2);

	//Handle
	$(controls.lbxAirTableUB).find('.list-group-item')
		.on('mouseup', function(evt) {
			selectedText = window.getSelection().toString().trim();
			evt.stopPropagation();
		});
};

const addAirTableRecord = (tableName) => {
	const fieldName = airTable.getFieldName(tableName);
	airTable.addRecord(tableName, {[fieldName]: getCasedSelectedText()})
		.then(rec => {
			setAirTableTableAsSelected(tableName);
			showBookPaperForAirTable();
		})
		.catch(err => alert(err.message));
};

const updateAirTableRecord = (tableName) => {
	if (!airTableRecordSelected) {
		alert('Select one record in AirTable data');
		return;
	}
	const fields = {'alternate name': getCasedSelectedText()};
	airTable.updateRecord(airTableRecordSelected, tableName, fields)
		.then(rec => {
			setAirTableTableAsSelected(tableName);
			showBookPaperForAirTable();
		})
		.catch(err => alert(err.message));
};

const getCasedSelectedText = () => {
	if (!selectedText) return null;
	const invariants = ['the', 'of', 'and'];
	if ($(controls.btnAirTableCaseTitle).hasClass('active')) {
		return selectedText.split(' ').map((w, i) => {
			return (i != 0 && invariants.includes(w.toLowerCase()) ? w :
				w.charAt(0).toUpperCase() + w.slice(1));
		}).join(' ');
	} else if ($(controls.btnAirTableCaseUpper).hasClass('active')) {
		return selectedText.toUpperCase();
	} else if ($(controls.btnAirTableCaseLower).hasClass('active')) {
		return selectedText.toLowerCase();
	}
	return selectedText;
};

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

const handle_txtTranslateProjectID = (evt) => {
	const projectID = controls.txtTranslateProjectID.value;
	settings.translateProjectID = projectID;
	store.set('translateProjectID', settings.translateProjectID);
};

const handle_txtTranslateAPIKey = (evt) => {
	const apiKey = controls.txtTranslateAPIKey.value;
	settings.translateAPIKey = apiKey;
	store.set('translateAPIKey', settings.translateAPIKey);
};

const handle_txtAirTableAPIKey = (evt) => {
	const apiKey = controls.txtAirTableAPIKey.value;
	settings.airTableAPIKey = apiKey;
	store.set('airTableAPIKey', settings.airTableAPIKey);
};

const handle_txtAirTableBaseID = (evt) => {
	const baseID = controls.txtAirTableBaseID.value;
	settings.airTableBaseID = baseID;
	store.set('airTableBaseID', settings.airTableBaseID);
};

const handle_toggleTranslateProjectID = (evt) => {
	$(controls.toggleAirTableAPIKey).find('i')
		.toggleClass('bi-eye-fill bi-eye-slash-fill');
	const type = $(controls.txtTranslateProjectID).attr('type');
	$(controls.txtTranslateProjectID)
		.attr('type', type === 'text' ? 'password' : 'text');
};

const handle_toggleTranslateAPIKey = (evt) => {
	$(controls.toggleAirTableAPIKey).find('i')
		.toggleClass('bi-eye-fill bi-eye-slash-fill');
	const type = $(controls.txtTranslateAPIKey).attr('type');
	$(controls.txtTranslateAPIKey)
		.attr('type', type === 'text' ? 'password' : 'text');
};

const handle_toggleAirTableAPIKey = (evt) => {
	$(controls.toggleAirTableAPIKey).find('i')
		.toggleClass('bi-eye-fill bi-eye-slash-fill');
	const type = $(controls.txtAirTableAPIKey).attr('type');
	$(controls.txtAirTableAPIKey)
		.attr('type', type === 'text' ? 'password' : 'text');
};

const handle_toggleAirTableBaseID = (evt) => {
	$(controls.toggleAirTableBaseID).find('i')
		.toggleClass('bi-eye-fill bi-eye-slash-fill');
	const type = $(controls.txtAirTableBaseID).attr('type');
	$(controls.txtAirTableBaseID)
		.attr('type', type === 'text' ? 'password' : 'text');
};

document.addEventListener('DOMContentLoaded', onLoad);