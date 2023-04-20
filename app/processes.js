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
			en: "BIBLE REFS.: Translate Bible Refs (TXT) + UB (JSON) to TXT",
			es: "REFS. DE LA BIBLIA: Traducir Refs Biblia (TXT) + LU (JSON) a TXT"
		},
		controls: ['dirJTextbox', 'dirTTextbox'],
		paths: [['input','json', 'book-{0}-footnotes'], ['input','txt', 'bible-refs-{0}']]
	},
	"BIBLEREF_JSON_TO_MARKDOWN": {
		active: true,
		desc: {
			en: "BIBLE REFS.: Convert Bible Refs in Urantia Book (JSON) to Markdown",
			es: "REFS. DE LA BIBLIA: Convertir Refs Biblia en Libro de Urantia (JSON) a Markdown"
		},
		controls: ['dirJTextbox', 'dirTTextbox'],
		paths: [['input', 'json', 'footnotes-book-{0}.json'],
			['input', 'markdown', '{0}', 'paramony', 'The Urantia Book.md']]
	},
	"BOOK_JSON_TO_BIBLEREF_JSON": {
		active: true,
		desc: {
			en: "BIBLE REFS.: Save Bible Refs in (JSON) in JSON",
			es: "REFS. DE LA BIBLIA: Guardar Refs Biblia en (JSON) en JSON"
		},
		controls: ['dirJTextbox'],
		paths: [['input', 'json', 'book-{0}-footnotes']]
	},
	"BOOK_JSON_BIBLEREF_JSON_TO_JSON": {
		active: false,
		desc: {
			en: "THE URANTIA BOOK: Update Bible Refs in Urantia Book (JSON)",
			es: "EL LIBRO DE URANTIA: Actualizar Refs Biblia en Libro de Urantia (JSON)"
		},
		controls: ['dirJTextbox'],
		paths: [['input', 'json', 'book-{0}']]
	},
	"BOOK_JSON_BIBLEREF_MARKDOWN_TO_JSON": {
		active: true,
		desc: {
			en: "THE URANTIA BOOK: Update Bible Refs in Urantia Book (MARKDOWN)",
			es: "EL LIBRO DE URANTIA: Actualizar Refs Biblia en Libro de Urantia (MARKDOWN)"
		},
		controls: ['dirJTextbox'],
		paths: [['input', 'json', 'book-{0}']]
	},
	"BOOK_HTML_TO_JSON": {
		active: true,
		desc: {
			en: "THE URANTIA BOOK: Convert Urantia Book (HTML) to JSON",
			es: "EL LIBRO DE URANTIA: Convertir Libro de Urantia (HTML) a JSON"
		},
		controls: ['dirHTextbox', 'dirJTextbox'],
		paths: [['input', 'html', 'book-{0}'], ['input', 'json', 'book-{0}']]
	},
	"BOOK_TEX_TO_JSON": {
		active: false,
		desc: {
			en: "THE URANTIA BOOK: Convert Urantia Book (LaTeX) to JSON",
			es: "EL LIBRO DE URANTIA: Convertir Libro de Urantia (LaTeX) a JSON"
		},
		controls: ['dirLTextbox', 'dirJTextbox'],
		paths: [['input', 'tex', 'book-{0}'], ['input', 'json', 'book-{0}']]
	},
	"BOOK_TEX_TOPICS_TXT_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "THE URANTIA BOOK: Convert Urantia Book (LaTeX) + Topic Index (TXT) to MediaWiki",
			es: "EL LIBRO DE URANTIA: Convertir Libro de Urantia (LaTeX) + Topic Index (TXT) a MediaWiki"
		},
		controls: ['dirLTextbox', 'dirTTextbox', 'dirWTextbox', 'drpCategories'],
		paths: [['input', 'tex', 'book-{0}-footnotes'], 
			['input', 'txt', 'topic-index-{0}'], 
			['output', 'mediawiki', 'book-{0}']]
	},
	"BOOK_TEX_TO_WIKIXML": {
		active: false,
		desc: {
			en: "THE URANTIA BOOK: Convert Urantia Book (LaTeX) to Wiki XML",
			es: "EL LIBRO DE URANTIA: Convertir Libro de Urantia (LaTeX) a Wiki XML"
		},
		controls: ['dirLTextbox', 'dirWTextbox', 'chkMerge'],
		paths: [['input', 'tex', 'book-{0}'], ['output', 'xml', 'book-{0}']]
	},
	"BOOK_JSON_TO_TEX": {
		active: false,
		desc: {
			en: "THE URANTIA BOOK: Convert Urantia Book (JSON) to LaTeX",
			es: "EL LIBRO DE URANTIA: Convertir Libro de Urantia (JSON) a LaTeX"
		},
		controls: ['dirJTextbox', 'dirLTextbox'],
		paths: [['input', 'json', 'book-{0}-footnotes'], ['input', 'tex', 'book-{0}']]
	},
	"BOOK_JSON_TO_TXT": {
		active: true,
		desc: {
			en: "THE URANTIA BOOK: Convert Urantia Book (JSON) to TXT",
			es: "EL LIBRO DE URANTIA: Convertir Libro de Urantia (JSON) a TXT"
		},
		controls: ['dirJTextbox', 'dirTTextbox'],
		paths: [['input', 'json', 'book-{0}-footnotes'], ['audio', 'book-{0}']]
	},
	"BOOK_JSON_TOPICS_TXT_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "THE URANTIA BOOK: Convert Urantia Book (JSON) + Topic Index (TXT) to MediaWiki",
			es: "EL LIBRO DE URANTIA: Convertir Libro de Urantia (JSON) + Topic Index (TXT) a MediaWiki"
		},
		controls: ['dirJTextbox', 'dirTTextbox', 'dirWTextbox', 'drpCategories'],
		paths: [['input', 'json', 'book-{0}-footnotes'], 
			['input', 'txt', 'topic-index-{0}'], 
			['output', 'mediawiki', 'book-{0}']]
	},
	"BOOK_JSON_TOPICS_TXT_TO_WIKIJS": {
		active: true,
		desc: {
			en: "THE URANTIA BOOK: Convert Urantia Book (JSON) + Topic Index (TXT) to Wiki.js",
			es: "EL LIBRO DE URANTIA: Convertir Libro de Urantia (JSON) + Topic Index (TXT) a Wiki.js"
		},
		controls: ['dirTTextbox', 'dirJTextbox', 'dirHTextbox'],
		paths: [['input', 'txt', 'topic-index-{0}'],
			['input', 'json', 'book-{0}-footnotes'], 
			['output', 'wikijs', '{0}', 'The_Urantia_Book']]/*,
		emptyLan: [null, null, 'en']*/
	},
	"BOOK_MULTIPLE_JSON_TOPICS_TXT_TO_WIKIJS": {
		active: true,
		desc: {
			en: "THE URANTIA BOOK: Convert Multiple Urantia Book (JSON) + Topic Index (TXT) to Wiki.js",
			es: "EL LIBRO DE URANTIA: Convertir Múltiples Libros de Urantia (JSON) + Topic Index (TXT) a Wiki.js"
		},
		controls: ['dirTTextbox', 'dirJTextbox', 'dirHTextbox'],
		paths: [['input', 'txt', 'topic-index-{0}'],
			['input', 'json'], 
			['output', 'wikijs', '{0}', 'The_Urantia_Book_Multiple']]
	},
	"BOOK_JSON_TO_WIKIXML": {
		active: false,
		desc: {
			en: "THE URANTIA BOOK: Convert Urantia Book (JSON) to Wiki XML",
			es: "EL LIBRO DE URANTIA: Convertir Libro de Urantia (JSON) a Wiki XML"
		},
		controls: ['dirJTextbox', 'dirWTextbox'],
		paths: [['input', 'json', 'book-{0}-footnotes'], 
			['output', 'xml', 'book-{0}']]
	},
	"BOOK_INDEX_JSON_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "THE URANTIA BOOK: Convert Urantia Book Index (JSON) to MediaWiki",
			es: "EL LIBRO DE URANTIA: Convertir Indice de Libro de Urantia (JSON) a MediaWiki"
		},
		controls: ['dirJTextbox', 'dirWTextbox'],
		paths: [['input', 'json', 'book-{0}-footnotes'], 
			['output', 'mediawiki', 'book-{0}']]
	},
	"BOOK_INDEX_JSON_TO_WIKIJS": {
		active: true,
		desc: {
			en: "THE URANTIA BOOK: Convert Urantia Book Index (JSON) to Wiki.js",
			es: "EL LIBRO DE URANTIA: Convertir Indice de Libro de Urantia (JSON) a Wiki.js"
		},
		controls: ['dirJTextbox', 'dirHTextbox'],
		paths: [['input', 'json', 'book-{0}-footnotes'], 
			['output', 'wikijs', '{0}', 'The_Urantia_Book']]/*,
		emptyLan: [null, 'en']*/
	},
	"BIBLE_TEX_BIBLEREF_TXT_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "BIBLE: Convert Bible (LaTeX) + Refs (TXT) to MediaWiki",
			es: "BIBLIA: Convertir Biblia (LaTeX) + Refs (TXT) a MediaWiki"
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
		active: false,
		desc: {
			en: "BIBLE: Convert Bible (LaTeX) + Refs (TXT) to Wiki.js",
			es: "BIBLIA: Convertir Biblia (LaTeX) + Refs (TXT) a Wiki.js"
		},
		controls: ['dirTTextbox', 'dirLTextbox', 'dirHTextbox'],
		paths: [['input', 'txt', 'bible-refs-{0}'], 
			['input', 'tex', 'bible-{0}', '{extraPath}'], 
			['output', 'wikijs', '{0}', 'Bible']],
		/*emptyLan: [null, null, 'en'],*/
		extraPath: {
			en: 'ASV',
			es: 'RV1960'
		}
	},
	"BIBLE_TEX_BIBLEREF_MARKDOWN_TO_WIKIJS": {
		active: true,
		desc: {
			en: "BIBLE: Convert Bible (LaTeX) + Refs (MARKDOWN) to Wiki.js",
			es: "BIBLIA: Convertir Biblia (LaTeX) + Refs (MARKDOWN) a Wiki.js"
		},
		controls: ['dirTTextbox', 'dirLTextbox', 'dirHTextbox'],
		paths: [['input', 'markdown', '{0}', 'paramony'], 
			['input', 'tex', 'bible-{0}', '{extraPath}'], 
			['output', 'wikijs', '{0}', 'Bible']],
		/*emptyLan: [null, null, 'en'],*/
		extraPath: {
			en: 'ASV',
			es: 'RV1960'
		}
	},
	"BIBLE_TEX_TO_BIBLEINDEX_MEDIAWIKI": {
		active: false,
		desc: {
			en: "BIBLE: Convert Bible (LaTeX) to index MediaWiki",
			es: "BIBLIA: Convertir Biblia (LaTeX) a índice MediaWiki"
		},
		controls: ['dirLTextbox', 'dirWTextbox'],
		paths: [['input', 'tex', 'bible-{0}', '{extraPath}'], 
			['output', 'mediawiki', 'bible-{0}', '{extraPath}']],
		extraPath: {
			en: 'ASV',
			es: 'RV1960'
		}
	},
	"BIBLE_TEX_TO_BIBLEINDEX_WIKIJS": {
		active: true,
		desc: {
			en: "BIBLE: Convert Bible (LaTeX) to index Wiki.js",
			es: "BIBLIA: Convertir Biblia (LaTeX) a índice Wiki.js"
		},
		controls: ['dirLTextbox', 'dirHTextbox'],
		paths: [['input', 'tex', 'bible-{0}', '{extraPath}'],
			['output', 'wikijs', '{0}', 'Bible']],
		/*emptyLan: [null, 'en'],*/
		extraPath: {
			en: 'ASV',
			es: 'RV1960'
		}
	},
	"BIBLE_TEX_TO_WIKIXML": {
		active: false,
		desc: {
			en: "BIBLE: Convert Bible (LaTeX) to Wiki XML",
			es: "BIBLIA: Convertir Biblia (LaTeX) a Wiki XML"
		},
		controls: ['dirLTextbox', 'dirWTextbox', 'chkMerge'],
		paths: [['input', 'tex', 'bible-{0}', '{extraPath}'], 
			['output', 'xml', 'bible-{0}', '{extraPath}']],
		extraPath: {
			en: 'ASV',
			es: 'RV1960'
		}
	},
	"BIBLE_UPDATE_TITLES_WIKIJS": {
		active: true,
		desc: {
			en: "BIBLE: Update titles in Bible pages (MARKDOWN)",
			es: "BIBLIA: Actualizar títulos en páginas de la Biblia (MARKDOWN)",
		},
		controls: ['dirTTextbox'],
		paths: [['output', 'wikijs', '{0}', 'Bible']]
	},
	"TOPICS_TXT_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "TOPICS: Convert Topic Index (TXT) to MediaWiki",
			es: "TOPICS: Convertir Topic Index (TXT) a MediaWiki"
		},
		controls: ['dirTTextbox', 'dirWTextbox', 'drpCategories', 'drpLetters'],
		paths: [['input', 'txt', 'topic-index-{0}'], 
			['output', 'mediawiki', 'topic-index-{0}']]
	},
	"TOPICS_TXT_TO_WIKIJS": {
		active: true,
		desc: {
			en: "TOPICS: Convert Topic Index (TXT) to Wiki.js",
			es: "TOPICS: Convertir Topic Index (TXT) a Wiki.js"
		},
		controls: ['dirTTextbox', 'dirHTextbox', 'drpCategories', 'drpLetters'],
		paths: [['input', 'txt', 'topic-index-{0}'], 
			['output', 'wikijs', '{0}', 'topic']]/*,
		emptyLan: [null, 'en']*/
	},
	"TOPICS_INDEX_TXT_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "TOPICS: Create index of Topic Index (TXT) to MediaWiki",
			es: "TOPICS: Crear Indice de Topic Index (TXT) a MediaWiki"
		},
		controls: ['dirTTextbox', 'dirWTextbox', 'drpCategories', 'drpLetters'],
		paths: [['input', 'txt', 'topic-index-{0}'], 
			['output', 'mediawiki', 'topic-index-{0}']]
	},
	"TOPICS_INDEX_TXT_TO_WIKIJS": {
		active: true,
		desc: {
			en: "TOPICS: Create index of Topic Index (TXT) to Wiki.js",
			es: "TOPICS: Crear Indice de Topic Index (TXT) a Wiki.js"
		},
		controls: ['dirTTextbox', 'dirHTextbox', 'drpCategories', 'drpLetters'],
		paths: [['input', 'txt', 'topic-index-{0}'], 
			['output', 'wikijs', '{0}', 'index']]/*,
		emptyLan: [null, 'en']*/
	},
	"REVIEW_TOPIC_TXT_LU_JSON": {
		active: true,
		desc: {
			en: "TOPICS: Review Topic Index (TXT) + JSON (UB)",
			es: "TOPICS: Revisar Topic Index (TXT) + JSON (LU)"
		},
		controls: ['dirTTextbox', 'dirJTextbox', 'drpCategories', 'drpLetters', 'drpTopics'],
		paths: [['input', 'txt', 'topic-index-{0}'], 
			['input', 'json', 'book-{0}-footnotes']]
	},
	"SUM_TOPIC_TXT": {
		active: true,
		desc: {
			en: "TOPICS: Summary of Topic Index (TXT)",
			es: "TOPICS: Resumen actual del Topic Index (TXT)"
		},
		controls: ['dirTTextbox'],
		paths: [['input', 'txt', 'topic-index-{0}']]
	},
	"NORM_TOPIC_TXT": {
		active: true,
		desc: {
			en: "TOPICS: Normalize entries Topic Index (TXT) to TXT",
			es: "TOPICS: Normalizar entradas Topic Index (TXT) a TXT"
		},
		controls: ['dirTTextbox'],
		paths: [['input', 'txt', 'topic-index-{0}']]
	},
	"ARTICLE_TXT_TO_MEDIAWIKI": {
		active: false,
		desc: {
			en: "ARTICLES: Convert Articles (TXT) to MediaWiki",
			es: "ARTICULOS: Convertir Artículos (TXT) a MediaWiki"
		},
		controls: ['dirTTextbox', 'dirWTextbox'],
		paths: [['input', 'txt', 'articles-{0}'], 
			['input', 'mediawiki', 'articles-{0}']]
	},
	"ARTICLE_CATALOG_MARKDOWN_TO_WIKIJS": {
		active: true,
		desc: {
			en: "ARTICLES: Convert a catalog of Articles (MARKDOWN) to Wiki.js",
			es: "ARTICULOS: Convertir un catálogo de Artículos (MARKDOWN) a Wiki.js",
		},
		controls: ['dirTTextbox', 'dirHTextbox'],
		paths: [['output', 'wikijs', '{0}', 'index', 'articles.md'], 
			/*['output', 'wikijs', '{0}', 'article']*/
			['tests', 'article']]
	},
	"ARTICLE_INDEX_TO_WIKIJS": {
		active: true,
		desc: {
			en: "ARTICLES: Convert a Articles Index File (TXT) to Wiki.js",
			es: "ARTICULOS: Convertir un Indice de Artículos (TXT) a Wiki.js"
		},
		controls: ['fnTTextbox', 'fnHTextbox'],
		paths: [['input', 'txt', 'articles-{0}', 'study_aids.txt'],
				['output', 'wikijs', '{0}', 'index', 'study_aids.html']]
	},
	"ALL_INDEXES": {
		active: true,
		desc: {
			en: "INDEXES: Create the List of All Indexes to Wiki.js",
			es: "INDICES: Crear el Listado de Todos los Índices en Wiki.js"
		},
		controls: ['dirHTextbox'],
		paths: [['output', 'wikijs', '{0}']]
	},
	"PARALELL_INDEX": {
		active: true,
		desc: {
			en: "INDEXES: Create index of paralells",
			es: "INDICES: Crear índice de paralelos"
		},
		controls: ['dirJTextbox', 'dirWTextbox'],
		paths: [['input', 'json', 'book-{0}-footnotes'], 
			['input', 'wikijs', '{0}', 'index']]/*,
		emptyLan: [null, 'en']*/
	},
	"TEST": {
		active: true,
		desc: {
			en: "TEST: Execute a testing process",
			es: "TEST: Ejecutar un proceso de prueba"
		},
		controls: ['dirTTextbox', 'dirJTextbox', 'dirHTextbox'],
		paths: [['input', 'txt', 'topic-index-{0}'],
			['input', 'json', 'book-{0}-footnotes'], 
			['input', 'html', 'test']]
	}
};

module.exports = Processes;