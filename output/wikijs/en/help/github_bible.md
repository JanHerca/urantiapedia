---
title: Obtaining The Bible
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
        <td><a href="/en/help/github_paramony">Translation of Paramony</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_book_json">Conversion to JSON</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> This task is currently ended and closed for the 25 languages available.
{.is-info}

A good source to obtain translations of *The Bible* that are also free of copyright is to use the software [e-Sword](https://www.e-sword.net/), a free application that allows you to download translations of *The Bible* in different languages ​​and then export or copy its content to other files.

Any other way to obtain a copyright-free translation of *The Bible* is valid as long as the content is then copied to the correct files. These files must follow these rules:
- the files will be created in the folder `input/tex/bible-xx`, where `xx` is the language code of *The Bible*.
- Each file will have a name following this pattern: `xxx_name.tex` where `xxx` will be a sequential number always with three digits starting at 1 (`001`, `002`, etc.) and `name` will be the name of the book. The names should be in each language, but if not, they could be in English. Below is a provisional list of the books to include, with their number. It should be noted that the order in which books are numbered places first books that are canonical to all creeds before the books that are canonical only in some creeds. This order is not essential but is useful to make it easy to identify of each book simply by the initial number, especially when the names of each book are used in each particular language.
- The content of each book must come in LaTeX format. The format will only use a few LaTeX commands (`\begin{document}`, `\end{document}`, `\title`,` \chapter`, `\section` and `\par`) as detailed in the following excerpt from the Gospel of Matthew:

```tex
\begin{document}

\title{Gospel of Matthew}

\chapter{1}

\par 1 The book of the generation of Jesus Christ, the son of David, the son of Abraham.
. . .

\chapter{2}

\par 1 Now when Jesus was born in Bethlehem of Judaea in the days of Herod the king, behold, Wise-men from the east came to Jerusalem, saying,
. . .

\end{document}
```

As you can see in the previous extract, the rules to follow are:
- Each biblical book will begin with a line `\begin{document}` and end with a line `\end{document}`.
- Comments can be placed, which will be ignored, using `%` in front of each line.
- Each book will have its title within a `\title{}` command at the beginning of everything.
- Each chapter will be marked with the command `\chapter{}` and inside the chapter number starting at 1.
- If there are sections (some subtitles that are sometimes put in some editions) they will be marked with the command `\section{}` and inside the title of the section will be placed.
- After a section or a chapter if there are no sections, verses will be placed, each one starting with the command `\par`, then separated the verse number, always starting at 1 and then separated the content. Each verse will be a line.
- To improve readability, blank lines can be put before and after chapters and sections, which will be ignored.

## Installing e-Sword tool

e-Sword is a completely free tool for studing the Bible in the PC. This is the URL for downloading it:

https://www.e-sword.net/

Click in the Downloads button. You have versions for Windows, Mac, and also for smartphone and tablets.

Once downloaded execute the installer and follow the default steps.

## Downloading Bible translations in e-Sword

For downloading a Bible translation in e-Sword follow this steps:

1. Open e-Sword.
2. Close any start up message.
3. Go to the menu *Downloads* then *Bibles*.
4. That opens the *e-Sword module downloader*. In the *Bible* tab you will see a list of Bibles available, sorted by language. It is a treeview so you can collapse or expand each language to see the list of available translations.
5. It is important to download only public domain translations. We cannot use copyrighted versions of the Bible that are not in public domain to avoid any legal issue in *Urantiapedia*.
6. For download click in the link and wait to have it installed.
7. You can proceed the same with any other translation.

## Copying content from e-Sword

For copying the verses from e-Sword to Bible files we can use this process:

1. Copy all the files in another language already available, for example in English. This way you have a guide and template.
2. Go to first file, `001_Genesis.tex`. Select everything that is below `\title{Genesis}` and above `\end{document}` and remove it.
3. Now in e-Sword select menu *Bible* and then *Copy verses*. The window *Copy verses* opens.
4. In the top selectors select the book, in this example *Genesis*, and select first verse (usually is the one by default) and the last verse of the last chapter (usually is not the default).
5. As format for output leave the first option selected, the default, that creates texts like `Gen 1:1 The verse text`.
6. Now click *Copy* and then paste in Visual Studio Code below the title.
7. The text pasted needs to be changed to follow the LaTeX format conventions. We are going to do this really fast with three replacements.
8. In Visual Studio Code select menu *Edit > Replace*.
9. In *Find* box type `^... ` (be aware to add a final space). In *Replace* box type `\par ` (also be aware to add a final space). Ensure that be button *Use Regular expression* is clicked. Now click in *Replace All* button.
10. Next in *Find* box type `\\par ([0-9]*):([1]) ` (be aware to add the final space). In *Replace* box type `\n\chapter{$1}\n\n\par $2` (be aware that now there is no extra space). Click in *Replace All*. This will create the chapter tags.
11. Finally in *Find* box type `\\par ([0-9]*):([0-9]*) ` (be aware to add the final space). In *Replace* box type `\par $2` (without any final space). Click in *Replace All*. This will set the correct format for paragraphs.
12. That's it. You now need to repeat this process with each book of the Bible. It is a boring task but it takes less than an hour to have all Bible books in the correct format supported in *Urantiapedia*.

Once you have finished the work with a translation of the Bible it can be send to maintainers of the project.

## List of biblical books

Num. | Abr. | English title
---|---|---
001 | Gn | Genesis
002 | Ex | Exodus
003 | Lv | Leviticus
004 | Nm | Numbers
005 | Dt | Deuteronomy
006 | Jos | Joshua
007 | Jue | Judges
008 | Rth | Ruth 
009 | 1 Sam | 1 Samuel
010 | 2 Sam | 2 Samuel
011 | 1 Ki | 1 Kings
012 | 2 Ki | 2 Kings
013 | 1 Ch | 1 Chronicles
014 | 2 Ch | 2 Chronicles 
015 | Ez | Ezra 
016 | Neh | Nehemiah
017 | Est | Esther
018 | 1 Macc | 1 Maccabees
019 | 2 Macc | 2 Maccabees
020 | Job | Job
021 | Ps | Psalms
022 | Pr | Proverbs
023 | Ec | Ecclesiastes
024 | Song | Song of Solomon
025 | Sir | Sirach (Ecclesiasticus)
026 | Wis | Wisdom of Solomon
027 | Is | Isaiah
028 | Jer | Jeremiah
029 | Lam | Lamentations
030 | Bar | Baruch 
031 | Ezk | Ezekiel
032 | Dn | Daniel
033 | Ho | Hosea
034 | Jl | Joel 
035 | Am | Amos 
036 | Ob | Obadiah
037 | Jon | Jonah
038 | Mic | Micah
039 | Nah | Nahum
040 | Hab | Habakkuk
041 | Zep | Zephaniah
042 | Hag | Haggai
043 | Zec | Zechariah
044 | Mal | Malachi
045 | Mt | Matthew
046 | Mk | Mark 
047 | Lk | Luke 
048 | Jn | John 
049 | Acts | Acts of the Apostles
050 | Ro | Romans
051 | 1 Co | 1 Corinthians
052 | 2 Co | 2 Corinthians
053 | Ga | Galatians
054 | Eph | Ephesians
055 | Phil | Philippians
056 | Col | Colossians
057 | 1 Th | 1 Thessalonians
058 | 2 Th | 2 Thessalonians
059 | 1 Ti | 1 Timothy
060 | 2 Ti | 2 Timothy
061 | Tit | Titus
062 | Pm | Philemon
063 | Heb | Hebrews
064 | Jm | James
065 | 1 P | 1 Peter
066 | 2 P | 2 Peter
067 | 1 Jn | 1 John
068 | 2 Jn | 2 John
069 | 3 Jn | 3 John
070 | Jud | Jude 
071 | Rev | Revelation
072 | Bel | Bel and the Dragon
073 | Man | Prayer of Manesseh
074 | Tb | Tobit
075 | Jdt | Judith
076 | 1 Enoch | Book of Enoch
077 | As. Mos. | Assumption of Moses

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
        <td><a href="/en/help/github_paramony">Translation of Paramony</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_book_json">Conversion to JSON</a></td>
      </tr>
    </tbody>
  </table>
</figure>