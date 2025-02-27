# Tricks to fix converted texts to Markdown

## Replacements in VS Code

### After some PDF conversions to Markdown

Description | Origin | Fix
--- | --- | ---
Replace hyphenation | `-\n` | `(blank)` | 
Replace paragraph separators | `^\n` | `%%\n\n` | 
Replace end lines not preceded by % | `(?<!%)\n` | `(one space)` | 
Replace %% | `%%` | `\n` | 
Replace spaces at beginning | `^[ ]+` | `(blank)` | 

### After translation with Google Translator of Markdown articles to Spanish 

Origin | Fix
--- | ---
Info blockquotes ||
`{es-info}` | `{.is-info}`
`{.es-info}` | `{.is-info}`
UB links ||
`[UB` | `[LU`
`/en/` | `/es/`
`/El_Libro_de_Urantia/ ` | `/The_Urantia_Book/`
`/El_Libro_de_Urantia/` | `/The_Urantia_Book/`
`/El Libro de Urantia/` | `/The_Urantia_Book/`
`(\d)–(\d)` | `$1-$2` (do not apply this outside links)
`_El libro de Urantia_` | `_El Libro de Urantia_`
`. . .` | `...`
`Artículo obtenido de:` | `Artículo traducido. El original fue obtenido de:`
Images ||
`<figura` | `<figure`
`="Figura` | `="Figure`
`clase="` | `class="`
`="imagen` | `="image`
`</figura>` | `</figure>`

Quotes (see below in other replacements)

### Conversion of Study Aids (from Urantia Foundation website)

Origin | Fix
--- | ---
Steps to convert Urantia Book links ||
`\[\(\d+.\d+\)` | `[UB`
`https://www.urantia.org/urantia-book-standardized/paper-(\d+).+#U\d+_(\d+)_(\d+)` | `/en/The_Urantia_Book/$1#p$2_$3`
`\[\([\d|:|\.|-]+\)*[ |\d|:|\.|-]+\]\(https://www.urantia.org/fr/le-livre-d-urantia/[\w|\d|-]+#U(\d+)_(\d+)_(\d+)\)` | `[LU $1:$2.$3](/fr/The_Urantia_Book/$1#p$2_$3)`
Steps to convert Bible links ||
`https://biblehub.com/niv` | `/en/Bible`
`https://biblehub.com` | `/en/Bible`
`/en/Bible/(\d)_(.)` | `/en/Bible/$1_\U$2`
`/en/Bible/(.)` | `/en/Bible/\U$1`
`(\d+)-(\d+).htm\)` | `$1#v$2)`
Other conversions ||
`> \*` | `*`
`> \n` | `(empty)`
`> (\d+)\\.` | `$1.`
`> > ([a-zA-Z]).` | `\t- $1.`
`\*\*REFERENCE\*\*:\[` | `**REFERENCE**: [`
`^(.+) \*\*REFERENCE\*\*: \[(.+)\]\((.+)\) — (.+)` | `### $1 $2 — $4\n\n**REFERENCE**: [$2]($3) — $4`
`\*\*(.+) (\d+):(\d+)\*\*.` | `**[$1 $2:$3](/en/Bible/$1/$2#v$3)**.`
Roman numerals as heading 3 ||
`^((?=[XVI])(X{0,3})(I[XV]|V?I{0,3}))\.` | `### $1.`
Latin letters as heading 4 ||
`^([A-Z])\.` | `#### $1.`
Old UB references ||
`\(\d+[.\d]*\)`
Steps for Spanish ||
`^> \*\*COMENTARIOS\*\*` | `**COMENTARIOS**`
`^> \n` | `-nothing-`
`^> (\d+)\\. ` | `$1. `
`^> > \n` | `-nothing-`
`^> > > \n` | `-nothing-`
`^> > > > \n` | `-nothing-`
`^> > > > > \n` | `-nothing-`
`^> > > > > (.)` | `\t\t\t\t$1`
`^> > > > (.)` | `\t\t\t$1`
`^> > > (.)` | `\t\t$1`
`^> > (.)` | `\t$1`
`^(\d+)\\. ` | `$1. `
`\*\*COMENTARIOS\*\*\n` | `**COMENTARIOS**\n\n`
`^([^\.]+)\. \*\*REFERENCIA\*\*: \[\((\d+).(\d+)\) (\d+):(\d+)\.(\d+)\]\(https://www\.urantia\.org([^\)]+)\) - “([^”]+)”` | `### $1. LU $4:$5.$6 — «$8»\n\n**REFERENCIA**: [LU $4:$5.$6](/es/The_Urantia_Book/$4#p$5_$6) — «$8»`
`^\t(\d+)\\\. ` | `\t$1. `
`^\t([A-Z])\. ` | `\t- $1. `
`\[\((\d+).(\d+)\) (\d+):(\d+)\.(\d+)\]\(https://www\.urantia\.org([^\)]+)\)` | `[LU $3:$4.$5](/es/The_Urantia_Book/$3#p$4_$5)`

