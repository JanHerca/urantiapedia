# Tricks to fix converted texts

## Replacements in VS Code

### Steps in order for certain PDF conversions to text

1. Replace hyphenation: `-\n` => `(blank)`
2. Replace paragraph separators: `^\n` => `%%\n\n`
3. Replace end lines not preceded by %: `(?<!%)\n` => `(one space)`
4. Replace %%: `%%` => `\n`
5. Replace spaces at beginning: `^[ ]+` => `(blank)`

### Translation (with Google Translator) of Markdown articles to Spanish 

* Info blockquotes: 
    * `{es-info}` => `{.is-info}`
    * `{.es-info}` => `{.is-info}`
* UB links:
    * `[UB` => `[LU`
    * `/en/` => `/es/`
    * `/El_Libro_de_Urantia/ ` => `/The_Urantia_Book/`
    * `/El_Libro_de_Urantia/` => `/The_Urantia_Book/`
    * `/El Libro de Urantia/` => `/The_Urantia_Book/`
    * `(\d)–(\d)` => `$1-$2` (do not apply this outside links)
* `_El libro de Urantia_` => `_El Libro de Urantia_`
* `. . .` => `...`
* `Artículo obtenido de:` => `Artículo traducido. El original fue obtenido de:`
* Images:
    * `<figura` => `<figure`
    * `="Figura` => `="Figure`
    * `clase="` => `class="`
    * `="imagen` => `="image`
    * `</figura>` => `</figure>`
* Quotes (see below in other replacements)

### Conversion of study aids

* Steps to convert Urantia Book links:
    * `\[\(\d+.\d+\)` => `[UB`
    * `https://www.urantia.org/urantia-book-standardized/paper-(\d+).+#U\d+_(\d+)_(\d+)` => `/en/The_Urantia_Book/$1#p$2_$3`
    * `\[\([\d|:|\.|-]+\)*[ |\d|:|\.|-]+\]\(https://www.urantia.org/fr/le-livre-d-urantia/[\w|\d|-]+#U(\d+)_(\d+)_(\d+)\)` => `[LU $1:$2.$3](/fr/The_Urantia_Book/$1#p$2_$3)`
* Steps to convert Bible links:
    * `https://biblehub.com/niv` => `/en/Bible`
    * `https://biblehub.com` => `/en/Bible`
    * `/en/Bible/(\d)_(.)` => `/en/Bible/$1_\U$2`
    * `/en/Bible/(.)` => `/en/Bible/\U$1`
    * `(\d+)-(\d+).htm\)` => `$1#v$2)`
* Other conversions:
    * `> \*` => `*`
    * `> \n` => `(empty)`
    * `> (\d+)\\.` => `$1.`
    * `> > ([a-zA-Z]).` => `\t- $1.`
    * `\*\*REFERENCE\*\*:\[` => `**REFERENCE**: [`
    * `^(.+) \*\*REFERENCE\*\*: \[(.+)\]\((.+)\) — (.+)` => `### $1 $2 — $4\n\n**REFERENCE**: [$2]($3) — $4`
    * `\*\*(.+) (\d+):(\d+)\*\*.` => `**[$1 $2:$3](/en/Bible/$1/$2#v$3)**.`
* Roman numerals as heading 3: `^((?=[XVI])(X{0,3})(I[XV]|V?I{0,3}))\.` => `### $1.`
* Latin letters as heading 4: `^([A-Z])\.` => `#### $1.`
* Old UB references: `\(\d+[.\d]*\)`

### Other replacements

* Replace english plain quotes with curly ones: `"([^"]*)"` => `“$1”` or `'([^']*)'` => `‘$1’`
* Replace english curly quotes with spanish angular ones: `“([^”]*)”` => `«$1»`
* Replace spanish plain quotes with angular ones: `"([^"]*)"` => `«$1»`
* Replace LaTeX italics with Markdown: `\\textit\{([^\}]*)\}` => `_$1_`
* HTML links to Markdown links: `<a href="(.+)">(.+)</a>` => `[$2]($1)`
* Urantia references to links
    - `\(\d{1,4}\.\d{1,2}\) (\d{1,3}):(\d{1,2})\.(\d{1,3})` or 
    - `\[(\d{1,3}):(\d{1,2})\.(\d{1,3})\]` or 
    - `(\d{1,3}):(\d{1,2})\.(\d{1,3}), \d{1,4}\.\d{1,2}` or
    - `LU (\d{1,3}):(\d{1,2})\.(\d{1,3})` => 
    - `[UB $1:$2.$3](/en/The_Urantia_Book/$1#p$2_$3)` or 
    - `[LU $1:$2.$3](/es/The_Urantia_Book/$1#p$2_$3)`
