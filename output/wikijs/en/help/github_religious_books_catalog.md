---
title: "Creating a catalog of books on all religions"
description:
published: true
date: 2024-10-10T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2024-10-10T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_upload">Uploading content in bulk to Urantiapedia</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_religious_books_markdown">Getting books on all religions</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> This task is currently finished and closed, although proposals of changes can be made to the book listing by emailing urantiapedia@gmail.com.
{.is-info}

This describes how to create a catalog of books on all the world's major religions to serve as a guide in creating [Urantiapedia Library](/en/book), which is one of the major building blocks of the [Urantiapedia project](/en/help/phases).

## Context

As explained in the motivation for the [Urantiapedia Library](/en/book), there are important reasons for readers of _The Urantia Book_ to strive to learn about and publicize the religious writings of all the world's religions, especially those religions with a long tradition or which have always accepted belief in a Creator God.

Knowledge of the ideas and beliefs of all the world's peoples is important to facilitate sympathy and understanding between races and nations, and to aspire to a world of peace and brotherhood. We have in _The Urantia Book_ a beautiful illustration that shows Jesus and a Hindu student of his familiarizing themselves with the writings of many religions of their time. [UB 130:3.5](/en/The_Urantia_Book/130#p3_5) It is an unpublished and inspiring passage from the life of Jesus that is undoubtedly intended to motivate us to make our readings of religious books more varied.

Just as Jesus and Ganid did in Alexandria by compiling religious writings, so we are going to do in Urantiapedia. We are going to create an online digital library that any reader can easily consult. And not only that, we are also going to link all these books with the rest of the content of Urantiapedia.

## Process

This task will involve creating a list of books from all the religions of the world. The file for this list is this one:

https://github.com/JanHerca/urantiapedia/blob/master/input/txt/books-en/Religious_books.tsv

For any modification to this file on GitHub, the instructions provided for [Administrators](/en/help/admin), [Chief Editors](/en/help/github) or [Assistant Editors](/en/help/github_assistant) users must be followed.

The content of this file is very simple:

- It is a TSV file, with text separated by tabs.
- Each line represents a shelf of books, or a group within the shelf, or a subgroup within a previous group, or an individual book.
- The order is important because the list maintains a hierarchy (shelf, group, subgroup, book).
- All lines have three pieces of data separated by two tabs.
- A shelf has: name of the shelf; references to websites or books from which the books on the shelf were obtained; path on Urantiapedia with the index of that shelf.
- A group has: name of the group; tag `<group>`; empty.
- A subgroup has: name of the subgroup; tag `<subgroup>`; empty.
- A book has: title; path on Urantiapedia to that book (if it exists); OK (if the book is uploaded) or empty (if it is not).

> It is highly recommended to edit TSV files with [Visual Studio Code](https://code.visualstudio.com/) by adding the extension [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv), which allows coloring the data and many more things.
{.is-info}

## Result

With this file, the index of the _Urantiapedia Library_ and the indexes of each shelf have been manually created (using _replaces_). The result can be seen in the [Index of all book groups](/en/index/books). This page is also accessible on this website, from the side menu on the left, option `OTHER BOOKS \ Index`. At the moment this page is only available in English, Spanish and French.

## External links

- [Urantiapedia Tools - project on GitHub](https://github.com/JanHerca/urantiapedia)

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_upload">Uploading content in bulk to Urantiapedia</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_religious_books_markdown">Getting books on all religions</a></td>
      </tr>
    </tbody>
  </table>
</figure>