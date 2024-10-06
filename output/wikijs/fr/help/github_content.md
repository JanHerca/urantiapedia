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
        <td><a href="/fr/help/github_edit_local">Travailler localement sur le PC</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_initial_flow">Workflow pour créer un contenu initial dans une langue</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Organisation du projet *Urantiapedia* sur GitHub

Les dossiers qui composent le projet *Urantiapedia* sur Github sont les suivants :
- **.vscode** : fichiers de configuration pour Visual Studio Code, qui est l'IDE de développement pour *Urantiapedia Tools*.
- **app** : fichiers de code source JavaScript avec l'application *Urantiapedia Tools*.
- **css** : quelques fichiers CSS pour mieux afficher les fichiers Markdown.
- **docs** : quelques documents sur le projet, bien que l'aide principale se trouve dans `output/wikijs/help`.
- **input** : dossier principal qui contient les fichiers d'entrée utilisés pour générer de nombreuses pages de *Urantiapedia*.
    * ***html** : dossier contenant les fichiers au format HTML.
        * **book-xx** : *Le Livre d'Urantia* dans ses différentes traductions au format HTML original obtenu de la *Fondation Urantia* (`book-es`, `book-en`, etc.)
    * **json** : dossier contenant les fichiers au format JSON.
        * **book-xx** : *Le Livre d'Urantia* dans ses différentes traductions au format JSON, mais sans les notes de bas de page *Paramony* (`book-es`, `book-en`, etc.)
        * **book- xx-footnotes** : *Le Livre d'Urantia* dans ses différentes traductions au format JSON, mais avec les notes de bas de page de la *Paramony* (`book-es-footnotes`, `book-en-footnotes` , etc.)
        * **footnotes-book-xx.json** `DEPRECATED` : ancienne version de *Paramony* au format JSON.
    * **kml** : fichiers KML et CSV utilisés pour générer les cartes, chacun dans un dossier pour chaque langue (`en`, `es`, etc.).
    * **markdown** / **xx** (`en`, `es`, etc.) :
      * **paramony** : contient la dernière version de Paramony. Auparavant, les fichiers JSON étaient utilisés, mais désormais les fichiers Markdown sont utilisés. Les fichiers pour la langue anglaise contiennent les tableaux principaux ; les fichiers d'autres langues ne sont que des traductions.
      * **autres dossiers** : fichiers Markdown temporaires pour les articles et les livres obtenus à partir d'une conversion de format PDF / DOCX ou lors de la numérisation, chacun dans un dossier pour chaque langue (`en`, `es`, etc.).Le contenu de ce dossier ne sera pas conservé dans le temps car il sera corrigé et déplacé vers le dossier de sortie.
      * **3dmodels_catalog.md** : catalogue de modèles 3D. Le fichier pour la langue anglaise contient les tableaux principaux ; les fichiers d'autres langues ne sont que des traductions.
      * **image_catalog.md** : catalogue d'images. Le fichier pour la langue anglaise contient les tableaux principaux ; les fichiers d'autres langues ne sont que des traductions.
      * **map_catalog.md** : catalogue de cartes. Le fichier pour la langue anglaise contient les tableaux principaux ; les fichiers d'autres langues ne sont que des traductions.
      * **paralells.md** : catalogue général de parallèles entre _Le Livre d'Urantia_ et le reste du contenu (articles, Bible, autres livres, etc.).
    * **mediawiki** `DEPRECATED` : dossier avec l'ancien contenu au format Wikitext pour MediaWiki. La première version de *Urantiapedia* a été réalisée avec MediaWiki mais la version actuelle est créée avec *Wiki.js*.
        * **articles-xx** : Dossiers obsolètes avec des exemples d'articles au format Wikitext.
        * **main-pages-xx** : dossiers obsolètes avec du contenu d'aide au format Wikitext.
        * **modules** : modules écrits en Lua, le langage de script pour créer des modèles dans MediaWiki.
        * **sample** : ancien exemple de contenu au format Wikitext.
        * **templates** : modèles pour *Urantipedia*, qui sont des fragments réutilisables au format MediaWiki.
    * **svg** : quelques fichiers SVG.
    * **tex** : dossier avec les fichiers au format LaTeX.
        * **bible-xx** : *La Bible* dans chacune de ses traductions au format LaTeX (`bible-es`, `bible-en`, etc.)
    * **txt** : dossier avec les fichiers en TXT format.
        * **articles-xx** : quelques exemples d'articles au format TXT (`articles-es`, `articles-en`, etc.).
        * **bible-refs-xx** `DEPRECATED` : ancienne version de _Paramony_ (références croisées de la Bible au _Le Livre d'Urantia_) au format TXT (`bible-refs-es`,`bible-refs-en`, etc.).
        * **topic-index-xx** : *Index des termes* traduits dans chaque langue au format TXT (`topic-index-es`, `topic-index-en`, etc.)
- **output** : dossier contenant les fichiers de sortie qui seront téléchargés en masse sur le site *Urantipedia*.
    * **wikijs** : dossier avec le contenu dans les formats pris en charge par *Wiki.js*.
      * **xx** : Contenu pour chaque langue dans son propre dossier (`en`, `es`, etc.). La structure pour chaque langue est la même et est la suivante :
            * **3dmodel** : Modèles 3D.
            * **article** : articles organisés en dossiers par auteur. Généralement au format Markdown.
            * **Bible** : Contenu de la Bible. IMPORTANT : les fichiers de ce dossier *ne doivent pas être modifiés*. Au lieu de cela, vous devez éditer les fichiers dans le dossier « input » et ensuite utiliser *Urantiapedia Tools*.
            * **book** : livres organisés en dossiers par auteur. Généralement au format Markdown.
            * **help** : pages d'aide d'Urantiapedia. Au format Markdown.
            * **index** : indices. IMPORTANT : Certains fichiers de ce dossier, mais pas tous, *ne doivent pas être modifiés*. Au lieu de cela, vous devez utiliser les *Urantiapedia Tools* pour les générer.
            * **map** : cartes. Pour l'instant, ils sont au format Markdown avec un *iframe* qui pointe vers Google Maps, mais à l'avenir seuls les fichiers KML seront enregistrés ici.
            * **news** : Actualités mensuelles du projet au format Markdown.
            * **slides** : Présentations.
            * **tests** : pages où vous pouvez tester le contenu futur.
            * **The_Urantia_Book** : Documents du Livre d'Urantia. IMPORTANT : les fichiers de ce dossier *ne doivent pas être modifiés*. Au lieu de cela, vous devez éditer les fichiers dans le dossier « input » et ensuite utiliser *Urantiapedia Tools*.
            * **topic** : Index des termes.
        * **image** : images du site.

Les dossiers marqués *obsolètes* peuvent être ignorés car ils contiennent du matériel qui n'est plus utilisé dans le processus et sera probablement supprimé à l'avenir.

Les codes de langue à utiliser dans les dossiers doivent suivre la norme ISO 639-1 avec deux lettres pour chaque langue. https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

Lors de la génération de contenu pour une nouvelle langue, les dossiers dont il faut se soucier sont :
- `input/html`
- `input/json`
- `input/markdown`
- `input/tex`
- `input/txt`

Il convient de garder à l'esprit qu'il existe actuellement trois traductions en langue espagnole. Les trois traductions seront disponibles sur *Urantiapedia*. C'est pour cela qu'il y aura ces dossiers :
- `book-es`, avec la soi-disant traduction européenne, réalisée en 2009 ;
- `book-es-1993`, avec la première traduction en espagnol réalisée en 1993 ;
- `book-es-2021`, avec la nouvelle traduction réalisée en 2021.


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
        <td><a href="/fr/help/github_edit_local">Travailler localement sur le PC</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_initial_flow">Workflow pour créer un contenu initial dans une langue</a></td>
      </tr>
    </tbody>
  </table>
</figure>