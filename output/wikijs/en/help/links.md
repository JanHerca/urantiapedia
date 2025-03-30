---
title: "Urantiapedia - Links"
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
        <td><a href="/en/help/websites">Websites for references</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/projects">Context of the Project in a Larger Scope</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Summary

This document describes the way links between items are defined and created in Urantiapedia. Also discusses improvements that could be made in the future to the link system.

## What is a link in Urantiapedia

Links on Urantiapedia are always, in the end, an HTML link between two pages or between two anchors within two pages. If there are several links in the same position, several HTML links will be created.

Since Urantiapedia supports both HTML5 and Markdown files links can take either HTML5 or Markdown syntax. Both are valid.

For example, _The Urantia Book_ is in HTML5, and paragraph 0:2.10 has two links to two topics (God and Universal Father) from the _Encyclopedia_:

```html
<p id="p2_9"><sup><small>0:2.9</small></sup> <i>By context</i>—as when used in the discussion of some one deity level or association. When in doubt as to the exact interpretation of the word <a href="/es/topic/God">God</a>, it would be advisable to refer it to the person of the <a href="/es/topic/Universal_Father">Universal Father</a>.</p>
```

This example connects pages: the Foreword in _The Urantia Book_, with the pages for topics “God” and “Universal Father”.

Or for example, study aids and articles are in Markdown. This is a excerpt from first chapter of the Workbook I from William Sadler:

```markdown
**REFERENCE**: [UB 1:0.1](/en/The_Urantia_Book/1#p0_1) — “The Universal Father is...”
```

This example connects a page (a chapter in a study aid) to a paragraph (anchor) in _The Urantia Book_. We use for that the standard way for an anchor with a `#` character, and the use of a unique identifier (in this case `p0_1`). Each paragrah or heading in a paper of _The Urantia Book_ has a unique ID and anchor that follows this pattern: `p<section_index>_<par_index>`, that follow the usual convention `<paper>:<section>.<paragrpah>` for naming paragraphs in the book.

## What is going to be linked in Urantiapedia

The following tables summarize the links we want to create at this time on Urantiapedia. There are many types of links that we could consider adding in the future.

### :blue_book: The Urantia Book

Code | Source | Destination | State |
--- | --- | --- | --- |
UB_B | Paragraph footnote | A book of the Bible (one verse in a chapter) | :+1: |
UB_A | Paragraph footnote | An article (any position) | :+1: |
UB_S | Paragraph footnote | A chapter in a study aid (any position) | :+1: |
UB_O | Paragraph footnote | A chapter in a book (a specific page) | :+1: |
UB_TI | Links in paragraph words | Encyclopedia topic page | :+1: [1] |
UB_I | Image insert [2] | - | :+1: |
UB_D | Drop-down block [3] | Diagram page | :x: |
UB_P | Drop-down block | Presentation or slide page | :x: |
UB_M | Dropdown block | Map page | :x: |
UB_3D | Dropdown block | 3D scene page | :x: |
UB_AU | Audio control in header [4] | - | :+1: |
UB_V | Dropdown block | Embedded YouTube videos | :x: |

- [1] The algorithm that creates links is in progress to adjust the number of links to be created.
- [2] Images are not actually links, but to insert them, a link is entered into an image catalog that is then processed.
- [3] A dropdown block is an element placed between paragraphs that can expand and display small elements the size of an image, or if the element is too large, a link to a page where that element can be viewed in detail.
- [4] The audio of _The Urantia Book_ is not actually a link, but to insert it we have indicated in a software which audios are available and there is a process that inserts them.

Examples:
- UB_B: https://urantiapedia.org/en/The_Urantia_Book/1#the-bible
- UB_A: https://urantiapedia.org/en/The_Urantia_Book/1#articles
- UB_S: https://urantiapedia.org/en/The_Urantia_Book/1#study-aids
- UB_O: https://urantiapedia.org/en/The_Urantia_Book/0#other-books
- UB_I: https://urantiapedia.org/en/The_Urantia_Book/11#p0_2 (image example)
- UB_M: https://urantiapedia.org/en/The_Urantia_Book/149#p0_1 (drop-down block example)
- UB_AU: https://urantiapedia.org/en/The_Urantia_Book/10 (header audio control example)

<br>

### The Bible :closed_book:

Code | Origin | Destination | State |
--- | --- | --- | --- |
B_UB | Verse footnote | The Urantia Book (paragraph) | :+1: |
B_A | Verse footnote | An article (any position) | :x: |
B_S | Verse footnote | A chapter in a study aid (any position) | :x: |
B_O | Verse footnote | A chapter in a book (any position) | :x: |
B_TI | Links in verse words | Page of a topic in the _Encyclopedia_ | :x: |
B_I | Embedded image [1] | - | :x: |

