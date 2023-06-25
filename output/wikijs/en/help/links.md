---
title: Urantiapedia - Links
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
        <td><a href="/en/help/roles">Collaborator profiles</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Summary

This document describes the way links between items are defined and created in Urantiapedia. Also discusses improvements that could be made in the future to the link system.

## What is a link in Urantiapedia

Links on Urantiapedia are always, in the end, an HTML link between two pages or between two anchors within two pages. If there are several links in the same position, several HTML links will be created.

Since Urantiapedia supports both HTML5 and Markdown files links can take either HTML5 or Markdown syntax. Both are valid.

For example, _The Urantia Book_ is in HTML5, and paragraph 0:2.10 has two links to two topics (God and Deity) from the Topic Index:

```html
<p id="p2_10"><sup><small>0:2.10</small></sup>  The term <a href="/topic/God">God</a> always denotes <i>personality.</i> <a href="/topic/Deity">Deity</a> may, or may not, refer to divinity personalities.</p>
```

This example connects pages: the Foreword in _The Urantia Book_, with the pages for topics “God” and “Deity”.

Or for example, study aids and articles are in Markdown. This is a excerpt from first chapter of the Workbook I from William Sadler:

```markdown
**REFERENCE**: [UB 1:0.1](/en/The_Urantia_Book/1#p0_1) — “The Universal Father is...”
```

This example connects a page (a chapter in a book) to a paragraph (anchor) in _The Urantia Book_. We use for that the standard way for an anchor with a `#` character, and the use of a unique identifier (in this case `p0_1`). Each paragrah or heading in a paper of _The Urantia Book_ has a unique ID and anchor that follows this pattern: `p<section_index>_<par_index>`, that follow the usual convention `<paper>:<section>.<paragrpah>` for naming paragraphs in the book.

## What is going to be linked in Urantiapedia

The following tables summarize the links we want to create at this time on Urantiapedia. There are many types of links that we could consider adding in the future.

### The Urantia Book :blue_book:

Code | Origin type | Destination | Destination type | Status |
--- | --- | --- | --- | ---- | --- |
UB_B | Footnote in paragraph | The Bible | Verse in a chapter of a book | :+1: |
UB_A | Footnote in paragraph | Articles | Article page | |
UB_S | Footnote in paragraph | Study Aid | Chapter page or heading | |
UB_O | Footnote in paragraph | Other books | Book anchor for a page | |
UB_TI | Links in words of paragraphs | Topic Index | Topic page | :+1: [1] |
UB_D | Footnote in paragraph [2] | Diagrams | Diagram page or anchor | |
UB_I | Image insertion [3] | Illustrations | - | :+1: [4] |
UB_P | Footnote in paragraph | Presentations | Page of presentation or slide | |
UB_M | Footnote in paragraph [5] | Maps | Map page or coordinate/ID | |
UB_3D | Footnote in paragraph [6] | 3D Models | 3D model page or ID | |
UB_V | Footnote in paragraph | Youtube videos | External link | |
UB_C | Footnote in paragraph | Podcasts | External link | |
UB_F | Footnote in paragraph | Forum Discussion threads | External link | |

[1] The algorithm that creates links is in progress for adjusting the number of links to create.
[2] Small diagrams could be added as illustrations in the book, in a collapsible section under some paragraphs. The idea is that each diagram, small or big, has its own page, and all of them will be indexed. But small ones, instead of only be a page, can be embedded inside _The Urantia Book_ as collapsible sections.
[3] Images are not proper links, but they are inserted under a given paragrah so we need a way to define this insertions. So they are considered here as links in some way.
[4] This work is in progress. For now there are a few images added.
[5] Some maps that are well suited for a given paragraph can be highligthed under the paragraph in a panel with a button that links to the map.
[6] The same as previous for maps can apply here.

Examples:
- UB_B: https://urantiapedia.org/en/The_Urantia_Book/1#references
- UB_O: https://urantiapedia.org/en/The_Urantia_Book/0#references
- UB_M: https://urantiapedia.org/en/The_Urantia_Book/149#p0_1
- UB_I: https://urantiapedia.org/en/The_Urantia_Book/0#p0_1

<br>

### The Bible :closed_book:

