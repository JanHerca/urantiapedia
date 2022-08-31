---
title: "Get study aids"
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
        <td><a href="/en/help/github_studyaids_catalog">Creating a catalog of study aids</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_diagrams_catalog">Creating a catalog of diagrams</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Here it is described how to obtain the study aids of _The Urantia Book_, that have been cataloged following the task [Creating a catalog of study aids](/en/help/github_studyaids_catalog).

## Process

Everything said about books in [Get Articles](/en/help/github_articles_markdown) also applies here. Study aids are usually found as articles, in the form of a web page that already hosts them, as a PDF without text, or as a PDF with text. In any case, the first step is to convert the study aid to Markdown format.

The study aid catalog is located here: [Planned Study Aids](/en/index/studyaids).

The task now is to use the content of the study aids to obtain the Markdown files we need.

### Structure of study aids on Urantiapedia

If you are a “Chief Editor” and will be using the GitHub platform, study aids should be saved in these GitHub project folders: `/output/wikijs/en/article` for English study aids, `/output/wikijs/es/article` for Spanish study aids, etc.

As you can see we use the same folders for articles as for study aids. This is done so that all the works (other than books) made by the same author are gathered in the same project folder.

Inside the `article` folders we will create another one, if it does not exist, with the name of the author (with whitespace replaced by underscores). Finally, inside the author folder, we will create the study aid as follows:
- If the study aid is a short document, the size of an article, a Markdown file will be created for it.
- If the study aid is a long set of different parts, almost a book, a folder will be created for it, and individual Markdown files will go inside.


Both the Markdown file in the short study aid case, and the folder for an extensive study aid, will be named with a unique name following this criteria:
  - The name will use the title of the study aid but as short as possible.
  - The name will always be in English, so if the original article is not in English, the title is translated.
  - Blank spaces are replaced by underscores.
  - Special characters like colons or exclamations are removed.
  - For example, if the title of a study aid is *Study of the Master Universe* a possible name would be `Study_of_the_Master_Universe`. If the title were *Las enseñanzas de Jesús* (Spanish), the name would be `Jesus_teachings`.

If you are an “Assistant Editor” and you are not going to use the GitHub platform to send files, simply create any folder on your PC in which to leave the study aids that you create. Then when you send your work to an Administrator he or she will take care of creating the correct folders.


### Basic format of a study aid on Urantiapedia

The format to use is Markdown, which is extremely simple to format compared to other alternatives.

The “Assistant Editor” should review the text and add the following:
- A header in each file.
- Immediately below the header, an indication of the author.
- Marks of sections within each file that makes up the study aid.
- Correct paragraphs.
- Bold and italics.
- Quotes.
- Images.
- References to images.
- Footnotes.
- Tables.
- Mathematical formulas or characters in scientific notation.

All these elements have already been explained when talking about how to format book chapters: [Get “source” books](/en/help/github_sourcebooks_markdown). All the instructions given there also apply here in the case of study aids.

## Sending files

If you are a “Chief Editor” using GitHub you can submit study aids as detailed in the [Chief Editors Help](/en/help/github); if you are an “Assistant Editor”, you can simply send the Markdown files to any Administrator's email or to urantiapedia@gmail.com.

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_studyaids_catalog">Creating a catalog of study aids</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_diagrams_catalog">Creating a catalog of diagrams</a></td>
      </tr>
    </tbody>
  </table>
</figure>