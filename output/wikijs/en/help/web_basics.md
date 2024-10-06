---
title: Interface and basic use of Urantiapedia
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
        <td><a href="/en/help/github_initial_flow">Workflow for creating initial content in a language</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/web_pages">Manage pages</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## The Interface

![Interface](https://docs.requarks.io/assets/ui/ui-basics.jpg){.decor-radius .decor-shadow}

### Global
- **Global Navigation** - A persistent navigation menu, displayed on all pages. Usually consists of important pages or links to external websites.
- **Global Search** - Quickly find a page by performing a search.
- **Create New Page** - Create a new page.
- **User Menu** - User-specific actions such as View Profile, Administration and Logout.
{.grid-list .body-2}

### Per Page
- **Page Actions** - List of actions on the current page, such as Edit, Move, Delete, History, etc.
- **Breadcrumbs** - Full Path to the current page. Represents the folder structure.
- **Table of Contents** - Sections of the current page. Based on the headers in the content.
- **Page Tags** - Tags associated to the current page. See related pages by clicking on a tag.
- **Author** - View the author and date of the last modification of the page.
- **Social Links** - Sharing / Printing Links for the current page.
- **Edit Page / Page Actions** - Quick access menu to edit or perform other actions on the current page.
{.grid-list .body-2}

## Basics

### Create New Page

In order to create a new page, click the **New Page** button, located in the top right corner of the page.

The following dialog will appear:
![New Page Dialog](https://docs.requarks.io/assets/ui/ui-newpage-dialog.png =600x){.elevation-3 .radius-5}

1. Select the language to create the page for *(the current locale is selected by default)*.
2. Enter the full path to the page you want to create.
   - The path should contain no spaces *(use dashes instead)*, no periods and consists of URL-safe characters.
   - **DO NOT** put a trailing slash.
   - You don't need to create folders. Enter the full path you want to create and folders will be created automatically. For example, enter `article/Ann_Bendall/Adam_and_Eve` to automatically create the `article` and `Ann_Bendall` subfolders.
1. Click **Select** to proceed.

### Select an Editor

When creating a new page, you'll be prompted with the following dialog:

![Select Editor Dialog](https://docs.requarks.io/assets/ui/ui-selecteditor-dialog.png =600x){.elevation-3 .radius-5}

Urantiapedia offers various editors depending on the type of content you want to write or simply user preference. Some more technical users will usually go with the Markdown editor while non-technical users may prefer the Visual Editor.

For a complete list of editors and how to use them, refer to:
- [Using the visual editor](/en/help/web_visual_editor)
- [Using the Markdown editor](/en/help/web_markdown_editor)
- [Using the HTML editor](/en/help/web_html_editor)

### Enter Page Metadata

Upon selecting an editor, you'll be prompted with the Page Metadata dialog:

![Page Metadata Dialog](https://docs.requarks.io/assets/ui/ui-pageprops-dialog.png =600x){.elevation-3 .radius-5}

Enter a **title**, **description** and **tags** for your page.

Finally, click **OK** to close the dialog and start writing!

> You can always return to the Page Metadata dialog later by clicking the **Page** button, located in the upper-right corner of the page.
{.is-info}

### Save pages

Your page is not created until you hit the **Create** button (located in the upper-right corner of the page). It will be saved and rendered, after which you'll automatically be redirected to the final result. Simply click the edit button to go back to editing! The page will always reopen with the same editor unless a different one is specified to be used.

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_initial_flow">Workflow for creating initial content in a language</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/web_pages">Manage pages</a></td>
      </tr>
    </tbody>
  </table>
</figure>
