const fs = require('fs');
const path = require('path');

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

/**
 * Reemplaza en una cadena un tag de inicio y de fin por otro tag de inicio y fin.
 * @param {string} content Cadena a reemplazar
 * @param {string} initTag Tag de inicio.
 * @param {string} endTag Tag de fin.
 * @param {string} initTag2 Tag por el que reemplazar el tag de inicio.
 * @param {string} endTag2 Tag por el que reemplazar el tag de fin.
 * @param {string[]} errors Array de mensajes de error en el que almacenar los errores.
 * @return {string}
 */
exports.replaceTags = function(content, initTag, endTag, initTag2, endTag2, errors) {
	let result = '', ii, i = 0, index;
	while (i < content.length) {
		index = content.indexOf(initTag, i);
		if (index === -1) {
			result += content.substring(i);
			break;
		} else {
			result += content.substring(i, index);
		}
		ii = index + initTag.length;
		i = content.indexOf(endTag, ii);
		if (i === -1) {
			errors.push('No existe cadena de cierre correcto');
			return content;
		}
		result += initTag2 + content.substring(ii, i) + endTag2;
		i += endTag.length;
	}
	return result;
};

/**
 * Elimina en una cadena todo el contenido entre un tag de inicio y de fin todas
 * las veces que aparezca o sólo los tags. Los tags de inicio y fin deben ser tags 
 * HTML. Se elimina no sólo el tag sino también si el tag lleva atributos también 
 * los atributos. Además elimina dobles espacios en blanco si quedan así al quitar
 * los tags.
 * @example
 * const text = 'Este texto <span class="extra">con un tag</span> dentro';
 * const text2 = removeHTMLTags(text, '<span>', '</span>', false, []);
 * // returns 'Este texto con un tag dentro'
 * const text3 = removeHTMLTags(text, '<span>', '</span>', true, []);
 * // return 'Este texto dentro'
 * @param {string} content Cadena a reemplazar
 * @param {string} initTag Tag de inicio.
 * @param {string} endTag Tag de fin.
 * @param {boolean} removeContent Si eliminar el texto dentro de las etiquetas o no.
 * @param {string[]} errors Array de mensajes de error en el que almacenar los errores.
 * @return {string}
 */
exports.removeHTMLTags = function(content, initTag, endTag, removeContent, errors) {
	let result = '', ii, i = 0, index;
	const iTag = initTag.substring(0, initTag.length - 1);
	while (i < content.length) {
		index = content.indexOf(iTag, i);
		if (index === -1) {
			result += content.substring(i);
			break;
		}
		result += content.substring(i, index);
		ii = index + iTag.length;
		index = content.indexOf('>', ii);
		i = content.indexOf(endTag, ii);
		if (i === -1 || index === -1 || index >= content.length - 4 || index >= i) {
			errors.push('No existe cadena de cierre correcta');
			break;
		}
		if (!removeContent) {
			result += content.substring(index + 1, i);
		}
		i += endTag.length;
	}
	return result;
};

/**
 * Devuelve una promesa que lee una carpeta, busca ficheros de un formato y
 * ejecuta una funcion con cada uno. Si algun fichero llama a reject, entonces
 * toda la promesa llama a reject.
 * @param {string} dirPath Ruta de la carpeta.
 * @param {string} format Formato como '.txt' o '.tex'. Se pueden pasar varios
 * de este modo: '.html;.htm'
 * @param {Function} clearFunction Function para limpiar datos antes de leer. Debe
 * ser una function sin params que no devuelve nada.
 * @param {Function} readFunction Function para ejecutar con cada fichero. Debe
 * ser una function con un parámetro filePath y que devuelva una promesa.
 * @param {Object} thisObj Object que pasar como 'this'.
 * @return {Promise}
 */
exports.readFrom = function(dirPath, format, clearFunction, readFunction, thisObj) {
	return new Promise((resolve, reject) => {
		fs.readdir(dirPath, (err, files) => {
			if (err) {
				reject([err]);
				return;
			}
			const formats = format.split(';');
			const ffiles = files.filter(file => {
				return (formats.indexOf(path.extname(file)) != -1);
			});
			if (ffiles.length === 0) {
				reject([new Error('No se han encontrado archivos ' + format)]);
				return;
			}
			
			clearFunction.call(thisObj);

			const promises = ffiles.map(file => {
				const filePath = path.join(dirPath, file);
				return exports.reflectPromise(readFunction.call(thisObj, filePath));
			});

			Promise.all(promises)
				.then((results) => {
					const errors = [];
					results.forEach(r => exports.extendArray(errors, r.error));
					if (errors.length === 0) {
						resolve(null);
					} else {
						reject(errors);
					}
				});

		});
	});
};

/**
 * Testea un texto con un array de vocablos.
 * Esta funcion es necesaria porque RegExp tiene problemas para localizar vocablos
 * que sean palabras completas y empiecen o terminen en acento.
 * @param {Array.<string>} arItems Array de vocablos. Con que cualquiera de los 
 * vocablos aparezca una vez el test es válido.
 * @param {string} text Texto a testear.
 * @return {boolean}
 */
exports.testWords = function(arItems, text) {
	let ini = 0, fin = 0, j, testIni, testFin;
	const regex = /[a-z0-9áéíóúü\-]/i;
	const len = text.length;
	for (j = 0; j < arItems.length; j++) {
		ini = 0;
		while (ini != -1) {
			ini = text.indexOf(arItems[j], ini);
			fin = ini + arItems[j].length - 1;
			testIni = !regex.test(text.substring(ini - 1, ini));
			testFin = !regex.test(text.substring(fin + 1, fin + 2));
			if (ini != -1) {
				if ((ini === 0 || (ini > 0 && testIni)) && 
					(fin === len - 1 || (fin < len - 1 && testFin))) {
					return true;
				}
				ini = fin + 1;
				if (ini === len - 1) {
					break;
				}
			}
		}
	}
	return false;
};

/**
 * Reemplaza un texto con un array de vocablos por otro array de vocablos pero
 * sólo la primera ocurrencia de cada vocablo.
 * Esta funcion es necesaria porque RegExp tiene problemas para localizar vocablos
 * que sean palabras completas y empiecen o terminen en acento.
 * @param {Array.<string>} arItems Array de vocablos a localizar.
 * @param {Array.<string>} arReplaces Array de vocablos con los que reemplazar.
 * @param {string} text Texto a modificar.
 * @return {string} Texto modificado.
 */
exports.replaceWords = function(arItems, arReplaces, text) {
	let result = text, ini = 0, fin = 0, j, testIni, testFin, part1, part2;
	const regex = /[a-z0-9áéíóúü\-]/i;
	const len = text.length;
	for (j = 0; j < arItems.length; j++) {
		ini = 0;
		while (ini != -1) {
			ini = result.indexOf(arItems[j], ini);
			fin = ini + arItems[j].length - 1;
			testIni = !regex.test(text.substring(ini - 1, ini));
			testFin = !regex.test(text.substring(fin + 1, fin + 2));
			if (ini != -1) {
				if ((ini === 0 || (ini > 0 && testIni)) && 
					(fin === len - 1 || (fin < len - 1 && testFin))) {
					part1 = result.substring(0, ini);
					part2 = result.substring(ini);
					result = part1 + part2.replace(arItems[j], `#${j}#`);
					break;
				}
				ini = fin + 1;
				if (ini === len - 1) {
					break;
				}
			}
		}
	}
	for (j = 0; j < arReplaces.length; j++) {
		result = result.replace(new RegExp(`#${j}#`, 'g'), arReplaces[j]);
	}
	return result;
};