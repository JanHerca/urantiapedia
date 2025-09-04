---
title: Urantiapedia - Workflow for creating initial content in a language
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
        <td><a href="/en/help/github_edit_local">GitHub Project Contents</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_paramony">Paramony Translation</a></td>
      </tr>
    </tbody>
  </table>
</figure>

For each language to be incorporated into *Urantiapedia*, the following will be used as a starting point. _input_: 
- An official translation of *The Urantia Book*, or the original English version, in HTML format. This content will be placed in the `input/html/book-xx` folder of the GitHub project, where `xx` is the two-letter language code (`es` = Spanish, `en` = English, etc.). In the case of the Spanish language, since there are several translations, `book-es` will contain the so-called European edition, `book-es-1993` the 1993 translation, and `book-es-2021` the 2021 translation. If this situation of several translations were to occur in the future in other languages, a similar convention would be adopted. 
- A royalty-free translation of *The Bible* that is as standard as possible in the language in question. The format will be LaTeX and the files will be placed in the `input/tex/bible-xx` folder of the GitHub project, where `xx` is the language code. 
- A copy of the *Paramony* in Spanish (the idea is that it serves as a guide for the translation, the Spanish content is the least important) that is located in `input/markdown/es/paramony`. The *Paramony* are some of the cross-references between the *Bible* and *The Urantia Book* that are located in `input/markdown/en/paramony`. It has been created using the cross-reference relationship developed by Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), converted from its original TXT format to a Markdown format that is easier to process. In the English folder are the tables with all the original information; in the folders for the rest of the languages ​​there are simply the tables with the texts that are translated.
- A copy of the English language *Index of Terms*. This index is a collection of files located in the `input/txt/topic-index-en` folder. These TXT files were obtained from the appendix to the *Urantia Fellowship* edition of *The Urantia Book* ([Topic Index](https://urantia-book.org/urantiabook/topical_index/index.htm)), which will be referred to hereafter as the *Index of Terms*. This *Index of Terms* has been converted to a set of TXT files, one for each letter of the alphabet, containing terms beginning with each English letter. The copy should be renamed by changing the last two letters to the language code. For example, for French, a copy of the English folder should be created and called `input/txt/topic-index-fr`. 

In summary, for the French language example the content to be created as input would be: 

```
input 
    html 
        book-fr 
            *.html 
    markdown 
        fr 
            paramony 
                *.md 
    tex 
        bible-fr 
            *.tex 
    txt 
        topic-index-fr 
            *.txt 
```
For any other language, this would be done in a similar way. Some of this content may already be available in the current GitHub project. It is a good idea to review the existing content before incorporating new content. 

The result that the previous content in French would generate would be as follows: 

```
output 
    wikijs 
        fr 
            Bible 
                (folders with the books of the Bible) 
                    *.html 
            index 
                *.html 
            The_Urantia_Book 
                *.html 
            The_Urantia_Book_Multiple
                *.html 
            topic 
                *.html 
```

Once the folders and files are organized as indicated, each of the tasks necessary to create the final files will be carried out using the *Urantiapedia Tools* and some hand editing. This is detailed in the following pages of this manual.

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_edit_local">GitHub Project Contents</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_paramony">Paramony Translation</a></td>
      </tr>
    </tbody>
  </table>
</figure>