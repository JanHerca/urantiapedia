---
title: "Urantiapedia — Working Locally on the PC"
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
        <td><a href="/en/help/github_setting">Setting up your GitHub project</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_content">GitHub project content</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Make changes to your local copy and save them

Your local repositories are a complete copy of the projects that are on GitHub so you can save changes locally whenever you have some. When you work locally you can make changes to hundreds of files at once and then do a single save (_commit_) of all of them.

1. You'll see that you have changes when a number appears on the _Source control_ button icon.

![](/image/help/github_setting_6.png)

2. Click on _Source control_.
3. In the _Source control_ subpanel, you will see a list of modified files. Hover over them and click the _Stage changes_ button that appears.

![](/image/help/github_setting_7.png)

4. Once your changes are *staged*, enter a *commit* message and click the _Commit_ button. Your changes are added to your local repository.
5. To push your changes to your remote GitHub repository, click the _Sync changes_ button that appears when there are new *commits*. This will *pull* and *push* any changes between your local and remote copies of the project.
6. You can verify that your *commits* are submitted correctly by opening your Urantiapedia GitHub page.

## Synchronizing changes between the two Urantiapedia projects

The *Urantiapedia* project is the development and working version of the content. The *Urantiapedia-backup* project contains only the content, and is synchronized with the website, so introducing changes to it is equivalent to making massive changes to the website, provided that these changes are introduced by the Administrators or accepted by the Administrators through a change request.

If your changes to the *Urantiapedia* project include changes to content (`/output/wikijs` folder) you must synchronize those changes with the *Urantiapedia-backup* project using any synchronization utility or simply by copying and pasting between folders.

This duplication of both projects can be a bit cumbersome, but it is designed this way for security reasons.

## Create pull requests for Urantiapedia projects

Once you have a sufficient number of *commits* submitted to your own copies of the Urantiapedia projects (*forks*), you can submit *pull requests* to the original projects so that the changes can be reviewed and merged into them. This is called a *pull request* in GitHub terminology.

1. Open each of the Urantiapedia pages on GitHub.
   - `https://github.com/<username>/urantiapedia`
   - `https://github.com/<username>/urantiapedia-backup`
2. Make sure you are on the main branch called _master_. The branch appears in a menu at the top of the file list. Normally you will only have that branch.
3. Select the _Contribute_ menu below, then select _Open pull request_. If the menu says _This branch is not ahead of the upstream master_, you must first fetch the main project. See below.

![](/image/help/github_setting_8.png)

4. Add a title to your contributions. You can also add a description.
5. Click _Create pull request_. Make a _pull request_ for each project you have changes to.

![](/image/help/github_edit_7.png)

6. This will send a notification to the project *administrators* who will merge your changes if they find no issues.

## Synchronize your copies of the projects (_forks_)

Since *Urantiapedia* is a team effort, it is common that at any given time your *forks* will be out of sync with the original projects. It is good practice to sync your *forks* with the original projects before any _pull request_.

1. Open any of your Urantiapedia projects on GitHub.
2. Click on the _Sync fork_ option. You will be shown a menu indicating how many _commits_ have been made to the original project that are not in your copy. In the image you can see that there are 4 commits that we do not have and therefore our copy is out-of-date (_This branch is out-of-date_). Simply click on _Update branch_ to bring the changes from the original project to your copy.

![](/image/help/github_fork_4.png)

3. Wait a few seconds while GitHub updates your copy. When it's done, if you click on the _Sync fork_ option again you'll see that everything is now updated, indicating that the changes are not behind the original (_This branch is not behind the upstream_).

![](/image/help/github_fork_5.png)

4. Go to VS Code.
5. Open the project as already explained.
5. In the _Source control_ panel, go to the _Commits_ subpanel. Click the small _Fetch_ button and then the _Pull_ button next to it. This action fetches and pushes changes at the same time to sync the local repository.

![](/image/help/github_setting_9.png)

6. Sometimes changes to the *Urantiapedia Tools* code mean changes to dependencies. You must install or update new dependencies by running the `npm install` command from a terminal in VS Code. This will update the project's dependencies.


## Summary

In summary, the process on GitHub is as follows (see diagram):
1. The “Chief Editors” create a copy (1) (*fork*) in their own account of the *Urantiapedia* projects on GitHub: *Urantiapedia* and *Urantiapedia-backup*. They also keep these copies synchronized by means of a _Sync fork_ or _Fetch upstream_ (1).
2. “Chief Editors” create a local copy of the projects on their PC. This is done via a *clone* action (2) in VS Code. They also keep those local copies in sync via *fetch* + *pull* actions in VS Code (2), which download any changes to the local copy.
3. The “Chief Editors” make changes to the local copy of the projects and make *commits* (3) to their local copy to save the changes.
4. “Chief Editors” send their changes to their GitHub projects via *push* actions (4).
5. Then, the “Chief Editors” create pull requests (5) from the GitHub website for both projects: *Urantiapedia* and *Urantiapedia-backup*.
6. These pull requests from the "Chief Editors" are reviewed by an “Administrator” who is responsible for merging (6) all the changes that are correct. Any changes that are not correct will be rejected (6) and the “Chief Editors” will be notified to correct them.
7. When the changes are correct, the merge into the original *urantiapedia-backup* project causes the changes to automatically synchronize with the website, which will appear updated in a few minutes. (7)

![](/image/help/github_workflow_version_2.png)

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_setting">Setting up your GitHub project</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_content">GitHub project content</a></td>
      </tr>
    </tbody>
  </table>
</figure>