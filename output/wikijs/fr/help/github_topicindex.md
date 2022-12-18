---
title: Traduction et révision de l'index des rubriques
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
        <td><a href="/fr/help/github_paramony">Traduction de Paramony</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_bible">Obtenir la Bible</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Ici sont décrites les étapes nécessaires pour traduire et réviser l'*Index des sujets* dans n'importe laquelle des langues d'*Urantiapedia*. C'est une tâche accomplie par les "rédacteurs en chef".

L'*Index des sujets* est composé d'une collection de fichiers TXT dérivés de l'annexe de l'édition de la *Communauté Urantia* du *Livre d'Urantia* ([Index des sujets](https://urantia-book.org/urantiabook/topical_index/ index.htm)).

> IMPORTANT : pour exécuter cette tâche, il y a actuellement un développement en cours dans *Urantiapedia Tools*, appelé *Topic Index Editor*, qui rend les éditions plus faciles et moins sujettes aux erreurs. Consultez la section ci-dessous.

Pour créer un nouveau *Topic Index* pour une autre langue, commencez par la version anglaise de *Topic Index* trouvée dans `input/txt/topic-index-en`. Faites une copie de ce dossier et changez le nom en langue cible.

Le dossier contient un fichier pour chaque lettre de l'alphabet (`a.txt`, `b.txt`, etc.) plus un fichier `_.txt` qui contient les entrées commençant par un chiffre numérique. L'ordre de référence des rubriques est toujours celui de l'anglais, de sorte que chaque fichier contient les rubriques dont la lettre initiale en anglais correspond à cette lettre. Par exemple, le sujet espagnol «Espíritu Infinito» doit être trouvé dans le fichier `i.txt` car le sujet anglais commence par I («Infinite Spirit»).

