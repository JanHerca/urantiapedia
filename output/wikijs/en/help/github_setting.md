---
title: "Urantiapedia — Setting up GitHub project"
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
        <td><a href="/en/help/web_html_editor">Working directly from the GitHub web</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_content">Working locally on your PC</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Working with GitHub locally on your PC

This solution for working on GitHub is considerably more complex than the previous option explained in this manual, working directly from the GitHub website. For this reason, it is only recommended for users who have some knowledge of Git and GitHub. It is a much more flexible and powerful option that allows us to edit Urantiapedia in faster and more far-reaching ways. In addition, it allows us to run tools, called *Urantiapedia Tools*, that perform automated tasks very quickly.

This should be the most recommended option for *Administrators* or *Editors-in-Chief* users, while the option of working directly from the GitHub website is recommended for *Assistant Editors* users.

The first step to working locally on GitHub is to perform several software installations that we will explain. Then we will give some configuration tips.

:warning: It is assumed that before following these steps we have already created a GitHub account and have made the necessary copies (_forks_) of the Urantiapedia projects to our account, as detailed in [First steps on GitHub](/en/help/github_fork).

## Install Git on your PC

1. Navigate to https://git-scm.com/.
2. Download the installer for your operating system. You can find a complete tutorial on how to install it on different OS here: [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). On Windows, use the installer and leave the default options.
3. Check that Git is installed correctly by running this in a terminal: `git --version`. If it returns the version number then Git is fine.
4. Run the following commands in a terminal (Git installs a terminal called Git CMD that you can use) to set up your identity in Git, with your name and email. This is necessary for Git to set you up as a code contributor.

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Install Node.js on your PC

Node.js is a requirement to run the *Urantiapedia Tools*. If you are not going to run them ever, you can skip this step, although it is recommended.
1. Navigate to https://nodejs.org/.
2. Download Node.js. Use the current LTS version available.
3. Install with default options.
4. Check that Node.js is installed correctly. Open a terminal and run `node -v`. If the version number appears then Node.js is installed correctly.

## Install VS Code and GitLens

The use of Visual Studio Code is highly recommended.

1. Navigate to https://code.visualstudio.com/.
2. Download and install it. During installation it is recommended to check the option "Add 'Open with Code' action to the context menu of directories" if you are a Windows user.
3. Open it. The first time you open it you can set some options. Skip them.
4. In VS Code click on the _Extensions_ button on the left sidebar. It is highly recommended to install an extension called “GitLens”. It is usually on the list of most popular extensions. Find it and click on the install button.
5. You will now have a new GitLens button in the left button bar of VS Code. Click on it and click on the _Welcome (Quick setup)_ button. The _Welcome_ page will open. It is recommended to select _Source control layout_ as the default view. This will merge GitLens with the default _Source control_ panel in VS Code.

## Clone Urantiapedia projects

1. Open the GitHub website and navigate to your account.
2. Open your copies of the Urantiapedia projects (_forks_) that you should have created.
3. On the main page of each copy click on the green menu called _Code_ and click there to copy the project URL, something like `https://github.com/<username>/urantiapedia.git` and `https://github.com/<username>/urantiapedia-backup.git`.

![](/image/help/github_setting_1.png)

4. Open VS Code, open the _Source control_ panel and click on _Clone repository_.

![](/image/help/github_setting_2.png)

5. In the text box that appears, type or paste the path you copied earlier.
6. Select _Clone from GitHub_.

![](/image/help/github_setting_3.png)

7. Click _Allow in the GitHub extension to sign in_.
8. A web page appears asking for VS Code authorization to access GitHub. Click _Continue_.
9. Click on _Authorize github_.
10. Now you are redirected to a new web page where a message opens. Click on _Open VS Code_.
11. Now click _Open_ to allow the use of the provided path. If something goes wrong, repeat from point 4.
12. When the name of your Urantiapedia project repository is displayed in the command center, select it. A dialog box will appear asking for a folder. Select any folder or create one for the project.

![](/image/help/github_setting_4.png)

13. Wait a few minutes for VS Code to clone the repository. Finally click _Open repo_. Also click _Yes, I trust the authors_.
14. The project will open successfully.
15. Perform these same steps for each project, for *urantiapedia* and for *urantiapedia-backup*.

## Setting up *Urantiapedia Tools*

*Urantiapedia Tools* is a desktop application developed in JavaScript with [Electron](https://www.electronjs.org/). It is used to run very fast processes that modify hundreds of pages at a time. If you are not going to need to use it, you can skip this step. To install and run it, follow these steps:

1. Open the *urantiapedia* project in VS Code. You can do this in two ways:
  - Open VS Code. Select _File > Open folder_. Select the root folder of the project, the one that contains the `package.json` file.
  - Optionally, on Windows you can open the project via the context menu of the root folder and select _Open with Code_.
3. Open a terminal using _Terminal > New Terminal_. Make sure the terminal is open in the root folder of the project.
4. To install the *Urantiapedia Tools* dependencies run: `npm install`. Wait until all are installed.

![](/image/help/github_setting_5.png)

5. The project is set up with a default run configuration. Press F5 to run the application or run `npm run start` in the terminal.
6. The application opens. By default, a _Dev Tools_ window opens for debugging. If you are not developing, you can ignore or close it.

![](/image/help/uptools.png)



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
        <td><a href="/en/help/web_html_editor">Working directly from the GitHub web</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_content">Working locally on your PC</a></td>
      </tr>
    </tbody>
  </table>
</figure>