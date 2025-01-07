---
title: Urantiapedia - Liens
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

Par exemple, _Le Livre d'Urantia_ est en HTML5, et le paragraphe 0:2.10 a deux liens vers deux sujets (Dieu et Déité) de l'Index des sujets :

```html
<p id="p2_10"><sup><small>0:2.10</small></sup> Le terme <a href="/topic/Dieu">Dieu</a> désigne toujours <i>la personnalité. </i> <a href="/topic/Divinité">Divinité</a> peut ou non faire référence à des personnalités divines.</p>
```

Cet exemple relie les pages : l'Avant-propos dans _Le Livre d'Urantia_, avec les pages des sujets "Dieu" et "Déité".

Ou par exemple, les aides à l'étude et les articles sont en Markdown. Voici un extrait du premier chapitre du Workbook I de William Sadler :

```markdown
**RÉFÉRENCE** : [UB 1:0.1](/en/The_Urantia_Book/1#p0_1) — « Le Père Universel est... »
```

Cet exemple relie une page (un chapitre dans un livre) à un paragraphe (ancre) dans _Le Livre d'Urantia_. Nous utilisons pour cela la méthode standard pour une ancre avec un caractère `#`, et l'utilisation d'un identifiant unique (dans ce cas `p0_1`). Chaque paragraphe ou en-tête d'un article du _Le Livre d'Urantia_ a un identifiant et une ancre uniques qui suivent ce modèle : `p<section_index>_<par_index>`, qui suivent la convention habituelle `<papier>:<section>.<paragrpah> ` pour nommer les paragraphes du livre.

## Qu'est-ce qui va être lié dans Urantiapedia

Les tableaux suivants résument les liens que nous voulons créer en ce moment sur Urantiapedia. Il existe de nombreux types de liens que nous pourrions envisager d'ajouter à l'avenir.

### Le Livre d'Urantia :blue_book:

Codage | Type d'origine | Destination | Type de destination | Statut |
--- | --- | --- | --- | ---- | --- |
UB_B | Note de bas de paragraphe | La Bible | Verset dans un chapitre d'un livre | :+1 : |
UB_A | Note de bas de paragraphe | articles | Page de l'article | :+1: |
UB_S | Note de bas de paragraphe | Aide aux études | Page de chapitre ou titre | :+1: |
UB_O | Note de bas de paragraphe | Autres livres | Ancre de livre pour une page | :+1: |
UB_TI | Liens dans les mots des paragraphes | Index des sujets | Page thématique | :+1 : [1] |
UB_D | Note de bas de page au paragraphe [2] | Diagrammes | Page de diagramme ou ancre | |
UB_I | Insertion d'images [3] | Illustrations | - | :+1 : [4] |
UB_P | Note de bas de paragraphe | Présentations | Page de présentation ou diapositive | |
UB_M | Note de bas de page au paragraphe [5] | Cartes | Page de la carte ou coordonnées/ID | |
UB_3D | Note de bas de page au paragraphe [6] | Modèles 3D | Page de modèle 3D ou ID | |
UB_V | Note de bas de paragraphe | Vidéos YouTube | Lien externe | |
UB_C | Note de bas de paragraphe | Podcasts | Lien externe | |
UB_F | Note de bas de paragraphe | Fils de discussion du forum | Lien externe | |

[1] L'algorithme de création de liens est en cours pour ajuster le nombre de liens à créer.
[2] De petits diagrammes pourraient être ajoutés comme illustrations dans le livre, dans une section repliable sous certains paragraphes. L'idée est que chaque diagramme, petit ou grand, a sa propre page, et tous seront indexés. Mais les plus petites, au lieu de n'être qu'une page, peuvent être intégrées dans _Le Livre d'Urantia_ sous forme de sections pliables.
[3] Les images ne sont pas des liens propres, mais elles sont insérées sous un paragraphe donné, nous avons donc besoin d'un moyen de définir ces insertions. Ils sont donc considérés ici comme des liens en quelque sorte.
[4] Ce travail est en cours. Pour l'instant, quelques images ont été ajoutées.
[5] Certaines cartes bien adaptées à un paragraphe donné peuvent être mises en surbrillance sous le paragraphe dans un panneau avec un bouton qui renvoie à la carte.
[6] La même chose que précédemment pour les cartes peut s'appliquer ici.

