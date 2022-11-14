---
title: "Création d'un catalogue d'images"
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
        <td><a href="/fr/help/github_diagrams_svg">Obtenir des diagrammes</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Voici comment créer le catalogue d'images du projet. Ce catalogue est un fichier qui est utilisé pour automatiser l'inclusion d'illustrations dans *Le Livre d'Urantia* et d'autres parties de *Urantiapedia*.

L'aspect visuel d'Urantiapedia est quelque chose dont nous allons nous occuper. Tout le contenu essaiera d'être le plus visuel possible, avec des illustrations de qualité.

## Catalogues d'images du domaine public

Il existe de nombreuses sources d'images ou d'illustrations du domaine public qui peuvent être utilisées à cette fin. Quelques exemples sont:

-Wikimedia Commons. C'est le projet jumeau de Wikipédia pour l'hébergement d'illustrations du domaine public. Certaines collections d'artistes classiques et bibliques peuvent être trouvées ici:
  -James Tissot :
    - https://commons.wikimedia.org/wiki/Gospel_harmony_(James_Tissot)
    - https://commons.wikimedia.org/wiki/Paintings_by_James_Tissot
    - https://www.wikidata.org/wiki/Wikidata:WikiProject_sum_of_all_paintings/Creator/James_Tissot
    - https://commons.wikimedia.org/wiki/Category:The_Life_of_Jesus_Christ_by_James_Tissot
  -William Hole :
    - https://commons.wikimedia.org/wiki/William_Hole%27s_Bible_Illustrations#
  - Gustave Doré :
    - https://commons.wikimedia.org/wiki/Dor%C3%A9%27s_Bible_Illustrations
  - Harold Copping :
    - https://commons.wikimedia.org/wiki/Copping%27s_Bible_Illustrations
- rawpixel. Un service d'acquisition d'images en ligne. Il en a beaucoup dans le domaine public :
  - https://www.rawpixel.com/category/53/public-domain
- Bibliothèque du patrimoine. Une grande collection d'illustrations vintage.
  - https://www.heritagetype.com/pages/free-vintage-illustrations
- Musée anglais.
  - https://www.britishmuseum.org/collection
- Bibliothèque britannique
  - https://www.flickr.com/photos/britishlibrary/albums
- europeana.
  - https://www.europeana.eu/en/collections
- Museo. Diverses institutions artistiques réunies.
  - https://museo.app/
-V&A.
  - https://collections.vam.ac.uk/search/
- Rikjsmuseum.
  - https://www.rijksmuseum.nl/en/rijksstudio
- Smithsonien.
  - https://www.si.edu/openaccess
- Musée d'histoire naturelle de Yale Peabody
  - https://collections.peabody.yale.edu/search/
- Le Métropolitain
  - https://www.metmuseum.org/art/the-collection
- Galerie nationale d'art
  - https://www.nga.gov/open-access-images.html
- The Public Domain Review
  - https://publicdomainreview.org/
- Collection de cartes David Rumsey
  - https://www.davidrumsey.com/luna/servlet/view/all
- Artistes conceptuels. Ils ne sont pas dans le domaine public mais les artistes peuvent être contactés pour demander l'autorisation de les utiliser.
  - Gary Tonge : https://visionafar.com

## Traiter

Le catalogue d'images se trouve uniquement sur GitHub, à `input/markdown/en/image_catalog.md`. Chaque langue a la sienne, mais les tables principales ne se trouvent que dans le dossier «en» pour la langue anglaise. Pour le reste des langues, il n'y a qu'une seule table de traductions des titres depuis l'anglais. Par exemple, dans `/input/markdown/es/image_catalog.md` il n'y a que des traductions de titres de l'anglais vers l'espagnol.

Le catalogue est un fichier Markdown qui comporte plusieurs sections, chacune marquée par la marque `##`. Ces sections représentent des blocs d'illustrations ou d'images qui ont la même origine ou une origine similaire, pour pouvoir travailler par groupes d'images.

Dans chaque section il y a un tableau au format Markdown avec ce contenu :
- `ref` : indique le paragraphe du _Livre d'Urantia_ qui aura l'image en dessous ou à côté. S'il n'est pas encore connu, il peut être laissé vide.
- `float` : indique si l'image doit flotter à côté du texte. Il peut prendre trois valeurs :
  - Vide : l'image est un bloc et le texte est placé au-dessus et au-dessous.
  - 'R' : l'image flotte vers la droite et le texte continue vers la gauche. Si le périphérique n'a pas assez de largeur, ce problème ne se produit pas.
  - `L` : l'image flotte vers la gauche et le texte continue vers la droite. Si le périphérique n'a pas assez de largeur, ce problème ne se produit pas.
- `title` : Titre de l'image ou de l'illustration. Il doit toujours exister.
- `file` : nom du fichier, y compris l'extension. Le chemin du dossier est indiqué dans la section. Il doit toujours exister.
- 'auteur' : auteur. S'il n'est pas connu, il peut être laissé vide.
- 'année' : année ou années de publication. S'il n'est pas connu, il peut être laissé vide.
- `url` : adresse Web à partir de laquelle l'image a été obtenue. Il doit toujours exister.

Par exemple, il peut s'agir d'un extrait d'une section :

```
## /image/The_Urantia_Book/Jesus_life/paintings


| ref      | float | title                          | file                           | author       | year        | url                                                                                                                                             |
| -------- | ----- | ------------------------------ | -------------------------------| -------------| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------|
| 122:8.5  |       | The Adoration of the Magi      | Adoration_of_the_Magi.jpg      | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Magi_(L'adoration_des_mages)_-_James_Tissot_-_overall.jpg        |
|          |       | The Adoration of the Shepherds | Adoration_of_the_Shepherds.jpg | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Shepherds_(L'adoration_des_bergers)_-_James_Tissot_-_overall.jpg |
```

Pour modifier le catalogue d'images, vous devez vous rendre sur le projet GitHub et modifier ce fichier en anglais: `input/markdown/en/image_catalog.md`. Ensuite pour chaque nouvelle image, vous devez modifier cet autre fichier `input/markdown/en/image_catalog.md` et y mettre la traduction du titre de l'anglais vers l'espagnol, bien que cette deuxième modification puisse être ignorée car lors de l'utilisation du catalogue de images, nous vérifions les titres non traduits. Pour modifier les fichiers, vous pouvez télécharger l'intégralité du projet depuis GitHub ou uniquement les fichiers à modifier. Consultez l'[Aide des éditeurs adjoints](/fr/help/github_assistant) pour savoir comment télécharger des éléments depuis GitHub.

## Envoi de fichiers

Pour pousser les modifications, vous avez deux options : 1) si vous êtes un «éditeur en chef», utilisez GitHub comme indiqué dans l'[Aide des éditeurs en chef](/fr/help/github); si vous êtes un «éditeur adjoint», vous pouvez simplement envoyer les fichiers Markdown modifiés à l'e-mail de n'importe quel administrateur ou à urantiapedia@gmail.com.

## Liens externes

- [Urantiapedia Tools - Projet GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_diagrams_svg">Obtenir des diagrammes</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</figure>
