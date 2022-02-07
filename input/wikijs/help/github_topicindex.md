---
title: Translation an revision of Topic Index
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

Here are described the steps needed to translate and review the *Topic Index* to any of languages of *Urantiapedia*. This is a task accomplish by "GitHub editors".

The *Topic Index* is made up of a collection of TXT files derived from the appendix of *Urantia Fellowship* edition of *The Urantia Book* ([Topic Index](https://urantia-book.org/urantiabook/topical_index/index.htm)).

> IMPORTANT: for executing this task currently there is a development in progress in *Urantiapedia Tools*, called *Topic Index Editor*, that makes editions easier and less prone to errors. Check section below.

To create a new *Topic Index* for another language start from English version of *Topic Index* found in `input/txt/topic-index-en`. Make a copy of that folder and change the name to the target language.

The folder contains a file for each letter of the alphabet (`a.txt`, `b.txt`, etc.) plus a `_.txt` file that contains the entries that start with a numeric digit. The reference ordering of the topics is always that of English, so each file contains the topics whose initial letter in English matches that letter. For example, the Spanish topic "Espíritu Infinito" must be found in `i.txt` file because the English topic begins with I ("Infinite Spirit").

The format is slightly similar to the YAML format (https://en.wikipedia.org/wiki/YAML) but simplified to be very easy to edit.

> IMPORTANT: this file contains tabs and must be edited with a text editor that supports tabs rendering. Recommended editors are: Visual Studio Code (https://code.visualstudio.com/), Notepad++ (https://notepad-plus-plus.org/), or Sublime Text (https://www.sublimetext.com/).

## Topic Index TXT format

Here is an excerpt of the file `a.txt`:

```
<__________________________________________________________________________________
<
<                     A
< Urantia Book Uversa Press Topical index converted to text file
< Each entry has a previous blank line
< Entry = Name | Refs | See also | Category | OK (= revised)
< An entry can have one or several sub-entries (= the lines after entry)
< A sub-entry can have sub-sub-entries with tabs and so on
< Help: https://urantiapedia.org/en/help/github_topicindex
<__________________________________________________________________________________

A-B-C the First; A-B-C the first | (77:8.2) | | PERSON | OK
it is the name of the first secondary midwayer of the first subgroup of eight subgroups that exists. Each subgroup are 248 brothers and sisters, childs of the same parents (77:6.4)

a priori assumptions | | doctrines | | OK
causation, duty, and worship constitute the a priori assumptions which make it possible for man to function as a rational and self-conscious personality (16:6.10)

Aaron (Old Testament); Aaron | | daughters of Aaron | PERSON | OK
Aaron was the older brother of Moses and the one who starred in the event of the golden calf, an idol with which the Israelites decided to represent Yahweh.
Peter talk about him in a preach (146:1.1)
> https://en.wikipedia.org/wiki/Aaron

...
```

Each file consist of:
- A header that explains its content which lines begin with `<`. These lines are ignored when the file is processed.
- A list of topics. Each topic is preceded by a blank line and contains several lines:
    - The first line is a short table with topic description, and the values ​​or cells separated by `|` (vertical bar). Values ​​are:
        - Topic name. If one or more names separated by `;` appear behind the name, those names are aliases that will be searched in the text of *The Urantia Book* as an alternative form to topic name. The first name will always be the one used as the title of the page in *Urantiapedia*. The rest of the names separated by (;) will be the names or aliases that, added to the first, will be searched within *The Urantia Book* to create links to these topics.
        - General or global references to *The Urantia Book* of the entire topic. This value can be empty. These links will be displayed on *Urantiapedia* as a "See also" top section with a list of links.
        - Links to other topics. This value can be empty. Represents one or more topics that are related to current topic. They will appear at the bottom of the page that will be generated, in the list of "Links" section.
        - Topic category. This value can be empty. There are five categories: Persons (`PERSON`), places (`PLACE`), orders of beings (`ORDER`), religions (`RELIGION`), and races (`RACE`). These categories allow to work only in one of them for better separation of tasks and to generate indexes.
        - Status. "GitHub editors" should write `OK` when they have finished their reviewing task with a topic. If the topic is still pending review, it will be empty.
    - The following lines, if they exist, are the topic content. These lines are also short tables that may or may not have values ​​separated by `|` (vertical bar). There are two types of tables:
        - Table of a single cell without `|` (vertical bar): it will contain a text, the text of a line of the page of *Urantiapedia* and after the text, enclosed in parentheses, if they exist, one or more references to paragraphs of *The Urantia Book*.
        - Table of two cells separated by `|` (vertical bar), the first with same content than a table with a single cell, and the second with a list of links to other topics, separated by `;`.
    - Some optional lines at the end of the topic that start with `>`. These will be links to other webpages and will appear in an "External Links" section.

The construction rules for each line in topics other than the first are these:
- They do not need to start with a capital letter or end with period. Software will automatically capitalize and end with period each sentence when converting files to Wiki.js format.
- The text of each line can be a single sentence or several. If there are several then intermediate periods or uppercase letters must appear because only start and end of the lines are corrected.
- The text of each line must not contain parentheses because these characters are reserved for *Urantia Book* references.
- Each line can have tabulation chars at the beginning. Each tabulation char indicates that those lines will be contained within the one immediately above without a tab, which will act as a section or subsection title.
- Lines can start with `*` or `#` or a mix of them to make unnumbered, numbered and mixed lists. See section below.

Example excerpt of a topic (file `a.txt`):
```
apostles of Jesus | (138) (145:4.1) (150:4) (158:0.2) (158:2.5) (172:5) (173:5.6) (184:2.2) (193:3.2) | apostleship | PERSON | OK
The apostles were the group of twelve followers with whom Jesus began his preaching
their names:
* Andrew | Andrew
* Simon Peter | Simon Peter
* James Zebedee | James Zebedee
* John Zebedee | John Zebedee
* Philip | Philip (Apostle)
* Nathaniel | Nathaniel (Apostle)
* Matthew Levi | Matthew Levi
* Thomas Didymus | Thomas Didymus
* James Alpheus | Alpheus twins
* Judas Alpheus
* Simon Zelotes | Simon Zelotes
* Judas Iscariot | Judas Iscariot
* Other known were Matthias and Paul, although the latest never met Jesus | Matthias; Paul
The Urantia Book gives detailed personal descriptions of each (139)
most were married, and some had several children (138:9.3)
all except the Alphaeus twins were graduates of synagogue schools (139:0.3-4)
most were rough fishermen (140:8.20)
they were not all the same in terms of schooling (139:0.3-4)
many carried swords (171:4.1) (172:0.3) (172:2.1) (172:5.2)
many were martyred | martyrs
organization
	their organization is detailed in The Urantia Book (138:10)
	Andrew was the chief (139:1.2)
	Peter, James, and John were Jesus' personal aids (138:10.3)
	Philip was the apostolic steward (139:5.3)
	Nathanael cared for the families of the apostles (139:6.7)
	the itinerary was managed by Thomas (139:8.5)
	Matthew was a fund-raiser (139:7.2)
	Simon was in charge of diversion and relaxation (139:11.2)
	The Alphaeus twins were the errand boys; those who took care of the multitudes (139:10.3)
	Judas Iscariot was treasurer (139:12.3)
	Matthias was chosen to take the place of Judas (192:0.2)
> https://en.wikipedia.org/wiki/Apostles_in_Christianity
```

In the previous extract we can see:
- It is the content related to the topic [apostles of Jesus](/en/topic/apostles_of_Jesus). Go to this page to see the result of this text when converted to *Wiki.js*.
- At the top of the resulting page an indication is added saying "See also" followed by the references found in header of the topic.
- Notice that in the header the topic has a link to `apostleship`, and also the lines with the list of apostles has a `|` and links to topics of the apostles. These links appear in the "Links" section added at the end.
- The type of topic is relative to persons (`PERSON`), in this case the apostles of Jesus.
- Notice that the `OK` mark is present, which means that this topic has been reviewed for english.
- Check that to make an unordered list the lines must start with `*`.
- Notice that many lines do not start uppercase or end with point. That is fixed when creating the page.
- The topic will create a section called `Organization` because below that line next lines have a tab char at the beginning.
- A line like `their names:` is a line with a single cell and contains no references.
- A line like `Philip was the apostolic steward (139:5.3)` is a line with a single cell and contains one reference. 
- A line like `many were martyred | martyrs` is a line with two cells, so the second cell must be links to other topics. To use more topics they can be separated by `;`, like this: `many were martyred | martyrs; Simon Peter`.
- A line like `Matthew was a fund-raiser (139:7.2) | Matthew Levi` (that is not in the example) would be a line with two cells in which the first cell has references and the second cell is a link.
- Notice that external links to a topic are added at the end of the topic and use the character `>` at the beggining of each line. The example above shows how to link to English Wikipedia about apostles. You can add multiple links, each in one line, as long as they start with the character `>` and follow a blank space before the URL.

## Names and alias

The first name in the header is the topic title in the converted page. It is important to ensure that this name appears in as much paragraphs referenced as possible. Sometimes a given name appears in *The Urantia Book* in a lot of different expressions. For example, check next header:

```
absoluta; cosmic force; Cosmic force; space potency; Space potency; space energy; space-energy; mother force of space; space-force; force-charge of space; universal force-charge of space; force blanket; Primordial-force; Primordial force; space-force; universe force; space charge of universal force; force-charge of space; force-charge; power charge; cosmic-force; primal force | | | | OK
```

This header is about `absoluta`, one of the manifestations of energy in the universe. But in *The Urantia Book* receives a lot of variations in the name. All of them has been added after the main name separating them with `;`. This work must be done and reviewed for all *Topic Index*. If the name appears in the book in uppercase and lowercase both variations must be added in the alias list to ensure the correct links are created.

*Topic Index Editor* is a tool that helps a lot checking this. See section below.


## Lists

To create unordered lists in the topic file, use the character `*` at the beggining of each line. For ordered lists, use `#`. For mixed lists, use a combination of both. Some examples:

```txt
Alexander the Great; Alexander | | | PERSON | OK
Facts about Alexander the Great mentioned in The Urantia Book
    * his campaign in Punjab introduced Aryan heritage to India (79:4.3)
    * his royal mausoleum at Alexandria was visited by Jesus (130:3.4)
    * The Samaritans assisted Alexander and that angered the Jews against them (143:4.2-3)
    * Alexander spread the Hellenistic civilization in the Middle East (195:1.7-10)
```
Check the result here: [Alexander the Great](/en/topic/Alexander_the_Great)

```
dual-origin beings | | Sons of God | ORDER | 
orders
    * A. descending orders
    *# Creator Sons
    *# Magisterial Sons
    *# Bright and Morning Stars
    *# Father Melchizedeks
    *# Melchizedek Sons
    *# Vorondadek Sons
    *# Lanonandek Sons
    *# Brilliant Evening Stars
    *# Archangels
    *# Life Carriers
    *# Unrevealed Universe Aids (30:1.41)
    *# Unrevealed Sons of God (30:1.42)
    * B. stationary orders
    *# abandonters
    *# susatia
    *# univitatia
    *# spironga
    *# unrevealed (30:1.48)
    * C. ascending orders
    *# ascending mortals
    *# Son-fused mortals
    *# Spirit-fused mortals
    *# translated midwayers | midwayers
    *# unrevealed ascenders (30:1.54)
```
Check the result here: [dual-origin beings](/en/topic/dual-origin_beings)

Lists do not require to be under a section header and have tabs at the beginning. We have seen an example above with the page of the apostles. In that case the list is created below the previous line.

## Synchronization in all languages

It is important to keep all files in all languages ​​in sync, so that the same lines of the same topics are located in the same position in all files. When adding content to a file in one language, it is important to ensure that the same content is also on the same line number in all other languages. Otherwise, the conversion to Wiki.js will fail.

It is recommended to edit files side-by-side in a text editor that allows to open several files in parallel, as VS Code. An interesting VS Code extension to install is *Sync Scroll*, that allows doing scroll on several files at the same time synchronously.

## *Topic Index Editor*

The *Topic Index Editor* is a tool that is under development but in its current state helps in some tasks of reviewing and editing the *Topic Index*.

To access it:
1. Open *Urantiapedia Tools* pressing F5 in VS Code with the project opened.
2. Two windows opens. ignore the Dev Tools instance. It is there for debugging.
3. Select *Edit Topic Index* in side panel.

![](/image/uptools_topic_editor.png)

The *Topic Index Editor* has four main areas:
- on the left side a the list of topics.
- on top some selectors to set the desired languages.
- on the center a list of topic content, that also shows error messages.
- on the right, the *Urantia Book* content, with the paragraphs referenced by the selected topic.

In a future the *Topic Index Editor* will allow to edit topics directly from the app, but currently the functionality it provides is the following:
- Load the list of topics for a given language.
- Filter topics by catergoy, initial letter, if they are revised or not, and if they have errors or not.
- Show the content of a topic.
- Show the* Urantia Book* paragraphs that are refeerenced by a given line in a topic.
- Highlight the name (or alias) in *The Urantia Book* to review if the name is found.
- Highlight the best sentence in *The Urantia Book* that matches the selected line in the topic and allow the copy.

To use the *Topic Index Editor* follow these instructions:
1. In the top selector *Main Language (to modify)* select your desired language. Leave the secondary language selector as English. The topics are loaded after some seconds.
2. In the top selector *Topic letters* select the letter in which you are working. Topics are filtered by that letter showing only the ones that start with that letter in English.
3. Select one topic in the list. The list of lines, if they are any, are filled in the Topic content area. The topic lines are listed in both selected languages in top selectors so both languages can be compared.
4. Select one line in the topic. The list of parragraphs referenced by the topic line are filled in the *Urantia Book* content area.

One of the useful functionalities of *Topic Index Editor* is that it shows errors found in topics. For example, in the snapshot below a link to a not existing topic has been found. Now we can go to VS Code and check the file with the error and fix it.

![](/image/uptools_topic_editor_2.png)

Another useful functionality is that the name of the topic is highlighted in the *Urantia Book* text. For example in the snapshot below the topic, `brotherhood of man` in English and `hermandad de los hombres` in Spanish, has been found in the text in English but not in Spanish. You can check and see that in Spanish the *Urantia Book* says `fraternidad de los hombres` instead of `hermandad de los hombres`, which means the same. So to fix this we need to add `fraternidad de los hombres` as an alias in the topic.

Also a useful functionality is that the short line selected, that says `civilization encompased by love` in English and `civilización rodeada por el amor` in Spanish, has been found in the *Urantia Book* paragraph that is referenced for the topic line. The sentence in the paragraph that best matches the line is highlighted in bold and a Copy button appears in the bottom. You can use that button to copy the sentence to clipboard and paste in VS Code, improving the text in the topic with a more explanatory text.

![](/image/uptools_topic_editor_3.png)