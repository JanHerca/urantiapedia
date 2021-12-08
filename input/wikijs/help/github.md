---
title: Urantiapedia - GitHub editor help
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

## About Urantiapedia

[Urantiapedia](https://urantiapedia.org) is a collaborative website based on [Wiki.js](https://js.wiki/) with the purpose of being a unified center for the dissemination of all knowledge regarding *The Urantia Book*.

## About Blue Fields

[Blue Fields](https://blue-fields.netlify.app/) is a website that has been created to join and organize readers of *The Urantia Book* who wish to collaborate in smart, purposeful and altruistic projects all over the world.

## About GitHub

[Urantiapedia](https://github.com/JanHerca/urantiapedia) project on GitHub is a project created to serve as a quick start-up procedure for *Urantiapedia*. It contains files in certain formats and software that help automate the creation of initial content.

## Who is this manual for?

This manual is for users called "GitHub editors", or users that comply with this requirements:
- are registered users with an account on [Blue Fields](https://blue-fields.netlify.app/) and on [GitHub] (https://github.com/).
- They are users who have been authorized as project collaborators by the team that runs the project on [Blue Fields](https://blue-fields.netlify.app/) platform.
- They are users with a minimum knowledge of GitHub management.
- are users with some knowledge of *The Urantia Book* in at least one language in which it is published.
- they wish to collaborate in a selfless way in the incorporation of information related to *The Urantia Book* in the *Urantiapedia*.

"GitHub editors" do not need to be registered on the *Urantiapedia* web because a "GitHub editor" will only use their GitHub account to submit the results of their work to the *Urantiapedia* project on GitHub. All the necessary work will be done only through GitHub, and web "administrators" will be in charge of uploading changes to the *Urantiapedia* web to check the result of the work.

## Work procedure in the preparation phase

The process will be as follows:
1. "GitHub editor" creates a *fork* (a copy in its own account) of *Urantiapedia* project on GitHub: https://github.com/JanHerca/urantiapedia.
2. "GitHub editor" creates a local copy of the project on PC. 
3. The local copy must be of the latest version of *Urantiapedia* content (the master branch). This is done through a *pull* action to the project, that downloads any change to our local copy.
4. "GitHub editor" makes changes in the local copy to the files indicated in this manual and in the way explained.
5. "GitHub editor" performs a *pull request* uploading its changes to GitHub.
6. The *pull requests* of "GitHub editors" are reviewed by "administrators", who are in charge of doing a *merge* with the main branch (master) of all those changes that are correct. Any changes that are not correct will be rejected and "GitHub editors" will be notified what changes they need to fix, usually by email or through notifications on the GitHub platform itself.
7. Changes that are OK will be uploaded to *Urantiapedia* website by "administrators" in order to check and validate that they are correct and so that anyone can see the results.
8. The process is repeated as many times as needed, returning to task 3 until the entire *Urantiapedia* has completed its preparation phase.

## Create a copy of Urantiapedia project on GitHub

To make the copy, follow these steps:
1. Go to https://github.com
2. If you already have an account, click *Sign in* and validate.
3. If you don't have an account, create one by clicking *Sign up*. Enter a username, an email address, and a password. Once you have an account, log into GitHub with it.
4. The first time we enter GitHub, it will ask us to do a verification through our email account. Once verified, we will appear on the GitHub home page.
5. Open the *Urantiapedia* project page: https://github.com/JanHerca/urantiapedia
6. Create a *fork* of the project. A *fork* is nothing but a proper copy of an existing project in our account, so that the changes we make to this project do not affect the original project. To make the *fork* click on the *Fork* button in the upper right corner of GitHub page.
7. In a few seconds a copy of *Urantiapedia* project will be created within your GitHub account. This project is a fresh copy in which you can make the changes you need, without affecting the original project.
8. To download a copy of a project there are several ways:
    * Download all by clicking the green *Code* menu and then selecting *Download ZIP*. This creates a compressed file with all the project files. Then you have to unzip the file in any path on your PC to have it ready. Now you can proceed to installation as described in next section.
    * Use GitHub Desktop software (https://desktop.github.com/). It is more recommended because this software allows us to track which files have changed, send our changes to the original project, and see what other participants are changing. In this case, once GitHub Desktop is installed, follow this:
        - From menu *File* select *Clone a repository*.
        - In the dialog that opens select *GitHub.com* tab, select the *urantiapedia* project you *forked*, give it a path for the local copy and click *Clone*. Now you are ready to proceed to installation as described in next section.

Both ways let us with a folder with several subfolders with *Urantiapedia* project.

## Setting up *Urantiapedia Tools*

*Urantiapedia Tools* is a JavaScript desktop app developed with [Electron](https://www.electronjs.org/). To install and execute it follow these steps:

1. It is recommeded the use of [VS Code](https://code.visualstudio.com/).
2. Fork the project at [GitHub project](https://github.com/JanHerca/urantiapedia) as explained in previous section.
3. Ensure to have [Node.js](https://nodejs.org/) installed. Open a terminal in VS Code and execute `node -v` to check you have it installed.
4. Ensure that terminal is opened in root folder of the project. To install dependencies execute: `npm install`. Wait until all of them are installed.
5. The project is set up with a default launch configuration. Press F5 to execute or in the terminal execute `npm start`.
6. The application opens. By default a Dev Tools window is opened for debugging. You can ignore it if not developing.

![](/image/uptools.png)

## Folders in *Urantiapedia* project on GitHub

The most important folders that comprises *Urantiapedia* project on Github are these:
- **.vscode**: configuration files for Visual Studio Code, the software used to develop *Urantiapedia Tools*.
- **app**: source code files in JavaScript with *Urantiapedia Tools* application.
- **docs**: project documentation.
- **input**: main folder containing input files used to generate *Urantiapedia* pages for a language. These are the only folders that "GitHub editors" should modify in the project.
    * **html**: folder with files in HTML format.
        * **book-xx**: *The Urantia Book* translations in original HTML from *Urantia Foundation** (`book-en`,` book-en`, etc.)
    * **json**: folder with files in JSON format.
        * **book-xx**: *The Urantia Book* translations in JSON format, without *Paramony* footnotes (`book-en`,` book-en`, etc.)
        * **book-xx-footnotes**: *The Urantia Book* translations in JSON format and with *Paramony* footnotes (`book-en-footnotes`,` book-en-footenotes`, etc.)
        * **footnotes-book-xx.json**: *Paramony* footnotes in JSON format.
    * **mediawiki** [`DEPRECATED`]: folder with old files in Wikitext format for MediaWiki. First version of *Urantiapedia* was made for MediaWiki but current one is created with *Wiki.js*.
        * **articles-xx**: old folders for article samples in Wikitext format.
        * **main-pages-xx**: old folders with help content in Wikitext format.
        * **modules**: modules written in Lua, the scripting language with which to create templates for MediaWiki.
        * **sample**: old sample content in Wikitext format.
        * **templates**: templates for the *Urantipedia*, which are fragments in MediaWiki format that can be reused.
    * **tex**: folder with the files in LaTeX format.
        * **bible-xx**: *Bible* translations in LaTeX format (`bible-es`,` bible-en`, etc.)
    * **txt**: folder with the files in TXT format.
        * **articles-xx**: some sample articles in TXT format.
        * **bible-refs-xx** [`DEPRECATED`]: old folder with *Paramony*. This content is no longer required.
        * **topic-index-xx**: *Topic Index* translations in TXT format (`topic-index-es`,` topic- index-en`, etc.)
    * **wikijs**: folder with some input content for *Wiki.js* that is created manually.

This list includes the most important folders. Any other folder can be ignored because it contains material that is no longer being used in the process and will surely be eliminated in the future.

The language codes to be used in the folders must follow the ISO 639-1 standard with two letters for each language. https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

The only folders "GitHub editors" need to worry about are the following:
- `input/html`
- `input/json`
- `input/tex`
- `input/txt`

It should be borne in mind that there are currently three translations in the Spanish language. All three translations are going to be available on *Urantiapedia*. For that reason there will be these folders:
- `book-es`, with the so-called European translation, made in 2009;
- `book-es-1993`, with the first Spanish translation made in 1993;
- `book-es-2021`, with the new translation made in 2021.

## Workflow

For each language to be incorporated in *Urantiapedia*, the following input will be used:
- An official translation of *The Urantia Book*, or the original for English, in HTML format. This content will be left in the `input/html/book-xx` folder of the project on GitHub, where `xx` is the two-letter code for the language (`es` = Spanish, `en` = English, etc.). In the case of the Spanish language, since there are several translations, `book-es` will contain the so-called European edition, `book-es-1993` the 1993 translation, and `book-es-2021` the 2021 translation.
- A copyright-free translation of *The Bible*, as standard as possible, and in the language in question. The format will be LaTeX and the files will be left in the `input/tex/bible-xx` folder of GitHub project, where `xx` is the language code.
- A copy of *Paramony* footnotes in English. This is a file with cross references between *The Bible* and *The Urantia Book* located in `input/json/footnotes-book-en.json`. It has been created using a cross-reference relationship developed by Duane L. Faw, converted from its original TXT format to a JSON format that is easier to process. The copy must be renamed modifying the last two letters by those of the language code. For example, for French, create a copy of the file in English and call that copy as `input/json/footnotes-book-fr.json`.
- A copy of the *Topic Index* in English language. This index is made up of a collection of files found in `input/txt/topic-index-en` folder. These TXT files are derived from the appendix of *Urantia Fellowship* edition of *The Urantia Book*, which we will refer to hereinafter as *Topic Index*. This *Topic Index* has been converted to a group of TXT files, one for each letter of the alphabet, with topics that begin with each letter in English. The copy must be renamed by modifying the last two letters by those of the language code. For example, for French, create a copy of the English folder and call that copy as `input/txt/topic-index-fr`.

In summary, for the French language example, the content to create as input would be:

```
input
    html
        book-fr
            *.html
    json
        footnotes-book-fr.json
    tex
        bible-fr
            *.tex
    txt
        topic-index-fr
            *.txt
```
For any other language it would be done in a similar way. Some of this content may already be available in the current project on GitHub. It is convenient to review what exists before incorporating new content.

Once we have the input in the correct folders, the steps to take are:
1. Translation of *Paramony* from English to the target language.
2. Translation and revision of the *Topic Index* from English to the target language.
3. Obtain a public-domain translation of *The Bible* in the target language.
4. Conversion *The Urantia Book* from HTML to JSON without footnotes.
5. Addition of *Paramony* footnotes to *The Urantia Book* in JSON.
6. Conversion of the *Topic index* from TXT to Wiki.js.
7. Conversion of *The Urantia Book* from JSON with footnotes to Wiki.js including references to topics.
8. Conversion of *The Bible* from LaTeX to Wiki.js with footnotes.
9. Commit changes to [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) project.

*GitHub editors* perform tasks 1-3. *Admins* perform tasks 4-9. We detail each task for *GitHub editors* in the following sections.

![](/image/formats.png)

## Translation of *Paramony* from English to the target language

We start from the English version of *Paramony* found in `input/json/footnotes-book-en.json`. Make a copy and change the name to the target language.

These files contain footnotes (with references to *The Bible*) to be included in each *Urantia Book* document.

You have to translate the sections marked as texts (`texts`), as well as update the abbreviations of the *The Bible* books with a replace operation.

The structure of the JSON file is a three column table. For each document in *The Urantia Book* there is a section in the file that contains the document index (`paperIndex`) and a subsection (`footnotes`) that contains three columns:
- the first one is the texts (`texts`) that appear in the footnote.
- the second is the biblical references (`bible_refs`) that correspond to each text.
- the third are the references to the paragraph and sentence within the paragraph of *The Urantia Book* (`locations`). The pattern of these references is `x:y.z#n`, where `x:y.z` is the paragraph reference and `n` indicates the sentence within the paragraph where the note is found, starting with the first sentence with a period followed as the sentence 0 and so on.

This way of presenting the texts makes it simpler to copy and paste them into a translator like Google Translator and then paste the translation result again.

Example of a snippet:

```json
{
    "content": [
        {
            "paperIndex": 0,
            "footnotes": {
                "texts" : [
                    [
                        "Spirit light"
                    ],
                    [
                        "Paradise Trinity",
                        "Paradise Trinity (Paul's early view)"
                    ]
                ],
                "bible_refs": [
                   [
                        "Ezk 7:55; Is 9:2; Mt 4:16; Mt 5:14-16; Lk 1:79; Lk 2:32; Jn 1:4-9; Jn 3:19-21; Jn 8:12; Jn 9:5; Jn 12:46; 1 Jn 1:5; 1 Jn 2:8"
                    ],
                    [
                        "Mt 28:19; Acts 2:32-33; 2 Co 13:14; 1 Jn 5:7",
                        "1 Co 12:4-6"
                    ]
                ],
                "locations": [
                    "0:6.9#0",
                    "0:12.2#0"
                ]
            }
        }
    ]
}
```

> Care must be taken to properly copy the quotation marks that may exist in the texts. Check here the valid quotes for each language: [Quotation marks](/en/help/languages).

## Translation and review of the *Topic Index* from English to target language

> IMPORTANT: for executing this task currently there is a new development in progress in *Urantiapedia Tools* to make it easier and less prone to errors. Check section below.

We start from English version of *Topic Index* found in `input/txt/topic-index-en`. Make a copy of that folder and change the name to the target language.

The folder contains a file for each letter of the alphabet (`a.txt`, `b.txt`, etc.) plus a `_.txt` file that contains the entries that start with a numeric digit. The reference ordering of the topics is always that of English, so each file contains the topics whose initial letter in English matches that letter. For example, the Spanish topic "Espíritu Infinito" must be found in `i.txt` file because the English topic begins with I ("Infinite Spirit").

The format is slightly similar to the YAML format (https://en.wikipedia.org/wiki/YAML) but simplified to the maximum to be very easy to edit.

> IMPORTANT: this file contains tabs and must be edited with a text editor that supports tabs rendering. Recommended editors are: Visual Studio Code (https://code.visualstudio.com/), Notepad++ (https://notepad-plus-plus.org/), or Sublime Text (https://www.sublimetext.com/).

Each file must consist of:
- A header that explains its content which lines begin with #. These lines are ignored when the file is processed.
- A list of topics. Each topic is preceded by a blank line and contains several lines:
    - The first line is a short table with topic description, and the values ​​or cells separated by | (vertical bar). Values ​​are:
        - Topic name. If one or more names separated by (;) appear behind the name, those names are aliases that will be searched in the text of *The Urantia Book* as an alternative form to topic name. The first name will always be the one used as the title of the page in *Urantiapedia*. The rest of the names separated by (;) will be the names or aliases that, added to the first, will be searched within *The Urantia Book* to create links to these topics.
        - General or global references to *The Urantia Book* of the entire topic. This value can be empty. These links will be displayed on *Urantiapedia* as a "See also" top section with a list of links.
        - Links to other topics. This value can be empty. Represents one or more topics that are related to current topic. They will appear at the bottom of the page that will be generated, in the list of "Links" section.
        - Topic category. This value can be empty. There are five categories: Persons (`PERSON`), places (`PLACE`), orders of beings (`ORDER`), religions (`RELIGION`), and races (`RACE`). These categories allow to work only in one of them for better separation of tasks.
        - Status. "GitHub editors" should write `OK` when they have finished their reviewing task with a topic. If the topic is still pending review, it will be empty.
    - The following lines, if they exist, are the topic content. These lines are also short tables that may or may not have values ​​separated by | (vertical bar). There are two types of tables:
        - Table of a single cell without vertical bar: it will contain a text, the text of a line of the page of *Urantiapedia* and after the text, enclosed in parentheses, if they exist, one or more references to paragraphs of *The Urantia Book*.
        - Table of two cells separated by a vertical bar (|), the first with same content than a table with a single cell, and the second with a list of links to other topics, separated by (;).

The construction rules for each line in topics other than the first are these:
- They do not need to start with a capital letter or end with period. Software will automatically capitalize and end with period each sentence when converting files to Wiki.js format.
- The text of each line can be a single sentence or several. If there are several then intermediate periods or uppercase letters must appear because only start and end of the lines are corrected.
- The text of each line must not contain parentheses because these characters are reserved for *Urantia Book* references.
- Each line can have tabulation chars at the beginning. Each tabulation char indicates that those lines will be contained within the one immediately above without a tab, which will act as a section or subsection title.

Example (file `a.txt`, line 889):
```
Alpheus twins | (143:3.5) | apostles of Jesus | PERSON |
James and Judas Alpheus or Alpheus twins were two apostles of Jesus
mother Mary, father Alpheus (138:4.1) (189:4.4) (190:3.1)
Santiago o Jacobo Alfeo o Tadeo
James Alpheus
    fisherman, farmer of Kheresa, selected by James (138:2.6)
    married with 3 children; also called Thaddeus (139:9.1,5)
```

In the previous extract we can see that it is the beginning of the content related to the topic [Alpheus Twins](/en/topic/Alpheus_twins). At the top of the resulting page an indication will be added saying "See also" followed by the reference to [UB 143:3.5](/en/The_Urantia_Book/143#p3_5). The page will have a "Links" section added at the end, which will include a link to [apostles of Jesus](/en/topic/apostles_of_Jesus) page. The type of topic is relative to persons, in this case two apostles of Jesus, and notice how the `OK` mark is not present, which means that this topic still has not been reviewed for english.

Below the first line of the topic the excerpt contains five lines with topic content. The first line is a single cell and contains no references. The second line is a single cell with three references to three paragraphs of *The Urantia Book*. The third line is a section title because the fourth and fifth lines have tabs at the beggining of them.

The result of converting this content can be seen here: [Alpheus Twins](/en/topic/Alpheus_twins)

### Lists

To create lists in the topic file, use the character `*` at the beggining of each line. For example, this is how it has been used in the topic related to Alexander the Great (file `a.txt`, line 835):

```txt
Alexander the Great | | | PERSON |
Acts of Alexander
    * campaign into Punjab (79:4.3)
    * royal mausoleum of (130:3.4)
    * Samaritans assisted (143:4.2-3)
    * spread Hellenistic civilization over near East (195:1.7-10)
> https://en.wikipedia.org/wiki/Alexander_the_Great
```

### External links

To add external links to a topic in the topic file, use the character `>` at the beggining of each line. The example above shows how to link to English Wikipedia about Alexander the Great. You can add multiple links, each in one line, as long as they start with the character `>` and follow a blank space before the URL.

### Synchronization in all languages

It is important to keep all files in all languages ​​in sync, so that the same lines of the same topics are located in the same position in all files. When adding content to a file in one language, it is important to ensure that the same content is also on the same line number in all other languages. This is why a new development is in progress with a specific editor for topics, because maintaining files in sync is not easy task and errors can be common. Check next section.

### Review of topics

The *Topic Index* content has been created using *The Urantia Book* edition from *Urantia Fellowship* as the starting point. This *Topic Index* in this edition is ​​a brief index of each topic so the content is concise and telegraphic. Therefore, there is an extra work to be done to make this content clearer and more explanatory. This work consists in going to each reference in *The Urantia Book* and check if text is sufficiently explanatory regarding what the book says, and if not, modify it.

## *Topic Index* editor in *Urantiapedia Tools*

TODO

![](/image/uptools_topic_editor.png)

## Obtaining a translation of *The Bible* in the target language

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

### List of biblical books

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



