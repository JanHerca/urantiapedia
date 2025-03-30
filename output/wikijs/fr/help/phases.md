---
title: Jalons d'Urantiapedia
description: 
published: true
date: 2021-12-08T13:55:38.362Z
tags: help
editor: markdown
dateCreated: 2021-11-28T13:55:38.362Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/content">Contenu d'Urantiapedia</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/languages">Langues prises en charge</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Pour chaque langue à inclure dans *Urantipedia*, le travail sera effectué dans les jalons suivants. Pour chaque étape, nous incluons ici les tâches à effectuer, où les éditions doivent être faites, et le rôle du collaborateur.

## Étape I - Le Livre d'Urantia et la Bible

Cette étape intègre le contenu considéré comme minimal pour démarrer l'*Urantiapedia* dans une langue donnée. Cela inclut *Le Livre d'Urantia* et la *Bible*, tous deux liés ensemble de sorte qu'il existe des liens allant du *Livre d'Urantia* à la *Bible* et vice versa.

Pour créer les liens vers la *Bible*, nous utilisons *Paramony*, de Duane L. Faw, qui est un fichier avec des références croisées entre la *Bible* et *Le Livre d'Urantia*.

https://urantia-book.org/urantiabook/paramony/


Tâches | Où | Qui
--- | --- | ---
Développement de convertisseurs de fichiers vers Wiki.js | GitHub | Développeurs
Conversion de chaque article du *Livre d'Urantia* en une page avec des liens vers la *Bible* | GitHub | Rédacteurs en chef
Conversion de chaque chapitre de la *Bible* en une page avec des liens vers *Le Livre d'Urantia* | GitHub | Rédacteurs en chef
Chargement en masse de fichiers au format Wiki.js | GitHub | Administrateurs

> Cette phase est réalisée pour 25 langues.
{.is-success}

## Étape II - Hémérothèque, Bibliothèque et Encyclopédie

