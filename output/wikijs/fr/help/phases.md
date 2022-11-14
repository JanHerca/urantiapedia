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
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/languages">Langues prises en charge</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Pour chaque langue à inclure dans *Urantipedia*, le travail sera effectué dans les jalons suivants. Pour chaque étape, nous incluons ici les tâches à effectuer, où les éditions doivent être faites, et le rôle du collaborateur.

## Jalon I - Le Livre d'Urantia, la Bible et l'index des sujets

Dans cette étape, le contenu considéré comme minimum pour démarrer *Urantiapedia* dans chaque langue est ajouté. Cela inclut *Le Livre d'Urantia*, la *Bible* et l'*Index des sujets*, tous reliés entre eux de sorte qu'il y ait des liens du *Livre d'Urantia* à la *Bible* et aux sujets, et vice versa. De la même manière, la *Bible* et le *Topic Index* seront également liés l'un à l'autre de manière bidirectionnelle.

Pour créer les liens vers la *Bible*, Paramony de Duane L. Faw est utilisé, qui est un fichier avec des références croisées entre la *Bible* et le *Livre d'Urantia*.

https://urantia-book.org/urantiabook/paramony/

Pour créer l'*Index des sujets*, l'index créé par la *Communauté Urantia* pour son édition anglaise du *Livre d'Urantia* est utilisé comme guide. Cet index, car il ne contient que de brèves annotations, est en cours d'extension pour devenir un texte intégral qui servira de version initiale pour chaque page thématique.

https://urantia-book.org/urantiabook/topical_index/index.htm

Ce jalon devrait être atteint au deuxième trimestre 2022.


Tâches | Où | Qui
--- | --- | ---
Développement de convertisseurs de fichiers vers Wiki.js | GitHub | Développeurs
Conversion de chaque article du *Livre d'Urantia* en une page avec des liens vers la *Bible* et les sujets | GitHub | Rédacteurs en chef
Conversion de chaque chapitre de la *Bible* en une page avec des liens vers *Le Livre d'Urantia* | GitHub | Rédacteurs en chef
Développement de *Topic Index Editor*, un assistant pour aider dans le travail avec *Topic Index* | GitHub | Développeurs
Conversion de l'*Index des sujets* en pages avec des liens vers *Le Livre d'Urantia* | GitHub | Rédacteurs en chef
Chargement en masse de fichiers au format Wiki.js | GitHub | administrateurs

## Milestone II - Livres, articles, aides à l'étude, schémas et index

