---
title: "Urantiapedia — Working directly from the GitHub website"
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
        <td><a href="/en/help/github_fork">Getting started on GitHub</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_setting.md">Setting up the Urantiapedia GitHub project</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Working directly from the GitHub website is the the recommended procedure because it is very simple compared to the procedure for working locally on the PC. It is the recommended option for *Assistant Editors* users. For *Administrators* or *Chief Editors* users, the option explained in the following pages of this manual is recommended. 

Let's assume an example where we will edit an article that has translation errors. The steps would be these: 

1. Enter your *fork* of the *Urantiapedia* project (`https://github.com/user-name/urantiapedia` where _user-name_ is your username). 
2. Navigate to any file you want to modify using the directory listing. In our example we are going to correct an error in a file that is in `urantiapedia / output / wikijs / en / article / Alain_Cyr / Our_Experience...`. Once in the file it can be read comfortably in its _Preview_ mode, as shown in the image. There we found an error that says _pero las cuentas se perdieron_ (spanish translation for _but the counts were lost_) instead of something more correct like _pero perdí la cuenta_ (spanish translation for _but I lost count_). 

![](/image/help/github_edit_1.png) 

3. Click on the top menu with a pencil icon and select _Edit in place_. 

![](/image/help/github_edit_2.png) 

4. You will enter edit mode. Find the text that was wrong and modify it. When you have made all the necessary changes to the file click on the green button _Commit changes..._ 

![](/image/help/github_edit_3.png) 

5. You will be asked to confirm that you want to save some changes. Leave the default message or put a more descriptive message about your changes where it says _Commit message_. Keep the option _Commit directly to the master branch_ selected (don't worry about that since you are the only one working on your copy of the project). Finally click on _Commit changes_. 

![](/image/help/github_edit_4.png)

6. Now we will create a pull request to send the changes we have made in our copy of the project to the original project. To do this, select the _Pull requests_ option in the main GitHub menu. If it is your first time, you will see an empty list, as in the following image. 

![](/image/help/github_edit_5.png) 

7. Click on the green _New pull request_ button to create a new pull request. A comparison screen between your changes and the original project will appear. If the comparison has not found any conflicts, an _Able to merge_ message will appear. You can click on the green _Create pull request_ button to finally create the pull request. 

![](/image/help/github_edit_6.png) 

8. A final screen allows you to enter a title and description for the pull request. Finally, click on the green _Create pull request_ button to create the request. 

![](/image/help/github_edit_7.png) 

9. The last screen takes us to the original project (**note**, we are no longer on the page of our copy of the project) where we can see the request for changes sent and added to the _Pull requests_ of the original project. Now we just have to wait for the *Administrators* to accept or not the changes, at which point we will see the confirmation of acceptance in our _pull requests_ list. This operation is not immediate, it can take days, but that does not mean that you cannot continue working, making new modifications and requests for changes, repeating the steps explained here. Your list of _pull requests_ can be as long as you need. 

![](/image/help/github_edit_8.png) 

> :warning: IMPORTANT: All these steps in the *urantiapedia* project must be reproduced again in the *urantiapedia-backup* project whenever you want your username to be reflected in the project as the author of the changes. If this is not the case, you only have to introduce the changes in the *urantiapedia* project and the Administrators will take care of introducing the changes for you in the *urantiapedia-backup* project, which is the one that is synchronized with the website. In this second case, the *Administrator* user who uploaded your changes is the one who will appear as their author. 
> This duplication may seem cumbersome but it is necessary for security reasons.
{.is-warning}

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_fork">Getting started on GitHub</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_setting.md">Setting up the Urantiapedia GitHub project</a></td>
      </tr>
    </tbody>
  </table>
</figure>