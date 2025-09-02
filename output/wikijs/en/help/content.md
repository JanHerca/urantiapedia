---
title: Urantiapedia content
description: 
published: true
date: 2021-12-08T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/principles">Principles ruling Urantiapedia</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/phases">Project Milestones</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Here is a detailed explanation of all types of content expected for *Urantiapedia*, how is accessed, organized, and who can change it.

## How content is organized

As in any Wiki in [Urantiapedia](https://urantiapedia.org) there are pages, each one with a unique title and URL. For example:
* https://urantiapedia.org/en/The_Urantia_Book/156 is the URL for a page with the paper 156 of Urantia Book in English.
* https://urantiapedia.org/es/article/Norm_Duval/How_big_is_Orvonton is the URL for a page with an article about Orvonton in Spanish.
* https://urantiapedia.org/fr/topic/Andrew is the URL for a page about the apostle Andrew in French.

Each page can be an article, a chapter of a book, the index page of a book, an index grouping links to other pages, and so on. What pages comprise is up to the creativity of users and can be modified at any time as needs change, although once a page is created it is recommended to make it permanent and use redirections if it is needed.


## User groups

The table summarizes the user groups inside the web:

Group | Description of users in the group
--- | ---
ADMIN | User that can do everything
EDITOR (1) | User that after a request has been validated and authorized by an ADMIN user to edit books, articles & study aids, slides, maps, 3D models and assets (images, audio, video).
AUTHOR (2) | User inside a group with his name that acts as EDITOR but only for a restricted collection of books, articles, etc. authored by the user.
REVIEWER | User that only can view pages, view the history and make comments.
USER | Any user not registered. Only for viewing pages.

(1) At first stages of the project some types of content are only editable using *Urantiapedia Tools* by users called *Editors-in-Chief*, outside *Urantiapedia* web. Once the starting content is uploaded in each milestone of the project, *Urantiapedia Tools* is no more used and users in EDITOR group will be able to edit content through this web.

(2) AUTHOR means that there will be several groups of type AUTHOR, each one contaning users that are the authors (or authorized by the authors) for given pages. For example, if there are two users named Han Solo and Obi Wan that want to be authors, there will be a pair or groups named HANSOLO and OBIWAN, the first with Han Solo user, the second with Obi Wan user. The first will be the only user that could edit pages in paths like `/en/article/hansolo/` (and any other locale apart from English), `/en/slides/hansolo`, and so on. On the other hand, Obi Wan user could edit pages in paths like `/en/article/obiwan/`, `/en/slides/obiwan/` and so on. This way some users will be the only editors of certain pages.

Be aware that the only users that can delete pages are ADMIN or AUTHOR users to ensure that links are not broken. So the process with a page is:
1. Creation:
  - EDITOR or AUTHOR users creates a page directly in this site, or
  - ADMIN user creates a number of pages at once by a bulk-upload process (ADMIN users can be helped on this by EDITOR and AUTHOR users through the use of GitHub)
2. Edition:
  - EDITOR or AUTHOR users edit a page directly in this site, or
  - ADMIN user edits a number of pages at once by a bulk-upload process (ADMIN users can be helped on this by EDITOR and AUTHOR users through the use of GitHub)
3. Deletion or Move (if required):
  - ADMIN user deletes or moves a page ensuring that any linked page is updated.
  - AUTHOR user deletes or moves a page if it is inside it owned folders.

## Page types

The table summarizes the types of pages. Table shows the minimum user group required to edit the type of page. ADMIN users can do everything so when table says EDITOR or AUTHOR it implies also ADMIN. When the table says AUTHOR user, it means that there are several users of this type and each one controls the pages within the indicated folder, being the only one with permissions to edit them.

The table shows the URL path to add to [https://urantiapedia.org](https://urantiapedia.org) domain to obtain the URL for english. Replace language code with the one desired for other languages. For example, the URL to obtain the index of *The Urantia Book* is:
- in english: https://urantiapedia.org/en/The_Urantia_Book/Index
- in spanish: https://urantiapedia.org/es/The_Urantia_Book/Index

More on URLs in section below.

Type | Description | Creation | Modif. | Removal | URL
--- | --- | --- | --- | --- | ---
WEBPAGE | Pages of Wiki itself like start page, help pages, roadmap | ADMIN |  ADMIN | ADMIN | /en/help/
BOOK_UB | The Urantia Book | ADMIN | ADMIN | ADMIN | /en/The_Urantia_Book/
BOOK_BIBLE | The Bible | ADMIN | ADMIN | ADMIN | /en/Bible/
BOOK_AUTHORED | Book from an author user | AUTHOR | AUTHOR | AUTHOR | /en/book/user_name/book_title/
BOOK_PUBLIC | Book that anyone can edit | EDITOR | EDITOR | ADMIN | /en/book/author/book_title/
TOPIC | Term, topic or concept mentioned in The Urantia Book | ADMIN | EDITOR | ADMIN | /en/topic/topic_name/
INDEX | Pages with collections of links | ADMIN | EDITOR | ADMIN | /en/index/index_name
ARTICLE_AUTHORED | Article from an author user | AUTHOR | AUTHOR | AUTHOR | /en/article/user_name/article_title
ARTICLE_PUBLIC | Article that can be edited by anyone | EDITOR | EDITOR | ADMIN | /en/article/author/article_title
SLIDES_AUTHORED | Slides from an author | AUTHOR | AUTHOR | AUTHOR | /en/slides/user_name/slides_title
SLIDES_PUBLIC | Slides that can be edited by anyone | EDITOR | EDITOR | ADMIN | /en/slides/slides_title
MAPS_AUTHORED | Map (1) from an author | AUTHOR | AUTHOR | AUTHOR | /en/map/user_name/map_title
MAPS_PUBLIC | Map (1) that can be edited by anyone | EDITOR | EDITOR | ADMIN | /en/map/map_title
3DMODEL_AUTHORED | A 3D model from an author | AUTHOR | AUTHOR | AUTHOR | /en/3dmodel/user_name/3dmodel_name
3DMODEL_PUBLIC | A public 3D model | EDITOR | EDITOR | ADMIN (2) | /en/3dmodel/3dmodel_name
IMAGE | An image, either a drawing or a graph schema or illustration | EDITOR or AUTHOR | EDITOR or AUTHOR | ADMIN (3) | /en/image/image_name

1. Maps can be in 2D or 3D an can contain:
   - Point marks with a popup showing locations. Popups can have links to Wiki or external.
   - Paths: several pathpoints with popups in each showing a traveling of a person or people. This paths can be shown as animations.
   - Areas: polygons showing location of something without a specific location like empires or nations.
2. A 3D model only can be removed if there is no other page that links to it. The page of the 3D model, the page that allows to update the 3D model, must allow to know the list of pages that uses the 3D model. 3D models only could be upload in certain format (preferably glTF) and max sizes.
3. An image only can be removed if there is no other page that links to it. The page of the image, the page that allows to update the image, must allow to know the list of pages that uses the image. Images only could be upload in certain formats and max sizes.


## Help pages

These are pages with content about *Urantiapedia* itself, like user manuals, recommendations, policy documents, progress status and the like. These pages have this URL pattern: `https://urantiapedia.org/[lan]/help/[title]`


## Books

This includes not only *The Urantia Book* in all its translations but also the Bible and any public-domain book that is assumed to be a source used by revelators or with content that can explain topics of *The Urantia Book*. Also can be included books that are derivative works from *The Urantia Book* whose authors want to offer with an open license. All this could comprise a kind of *urantian library*, something like [Wikisource](https://wikisource.org/wiki/Main_Page) or [Archive.org](https://archive.org/) but for everything related with _Urantia Book_.

### The Urantia Book

Regarding *The Urantia Book* there is a main page for each translation with the title, copyright, year, etc, one page for the index of the papers, one page for the extended version of the index, and finally one page for each paper. For english, some examples of these pages:
- https://urantiapedia.org/en/The_Urantia_Book
- https://urantiapedia.org/en/The_Urantia_Book/Index
- https://urantiapedia.org/en/The_Urantia_Book/Index_Extended
- https://urantiapedia.org/en/The_Urantia_Book/147

Other content as the *Publishing mandate* also can be included under the same path.

Each paper page has, apart from the content itself with sections, some extra sections:
- *References* contain links for quotes or supposed quotes. In *The Urantia Book* the authors themselves indicate that they often act more as compilers than revelators, using existing human documentation. Sometimes what is a verbatim quote is implied because developers use quotation marks. In others the quote is only subtle and difficult to detect. Many readers have found these quotes over time. Quotations often refer to a passage in *The Bible*, or to a book on religion, philosophy, or science from the time the revelations were written or earlier. In this *References* section is where links will be placed to the biblical passage or to any other book used by revelators. *The Bible* and other sources will also be within the *Urantiapedia* as long as the books are in public domain, so that possible sources of revelators can be read while reading the book.
- *Links* are links to any article, topic, index or image that is related to the paper and provides helpful content that clarifies the paper.
- There could also be an *External Links* section with links to other websites that could have useful information related to the paper.

This sections with *References*, *Links* and *External links* will be a common pattern in most of *Urantiapedia* pages.

### The Bible

Regarding *The Bible*, as it is a main book massively quoted from *The Urantia Book* authors, it has a short path to it. Each book of the Bible has one page, and each chapter one page for it. For example, these are links for books and chapters of Genesis an gospel of John:
- https://urantiapedia.org/en/Bible/Genesis
- https://urantiapedia.org/en/Bible/Genesis/Index
- https://urantiapedia.org/en/Bible/Genesis/2
- https://urantiapedia.org/en/Bible/John
- https://urantiapedia.org/en/Bible/John/Index
- https://urantiapedia.org/en/Bible/John/2

Valid book names to use in the URL:

 | | | | |
 --- | --- | --- | ---
Genesis | Exodus | Leviticus | Numbers 
Deuteronomy | Joshua | Judges | Ruth
1_Samuel | 2_Samuel | 1_Kings | 2_Kings
1_Chronicles | 2_Chronicles | Ezra | Nehemiah
Esther | 1_Maccabees | 2_Maccabees | Job
Psalms | Proverbs | Ecclesiastes | Song_of_Solomon
Sirach | Wisdom_of_Solomon | Isaiah | Jeremiah
Lamentations | Baruch | Ezekiel | Daniel
Hosea | Joel | Amos | Obadiah
Jonah | Micah | Nahum | Habakkuk
Zephaniah | Haggai | Zechariah | Malachi
Matthew | Mark | Luke | John
Acts_of_the_Apostles | Romans | 1_Corinthians | 2_Corinthians
Galatians | Ephesians | Philippians | Colossians
1_Thessalonians | 2_Thessalonians | 1_Timothy | 2_Timothy
Titus | Philemon | Hebrews | James
1_Peter | 2_Peter | 1_John | 2_John
3_John | Jude | Revelation | Bel_and_the_Dragon
Prayer_of_Manesseh | Tobit | Judith | Book_of_Enoch
Assumption_of_Moses

Other book related with Bible as non canonical books can be placed under the same path if they are related to *The Urantia Book* in some way. One good example is the book of Enoch, that is mentioned explicitly.

### Other books supposed to be sources

Regarding any other book apart from Bible that is a possible source of *The Urantia Book*, they can be added in a `book` path, with one page for book title, author, copyright and date, one for the index, and one for each chapter. It is important that if books are old and have been scanned, both the scanned images and the text be made available. Images can be added as a collection of images linked in an *Original* section at the bottom of each chapter text.

For example, Matthew Block is a reader that has done a great work finding source material of *The Urantia Book*, as explained in https://urantiabooksources.com/. One of the books he has identified as a possible source of revelators is *The Universe Around Us*, from sir James Jeans, published in 1930. As this book has entered public domain, it can be added to *Urantiapedia*, and links to this book can be like this:
- https://urantiapedia.org/en/book/Sir_James_Jeans/The_Universe_Around_Us
- https://urantiapedia.org/en/book/Sir_James_Jeans/The_Universe_Around_Us/3

### Other Books from the World's Great Religions

The authors of The Urantia Book recommend that we familiarize ourselves with the religious writings of all religions because they all contain beneficial material ([UB 92:7.3](/en/The_Urantia_Book/92#p7_3)) and because achieving worldwide brotherhood requires greater knowledge of the literature of other nations ([UB 52:6.4](/en/The_Urantia_Book/52#p6_4)). Following this principle, in Urantiapedia we will compile books from all the world's great religions.

These books can be added to the `book` path. Within this path, there will be folders for each major religion, as follows:
- `Bahaism`: books of the Bahai faith.
- `Buddhism`: books of Buddhism.
- `Christianity`: books of Christianity.
- `Confucianism`: books about Confucianism.
- `Hinduism`: books about Hinduism.
- `Islam`: books about Islam.
- `Jainism`: books about Jainism.
- `Judaism`: books about Judaism.
- `Shintoism`: books about Shintoism.
- `Sikhism`: books about Sikhism.
- `Taoism`: books about Taoism.
- `Zoroastrianism`: books about Zoroastrianism.

For example:
- A Bahai book in Spanish: https://urantiapedia.org/es/book/Bahaism/The_Splendour_of_God
- A Buddhist book in English: https://urantiapedia.org/en/book/Buddhism/The_Gateless_Gate
- The Quran in French: https://urantiapedia.org/fr/book/Islam/Quran

### Other books from readers

Readers can also add to *Urantipedia* their own written books if they want to share as a public license. The way to add them is as with any other book, in the `book` path, with one page for title, author, copyright notice and date, one page for index, and one page per chapter. Books, of course, must have a relation with *The Urantia Book* and provide some kind of help in the understanding of the book, not be novels or any inspired work with few relations to the book.

The URL pattern for these books is like this: `https://urantiapedia.org/en/book/[author]/[book_title]` for books with a known author or `https://urantiapedia.org/en/book/[book_title]` for anonymous books. Be aware that book title in URL is recommended to be in english even if the original language in which the book is written is not english. Check more about this in a section below.


## Articles, Study aids and Diagrams

This includes any article, help material and opinion document that may be interesting for studying and understanding *The Urantia Book*.

Each will be a page with sections. It is highly recommended to have the common sections *References*, *Links* and *External links*. Images will be added so that they are linkable as entities by themselves, so that many articles can share the same images without repeating them. *References* are important. Many readers have written articles in which they do not correctly include the reference to a quote from Urantia book or from any scientific paper. Whenever possible, these articles should be amended to add these missing references. Without references, the information is not true.

The URL pattern for an article should follow this: `https://urantiapedia.org/en/article/[author]/[article_title]` for articles with known author or `https://urantiapedia.org/en/article/[article_title]` for anonymous articles. Be aware that although articles has a title in the original language in which they were written by its author, it is a good practice to use a translated name in english. This way URL may have a consistent pattern.

Let's put an example. Imagine a spanish reader has created an article titled *Nazaret en tiempos de Jesús*, that we can translate to *Nazareth in Jesus times*. The better choice for URL would be

https://urantiapedia.org/es/article/Jan_Herca/What_was_Nazareth_like_in_the_time_of_Jesus

instead of

https://urantiapedia.org/es/article/Jan_Herca/Cómo_fue_Nazaret_en_tiempos_de_Jesús

Be aware that the purpose of *Urantiapedia* is allow a multi-language content for everybody, and any page uploaded to it is expected to be translated to all supported languages at some point in future. English titles provide a unified common way to identify URLs. This do no affects the title of the page, that is always a different value from the URL. More on this in a section below.

This type of content includes also schemas or drawings with schematics. The are a number of technologies that allow easy creation of diagrams and charts that are currently supported in *Urantiapedia*: [Kroki](https://kroki.io/), [Mermaid](http://mermaid-js.github.io/mermaid/#/) and [PlantUML](https://plantuml.com/). If previous diagram generators are not enough for *The Urantia Book* purposes (because they are mainly for software development) it is possible to use any content in [SVG format](https://developer.mozilla.org/en-US/docs/Web/SVG), that is the best recommended format to create diagrams, schemas or charts.

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/help/sample_page_article.png">
<figcaption><em> Sample of rendering an article.</em></figcaption>
</figure>

## Topics

These are a type of article related to a specific topic of *The Urantia Book*. For example, could be concepts like [absonity](/en/topic/absonity), or people like [Grandfanda](/en/topic/Grandfanda), or types of beings like [Thought Adjusters](/en/topic/Thought_Adjusters), or places like [Nazareth](/en/topic/Nazareth) or [Orvonton](/en/topic/Orvonton_(superuniverse)), or events like the [arrival of Adam and Eve](/en/topic/Adam#arrival-of-adam-and-eve), etc.

Each topic will have the common sections *References* with links to *The Urantia Book*, *Links* with links to other pages in *Urantiapedia*, and *External links* section for more links outside the page. For example, the page about *Nazareth* can contain a brief and basic explanation about Nazareth (where it is, why it is important, geographic coordinates with links to maps), but the *Links* section can have a link to an article in which a reader delves into the city of Jesus, what it was like in Jesus time and what archaeological finds have been found that seem to corroborate or not the book's claims.

The URL pattern for a topic is: `https://urantiapedia.org/en/topic/[topic_name]`. Topic names are always in english although the title in the page will be in each given language.


## Indexes

Different indexes are included here. If the number of elements obtained in the index is very high, there can be a main page with main sections and then secondary pages. Whenever possible it is preferable that each index is only one page, so that it is easier to locate something.

These could be some of the indexes:

Index | Description | Sorted | Path
--- | --- | --- | ---
List of indexes | List of all indexes | As this table | /en/index/index
Index of topics | Known as Glossary | Alphabetically | /en/index/topics
Index of people | Subset of Glossary for proper names for persons or personalities | Alphabetically | /en/index/people
Index of beings | Subset of Glossary for types of beings in the universe (1) | Alphabetically | /en/index/beings
Index of places | Subset of Glossary for places, in the universe or on Earth | Alphabetically | /en/index/places
Biblical Index | For each book of Bible, links to *The Urantia Book* where a verse is relevant | By biblical order (Genesis, Exodus, etc.) | /en/index/biblical
Index of References | For each document of *The Urantia Book*, all references in other books, either Bible or others | By book paper | /en/index/references
Index of quotes | List of references in the book to emblematic sentences | By themes (God, the Universe, the Angels, Jesus, etc.) | /en/index/quotes
Chronology of the Earth | Events in Earth (2) | Chronologically | /en/index/earth_timeline
Chronology of the life of Jesus | Description of main Jesus events and links to the book | By year, month and day | /en/index/Jesus_timeline

(1) If a type of being receives different names (for example, *Third Source and Center* = *Conjoint Actor*), each entry will have next to it the list of the rest of equivalent terms.

(2) Chronologies can be considered a type of event index. In this case it would be a chronology, ordered by date, of the events of the earth's evolutionary development. It could include the historical events mentioned in the book.


## Images

Images are special content because they almost always don't require translation into different languages. For this reason, the images are located in a common folder for the entire website, located at the root: `https://urantiapedia.org/image/`. There is no separate folder for each language.

Within this folder, the images are organized into subfolders as follows:

* `article`: Images for the Newspaper Archive. It is preferable that all images for a publication be located in a folder specific to that publication.
* `book`: Images for the Library. The structure within the folder should be identical to that of the `[language]/book` folder shown above.
* `diagram`: Diagrams. Infographics or charts that explain and clarify topics in the book.
* help: Images for this Urantiapedia help.
* `map`: Maps. Static maps, although they may contain links if they are in `svg` format or if they use [HTML image maps](https://www.w3schools.com/html/html_images_imagemap.asp).
* `The_Urantia_Book`: Images to illustrate _The Urantia Book_.

Supported image formats include: `jpg`, `jpeg`, `png`, `gif`, `webp`, `svg`.

## Maps

Maps will not be simple static images. This type of maps will be saved inside the images section. The maps will be interactive applications that will allow:
- pan and zoom in the map if it has been set with this option, always within some extent limits.
- center the map on the content.
- click on elements within the map and obtain information panels in which links may appear that allow you to jump to other pages of *Urantiapedia* or to other websites.
- click on a play button on a virtual tour that starts an animation with explanations.

The URL pattern for maps is:
- for a public map, which any editor can modify: `https://urantiapedia.org/en/map/[map_name]`
- for an author map, which can only be modified by the author or someone authorized: `https://urantiapedia.org/en/map/[user_name]/[map_name]`

Maps will allow to link to a position within the map through parameters, either by a name or by coordinates. For example, let's imagine a map page of Jesus' flight journey north with his apostles. This map could have this URL:

https://urantiapedia.org/en/map/Places_visited_by_Jesus_in_Palestine

When this type of map is fully operational, two ways to open this Ramah-centric map would be:
- `https://urantiapedia.org/en/map/Places_visited_by_Jesus_in_Palestine?name=Ramah`
- `https://urantiapedia.org/en/map/Places_visited_by_Jesus_in_Palestine?lonlat=32.936424,35.367742`

The names of the maps in URL have already been explained that it is needed to be in English.

<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/help/sample_page_map.jpg">
<figcaption><em> Sample of rendering an interactive map.</em></figcaption>
</figure>


## Slides

Slides are text documents that are displayed on the page as animated presentations. It's basically like an article in which you can move through it by pressing the forward and back keys or by scrolling your finger on a touch device, moving from one slide to another.

The URL pattern for slides is:
- for a public presentation, which any editor can modify: `https://urantiapedia.org/en/slides/[slides_name]`
- for an author presentation, which can only be modified by the author or someone authorized: `https://urantiapedia.org/en/slides/[user_name]/[slides_name]`

The URLs will have a parameter to open on a given slide.

<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/help/sample_page_slides.png">
<figcaption><em> Sample of rendering a presentation.</em></figcaption>
</figure>


## 3D Models

3D models are applications, like maps. They will allow you to move freely around the model within certain limits, focus on the whole model and show an information panel about clickable elements. It could also contain different animations that would be executable independently, to show something animated.

The URL pattern for 3D models is:
- for a public 3D model, which any editor can modify: `https://urantiapedia.org/en/3dmodel/[3dmodel_name]`
- for an authored 3D model, which can only be modified by the author or someone authorized: `https://urantiapedia.org/en/3dmodel/[user_name]/[3dmodel_name]`

Like maps, 3D models will support centering on an item using a name, such as: `https://urantiapedia.org/en/3dmodel/Jerusem?name=Mansonia_7`

<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/help/sample_page_3d.jpg">
<figcaption><em> Sample of rendering a 3D model.</em></figcaption>
</figure>

## URLs

Each page in *Urantiapedia* has both a title and an URL. Titles can be repeated throughout the site if needed, but each URL must be unique. To achieve this URLs must follow this generic pattern:

`https://urantiapedia.org/[lan]/[path]/[user_name?]/[page name]`

- `[lan]` is the code of any language supported, that are the languages with a translation for *The Urantia Book*. Check [Languages supported](/en/help/languages).
- `[path]` is the path depending in the type of page:
	- Page of the site: `help`
	- *The Urantia Book*: `The_Urantia_Book`
	- *The Bible*: `Bible`
	- Other books: `book`
	- Topic: `topic`
	- Index: `index`
	- Article: `article`
	- Presentation: `slides`
	- Map: `map`
	- 3D model: `3dmodel`
- `[user_name]`, if it exists, is the name of the author, either the name of a user that can modify pages, or a public author. It is recommended not to use accented characters in the name to make it easier to write.
- `[page name]` is the name that appears in URL, that must have underscores instad of white spaces. For books each page is a chapter, so `[page name]` must just a number, the one of the chapter. If the book contains a preface that chapter is numbered zero.

`[book title]` and `[page name]` should have short names whenever possible and preferably in english. English is the default language of the site. The reason for this is *The Urantia Book* was written in english and today is a universal language used everywhere. Having different page_names for different languages make it harder to switch between languages and should require a system to connect sibling pages. By using a unique page name for all translations it is easier to know how to reach any page in any language once the english page is known.

Examples of URLs:
- https://urantiapedia.org/de/help/start
- https://urantiapedia.org/ja/The_Urantia_Book
- https://urantiapedia.org/hu/The_Urantia_Book/Index
- https://urantiapedia.org/it/The_Urantia_Book/Index_Extended
- https://urantiapedia.org/en/The_Urantia_Book/147
- https://urantiapedia.org/bg/Bible/Genesis
- https://urantiapedia.org/es/Bible/Genesis/Index
- https://urantiapedia.org/id/Bible/Genesis/2
- https://urantiapedia.org/lt/Bible/John
- https://urantiapedia.org/ro/Bible/John/Index
- https://urantiapedia.org/en/Bible/John/2
- https://urantiapedia.org/en/book/Sir_James_Jeans/The_Universe_Around_Us
- https://urantiapedia.org/en/book/Sir_James_Jeans/The_Universe_Around_Us/3
- https://urantiapedia.org/fr/topic/Andrew
- https://urantiapedia.org/es/article/Jan_Herca/What_was_Nazareth_like_in_the_time_of_Jesus
- https://urantiapedia.org/es/article/Norm_Duval/How_big_is_Orvonton
- https://urantiapedia.org/en/index/topics
- https://urantiapedia.org/en/index/people
- https://urantiapedia.org/ru/image/Master_Universe
- https://urantiapedia.org/pt/slides/Part_II_Introduction
- https://urantiapedia.org/cs/map/Jesus_Second_Preaching_Tour
- https://urantiapedia.org/es/3dmodel/Isle_of_Paradise

It is a good idea to mantain these conventions so URL have a consistent way of being constructed and this way are easier to remember.


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
        <td><a href="/en/help/principles">Principles ruling Urantiapedia</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/phases">Project Milestones</a></td>
      </tr>
    </tbody>
  </table>
</figure>