---
title: Adding footnotes to The Urantia Book in JSON
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
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/en/help/github_book_json">Conversion to JSON</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/en/help">Index</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/en/help/github_topicindex_to_wiki">Converting Topic Index</a></td>
      </tr>
    </tbody>
  </table>
</figure>

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

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub project](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia Foundation](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table">
  <table style="border-bottom:0.2em solid #c8ccd1;border-left:1px solid #c8ccd1;border-right:1px solid #c8ccd1;border-top:1px solid #c8ccd1;table-layout: fixed; width: 100%;">
    <tbody>
      <tr>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/en/help/github_book_json">Conversion to JSON</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/en/help">Index</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/en/help/github_topicindex_to_wiki">Converting Topic Index</a></td>
      </tr>
    </tbody>
  </table>
</figure>