### LaTeX

LaTeX | Markdown
--- | ---
`\\par ` | `\n`
`\\textit\{([^\}]+)\}` | `_$1_`
`\\bigbreak` | ``
`"\+--` | `—`
`\\section\*\{([^\}]+)\}` | `## $1`
`\\noindent \\textsc\{([^\}]+)\}` | `<span style="font-variant:small-caps;">$1</span>`
`\\begin\{itemize\}` | ``
`\\end\{itemize\}` | ``
`\\item ` | `- `
`\\begin\{displayquote\}\[\]\n` | `\n> `
`\\begin\{displayquote\}` | `> `
`\n\\end\{displayquote\}` | ``
`\{\\footnotesize (\d+)\}` | `<sup><small>$1</small></sup>`
`\\hangindent=1\.0cm \{\\small ([^\}]+)\}` | `$1`
`\{\\url\{([^\}]+)\}\}` | `$1`
`\{\\myurl\{([^\}]+)\}\}` | `$1`

### Other replacements

Origin | Fix
--- | --- 
Replace english plain quotes with curly ones ||
`"([^"]*)"` | `“$1”`
`'([^']*)'` | `‘$1’`
Replace english curly quotes with spanish angular ones ||
`“([^”]*)”` | `«$1»`
Replace spanish plain quotes with angular ones ||
`"([^"]*)"` | `«$1»`
HTML links to Markdown links ||
`<a href="(.+)">(.+)</a>` | `[$2]($1)`
Urantia references to links ||
`\(\d{1,4}\.\d{1,2}\) (\d{1,3}):(\d{1,2})\.(\d{1,3})` or<br> `\[(\d{1,3}):(\d{1,2})\.(\d{1,3})\]` or<br> `(\d{1,3}):(\d{1,2})\.(\d{1,3}), \d{1,4}\.\d{1,2}` or<br> `LU (\d{1,3}):(\d{1,2})\.(\d{1,3})` | `[UB $1:$2.$3](/en/The_Urantia_Book/$1#p$2_$3)` or<br> `[LU $1:$2.$3](/es/The_Urantia_Book/$1#p$2_$3)`
`\\\[Paper (\d+):(\d+)\.(\d+)(.+)\\\]` | `[UB $1:$2.$3](/en/The_Urantia_Book/$1#p$2_$3)`
Bible references to links ||
`Gn (\d{1,2}):(\d{1,2})` | `[Gn $1:$2](/es/Bible/Genesis/$1#v$2)`
Bible references that are not already converted to links (better option) ||
`(?<!\[)I Cor. (\d{1,2}):(\d{1,2})` | `[Gn $1:$2](/es/Bible/Genesis/$1#v$2)`
`(?<!\[)(\d+):(\d+)([-|,])?(\d+)?` | `[$1:$2$3$4](/en/Bible/Hebrews/$1#v$2)`
Bible references to links ||
`Luke (\d+):(\d+)-(\d+:?\d+)` | `[Luke $1:$2-$3](/en/Bible/Luke/$1#v$2)`
Change quotes inside other quotes ||
`("[^"]*)(")([^"]*)(")([^"]*")` | `$1“$3”$5`
Remove duplicate lines (requires a previous sorting, see below) ||
`^(.*)(\n\1)+$` | `$1`
`í` | `’`
`ñ` | `C`
`ì` | `“`
`î` | `”` or `„  ”`
Search end of sentences ||
`[\.”\?!]` | &nbsp;
Search by page ref ||
`"par_pageref": "359.\d+"` in `./input/json/book-e*-footnotes` | &nbsp;
Search existing old UB refs ||
`\(\d{1,4}(\.\d{1,2})?\)` | &nbsp;
Search existing new UB refs ||
`(\d{1,3}):(\d{1,2})(\.\d{1,3})?(-\d{1,3})?` | &nbsp;
Books ||
`^p\. ([0-9ivx]+)` | `<span id=@p$1@>[<sup><small>p. $1</small></sup>]</span>`
`\n\n<span id=@p([0-9ivx]+)@>\[<sup><small>p\. ([0-9ivx]+)</small></sup>\]</span>\n\n\\\[paragraph continues\\\]` | ` <span id=@p$1@>[<sup><small>p. $2</small></sup>]</span>`
`\n\n<span id=@p([0-9ivx]+)@>\[<sup><small>p\. ([0-9ivx]+)</small></sup>\]</span>\n\n([a-z0-9])` | ` <span id=@p$1@>[<sup><small>p. $2</small></sup>]</span> $3`
`// File: tests\\\\book.+\n` | ``
`\[Sacred Texts\]\(\.\./\.\..+\n` | ``
`\[Buy this Book at Amazon.+\n` | ``
`\[!\[\]\(\.\./\.\./cdshop.+\n` | ``
`(?<!\w)'([^']*)'(?!\w)` | `‘$1’` (manually to deal with apostrophe)
`"([^"]*)"` | `“$1”`
`@` | `"`
`\[[^\]]+\]\(#fn_(\d+)\)` | `[^$1]`
`\[([^\]]+)\]\(\w+\d+\.htm#fr_(\d+)\)` | `[^$2]: $1`
`### Footnotes` | `## Footnotes`
`  $` | ``
`^"` | `“`
`"$` | `”`
`^'` | `‘`
`'$` | `’`
`--` | `—`
` ` | ` `
`^ +` | `&nbsp;&nbsp;&nbsp;&nbsp;`
`#page_` | `#p`

