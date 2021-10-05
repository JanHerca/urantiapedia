const Processes = {
	"BIBREF_TXT_LU_JSON_TO_TXT": {
		active: true,
		desc: {
			en: "Translate Bible Refs (TXT) + UB (JSON) to TXT",
			es: "Traducir Refs Biblia (TXT) + LU (JSON) a TXT"
		},
		controls: ['dirJTextbox', 'dirTTextbox'],
		paths: ['json/book-{0}', 'txt/bible-refs-{0}']
	},
	"LU_JSON_TO_BIBREF_JSON": {
		active: true,
		desc: {
			en: "Save Bible Refs in Urantia Book (JSON) in JSON",
			es: "Guardar Refs Biblia en Libro de Urantia (JSON) en JSON"
		},
		controls: ['dirJTextbox'],
		paths: ['json/book-{0}']
	},
	"LU_JSON_BIBLEREF_JSON_TO_JSON": {
		active: true,
		desc: {
			en: "Update Bible Refs in Urantia Book (JSON)",
			es: "Actualizar Refs Biblia en Libro de Urantia (JSON)"
		},
		controls: ['dirJTextbox'],
		paths: ['json/book-{0}']
	},
	"LU_HTML_TO_JSON": {
		active: true,
		desc: {
			en: "Convert Urantia Book (HTML) to JSON",
			es: "Convertir Libro de Urantia (HTML) a JSON"
		},
		controls: ['dirHTextbox', 'dirJTextbox'],
		paths: ['html/book-{0}', 'json/book-{0}']
	},
	"LU_TEX_TO_JSON": {
		active: true,
		desc: {
			en: "Convert Urantia Book (LaTeX) to JSON",
			es: "Convertir Libro de Urantia (LaTeX) a JSON"
		},
		controls: ['dirLTextbox', 'dirJTextbox'],
		paths: ['tex/book-{0}', 'json/book-{0}']
	},
	"LU_TEX_TOPIC_TXT_TO_WIKI": {
		active: true,
		desc: {
			en: "Convert Urantia Book (LaTeX) + TopicIndex (TXT) to Wiki",
			es: "Convertir Libro de Urantia (LaTeX) + TopicIndex (TXT) a Wiki"
		},
		controls: ['dirLTextbox', 'dirTTextbox', 'dirWTextbox', 'drpCategories'],
		paths: ['tex/book-{0}', 'txt/topic-index-{0}', 'wiki/book-{0}']
	},
	"LU_TEX_TO_XML": {
		active: false,
		desc: {
			en: "Convert Urantia Book (LaTeX) to WikiXML",
			es: "Convertir Libro de Urantia (LaTeX) a WikiXML"
		},
		controls: ['dirLTextbox', 'dirWTextbox', 'chkMerge'],
		paths: ['text/book-{0}', 'xml/book-{0}']
	},
	"LU_JSON_TO_TEX": {
		active: true,
		desc: {
			en: "Convert Urantia Book (JSON) to LaTeX",
			es: "Convertir Libro de Urantia (JSON) a LaTeX"
		},
		controls: ['dirJTextbox', 'dirLTextbox'],
		paths: ['json/book-{0}', 'tex/book-{0}']
	},
	"LU_JSON_TOPIC_TXT_TO_WIKI": {
		active: true,
		desc: {
			en: "Convert Urantia Book (JSON) + TopicIndex (TXT) to Wiki",
			es: "Convertir Libro de Urantia (JSON) + TopicIndex (TXT) a Wiki"
		},
		controls: ['dirJTextbox', 'dirTTextbox', 'dirWTextbox', 'drpCategories'],
		paths: ['json/book-{0}', 'txt/topic-index-{0}', 'wiki/book-{0}']
	},
	"LU_JSON_TO_XML": {
		active: false,
		desc: {
			en: "Convert Urantia Book (JSON) to WikiXML",
			es: "Convertir Libro de Urantia (JSON) a WikiXML"
		},
		controls: ['dirJTextbox', 'dirWTextbox'],
		paths: ['json/book-{0}', 'xml/book-{0}']
	},
	"LUINDEX_JSON_TO_WIKI": {
		active: true,
		desc: {
			en: "Convert Urantia Book Index (JSON) to Wiki",
			es: "Convertir Indice de Libro de Urantia (JSON) a Wiki"
		},
		controls: ['dirJTextbox', 'dirWTextbox'],
		paths: ['json/book-{0}', 'wiki/book-{0}']
	},
	"BIB_TEX_BIBREF_TXT_TO_WIKI": {
		active: true,
		desc: {
			en: "Convert Bible (LaTeX) + Refs (TXT) to Wiki",
			es: "Convertir Biblia (LaTeX) + Refs (TXT) a Wiki"
		},
		controls: ['dirTTextbox', 'dirLTextbox', 'dirWTextbox'],
		paths: ['tex/bible-{0}{1}', 'wiki/bible-{0}{1}'],
		subpath: {
			en: 'AS',
			es: 'RV1960'
		}
	},
	"BIB_TEX_TO_BIBINDEX_WIKI": {
		active: true,
		desc: {
			en: "Convert Bible (LaTeX) to index Wiki",
			es: "Convertir Biblia (LaTeX) a índice Wiki"
		},
		controls: ['dirLTextbox', 'dirWTextbox'],
		paths: ['tex/bible-{0}{1}', 'wiki/bible-{0}{1}'],
		subpath: {
			en: 'AS',
			es: 'RV1960'
		}
	},
	"BIB_TEX_TO_XML": {
		active: false,
		desc: {
			en: "Convert Bible (LaTeX) to WikiXML",
			es: "Convertir Biblia (LaTeX) a WikiXML"
		},
		controls: ['dirLTextbox', 'dirWTextbox', 'chkMerge'],
		paths: ['tex/bible-{0}{1}', 'xml/bible-{0}{1}'],
		subpath: {
			en: 'AS',
			es: 'RV1960'
		}
	},
	"TOPIC_TXT_TO_WIKI": {
		active: true,
		desc: {
			en: "Convert TopicIndex (TXT) to Wiki",
			es: "Convertir TopicIndex (TXT) a Wiki"
		},
		controls: ['dirTTextbox', 'dirWTextbox', 'drpCategories'],
		paths: ['txt/topic-index-{0}', 'wiki/topic-index-{0}']
	},
	"TOPICINDEX_TXT_TO_WIKI": {
		active: true,
		desc: {
			en: "Convert index of TopicIndex (TXT) to Wiki",
			es: "Convertir Indice de TopicIndex (TXT) a Wiki"
		},
		controls: ['dirTTextbox', 'dirWTextbox', 'drpCategories'],
		paths: ['txt/topic-index-{0}', 'wiki/topic-index-{0}']
	},
	"REVIEW_TOPIC_TXT_LU_JSON": {
		active: true,
		desc: {
			en: "Review TopicIndex (TXT) + JSON (UB)",
			es: "Revisar TopicIndex (TXT) + JSON (LU)"
		},
		controls: ['dirTTextbox', 'dirJTextbox', 'drpCategories', 'drpTopics'],
		paths: ['txt/topic-index-{0}', 'json/book-{0}']
	},
	"SUM_TOPIC_TXT": {
		active: true,
		desc: {
			en: "Summary of Topic Index (TXT)",
			es: "Resumen actual del Topic Index (TXT)"
		},
		controls: ['dirTTextbox'],
		paths: ['txt/topic-index-{0}']
	},
	"NORM_TOPIC_TXT": {
		active: true,
		desc: {
			en: "Normalize entries TopicIndex (TXT) to TXT",
			es: "Normalizar entradas TopicIndex (TXT) a TXT"
		},
		controls: ['dirTTextbox'],
		paths: ['txt/topic-index-{0}']
	},
	"ARTICLE_TXT_TO_WIKI": {
		active: true,
		desc: {
			en: "Convert Articles (TXT) to Wiki",
			es: "Convertir Artículos (TXT) a Wiki"
		},
		controls: ['dirTTextbox', 'dirWTextbox'],
		paths: ['txt/articles-{0}', 'wiki/articles-{0}']
	}
};

module.exports = Processes;