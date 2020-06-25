const {dialog} = require('electron').remote;
const Book = require('./book');

const book = new Book();
const controlIDs = ['dirLButton', 'dirLTextbox', 'dirJButton', 'dirJTextbox', 
	'cljButton', 'cjlButton', 'cjwButton', 'logArea'];
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
			const dirPath = result.filePaths[0];
			controls.dirLTextbox.value = dirPath;
			controls.cljButton.disabled = true;
			book.readFromLaTeX(dirPath)
				.then(() => controls.cljButton.disabled = false)
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
	const dirPath = controls.dirJTextbox.value;
	book.writeToJSON(dirPath)
		.then(() => showInfos['Conversión con éxito'])
		.catch(showErrors);
};

const handle_cjlButtonClick = () => {

};

const handle_cjwButtonClick = () => {

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

document.addEventListener('DOMContentLoaded', onLoad);