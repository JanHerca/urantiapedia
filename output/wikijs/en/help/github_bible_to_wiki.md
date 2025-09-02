---
title: Converting Bible from LaTeX to Wiki.js with footnotes
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
        <td><a href="/en/help/github_book_to_wiki">Converting The Urantia Book</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_upload">Bulk upload content to Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> This task is currently ended and closed for the 27 languages available.
{.is-info}

*Bible* files in LaTeX format must have been created in folders such as `input / text / bible-xx` where `xx` is the code of the target language.

To convert these LaTeX files to Wiki.js format, follow these steps:
- Open *Urantiapedia Tools*.
- In *Process* select: Convert Bible (LaTeX) + Refs (TXT) to Wiki.js.
- Folders are automatically filled: for *TXT files* one like `input / txt / bible-refs-xx`, for *LaTeX Files* one like `input / tex / bible-xx` and for *HTML Files* one like `output / wikijs / xx / Bible` (but if `xx` = `en` it is omitted). If output folder do exists create all the path in your project. If there are already Wiki.js files in the output folder, the existing ones will be overwritten.
- Click *Execute*.
- If everything is correct *Conversion executed successfully* will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the *developer* users the error.

![](/image/help/upt_tex_wiki.png)

Output files have HTML format. A file will be generated for each chapter of the Bible.

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
        <td><a href="/en/help/github_book_to_wiki">Converting The Urantia Book</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_upload">Bulk upload content to Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>