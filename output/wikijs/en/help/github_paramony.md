---
title: Translation of Paramony
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
        <td><a href="/en/help/web_html_editor">Using the HTML editor</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_bible">Obtaining The Bible</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> This task is currently ended and closed for the 25 languages available.
{.is-info}

Here are described the steps needed to translate the *Paramony* from english to a new language of *Urantiapedia*. This is a task accomplish by “Editors-in-Chief”.

The *Paramony* is a file with cross references between *The Bible* and *The Urantia Book*. It has been created in english using a cross-reference relationship developed by Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), converted from its original TXT format to a JSON format that is easier to process.

## Old procedure (obsolete)

> This procedure has been updated because it was too cumbersome. See below.
{.is-warning}

We start from the English version of *Paramony* found in `input/json/footnotes-book-en.json`. Make a copy of it and change the name to the target language.

The *Paramony* file contains footnotes (with references to *The Bible*) to be included in each *Urantia Book* document.

You have to translate the sections marked as texts (`texts`), as well as update the abbreviations of the *The Bible* books with a replace operation.

The structure of the JSON file is a three column table. For each document in *The Urantia Book* there is a section in the file that contains the document index (`paperIndex`) and a subsection (`footnotes`) that contains three columns:
- the first one is the texts (`texts`) that appear in the footnote.
- the second is the biblical references (`bible_refs`) that correspond to each text.
- the third are the references to the paragraph and sentence within the paragraph of *The Urantia Book* (`locations`). The pattern of these references is `x:y.z#n`, where `x:y.z` is the paragraph reference and `n` indicates the sentence within the paragraph where the note is found, starting with the first sentence ending with a period as sentence 0 and so on.

This way of presenting the texts makes it simpler to copy and paste them into a translator like Google Translator and then paste the translation result again.

Example of a snippet:

```json
{
    "content": [
        {
            "paperIndex": 0,
            "footnotes": {
                "texts" : [
                    [
                        "Spirit light"
                    ],
                    [
                        "Paradise Trinity",
                        "Paradise Trinity (Paul's early view)"
                    ]
                ],
                "bible_refs": [
                   [
                        "Ezk 7:55; Is 9:2; Mt 4:16; Mt 5:14-16; Lk 1:79; Lk 2:32; Jn 1:4-9; Jn 3:19-21; Jn 8:12; Jn 9:5; Jn 12:46; 1 Jn 1:5; 1 Jn 2:8"
                    ],
                    [
                        "Mt 28:19; Acts 2:32-33; 2 Co 13:14; 1 Jn 5:7",
                        "1 Co 12:4-6"
                    ]
                ],
                "locations": [
                    "0:6.9#0",
                    "0:12.2#0"
                ]
            }
        }
    ]
}
```

> Care must be taken to properly copy the quotation marks that may exist in the texts. Check here the valid quotes for each language: [Quotation marks](/en/help/languages).

## New Procedure

We start from an existing translation of *Paramony*, for example the Spanish translation, located in `input/markdown/es/paramony`. A copy of this folder must be made inside `input/markdown/xx` where `xx` is the target language code. For example, if the target language is Arabic, the `paramony` folder should be copied to `input/markdown/ar`.

*Paramony* contains the footnotes (with references to *The Bible*) that must be included in each *The Urantia Book* document.

In the `paramony` folder, there are two files: `Bible.md` and `The Urantia Book.md`, containing the translations of *Paramony* for the *Bible* and *The Urantia Book*, respectively. Each file has a very simple two-column table structure in Markdown format. All you have to do is make a temporary copy of these two files and delete the contents of the `translation` column, leaving only the first `text` column, as well as the slash characters (`|`) and the header. In other words, we create temporary files containing only the English text separated into lines. Then, we just have to translate the two temporary files with an automatic translator like Google Translator, and then copy the translation after each line. Visual Studio Code has options for selecting and copying text that make this task very fast, although keep in mind that these are very long files, and it's not a good idea to copy and paste more than 1,000 lines at a time.

The final result should look like the one shown in this snippet (for example, for Spanish):

```md
| text                                        | translation                             |
| --------------------------------------------| ----------------------------------------|
| “Amen” as ritual                            | «Amen» como ritual                      |
| “Blind” man converted                       | La conversión del hombre «ciego»        |
| “Blind” man's speech                        | El discurso del hombre «ciego»          |
| “By what authority do you do these things?” | «¿Con qué autoridad haces estas cosas?» |
| “Children of light”                         | «Hijos de la luz»                       |
```
This procedure has the advantage over the old one in that the translator does not have to handle strange characters typical of JSON; the only thing we translate here are plain texts separated into lines, which greatly facilitates and speeds up the task.

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
        <td><a href="/en/help/web_html_editor">Using the HTML editor</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_bible">Obtaining The Bible</a></td>
      </tr>
    </tbody>
  </table>
</figure>