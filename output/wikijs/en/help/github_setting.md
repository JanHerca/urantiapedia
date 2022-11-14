---
title: Urantiapedia - Setting up GitHub project
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
        <td><a href="/en/help/web_html_editor">Using the HTML editor</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_content">Content of GitHub project</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Install Git on your computer

1. Go to https://git-scm.com/.
2. Download installer for your operative system. You have a full tutorial on how to install in different OS here: [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). On Windows use the installer and leave all default options.
3. Check that Git is correctly installed executing this in a terminal: `git --version`. If the version number is returned then Git is OK.
4. Execute next commands in a terminal (Git installs a terminal called Git CMD that you can use) to set up your identity in Git, with your name and email. This is needed in order to Git to set you as contributor to the code.

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Create a GitHub account

You need a GitHub account.
1. Go to https://github.com
2. If you already have an account, click *Sign in* and validate.
3. If you don't have an account, create one by clicking *Sign up*. Enter a username, an email address, and a password. Once you have an account, log into GitHub with it.
4. The first time you enter GitHub, it will ask you to do a verification through our email account. Once verified, you will appear on the GitHub home page.

## Install Node.js on your computer

Node.js is a requirement to make *Urantiapedia Tools* work.
1. Go to https://nodejs.org/.
2. Download Node.js. Use the current LTS version available.
3. Install with default options.
4. Check that Node.js is correctly installed. Open a terminal and execute `node -v`. If the version number appears then Node.js is OK.


## Fork Urantiapedia project

1. Open *Urantiapedia* project pages: 
   - https://github.com/JanHerca/urantiapedia
   - https://github.com/JanHerca/urantiapedia-backup
2. Create a *fork* of each project. A *fork* is nothing but a proper copy of an existing project in our account, so that the changes made to this project do not affect the original project. To make the *forks* click on the *Fork* button in the upper right corner of each GitHub page.
3. In a few seconds a copy of *Urantiapedia* projects will be created within your GitHub account. These projects are a fresh copy in which you can make the changes you need, without affecting the original projects.

## Install VS Code and GitLens

It is recommended the use of Visual Studio Code.

1. Go to https://code.visualstudio.com/.
2. Download and install it. During installation it is recommended to check the "Add action 'Open with Code' to folder context menu" if you are a Windows user.
3. Open it. First time it is opened you can set up some settings. Skip them all.
4. In VS Code click in Extensions button on the left side buttonbar. It is highly recommended to install an extension called "GitLens". It is usually among the most popular extensions. Locate it and click in install button.
5. Now you will have a new button for GitLens in VS Code left buttonbar. Click on it and click in "Welcome (Quick setup)" button. The Welcome page opens. It is recommended to select "Source control layout" as the default view. This makes GitLens to merge with the default "Source control" panel in VS Code.

## Clone Urantiapedia projects

1. Open GitHub web and go to your account.
2. Open your forks of Urantiapedia projects you created before.
3. On the main page locate a green menu named "Code" and in it click to copy the URL of the project, something like `https://github.com/<username>/urantiapedia.git` and `https://github.com/<username>/urantiapedia-backup.git`.
4. Open VS Code, open "Source control" panel and click in "Clone repository".
5. In the textbox that appears type or paste the previous path copied.
6. Select "Clone from GitHub".
7. Allow in the GitHub extension to sign in.
8. A web page appears asking to authorize VS Code to access GitHub. Click Continue.
9. Click in Authorize github.
10. Now you are redirected to a new webpage and a message opens. Click in "Open VS Code".
11. Now click Open to allow the use of the URI path provided. If something goes wrong repeat from point 4.
12. When the name of your Urantiapedia repository is shown in the command palette select it. A dialog appears asking for a folder. Select any folder for the project or create one.
13. Wait some seconds for VS Code to clone the repo. Finally click in "Open repo". Also click in "Yes, I trust the authors".
14. The project will be opened correctly.

## Set up *Urantiapedia Tools*