Cette phase élargit le contenu d'*Urantiapedia* avec les domaines suivants :
- **Hémérothèque** : Articles et aides à l'étude pour *Le Livre d'Urantia*. Il y en a beaucoup sur le site Web de la [Fondation Urantia](https://www.urantia.org/), dans la [Fellowship](https://urantiabook.org/), dans les associations Urantia et sur des sites Web individuels. Aucun contenu ne sera publié sans l'autorisation expresse des auteurs dès lors qu'il est possible de les localiser. Le contenu peut être téléchargé de deux manières: édition publique (tout éditeur peut l'améliorer) et édition fermée (seuls l'auteur ou les utilisateurs autorisés par l'auteur peuvent le modifier). Les articles peuvent également inclure des images.
- **Bibliothèque**. Livres religieux des principales religions du monde, livres de lecteurs et livres autres que la *Bible* qui sont soupçonnés d'être des livres utilisés par les révélateurs dans certaines parties du *Livre d'Urantia*. Par exemple, Matthew Block est un lecteur qui a fait un excellent travail pour trouver ce matériel. https://urantiabooksources.com/
- **Encyclopédie**. L'index créé par la *Urantia Fellowship* pour son édition anglaise du *Livre d'Urantia* est utilisé comme guide pour le créer. Cet index, car il ne contient que de brèves annotations, est en cours d'extension pour devenir un texte intégral qui servira de version initiale pour chaque page thématique. https://urantia-book.org/urantiabook/topical_index/index.htm
- Index, pages avec des listes de liens qui servent de point d'entrée au contenu précédent.


Tâches | Où | Qui
--- | --- | ---
Développement pour convertir des livres et des articles en Wiki.js | GitHub | Développeurs
Développement de l'*Topic Index Editor*, un assistant qui permet d'accélérer le travail avec l'*Encyclopédie* | GitHub | Développeurs
Développement pour convertir l'*Encyclopédie* en pages avec des liens vers *Le Livre d'Urantia* | GitHub | Développeurs
Ajout d'articles et d'études liés au livre et à ses sources | GitHub | Rédacteurs en chef
Ajout de livres autres que *La Bible* | GitHub | Rédacteurs en chef
Ajout de contenu à l'*Encyclopédie* | GitHub | Rédacteurs en chef
Ajout d'index de personnes, d'êtres, de lieux, de références bibliques, de citations, de chronologies, etc. | GitHub | Rédacteurs en chef
Téléchargement en masse de fichiers au format Wiki.js | GitHub | Administrateurs

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/help/sample_page_article.png">
<figcaption><em> Exemple de rendu d'un article.</em></figcaption>
</figure>

> Cette phase est réalisée pour 3 langues (anglais, espagnol et français).
{.is-success}

## Étape III - Traducteur

Cette phase est uniquement destinée au développement. Les contenus suivants ont été intégrés :
- Une application dans _Urantiapedia Tools_ qui automatise la traduction en plusieurs langues de plusieurs pages à la fois. Cet outil effectue les opérations suivantes :
  - Permet de se connecter à des services tels que Google Cloud Translator pour traduire le texte.
  - Maintient l'intégrité du style et du format des pages (Markdown et HTML).
  - Copie les citations du *Livre d'Urantia* et de la *Bible* à partir de l'original ou de la traduction existante et ne les traduit pas, préservant ainsi l'intégrité des textes et réduisant le coût de la traduction.
  - Il permet de connaître à l'avance le coût d'exécution de la traduction lors de l'invocation des services utilisés.
- **Le Livre d'Urantia en format de traduction multiple**. Vous permet de visualiser la version originale en anglais et toutes les traductions disponibles (une ou plusieurs).


Tâches | Où | Qui
--- | --- | ---
Développement dans _Urantiapedia Tools_ d'un traducteur de page massif | GitHub | Développeurs
Développement d'un mode d'affichage pour *Le Livre d'Urantia* en plusieurs traductions | GitHub | Développeurs

<figure id="Sample_fig_2" class="image urantiapedia">
<img src="/image/help/sample_page_side_by_side.png">
<figcaption><em> Exemple de rendu du Livre d'Urantia côte à côte.</em></figcaption>
</figure>

> Cette phase est terminée.
{.is-success}

## Étape IV - Extensions, corrections, Cartothèque et Médiathèque

Dans cette nouvelle phase, la phase dans laquelle se situe actuellement le projet, les travaux seront réalisés dans les domaines suivants :
- **Extensions** au contenu des phases précédentes.
- **Corrections**. Étant donné qu’une grande partie du contenu a été introduite rapidement, en utilisant l’automatisation autant que possible, de nombreux bugs et erreurs seront corrigés au fil du temps.
- **Cartothèque**. Une collection de cartes, à la fois interactives et en format d'images fixes, qui éclairent les informations géographiques contenues dans _Le Livre d'Urantia_.
- **Médiathèque** : Il s'agira d'un dépôt de divers documents audiovisuels, qui comprendra des éléments tels que les suivants :
  * Images, qu'il s'agisse de dessins ou de photographies de concepts qui illustrent *Le Livre d'Urantia*.
  * Diagrammes ou schémas, que l'on tentera de rendre interactifs s'ils sont très grands, afin de pouvoir les visualiser sur de petits appareils.
  * Diaporamas.
  * Modèles 3D, chacun sur une page séparée, qui peuvent être statiques ou interactifs comme des cartes.
  * Versions audio du _Livre d'Urantia_.
  * Collections de vidéos intégrées au site, ou si ce n'est pas possible, liens vers des vidéos, avec des cours ou des explications sur _Le Livre d'Urantia_.

La _Cartoteca_ devra développer une solution pour afficher des cartes interactives. Que les cartes soient basées sur des images statiques ou sur du contenu interactif, vous souhaiterez pouvoir effectuer un zoom avant et arrière pour afficher des détails ou obtenir un aperçu général. Il existe des solutions commerciales telles que [Google Maps](https://www.google.com/maps) et [Google Earth](https://www.google.com/intl/es/earth/), qui utilisent un format propriétaire de Google ([KML](https://developers.google.com/kml/documentation)). Mais il existe également d’autres alternatives open source qui seront étudiées durant cette phase dans le but de ne pas introduire de dépendances technologiques sauf si cela est absolument nécessaire.

La fonctionnalité à développer dans la _Cartoteca_ devrait permettre les actions suivantes :
- Zoom : zoom avant/arrière sur la carte. Cette fonctionnalité doit toujours être disponible, que la carte soit une image statique ou dynamique. Les éléments suivants ne seront disponibles que pour les cartes dynamiques.
- Rendu d'une couche de base, et de préférence de plusieurs (plan de rue moderne, satellite, carte en relief).
- Rendu d'éléments vectoriels (points, lignes, polygones) avec différents styles visuels (icônes, épaisseurs, couleurs).
- Notes contextuelles avec du texte pouvant contenir des liens vers d'autres pages *Urantiapedia* ou externes.
- Visites guidées, c'est-à-dire des collections d'animations concaténées où la caméra se déplace d'une position à une autre et le contenu ou les annotations sont affichés et masqués.
- Animations géométriques, associées ou non à des visites guidées, permettant de montrer par exemple un itinéraire ou de visualiser une migration de race.


<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/help/sample_page_map.jpg">
<figcaption><em> Exemple de rendu d'une carte interactive.</em></figcaption>
</figure>

La _Médiathèque_ aura également besoin d'un développement permettant des présentations interactives sur _Urantiapedia_. Nous ne souhaitons pas simplement créer des liens vers des fichiers PPT ou PDF que les utilisateurs peuvent télécharger et visualiser en externe. Nous voulons du contenu dans toutes les langues et connecté au reste d'Urantiapédia. Ce n’est pas facile d’utiliser des formats propriétaires qui introduisent également des dépendances technologiques. C'est pourquoi nous rechercherons des alternatives qui permettent une large fonctionnalité tout en étant basées sur des formats standards.

Certaines alternatives pourraient être :
- [Google Docs](https://docs.google.com/).
- [Prezi](https://prezi.com/).
- [Impress.js](https://impress.js.org/) ([GitHub](https://github.com/impress/impress.js)) + [Hovercraft](https://regebro.github.io/hovercraft) ([GitHub](https://github.com/regebro/hovercraft))
- [Bespoke.js](https://markdalgleish.com/projects/bespoke.js/) ([GitHub](https://github.com/bespokejs/bespoke)).
- [Reveal.js](https://revealjs.com/) + [Hacker Slides](https://github.com/jacksingleton/hacker-slides).
- [Landslide](https://github.com/adamzap/landslide).


<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/help/sample_page_slides.png">
<figcaption><em> Exemple de rendu d'une présentation.</em></figcaption>
</figure>

Dans le cadre de la _Médiathèque_, des scènes 3D seront également incluses. Heureusement, dans le monde des modèles 3D, il existe un standard ouvert pour créer ces scènes 3D : [glTF](https://www.khronos.org/api/index_2017/gltf) du groupe [Khronos](https://github.com/KhronosGroup/glTF), qui ressemble au format JPG mais issu du monde 3D. La puissance de cette norme peut être constatée sur cet exemple de site Web :

https://github.khronos.org/glTF-Sample-Viewer-Release/

Le format est largement utilisé et pris en charge par de nombreuses applications, et des éditeurs et visualiseurs glTF en ligne existent déjà :
- [Sketchfab](https://sketchfab.com/)
- [PlayCanvas](https://playcanvas.com/).
- [Babylon.js](https://www.babylonjs.com/).
- [Three.js](https://threejs.org/) + [editor](https://threejs.org/editor/)
- [WebGL Studio](https://webglstudio.org/) + [litescene.js](https://github.com/jagenjo/litescene.js).


<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/help/sample_page_3d.jpg">
<figcaption><em> Exemple de rendu d'un modèle 3D.</em></figcaption>
</figure>

Tâches | Où | Qui
--- | --- | ---
Développement d'un système d'affichage de cartes interactives | GitHub | Développeurs
Développement d'un système d'affichage de présentation | GitHub | Développeurs
Développement d'un système interactif de visualisation de modèles 3D | GitHub | développeurs
Ajout d'une collection d'exemples de cartes interactives sur les migrations raciales, les faits historiques et les voyages de Jésus de Nazareth | GitHub | Rédacteurs en chef
Ajout d'une collection de présentations en utilisant celles disponibles sur certains sites Web d'associations | GitHub | Rédacteurs en chef
Ajout d'une collection de diagrammes ou de graphiques interactifs | GitHub | Rédacteurs en chef
Ajout d'une collection de modèles 3D, tels que Paradise Island, des sphères architecturales ou le jardin d'Eden | GitHub | Rédacteurs en chef
Création audio du _Livre d'Urantia_ | GitHub | Rédacteurs en chef
Ajout d'une collection de vidéos intégrées ou de liens vers des vidéos | GitHub | Rédacteurs en chef

> Cette phase est actuellement en cours.
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
        <td><a href="/fr/help/content">Contenu d'Urantiapedia</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/languages">Langues prises en charge</a></td>
      </tr>
    </tbody>
  </table>
</figure>