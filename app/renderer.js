const {dialog} = require('electron').remote;

function onLoad() {
	const button = document.querySelector('button.btn');
	const textbox = document.querySelector('input');
	button.addEventListener('click', () => {
		dialog.showOpenDialog({
			title: 'Selecciona una carpeta',
			properties: ['openDirectory']
		}).then(result => {
			if (!result.canceled && result.filePaths) {
				textbox.value = result.filePaths[0];
			}
		});
	});
};
document.addEventListener('DOMContentLoaded', onLoad);