*Urantiapedia Tools* is a JavaScript desktop app developed with [Electron](https://www.electronjs.org/). To install and execute it follow these steps:

1. Open VS Code and select File > Open folder. Then select the root folder of the project, the one that contains the `package.json` file.
2. Alternatively, in Windows you can open the context menu of the root folder and select "Open with Code".
3. Open a terminal using Terminal > New Terminal. Ensure that terminal is opened in root folder of the project. 
4. To install dependencies execute: `npm install`. Wait until all of them are installed.
5. The project is set up with a default launch configuration. Press F5 to execute or in the terminal execute `npm start`.
6. The application opens. By default a Dev Tools window is opened for debugging. You can ignore it or close it if not developing.

![](/image/uptools.png)

## Commit and push changes

Your local repositories are a full copy of the projects so you can save changes in them each time you have some changes that can be posted.

1. You will see that you have changes when a number appears in the "Source control" button icon.
2. Click in "Source control".
3. On the "Source control" subpanel you will see a list of changed files. Hover the mouse over them and click on the button "Stage changes" that will appear.
4. Once changes are in the stage, enter a message for the commit and click in "Commit" button. The changes are added to your local repo.
5. To send your changes to your remote repository in GitHub click in the "Sync changes" button that appears when new commits exists. This will pull and push any changes between your local and remote copies of the project.
6. You can check that your commits are pushed correctly opening your GitHub Urantiapedia page.

## Synchronize changes between projects

The Urantiapedia project is the version for development and work with the contents. The Urantiapedia-backup project contains only the content, and is in sync with the web page, so making changes to it is equivalent to making massive changes to the web.

If your changes to the Urantiapedia project include changes to the content (`/output/wikijs` folder) you must sync those changes to the Urantiapedia-backup project with any sync utility or by simply copying and pasting between folders.

## Create "pull requests" to Urantiapedia projects

When you have an enough number of commits pushed to your own forks of the Urantiapedia projects, you can send your changes to the projects so that changes can be reviewed and merged in it. This is called a "pull request" in GitHub terminology.

1. Open each of Urantiapedia pages in GitHub.
   - `https://github.com/<username>/urantiapedia`
   - `https://github.com/<username>/urantiapedia-backup`
2. Ensure your are in the main branch that is called "master". The branch appears in a menu on top of the list of files.
3. Select the menu Contribute that appears below, and then select "Open pull request". If the menu says "This branch is not ahead of the upstream master" you must do first a fetch of the main project. See below.
4. Add a title to your contributions. You can also add a description.
5. Click on "Create pull request". Do a "pull request" for each project with changes.
6. This will send a notification to "admin" users of the project that will merge your changes if they find no problems.

## Sync your forks

As *Urantiapedia* is the effort of a team of collaborators, it is common that at any point in time your forks of projects will be out of sync with the main projects. It is a good practice that before any pull request you sync your forks with the main projects.

1. Open any of your Urantiapedia pages in GitHub.
2. Select the menu "Fetch upstream" that appears below the branch selector and click in "Fetch and merge". This will copy all new changes from main project to your fork project.
3. Go to VS Code.
4. Open the project and previously explained.
5. In "Source control" panel go to "Remotes" subpanel. You must have a remote repositiry listed there called `JanHerca/urantiapedia`. Click in the "Fetch" button next to the name. This action does a fetch and a push at the same time to sync the local repository.
6. Sometimes changes in "Urantiapedia Tools" code imply changes to dependencies. You must install or update new dependencies executing the command `npm install` from a terminal in VS Code. This will update dependencies for the project.

## Summary

In summary, the process in GitHub is as follows (see the diagram):
1. “Chief Editor” creates a *fork* (a copy in its own account) of *Urantiapedia* projects on GitHub: *Urantiapedia* and *Urantiapedia-backup*.
2. “Chief Editor” creates a local copy of the projects on PC. This is done first through a *clone* action and later through *fetch upstream* actions in GitHub web and through *pulls* actions to the local projects, that downloads any change to the local copy.
3. “Chief Editor” makes changes in the local copy of the projects and makes commmits to the local copy.
4. “Chief Editor” send changes to the GitHub projects through *push* actions. 
5. Then “Chief Editor” creates *pull requests* from the GitHub website for both projects: *Urantiapedia* and *Urantiapedia-backup*.
6. This *pull requests* of “Chief Editors” are reviewed by “Administrators”, who are in charge of doing a *merge* with the main branch (master) of all those changes that are correct. Any changes that are not correct will be rejected and “Chief Editors” will be notified to fix them.
7. When changes are OK an “Administrator” do a *merge* of them and they are synchronized automatically to the web.

![](/image/github_workflow_version_2.png)

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
        <td><a href="/en/help/web_html_editor">Using the HTML editor</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_content">Content of GitHub project</a></td>
      </tr>
    </tbody>
  </table>
</figure>