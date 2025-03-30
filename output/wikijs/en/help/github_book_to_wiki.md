---
title: Converting The Urantia Book from JSON with footnotes to Wiki.js including references to topics
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
        <td><a href="/en/help/github_topicindex_to_wiki">Converting Encyclopedia</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_bible_to_wiki">Converting Bible</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> This task is currently ended and closed for the 25 languages available.
{.is-info}

*The Urantia Book* files in JSON format with the footnotes are generated with the *Update Bible Refs in Urantia Book (JSON)* tool, as we have already seen, and the resulting files are saved in `input folders / json / book-xx-footnotes`.

To convert these JSON files to Wiki.js format, follow these steps:
- Open *Urantiapedia Tools*.
- In *Process* select: Convert Urantia Book (JSON) + Encyclopedia (TXT) to Wiki.js.
- Folders are automatically filled: for *TXT files*) one like `input / txt / topic-index-xx`, for *JSON files* one like `input / json / book-xx-footnotes`, and for *HTML Files* one like `output / wikijs / xx / The_Urantia_Book` (but if `xx` = `en` it is omitted). If output folder do exists create all the path in your project. If there are already Wiki.js files in the output folder, the existing ones will be overwritten.
- In *Topic Categories* select `ALL` so that when performing the conversion process all topics of all categories are used and links in *The Urantia Book* are added to all topics, or alternatively, select only one category to generate only links to topics that belong to that category.
- Click on *Execute*.
- If everything is correct *Conversion executed successfully* will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the *developer* users the error.

![](/image/help/upt_json_wiki.png)

Output files have HTML format. 197 files will be generated, one for each paper of *The Urantia Book*.

Output files are already in the format that allows uploading directly to *Urantiapedia* using [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) project. Check [Bulk upload content to Urantiapedia](/en/help/github_upload).

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
        <td><a href="/en/help/github_topicindex_to_wiki">Converting Encyclopedia</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_bible_to_wiki">Converting Bible</a></td>
      </tr>
    </tbody>
  </table>
</figure>