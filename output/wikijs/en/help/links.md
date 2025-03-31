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

<div class="urantiapedia-table-wrapper">

Code | Origin | Destination | Procedure | Status |
--- | --- | --- | --- | --- |
UB_B | Paragraph footnote | A book of the Bible (one verse in a chapter) | The _Paramony_ ([Paramony.txt](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/paramony/Paramony.txt)) is converted to Markdown ([The Urantia Book.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paramony/The%20Urantia%20Book.md)), then to JSON ([The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book)), and finally to the HTML that is loaded into _Urantiapedia_ ([The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book)) | :+1: |
UB_A | Paragraph footnote | An article (any position) | A parallels file is automatically generated ([ub_paralells.tsv](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/articles-en/ub_paralells.tsv)) | :+1: |
UB_S | Paragraph footnote | A chapter in a study aid (any position) | Same as UB_A | :+1: |
UB_O | Paragraph footnote | A chapter in a book (a specific page) | A parallels file is manually generated ([paralells.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paralells.md)) | :+1: |
UB_TI | Links in paragraph words | Encyclopedia topic page | Encyclopedia TXT files are used, which contain references ([topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en)) | :+1: [1] |
UB_I | Image insert [2] | - | An image catalog is used ([image_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/image_catalog.md)) | :+1: |
UB_D | Drop-down block [3] | Diagram page | Not defined | :x: |
UB_P | Drop-down block | Presentation or slide page | Not defined | :x: |
UB_M | Drop-down block | Map page | A map catalog is used ([map_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/map_catalog.md)) | :clock2: |
UB_3D | Expandable block | 3D scene page | Not defined | :x: |
UB_AU | Audio control in header [4] | - | Urantiapedia Tools adds audio in available languages ​​| :+1: |
UB_V | Expandable block | Embedded YouTube videos | Not defined | :x: |

</div>

- [1] The link-creating algorithm is in progress to adjust the number of links created.
- [2] Images are not actually links, but to insert them, a link is entered into an image catalog that is then processed.
- [3] A drop-down block is an element placed between paragraphs that can expand and display small image-sized elements, or if the element is too large, a link to a page where that element can be viewed in detail.
- [4] _The Urantia Book_ audio is not actually a link, but to insert it, we have a software program that indicates which audio files are available, and there is a process that inserts them.

Examples:
- UB_B: https://urantiapedia.org/en/The_Urantia_Book/1#the-bible
- UB_A: https://urantiapedia.org/en/The_Urantia_Book/1#articles
- UB_S: https://urantiapedia.org/en/The_Urantia_Book/1#study-aids
- UB_O: https://urantiapedia.org/en/The_Urantia_Book/0#other-books
- UB_I: https://urantiapedia.org/en/The_Urantia_Book/11#p0_2 (image example)
- UB_M: https://urantiapedia.org/en/The_Urantia_Book/149#p0_1 (drop-down block example)
- UB_AU: https://urantiapedia.org/en/The_Urantia_Book/10 (header audio control example)

<br>

### :closed_book: The Bible

<div class="urantiapedia-table-wrapper">