Exemples:
- UB_B: https://urantiapedia.org/en/The_Urantia_Book/1#the-bible
- UB_A: https://urantiapedia.org/en/The_Urantia_Book/1#articles
- UB_S: https://urantiapedia.org/en/The_Urantia_Book/1#study-aids
- UB_O: https://urantiapedia.org/en/The_Urantia_Book/0#other-books
- UB_M : https://urantiapedia.org/en/The_Urantia_Book/149#p0_1
- UB_I : https://urantiapedia.org/en/The_Urantia_Book/0#p0_1

<br>

### La Bible :closed_book:

Codage | Type d'origine | Destination | Type de destination | Statut |
--- | --- | --- | --- | ---- | --- |
B_UB | Note de bas de page en vers | Le Livre d'Urantia | Paragraphe | :+1 : |
B_A | Note de bas de page en vers | articles | Page de l'article | |
B_S | Note de bas de page en vers | Aide aux études | Page de chapitre ou titre | |
B_O | Note de bas de page en vers | Autres livres | Ancre de livre pour une page | |
B_TI | Liens en mots de vers | Index des sujets | Page thématique | |
B_I | Insertion d'images [1] | Illustrations | - | |
B_M | Verset de note de bas de page [2] | Cartes | Page de la carte ou coordonnées/ID | |

[1] La même chose pour _Le Livre d'Urantia_ s'applique ici.
[2] La même chose pour _Le Livre d'Urantia_ s'applique ici.

Exemples:
- B_UB : https://urantiapedia.org/en/Bible/Genesis/1#references

<br>

### Articles :page_with_curl :

Codage | Type d'origine | Destination | Type de destination | Statut |
--- | --- | --- | --- | ---- | --- |
A_UB | Lien entre guillemets ou paragraphes | Le Livre d'Urantia | Paragraphe | :+1 : |
A_B | Lien entre guillemets ou paragraphes | La Bible | Verset dans un chapitre d'un livre | :+1: |
A_A | Note de bas de paragraphe | articles | Page de l'article | :+1 : |
A_S | Note de bas de page dans le paragraphe | Aides à l'étude | Page de chapitre ou titre | |
A_O | Note de bas de paragraphe | Autres livres | Ancre de livre pour une page | |
A_I | Insertion d'images [1] | Illustrations | - | |
A_M | Note de bas de page au paragraphe [2] | Cartes | Page de la carte ou coordonnées/ID | |
A_3D | Note de bas de page au paragraphe [3] | Modèles 3D | Page de modèle 3D ou ID | |
A_V | Note de bas de paragraphe | Vidéos YouTube | Lien externe | |
A_C | Note de bas de paragraphe | Podcasts | Lien externe | |
A_F | Note de bas de paragraphe | Fils de discussion du forum | Lien externe | |

[1] La même chose pour _Le Livre d'Urantia_ s'applique ici.
[2] La même chose pour _Le Livre d'Urantia_ s'applique ici.
[3] La même chose pour _Le Livre d'Urantia_ s'applique ici.

Exemples:
- A_UB : https://urantiapedia.org/en/article/A_Letter_to_Astronomers_and_Astrophysicists (l'une des citations)
- A_B: https://urantiapedia.org/en/article/Sheila_Keene_Lund/Understanding_the_Relation_of_Love_to_the_Mind#love-defined

<br>

### Aides à l'étude :notebook:

