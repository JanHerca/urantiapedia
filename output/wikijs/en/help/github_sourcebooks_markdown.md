---
title: "Getting books supposedly used by revelators"
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
        <td><a href="/en/help/github_sourcebooks_catalog">Creating a catalog of books supposedly used by revelators</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_topicindex">Translation an revision of Encyclopedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

This describes how to get the books that are purported to be sources for *The Urantia Book* or have some relation or parallelism with *The Urantia Book*, and that have been cataloged following the task [Creating a catalog of “source” books](/en/help/github_sourcebooks_catalog).

## Process

This task consists of trying to locate a digital version of each book on the Internet, downloading it and processing it until obtaining a file or several files in [Markdown](/en/help/markdown) format.

These situations may arise:
- The book is not found on any downloadable website as digital. You can consider acquiring a paper copy if it is available or try to obtain it from a public library to scan it.
- The book has been found but is not downloadable, it can only be read online. Normally you can take screenshots of each page or do some web hacking to download the scans. We are using the [Greenshot capture software](https://getgreenshot.org/) for this purpose but you can use any other software.
- The book is downloadable but in the form of images or in a PDF where there is no text. You will need to use character recognition software (OCR). See below.
- The book is available for download as a PDF with text, or better yet, as a text file or as a web page. This is ideal in all cases. If it is only available as a PDF, it must be converted to text (see below).

### Downloading books

To obtain digital books, some sources may be:
- [Google Books](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)
- [The Gutenberg Project](https://www.gutenberg.org/)

Whatever the case, the task will be to note down the web address from where we have managed to download the book and download it to our PC. Then it would be convenient to send an email to urantiapedia@gmail.com indicating the web addresses of all the books that have been obtained. The *Administrators* are creating a Cloud storage for all the large files that do not fit on GitHub. The original books, which are sometimes very large PDFs, are being left there to avoid problems if the websites from which they were downloaded are no longer accessible in the future.

Once the book file has been converted to a text file, the task will consist of processing the book until obtaining a set of files in [Markdown](/en/help/markdown) format, one file for each chapter, preface or appendix of the book.

For any changes to folders and files on GitHub, please follow the instructions provided for [Administrators](/en/help/admin), [Editors-in-Chief](/en/help/github), or [Assistant Editors](/en/help/github_assistant) users.

### Copyright

Everything stated regarding _Copyright_ in the [Getting books of all religions](/en/help/github_religious_books_markdown) section of this manual also applies here.

### Scanning books with OCR

If it becomes necessary to scan a book, please see the [Getting books of all religions](/en/help/github_religious_books_markdown) section of this manual and follow the same steps.

### Converting PDF to Markdown

If you ever need to convert a PDF to Markdown, please refer to the [Getting Books of All Religions](/en/help/github_religious_books_markdown) section of this manual and follow the same steps.

## Structure of a Book on Urantiapedia

We already indicated in [the previous task](/en/help/github_sourcebooks_catalog) how the “source” books are organized into shelves and groups, and where you can consult the list of all the planned books.

The books must be saved in these folders of the GitHub project: `/output/wikijs/en/book` for books in English, `/output/wikijs/es/book` for books in Spanish, etc. Inside these folders we will create another one, if it does not exist, with the name of the author (with the blank spaces replaced by underscores). Finally, inside the author folder, we will create a folder for each book, where the chapters will go, and a Markdown file with the same name as the folder, where the book cover will go. For example, the folder `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us` contains the chapters of a book about astronomy, and the file `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us.md` is the cover of that book.

Regarding folder names, the following guidelines should be taken into account:
- They must be unique within each folder and must always contain three or more characters.
- If the book is to be part of a collection (volume 1, 2, etc.), add a suffix of `_1`, `_2`, etc. (up to a maximum of 9 volumes), or `_01`, `_02` (if more than 9 volumes are planned).
- The folder name must not have spaces or dashes, which should be replaced by underscores (`_`).
- The name will use the title of the book but as abbreviated as possible.
- The name will always be in English, so if the original book is not in English, the title is translated.
- Unusual characters such as colons, apostrophes, or exclamation points are removed.
- For example, if the title of a book is *Did Jesus exist?* the folder for that book would be called `Did_Jesus_exist`. If the title were *Principios de Teología* (a book originally in Spanish), the folder would be `Principles_of_Theology`.
- The same folder names will always be used for all languages. For example, the folder for the above example in English is `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us` and for Spanish it is `/output/wikijs/es/book/Sir_James_Jeans/The_Universe_Around_Us` (NOT ~~`/output/wikijs/es/book/Sir_James_Jeans/El_Universo_que_nos_rodea`~~). That is, the only thing that changes in the URL between different languages ​​is the language code (`en`, `es`, etc.). This makes many operations with paths on Urantiapedia easier.

Each chapter will be a file inside the book's folder called `xx.md` where `xx` will be:
- A number from 0 to N containing the chapter number (no title, just the number). Zero is reserved for a foreword or introduction where the author himself has not used a number to number it. If there is no foreword or introduction, the first chapter will be `1.md`, the second will be `2.md`, etc.
- `Index` for the index page, which will be left as `Index.md`. This page can sometimes be omitted if the index is not very long and the index will be included on the cover page.
- `Preface` for the page with the preface, if there is one, which will be left as `Preface.md`.
- Appendices should be named `Appendix_xx` where `xx` follows a numbering 1 to N.

An example of a finished book can be seen at `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us`.

## Basic formatting of a book on Urantiapedia

The format to use is Markdown, which is extremely simple to format compared to other alternatives.

Of all the [Markdown](/en/help/markdown) formatting, which is quite extensive, a contributor adding a "source" book to Urantiapedia will likely need to worry about nothing more than adding these things (listed below):
- A header for each file.
- An author's note immediately below the header.
- Sections within each chapter.
- Paragraphs properly separated.
- Bold and italics.
- Citations.
- Page break marks.
- Images.
- Image references.
- Footnotes.
- Tables.
- Mathematical formulas or characters in scientific notation.
- Navigation links.

This sounds like a lot of stuff, but Markdown is actually very simple and can be learned in less than an hour. In the following sections we will explain a little about each of the things on the list above.

### Header for each file

Here's an example of a header to add:

```
---
title: "The Universe Around Us — Chapter I — Exploring the Sky"
description:
published: true
date: 2021-11-28T14:02:03.086Z
tags: Cosmology, Astronomy
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---
```
It should be copied as is here and only the values ​​that go after the colons replaced. The title should be in quotes, and should be made up of the title of the book, and separated by a hyphen, from the title of the chapter, including its number.

It is not necessary to put anything in the description.

The creation date and current date should be the creation date of the file. The time is not relevant.

In _tags_ you should put tags, separated by commas, that have been established for that book. A complete list of the tags that are being used in Urantiapedia is available here: [Tags in Urantiapedia](https://github.com/JanHerca/urantiapedia/blob/master/docs/tags.md?plain=1). They can be left blank because it is very quick to fill them all at once in all the files of the book. Some recommendations are these:
- Labels must **be in English**. The option for translated labels is not currently available in [Wiki.js](https://js.wiki/), the software that Urantiapedia uses.
- The tag does not matter if it is in upper or lower case. `book` and `Book` are the same tag. In fact, they are all displayed in lower case on Urantiapedia: [Search by tag](https://urantiapedia.org/t). All existing tags are also displayed on this page.
- At least all files in a book must be tagged with `book` to indicate that it is Library content.
- It should at least bear a label from the shelf to which the book belongs: `Theology`, `Philosophy`, `Science`.
- For science books you can add one more label with the discipline. Some of the already created are: `Anthropology`, `Archaeology`, `Astronomy`, `Biology`, `Chemistry`, `Chronology`, `Cosmology`, `Evolutionism`, `Genetics`, `Geography`, `Geology`, `History`, `Linguistics`, `Mathematics`, `Medicine`, `Paleontology`, `Pedagogy`, `Physics`, `Politics`, `Psychiatry`, `Psychology`, `Sociology`.
- If a tag does not exist and you want to add it, just add it to the header of any file and that tag will be created.

### Author

Below the header, always add a byline, like this:

```
<p class="v-card v-sheet theme--light grey lighten-3 px-2">Sir James Jeans, M. A., D. Sc., Sc. D., LL. D., F. R. S.</p>
```

It is common in the Anglo-Saxon world to place the author's academic titles after the name, separated by commas.

### Section Marks

If a chapter has sections they should be marked as follows:

```
## The Solar System

### The Sun

### The Planets
```

First level sections will always be marked `##`, next level sections will be marked `###` and so on. It is not very convenient to use more than four levels even if the book does. As you can see we do not use sections with the `#` mark because they then create section titles that are too big.

### Correct paragraphs

A paragraph is a line within a Markdown file and must have a blank line before and after it. This must be guaranteed for each paragraph. In case the text is poetic, the lines of the stanzas can be kept together and only have a blank line before and after the stanza.

### Bold and italics

They are added as indicated:

```
This is a text in a paragraph *with some italics*.

This is a **new paragraph** that has something in bold.

Underscores can also be used to display _italic_ or __bold__.
```

As you can see, one asterisk or dash means italics, and two means bold.

### Quotes

If the author quotes a text, the quote should be highlighted as follows:

```
As the great Seneca said:

> “There is no favorable wind for the one who does not know where he is going.”
```

Simply add the `>` tag and separate the quote with a space.

If the quote is long and has several paragraphs, you can put it like this:

```
Cicero comments on this in several places:

> But in order that you may see whence all this born error of those who accuse pleasure and praise pain, I will open up the whole matter, and explain the very things which were said by that discoverer of truth and, as it were, the architect of a happy life.
> 
> But indeed we both accuse and with just hatred bring those who deserve it who are softened and corrupted by the flattery of present pleasures, blinded by greed for the pains and troubles they are about to experience, and do not provide for them.
```

Notice that we put a `> ` with a space after it on each paragraph separator line.

### Page jump marks

Since when converting each chapter of a book into a web page we lose the information about where we went from one page to another, it is convenient to add a mark that indicates this, so that we can have a way to reference pages of each book, since these books that we process in this task are not biblical books, which have a standard division into verses.

The page mark must be included between the words where you turn from one page to another as follows:

```
Beyond the asteroids come the four great planets Jupiter, Saturn, Uranus, and Neptune, all of them much larger than the Earth. Jupiter, the largest, has, according to Sampson, a diameter of 88,640 miles [142,652 km], or <span id="p18">[<sup><small>p. 18</small></sup>]</span> more than eleven times the diameter of the Earth; fourteen hundred Earth-sized bodies could be packed inside Jupiter and leave room to spare. Saturn, next in order, is second only to Jupiter in size, with a diameter of about 70,000 miles [112,654 km]. These two are by far the largest of the planets.
```

It can be seen that the mark is: `<span id="p18">[<sup><small>p. 18</small></sup>]</span>`.

Since this task can be tedious, one way to make it simpler is to put a shorter alternative mark, such as `ppp18` (`ppp` is a text that we know will never occur), to continue with the previous example. Then, these marks can be searched and replaced by the definitive ones automatically, as we have indicated in another example above. That is, this would also work:

```
Beyond the asteroids come the four great planets Jupiter, Saturn, Uranus, and Neptune, all of them much larger than the Earth. Jupiter, the largest, has, according to Sampson, a diameter of 88,640 miles [142,652 km], or ppp18 more than eleven times the diameter of the Earth; fourteen hundred Earth-sized bodies could be packed inside Jupiter and leave room to spare. Saturn, next in order, is second only to Jupiter in size, with a diameter of about 70,000 miles [112,654 km]. These two are by far the largest of the planets.
```

### Images

Images should be included like this:

```
<figure id="Universe_plate_01" class="image urantiapedia">
<img src="/image/book/Sir_James_Jeans/The_Universe_Around_Us/plate_01.png">
<figcaption><em><b>Plate I.</b> Letter by Franklin-Adams, The Milky Way in the Southern Cross Neighborhood</em></figcaption>
</figure>
```

You can copy the previous example wherever you need an image and replace just the following:
- Where it says `id="Universe_plate_01"` it should be a unique identifier for the image. You can put any one as long as there are no two alike in the same file for each chapter.
- Where it says `src="..."` there should be a path to the image file. The path should always start with `/image/`, which is where all the images are, and after it should be a path identical to the one we have for the book. That is, following the example, since the book is located at `/en/book/Sir_James_Jeans/The_Universe_Around_Us`, the images for that book should be located at `/image/book/Sir_James_Jeans/The_Universe_Around_Us`. The filename for each image can be any short filename, as long as it indicates the extension (`.png` or `.jpg`). It is recommended that the filename not contain any spaces or special characters, apostrophes or accents.
- If the image has a caption, it should be placed inside the `figcaption` tag.
- If you want to align the image to the left, center or right, replace `class="image urantiapedia"` with `class="image urantiapedia image-style-align-left"`, `class="image urantiapedia image-style-align-center` and `class="image urantiapedia image-style-align-right`, respectively. A few paragraphs below you have to add a line with `<br style="clear:both;"/>` so that the alignment stops affecting the placement of the text.

Since this task of including images can be tedious, you can use a trick like those mentioned above. If no image is going to have a caption, you could put something like `fff18` (or `fffl18`, `fffc18`, `fffr18`) as a way of simplifying that an image with number 18 (and even aligned) goes there.

### Image references

When the text mentions an image, it is a good idea to include an internal link to that image. For example, continuing with the image shown above, to include a reference you would put it like this:

```
... each of them too faint to be seen individually without telescopic aid (see [Plate I](#Universe_plate_01)).

... as we already saw in [Plate VIII](/en/book/Sir_James_Jeans/The_Universe_Around_Us/#Universe_plate_01) of the previous chapter ...
```

The syntax `[Plate I](#Universe_plate_01)` is the way to add hyperlinks in Markdown. The text to be displayed is indicated in square brackets, and just after that in parentheses is the web path. When the image is in the same chapter, just put `#` and then the identifier. If the image is in another chapter the syntax should be something like `[Plate I](/image/book/Sir_James_Jeans/The_Universe_Around_Us/3#Universe_plate_01)`. In this example we point to figure 1 which is in chapter 3.

### Footnotes

If your book has footnotes, or chapter endnotes, or global notes that appear at the end of the book but are marked in the book by a number or other indication, those annotation marks will always become chapter footnotes, as follows:

```
The fact that Altair and Saturn appear equally bright in the sky can only mean that Altair is 80,000 times farther away than Saturn[^1].

. . .

[^1]: Because the apparent brightness of an object falls off as the inverse square of its distance, and the square of 80,000 is approximately equal to 6 billion.
```

Footnotes are always marked as a sequential number starting at 1, and are written as `[^1]`, `[^2]`, etc. The `^` character is typed on the keyboard using `Shift + [` and then pressing space.

The footnote has two parts: one is the indication, which is placed right in the text, and the other is the note itself, which is placed at the end, behind anything else, of the file, each note with its mark, then a colon, and then the text, and each note separated from each other by a blank line. It is convenient to put a `## Notes` section for the notes, which as has been said should always go at the end of everything, including navigation links.


### Tables

Creating tables is always a complex task in any office software. Markdown makes it easy to create tables but it is still a complex task when the table has nested cells, aligned text, etc.

For example, it is very easy to create a table with two columns simply by using the “pipe” character (“|”):

```
Ages | Time
--- | ---:
Age of the earth | about 2,000,000,000 years
Age of life on earth | „ 300,000,000 „
Age of man on earth | „ 300,000 „
Era of astronomical science | „ 3,000 „
Era of telescopic astronomy | „ 300 „
```
To align the column to the left, right or center, simply use the characters `---`, `---:` and `:---:`, respectively, as shown in the example.

For tables requiring multiple lines per cell, a `<br>` separator may be used. For example:

```
Wavelengths (cms) | Nature of Radiation | Effect on Atom | Temperature (degrees abs.) | Where Found
--- | --- | --- | --- | ---
7,500 x 10^-8^<br>to<br>3,750 x 10^-8^ | Visible Light | Disturbs Outer Electrons | 3,850°<br>to<br>7,700° | Stellar Atmospheres
250 x 10^-8^<br>to<br>10^-8^ | X-Rays | Disturbs Inner Electrons | 115,000°<br>to<br>29,000,000° | Star Interiors
```

If you want to know more about how to format tables in Markdown, you can check it out here: [Markdown formatting help](/en/help/markdown), in the _Tables_ and _Advanced tables_ sections. Complex tables can be created in a very simple way with Markdown. If the table ultimately cannot be created in Markdown because it is too complex, it can always be created using HTML syntax. It is worth remembering that Markdown is an alternative way of writing HTML, but it also supports any HTML content. A good tutorial on creating HTML tables can be found in Mozilla Docs: [HTML table basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics).

It is worth keeping in mind that tables are poorly read on mobile devices when their width is greater than the screen width. To avoid this inconvenience, when the table has more than two columns, it is advisable to enclose the table in a side-scrolling container, as shown in this example:

```
<div class="urantiapedia-table-wrapper">

Wavelengths (cms.) | Nature of Radiation | Effect on Atom | Temperature (degrees abs.) | Where Found
--- | --- | --- | --- | ---
7,500 x 10^-8^<br>a<br>3,750 x 10^-8^ | Visible Light | Disturbs Outer Electrons | 3,850°<br>a<br>7,700° | Stellar Atmospheres
250 x 10^-8^<br>a<br>10^-8^ | X-Rays | Disturbs Inner Electrons | 115,000°<br>a<br>29,000,000° | Stellar interiors

</div>
```

### Mathematical formulas or characters in scientific notation

Creating mathematical formulas or using characters in scientific notation is always a complex task in any office software. Markdown makes their creation easier but it is still a complex task depending on the formulas or characters to be used because the syntax used is actually [LaTeX](https://es.wikipedia.org/wiki/LaTeX) through a Markdown extension called [Mathjax](https://www.mathjax.org/).

If you want to know more about how to format scientific formulas and texts in Markdown you can check it out here:[Markdown formatting help](/en/help/markdown), in the _Mathematical expressions (Mathjax)_ section.

### Navigation links

These links are placed in a simple table at the beginning and end of each chapter, and allow you to easily move from one chapter to another, or go to the index. They should be like the following example:

```
<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us/1">
            <span class="mdi mdi-arrow-left-drop-circle"></span><span class="pl-2">Capítulo I — Explorando el cielo</span>
          </a>
        </td>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us#índice">
            <span class="mdi mdi-book-open-variant"></span><span class="pl-2">Índice</span>
          </a>
        </td>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us/3">
            <span class="pr-2">Capítulo III — Explorando en el tiempo</span><span class="mdi mdi-arrow-right-drop-circle"></span>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</figure>
```

As mentioned above, the last thing in the file should always be the notes section, if there is one, even below these navigation links.

## Creating a cover file

To create the cover file, everything described in the [Getting books of all religions](/en/help/github_religious_books_markdown) section of this manual applies. As mentioned above, the cover file will be a Markdown file with the same name as the folder with the chapters. For example, the folder `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us` contains the chapters of a book about astronomy, and the file `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us.md` is the cover file for that book.

## Submitting pull requests

This completes all the things to take into account when adding "source" books to the Urantipedia Library. Once these changes have been made to the GitHub project, a pull request must be submitted as detailed in the [Administrators](/en/help/admin), [Chief Editors](/en/help/github) or [Assistant Editors](/en/help/github_assistant) user manuals.


## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)
- [Google Books](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)
- [The Gutenberg Project](https://www.gutenberg.org/)
- [Markdown Format Help](/en/help/markdown)

<br>


<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_sourcebooks_catalog">Creating a catalog of books supposedly used by revelators</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_topicindex">Translation an revision of Encyclopedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>