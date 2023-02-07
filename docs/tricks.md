# Tricks to fix converted texts

## Replacements in VS Code

### Steps in order for certain PDF conversions to text

1. Replace hyphenation
    - Search (regex): `-\n`
    - Replace: `(blank)`
2. Replace paragraph separators
    - Search (regex): `^\n`
    - Replace: `%%\n\n`
3. Replace end lines not preceded by %
    - Search (regex): `(?<!%)\n`
    - Replace: `(one space)`
4. Replace %%
    - Search: `%%`
    - Replace: `\n`
5. Replace spaces at beginning
    - Search: `^[ ]+`
    - Replace: `(blank)`

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

* Replace english plain quotes with curly ones:
    - Search (regex): `"([^"]*)"`
    - Replace: `“$1”`
* Replace english curly quotes with spanish angular ones:
    - Search (regex): `“([^”]*)”`
    - Replace: `«$1»`
* Replace spanish plain quotes with angular ones:
    - Search (regex): `"([^"]*)"`
    - Replace: `«$1»`
* Replace LaTeX italics with Markdown
    - Search (regex): `\\textit\{([^\}]*)\}`
    - Replace: `_$1_`
* Urantia references to links
    - Search (regex): `\(\d{1,4}\.\d{1,2}\) (\d{1,3}):(\d{1,2})\.(\d{1,3})`
    - or Search (regex): `\[(\d{1,3}):(\d{1,2})\.(\d{1,3})\]`
    - Replace: `[UB $1:$2.$3](/en/The_Urantia_Book/$1#p$2_$3)`
    - Search (regex): `LU (\d{1,3}):(\d{1,2})\.(\d{1,3})`
    - Replace: `[LU $1:$2.$3](/es/The_Urantia_Book/$1#p$2_$3)`
* Bible references to links
    - Search (regex): `Gn (\d{1,2}):(\d{1,2})`
    - Replace: `[Gn $1:$2](/es/Bible/Genesis/$1#v$2)`
* Bible references that are not already converted to links (better option)
    - Search: `(?<!\[)I Cor. (\d{1,2}):(\d{1,2})`
    - Replace: `[Gn $1:$2](/es/Bible/Genesis/$1#v$2)`
    - Search: `(?<!\[)(\d+):(\d+)([-|,])?(\d+)?`
    - Replace: `[$1:$2$3$4](/en/Bible/Hebrews/$1#v$2)`
* Bible references to links
    - Search (regex): `Luke (\d+):(\d+)-(\d+:?\d+)`
    - Replace: `[Luke $1:$2-$3](/en/Bible/Luke/$1#v$2)`
* Change quotes inside other quotes:
    - Search (regex): `("[^"]*)(")([^"]*)(")([^"]*")`
    - Replace: `$1“$3”$5`
* Remove duplicate lines (requires a previous sorting, see below):
    - Search (regex): `^(.*)(\n\1)+$`
    - Replace: `$1`
* í => ’
* ñ => C
* ì => “
* î => ”
* „  ”
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

omissions in quotes:
* english . . .
* spanish [...]

## Pandoc

Convert Word file to Markdown:
- Open Powershell terminal.
- Ensure Pandoc is installed with `pandoc -h`
- Convert with: `pandoc -t markdown_mmd --extract-media . <word_file>.docx -o <md_file>.md` (it is required to be inside the folder with the files)

## Other tools

* Test regular expressions: https://regex101.com/

* Convert pdf to markdown: https://pdf2md.morethan.io/

* Convert pdf, even scanned pdf, to MS Word: https://www.onlineocr.net/

* Scan books: see HOWTO_scan_books