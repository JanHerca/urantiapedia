---
title: "Obtenir des livres “sources”"
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
        <td><a href="/fr/help/github_sourcebooks_catalog">Catalogue de livres "sources"</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_articles_catalog">Catalogue d'articles</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Il est décrit ici comment obtenir les livres qui sont censés être des sources du *Livre d'Urantia* ou avoir une relation ou un parallèle avec *Le Livre d'Urantia*, et qui ont été catalogués en suivant la tâche [Créer un catalogue de livres "sources"](/fr/help/github_sourcebooks_catalog).

## Traiter

### Téléchargement du livre

Cette tâche consiste à essayer de localiser une version numérique de chaque livre sur Internet. Ces situations peuvent se produire :
- Le livre n'a été trouvé sur aucun site Web téléchargeable en tant que numérique. Vous pourriez envisager d'acheter une copie papier si elle est disponible ou d'essayer de faire en sorte que quelqu'un l'obtienne dans une bibliothèque publique pour la numériser.
- Le livre a été trouvé mais il n'est pas téléchargeable, il ne peut être lu qu'en ligne. Normalement, vous pouvez prendre des captures d'écran de chaque page ou faire du piratage Web pour télécharger les scans.
- Le livre est téléchargeable mais sous forme d'images ou dans un PDF où il n'y a pas de texte. Vous devrez utiliser un logiciel de reconnaissance de caractères (OCR).
- Le livre est téléchargeable au format PDF avec texte, ou mieux encore, au format texte. C'est l'idéal de tous les cas.