Code | Origin type | Destination | Destination type | Status |
--- | --- | --- | --- | ---- | --- |
B_UB | Footnote in verse | The Urantia Book | Paragraph | :+1: |
B_A | Footnote in verse | Articles | Article page | |
B_S | Footnote in verse | Study Aid | Chapter page or heading | |
B_O | Footnote in verse | Other Books | Book anchor for a page | |
B_TI | Links in words of verses | Topic Index | Topic page | |
B_I | Image insertion [1] | Illustrations | - | |
B_M | Footnote verse [2] | Maps | Map page or coordinate/ID | |

[1] The same said for _The Urantia Book_ applies here.
[2] The same said for _The Urantia Book_ applies here.

Examples:
- B_UB: https://urantiapedia.org/en/Bible/Genesis/1#references

<br>

### Articles :page_with_curl:

Code | Origin type | Destination | Destination type | Status |
--- | --- | --- | --- | ---- | --- |
A_UB | Link in quotes or paragraphs | The Urantia Book | Paragraph | :+1: |
A_B | Link in quotes or paragraphs | The Bible | Verse in a chapter of a book | |
A_A | Footnote in paragraph | Articles | Article page | :+1: |
A_S | Footnote in paragrah | Study Aids | Chapter page or heading | |
A_O | Footnote in paragraph | Other books | Book anchor for a page | |
A_I | Image insertion [1] | Illustrations | - | |
A_M | Footnote in paragraph [2] | Maps | Map page or coordinate/ID | |
A_3D | Footnote in paragraph [3] | 3D Models | 3D model page or ID | |
A_V | Footnote in paragraph | Youtube videos | External link | |
A_C | Footnote in paragraph | Podcasts | External link | |
A_F | Footnote in paragraph | Forum Discussion threads | External link | |

[1] The same said for _The Urantia Book_ applies here.
[2] The same said for _The Urantia Book_ applies here.
[3] The same said for _The Urantia Book_ applies here.

Examples:
- A_UB: https://urantiapedia.org/en/article/A_Letter_to_Astronomers_and_Astrophysicists (any of the quotes)

<br>

### Study Aids :notebook:

Code | Origin type | Destination | Destination type | Status |
--- | --- | --- | --- | ---- | --- |
S_UB | Link in quotes or paragraphs | The Urantia Book | Paragraph | :+1: |
S_B | Link in quotes or paragraphs | The Bible | Verse in a chapter of a book | |
S_A | Footnote in paragraph | Articles | Article page | :+1: |
S_S | Footnote in paragrah | Study Aids | Chapter page or heading | |
S_O | Footnote in paragraph | Other books | Book anchor for a page | |
S_I | Image insertion [1] | Illustrations | - | |
S_M | Footnote in paragraph [2] | Maps | Map page or coordinate/ID | |
S_3D | Footnote in paragraph [3] | 3D Models | 3D model page or ID | |
S_V | Footnote in paragraph | Youtube videos | External link | |
S_C | Footnote in paragraph | Podcasts | External link | |
S_F | Footnote in paragraph | Forum Discussion threads | External link | |

[1] The same said for _The Urantia Book_ applies here.
[2] The same said for _The Urantia Book_ applies here.
[3] The same said for _The Urantia Book_ applies here.

Examples:
- S_UB: https://urantiapedia.org/en/article/William_S_Sadler/Workbook_1_Foreword_and_Part_I/1#i-ub-101-the-universal-father-is

<br>

### Other Books :books:

Code | Origin type | Destination | Destination type | Status |
--- | --- | --- | --- | ---- | --- |
O_UB | Footnote in paragraph | The Urantia Book | Paragraph | |
O_B | Link or Footnote in paragraph | The Bible | Verse in a chapter of a book | |
O_A | Footnote in paragraph | Articles | Article page | |
O_S | Footnote in paragrah | Study Aids | Chapter page or heading | |

<br>

### Topic Index :card_index:

Code | Origin type | Destination | Destination type | Status |
--- | --- | --- | --- | ---- | --- |
TI_UB | Footnote in paragraph or “See Also” | The Urantia Book | Paragraph | :+1: |
TI_B | Footnote in paragraph | The Bible | Verse in a chapter of a book | |
TI_A | Footnote in paragraph | Articles | Article page | |
TI_S | Footnote in paragraph | Study Aids | Chapter page or heading | |
TI_TI | “See Also” section | Topic Index | Chapter page or heading | :+1: |
TI_I | Image insertion [1] | Illustrations | - | |
TI_M | Footnote in paragraph [2] | Maps | Map page or coordinate/ID | |
TI_3D | Footnote in paragraph [3] | 3D Models | 3D model page or ID | |
TI_V | Footnote in paragraph | Youtube videos | External link | |
TI_C | Footnote in paragraph | Podcasts | External link | |
TI_F | Footnote in paragraph | Forum Discussion threads | External link | |