Codage | Type d'origine | Destination | Type de destination | Statut |
--- | --- | --- | --- | ---- | --- |
S_UB | Lien entre guillemets ou paragraphes | Le Livre d'Urantia | Paragraphe | :+1 : |
S_B | Lien entre guillemets ou paragraphes | La Bible | Verset dans un chapitre d'un livre | :+1: |
S_A | Note de bas de paragraphe | articles | Page de l'article | :+1 : |
S_S | Note de bas de page dans le paragraphe | Aides à l'étude | Page de chapitre ou titre | |
S_O | Note de bas de paragraphe | Autres livres | Ancre de livre pour une page | |
S_I | Insertion d'images [1] | Illustrations | - | |
S_M | Note de bas de page au paragraphe [2] | Cartes | Page de la carte ou coordonnées/ID | |
S_3D | Note de bas de page au paragraphe [3] | Modèles 3D | Page de modèle 3D ou ID | |
S_V | Note de bas de paragraphe | Vidéos YouTube | Lien externe | |
S_C | Note de bas de paragraphe | Podcasts | Lien externe | |
S_F | Note de bas de paragraphe | Fils de discussion du forum | Lien externe | |

[1] La même chose pour _Le Livre d'Urantia_ s'applique ici.
[2] La même chose pour _Le Livre d'Urantia_ s'applique ici.
[3] La même chose pour _Le Livre d'Urantia_ s'applique ici.

Exemples:
- S_UB : https://urantiapedia.org/en/article/William_S_Sadler/Workbook_1_Foreword_and_Part_I/1#i-ub-101-the-universal-father-is
- S_B: https://urantiapedia.org/en/article/William_S_Sadler/Consideration_some_criticisms_Urantia_Book

<br>

### Autres livres :books:

Codage | Type d'origine | Destination | Type de destination | Statut |
--- | --- | --- | --- | ---- | --- |
O_UB | Note de bas de paragraphe | Le Livre d'Urantia | Paragraphe | |
O_B | Lien ou note de bas de page dans le paragraphe | La Bible | Verset dans un chapitre d'un livre | |
O_A | Note de bas de paragraphe | articles | Page de l'article | |
O_S | Note de bas de page dans le paragraphe | Aides à l'étude | Page de chapitre ou titre | |

<br>

### Index des sujets :card_index:

Codage | Type d'origine | Destination | Type de destination | Statut |
--- | --- | --- | --- | ---- | --- |
TI_UB | Note de bas de paragraphe ou "Voir aussi" | Le Livre d'Urantia | Paragraphe | :+1 : |
TI_B | Note de bas de paragraphe | La Bible | Verset dans un chapitre d'un livre | |
TI_A | Note de bas de paragraphe | articles | Page de l'article | |
TI_S | Note de bas de paragraphe | Aides à l'étude | Page de chapitre ou titre | |
TI_TI | Rubrique « Voir aussi » | Index des sujets | Page de chapitre ou titre | :+1 : |
TI_I | Insertion d'images [1] | Illustrations | - | |
TI_M | Note de bas de page au paragraphe [2] | Cartes | Page de la carte ou coordonnées/ID | |
TI_3D | Note de bas de page au paragraphe [3] | Modèles 3D | Page de modèle 3D ou ID | |
TI_V | Note de bas de paragraphe | Vidéos YouTube | Lien externe | |
TI_C | Note de bas de paragraphe | Podcasts | Lien externe | |
TI_F | Note de bas de paragraphe | Fils de discussion du forum | Lien externe | |

[1] La même chose pour _Le Livre d'Urantia_ s'applique ici.
[2] La même chose pour _Le Livre d'Urantia_ s'applique ici.
[3] La même chose pour _Le Livre d'Urantia_ s'applique ici.

Exemples:
- TI_UB : https://urantiapedia.org/fr/topic/Abraham_(Ancien_Testament)#references

<br>

### Diagrammes :memo:

Codage | Type d'origine | Destination | Type de destination | Statut |
--- | --- | --- | --- | ---- | --- |
D_UB | Lien dans l'objet diagramme | Le Livre d'Urantia | Paragraphe | |
D_B | Lien dans l'objet diagramme | La Bible | Verset dans un chapitre d'un livre | |

