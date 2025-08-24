---
title: Adding footnotes to The Urantia Book in JSON
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
        <td><a href="/en/help/github_book_json">Conversion to JSON</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_book_to_wiki">Converting The Urantia Book</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> This task is currently ended and closed for the 25 languages available.
{.is-info}

## Old procedure (obsolete)

> This procedure has been updated because it was too cumbersome. See below.
{.is-warning}

Adding footnotes to *The Urantia Book* requires to previously complete the following tasks:
- Translation of *Paramony* from English to the target language. The result of this task is a file for each language (`input / json / footnotes-book-xx.json`).
- Previous task of converting *The Urantia Book* from HTML to JSON without footnotes. The result of this task is a set of 197 files in a folder for each language (`input / json / book-xx`).

To add footnotes to JSON files, follow these steps:
- Open *Urantiapedia Tools*.
- In *Process* select: Update Bible Refs in Urantia Book (JSON).
- Folders are automatically filled: for *JSON files* one like `input / json / book-xx`.
- Click *Execute*.
- If everything is correct *Conversion executed successfully* will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the *developer* users the error.

![](/image/help/upt_json_json.png)

The output files are different from the input files to avoid that if there is any problem they are unusable. The output is saved in `input / json / book-xx-footnotes` folders, where `xx` is the language code equal to the one used as the input folder.

## New Procedure

Adding footnotes to *The Urantia Book* requires the following tasks to be completed:
- Translation of *Paramony* from English to the target language. The result of this task is one file for each language (`input/markdown/xx/paramony/The Urantia Book.md`).
- Pre-conversion of *The Urantia Book* from HTML to JSON without footnotes. The result of this task is a set of 197 files in a folder for each language (`input/json/book-xx`).

To add footnotes to JSON files, follow these steps:
- Open *Urantiapedia Tools*.
- In *Process*, select: Update Bible Refs in *The Urantia Book* (MARKDOWN).
- The necessary folders are selected automatically: for *JSON Files*, it will be `input/json/book-xx`.
- Click *Run*.
- If everything is correct, *Conversion completed successfully* will appear. If there are errors, the error list will appear. In this case, it's a good idea to notify one of the "developer" users in case there is a problem with the software.

The output files are different from the input files to prevent them from becoming unusable if there are any problems. The output is saved in the `input/json/book-xx-footnotes` folders, where `xx` is the language code identical to the one used as the input folder.

![](/image/help/upt_md_json.png)

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
        <td><a href="/en/help/github_book_json">Conversion to JSON</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_book_to_wiki">Converting The Urantia Book</a></td>
      </tr>
    </tbody>
  </table>
</figure>