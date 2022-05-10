# Tricks to fix converted texts

in VS Code

1. Replace hyphenation
    Search (regex): -\n
    Replace: (blank)
2. Replace paragraph separators
    Search (regex): ^\n
    Replace: %%\n\n
3. Replace end lines not preceded by %
    Search (regex): (?<!%)\n
    Replace: (one space)
4. Replace %%
    Search: %%
    Replace: \n
5. Replace spaces at beginning
    Search: ^[ ]+
    Replace: (blank)

Other replacements: 
í => ’
ñ => —
ì => “
î => ”

Search end of sentences: [\.”\?!] 

## Typings

“ ”  (Alt+q)  ‘ ’
«  » (Alt+w)
—
Ö => ...

omissions in quotes:
* english . . .
* spanish [...]

## Tools

https://pdf2md.morethan.io/
https://www.onlineocr.net/