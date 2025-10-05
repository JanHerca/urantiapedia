# Tricks to fix converted texts to Markdown

## Replacements in VS Code

### After some PDF conversions to Markdown

Description | Origin | Fix
--- | --- | ---
Replace hyphenation | `[-¬] +\n` | `(blank)` | 
Replace paragraph separators | `^\n` | `%%\n\n` | 
Replace end lines not preceded by % | `(?<!%)\n` | `(one space)` | 
Replace %% | `%%` | `\n` | 
Replace spaces at beginning | `^[ ]+` | `(blank)` | 
Multiple carriages (execute several) | `\n\n\n` | `\n\n`
Spaces at the end | ` +$` | `(blank)`
Doble spaces | `  ` | ` `
Pages | `^(\d+)\n\n[A-Z][A-Z].+` | `<span id=@p$1@><sup><small>[ p. $1 ]</small></sup></span>`
Pages | `^(\d+) [A-Z][A-Z].+` | `<span id=@p$1@><sup><small>[ p. $1 ]</small></sup></span>`
Pages | `^[A-Z ]+ (\d+)` | `<span id=@p$1@><sup><small>[ p. $1 ]</small></sup></span>`
Pages | `^[A-Z ]+\n\n(\d+)` | `<span id=@p$1@><sup><small>[ p. $1 ]</small></sup></span>`

### Books

Origin | Fix
--- | ---
`^p\. ([0-9ivxlc]+)` | `<span id="p$1"><sup><small>[ p. $1 ]</small></sup></span>`
`\n\n<span id="p([0-9ivxl]+)"><sup><small>\[ p\. ([0-9ivxlc]+) \]</small></sup></span>\n\n\\\[paragraph continues\\\]` | ` <span id="p$1"><sup><small>[ p. $2 ]</small></sup></span>`
`\n\n<span id="p([0-9ivxlc]+)"><sup><small>\[ p\. ([0-9ivxlc]+) \]</small></sup></span>\n\n([a-z0-9])` | ` <span id="p$1"><sup><small>[ p. $2 ]</small></sup></span> $3`
`([a-z0-9_,;])\n\n<span id="p([0-9ivxlc]+)"><sup><small>\[ p\. ([0-9ivxlc]+) \]</small></sup></span>\n\n([a-z0-9_])` | `$1 <span id="p$2"><sup><small>[ p. $3 ]</small></sup></span> $4`
`// File: tests\\\\book.+\n` | ``
`\[Sacred Texts\]\(\.\./\.\..+\n` | `
`\[Buy this Book at Amazon.+\n` | ``
`\[!\[\]\(\.\./\.\./cdshop.+\n` | ``
`\* \* \*\n` | ``
`\[!\[\]\(img/tease\.jpg.+\n` | ``
`(?<!\w)'([^']*)'(?!\w)` | `‘$1’`
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
`\[([^\]]+)\]\(errata\.htm#\d+\)` | `$1`
Italic inside words `(?<=[\wâêîôû])_([^_/\.-\\,]+)_(?=[\wâêîôû ])` | `<i>$1</i>`
`_([A-Za-zâêîôûñ])_` | `<i>$1</i>`
`_([A-Za-zâêîôûñ])([A-Za-zâêîôûñ])_` | `<i>$1$2</i>`
`<script\b[^>]*>[\s\S]*?<\/script>` | `blank` (Remove script tags from HTML)`
`!\[\]\(data:image/jpeg[^\)]+\)` | `![](/image/book/Zoroastrianism/Pahlavi_Texts_Part_1/001)`
`^\[([ivxlc]+):(\d+)\]\(\.\)` | `[^$2]: ($1:$2)`
`^\[(\d+):(\d+)\]\(\.\)` | `[^$2]: ($1:$2)`
`\[(\d+)\]\(\.\)` | `[^$1]`
`([^=>])"([^>"]*)"([^=>])` | `$1“$2”$3`

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

### LaTeX to Markdown

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

### HTML to Markdown

