---
title: "Get “source” books"
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
        <td><a href="/en/help/github_sourcebooks_catalog">Creating a "source" book catalog</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_articles_catalog">Creating Article Catalog</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Described here is how to obtain the books that are supposed to be sources of *The Urantia Book* or have any relation or parallel to *The Urantia Book*, and have been cataloged following the task [Creating a Catalog of "Source" Books](/en/help/github_sourcebooks_catalog).

## Process

### Book download

This task consists of trying to locate a digital version of each book on the Internet. These situations can occur:
- The book has not been found on any downloadable website as digital. You might consider purchasing a paper copy if it's available or trying to get someone to get it from a public library to scan it.
- The book has been found but it is not downloadable, it can only be read online. Normally you can take screenshots of each page or do some web hacking to download the scans.
- The book is downloadable but in the form of images or in a PDF where there is no text. You will need to use character recognition (OCR) software.
- The book is downloadable as a PDF with text, or even better, as a text file. This is the ideal of all cases.

To obtain digital books, some sources can be:
- [Google Books](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)

Whatever the case we find ourselves in, the task of an “Assistant Editor” will be to write down the web address where we have managed to download the book and download it to our PC. Both items should then be sent to any of the *Urantiapedia* Administrators or to urantiapedia@gmail.com. The Admins are creating a Cloud storage collection of all the large files that don't fit on GitHub.

The task is then handed over to a “Chief Editor”, who will process the book into a single Markdown file with all of it. This file is by no means finalized and the job will be to clean it up and format it properly so that it can be uploaded to *Urantiapedia*. This is what we are going to see how to do next.

### Structure of a book on Urantiapedia

If you are a “Chief Editor” and will be using the GitHub platform, books should be saved in these GitHub project folders: `/output/wikijs/en/book` for English books, `/output/wikijs/es/book ` for books in Spanish, etc. Within these folders we will create another one, if it does not exist, with the author's name (with blank spaces replaced by underscores). Finally, within the author's folder, we will create a folder for each book to which we will put a unique name following this criteria:
  - The name will use the title of the book but as abbreviated as possible.
  - The name will always be in English, so if the original book is not in English, the title is translated.
  - Blank spaces are replaced by underscores.
  - Special characters like colons or exclamations are removed.
  - For example, if the title of a book is *Did Jesus exist?* the folder for that book would be called `Did_Jesus_exist`. If the title were *Principios de Teología* (Spanish), the folder would be `Principles_of_Theology`.

If you are an “Assistant Editor” and you are not going to use the GitHub platform to send files, simply create any folder on your PC. Then when you send your work to an Administrator he or she will take care of creating the correct folders.

Each chapter will be a file inside the book folder called `xx.md` where `xx` will be:
- A number from 0 to N with the number of the chapter (without the title, only the number). The zero is reserved for a prologue or introduction in which the author himself has not used a number to number it. If there is no prologue or introduction, the first chapter will be `1.md`, the second will be `2.md`, and so on.
- `Index` for the index page, which will be left as `Index.md`.
- `Preface` for the page with the preface, if any, which will be left as `Preface.md`.

An example of a finished book can be seen at `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us`.

### Basic format of a book on Urantiapedia

The format to use is Markdown, which is extremely simple for styling compared to other alternatives.

The “Assistant Editor” should review the text and add the following (as detailed below):
- A header in each file.
- Immediately below the header, an indication of the author.
- Section markings within each chapter.
- Correct paragraphs.
- Bold and italics.
- Quotes.
- Page break marks.
- Images.
- References to images.
- Footnotes.
- Tables.
- Mathematical formulas or characters in scientific notation.

Some of the above items are complex and an “Assistant Editor” could skip them in a first review. You can simply annotate those parts with some specific markup for a “Chief Editor” to review later.

### Header of each file

This is an example of header to add:

```
---
title: "The Universe Around Us — Chapter I — Exploring the Sky"
description:
published: true
date: 2021-11-28T14:02:03.086Z
tags: Cosmology, Astronomy
publisher: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---
```
It should be copied as it is here and replace only the values ​​that come after the colon. The title should be enclosed in quotation marks all over it, and should be formed from the title of the book, and separated with a hyphen, the title of the chapter, including its number.

