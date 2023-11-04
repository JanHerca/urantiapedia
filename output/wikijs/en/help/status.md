---
title: Urantiapedia status - Current progress of the project
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
        <td><a href="/en/help/languages">Languages supported</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/websites">Websites for references</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Milestone I - The Urantia Book, the Bible and Topic Index

This milestone is explained in detail here: [Milestone I](/en/help/phases#milestone-i-the-urantia-book-the-bible-and-topic-index).

### Software development tasks

In this phase the developments to be carried out are:

Task                                                                                                           | State              |
-------------------------------------------------------------------------------------------------------------- | ------------------ |
Development of file converters to Wiki.js                                                                      | :heavy_check_mark: |
Development of the _Topic Index Editor_, an assistant that allows to speed up the work with the Index of Terms | :clock2:           |

### Content addition tasks

For each language supported the list of tasks to complete milestone I is this:

1. Translation of _Paramony_ :ledger: from English to the target language (`Paramony`).
2. Translation and review of _Topic index_ :card_index: from English to the target language (`Topics`).
3. Obtain a public-domain translation of _The Bible_ :closed_book: in the target language (`Bible`).
4. Conversion _The Urantia Book_ :blue_book: from HTML to JSON without _Paramony_ :ledger: footnotes (`UB`).
5. Addition of _Paramony_ :ledger: footnotes to _The Urantia Book_ :blue_book: in JSON (`UB Paramony`).
6. Conversion of the _Topic index_ :card_index: from TXT to Wiki.js and commit changes using [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) (`Topics`).
7. Conversion of _The Urantia Book_ :blue_book: from JSON with _Paramony_ :ledger: footnotes to Wiki.js including references to topics, and commit changes using [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) (`UB Wiki`).
8. Conversion of _The Bible_ :closed_book: from LaTeX to Wiki.js with _Paramony_ :ledger: footnotes, and commit changes using [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) (`Bible Wiki`).

Other additional tasks to work on are:

- :sound: Test text-to-speech solutions. The goal is to offer automated reading of all the books on the website, starting with _The Urantia Book_. In English there is an official Urantia Foundation audio book. For other languages, automated solutions will be sought. (`UB Audio`)
- :sunrise_over_mountains: Create a catalog of images to illustrate _The Urantia Book_, the _Bible_ and the _Topic Index_. It is currently done with part IV of _The Urantia Book_. (`UB images`)

Table of tasks and languages to support, showing current progress:

| Language   | Code | :ledger: Paramony  | :card_index: Topics | :closed_book:  Bible | :blue_book: UB     | :blue_book: :ledger: UB <br> Paramony | :blue_book: UB<br>Wiki | :closed_book: Bible<br>Wiki | :sound: UB Audio   | :sunrise_over_mountains: UB images |
| ---------- | :--: | :----------------: | :-----------------: | :------------------: | :----------------: | :-----------------------------------: | :--------------------: | :-------------------------: | :----------------: | :--------------------------------: |
| Bulgarian  | `bg` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Czech      | `cs` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Danish     | `da` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| German     | `de` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          | :heavy_check_mark: | :clock2:                           |
| Greek      | `el` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| English    | `en` | :heavy_check_mark: | :clock2:            | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          | :heavy_check_mark: | :clock2:                           |
| Spanish    | `es` | :heavy_check_mark: | :clock2:            | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          | :heavy_check_mark: | :clock2:                           |
| Estonian   | `et` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Farsi      | `fa` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Finnish    | `fi` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| French     | `fr` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          | :heavy_check_mark: | :clock2:                           |
| Hebrew     | `he` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Hungarian  | `hu` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Indonesian | `id` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Italian    | `it` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          | :heavy_check_mark: | :clock2:                           |
| Japanese   | `ja` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Korean     | `ko` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Lithuanian | `lt` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Dutch      | `nl` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Polish     | `pl` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Portuguese | `pt` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          | :heavy_check_mark: | :clock2:                           |
| Romanian   | `ro` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Russian    | `ru` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Swedish    | `sv` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |
| Turkish    | `tr` | :heavy_check_mark: |                     | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                    | :heavy_check_mark:     | :heavy_check_mark:          |                    | :clock2:                           |

## Milestone II - Books, articles, study aids, schemas and indexes

This milestone is explained in detail here: [Milestone II](/en/help/phases#milestone-ii-books-articles-study-aids-schemas-and-indexes).

### Software development tasks

In this phase the developments to be carried out are:

Task                                                            | State              |
----------------------------------------------------------------| ------------------ |
Development for the conversion of books and articles to Wiki.js | :clock2:           |

### Content addition tasks

For each language the content expected in this milestone is:

- Books:
  - :green_book: Extra-biblical books: 11 books planned. (`Extra-biblical`)
  - :books: Other books supposed to be sources: 17 books planned. (`Book sources`)
- :page_with_curl: Articles: 2000+ articles planned [see below]. (`Articles`)
- :notebook: Study aids: Planned about 20 of them. (`Study aids`)
- :memo: Diagrams: no planned, only tests. (`Diagrams`)
- :capital_abcd: Indexes: currently indexes for topics are available. More are required to be planned. (`Indexes`)

| Language   | Code | :green_book: Extra-biblical |  :books: Book sources | :page_with_curl: Articles | :notebook: Study aids | :memo: Diagrams   | :capital_abcd: Indexes |
| ---------- | :--: | :-------------------------: | :-------------------: | :-----------------------: | :-------------------: | :---------------: | :--------------------: |
| Bulgarian  | `bg` |                             |                       |                           |                       |                   |                        |
| Czech      | `cs` |                             |                       |                           |                       |                   |                        |
| Danish     | `da` |                             |                       |                           |                       |                   |                        |
| German     | `de` |                             |                       |                           |                       |                   |                        |
| Greek      | `el` |                             |                       |                           |                       |                   |                        |
| English    | `en` | :heavy_check_mark:          | :clock2:              | :clock2:                  | :heavy_check_mark:    |                   | :heavy_check_mark:     |
| Spanish    | `es` | :clock2:                    | :clock2:              | :clock2:                  | :clock2:              |                   | :heavy_check_mark:     |
| Estonian   | `et` |                             |                       |                           |                       |                   |                        |
| Farsi      | `fa` |                             |                       |                           |                       |                   |                        |
| Finnish    | `fi` |                             |                       |                           |                       |                   |                        |
| French     | `fr` |                             |                       |                           | :clock2:              |                   |                        |
| Hebrew     | `he` |                             |                       |                           |                       |                   |                        |
| Hungarian  | `hu` |                             |                       |                           |                       |                   |                        |
| Indonesian | `id` |                             |                       |                           |                       |                   |                        |
| Italian    | `it` |                             |                       |                           |                       |                   |                        |
| Japanese   | `ja` |                             |                       |                           |                       |                   |                        |
| Korean     | `ko` |                             |                       |                           |                       |                   |                        |
| Lithuanian | `lt` |                             |                       |                           |                       |                   |                        |
| Dutch      | `nl` |                             |                       |                           |                       |                   |                        |
| Polish     | `pl` |                             |                       |                           |                       |                   |                        |
| Portuguese | `pt` |                             |                       |                           |                       |                   |                        |
| Romanian   | `ro` |                             |                       |                           |                       |                   |                        |
| Russian    | `ru` |                             |                       |                           |                       |                   |                        |
| Swedish    | `sv` |                             |                       |                           |                       |                   |                        |
| Turkish    | `tr` |                             |                       |                           |                       |                   |                        |

### Articles progress detailed

This is a detailed information on the progress with the addition of articles. Urantiapedia has been awarded with a grant by Urantia Foundation as part of the [Mustard Seed Program](https://www.urantia.org/news/2023-03/mustard-seed-grants-program). This grant includes resources for helping in the addition of articles in the languages specified below.

The table below is not completed. There are more websites that we are considering to add to Urantiapedia. This table will be updated as progress is made in following months.

| Publisher / Publication      | Number of<br>articles | English            | Spanish            | French    | Portuguese   |
| ---------------------------- | --------------------: | :----------------: | :----------------: | :-------: | :----------: |
| The Urantia Foundation       |                       |                    |                    |           |              |
| - News Online                | 614                   | :heavy_check_mark: |                    |           |              |
| - News Flash                 |  24                   | :heavy_check_mark: |                    |           |              |
| - Urantian                   |  63                   | :heavy_check_mark: |                    |           |              |
| Fellowship                   |                       |                    |                    |           |              |
| - Fellowship Herald          | 232                   | :heavy_check_mark: | :heavy_check_mark: |           |              |
| - Mighty Messenger           | 218                   | :heavy_check_mark: | :heavy_check_mark: |           |              |
| - Study Group Herald         | 129                   | :heavy_check_mark: |                    |           |              |
| - The Urantian               |   ?                   | :clock2:           |                    |           |              |
| IUA                          |                       |                    |                    |           |              |
| - Journal                    |  99                   | :heavy_check_mark: |                    |           |              |
| - Tidings                    | 364                   | :heavy_check_mark: |                    |           |              |
| Innerface International      | 568                   | :heavy_check_mark: | :heavy_check_mark: |           |              |
| Spiritual Fellowship Journal | 400                   | :heavy_check_mark: |                    |           |              |
| Spain Association            |                       |                    |                    |           |              |
| - Luz y Vida                 | 337                   | :heavy_check_mark: | :heavy_check_mark: |           |              |
| - Website                    |   ?                   |                    |                    |           |              |
| ANZURA Association           |                       |                    |                    |           |              |
| - 6-0-6                      |   ?                   | :clock2:           |                    |           |              |
| - The Arena                  |   ?                   | :clock2:           |                    |           |              |
| Cosmic Reflections           |   ?                   | :clock2:           |                    |           |              |
| Urantia Society of LA        |                       |                    |                    |           |              |
| - Agondonter                 |   ?                   | :clock2:           |                    |           |              |
| French Association           |                       |                    |                    |           |              |
| - CERDH - The Letter         |   ?                   |                    |                    |           |              |
| - Le Lien                    |   ?                   |                    |                    |           |              |
| Quebec Association           |                       |                    |                    |           |              |
| - Reflectivite               |   ?                   |                    |                    |           |              |
| - Website                    | 116                   |                    |                    |           |              |
| UB Annotated                 |   ?                   | :clock2:           | :clock2:           |           |              |
| Jan Herca articles           |  41                   | :clock2:           | :clock2:           |           |              |
| **TOTAL**                    | **3205**              |                    |                    |           |              |


## Milestone III - Translator

This milestone is explained in detail here: [Milestone III](/en/help/phases#milestone-iii-translator).

In this phase, developments will only be carried out in the applications, so it will be a phase in parallel to the others. The planned tasks are these:

Task                                                                                                                                      | State |
----------------------------------------------------------------------------------------------------------------------------------------- | ----- |
Development in Urantiapedia Tools of a massive page translator                                                                            | :heavy_check_mark: |
Development in Wiki.js a new editor that allows assisted translations directly on the web                                                 |       |
Development in Wiki.js of a display mode for The Urantia Book and any other content in two to four languages                              |       |
Development in Wiki.js of a preference selector in the translation to use of *The Urantia Book* (for languages like Spanish with several) |       |

## Milestone IV - Interactive maps

This milestone is explained in detail here: [Milestone IV](/en/help/phases#milestone-iv-interactive-maps).

This milestone include some developement that currently is not planned.

For each language the content expected in this milestone is:

- :globe_with_meridians: `Static maps`: 100 planned.
- :earth_americas: `Interactive maps`: 20 planned. For now one map has been created for testing.

| Language   | Code | :globe_with_meridians: Static Maps | :earth_americas: Interactive Maps |
| ---------- | :--: | :--------------------------------: | :-------------------------------: |
| Bulgarian  | `bg` |                                    |                                   |
| Czech      | `cs` |                                    |                                   |
| Danish     | `da` |                                    |                                   |
| German     | `de` |                                    |                                   |
| Greek      | `el` |                                    |                                   |
| English    | `en` |                                    | :clock2: 1 / 20                   |
| Spanish    | `es` |                                    | :clock2: 1 / 20                   |
| Estonian   | `et` |                                    |                                   |
| Farsi      | `fa` |                                    |                                   |
| Finnish    | `fi` |                                    |                                   |
| French     | `fr` |                                    |                                   |
| Hebrew     | `he` |                                    |                                   |
| Hungarian  | `hu` |                                    |                                   |
| Indonesian | `id` |                                    |                                   |
| Italian    | `it` |                                    |                                   |
| Japanese   | `ja` |                                    |                                   |
| Korean     | `ko` |                                    |                                   |
| Lithuanian | `lt` |                                    |                                   |
| Dutch      | `nl` |                                    |                                   |
| Polish     | `pl` |                                    |                                   |
| Portuguese | `pt` |                                    |                                   |
| Romanian   | `ro` |                                    |                                   |
| Russian    | `ru` |                                    |                                   |
| Swedish    | `sv` |                                    |                                   |
| Turkish    | `tr` |                                    |                                   |

## Milestone V - Slides

This milestone is explained in detail here: [Milestone V](/en/help/phases#milestone-v-slides).

This milestone include some development that currently is not planned. It is also required to plan a list of presentations to include.

## Milestone VI - 3D Models

This milestone is explained in detail here: [Milestone VI](/en/help/phases#milestone-vi-3d-interactive-models).

This milestone include some development that currently is not planned. It is also required to plan a list of 3D models to include.

## Planned tasks

Here you can find a list of tasks that currently are not active. If you are a contributor or want to be one check this list frequently to see where you can do your best additions. If a task is indented under above that means that the task depends on previous to start.

| Icon   | Content | Tasks |
| :----: | ------- | ----- |
| :blue_book: | The Urantia Book | Review of automatic translation made for _Paramony_ footnotes except `es` and `en`. |
| :sound: | Audio | Test best suitable text-to-speech solutions: all languages.<br> Generation of audio of The Urantia Book: currently available in `en` and in process with `es`. |
| :sunrise_over_mountains: | Images | Create an image catalog for illustrating The Urantia Book, the Bible and the Topic Index. Currently is done with part IV of Urantia Book. |
| :card_index: | The Topic Index | Produce the first version for `en` and `es`. This is a heavy task that has been divided by letters of the alphabet. Letters `A` to `G` are already finished and remain letters `H` to `Z`.<br> Automatic translation of Topic Index: it is not recommended to start this tasks until previous is completed because some automatic process will help here.<br> Review of previous translation: as above it is not recommended to start this task until produce first version for `en` and `es`. |
| :closed_book: | The Bible | Review of automatic translation of _Paramony_ footnotes: all languages except `en` and `es`. |
| :green_book: | Extra-Biblical books | Obtain public domain Extra-Biblical books : all languages. |
| :books: | Other books | Obtain books supposed sources (downloading from web or scanning): books are usually in `en`.<br> Automatic translation of previous books: all languages apart from `en`.<br> Review of previous translation: all languages apart from `en`. |
| :page_with_curl: | Articles | Addition of articles in `en` and set style.<br>Automatic translation of articles: all languages apart from `en`.<br> Review of previous translation: all languages apart from `en`. |
| :notebook: | Study aids | Plan a list of study aids to include and create one for testing. |
| :memo: | Diagrams | Plan a list of diagrams to include and create one for testing. |
| :capital_abcd: | Indexes | Plan a list of indexes to include. |
| :globe_with_meridians: | Static maps | Plan a list of static maps (images) to include and create one for testing |
| :earth_americas: | Interactive maps | Create a geodatabase and QGIS projects for auto generation of maps<br>Test exporting maps to SVG, HTML image maps, and KML (this requires a map platform as Google My Maps or our own)<br> Automatic translation of texts in maps: all languages. |
| :bar_chart: | Slides | Plan a list of presentations to include and create one for testing using Google Drive. |
| :milky_way: | 3D models | Plan a list of 3D scenes to include and create one for testing using Sketchfab. |
| :movie_camera: | Video | Create a extended introduction to Urantiapedia (Youtube channel).<br> Create an advanced tutorial for Urantiapedia contributors (Youtube channel). |

## Summary

The next table summarizes all the progress with each type of content:

| Language   | Code |  :blue_book:       | :sound:            | :sunrise_over_mountains:  |  :card_index:  | :closed_book:      | :green_book:       |  :books:        | :page_with_curl:  | :notebook:           | :memo:  | :globe_with_meridians:   | :earth_americas: | :bar_chart: | :milky_way: |
| ---------- | :--: | :----------------: | :----------------: | :-----------------------: | :------------: | :----------------: | :----------------: | :-------------: | :---------------: | :------------------: | :-----: | :----------------------: | :--------------: | :---------: | :---------: |
| Bulgarian  | `bg` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Czech      | `cs` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Danish     | `da` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| German     | `de` | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Greek      | `el` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| English    | `en` | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  | :clock2:       | :heavy_check_mark: | :heavy_check_mark: | :clock2:        | :clock2:          | :heavy_check_mark:   | :one:   |                          | :one:            | :one:       | :one:       |
| Spanish    | `es` | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  | :clock2:       | :heavy_check_mark: | :clock2:           | :clock2:        | :clock2:          | :clock2:             |         |                          | :one:            |             |             |
| Estonian   | `et` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Farsi      | `fa` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Finnish    | `fi` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| French     | `fr` | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Hebrew     | `he` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Hungarian  | `hu` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Indonesian | `id` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Italian    | `it` | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Japanese   | `ja` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Korean     | `ko` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Lithuanian | `lt` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Dutch      | `nl` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Polish     | `pl` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Portuguese | `pt` | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Romanian   | `ro` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Russian    | `ru` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Swedish    | `sv` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Turkish    | `tr` | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |

(1) Urantia Book :blue_book: and Bible :closed_book: with the _Paramony_ included.

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
        <td><a href="/en/help/languages">Languages supported</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/websites">Websites for references</a></td>
      </tr>
    </tbody>
  </table>
</figure>
