---
title: "Obtenez des livres de toutes les religions"
description:
published: true
date: 2024-10-10T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2024-10-10T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_religious_books_catalog">Créer un catalogue de livres de toutes les religions</a></td>
        <td><a href="/fr/help">Index</a></td>
        <td><a href="/fr/help/github_sourcebooks_catalog">Création d'un catalogue de livres «source»</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Nous décrivons ici comment obtenir les livres de toutes les religions et comment les télécharger dans la [Bibliothèque Urantiapedia](/fr/book) . Dans la tâche précédente, un catalogue de ces livres a été créé pour servir de guide.

## Processus

Cette tâche consiste à essayer de localiser une version numérique de chaque livre sur Internet, de la télécharger et de la traiter jusqu'à obtenir un ou plusieurs fichiers au format [Markdown](/fr/help/markdown).

Ces situations peuvent se produire :
- Le livre n'est trouvé sur aucun site numérique téléchargeable. Vous pouvez envisager d'acheter une copie papier si elle est disponible ou essayer de l'obtenir dans une bibliothèque publique pour la numériser.
- Le livre a été trouvé mais n'est pas téléchargeable, il ne peut être lu qu'en ligne. Normalement, vous pouvez prendre des captures d'écran de chaque page ou pirater le Web pour télécharger les analyses. Nous utilisons le [logiciel de capture Greenshot](https://getgreenshot.org/) à cet effet, mais tout autre logiciel peut être utilisé.
- Le livre est téléchargeable mais sous forme d'images ou dans un PDF où il n'y a pas de texte. Vous devrez utiliser un logiciel de reconnaissance de caractères (OCR). Voir ci-dessous.
- Le livre est téléchargeable au format PDF avec texte, ou mieux encore, sous forme de fichier texte ou de page Web. C'est l'idéal dans tous les cas. S'il n'est disponible qu'au format PDF, il doit être converti en texte (voir ci-dessous).

### Téléchargement de livres