In the description it is not necessary to put anything.

Put the creation date and current date the same and make it the creation date of the file. The time is not relevant.

In tags you have to put labels, separated by commas, that have been established for that book. Normally “Chief Editors” decide which are the most appropriate tags, so they can be left blank and then filled in all at once in all files of the book.

### Author

Below the header, always add a byline, like this:

```
Author: **Sir James Jeans, M. A., D. Sc., Sc. D., LL. D., F.R.S.**
```

It is common in the English world to place the academic titles of the author after the name, separated by commas.

### Section marks

If a chapter has sections they should be marked, as follows:

```
## The solar system

### Sun

### The planets
```

First level sections will always have the `##` tag, next level sections `###` and so on. It is not very convenient to use more than four levels even though the book does. As you can see we don't use sections with the `#` mark because they create too big section titles afterwards.

### Correct paragraphs

A paragraph is a line within the Markdown file and must have a blank line before and after it. It must be ensured that this occurs in each paragraph.

### Bold and italics

They are added as indicated:

```
This is text in a paragraph *with some italics*.

This is a **new paragraph** that has something in bold.

Underscores can also be used to display _italic_ or __bold__.
```

As you can see, one asterisk or hyphen means italics, and two means bold.

### Quotes

If the author quotes a text, that citation should be highlighted as follows:

```wrap
As the great Seneca once said:
> «There is no favorable wind for those who do not know where they are going».
```

Simply add the `>` mark and separate the quote with a space.

If the quote is long and has several paragraphs, it can be written like this:

```wrap
In several places Cicero comments:
> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
> 
> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolor et quas discomfort excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
```

Notice that we put a `> ` with a trailing space on each paragraph separator line.

### Page break marks

Since when converting each chapter of a book into a web page we lose the information of where we went from one page to another, it is convenient to add a mark that signals it, in order to have a way to reference pages of each book, since these books that we process in this task are not biblical books, which have a standard division in verses.

The page mark must be included between the words that go from one page to another as follows:

```wrap
Beyond the asteroids come the four great planets Jupiter, Saturn, Uranus, and Neptune, all of them much larger than Earth. Jupiter, the largest, is, according to Sampson, 88,640 miles [142,652 km] in diameter, or <span id="p18">[<sup><small>p. 18</small></sup>]</span> more than eleven times the diameter of the earth; Fourteen hundred Earth-sized bodies could be packed inside Jupiter and leave room to spare. Saturn, next in order, is second only to Jupiter in size, with a diameter of about 70,000 miles [112,654 km]. These two are by far the largest of the planets.
```

You can see that the markup is: `<span id="p18">[<sup><small>p. 18</small></sup>]</span>`.

Since this task can be tedious, one way to make it simpler is to put in a shorter alternative markup, like `ppp18` if using the previous example. Then a “Chief Editor” can detect these marks and replace them with the definitive ones automatically. That is, it would also be worth:

```wrap
Beyond the asteroids come the four great planets Jupiter, Saturn, Uranus, and Neptune, all of them much larger than Earth. Jupiter, the largest, has, according to Sampson, a diameter of 88,640 miles [142,652 km], or ppp18 more than eleven times the diameter of the earth; Fourteen hundred Earth-sized bodies could be packed inside Jupiter and leave room to spare. Saturn, next in order, is second only to Jupiter in size, with a diameter of about 70,000 miles [112,654 km]. These two are by far the largest of the planets.
```

### Images

Images should be included like this:

```
<figure id="Universe_plate_01" class="image urantiapedia">
<img src="/image/book/Sir_James_Jeans/The_Universe_Around_Us/plate_01.png">
<figcaption><em><b>Plate I.</b> Franklin-Adams chart, The Milky Way in the neighborhood of the Southern Cross</em></figcaption>
</figure>
```

