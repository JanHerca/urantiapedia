---
title: "Création d'un catalogue d'articles"
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
        <td><a href="/fr/help/github_sourcebooks_markdown">Obtenir des livres "sources"</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/github_articles_markdown">Obtenir des articles</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Voici comment créer un catalogue d'articles écrits par des lecteurs liés au _Livre d'Urantia_.

## Traiter

La liste provisoire des articles est disponible ici : [Articles prévus](/en/index/articles).

La liste, qui est actuellement très étendue, est organisée par source. Les sources actuellement utilisées sont :

- Sites Web des Associations Urantia
- Le magazine _Innerface International_
- Le magazine _Urantian Journal_
- Le journal _Journal des bourses_
- Le magazine _Fellowship Herald_
- Articles du projet _UB Annotated & UBTheNews_, par Halbert Katzen
- Articles du projet _Jésus de Nazareth_, par Jan Herca

Les liens à partir desquels le matériel est obtenu sont compilés à la fin de cette liste, ici: [références d'articles](/en/index/articles#references). Toute autre référence où des articles de lecteurs ont été obtenus doit être incluse dans cette liste.

Pour éditer la liste des articles, vous pouvez le faire de deux manières :

- Connectez-vous ici à _Urantiapedia_. Accédez à la liste des articles : [Articles prévus](/fr/index/articles). Mettez la page en édition dans le menu _Actions de la page > Éditer_ dans le panneau de boutons en haut à droite. Un simple éditeur Markdown s'ouvrira où vous pourrez modifier la liste. (IMPORTANT : pour pouvoir le faire, vous avez besoin d'un administrateur pour activer les autorisations de modification sur cette page.)
- Dans le projet GitHub, modifiez ce fichier : `/output/wikijs/en/index/articles.md`. Pour le modifier, vous pouvez simplement télécharger ce fichier ou l'intégralité du projet depuis GitHub. Consultez l'[Aide des éditeurs adjoints](/fr/help/github_assistant) pour savoir comment télécharger des éléments depuis GitHub.

Dans l'un ou l'autre des deux cas précédents, le fichier à éditer est un fichier Markdown très simple où pour chaque article il faut inclure, sous forme de tableau :

- Une marque `:white_square_button:` indiquant que l'article n'a pas encore été créé.
- Un identifiant facultatif de la source utilisée.
- La question si l'article est paru dans un magazine.
- Titre.
- L'auteur.
- Quelques étiquettes facultatives qui catégorisent l'article.

Par exemple:

```
| Status                | Source | Issue        | Title                                                 | Author       | Tags     |
| ----------------------| ------ | ------------ | ------------------------------------------------------| -------------| -------- |
| :white_square_button: | Herald | Vol 01, No 1 | "48 Chromosomes - Are We Asking the Right Questions?" | Ken Glasziou | Biology  |
```

## Envoi de fichiers

Si vous avez modifié la liste du fichier sur GitHub, vous avez deux options pour valider vos modifications: 1) si vous êtes un «éditeur en chef», utilisez GitHub comme indiqué dans l'[Aide des éditeurs en chef](/fr/help/github) ; si vous êtes un «éditeur adjoint», vous pouvez simplement envoyer ce fichier Markdown modifié à l'e-mail de n'importe quel administrateur ou à urantiapedia@gmail.com.

## Liens externes

- [Urantiapedia Tools - Projet GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_sourcebooks_markdown">Obtenir des livres "sources"</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/github_articles_markdown">Obtenir des articles</a></td>
      </tr>
    </tbody>
  </table>
</figure>