* Bible references to links: `Gn (\d{1,2}):(\d{1,2})` => `[Gn $1:$2](/es/Bible/Genesis/$1#v$2)`
* Bible references that are not already converted to links (better option)
    - `(?<!\[)I Cor. (\d{1,2}):(\d{1,2})` => `[Gn $1:$2](/es/Bible/Genesis/$1#v$2)`
    - `(?<!\[)(\d+):(\d+)([-|,])?(\d+)?` => `[$1:$2$3$4](/en/Bible/Hebrews/$1#v$2)`
* Bible references to links: `Luke (\d+):(\d+)-(\d+:?\d+)` => `[Luke $1:$2-$3](/en/Bible/Luke/$1#v$2)`
* Change quotes inside other quotes: `("[^"]*)(")([^"]*)(")([^"]*")` => `$1“$3”$5`
* Remove duplicate lines (requires a previous sorting, see below): `^(.*)(\n\1)+$` => `$1`
* `í` => `’`
* `ñ` => `C`
* `ì` => `“`
* `î` => `”`
* `„  ”`
* Search end of sentences: [\.”\?!] 
* Search by page ref: `"par_pageref": "359.\d+"` in `./input/json/book-e*-footnotes`
* Search existing old UB refs: `\(\d{1,4}(\.\d{1,2})?\)`
* Search existing new UB refs: `(\d{1,3}):(\d{1,2})(\.\d{1,3})?(-\d{1,3})?`


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
- —
- Ö => ...
- ±
- °
- Superscript: 10^5^
- Subscript: H~2~O

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

## Sample of Markdown article header

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

## Sample of Markdown image

<figure id="Figure_2" class="image urantiapedia image-style-align-right">
<img src="/image/article/Dave_Holt/In_Search_of_the_Historical_Onamonalonton/image02.png">
<figcaption><em> Mt Shasta, Mt Shasta, California.</em></figcaption>
</figure>

image-style-align-right

How to preview images in a Markdown: replace `src="/image` with `src="../../../output/wikijs/image` using as many `../` as needed. Do not forget to remove later.

<br style="clear:both;"/>

<p style="text-align:center;">

### Markdown images to HTML

`!\[(.+)\]\((.+) "(.+)"\)` =>

`<figure id="Figure_1" class="image urantiapedia image-style-align-left" alt="$1">`
`<img src="$2">`
`<figcaption><em>$3</em></figcaption>`
`</figure>`

`!\[(.+)\]\((.+)\)` => 

`<figure id="Figure_1" class="image urantiapedia image-style-align-left" alt="$1">`
`<img src="$2">`
`</figure>`

`!\[\]\((.+)\)` =>

`<figure id="Figure_1" class="image urantiapedia image-style-align-left">`
`<img src="$1">`
`</figure>`

## Google Translator common fails

### From English to Spanish

- `receptores` instead of `síndicos` (about Melchisedeks)
- `ya menudo` instead of `y a menudo`
- `oa` instead of `o a`
- `Rodan` instead of `Rodán`
- `Nathaniel` instead of `Natanael`
- `Ajustador de pensamiento` instead of `Ajustador del Pensamiento`
- `Ajustador del pensamiento` instead of `Ajustador del Pensamiento`
- `Peter` instead of `Pedro` (about the apostle)
- `John` instead of `Juan` (about the apostle or the Baptist)
- `Apocalipsis` instead of `la revelación` (about The Urantia Book itself)
- `Bethpage` instead of `Betfagé` (`Bethpage` in fact should be `Bethphage`)
- 