function onLoad() {
	const button = document.querySelector('button.alert');
	button.addEventListener('click', () => {
		// alert(__dirname);
		alert('Hola!');
	});
};
document.addEventListener('DOMContentLoaded', onLoad);