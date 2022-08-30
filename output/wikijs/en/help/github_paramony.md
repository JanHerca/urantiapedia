---
title: Translation of Paramony
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_content">Content of GitHub project</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_topicindex">Translation an revision of Topic Index</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Here are described the steps needed to translate the *Paramony* from english to a new language of *Urantiapedia*. This is a task accomplish by "Chief Editors".

The *Paramony* is a file with cross references between *The Bible* and *The Urantia Book*. It has been created in english using a cross-reference relationship developed by Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), converted from its original TXT format to a JSON format that is easier to process.

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
        <td><a href="/en/help/github_content">Content of GitHub project</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_topicindex">Translation an revision of Topic Index</a></td>
      </tr>
    </tbody>
  </table>
</figure>