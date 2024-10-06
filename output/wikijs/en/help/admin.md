---
title: "Urantiapedia — Administrators help"
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
        <td><a href="/en/help/roles">Collaborator profiles</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github">Editors-in-Chief help</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## About Urantiapedia

[Urantiapedia](https://urantiapedia.org) is a collaborative website based on [Wiki.js](https://js.wiki/) with the purpose of being a unified center for the dissemination of all knowledge regarding *The Urantia Book*.

## About registering on Urantiapedia and Blue Fields

If you want to collaborate on this project, the best way to contact us is by email at urantiapedia@gmail.com. Send a message stating your interest in the project and the Administrators will give you access.

Another way that will be available soon is through registration on the website [Blue Fields](https://blue-fields.netlify.app/), which is a website that has been created to unite and organize readers of *The Urantia Book* who wish to participate in intelligent, purposeful, and altruistic projects around the world. Once registered, the project team will contact you. The Urantiapedia project on Blue Fields can be accessed here: [Urantiapedia on Blue Fields](https://blue-fields.netlify.app/projects/292396532506821125). However, this website is not 100% operational so contact via email is recommended.

## About GitHub

[GitHub](https://github.com/) is a platform for version control in collaborative projects, especially code or web content projects.

The *Urantiapedia* project on GitHub (https://github.com/JanHerca/urantiapedia) is a project that contains all of the content of the website, as well as an application (*Urantiapedia Tools*) to help automate content creation. The *Urantiapedia-backup* project (https://github.com/JanHerca/urantiapedia-backup) is the mechanism used to be able to perform mass uploads of content.

## Who is this manual for?

This manual is intended for users * administrators*, or *admins*, that is:
- users registered on [GitHub](https://github.com/).
- users authorized as *admins* by the team that runs the Urantiapedia project.
- registered users on Urantiapedia. Only another *admin* user can register a user as *admin*.
- users with knowledge of Linux, [Docker](https://www.docker.com/), [Kubernetes](https://en.wikipedia.org/wiki/Kubernetes), [Git](https://git-scm.com/) and [GitHub](https://github.com/).
- users with knowledge of *The Urantia Book* in at least one language in which it is published, and preferably with a good command of the English version.
- users who wish to selflessly collaborate in the incorporation of information related to *The Urantia Book* in *Urantiapedia*.

The web administrators are the only ones in charge of uploading massive changes to the *Urantiapedia* website during each of the project phases. More about the project phases at [Help start](/en/help/phases).

## GitHub Workflow

The GitHub workflow is detailed in the Urantiapedia GitHub Project User Manual. You should start by taking a look at [Getting started on GitHub](/en/help/github_fork) and then continue from there with the rest of the steps and options for working on GitHub.

This is the complete index of the manual:
- [Getting started with GitHub](/en/help/github_fork)
- Working on GitHub:
  - [Working directly from the GitHub website](/en/help/github_edit_on_web)
  - Working locally on GitHub:
    - [Setting up your GitHub project](/en/help/github_setting)
    - [Working locally on your PC](/en/help/github_edit_local)
- [GitHub project content](/en/help/github_content)
- [Workflow for creating initial content in a language](/en/help/github_initial_flow)

## Collaboration through this website

Due to the risks it entails, this type of collaboration is reserved for *Administrators* and *Editors-in-Chief* users. The former can edit any content; in the case of the latter, they will only have editing access to certain sections.

In this case, all tasks are performed through this website. It is necessary to log in with the editing account provided, and follow the manuals on how to make edits:
- [Urantiapedia Interface and Basic Use](/en/help/web_basics)
- [Managing Pages](/en/help/web_pages)
- [Using Editors](/en/help/web_editors)
  - [Using the Visual Editor](/en/help/web_visual_editor)
  - [Using the Markdown Editor](/en/help/web_markdown_editor)
  - [Using the HTML Editor](/en/help/web_html_editor)

## Tasks

For more information on the phases of the project, see [Phases of Urantiapedia](/en/help/phases).

### Phase I: The Urantia Book, the Bible, and the Index of Terms

Once we have the initial input in the correct folders, following the steps in the manual indicated above, for each language, during Phase I, the steps to take are:
1. Translation of the *Paramony* from English to the target language. See [Paramony Translation](/en/help/github_paramony).
2. Translation and revision of the *Index of Terms* from English to the target language. See [Translation and revision of the Index of Terms](/en/help/github_topicindex).
3. Obtaining a translation of The Bible in the target language. See [Getting the Bible](/en/help/github_bible).
4. Converting *The Urantia Book* from HTML to JSON without footnotes. See [Conversion to JSON](/en/help/github_book_json).
5. Adding footnotes to *The Urantia Book* in JSON. See [Adding Footnotes](/help/github_footnotes).
6. Converting *Term Index* from TXT to Wiki.js. See [Term Index Convert](/help/github_topicindex_to_wiki).
7. Converting *The Urantia Book* from JSON with footnotes to Wiki.js including references to the terms. See [Urantia Book Convert](/help/github_book_to_wiki).
8. Converting *The Bible* from LaTeX to Wiki.js with footnotes. See [The Bible Convert](/help/github_bible_to_wiki).
9. Uploading changes to [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). See [Bulk Upload Content to Urantiapedia](/en/help/github_upload).

Currently all tasks except task 2 have been completed for 25 languages.

### Phase II: Books, Articles, Study Aids, Diagrams, and Indexes

1. Create a catalog of books that are considered sources for *The Urantia Book* or contain interesting parallels. See [Source Books Catalog](/en/help/github_sourcebooks_catalog).
2. Obtain the above books. See [Get Source Books](/en/help/github_sourcebooks_markdown).
3. Create a catalog of articles written by readers. See [Articles Catalog](/en/help/github_articles_catalog).
4. Obtain the articles. See [Get Articles](/en/help/github_articles_markdown).
5. Create a catalog of study aids.
6. Get previous study aids. See [Get Study Aids]( /en/help/github_studyaids_markdown).
7. Create a diagram catalog. See [Diagrams Catalog](/en/help/github_diagrams_catalog).
8. Get previous diagrams in HTML imagemap format or preferably SVG. See [Get Diagrams](/en/help/github_diagrams_svg).
9. Create the project's image catalog. See [Image Catalog](/en/help/github_images_catalog).

![](/image/help/formats.png)

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
        <td><a href="/en/help/roles">Collaborator profiles</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github">Editors-in-Chief help</a></td>
      </tr>
    </tbody>
  </table>
</figure>