- [1] The same as for _The Urantia Book_ applies here.
- [2] The same as for _The Urantia Book_ applies here.

Examples:
- B_UB: https://urantiapedia.org/en/Bible/Genesis/1#references

<br>

### Articles :page_with_curl:

Code | Origin | Destination | Status |
--- | --- | --- | --- |
A_UB | Link in quotes or paragraphs | The Urantia Book (paragraph) | :+1: |
A_B | Link in quotes or paragraphs | A book of the Bible (one verse in a chapter) | :+1: |
A_A | Any link | A page in an article | :+1: |
A_S | Any link | A page in a study aid | :+1: |
A_O | Any link | A chapter in a book (a specific page) | :+1: |
A_V | Any position | Embedded YouTube videos | :+1: |

Examples:
- A_UB: https://urantiapedia.org/en/article/A_Letter_to_Astronomers_and_Astrophysicists (any of the quotes)
- A_B: https://urantiapedia.org/en/article/Sheila_Keene_Lund/Understanding_the_Relation_of_Love_to_the_Mind#love-defined (link to 1 Corinthians in the Bible)

<br>

### :notebook: Study Aids

Code | Origin | Destination | Status |
--- | --- | --- | --- |
S_UB | Link in quotes or paragraphs | The Urantia Book (paragraph) | :+1: |
S_B | Link in quotes or paragraphs | A book of the Bible (a verse in a chapter) | :+1: |
S_A | Any link | A page in an article | :+1: |
S_S | Any link | A page in a study aid | :+1: |
S_O | Any link | A chapter in a book (a specific page) | :+1: |
S_V | Any position | Embedded YouTube videos | :+1: |

Examples:
- S_UB: https://urantiapedia.org/en/article/William_S_Sadler/Workbook_1_Foreword_and_Part_I/1#i-ub-101-the-universal-father-is
- S_B: https://urantiapedia.org/en/article/William_S_Sadler/Consideration_some_criticisms_Urantia_Book

<br>

### :books: Books

Code | Source | Destination | Status |
--- | --- | --- | --- |
O_B | Link in quotes or paragraphs | A book of the Bible (one verse in a chapter) | :x: |

<br>

### :card_index: Encyclopedia

Code | Origin | Destination | Status |
--- | --- | --- | --- |
TI_UB | Paragraph Footnote or See Also | The Urantia Book (paragraph) | :+1: |
TI_B | Paragraph Footnote | A book of the Bible (verse in a chapter) | :x: |
TI_A | Paragraph Footnote | Article Page | :x: |
TI_S | Paragraph Footnote | Study Aid Chapter | :x: |
TI_TI | See Also Section | Another Encyclopedia Page or Section of a Page | :+1: |
TI_I | Embedded Image [1] | - | :x: |
TI_D | Drop-Down Block [2] | Diagram Page | :x: |
TI_P | Drop-Down Block | Presentation or Slide Page | :x: |
TI_M | Drop-Down Block | Map page | :x: |
TI_3D | Drop-Down block | 3D scene page | :x: |
TI_V | Any location | Embedded YouTube videos | :x: |

- [1] The same thing said for _The Urantia Book_ applies here.
- [2] The same thing said for _The Urantia Book_ applies here.

Examples:
- TI_UB: https://urantiapedia.org/en/topic/Abraham_(Old_Testament)#references

<br>

### :memo: Diagrams

Code | Source | Destination | State |
--- | --- | --- | --- |
D_UB | Link in diagram | The Urantia Book (paragraph) | :x: |

Examples:
- D_UB: https://urantiapedia.org/en/article/The_Kingdom_of_Heaven_Revelation_Nebadon_Chart (any of the diagram boxes)

<br>

### :bar_chart: Presentations

Code | Source | Destination | State |
--- | --- | --- | --- |
P_UB | Link in slide | The Urantia Book (paragraph) | :x: |

<br>

### :earth_americas: Maps

Code | Source | Destination | State |
--- | --- | --- | --- |
M_UB | Sidebar Link | The Urantia Book (paragraph) | :x: |
M_TI | Sidebar Link | Encyclopedia Page | :x: |

Examples:
- M_TI: https://urantiapedia.org/en/map/The_Preaching_of_Jesus_Second_Galilee_Tour (click on an icon to open the panel with links)

<br>

