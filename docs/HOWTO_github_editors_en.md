# Urantiapedia - Help for "GitHub editor"

## About Urantiapedia

*Urantiapedia* (https://urantiapedia.site) is a collaborative web based on [*MediaWiki*](https://www.mediawiki.org/wiki/MediaWiki) with the purpose to serve as a unified center for share of all the knowledge related to *The Urantia Book*.

---

## About Blue Fields

*Blue Fields* (https://blue-fields.netlify.app/) is a web created to join and organize readers of *The Urantia Book* that want to participate in intelligent, purposeful and altruistic projectes all around the world.

---

## About GitHub

*Urantiapedia* project in GitHub (https://github.com/JanHerca/urantiapedia) is a project created to serve as a fast method for creating initial content in *Urantiapedia*. It contains some files in certain formats and a software that helps to automate the creation of an intial content.

---

## Who is this manual for?

This manual is for users called "GitHub editors", or users that comply with this requirements:
- are registered users with an account on [Blue Fields](https://blue-fields.netlify.app/) and on [GitHub] (https://github.com/).
- They are users who have been authorized as project collaborators by the team that runs the project on [Blue Fields](https://blue-fields.netlify.app/) platform.
- They are users with a minimum knowledge of GitHub management.
- are users with some knowledge of *The Urantia Book* in at least one language in which it is published.
- they wish to collaborate in a selfless way in the incorporation of information related to *The Urantia Book* in the *Urantiapedia*.

"GitHub editors" do not need to be registered on the *Urantiapedia* web because a "GitHub editor" will only use their GitHub account to submit the results of their work to the *Urantiapedia* project on GitHub. All the necessary work will be done only through GitHub, and web "administrators" will be in charge of uploading changes to the *Urantiapedia* web to check the result of the work.

---

## Steps of Urantiapedia project

*Urantiapedia* is going to be created in two steps for each language:
1. **Preparation phase**: in this phase the content creation is done using the *Urantiapedia* project on GitHub. In this phase, user creation will be blocked on  *Urantiapedia* website and the only users capable of making changes to it will be the "administrator" users. In this phase, users called "GitHub editors" make changes only to the existing project on GitHub.
2. **Public phase**: *Urantiapedia* page is open to the public, so that any user who wishes to do so and meets certain security requirements, can create their own account and add or modify content from the web. These users, called "web editors", must comply with certain privacy policies and good practices that will govern the use of the *Urantiapedia* website. Along with "administrators" users, there will be users called "reviewers" who will ensure the correct use of the website and will be able to ban users who do not comply with the rules.

---

## Work procedure in the preparation phase

The process will be as follows:
1. "GitHub editor" creates a *fork* (a copy in its own account) of *Urantiapedia* project on GitHub: https://github.com/JanHerca/urantiapedia.
2. "GitHub editor" creates a local copy of the project on PC. The local copy must be of the latest version of *Urantiapedia* content (the master branch).
3. "GitHub editor" makes changes he or she wants in the local copy to the files indicated in this manual and in the way indicated.
4. "GitHub editor" performs a *pull request* uploading its changes to GitHub.
5. The *pull requests* of "GitHub editors" are reviewed by "administrators", who are in charge of doing a *merge* with the main branch (master) of all those changes that are correct. Any changes that are not correct will be rejected and "GitHub editors" will be notified what changes they need to fix, usually by email or through notifications on the GitHub platform itself.
6. Changes that are OK will be uploaded to *Urantiapedia* website by "administrators" in order to check and validate that they are correct and so that anyone can see the results.
7. The process is repeated as many times as needed, returning to task 3 until the entire *Urantiapedia* has completed its preparation phase.

---

## Planned content for Urantiapedia

For each language, we will seek to have content such as the following:

Content | Upload method
---|---
*The Urantia Book* | One page for each document
*The Bible* | One main page for each book <br> One page for each chapter of each book
Extra-biblical religious books that appear as direct or indirect references to *The Urantia Book* | One main page for each book <br> One page for each chapter of each book
Scientific and humanities books proven to have been material used by developers to compose *The Urantia Book* | One main page for each book <br> One page for each chapter of each book
Book Terms | One page for each term
Indexes: people, places, chronologies, references ... | One page for each index
Articles, study aids, diagrams, schematics, maps, etc. | One page for each article, help, diagram, etc.
Images, art, animations, videos ... | These are resource files. *MediaWiki* has a system to add them. If they are large as long videos, they would only be added as links.

During the preparation phase, an initial version of only three contents of everything planned will be created: *The Urantia Book* with biblical references, *The Bible* and the *Terms* of the book.

> Each *MediaWiki* page supports a discussion page, just like *Wikipedia* does. This discussion page is very useful and could serve as a discussion area for pages that address certain topics. These discussion pages are similar to a forum or message wall where the comments of all users are recorded in chronological order and with indentation of responses, so they allow to see conversations between different participants.

---

## Create a copy of Urantiapedia project on GitHub

To make the copy, follow these steps:
- Go to https://github.com
- If you already have an account, click *Sign in* and validate.
- If you don't have an account, create one by clicking *Sign up*. Enter a username, an email address, and a password. Once you have an account, log into GitHub with it.
- The first time we enter GitHub, it will ask us to do a verification through our email account. Once verified, we will appear on the GitHub home page.
- Open the *Urantiapedia* project page: https://github.com/JanHerca/urantiapedia
- Create a *fork* of the project. A *fork* is nothing but a proper copy of an existing project in our account, so that the changes we make to this project do not affect the original project. To make the *fork* click on the *Fork* button in the upper right corner of GitHub page.
- In a few seconds a copy of *Urantiapedia* project will be created within your GitHub account. This project is a fresh copy in which you can make the changes you need, without affecting the original project.
- To download a copy of a project there are several ways:
    * Download all by clicking the green *Code* menu and then selecting *Download ZIP*. This creates a compressed file with all the project files. Then you have to unzip the file in any path on your PC to have it installed.
    * Use GitHub Desktop software (https://desktop.github.com/). It is more recommended because this software allows us to show which files we have changed, send our changes to the original project, and see what other participants are changing.

Both ways let us with a folder with several subfolders with *Urantiapedia* project.

---

## Folders in *Urantiapedia* project on GitHub


The most important folders that comprises *Urantiapedia* project on Github are these:
- **.vscode**: configuration files for Visual Studio Code, the software used to develop *Urantiapedia Tools*. *Urantiapedia Tools* is an application created to make it easy to bulk load pages on *Urantiapedia* during the project preparation phase.
- **app**: source code files in JavaScript with *Urantiapedia Tools* application.
- **converter** [`DEPRECATED`]: old C# project now replaced by application contained in app folder.
- **docs**: project documentation.
- **input**: main folder containing input files used to generate *Urantiapedia* pages for a language. These are the only folders that "GitHub editors" should modify in the project.
    * **html**: folder with files in HTML format.
        * **book-xx**: for each translation of *The Urantia Book* there must be a folder with the files in HTML format. For example, `book-en`,` book-en`, etc.
    * **json**: folder with files in JSON format.
        * **book-xx**: for each translation of *The Urantia Book* there must be a folder with the files in JSON format. For example, `book-en`,` book-en`, etc.
        * **footnotes-book-xx.json**: for each translation of *The Urantia Book* there must be a JSON file with footnotes that are references to *The Bible*.
    * **tex**: folder with the files in LaTeX format.
        * **bible-xx**: for each translation of *The Bible* there should be a folder with the files in LaTeX format, such as `bible-es`,` bible-en`, etc.
        * **book-xx** [`DEPRECATED`]: old folder with *The Urantia Book* in LaTeX format that is no longer needed.
    * **txt**: folder with the files in TXT format of the Paramony and the Terms. See the sections TXT Format for Paramony and TXT Format for Terms.
        * **bible-refs-xx** [`DEPRECATED`]: old folder with references to *The Bible* from *The Urantia Book*. This content is no longer required.
        * **topic-index-xx**: for each language in which *The Urantia Book* is translated there must be a folder with the files of the *Index of terms*, such as `topic-index-es`,` topic- index-en`, etc.)
    * **wiki**: folder with the files in Wikitext format. These files are the output files that will be uploaded to *Urantiapedia* once generated by the "administrators." Users "GitHub editors" should not edit these files directly, but through the *Urantiapedia Tools*.
        * **bible-xx**: one folder per language (`bible-es`, etc.) with *The Bible* in Wikitext format.
        * **book-xx**: one folder per language (`book-es`, etc.) with *The Urantia Book* in Wikitext format.
        * **modules**: modules written in Lua, the scripting language with which to create templates for MediaWiki.
        * **templates**: templates for the *Urantipedia*, which are fragments in MediaWiki format that can be reused.
        * **topic-index-xx**: a folder per language (`topic-index-es`, etc.) with the *Index of terms* in Wikitext format.
    * **xml** [`DEPRECATED`]: This folder can be ignored as it is no longer needed.
- **tests**: some sample files that are tested when developing the application.

This list includes the most important folders. Any other folder can be ignored because it contains material that is no longer being used in the process and will surely be eliminated in the future.

The language codes to be used in the folders must follow the ISO 639-1 standard with two letters for each language. https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

The only folders "GitHub editors" need to worry about are the following:
- `input/html`
- `input/json`
- `input/tex`
- `input/txt`

The `input/wiki` folder is the output folder to be used with the *Urantiapedia Tools*. It should never be edited by hand by "GitHub editors". This is where the results of running the *Urantiapedia Tools* against the previous input files will be saved.

It should be borne in mind that there are currently three translations in the Spanish language. All three translations are going to be available on *Urantiapedia*. For that reason there will be these folders:
- `book-es`, with the so-called European translation, made in 2009;
- `book-es-1993`, with the first Spanish translation made in 1993;
- `book-es-2021`, with the new translation made in 2021.

---

## Workflow

For each language to be incorporated in *Urantiapedia*, the following input will be used:
- An official translation of *The Urantia Book*, or the original for English, in HTML format. This content will be left in the `input/html/book-xx` folder of the project on GitHub, where `xx` is the two-letter code for the language (`es` = Spanish, `en` = English, etc.). In the case of the Spanish language, since there are several translations, `book-es` will contain the so-called European edition, `book-es-1993` the 1993 translation, and `book-es-2021` the 2021 translation.
- A copyright-free translation of *The Bible*, as standard as possible, and in the language in question. The format will be LaTeX and the files will be left in the `input/tex/bible-xx` folder of GitHub project, where `xx` is the language code.
- A copy of the file in English language of the cross references between *The Bible* and *The Urantia Book*. This file is located in `input/json/footnotes-book-en.json` and contains the cross-reference relationship developed by Duane L. Faw, in English, which we will refer to from here as the *Paramony*. This Paramony has been converted from its original TXT format to a JSON format that is easier to process. The copy must be renamed by modifying the last two letters by those of the language code. For example, for French, create a copy of the file in English and call that copy as `input/json/footnotes-book-fr.json`.
- A copy of the *Index of Terms* in English language. This index is made up of a collection of files found in `input/txt/topic-index-en` folder. These TXT files are derived from an appendix to an edition of *The Urantia Book* of the *Urantia Fellowship*, which we will refer to hereinafter as the *Fellowship Index* or *Index of Terms*. This *Terms Index* has been converted to a group of TXT files, one for each letter of the alphabet, with terms that begin with each letter in English. The copy must be renamed by modifying the last two letters by those of the language code. For example, for French, create a copy of the English folder and call that copy as `input/txt/topic-index-fr`.

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
2. Translation and revision of the *Index of terms* from English to the target language.
3. Obtaining a translation of the Bible in the target language.
4. Converting *The Urantia Book* from HTML to JSON without footnotes.
5. Adding footnotes to *The Urantia Book* in JSON.
6. Conversion of the *Index of terms* from TXT to Wikitext.
7. Conversion of *The Urantia Book* from JSON with footnotes to Wikitext including references to terms.
8. Converting *The Bible* from LaTeX to Wikitext with footnotes.

"GitHub Editors" will perform tasks 1 to 3. The "Administrators" will perform tasks 4 to 8. We detail each task for "GitHub Editors" in the following sections.

---

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
                        "Esd 7:55; Is 9:2; Mt 4:16; 1 Jn 1:5; 1 Jn 2:8"
                    ],
                    [
                        "Mt 28:19; Hch 2:32-33; 2 Co 13:14; 1 Jn 5:7",
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

> Care must be taken to properly copy the quotation marks that may exist in the texts. Check here the valid quotes for each language: <a href="https://github.com/JanHerca/urantiapedia/blob/master/docs/Languages.md">Quotation marks</a>

---

## Translation and revision of the *Index of terms* from English to target language

We start from English version of *Index of terms* found in `input/txt/topic-index-en`. Make a copy of that folder and change the name to the target language.

The folder contains a file for each letter of the alphabet (`a.txt`, `b.txt`, etc.) plus a `_.txt` file that contains the entries that start with a numeric digit. The reference ordering of the terms is always that of English, so each file contains the terms or topics whose initial letter in the English term matches that letter. For example, the Spanish term "Espíritu Infinito" must be found in the i.txt file because the English term begins with I ("Infinite Spirit").

The format is slightly similar to the YAML format (https://en.wikipedia.org/wiki/YAML) but simplified to the maximum to be very easy to edit.

> IMPORTANT: this file contains tabs and must be edited with a text editor that supports tabs rendering. Recommended editors are: Visual Studio Code (https://code.visualstudio.com/), Notepad++ (https://notepad-plus-plus.org/), or Sublime Text (https://www.sublimetext.com/).

Each file must consist of:
- A header that explains its content which lines begin with #. These lines are ignored when the file is processed.
- A list of terms. Each term is preceded by a blank line and contains several lines:
    - The first line is a short table of description of the term with the values ​​or cells separated by | (vertical bar). Values ​​are:
        - The name of the term. If one or more names separated by (;) appear behind the name, those names are aliases that will be searched in the text of *The Urantia Book* as an alternative form to the real name of the term. The first name will always be the one used as the title of the page in *Urantiapedia*. The rest of the names separated by (;) will be the names or aliases that, added to the first, will be searched within *The Urantia Book* to create links to these terms.
        - General or global references to *The Urantia Book* of the entire term. This value can be blank. These links will be displayed on the *Urantiapedia* page as a "See also" top section with a list of links.
        - Links to other terms. This value can be blank. Represents one or more terms that are related to the current term. They will appear at the bottom of the page that will be generated, in the list of the "Links" section.
        - Category of the term. This value can be blank. There are five categories: Persons (`PERSONA` or `PERSON`), places (`LUGAR` or `PLACE`), orders of beings (`ORDEN` or `ORDER`), religions (`RELIGION`), and races (`RAZA` or `RACE`). These categories allow you to work only in one of them for better division of labor.
        - Status indication. Users "GitHub editors" should put `OK` when they have finished their job of reviewing a term. If the term is still pending review, it will be blank.
    - The following lines, if they exist, represent the content of the term. These lines are also short tables that may or may not have values ​​separated by | (vertical bar). There are three types of tables:
        - Table of a single cell without vertical bar: it will contain a text, the text of a line of the page of *Urantiapedia* and after the text, enclosed in parentheses, if they exist, one or more references to paragraphs of *The Urantia Book*.
        - Table of two cells: the first data is the text of a line of the page of *Urantiapedia*. The second data if it begins with "Ver" (in Spanish) or "See" (in English) will be considered a collection of links to other pages of the *Urantiapedia* that will be added in the "Links" section, and if it does not begin with these words, it will be considered a collection of references enclosed in parentheses.
        - Table of three cells: the first data is the text of a line of the page of the *Urantiapedia*. The second piece of information must necessarily begin with "Ver" (in Spanish) or "See" (in English) and will be considered a collection of links to other *Urantiapedia* pages that will be added in the "Links" section. The third piece of information will be considered a collection of references enclosed in parentheses.

The construction rules for each line of terms other than the first are these:
- They do not need to start with a capital letter or end with a dot. Software will automatically capitalize and end with the dot when converting the file to Wikitext format.
- The text of each line can be a single sentence or several. If there are several and there are periods then the next sentence must begin in capital letter because that sentence will not be corrected.
- The text of each line must not contain parentheses because these characters are reserved to indicate references to *The Urantia Book*.
- Each line can have tabs at the beginning. Each tab indicates that those lines will be contained within the one immediately above without a tab, which will act as a section or subsection title.

Example (file `a.txt`, line 896):
```
gemelos Alfeo | (143:3.5) | Ver apóstoles de Jesús | PERSONA | OK
Santiago y Judas Alfeo, también llamados los gemelos Alfeo, fueron dos de los apóstoles de Jesús
su madre se llamaba María y su padre Alfeo (138:4.1) (189:4.4) (190:3.1)
Santiago o Jacobo Alfeo o Tadeo
    era un pescador y granjero de Jeresa, seleccionado por Santiago Zebedeo como nuevo apóstol (138:2.6)
    estaba casado y tenía tres hijos. Fue llamado también Tadeo (139:10.1,5)
```

In the previous extract we can see that it is the beginning of the content related to the term "Alpheus Twins". At the top of the resulting page an indication will be added saying "See also" followed by the reference to LU 143:3.5. The page will have a "Links" section added at the end, including one to the "Apostles of Jesus" page. The type of term is relative to persons, in this case two apostles of Jesus, and the indication `OK` means that this term has been revised.

Below the first line of the term the excerpt contains five lines of page content. The first line is a single cell and contains no references. The second line is a single cell with three references to three paragraphs of *The Urantia Book*. The third line is a section title because the fourth and fifth lines have tabs at the beggining of them.

The result of converting this content can be seen here:
https://urantiapedia.site/index.php/Gemelos_Alfeo

### Lists

To create lists in the term file, use the character (*) at the beggining of each line. For example, this is how it has been used in the term related to Alexander the Great:

```txt
Alejandro el Grande; Alejandro | | | PERSONA | OK
Hechos sobre Alejandro Magno mencionados en El Libro de Urantia
	* su campaña en el Punjab introdujo herencia aria en la India (79:4.3)
	* su mausoleo real de Alejandría fue visitado por Jesús (130:3.4)
	* Los samaritanos asistieron a Alejandro y eso irritó a los judíos contra ellos (143:4.2-3)
	* Alejandro difundió la civilización helenística en Oriente Próximo (195:1.7-10)
> https://es.wikipedia.org/wiki/Alejandro_Magno
```

### External links

To add external links to a term in the term file, use the character (>) at the beggining of each line. The example above shows how a link to the website of the Spanish Wikipedia on Alexander the Great has been added. You can add multiple links, each in one line, as long as they start with the character > and follow a blank space before the URL.

### Synchronization in all languages

It is important to keep all files in all languages ​​in sync, so that the same lines of the same terms occupy the same position in all files. When adding content to a file in one language, it is important to ensure that the same content is also on the same line number in all other languages. This then eases the review process.

For example, the term about Alexander the Great is in the file `a.txt` on line 838 in both the Spanish and English versions.

### Review of terms.

The content of the terms has been generated using an appendix to an edition of *The Urantia Book* as a starting point, published in English by the *Urantia Fellowship*. This appendix is ​​a brief index of each term so the content is concise and telegraphic. Therefore, there is an extra work to be done to make this content clearer and more explanatory. This work consists of going to each reference in *The Urantia Book* and checking that the text is sufficiently explanatory regarding what the book says, and if not, modifying it.

---

## Obtaining a translation of *The Bible* in the target language

A good source to obtain translations of *The Bible* that are also free of copyright is to use the software [e-Sword](https://www.e-sword.net/), a free application that allows you to download translations of *The Bible* in different languages ​​and then export or copy its content to other files.

Any other way to obtain a copyright-free translation of *The Bible* is valid as long as the content is then copied to the correct files. These files must follow these rules:
- the files will be created in the folder `input/tex/bible-xx`, where `xx` is the language code of *The Bible*.
- Each file will have a name following this pattern: `xxx_name.tex` where `xxx` will be a sequential number always with three digits starting at 1 (`001`, `002`, etc.) and `name` will be the name of the book. The names should be in each language, but if not, they could be in English. Below is a provisional list of the books to include, with their number. It should be noted that the order in which books are numbered places first books that are canonical to all creeds before the books that are canonical only in some creeds. This order is not essential but is useful to make it easy the identification of each book simply by the initial number, especially when the names of each book are used in each particular language.
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
- Each chapter will have a starting mark with the command `\chapter{}` and inside the chapter number starting at 1.
- If there are sections (some subtitles that are sometimes put in some editions) its beginning will be marked with the command `\section{}` and within the title of the section.
- After the beginning of a section or a chapter beginning if there are no sections, the verses will go, each one starting with the command `\par`, then separated the verse number, always starting at 1 and then separated the content. Each verse will be a line.
- To improve readability, blank lines can be put before and after chapters and sections, which will be ignored.

### List of biblical books

Num. | Abr. | Spanish name | English name
---|---|---|---
001 | Gn | Génesis | Genesis
002 | Ex | Éxodo | Exodus
003 | Lv | Levítico | Leviticus
004 | Nm | Números | Numbers
005 | Dt | Deuteronomio | Deuteronomy
006 | Jos | Josué | Joshua
007 | Jue | Jueces | Judges
008 | Rt, Rth | Rut | Ruth
009 | 1 Sam | I Samuel | 1 Samuel
010 | 2 Sam | II Samuel | 2 Samuel
011 | 1 Re, 1 Ki | I Reyes | 1 Kings
012 | 2 Re, 2 Ki | II Reyes | 2 Kings
013 | 1 Cr, 1 Ch | I Crónicas | 1 Chronicles
014 | 2 Cr, 2 Ch | II Crónicas | 2 Chronicles
015 | Esd, Ez | Esdras | Ezra
016 | Neh | Nehemías | Nehemiah
017 | Est | Ester | Esther
018 | Job | Job | Job
019 | Sal, Ps | Salmos | Psalms
020 | Pr | Proverbios | Proverbs
021 | Ec | Eclesiastés | Ecclesiastes
022 | Cnt, Song | Cantar de los Cantares | Song of Solomon
023 | Is | Isaías | Isaiah
024 | Jer | Jeremías | Jeremiah
025 | Lm, Lam | Lamentaciones de Jeremías | Lamentations
026 | Ez, Ezk | Ezequiel | Ezekiel
027 | Dn | Daniel | Daniel
028 | Os, Ho | Oseas | Hosea
029 | Jl | Joel | Joel
030 | Am | Amós | Amos
031 | Abd | Abdías | Obadiah
032 | Jon | Jonás | Jonah
033 | Miq, Mic | Miqueas | Micah
034 | Nah | Nahum | Nahum
035 | Hab | Habacuc | Habakkuk
036 | Sof, Zep | Sofonías | Zephaniah
037 | Hag | Hageo | Haggai
038 | Zac, Zec | Zacarías | Zechariah
039 | Mal | Malaquías | Malachi
040 | Mt | Evangelio de Mateo | Gospel of Matthew
041 | Mc, Mk | Evangelio de Marcos | Gospel of Mark
042 | Lc, Lk | Evangelio de Lucas | Gospel of Luke
043 | Jn | Evangelio de Juan | Gospel of John
044 | Hch, Acts | Hechos de los Apóstoles | Acts of the Apostles
045 | Ro | Epístola a los Romanos | Epistle to the Romans
046 | 1 Co | Epístola a los Corintios I | First Epistle to the Corinthians
047 | 2 Co | Epístola a los Corintios II | Second Epistle to the Corinthians
048 | Gl, Ga | Epístola a los Gálatas | Epistle to the Galatians
049 | Ef, Eph | Epístola a los Efesios | Epistle to the Ephesians
050 | Flp, Phil | Epístola a los Filipenses | Epistle to the Philippians
051 | Col | Epístola a los Colosenses | Epistle to the Colossians
052 | 1 Ts, 1 Th | Epístola a los Tesalonicenses I | First Epistle to the Thessalonians
053 | 2 Ts, 2 Th | Epístola a los Tesalonicenses II | Second Epistle to the Thessalonians
054 | 1 Ti | Epístola a Timoteo I | First Epistle to Timothy
055 | 2 Ti | Epístola a Timoteo II | Second Epistle to Timothy
056 | Tit | Epístola a Tito | Epistle to Titus
057 | Flm, Pm | Epístola a Filemón | Epistle to Philemon
058 | Heb | Epístola a los Hebreos | Epistle to the Hebrews
059 | Stg, Jm | Epístola de Santiago | Epistle of James
060 | 1 P | Epístola de Pedro I | First Epistle of Peter
061 | 2 P | Epístola de Pedro II | Second Epistle of Peter
062 | 1 Jn | Epístola de Juan I | First Epistle of John
063 | 2 Jn | Epístola de Juan II | Second Epistle of John
064 | 3 Jn | Epístola de Juan III | Third Epistle of John
065 | Jud | Epístola de Judas | Epistle of Jude
066 | Ap, Rev | Apocalipsis de Juan | Revelation
067 | Tb | Tobit | Tobit
068 | Jdt | Judith | Judith
069 | 1 Mac, 1 Macc | I Macabeos | First Book of Maccabees
070 | 2 Mac, 2 Macc | II Macabeos | Second Book of Maccabees
071 | Sab, Wis | Sabiduría | Book of Wisdom
072 | Eclo, Sir | Eclesiástico | Ecclesiastes
073 | Bar | Baruc | Baruch
074 | Bel | Historia de Bel y el Dragón | Bel and the Dragon
075 | Man | Oración de Manasés | Prayer of Manasseh
076 | 1 Hen, 1 Eno | Enoc | Book of Enoch
077 | AsMo | Asunción de Moisés | Assumption of Moses



