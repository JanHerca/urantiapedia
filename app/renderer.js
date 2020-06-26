const {dialog} = require('electron').remote;
const Book = require('./book');

const book = new Book();
const controlIDs = ['dirLButton', 'dirLTextbox', 'dirJButton', 'dirJTextbox', 
	'cljButton', 'cjlButton', 'cjwButton', 'logArea', 'progress'];
const controls = {};

const onLoad = () => {
	controlIDs.forEach(id => controls[id] = document.querySelector('#' + id));
	controls.dirLButton.addEventListener('click', handle_dirLButtonClick);
	controls.dirJButton.addEventListener('click', handle_dirJButtonClick);
	controls.cljButton.addEventListener('click', handle_cljButtonClick);
	controls.cjlButton.addEventListener('click', handle_cjlButtonClick);
	controls.cjwButton.addEventListener('click', handle_cjwButtonClick);
};

const handle_dirLButtonClick = () => {
	dialog.showOpenDialog({
		title: 'Selecciona una carpeta',
		properties: ['openDirectory']
	}).then(result => {
		if (!result.canceled && result.filePaths) {
			showProgress(true);
			const dirPath = result.filePaths[0];
			controls.dirLTextbox.value = dirPath;
			controls.cljButton.disabled = true;
			book.onProgressFn = onProgress;
			book.readFromLaTeX(dirPath)
				.then(finishOpenLaTeX)
				.catch(showErrors);
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
			//TODO: read
			// controls.cjlButton.disabled = false;
		}
	});
};

const handle_cljButtonClick = () => {
	showProgress(true);
	const dirPath = controls.dirJTextbox.value;
	book.writeToJSON(dirPath)
		.then(finishConversion)
		.catch(showErrors);
};

const handle_cjlButtonClick = () => {

};

const handle_cjwButtonClick = () => {

};

const finishOpenLaTeX = () => {
	showInfos(['Ficheros LaTeX leídos correctamente']);
	controls.cljButton.disabled = false;
	showProgress(false);
}

const finishConversion = () => {
	showInfos(['Conversión con éxito']);
	showProgress(false);
};

const showProgress = (show) => {
	controls.progress.classList.toggle('d-none', !show);
};

const showErrors = (errors) => {
	controls.logArea.innerHTML = errors.map(err=> {
		return `<p class="text-danger mb-1">${err.message}</p>`;
	}).join('');
	showProgress(false);
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