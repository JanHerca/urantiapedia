# Urantiapedia - Handbook for "administrators"

## About Urantiapedia

* Urantiapedia * (https://urantiapedia.site) is a collaborative website based on [* MediaWiki *] (https://www.mediawiki.org/wiki/MediaWiki) with the purpose of serving as a unified center for the dissemination of all knowledge regarding * The Urantia Book *.

---

## About Blue Fields

* Blue Fields * (https://blue-fields.netlify.app/) is a website that has been created to unite and organize readers of * The Urantia Book * who wish to participate in intelligent, purposeful and altruistic projects in all the world.

---

## About GitHub

The * Urantiapedia * project on GitHub (https://github.com/JanHerca/urantiapedia) is a project created to serve as a quick start-up procedure for * Urantiapedia *. It contains files in certain formats and software that help automate the creation of initial content.

---

## Who is this manual for?

This manual is intended for users called "administrators", that is, those users who meet the following requirements:
- are registered users with an account on [Blue Fields] (https://blue-fields.netlify.app/) and on [GitHub] (https://github.com/).
- are users who have been authorized as project administrators by the team that runs the project on the [Blue Fields] platform (https://blue-fields.netlify.app/).
- they are registered users with an account on the * Urantiapedia * page (https://urantiapedia.site). During the project preparation phase, this registration can only be made by other existing "administrator" users with an account on * Urantiapedia *.
- They are users with extensive knowledge of GitHub and * MediaWiki *.
- are users with extensive knowledge of * The Urantia Book * in at least one language in which it is published, and preferably with a good level of the English version.
- they wish to collaborate in a selfless way in the incorporation of information related to * The Urantia Book * in the * Urantiapedia *.

The website "administrators" are the only ones in charge of uploading changes to the * Urantiapedia * website to check the results of the work during the preparation phase.

---

## Workflow

For the phases of the project, the working procedure, the content planned for the project and how it is organized, consult the [Manual for "GitHub editors"] (https://github.com/JanHerca/urantiapedia/blob/master/docs/ HOWTO_github_editors.md)

The list of tasks to be carried out is as follows:
1. Translation of * Paramony * from English to the target language.
2. Translation and revision of the * Index of terms * from English to the target language.
3. Obtain a translation of * The Bible * in the target language.
4. Converting * The Urantia Book * from HTML to JSON without footnotes.
5. Adding footnotes to * The Urantia Book * in JSON.
6. Conversion of the * Term Index * from TXT to Wikitext.
7. Conversion of * The Urantia Book * from JSON with footnotes to Wikitext including references to terms.
8. Converting * The Bible * from LaTeX to Wikitext with footnotes.

The "GitHub editors" perform tasks 1-3. The "administrators" perform tasks 4-8. We detail each "administrators" task in the following sections.

---

## Conversion of * The Urantia Book * from HTML to JSON without footnotes

The input files in HTML format must be in the `input / html / book-xx` folders, where` xx` are the two letters of the language (`es` = Spanish,` en` = English, etc.)

> IMPORTANT: HTML files as is downloaded from the [Urantia Foundation] official website (https://www.urantia.org/urantia-book/download-text-urantia-book) may have some problems to be processed as which and it is necessary to introduce small modifications to help in the process of conversion to JSON format.

Once the files have been downloaded from the * Urantia Foundation * website, there should be one file (* .html) for each document of * The Urantia Book *, a total of 197 files. The name of each file with each document must meet the pattern that the last three characters of the name are the document number, from 000 to 196 for the conversion to work later. For example, in French the file with document 1 is called `06-Fascicule001.html`; the same file in Bulgarian is called `06-Документ001.html`.

Since in HTML format * The Urantia Book * can adopt different HTML tags for what is considered the title of the document, the title of a section, etc., in the program that performs the conversion it may be necessary to include some modifications when add a new language. This work will be done by the "developer" users, who are the users who are in charge of the development of the * Urantiapedia Tools *. This software is developed in Javascript and the code is in the `app` folder of the project.

Files for 24 languages ​​are currently available: Bulgarian (`book-bg`), Czech (` book-cs`), Danish (`book-da`), German (` book-de`), Greek (`book- el`), English (`book-en`), Spanish (` book-es`, `book-es-1993` and soon` book-es-2021`), Estonian (`book-et`), Farsi (`book-fa`), Finnish (` book-fi`), French (`book-fr`), Hebrew (` book-he`), Hungarian (`book-hu`), Indonesian (` book-id `), Italian (` book-it`), Japanese (`book-ja`), Korean (` book-ko`), Lithuanian (`book-lt`), Dutch (` book-nl`), Polish ( `book-pl`), Portuguese (` book-pt`), Romanian (`book-ro`), Russian (` book-ru`), and Swedish (`book-sv`). These files have already been modified and processed so that the JSON conversion program works correctly with them, and the resulting JSON files are also available.

The Farsi translation is currently in process and not all documents are available.

It should be borne in mind that there are currently three translations in the Spanish language. All three translations are going to be available on * Urantiapedia *. For that reason there will be these folders:
- `book-es`, with the so-called European translation, made in 2009;
- `book-es-1993`, with the first Spanish translation made in 1993;
- `book-es-2021`, with the new translation made in 2021.


To convert files from HTML to JSON without footnotes, follow these steps:
- Open the * Urantiapedia Tools *.
- In * Process * select: convert Urantia Book (HTML) to JSON.
- Select as input folder (* HTML Files *) one of `input / html /`, such as `input / html / book-fr` for French.
- Select as output folder (* JSON files *) one with the same name but in `input / json`, for example` input / json / book-fr` for French.
- Click on * Run *.
- If everything is correct, * Conversion successful * will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the "developer" users in case there is a problem with the software.

! [] (upt_html_json.png)

The resulting files in JSON format should be saved in the `input / json / book-xx` folders, where` xx` are the two letters of the language (`es` = Spanish,` en` = English, etc.)

> IMPORTANT: These files should not be generated or edited by users manually. They should always be created by conversion from the HTML format.

There will be one file for each * The Urantia Book * document, a total of 197 files. The files are named `DocXXX.json`, where` XXX` is the document number from `000` to` 196`.

The format of these files is JSON (https://es.wikipedia.org/wiki/JSON). There is a converter in the * Urantiapedia Tools * that then converts this JSON format to the final Wikitext format.

The structure of the JSON files is this:

```json
{
    "paper_index": "<número de documento, de 0 a 196>",
    "sections": [
        {
            "section_index": "<número de sección, desde 0 si existe a N>",
            "section_ref": "<texto con la ref. de sección, por ejemplo “0:0”>",
            "section_title": "<título de sección para secciones que no sean la 0>",
            "pars": [
                {
                    "par_ref": "<Referencia del párrafo, p.e. “0:0.1”>",
                    "par_pageref": "<Referencia del párrafo según página, p.e. “1.1”>",
                    "par_content": "<Contenido del párrafo. Ver abajo sobre formateo>"
                },
                {

                }
            ]
        },
        {

        }
    ],
    "footnotes": [
        "<array de notas al pie que son referencias a la Biblia>"
    ],
    "paper_title": "<título del documento, sin poner Documento X, sólo el título>"
}
```
In the JSON files resulting from this task, the `footnotes` section will be empty. To complete it, the following task must be executed.

To format the text of the paragraph with some strange characters that appear in * The Urantia Book * in the JSON files these equivalents are used:

Character type | How they are written
--- | ---
Italic | * * (between asterisks)
Small caps | $ $ (between dollar signs)
Underline (for languages ​​that do not include italic option) | \ | \ | (between plecas)


---

## Adding footnotes to * The Urantia Book * in JSON

Adding footnotes to * The Urantia Book * requires that you have previously completed the following tasks:
- Translation of * Paramony * from English to the target language. The result of this task is a file for each language (`input / json / footnotes-book-xx.json`).
- Converting * The Urantia Book * from HTML to JSON without footnotes. The result of this task is a set of 197 files in a folder for each language (`input / json / book-xx`).

To add footnotes to JSON files, follow these steps:
- Open the * Urantiapedia Tools *.
- In * Process * select: Update Urantia Book Bible Refs (JSON).
- Select as input folder (* JSON files *) one of `input / json /`, such as `input / json / book-fr` for French.
- Click on * Run *.
- If everything is correct, * Conversion successful * will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the "developer" users in case there is a problem with the software.

! [] (upt_json_json.png)

The output files are different from the input files to avoid that if there is any problem they are unusable. The output is saved in `input / json / book-xx-footnotes` folders, where` xx` is the language code identical to the one used as the input folder.

---

## Conversion of * Term Index * from TXT to Wikitext

The * Term Index * files in TXT format are created and reviewed by "GitHub editors". These files should be left in folders like `input / txt / topic-index-xx` where` xx` is the code of the target language.

To convert these TXT files to Wikitext format, follow these steps:
- Open the * Urantiapedia Tools *.
- In * Process * select: Convert TopicIndex (TXT) to Wiki.
- Select as input folder (* TXT files *) one of `input / txt / topic-index-xx`.
- Select as output folder (* Wiki Files *) one of `input / wiki / topic-index-xx`. If there are already Wikitext files in the output folder, the existing ones will be overwritten.
- In * Categories of terms * select `ALL` to process all the terms of all the categories, or alternatively, select only one category if you want to generate only the terms that belong to that category.
- Click on * Run *.
- If everything is correct, * Conversion successful * will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the "developer" users in case there is a problem with the software.

! [] (upt_txt_wiki.png)

The output files have a Wikitext format and a `* .wiki` extension. A file will be generated for each term, each one inside a folder with the same name (`_`,` A`, `B`, etc.) that the input` * .txt` files have.

The output files are already in the format that allows uploading directly to * Urantiapedia * using the `importTextFiles.php` command.

---

## Conversion of * The Urantia Book * from JSON with footnotes to Wikitext including references to terms

The * The Urantia Book * files in JSON format with the footnotes are generated with the * Update Bible Refs in Urantia Book (JSON) * tool, as we have already seen, and the resulting files are saved in `input folders / json / book-xx-footnotes`.

To convert these JSON files to Wikitext format, follow these steps:
- Open the * Urantiapedia Tools *.
- In * Process * select: Convert Urantia Book (JSON) + TopicIndex (TXT) to Wiki.
- Select as input folder (* TXT files *) one of `input / txt / topic-index-xx`.
- Select as input folder (* JSON files *) one of `input / json / book-xx-footnotes`.
- Select as output folder (* Wiki Files *) one of `input / wiki / book-xx`. If there are already Wikitext files in the output folder, the existing ones will be overwritten.
- In * Categories of terms * select `ALL` so that when performing the conversion process all the terms of all the categories are used and links in * The Urantia Book * are added to all the terms, or alternatively, select only one category if you want to generate only links to the terms that belong to that category.
- Click on * Run *.
- If everything is correct, * Conversion successful * will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the "developer" users in case there is a problem with the software.

! [] (upt_json_wiki.png)

The output files have a Wikitext format and a `* .wiki` extension. 197 files will be generated, one for each * The Urantia Book * document.

The output files are already in the format that allows uploading directly to * Urantiapedia * using the `importTextFiles.php` command.

---

## Conversion of * The Bible * from LaTeX to Wikitext with footnotes

* The Bible * files in LaTeX format must have been created in folders such as `input / text / bible-xx` where` xx` is the code of the target language.

To convert these LaTeX files to Wikitext format, follow these steps:
- Open the * Urantiapedia Tools *.
- In * Process * select: Convert Bible (LaTeX) + Refs (TXT) to Wiki.
- Select as input folder (* TXT files *) one of `input / txt / bible-refs-es`.
- Select as input folder (* LaTeX Files *) one of `input / tex / bible-xx`.
- Select as output folder (* Wiki Files *) one of `input / wiki / bible-xx`. If there are already Wikitext files in the output folder, the existing ones will be overwritten.
- Click on * Run *.
- If everything is correct, * Conversion successful * will appear. In case of errors, the list of errors will appear. In this case, it is advisable to notify one of the "developer" users in case there is a problem with the software.

! [] (upt_tex_wiki.png)

The output files have a Wikitext format and a `* .wiki` extension. A file will be generated for each chapter of the Bible, and the file names will follow the pattern `bookname_n.wiki`, where` bookname` is the name of the Bible book and `n` is the chapter number. For example, a file `Obadiah_1.wiki`,` Obadiah_2.wiki`, etc. is generated.

The output files are already in the format that allows uploading directly to * Urantiapedia * using the `importTextFiles.php` command.

---