### :milky_way: 3D Scenes

Code | Origin | Destination | State |
--- | --- | --- | --- |
3D_UB | 3D Element Link | The Urantia Book (paragraph) | :x: |

<br>


## How we are defining links

For each type of content here is a description of the files that stores links and the process to generate the links in the final pages to upload to Urantiapedia.

### :blue_book: The Urantia Book

- UB_B: The original file used to get the links is an existing work called Paramony, obtained from Urantia Foundation website: [Paramony.txt](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/paramony/Paramony.txt). The file was converted through Urantipedia Tools to a set of Markdown files (for example [The Urantia Book.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paramony/The%20Urantia%20Book.md)) and then added to _The Urantia Book_ in JSON format: [footnotes-book-en](https://github.com/JanHerca/urantiapedia/tree/master/input/json/book-en-footnotes). These JSON then are converted to HTML files that are uploaded to Urantiapedia: [The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book). The English Markdown files contain the full table with links. The other languages only have a table with translations of English texts.
- UB_A: The original file used to get the links is a big file: [ub_paralells.tsv](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/articles-en/ub_paralells.tsv). This file is generated through Urantiapedia Tools (scanning all articles and study aids for links to UB).
- UB_S: The links are obtained as for UB_A.
- UB_O: A Markdown file with a pair of tables contains the list of books and the list of links (called paralells): [paralells.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paralells.md). THis process will be changed to follow the same method than for UB_A and UB_S.
- UB_TI: The _Encyclopedia_ is an index obtained from Fellowship website. This index has been formatted in a set TXT files: [topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en). This files contains links between sentences inside a topic and _The Urantia Boo_k. When creating HTML files to be upload to Urantiapedia we search for topics linking to each paragraph and introduce links in those words that match topic names. This process has some problems when same words share different topics, and now is a work in progress.
- UB_D: Not yet defined. We probably use a Diagram catalog as in maps.
- UB_I: Illustrations are being registered in a catalog using Markdown files: [image_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/image_catalog.md). When creating HTML files to be upload to Urantiapedia we search for illustrations linking to each paragraph and introduce images under those paragraphs. This process has some problems. It is a work in progress.
- UB_P: Not yet defined. We probably use a Presentations catalog as in maps.
- UB_M: Maps are being registered in a catalog using Markdown files: [map_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/map_catalog.md). When creating HTML files to be upload to Urantiapedia we search for maps linking to each paragraph and introduce a section with a thumnail and a button that links to the map page.
- UB_3D: Not yet defined. We probably use a 3D model catalog as in maps.
- UB_V: Not yet defined. We probably use a Video catalog as in maps. But this content as is external and usually in one given language (with no translations) is difficult to reproduce in every language.

<br>

### :closed_book: The Bible

- B_UB: The original files used to get the links is the same work called Paramony used from the UB_B, but this time linking Bible books with _Urantia Book_: [bible-refs-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/bible-refs-en). These files were converted through Urantiapedia Tools to a set of Markdown files: [paramony](https://github.com/JanHerca/urantiapedia/tree/master/input/markdown/en/paramony) and then added to Bible Books when they are converted to HTML files that are uploaded to Urantiapedia: [Bible](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/Bible). The English Markdown files contain the full table with links. The other languages only have a table with translations of English texts.
- B_A: Not yet defined. One option could be reverse A_B with Urantiapedia Tools.
- B_S: Not yet defined. One option could be reverse S_B with Urantiapedia Tools.
- B_O: Not yet defined. One option could be reverse O_B with Urantiapedia Tools.
- B_TI: Not yet defined. This process is difficult. We are going to have few links of type TI_B to be able to reverse them. One way could be use Paramony, that is B_UB, to find paragraphs of UB and then extract in them topic names used in UB_TI. Finally try to find those same topics in Bible verses.
- B_I: Not yet defined. An option could be use the same system as UB_I, with a catalog of images.

<br>

### :page_with_curl: Articles

- A_UB: Articles usually come with references to _Urantia Book_. We are checking them and adding them manually, or sometimes through Regular Expressions that convert detected references to links. See below about the importance of a [global unique reference system for _The Urantia Book_](#global-unique-reference-system-for-the-urantia-book).
- A_B: The same as previous applies to Bible books. When a biblical reference is detected, either manually or through RegExp, they are converted to links.
- A_A: When an article references another article, something that rarely happens, we are going to add that links manually.
- A_S: The same as previous.
- A_O: If the article mentions a book that we have in Urantiapedia, we will add the link manually.

<br>

### :notebook: Study Aids

- S_UB: Study Aids usually come with references to _Urantia Book_. We are doing here the same that A_UB.
- S_B: The same as A_B.
- S_A: This is a type of link that rarely occurs. We are adding them manually. 
- S_S: This is also rare. We are adding this manually.
- S_O: The same as previous.

<br>

### :books: Other Books

- O_UB: Using same process as UB_O but inverting links it is possible to add links in a page of a book.
- O_B: If a book mention a Bible book we are introducing a link manually.

<br>

### :card_index: Encyclopedia

- TI_UB: The _Encyclopedia_, described for UB_TI, is used here in a direct way, introducing footnotes with links when _Encyclopedia_ files in TXT format are converted to HTML to upload to Urantiapedia. The result is here: [topic](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/topic). For now we are only working in English and Spanish. We are repeating all the content in the files for each language.
- TI_B: Not yet defined. The _Encyclopedia_ used mention Bible very rarely.
- TI_A: Not yet defined.
- TI_S: Not yet defined.
- TI_I: Not yet defined.
- TI_M: Manual links in the Links section.
- TI_3D: Manual links in the Links section.
- TI_V: Manual external links in the External Links section. We are adding Wikipedia links this way.

<br>

### :memo: Diagrams

- D_UB: We want to convert diagrams to SVG as much as possible, or HTML image maps. In the process we will be converting UB refs to links.

<br>

### :bar_chart: Presentations

- P_UB: We want to convert presentations to something that can be added to Urantiapedia, not just links to Google Docs or similar. This way any UB ref or Bible ref will be converted to Urantiapedia links.

<br>

### :earth_americas: Maps

- M_UB: Once M_TI links are created, we can add links like this using TI_UB links.
- M_TI: This type of links only will be possible if maps are converted to little interactive apps executing either in a embbedable map (for example using Google My Maps plarform) or as maps executing inside Urantiapedia (more recommended). When defining this maps (probably in a format like KML) we will add links to topic places as popup information shown in a side panel.

<br>

### :milky_way: 3D models

- 3D_UB: Some 3D models could have items that show popups if clicked containing quotes from UB and a link. This is completely possible using WebGL.

<br>

## How to copy links

All browsers allow to right click or tap and hold a link to copy it. For copying the page itself it can be done in the address textbox.

A trick that usually is not known in Urantiapedia is that you can copy the link of a header in a page. When the mouse is over a header a `¶` symbol on the right that be right clicked to get the link.

## Unique global reference system for The Urantia Book

Since _The Urantia Book_ was first published in 1955, this English original has been quoted numerous times in readers' works and articles. The traditional way of citing _The Urantia Book_ was to give the page and paragraph of that first English edition (commonly called the standard edition). The encoding followed was `<page_number>.<paragraph_order>`.

This way of citing _The Urantia Book_ introduces a problem that should have been seen already at an early date. In translations and in different paper editions, the number of pages and the position of the paragraph are not kept constant. Forcing _The Urantia Book_ readers around the world to have an English copy of the first edition of the Book in order to indicate a reference correctly did not make sense.

Quickly, as the Book has been translated and published in different editions, there has been a need to create a single global reference system for _The Urantia Book_, based on the index of the document, the index of the section and finally the index of the paragraph within the section. And for each paragraph, a unique identifier was assigned in this way, with which it is easy and fast to go to the content that someone has quoted or referenced. Encoding is now usually written like this `<document>:<section>.<paragraph>`.

It is striking that the years go by and many websites and publications continue to maintain the old system of references, sometimes as the only reference, or as a complement to the new reference. This clearly shows that there are still many publications that are too much focused on the use of the English language, as this duplication of references introduces more work and is only useful for readers of a particular edition of the book in English.

On Urantiapedia, one of our basic principles is [globalization](/en/help/principles#principle-i-multi-language). This website is not designed for one language or a few languages. The objective of this website is that all the content without distinction can be offered in all the languages that are desired. To introduce two references every time _The Urantia Book_ is quoted is to add a useless effort that also goes against this principle of multi-language capacity. For this reason, the board of Urantiapedia made the decision from the outset to adopt in any link to _The Urantia Book_ a single global and unified system of offering the reference, which faithfully follows the current model. Any other mention or reference that is not offered in the same way, is corrected to leave the link in the unified way.

We believe that these corrections to old content are necessary to provide readers around the world with a single system that reduces confusion and facilitates the exchange of ideas.

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/websites">Websites for references</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/projects">Context of the Project in a Larger Scope</a></td>
      </tr>
    </tbody>
  </table>
</figure>