Exemples:
- D_UB : https://urantiapedia.org/en/article/The_Kingdom_of_Heaven_Revelation_Nebadon_Chart (l'une des cases du diagramme)

<br>

### Illustrations :sunrise_over_mountains:

On ne s'attend pas à ce que les illustrations aient une page pour chacune d'entre elles, elles ne sont donc pas des objets pouvant être liés. Ils sont simplement insérés dans d'autres éléments, comme les fascicules du Livre d'Urantia, les chapitres de la Bible, les articles, les aides à l'étude ou les entrées de l'index thématique.

<br>

### Présentations :bar_chart:

Codage | Type d'origine | Destination | Type de destination | Statut |
--- | --- | --- | --- | ---- | --- |
P_UB | Lien dans la diapositive | Le Livre d'Urantia | Paragraphe | |
P_B | Lien dans la diapositive | La Bible | Verset dans un chapitre d'un livre | |

<br>

### Cartes :earth_americas:

Codage | Type d'origine | Destination | Type de destination | Statut |
--- | --- | --- | --- | ---- | --- |
M_UB | Lien dans le panneau latéral | Le Livre d'Urantia | Paragraphe | |
M_B | Lien dans le panneau latéral | La Bible | Verset dans un chapitre d'un livre | |
M_TI | Lien dans le panneau latéral | Index des sujets | Page thématique | |

Exemples:
- M_TI : https://urantiapedia.org/en/map/The_Preaching_of_Jesus_Second_Galilee_Tour (cliquez sur une icône pour ouvrir le panneau avec des liens)

<br>

### Modèles 3D :milky_way:

Codage | Type d'origine | Destination | Type de destination | Statut |
--- | --- | --- | --- | ---- | --- |
3D_UB | Lien dans l'élément 3D | Le Livre d'Urantia | Paragraphe | |

<br>

### Vidéos :movie_camera:

Ce contenu sera en dehors d'Urantiapedia, nous prévoyons donc d'avoir des index ou des pages qui répertorient des liens externes ou des vidéos intégrées dans certaines pages. Ceci est codé comme UB_V, A_V, S_V et TI_V.

<br>

### Podcasts :radio:

Ce contenu sera en dehors d'Urantiapedia, nous prévoyons donc d'avoir des index ou des pages qui répertorient des liens externes ou des podcasts intégrés dans certaines pages. Ceci est codé comme UB_C, A_C, S_C et TI_C.

<br>

### Discussions des forums de discussion :speech_balloon:

Ce contenu sera en dehors d'Urantiapedia, nous prévoyons donc d'avoir des pages avec des liens externes vers des fils de discussion liés au contenu. Ceci est codé comme UB_F, A_F, A_F et TI_F.

<br>

### Résumé des types de liens

