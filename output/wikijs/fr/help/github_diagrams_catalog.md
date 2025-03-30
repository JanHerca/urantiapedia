---
title: "Création d'un catalogue de diagrammes"
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
        <td><a href="/fr/help/github_studyaids_markdown">Obtenir des aides à l'étude</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_diagrams_svg">Obtenir des diagrammes</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Voici comment créer un catalogue de diagrammes du _Livre d'Urantia_.

## Traiter

Le processus est identique à celui expliqué pour les articles. Voir [Création d'un catalogue d'articles](/fr/help/github_articles_catalog). La liste provisoire des schémas est disponible ici : [Schémas prévus](/en/index/diagrams).

Pour modifier cette liste, vous pouvez le faire de deux manières :

- Connectez-vous ici à _Urantiapedia_. Accédez à la liste des schémas : [Schémas planifiés](/fr/index/diagrams). Mettez la page en édition dans le menu _Actions de la page > Éditer_ dans le panneau de boutons en haut à droite. Un simple éditeur Markdown s'ouvrira où vous pourrez modifier la liste. (IMPORTANT : pour pouvoir le faire, vous avez besoin d'un administrateur pour activer les autorisations de modification sur cette page.)
- Dans le projet GitHub, modifiez ce fichier : `/output/wikijs/en/index/diagrams.md`. Pour le modifier, vous pouvez simplement télécharger ce fichier ou l'intégralité du projet depuis GitHub. Consultez l'[Aide des éditeurs adjoints](/fr/help/github_assistant) pour savoir comment télécharger des éléments depuis GitHub.

Dans l'un ou l'autre des deux cas précédents, le fichier à éditer est un fichier Markdown très simple où pour chaque schéma il faut inclure, sous forme de tableau :

- Un drapeau `:white_square_button:` indiquant que le diagramme n'a pas encore été créé.
- Titre.
- L'auteur.
- Quelques étiquettes facultatives qui catégorisent le diagramme.
- L'URL à partir de laquelle ce diagramme peut être téléchargé.

Par exemple:

```
| Status                | Title                              | Author  | Tags  | URL                               |
| ----------------------| -----------------------------------| --------| ----- | --------------------------------- |
| :white_square_button: | « The Kingdom of Heaven Revelation » |         |       | http://www.universalfather.info/  |
```

## Envoi de fichiers

Si vous avez modifié la liste du fichier sur GitHub, vous avez deux options pour valider vos modifications : 1) si vous êtes un «éditeur en chef», utilisez GitHub comme indiqué dans l'[Aide des éditeurs en chef](/fr/help/github) ; si vous êtes un «éditeur adjoint», vous pouvez simplement envoyer ce fichier Markdown modifié à l'e-mail de n'importe quel administrateur ou à urantiapedia@gmail.com.

## Liens externes

- [Urantiapedia Tools - Projet GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_studyaids_markdown">Obtenir des aides à l'étude</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_diagrams_svg">Obtenir des diagrammes</a></td>
      </tr>
    </tbody>
  </table>
</figure>
