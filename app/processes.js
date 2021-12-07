/**
 * @typedef {ProcessDef}
 * @type {Object}
 * @property {boolean} active If the process should be shown in list of processes.
 * @property {Object} desc Object with descriptions in each supported language.
 * @property {string[]} controls Array of control names for the process.
 * @property {Array.<string[]>} paths Array of folders to join to return the path
 * to use in a text input control. Length must match `controls`.
 * @property {?Array.<(null|string)>} emptyLan Array of languages that can be made
 * empty in a path for a control. Length must match `controls`.
 * @property {?Object} extraPath Object with an extra folder name for some languages.
 */

/**
 * Object with process definitions.
 * @type {Object.<ProcessDef>}
 */
const Processes = {
	"BIBLEREF_TXT_BOOK_JSON_TO_TXT": {
		active: true,
		desc: {
			en: "Translate Bible Refs (TXT) + UB (JSON) to TXT",
			es: "Traducir Refs Biblia (TXT) + LU (JSON) a TXT"
		},
		controls: ['dirJTextbox', 'dirTTextbox'],
		paths: [['input','json', 'book-{0}'], ['input','txt', 'bible-refs-{0}']]
	},
	"BOOK_JSON_TO_BIBLEREF_JSON": {
		active: true,
		desc: {
			en: "Save Bible Refs in Urantia Book (JSON) in JSON",
			es: "Guardar Refs Biblia en Libro de Urantia (JSON) en JSON"
		},
		controls: ['dirJTextbox'],
		paths: [['input', 'json', 'book-{0}-footnotes']]
	},
	"BOOK_JSON_BIBLEREF_JSON_TO_JSON": {
		active: true,
		desc: {
			en: "Update Bible Refs in Urantia Book (JSON)",
			es: "Actualizar Refs Biblia en Libro de Urantia (JSON)"
		},
		controls: ['dirJTextbox'],
		paths: [['input', 'json', 'book-{0}']]
	},
	"BOOK_HTML_TO_JSON": {
		active: true,
		desc: {
			en: "Convert Urantia Book (HTML) to JSON",
			es: "Convertir Libro de Urantia (HTML) a JSON"
		},
		controls: ['dirHTextbox', 'dirJTextbox'],
		paths: [['input', 'html', 'book-{0}'], ['input', 'json', 'book-{0}']]
	},
	"BOOK_TEX_TO_JSON": {
		active: false,
		desc: {
			en: "Convert Urantia Book (LaTeX) to JSON",
			es: "Convertir Libro de Urantia (LaTeX) a JSON"
		},
		controls: ['dirLTextbox', 'dirJTextbox'],
		paths: [['input', 'tex', 'book-{0}'], ['input', 'json', 'book-{0}']]
	},
	"BOOK_TEX_TOPICS_TXT_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "Convert Urantia Book (LaTeX) + Topic Index (TXT) to MediaWiki",
			es: "Convertir Libro de Urantia (LaTeX) + Topic Index (TXT) a MediaWiki"
		},
		controls: ['dirLTextbox', 'dirTTextbox', 'dirWTextbox', 'drpCategories'],
		paths: [['input', 'tex', 'book-{0}-footnotes'], 
			['input', 'txt', 'topic-index-{0}'], 
			['output', 'mediawiki', 'book-{0}']]
	},
	"BOOK_TEX_TO_WIKIXML": {
		active: false,
		desc: {
			en: "Convert Urantia Book (LaTeX) to Wiki XML",
			es: "Convertir Libro de Urantia (LaTeX) a Wiki XML"
		},
		controls: ['dirLTextbox', 'dirWTextbox', 'chkMerge'],
		paths: [['input', 'tex', 'book-{0}'], ['output', 'xml', 'book-{0}']]
	},
	"BOOK_JSON_TO_TEX": {
		active: false,
		desc: {
			en: "Convert Urantia Book (JSON) to LaTeX",
			es: "Convertir Libro de Urantia (JSON) a LaTeX"
		},
		controls: ['dirJTextbox', 'dirLTextbox'],
		paths: [['input', 'json', 'book-{0}-footnotes'], ['input', 'tex', 'book-{0}']]
	},
	"BOOK_JSON_TOPICS_TXT_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "Convert Urantia Book (JSON) + Topic Index (TXT) to MediaWiki",
			es: "Convertir Libro de Urantia (JSON) + Topic Index (TXT) a MediaWiki"
		},
		controls: ['dirJTextbox', 'dirTTextbox', 'dirWTextbox', 'drpCategories'],
		paths: [['input', 'json', 'book-{0}-footnotes'], 
			['input', 'txt', 'topic-index-{0}'], 
			['output', 'mediawiki', 'book-{0}']]
	},
	"BOOK_JSON_TOPIC_TXT_TO_WIKIJS": {
		active: true,
		desc: {
			en: "Convert Urantia Book (JSON) + Topic Index (TXT) to Wiki.js",
			es: "Convertir Libro de Urantia (JSON) + Topic Index (TXT) a Wiki.js"
		},
		controls: ['dirTTextbox', 'dirJTextbox', 'dirHTextbox'],
		paths: [['input', 'txt', 'topic-index-{0}'],
			['input', 'json', 'book-{0}-footnotes'], 
			['output', 'wikijs', '{0}', 'The_Urantia_Book']],
		emptyLan: [null, null, 'en']
	},
	"BOOK_JSON_TO_WIKIXML": {
		active: false,
		desc: {
			en: "Convert Urantia Book (JSON) to Wiki XML",
			es: "Convertir Libro de Urantia (JSON) a Wiki XML"
		},
		controls: ['dirJTextbox', 'dirWTextbox'],
		paths: [['input', 'json', 'book-{0}-footnotes'], 
			['output', 'xml', 'book-{0}']]
	},
	"BOOK_INDEX_JSON_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "Convert Urantia Book Index (JSON) to MediaWiki",
			es: "Convertir Indice de Libro de Urantia (JSON) a MediaWiki"
		},
		controls: ['dirJTextbox', 'dirWTextbox'],
		paths: [['input', 'json', 'book-{0}-footnotes'], 
			['output', 'mediawiki', 'book-{0}']]
	},
	"BOOK_INDEX_JSON_TO_WIKIJS": {
		active: true,
		desc: {
			en: "Convert Urantia Book Index (JSON) to Wiki.js",
			es: "Convertir Indice de Libro de Urantia (JSON) a Wiki.js"
		},
		controls: ['dirJTextbox', 'dirHTextbox'],
		paths: [['input', 'json', 'book-{0}-footnotes'], 
			['output', 'wikijs', '{0}', 'The_Urantia_Book']],
		emptyLan: [null, 'en']
	},
	"BIBLE_TEX_BIBLEREF_TXT_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "Convert Bible (LaTeX) + Refs (TXT) to MediaWiki",
			es: "Convertir Biblia (LaTeX) + Refs (TXT) a MediaWiki"
		},
		controls: ['dirTTextbox', 'dirLTextbox', 'dirWTextbox'],
		paths: [['input', 'txt', 'bible-refs-{0}'], 
			['input', 'tex', 'bible-{0}', '{extraPath}'], 
			['output', 'mediawiki', 'bible-{0}', '{extraPath}']],
		extraPath: {
			en: 'ASV',
			es: 'RV1960'
		}
	},
	"BIBLE_TEX_BIBLEREF_TXT_TO_WIKIJS": {
		active: true,
		desc: {
			en: "Convert Bible (LaTeX) + Refs (TXT) to Wiki.js",
			es: "Convertir Biblia (LaTeX) + Refs (TXT) a Wiki.js"
		},
		controls: ['dirTTextbox', 'dirLTextbox', 'dirHTextbox'],
		paths: [['input', 'txt', 'bible-refs-{0}'], 
			['input', 'tex', 'bible-{0}', '{extraPath}'], 
			['output', 'wikijs', '{0}', 'Bible']],
		emptyLan: [null, null, 'en'],
		extraPath: {
			en: 'ASV',
			es: 'RV1960'
		}
	},
	"BIBLE_TEX_TO_BIBLEINDEX_MEDIAWIKI": {
		active: false,
		desc: {
			en: "Convert Bible (LaTeX) to index MediaWiki",
			es: "Convertir Biblia (LaTeX) a índice MediaWiki"
		},
		controls: ['dirLTextbox', 'dirWTextbox'],
		paths: [['input', 'tex', 'bible-{0}', '{extraPath}'], 
			['output', 'mediawiki', 'bible-{0}', '{extraPath}']],
		extraPath: {
			en: 'ASV',
			es: 'RV1960'
		}
	},
	"BIBLE_TEX_TO_WIKIXML": {
		active: false,
		desc: {
			en: "Convert Bible (LaTeX) to Wiki XML",
			es: "Convertir Biblia (LaTeX) a Wiki XML"
		},
		controls: ['dirLTextbox', 'dirWTextbox', 'chkMerge'],
		paths: [['input', 'tex', 'bible-{0}', '{extraPath}'], 
			['output', 'xml', 'bible-{0}', '{extraPath}']],
		extraPath: {
			en: 'ASV',
			es: 'RV1960'
		}
	},
	"TOPICS_TXT_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "Convert Topic Index (TXT) to MediaWiki",
			es: "Convertir Topic Index (TXT) a MediaWiki"
		},
		controls: ['dirTTextbox', 'dirWTextbox', 'drpCategories'],
		paths: [['input', 'txt', 'topic-index-{0}'], 
			['output', 'mediawiki', 'topic-index-{0}']]
	},
	"TOPICS_TXT_TO_WIKIJS": {
		active: true,
		desc: {
			en: "Convert Topic Index (TXT) to Wiki.js",
			es: "Convertir Topic Index (TXT) a Wiki.js"
		},
		controls: ['dirTTextbox', 'dirHTextbox', 'drpCategories'],
		paths: [['input', 'txt', 'topic-index-{0}'], 
			['output', 'wikijs', '{0}', 'topic']],
		emptyLan: [null, 'en']
	},
	"TOPICS_INDEX_TXT_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "Convert index of Topic Index (TXT) to MediaWiki",
			es: "Convertir Indice de Topic Index (TXT) a MediaWiki"
		},
		controls: ['dirTTextbox', 'dirWTextbox', 'drpCategories'],
		paths: [['input', 'txt', 'topic-index-{0}'], 
			['output', 'mediawiki', 'topic-index-{0}']]
	},
	"TOPICS_INDEX_TXT_TO_WIKIJS": {
		active: true,
		desc: {
			en: "Convert index of Topic Index (TXT) to Wiki.js",
			es: "Convertir Indice de Topic Index (TXT) a Wiki.js"
		},
		controls: ['dirTTextbox', 'dirHTextbox', 'drpCategories'],
		paths: [['input', 'txt', 'topic-index-{0}'], 
			['input', 'wikijs', '{0}', 'topic']],
		emptyLan: [null, 'en']
	},
	"REVIEW_TOPIC_TXT_LU_JSON": {
		active: true,
		desc: {
			en: "Review Topic Index (TXT) + JSON (UB)",
			es: "Revisar Topic Index (TXT) + JSON (LU)"
		},
		controls: ['dirTTextbox', 'dirJTextbox', 'drpCategories', 'drpTopics'],
		paths: [['input', 'txt', 'topic-index-{0}'], 
			['input', 'json', 'book-{0}-footnotes']]
	},
	"SUM_TOPIC_TXT": {
		active: true,
		desc: {
			en: "Summary of Topic Index (TXT)",
			es: "Resumen actual del Topic Index (TXT)"
		},
		controls: ['dirTTextbox'],
		paths: [['input', 'txt', 'topic-index-{0}']]
	},
	"NORM_TOPIC_TXT": {
		active: true,
		desc: {
			en: "Normalize entries Topic Index (TXT) to TXT",
			es: "Normalizar entradas Topic Index (TXT) a TXT"
		},
		controls: ['dirTTextbox'],
		paths: [['input', 'txt', 'topic-index-{0}']]
	},
	"ARTICLE_TXT_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "Convert Articles (TXT) to MediaWiki",
			es: "Convertir Artículos (TXT) a MediaWiki"
		},
		controls: ['dirTTextbox', 'dirWTextbox'],
		paths: [['input', 'txt', 'articles-{0}'], 
			['input', 'mediawiki', 'articles-{0}']]
	},
	"TEST": {
		active: true,
		desc: {
			en: "Execute a testing process",
			es: "Ejecutar un proceso de prueba"
		},
		controls: ['dirTTextbox', 'dirJTextbox', 'dirHTextbox'],
		paths: [['input', 'txt', 'topic-index-{0}'],
			['input', 'json', 'book-{0}-footnotes'], 
			['input', 'html', 'test']]
	}
};

module.exports = Processes;