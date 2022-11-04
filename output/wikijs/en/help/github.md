---
title: Urantiapedia - Chief Editor help
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
        <td><a href="/en/help/admin">Administrators help</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_assistant">Assistant Editors help</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## About Urantiapedia

[Urantiapedia](https://urantiapedia.org) is a collaborative website based on [Wiki.js](https://js.wiki/) with the purpose of being a unified center for the dissemination of all knowledge regarding *The Urantia Book*.

## About Blue Fields

[Blue Fields](https://blue-fields.netlify.app/) is a website that has been created to join and organize readers of *The Urantia Book* who wish to collaborate in smart, purposeful and altruistic projects all over the world. It is the website that manages register and collaboration between volunteers of *Urantiapedia*.

## About GitHub

Urantiapedia has two public projects in GitHub: [Urantiapedia](https://github.com/JanHerca/urantiapedia) and [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) created to serve as a quick start-up procedure for initial content. It contains files in certain formats and software that help automate the creation of initial content.

## Who is this manual for?

This manual is for users called “Chief Editors”, or users that comply with these requirements:
- They have an account in this with editing permissions, and another in [GitHub](https://github.com/).
- They can add content to both Urantiapedia projects in GitHub: [Urantiapedia](https://github.com/JanHerca/urantiapedia) and [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). They can do bulk load of changes using the second project.
- They have a good knowledge of Git and GitHub management.
- They have good knowledge of *The Urantia Book* in at least one language in which it is published, but better if it is English and a second language on which the book is translated.
- They wish to collaborate in a selfless way in the addition of information related to *The Urantia Book* in the *Urantiapedia*.

## GitHub workflow

The process for a “Chief Editor” will be as follows:
1. Creates a *fork* (a copy in its own account) of *Urantiapedia* projects on GitHub: 
  - https://github.com/JanHerca/urantiapedia
  - https://github.com/JanHerca/urantiapedia-backup
2. Creates a local copy of the projects on PC. The local copy must be of the latest version of *Urantiapedia* content (the master branch). This is done first through a *clone* action and later through *pulls* actions to the projects, that downloads any change to the local copy.
3. Makes changes in the local copy of the Urantiapedia project to the files indicated in this manual and in the way explained. He or she makes commmits to the local copy.
4. Sends partial changes (not ready to be uploaded to the web) to *Urantiapedia* project in GitHub through a *push*. When there is a set of changes ready for the web, synchronizes the local *Urantiapedia* project with local *Urantiapedia-backup* project and upload changes in GitHub through a *push*. 
5. Then creates a *pull requests* from the GitHub website for both projects: *Urantiapedia* and *Urantiapedia-backup*.
6. This *pull requests* of “Chief Editors” are reviewed by “Administrators”, who are in charge of doing a *merge* with the main branch (master) of all those changes that are correct. Any changes that are not correct will be rejected and “Chief Editors” will be notified to fix them.
7. When changes are OK an “Administrator” do a *merge* of them and they are uploaded automatically to the web. They are usually available in a few minutes depending on the number of changes and their type.

![](/image/github_workflow_version_2.png)

## Setting up the *Urantiapedia* project

Before any work in *Urantiapedia* using GitHub you must set up all the needed tools. Check [Setting up GitHub project](/en/help/github_setting).

## Content of Urantiapedia project at GitHub

To know the content of the GitHub project and its structure, check [Content of GitHub project](/en/help/github_content).
## Tasks

To know about the milestones of the project check [Milestones of Urantiapedia](/en/help/phases).

### Milestone I: The Urantia Book, the Bible and Topic Index

1. Translating *Paramony* from English to the target language. Check [Translation of Paramony](/en/help/github_paramony).
2. Translating and reviewing *Topic Index* from English to the target language. Check [Translation an revision of Topic Index](/en/help/github_topicindex).
3. Obtaining a public-domain translation of *The Bible* in the target language. Check [Obtaining The Bible](/en/help/github_bible).
4. Converting *The Urantia Book* from HTML to JSON without footnotes. Check [Conversion to JSON](/en/help/github_book_json).
5. Adding *Paramony* footnotes to *The Urantia Book* in JSON. Check [Adding Paramony footnotes](/en/help/github_footnotes).
6. Converting *Topic index* from TXT to Wiki.js. Check [Converting Topic Index](/en/help/github_topicindex_to_wiki).
7. Converting *The Urantia Book* from JSON with footnotes to Wiki.js including references to topics. Check [Converting The Urantia Book](/en/help/github_book_to_wiki).
8. Converting *The Bible* from LaTeX to Wiki.js with footnotes. Check [Converting Bible](/en/help/github_bible_to_wiki).
9. Commiting changes to [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) project. Check [Bulk upload content to Urantiapedia](/en/help/github_upload).

Currently all tasks except 2 have been completed.

![](/image/formats.png)

### Milestone II: Books, articles, study aids, schemas and indexes

1. Create a catalog of books that are considered sources of *The Urantia Book* or contain interesting parallels. See [Source Book Catalog](/en/help/github_sourcebooks_catalog).
2. Get previous books. See [Get “source” books](/en/help/github_sourcebooks_markdown).
3. Create a catalog of articles written by readers. See [Articles Catalog](/en/help/github_articles_catalog).
4. Get previous articles. See [Get Articles](/en/help/github_articles_markdown).
5. Create a catalog of study aids. See [Study Aids Catalog](/en/help/github_studyaids_catalog).
6. Get the above study aids. See [Get study aids](/en/help/github_studyaids_markdown).
7. Create a catalog of diagrams. See [Diagrams Catalog](/en/help/github_diagrams_catalog).
8. Obtain the above diagrams in HTML image map format or preferably SVG. See [Get Diagrams](/en/help/github_diagrams_svg).
9. Create the project image catalog. See [Images Catalog](/en/help/github_images_catalog).

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
        <td><a href="/en/help/admin">Administrators help</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_assistant">Assistant Editors help</a></td>
      </tr>
    </tbody>
  </table>
</figure>

