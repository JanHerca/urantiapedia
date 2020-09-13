//Reader/Writer para pasar los términos del Uversa Topic Index a *.wiki

const LaTeXSeparator = require('./enums').LaTeXSeparator;
const BibleAbb = require('./enums').BibleAbb;
const extractStr = require('./utils').extractStr;
const reflectPromise = require('./utils').reflectPromise;
const extendArray = require('./utils').extendArray;
const readFrom = require('./utils').readFrom;
const fs = require('fs');
const path = require('path');

class TopicIndex {
	topics = [];
	redirects = [];

	//***********************************************************************
	// TXT
	//***********************************************************************

	readFromTXT = (dirPath) => {
		return readFrom(dirPath, '.txt', this.clear, this.readFileFromTXT, this);
	};

	clear = () => {
		this.topics = [];
		this.redirects = [];
	};

	readFileFromTXT = (filePath) => {
		const baseName = path.basename(filePath);
		return new Promise((resolve, reject) => {
			if (this.onProgressFn) {
				this.onProgressFn(baseName);
			}
			fs.readFile(filePath, (errFile, buf) => {
				if (errFile) {
					reject([errFile]);
					return;
				}
				const lines = buf.toString().split('\n');
				const errors = [];
				let current = null;
				let isRedirect = false;
				lines.forEach((line, i) => {
					let data;
					if (line.startsWith('#')) {
						return;
					}
					if (current && line.trim() === '') {
						if (isRedirect) {
							this.redirects.push(current);
						} else {
							this.topics.push(current);
						}
						current = null;
					}
					if (!current && line.trim().length > 0) {
						data = line.split('.');
						current = {
							name: data[0]
						};
						isRedirect = (!lines[i + 1] || lines[i + 1].trim().length === 0);
						// if (/[0-9]/.test(data[0])) {
						// 	errors.push(new Error(`${baseName}, línea ${i}: ${data[0]}`));
						// }
					}
				});
				
				if (errors.length === 0) {
					resolve(null);
				} else {
					reject(errors);
				}
			});
		});
	};
};

module.exports = TopicIndex;