HTML | Markdown
--- | ---
`<em>([^<]+)</em>` | `_$1_`
`<i>([^<]+)</i>` | `_$1_`
`<b>([^<]+)</b>` | `**$1**`
`<strong>([^<]+)</strong>` | `**$1**`
`<a href="([^"]+)">([^<]+)</a>` | `[$2]($1)`
`<h1>([^<]+)</h1>` | `# $1`
`<h2>([^<]+)</h2>` | `## $1`
`<h3>([^<]+)</h3>` | `### $1`
`<h4>([^<]+)</h4>` | `#### $1`
`<h5>([^<]+)</h5>` | `##### $1`
`<h6>([^<]+)</h6>` | `###### $1`
`<ul>\s*<li>(.*?)</li>\s*</ul>` | `- $1`
`<ol>\s*<li>(.*?)</li>\s*</ol>` | `1. $1`
`<li>(.*?)</li>` | `- $1`
`<blockquote>(.*?)</blockquote>` | `> $1`
`<code>([^<]+)</code>` | ``$1``
`<pre><code>([\s\S]+?)</code></pre>` | ````\n$1\n````
`<img src="([^"]+)" alt="([^"]*)">` | `![$2]($1 "$2")`
`<img src="([^"]+)">` | `![]($1)`
`<figure>\s*<img src="([^"]+)" alt="([^"]*)">\s*<figcaption>([^<]+)</figcaption>\s*</figure>` | `![$2]($1 "$3")`
`<br\s*/?>` | `\n`
`<hr\s*/?>` | `---`
`<p>(.*?)</p>` | `$1\n\n`
`<p>(.*?)</p>` | `$1\n\n`
`<div>(.*?)</div>` | `$1`
`<span>(.*?)</span>` | `$1`

### Markdown to HTML