Pour obtenir des livres numériques, certaines sources peuvent être :
- [Google Livres](https://books.google.es/)
- [Archive Internet - Livres](https://archive.org/details/books)

Quel que soit le cas dans lequel nous nous trouvons, la tâche d'un «éditeur adjoint» sera d'écrire l'adresse Web où nous avons réussi à télécharger le livre et à le télécharger sur notre PC. Les deux éléments doivent ensuite être envoyés à l'un des administrateurs *Urantiapedia* ou à urantiapedia@gmail.com. Les administrateurs créent une collection de stockage Cloud de tous les fichiers volumineux qui ne tiennent pas sur GitHub.

La tâche est ensuite confiée à un «éditeur en chef», qui traitera le livre dans un seul fichier Markdown avec tout cela. Ce fichier n'est en aucun cas finalisé et le travail consistera à le nettoyer et à le formater correctement afin qu'il puisse être téléchargé sur *Urantiapedia*. C'est ce que nous allons voir comment faire ensuite.

### Structure d'un livre sur Urantiapedia

Si vous êtes un «éditeur en chef» et que vous utiliserez la plate-forme GitHub, les livres doivent être enregistrés dans ces dossiers de projet GitHub : `/output/wikijs/en/book` pour les livres en anglais, `/output/wikijs/es/book ` pour les livres en espagnol, etc. Dans ces dossiers, nous en créerons un autre, s'il n'existe pas, avec le nom de l'auteur (avec des espaces vides remplacés par des traits de soulignement). Enfin, dans le dossier de l'auteur, nous créerons un dossier pour chaque livre auquel nous mettrons un nom unique suivant ce critère :
  - Le nom reprendra le titre du livre mais aussi abrégé que possible.
  - Le nom sera toujours en anglais, donc si le livre original n'est pas en anglais, le titre est traduit.
  - Les espaces vides sont remplacés par des traits de soulignement.
  - Les caractères spéciaux comme les deux-points ou les exclamations sont supprimés.
  - Par exemple, si le titre d'un livre est *Jésus a-t-il existé ?*, le dossier de ce livre s'appellera «Did_Jesus_exist». Si le titre était *Principios de Teología* (espagnol), le dossier serait `Principles_of_Theology`.

Si vous êtes un «Rédacteur adjoint» et que vous n'allez pas utiliser la plateforme GitHub pour envoyer des fichiers, créez simplement n'importe quel dossier sur votre PC. Ensuite, lorsque vous envoyez votre travail à un administrateur, il s'occupe de créer les bons dossiers.

Chaque chapitre sera un fichier dans le dossier du livre appelé `xx.md` où `xx` sera :
- Un numéro de 0 à N avec le numéro du chapitre (sans le titre, uniquement le numéro). Le zéro est réservé à un prologue ou à une introduction dans laquelle l'auteur lui-même n'a pas utilisé de chiffre pour le numéroter. S'il n'y a pas de prologue ou d'introduction, le premier chapitre sera "1.md", le second sera "2.md", et ainsi de suite.
- `Index` pour la page d'index, qui restera comme `Index.md`.
- `Preface` pour la page avec la préface, le cas échéant, qui restera comme `Preface.md`.

Un exemple de livre terminé peut être consulté sur `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us`.

### Format de base d'un livre sur Urantiapedia

Le format à utiliser est Markdown, qui est extrêmement simple pour le style par rapport à d'autres alternatives.

Le « rédacteur adjoint » doit réviser le texte et ajouter les éléments suivants (comme indiqué ci-dessous) :
- Un en-tête dans chaque fichier.
- Immédiatement sous l'en-tête, une indication de l'auteur.
- Marquages ​​de section dans chaque chapitre.
- Corriger les paragraphes.
- Gras et italique.
- Devis.
- Marques de saut de page.
- Images.
- Références aux images.
- Notes de bas de page.
- Les tables.
- Formules mathématiques ou caractères en notation scientifique.

Certains des éléments ci-dessus sont complexes et un «éditeur adjoint» pourrait les ignorer lors d'une première révision. Vous pouvez simplement annoter ces parties avec un balisage spécifique pour qu'un «éditeur en chef» les révise plus tard.

### En-tête de chaque fichier

Voici un exemple d'en-tête à ajouter :

```
---
title: "The Universe Around Us — Chapter I — Exploring the Sky"
description:
published: true
date: 2021-11-28T14:02:03.086Z
tags: Cosmology, Astronomy
publisher: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---
```
Il doit être copié tel qu'il est ici et remplacer uniquement les valeurs qui viennent après les deux-points. Le titre doit être entouré de guillemets, et doit être formé à partir du titre du livre, et séparé par un trait d'union, le titre du chapitre, y compris son numéro.

Dans la description il n'est pas nécessaire de mettre quoi que ce soit.

Mettez la date de création et la date actuelle identiques et faites-en la date de création du fichier. L'heure n'est pas pertinente.

Dans les balises, vous devez mettre des étiquettes, séparées par des virgules, qui ont été établies pour ce livre. Normalement, les «rédacteurs en chef» décident quelles sont les balises les plus appropriées, de sorte qu'elles peuvent être laissées vides puis remplies en une seule fois dans tous les fichiers du livre.

### Auteur

Sous l'en-tête, ajoutez toujours une signature, comme ceci :

```
Auteur : **Sir James Jeans, MA, D. Sc., Sc. D., LL. D., FRS**
```

Il est courant dans le monde anglais de placer les titres académiques de l'auteur après le nom, séparés par des virgules.

### Marques de section

Si un chapitre comporte des sections, elles doivent être marquées comme suit :

```
## Le système solaire

### Soleil

### Les planètes
```

Les sections de premier niveau auront toujours la balise `##`, les sections de niveau suivant `###` et ainsi de suite. Il n'est pas très pratique d'utiliser plus de quatre niveaux même si le livre le fait. Comme vous pouvez le voir, nous n'utilisons pas les sections avec la marque `#` car elles créent des titres de section trop gros par la suite.

### Corriger les paragraphes

Un paragraphe est une ligne dans le fichier Markdown et doit avoir une ligne vide avant et après. Il faut veiller à ce que cela se produise dans chaque paragraphe.

### Gras et italique

Ils sont ajoutés comme indiqué :

```
Ceci est du texte dans un paragraphe *avec quelques italiques*.

Ceci est un **nouveau paragraphe** qui a quelque chose en gras.

Les traits de soulignement peuvent également être utilisés pour afficher _italic_ ou __bold__.
```

Comme vous pouvez le voir, un astérisque ou un trait d'union signifie l'italique et deux signifie le gras.

### Devis

Si l'auteur cite un texte, cette citation doit être mise en évidence comme suit :

```wrap
Comme l'a dit un jour le grand Sénèque :
> «Il n'y a pas de vent favorable pour ceux qui ne savent pas où ils vont».
```

Ajoutez simplement la marque `>` et séparez la citation par un espace.

Si la citation est longue et comporte plusieurs paragraphes, elle peut être rédigée ainsi :

```wrap
A plusieurs endroits, Cicéron commente :
> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
>
> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolor et quas malaise excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
```

Notez que nous mettons un `> ` avec un espace de fin sur chaque ligne de séparation de paragraphe.

### Marques de saut de page

Étant donné que lors de la conversion de chaque chapitre d'un livre en une page Web, nous perdons l'information sur l'endroit où nous sommes allés d'une page à l'autre, il est pratique d'ajouter une marque qui le signale, afin d'avoir un moyen de référencer les pages de chaque livre, puisque ces livres que nous traitons dans cette tâche ne sont pas des livres bibliques, qui ont une division standard en versets.

Le marque-page doit être inclus entre les mots qui vont d'une page à l'autre comme suit :

```wrap
Au-delà des astéroïdes viennent les quatre grandes planètes Jupiter, Saturne, Uranus et Neptune, toutes beaucoup plus grandes que la Terre. Jupiter, la plus grande, mesure, selon Sampson, 88 640 miles [142 652 km] de diamètre, ou <span id="p18">[<sup><small>p. 18</small></sup>]</span> plus de onze fois le diamètre de la terre ; Quatorze cents corps de la taille de la Terre pourraient être entassés à l'intérieur de Jupiter et laisser de la place à revendre. Saturne, la deuxième dans l'ordre, est juste derrière Jupiter en taille, avec un diamètre d'environ 70 000 miles [112 654 km]. Ces deux sont de loin les plus grandes des planètes.
```

Vous pouvez voir que le balisage est : `<span id="p18">[<sup><small>p. 18</small></sup>]</span>`.

Étant donné que cette tâche peut être fastidieuse, une façon de la simplifier est de mettre un balisage alternatif plus court, comme `ppp18` si vous utilisez l'exemple précédent. Ensuite, un «rédacteur en chef» peut détecter ces marques et les remplacer automatiquement par les marques définitives. C'est-à-dire que cela vaudrait également:

```wrap
Au-delà des astéroïdes viennent les quatre grandes planètes Jupiter, Saturne, Uranus et Neptune, toutes beaucoup plus grandes que la Terre. Jupiter, la plus grande, a, selon Sampson, un diamètre de 88 640 milles [142 652 km], soit ppp18 plus de onze fois le diamètre de la terre ; Quatorze cents corps de la taille de la Terre pourraient être entassés à l'intérieur de Jupiter et laisser de la place à revendre. Saturne, la deuxième dans l'ordre, est juste derrière Jupiter en taille, avec un diamètre d'environ 70 000 miles [112 654 km]. Ces deux sont de loin les plus grandes des planètes.
```

### Images

Les images doivent être incluses comme ceci :

```
<figure id="Universe_plate_01" class="image urantiapedia">
<img src="/image/book/Sir_James_Jeans/The_Universe_Around_Us/plate_01.png">
<figcaption><em><b>Planche I.</b> Carte de Franklin-Adams, La Voie lactée aux environs de la Croix du Sud</em></figcaption>
</figure>
```

Vous pouvez copier l'exemple ci-dessus lorsqu'une image est nécessaire et remplacer uniquement ce qui suit :
- Où il est écrit `id="Universe_plate_01"` est un identifiant unique pour l'image. Vous pouvez en mettre n'importe lequel tant que dans le même fichier de chaque chapitre il n'y en a pas deux identiques.
- Là où il est écrit `src="..."`, il devrait y avoir un chemin vers le fichier image. Le chemin doit toujours commencer par `/image/`, où se trouvent toutes les images, et doit être suivi d'un chemin identique à celui que nous avons pour le livre. Autrement dit, en suivant l'exemple, puisque le livre est dans `/en/book/Sir_James_Jeans/The_Universe_Around_Us`, les images de ce livre devraient être dans `/image/book/Sir_James_Jeans/The_Universe_Around_Us`. Le nom de fichier de chaque image peut être court, en indiquant toujours l'extension (`.png` ou `.jpg`) du fichier. Si vous n'avez pas le fichier, ce qui va se produire initialement, vous pouvez mettre n'importe quel nom, puis les «éditeurs en chef» décideront du nom final et de l'extension.
- Si l'image a une légende, elle doit être placée à l'intérieur de la balise `figcaption`.

Étant donné que cette tâche d'inclure l'image peut être fastidieuse, les «éditeurs adjoints» peuvent simplement inclure une marque indiquant qu'il y a une image à trouver dans le fichier PDF d'origine, quelque chose comme "iiii" ou tout caractère répété qui ne se produira jamais dans un autre partie du texte.


### Références aux images

Lorsque le texte mentionne une image, il est judicieux de placer un lien interne vers cette image. Par exemple, en continuant avec l'image ci-dessus, pour inclure une référence, elle serait mise comme suit :

```wrap
... chacun d'eux trop faible pour être vu individuellement sans aide télescopique (voir [Planche I](#Universe_plate_01)).

... comme nous l'avons vu dans [Plate VIII](/en/book/Sir_James_Jeans/The_Universe_Around_Us/#Universe_plate_01) du chapitre précédent...
```

La syntaxe `[Plate I](#Universe_plate_01)` est le moyen d'ajouter des hyperliens dans Markdown. Le texte à afficher est indiqué entre crochets, et le chemin web est indiqué juste derrière entre parenthèses. Lorsque l'image est dans le même chapitre, il suffit de mettre '#' puis l'identifiant. Si l'image se trouve dans un autre chapitre, le chemin doit être plus long.

Étant donné que cette tâche consistant à inclure des références d'image peut être fastidieuse, les «éditeurs adjoints» peuvent simplement inclure un balisage indiquant qu'une référence y va, quelque chose comme «rrrr».

### Notes de bas de page

Si le livre contient des notes de bas de page, des notes de fin de chapitre ou des notes générales qui apparaissent à la fin du livre, mais pour lesquelles une marque est placée dans le livre par numéro ou indication, ces marques de note de bas de page seront toujours converties en notes de bas de page, comme suit :

```wrap
Le fait qu'Altair et Saturne apparaissent également brillants dans le ciel ne peut que signifier qu'Altair est 80 000 fois plus éloigné que Saturne[^1].

. . .

[^1] : Parce que la luminosité apparente d'un objet diminue avec l'inverse du carré de sa distance, et le carré de 80 000 est à peu près égal à 6 milliards.
```

Les notes de bas de page sont toujours marquées comme un numéro courant commençant à 1, et sont écrites comme `[^1]`, `[^2]`, etc. Le caractère `^` est tapé sur le clavier en utilisant `Shift + [` puis espace pressant.

La note de bas de page comporte deux parties : l'une est l'indication, qui est placée directement dans le texte, et l'autre est la note de bas de page elle-même, qui est placée à la fin, derrière tout le reste, du dossier. Chaque note de bas de page doit avoir sa marque, puis deux points, puis le texte, chaque note étant séparée les unes des autres par une ligne blanche.

Étant donné que cette tâche d'inclure des notes de bas de page peut être fastidieuse, les «éditeurs adjoints» peuvent simplement inclure une marque indiquant qu'une note de bas de page va là, quelque chose comme `nnnn`, puis copier toutes les notes de chapitre à la fin du fichier.


### Les tables

La création de tableaux est toujours une tâche complexe dans n'importe quel logiciel de bureau. Markdown facilite la création de tableaux, mais cela reste une tâche complexe lorsque le tableau contient des cellules imbriquées, du texte aligné, etc.

Les « rédacteurs adjoints », afin de ne pas perdre trop de temps ici, peuvent simplement marquer où il y a des tableaux dans le texte avec quelque chose comme «tttt».

Si vous voulez en savoir plus sur le formatage des tableaux dans Markdown, vous pouvez le consulter ici : [Aide au formatage de Markdown](/fr/help/markdown).

### Formules mathématiques ou caractères en notation scientifique

La création de formules mathématiques ou l'utilisation de caractères en notation scientifique est toujours une tâche complexe dans tout logiciel bureautique. Markdown facilite la création mais cela reste une tâche complexe selon les formules ou les caractères à utiliser.

Les «éditeurs adjoints», afin de ne pas perdre trop de temps ici, peuvent simplement marquer les endroits où il y a des formules ou des notations scientifiques dans le texte avec quelque chose comme «ffff», afin qu'un «éditeur en chef» puisse vérifier ces points.

Si vous souhaitez en savoir plus sur le formatage des formules et des textes scientifiques dans Markdown, vous pouvez le consulter ici : [Aide au formatage de Markdown](/fr/help/markdown).

## Envoi de fichiers

Si vous êtes un « éditeur en chef » utilisant GitHub, vous pouvez soumettre les livres que vous créez comme indiqué dans l'[Aide des éditeurs en chef](/fr/help/github) ; si vous êtes un «éditeur adjoint», vous pouvez simplement envoyer les fichiers Markdown à l'e-mail de n'importe quel administrateur ou à urantiapedia@gmail.com.

## Liens externes

- [Urantiapedia Tools - Projet GitHub](https://github.com/JanHerca/urantiapedia)
- [Google Livres](https://books.google.es/)
- [Archive Internet - Livres](https://archive.org/details/books)
- [Aide du format Markdown](/fr/help/markdown)

<br>


<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_sourcebooks_catalog">Catalogue de livres "sources"</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_articles_catalog">Catalogue d'articles</a></td>
      </tr>
    </tbody>
  </table>
</figure>