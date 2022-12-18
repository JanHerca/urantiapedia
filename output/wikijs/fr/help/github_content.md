---
title: Urantiapedia - Contenu du projet GitHub
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
        <td><a href="/fr/help/github_setting">Setting up GitHub project</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href=«/fr/help/github_paramony»>Translation of Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Dossiers dans le projet *Urantiapedia* sur GitHub

Les dossiers qui composent le projet *Urantiapedia* sur Github sont les suivants :
- **.vscode** : fichiers de configuration pour Visual Studio Code, le logiciel utilisé pour développer *Urantiapedia Tools*.
- **app** : fichiers de code source en JavaScript avec l'application *Urantiapedia Tools*.
- **css** : quelques fichiers CSS pour mieux afficher les fichiers Markdown.
- **docs** : une partie de la documentation du projet bien que la documentation principale se trouve dans `output/wikijs/help`.
- **input** : dossier principal contenant les fichiers d'entrée utilisés pour générer les pages *Urantiapedia* pour une langue. C'est le seul dossier que les «éditeurs en chef» doivent modifier dans le projet.
    * **html** : dossier avec des fichiers au format HTML.
        * **book-xx** : traductions du *Livre d'Urantia* en HTML original de la *Fondation Urantia* (`book-en`,` book-es`, etc.)
    * **json** : dossier avec les fichiers au format JSON.
        * **book-xx** : traductions du *Livre d'Urantia* au format JSON, sans les notes de bas de page *Paramony* (`book-en`,` book-es`, etc.)
        * **book-xx-footnotes** : traductions du *Livre d'Urantia* au format JSON et avec des notes de bas de page *Paramony* (`book-en-footnotes`,` book-es-footnotes`, etc.)
        * **footnotes-book-xx.json** `DEPRECATED` : ancienne version des notes de bas de page *Paramony* au format JSON.
    * **kml** : fichiers KML et fichiers CSV utilisés pour générer les cartes, chacun dans un dossier pour chaque langue (`en`, `es`, etc.).
    * **markdown** :
      * **paramony** : Contient la dernière version de Paramony. Auparavant, les fichiers JSON étaient utilisés, mais maintenant les fichiers Markdown sont utilisés. Les fichiers pour la langue anglaise contiennent les tables principales ; les fichiers pour d'autres langues ne sont que des traductions.
      * **autres dossiers** : Fichiers Markdown temporaires pour les articles et les livres tels qu'ils sont obtenus à partir d'une conversion à partir de formats PDF / DOCX ou d'une numérisation, chacun dans un dossier pour chaque langue (`en`, `es`, etc.) . Le contenu ici n'est pas conservé tant qu'il est nettoyé et déplacé vers le dossier de sortie.
      * **3dmodels_catalog.md** : catalogue de modèles 3D. Le fichier pour la langue anglaise contient les tables principales ; les fichiers pour d'autres langues ne sont que des traductions.
      * **image_catalog.md** : catalogue d'images. Le fichier pour la langue anglaise contient les tables principales ; les fichiers pour d'autres langues ne sont que des traductions.
    * **mediawiki** `DEPRECATED` : dossier contenant d'anciens fichiers au format Wikitext pour MediaWiki. La première version de *Urantiapedia* a été faite pour MediaWiki mais la version actuelle est créée avec *Wiki.js*.
        * **articles-xx** : anciens dossiers pour les exemples d'articles au format Wikitext.
        * **main-pages-xx** : anciens dossiers avec contenu d'aide au format Wikitext.
        * **modules** : modules écrits en Lua, le langage de script permettant de créer des modèles pour MediaWiki.
        * **sample** : ancien exemple de contenu au format Wikitext.
        * **templates** : modèles pour *Urantipedia*, qui sont des fragments au format MediaWiki qui peuvent être réutilisés.
    * **tex** : dossier avec les fichiers au format LaTeX.
        * **bible-xx** : traductions *Bible* au format LaTeX (`bible-es`,` bible-en`, etc.)
    * **txt** : dossier avec les fichiers au format TXT.
        * **articles-xx** : quelques exemples d'articles au format TXT (`articles-es`,`articles-en`, etc.).
        * **bible-refs-xx** `DEPRECATED` : ancienne version de Paramony (références croisées de la Bible au Livre d'Urantia) au format TXT (`bible-refs-es`,`bible-refs-en`, etc.) .
        * **topic-index-xx** : traductions *Topic Index* au format TXT (`topic-index-es`,`topic-index-en`, etc.)
- **output** : dossier contenant les fichiers de sortie qui seront téléchargés en masse sur le site *Urantipedia*.
    * **wikijs** : dossier avec le contenu dans des formats pris en charge par *Wiki.js*.
        * **xx** : le contenu de chaque langue se trouve dans son propre dossier (`en`, `es`, etc.). La structure pour chaque langue est la même, et c'est comme suit :
            * **article** : Articles, organisés en dossiers par auteur. Ils sont généralement au format Markdown.
            * **Bible** : contenu de la Bible. IMPORTANT : les fichiers de ce dossier *ne doivent pas être modifiés*. Au lieu de cela, les fichiers du dossier `input` doivent être mis à jour, puis utiliser *Urantiapedia Tools*.
            * **book** : livres, organisés en dossiers par auteur. Ils sont généralement au format Markdown.
            * **help** : pages d'aide d'Urantiapedia. Au format Markdown.
            * **index** : index. IMPORTANT : certains fichiers de ce dossier, pas tous, *ne doivent pas être modifiés*. Au lieu de cela, ils sont générés en utilisant *Urantiapedia Tools*.
            * **map** : Cartes. Pour l'instant, ils sont au format Markdown avec un *iframe* qui relie Google Maps, mais dans un avenir ici, nous ne stockons que les fichiers KML.
            * **news** : actualités mensuelles du projet au format Markdown.
            * **The_Urantia_Book** : Les articles du Livre d'Urantia. IMPORTANT : les fichiers de ce dossier *ne doivent pas être modifiés*. Au lieu de cela, les fichiers du dossier `input` doivent être mis à jour, puis utiliser *Urantiapedia Tools*.
            * **topic** : Index des sujets.
        * **image** : Images pour le site.

Les dossiers marqués comme obsolètes peuvent être ignorés car ils contiennent du matériel qui n'est plus utilisé dans le processus et qui sera sûrement éliminé à l'avenir.

Les codes de langue à utiliser dans les dossiers doivent suivre la norme ISO 639-1 avec deux lettres pour chaque langue. https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

Les seuls dossiers dont les «rédacteurs en chef» doivent s'occuper sont les suivants :
- `entrée/html`
- `entrée/json`
- `entrée/démarque`
- `entrée/tex`
- `entrée/txt`

Il convient de garder à l'esprit qu'il existe actuellement trois traductions en espagnol. Les trois traductions seront disponibles sur *Urantiapedia*. Pour cette raison, il y aura ces dossiers :
- `book-es`, avec la traduction dite européenne, réalisée en 2009 ;
- `book-es-1993`, avec la première traduction espagnole réalisée en 1993 ;
- `book-es-2021`, avec la nouvelle traduction faite en 2021.

## Flux de travail de contenu

Pour chaque langue à incorporer dans *Urantiapedia*, l'entrée suivante sera utilisée :
- Une traduction officielle du *Livre d'Urantia*, ou l'original en anglais, au format HTML. Ce contenu sera laissé dans le dossier `input/html/book-xx` du projet sur GitHub, où `xx` est le code à deux lettres de la langue (`es` = espagnol, `en` = anglais, etc. .). Dans le cas de la langue espagnole, puisqu'il existe plusieurs traductions, `book-es` contiendra l'édition dite européenne, `book-es-1993` la traduction de 1993 et ​​`book-es-2021` la traduction de 2021 .
- Une traduction libre de droit de *La Bible*, aussi standard que possible, et dans la langue en question. Le format sera LaTeX et les fichiers seront laissés dans le dossier `input/tex/bible-xx` du projet GitHub, où `xx` est le code de la langue.
- Une copie de *Paramony* dans une langue dans laquelle il est déjà traduit, par exemple en espagnol. La Paramony est une référence croisée entre *La Bible* et *Le Livre d'Urantia* trouvée dans `input/markdown/en/paramony`. Il a été créé en utilisant la relation de référence croisée développée par Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), convertie de son format TXT original en un format Markdown qui est plus facile à traiter. En anglais sont les tableaux avec les informations originales; dans les autres langues, nous copions simplement les textes à traduire.
- Une copie du *Topic Index* en anglais. Cet index est composé d'une collection de fichiers trouvés dans le dossier `input/txt/topic-index-fr`. Ces fichiers TXT sont dérivés de l'annexe de l'édition *Urantia Fellowship* du *Le Livre d'Urantia* ([Topic Index](https://urantia-book.org/urantiabook/topical_index/index.htm)), auquel nous ferons référence ci-après comme *Index des sujets*. Cet *index de sujets* a été converti en un groupe de fichiers TXT, un pour chaque lettre de l'alphabet, avec des sujets commençant par chaque lettre en anglais. La copie doit être renommée en modifiant les deux dernières lettres par celles du code langue. Par exemple, pour le français, créez une copie du dossier anglais et appelez cette copie comme `input/txt/topic-index-fr`.

En résumé, pour l'exemple en français, le contenu à créer en entrée serait :

```
input
    html
        book-fr
            *.html
    markdown
        fr
            paramony
                *.md
    tex
        bible-fr
            *.tex
    txt
        topic-index-fr
            *.txt
```
Pour toute autre langue, cela se ferait de la même manière. Une partie de ce contenu est peut-être déjà disponible dans le projet actuel sur GitHub. Il est pratique de revoir ce qui existe avant d'ajouter du nouveau contenu.

La sortie que l'entrée française précédente générera ressemblera à ceci :

```
output
    wikijs
        fr
            Bible
                (folders with Bible books)
                    *.html
            index
                *.html
            The_Urantia_Book
                *.html
            topic
                *.html
```

Tous les dossiers indiqués ci-dessus pour le dossier `output` sont créés en utilisant *Urantiapedia Tools*, qui s'attend à ce que certains dossiers existent dans le dossier `output`.

> En raison de certains problèmes lors de l'enregistrement simultané d'articles en anglais via le site Web et via GitHub, le dossier des articles en anglais ne se trouve pas dans le sous-dossier `en` (le dossier pour tout le contenu en anglais). Au lieu de cela, il se trouve dans `output \ wikijs \ article`, au même niveau que les dossiers de chaque langue. Cela n'affecte pas le reste des langues. À l'avenir, ce problème sera résolu et le dossier des articles en anglais reviendra dans le sous-dossier `en`.
{.is-warning}

## Liens externes

- [Urantiapedia Tools - Projet GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - Projet GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fondation Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>
 
<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_setting">Setting up GitHub project</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_paramony">Translation of Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>