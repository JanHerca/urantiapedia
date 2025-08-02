---
title: "Obtenir les livres supposément utilisés par les révélateurs"
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
        <td><a href="/fr/help/github_sourcebooks_catalog">Création d'un catalogue de livres supposément utilisés par les révélateurs</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_topicindex">Traduction et révision de l'Encyclopédie</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Voici comment obtenir des livres qui sont censés être des sources du *Le Livre d'Urantia* ou avoir une relation ou un parallèle avec le *Le Livre d'Urantia*, et qui ont été catalogué suite à la tâche [Création d'un catalogue de livres "sources"](/fr/help/github_sourcebooks_catalog).

## Processus

Cette tâche consiste à essayer de localiser une version numérique de chaque livre sur Internet, de la télécharger et de la traiter jusqu'à obtenir un ou plusieurs fichiers au format [Markdown](/fr/help/markdown).

Ces situations peuvent se produire :
- Le livre n'est trouvé sur aucun site Web numérique téléchargeable. Vous pouvez envisager d'acheter une copie papier si elle est disponible ou essayer de l'obtenir dans une bibliothèque publique pour la numériser.
- Le livre a été trouvé mais n'est pas téléchargeable, il ne peut être lu qu'en ligne. Normalement, vous pouvez prendre des captures d'écran de chaque page ou pirater le Web pour télécharger les analyses. Nous utilisons le [logiciel de capture Greenshot](https://getgreenshot.org/) à cette fin mais tout autre logiciel peut être utilisé.
- Le livre est téléchargeable mais sous forme d'images ou dans un PDF où il n'y a pas de texte. Vous devrez utiliser un logiciel de reconnaissance de caractères (OCR). Voir ci-dessous.
- Le livre est téléchargeable au format PDF avec texte, ou mieux encore, sous forme de fichier texte ou de page Web. C'est l'idéal dans tous les cas. S'il n'est disponible qu'au format PDF, il doit être converti en texte (voir ci-dessous).

### Téléchargement de livres

Pour obtenir des livres numériques, certaines sources peuvent être :
- [Google Books](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)
- [Projet Gutenberg](https://www.gutenberg.org/)

Quel que soit le cas dans lequel nous nous trouvons, la tâche sera de noter l'adresse Web à partir de laquelle nous avons réussi à télécharger le livre et de le télécharger sur notre PC. Ensuite, il serait pratique d'envoyer un email à urantiapedia@gmail.com indiquant les adresses Web de tous les livres obtenus. *Les administrateurs* créent un référentiel Cloud pour tous les fichiers volumineux qui n'ont pas leur place sur GitHub. Les livres originaux, qui sont parfois des fichiers PDF très volumineux, sont laissés là pour éviter des problèmes si les sites Web à partir desquels ils ont été téléchargés ne sont plus accessibles à l'avenir.

Une fois le fichier livre converti en fichier texte, la tâche sera de traiter le livre jusqu'à obtenir un ensemble de fichiers au format [Markdown](/fr/help/markdown), un fichier pour chaque chapitre, préface ou annexe à le livre.

Pour toute modification de dossiers et fichiers sur GitHub, les instructions fournies aux utilisateurs [Administrateurs](/fr/help/admin), [Rédacteurs en chef](/fr/help/github) ou [Rédacteurs assistants](/fr/help/github_assistant) doit être suivi.

### Copyright

Tout ce qui concerne le _Copyright_ dans la section [Obtenir des livres de toutes les religions](/fr/help/github_religious_books_markdown) de ce manuel s'applique également ici.

### Numériser des livres avec OCR

Si vous devez numériser un livre, consultez la section [Obtenir des livres de toutes les religions](/fr/help/github_religious_books_markdown) de ce manuel et suivez les mêmes étapes.

### Conversion d'un PDF en Markdown

Si vous devez convertir un PDF en Markdown, consultez la section [Obtenir des livres de toutes les religions](/fr/help/github_religious_books_markdown) de ce manuel et suivez les mêmes étapes.

## Structure d'un livre dans Urantiapedia

Nous avons déjà indiqué dans [la tâche précédente](/fr/help/github_sourcebooks_catalog) comment les livres "sources" sont organisés en étagères et en groupes, et où consulter la liste de tous les livres prévus .

Les livres doivent être enregistrés dans ces dossiers de projet GitHub : `/output/wikijs/en/book` pour les livres en anglais, `/output/wikijs/es/book` pour les livres en espagnol, etc. Dans ces dossiers, nous en créerons un autre, s'il n'existe pas, avec le nom de l'auteur (les espaces vides étant remplacés par des traits de soulignement). Enfin, dans le dossier auteur, nous créerons un dossier pour chaque livre, où iront les chapitres, et un fichier Markdown du même nom que le dossier, où ira la couverture du livre. Par exemple, le dossier `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us` contient les chapitres d'un livre sur l'astronomie, et le fichier `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us.md` est celui de la couverture de ce livre.

Concernant les noms de dossiers, ces instructions doivent être prises en compte :
- Ils doivent être uniques au sein de chaque dossier et doivent toujours contenir trois caractères ou plus.
- S'il est prévu que le livre fasse partie d'une collection (tome 1, 2, etc.), ajoutez un suffixe `_1`, `_2`, etc. (jusqu'à un maximum de 9 volumes), ou `_01 `, `_02` (si plus de 9 volumes sont prévus).
- Le nom du dossier ne doit pas comporter d'espaces vides ni de tirets, qui doivent être remplacés par des traits de soulignement (`_`).
- Le nom reprendra le titre du livre mais de la manière la plus abrégée possible.
- Le nom sera toujours en anglais, donc si le livre original n'est pas en anglais, le titre est traduit.
- Les caractères rares tels que les deux-points, les apostrophes ou les exclamations sont supprimés.
- Par exemple, si le titre d'un livre est *Est-ce que Jésus a existé ?* le dossier de ce livre s'appellera « Did_Jesus_exist ». Si le titre était *Principes de théologie* (un livre dont l'original était en espagnol), le dossier serait « Principes_de_théologie ».
- Les mêmes noms de dossiers seront toujours utilisés pour toutes les langues. Par exemple, le dossier de l'exemple ci-dessus en anglais est `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us` et pour l'espagnol, il est `/output/wikijs/es/book/Sir_James_Jeans/The_Universe_Around_Us` (NO ES ~~ `/output/wikijs/es/book/Sir_James_Jeans/El_Universo_que_nos_rodea`~~). Autrement dit, la seule chose qui change dans l'URL entre les différentes langues est le code de la langue (`en`, `es`, etc.). Cela facilite de nombreuses opérations avec les routes d’Urantiapedia.

Chaque chapitre sera un fichier dans le dossier du livre appelé `xx.md` où `xx` sera :
- Un nombre de 0 à N avec le numéro du chapitre (sans le titre, juste le numéro). Le zéro est réservé à un prologue ou une introduction dans lequel l'auteur lui-même n'a pas utilisé de numéro pour le numéroter. S'il n'y a pas de prologue ou d'introduction, le premier chapitre sera « 1.md », le second sera « 2.md », etc.
- `Index` pour la page d'index, qui sera `Index.md`. Cette page peut parfois être omise si l'index n'est pas très long et inclure l'index sur la page de garde.
- `Préface` pour la page avec la préface, le cas échéant, qui restera sous la forme `Preface.md`.
- Les annexes doivent être nommées `Appendix_xx` où `xx` suit une numérotation de 1 à N.

Un exemple de livre terminé peut être vu dans `/output/wikijs/es/book/Sir_James_Jeans/The_Universe_Around_Us`.

## Formatage de base d'un livre sur Urantiapedia

Le format à utiliser est Markdown, qui est extrêmement simple à formater par rapport aux autres alternatives.

De l'ensemble du format [Markdown](/fr/help/markdown), qui est assez étendu, un contributeur qui ajoute un livre "source" à Urantiapedia n'aura sûrement pas à se soucier d'autre chose que d'ajouter ces choses (la liste est détaillée ci-dessous) :
- Un en-tête dans chaque fichier.
- Immédiatement en dessous de l'en-tête, une indication de l'auteur.
- Sections au sein de chaque chapitre.
- Des paragraphes correctement séparés.
- Gras et italique.
- Rendez-vous.
- Marques de saut de page.
- Des images.
- Références aux images.
- Notes de bas de page.
- Des tableaux.
- Formules mathématiques ou caractères en notation scientifique.
- Liens de navigation.

Cela ressemble à beaucoup de choses, mais la vérité est que Markdown est très simple et peut être appris en moins d'une heure. Dans les sections suivantes, nous expliquerons un peu chacune des choses de la liste précédente.

### En-tête de chaque fichier

Voici un exemple d'en-tête à ajouter :

```
---
title: "The Universe Around Us — Chapter I — Exploring the Sky"
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: Cosmology, Astronomy
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---
```
Il doit être copié tel quel ici et remplacer uniquement les valeurs qui viennent après le côlon. Il est préférable que le titre soit mis entre guillemets et soit formé à partir du titre du livre et séparé par un trait d'union du titre du chapitre, y compris son numéro.

Il n'est pas nécessaire de mettre quoi que ce soit dans la description.

La date de création et la date actuelle doivent être la date de création du fichier. L'heure n'est pas pertinente.

Dans _tags_, vous devez mettre les balises, séparées par des virgules, qui ont été établies pour ce livre. Une liste complète des balises utilisées sur Urantiapedia est disponible ici : [Tags sur Urantiapedia](https://github.com/JanHerca/urantiapedia/blob/master/docs/tags.md?plain=1). Ils peuvent être laissés vides car il est très rapide de les remplir d'un seul coup dans tous les fichiers du livre. Voici quelques recommandations :
- Les étiquettes doivent être **obligatoires en anglais**. L'option de balises traduites n'est actuellement pas disponible dans [Wiki.js](https://js.wiki/), le logiciel utilisé par Urantiapedia. 
- L'étiquette n'a pas d'importance si elle est en majuscule ou en minuscule. `book` et `Book` sont la même balise. En fait, ils sont tous affichés en minuscules sur Urantiapedia : [Recherche par tags](https://urantiapedia.org/t). Toutes les balises existantes sont également affichées sur cette page.
- Au moins tous les fichiers d'un livre doivent avoir la balise `book` indiquant qu'il s'agit d'un contenu de bibliothèque.
- Au moins une étiquette de l'étagère à laquelle appartient le livre : `Theology`, `Philosophy`, `Science`.
- Pour les livres scientifiques, vous pouvez ajouter une étiquette supplémentaire avec la discipline. Certains déjà créés sont : `Anthropology`, `Archaeology`, `Astronomy`, `Biology`, `Chemistry`, `Chronology`, `Cosmology`, `Evolutionism`, `Genetics`, `Geography`, `Geology`, `History`, `Linguistics`, `Mathematics`, `Medicine`, `Paleontology`, `Pedagogy`, `Physics`, `Politics`, `Psychiatry`, `Psychology`, `Sociology`.
- Si une balise n'existe pas et que vous souhaitez l'ajouter, ajoutez-la simplement à l'en-tête de n'importe quel fichier et cette balise sera créée.

### Auteur

Sous l'en-tête, ajoutez toujours une ligne d'auteur, comme ceci :

```
<p class="v-card v-sheet theme--light grey lighten-3 px-2">Sir James Jeans, M. A., D. Sc., Sc. D., LL. D., F. R. S.</p>
```

Il est courant dans le monde anglophone de placer les titres académiques de l'auteur après le nom, séparés par des virgules.

### Marques de section

Si un chapitre comporte des sections, elles doivent être marquées comme suit :

```
## Le système solaire

### Le Soleil

### Les planètes
```

Les sections de premier niveau seront toujours marquées `## ` , le niveau suivant `###` et ainsi de suite. Il n’est pas très pratique d’utiliser plus de quatre niveaux même si le livre le fait. Comme vous pouvez le constater, nous n'utilisons pas de sections avec la marque « # » car elles créent alors des titres de section trop grands.

### Corriger les paragraphes

Un paragraphe est une ligne dans le fichier Markdown et doit avoir une ligne vide avant et après. Il faut veiller à ce que cela se produise dans chaque paragraphe. Dans le cas où le texte est poétique, les vers des strophes peuvent être conservés ensemble et n'avoir qu'une ligne blanche avant et après la strophe.

### Gras et italique

Ajouté comme indiqué :

```
Il s'agit d'un texte dans un paragraphe *avec quelques italiques*.

Il s'agit d'un **nouveau paragraphe** qui contient quelque chose en gras.

Vous pouvez également utiliser des traits de soulignement pour afficher _italics_ ou __bold__.
```

Comme vous pouvez le voir, un astérisque ou un tiret signifie l'italique et deux signifient le gras.

### Citations

Si l'auteur cite un texte, cette citation doit être soulignée comme suit :

```
Comme le disait déjà le grand Sénèque :

> « Il n'y a pas de vent favorable pour celui qui ne sait où il va. »
```

Ajoutez simplement la marque `>` et séparez la citation par un espace.

Si la citation est longue et comporte plusieurs paragraphes, elle peut s'écrire ainsi :

```
Cicéron la commente à plusieurs endroits :

> Mais afin que vous puissiez voir d'où vient toute cette erreur de ceux qui accusent le plaisir et louent la douleur, j'ouvrirai tout le sujet et expliquerai les choses mêmes qui ont été dites par celui qui a découvert la vérité et, pour ainsi dire, l'architecte. d'une vie heureuse.
> 
> Mais en effet, nous accusons tous deux et avec une juste haine nous amenons ceux qui le méritent, qui sont adoucis et corrompus par la flatterie des plaisirs présents, aveuglés par l'avidité des douleurs et des ennuis qu'ils sont sur le point d'éprouver, et qui n'y pourvoient pas.
```

Observez que nous mettons un `> ` avec un espace derrière chaque ligne de séparation du paragraphe.

### Marks de flip de página

Étant donné que lors de la conversion de chaque chapitre d'un livre en page Web, nous perdons l'information sur l'endroit où il a été transmis d'une page à l'autre, il est pratique d'ajouter une marque qui l'indique, afin d'avoir un moyen de référencer les pages de chaque livre. , puisque ces livres que nous traitons dans cette tâche ne sont pas des livres bibliques, qui ont une division standard en versets.

Le marque-page doit être inclus entre les mots dans lesquels vous passez d'une page à l'autre comme suit :

```
Au-delà des astéroïdes se trouvent les quatre grandes planètes Jupiter, Saturne, Uranus et Neptune, toutes beaucoup plus grandes que la Terre. Jupiter, la plus grande, a, selon Sampson, un diamètre de 88 640 miles [142 652 km], soit <span id="p18">[<sup><small>p. 18</small></sup>]</span> plus de onze fois le diamètre de la terre ; Quatorze cents corps de la taille de la Terre pourraient être entassés à l’intérieur de Jupiter et laisser de la place. Saturne, suivant dans l'ordre, est le deuxième derrière Jupiter en taille, avec un diamètre d'environ 70 000 milles [112 654 km]. Ces deux planètes sont de loin les plus grandes.
```

Vous pouvez voir que la marque est : `<span id="p18">[<sup><small>p. 18</small></sup>]</span>`.

Comme cette tâche peut être fastidieuse, un moyen de la rendre plus simple peut être de placer une marque alternative plus courte, telle que `ppp18` (`ppp` est un texte dont nous savons qu'il n'arrivera jamais), pour continuer avec l'exemple précédent. Ensuite, vous pouvez rechercher ces marques et les remplacer automatiquement par les marques définitives comme nous l'avons indiqué dans un autre exemple ci-dessus. Autrement dit, cela serait également valable :

```
Au-delà des astéroïdes se trouvent les quatre grandes planètes Jupiter, Saturne, Uranus et Neptune, toutes beaucoup plus grandes que la Terre. Jupiter, la plus grande, a, selon Sampson, un diamètre de 88 640 milles [142 652 km], soit ppp18 plus de onze fois le diamètre de la Terre ; Quatorze cents corps de la taille de la Terre pourraient être entassés à l’intérieur de Jupiter et laisser de la place. Saturne, suivant dans l'ordre, est le deuxième derrière Jupiter en taille, avec un diamètre d'environ 70 000 milles [112 654 km]. Ces deux planètes sont de loin les plus grandes.
```

### Images

Les images doivent être incluses comme ceci :

```
<figure id="Universe_plate_01" class="image urantiapedia">
<img src="/image/book/Sir_James_Jeans/The_Universe_Around_Us/plate_01.png">
<figcaption><em><b>Lámina I.</b> Carta de Franklin-Adams, La Vía Láctea en el vecindario de la Cruz del Sur</em></figcaption>
</figure>
```

Vous pouvez copier l'exemple précédent lorsqu'une image est nécessaire et remplacer uniquement ce qui suit :
- Là où il est écrit ` id="Universe_plate_01"` doit être un identifiant unique pour l'image. Vous pouvez en mettre n'importe lequel à condition qu'il n'y en ait pas deux identiques dans le même fichier de chaque chapitre.
- Là où il est écrit `src="..."`, il doit y avoir un chemin vers le fichier image. Le chemin doit toujours commencer par `/image/`, qui est l'endroit où se trouvent toutes les images, et derrière lui doit se trouver un chemin identique à celui que nous avons pour le livre. Autrement dit, en suivant l'exemple, puisque le livre se trouve dans `/es/book/Sir_James_Jeans/The_Universe_Around_Us`, les images de ce livre doivent être dans `/image/book/Sir_James_Jeans/The_Universe_Around_Us`. Le nom de fichier de chaque image peut être court, en indiquant toujours l'extension (`.png` ou `.jpg`). Il est recommandé que le nom du fichier ne contienne pas d'espaces, de caractères spéciaux, d'apostrophes ou d'accents.
- Si l'image a une légende, elle doit être placée à l'intérieur de la balise `figcaption`.
- Si vous souhaitez aligner l'image à gauche, au centre ou à droite, vous devez remplacer `class="image urantiapedia"` par `class="image urantiapedia image-style-align-left"`, `class="image urantiapedia image-style-align-center"` et `class="image urantiapedia image-style-align-right"`, respectivement. Quelques paragraphes ci-dessous, vous devez ajouter une ligne avec `<br style="clear:both;"/>` afin que l'alignement n'affecte plus le placement du texte.

Étant donné que cette tâche d'inclusion d'images peut être fastidieuse, vous pouvez utiliser une astuce comme celles mentionnées précédemment. Si aucune image ne doit avoir de pied de page, vous pouvez mettre quelque chose comme `fff18` (ou `fffl18`, `fffc18`, `fffr18`) pour simplifier le fait qu'il y ait une image avec le numéro 18 (et même alignée ).

### Références aux images

Lorsque le texte mentionne une image, c'est une bonne idée de placer un lien interne vers cette image. Par exemple, en continuant avec l'image ci-dessus, pour inclure une référence, ce serait comme ceci :

```
... chacun d'eux est trop faible pour être vu individuellement sans aide télescopique (voir [Planche I](#Universe_plate_01)) .

...comme nous l'avons déjà vu dans la [Planche VIII](/fr/book/Sir_James_Jeans/The_Universe_Around_Us/#Universe_plate_01) du chapitre précédent...
```

La syntaxe `[Plate I](#Universe_plate_01)` est le moyen d'ajouter des hyperliens dans Markdown. Le texte affiché est indiqué entre parenthèses, et le chemin web est indiqué juste derrière entre parenthèses. Lorsque l'image est dans le même chapitre, mettez simplement `#` puis l'identifiant. Si l'image se trouve dans un autre chapitre, la syntaxe devrait ressembler à `[Plate I](/image/book/Sir_James_Jeans/The_Universe_Around_Us/3#Universe_plate_01)`. Dans cet exemple, nous indiquons la figure 1 qui se trouve au chapitre 3.

### Notes de bas de page

Si le livre comporte des notes de bas de page, ou des notes de fin de chapitre, ou des notes globales qui apparaissent à la fin du livre, mais dont une marque est placées dans le livre par un numéro ou une indication, ces marques d'annotation deviendront toujours des notes de bas de chapitre, comme suit :

```
Le fait qu'Altaïr et Saturne apparaissent également brillants dans le ciel ne peut que signifier qu'Altaïr est 80 000 fois plus loin que Saturne. [^1].

. . .

[^1] : Parce que la luminosité apparente d'un objet diminue avec l'inverse du carré de sa distance, et que le carré de 80 000 est approximativement égal à 6 milliards.
```

Les notes de bas de page sont toujours marquées par un numéro consécutif commençant par 1 et sont écrites sous la forme `[^1]`, `[^2]`, etc. Le caractère `^` est tapé sur le clavier en utilisant `Shift + [` puis en appuyant sur espace.

La note de bas de page comporte deux parties : l'une est l'indication, qui est placée directement dans le texte, et l'autre est la note elle-même, qui est placée à la fin, derrière tout le reste, dans le dossier, chaque note avec votre marque, puis une deux points, puis le texte et chaque note séparée les unes des autres par une ligne vierge. Il est pratique de mettre une section « ## Notes » pour les notes, qui, comme cela a été dit, devrait toujours se trouver à la fin de tout, y compris les liens de navigation.


### Tableaux

La création de tableaux est toujours une tâche complexe dans n'importe quel logiciel bureautique. Markdown facilite la création de tableaux, mais cela reste une tâche complexe lorsque le tableau comporte des cellules imbriquées, des textes alignés, etc.

Par exemple, il est très simple de créer un tableau à deux colonnes simplement en utilisant le caractère "barre verticale" ("|") :

```
Ages | Temps 
--- | --- :
Âge de la terre | environ 2 000 000 000 d'années
Âge de la vie sur terre | „ 300 000 000 „
Âge de l'homme sur terre | „ 300 000 „
L'ère de la science astronomique | „ 3 000 „
L'ère de l'astronomie télescopique | „ 300 „
```
Pour aligner la colonne à gauche, à droite ou au centre, utilisez simplement les caractères `---`, `---:` et `:---:`, respectivement, comme vu dans l'exemple .

Pour les tableaux qui nécessitent plusieurs lignes par cellule, vous pouvez utiliser `<br>` comme séparateur. Par exemple :

```
Longueurs d'onde (cms.) | Nature du rayonnement | Effet sur l'atome | Température (degrés abs.) | Où se trouve-t-il
--- | --- | --- | --- | ---
7 500 x 10^-8^<br>a<br>3 750 x 10^-8^ | Lumière visible | Perturbe les électrons les plus externes | 3 850°<br>à<br>7 700° | Atmosphères stellaires
250 x 10^-8^<br>a<br>10^-8^ | radiographies | Perturbe les électrons internes | 115 000°<br>à<br>29 000 000° | Stellar Interiors
```

Si vous souhaitez en savoir plus sur la façon de formater les tableaux dans Markdown, vous pouvez le consulter ici : [Aide au formatage Markdown](/fr/help/markdown), dans les sections _Tables_ et _Advanced Tables_. Des tableaux complexes peuvent être créés de manière très simple avec Markdown. Si le tableau ne peut pas être créé dans Markdown en raison de sa complexité, il peut toujours être créé en utilisant la syntaxe HTML. Il convient de rappeler que Markdown est une manière alternative d’écrire du HTML, mais il prend également en charge n’importe quel contenu HTML. Vous disposez d'un bon tutoriel sur la création de tableaux HTML dans Mozilla Docs : [Bases des tableaux HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics).

Il convient de garder à l'esprit que les tableaux sont mal lus sur les appareils mobiles lorsque leur largeur est supérieure à la largeur de l'écran. Pour éviter cet inconvénient, lorsque le tableau comporte plus de deux colonnes, il est conseillé d'enfermer le tableau dans un conteneur à défilement latéral, comme le montre cet exemple :

```
<div class="urantiapedia-table-wrapper">

Longueurs de vague (cms.) | Nature du rayonnement | Effet sur l'atome | Température (degrés abs.) | Où se trouve-t-il
--- | --- | --- | --- | ---
7 500 x 10^-8^<br>a<br>3 750 x 10^-8^ | Lumière visible | Perturbe les électrons les plus externes | 3 850°<br>à<br>7 700° | Atmosphères stellaires
250 x 10^-8^<br>a<br>10^-8^ | radiographies | Perturbe les électrons internes | 115 000°<br>à<br>29 000 000° | Intérieurs stellaires

</div>
```

### Formules mathématiques ou caractères en notation scientifique

Créer des formules mathématiques ou utiliser des caractères en notation scientifique est toujours une tâche complexe dans n'importe quel logiciel de bureau. Markdown facilite sa création mais cela reste une tâche complexe selon les formules ou caractères à utiliser car en réalité la syntaxe utilisée est [LaTeX](https://es.wikipedia.org/wiki/LaTeX) via une extension de Markdown appelé [Mathjax](https://www.mathjax.org/).

Si vous souhaitez en savoir plus sur la façon de formater des formules et des textes scientifiques dans Markdown vous pouvez le consulter ici :[Aide sur le format Markdown](/fr/help/markdown), dans la section _Expressions mathématiques (Mathjax)_.

### Liens de navigation

Ces liens s'enchaînent sur un seul tableau de principe et final de chaque chapitre, et permettent de passer d'un chapitre à un autre avec facilité, ou à l'indice. Cela devrait être l'exemple suivant :

```
<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us/1">
            <span class="mdi mdi-arrow-left-drop-circle"></span><span class="pl-2">Capítulo I — Explorando el cielo</span>
          </a>
        </td>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us#índice">
            <span class="mdi mdi-book-open-variant"></span><span class="pl-2">Índice</span>
          </a>
        </td>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us/3">
            <span class="pr-2">Capítulo III — Explorando en el tiempo</span><span class="mdi mdi-arrow-right-drop-circle"></span>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</figure>
```

Comme vous l'avez dit avant, le dernier fichier de l'archive doit toujours être la section de notas, si c'est le cas, y compris debajo de estos enlaces de navegación.

## Création d'une fiche de port

Pour la création d'une fiche de port, suivez tout ce qui est indiqué dans la section [Obtenir les livres de toutes les religions](/fr/help/github_religious_books_markdown) de ce manuel. C'est pourquoi il est dit que le port sera un fichier Markdown avec le même numéro que le tapis des chapitres. Par exemple, le tapis `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us` contient les chapitres d'un livre sur l'astronomie, et la fiche `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us.md` est le de la portada de ce livre.

## Soumission de demandes de modification

Ceci complète toutes les choses à garder en compte dans les autres livres «fuentes» à la Biblioteca Urantipedia. Une fois que vous avez modifié ce projet dans le projet GitHub, vous avez réalisé une demande de changement et vous l'avez détaillée dans les manuels des utilisateurs [Administrateurs](/fr/help/admin), [Éditeurs principaux](/fr/help/github) ou [Editeurs assistants](/fr/help/github_assistant).


## Enlaces externes

- [Urantiapedia Tools - projet sur GitHub](https://github.com/JanHerca/urantiapedia)
- [Google Libros](https://books.google.es/)
- [Internet Archive - Livres](https://archive.org/details/books)
- [Le ​​projet Gutemberg](https://www.gutenberg.org/)
- [Aide du format Markdown](/fr/help/markdown)

<br>


<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_sourcebooks_catalog">Création d'un catalogue de livres supposément utilisés par les révélateurs</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_topicindex">Traduction et révision de l'Encyclopédie</a></td>
      </tr>
    </tbody>
  </table>
</figure>