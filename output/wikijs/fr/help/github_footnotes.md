---
title: Ajouter des notes de bas de page au Livre d'Urantia en JSON
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
        <td><a href="/fr/help/github_book_json">Conversion en JSON</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_book_to_wiki">Convertir Le Livre d'Urantia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Cette tâche est actuellement terminée et fermée pour les 28 langues disponibles.
{.is-info}

## Ancienne procédure (obsolète)

> Cette procédure a été mise à jour car elle était trop fastidieuse. Voir ci-dessous.
{.is-warning}

L'ajout de notes de bas de page au *Livre d'Urantia* nécessite d'effectuer au préalable les tâches suivantes :
- Traduction de *Paramony* de l'anglais vers la langue cible. Le résultat de cette tâche est un fichier pour chaque langue (`input/json/footnotes-book-xx.json`).
- Tâche précédente de conversion du *Livre d'Urantia* de HTML en JSON sans notes de bas de page. Le résultat de cette tâche est un ensemble de 197 fichiers dans un dossier pour chaque langue (`input/json/book-xx`).

Pour ajouter des notes de bas de page aux fichiers JSON, procédez comme suit :
- Ouvrez *Urantiapedia Tools*.
- Dans *Processus*, sélectionnez : Mettre à jour les références bibliques dans le Livre d'Urantia (JSON).
- Les dossiers sont remplis automatiquement : pour les *fichiers JSON* un comme `input/json/book-xx`.
- Cliquez sur *Exécuter*.
- Si tout est correct, *Conversion exécutée avec succès* apparaîtra. En cas d'erreurs, la liste des erreurs apparaîtra. Dans ce cas, il est conseillé de signaler l'erreur à l'un des utilisateurs *développeurs*.

![](/image/help/upt_json_json.png)

Les fichiers de sortie sont différents des fichiers d'entrée pour éviter qu'en cas de problème ils soient inutilisables. La sortie est enregistrée dans les dossiers `input / json / book-xx-footnotes`, où `xx` est le code de langue égal à celui utilisé comme dossier d'entrée.

## Nouvelle procédure

L'ajout de notes de bas de page au *Livre d'Urantia* nécessite les tâches suivantes :
- Traduction de *Paramony* de l'anglais vers la langue cible. Cette tâche produit un fichier pour chaque langue (`input/markdown/xx/paramony/The Urantia Book.md`).
- Préconversion du *Livre d'Urantia* du HTML au JSON sans notes de bas de page. Cette tâche produit un ensemble de 197 fichiers dans un dossier pour chaque langue (`input/json/book-xx`).

Pour ajouter des notes de bas de page aux fichiers JSON, procédez comme suit :
- Ouvrez les Outils Urantiapedia*.
- Dans *Processus*, sélectionnez : Mettre à jour les références bibliques dans *Le Livre d'Urantia* (MARKDOWN).
- Les dossiers nécessaires sont automatiquement sélectionnés : pour les *Fichiers JSON*, ce sera `input/json/book-xx`.
- Cliquez sur *Exécuter*.
Si tout est correct, le message « Conversion terminée avec succès » s'affichera. En cas d'erreur, la liste des erreurs s'affichera. Dans ce cas, il est conseillé d'avertir l'un des développeurs en cas de problème avec le logiciel.

Les fichiers de sortie sont différents des fichiers d'entrée afin d'éviter qu'ils ne deviennent inutilisables en cas de problème. La sortie est enregistrée dans le dossier « input/json/book-xx-footnotes », où « xx » correspond au code de langue utilisé comme dossier d'entrée.

![](/image/help/upt_md_json.png)

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
        <td><a href="/fr/help/github_book_json">Conversion en JSON</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_book_to_wiki">Convertir Le Livre d'Urantia</a></td>
      </tr>
    </tbody>
  </table>
</figure>