Dans cette étape importante, le contenu d'Urantiapedia est élargi avec trois domaines principaux:
- Des livres au-delà de la *Bible* suspectés d'être des livres utilisés par des révélateurs dans des parties du *Livre d'Urantia*. Par exemple, Matthew Block est un lecteur qui a fait un excellent travail pour trouver ce matériel. https://urantiabooksources.com/
- Articles, aides à l'étude et schémas du *Livre d'Urantia*. Il y en a beaucoup sur le site Web de la [Fondation Urantia](https://www.urantia.org/), dans la [Fellowship](https://urantiabook.org/), dans les associations Urantia et sur des sites Web individuels. Aucun contenu ne sera publié sans l'autorisation expresse des auteurs dès lors qu'il est possible de les localiser. Le contenu peut être téléchargé de deux manières: édition publique (tout éditeur peut l'améliorer) et édition fermée (seuls l'auteur ou les utilisateurs autorisés par l'auteur peuvent le modifier). Les articles peuvent également inclure des images.
- Les index, qui sont soit des pages avec des listes de liens, soit des pages elles-mêmes qui résument un sujet.

Ce jalon devrait être atteint au deuxième trimestre 2023.


Tâches | Où | Qui
--- | --- | ---
Ouverture de *Topic Index* pour l'édition manuelle des éditeurs | web | Rédacteurs adjoints
Développement pour convertir des livres et des articles en Wiki.js | GitHub | Développeurs
Ajout d'autres livres qui sont présumés être des sources du *Livre d'Urantia* | GitHub | Rédacteurs en chef
Ajout d'articles et d'aides à l'étude liés au livre, aux sources et aux références | GitHub | Rédacteurs en chef
Ajout d'index de personnes, d'êtres, de lieux, *La Bible*, références, citations, chronologies, etc | GitHub | Rédacteurs en chef
Chargement en masse de fichiers au format Wiki.js | GitHub | Administrateurs

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/sample_page_article.png">
<figcaption><em> Exemple de rendu d'un article.</em></figcaption>
</figure>

## Milestone III - Traducteur

Dans cette étape, seul le développement sera entrepris. Deux nouveaux outils seront ajoutés dans Wiki.js qui revêtiront une importance particulière dans ce projet et qui ne sont actuellement pas inclus dans la feuille de route *Wiki.js* (https://docs.requarks.io/releases/roadmap):
- Un nouveau type d'éditeur sur les pages web qui permet d'afficher deux langues en même temps et d'effectuer une traduction assistée, de sorte que d'un côté le contenu s'affiche comme un guide, et en parallèle on peut voir les suggestions de traduction et la finale traduction enregistrée. Il disposera également d'une fonctionnalité permettant de connaître les progrès réalisés par l'utilisateur dans son travail de traduction et de se coordonner avec d'autres utilisateurs qui traduisent également dans la même langue.
- Un nouveau type de visualiseur de contenu qui permet de visualiser le contenu dans une double colonne, montrant deux des langues disponibles en même temps. Une bonne utilisation de ceci est de pouvoir voir l'original anglais du *Livre d'Urantia* et une autre langue, mais cela fonctionnerait pour n'importe quelle page et n'importe quelle paire de langues.
- Une option sera également ajoutée pour pouvoir sélectionner la traduction souhaitée en espagnol puisqu'il existe trois traductions officielles du *Livre d'Urantia* en espagnol. Une seule sera la traduction par défaut à laquelle les liens des autres pages seront connectés, mais lors de l'affichage des pages du livre en espagnol, une option sera ajoutée qui permettra de passer de la traduction par défaut aux autres.
Cette étape devrait être franchie au premier trimestre 2024.


Tâches | Où | Qui
--- | --- | ---
Ouverture des livres et articles à l'édition manuelle des *éditeurs* | web | Rédacteurs adjoints
Développement en *Wiki.js* d'un nouvel éditeur de traductions guidées sur le web | GitHub | Développeurs
Développement en *Wiki.js* d'un nouveau visualiseur en mode double pour *Le Livre d'Urantia* en paires de langues | GitHub | Développeurs

<figure id="Sample_fig_2" class="image urantiapedia">
<img src="/image/sample_page_side_by_side.png">
<figcaption><em> Exemple de rendu du Livre d'Urantia côte à côte.</em></figcaption>
</figure>

## Milestone IV - Cartes interactives

Peu de normes existent actuellement pour enregistrer une définition de carte. Le format [KML](https://developers.google.com/kml/documentation) (propriété de Google) est une bonne option qui permet également l'extensibilité car il est basé sur XML. Dans ce jalon, un standard sera défini sur la base du meilleur déjà existant qui permet d'économiser:
- La définition des couches de base et des fonctionnalités de base d'une carte 2D ou 3D.
- Points, lignes et polygones à la surface de la terre.
- Styles personnalisés pour les géométries ci-dessus.
- Annotations contextuelles avec du texte pouvant contenir des liens vers d'autres Urantiapedia ou des pages externes.
- Visites guidées, c'est-à-dire des collections d'animations concaténées où la caméra se déplace d'une position à une autre et le contenu ou les annotations sont affichés et masqués.
- Des animations de géométrie, associées ou non à des visites guidées, qui permettent de montrer par exemple un itinéraire ou de visualiser la migration d'une course.

Les développements qui seront nécessaires dans *Wiki.js* sont:
- Un éditeur de carte côté client qui utilise les API cartographiques 2D et 3D existantes (telles que [Google Maps](https://www.google.com/maps) et [Google Earth](https://www.google.com /intl/en/earth/)) et permet de créer la carte dans le standard.
- Un moteur de rendu côté serveur qui convertit la norme en une visionneuse Web qui rend la carte créée.
- Le visualiseur Web qui présente la carte créée côté client, une version simplifiée (sans outils d'édition) de l'éditeur de carte.

Ce jalon devrait être atteint au deuxième trimestre 2024.


Tâches | Où | Qui
--- | --- | ---
Développement en *Wiki.js* d'un éditeur de carte interactif, du format et du renderer | GitHub | Développeurs
Ajout d'un ensemble d'exemples de cartes interactives, sur les migrations raciales, les faits historiques et les voyages de Jésus | GitHub | Rédacteurs en chef

<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/sample_page_map.jpg">
<figcaption><em> Exemple de rendu d'une carte interactive.</em></figcaption>
</figure>

## Jalon V - Diapositives

Comme pour les cartes, il n'existe pas de formats standard pour enregistrer les présentations. Le format le plus universel est le PPTX de PowerPoint (propriété de Microsoft) mais ce n'est pas un format de type texte. Dans cette étape, une norme pour l'enregistrement des présentations sera définie. Comme alternatives open source très intéressantes qui intègrent des présentations sur le web sans être liées à un format, nous avons:
- [Impress.js](https://github.com/impress/impress.js) avec [Hovercraft](https://github.com/regebro/hovercraft) est une bibliothèque de création de présentation. Le format est [ReST](https://docutils.sourceforge.io/rst.html).
- [Bespoke.js](https://github.com/bespokejs/bespoke) est une micro-bibliothèque de création de présentations. Le format est XML et autres.
- [Strut](https://github.com/tantaman/Strut) est un éditeur pour Impress.js et Bespoke.js. Le format est Markdown.
- [Reveal.js](https://revealjs.com/) est une bibliothèque de création de présentation. Le format est HTML ou Markdown. [Hacker Slides](https://github.com/jacksingleton/hacker-slides) est un éditeur Reveal.js qui utilise Markdown.
- [Landslide](https://github.com/adamzap/landslide) est une bibliothèque de création de diaporamas. Les formats sont Markdown, ReST ou Textile.

Les développements qui seront nécessaires dans *Wiki.js* sont:
- Un éditeur de présentation côté client qui utilise les API existantes et permet de créer la présentation dans un format standard tel que Markdown.
- Un moteur de rendu côté serveur qui convertit la norme en un visualiseur Web qui affiche la présentation créée.
- Le visualiseur Web qui affiche la présentation côté client, une version simplifiée (sans outils d'édition) de l'éditeur de présentation.

Ce jalon est attendu pour le deuxième trimestre 2025.


Tâches | Où | Qui
--- | --- | ---
Ouverture des cartes interactives à l'édition manuelle et aux ajouts par les éditeurs | web | Rédacteurs adjoints
Développement en *Wiki.js* d'un éditeur de slides, avec son format et son renderer | GitHub | Développeurs
Ajout d'un jeu de diapositives en utilisant celles disponibles sur les sites de l'association | GitHub | Rédacteurs en chef

<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/sample_page_slides.png">
<figcaption><em> Exemple de rendu d'une présentation.</em></figcaption>
</figure>

## Milestone VI - Modèles interactifs 3D

Heureusement, dans le monde 3D, il existe une norme ouverte pour créer des scènes 3D, [glTF](https://www.khronos.org/api/index_2017/gltf) du [groupe Khronos](https://github.com/ KhronosGroup/glTF), qui est comme le JPG pour la 3D. Vous pouvez voir la puissance de cette norme dans cet exemple de site Web:

https://github.khronos.org/glTF-Sample-Viewer-Release/

Le format est largement utilisé et pris en charge dans de nombreuses applications, et il existe déjà des éditeurs et des visualiseurs glTF en ligne:
- [PlayCanvas](https://playcanvas.com/). Le moteur est open source et dispose d'un éditeur en ligne payant qui vous permet de créer des scènes de manière collaborative.
- [Babylon.js](https://www.babylonjs.com/). Un moteur et un éditeur open source complet.
- [Three.js](https://threejs.org/). Un moteur et un [éditeur](https://threejs.org/editor/) complètement open source.
- [WebGL Studio] (https://webglstudio.org/). Un moteur, [litescene.js](https://github.com/jagenjo/litescene.js), et un éditeur open source complet.

Les développements qui seront nécessaires dans Wiki.js sont:
- Intégrez dans Wiki.js un éditeur de scène glTF (utilisant l'un des éléments ci-dessus) côté client. glTF utilise un format JSON.
- Un moteur de rendu côté serveur qui convertit le glTF JSON en une visionneuse Web qui affiche la scène 3D créée. Le visualiseur utilisé sera celui associé à l'éditeur sélectionné.

Ce jalon est attendu pour le deuxième trimestre 2026.


Tâches | Où | Qui
--- | --- | ---
Ouverture des diapositives pour édition manuelle et ajouts d'éditeurs | web | Rédacteurs adjoints
Développement en Wiki.js pour un créateur/éditeur de modèle interactif 3D, son format et son renderer | GitHub | Développeurs
Ajout d'un ensemble de modèles 3D sur le Paradis, les sphères architecturales, le Jardin d'Eden et autres | GitHub | Rédacteurs en chef

<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/sample_page_3d.jpg">
<figcaption><em> Exemple de rendu d'un modèle 3D.</em></figcaption>
</figure>
 
## Avenir

Désormais, le projet pourrait envisager de nouveaux défis tels que:
- Servir de lieu de centralisation pour les efforts de traduction du *Livre d'Urantia* dans d'autres langues.
- Servir de portail pour offrir des conférences et des cours de formation en ligne sur différents sujets liés au *Livre d'Urantia*.
- Servir de galerie d'art virtuelle où les artistes qui créent des œuvres liées au *Livre d'Urantia* peuvent exposer leurs œuvres.
- Offrir un centre de questions et réponses sur des sujets liés au *Livre d'Urantia*.

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
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/languages">Langues prises en charge</a></td>
      </tr>
    </tbody>
  </table>
</figure>