Markdown | HTML
--- | ---
`_([^_]+)_` | `<em>$1</em>` (manual, not replace all)
`\*\*([^*]+)\*\*` | `<strong>$1</strong>`
`\[(.*?)\]\((.*?)\)` | `<a href="$2">$1</a>`
`^# (.+)` | `<h1>$1</h1>`
`^## (.+)` | `<h2>$1</h2>`
`^### (.+)` | `<h3>$1</h3>`
`^#### (.+)` | `<h4>$1</h4>`
`^##### (.+)` | `<h5>$1</h5>`
`^###### (.+)` | `<h6>$1</h6>`
`^- (.+)` | `<li>$1</li>` (wrap with <ul> for lists)
`^(\d+)\. (.+)` | `<li>$2</li>` (wrap with <ol> for ordered lists)
`^> (.+)` | `<blockquote>\n$1\n</blockquote>`
``([^`]+)`` | `<code>$1</code>`
````([\s\S]+?)```` | `<pre><code>$1</code></pre>`
`!\[(.*?)\]\((.*?)\)` | `<img src="$2" alt="$1">`
`---` | `<hr>`
`"/es/` | `"https://urantiapedia.org/es/`
`\[\^(\d+)\]` | `[<a href="#fn$1">$1</a>]` (add `id="fn$1"` to <p> in notes)
`^([A-Z])` | `<p style="text-align:justify;text-indent:.5cm">$1` (add manually to all)
`<a id="a\d+_\d+"></a>` | ``

### Other replacements

Origin | Fix
--- | --- 
`"([^"]*)"` | `“$1”` (Replace english plain quotes with curly ones)
`'([^']*)'` | `‘$1’`
`“([^”]*)”` | `«$1»` (Replace english curly quotes with spanish angular ones)
`"([^"]*)"` | `«$1»` (Replace spanish plain quotes with angular ones)
Urantia references to links ||
`\(\d{1,4}\.\d{1,2}\) (\d{1,3}):(\d{1,2})\.(\d{1,3})` or<br> `\[(\d{1,3}):(\d{1,2})\.(\d{1,3})\]` or<br> `(\d{1,3}):(\d{1,2})\.(\d{1,3}), \d{1,4}\.\d{1,2}` or<br> `LU (\d{1,3}):(\d{1,2})\.(\d{1,3})` | `[UB $1:$2.$3](/en/The_Urantia_Book/$1#p$2_$3)` or<br> `[LU $1:$2.$3](/es/The_Urantia_Book/$1#p$2_$3)`
`\\\[Paper (\d+):(\d+)\.(\d+)(.+)\\\]` | `[UB $1:$2.$3](/en/The_Urantia_Book/$1#p$2_$3)`
`Gn (\d{1,2}):(\d{1,2})` | `[Gn $1:$2](/es/Bible/Genesis/$1#v$2)` (Bible references to links)
`(?<!\[)I Cor. (\d{1,2}):(\d{1,2})` | `[Gn $1:$2](/es/Bible/Genesis/$1#v$2)` (Bible references that are not already converted to links (better option))
`(?<!\[)(\d+):(\d+)([-|,])?(\d+)?` | `[$1:$2$3$4](/en/Bible/Hebrews/$1#v$2)`
`Luke (\d+):(\d+)-(\d+:?\d+)` | `[Luke $1:$2-$3](/en/Bible/Luke/$1#v$2)` (Bible references to links)
`("[^"]*)(")([^"]*)(")([^"]*")` | `$1“$3”$5` (Change quotes inside other quotes)
Remove duplicate lines (requires a previous sorting, see below) ||
`^(.*)(\n\1)+$` | `$1`
`í` | `’`
`ñ` | `C`
`ì` | `“`
`î` | `”` or `„  ”`
`[\.”\?!]` | &nbsp; (Search end of sentences)
`"par_pageref": "359.\d+"` in `./input/json/book-e*-footnotes` | &nbsp; (Search by page ref)
`\(\d{1,4}(\.\d{1,2})?\)` | &nbsp; (Search existing old UB refs)
`(\d{1,3}):(\d{1,2})(\.\d{1,3})?(-\d{1,3})?` | &nbsp; (Search existing new UB refs)

## Greeks letters

* Alpha - Α α
* Beta - Β β
* Gamma - Γ γ
* Delta - Δ δ
* Epsilon - Ε ε έ
* Zeta - Ζ ζ
* Eta - Η η
* Theta - Θ θ
* Iota - Ι ι ί
* Kappa - Κ κ
* Lambda - Λ λ
* Mu - Μ μ
* Nu - Ν ν
* Xi - Ξ ξ
* Omicron - Ο ο
* Pi - Π π
* Rho - Ρ ρ
* Sigma - Σ σ/ς
* Tau - Τ τ
* Upsilon - Υ υ ύ
* Phi - Φ φ
* Chi - Χ χ
* Psi - Ψ ψ
* Omega - Ω ω

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


### To remove navigation headers remove this

`<figure class="table chapter-navigator">[\s\S]*?</figure>(?:\n|$)`

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
`^\[\^(\d+)\] : ` | `[^$1]: `

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


### UBTheNews

`\((\d{1,3}):(\d{1,2})\.(\d{1,3})\)  (.+)`
`> $4 ([UB $1:$2.$3](/en/The_Urantia_Book/$1#p$2_$3))`

`\[\((\d{1,3}):(\d{1,2})\.(\d{1,3})\)\]\((.+)\)  (.+)`
`> $5 ([UB $1:$2.$3](/en/The_Urantia_Book/$1#p$2_$3))`

`^\[\((\d{1,3}):(\d{1,2})\.(\d{1,3})\)\]\((.+)\)(.+)`
`> $5 ([UB $1:$2.$3](/en/The_Urantia_Book/$1#p$2_$3))`

### Jan Herca articles

**The header**

<div style="display: flex;background-color: #fff3e0;border-radius: 8px;padding: 16px;font-size: 12px">
<div style="margin-right: 16px"><img style="background: none;width:30px;height:30px;max-width:fit-content" src="https://buscandoajesus.wordpress.com/wp-content/uploads/2025/04/warning.png" /></div>
<div>Este sitio web y todo su contenido se está moviendo a <a href="https://urantiapedia.org" target="_blank">urantiapedia.org</a>, un sitio web con contenido no sólo relativo a Jesús de Nazaret y su época, sino también a cientos de otros temas relacionados con religión, filosofía, ciencia y espiritualidad. El contenido de este blog, «Buscando a Jesús», va a continuar, pero es recomendable visitar el nuevo sitio web. Allí es donde se está publicando todo el contenido nuevo, además en varios idiomas (al menos en español, inglés y francés), y con enlaces a literatura clásica y bíblica.
Véase este artículo en la nueva web aquí: <a href="https://urantiapedia.org/es/article/Jan_Herca/The_Jewish_calendar_on_Jesus_times" target="_blank">El calendario judío de la época de Jesús</a>.</div>
</div>

**Downloads section**

<h2 id="descargas">Descargas</h2>
<p style="text-align: justify;text-indent: .5cm"><img src="http://buscandoajesus.wordpress.com/files/2009/04/icon_pdf.png" alt="PDF" width="16" height="16" /> Este artículo : <a href="http://buscandoajesus.files.wordpress.com/2012/07/calendario_revisado.pdf" target="_blank" rel="noopener">PDF</a></p>

**The footer**

<h2 id="licencia">Licencia</h2>
<a href="https://creativecommons.org/licenses/by-sa/4.0/deed.es" rel="license"> <img src="https://buscandoajesus.wordpress.com/wp-content/uploads/2025/04/by-sa.png" alt="Creative Commons License" width="100px" /> </a>

© Jan Herca, 2025

Este trabajo está sujeto a la <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.es" target="_blank" rel="noopener">Licencia Creative Commons Attribution-ShareAlike 4.0.</a>