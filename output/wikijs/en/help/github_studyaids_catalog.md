---
title: "Creation of a catalog of study aids"
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
        <td><a href="/en/help/github_articles_markdown">Get articles</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_studyaids_markdown">Get study aids</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Here is how to create a catalog of _The Urantia Book_ study aids.

The difference between an article and a study aid is that the former is simply a short text, usually appearing in a magazine, and on _Urantiapedia_ it will be a single web page; while the second is a more complete text, which in _Urantiapedia_ could be one page or several within a folder (such as books), and which is above all oriented towards the study and understanding of a complex topic of *The Urantia Book*.

We distinguish between one and the other, although later they are all saved in the project under the same `/en/article` folder, next to diagrams, and the distinction can be a bit thin and artificial depending on the type of content. It is kept in the same place so that all material created by the same author other than books is gathered under the same folder or section of _Urantiapedia_.

## Process

The process is identical to the one explained for articles. See [Creating an Article Catalog](/en/help/github_articles_catalog). The provisional list of study aids can be found here: [Planned study aids](/en/index/studyaids).

To edit that list, you can do it in two ways:

- Log in here at _Urantiapedia_. Go to the list of study aids: [Planned study aids](/en/index/studyaids). Put the page in edition in the _Page actions > Edit_ menu in the upper right button panel. A simple Markdown editor will open where you can edit the listing. (IMPORTANT: to be able to do this you need an Administrator to enable editing permissions on that page.)
- In the GitHub project modify this file: `/output/wikijs/en/index/studyaids.md`. To modify it you can simply download that file or the entire project from GitHub. See the [Assistant Editors Help](/en/help/github_assistant) for how to download things from GitHub.

In either of the two previous cases, the file to be edited is a very simple Markdown file where for each study aid the following must be included, in the form of a table:

- A `:white_square_button:` flag indicating that the study aid has not yet been created.
- Title.
- The author.
- Some optional labels that categorize the study aid.
- The URL from where that help can be downloaded.

For example:

```
| Status                | Title                             | Author                | Tags       | URL                                                           |
| ----------------------| ----------------------------------| ----------------------| ---------- | -------------------------------------------------------------- |
| :white_square_button: | "Study of the Master Universe"    | William S. Sadler Jr. | Astronomia | https://www.urantia.org/en/urantia-book/study-the-urantia-book |
```

## Sending files

If you have modified the listing from the file on GitHub, you have two options for committing your changes: 1) if you are a “Editor-in-Chief” use GitHub as detailed in the [Editors-in-Chief Help](/en/help/github); if you are an “Assistant Editor”, you can simply send that modified Markdown file to any Administrator's email or to urantiapedia@gmail.com.

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_articles_markdown">Get articles</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_studyaids_markdown">Get study aids</a></td>
      </tr>
    </tbody>
  </table>
</figure>