Code | Source | Destination | Procedure | State |
--- | --- | --- | --- | --- |
B_UB | Verse Footnote | The Urantia Book (paragraph) | The _Paramony_ ([bible-refs-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/bible-refs-en)) is converted to Markdown ([paramony](https://github.com/JanHerca/urantiapedia/tree/master/input/markdown/en/paramony)) and then into the HTML that is loaded into _Urantiapedia_ ([Bible](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/Bible)) | Undefined | :+1: |
B_A | Verse Footnote | An article (any position) | Undefined | :x: |
B_S | Verse footnote | A chapter in a study aid (any position) | Not defined | :x: |
B_O | Verse footnote | A chapter in a book (any position) | Not defined | :x: |
B_TI | Links in verse words | Page of a topic in the _Encyclopedia_ | Not defined | :x: |
B_I | Insert image [1] | - | Not defined | :x: |

</div>

- [1] The same as for _The Urantia Book_ applies here.
- [2] The same as for _The Urantia Book_ applies here.

Examples:
- B_UB: https://urantiapedia.org/en/Bible/Genesis/1#references

<br>

### :page_with_curl: Articles

<div class="urantiapedia-table-wrapper">

Code | Source | Destination | Procedure | Status |
--- | --- | --- | --- | --- |
A_UB | Link in quotes or paragraphs | The Urantia Book (paragraph) | Manually including links [1] to the _Book_ | :+1: |
A_B | Link in quotes or paragraphs | A book of the Bible (a verse in a chapter) | Same as A_UB | :+1: |
A_A | Any link | A page in an article | Same as A_UB | :+1: |
A_S | Any link | A page in a study aid | Same as A_UB | :+1: |
A_O | Any link | A chapter in a book (a specific page) | Same as A_UB | :+1: |
A_V | Any position | Embedded YouTube videos | Manual link | :+1: |

</div>

Examples:
- A_UB: https://urantiapedia.org/en/article/A_Letter_to_Astronomers_and_Astrophysicists (any of the quotes)
- A_B: https://urantiapedia.org/en/article/Sheila_Keene_Lund/Understanding_the_Relation_of_Love_to_the_Mind#love-defined (link to 1 Corinthians in the Bible)

<br>

### :notebook: Study Aids

<div class="urantiapedia-table-wrapper">

Code | Origin | Destination | Procedure | Status |
--- | --- | --- | --- | --- |
S_UB | Link in quotes or paragraphs | The Urantia Book (paragraph) | Same as A_UB | :+1: |
S_B | Link in quotes or paragraphs | A book of the Bible (one verse in a chapter) | Same as A_B | :+1: |
S_A | Any link | A page in an article | Same as A_A | :+1: |
S_S | Any link | A page in a study aid | Same as A_S | :+1: |
S_O | Any link | A chapter in a book (a specific page) | Same as A_O | :+1: |
S_V | Any position | Embedded YouTube videos | Manual link | :+1: |

</div>

Examples:
- S_UB: https://urantiapedia.org/en/article/William_S_Sadler/Workbook_1_Foreword_and_Part_I/1#i-ub-101-the-universal-father-is
- S_B: https://urantiapedia.org/en/article/William_S_Sadler/Consideration_some_criticisms_Urantia_Book

<br>

### :books: Books

<div class="urantiapedia-table-wrapper">

Code | Origin | Destination | Procedure | Status |
--- | --- | --- | --- | --- |
O_B | Link in quotes or paragraphs | A book of the Bible (one verse in a chapter) | Same as A_B | :x: |

</div>

<br>

### :card_index: Encyclopedia

<div class="urantiapedia-table-wrapper">

Code | Source | Destination | Procedure | Status |
--- | --- | --- | --- | --- |
TI_UB | Paragraph Footnote or "See Also" | The Urantia Book (paragraph) | Same as UB_TI but in reverse. TXT files from the _Encyclopedia_ are used, which contain the references ([topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en)) | :+1: |
TI_B | Paragraph Footnote | A book of the Bible (verse in a chapter) | Not defined | :x: |
TI_A | Paragraph Footnote | Page of an Article | Not defined | :x: |
TI_S | Paragraph Footnote | Chapter of a Study Aid | Not defined | :x: |
TI_TI | "See Also" Section | Another page or section of an _Encyclopedia_ page | The TXT files mentioned above are used | :+1: |
TI_I | Insert image | - | Links to images are manually included in TXT files | :clock2: |
TI_D | Drop-down block | Diagram page | Not defined | :x: |
TI_P | Drop-down block | Presentation or slide page | Not defined | :x: |
TI_M | Drop-down block | Map page | Not defined | :x: |
TI_3D | Drop-down block | 3D scene page | Not defined | :x: |
TI_V | Any position | Embedded YouTube videos | Not defined | :x: |

</div>

Examples:
- TI_UB: https://urantiapedia.org/en/topic/Abraham_(Old_Testament)#references

<br>

### :memo: Diagrams

<div class="urantiapedia-table-wrapper">

Code | Origin | Destination | Procedure | State |
--- | --- | --- | --- | --- |
D_UB | Link in diagram | The Urantia Book (paragraph) | Links added manually | :clock2: |

</div>

Examples:
- D_UB: https://urantiapedia.org/en/article/The_Kingdom_of_Heaven_Revelation_Nebadon_Chart (any of the diagram boxes)

<br>

### :bar_chart: Presentations

<div class="urantiapedia-table-wrapper">

Code | Source | Destination | Procedure | Status |
--- | --- | --- | --- | --- |
P_UB | Link on slide | The Urantia Book (paragraph) | Not defined, but probably adding links manually | :x: |

</div>

<br>

### :earth_americas: Maps

<div class="urantiapedia-table-wrapper">

Code | Origin | Destination | Procedure | Status |
--- | --- | --- | --- | --- |
M_UB | Sidebar link | The Urantia Book (paragraph) | Manual links within KML files | :x: |
M_TI | Sidebar link | Encyclopedia page | Manual links within KML files | :x: |

</div>

Examples:
- M_TI: https://urantiapedia.org/en/map/The_Preaching_of_Jesus_Second_Galilee_Tour (click on an icon to open the panel with links)

<br>

### :milky_way: 3D Scenes

<div class="urantiapedia-table-wrapper">

Code | Origin | Destination | Procedure | Status |
--- | --- | --- | --- | --- |
3D_UB | Link in 3D element | The Urantia Book (paragraph) | Undefined | :x: |

</div>

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