[1] The same said for _The Urantia Book_ applies here.
[2] The same said for _The Urantia Book_ applies here.
[3] The same said for _The Urantia Book_ applies here.

Examples:
- TI_UB: https://urantiapedia.org/en/topic/Abraham_(Old_Testament)#references

<br>

### Diagrams :memo:

Code | Origin type | Destination | Destination type | Status |
--- | --- | --- | --- | ---- | --- |
D_UB | Link in diagram object | The Urantia Book | Paragraph | |
D_B | Link in diagram object | The Bible | Verse in a chapter of a book | |

Examples:
- D_UB: https://urantiapedia.org/en/article/The_Kingdom_of_Heaven_Revelation_Nebadon_Chart (any of the boxes in the diagram)

<br>

### Illustrations :sunrise_over_mountains:

Illustrations is not expected to have a page per each one, so they are not linkable objects. They are just inserted in other elements, as _The Urantia Book_ papers, the Bible chapters, articles, study aids, or Topic Index entries.

<br>

### Presentations :bar_chart:

Code | Origin type | Destination | Destination type | Status |
--- | --- | --- | --- | ---- | --- |
P_UB | Link in slide | The Urantia Book | Paragraph | |
P_B | Link in slide | The Bible | Verse in a chapter of a book | |

<br>

### Maps :earth_americas:

Code | Origin type | Destination | Destination type | Status |
--- | --- | --- | --- | ---- | --- |
M_UB | Link in side panel | The Urantia Book | Paragraph | |
M_B | Link in side panel | The Bible | Verse in a chapter of a book | |
M_TI | Link in side panel | Topic Index | Topic page | |

Examples:
- M_TI: https://urantiapedia.org/en/map/The_Preaching_of_Jesus_Second_Galilee_Tour (click in a icon to open panel with links)

<br>

### 3D models :milky_way:

Code | Origin type | Destination | Destination type | Status |
--- | --- | --- | --- | ---- | --- |
3D_UB | Link in 3D element | The Urantia Book | Paragraph | |

<br>

### Videos :movie_camera:

This content will be outside of Urantiapedia so we plan to have indexes or pages that list external links or some embedded videos in some pages. This is coded as UB_V, A_V, S_V and TI_V.

<br>

### Podcasts :radio:

This content will be outside of Urantiapedia so we plan to have indexes or pages that list external links or some embedded podcasts in some pages. This is coded as UB_C, A_C, S_C and TI_C.

<br>

### Discussion Forums Threads :speech_balloon:

This content will be outside of Urantiapedia so we plan to have pages with external links to threads that are related to the content. This is coded as UB_F, A_F, A_F and TI_F.

<br>

### Summary of types of links