## VS Code tricks

* Multi cursor: Select through search, then Ctrl + Shift + L (place a cursor in each selection), then Alt + Click (to modify cursors location at once)
* Sort lines: Select the lines to sort, then View / Command Palette (Ctrl + P and >) and type or use Sort Lines Ascending or Sort Lines Descending.
* Format Markdown tables: click inside the table anywhere and Shift + Alt + F


## Typings in VS Code

- “ ”  (Alt+q)
- «  » (Alt+w)
- ‘ ’ (Alt+e)

For previous shortcuts in VS Code goto `File > Preferences > Keyboard shortcuts` and click in small button `Open keyboard shortcuts (JSON)`. That open a file in `<user>\AppData\Roaming\Code\User\keybindings.json`. Add next content to file.

```json
    { 
        "key": "alt+t", 
        "command": "workbench.action.tasks.runTask", 
        "args": "tsc" 
    },
    {
        "key": "alt+q",
        "command": "editor.action.insertSnippet",
        "args": {"snippet": "“$TM_SELECTED_TEXT$0”"},
        "when": "editorTextFocus&&editorHasSelection"
    },
    {
        "key": "alt+w",
        "command": "editor.action.insertSnippet",
        "args": {"snippet": "«$TM_SELECTED_TEXT$0»"},
        "when": "editorTextFocus&&editorHasSelection"
    },
    {
        "key": "alt+e",
        "command": "editor.action.insertSnippet",
        "args": {"snippet": "‘$TM_SELECTED_TEXT$0’"},
        "when": "editorTextFocus&&editorHasSelection"
    },
    {
        "key": "ctrl+t",
        "command": "editor.action.transformToTitlecase"
    }
```

Other special chars:
- — (Em dash)
- – (En dash)
- \- (Hyphen)
- Ö => ...
- ±
- °
- Superscript: 10^5^
- Subscript: H~2~O
- Œ

omissions in quotes:
* english . . .
* spanish [...]

## Pandoc

Convert Word file to Markdown:
- Open Powershell terminal.
- Ensure Pandoc is installed with `pandoc -h`
- Convert with: `pandoc -t markdown_mmd --extract-media . <word_file>.docx -o <md_file>.md` (it is required to be inside the folder with the files)

Unfortunately Pandoc cannot convert from pdf, only uses pdf as output.

## Other tools

* Test regular expressions: https://regex101.com/
* Convert pdf to markdown (only text, not images): 
  * https://pdf2md.morethan.io/
  * https://github.com/jzillmann/pdf-to-markdown
  * https://github.com/bsorrentino/pdf-tools
