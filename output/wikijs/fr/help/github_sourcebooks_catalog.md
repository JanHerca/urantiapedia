---
title: "Création d'un catalogue de livres «source»"
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
        <td><a href="/fr/help/github_religious_books_markdown">Obtenez des livres de toutes les religions</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_sourcebooks_markdown">Obtenir des livres « sources »</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Cette tâche est actuellement terminée et fermée, bien que des modifications à la liste de livres puissent être proposées en envoyant un email à urantiapedia@gmail.com.
{.is-info}

Ceci décrit comment créer un catalogue de livres qui sont censés être des sources du *Livre d'Urantia* ou avoir une relation ou un parallèle avec le *Livre d'Urantia*.

## Contexte

*Le Livre d'Urantia* lui-même offre deux indications claires sur un matériel humain qui a été utilisé pour sa préparation : ([LU 0:12.12](/fr/The_Urantia_Book/0#p12_12) et [LU 121:8.13]( /en/ Le_Livre_Urantia/121#p8_13)). Ajouté à tout cela, il convient de noter que *Le Livre d'Urantia* cite à plusieurs reprises textuellement ou implicitement des livres de la *Bible*, y compris des livres extra-canoniques, et d'autres.

Depuis quelque temps déjà, plusieurs lecteurs éminents ont compilé ces parallèles. Le lecteur Duane L. Faw a publié un volume détaillé intitulé [Paramony](https://www.amazon.com/Paramony-Duane-L-Faw/dp/0965197255/ref=sr_1_2?crid=2FCT0LM14FRVT) dans lequel il détaille 60 000 parallèles entre *Le Livre d'Urantia* et *La Bible*. Un autre lecteur notable, Matthew Block, a développé [un projet de recherche parallèle](https://urantiabooksources.com/) depuis des années avec des livres non bibliques écrits jusqu'au moment de la conception du *Le Livre d'Urantia*, après avoir détecté davantage de livres non bibliques. plus d'une centaine de livres comme sources potentielles pour les auteurs.

## Processus

Dans cette tâche, nous essaierons de créer une liste de tous les livres non bibliques qui ont été détectés avec des parallèles avec le *Livre d'Urantia*. Une source inestimable pour cette liste consiste à consulter le site Web précédent de Matthew Block.

La liste provisoire des livres se trouve ici :

https://github.com/JanHerca/urantiapedia/blob/master/input/txt/books-en/Source_books.tsv

Pour toute modification de ce fichier sur GitHub, les instructions fournies aux utilisateurs [Administrateurs](/fr/help/admin), [Rédacteurs en chef](/fr/help/github) ou [Rédacteurs assistants](/fr/help/github_assistant) doit être suivi.

Le contenu de ce fichier est très simple :

- Il s'agit d'un fichier TSV, avec du texte séparé par des tabulations.
- Chaque ligne représente une étagère de livres, soit un groupe au sein de l'étagère, soit un livre individuel.
- L'ordre est important car la liste maintient une hiérarchie (étagère, groupe, livre).
- Toutes les lignes comportent six éléments de données séparés par des tabulations.
- Une étagère a : le nom de l'étagère ; chemin dans Urantiapedia avec l'index de cette étagère ; le reste vide.
- Un groupe a : le nom du groupe ; balise `<groupe>` ; le reste vide.
- Un livre a : auteur ; titre (y compris l'édition entre parenthèses) ; les documents relatifs au _Livre d'Urantia_ ; nom du dossier contenant le livre dans le stockage Cloud, ou `FAILED` s'il n'a pas été possible de localiser une édition numérique malgré la tentative, ou vide si aucune tentative de localisation d'une édition numérique n'a encore été faite ; OK (si une copie numérique est disponible) ou vide (sinon) ; itinéraire sur Urantiapedia s’il est déjà téléchargé.

> Il est fortement recommandé d'éditer les fichiers TSV avec [Visual Studio Code](https://code.visualstudio.com/) en ajoutant l'extension [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv), qui permet la coloration des données et bien plus encore.
{.is-info}

## Résultat

Avec ce fichier, l'index de la _Bibliothèque Urantiapedia_ et les index de chaque étagère ont été créés manuellement (en utilisant _replaces_). Vous pouvez voir le résultat dans l'[Index de tous les groupes de livres](/fr/index/books). Cette page est également accessible sur ce site, depuis le menu latéral de gauche, option `AUTRES LIVRES \ Index`. Pour le moment, cette page n'est disponible qu'en anglais, espagnol et français.

## Liens externes

- [Urantiapedia Tools - projet sur GitHub](https://github.com/JanHerca/urantiapedia)
- [Paramony](https://www.amazon.com/Paramony-Duane-L-Faw/dp/0965197255/ref=sr_1_2?crid=2FCT0LM14FRVT)
- [«Sources» du Livre d'Urantia](https://urantiabooksources.com/)

<br>


<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_religious_books_markdown">Obtenez des livres de toutes les religions</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_sourcebooks_markdown">Obtenir des livres « sources »</a></td>
      </tr>
    </tbody>
  </table>
</figure>