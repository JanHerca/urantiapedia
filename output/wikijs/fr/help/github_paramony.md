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
        <td><a href="/fr/help/web_html_editor">Utilisation de l'éditeur HTML</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_bible">Obtenir la Bible</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Cette tâche est actuellement terminée et fermée pour les 27 langues disponibles.
{.is-info}

Ici sont décrites les étapes nécessaires pour traduire le *Paramony* de l'anglais vers une nouvelle langue de *Urantiapedia*. C'est une tâche accomplie par les «rédacteurs en chef».

Le *Paramony* est un fichier avec des références croisées entre *La Bible* et *Le Livre d'Urantia*. Il a été créé en anglais en utilisant une relation de référence croisée développée par Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), convertie de son format TXT original au format JSON c'est plus facile à traiter.

## Ancienne procédure (obsolète)

> Cette procédure a été mise à jour car elle était trop fastidieuse. Voir ci-dessous.
{.is-warning}

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

## Nouvelle procédure

Nous partons d'une traduction existante de *Paramony*, par exemple la traduction espagnole, située dans « input/markdown/es/paramony ». Une copie de ce dossier doit être effectuée dans « input/markdown/xx », où « xx » correspond au code de la langue cible. Par exemple, si la langue cible est l'arabe, le dossier « paramony » doit être copié dans « input/markdown/ar ».

*Paramony* contient les notes de bas de page (avec références à *La Bible*) qui doivent être incluses dans chaque document du *Livre d'Urantia*.

Le dossier « paramony » contient deux fichiers : « Bible.md » et « Le Livre d'Urantia.md », contenant respectivement les traductions de *Paramony* pour la *Bible* et le *Livre d'Urantia*. Chaque fichier présente une structure de tableau très simple à deux colonnes au format Markdown. Il vous suffit de créer une copie temporaire de ces deux fichiers et de supprimer le contenu de la colonne « traduction », ne conservant que la première colonne « texte », ainsi que les barres obliques (`|`) et l'en-tête. Autrement dit, nous créons des fichiers temporaires contenant uniquement le texte anglais, séparé en lignes. Il ne reste plus qu'à traduire les deux fichiers temporaires avec un traducteur automatique comme Google Translator, puis à copier la traduction après chaque ligne. Visual Studio Code propose des options de sélection et de copie de texte qui accélèrent considérablement cette tâche. Gardez toutefois à l'esprit que ces fichiers sont très longs et qu'il est déconseillé de copier-coller plus de 1 000 lignes à la fois.

Le résultat final devrait ressembler à celui présenté dans cet extrait (par exemple, pour l'espagnol) :

```md
| text                                        | translation                             |
| --------------------------------------------| ----------------------------------------|
| “Amen” as ritual                            | «Amen» como ritual                      |
| “Blind” man converted                       | La conversión del hombre «ciego»        |
| “Blind” man's speech                        | El discurso del hombre «ciego»          |
| “By what authority do you do these things?” | «¿Con qué autoridad haces estas cosas?» |
| “Children of light”                         | «Hijos de la luz»                       |
```

Cette procédure présente l'avantage par rapport à l'ancienne que le traducteur n'a pas à gérer les caractères étranges typiques de JSON ; la seule chose que nous traduisons ici sont des textes simples séparés en lignes, ce qui facilite et accélère grandement la tâche.

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
        <td><a href="/fr/help/web_html_editor">Utilisation de l'éditeur HTML</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_bible">Obtenir la Bible</a></td>
      </tr>
    </tbody>
  </table>
</figure>