You can copy the example above where an image is needed and replace just the following:
- Where it says `id="Universe_plate_01"` is a unique identifier for the image. You can put any one as long as in the same file of each chapter there are no two alike.
- Where it says `src="..."` there should be a path to the image file. The path should always start with `/image/`, which is where all the images are, and should be followed by a path identical to the one we have for the book. That is, following the example, since the book is in `/en/book/Sir_James_Jeans/The_Universe_Around_Us`, the images for that book should be in `/image/book/Sir_James_Jeans/The_Universe_Around_Us`. The filename of each image can be anything short, always indicating the extension (`.png` or `.jpg`) of the file. If you don't have the file, which is going to happen initially, you can put any name, and then “Chief Editors” will decide on the final name and extension.
- If the image has a caption, it should be placed inside the `figcaption` tag.

Since this task of including the image can be tedious, “Assistant Editors” can simply include a mark indicating that there is an image to be found in the original PDF file, something like `iiii` or any repeated char that will never occur in another part of the text.


### References to images

When the text mentions an image it is a good idea to place an internal link to that image. For example, continuing with the image shown above, to include a reference it would be put like this:

```wrap
...each of them too faint to be seen individually without telescopic aid (see [Plate I](#Universe_plate_01)).

...as we saw in [Plate VIII](/en/book/Sir_James_Jeans/The_Universe_Around_Us/#Universe_plate_01) of the previous chapter...
```

The syntax `[Plate I](#Universe_plate_01)` is the way to add hyperlinks in Markdown. The text to be displayed is indicated between square brackets, and the web path is indicated just behind it in parentheses. When the image is in the same chapter, just put `#` and then the identifier. If the image is in another chapter the path must be longer.

Since this task of including image references can be tedious, “Assistant Editors” can simply include a markup indicating that a reference goes there, something like `rrrr`.

### Footnotes

If the book has footnotes, or chapter endnotes, or blanket notes that appear at the end of the book, but for which a mark is placed in the book by number or indication, those footnote marks will always be converted to footnotes, as follows:

```wrap
The fact that Altair and Saturn appear equally bright in the sky can only mean that Altair is 80,000 times farther away than Saturn[^1].

. . .

[^1]: Because the apparent brightness of an object falls off with the inverse of the square of its distance, and the square of 80,000 is roughly equal to 6 billion.
```

Footnotes are always marked as a running number starting at 1, and are written as `[^1]`, `[^2]`, etc. The `^` character is typed on the keyboard using `Shift + [` and then pressing space.

The footnote has two parts: one is the indication, which is placed right in the text, and the other is the footnote itself, which is placed at the end, behind everything else, of the file. Each footnote muest have its mark, then a colon, and then the text, with each note separated from each other by a blank line.

Since this task of including footnotes can be tedious, “Assistant Editors” can simply include a mark indicating that a footnote goes there, something like `nnnn`, and then copy all the chapter notes into the end of file.


### Tables

Creating tables is always a complex task in any office software. Markdown makes it easy to create tables but it is still a complex task when the table has nested cells, aligned text, etc.

“Assistant Editors”, in order not to waste too much time here, can simply mark where there are tables in the text with something like `tttt`.

If you want to know more about how to format tables in Markdown you can check it out here: [Markdown formatting help](/en/help/markdown).

### Mathematical formulas or characters in scientific notation

The creation of mathematical formulas or the use of characters in scientific notation is always a complex task in any office software. Markdown makes it easy to create but it is still a complex task depending on the formulas or characters to use.

“Assistant Editors”, in order not to waste too much time here, can simply mark where there are formulas or scientific notation in the text with something like `ffff`, so that a “Chief Editor” can go to those points to check.

If you want to know more about how to format formulas and scientific texts in Markdown you can check it out here: [Markdown formatting help](/en/help/markdown).

## Sending files

If you are a “Chief Editor” using GitHub you can submit the books you create as detailed in the [Chief Editors Help](/en/help/github); if you are an “Assistant Editor”, you can simply send the Markdown files to any Administrator's email or to urantiapedia@gmail.com.

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)
- [Google Books](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)
- [Markdown Format Help](/en/help/markdown)

<br>


<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_sourcebooks_catalog">Creating a "source" book catalog</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_articles_catalog">Creating Article Catalog</a></td>
      </tr>
    </tbody>
  </table>
</figure>