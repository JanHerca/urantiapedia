---
title: Urantiapedia - Content of GitHub project
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_edit_local">Working locally on your PC</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_initial_flow">Workflow for creating initial content in a language</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Organization of the *Urantiapedia* project on 

GitHub The folders that make up the *Urantiapedia* project on Github are these: 
- **.vscode**: configuration files for Visual Studio Code, which is the development IDE for *Urantiapedia Tools*. 
- **app**: JavaScript source code files for the *Urantiapedia Tools* application. 
- **css**: some CSS files to better display the Markdown files. 
- **docs**: some documents about the project, although the main help is in `output/wikijs/help`. 
- **input**: main folder containing the input files used to generate many pages of the *Urantiapedia*. 
  - **html**: folder with files in HTML format. 
    - **book-xx**: *The Urantia Book* in its different translations in original HTML format obtained from the *Urantia Foundation* (`book-es`, `book-en`, etc.) 
  - **json**: folder with files in JSON format. 
    - **book-xx**: *The Urantia Book* in its different translations in JSON format, but without the footnotes of the *Paramony* (`book-es`, `book-en`, etc.) 
    - **book-xx-footnotes**: *The Urantia Book* in its different translations in JSON format, but with the footnotes of the *Paramony* (`book-es-footnotes`, `book-en-footnotes`, etc.) 
    - **footnotes-book-xx.json** `DEPRECATED`: old version of the *Paramony* in JSON format. 
  - **kml**: KML and CSV files used to generate the maps, each one inside a folder for each language (`en`, `es`, etc.). 
  - **markdown** / **xx** (`en`, `es`, etc.):  
    - **paramony**: contains the latest version of the Paramony. Previously, JSON files were used, but now Markdown files are used. The English language files contain the main tables; the other language files are just translations.
    - **other folders**: Temporary Markdown files for articles and books as obtained from a conversion from PDF/DOCX formats or by scanning, each inside a folder for each language (`en`, `es`, etc.).The contents of this folder will not be persisted over time as it is corrected and moved to the output folder.
    - **3dmodels_catalog.md**: 3D models catalog. The English language file contains the main tables; the other language files are just translations. 
    - **image_catalog.md**: Image catalog. The English language file contains the main tables; the other language files are just translations. 
    - **map_catalog.md**: Map catalog. The English language file contains the main tables; the other language files are just translations. 
    - **paralells.md** : General catalog of parallels between _The Urantia Book_ and the rest of the content (articles, Bible, other books, etc.). 
  - **mediawiki** `DEPRECATED`: Folder with old content in Wikitext format for MediaWiki. The first version of *Urantiapedia* was made with MediaWiki but the current one is created with *Wiki.js*. 
    - **articles-xx**: Deprecated folders with examples of articles in Wikitext format. 
    - **main-pages-xx**: Deprecated folders with help content in Wikitext format. 
    - **modules**: Modules written in Lua, the scripting language for creating MediaWiki templates. 
    - **sample**: Old sample content in Wikitext format. 
    - **templates**: Templates for the *Urantipedia*, which are reusable fragments in MediaWiki format. 
  - **svg**: Some SVG files. 
  - **tex**: Folder with files in LaTeX format. 
    - **bible-xx**: *The Bible* in each of its translations in LaTeX format (`bible-es`, `bible-en`, etc.) 
  - **txt**: Folder with files in TXT format. 
    - **articles-xx**: Some sample articles in TXT format (`articles-es`,`articles-en`, etc.). 
    - **bible-refs-xx** `DEPRECATED`: Old version of the _Paramony_ (Bible cross-references to _The Urantia Book_) in TXT format (`bible-refs-es`, `bible-refs-en`, etc.). 
    - **books-xx** : Catalogs of books for the Urantiapedia Library.
    - **topic-index-xx**: *Index of terms* translated into each language in TXT format (`topic-index-es`, `topic-index-en`, etc.)  
- **output**: folder with the output files that will be uploaded en masse to the *Urantipedia* website. 
  - **wikijs**: Folder containing content in formats supported by *Wiki.js*. 
    - **xx**: Content for each language in its own folder (`en`, `es`, etc.). The structure for each language is the same, and is as follows:
      - **3dmodel**: Media Library (3D models). 
      - **article**: Newspaper Library (Articles and Study Aids), organized in folders by author. Usually in Markdown format. 
      - **Bible**: Contents of the Bible. :warning: IMPORTANT: files in this folder *should not be edited*. Instead, edit the files in the `input` folder and then use *Urantiapedia Tools*. 
      - **book**: Book Library, organized in folders by author. Usually in Markdown format. 
      - **help**: Urantiapedia help pages. In Markdown format.
      - **image**: Images from the site. 
      - **index**: Indexes. :warning: IMPORTANT: Some, but not all, files in this folder *should not be edited*. Instead, use *Urantiapedia Tools* to generate them. 
      - **map**: Map Library. For now, they are in Markdown format with an *iframe* pointing to Google Maps, but in the future only KML files will be stored here. 
      - **news**: Monthly project updates in Markdown format. 
      - **slides**: Media Library (Presentations). 
      - **tests**: Pages where you can test future content. 
      - **The_Urantia_Book** and **The_Urantia_Book_Multiple**: Urantia Book documents. :warning: IMPORTANT: Files in this folder *should not be edited*. Instead, edit the files in the `input` folder and then use *Urantiapedia Tools*. 
      - **topic**: Encyclopedia. :warning: IMPORTANT: Files in this folder *should not be edited*. Instead, edit the files in the `input` folder and then use *Urantiapedia Tools*. 

Folders marked *deprecated* can be ignored as they contain material that is no longer used in the process and will likely be removed in the future. 

Language codes to be used for folders should follow the ISO 639-1 standard with two letters for each language. https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes 

When generating content for a new language, the folders to worry about are: 
- `input/html` 
- `input/json` 
- `input/markdown` 
- `input/tex` 
- `input/txt` 

It is worth keeping in mind that there are currently three translations for the Spanish language. All three translations will be available on *Urantiapedia*. For that reason there will be these folders: 
- `book-es`, with the so-called European translation, made in 2009; 
- `book-es-1993`, with the first Spanish translation made in 1993; 
- `book-es-2021`, with the new translation done in 2021.

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub project](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia Foundation](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_edit_local">Working locally on your PC</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_initial_flow">Workflow for creating initial content in a language</a></td>
      </tr>
    </tbody>
  </table>
</figure>