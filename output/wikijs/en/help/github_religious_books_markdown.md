---
title: "Getting books from all religions"
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
        <td><a href="/en/help/github_religious_books_catalog">Creating a catalog of books from all religions</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_sourcebooks_catalog">Creating a catalog of books supposedly used by revelators</a></td>
      </tr>
    </tbody>
  </table>
</figure>

This describes how to obtain the books of all religions and how to upload them to the [Urantiapedia Library](/en/book). In the previous task, a catalog of these books was created to serve as a guide.

## Process

This task consists of trying to locate a digital version of each book on the Internet, downloading it and processing it until obtaining one or more files in [Markdown](/en/help/markdown) format.

These situations may occur:
- The book is not available for download on any website as a digital copy. You may consider purchasing a paper copy if available or try to obtain it from a public library to scan it.
- The book has been found but is not downloadable, it can only be read online. Usually you can take screenshots of each page or do some web hacking to download the scans. We are using the [Greenshot capture software](https://getgreenshot.org/) for this purpose but any other software can be used.
- The book is downloadable but in the form of images or in a PDF without text. It will be necessary to use character recognition software (OCR). See below.
- The book is available for download as a PDF with text, or better yet, as a text file or as a web page. This is ideal in all cases. If it is only available as a PDF, it must be converted to text (see below).

### Download books

To obtain digital religious books some sources can be:
- [Sacred texts](https://archive.sacred-texts.com)
- [Google Books](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)
- Software [e-Sword](https://www.e-sword.net/)

Whatever the case, the task will be to note down the web address from where we have managed to download the book and download it to our PC. Then it would be convenient to send an email to urantiapedia@gmail.com indicating the web addresses of all the books that have been obtained. The *Administrators* are creating a Cloud storage for all the large files that do not fit on GitHub. The original books, which are sometimes very large PDFs, are being left there to avoid problems if the websites from which they were downloaded are no longer accessible in the future.

Once the book file has been converted to a text file, the task will be to process the book until obtaining a set of files in [Markdown](/en/help/markdown) format, one file for each chapter, preface or appendix of the book.

For any modification of folders and files on GitHub, you should follow the instructions provided for users [Administrators](/en/help/admin), [Chief Editors](/en/help/github), or [Assistant Editors](/en/help/github_assistant).

### Copyright

Books that can be uploaded to Urantiapedia must be free of copyright, and must have entered the [public domain](https://en.wikipedia.org/wiki/Public_domain). This means that modern editions of the Bible or other religious books cannot be used. Unfortunately, these editions receive minimal updates from publishers, which entails an acquisition of rights, even though we are talking about millennia-old or centenary texts that have never had these legal limitations in the past.

This deplorable situation should not be overlooked even on a website like Urantiapedia, which is not for profit. It does not matter what kind of project we are doing. An author or editor of a work may feel that his rights and financial compensation have been diminished and sue the management of Urantiapedia for improper use of works.

Books become public domain depending on the laws in force in the country of origin of the author or the edition.

In the United States, all works first published or distributed before January 1, 1929 have lost their copyright protection 95 years later, effective January 1, 2024. Likewise, works published in 1929 will enter the public domain effective January 1, 2025, and this cycle will repeat until works published in 1977 enter the public domain on January 1, 2073. Corporately authored works will continue to qualify for the ninety-five-year term beginning in 2073. Under current copyright law, beginning in 2049, 1978, and beyond, works by creators who died seven decades earlier will expire annually. For example, if a creator were to die in 2002, the copyright in his or her works would last until the end of 2072 and would enter the public domain on January 1, 2073. Works published without a copyright notice before 1977 are also in the public domain, as are works published before March 1989 if the copyright was not registered within five years of the publication date, and works published before 1964 if the copyright was not renewed 28 years later.

In Spain, it is 80 years if the author died before December 7, 1987, or 70 years if the author died after.

As a general rule, countries have between 50 and 100 years to exploit copyright after the death of the author, something that is set out in the Berne Convention.

### Scanning books with an OCR

Sometimes a particular book is not scanned or converted to text. To do this, follow these steps:

1. If the book is available on a site like archive.org, create screenshots of the pages using a tool like [Greenshot](https://getgreenshot.org/), which integrates with the `ImpScreen` button to speed up the creation of a series of snapshots.
2. Install [TesseractOCR](https://github.com/UB-Mannheim/tesseract/wiki), free and open source.
3. Install [Visual Studio Code](https://code.visualstudio.com/), adding the [Powershell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell) extension.
4. Create a couple of folders, one with the screenshots and another for the texts.
5. Open VS Code in root using the _Terminal > New Terminal_ menu and from the **terminal prompt** create a file listing all snapshots: `dir *.* > ocr.ps1`
6. Edit the ps1 file with the PowerShell editor, so that all the commands are something like this: `& 'c:\Program Files\Tesseract-OCR\tesseract' ".\snapshots\<filename>.png" ".\texts\<filename>.txt"`
7. Click the `Run All` button in the PowerShell editor. This creates a TXT file for each PNG file scanned.
8. Make sure you have the [Combine Files](https://marketplace.visualstudio.com/items?itemName=BateleurIO.vscode-combine-scripts) extension in VS Code.
9. Right-click on the Texts folder and use _Merge Files_. A temporary file is created. Copy all the contents to a permanent TXT file.

An easier way for the last steps:

1. Create a file (`convert.ps1`) with this content:

```
Set-Location 'C:\Users\Scan'
Get-ChildItem -Filter '*.png' | ForEach-Object {
& 'c:\Program Files\Tesseract-OCR\tesseract.exe' $_.Name ($_.BaseName)
}
```

2. Replace `C:\Users\Scan` with the actual path to the scanned files.
3. Proceed as indicated in step 8 above.

The end result will be a TXT file with the text of all the screenshot files. The next step will be to convert that TXT file to Markdown (see below).

### PDF to Markdown conversion

When a digital book is already in PDF format, whether it is a PDF with or without text, there are tools that allow direct conversion to Markdown. Some tools we are using, in order of interest, are these:

- [Mathpix](https://mathpix.com/). The most powerful tool we have found, as it not only scans text and images and converts them very well to Markdown, but it also scans mathematical tables and equations, making it an ideal tool for scanning scientific or academic books.
- [pdf-to-markdown](https://pdf2md.morethan.io/) ([GitHub](https://github.com/jzillmann/pdf-to-markdown)). A Javascript API for PDF conversion. There is an example website.
- [pdf-tools](https://github.com/bsorrentino/pdf-tools). Inspirado en _pdf-to-markdown_.
- [Aspose DPF to MD](https://products.aspose.app/words/en/conversion/pdf-to-md). This product is also sold as an [API](https://github.com/aspose-words/Aspose.Words-for-.NET). Its documentation is [here](https://reference.aspose.com/words/net/).
- [An online converter](https://www.onlineocr.net/). Converts not only to text but also to MS Word.
- [Split PDF by file size](https://deftpdf.com/split-pdf-by-size). Tool to split a PDF into several files by size. Some tools are not able to work on very large PDFs.


## Structure of a book on Urantiapedia

We have already indicated in [the previous task](/en/help/github_religious_books_catalog) how religious books are organized into shelves, groups and subgroups, and where the list of all planned books can be consulted.

Books should be saved in these folders of the GitHub project:
- In the case of a book from the shelves “Judeo-Christian religious books (Old Testament)” or “Judeo-Christian religious books (New Testament)” the books must be saved in these folders of the GitHub project: `/output/wikijs/en/Bible` for books in English, `/output/wikijs/es/Bible` for books in Spanish, etc. Inside these folders we will create one for each book, where the chapters will go, and a Markdown file with the same name as the folder, where the book cover will go. For example, the folder `/output/wikijs/en/Bible/Genesis` contains the 50 chapters of Genesis, and the file `/output/wikijs/en/Bible/Genesis.md` is the file for the cover of Genesis.
- In the case of a book from the other religious bookshelves, the books must be saved in these folders of the GitHub project: `/output/wikijs/en/book` for books in English, `/output/wikijs/es/book` for books in Spanish, etc. Within these folders we will create another one, if it does not exist, with the name of each religion:
	- `Judaism`: for books on the “Religious Books on Judaism” shelf.
	- `Christianity`: for books on the “Christian Religious Writings” shelf.
	- `Islam`: for books on the “Islamic Religious Books” shelf.
	- `Buddhism`: for books on the “Buddhist Religious Writings” shelf.
	- `Hinduism`: for books on the “Hinduism Religious Books” shelf.
	- `Taoism`: for books on the “Taoist Religious Books” shelf.
	- `Bahaism`: for the books of the existing “Religious books of Bahaism”.
	- `Sikhism`: for books on the shelf “Religious Books of Sikhism”.
	- `Shintoism`: for books on the “Shintoist religious books” shelf.
	- `Zoroastrianism`: for books on the shelf “Religious books of Zoroastrianism”.
	- `Jainism`: for books on the shelf “Religious Books of Jainism”.
	- Inside the previous folders we will do as with the Bible, we will create a folder for each book and a Markdown file for the cover. For example, the folder `/output/wikijs/en/book/Islam/Quran` contains the 114 suras or chapters of the Quran, and the file `/output/wikijs/en/book/Islam/Quran.md` contains the cover of the Quran book.

Regarding folder names, the following guidelines should be taken into account:
- They must be unique within each folder and must always contain three or more characters.
- If the book is expected to be part of a collection (volume 1, 2, etc.), add a suffix `_1`, `_2`, etc. (up to a maximum of 9 volumes), or `_01`, `_02` (if more than 9 volumes are planned).
- The folder name must not contain any spaces or dashes, which should be replaced by underscores (`_`).
- The name will use the title of the book but as abbreviated as possible.
- The name will always be in English, so if the original book is not in English the title is translated.
- Rare characters such as colons, apostrophes or exclamation marks are removed.
- For example, if the title of a book is *Did Jesus exist?* the folder for that book would be called `Did_Jesus_exist`. If the title were *Principios de Teología* (a book originally written in Spanish), the folder would be `Principles_of_Theology`.
- The same folder names will always be used for all languages. For example, the folder for the English Quran is `/output/wikijs/en/book/Islam/Quran` and for Spanish it is `/output/wikijs/es/book/Islam/Quran` (IT IS NOT ~~`/output/wikijs/es/book/Islam/Corán`~~). That is, the only thing that changes in the URL between different languages ​​is the language code (`en`, `es`, etc.). This makes many operations with paths on Urantiapedia easier.

Each chapter will be a file inside the book folder called `xx.md` where `xx` will be:
- A number from 0 to N containing the chapter number (without the title, just the number). Zero is reserved for a prologue or introduction in which the author himself has not used a number to number it. If there is no prologue or introduction, the first chapter will be `1.md`, the second will be `2.md`, etc.
- `Index` for the index page, which will be left as `Index.md`. This page can sometimes be omitted if the index is not very long and the index can be included on the front page.
- `Preface` for the page containing the preface, if any, which will be left as `Preface.md`.
- Appendices should be named `Appendix_xx` where `xx` follows a numbering 1 to N.

> In the case of many Bible books, the files with the chapters are in HTML format and not Markdown because they have been generated from files in LaTeX format that are located within the project in `/input/tex`. This automation is due to the fact that many of these books have been obtained by export from the software [e-Sword](https://www.e-sword.net/), which generates content similar to LaTeX. This task is detailed in the manual section [Getting the Bible](/en/help/github_bible). This task has been completed for the 27 languages ​​currently supported.
> Extra-biblical books not obtained from e-Sword are added in Markdown format following the manual process detailed on this page.
{.is-warning}

## Basic format of a religious book on Urantiapedia

The format to use is Markdown, which is extremely simple to format compared to other alternatives.

Of all the [Markdown](/en/help/markdown) formatting, which is quite extensive, a contributor adding a religious book to Urantiapedia will likely need to worry about nothing more than adding these things (the list is detailed below):
- A header in each file.
- Sections within each chapter.
- Paragraphs correctly separated.
- Verse indication and link before some paragraphs.
- Bold and italics.
- Quotes.
- Page break marks in a book that does not use verses.
- Images.
- References to images.
- Footnotes.
- Navigation links.

It may seem like a lot of things, but the truth is that Markdown is very simple and can be learned in less than an hour. In the following sections we will explain a little about each of the things on the list above.

### Header of each file

This is an example of a header to add:

```
---
title: "Qur'an — 1.  al-Fatihah: The Opening"
description: 
published: true
date: 2024-01-10T13:55:38.362Z
tags: book, Islam
editor: markdown
dateCreated: 2024-01-10T13:55:38.362Z
---
```
It should be copied exactly as it is here and only the values ​​that follow the colon should be replaced. The title should be in quotation marks and should be formed from the title of the book, separated by a hyphen from the title of the chapter, including its number.

There is no need to put anything in the description.

The creation date and current date should be the date the file was created. The time is not relevant.

In _tags_ you should put tags, separated by commas, that have been established for that book. A complete list of the tags that are being used in Urantiapedia is available here: [Tags in Urantiapedia](https://github.com/JanHerca/urantiapedia/blob/master/docs/tags.md?plain=1). They can be left blank because it is very quick to fill them all at once in all the files of the book. Some recommendations are these:
- Labels must **be in English**. The option for translated labels is not currently available in [Wiki.js](https://js.wiki/), the software that Urantiapedia uses.
- The tag does not matter if it is in upper or lower case. `book` and `Book` are the same tag. In fact, they are all displayed in lower case on Urantiapedia: [Search by tag](https://urantiapedia.org/t). All existing tags are also displayed on this page.
- At least all files in a book must be tagged with `book` to indicate that it is Library content.
- It must at least bear a label of the religion to which the book belongs: `Judaism`, `Christianity`, `Islam`, `Buddhism`, `Hinduism`, `Taoism`, `Bahai`, `Sikhism`, `Shintoism`.
- For biblical and extra-biblical books there are many tags created such as `Bible`, `Apocrypha OT`, `Apocrypha NT`, `Deuterocanon OT`, `Deuterocanon NT` and others.
- If a tag does not exist and you want to add it, just add it to the header of any file and that tag will be created.

### Section Marks

If a chapter has sections they should be marked as follows:

```
## The seven heavens

### The First Heaven

### The Second Heaven
```

First level sections will always be marked `##`, next level sections will be marked `###` and so on. It is not very convenient to use more than four levels even if the book does. As you can see we do not use sections with the `#` mark because they then create section titles that are too big.

### Correct paragraphs

A paragraph is a line within a Markdown file and must have a blank line before and after it. This must be guaranteed for each paragraph. In case the text is poetic, the lines of the stanzas can be kept together and only have a blank line before and after the stanza.

### Verse indication and link

In books that have verse numbers within each chapter, this should be included before each paragraph.

For example, in the first chapter of the book [«Armenian Infancy Gospel»](/es/Bible/Armenian_Infancy_Gospel):

```
<span id="v1"><sup><small>1</small></sup></span>  En aquel tiempo, un hombre llamado Joaquín salió su casa, llevando consigo sus rebaños y sus pastores, y fue al desierto, donde fijó su tienda. ...
<span id="v2"><sup><small>2</small></sup></span>  Y, cuando se acabaron los cuarenta días de ayuno, advino el ángel del Señor, y, colocándose ante Joaquín, le dijo: Joaquín, el Señor ha oído tus plegarias, y ha atendido tus súplicas. ...
```

As you can see, the indication always follows this pattern:

`<span id="vXXX"><sup><small>XXX</small></sup></span>` and two spaces after it to give some separation. `XXX` can be a number, or a letter, or any brief element that clearly differentiates each verse and is a standard method used for each book.

> A very useful trick for adding the indicators is to put just the number in front of each paragraph with two spaces after it, and then do a replacement on all the files using regular expressions. Searching for this `^(\d+)  ` and replacing it with this `<span id="v$1"><sup><small>$1</small></sup></span>  `.
{.is-info}


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

If the book does not use verses, we need some mechanism to be able to refer to a position in the text within each chapter. One option may be to use page markers, that is, an indication of where the original book turns from one page to another.

The page mark must be included between the words where you turn from one page to another as follows:

```
And the angel of the Lord appeared to Eleazar the high priest in a vision, and said to him, Behold, Jehoiachin is coming to you with gifts. Receive his gifts religiously and according to law, as is fitting. For the Lord has heard his prayers, and has performed his <span id="p18">[<sup><small>p. 18</small></sup>]</span> request. And the high priest awoke from his sleep, and stood up, and gave thanks to the Most High, saying, Blessed be the Lord, the God of Israel, for he does not disdain his servants who pray to him. Then the angel appeared to Anna a second time, and said to her, Behold, your husband is coming. Arise, go and seek him, and welcome him with joy. So Anna arose, put on her wedding attire, and went to seek her husband. And when she saw him, she fell prostrate before him with joy, and threw her arms around his neck.
```

Se puede ver que la marca es: `<span id="p18">[<sup><small>p. 18</small></sup>]</span>`.

Since this task can be tedious, one way to make it simpler is to put a shorter alternative mark, such as `ppp18` (`ppp` is a text that we know will never occur), to continue with the previous example. Then, these marks can be searched and replaced by the definitive ones automatically, as we have indicated in another example above. That is, this would also work:

```
And the angel of the Lord appeared to Eleazar the high priest in a vision like this and said to him, “Behold, Jehoiachin is coming to you with gifts. Receive his gifts religiously and according to law, as is fitting, for the Lord has heard his prayers and has performed his ppp18 request.” Then the high priest awoke from his sleep and stood up and gave thanks to the Most High, saying, “Blessed be the Lord, the God of Israel, for he does not disdain his servants who pray to him.” Then the angel appeared to Anna a second time and said to her, “Behold, your husband is coming. Arise, go and get him and welcome him with joy.” So Anna got up and put on her wedding attire and went to get her husband. When she saw him, she fell down before him with joy and threw her arms around his neck.
```

### Images

Images must be included as follows:

```
<figure id="Figure_01" class="image urantiapedia">
<img src="/image/book/Islam/Songs_of_Kabir/image_01.png">
<figcaption><em><b>Figure 1.</b> God Is Within Us</em></figcaption>
</figure>
```

You can copy the above example wherever you need an image and replace just the following:
- Where it says `id="Figure_01"` it must be a unique identifier for the image. You can put any one as long as there are no two identical ones in the same file for each chapter.
- Where `src="..."` is written, there should be a path to the image file. The path should always start with `/image/`, which is where all the images are, and should be followed by a path identical to the one we have for the book. That is, following the example, since the book is located at `/en/book/Islam/Songs_of_Kabir`, the images for that book should be located at `/image/book/Islam/Songs_of_Kabir`. The filename for each image can be any short filename, as long as it contains the extension (`.png` or `.jpg`). It is recommended that the filename not contain any spaces or special characters, apostrophes or accents.
- If the image has a caption it must be placed inside the `figcaption` tag.
- If you want to align the image to the left, center or right, replace `class="image urantiapedia"` with `class="image urantiapedia image-style-align-left"`, `class="image urantiapedia image-style-align-center"` and `class="image urantiapedia image-style-align-right"`, respectively. A few paragraphs below, add a line with `<br style="clear:both;"/>` so that the alignment no longer affects the placement of the text.

Since this task of including images can be tedious, you can use a trick like those mentioned above. If no image is going to have a caption, you could put something like `fff18` (or `fffl18`, `fffc18`, `fffr18`) as a way of simplifying that an image with the number 18 (and even aligned) goes there.

### Image references

When the text mentions an image, it is a good idea to include an internal link to that image. For example, continuing with the image shown above, to include a reference you would put it like this:

```
... is one of the prominent themes of this song. Kabir downplayed both rituals and austerity (see [Figure 1](#Figure_01)), teaching that God is not confined to mosques, temples, or pilgrimage sites.
```

The syntax `[Figure 1](#Figure_01)` is the way to add hyperlinks in Markdown. The text to be displayed is indicated in square brackets, and just behind it in parentheses is the web path. When the image is in the same chapter, just put `#` and then the identifier. If the image is in another chapter the syntax should be something like `[Figure 1](/image/book/Islam/Songs_of_Kabir/3#Figure_01)`. In this example we are pointing to figure 1 which is in chapter 3.

### Footnotes

If the book has footnotes, or chapter endnotes, or general notes that appear at the end of the book but are marked in the book by a number or an indication, those annotation marks will become footnotes for each chapter always, as follows:

```
The most important thing is that God is within us, and that is where we must look if we seek to know Him.[^1]

. . .

## Notes

[^1]: Masterman, David. Kabir says. Translated by Tagore, Rabindranath. Three Pigeons Publishing. ISBN 979-8-6501-4828-9
```

Footnotes are always marked as a consecutive number starting at 1, and are written as `[^1]`, `[^2]`, etc. The `^` character is typed on the keyboard using `Shift + [` and then pressing space.

The footnote has two parts: one is the indication, which is placed right in the text, and the other is the note itself, which is placed at the end, behind everything else, of the file, each note with its mark, then a colon, and then the text, and each note separated from each other by a blank line. It is convenient to put a `## Notes` section for the notes, which as has been said should always be at the end of everything, including navigation links.

### Navigation links

These links are placed in a simple table at the beginning and end of each chapter, and allow you to easily move from one chapter to another, or go to the index. They should be like the following example:

```
<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir/1">
          <span class="mdi mdi-arrow-left-drop-circle"></span><span class="pl-2">Capítulo I — Dios está dentro de nosotros</span></a>
        </td>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir#índice">
          <span class="mdi mdi-book-open-variant"></span><span class="pl-2">Índice </span></a>
        </td>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir/3">
          <span class="pr-2">Capítulo III — La insuficiencia del lenguaje</span><span class="mdi mdi-arrow-right-drop-circle"></span></a>
        </td>
      </tr>
    </tbody>
  </table>
</figure>
```

As stated before, the last thing in the file should always be the notes section, if there is one, even below these navigation links.

## Creating a cover file

The cover, as already mentioned, goes in a Markdown file with the same name as the folder where the chapters are included. For example: the folder `/output/wikijs/en/Bible/Genesis` contains the 50 chapters of Genesis, and the file `/output/wikijs/en/Bible/Genesis.md` is the cover of Genesis. Similarly, the folder `/output/wikijs/en/book/Islam/Quran` contains the 114 suras or chapters of the Quran, and the file `/output/wikijs/en/book/Islam/Quran.md` is the cover of the book of the Quran.

The cover is a Markdown file that must contain these elements:
- A header in each file.
- Book cover in SVG format.
- (Optional) Sections within the cover.
- (Optional) Index.
- External links (where it was downloaded from).

The header should follow the same syntax as already indicated for the chapters.

The cover must be in SVG format.

This is the cover of Genesis:

```
<div class="urantiapedia-book-front urantiapedia-book-bible">
<svg xmlns="http://www.w3.org/2000/svg"
	width="102.6mm" height="136.8mm"
	viewBox="0 0 102.6 136.8" version="1.1">
	<g transform="translate(-7,-5)">
		<rect width="9.6" height="136.8" x="7" y="5" />
		<rect width="96.9" height="136.8" x="17" y="5" />
		<text style="font-size:5px" x="61" y="22">LA BIBLIA</text>
		<text style="font-size:4px" x="61" y="125">Biblia Reina Valera, 1960</text>
		<text style="font-size:9px" x="61" y="60">Génesis</text>
	</g>
</svg>
</div>
```

This is the cover of the Quran:

```
<div class="urantiapedia-book-front urantiapedia-book-islam">
<svg xmlns="http://www.w3.org/2000/svg"
	width="102.6mm" height="136.8mm"
	viewBox="0 0 102.6 136.8" version="1.1">
	<g transform="translate(-7,-5)">
		<rect width="9.6" height="136.8" x="7" y="5" />
		<rect width="96.9" height="136.8" x="17" y="5" />
		<text style="font-size:4px" x="61" y="130">M.M. Pickthall</text>
		<text style="font-size:3px" x="61" y="135">The Meaning of the Glorious Quran, 1938</text>
		<text style="font-size:9px" x="61" y="60">Qur'an</text>
	</g>
</svg>
</div>
```

All the covers for all the intended books are already generated because they are shown in the indexes for each shelf. Therefore, it is enough to go to the [Urantiapedia Library shelves](/en/index/books) index, enter the desired shelf, and copy the necessary cover from there (the content inside the `<svg>...</svg>` tag) by copying it as in the examples above.

If the book has a description, dedications, or other content specific to the introductory pages, it will be added to this cover file, using Markdown sections and formatting as appropriate.

For texts that you want centered, you can use this syntax as in the following example:

```
<p style="text-align:center;">
<b>THE MEANING OF THE GLORIOUS QURAN</b><br>
by Mohammed Marmaduke Pickthall<br>
Hyderabad-Deccan : Government Central Press [138]
</p>
```

If the index is not very extensive, it can be included in a section on the cover page. Alternatively, it can be placed in a separate file called `Index.md` inside the chapters folder, and then a link to it can be included on the cover page.

## Submitting change requests

This completes all the things to consider when adding religious books to the Urantipedia Library. Once these changes have been made to the GitHub project, a pull request must be submitted as detailed in the [Administrators](/en/help/admin), [Chief Editors](/en/help/github) or [Assistant Editors](/en/help/github_assistant) user manuals.

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_religious_books_catalog">Creating a catalog of books from all religions</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_sourcebooks_catalog">Creating a catalog of books supposedly used by revelators</a></td>
      </tr>
    </tbody>
  </table>
</figure>