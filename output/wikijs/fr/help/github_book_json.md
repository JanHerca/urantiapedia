---
title: Conversion du Livre d'Urantia de HTML en JSON sans notes de bas de page
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
        <td><a href="/fr/help/github_bible">Obtenir la Bible</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_footnotes">Ajout de notes de bas de page Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Cette tâche est actuellement terminée et fermée pour les 25 langues disponibles.
{.is-info}

Les fichiers d'entrée au format HTML doivent se trouver dans les dossiers `input / html / book-xx`, où `xx` sont les deux lettres de la langue (`es` = espagnol, `en` = anglais, etc.)

> IMPORTANT : Les fichiers HTML tels qu'ils sont téléchargés depuis le site officiel de la [Fondation Urantia](https://www.urantia.org/urantia-book/download-text-urantia-book) peuvent avoir quelques problèmes à traiter et nécessitent d'ajouter petits changements pour aider dans le processus de conversion au format JSON.

Une fois que les fichiers ont été téléchargés du site Web de la *Fondation Urantia*, il devrait y avoir un fichier (.html) pour chaque document du *Livre d'Urantia*, un total de 197 fichiers. Le nom de chaque fichier avec chaque document doit respecter le modèle selon lequel les trois derniers caractères du nom sont le numéro de document, de 000 à 196 pour que la conversion fonctionne plus tard. Par exemple, en français le fichier avec le document 1 s'appelle `06-Fascicule001.html`; le même fichier en bulgare s'appelle `06-Документ001.html`.

Étant donné qu'au format HTML *Le Livre d'Urantia* peut adopter différentes balises HTML pour ce qui est considéré comme le titre du document, le titre d'une section, etc., dans l'application qui effectue la conversion, il peut être nécessaire d'inclure certaines modifications lors de l'ajout d'un nouveau langage. Ce travail sera fait par les utilisateurs *développeurs*, en charge du développement des *Urantiapedia Tools*. Ce logiciel est développé en Javascript et le code se trouve dans le dossier `app` du projet.

Des fichiers pour un total de 24 langues sont actuellement disponibles : bulgare (`book-bg`), tchèque (`book-cs`), danois (`book-da`), allemand (`book-de`), grec (`book- el`), anglais (`book-en`), espagnol (` book-es`, `book-es-1993` et bientôt` book-es-2021`), estonien (`book-et` ), farsi (`book-fa`), finnois (` book-fi`), français (`book-fr`), hébreu (` book-he`), hongrois (`book-hu`), indonésien (` book-id `), italien (` book-it`), japonais (`book-ja`), coréen (` book-ko`), lituanien (`book-lt`), néerlandais (` book-nl`) , polonais (`book-pl`), portugais (`book-pt`), roumain (`book-ro`), russe (`book-ru`) et suédois (`book-sv`). Ces fichiers ont déjà été modifiés et traités afin que le programme de conversion JSON fonctionne correctement avec eux, et les fichiers JSON résultants sont également disponibles.

La traduction en farsi est actuellement en cours et tous les documents ne sont pas disponibles.

Il convient de garder à l'esprit qu'il existe actuellement trois traductions en espagnol. Les trois traductions seront disponibles sur *Urantiapedia*. Pour cette raison, il y aura ces dossiers :
- `book-es`, avec la traduction dite européenne, réalisée en 2009 ;
- `book-es-1993`, avec la première traduction espagnole réalisée en 1993 ;
- `book-es-2021`, avec la nouvelle traduction faite en 2021.

Pour convertir des fichiers HTML en JSON sans notes de bas de page, procédez comme suit :
- Ouvrez les *Urantiapedia Tools*.
- Dans *Processus*, sélectionnez : Convertir le Livre d'Urantia (HTML) en JSON.
- Les dossiers sont remplis automatiquement : pour les *fichiers HTML* un comme `input/html/book-xx` et pour les fichiers *JSON* un comme `input/json/book-xx`.
- Cliquez sur *Exécuter*.
- Si tout est correct, *Conversion exécutée avec succès* apparaîtra. En cas d'erreurs, la liste des erreurs apparaîtra. Dans ce cas, il est conseillé de signaler l'erreur à l'un des utilisateurs *développeurs*.

![](/image/help/upt_html_json.png)

Les fichiers résultants au format JSON seront enregistrés dans le dossier `input / json / book-xx`, où` xx` sont les deux lettres de la langue (`es` = espagnol, `en` = anglais, etc.)

> IMPORTANT : Ces fichiers ne doivent pas être générés ou modifiés manuellement par les utilisateurs. Ils doivent toujours être créés par conversion à partir du format HTML.

Il y aura un fichier pour chaque document du *Livre d'Urantia*, un total de 197 fichiers. Les fichiers sont nommés `DocXXX.json`, où` XXX` est le numéro de document de `000` à` 196`.

Le format de ces fichiers est JSON (https://en.wikipedia.org/wiki/JSON). Il y a un convertisseur dans *Urantiapedia Tools* qui convertit ensuite ce format JSON au format Wiki.js final.

La structure des fichiers JSON est la suivante :

```json
{
    "paper_index": "<index papier, 0 à 196>",
    "sections": [
        {
            "section_index": "<index de section, 0 si existe jusqu'à N>",
            "section_ref": "<texte de référence de section, comme “0:0”>",
            "section_title": "<titre de la section pour les sections non nulles>",
            "pars": [
                {
                    "par_ref": "<par ref, comme “0:0.1”>",
                    "par_pageref": "<par ref par page, comme “1.1”>",
                    "par_content": "<par contenu. Voir le format ci-dessous>"
                },
                {

                }
            ]
        },
        {

        }
    ],
    "footnotes": [
        "<array of footntoes with Bible refs>"
    ],
    "paper_title": "<paper title, without Paper X, just title>"
}
```

Dans les fichiers JSON résultant de cette tâche, la section « notes de bas de page » sera vide. Pour le terminer, la tâche suivante doit être exécutée.

Pour formater le texte du paragraphe avec des caractères étranges qui apparaissent dans *Le Livre d'Urantia* dans les fichiers JSON, ces équivalents sont utilisés :

Type de caractère | Comment ils sont écrits
--- | ---
Italique | * * (entre astérisques)
Petites capitalisations | $ $ (entre les signes dollar)
Souligné (pour les langues qui n'incluent pas l'option italique) | \| \| (entre plecas)

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
        <td><a href="/fr/help/github_bible">Obtenir la Bible</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_footnotes">Ajout de notes de bas de page Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>