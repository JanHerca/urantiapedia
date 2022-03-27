---
title: Converting Topic Index from TXT to Wiki.js
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---


The *Topic Index* files in TXT format are created and reviewed by *Chief Editors*. These files should be left in folders like `input / txt / topic-index-xx` where `xx` is the code of the target language.

To convert these TXT files to Wiki.js format, follow these steps:
- Open *Urantiapedia Tools*.
- In *Process* select: Convert Topic Index (TXT) to Wiki.js.
- Folders are automatically filled: for *TXT files* one like `input / txt / topic-index-xx`, for *HTML Files* one like `output / wikijs / xx / topic` (but if `xx` = `en` it is omitted). If output folder do exists create all the path in your project. If there are already Wiki.js files in the output folder, the existing ones will be overwritten.
- In *Topic Categories* select `ALL` to process all the topics of all categories, or alternatively, select only one category to generate only the topics that belong to that category.
- Click *Execute*.
- If everything is correct *Conversion executed successfully* will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the *developer* users the error.

![](/image/upt_txt_wiki.png)

Output files have HTML format. A file will be generated for each topic.

Output files are already in the format that allows uploading directly to *Urantiapedia* using [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) project. Check [Bulk upload content to Urantiapedia](/en/help/github_upload).

## Links

- [Starting with Urantiapedia](/en/help/start)
- [Urantiapedia Content](/en/help/content)
- [Urantiapedia - Languages supported](/en/help/languages)
- [Admin help](/en/help/admin)
- [Developers help](/en/help/devs)
- [Chief Editors help](/en/help/github)
- [Assistant Editors help](/en/help/github_assistant)
- [Urantiapedia status - Current progress of the project](/en/help/status)

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub project](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia Foundation](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)