| &nbsp;             | UB :blue_book: | B :closed_book: | A :page_with_curl: | S :notebook: | O :books: | TI :card_index: | D :memo: | P :bar_chart: | M :earth_americas: | 3D :milky_way: | V :movie_camera: | C :radio: | F :speech_balloon: |
| ------------------ | :------------: | :-------------: | :----------------: | :----------: | :-------: | :-------------: | :------: | :-----------: | :----------------: | :------------: | :--------------: | :-------: | :----------------: |
| UB :blue_book:     |                |     &harr;      |       &harr;       |    &harr;    |  &harr;   |     &harr;      |  &harr;  |    &harr;     |       &harr;       |     &harr;     |      &rarr;      |   &rarr;  |      &rarr;        |
| B :closed_book:    |     &harr;     |                 |       &harr;       |    &harr;    |  &harr;   |     &harr;      |  &larr;  |    &larr;     |       &harr;       |                |                  |           |                    |
| A :page_with_curl: |     &harr;     |     &harr;      |       &harr;       |    &harr;    |  &harr;   |     &harr;      |          |               |       &rarr;       |                |      &rarr;      |   &rarr;  |      &rarr;        |
| S :notebook:       |     &harr;     |     &harr;      |       &harr;       |    &harr;    |  &harr;   |     &harr;      |          |               |       &rarr;       |                |      &rarr;      |   &rarr;  |      &rarr;        |
| O :books:          |     &harr;     |     &harr;      |       &harr;       |    &harr;    |           |                 |          |               |                    |                |                  |           |                    |
| TI :card_index:    |     &harr;     |     &harr;      |                    |              |           |     &harr;      |          |               |       &harr;       |                |      &rarr;      |   &rarr;  |      &rarr;        |
| D :memo:           |     &harr;     |     &rarr;      |                    |              |           |                 |          |               |                    |                |                  |           |                    |
| P :bar_chart:      |     &harr;     |     &rarr;      |                    |              |           |                 |          |               |                    |                |                  |           |                    |
| M :earth_americas: |     &harr;     |     &larr;      |       &larr;       |    &larr;    |           |     &harr;      |          |               |                    |                |                  |           |                    |
| 3D :milky_way:     |     &harr;     |                 |                    |              |           |                 |          |               |                    |                |                  |           |                    |


## How we are defining links

For each type of content here is a description of the files that stores links and the process to generate the links in the final pages to upload to Urantiapedia.

### The Urantia Book :blue_book:

