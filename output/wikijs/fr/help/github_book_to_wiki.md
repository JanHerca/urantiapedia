---
title: Conversion du Livre d'Urantia à partir de JSON avec des notes de bas de page vers Wiki.js, y compris des références à des sujets
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
        <td><a href="/fr/help/github_footnotes">Ajout de notes de bas de page Paramony</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_bible_to_wiki">Convertir la Bible</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Cette tâche est actuellement terminée et fermée pour les 25 langues disponibles.
{.is-info}

*Les fichiers du Livre d'Urantia* au format JSON avec les notes de bas de page sont générés avec l'outil *Mise à jour des références bibliques dans le Livre d'Urantia (JSON)*, comme nous l'avons déjà vu, et les fichiers résultants sont enregistrés dans `input folders / json / book-xx-footnotes`.

Pour convertir ces fichiers JSON au format Wiki.js, suivez ces étapes :
- Ouvrez *Urantiapedia Tools*.
- Dans *Processus*, sélectionnez : Convertir le Livre d'Urantia (JSON) + l'Index des sujets (TXT) en Wiki.js.
- Les dossiers sont remplis automatiquement : pour les *fichiers TXT*) un comme `input / txt / topic-index-xx`, pour les *fichiers JSON* un comme `input / json / book-xx-footnotes`, et pour les *fichiers HTML * un comme `output / wikijs / xx / The_Urantia_Book` (mais si `xx` = `en` il est omis). Si le dossier de sortie existe, créez tout le chemin dans votre projet. S'il existe déjà des fichiers Wiki.js dans le dossier de sortie, ceux qui existent seront écrasés.
- Dans *Catégories de sujets*, sélectionnez `TOUS` afin que lors de l'exécution du processus de conversion, tous les sujets de toutes les catégories soient utilisés et que les liens dans *Le Livre d'Urantia* soient ajoutés à tous les sujets, ou alternativement, sélectionnez une seule catégorie pour générer uniquement des liens vers sujets appartenant à cette catégorie.
- Cliquez sur *Exécuter*.
- Si tout est correct, *Conversion exécutée avec succès* apparaîtra. En cas d'erreurs, la liste des erreurs apparaîtra. Dans ce cas, il est conseillé de signaler l'erreur à l'un des utilisateurs *développeurs*.

![](/image/help/upt_json_wiki.png)

Les fichiers de sortie sont au format HTML. 197 fichiers seront générés, un pour chaque article du *Livre d'Urantia*.

Les fichiers de sortie sont déjà dans le format qui permet de les télécharger directement sur *Urantiapedia* en utilisant le projet [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Cochez [Télécharger du contenu en masse sur Urantiapedia](/fr/help/github_upload).

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
        <td><a href="/fr/help/github_footnotes">Ajout de notes de bas de page Paramony</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_bible_to_wiki">Convertir la Bible</a></td>
      </tr>
    </tbody>
  </table>
</figure>