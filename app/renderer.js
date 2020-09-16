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
	'drpProcess', 'exeButton', 'logArea', 
	'progress', 'chkMerge', 'drpTopics'];
const controls = {};

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
	controls.drpTopics.addEventListener('change', handle_drpTopicsChange);
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

const handle_exeButtonClick = () => {
	showProgress(true);
	book.onProgressFn = onProgress;
	const process = controls.drpProcess.value;
	const okMsgs = ['Conversión realizada con éxito'];
	const latexDir = controls.dirLTextbox.value;
	const jsonDir = controls.dirJTextbox.value;
	const txtDir = controls.dirTTextbox.value;
	const wikiDir = controls.dirWTextbox.value;

	if (process ==='ttt' && checkControls(['dirJTextbox', 'dirTTextbox'])) {
		// Leemos LU en formato JSON, luego leemos Referencias Biblia en formato TXT,
		// y escribimos los TXT traducidos
		book.readFromJSON(jsonDir)
			.then(() => bibleref.readFromTXT(txtDir))
			.then(() => bibleref.translate(txtDir, book))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'clj' && checkControls(['dirLTextbox', 'dirJTextbox'])) {
		// Leemos LU en formato LaTeX y escribimos JSON
		book.readFromLaTeX(latexDir)
			.then(() => book.writeToJSON(jsonDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'clw' && checkControls(['dirLTextbox', 'dirWTextbox'])) {
		// Leemos LU en formato LaTeX y escribimos Wiki
		book.readFromLaTeX(latexDir)
			.then(() => book.writeToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'clx' && checkControls(['dirLTextbox', 'dirWTextbox'])) {
		// Leemos LU en formato LaTeX y escribimos Wiki XML
		book.readFromLaTeX(latexDir)
			.then(() => book.writeToWikiXML(wikiDir, controls.chkMerge.checked))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'cjl' && checkControls(['dirJTextbox', 'dirLTextbox'])) {
		// Leemos LU en formato JSON y escribimos LaTeX
		book.readFromJSON(jsonDir)
			.then(() => book.writeToLaTeX(latexDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'cjw' && checkControls(['dirJTextbox', 'dirWTextbox'])) {
		// Leemos LU en formato JSON y escribimos Wiki
		book.readFromJSON(jsonDir)
			.then(() => book.writeToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'cjx' && checkControls(['dirJTextbox', 'dirWTextbox'])) {
		// Leemos LU en formato JSON y escribimos Wiki XML
		book.readFromJSON(jsonDir)
			.then(() => book.writeToWikiXML(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'cblw' && checkControls(['dirTTextbox', 'dirLTextbox', 'dirWTextbox'])) {
		// Leemos Referencias Biblia en formato TXT, luego leemos Biblia en formato LaTeX 
		// y escribimos Wiki
		bibleref.readFromTXT(txtDir)
			.then(() => bible.readFromLaTeX(latexDir))
			.then(() => bible.writeToWiki(wikiDir, bibleref))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'cblx' && checkControls(['dirLTextbox', 'dirWTextbox'])) {
		// Leemos Biblia en formato LaTeX y escribimos Wiki XML
		bible.readFromLaTeX(latexDir)
			.then(() => bible.writeToWikiXML(wikiDir, controls.chkMerge.checked))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'ctiw' && checkControls(['dirTTextbox', 'dirWTextbox'])) {
		// Leemos TopicIndex en formato TXT y escribimos Wiki
		topicindex.readFromTXT(txtDir)
			.then(() => topicindex.writeToWiki(wikiDir))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'rti' && checkControls(['dirTTextbox', 'dirJTextbox'])) {
		// Leemos TopicIndex en formato TXT y luego leemos LU en formato JSON
		topicindex.readFromTXT(txtDir)
			.then(() => book.readFromJSON(jsonDir))
			.then(() => {
				// Rellenamos desplegable
				controls.drpTopics.innerHTML = topicindex.topics.map(t =>
					`<option value="${t.name}">${t.name}</option>`).join('');
				onSuccess(okMsgs)
			}).catch(onFail);
	} else if (process === 'nti' && checkControls(['dirTTextbox'])) {
		// Leemos TopicIndex en formato TXT y volvemos a escribir igual
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

const showTopic = (name) => {
	let html = `<h2 class="mb-1">${name}</h2>`;
	const topic = topicindex.topics.find(t => t.name === name);
	if (topic) {
		html += topic.lines.map(line => {
			return `<p class="mb-1"><strong>${line.text}</strong></p>` +
				line.refs.map(ref => {
					const data = ref.split(/[:.]/g);
					if (data.length < 2) return null;
					const doc = parseInt(data[0]), sec = parseInt(data[1]);
					const ppar = (data.length > 2 ? data[2].match(/^[0-9]+/g) : null);
					let par = (ppar ? parseInt(ppar[0]) : null);
					par = (par == null || isNaN(par) ? 1 : par);
					if (isNaN(doc) || isNaN(sec)) return null;
					const paper = book.papers.find(p => p.paper_index === doc);
					if (!paper) return null;
					const section = paper.sections.find(s => s.section_index === sec);
					if (!section) return null;
					const parr = section.pars.find(p =>
						p.par_ref === `${doc}:${sec}.${par}`);
					if (!parr) return null;
					
					return `<p class="mb-2"><em>${parr.par_content}</em> [LU ${ref}]</p>`;
				}).filter(r => r != null).join('');
		}).join('');
	}
	controls.logArea.innerHTML = html;
};

const onProgress = (baseName) => {
	showInfos(['Procesando documento ' + baseName]);
};

document.addEventListener('DOMContentLoaded', onLoad);