Pour obtenir des livres religieux numériques, certaines sources peuvent être :
- [Textes sacrés](https://archive.sacred-texts.com)
- [Google Books](https://books.google.es/ )
- [Internet Archive - Livres](https://archive.org/details/books)
- Le logiciel [e-Sword](https://www.e-sword.net/)

Quel que soit le cas dans lequel nous nous trouvons, la tâche sera de noter l'adresse Web à partir de laquelle nous avons réussi à télécharger le livre et de le télécharger sur notre PC. Ensuite, il serait pratique d'envoyer un email à urantiapedia@gmail.com indiquant les adresses Web de tous les livres obtenus. *Les administrateurs* créent un référentiel Cloud pour tous les fichiers volumineux qui n'ont pas leur place sur GitHub. Les livres originaux, qui sont parfois des fichiers PDF très volumineux, sont laissés là pour éviter des problèmes si les sites Web à partir desquels ils ont été téléchargés ne sont plus accessibles à l'avenir.

Une fois le fichier livre converti en fichier texte, la tâche sera de traiter le livre jusqu'à obtenir un ensemble de fichiers au format [Markdown](/fr/help/markdown), un fichier pour chaque chapitre, préface ou annexe à le livre.

Pour toute modification de dossiers et fichiers sur GitHub, les instructions fournies aux utilisateurs [Administrateurs](/fr/help/admin), [Rédacteurs en chef](/fr/help/github) ou [Rédacteurs assistants](/fr/help/github_assistant) doit être suivi.

### Copyright

Les livres qui peuvent être téléchargés sur Urantiapedia doivent être libres de droits d'auteur, qui sont entrés dans le [domaine public](https://fr.wikipedia.org/wiki/Domaine_public_(propri%C3%A9t%C3%A9_intellectuelle)) . Cela signifie que les éditions modernes de la Bible ou d’autres livres religieux ne peuvent pas être utilisées. Malheureusement, ces éditions reçoivent peu de mises à jour de la part des éditeurs qui impliquent une acquisition de droits, même s'il s'agit de textes millénaires ou centenaires qui n'ont jamais connu ces limitations légales dans le passé.

Cette situation déplorable ne doit pas être négligée même sur un site à but non lucratif comme Urantiapedia. Peu importe le type de projet que nous réalisons. Un auteur ou un éditeur d'une œuvre peut estimer que ses droits et sa compensation financière sont diminués et poursuivre la direction d'Urantiapedia pour utilisation inappropriée des œuvres.

Les livres entrent dans le domaine public en fonction de la légalité en vigueur dans le pays d'origine de l'auteur ou de l'édition.

Aux États-Unis, toutes les œuvres publiées ou diffusées pour la première fois avant le 1er janvier 1929 ont perdu leur protection par le droit d'auteur 95 ans plus tard, à compter du 1er janvier 2024. De même, les œuvres publiées en 1929 entreront dans le domaine public à partir du 1er janvier 2025, et ce Le cycle se répétera jusqu'à ce que les œuvres publiées en 1977 entrent dans le domaine public le 1er janvier 2073. Les œuvres d'auteur continueront de respecter le délai de quatre-vingt-quinze ans à compter de 2073. En vertu de la loi actuelle sur le droit d'auteur, à partir de 2049, 1978 et 1978. au-delà, les œuvres de créateurs décédés sept décennies plus tôt expireront chaque année. Par exemple, si un créateur décédait en 2002, le droit d'auteur sur ses œuvres durerait jusqu'à la fin de 2072 et entrerait dans le domaine public le 1er janvier 2073. Les œuvres publiées sans mention de droit d'auteur avant 1977, ainsi que celles publiées avant mars 1989 si le droit d'auteur n'a pas été enregistré dans les cinq ans à compter de la date de publication, et ceux publiés avant 1964 si le droit d'auteur n'a pas été renouvelé 28 ans plus tard.

En Espagne, c'est 80 ans si l'auteur est décédé avant le 7 décembre 1987 ou 70 ans s'il est décédé plus tard.

En règle générale, les pays disposent d'un délai de 50 à 100 ans pour exploiter le droit d'auteur après leur décès, ce qui est établi par la Convention de Berne.

### Numériser des livres avec une OCR

Parfois, un livre donné n'est pas numérisé ou converti en texte. Pour ce faire, suivez ces étapes :

1. Si le livre est disponible sur un site comme archive.org, créez des captures d'écran des pages à l'aide d'un outil comme [Greenshot](https://getgreenshot.org/), qui s'intègre au bouton `ImpScreen` pour accélérer la création d'une série d'instantanés.
2. Installez [TesseractOCR](https://github.com/UB-Mannheim/tesseract/wiki), gratuit et open source.
3. Installez [Visual Studio Code](https://code.visualstudio.com/), en ajoutant l'extension [Powershell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell).
4. Créez quelques dossiers, un avec les captures d'écran et un autre pour les textes.
5. Ouvrez VS Code en racine à l'aide du menu _Terminal > New Terminal_ et, à partir de l'**invite du terminal**, créez un fichier répertoriant tous les instantanés : `dir *.* > ocr.ps1`
6. Modifiez le fichier ps1 avec le Éditeur PowerShell, pour que toutes les commandes ressemblent à ceci : `& 'c:\Program Files\Tesseract-OCR\tesseract' ".\snapshots\<filename>.png" ".\texts\ <filename>.txt" `
7. Cliquez sur le bouton « Exécuter tout » dans l'éditeur PowerShell. Cela crée un fichier TXT pour chaque fichier PNG analysé.
8. Assurez-vous d'avoir l'extension _Combine Files_ ([Combine Files](https://marketplace.visualstudio.com/items?itemName=BateleurIO.vscode-combine-scripts)) dans VS Code.
9. Faites un clic droit sur le dossier Textes et utilisez _Merge Files_. Un fichier temporaire est créé. Copiez tout le contenu dans un fichier TXT permanent.

Une manière plus simple pour les dernières étapes :

1. Créez un fichier (`convert.ps1`) avec ce contenu :

```
Set-Location 'C:\Users\Scan'
Get-ChildItem -Filter '*.png' | ForEach-Object {
& 'c:\Program Files\Tesseract-OCR\tesseract.exe' $_.Name ($_.BaseName)
}
```

2. Remplacez `C:\Users\Scan` par le chemin réel vers les fichiers numérisés.
3. Procédez comme indiqué à l'étape 8 ci-dessus.

Le résultat final sera d'avoir un fichier TXT avec le texte de tous les fichiers de capture d'écran. La prochaine étape consistera à convertir ce fichier TXT en Markdown (voir ci-dessous).

### Conversion de PDF en Markdown

Lorsqu'un livre numérique est déjà au format PDF, qu'il s'agisse d'un PDF avec ou sans texte, il existe des outils qui permettent une conversion directe en Markdown. Certains outils que nous utilisons, par ordre d'intérêt, sont les suivants :

- [Mathpix](https://mathpix.com/). L'outil le plus puissant que nous ayons trouvé car il analyse non seulement le texte et les images et les convertit très bien en Markdown, mais il analyse également les tableaux et les équations mathématiques, ce qui en fait un outil idéal pour numériser des livres scientifiques ou académiques.
- [pdf-to-markdown](https://pdf2md.morethan.io/) ([GitHub](https://github.com/jzillmann/pdf-to-markdown)). Une API Javascript pour la conversion PDF. Il existe un exemple de site Web.
- [pdf-tools](https://github.com/bsorrentino/pdf-tools). Inspiré par _pdf-to-markdown_.
- [Aspose DPF vers MD](https://products.aspose.app/words/es/conversion/pdf-to-md). C'est un produit également vendu sous le nom d'[API](https://github.com/aspose-words/Aspose.Words-for-.NET). Sa documentation est [ici](https://reference.aspose.com/words/net/).
- [Un convertisseur en ligne](https://www.onlineocr.net/). Convertissez non seulement en texte mais également en MS Word.
- [Diviser le PDF par taille de fichier](https://deftpdf.com/split-pdf-by-size). Outil pour diviser un PDF en plusieurs fichiers selon leur taille. Certains outils ne sont pas capables de travailler sur des PDF très volumineux.


## Structure d'un livre dans Urantiapedia

Nous avons déjà indiqué dans [la tâche précédente](/fr/help/github_religious_books_catalog) comment les livres religieux sont organisés en étagères, groupes et sous-groupes, et où vous pouvez consulter la liste de tous les livres prévus.

Les classeurs doivent être enregistrés dans ces dossiers de projet GitHub :
- S'il s'agit d'un livre des étagères « Livres religieux judéo-chrétiens (Ancien Testament) » ou « Livres religieux judéo-chrétiens (Nouveau Testament) », les livres doivent être enregistrés dans ces dossiers de projet GitHub : `/output/wikijs/en/Bible` pour les livres en anglais, `/output/wikijs/es/Bible` pour les livres en espagnol, etc. Dans ces dossiers, nous en créerons un pour chaque livre, où iront les chapitres, et un fichier Markdown portant le même nom que le dossier, où ira la couverture du livre. Par exemple, le dossier `/output/wikijs/en/Bible/Genesis` contient les 50 chapitres de Genesis, et le fichier `/output/wikijs/en/Bible/Genesis.md` est la couverture de Genesis.
- S'il s'agit d'un livre du reste des étagères de livres religieux, les livres doivent être enregistrés dans ces dossiers de projet GitHub : `/output/wikijs/en/book` pour les livres en anglais, `/output/wikijs/es/book` pour les livres en espagnol, etc. Au sein de ces dossiers nous en créerons un autre, s'il n'existe pas, avec le nom de chaque religion :
	- `Judaism` : pour les livres de l'étagère « Livres religieux du judaïsme ».
	- `Christianism` : pour les livres du rayon « Écrits religieux chrétiens ».
	- `Islam` : pour les livres du rayon « Livres religieux islamiques ».
	- `Buddhism` : pour les livres de l'étagère « Écrits religieux bouddhistes ».
	- `Hinduism` : pour les livres de l'étagère « Livres religieux sur l'hindouisme ».
	- `Taoism` : pour les livres du rayon « Livres religieux taoïstes ».
	- `Bahaism` : pour les livres du rayon « Écrits religieux du Bahaïsme ».
	- `Shikhism` : pour les livres du rayon « Livres religieux sur le sikhisme ».
	- `Shintoism` : pour les livres du rayon « Livres religieux shinto ».
	- `Zoroastrianism` : pour les livres du rayon « Livres religieux zoroastriens ».
	- `Jainism` : pour les livres du rayon « Livres religieux du jaïnisme ».
	- Dans les dossiers précédents nous ferons comme avec la Bible, nous créerons un dossier pour chaque livre et un fichier Markdown pour la couverture. Par exemple, le dossier `/output/wikijs/en/book/Islam/Quran` contient les 114 sourates ou chapitres du Coran, et le fichier `/output/wikijs/en/book/Islam/Quran.md` la couverture du Coran.

Concernant les noms de dossiers, ces instructions doivent être prises en compte :
- Ils doivent être uniques au sein de chaque dossier et doivent toujours contenir trois caractères ou plus.
- S'il est prévu que le livre fasse partie d'une collection (tome 1, 2, etc.), ajoutez un suffixe `_1`, `_2`, etc. (jusqu'à un maximum de 9 volumes), ou `_01 `, `_02` (si plus de 9 volumes sont prévus).
- Le nom du dossier ne doit pas comporter d'espaces vides ni de tirets, qui doivent être remplacés par des traits de soulignement (`_`).
- Le nom reprendra le titre du livre mais de la manière la plus abrégée possible.
- Le nom sera toujours en anglais, donc si le livre original n'est pas en anglais, le titre est traduit.
- Les caractères rares tels que les deux-points, les apostrophes ou les exclamations sont supprimés.
- Par exemple, si le titre d'un livre est *Did Jesus exist?* le dossier de ce livre s'appellera `Did_Jesus_exist`. Si le titre était *Principios de Teología* (un livre dont l'original était en espagnol), le dossier serait `Principles_of_Theology`.
- Les mêmes noms de dossiers seront toujours utilisés pour toutes les langues. Par exemple, le dossier pour le Coran anglais est `/output/wikijs/en/book/Islam/Quran` et pour l'espagnol, il est `/output/wikijs/es/book/Islam/Quran` (NO ES ~~`/output/wikijs/es/book/Islam/Corán`~~). Autrement dit, la seule chose qui change dans l'URL entre les différentes langues est le code de la langue (`en`, `es`, etc.). Cela facilite de nombreuses opérations avec les routes d’Urantiapedia.

Chaque chapitre sera un fichier dans le dossier du livre appelé `xx.md` où `xx` sera :
- Un nombre de 0 à N avec le numéro du chapitre (sans le titre, juste le numéro). Le zéro est réservé à un prologue ou une introduction dans lequel l'auteur lui-même n'a pas utilisé de numéro pour le numéroter. S'il n'y a pas de prologue ou d'introduction, le premier chapitre sera « 1.md », le second sera « 2.md », etc.
- `Index` pour la page d'index, qui sera `Index.md`. Cette page peut parfois être omise si l'index n'est pas très long et inclure l'index sur la page de garde.
- `Preface` pour la page avec la préface, le cas échéant, qui restera sous la forme `Preface.md`.
- Les annexes doivent être nommées `Appendix_xx` où `xx` suit une numérotation de 1 à N.

> Dans le cas de nombreux livres bibliques, les fichiers avec les chapitres sont au format HTML et non Markdown car ils ont été générés à partir de fichiers au format LaTeX trouvé dans le projet dans `/input/tex`. Cette automatisation est due au fait que beaucoup de ces livres ont été obtenus en exportant à partir du logiciel [e-Sword](https://www.e-sword.net/), qui génère un contenu similaire à LaTeX. Cette tâche est détaillée dans la section du manuel [Obtenir la Bible](/fr/help/github_bible). Cette tâche a été réalisée pour les 25 langues actuellement prises en charge.
> Les livres extra-bibliques qui ne sont pas obtenus depuis e-Sword sont ajoutés au format Markdown en suivant le processus manuel détaillé sur cette page.
{.is-warning}

## Formatage de base d'un livre religieux sur Urantiapedia

Le format à utiliser est Markdown, qui est extrêmement simple à formater par rapport aux autres alternatives.

De l'ensemble du format [Markdown](/fr/help/markdown), qui est assez étendu, un contributeur qui ajoute un livre religieux à Urantiapedia n'aura sûrement pas à se soucier d'autre chose que d'ajouter ces choses (la liste est détaillée ci-dessous) :
- Un en-tête dans chaque fichier.
- Sections au sein de chaque chapitre.
- Des paragraphes correctement séparés.
- Indication et lien verset devant certains paragraphes. 
- Gras et italique.
- Rendez-vous.
- Marques de saut de page dans un livre qui n'utilise pas de vers.
- Des images.
- Références aux images.
- Notes de bas de page.
- Liens de navigation.

Cela ressemble à beaucoup de choses, mais la vérité est que Markdown est très simple et peut être appris en moins d'une heure. Dans les sections suivantes, nous expliquerons un peu chacune des choses de la liste précédente.

### En-tête de chaque fichier

Voici un exemple d'en-tête à ajouter :

```
---
title: "Qur'an — 1.  al-Fatihah: The Opening"
description: 
published: true
date: 2024-01-10T13:55:38.362Z
tags: book, Islam
editor: markdown
dateCreated: 2024-01-10T13:55:38.362Z
---
```
Il doit être copié tel quel ici et remplacer uniquement les valeurs qui viennent après les deux points. Il est préférable que le titre soit mis entre guillemets et soit formé à partir du titre du livre et séparé par un trait d'union du titre du chapitre, y compris son numéro.

Il n'est pas nécessaire de mettre quoi que ce soit dans la description.

La date de création et la date actuelle doivent être la date de création du fichier. L'heure n'est pas pertinente.

Dans _tags_, vous devez mettre les balises, séparées par des virgules, qui ont été établies pour ce livre. Une liste complète des balises utilisées sur Urantiapedia est disponible ici : [Tags sur Urantiapedia](https://github.com/JanHerca/urantiapedia/blob/master/docs/tags.md?plain=1). Ils peuvent être laissés vides car il est très rapide de les remplir d'un seul coup dans tous les fichiers du livre. Voici quelques recommandations :
- Les étiquettes doivent être **obligatoires en anglais**. L'option de balises traduites n'est actuellement pas disponible dans [Wiki.js](https://js.wiki/), le logiciel utilisé par Urantiapedia.
- L'étiquette n'a pas d'importance si elle est en majuscule ou en minuscule. `book` et `Book` sont la même balise. En fait, ils sont tous affichés en minuscules sur Urantiapedia : [Recherche par tags](https://urantiapedia.org/t). Toutes les balises existantes sont également affichées sur cette page.
- Au moins tous les fichiers d'un livre doivent avoir la balise `book` indiquant qu'il s'agit d'un contenu de bibliothèque.
- Au moins, il doit porter une étiquette de la religion à laquelle appartient le livre : `Judaism`, `Christianity`, `Islam`, `Buddhism`, `Hinduism`, `Taoism`, `Bahai`, `Shikhism`, `Shintoism`.
- Pour les livres bibliques et extra-bibliques, de nombreuses balises ont été créées telles que `Bible`, `Apocrypha OT`, `Apocrypha NT`, `Deuterocanon OT`, `Deuterocanon NT` et autres.
- Si une balise n'existe pas et que vous souhaitez l'ajouter, ajoutez-la simplement à l'en-tête de n'importe quel fichier et cette balise sera créée.

### Marquage des sections

Si un chapitre comporte des sections, elles doivent être marquées comme suit :

```
## Les Sept Cieux

### Le Premier Ciel

### Le Deuxième Ciel
```

Les sections de premier niveau seront toujours marquées « ## », les sections de niveau suivant « ### », et ainsi de suite. Il n’est pas très pratique d’utiliser plus de quatre niveaux même si le livre le fait. Comme vous pouvez le constater, nous n'utilisons pas de sections avec la marque « # » car elles créent alors des titres de section trop grands.

### Corriger les paragraphes

Un paragraphe est une ligne dans le fichier Markdown et doit avoir une ligne vide avant et après. Il faut veiller à ce que cela se produise dans chaque paragraphe. Dans le cas où le texte est poétique, les vers des strophes peuvent être conservés ensemble et n'avoir qu'une ligne blanche avant et après la strophe.

### Indication des versets et lien

Dans les livres qui ont une numérotation des versets dans chaque chapitre, cela doit être inclus avant chaque paragraphe.

Par exemple, dans le premier chapitre du livre [«Armenian Infancy Gospel»](/es/Bible/Armenian_Infancy_Gospel) :

```
<span id="v1"><sup><small>1</small></sup></span>  En aquel tiempo, un hombre llamado Joaquín salió su casa, llevando consigo sus rebaños y sus pastores, y fue al desierto, donde fijó su tienda. ...
<span id="v2"><sup><small>2</small></sup></span>  Y, cuando se acabaron los cuarenta días de ayuno, advino el ángel del Señor, y, colocándose ante Joaquín, le dijo: Joaquín, el Señor ha oído tus plegarias, y ha atendido tus súplicas. ...
```

Comme vous pouvez le constater, l'indication suit toujours ce modèle :

`<span id="vXXX"><sup><small>XXX</small></sup></span>` et deux espaces espaces derrière pour donner une certaine séparation. `XXX` peut être un chiffre, une lettre, ou tout autre élément court qui différencie clairement chaque verset et constitue un mode commun utilisé pour chaque livre.

> Une astuce très utile pour ajouter les indicateurs est de mettre juste le numéro devant chaque paragraphe avec deux espaces après, puis de faire un remplacement dans tous les fichiers à l'aide d'expressions régulières. Rechercher ce `^(\d+)  ` et le remplacer par ce `<span id="v$1"><sup><small>$1</small></sup></span>  `.
{.is-info}


### Gras et italique

Ajouté comme indiqué :

```
Il s'agit d'un texte dans un paragraphe *avec quelques italiques*.

Il s'agit d'un **nouveau paragraphe** qui contient quelque chose en gras.

Vous pouvez également utiliser des parties basses pour afficher _italics_ ou __bold__.
```

Comment peut-on verser un astérisque ou un guion signifie italique, et deux signifie gras.

## Citations

Si l'auteur cite un texte, il doit resaltarse cette citation comme sigue:

```
Comme le disait déjà le grand Sénèque :

> « Il n'y a pas de vent favorable pour celui qui ne sait pas où il va. »
```

Ajoutez simplement la marque `>` et séparez la citation par un espace.

Si la cita es extensa y tiene varios paraparas se puede poner así :

```
Cicéron le commente à plusieurs endroits :

> Mais afin que vous puissiez voir d'où toute cette erreur née est le plaisir de ceux qui accusent et louent la douleur, je j'ouvrirai tout, et c'est précisément ce qui, de ce découvreur de la vérité et en tant qu'architecte d'une vie heureuse, j'expliquerai ce qui a été dit.
> 
> Mais en effet, nous accusons tous deux et avec une juste haine nous amenons ceux qui le méritent, qui sont adoucis et corrompus par la flatterie des plaisirs présents, aveuglés par l'avidité des douleurs et des ennuis qu'ils sont sur le point d'éprouver, et qui n'y pourvoient pas.
```

Observez que nous mettons un `> ` avec un espace derrière chaque ligne de séparation du paragraphe.

### Marques de saut de page

Si le livre n'utilise pas de versículos, nous avons besoin d'un mécanisme pour pouvoir se référer à une position du texte dans chaque chapitre. Une option peut être utilisée pour utiliser les marques de la page, et c'est ce qui se passe, une indication de là où le livre original est placé sur une autre page

La marque de la page doit inclure entre les mots qui se trouvent sur une autre page comme la suivante :

```
Et l'ange du Seigneur, apparut à Éléazar, le grand prêtre, dans une vision similaire, lui dit : Voici, Jojakim vient vers toi avec des offrandes. Il reçoit ses dons religieusement et selon la loi, comme il convient. Parce que le Seigneur a entendu vos prières et a exaucé vos <span id="p18">[<sup><small>p. 18</small></sup>]</span> demande. Et le Grand Prêtre se réveilla de son sommeil, se leva et rendit grâce au Très-Haut, en disant : Béni soit l'Éternel, le Dieu d'Israël, car il ne dédaigne pas ses serviteurs qui l'implorent. Alors l'ange apparut une seconde fois à Anne et lui dit : Voici, ton mari arrive. Lève-toi, va le chercher et reçois-le avec joie. Et Anna se leva, enfila sa tenue de mariée et partit chercher son mari. Et quand il le vit, il se prosterna devant lui avec joie et lui jeta les bras autour du cou.
```

Vous pouvez voir que la marque est : `<span id="p18">[<sup><small>p. 18</small></sup>]</span>`.

Comme cette tâche peut être fastidieuse, un moyen de la rendre plus simple peut être de placer une marque alternative plus courte, telle que `ppp18` (`ppp` est un texte dont nous savons qu'il n'arrivera jamais), pour continuer avec l'exemple précédent. Ensuite, vous pouvez rechercher ces marques et les remplacer automatiquement par les marques définitives comme nous l'avons indiqué dans un autre exemple ci-dessus. Autrement dit, cela serait également valable :

```
Et l'ange du Seigneur, apparut à Éléazar, le grand prêtre, dans une vision similaire, lui dit : Voici, Jojakim vient vers toi avec des offrandes. Il reçoit ses dons religieusement et selon la loi, comme il convient. Parce que le Seigneur a entendu leurs prières et a fait leur demande ppp18. Et le Grand Prêtre se réveilla de son sommeil, se leva et rendit grâce au Très-Haut, en disant : Béni soit l'Éternel, le Dieu d'Israël, car il ne dédaigne pas ses serviteurs qui l'implorent. Alors l'ange apparut une seconde fois à Anne et lui dit : Voici, ton mari arrive. Lève-toi, va le chercher et reçois-le avec joie. Et Anna se leva, enfila sa tenue de mariée et partit chercher son mari. Et quand il le vit, il se prosterna devant lui avec joie et lui jeta les bras autour du cou.
```

### Images

Les images doivent être incluses comme ceci :

```
<figure id="Figure_01" class="image urantiapedia">
<img src="/image/book/Islam/Songs_of_Kabir/image_01.png">
<figcaption><em><b>Figure 1.</b> Dieu est en nous</em></figcaption>
</figure>
```

Vous pouvez copier l'exemple précédent où une image est nécessaire et remplacer uniquement la suivant :
- Là où il est indiqué `id="Figure_01"` doit être un identifiant unique pour l'image. Vous pouvez en mettre n'importe lequel à condition qu'il n'y en ait pas deux identiques dans le même fichier de chaque chapitre.
- Là où il est écrit `src="..."`, il doit y avoir un chemin vers le fichier image. Le chemin doit toujours commencer par `/image/`, qui est l'endroit où se trouvent toutes les images, et derrière lui doit se trouver un chemin identique à celui que nous avons pour le livre. Autrement dit, en suivant l'exemple, puisque le livre se trouve dans `/es/book/Islam/Songs_of_Kabir`, les images de ce livre doivent être dans `/image/book/Islam/Songs_of_Kabir`. Le nom de fichier de chaque image peut être court, en indiquant toujours l'extension (`.png` ou `.jpg`). Il est recommandé que le nom du fichier ne contienne pas d'espaces, de caractères spéciaux, d'apostrophes ou d'accents. 
- Si l'image a une légende, elle doit être placée à l'intérieur de la balise `figcaption`.
- Si vous souhaitez aligner l'image à gauche, au centre ou à droite, vous devez remplacer `class="image urantiapedia"` par `class="image urantiapedia image-style-align-left"`, `class="image urantiapedia image-style-align-center"` et `class="image urantiapedia image-style-align-right"`, respectivement. Quelques paragraphes ci-dessous, vous devez ajouter une ligne avec `<br style="clear:both;"/>` afin que l'alignement n'affecte plus le placement du texte.

Étant donné que cette tâche d'inclusion d'images peut être fastidieuse, vous pouvez utiliser une astuce comme celles mentionnées précédemment. Si aucune image ne doit avoir de pied de page, vous pouvez mettre quelque chose comme `fff18` (ou `fffl18`, `ffffc18`,`fffr18`) afin de simplifier le fait qu'il existe une image avec le numéro 18 (et même alignée).

### Références aux images

Lorsque le texte mentionne une image, c'est une bonne idée de placer un lien interne vers cette image. Par exemple, en continuant avec l'image ci-dessus, pour inclure une référence, ce serait comme ceci :

```
... est l'une des chansons vedettes de cette chanson. Kabir a minimisé à la fois les rituels et l'austérité (voir [Figure 1](#Figure_01)), enseignant que Dieu ne se limite pas aux mosquées, aux temples ou aux lieux de pèlerinage.
```

La syntaxe `[Figure 1](#Figure_01)` est le moyen d'ajouter des hyperliens dans Markdown. Le texte affiché est indiqué entre parenthèses, et le chemin web est indiqué juste derrière entre parenthèses. Lorsque l'image est dans le même chapitre, mettez simplement `#` puis l'identifiant. Si l'image se trouve dans un autre chapitre, la syntaxe devrait ressembler à `[Figure 1](/image/book/Islam/Songs_of_Kabir/3#Figure_01)`. Dans cet exemple, nous indiquons la figure 1 qui se trouve au chapitre 3.

### Notes de bas de page

Si le livre comporte des notes de bas de page, ou des notes de fin de chapitre, ou des notes globales qui apparaissent à la fin du livre, mais dont une marque est placées dans le livre par un numéro ou une indication, ces annotations deviendront toujours des notes de bas de page de chaque chapitre, comme suit :

```
La chose la plus importante est que Dieu est en nous, et c'est là que nous devons regarder si nous cherchons à connaissez-le.[^1]

. . .

## Notes

[^1] : Maître, David. dit Kabir. Traduit par Tagore, Rabindranath. Éditions Trois Pigeons. ISBN979-8-6501-4828-9.
```

Les notes de bas de page sont toujours marquées par un numéro consécutif commençant par 1 et sont écrites sous la forme `[^1]`, `[^2]`, etc. Le caractère `^` est tapé sur le clavier en utilisant `Shift + [` puis en appuyant sur espace.

La note de bas de page comporte deux parties : l'une est l'indication, qui est placée directement dans le texte, et l'autre est la note de bas de page elle-même, qui est placée à la fin, derrière tout le reste, du fichier, chaque note avec sa marque , puis deux points, puis le texte et chaque note séparée les unes des autres par une ligne vide. Il est pratique de mettre une section `## Notes` pour les notes, qui, comme cela a été dit, devrait toujours se trouver à la fin de tout, y compris les liens de navigation.

### Liens de navigation

Ces liens se trouvent dans un simple tableau au début et à la fin de chaque chapitre, et permettent de passer facilement d'un chapitre à l'autre, ou d'accéder à l'index. Ils devraient ressembler à l'exemple suivant :

```
<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir/1">
          <span class="mdi mdi-arrow-left-drop-circle"></span><span class="pl-2">Capítulo I — Dios está dentro de nosotros</span></a>
        </td>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir#índice">
          <span class="mdi mdi-book-open-variant"></span><span class="pl-2">Índice </span></a>
        </td>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir/3">
          <span class="pr-2">Capítulo III — La insuficiencia del lenguaje</span><span class="mdi mdi-arrow-right-drop-circle"></span></a>
        </td>
      </tr>
    </tbody>
  </table>
</figure>
```

Comme dit précédemment, la dernière chose dans le fichier doit toujours être la section notes, s'il y a est, même en dessous de ces liens de navigation.

## Création d'un fichier de couverture

La couverture, comme déjà mentionné, se trouve dans un fichier Markdown du même nom que le dossier dans lequel sont inclus les chapitres. Par exemple : le dossier `/output/wikijs/en/Bible/Genesis` contient les 50 chapitres de Genesis, et le fichier `/output/wikijs/en/Bible/Genesis.md` est la couverture de Genesis. De même, le dossier `/output/wikijs/en/book/Islam/Quran` contient les 114 sourates ou chapitres du Coran, et le fichier `/output/wikijs/en/book/Islam/Quran.md` la page de garde. .du livre du Coran.

La page de garde est un fichier Markdown qui doit contenir ces éléments :
- Un en-tête dans chaque fichier.
- Couverture du livre au format SVG.
- (Facultatif) Sections à l'intérieur de la couverture.
- (Facultatif) Index.
- Liens externes (à partir desquels il a été téléchargé).

L'en-tête doit suivre la même syntaxe que celle déjà indiquée pour les chapitres.

La couverture doit être au format SVG.

Voici la couverture de Genèse :

```
<div class="urantiapedia-book-front urantiapedia-book-bible">
<svg xmlns="http://www.w3.org/2000/svg"
	width="102.6mm" height="136.8mm"
	viewBox="0 0 102.6 136.8" version="1.1">
	<g transform="translate(-7,-5)">
		<rect width="9.6" height="136.8" x="7" y="5" />
		<rect width="96.9" height="136.8" x="17" y="5" />
		<text style="font-size:5px" x="61" y="22">LA BIBLIA</text>
		<text style="font-size:4px" x="61" y="125">Biblia Reina Valera, 1960</text>
		<text style="font-size:9px" x="61" y="60">Génesis</text>
	</g>
</svg>
</div>
```

Voici la couverture du Coran :

```
<div class="urantiapedia-book-front urantiapedia-book-islam">
<svg xmlns="http://www.w3.org/2000/svg"
	width="102.6mm" height="136.8mm"
	viewBox="0 0 102.6 136.8" version="1.1">
	<g transform="translate(-7,-5)">
		<rect width="9.6" height="136.8" x="7" y="5" />
		<rect width="96.9" height="136.8" x="17" y="5" />
		<text style="font-size:4px" x="61" y="130">M.M. Pickthall</text>
		<text style="font-size:3px" x="61" y="135">The Meaning of the Glorious Quran, 1938</text>
		<text style="font-size:9px" x="61" y="60">Qur'an</text>
	</g>
</svg>
</div>
```

Toutes les couvertures de tous les livres prévus sont déjà générées car elles sont affichées dans les index de chaque étagère. Par conséquent, allez simplement dans l'index des [étagères de la Bibliothèque Urantiapedia](/fr/index/books), entrez dans l'étagère souhaitée et copiez la couverture nécessaire à partir de là (le contenu dans la balise `<svg> ...</svg >`) en le copiant comme dans les exemples ci-dessus.

Si le livre comporte une description, des dédicaces ou tout autre contenu typique des pages d'introduction, il sera ajouté à ce fichier de couverture, en utilisant des sections Markdown et un formatage approprié.

Pour les textes que vous souhaitez centrer, vous pouvez utiliser cette syntaxe comme dans l'exemple suivant :

```
<p style="text-align:center;">
<b>LE SIGNIFICATION DU GLORIEUX CORAN</b><br>
par Mohammed Marmaduke Pickthall<br>
Hyderabad-Deccan : Government Central Press [138]
</p>
```

Si l'index n'est pas très complet, il peut être inclus dans une section sur la page de titre. Alternativement, vous pouvez le placer dans votre propre fichier appelé « Index.md » dans le dossier du chapitre, puis inclure un lien vers celui-ci sur la couverture.

## Soumettre des demandes de modification

Ceci complète toutes les choses à garder à l'esprit lors de l'ajout de livres religieux à la bibliothèque Urantipedia. Une fois ces modifications apportées au projet GitHub, une demande de modification doit être effectuée comme détaillé dans les manuels des utilisateurs [Administrateurs](/fr/help/admin), [Rédacteurs en chef](/fr/help/github ) ou [Assistants rédacteurs](/fr/help/github_assistant).

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_religious_books_catalog">Créer un catalogue de livres de toutes les religions</a></td>
        <td><a href="/fr/help">Index</a></td>
        <td><a href="/fr/help/github_sourcebooks_catalog">Création d'un catalogue de livres «source»</a></td>
      </tr>
    </tbody>
  </table>
</figure>