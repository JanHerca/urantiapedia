---
title: Creating a catalog of books supposedly used by revelators
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
        <td><a href="/en/help/github_religious_books_markdown">Getting books of all religions</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_sourcebooks_markdown">Getting books supposedly used by revelators</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> This task is currently finished and closed, although changes can be proposed in the list of books by sending an email to urantiapedia@gmail.com.
{.is-info}

This describes how to create a catalog of books that are supposed to be sources for *The Urantia Book* or have some relationship or parallel with *The Urantia Book*.

## Context

*The Urantia Book* itself offers two clear indications of the human material that has been used in its preparation: ([UB 0:12.12](/en/The_Urantia_Book/0#p12_12) and [UB 121:8.13](/en/The_Urantia_Book/121#p8_13)). In addition to all this, it should be noted that *The Urantia Book* often quotes, either verbatim or implicitly, books from the *Bible*, including extra-canonical books, and others.

For some time now, several prominent readers have been doing work compiling these parallels. Reader Duane L. Faw has published a lengthy volume entitled [Paramony](https://www.amazon.com/Paramony-Duane-L-Faw/dp/0965197255/ref=sr_1_2?crid=2FCT0LM14FRVT) in which he details some 60,000 parallels between *The Urantia Book* and *The Bible*. Another prominent reader, Matthew Block, has been developing a [parallel-finding project](https://urantiabooksources.com/) for years with non-Biblical books written up to the time of *The Urantia Book*'s conception, having identified over a hundred books as potential sources for the authors.

## Process

This assignment will attempt to create a list of all non-Biblical books that have been detected as having parallels to *The Urantia Book*. An invaluable source for obtaining such a list is to go to Matthew Block's old website.

The provisional list of books can be found here:

https://github.com/JanHerca/urantiapedia/blob/master/input/txt/books-en/Source_books.tsv

For any modification to this file on GitHub, the instructions provided for [Administrators](/en/help/admin), [Editors-in-Chief](/en/help/github), or [Assistant Editors](/en/help/github_assistant) users should be followed.

The content of this file is very simple:

- It is a TSV file, with tab-separated text.
- Each line represents a shelf of books, or a group within the shelf, or an individual book.
- The order is important because the listing maintains a hierarchy (shelf, group, book).
- All lines have six tab-separated data points.
- A shelf has: name of the shelf; path in Urantiapedia with the index of that shelf; the rest are empty.
- A group has: name of the group; tag `<group>`; the rest are empty.
- A book has: author; title (including edition in parentheses); related _The Urantia Book_ documents; name of the folder containing the book in the Cloud storage, or `FAILED` if a digital edition could not be located despite having tried, or empty if a digital edition has not been attempted yet; OK (if a digital copy is available) or empty (otherwise); path in Urantiapedia if it is already uploaded.

> It is highly recommended to edit the TSV files with [Visual Studio Code](https://code.visualstudio.com/) adding the extension [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv), which allows coloring the data and many more things.
{.is-info}

## Result

With this file, the index of the _Urantiapedia Library_ and the indexes of each shelf have been manually created (using _replaces_). The result can be seen in the [Index of all book groups](/en/index/books). This page is also accessible on this website, from the side menu on the left, option `OTHER BOOKS \ Index`. At the moment this page is only available in English, Spanish and French.

## External links

- [Urantiapedia Tools - project on GitHub](https://github.com/JanHerca/urantiapedia)
- [Paramony](https://www.amazon.com/Paramony-Duane-L-Faw/dp/0965197255/ref=sr_1_2?crid=2FCT0LM14FRVT)
- [«Sources» for The Urantia Book](https://urantiabooksources.com/)

<br>


<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_religious_books_markdown">Getting books of all religions</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_sourcebooks_markdown">Getting books supposedly used by revelators</a></td>
      </tr>
    </tbody>
  </table>
</figure>