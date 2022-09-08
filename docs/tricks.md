# Tricks to fix converted texts

## Replacements in VS Code

Steps in order for certain PDF conversions to text:
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

Other replacements:
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
    - Search (regex): `LU (\d{1,3}):(\d{1,2})\.(\d{1,3})`
    - Replace: `[LU $1:$2.$3](/es/The_Urantia_Book/$1#p$2_$3)`
* Bible references to links
    - Search (regex): `Gn (\d{1,2}):(\d{1,2})`
    - Replace: `[Gn $1:$2](/es/Bible/Genesis/$1#v$2)`
* Change quotes inside other quotes:
    - Search (regex): `("[^"]*)(")([^"]*)(")([^"]*")`
    - Replace: `$1“$3”$5`
* Remove duplicate lines (requires a previous sorting, see below):
    - Search (regex): `^(.*)(\n\1)+$`
    - Replace: `$1`

Other replacements: 
í => ’
ñ => C
ì => “
î => ”

„  ”

Search end of sentences: [\.”\?!] 
Search by page ref: `"par_pageref": "359.\d+"` in `./input/json/book-e*-footnotes`


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

## Other tools

* Test regular expressions: https://regex101.com/

* Convert pdf to markdown: https://pdf2md.morethan.io/

* Convert pdf, even scanned pdf, to MS Word: https://www.onlineocr.net/

* Scan books: see HOWTO_scan_books