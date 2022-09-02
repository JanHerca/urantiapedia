---
title: "Creation of article catalog"
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
        <td><a href="/en/help/github_sourcebooks_markdown">Get “source” books</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_articles_markdown">Get articles</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Here is how to create a catalog of articles written by readers related to _The Urantia Book_.

## Process

The provisional list of articles can be found here: [Planned Articles](/en/index/articles).

The list, which is currently very extensive, is organized by source. The sources that are being used right now are:

- Websites of the Urantia Associations
- The magazine _Innerface International_
- The magazine _Urantian Journal_
- The journal _Fellowship Journal_
- The magazine _Fellowship Herald_
- Articles from the project _UB Annotaded & UBTheNews_, by Halbert Katzen
- Articles from the project _Jesus of Nazareth_, by Jan Herca

The links from where material is being obtained are being compiled at the end of that list, here: [Article references](/en/index/articles#references). Any other references where readers' articles have been obtained should be included in that list.

To edit the list of articles, you can do it in two ways:

- Log in here at _Urantiapedia_. Go to the list of articles: [Planned Articles](/en/index/articles). Put the page in edition in the _Page actions > Edit_ menu in the upper right button panel. A simple Markdown editor will open where you can edit the listing. (IMPORTANT: to be able to do this you need an Administrator to enable editing permissions on that page.)
- In the GitHub project modify this file: `/output/wikijs/en/index/articles.md`. To modify it you can simply download that file or the entire project from GitHub. See the [Assistant Editors Help](/en/help/github_assistant) for how to download things from GitHub.

In either of the two previous cases, the file to be edited is a very simple Markdown file where for each article the following must be included, in the form of a table:

- A `:white_square_button:` mark indicating that the article has not yet been created.
- An optional identifier of the source used.
- The issue if the article appeared in a magazine.
- Title.
- The author.
- Some optional labels that categorize the article.

For example:

```
| Status                | Source | Issue        | Title                                                 | Author       | Tags     |
| ----------------------| ------ | ------------ | ------------------------------------------------------| -------------| -------- |
| :white_square_button: | Herald | Vol 01, No 1 | "48 Chromosomes - Are We Asking the Right Questions?" | Ken Glasziou | Biology  |
```

## Sending files

If you have modified the listing from the file on GitHub, you have two options for committing your changes: 1) if you are a “Chief Editor” use GitHub as detailed in the [Chief Editors Help](/en/help/github); if you are an “Assistant Editor”, you can simply send that modified Markdown file to any Administrator's email or to urantiapedia@gmail.com.

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_sourcebooks_markdown">Get “source” books</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_articles_markdown">Get articles</a></td>
      </tr>
    </tbody>
  </table>
</figure>
