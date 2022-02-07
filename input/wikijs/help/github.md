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

This manual is for users called "GitHub editors", or users that comply with these requirements:
- registered users with an account on [Blue Fields](https://blue-fields.netlify.app/) and on [GitHub](https://github.com/).
- users who have been authorized as project collaborators by the team that runs the project on [Blue Fields](https://blue-fields.netlify.app/) platform.
- users with a minimum knowledge of GitHub management.
- users with some knowledge of *The Urantia Book* in at least one language in which it is published.
- they wish to collaborate in a selfless way in the incorporation of information related to *The Urantia Book* in the *Urantiapedia*.

"GitHub editors" do not need to be registered on the *Urantiapedia* web because a "GitHub editor" will only use a GitHub account to submit the results of his or her work to the *Urantiapedia* project on GitHub. All the necessary work will be done only through GitHub, and web "administrators" will be in charge of uploading changes to the *Urantiapedia* web to check the result of the work.

## GitHub workflow

The process will be as follows:
1. "GitHub editor" creates a *fork* (a copy in its own account) of *Urantiapedia* project on GitHub: https://github.com/JanHerca/urantiapedia.
2. "GitHub editor" creates a local copy of the project on PC.
3. The local copy must be of the latest version of *Urantiapedia* content (the master branch). This is done first through a *clone* action and later through *pulls* actions to the project, that downloads any change to the local copy.
4. "GitHub editor" makes changes in the local copy to the files indicated in this manual and in the way explained.
5. "GitHub editor" makes commmits to the local copy and send changes to GitHub through a *push*. Then performs a *pull request* in GitHub web.
6. The *pull requests* of "GitHub editors" are reviewed by "administrators", who are in charge of doing a *merge* with the main branch (master) of all those changes that are correct. Any changes that are not correct will be rejected and "GitHub editors" will be notified to fix them.
7. Changes that are OK will be uploaded to *Urantiapedia* website by "administrators" in order to check and validate that they are correct and so that anyone can see the results.
8. The process is repeated as many times as needed, returning to point 4.

## Setting up the *Urantiapedia* project

Before any work in *Urantiapedia* using GitHub you must set up all the needed tools. Check [Setting up GitHub project](/en/help/github_setting).

## Folders in *Urantiapedia* project on GitHub

The folders that comprises *Urantiapedia* project on Github are these:
- **.vscode**: configuration files for Visual Studio Code, the software used to develop *Urantiapedia Tools*.
- **app**: source code files in JavaScript with *Urantiapedia Tools* application.
- **css**: some CSS files to show Markdown files better.
- **docs**: project documentation.
- **input**: main folder containing input files used to generate *Urantiapedia* pages for a language. This is the only folder that "GitHub editors" should modify in the project.
    * **html**: folder with files in HTML format.
        * **book-xx**: *The Urantia Book* translations in original HTML from *Urantia Foundation* (`book-en`,` book-en`, etc.)
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

Folders tagged as deprecated can be ignored because contain material that is no longer being used in the process and will surely be eliminated in the future.

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

## Content workflow

For each language to be incorporated in *Urantiapedia*, the following input will be used:
- An official translation of *The Urantia Book*, or the original for English, in HTML format. This content will be left in the `input/html/book-xx` folder of the project on GitHub, where `xx` is the two-letter code for the language (`es` = Spanish, `en` = English, etc.). In the case of the Spanish language, since there are several translations, `book-es` will contain the so-called European edition, `book-es-1993` the 1993 translation, and `book-es-2021` the 2021 translation.
- A copyright-free translation of *The Bible*, as standard as possible, and in the language in question. The format will be LaTeX and the files will be left in the `input/tex/bible-xx` folder of GitHub project, where `xx` is the language code.
- A copy of *Paramony* footnotes in English. This is a file with cross references between *The Bible* and *The Urantia Book* located in `input/json/footnotes-book-en.json`. It has been created using a cross-reference relationship developed by Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), converted from its original TXT format to a JSON format that is easier to process. The copy must be renamed modifying the last two letters by those of the language code. For example, for French, create a copy of the file in English and call that copy as `input/json/footnotes-book-fr.json`.
- A copy of the *Topic Index* in English language. This index is made up of a collection of files found in `input/txt/topic-index-en` folder. These TXT files are derived from the appendix of *Urantia Fellowship* edition of *The Urantia Book* ([Topic Index](https://urantia-book.org/urantiabook/topical_index/index.htm)), which we will refer to hereinafter as *Topic Index*. This *Topic Index* has been converted to a group of TXT files, one for each letter of the alphabet, with topics that begin with each letter in English. The copy must be renamed modifying the last two letters by those of the language code. For example, for French, create a copy of the English folder and call that copy as `input/txt/topic-index-fr`.

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
For any other language it would be done in a similar way. Some of this content may already be available in the current project on GitHub. It is convenient to review what exists before adding new content.

Once we have the input in the correct folders, the steps to take are:
1. Translation of *Paramony* from English to the target language. Check [Translation of Paramony](/en/help/github_paramony).
2. Translation and revision of the *Topic Index* from English to the target language. Check [Translation an revision of Topic Index](/en/help/github_topicindex).
3. Obtain a public-domain translation of *The Bible* in the target language. Check [Obtaining The Bible](/en/help/github_bible).
4. Conversion *The Urantia Book* from HTML to JSON without footnotes.
5. Addition of *Paramony* footnotes to *The Urantia Book* in JSON.
6. Conversion of the *Topic index* from TXT to Wiki.js.
7. Conversion of *The Urantia Book* from JSON with footnotes to Wiki.js including references to topics.
8. Conversion of *The Bible* from LaTeX to Wiki.js with footnotes.
9. Commit changes to [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) project.

*GitHub editors* perform tasks 1-3. *Admins* perform tasks 4-9.

![](/image/formats.png)

## Links

- [Starting with Urantiapedia](/en/help/start)
- [Urantiapedia Content](/en/help/content)
- [Urantiapedia - Languages supported](/en/help/languages)
- [Admin help](/en/help/admin)
- [Dev help](/en/help/devs)
- [Github editors help](/en/help/github)
- [Urantiapedia status - Current progress of the project](/en/help/status)

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub project](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia Foundation](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

