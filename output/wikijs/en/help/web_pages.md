---
title: Manage pages
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/web_basics">Interface and basic use of Urantiapedia</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/web_editors">Use of editors</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Create a Page

There're multiple ways to create a new pages:

- From the **New Page** button, located at the top-right corner of the page.
- By clicking a link pointing to a non-existing page.
- Manually type the path in the browser address bar.

Check out the [Interface and basic use of Urantiapedia](/en/help/web_basics) guide on how to create your first page step-by-step.


## Edit a Page

You can edit an existing page by clicking the **Pencil** icon at the bottom-right corner of any page or using the **Page Menu**, located at the top-right corner of the page.

The editor selected when first creating the page will be loaded automatically. Note that it's possible to [change editor](/en/help/web_editors) once a page is created.

## Folders

Urantiapedia doesn't rely on a traditional folder structure to organize pages. Instead, the path of the page is used.

For example, on a traditional system, in order to create a page at `article/Ann_Bendall/Adam_and_Eve`, you'd need to first create a folder `article`, then open this folder and create a sub-folder named `Ann_Bendall` to finally be able to create a page inside named `Adam_and_Eve`.

In Urantiapedia, you can directly create a page at path `article/Ann_Bendall/Adam_and_Eve`. Folders `article` and `Ann_Bendall` will be automatically inferred, but they don't really exist outside of the page path context. Therefore, you don't have to manage folders and you can instead focus solely on the path you want for your pages.

For this reason, there's no option to create folders. Simply type the full path you want. Folders will be inferred automatically upon creation.

## Naming Restrictions

The following paths cannot be used for content and are reserved for system use.

### Single-character pages

**All** single character paths are reserved to access various parts of Urantiapedia:

- `a`: Administration Area
- `c`: Comments
- `e`: Page Editor
- `f`: Assets Manager
- `h`: Page History
- `i`: Browse Page by ID
- `p`: User Profile
- `s`: Page Source
- `t`: Tags
- `u`: Upload Endpoint *(API)*
- `w`: Personal Wiki
{.grid-list}

### IETF Language tags

Language tags in the formats listed below are reserved to specify the locale namespace to use.

- Two-letter language code (e.g. `en`, `fr`)
- Country specific locale code (e.g. `en-us`, `fr-ca`)
{.grid-list}

### Reserved words

Paths cannot match exactly the terms below or be the first part of path. For example, `register` or `register/test` are not valid paths, but `registering` is fine.

- _assets
- favicon *\[.ico]*
- graphql
- healthz
- home *(reserved for the root homepage)*
- login
- logout
- register
{.grid-list}

### Illegal Characters

Paths cannot contain the following characters:

- Space *(use dashes instead)*
- Period *(reserved for file extensions)*
- Unsafe URL characters *(such as punctuation marks, quotes, math symbols, etc.)*

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/web_basics">Interface and basic use of Urantiapedia</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/web_editors">Use of editors</a></td>
      </tr>
    </tbody>
  </table>
</figure>