| &nbsp;             | UB :blue_book: | B :closed_book: | A :page_with_curl: | S :notebook: | O :books: | TI :card_index: | D :memo: | P :bar_chart: | M :earth_americas: | 3D :milky_way: | V :movie_camera: | C :radio: | F :speech_balloon: |
| ------------------ | :------------: | :-------------: | :----------------: | :----------: | :-------: | :-------------: | :------: | :-----------: | :----------------: | :------------: | :--------------: | :-------: | :----------------: |
| UB :blue_book:     |                |     &harr;      |       &harr;       |    &harr;    |  &harr;   |     &harr;      |  &harr;  |    &harr;     |       &harr;       |     &harr;     |      &rarr;      |   &rarr;  |      &rarr;        |
| B :closed_book:    |     &harr;     |                 |       &harr;       |    &harr;    |  &harr;   |     &harr;      |  &larr;  |    &larr;     |       &harr;       |                |                  |           |                    |
| A :page_with_curl: |     &harr;     |     &harr;      |       &harr;       |    &harr;    |  &harr;   |     &harr;      |          |               |       &rarr;       |                |      &rarr;      |   &rarr;  |      &rarr;        |
| S :notebook:       |     &harr;     |     &harr;      |       &harr;       |    &harr;    |  &harr;   |     &harr;      |          |               |       &rarr;       |                |      &rarr;      |   &rarr;  |      &rarr;        |
| O :books:          |     &harr;     |     &harr;      |       &harr;       |    &harr;    |           |                 |          |               |                    |                |                  |           |                    |
| TI :card_index:    |     &harr;     |     &harr;      |                    |              |           |     &harr;      |          |               |       &harr;       |                |      &rarr;      |   &rarr;  |      &rarr;        |
| D :memo:           |     &harr;     |     &rarr;      |                    |              |           |                 |          |               |                    |                |                  |           |                    |
| P :bar_chart:      |     &harr;     |     &rarr;      |                    |              |           |                 |          |               |                    |                |                  |           |                    |
| M :earth_americas: |     &harr;     |     &larr;      |       &larr;       |    &larr;    |           |     &harr;      |          |               |                    |                |                  |           |                    |
| 3D :milky_way:     |     &harr;     |                 |                    |              |           |                 |          |               |                    |                |                  |           |                    |


## Comment nous définissons les liens

Pour chaque type de contenu, voici une description des fichiers qui stockent les liens et le processus pour générer les liens dans les pages finales à télécharger sur Urantiapedia.

### Le Livre d'Urantia :blue_book:

- UB_B : Le fichier original utilisé pour obtenir les liens est un travail existant appelé Paramony, obtenu sur le site Web de la Fondation Urantia : [Paramony.txt](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/paramony/Paramony.txt). Le fichier a été converti via Urantipedia Tools en un ensemble de fichiers Markdown (par exemple [The Urantia Book.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paramony/The%20Urantia%20Book.md)) puis ajouté au _Le Livre d'Urantia_ au format JSON : [footnotes-book-en](https://github.com/JanHerca/urantiapedia/tree/master/input/json/book-en-footnotes). Ces JSON sont ensuite convertis en fichiers HTML qui sont téléchargés sur Urantiapedia : [The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book). Les fichiers anglais Markdown contiennent le tableau complet avec des liens.
- UB_A : Le fichier d'origine utilisé pour obtenir les liens est un gros fichier : [ub_paralells.tsv](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/articles-en/ub_paralells.tsv) . Ce fichier est généré via les Outils Urantiapedia (analysant tous les articles et aides à l'étude à la recherche de liens vers UB).
- UB_S : Les liens sont obtenus comme pour UB_A.
- UB_O : Un fichier Markdown avec une paire de tables contient la liste des livres et la liste des liens (appelés paralells) : [paralells.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paralells.md) Ce processus sera modifié pour suivre la même méthode que pour UB_A et UB_S.
- UB_TI : L'index des sujets est un index obtenu à partir du site Web de la communauté. Cet index a été formaté dans un ensemble de fichiers TXT :  [topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en). Ce fichier contient des liens entre des phrases à l'intérieur d'un sujet et _The Urantia Boo_k. Lors de la création de fichiers HTML à télécharger sur Urantiapedia, nous recherchons des sujets liés à chaque paragraphe et introduisons des liens dans ces mots qui correspondent aux noms de sujets. Ce processus a quelques problèmes lorsque les mêmes mots partagent des sujets différents, et est maintenant un travail en cours.
- UB_D : Pas encore défini. Nous utilisons probablement un catalogue de diagrammes comme dans les cartes.
- UB_I : les illustrations sont enregistrées dans un catalogue à l'aide de fichiers Markdown : [image_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/image_catalog.md). Lors de la création de fichiers HTML à télécharger sur Urantiapedia, nous recherchons des illustrations liées à chaque paragraphe et introduisons des images sous ces paragraphes. Ce processus a quelques problèmes. C'est un travail en cours.
- UB_P : Pas encore défini. Nous utilisons probablement un catalogue Présentations comme dans les cartes.
- UB_M : les cartes sont enregistrées dans un catalogue à l'aide de fichiers Markdown : [map_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/map_catalog.md). Lors de la création de fichiers HTML à télécharger sur Urantiapedia, nous recherchons des cartes liées à chaque paragraphe et introduisons une section avec une vignette et un bouton qui renvoie à la page de la carte.
- UB_3D : Pas encore défini. Nous utilisons probablement un catalogue de modèles 3D comme dans les cartes.
- UB_V : Pas encore défini. Nous utilisons probablement un catalogue vidéo comme dans les cartes. Mais ce contenu étant externe et généralement dans une langue donnée (sans traductions) est difficilement reproductible dans toutes les langues.
- UB_C : Pas encore défini. Pareil que pour les vidéos.
- UB_F : Pas encore défini. Pareil que pour les vidéos.