* Convert pdf to markdown (really good results, export images): 
  * https://products.aspose.app/words/es/conversion/pdf-to-md
  * Previous product as API for creating our own apps (problem, this aPI is super expensive): https://github.com/aspose-words/Aspose.Words-for-.NET
  * Documentation of previous product: https://reference.aspose.com/words/net/
* Convert pdf, even scanned pdf, to MS Word: https://www.onlineocr.net/
* Split pdf in several files by size: https://deftpdf.com/split-pdf-by-size
* Scan books: see HOWTO_scan_books

## Snippets

### Sample of Markdown article header

```
---
title: "Restated"
description: 
published: true
date: 2023-02-19T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2023-02-19T14:02:03.086Z
---

<p class="v-card v-sheet theme--light grey lighten-3 px-2">© 2008 David<br>© 2008 The Urantia Book Fellowship</p>
```


- Article obtained from: https://urantia-book.org/archive/newsletters/herald/

### Sample of Markdown image

```html
<figure id="Figure_2" class="image urantiapedia image-style-align-right">
<img src="/image/article/Dave_Holt/In_Search_of_the_Historical_Onamonalonton/image02.png">
<figcaption><em> Mt Shasta, Mt Shasta, California.</em></figcaption>
</figure>
```

image-style-align-right

How to preview images in a Markdown: replace `src="/image` with `src="../../../output/wikijs/image` using as many `../` as needed. Do not forget to remove later.

### Sample to clear floating

```html
<br style="clear:both;"/>
```

### Sample to center text (for example, a poem)

```html
<p style="text-align:center;">
```

### Sample to wrap a wide table

```html
<div class="urantiapedia-table-wrapper">
```

### Convert Markdown images to HTML

Replace this:

`!\[(.+)\]\((.+) "(.+)"\)`

with this:

```html
<figure id="Figure_1" class="image urantiapedia image-style-align-left" alt="$1">
<img src="$2">
<figcaption><em>$3</em></figcaption>
</figure>
```

Replace this:

`!\[(.+)\]\((.+)\)`

with this:

```html
<figure id="Figure_1" class="image urantiapedia image-style-align-left" alt="$1">
<img src="$2">
</figure>
```

Replace this:

`!\[\]\((.+)\)`

with this:

```html
<figure id="Figure_1" class="image urantiapedia image-style-align-left">
<img src="$1">
</figure>
```

Replace this:

`!\[\]\((.+)\)`

with this:

```html
<figure id="Figure_1" class="image urantiapedia image-style-align-left">
<img src="/image/article/Reflectivite/2023_12/001.jpg">
<figcaption>xxxxx</figcaption>
</figure>
```

<a href="https://bit.ly/4fSzbc5">
<figure id="Figure_2" class="image urantiapedia">
<img src="/image/article/UF_News_Online/2021_04/038.jpg">
</figure>
</a>

## Emojis

- The Urantia Book :blue_book: (`:blue_book:`)
- The Bible :closed_book: (`:closed_book:`)
- The Biblical Apocrypha :green_book: (`:green_book:`)
- Sacred books of other religions :orange_book: (`:orange_book:`)
- Scientific and philosophical books :books: (`:books:`)
- Articles :page_with_curl: (`:page_with_curl:`)
- Study Aids :notebook: (`:notebook:`)
- Books from readers :notebook_with_decorative_cover: (`:notebook_with_decorative_cover:`)
- Schemas :memo: (`:memo:`)
- Indexes :capital_abcd: (`:capital_abcd:`)
- Paramony :ledger: (`:ledger:`)
- Topical Encyclopedia :card_index: (`:card_index:`)
- Audio :sound: (`:sound:`)
- Images :sunrise_over_mountains: (`:sunrise_over_mountains:`)
- Maps (static) :globe_with_meridians: (`:globe_with_meridians:`)
- Maps (dynamic) :earth_americas: (`:earth_americas:`)
- Presentations :bar_chart: (`:bar_chart:`)
- 3D models :milky_way: (`:milky_way:`)
- Video :movie_camera: (`:movie_camera:`)
- Help :grey_question: (`:grey_question:`)
- Authors :woman_technologist: (`:woman_technologist:`)
- News :newspaper: (`:newspaper:`)
- Legal info :copyright: (`:copyright:`)
- Colaboration :blue_heart: (`:blue_heart:`)
- Statistics :chart_with_upwards_trend: (`:chart_with_upwards_trend:`)

Full list of supported emojis in Markdown: https://gist.github.com/rxaviers/7360908

## Google Translator common fails


