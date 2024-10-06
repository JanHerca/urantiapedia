---
title: "Urantiapedia — Getting started on GitHub"
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
        <td><a href="/en/help/github_edit_on_web.md">Working directly on the GitHub website</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Before you do anything on GitHub, you'll need to follow these steps: 

1. You need a GitHub account. Navigate to https://github.com 
2. If you already have an account, click *Sign in* and log in. 
3. If you don't have an account, create one by clicking *Sign up*. Enter a username, email, and password. Once you have an account, log in to GitHub with it. 
4. The first time you log in to GitHub, you will be asked for verification via email. Once verified, you will be taken to your GitHub homepage. 
5. Open the *Urantiapedia* project pages: 
   - https://github.com/JanHerca/urantiapedia 
   - https://github.com/JanHerca/urantiapedia-backup 
6. Create a *fork* of the projects. A *fork* is simply a copy of a project into your own account, so that changes made to the copy do not affect the original project. To *fork*, click the *Fork* button in the top right corner of every GitHub project page. 

![](/image/help/github_fork_1.png) 

6. Within a few seconds, a copy of the *Urantiapedia* projects will be created in your GitHub account. These projects are a new, complete copy that you can make any changes you need without affecting the original projects. Check that you have them by clicking on your user menu and selecting _Your repositories_ to return to your account. You should see both projects and a message saying _Forked from ..._. 

![](/image/help/github_fork_2.png) 

![](/image/help/github_fork_3.png) 

7. From here, there are two options: 
  - [Work directly from the GitHub website](/en/help/github_edit_on_web). This procedure is recommended because it is very simple. 
  - Work locally on the PC. This procedure is more complex. It requires more steps:
    - [Setting up the Urantiapedia GitHub project](/en/help/github_setting) 
    - [Follow the GitHub workflow](/en/help/github_edit_local)


## :warning: IMPORTANT: How to keep your copy up to date 

Your *forks* of the two *Urantiapedia* projects (*urantiapedia* and *urantiapedia-backup*) are copies that GitHub does not automatically update. From the moment you create them, other users will be making changes to the original project, and those changes will not be automatically reflected in your projects. Your projects, remember, **are an independent copy**, and changes made to the copy or the original are not synchronized unattended to the other. 

**It is very important, therefore, that before making any changes to the files in your copies, you make sure that they are synchronized with the current state of the original projects.** 

To do this, **before any work session** (which is detailed in the following steps of this manual) **you must follow these simple steps**: 

1. Click on each of your copies of the projects, and once in them click on the _Sync fork_ option. You will be shown a menu indicating how many saves (_commits_) have been made to the original project that are not in your copy. In the image you can see that there are 4 saves that we do not have and therefore our copy is out-of-date (_This branch is out-of-date_). Simply click on _Update branch_ to bring the changes in the original project to your copy. 

![](/image/help/github_fork_4.png) 

2. Wait a few seconds while GitHub updates your copy. Once you're done, if you click _Sync fork_ again you'll see that everything is up to date, indicating that the changes are not behind the original (_This branch is not behind the upstream_). 

![](/image/help/github_fork_5.png) 

You'll need to remember to do this for each project every time you want to start a change job. What can you do if you forget to do this? Normally nothing will happen as long as the files you're going to modify haven't already been modified. You can continue working without any problems and perform all the tasks indicated in the following steps of the manual, but it is highly recommended that you follow this safer practice of running these steps before any edits. 

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/web_html_editor">Using the HTML editor</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_edit_on_web.md">Working directly on the GitHub website</a></td>
      </tr>
    </tbody>
  </table>
</figure>