---
title: Traduction de Paramony
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
        <td><a href="/fr/help/github_content">Contenu du projet GitHub</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/github_topicindex">Traduction et révision de Topic Index</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Cette tâche est actuellement terminée et fermée pour les 25 langues disponibles.
{.is-info}

Ici sont décrites les étapes nécessaires pour traduire le *Paramony* de l'anglais vers une nouvelle langue de *Urantiapedia*. C'est une tâche accomplie par les «rédacteurs en chef».

Le *Paramony* est un fichier avec des références croisées entre *La Bible* et *Le Livre d'Urantia*. Il a été créé en anglais en utilisant une relation de référence croisée développée par Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), convertie de son format TXT original au format JSON c'est plus facile à traiter.

Nous partons de la version anglaise de *Paramony* trouvée dans `input/json/footnotes-book-en.json`. Faites-en une copie et changez le nom en langue cible.

Le fichier *Paramony* contient des notes de bas de page (avec des références à *La Bible*) à inclure dans chaque document du *Livre d'Urantia*.

Vous devez traduire les sections marquées comme textes («textes»), ainsi que mettre à jour les abréviations des livres *La Bible* avec une opération de remplacement.

La structure du fichier JSON est un tableau à trois colonnes. Pour chaque document du *Livre d'Urantia*, il y a une section dans le fichier qui contient l'index du document (`paperIndex`) et une sous-section (`footnotes`) qui contient trois colonnes :
- le premier correspond aux textes (`texts`) qui apparaissent dans la note de bas de page.
- la seconde est les références bibliques (`bible_refs`) qui correspondent à chaque texte.
- le troisième sont les références au paragraphe et à la phrase dans le paragraphe du *Livre d'Urantia* («lieux»). Le modèle de ces références est `x:yz#n`, où `x:yz` est la référence du paragraphe et `n` indique la phrase dans le paragraphe où se trouve la note, en commençant par la première phrase se terminant par un point comme phrase 0 et ainsi de suite.

Cette façon de présenter les textes permet de les copier et coller plus facilement dans un traducteur comme Google Translator, puis de coller à nouveau le résultat de la traduction.

Exemple d'extrait :

```json
{
    "content": [
        {
            "paperIndex": 0,
            "footnotes": {
                "texts" : [
                    [
                        "Spirit light"
                    ],
                    [
                        "Paradise Trinity",
                        "Paradise Trinity (Paul's early view)"
                    ]
                ],
                "bible_refs": [
                   [
                        "Ezk 7:55; Is 9:2; Mt 4:16; Mt 5:14-16; Lk 1:79; Lk 2:32; Jn 1:4-9; Jn 3:19-21; Jn 8:12; Jn 9:5; Jn 12:46; 1 Jn 1:5; 1 Jn 2:8"
                    ],
                    [
                        "Mt 28:19; Acts 2:32-33; 2 Co 13:14; 1 Jn 5:7",
                        "1 Co 12:4-6"
                    ]
                ],
                "locations": [
                    "0:6.9#0",
                    "0:12.2#0"
                ]
            }
        }
    ]
}
```

> Il faut veiller à bien recopier les guillemets qui peuvent exister dans les textes. Vérifiez ici les guillemets valides pour chaque langue: [guillemets](/fr/help/languages).

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
        <td><a href="/fr/help/github_content">Contenu du projet GitHub</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/github_topicindex">Traduction et révision de Topic Index</a></td>
      </tr>
    </tbody>
  </table>
</figure>