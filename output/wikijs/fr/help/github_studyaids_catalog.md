---
title: "Création d'un catalogue d'aides à l'étude"
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
        <td><a href="/fr/help/github_articles_markdown">Obtenir des articles</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_studyaids_markdown">Obtenir des aides à l'étude</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Voici comment créer un catalogue d'aides à l'étude _Le Livre d'Urantia_.

La différence entre un article et une aide à l'étude est que le premier est simplement un texte court, apparaissant généralement dans un magazine, et sur _Urantiapedia_ ce sera une seule page Web ; tandis que le second est un texte plus complet, qui dans _Urantiapedia_ pourrait être une ou plusieurs pages dans un dossier (comme des livres), et qui est avant tout orienté vers l'étude et la compréhension d'un sujet complexe du *Livre d'Urantia*.

Nous distinguons l'un de l'autre, même si plus tard ils sont tous enregistrés dans le projet sous le même dossier `/en/article`, à côté des diagrammes, et la distinction peut être un peu mince et artificielle selon le type de contenu. Il est conservé au même endroit afin que tout le matériel créé par le même auteur autre que les livres soit rassemblé dans le même dossier ou section de _Urantiapedia_.

## Traiter

Le processus est identique à celui expliqué pour les articles. Voir [Création d'un catalogue d'articles](/fr/help/github_articles_catalog). La liste provisoire des aides aux études se trouve ici : [Aide aux études prévues](/fr/index/study_aids).

Pour modifier cette liste, vous pouvez le faire de deux manières :

- Connectez-vous ici à _Urantiapedia_. Accédez à la liste des aides à l'étude : [Aides à l'étude prévues](/fr/index/study_aids). Mettez la page en édition dans le menu _Actions de la page > Éditer_ dans le panneau de boutons en haut à droite. Un simple éditeur Markdown s'ouvrira où vous pourrez modifier la liste. (IMPORTANT : pour pouvoir le faire, vous avez besoin d'un administrateur pour activer les autorisations de modification sur cette page.)
- Dans le projet GitHub, modifiez ce fichier : `/output/wikijs/en/index/study_aids.html`. Pour le modifier, vous pouvez simplement télécharger ce fichier ou l'intégralité du projet depuis GitHub. Consultez l'[Aide des éditeurs adjoints](/fr/help/github_assistant) pour savoir comment télécharger des éléments depuis GitHub.

Dans l'un ou l'autre des deux cas précédents, le fichier à éditer est un fichier Markdown très simple où pour chaque aide à l'étude doivent figurer, sous forme de tableau :

- Un drapeau `:white_square_button:` indiquant que l'aide à l'étude n'a pas encore été créée.
- Titre.
- L'auteur.
- Quelques étiquettes facultatives qui catégorisent l'aide à l'étude.
- L'URL à partir de laquelle cette aide peut être téléchargée.

Par exemple:

```
| Statut | Titre | Auteur | Balises | URL |
| ----------------------| ----------------------------------| ----------------------| ---------- | -------------------------------------------------- ------------ |
| :bouton_carré_blanc : | « Étude du Maître Univers » | William S. Sadler Jr. | Astronomie | https://www.urantia.org/en/urantia-book/study-the-urantia-book |
```

## Envoi de fichiers

Si vous avez modifié la liste du fichier sur GitHub, vous avez deux options pour valider vos modifications : si vous êtes un «éditeur en chef», utilisez GitHub comme indiqué dans l'[Aide des éditeurs en chef](/fr/help/github) ; si vous êtes un «éditeur adjoint», vous pouvez simplement envoyer ce fichier Markdown modifié à l'e-mail de n'importe quel administrateur ou à urantiapedia@gmail.com.

## Liens externes

- [Urantiapedia Tools - Projet GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_articles_markdown">Obtenir des articles</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_studyaids_markdown">Obtenir des aides à l'étude</a></td>
      </tr>
    </tbody>
  </table>
</figure>
