---
title: "Urantiapedia - Liens"
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
        <td><a href="/fr/help/websites">Sites Web de références</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/projects">Contexte du projet dans une portée plus large</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Résumé

Ce document décrit la façon dont les liens entre les éléments sont définis et créés dans Urantiapedia. Discute également des améliorations qui pourraient être apportées à l'avenir au système de liaison.

## Qu'est-ce qu'un lien dans Urantiapedia

Les liens sur Urantiapedia sont toujours, au final, un lien HTML entre deux pages ou entre deux ancres à l'intérieur de deux pages. S'il y a plusieurs liens à la même position, plusieurs liens HTML seront créés.

Étant donné qu'Urantiapedia prend en charge les fichiers HTML5 et Markdown, les liens peuvent utiliser la syntaxe HTML5 ou Markdown. Les deux sont valides.

Par exemple, _Le Livre d'Urantia_ est en HTML5, et le paragraphe 0:2.10 a deux liens vers deux sujets (Dieu et Père Universel) de l'Index des sujets :

```html
<p id="p2_9"><sup><small>0:2.9</small></sup> <i>Par le contexte</i> —comme lorsqu’il est employé dans la discussion d’un niveau particulier de déité ou d’une association de déité. Quand il y a doute sur l’interprétation exacte du mot <a href="/es/topic/God">Dieu</a>, il serait bon de s’y référer comme désignant la personne du <a href="/es/topic/Universal_Father">Père Universel</a>.</p>
```

Cet exemple relie les pages : l'Avant-propos dans _Le Livre d'Urantia_, avec les pages des sujets « Dieu » et « Père Universel ».

Ou par exemple, les aides à l'étude et les articles sont en Markdown. Voici un extrait du premier chapitre du Workbook I de William Sadler :

```markdown
**RÉFÉRENCE** : [UB 1:0.1](/en/The_Urantia_Book/1#p0_1) — « Le Père Universel est... »
```

