---
title: Urantiapedia - Aide de l'éditeur en chef
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
        <td><a href="/fr/help/admin">Aide des administrateurs</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/github_assistant">Aide des éditeurs adjoints</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## À propos d'Urantiapédia

[Urantiapedia](https://urantiapedia.org) est un site Web collaboratif basé sur [Wiki.js](https://js.wiki/) dans le but d'être un centre unifié pour la diffusion de toutes les connaissances concernant *Le Livre d'Urantia*.

## À propos des champs bleus

[Blue Fields](https://blue-fields.netlify.app/) est un site Web qui a été créé pour rejoindre et organiser les lecteurs du *Livre d'Urantia* qui souhaitent collaborer à des projets intelligents, utiles et altruistes partout dans le monde. monde. C'est le site web qui gère le registre et la collaboration entre les bénévoles d'*Urantiapedia*.

## À propos de GitHub

Urantiapedia a deux projets publics dans GitHub: [Urantiapedia](https://github.com/JanHerca/urantiapedia) et [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) créés pour servir de procédure de démarrage rapide pour le contenu initial. Il contient des fichiers dans certains formats et des logiciels qui aident à automatiser la création du contenu initial.

## À qui s'adresse ce manuel ?

Ce manuel est destiné aux utilisateurs appelés «éditeurs en chef», ou aux utilisateurs qui se conforment aux exigences suivantes:
- Ils ont un compte ici avec des autorisations d'édition, et un autre dans [GitHub](https://github.com/).
- Ils peuvent ajouter du contenu aux deux projets Urantiapedia dans GitHub: [Urantiapedia](https://github.com/JanHerca/urantiapedia) et [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Ils peuvent effectuer un chargement en masse des modifications à l'aide du deuxième projet.
- Ils ont une bonne connaissance de la gestion de Git et GitHub.
- Ils ont une bonne connaissance du *Livre d'Urantia* dans au moins une langue dans laquelle il est publié, mais mieux s'il s'agit de l'anglais et d'une seconde langue dans laquelle le livre est traduit.
- Ils souhaitent collaborer de manière désintéressée à l'ajout d'informations relatives au *Livre d'Urantia* dans *Urantiapedia*.

## Flux de travail GitHub

Le processus pour un «rédacteur en chef» sera le suivant:
1. Crée un *fork* (une copie dans son propre compte) des projets *Urantiapedia* sur GitHub:
  - https://github.com/JanHerca/urantiapedia
  - https://github.com/JanHerca/urantiapedia-backup
2. Crée une copie locale des projets sur PC. La copie locale doit être de la dernière version du contenu *Urantiapedia* (la branche principale). Cela se fait d'abord via une action *clone* et plus tard via des actions *pulls* vers les projets, qui téléchargent toute modification dans la copie locale.
3. Apporter des modifications dans la copie locale du projet Urantiapedia aux fichiers indiqués dans ce manuel et de la manière expliquée. Il ou elle s'engage sur la copie locale.
4. Envoie des modifications partielles (non prêtes à être téléchargées sur le Web) au projet *Urantiapedia* dans GitHub via un *push*. Lorsqu'un ensemble de modifications est prêt pour le Web, synchronise le projet local *Urantiapedia* avec le projet local *Urantiapedia-backup* et télécharge les modifications dans GitHub via un *push*.
5. Crée ensuite une *pull requests* à partir du site Web GitHub pour les deux projets: *Urantiapedia* et *Urantiapedia-backup*.
6. Ces *pull requests* des «rédacteurs en chef» sont examinées par des «administrateurs», qui sont chargés de faire une *merge* avec la branche principale (master) de tous les changements qui sont corrects. Toutes les modifications qui ne sont pas correctes seront rejetées et les «rédacteurs en chef» seront avertis de les corriger.
7. Lorsque les modifications sont correctes, un «administrateur» en fait une *merge* et elles sont automatiquement téléchargées sur le Web. Ils sont généralement disponibles en quelques minutes selon le nombre de changements et leur type.

![](/image/github_workflow_version_2.png)

## Mise en place du projet *Urantiapedia*

Avant tout travail dans *Urantiapedia* en utilisant GitHub, vous devez configurer tous les outils nécessaires. Vérifiez [Configuration du projet GitHub](/fr/help/github_setting).

## Contenu du projet Urantiapedia sur GitHub

Pour connaître le contenu du projet GitHub et sa structure, consultez [Contenu du projet GitHub](/fr/help/github_content).
## Tâches

Pour connaître les jalons du projet, consultez [Jalons d'Urantiapedia](/fr/help/phases).

### Étape I: Le Livre d'Urantia, la Bible et l'index des sujets

1. Traduire *Paramony* de l'anglais vers la langue cible. Vérifiez [Traduction de Paramony](/fr/help/github_paramony).
2. Traduire et réviser *Topic Index* de l'anglais vers la langue cible. Vérifiez [Traduction et révision de Topic Index](/fr/help/github_topicindex).
3. Obtenir une traduction du domaine public de *La Bible* dans la langue cible. Vérifiez [Obtenir la Bible](/fr/help/github_bible).
4. Convertir *Le Livre d'Urantia* de HTML en JSON sans notes de bas de page. Vérifiez [Conversion en JSON](/fr/help/github_book_json).
5. Ajouter des notes de bas de page *Paramony* au *Livre d'Urantia* en JSON. Vérifiez [Ajouter des notes de bas de page Paramony](/fr/help/github_footnotes).
6. Conversion de *Topic index* de TXT en Wiki.js. Vérifiez [Conversion de l'index de rubrique](/fr/help/github_topicindex_to_wiki).
7. Convertir *Le Livre d'Urantia* de JSON avec des notes de bas de page en Wiki.js, y compris des références à des sujets. Vérifiez [Convertir Le Livre d'Urantia](/fr/help/github_book_to_wiki).
8. Convertir *La Bible* de LaTeX en Wiki.js avec des notes de bas de page. Vérifiez [Convertir la Bible](/fr/help/github_bible_to_wiki).
9. Valider les modifications apportées au projet [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Cochez [Télécharger du contenu en masse sur Urantiapedia](/fr/help/github_upload).

Actuellement, toutes les tâches sauf 2 sont terminées.

![](/image/formats.png)

### Milestone II: Livres, articles, aides à l'étude, schémas et index

1. Créez un catalogue de livres qui sont considérés comme des sources du *Livre d'Urantia* ou qui contiennent des parallèles intéressants. Voir [Catalogue de livres sources](/fr/help/github_sourcebooks_catalog).
2. Obtenez les livres précédents. Voir [Obtenir des livres «sources»](/fr/help/github_sourcebooks_markdown).
3. Créez un catalogue d'articles rédigés par des lecteurs. Voir [Catalogue d'articles](/fr/help/github_articles_catalog).
4. Obtenez les articles précédents. Voir [Obtenir des articles](/fr/help/github_articles_markdown).
5. Créer un catalogue d'aides à l'étude. Voir [Catalogue des aides à l'étude](/fr/help/github_studyaids_catalog).
6. Obtenez les aides à l'étude ci-dessus. Voir [Obtenir des aides à l'étude](/fr/help/github_studyaids_markdown).
7. Créez un catalogue de diagrammes. Voir [Catalogue de diagrammes](/fr/help/github_diagrams_catalog).
8. Procurez-vous les diagrammes ci-dessus au format HTML ou, de préférence, SVG. Voir [Obtenir des diagrammes](/fr/help/github_diagrams_svg).
9. Créez le catalogue d'images du projet. Voir [Catalogue d'images](/fr/help/github_images_catalog).

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
        <td><a href="/fr/help/admin">Aide des administrateurs</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/github_assistant">Aide des éditeurs adjoints</a></td>
      </tr>
    </tbody>
  </table>
</figure>