- UB_B: The original file used to get the links is an existing work called Paramony, obtained from Urantia Foundation website: [Paramony.txt](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/paramony/Paramony.txt). The file was converted through Urantipedia Tools to a set of Markdown files (for example [The Urantia Book.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paramony/The%20Urantia%20Book.md)) and then added to _The Urantia Book_ in JSON format: [footnotes-book-en](https://github.com/JanHerca/urantiapedia/tree/master/input/json/book-en-footnotes). These JSON then are converted to HTML files that are uploaded to Urantiapedia: [The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book). The English Markdown files contain the full table with links. The other languages only have a table with translations of English texts.
- UB_A: Not yet defined. One option could be reverse A_UB with Urantiapedia Tools.
- UB_S: Not yet defined. One option could be reverse UB_S with Urantiapedia Tools.
- UB_O: A Markdown file with a pair of tables contains the list of books and the list of links (called paralells): [paralells.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paralells.md)
- UB_TI: The Topic Index is an index obtained from Fellowship website. This index has been formatted in a set TXT files: [topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en). This files contains links between sentences inside a topic and _The Urantia Boo_k. When creating HTML files to be upload to Urantiapedia we search for topics linking to each paragraph and introduce links in those words that match topic names. This process has some problems when same words share different topics, and now is a work in progress.
- UB_D: Not yet defined. We probably use a Diagram catalog as in maps.
- UB_I: Illustrations are being registered in a catalog using Markdown files: [image_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/image_catalog.md). When creating HTML files to be upload to Urantiapedia we search for illustrations linking to each paragraph and introduce images under those paragraphs. This process has some problems. It is a work in progress.
- UB_P: Not yet defined. We probably use a Presentations catalog as in maps.
- UB_M: Maps are being registered in a catalog using Markdown files: [map_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/map_catalog.md). When creating HTML files to be upload to Urantiapedia we search for maps linking to each paragraph and introduce a section with a thumnail and a button that links to the map page.
- UB_3D: Not yet defined. We probably use a 3D model catalog as in maps.
- UB_V: Not yet defined. We probably use a Video catalog as in maps. But this content as is external and usually in one given language (with no translations) is difficult to reproduce in every language.
- UB_C: Not yet defined. Same as for videos.
- UB_F: Not yet defined. Same as for videos.

<br>

### The Bible :closed_book:

- B_UB: The original files used to get the links is the same work called Paramony used from the UB_B, but this time linking Bible books with _Urantia Book_: [bible-refs-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/bible-refs-en). These files were converted through Urantiapedia Tools to a set of Markdown files: [paramony](https://github.com/JanHerca/urantiapedia/tree/master/input/markdown/en/paramony) and then added to Bible Books when they are converted to HTML files that are uploaded to Urantiapedia: [Bible](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/Bible). The English Markdown files contain the full table with links. The other languages only have a table with translations of English texts.
- B_A: Not yet defined. One option could be reverse A_B with Urantiapedia Tools.
- B_S: Not yet defined. One option could be reverse S_B with Urantiapedia Tools.
- B_O: Not yet defined. One option could be reverse O_B with Urantiapedia Tools.
- B_TI: Not yet defined. This process is difficult. We are going to have few links of type TI_B to be able to reverse them. One way could be use Paramony, that is B_UB, to find paragraphs of UB and then extract in them topic names used in UB_TI. Finally try to find those same topics in Bible verses.
- B_I: Not yet defined. An option could be use the same system as UB_I, with a catalog of images.
- B_M: Not yet defined.

<br>

### Articles :page_with_curl:

- A_UB: Articles usually come with references to _Urantia Book_. We are checking them and adding them manually, or sometimes through Regular Expressions that convert detected references to links. See below about the importance of a [global unique reference system for _The Urantia Book_](#global-unique-reference-system-for-the-urantia-book).
- A_B: The same as previous applies to Bible books. When a biblical reference is detected, either manually or through RegExp, they are converted to links.
- A_A: When an article references another article, something that rarely happens, we are going to add that links manually.
- A_S: The same as previous.
- A_O: If the article mentions a book that we have in Urantiapedia, we will add the link manually.
- A_I: For now we are including images that already exists in articles.
- A_M: Manual links.
- A_3D: Manual links.
- A_V: Manual external links.
- A_C: Manual external links.
- A_F: Manual external links.

<br>

### Study Aids :notebook:

- S_UB: Study Aids usually come with references to _Urantia Book_. We are doing here the same that A_UB.
- S_B: The same as A_B.
- S_A: This is a type of link that rarely occurs. We are adding them manually. 
- S_S: This is also rare. We are adding this manually.
- S_O: The same as previous.
- S_I: For now we are including images that already exists in studies.
- S_M: Manual links.
- S_3D: Manual links.
- S_V: Manual external links.
- S_C: Manual external links.
- S_F: Manual external links.

<br>

### Other Books :books:

- O_UB: Using same process as UB_O but inverting links it is possible to add links in a page of a book.
- O_B: If a book mention a Bible book we are introducing a link manually.
- O_I: We are including images that already exists in books.
- O_M: If a book contains maps we are not going to convert them to an interactive map, but as static image maps.

<br>

### Topic Index :card_index:

- TI_UB: The Topic Index, described for UB_TI, is used here in a direct way, introducing footnotes with links when Topic Index files in TXT format are converted to HTML to upload to Urantiapedia. The result is here: [topic](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/topic). For now we are only working in English and Spanish. We are repeating all the content in the files for each language.
- TI_B: Not yet defined. The Topic Index used mention Bible very rarely.
- TI_A: Not yet defined.
- TI_S: Not yet defined.
- TI_I: Not yet defined.
- TI_M: Manual links in the Links section.
- TI_3D: Manual links in the Links section.
- TI_V: Manual external links in the External Links section. We are adding Wikipedia links this way.
- TI_C: Manual external links.
- TI_F: Manual external links.

<br>

### Diagrams :memo:

- D_UB: We want to convert diagrams to SVG as much as possible, or HTML image maps. In the process we will be converting UB refs to links.
- D_B: The same as previous, trying to detect Bible links.

<br>

### Illustrations :sunrise_over_mountains:

For _Urantia Book_ their use has been explained in UB_I. For Bible in B_I. For articles, study aids and other books, in A_I, S_I and O_I. We need to define some way to add images to Topic Index.

<br>

### Presentations :bar_chart:

- P_UB: We want to convert presentations to something that can be added to Urantiapedia, not just links to Google Docs or similar. This way any UB ref or Bible ref will be converted to Urantiapedia links.
- P_B: The same as previous.

<br>

### Maps :earth_americas:

- M_UB: Once M_TI links are created, we can add links like this using TI_UB links.
- M_B: Once M_TI links are created, we can add links like this using TI_B links.
- M_TI: This type of links only will be possible if maps are converted to little interactive apps executing either in a embbedable map (for example using Google My Maps plarform) or as maps executing inside Urantiapedia (more recommended). When defining this maps (probably in a format like KML) we will add links to topic places as popup information shown in a side panel.

<br>

### 3D models :milky_way:

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
        <td><a href="/en/help/roles">Collaborator profiles</a></td>
      </tr>
    </tbody>
  </table>
</figure>