---
title: Aide au format Markdown
description: 
published: true
date: 2022-09-06T09:08:14.892Z
tags: help
editor: markdown
dateCreated: 2022-08-01T19:59:13.093Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/web_markdown_editor">Using the Markdown editor</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/web_html_editor">Using the HTML editor</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
## Aperçu

Markdown est un langage de balisage léger avec une syntaxe de formatage de texte brut. C'est la syntaxe de facto pour écrire de la documentation sur les principaux référentiels de code tels que GitHub.

*Urantiapedia* prend en charge la [spécification CommonMark complète](https://spec.commonmark.org/) + ajoute quelques extensions utiles (y compris les addons Github Flavored Markdown).

Ceci est une liste complète du balisage Markdown qui est pris en charge dans *Urantiapedia*. Pour chaque élément supporté vous avez : comment l'utiliser dans l'éditeur, les raccourcis s'ils existent et des exemples avec le balisage et le résultat. Jetez un œil à toutes les options disponibles avant d'utiliser le format Markdown dans n'importe quelle page.

---

## Titres
### Onglet {.tabset}

#### Utilisation
Utiliser entre 1 et 6 symboles **hashtag**, suivis d'un espace, avant la sélection de texte.

#### Raccourcis
- Sur la ligne souhaitée, puis en cliquant sur le bouton déroulant ![Header](https://docs.requarks.io/assets/ui/ui-markdown-headers.png =x30){.radius-4} dans la barre d'outils.
- Sur la ligne souhaitée, appuyez sur <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Droite</kbd> pour augmenter le niveau d'en-tête.
- Sur la ligne souhaitée, appuyez sur <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Gauche</kbd> pour diminuer le niveau d'en-tête.

#### Exemple

**Markdown**
```
# h1 Titre 8-)
## h2 Titre
### h3 Titre
#### h4 Titre
##### h5 Titre
###### h6 Titre
```
**Résultat**
<div style="padding-bottom:5px;color: #1565c0; font-size: 2em;font-weight:bold;background:linear-gradient(90deg,#1976d2,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 3px;">h1 Titre <img src="/_assets/svg/twemoji/1f60e.svg" alt="😎" draggable="false" class="emoji"></div>
<div style="padding-bottom:5px;color: #424242; font-size: 1.5em;font-weight: bold;background:linear-gradient(90deg,#424242,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h2 Titre</div>
<div style="padding-bottom:5px;color: #616161; font-size: 1.17em;font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h3 Titre</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h4 Titre</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h5 Titre</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h6 Titre</div>

Pour une liste des emojis pris en charge, voir ci-dessous.

## Lignes horizontales

### Onglet {.tabset}

#### Utilisation

Utiliser les symboles **triple tiret** sur une ligne dédiée.

#### Raccourcis
- En cliquant sur le bouton ![Horizontal Rule](https://docs.requarks.io/assets/ui/ui-markdown-hr.png =x30){.radius-4} dans la barre d'outils.

#### Exemples

**Markdown**
```
___
---
***
```
**Résultat**
___
---
***

## Remplacements typographiques

### Onglet {.tabset}

#### Utilisation
Tapez le texte comme d'habitude.

#### Exemples

**Markdown**
```
(c) (C) (r) (R) (tm) (TM) (p) (P) +-

tester.. tester... tester..... tester?..... tester!....

!!!!!! ???? ,, -- ---

"Smartypants, guillemets doubles" et "guillemets simples"
```
**Résultat**

© © ® ® ™ ™ § § ±

tester… tester… tester… tester ?.. tester !..

!!! ??? , – –

"Smartypants, guillemets doubles" et "guillemets simples"

## Accent

### Onglet {.tabset}

#### Utilisation

Italique : Utilisation d'un symbole **simple astérisque** avant et après la sélection de texte.

Gras : utilisation des symboles **doubles astérisques** avant et après la sélection de texte.

#### Raccourcis
- En sélectionnant du texte, puis en cliquant sur le bouton ![Gras](https://docs.requarks.io/assets/ui/ui-markdown-bold.png =x30){.radius-4} dans la barre d'outils.
- En sélectionnant du texte, puis en appuyant sur <kbd>CTRL</kbd> + <kbd>B</kbd>

#### Exemples

**Markdown**
```
**Ceci est un texte en gras**
__Ceci est un texte en gras__
*Ceci est un texte en italique*
_Ceci est un texte en italique_
~~Barré~~
***Gras italique***
```
**Résultat**
**Ceci est un texte en gras**
__Ceci est un texte en gras__
*Ceci est un texte en italique*
_Ceci est un texte en italique_
~~Barré~~
***Gras italique***

## Blockquotes

### Onglet {.tabset}

#### Utilisation
Utiliser un symbole **supérieur à**, suivi d'un espace, avant chaque ligne de texte.

#### Raccourcis
- En sélectionnant du texte, puis en cliquant sur le bouton ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-blockquotes.png =x30){.radius-4} dans la barre d'outils.

#### Exemple 1

**Markdown**
```
> Les blocs de citations peuvent également être imbriqués...
>> ...en utilisant d'autres signes supérieurs à juste à côté les uns des autres...
> > > ... ou avec des espaces entre les flèches.
```
**Résultat**
> Les blocs de citations peuvent également être imbriqués...
>> ...en utilisant d'autres signes supérieurs à juste à côté les uns des autres...
> > > ... ou avec des espaces entre les flèches.

#### Exemple 2

Citations personnalisées
**Markdown**
```
> Ceci est un bloc d'informations
{.is-info}

> Ceci est une citation réussie
{.is-success}

> Ceci est une citation d'avertissement
{.is-warning}

> Ceci est une erreur de citation
{.is-danger}
```
**Résultat**
> Ceci est un bloc d'informations
{.is-info}

> Ceci est une citation réussie
{.is-success}

> Ceci est une citation d'avertissement
{.is-warning}

> Ceci est une erreur de citation
{.is-danger}

## Listes non ordonnées

### Onglet {.tabset}

#### Utilisation

Utiliser un **astérisque** ou un symbole **tiret**, suivi d'un espace, avant chaque ligne de texte.

#### Raccourcis
- En sélectionnant du texte, puis en cliquant sur le bouton ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-ul.png =x30){.radius-4} dans la barre d'outils.

#### Exemples

**Markdown**
```
+ Créez une liste en commençant une ligne par `+`, `-` ou `*`
+ Les sous-listes sont faites en indentant 2 espaces :
  - Le changement de caractère marqueur force le début d'une nouvelle liste :
    * Ac tristique libero volutpat à
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Très facile !
```
**Résultat**
+ Créez une liste en commençant une ligne par `+`, `-` ou `*`
+ Les sous-listes sont faites en indentant 2 espaces :
  - Le changement de caractère marqueur force le début d'une nouvelle liste :
    * Ac tristique libero volutpat à
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Très facile !

#### Styles

En ajoutant une classe sur une ligne distincte, après la liste, vous pouvez modifier l'apparence de la liste :

- `liste de liens`
- `grille-liste`

**Markdown**

``` démarque
- Élément de grille 1
- Élément de grille 2
- Point de grille 3
{.grid-list}

- [Lorem ipsum dolor sit amet *Description du sous-titre ici*](https://www.google.com)
- [Consectetur adipiscing elit *Une autre description de sous-titre ici*](https://www.google.com)
- [Morbi vehicula aliquam *Description du troisième sous-titre ici*](https://www.google.com)
{.links-list}
```
**Résultat**

- Élément de grille 1
- Élément de grille 2
- Point de grille 3
{.grid-list}

et:

- [Lien Titre 1 *Description du sous-titre ici*](https://www.google.com)
- [Titre du lien 2 *Une autre description du sous-titre ici*](https://www.google.com)
- [Lien Titre 3 *Description du troisième sous-titre ici*](https://www.google.com)
{.links-list}

> Notez que ces styles sont spécifiques à Urantiapedia et reviendront au style de liste standard dans d'autres applications.
{.is-warning}

## Listes ordonnées

### Onglet {.tabset}

#### Utilisation

En utilisant un **nombre**, suivi d'un symbole **point**, suivi d'un espace, avant chaque ligne de texte.

#### Raccourcis
- En sélectionnant du texte, puis en cliquant sur le bouton ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-ol.png =x30){.radius-4} dans la barre d'outils.

#### Exemple 1

**Markdown**
```
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. Vous pouvez utiliser des numéros séquentiels...
1. ou conservez tous les chiffres tels quels `1.`
```
**Résultat**
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. Vous pouvez utiliser des numéros séquentiels...
1. ou conservez tous les chiffres tels quels `1.`

#### Exemple 2
Commencer la numérotation avec décalage :

**Markdown**
```
1. foo
2. barre
```
**Résultat**
57. fo
1. barre

##Code

### Code en ligne

### Onglet {.tabset}

#### Utilisation

Utiliser des **backticks** avant et après le texte sélectionné.

#### Raccourcis
- En sélectionnant du texte, puis en cliquant sur le bouton ![Inline code](https://docs.requarks.io/assets/ui/ui-markdown-inlinecode.png =x30){.radius-4} de la barre d'outils.

#### Exemples

**Markdown**
```
`code` en ligne

```
**Résultat**
`code` en ligne

### Code en retrait

### Onglet {.tabset}

#### Utilisation

Ajout de tabulations avant chaque ligne.

#### Exemples

**Markdown**
```
    // Certains commentaires
    ligne 1 du code
    ligne 2 du code
    ligne 3 du code

```
**Résultat**
    // Certains commentaires
    ligne 1 du code
    ligne 2 du code
    ligne 3 du code

### Code de bloc « clôtures »

### Onglet {.tabset}

#### Utilisation

Utilisez les symboles **triple backticks** avant et après la sélection de texte, sur des lignes dédiées.

#### Raccourcis

- À l'aide de l'outil **Code Block** dans la barre d'outils de gauche.

#### Exemples

**Markdown**
~~~
```
Exemple de texte ici...
```
~~~
**Résultat**
```
Exemple de texte ici...
```

### Mise en évidence de la syntaxe

### Onglet {.tabset}

#### Utilisation

Utilisez les symboles **triple backticks** avant et après la sélection de texte, sur des lignes dédiées, puis le code du langage de programmation (`js`, `html`, `css`, etc.).

#### Raccourcis
- À l'aide de l'outil **Code Block** dans la barre d'outils de gauche.

#### Exemples

**Markdown**
~~~
```js
var foo = function (bar) {
  return++ ;
} ;

console.log(foo(5));
```
~~~
**Résultat**

```js
var foo = function (bar) {
  return++ ;
} ;

console.log(foo(5));
```

## Les tables

### Onglet {.tabset}

#### Utilisation

Séparez les cellules du tableau à l'aide de la **barre verticale**.

#### Exemple 1

**Markdown**

```
| Options | Descriptif |
| ------ | ----------- |
| données | chemin d'accès aux fichiers de données pour fournir les données qui seront transmises aux modèles. |
| moteur | moteur à utiliser pour le traitement des modèles. Le guidon est la valeur par défaut. |
| poste | extension à utiliser pour les fichiers dest. |
```

**Résultat**

| Options | Descriptif |
| ------ | ----------- |
| données | chemin d'accès aux fichiers de données pour fournir les données qui seront transmises aux modèles. |
| moteur | moteur à utiliser pour le traitement des modèles. Le guidon est la valeur par défaut. |
| poste | extension à utiliser pour les fichiers dest. |


#### Exemple 2

Colonnes alignées à droite

**Markdown**

```
| Options | Descriptif |
| -------:| -----------:|
| données | chemin d'accès aux fichiers de données pour fournir les données qui seront transmises aux modèles. |
| moteur | moteur à utiliser pour le traitement des modèles. Le guidon est la valeur par défaut. |
| poste | extension à utiliser pour les fichiers dest. |
```

**Résultat**

| Options | Descriptif |
| ------:| -----------:|
| données | chemin d'accès aux fichiers de données pour fournir les données qui seront transmises aux modèles. |
| moteur | moteur à utiliser pour le traitement des modèles. Le guidon est la valeur par défaut. |
| poste | extension à utiliser pour les fichiers dest. |

## Liens

### Onglet {.tabset}

#### Utilisation

En utilisant la syntaxe `[Texte du lien](Cible du lien)`.

#### Accéder
- À l'aide de l'outil **Lien** dans la barre d'outils de gauche.

#### Exemples

**Markdown**

```
[texte du lien](http://dev.nodeca.com)

[lien avec le titre](http://nodeca.github.io/pica/demo/ "texte du titre!")

Lien converti automatiquement https://github.com/nodeca/pica (activer linkify pour voir)
```

**Résultat**

[texte du lien](http://dev.nodeca.com)

[lien avec le titre](http://nodeca.github.io/pica/demo/ "texte du titre!")

Lien converti automatiquement https://github.com/nodeca/pica (activer linkify pour voir)


## Images

### Onglet {.tabset}

#### Utilisation

En utilisant la syntaxe `![Caption Image](Image Source)`.

#### Accéder
- À l'aide de l'outil **Ressources** dans la barre d'outils de gauche.

#### Exemples

**Markdown**
```
![Minion](https://octodex.github.com/images/minion.png =300x300)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "Le Stormtroopocat" =300x300)
```

**Résultat**
![Minion](https://octodex.github.com/images/minion.png =300x300)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "Le Stormtroopocat" =300x300)

#### Coiffant

Comme les liens, les images ont également une syntaxe de style note de bas de page

**Markdown**
```
![Texte alternatif][id]
```

**Résultat**

![Texte alternatif][id]

#### Références

Avec une référence plus loin dans le document définissant l'emplacement de l'URL :

**Markdown**
```
[id] : https://octodex.github.com/images/dojocat.jpg "Le Dojocat" =300x300
```

**Résultat**

[id] : https://octodex.github.com/images/dojocat.jpg "Le Dojocat"

#### Dimensions

Parfois, les images sont trop grandes ou vous souhaitez peut-être que l'image occupe tout l'espace disponible.

Simplement dans les dimensions à la fin du chemin de l'image au format suivant :

```
![Image](/lien/vers/image.jpg =100x50)
```

Vous pouvez également omettre l'une des valeurs pour conserver automatiquement le rapport d'image :

```
![Image](/lien/vers/image.jpg =100x)
![Image](/lien/vers/image.jpg =x50)
```

Il est également possible d'utiliser d'autres unités, telles que %. Utile lorsque vous avez besoin que l'image occupe tout l'espace disponible :

```
![Image](/lien/vers/image.jpg =100%x)
```

## SVG

### Onglet {.tabset}

#### Utilisation

SVG peut être inclus comme tout autre contenu pris en charge par les navigateurs.

#### Exemples

**Markdown**

```svg
<svg largeur="100" hauteur="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

**Résultat**

<svg largeur="100" hauteur="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

## Plans

### Onglet {.tabset}

#### Utilisation

Au moyen d'une "iframe" qui pointe vers une carte réalisée sur une plate-forme cartographique. Il s'agit d'un moyen temporaire d'ajouter des cartes dynamiques jusqu'à ce que l'éditeur de carte soit disponible.

#### Exemple

**Markdown**
```
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>
```
**Résultat**
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>

## Émojis

### Onglet {.tabset}

#### Utilisation

Utilisation de la syntaxe `:identifier:`

Voir les emojis pris en charge dans [Emoji Cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
Voir [comment modifier la sortie](https://github.com/markdown-it/markdown-it-emoji#change-output) avec twemoji.

https://github.com/markdown-it/markdown-it-emoji

#### Exemples

**Markdown**
```
> Balisage classique : :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Raccourcis (émoticônes) : :-) :-( 8-) ;)
```

**Résultat**
> Balisage classique : :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Raccourcis (émoticônes) : :-) :-( 8-) ;)

Voir les emojis pris en charge sur [Emoji Cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
Voir [comment modifier la sortie](https://github.com/markdown-it/markdown-it-emoji#change-output) avec twemoji.


## Index

### Onglet {.tabset}

#### Utilisation

Utilisez un symbole **tilde simple** avant et après la sélection de texte.

https://github.com/markdown-it/markdown-it-sub

#### Raccourcis
- Sélectionnez du texte, puis cliquez sur le bouton ![Index](https://docs.requarks.io/assets/ui/ui-markdown-sub.png =x30){.radius-4} de la barre d'outils .

#### Exemples

**Markdown**
```
-H~2~O
```

**Résultat**
-H~2~O

## Exposant

### Onglet {.tabset}

#### Utilisation

Utilisation d'un curseur **unique** avant et après la sélection de texte.

https://github.com/markdown-it/markdown-it-sup

#### Raccourcis
- Sélectionnez du texte, puis cliquez sur le bouton ![Exposant](https://docs.requarks.io/assets/ui/ui-markdown-sup.png =x30){.radius-4} de la barre d'outils .

#### Exemples

**noter**
```
- 19^ème^
```

**Résultat**
- 19^ème^

## Texte inséré

### Onglet {.tabset}

#### Utilisation

https://github.com/markdown-it/markdown-it-ins

#### Exemples

**Markdown**
```
++Texte inséré++
```

**Résultat**
++Texte inséré++

## Marquer le texte

### Onglet {.tabset}

#### Utilisation

https://github.com/markdown-it/markdown-it-mark

#### Exemples

**Markdown**
```
==Texte marqué==
```

**Résultat**
==Texte marqué==

## Notes de bas de page

### Onglet {.tabset}

#### Utilisation

Utilisez la syntaxe `[^1]` pour l'emplacement de la note de bas de page dans le texte principal et `[^1] : ceci est une note de bas de page` pour la note de bas de page proprement dite. Les notes de bas de page elles-mêmes apparaîtront automatiquement au bas de la page sous une ligne horizontale.

https://github.com/markdown-it/markdown-it-footnote

#### Exemples

**Markdown**
```
Lien de la note de bas de page 1[^premier].

Lien de la note de bas de page 2[^deuxième].

Définition de la note de bas de page en ligne ^ [Texte de la note de bas de page en ligne].

Référence de note de bas de page dupliquée[^second].

[^first] : la note de bas de page **peut avoir un balisage**

    et plusieurs paragraphes.

[^second] : texte de la note de bas de page.
```

**Résultat**
Lien de la note de bas de page 1[^premier].

Lien de la note de bas de page 2[^deuxième].

Définition de la note de bas de page en ligne ^ [Texte de la note de bas de page en ligne].

Référence de note de bas de page dupliquée[^second].

[^first] : la note de bas de page **peut avoir un balisage**

    et plusieurs paragraphes.

[^second] : texte de la note de bas de page.

## Listes de définitions

### Onglet {.tabset}

#### Utilisation

https://github.com/markdown-it/markdown-it-deflist

#### Exemples

**Markdown**
```
Terme 1

: Définition 1
avec suite paresseuse.

Terme 2 avec *balisage en ligne*

: Définition 2

        { du code, partie de la définition 2 }

    Troisième paragraphe de la définition 2.
```

**Résultat**
Terme 1

: Définition 1
avec suite paresseuse.

Terme 2 avec *balisage en ligne*

: Définition 2

        { du code, partie de la définition 2 }

    Troisième paragraphe de la définition 2.

#### Style compact

**Markdown**
```
Terme 1
  ~ Définition 1

Terme 2
  ~ Définition 2a
  ~ Définition 2b
```

**Résultat**
Terme 1
  ~ Définition 1

Terme 2
  ~ Définition 2a
  ~ Définition 2b

## Abréviations

### Onglet {.tabset}

#### Utilisation

https://github.com/markdown-it/markdown-it-abbr

#### Exemples

Ceci est un exemple d'abréviation HTML.

Il convertit "HTML", mais garde intactes les entrées partielles comme "xxxHTMLyyy" et ainsi de suite.

**Markdown**
```
*[HTML] : langage de balisage hypertexte
```

**Résultat**
*[HTML] : langage de balisage hypertexte

## Conteneurs personnalisés

### Onglet {.tabset}

#### Utilisation

https://github.com/markdown-it/markdown-it-container

#### Exemples

**Markdown**
```
::: Attention
*Voilà des dragons*
:::
```

**Résultat**
::: Attention
*Voilà des dragons*
:::

## Tableaux avancés

### Onglet {.tabset}

#### Utilisation

https://github.com/RedBug312/markdown-it-multimd-table

#### Avec regroupement, alignement et mise en forme

**Markdown**
```
|             |          Grouping           ||
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*        ||
Content       |   **Cell**    |         Cell |

New section   |     More      |         Data |
And more      | With an escaped \|       ||
[Prototype table]
```

**Résultat**
|             |          Grouping           ||
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*        ||
Content       |   **Cell**    |         Cell |

New section   |     More      |         Data |
And more      | With an escaped \|       ||
[Prototype table]

#### Avec multiligne

**Markdown**
```
|   Markdown   | Rendered HTML |
|--------------|---------------|
|    *Italic*  | *Italic*      | \
|              |               |
|    - Item 1  | - Item 1      | \
|    - Item 2  | - Item 2      |
|    ```python | ```python       \
|    .1 + .2   | .1 + .2         \
|    ```       | ```           |
```

**Résultat**
|   Markdown   | Rendered HTML |
|--------------|---------------|
|    *Italic*  | *Italic*      | \
|              |               |
|    - Item 1  | - Item 1      | \
|    - Item 2  | - Item 2      |
|    ```python | ```python       \
|    .1 + .2   | .1 + .2         \
|    ```       | ```           |

#### Avec étendue de lignes

**Markdown**
```
Stage | Direct Products | ATP Yields
----: | --------------: | ---------:
Glycolysis | 2 ATP ||
^^ | 2 NADH | 3--5 ATP |
Pyruvaye oxidation | 2 NADH | 5 ATP |
Citric acid cycle | 2 ATP ||
^^ | 6 NADH | 15 ATP |
^^ | 2 FADH2 | 3 ATP |
**30--32** ATP |||
[Net ATP yields per hexose]
```

**Résultat**
Stage | Direct Products | ATP Yields
----: | --------------: | ---------:
Glycolysis | 2 ATP ||
^^ | 2 NADH | 3--5 ATP |
Pyruvaye oxidation | 2 NADH | 5 ATP |
Citric acid cycle | 2 ATP ||
^^ | 6 NADH | 15 ATP |
^^ | 2 FADH2 | 3 ATP |
**30--32** ATP |||
[Net ATP yields per hexose]

#### Titre groupé

**Markdown**
```
| Archétypes ||
--- | ---
Adam et Ève | Foi
Lucifer | Prophétie
Satan Gardien | anges
Melchisédech | La vie après la mort
Séraphin | Le Royaume des Cieux
Ciel | Les Apôtres
Enfer | Jésus et les histoires de sa vie et de ses enseignements
Salut | La seconde venue
```

**Résultat**
| Archétypes ||
--- | ---
Adam et Ève | Foi
Lucifer | Prophétie
Satan Gardien | anges
Melchisédech | La vie après la mort
Séraphin | Le Royaume des Cieux
Ciel | Les Apôtres
Enfer | Jésus et les histoires de sa vie et de ses enseignements
Salut | La seconde venue

## Expressions mathématiques (Mathjax)

### Onglet {.tabset}

#### Utilisation

Consultez les liens externes pour en savoir plus sur l'utilisation de Math dans Markdown.

https://github.com/classeur/markdown-it-mathjax

#### Exemple 1

Traite les mathématiques affichées par TeX

**Markdown**
```
$$1 *2* 3$$

Traite les mathématiques en ligne TeX $1 *2* 3$
```

**Résultat**
$$1 *2* 3$$

#### Exemple 2

Traite les mathématiques en ligne TeX $1 *2* 3$

**Markdown**
```
Quand $a \ne 0$, il y a deux solutions à $ax^2 + bx + c = 0$ et elles sont
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$


$$\frac{1}{\sqrt{x^2 + 1}}$$
```

**Résultat**
Quand $a \ne 0$, il y a deux solutions à $ax^2 + bx + c = 0$ et elles sont
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

$$\frac{1}{\sqrt{x^2 + 1}}$$

#### Exemple 3

**Markdown**
```
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11 ^ O^12^__
```

**Résultat**
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11 ^ O^12^__


#### Exemple 4

**Markdown**
```
$$V = H_0 * D, $$
```

**Résultat**
$$V = H_0 * D, $$

#### Exemple 5

**Markdown**
```
En grande partie oui, en $1/4$ non.
```

**Résultat**
En grande partie oui, en $1/4$ non.

#### Exemple 6

**Markdown**
```
description	| code | examples
--- | --- | ---
Greek letters |	\alpha \beta \gamma \rho \sigma \delta \epsilon	| $\alpha \beta \gamma \rho \sigma \delta \epsilon$
Binary operators | \times \otimes \oplus \cup \cap | $\times \otimes \oplus \cup \cap$
Relation operators | < > \subset \supset \subseteq \supseteq | $< > \subset \supset \subseteq \supseteq$
Others | \int \oint \sum \prod | $\int \oint \sum \prod$
```

**Résultat**
description	| code | examples
--- | --- | ---
Greek letters |	\alpha \beta \gamma \rho \sigma \delta \epsilon	| $\alpha \beta \gamma \rho \sigma \delta \epsilon$
Binary operators | \times \otimes \oplus \cup \cap | $\times \otimes \oplus \cup \cap$
Relation operators | < > \subset \supset \subseteq \supseteq | $< > \subset \supset \subseteq \supseteq$
Others | \int \oint \sum \prod | $\int \oint \sum \prod$

#### Exemple 7

**Markdown**
```
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D  \end{cases}$$
```

**Résultat**
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D  \end{cases}$$

#### Exemple 8

**Markdown**
```
Masse terrestre = $M^\odot$
```

**Résultat**
Masse terrestre = $M^\odot$

## Onglets de contenu

### Onglet {.tabset}

#### Utilisation

Utilisez les en-têtes et ajoutez la classe `{.tabset}` à l'en-tête principal. Le texte de l'en-tête principal ne sera pas affiché dans le résultat final.

Notez que vous pouvez utiliser n'importe quel niveau d'en-tête, tant que les en-têtes enfants sont d'un niveau supérieur. Par exemple, si un en-tête principal est `###` *(h3)*, les en-têtes de tabulation doivent être `####` *(h4)*. Le niveau d'en-tête maximum pour un parent est 5 et les enfants sont 6.

#### Exemples

```
# Onglets {.tabset}
## Premier onglet

Tout contenu ici ira dans le premier onglet...

## Deuxième onglet

Tout contenu ici ira dans le deuxième onglet...

## Troisième onglet

Tout contenu ici ira dans le troisième onglet...
```

## Afficher les touches du clavier

### Onglet {.tabset}

#### Utilisation

Utiliser `<kbd>` avant et `</kbd>` après la sélection de texte.

#### Accéder
- Sélection de texte, puis clic sur le bouton ![Keyboard Keys](https://docs.requarks.io/assets/ui/ui-markdown-kbd.png =x30){.radius-4} de la barre d'outils.

#### Exemples

```html
Lorem ipsum douleur <kbd>CTRL</kbd> + <kbd>C</kbd>
```

Lorem ipsum douleur <kbd>CTRL</kbd> + <kbd>C</kbd>

## Liens externes

- [Urantiapedia Tools - Projet GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - Projet GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fondation Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)
- [Guide de l'utilisateur MultiMarkdown](https://fletcher.github.io/MultiMarkdown-6/)
- [Spécification Markdown](https://commonmark.org/)
- [Aide Markdown](https://commonmark.org/help/)
- [Syntaxe étendue Markdown](https://www.markdownguide.org/extended-syntax/)
- [Aide Markdown Wiki.js](https://docs.requarks.io/en/editors/markdown)
- [Fiche de triche Emoji](https://www.webfx.com/tools/emoji-cheat-sheet/)
- [Modifier la sortie emoji](https://github.com/markdown-it/markdown-it-emoji#change-output)
- [Mathjax](https://www.mathjax.org/)
- [Documentation Mathjax](http://docs.mathjax.org/en/latest/index.html)
- [Expressions mathématiques LaTeX](https://www.overleaf.com/learn/latex/Mathematical_expressions)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/web_markdown_editor">Using the Markdown editor</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/web_html_editor">Using the HTML editor</a></td>
      </tr>
    </tbody>
  </table>
</figure>