### To remove navigation headers remove this (with and without three lines `\n(.+)`)

<figure class="table chapter-navigator">\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n(.+)\n</figure>\n

### Replacements

Wrong | Right
--- | ---
  $|
 | 
 | 
«  |« 
  »| »
« text-align:center; »|"text-align:center;"
\. \. \.|...
\. \.|. 
\. \.|. 
\.  |. 
\. ,|,
« clear:both; »|"clear:both;"
< /p>|</p>
title: « (.+) »|title: "$1"
title: « (.+)|title: "$1"
\[\^(\d+)\] :|[^$1]:
\[\^(\d+) \]|[^$1] 
description :|description:
description: « (.+) »|description: "$1"
description: « (.+) \?|description: "$1 ?"
\{est-info\}|{.is-info}
< /i>|</i>
^##(\w|\d)|## $1
“|”|\{|"|'|\. [a-z] | Check manually

**FR**

Wrong | Right
--- | ---
titre : « (.+) »|title: "$1"
titre : « (.+) \?|title: "$1 ?"
title: « (.+) »|title: "$1"
^titre :|title:
## Les références|## Références
bourse|Fellowship
Bourse|Fellowship
Fraternité|Fellowship
Communauté|Fellowship
« clear:les deux; »|"clear:both;"
( *)(Le )*Livre d['|’]Urantia([ |\.|,|;|:|\?|!])|$1_$2Livre d'Urantia_$3
`^\[LU (\d{1,3}):(\d{1,2})\.(\d{1,3})\]\(/fr/The_Urantia_Book/(\d{1,3})#p(\d{1,2})_(\d{1,3})\) \(\d{1,4}\.\d{1,2}\) *(.+)`|`> $7 [LU $1:$2.$3](/fr/The_Urantia_Book/$4#p$5_$6)`

in books there is a frequent `Français ` with or without space that is wrong

**ES**

Wrong | Right
--- | ---
^título:|title:
^Título:|title:
^descripción:|description:
v-card tema v-sheet--gris claro aclarar-3 px-2|v-card v-sheet theme--light grey lighten-3 px-2
Compañerismo|Fellowship
Becas|Fellowship
Comunidad|Fellowship
confraternidad|Fellowship
la beca|la Fellowship
beca|Fellowship
**Beca**|Fellowship
fundación|Fundación
 El [L|l]ibro de Urantia([ |\.|,|;|:|\?|!])| _El Libro de Urantia_$1
^El [L|l]ibro de Urantia([ |\.|,|;|:|\?|!])|_El Libro de Urantia_$1
Porcelana|China
síndico|fideicomisario
Síndico|fideicomisario
Patronos|Fideicomisarios
LUIS|UBIS
UrANTIA|URANTIA
'El Libro de URANTIA'|‘El Libro de URANTIA’
Cotización|Cita
&copia;|&copy;
<br estilo=«claro:ambos;»/>|<br style="clear:both;"/>
estilo=«claro:ambos;»|style="clear:both;"
receptores | síndicos (about Melchisedeks)
ya menudo | y a menudo
oa | o a
Rodan | Rodán
Nathaniel | Natanael
Thomas | Tomás
Ajustador de pensamiento | Ajustador del Pensamiento
Ajustador del pensamiento | Ajustador del Pensamiento
Peter | Pedro (about the apostle)
John | Juan (about the apostle or the Baptist)
Apocalipsis | la revelación (about The Urantia Book itself)
Bethpage | Betfagé (Bethpage in fact should be Bethphage)
Capernaúm or Capernaum | Cafarnaúm
Nazareth | Nazaret
id=«p(\d+)»|id="p$1"
id=»p(\d+)«|id="p$1"
Allah|Alá

&nbsp; 


UBTheNews

`\((\d{1,3}):(\d{1,2})\.(\d{1,3})\)  (.+)`
`> $4 ([UB $1:$2.$3](/en/The_Urantia_Book/$1#p$2_$3))`

`\[\((\d{1,3}):(\d{1,2})\.(\d{1,3})\)\]\((.+)\)  (.+)`
`> $5 ([UB $1:$2.$3](/en/The_Urantia_Book/$1#p$2_$3))`

`^\[\((\d{1,3}):(\d{1,2})\.(\d{1,3})\)\]\((.+)\)(.+)`
`> $5 ([UB $1:$2.$3](/en/The_Urantia_Book/$1#p$2_$3))`

