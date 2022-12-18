---
title: Conversion de la Bible de LaTeX en Wiki.js avec des notes de bas de page
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
        <td><a href="/fr/help/github_book_to_wiki">Convertir Le Livre d'Urantia</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_upload">Télécharger du contenu en masse sur Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Cette tâche est actuellement terminée et fermée pour les 25 langues disponibles.
{.is-info}

Les fichiers *Bible* au format LaTeX doivent avoir été créés dans des dossiers tels que `input/text/bible-xx` où `xx` est le code de la langue cible.

Pour convertir ces fichiers LaTeX au format Wiki.js, suivez ces étapes :
- Ouvrez *Urantiapedia Tools*.
- Dans *Processus*, sélectionnez : Convertir la Bible (LaTeX) + les références (TXT) en Wiki.js.
- Les dossiers sont remplis automatiquement : pour les *fichiers TXT* un comme `input / txt / bible-refs-xx`, pour *LaTeX Files* un comme `input / tex / bible-xx` et pour les *fichiers HTML* un comme ` output /wikijs/xx/Bible` (mais si `xx` = `en` il est omis). Si le dossier de sortie existe, créez tout le chemin dans votre projet. S'il existe déjà des fichiers Wiki.js dans le dossier de sortie, ceux qui existent seront écrasés.
- Cliquez sur *Exécuter*.
- Si tout est correct, *Conversion exécutée avec succès* apparaîtra. En cas d'erreurs, la liste des erreurs apparaîtra. Dans ce cas, il est conseillé de signaler l'erreur à l'un des utilisateurs *développeurs*.

![](/image/upt_tex_wiki.png)

Les fichiers de sortie sont au format HTML. Un fichier sera généré pour chaque chapitre de la Bible.

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
        <td><a href="/fr/help/github_book_to_wiki">Convertir Le Livre d'Urantia</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_upload">Télécharger du contenu en masse sur Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>