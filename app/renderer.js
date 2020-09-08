const {dialog} = require('electron').remote;
const Book = require('./book');
const Bible = require('./bible');

const book = new Book();
const bible = new Bible();
const controlIDs = ['dirLButton', 'dirLTextbox', 'dirJButton', 'dirJTextbox', 
	'dirWButton', 'dirWTextbox', 'drpProcess', 'exeButton', 'logArea', 
	'progress', 'chkMerge'];
const controls = {};

const onLoad = () => {
	controlIDs.forEach(id => controls[id] = document.querySelector('#' + id));
	controls.dirLButton.addEventListener('click', handle_dirLButtonClick);
	controls.dirJButton.addEventListener('click', handle_dirJButtonClick);
	controls.dirWButton.addEventListener('click', handle_dirWButtonClick);
	controls.exeButton.addEventListener('click', handle_exeButtonClick);
};

const handle_dirLButtonClick = () => {
	dialog.showOpenDialog({
		title: 'Selecciona una carpeta',
		properties: ['openDirectory']
	}).then(result => {
		if (!result.canceled && result.filePaths) {
			const dirPath = result.filePaths[0];
			controls.dirLTextbox.value = dirPath;
		}
	});
};

const handle_dirJButtonClick = () => {
	dialog.showOpenDialog({
		title: 'Selecciona una carpeta',
		properties: ['openDirectory']
	}).then(result => {
		if (!result.canceled && result.filePaths) {
			const dirPath = result.filePaths[0];
			controls.dirJTextbox.value = dirPath;
		}
	});
};

const handle_dirWButtonClick = () => {
	dialog.showOpenDialog({
		title: 'Selecciona una carpeta',
		properties: ['openDirectory']
	}).then(result => {
		if (!result.canceled && result.filePaths) {
			const dirPath = result.filePaths[0];
			controls.dirWTextbox.value = dirPath;
		}
	});
};

const handle_exeButtonClick = () => {
	showProgress(true);
	book.onProgressFn = onProgress;
	const process = controls.drpProcess.value;
	const okMsgs = ['Conversión realizada con éxito'];
	if (process === 'clj' && checkControls(['dirLTextbox', 'dirJTextbox'])) {
		// Leemos LU en formato LaTeX y escribimos JSON
		book.readFromLaTeX(controls.dirLTextbox.value)
			.then(() => book.writeToJSON(controls.dirJTextbox.value))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'clw' && checkControls(['dirLTextbox', 'dirWTextbox'])) {
		// Leemos LU en formato LaTeX y escribimos Wiki
		book.readFromLaTeX(controls.dirLTextbox.value)
			.then(() => book.writeToWiki(controls.dirWTextbox.value))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'clx' && checkControls(['dirLTextbox', 'dirWTextbox'])) {
		// Leemos LU en formato LaTeX y escribimos Wiki XML
		book.readFromLaTeX(controls.dirLTextbox.value)
			.then(() => book.writeToWikiXML(controls.dirWTextbox.value,
				controls.chkMerge.checked))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'cjl' && checkControls(['dirJTextbox', 'dirLTextbox'])) {
		// Leemos LU en formato JSON y escribimos LaTeX
		book.readFromJSON(controls.dirJTextbox.value)
			.then(() => book.writeToLaTeX(controls.dirLTextbox.value))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'cjw' && checkControls(['dirJTextbox', 'dirWTextbox'])) {
		// Leemos LU en formato JSON y escribimos Wiki
		book.readFromJSON(controls.dirJTextbox.value)
			.then(() => book.writeToWiki(controls.dirWTextbox.value))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'cjx' && checkControls(['dirJTextbox', 'dirWTextbox'])) {
		// Leemos LU en formato JSON y escribimos Wiki XML
		book.readFromJSON(controls.dirJTextbox.value)
			.then(() => book.writeToWikiXML(controls.dirWTextbox.value))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'cblw' && checkControls(['dirLTextbox', 'dirWTextbox'])) {
		// Leemos Biblia en formato LaTeX y escribimos Wiki
		bible.readFromLaTeX(controls.dirLTextbox.value)
			.then(() => bible.writeToWiki(controls.dirWTextbox.value))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	} else if (process === 'cblx' && checkControls(['dirLTextbox', 'dirWTextbox'])) {
		// Leemos Biblia en formato LaTeX y escribimos Wiki XML
		bible.readFromLaTeX(controls.dirLTextbox.value)
			.then(() => bible.writeToWikiXML(controls.dirWTextbox.value,
				controls.chkMerge.checked))
			.then(() => onSuccess(okMsgs))
			.catch(onFail);
	}
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

const onProgress = (baseName) => {
	showInfos(['Procesando documento ' + baseName]);
};

document.addEventListener('DOMContentLoaded', onLoad);