Cet exemple relie une page (un chapitre dans un aide à l'étude) à un paragraphe (ancre) dans _Le Livre d'Urantia_. Nous utilisons pour cela la méthode standard pour une ancre avec un caractère `#`, et l'utilisation d'un identifiant unique (dans ce cas `p0_1`). Chaque paragraphe ou en-tête d'un article du _Le Livre d'Urantia_ a un identifiant et une ancre uniques qui suivent ce modèle : `p<section_index>_<par_index>`, qui suivent la convention habituelle `<papier>:<section>.<paragrpah> ` pour nommer les paragraphes du livre.

## Qu'est-ce qui va être lié dans Urantiapedia

Les tableaux suivants résument les liens que nous voulons créer en ce moment sur Urantiapedia. Il existe de nombreux types de liens que nous pourrions envisager d'ajouter à l'avenir.

### :blue_book: Le Livre d'Urantia

<div class="urantiapedia-table-wrapper">

Code | Origine | Destination | Procédure | État |
--- | --- | --- | --- | --- |
UB_B | Note de bas de page dans le paragraphe | Un livre de la Bible (un verset dans un chapitre) | Le _Paramony_ ([Paramony.txt](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/paramony/Paramony.txt)) est converti en Markdown ([The Urantia Book.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paramony/The%20Urantia%20Book.md)), puis en JSON ([The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book)), et enfin en HTML qui est chargé dans _Urantiapedia_ ([The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book)) | :+1: |
UB_A | Note de bas de page dans le paragraphe | Un article (n'importe quelle position) | Un fichier parallèle est généré automatiquement ([ub_paralells.tsv](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/articles-en/ub_paralells.tsv)) | :+1: |
UB_S | Note de bas de page dans le paragraphe | Un chapitre d'une aide à l'étude (toute position) | Identique à UB_A | :+1: |
UB_O | Note de bas de page dans le paragraphe | Un chapitre d'un livre (une page spécifique) | Un fichier parallèle est généré manuellement ([paralells.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paralells.md)) | :+1: |
UB_TI | Liens dans les mots du paragraphe | Page d'un sujet dans l'_Encyclopédie_ | Les fichiers TXT de l'_Encyclopédie_ sont utilisés, qui contiennent les références ([topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en)) | :+1: [1] |
UB_I | Insérer une image [2] | - |  Un catalogue d'images est utilisé ([image_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/image_catalog.md)) | :+1: |
UB_D | Bloc déroulant [3] | Page d'un diagramme | Non défini |  :x: |
UB_P | Bloc déroulant | Page d'une présentation ou d'une diapositive | Non défini | :x: |
UB_M | Bloc déroulant | Page de carte | Un catalogue de cartes est utilisé ([map_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/map_catalog.md)) | :clock2: |
UB_3D | Bloc déroulant | Page d'une scène 3D | Non défini | :x: |
UB_AU | Contrôle audio dans la tête de réseau [4] | - | Urantiapedia Tools ajoute l'audio dans les langues disponibles | :+1: |
UB_V | Bloc déroulant | Vidéos YouTube intégrées | Non défini | :x: |

</div>

- [1] L'algorithme de création de liens est en cours pour ajuster le nombre de liens à créer.
- [2] Les images ne sont pas réellement des liens, mais pour les insérer, un lien est saisi dans un catalogue d'images qui est ensuite traité.
- [3] Un bloc déroulant est un élément placé entre des paragraphes qui peut s'agrandir et afficher de petits éléments de la taille d'une image, ou si l'élément est trop grand, un lien vers une page où cet élément peut être visualisé en détail.
- [4] L'audio du _Livre d'Urantia_ n'est pas réellement un lien, mais pour l'insérer, nous avons indiqué dans un logiciel quels audios sont disponibles et il existe un processus qui les insère.

Exemples:
- UB_B: https://urantiapedia.org/en/The_Urantia_Book/1#the-bible
- UB_A: https://urantiapedia.org/en/The_Urantia_Book/1#articles
- UB_S: https://urantiapedia.org/en/The_Urantia_Book/1#study-aids
- UB_O: https://urantiapedia.org/en/The_Urantia_Book/0#other-books
- UB_I : https://urantiapedia.org/en/The_Urantia_Book/11#p0_2 (exemple d'image)
- UB_M : https://urantiapedia.org/en/The_Urantia_Book/149#p0_1 (exemple de bloc déroulant)
- UB_AU : https://urantiapedia.org/en/The_Urantia_Book/10 (exemple de contrôle audio dans l'en-tête de la page)

<br>

### La Bible :closed_book:

<div class="urantiapedia-table-wrapper">

Code | Origine | Destination | Procédure | État |
--- | --- | --- | --- | --- |
B_UB | Note de bas de page en vers | Le Livre d'Urantia (paragraphe) | La _Paramony_ ([bible-refs-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/bible-refs-en)) est convertie en Markdown ([paramony](https://github.com/JanHerca/urantiapedia/tree/master/input/markdown/en/paramony)) puis dans le HTML qui est chargé dans _Urantiapedia_ ([Bible](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/Bible)) | Non défini | :+1: |
B_A | Note de bas de page en vers | Un article (n'importe quelle position) | Non défini | :x: |
B_S | Note de bas de page en vers | Un chapitre d'une aide à l'étude (toute position) | Non défini | :x: |
B_O | Note de bas de page en vers | Un chapitre d'un livre (n'importe quelle position) | Non défini | :x: |
B_TI | Liens dans les mots des versets | Page d'un sujet dans l'_Encyclopédie_ | Non défini | :x: |
B_I | Insérer une image [1] | - | Non défini | :x: |

</div>

- [1] La même chose dite pour _Le Livre d’Urantia_ s’applique ici.
- [2] La même chose dite pour _Le Livre d’Urantia_ s’applique ici.

Exemples:
- B_UB : https://urantiapedia.org/en/Bible/Genesis/1#references

<br>

### :page_with_curl: Articles

<div class="urantiapedia-table-wrapper">

Code | Origine | Destination | Procédure | État |
--- | --- | --- | --- | --- |
A_UB | Lien entre guillemets ou paragraphes | Le Livre d'Urantia (paragraphe) | Les liens [1] vers le _Livre_ sont inclus manuellement | :+1: |
A_B | Lien entre guillemets ou paragraphes | Un livre de la Bible (un verset dans un chapitre) | Identique à A_UB | :+1: |
A_A | N'importe quel lien | Une page d'un article | Identique à A_UB | :+1: |
A_S | N'importe quel lien | Une page d'un outil d'étude | Identique à A_UB | :+1: |
A_O | N'importe quel lien | Un chapitre d'un livre (une page spécifique) | Identique à A_UB | :+1: |
A_V | N'importe quelle position | Vidéos YouTube intégrées | Lien manuel | :+1: |

</div>

Exemples:
- A_UB : https://urantiapedia.org/en/article/A_Letter_to_Astronomers_and_Astrophysicists (l'une des citations)
- A_B: https://urantiapedia.org/en/article/Sheila_Keene_Lund/Understanding_the_Relation_of_Love_to_the_Mind#love-defined (lien vers 1 Corinthiens dans la Bible)

<br>

### :notebook: Aides à l'étude

<div class="urantiapedia-table-wrapper">

Code | Origine | Destination | Procédure | État |
--- | --- | --- | --- | --- |
S_UB | Lien entre guillemets ou paragraphes | Le Livre d'Urantia (paragraphe) | Identique à A_UB | :+1: |
S_B | Lien entre guillemets ou paragraphes | Un livre de la Bible (un verset dans un chapitre) | Identique à A_B | :+1: |
S_A | N'importe quel lien | Une page d'un article | Identique à A_A | :+1: |
S_S | N'importe quel lien | Une page d'un outil d'étude | Identique à A_S | :+1: |
S_O | N'importe quel lien | Un chapitre d'un livre (une page spécifique) | Identique à A_O | :+1: |
S_V | N'importe quelle position | Vidéos YouTube intégrées | Lien manuel | :+1: |

</div>

Exemples:
- S_UB : https://urantiapedia.org/en/article/William_S_Sadler/Workbook_1_Foreword_and_Part_I/1#i-ub-101-the-universal-father-is
- S_B: https://urantiapedia.org/en/article/William_S_Sadler/Consideration_some_criticisms_Urantia_Book

<br>

### :books: Livres

<div class="urantiapedia-table-wrapper">

Code | Origine | Destination | Procédure | État |
--- | --- | --- | --- | --- |
O_B | Lien entre guillemets ou paragraphes | Un livre de la Bible (un verset dans un chapitre) | Identique à A_B | :x: |

</div>

<br>

### :card_index: Encyclopédie

<div class="urantiapedia-table-wrapper">

Code | Origine | Destination | Procédure | État |
--- | --- | --- | --- | --- |
TI_UB | Note de bas de page dans le paragraphe ou « Voir aussi » | Le Livre d'Urantia (paragraphe) | Identique à UB_TI mais dans un processus inverse. Les fichiers TXT de l'_Encyclopédie_ sont utilisés, qui contiennent les références ([topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en)) | :+1: |
TI_B | Note de bas de page dans le paragraphe | Un livre de la Bible (verset dans un chapitre) | Non défini | :x: |
TI_A | Note de bas de page dans le paragraphe | Page d'article | Non défini | :x: |
TI_S | Note de bas de page dans le paragraphe | Chapitre d'une aide à l'étude | Non défini | :x: |
TI_TI | Voir aussi la section | Une autre page ou section d'une page dans l'_Encyclopédie_ | Les fichiers TXT mentionnés ci-dessus sont utilisés | :+1: |
TI_I | Image insérée | - | Les liens vers les images sont inclus manuellement dans les fichiers TXT | :clock2: |
TI_D | Bloc déroulant | Page d'un diagramme | Non défini | :x: |
TI_P | Bloc déroulant | Page d'une présentation ou d'une diapositive | Non défini | :x: |
TI_M | Bloc déroulant | Page de carte | Non défini | :x: |
TI_3D | Bloc déroulant | Page d'une scène 3D | Non défini | :x: |
TI_V | N'importe quelle position | Vidéos YouTube intégrées | Non défini | :x: |

</div>

Exemples:
- TI_UB : https://urantiapedia.org/en/topic/Abraham_(Old_Testament)#references

<br>

### :memo: Diagrammes

<div class="urantiapedia-table-wrapper">

Code | Origine | Destination | Procédure | État |
--- | --- | --- | --- | --- |
D_UB | Lien dans le diagramme | Le Livre d'Urantia (paragraphe) | Les liens sont ajoutés manuellement | :clock2: |

</div>

Exemples :
- D_UB : https://urantiapedia.org/en/article/The_Kingdom_of_Heaven_Revelation_Nebadon_Chart (les cases du diagramme)

<br>

### :bar_chart: Présentations

<div class="urantiapedia-table-wrapper">

Code | Origine | Destination | Procédure | État |
--- | --- | --- | --- | --- |
P_UB | Lien sur la diapositive | Le Livre d'Urantia (paragraphe) | Non défini, mais probablement en ajoutant des liens manuellement | :x: |

</div>

<br>

### :earth_americas: Cartes

<div class="urantiapedia-table-wrapper">

Code | Origine | Destination | Procédure | État |
--- | --- | --- | --- | --- |
M_UB | Lien dans le panneau latéral | Le Livre d'Urantia (paragraphe) | Liens manuels dans les fichiers KML | :x: |
M_TI | Lien dans le panneau latéral | Page d'encyclopédie | Liens manuels dans les fichiers KML | :x: |

</div>

Exemples :
- M_TI : https://urantiapedia.org/en/map/The_Preaching_of_Jesus_Second_Galilee_Tour (cliquez sur une icône pour ouvrir le panneau avec les liens)

<br>

### :milky_way: Scènes 3D

<div class="urantiapedia-table-wrapper">

Code | Origine | Destination | Procédure | État |
--- | --- | --- | --- | --- |
3D_UB | Lien dans l'élément 3D | Le Livre d'Urantia (paragraphe) | Non défini | :x: |

</div>

<br>

## Comment copier des liens

Tous les navigateurs permettent de cliquer avec le bouton droit de la souris ou d'appuyer longuement sur un lien pour le copier. Pour copier la page elle-même, cela peut être fait dans la zone de texte de l'adresse.

Une astuce qui n'est généralement pas connue dans Urantiapedia est que vous pouvez copier le lien d'un en-tête dans une page. Lorsque la souris survole un en-tête, un symbole `¶` à droite doit être cliqué avec le bouton droit pour obtenir le lien.

## Système de référence mondial unique pour Le Livre d'Urantia

Depuis que _Le Livre d'Urantia_ a été publié pour la première fois en 1955, cet original anglais a été cité à de nombreuses reprises dans les travaux et articles des lecteurs. La façon traditionnelle de citer _Le Livre d'Urantia_ était de donner la page et le paragraphe de cette première édition anglaise (communément appelée l'édition standard). L'encodage suivi était `<page_number>.<paragraph_order>`.

Cette façon de citer _Le Livre d'Urantia_ introduit un problème qui aurait déjà dû être vu de bonne heure. Dans les traductions et dans les différentes éditions papier, le nombre de pages et la position du paragraphe ne sont pas maintenus constants. Forcer les lecteurs du Livre d'Urantia du monde entier à avoir une copie anglaise de la première édition du Livre afin d'indiquer correctement une référence n'avait aucun sens.

Rapidement, comme le Livre a été traduit et publié dans différentes éditions, il s'est avéré nécessaire de créer un système de référence global unique pour _Le Livre d'Urantia_, basé sur l'index du document, l'index de la section et enfin l'index du paragraphe dans la section. Et pour chaque paragraphe, un identifiant unique a ainsi été attribué, avec lequel il est facile et rapide d'accéder au contenu que quelqu'un a cité ou référencé. L'encodage est maintenant généralement écrit comme ceci `<document>:<section>.<paragraphe>`.

Il est frappant de constater que les années passent et que de nombreux sites et publications continuent de maintenir l'ancien système de références, parfois comme seule référence, ou en complément de la nouvelle référence. Cela montre clairement qu'il existe encore de nombreuses publications trop axées sur l'utilisation de la langue anglaise, car cette duplication des références introduit plus de travail et n'est utile que pour les lecteurs d'une édition particulière du livre en anglais.

Sur Urantiapedia, l'un de nos principes de base est la [globalisation](/fr/help/principles#principe-i-multilingue). Ce site Web n'est pas conçu pour une langue ou quelques langues. L'objectif de ce site est que tout le contenu sans distinction puisse être proposé dans toutes les langues souhaitées. Introduire deux références à chaque fois que _Le Livre d'Urantia_ est cité, c'est ajouter un effort inutile qui va également à l'encontre de ce principe de capacité multilingue. Pour cette raison, le conseil d'administration d'Urantiapedia a pris dès le départ la décision d'adopter dans tout lien vers _Le Livre d'Urantia_ un seul système global et unifié d'offre de référence, qui suit fidèlement le modèle actuel. Toute autre mention ou référence qui n'est pas proposée de la même manière, est corrigée pour laisser le lien de manière unifiée.

Nous pensons que ces corrections d'anciens contenus sont nécessaires pour fournir aux lecteurs du monde entier un système unique qui réduit la confusion et facilite l'échange d'idées.

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/websites">Sites Web de références</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/projects">Contexte du projet dans une portée plus large</a></td>
      </tr>
    </tbody>
  </table>
</figure>