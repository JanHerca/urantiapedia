---
title: Converting The Urantia Book from JSON with footnotes to Wiki.js including references to topics
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
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/en/help/github_topicindex_to_wiki">Converting Topic Index</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/en/help">Index</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/en/help/github_bible_to_wiki">Converting Bible</a></td>
      </tr>
    </tbody>
  </table>
</figure>

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

Output files are already in the format that allows uploading directly to *Urantiapedia* using [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) project. Check [Bulk upload content to Urantiapedia](/en/help/github_upload).

<figure class="table">
  <table style="border-bottom:0.2em solid #c8ccd1;border-left:1px solid #c8ccd1;border-right:1px solid #c8ccd1;border-top:1px solid #c8ccd1;table-layout: fixed; width: 100%;">
    <tbody>
      <tr>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/en/help/github_topicindex_to_wiki">Converting Topic Index</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/en/help">Index</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/en/help/github_bible_to_wiki">Converting Bible</a></td>
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