---
title: Urantiapedia - Developers help
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

This manual is for "Developers", or users that comply with these requirements:
- registered users with an account on [Blue Fields](https://blue-fields.netlify.app/), on [Urantiapedia](https://urantiapedia.org) and on [GitHub](https://github.com/).
- authorized as project collaborators by the team that runs the project on [Blue Fields](https://blue-fields.netlify.app/) platform.
- with a good knowledge of HTML, CSS, Javascript, [Node.js](https://nodejs.org/), [Git](https://git-scm.com/), [GitHub](https://github.com/), [Bootstrap](https://getbootstrap.com/), and [Vue.js](https://vuejs.org/).

## GitHub workflow

The process is the usual GitHub workflow:
1. "Developer" creates a *fork* (a copy in its own account) of *Urantiapedia* project on GitHub (https://github.com/JanHerca/urantiapedia) for developing in *Urantiapedia Tools*, or creates a *fork* of Wiki.js (https://github.com/Requarks/wiki) for developing in *Wiki.js*.
2. "Developer" creates a local copy of the project on PC. The local copy must be of the latest version of the master branch. This is done first through a *clone* action and later through *pulls* actions to the project, that downloads any change to the local copy.
3. "Developer" makes changes in the local copy and commmits to it.
4. "Developer" sends changes to GitHub through a *push*. 
5. For *Urantiapedia Tools*, as it is an owned repo it is possible to do a *pull request* from GitHub website. In case of *Wiki.js*, as it is owned by a third party, it is needed to create a *merge* in the this *fork* https://github.com/JanHerca/wiki to centralize *pull requests* to Wiki,js *upstream* when it is needed and to coordinate developments.
6. *Pull requests* are reviewed by authorized developers, in charge of doing a *merge* in the master branch of all changes that are OK. Any invalid change is rejected and is notified for a fix.
7. When changes are made to Wiki.js and are OK we can proceed to launch a new version of the server. This task is done by "Admins".
8. The process is repeated as many times as needed, returning to point 3.

## Installing a dev server

See https://docs.requarks.io/install.

See https://docs.requarks.io/install/upgrade.

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