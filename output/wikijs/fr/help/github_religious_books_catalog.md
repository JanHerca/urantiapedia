---
title: "Création d'un catalogue de livres de toutes religions"
description:
published: true
date: 2024-10-10T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2024-10-10T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_studyaids_markdown">Obtenir des aides à l'étude</a></td>
        <td><a href="/fr/help">Índice</a></td>
        <td><a href="/fr/help/github_religious_books_markdown">Obtenez des livres de toutes les religions</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Cette tâche est actuellement terminée et fermée, bien que des modifications à la liste des livres puissent être proposées en envoyant un email à urantiapedia@gmail.com.
{.is-info}

Voici comment créer un catalogue de livres de toutes les grandes religions du monde pour servir de guide dans la création de la [Bibliothèque Urantiapedia](/fr/book), qui est l'un des grands blocs dont le [projet Urantiapedia](/fr/help/phases) est composé.

## Contexte

Comme expliqué dans la motivation de la [Bibliothèque Urantiapedia](/fr/book), il y a des raisons importantes pour les lecteurs du _Le Livre d'Urantia_ de s'efforcer de connaître et de faire connaître les écrits religieux de toutes les religions du monde, en particulier ces religions. avec une longue tradition ou qui ont toujours accepté la croyance en un Dieu créateur.

La connaissance des idées et des croyances de tous les peuples du monde est importante pour faciliter la sympathie et la compréhension entre les races et les nations, et pour pouvoir aspirer à un monde de paix et de fraternité. Nous avons dans _Le Livre d'Urantia_ une belle image qui montre Jésus et un de ses étudiants hindous se familiarisant avec les écrits de nombreuses religions de son temps. [LU 130:3.5](/fr/The_Urantia_Book/130#p3_5) Il s'agit d'un passage inédit et inspirant de la vie de Jésus qui a sans aucun doute pour but de nous motiver à rendre plus variées nos lectures de livres religieux.

Tout comme Jésus et Ganid l’ont fait à Alexandrie en collectant des écrits religieux, nous allons le faire dans Urantiapedia. Nous allons créer une bibliothèque numérique en ligne que tout lecteur pourra consulter facilement. Et pas seulement cela, nous allons également relier tous ces livres au reste du contenu d'Urantiapedia.

## Processus

Dans cette tâche, nous essaierons de créer une liste de livres de toutes les religions du monde. Le fichier de cette liste est le suivant :

https://github.com/JanHerca/urantiapedia/blob/master/input/txt/books-en/Religious_books.tsv

Pour toute modification de ce fichier sur GitHub, les instructions fournies aux utilisateurs [Administrateurs](/fr/help/admin), [Rédacteurs en chef](/fr/help/github) ou [Rédacteurs assistants](/fr/help/github_assistant) doit être suivi.

Le contenu de ce fichier est très simple :

- Il s'agit d'un fichier TSV, avec du texte séparé par des tabulations.
- Chaque ligne représente une étagère de livres, ou un groupe au sein de l'étagère, ou un sous-groupe au sein d'un groupe précédent, ou un livre individuel.
- L'ordre est important car la liste maintient une hiérarchie (étagère, groupe, sous-groupe, livre).
- Toutes les lignes comportent trois données séparées par deux onglets.
- Une étagère a : le nom de l'étagère ; des références à des sites Web ou à des livres à partir desquels les livres en rayon ont été obtenus ; chemin dans Urantiapedia avec l’index de cette étagère.
- Un groupe a : le nom du groupe ; balise `<groupe>` ; vide.
- Un sous-groupe a : le nom du sous-groupe ; balise `<sous-groupe>` ; vide.
- Un livre a : un titre ; Chemin Urantiapedia vers ce livre (s'il existe) ; OK (si le livre est téléchargé) ou vide (sinil ne l'est pas).

> Il est fortement recommandé d'éditer les fichiers TSV avec [Visual Studio Code](https://code.visualstudio.com/) en ajoutant l'extension [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv), qui permet la coloration des données et bien plus encore.
{.is-info}

## Résultat

Avec ce fichier l'index de la _Bibliothèque Urantiapedia_ et les index de chaque étagère ont été créés manuellement (en utilisant _replaces_). Vous pouvez voir le résultat dans l'[Index de tous les groupes de livres](/fr/index/books). Cette page est également accessible sur ce site, depuis le menu latéral de gauche, option `AUTRES LIVRES \ Index`. Pour le moment, cette page n'est disponible qu'en anglais, espagnol et français.

## Liens externes

- [Urantiapedia Tools - projet sur GitHub](https://github.com/JanHerca/urantiapedia)

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_studyaids_markdown">Obtenir des aides à l'étude</a></td>
        <td><a href="/fr/help">Índice</a></td>
        <td><a href="/fr/help/github_religious_books_markdown">Obtenez des livres de toutes les religions</a></td>
      </tr>
    </tbody>
  </table>
</figure>