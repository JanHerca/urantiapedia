---
title: Converting The Urantia Book from HTML to JSON without footnotes
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table">
  <table style="border-bottom:0.2em solid #c8ccd1;border-left:1px solid #c8ccd1;border-right:1px solid #c8ccd1;border-top:1px solid #c8ccd1;table-layout: fixed; width: 100%;">
    <tbody>
      <tr>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/en/help/github_bible">Obtaining The Bible</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/en/help">Index</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/en/help/github_footnotes">Adding Paramony footnotes</a></td>
      </tr>
    </tbody>
  </table>
</figure>

The input files in HTML format must be in the `input / html / book-xx` folders, where `xx` are the two letters of the language (`es` = Spanish, `en` = English, etc.)

> IMPORTANT: HTML files as are downloaded from the [Urantia Foundation](https://www.urantia.org/urantia-book/download-text-urantia-book) official website may have some problems to be processed and require to add small changes to help in the process of conversion to JSON format.

Once the files have been downloaded from the *Urantia Foundation* website, there should be one file (.html) for each document of *The Urantia Book*, a total of 197 files. The name of each file with each document must meet the pattern that the last three characters of the name are the document number, from 000 to 196 for the conversion to work later. For example, in French the file with document 1 is called `06-Fascicule001.html`; the same file in Bulgarian is called `06-Документ001.html`.

Since in HTML format *The Urantia Book* can adopt different HTML tags for what is considered the title of the document, the title of a section, etc., in the app that performs the conversion may be necessary to include some changes when adding a new language. This work will be done by the *developer* users, in charge of the development of the *Urantiapedia Tools*. This software is developed in Javascript and the code is in the `app` folder of the project.

Files for a total of 24 languages ​​are currently available: Bulgarian (`book-bg`), Czech (` book-cs`), Danish (`book-da`), German (` book-de`), Greek (`book- el`), English (`book-en`), Spanish (` book-es`, `book-es-1993` and soon` book-es-2021`), Estonian (`book-et`), Farsi (`book-fa`), Finnish (` book-fi`), French (`book-fr`), Hebrew (` book-he`), Hungarian (`book-hu`), Indonesian (` book-id `), Italian (` book-it`), Japanese (`book-ja`), Korean (` book-ko`), Lithuanian (`book-lt`), Dutch (` book-nl`), Polish ( `book-pl`), Portuguese (` book-pt`), Romanian (`book-ro`), Russian (` book-ru`), and Swedish (`book-sv`). These files have already been modified and processed so that the JSON conversion program works correctly with them, and the resulting JSON files are also available.

Farsi translation is currently in process and not all documents are available.

It should be borne in mind that there are currently three translations in the Spanish language. All three translations are going to be available on *Urantiapedia*. For that reason there will be these folders:
- `book-es`, with the so-called European translation, made in 2009;
- `book-es-1993`, with the first Spanish translation made in 1993;
- `book-es-2021`, with the new translation made in 2021.

To convert files from HTML to JSON without footnotes, follow these steps:
- Open the *Urantiapedia Tools*.
- In *Process* select: Convert Urantia Book (HTML) to JSON.
- Folders are automatically filled: for *HTML Files* one like `input / html / book-xx` and for *JSON files* one like `input / json / book-xx`.
- Click *Execute*.
- If everything is correct *Conversion executed successfully* will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the *developer* users the error.

![](/image/upt_html_json.png)

The resulting files in JSON format will be saved in the `input / json / book-xx` folder, where` xx` are the two letters of the language (`es` = Spanish, `en` = English, etc.)

> IMPORTANT: These files should not be generated or edited by users manually. They should always be created by conversion from the HTML format.

There will be one file for each *The Urantia Book* document, a total of 197 files. The files are named `DocXXX.json`, where` XXX` is the document number from `000` to` 196`.

The format of these files is JSON (https://en.wikipedia.org/wiki/JSON). There is a converter in the *Urantiapedia Tools* that then converts this JSON format to the final Wiki.js format.

The structure of the JSON files is this:

```json
{
    "paper_index": "<paper index, 0 to 196>",
    "sections": [
        {
            "section_index": "<section index, 0 if exists to N>",
            "section_ref": "<section ref text, as “0:0”>",
            "section_title": "<section title for not zero sections>",
            "pars": [
                {
                    "par_ref": "<par ref, as “0:0.1”>",
                    "par_pageref": "<par ref by page, as “1.1”>",
                    "par_content": "<par content. See format below>"
                },
                {

                }
            ]
        },
        {

        }
    ],
    "footnotes": [
        "<array of footntoes with Bible refs>"
    ],
    "paper_title": "<paper title, without Paper X, just title>"
}
```
In the JSON files resulting from this task, the `footnotes` section will be empty. To complete it, the following task must be executed.

To format the text of the paragraph with some strange characters that appear in *The Urantia Book* in the JSON files these equivalents are used:

Character type | How they are written
--- | ---
Italic | * * (between asterisks)
Small caps | $ $ (between dollar signs)
Underline (for languages ​​that do not include italic option) | \| \| (between plecas)

<br>

<figure class="table">
  <table style="border-bottom:0.2em solid #c8ccd1;border-left:1px solid #c8ccd1;border-right:1px solid #c8ccd1;border-top:1px solid #c8ccd1;table-layout: fixed; width: 100%;">
    <tbody>
      <tr>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/en/help/github_bible">Obtaining The Bible</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/en/help">Index</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/en/help/github_footnotes">Adding Paramony footnotes</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub project](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia Foundation](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)