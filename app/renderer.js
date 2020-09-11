const {dialog} = require('electron').remote;
const Book = require('./book');
const Bible = require('./bible');
const BibleRef = require('./bibleref');

const book = new Book();
const bible = new Bible();
const bibleref = new BibleRef();
const controlIDs = [
	'dirTButton', 'dirTTextbox',
	'dirLButton', 'dirLTextbox', 
	'dirJButton', 'dirJTextbox', 
	'dirWButton', 'dirWTextbox', 
	'drpProcess', 'exeButton', 'logArea', 
	'progress', 'chkMerge'];
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
	if (process ==='ttt' && checkControls(['dirJTextbox', 'dirTTextbox'])) {
		// Leemos LU en formato JSON, luego leemos Referencias Biblia en formato TXT,
		// y escribimos los TXT traducidos
		book.readFromJSON(controls.dirJTextbox.value)
			.then(() => {
				bibleref.readFromTXT(controls.dirTTextbox.value)
					.then(() => {
						bibleref.translate(controls.dirTTextbox.value, book)
							.then(() => onSuccess(okMsgs))
							.catch(onFail);
					}).catch(onFail);
			}).catch(onFail);
	} else if (process === 'clj' && checkControls(['dirLTextbox', 'dirJTextbox'])) {
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
	} else if (process === 'cblw' && checkControls(['dirTTextbox', 'dirLTextbox', 'dirWTextbox'])) {
		// Leemos Referencias Biblia en formato TXT,
		// luego leemos Biblia en formato LaTeX y escribimos Wiki
		bibleref.readFromTXT(controls.dirTTextbox.value)
			.then(() => {
				bible.readFromLaTeX(controls.dirLTextbox.value)
					.then(() => {
						bible.writeToWiki(controls.dirWTextbox.value, bibleref)
						.then(() => onSuccess(okMsgs))
						.catch(onFail);
					}).catch(onFail);
			}).catch(onFail);
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