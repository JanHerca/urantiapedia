---
title: Urantiapedia - Administrators help
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

## About Urantiapedia

[Urantiapedia](https://urantiapedia.org) is a collaborative website based on [Wiki.js](https://js.wiki/) with the purpose of being a unified center for the dissemination of all knowledge regarding *The Urantia Book*.

## About Blue Fields

[Blue Fields](https://blue-fields.netlify.app/) is a website that has been created to join and organize readers of *The Urantia Book* who wish to collaborate in smart, purposeful and altruistic projects all over the world.

## About GitHub

[Urantiapedia](https://github.com/JanHerca/urantiapedia) project on GitHub is a project created to serve as a quick start-up procedure for *Urantiapedia*. It contains files in certain formats and software that help automate the creation of initial content.

## Who is this manual for?

This manual is intended for users called *administrators*, or *admins* for short, users who meet the following requirements:
- registered users with an account in [Blue Fields](https://blue-fields.netlify.app/) and in [GitHub](https://github.com/).
- users who have been authorized as project *admins* by the team that leads the project on [Blue Fields](https://blue-fields.netlify.app/) platform.
- registered users with an account on the [Urantiapedia](https://urantiapedia.org). Only another *admin* user can register a user as a new *admin* user.
- users with a good knowledge on the use of GitHub.
- users with good knowledge of *The Urantia Book* in at least one language in which it is published, and preferably with a good level of the English version.
- users that wish to collaborate in a selfless way in the addition of content related to *The Urantia Book* in the *Urantiapedia*.

*Admin* users are the only ones in charge of uploading changes to the *Urantiapedia* website during the preparation phase. More about project phases in [Help start](/en/help/start).

## Setting up *Urantiapedia Tools*

*Urantiapedia Tools* is a JavaScript desktop app developed with [Electron](https://www.electronjs.org/). To install and execute it follow these steps:

1. It is recommeded the use of [VS Code](https://code.visualstudio.com/).
2. Clone or fork the [GitHub project](https://github.com/JanHerca/urantiapedia).
3. Ensure to have [Node.js](https://nodejs.org/) installed. Open a terminal in VS Code and execute `node -v` to check you have it installed.
4. Ensuring that terminal is opened in root folder of the project install dependencies: `npm install`. Wait until all of them are installed.
5. The project is set up with a default launch configuration. Press F5 to execute or in the terminal execute `npm start`.
6. The application opens. By default a Dev Tools window is opened for debugging. You can ignore it if not developing.

![](/image/uptools.png)

## Workflow

Check more about the project in [Urantiapedia content](/en/help/content).

For each language supported the list of tasks to be carried out is as follows:
1. Translation of *Paramony* from English to the target language.
2. Translation and review of *Topic index* from English to the target language.
3. Obtain a public-domain translation of *The Bible* in the target language.
4. Conversion *The Urantia Book* from HTML to JSON without footnotes.
5. Addition of *Paramony* footnotes to *The Urantia Book* in JSON.
6. Conversion of the *Topic index* from TXT to Wiki.js.
7. Conversion of *The Urantia Book* from JSON with footnotes to Wiki.js including references to topics.
8. Conversion of *The Bible* from LaTeX to Wiki.js with footnotes.
9. Commit changes to [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) project.

*GitHub editors* perform tasks 1-3. *Admins* perform tasks 4-9. We detail each *admin* task in the following sections.

![](/image/formats.png)

## Conversion of *The Urantia Book* from HTML to JSON without footnotes

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

The format of these files is JSON (https://es.wikipedia.org/wiki/JSON). There is a converter in the *Urantiapedia Tools* that then converts this JSON format to the final Wiki.js format.

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

## Adding footnotes to *The Urantia Book* in JSON

Adding footnotes to *The Urantia Book* requires to previously complete the following tasks:
- Translation of *Paramony* from English to the target language. The result of this task is a file for each language (`input / json / footnotes-book-xx.json`).
- Previous task of converting *The Urantia Book* from HTML to JSON without footnotes. The result of this task is a set of 197 files in a folder for each language (`input / json / book-xx`).

To add footnotes to JSON files, follow these steps:
- Open *Urantiapedia Tools*.
- In *Process* select: Update Bible Refs in Urantia Book (JSON).
- Folders are automatically filled: for *JSON files* one like `input / json / book-xx`.
- Click *Execute*.
- If everything is correct *Conversion executed successfully* will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the *developer* users the error.

![](/image/upt_json_json.png)

The output files are different from the input files to avoid that if there is any problem they are unusable. The output is saved in `input / json / book-xx-footnotes` folders, where `xx` is the language code equal to the one used as the input folder.

## Conversion of *Topic Index* from TXT to Wiki.js

The *Topic Index* files in TXT format are created and reviewed by *GitHub editors*. These files should be left in folders like `input / txt / topic-index-xx` where `xx` is the code of the target language.

To convert these TXT files to Wiki.js format, follow these steps:
- Open *Urantiapedia Tools*.
- In *Process* select: Convert Topic Index (TXT) to Wiki.js.
- Folders are automatically filled: for *TXT files* one like `input / txt / topic-index-xx`, for *HTML Files* one like `output / wikijs / xx / topic` (but if `xx` = `en` it is omitted). If output folder do exists create all the path in your project. If there are already Wiki.js files in the output folder, the existing ones will be overwritten.
- In *Topic Categories* select `ALL` to process all the topics of all categories, or alternatively, select only one category to generate only the topics that belong to that category.
- Click *Execute*.
- If everything is correct *Conversion executed successfully* will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the *developer* users the error.

![](/image/upt_txt_wiki.png)

Output files have HTML format. A file will be generated for each topic.

Output files are already in the format that allows uploading directly to *Urantiapedia* using [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) project. See below for that task.

## Conversion of *The Urantia Book* from JSON with footnotes to Wiki.js including references to topics

*The Urantia Book* files in JSON format with the footnotes are generated with the *Update Bible Refs in Urantia Book (JSON)* tool, as we have already seen, and the resulting files are saved in `input folders / json / book-xx-footnotes`.

To convert these JSON files to Wiki.js format, follow these steps:
- Open *Urantiapedia Tools*.
- In *Process* select: Convert Urantia Book (JSON) + Topic Index (TXT) to Wiki.js.
- Folders are automatically filled: for *TXT files*) one like `input / txt / topic-index-xx`, for *JSON files* one like `input / json / book-xx-footnotes`, and for *HTML Files* one like `output / wikijs / xx / The_Urantia_Book` (but if `xx` = `en` it is omitted). If output folder do exists create all the path in your project. If there are already Wiki.js files in the output folder, the existing ones will be overwritten.
- In *Topic Categories* select `ALL` so that when performing the conversion process all topics of all categories are used and links in *The Urantia Book* are added to all topics, or alternatively, select only one category to generate only links to topics that belong to that category.
- Click on *Execute*.
- If everything is correct *Conversion executed successfully* will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the *developer* users the error.

![](/image/upt_json_wiki.png)

Output files have HTML format. 197 files will be generated, one for each paper of *The Urantia Book*.

Output files are already in the format that allows uploading directly to *Urantiapedia* using [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) project. See below for that task.

## Conversion of *Bible* from LaTeX to Wiki.js with footnotes

*Bible* files in LaTeX format must have been created in folders such as `input / text / bible-xx` where `xx` is the code of the target language.

To convert these LaTeX files to Wiki.js format, follow these steps:
- Open *Urantiapedia Tools*.
- In *Process* select: Convert Bible (LaTeX) + Refs (TXT) to Wiki.js.
- Folders are automatically filled: for *TXT files* one like `input / txt / bible-refs-xx`, for *LaTeX Files* one like `input / tex / bible-xx` and for *HTML Files* one like `output / wikijs / xx / Bible` (but if `xx` = `en` it is omitted). If output folder do exists create all the path in your project. If there are already Wiki.js files in the output folder, the existing ones will be overwritten.
- Click *Execute*.
- If everything is correct *Conversion executed successfully* will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the *developer* users the error.

![](/image/upt_tex_wiki.png)

Output files have HTML format. A file will be generated for each chapter of the Bible.

Output files are already in the format that allows uploading directly to *Urantiapedia* using [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) project. See below for that task.

## Commit content

For committing content to Urantiapedia it is used a GitHub project with a full backup of the [Urantiapedia](https://urantiapedia.org) website. The project is here:

[Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup)

This project is synced with the website so from it a full copy of all content of *Urantiapedia* can be retrieved.

To commit content follow these steps:
- Clone or fork the *Urantiapedia-backup* project in GitHub.
- Copy the new content in `output/wikijs` folder of *Urantiapedia* project to root folder in *Urantiapedia-backup* project.
- Do a pull request.
- *Admin* users of GitHub project will merge changes. Once changes are merged, they will be available in the next hours in *Urantiapedia* web page depending on current performance in servers to execute upload jobs.

## Backups

### All site

TODO

### Only database

TODO