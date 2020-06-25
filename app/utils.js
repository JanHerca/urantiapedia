/**
 * Extrae de un texto una porción delimitada por dos textos. Se extrae la primera 
 * aparición, las demás se ignoran.
 * @param {string} content Texto del que extraer.
 * @param {string} start Texto delante.
 * @param {string} end Texto detrás.
 * @return {?string}
 */
exports.extractStr = (content, start, end) => {
	const index = content.indexOf(start);
	if (index === -1) return null;
	const index2 = content.indexOf(end, index);
	if (index2 === -1) return null;
	return content.substring(index + start.length, index2);
};

/**
 * Devuelve una nueva Promise usando la de entrada que siempre está establecida
 * y que siempre devuelve un valor de respuesta con un objeto que contiene uno
 * de dos valores : `value` si la promesa se resuelve y `error` si la promesa
 * se rechaza.
 * Este nuevo tipo de promesa es útil para ejecutar una Promise.all the itera
 * por todas las promesas incluso si alguna se rechaza.
 * @param {Promise} promise Promesa a reflejar.
 * @return {Promise}
 */
exports.reflectPromise = (promise) => {
	return promise.then((value) => {
		return {value: value}
	}, (err) => {
		return {error: err}
	});
};

/**
 * Extiende un array.
 * @param {Array.<VALUE>} arr El array a modificar.
 * @param {Array.<VALUE>|VALUE|undefined} data El array o valor a añadir.
 * @template VALUE
 */
exports.extendArray = function(arr, data) {
	if (data == null) {
		return;
	}
	var i;
	var extension = Array.isArray(data) ? data : [data];
	var length = extension.length;
	for (i = 0; i < length; i++) {
		arr[arr.length] = extension[i];
	}
};