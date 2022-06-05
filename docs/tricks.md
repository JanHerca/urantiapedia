# Tricks to fix converted texts

in VS Code

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

Other replacements: 
í => ’
ñ => C
ì => “
î => ”


Search end of sentences: [\.”\?!] 
Search by page ref: `"par_pageref": "359.\d+"` in `./input/json/book-e*-footnotes`

## Typings

“ ”  (Alt+q)
«  » (Alt+w)
‘ ’ (Alt+e)
—
Ö => ...
±

omissions in quotes:
* english . . .
* spanish [...]

## Tools

* Test regular expressions: https://regex101.com/

* Convert pdf to markdown: https://pdf2md.morethan.io/

* Convert pdf, even scanned pdf, to MS Word: https://www.onlineocr.net/