<br>

### La Bible :closed_book:

- B_UB : Les fichiers originaux utilisés pour obtenir les liens sont le même travail appelé Paramony utilisé à partir de l'UB_B, mais cette fois en reliant les livres de la Bible avec le _Livre d'Urantia_ : [bible-refs-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/bible-refs-en).. Ces fichiers ont été convertis via Urantiapedia Tools en un ensemble de fichiers Markdown : [paramony](https://github.com/JanHerca/urantiapedia/tree/master/input/markdown/en/paramony) puis ajoutés aux livres bibliques lorsqu'ils sont convertis en fichiers HTML qui sont téléchargés sur Urantiapedia : [Bible](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/Bible). Les fichiers anglais Markdown contiennent le tableau complet avec des liens. Les autres langues n'ont qu'un tableau avec les traductions des textes anglais.
- B_A : Pas encore défini. Une option pourrait être l'inverse A_B avec Urantiapedia Tools.
- B_S : Pas encore défini. Une option pourrait être S_B inversé avec Urantiapedia Tools.
- B_O : Pas encore défini. Une option pourrait être l'O_B inversé avec Urantiapedia Tools.
- B_TI : Pas encore défini. Ce processus est difficile. Nous allons avoir quelques liens de type TI_B pour pouvoir les inverser. Une façon pourrait être d'utiliser Paramony, c'est-à-dire B_UB, pour trouver des paragraphes de UB puis en extraire les noms de sujets utilisés dans UB_TI. Enfin, essayez de trouver ces mêmes sujets dans les versets bibliques.
- B_I : Pas encore défini. Une option pourrait être d'utiliser le même système que UB_I, avec un catalogue d'images.
- B_M : Pas encore défini.

<br>

### Articles :page_with_curl :

- A_UB : Les articles viennent généralement avec des références au _Livre d'Urantia_. Nous les vérifions et les ajoutons manuellement, ou parfois via des expressions régulières qui convertissent les références détectées en liens. Voir ci-dessous à propos de l'importance d'un [système global de référence unique pour _Le Livre d'Urantia_](#système-global-de-référence-unique-pour-le-livre-durantia).
- A_B : La même chose que précédemment s'applique aux livres de la Bible. Lorsqu'une référence biblique est détectée, manuellement ou via RegExp, elle est convertie en liens.
- A_A : Lorsqu'un article référence un autre article, ce qui arrive rarement, nous allons ajouter ce lien manuellement.
- A_S : le même que le précédent.
- A_O : Si l'article mentionne un livre que nous avons dans Urantiapedia, nous ajouterons le lien manuellement.
- A_I : Pour l'instant, nous incluons des images qui existent déjà dans les articles.
- A_M : Liens manuels.
- A_3D : Liaisons manuelles.
- A_V : Liens externes manuels.
- A_C : Liens externes manuels.
- A_F : Liens externes manuels.

<br>

### Aides à l'étude :notebook:

- S_UB : Les aides à l'étude viennent généralement avec des références au _Livre d'Urantia_. Nous faisons ici la même chose que A_UB.
- S_B : Identique à A_B.
- S_A : C'est un type de lien qui se produit rarement. Nous les ajoutons manuellement.
- S_S : C'est aussi rare. Nous l'ajoutons manuellement.
- S_O : Idem que le précédent.
- S_I : Pour l'instant nous incluons des images qui existent déjà dans les études.
- S_M : Liens manuels.
- S_3D : Liaisons manuelles.
- S_V : Liens externes manuels.
- S_C : Liens externes manuels.
- S_F : Liens externes manuels.

<br>

### Autres livres :books:

- O_UB : En utilisant le même processus que UB_O mais en inversant les liens, il est possible d'ajouter des liens dans une page d'un livre.
- O_B : Si un livre mentionne un livre de la Bible, nous introduisons un lien manuellement.
- O_I : Nous incluons des images qui existent déjà dans les livres.
- O_M : si un livre contient des cartes, nous n'allons pas les convertir en carte interactive, mais en images cartographiques statiques.

<br>

### Index des sujets :card_index:

- TI_UB : Le Topic Index, décrit pour UB_TI, est utilisé ici de manière directe, introduisant des notes de bas de page avec des liens lorsque les fichiers Topic Index au format TXT sont convertis en HTML pour être téléchargés sur Urantiapedia. Le résultat est ici : [topic](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/topic). Pour l'instant, nous ne travaillons qu'en anglais et en espagnol. Nous répétons tout le contenu des fichiers pour chaque langue.
- TI_B : Pas encore défini. L'index thématique utilisé mentionne très rarement la Bible.
- TI_A : Pas encore défini.
- TI_S : Pas encore défini.
- TI_I : Pas encore défini.
- TI_M : Liens manuels dans la section Liens.
- TI_3D : Liens manuels dans la section Liens.
- TI_V : Liens externes manuels dans la section Liens externes. Nous ajoutons des liens Wikipedia de cette façon.
- TI_C : Liens externes manuels.
- TI_F : Liens externes manuels.

<br>

### Diagrammes :memo:

- D_UB : Nous souhaitons convertir au maximum les diagrammes en SVG, ou les cartes d'images HTML. Dans le processus, nous convertirons les références UB en liens.
- D_B : Pareil que précédemment, en essayant de détecter les liens bibliques.

<br>

### Illustrations :sunrise_over_mountains :

Pour le _Livre d'Urantia_ leur utilisation a été expliquée dans UB_I. Pour la Bible en B_I. Pour les articles, aides à l'étude et autres livres, en A_I, S_I et O_I. Nous devons définir un moyen d'ajouter des images à l'index des sujets.

<br>

### Présentations :bar_chart:

- P_UB : Nous voulons convertir les présentations en quelque chose qui peut être ajouté à Urantiapedia, pas seulement des liens vers Google Docs ou similaire. De cette façon, toute référence UB ou référence Bible sera convertie en liens Urantiapedia.
- P_B : Identique au précédent.

<br>

### Cartes :earth_americas :

- M_UB : Une fois les liens M_TI créés, nous pouvons ajouter des liens comme celui-ci en utilisant les liens TI_UB.
- M_B : Une fois les liens M_TI créés, nous pouvons ajouter des liens comme celui-ci en utilisant les liens TI_B.
- M_TI : ce type de liens ne sera possible que si les cartes sont converties en petites applications interactives s'exécutant soit dans une carte intégrable (par exemple en utilisant la plate-forme Google My Maps), soit sous forme de cartes s'exécutant dans Urantiapedia (plus recommandé). Lors de la définition de ces cartes (probablement dans un format comme KML), nous ajouterons des liens vers des lieux de sujet sous forme d'informations contextuelles affichées dans un panneau latéral.

<br>

### Modèles 3D :milky_way:

- 3D_UB : Certains modèles 3D peuvent avoir des éléments qui affichent des fenêtres contextuelles contenant des citations d'UB et un lien. Ceci est tout à fait possible en utilisant WebGL.

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