---
title: Urantiapedia - Chief Editor help
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

[Blue Fields](https://blue-fields.netlify.app/) is a website that has been created to join and organize readers of *The Urantia Book* who wish to collaborate in smart, purposeful and altruistic projects all over the world. It is the website that manages register and collaboration between volunteers of *Urantiapedia*.

## About GitHub

[Urantiapedia](https://github.com/JanHerca/urantiapedia) project on GitHub is a project created to serve as a quick start-up procedure for *Urantiapedia* content. It contains files in certain formats and software that help automate the creation of initial content.

## Who is this manual for?

This manual is for users called "Chief Editors", or users that comply with these requirements:
- registered users with an account on [Blue Fields](https://blue-fields.netlify.app/), on [Urantiapedia](https://urantiapedia.org) and on [GitHub](https://github.com/).
- authorized as project collaborators by the team that runs the project on [Blue Fields](https://blue-fields.netlify.app/) platform.
- authorized as "Chief Editors" by "Administrators" of [Urantiapedia](https://urantiapedia.org).
- with a good knowledge of Git and GitHub management.
- with good knowledge of *The Urantia Book* in at least one language in which it is published, but better if it is English and a second language on which the book is translated.
- they wish to collaborate in a selfless way in the addition of information related to *The Urantia Book* in the *Urantiapedia*.

## GitHub workflow

The process will be as follows:
1. "Chief Editor" creates a *fork* (a copy in its own account) of *Urantiapedia* project on GitHub: https://github.com/JanHerca/urantiapedia.
2. "Chief Editor" creates a local copy of the project on PC. The local copy must be of the latest version of *Urantiapedia* content (the master branch). This is done first through a *clone* action and later through *pulls* actions to the project, that downloads any change to the local copy.
3. "Chief Editor" makes changes in the local copy to the files indicated in this manual and in the way explained. "Chief Editor" makes commmits to the local copy.
4. "Chief Editor" sends changes to GitHub through a *push*. 
5. "Chief Editor" performs a *pull request* in GitHub web. 
6. The *pull requests* of "Chief Editors" are reviewed by "Administrators", who are in charge of doing a *merge* with the main branch (master) of all those changes that are correct. Any changes that are not correct will be rejected and "Chief Editors" will be notified to fix them.
7. When changes are OK "Administrator" do a *pull* to download changes to the own copy.
8. "Administrator" converts files from [Urantiapedia](https://github.com/JanHerca/urantiapedia) repo to files in Wiki.js format (HTML) using *Urantiapedia Tools* and copy them to [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) repo. This project is a synced copy with *Urantiapedia* website.
9. "Administrator" uploads changes to remote [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) repo.
10. *Urantiapedia* website is synced automatically. Now changes are visible to all, in order to check and validate that they are correct.
11. The process is repeated as many times as needed, returning to point 3.

![](/image/github_workflow.png)

## Setting up the *Urantiapedia* project

Before any work in *Urantiapedia* using GitHub you must set up all the needed tools. Check [Setting up GitHub project](/en/help/github_setting).

## Content of Urantiapedia project at GitHub

To know the content of the GitHub project and its structure, check [Content of GitHub project](/en/help/github_content).
## Tasks

To know about the milestones of the project check [Milestones of Urantiapedia](/en/help/phases).

Once we have the input in the correct folders, for each language, the steps to take in Milestone I are:
1. Translating *Paramony* from English to the target language. Check [Translation of Paramony](/en/help/github_paramony).
2. Translating and reviewing *Topic Index* from English to the target language. Check [Translation an revision of Topic Index](/en/help/github_topicindex).
3. Obtaining a public-domain translation of *The Bible* in the target language. Check [Obtaining The Bible](/en/help/github_bible).
4. Converting *The Urantia Book* from HTML to JSON without footnotes. Check [Conversion to JSON](/en/help/github_book_json).
5. Adding *Paramony* footnotes to *The Urantia Book* in JSON. Check [Adding Paramony footnotes](/en/help/github_footnotes).
6. Converting *Topic index* from TXT to Wiki.js. Check [Converting Topic Index](/en/help/github_topicindex_to_wiki).
7. Converting *The Urantia Book* from JSON with footnotes to Wiki.js including references to topics. Check [Converting The Urantia Book](/en/help/github_book_to_wiki).
8. Converting *The Bible* from LaTeX to Wiki.js with footnotes. Check [Converting Bible](/en/help/github_bible_to_wiki).
9. Commiting changes to [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) project. Check [Bulk upload content to Urantiapedia](/en/help/github_upload).

*Chief Editors* perform tasks 1-3. *Admins* perform tasks 4-9.

![](/image/formats.png)

## Links

- [Starting with Urantiapedia](/en/help/start)
- [Urantiapedia Content](/en/help/content)
- [Urantiapedia - Languages supported](/en/help/languages)
- [Admin help](/en/help/admin)
- [Developers help](/en/help/devs)
- [Chief Editors help](/en/help/github)
- [Urantiapedia status - Current progress of the project](/en/help/status)

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub project](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia Foundation](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