Le format est légèrement similaire au format YAML (https://en.wikipedia.org/wiki/YAML) mais simplifié pour être très facile à modifier.

> IMPORTANT : ce fichier contient des onglets et doit être modifié avec un éditeur de texte prenant en charge le rendu des onglets. Les éditeurs recommandés sont : Visual Studio Code (https://code.visualstudio.com/), Notepad++ (https://notepad-plus-plus.org/) ou Sublime Text (https://www.sublimetext.com/ ).

## Index des sujets Format TXT

Voici un extrait du fichier `a.txt` :

```
<__________________________________________________________________________________
<
< Un
< Urantia Book Uversa Press Topical index converti en fichier texte
< Chaque entrée a une ligne vide précédente
< Entrée = Nom | Réfs | Voir aussi | Catégorie | OK (= révisé)
< Une entrée peut avoir une ou plusieurs sous-entrées (= les lignes après l'entrée)
< Une sous-entrée peut avoir des sous-sous-entrées avec des onglets et ainsi de suite
< Aide : https://urantiapedia.org/fr/help/github_topicindex
<__________________________________________________________________________________

ABC le premier ; ABC le premier | (77:8.2) | | PERSONNE | D'ACCORD
c'est le nom du premier médian secondaire du premier sous-groupe de huit sous-groupes qui existe. Chaque sous-groupe est composé de 248 frères et sœurs, enfants des mêmes parents (77:6.4)

hypothèses a priori | | doctrines | | D'ACCORD
la causalité, le devoir et le culte constituent les hypothèses a priori qui permettent à l'homme de fonctionner comme une personnalité rationnelle et consciente de soi (16: 6.10)

Aaron (Ancien Testament); Aaron | | filles d'Aaron | PERSONNE | D'ACCORD
Aaron était le frère aîné de Moïse et celui qui a joué dans l'événement du veau d'or, une idole avec laquelle les Israélites ont décidé de représenter Yahweh.
Pierre parle de lui dans une prédication (146:1.1)
> https://fr.wikipedia.org/wiki/Aaron

...
```

Chaque dossier est composé de :
- Un en-tête qui explique son contenu dont les lignes commencent par `<`. Ces lignes sont ignorées lors du traitement du fichier.
- Une liste de sujets. Chaque rubrique est précédée d'une ligne blanche et contient plusieurs lignes :
    - La première ligne est un court tableau avec la description du sujet et les valeurs ou cellules séparées par `|` (barre verticale). Les valeurs sont :
        - Nom du sujet. Si un ou plusieurs noms séparés par `;` apparaissent derrière le nom, ces noms sont des alias qui seront recherchés dans le texte du *Livre d'Urantia* comme une forme alternative au nom du sujet. Le prénom sera toujours celui utilisé comme titre de la page dans *Urantiapedia*. Le reste des noms séparés par `;` seront les noms ou alias qui, ajoutés au premier, seront recherchés dans *Le Livre d'Urantia* pour créer des liens vers ces sujets.
        - Références générales ou globales au *Livre d'Urantia* du sujet entier. Cette valeur peut être vide. Ces liens seront affichés sur *Urantiapedia* comme une section supérieure «Voir aussi» avec une liste de liens.
        - Liens vers d'autres sujets. Cette valeur peut être vide. Représente un ou plusieurs sujets liés au sujet actuel. Ils apparaîtront en bas de la page qui sera générée, dans la liste de la section «Liens». S'il existe plusieurs liens, ils seront séparés par `;`. Il est possible d'ajouter des liens vers des sections spécifiques à l'intérieur d'un sujet en utilisant `:`. Par exemple : «baptême : baptême de Jésus» est un lien qui pointe vers la page de sujet «baptême» et à l'intérieur de celle-ci vers la section sur le baptême de Jésus.
        - Catégorie de sujet. Cette valeur peut être vide. Il existe cinq catégories : les personnes (`PERSON`), les lieux (`PLACE`), les ordres d'êtres (`ORDER`), les religions (`RELIGION`) et les races (`RACE`). Ces catégories permettent de ne travailler que dans l'une d'entre elles pour une meilleure séparation des tâches et de générer des index.
        - Statut. Les «rédacteurs en chef» doivent écrire «OK» lorsqu'ils ont terminé leur tâche de révision d'un sujet. Si le sujet est toujours en attente d'examen, il sera vide.
    - Les lignes suivantes, si elles existent, sont le contenu du sujet. Ces lignes sont également des tableaux courts qui peuvent ou non avoir des valeurs séparées par `|` (barre verticale). Il existe deux types de tableaux :
        - Tableau d'une seule cellule sans `|` (barre verticale) : il contiendra un texte, le texte d'une ligne de la page de *Urantiapedia* et après le texte, entre parenthèses, si elles existent, une ou plusieurs références aux paragraphes du *Livre d'Urantia*.
        - Tableau de deux cellules séparées par `|` (barre verticale), la première avec le même contenu qu'un tableau à une seule cellule, et la seconde avec une liste de liens vers d'autres sujets, séparés par `;`.
    - Quelques lignes facultatives à la fin du sujet qui commencent par `>`. Ceux-ci seront des liens vers d'autres pages Web et apparaîtront dans une section «Liens externes».

Les règles de construction pour chaque ligne dans les rubriques autres que la première sont les suivantes :
- Ils n'ont pas besoin de commencer par une majuscule ni de se terminer par un point. Le logiciel mettra automatiquement en majuscule et se terminera par un point chaque phrase lors de la conversion des fichiers au format Wiki.js.
- Le texte de chaque ligne peut être une seule phrase ou plusieurs. S'il y en a plusieurs alors des points intermédiaires ou des lettres majuscules doivent apparaître car seuls le début et la fin des lignes sont corrigés.
- Le texte de chaque ligne ne doit pas contenir de parenthèses car ces caractères sont réservés aux références du *Livre d'Urantia*.
- Chaque ligne peut avoir des caractères de tabulation au début. Chaque caractère de tabulation indique que ces lignes seront contenues dans celle immédiatement au-dessus sans tabulation, qui servira de titre de section ou de sous-section.
- Les lignes peuvent commencer par `*` ou `#` ou un mélange de ces éléments pour créer des listes non numérotées, numérotées et mixtes. Voir rubrique ci-dessous.

Exemple d'extrait de sujet (fichier `a.txt`):
```
apôtres de Jésus | (138) (145:4.1) (150:4) (158:0.2) (158:2.5) (172:5) (173:5.6) (184:2.2) (193:3.2) | apostolat | PERSONNE | D'ACCORD
Les apôtres étaient le groupe de douze disciples avec lesquels Jésus a commencé sa prédication
leurs noms:
* André | André
* Simon Pierre | Simon Pierre
* James Zébédée | James Zébédée
* Jean Zébédée | Jean Zébédée
* Philippe | Philippe (Apôtre)
* Nathanaël | Nathanaël (Apôtre)
* Matthieu Lévi | Matthieu Lévi
* Thomas Didyme | Thomas Didyme
* James Alphée | Jumeaux Alphée
* Judas Alphée
* Simon Zélotes | Simon Zélotes
* Judas Iscariote | Judas Iscariote
* D'autres connus étaient Matthias et Paul, bien que le dernier n'ait jamais rencontré Jésus | Mathias ; Paul
Le Livre d'Urantia donne des descriptions personnelles détaillées de chacun (139)
la plupart étaient mariés et certains avaient plusieurs enfants (138:9.3)
tous sauf les jumeaux Alphaeus étaient diplômés des écoles de synagogue (139:0.3-4)
la plupart étaient des pêcheurs rudimentaires (140 : 8,20)
ils n'étaient pas tous égaux en termes de scolarité (139:0.3-4)
beaucoup portaient des épées (171:4.1) (172:0.3) (172:2.1) (172:5.2)
beaucoup ont été martyrisés | martyrs
organisme
	leur organisation est détaillée dans Le Livre d'Urantia (138:10)
	Andrew était le chef (139:1.2)
	Pierre, Jacques et Jean étaient les aides personnelles de Jésus (138:10.3)
	Philippe était l'intendant apostolique (139:5.3)
	Nathanaël s'est occupé des familles des apôtres (139:6.7)
	l'itinéraire était géré par Thomas (139:8.5)
	Matthew était un collecteur de fonds (139:7.2)
	Simon était en charge de la diversion et de la relaxation (139:11.2)
	Les jumeaux Alphaeus étaient les garçons de courses; ceux qui prenaient soin des multitudes (139:10.3)
	Judas Iscariot était trésorier (139:12.3)
	Matthias a été choisi pour prendre la place de Judas (192:0.2)
> https://en.wikipedia.org/wiki/Apostles_in_Christianity
```

Dans l'extrait précédent, nous pouvons voir:
- Il s'agit du contenu lié au sujet [apôtres de Jésus](/en/topic/apostles_of_Jesus). Allez sur cette page pour voir le résultat de ce texte une fois converti en *Wiki.js*.
- En haut de la page résultante, une indication est ajoutée disant «Voir aussi» suivi des références trouvées dans l'en-tête du sujet.
- Notez que dans l'en-tête le sujet a un lien vers `apostolat`, et aussi les lignes avec la liste des apôtres ont un `|` et des liens vers les sujets des apôtres. Ces liens apparaissent dans la section «Liens» ajoutée à la fin.
- Le type de sujet est relatif à des personnes ('PERSON'), en l'occurrence les apôtres de Jésus.
- Notez que la marque «OK» est présente, ce qui signifie que ce sujet a été révisé pour l'anglais.
- Vérifiez que pour faire une liste non ordonnée les lignes doivent commencer par `*`.
- Notez que de nombreuses lignes ne commencent pas en majuscule ou ne se terminent pas par un point. Cela est corrigé lors de la création de la page.
- Le sujet créera une section appelée «Organisation» car en dessous de cette ligne, les lignes suivantes ont un caractère de tabulation au début.
- Une ligne comme «leurs noms :» est une ligne avec une seule cellule et ne contient aucune référence.
- Une ligne comme 'Philip était l'intendant apostolique (139:5.3)' est une ligne avec une seule cellule et contient une référence.
- Une ligne comme `beaucoup ont été martyrisés | martyrs` est une ligne avec deux cellules, donc la deuxième cellule doit être des liens vers d'autres sujets. Pour utiliser plus de sujets, ils peuvent être séparés par `;`, comme ceci : `beaucoup ont été martyrisés | martyrs; Simon Pierre ».
- Une ligne comme `Matthieu était un collecteur de fonds (139:7.2) | Matthew Levi` (qui n'est pas dans l'exemple) serait une ligne avec deux cellules dans lesquelles la première cellule a des références et la deuxième cellule est un lien.
- Notez que les liens externes vers un sujet sont ajoutés à la fin du sujet et utilisez le caractère `>` au début de chaque ligne. L'exemple ci-dessus montre comment créer un lien vers Wikipedia anglais sur les apôtres. Vous pouvez ajouter plusieurs liens, chacun sur une ligne, tant qu'ils commencent par le caractère `>` et suivent un espace vide avant l'URL.

> IMPORTANT : dans le texte d'une ligne, les parenthèses `(` `)` doivent être évitées car elles sont réservées uniquement pour définir des références au *Livre d'Urantia*. Si vous devez dire quelque chose entre parenthèses, remplacez le texte par un texte utilisant `,` comme séparation.

## Noms et alias

Le premier nom dans l'en-tête est le titre du sujet dans la page convertie. Il est important de s'assurer que ce nom apparaît dans autant de paragraphes référencés que possible. Parfois, un prénom apparaît dans *Le Livre d'Urantia* dans de nombreuses expressions différentes. Par exemple, vérifiez l'en-tête suivant :

```
absolue ; force cosmique; force cosmique; puissance spatiale; Puissance spatiale ; énergie spatiale; espace-énergie; force mère de l'espace; force spatiale ; charge de force de l'espace; charge de force universelle de l'espace; couverture de force; Force primordiale ; Force primordiale ; force spatiale ; force de l'univers ; charge d'espace de force universelle; charge de force de l'espace; charge de force ; frais d'alimentation ; force cosmique; force primordiale | | | | D'ACCORD
```

Cet en-tête concerne «absoluta», l'une des manifestations de l'énergie dans l'univers. Mais dans *Le Livre d'Urantia* reçoit beaucoup de variations dans le nom. Tous ont été ajoutés après le nom principal en les séparant par `;`. Ce travail doit être fait et revu pour tous les *Topic Index*. Si le nom apparaît dans le livre en majuscules et en minuscules, les deux variations doivent être ajoutées dans la liste des alias pour s'assurer que les liens corrects sont créés.

* Topic Index Editor * est un outil qui aide beaucoup à vérifier cela. Voir rubrique ci-dessous.


## Listes

Pour créer des listes non ordonnées dans le fichier de rubrique, utilisez le caractère `*` au début de chaque ligne. Pour les listes ordonnées, utilisez `#`. Pour les listes mixtes, utilisez une combinaison des deux. Quelques exemples:

```txt
Alexandre le Grand; Alexandre | | | PERSONNE | D'ACCORD
Faits sur Alexandre le Grand mentionnés dans Le Livre d'Urantia
    * sa campagne au Pendjab a introduit l'héritage aryen en Inde (79:4.3)
    * son mausolée royal à Alexandrie a été visité par Jésus (130:3.4)
    * Les Samaritains ont aidé Alexandre et cela a provoqué la colère des Juifs contre eux (143:4.2-3)
    * Alexandre répandit la civilisation hellénistique au Moyen-Orient (195 :1.7-10)
```
Vérifiez le résultat ici : [Alexandre le Grand](/en/topic/Alexander_the_Great)

```
êtres à double origine | | Fils de Dieu | COMMANDE |
ordres
    * A. ordres décroissants
    *# Fils créateurs
    *# Fils Magistraux
    * # Étoiles brillantes et du matin
    *# Père Melchizédeks
    *# Fils de Melchisédek
    *# Fils Vorondadeks
    *# Fils Lanonandek
    * # Étoiles brillantes du soir
    *# Archanges
    *# Porteurs de vie
    * # Aides universelles non révélées (30: 1.41)
    *# Fils de Dieu non révélés (30:1.42)
    * B. commandes fixes
    *# abandonneurs
    *# susace
    *# univitatia
    *# spironga
    *# non révélé (30:1.48)
    * C. ordres croissants
    *# mortels ascendants
    *# Mortels fusionnés avec le Fils
    * # mortels fusionnés avec l'esprit
    *# médians traduits | médians
    *# ascendeurs non révélés (30:1.54)
```
Vérifiez le résultat ici : [êtres à double origine](/en/topic/dual-origin_beings)

Les listes n'ont pas besoin d'être sous un en-tête de section et d'avoir des onglets au début. Nous avons vu un exemple plus haut avec la page des apôtres. Dans ce cas, la liste est créée sous la ligne précédente.

## Synchronisation dans toutes les langues

Il est important de synchroniser tous les fichiers dans toutes les langues, afin que les mêmes lignes des mêmes sujets se trouvent au même endroit dans tous les fichiers. Lors de l'ajout de contenu à un fichier dans une langue, il est important de s'assurer que le même contenu se trouve également sur le même numéro de ligne dans toutes les autres langues. Sinon, la conversion en Wiki.js échouera.

Il est recommandé d'éditer les fichiers côte à côte dans un éditeur de texte qui permet d'ouvrir plusieurs fichiers en parallèle, comme VS Code. Une extension VS Code intéressante à installer est *Sync Scroll*, qui permet de faire défiler plusieurs fichiers en même temps de manière synchrone.

## Qu'est-ce que les contributeurs devraient changer ?

Pour les «rédacteurs en chef», il n'y a pas de restrictions particulières quant à ce qu'ils peuvent modifier dans les fichiers d'index thématiques. Ils doivent suivre les règles précédemment expliquées, mais ils peuvent apporter toute modification nécessaire.

Pour les «assistants rédacteurs», comme ils suivent un processus plus simple, ils doivent respecter certaines restrictions. Les «éditeurs adjoints» NE DOIVENT PAS modifier les éléments suivants :
- Les sujets qui ne sont pas examinés et qui n'ont pas la marque «OK». Ils doivent être laissés intacts. Peut-être y a-t-il encore du travail à faire dessus. Tant qu'un sujet n'est pas révisé par les « rédacteurs en chef », aucun travail ne doit y être effectué par les « éditeurs adjoints ».
- Les références globales ou la catégorie en première ligne dans la rubrique.
- Les références au *Livre d'Urantia* ou les références à d'autres sujets qui apparaissent en lignes dans les sujets.
- L'ordre des lignes.

Si un «éditeur adjoint» trouve une erreur dans le contenu précédent, des notes doivent être prises à un autre endroit pour les envoyer en dehors des fichiers de sujet.

Le seul contenu que les «éditeurs adjoints» doivent modifier est celui-ci :
- Le nom ou les pseudonymes trouvés dans la première ligne des sujets si la langue de travail n'est pas l'anglais et l'espagnol. Les noms anglais et espagnol sont déjà passés en revue dans ces langues.
- Le texte à l'intérieur de chaque ligne de sujets.
- Les URL des pages de Wikipédia.

Lors de l'utilisation de Visual Studio Code pour modifier l'index des rubriques, les «éditeurs adjoints» doivent se concentrer sur deux types de tâches, selon la langue :
- Pour l'anglais et l'espagnol, juste relecture du contenu dans les textes.
- Pour les autres langues, traduction des textes. L'«éditeur» doit créer une copie d'un index thématique existant dans n'importe quelle autre langue, de préférence l'anglais, et maintenant traduire les textes aussi rapidement que possible à l'aide d'outils de traduction.

## *Éditeur d'index de sujets*

Le *Topic Index Editor* est un outil en cours de développement, mais dans son état actuel, il aide dans certaines tâches de révision et d'édition de l'*Topic Index*. Comme ce logiciel doit avoir été installé et complique la configuration, il n'est pas à la portée des «assistants éditeurs», mais des «chefs éditeurs». Vérifiez [Configuration du projet GitHub](/fr/help/github_setting).

Pour y accéder :
1. Ouvrez *Urantiapedia Tools* en appuyant sur F5 dans VS Code avec le projet ouvert.
2. Deux fenêtres s'ouvrent. ignorez l'instance Dev Tools. Il est là pour le débogage.
3. Sélectionnez *Modifier l'index des sujets* dans le panneau latéral.

![](/image/uptools_topic_editor.png)

L'*Éditeur d'index thématique* comprend quatre zones principales :
- sur le côté gauche une liste de sujets.
- en haut des sélecteurs pour régler les langues souhaitées.
- au centre une liste du contenu du sujet, qui affiche également les messages d'erreur.
- à droite, le contenu du *Livre d'Urantia*, avec les paragraphes référencés par le sujet sélectionné.

À l'avenir, l'*Éditeur d'index de sujets* permettra d'éditer des sujets directement depuis l'application, mais actuellement la fonctionnalité qu'il fournit est la suivante :
- Charger la liste des sujets pour une langue donnée.
- Filtrer les sujets par catégorie, lettre initiale, s'ils sont révisés ou non, et s'ils comportent des erreurs ou non.
- Afficher le contenu d'un sujet.
- Afficher les paragraphes* du Livre d'Urantia* qui sont référencés par une ligne donnée dans un sujet.
- Mettez en surbrillance le nom (ou le pseudonyme) dans *Le Livre d'Urantia* pour vérifier si le nom est trouvé.
- Mettez en surbrillance la meilleure phrase dans *Le Livre d'Urantia* qui correspond à la ligne sélectionnée dans le sujet et autorisez la copie.

Pour utiliser l'*éditeur d'index thématique*, suivez ces instructions :
1. Dans le sélecteur du haut *Langue principale (à modifier)* sélectionnez la langue souhaitée. Laissez le sélecteur de langue secondaire sur anglais. Les sujets sont chargés après quelques secondes.
2. Dans le sélecteur supérieur * Lettres de sujet *, sélectionnez la lettre dans laquelle vous travaillez. Les sujets sont filtrés par cette lettre en affichant uniquement ceux qui commencent par cette lettre en anglais.
3. Sélectionnez un sujet dans la liste. La liste des lignes, s'il y en a, est remplie dans la zone de contenu du sujet. Les lignes de sujet sont répertoriées dans les deux langues sélectionnées dans les sélecteurs supérieurs afin que les deux langues puissent être comparées.
4. Sélectionnez une ligne dans la rubrique. La liste des paragraphes référencés par la ligne de sujet est remplie dans la zone de contenu du *Livre d'Urantia*.

L'une des fonctionnalités utiles de *Topic Index Editor* est qu'il affiche les erreurs trouvées dans les sujets. Par exemple, dans l'instantané ci-dessous, un lien vers un sujet inexistant a été trouvé. Maintenant, nous pouvons aller dans VS Code et vérifier le fichier avec l'erreur et le corriger.

![](/image/uptools_topic_editor_2.png)

Une autre fonctionnalité utile est que le nom du sujet est mis en surbrillance dans le texte du *Livre d'Urantia*. Par exemple, dans l'instantané sous le sujet, « fraternité de l'homme » en anglais et « hermandad de los hombres » en espagnol, a été trouvé dans le texte en anglais mais pas en espagnol. Vous pouvez vérifier et voir qu'en espagnol, le *Livre d'Urantia* dit « fraternidad de los hombres » au lieu de « hermandad de los hombres », ce qui signifie la même chose. Donc, pour résoudre ce problème, nous devons ajouter «fraternidad de los hombres» comme alias dans le sujet.

Une autre fonctionnalité utile est que la ligne courte sélectionnée, qui dit « civilisation entourée d'amour » en anglais et « civilización rodeada por el amor » en espagnol, a été trouvée dans le paragraphe du *Livre d'Urantia* qui est référencé pour la ligne de sujet. La phrase du paragraphe qui correspond le mieux à la ligne est mise en surbrillance en gras et un bouton Copier apparaît en bas. Vous pouvez utiliser ce bouton pour copier la phrase dans le presse-papiers et la coller dans VS Code, en améliorant le texte du sujet avec un texte plus explicatif.

![](/image/uptools_topic_editor_3.png)

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
        <td><a href="/fr/help/github_paramony">Traduction de Paramony</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_bible">Obtenir la Bible</a></td>
      </tr>
    </tbody>
  </table>
</figure>