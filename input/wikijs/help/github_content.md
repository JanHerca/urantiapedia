---
title: Urantiapedia - Content of GitHub project
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

## Folders in *Urantiapedia* project on GitHub

The folders that comprises *Urantiapedia* project on Github are these:
- **.vscode**: configuration files for Visual Studio Code, the software used to develop *Urantiapedia Tools*.
- **app**: source code files in JavaScript with *Urantiapedia Tools* application.
- **css**: some CSS files to show Markdown files better.
- **docs**: project documentation.
- **input**: main folder containing input files used to generate *Urantiapedia* pages for a language. This is the only folder that "Chief Editors" should modify in the project.
    * **html**: folder with files in HTML format.
        * **book-xx**: *The Urantia Book* translations in original HTML from *Urantia Foundation* (`book-en`,` book-en`, etc.)
    * **json**: folder with files in JSON format.
        * **book-xx**: *The Urantia Book* translations in JSON format, without *Paramony* footnotes (`book-en`,` book-en`, etc.)
        * **book-xx-footnotes**: *The Urantia Book* translations in JSON format and with *Paramony* footnotes (`book-en-footnotes`,` book-en-footenotes`, etc.)
        * **footnotes-book-xx.json**: *Paramony* footnotes in JSON format.
    * **mediawiki** [`DEPRECATED`]: folder with old files in Wikitext format for MediaWiki. First version of *Urantiapedia* was made for MediaWiki but current one is created with *Wiki.js*.
        * **articles-xx**: old folders for article samples in Wikitext format.
        * **main-pages-xx**: old folders with help content in Wikitext format.
        * **modules**: modules written in Lua, the scripting language with which to create templates for MediaWiki.
        * **sample**: old sample content in Wikitext format.
        * **templates**: templates for the *Urantipedia*, which are fragments in MediaWiki format that can be reused.
    * **tex**: folder with the files in LaTeX format.
        * **bible-xx**: *Bible* translations in LaTeX format (`bible-es`,` bible-en`, etc.)
    * **txt**: folder with the files in TXT format.
        * **articles-xx**: some sample articles in TXT format.
        * **bible-refs-xx** [`DEPRECATED`]: old folder with *Paramony*. This content is no longer required.
        * **topic-index-xx**: *Topic Index* translations in TXT format (`topic-index-es`,` topic- index-en`, etc.)
    * **wikijs**: folder with some input content for *Wiki.js* that is created manually.

Folders tagged as deprecated can be ignored because contain material that is no longer being used in the process and will surely be eliminated in the future.

The language codes to be used in the folders must follow the ISO 639-1 standard with two letters for each language. https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

The only folders "Chief Editors" need to worry about are the following:
- `input/html`
- `input/json`
- `input/tex`
- `input/txt`

It should be borne in mind that there are currently three translations in the Spanish language. All three translations are going to be available on *Urantiapedia*. For that reason there will be these folders:
- `book-es`, with the so-called European translation, made in 2009;
- `book-es-1993`, with the first Spanish translation made in 1993;
- `book-es-2021`, with the new translation made in 2021.

## Content workflow

For each language to be incorporated in *Urantiapedia*, the following input will be used:
- An official translation of *The Urantia Book*, or the original for English, in HTML format. This content will be left in the `input/html/book-xx` folder of the project on GitHub, where `xx` is the two-letter code for the language (`es` = Spanish, `en` = English, etc.). In the case of the Spanish language, since there are several translations, `book-es` will contain the so-called European edition, `book-es-1993` the 1993 translation, and `book-es-2021` the 2021 translation.
- A copyright-free translation of *The Bible*, as standard as possible, and in the language in question. The format will be LaTeX and the files will be left in the `input/tex/bible-xx` folder of GitHub project, where `xx` is the language code.
- A copy of *Paramony* footnotes in English. This is a file with cross references between *The Bible* and *The Urantia Book* located in `input/json/footnotes-book-en.json`. It has been created using a cross-reference relationship developed by Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), converted from its original TXT format to a JSON format that is easier to process. The copy must be renamed modifying the last two letters by those of the language code. For example, for French, create a copy of the file in English and call that copy as `input/json/footnotes-book-fr.json`.
- A copy of the *Topic Index* in English language. This index is made up of a collection of files found in `input/txt/topic-index-en` folder. These TXT files are derived from the appendix of *Urantia Fellowship* edition of *The Urantia Book* ([Topic Index](https://urantia-book.org/urantiabook/topical_index/index.htm)), which we will refer to hereinafter as *Topic Index*. This *Topic Index* has been converted to a group of TXT files, one for each letter of the alphabet, with topics that begin with each letter in English. The copy must be renamed modifying the last two letters by those of the language code. For example, for French, create a copy of the English folder and call that copy as `input/txt/topic-index-fr`.

In summary, for the French language example, the content to create as input would be:

```
input
    html
        book-fr
            *.html
    json
        footnotes-book-fr.json
    tex
        bible-fr
            *.tex
    txt
        topic-index-fr
            *.txt
```
For any other language it would be done in a similar way. Some of this content may already be available in the current project on GitHub. It is convenient to review what exists before adding new content.

## Links

- [Starting with Urantiapedia](/en/help/start)
- [Urantiapedia Content](/en/help/content)
- [Urantiapedia - Languages supported](/en/help/languages)
- [Admin help](/en/help/admin)
- [Developers help](/en/help/devs)
- [Chief Editors help](/en/help/github)
- [Urantiapedia status - Current progress of the project](/en/help/status)

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub project](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia Foundation](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)