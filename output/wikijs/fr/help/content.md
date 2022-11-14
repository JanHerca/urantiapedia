---
title: Contenu d'Urantiapedia
description: 
published: true
date: 2021-12-08T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/principles">Principes régissant Urantiapedia</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/phases">Jalons du projet</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Voici une explication détaillée de tous les types de contenu attendus pour *Urantiapedia*, comment y accéder, l'organiser et qui peut le modifier.

## Comment le contenu est organisé

Comme dans tout wiki de [Urantiapedia](https://urantiapedia.org), il y a des pages, chacune avec un titre et une URL uniques. Par exemple:
* https://urantiapedia.org/en/The_Urantia_Book/156 est l'URL d'une page avec l'article 156 du Livre d'Urantia en anglais.
* https://urantiapedia.org/es/article/How_big_is_Orvonton est l'URL d'une page avec un article sur Orvonton en espagnol.
* https://urantiapedia.org/ko/topic/Andrew est l'URL d'une page sur l'apôtre Andrew en coréen.

Chaque page peut être un article, un chapitre de livre, la page d'index d'un livre, un index regroupant des liens vers d'autres pages, etc. Le contenu des pages dépend de la créativité des utilisateurs et peut être modifié à tout moment en fonction des besoins, bien qu'une fois qu'une page est créée, il est recommandé de la rendre permanente et d'utiliser des redirections si nécessaire.


## Groupes d'utilisateurs

Le tableau résume les groupes d'utilisateurs à l'intérieur du Web :

Groupe | Description des utilisateurs du groupe
--- | ---
ADMIN | Utilisateur qui peut tout faire
ÉDITEUR (1) | Utilisateur qui après qu'une demande a été validée et autorisée par un utilisateur ADMIN à éditer des livres, des articles et des aides à l'étude, des diapositives, des cartes, des modèles 3D et des actifs (images, audio, vidéo).
AUTEUR (2) | Utilisateur à l'intérieur d'un groupe avec son nom qui agit en tant qu'EDITEUR mais uniquement pour une collection restreinte de livres, articles, etc. rédigés par l'utilisateur.
REVISEUR | Utilisateur qui ne peut que visualiser les pages, afficher l'historique et faire des commentaires.
UTILISATEUR | Tout utilisateur non enregistré. Uniquement pour l'affichage des pages.

(1) Aux premières étapes du projet, certains types de contenu ne peuvent être modifiés qu'à l'aide des *Urantiapedia Tools* par des utilisateurs appelés *Rédacteurs en chef*, en dehors du site Web *Urantiapedia*. Une fois que le contenu de départ est téléchargé dans chaque étape du projet, *Urantiapedia Tools* n'est plus utilisé et les utilisateurs du groupe EDITOR pourront éditer le contenu via ce site Web.

(2) AUTEUR signifie qu'il y aura plusieurs groupes de type AUTEUR, chacun contenant des utilisateurs qui sont les auteurs (ou autorisés par les auteurs) pour des pages données. Par exemple, s'il y a deux utilisateurs nommés Han Solo et Obi Wan qui veulent être auteurs, il y aura une paire ou des groupes nommés HANSOLO et OBIWAN, le premier avec l'utilisateur Han Solo, le second avec l'utilisateur Obi Wan. Le premier sera le seul utilisateur pouvant éditer des pages dans des chemins tels que `/en/article/hansolo/` (et toute autre langue autre que l'anglais), `/en/slides/hansolo`, etc. D'autre part, l'utilisateur d'Obi Wan peut éditer des pages dans des chemins tels que `/en/article/obiwan/`, `/en/slides/obiwan/` et ainsi de suite. Ainsi, certains utilisateurs seront les seuls éditeurs de certaines pages.

Sachez que les seuls utilisateurs pouvant supprimer des pages sont les utilisateurs ADMIN pour vous assurer que les liens ne sont pas rompus. Il n'y a qu'une seule exception à cette règle. Donc le processus avec une page est :
1. Création :
  - les utilisateurs EDITEUR ou AUTEUR créent une page directement dans ce site, ou
  - L'utilisateur ADMIN crée un certain nombre de pages à la fois par un processus de téléchargement en masse (les utilisateurs ADMIN peuvent être aidés à ce sujet par les utilisateurs EDITOR et AUTEUR via l'utilisation de GitHub)
2. Édition :
  - les utilisateurs EDITEUR ou AUTEUR éditent une page directement dans ce site, ou
  - L'utilisateur ADMIN modifie un certain nombre de pages à la fois par un processus de téléchargement en masse (les utilisateurs ADMIN peuvent être aidés à ce sujet par les utilisateurs EDITOR et AUTEUR via l'utilisation de GitHub)
3. Suppression ou déplacement (si nécessaire) :
  - L'utilisateur ADMIN supprime ou déplace une page en s'assurant que toute page liée est mise à jour.
  - L'utilisateur AUTEUR supprime ou déplace une page si elle se trouve à l'intérieur des dossiers qui lui appartiennent.

## Types de pages

Le tableau résume les types de pages. Le tableau indique le groupe d'utilisateurs minimum requis pour modifier le type de page. Les utilisateurs ADMIN peuvent tout faire, donc quand la table indique EDITOR ou AUTEUR, cela implique également ADMIN. Lorsque le tableau indique utilisateur AUTEUR, cela signifie qu'il existe plusieurs utilisateurs de ce type et que chacun contrôle les pages dans le dossier indiqué, étant le seul autorisé à les modifier.

Le tableau montre le chemin URL à ajouter au domaine [https://urantiapedia.org](https://urantiapedia.org) pour obtenir l'URL pour l'anglais. Remplacez le code de langue par celui souhaité pour les autres langues. Par exemple, l'URL pour obtenir l'index du *Livre d'Urantia* est :
- en anglais : https://urantiapedia.org/en/The_Urantia_Book/Index
- en espagnol : https://urantiapedia.org/es/The_Urantia_Book/Index

Plus d'informations sur les URL dans la section ci-dessous.

Taper | Descriptif | Création | Modif. | Enlèvement | URL
--- | --- | --- | --- | --- | ---
PAGE WEB | Les pages du Wiki lui-même comme la page de démarrage, les pages d'aide, la feuille de route | ADMIN | ADMIN | ADMIN | /fr/help/
BOOK_UB | Le Livre d'Urantia | ADMIN | ADMIN | ADMIN | /fr/The_Urantia_Book/
BOOK_BIBLE | La Bible | ADMIN | ADMIN | ADMIN | /fr/Bible/
BOOK_AUTHORED | Livre d'un utilisateur auteur | AUTEUR | AUTEUR | AUTEUR | /fr/book/nom_utilisateur/titre_du_livre/
BOOK_PUBLIC | Livre que tout le monde peut modifier | ÉDITEUR | ÉDITEUR | ADMIN | /fr/livre/auteur/titre_du_livre/
TOPIC | Terme, sujet ou concept mentionné dans Le Livre d'Urantia | ADMIN | ÉDITEUR | ADMIN | /fr/topic/nom_du_sujet/
INDEX | Pages avec des collections de liens | ADMIN | ÉDITEUR | ADMIN | /fr/index/index_name
ARTICLE_AUTHORED | Article d'un utilisateur auteur | AUTEUR | AUTEUR | AUTEUR | /fr/article/nom_utilisateur/titre_article
ARTICLE_PUBLIC | Article modifiable par tous | ÉDITEUR | ÉDITEUR | ADMIN | /fr/article/auteur/titre_article
SLIDES_AUTHORED | Diapositives d'un auteur | AUTEUR | AUTEUR | AUTEUR | /fr/slides/nom_utilisateur/slides_title
SLIDES_PUBLIC | Diapositives pouvant être modifiées par n'importe qui | ÉDITEUR | ÉDITEUR | ADMIN | /fr/slides/slides_title
MAPS_AUTHORED | Carte (1) d'un auteur | AUTEUR | AUTEUR | AUTEUR | /fr/map/nom_utilisateur/map_title
MAPS_PUBLIC | Carte (1) modifiable par tous | ÉDITEUR | ÉDITEUR | ADMIN | /fr/map/map_title
3DMODEL_AUTHORED | Un modèle 3D d'un auteur | AUTEUR | AUTEUR | AUTEUR | /fr/3dmodel/nom_utilisateur/3dmodel_name
3DMODEL_PUBLIC | Un modèle 3D public | ÉDITEUR | ÉDITEUR | ADMIN (2) | /fr/3dmodel/3dmodel_name
IMAGE | Une image, qu'il s'agisse d'un dessin ou d'un schéma graphique ou d'une illustration | ÉDITEUR ou AUTEUR | ÉDITEUR ou AUTEUR | ADMIN (3) | /fr/image/nom_image

1. Les cartes peuvent être en 2D ou 3D et peuvent contenir :
   - Marques ponctuelles avec une fenêtre contextuelle indiquant les emplacements. Les popups peuvent avoir des liens vers Wiki ou externes.
   - Paths : plusieurs pathpoints avec des popups dans chacun montrant un déplacement d'une personne ou de personnes. Ces chemins peuvent être affichés sous forme d'animations.
   - Zones : polygones indiquant l'emplacement de quelque chose sans emplacement spécifique, comme des empires ou des nations.
2. Un modèle 3D ne peut être supprimé que s'il n'y a pas d'autre page qui y renvoie. La page du modèle 3D, la page qui permet de mettre à jour le modèle 3D, doit permettre de connaître la liste des pages qui utilisent le modèle 3D. Seuls les modèles 3D peuvent être téléchargés dans certains formats (de préférence glTF) et tailles maximales.
3. Une image ne peut être supprimée que s'il n'y a pas d'autre page qui y renvoie. La page de l'image, la page qui permet de mettre à jour l'image, doit permettre de connaître la liste des pages qui utilisent l'image. Seules les images peuvent être téléchargées dans certains formats et tailles maximales.


## Pages d'aide

Ce sont des pages avec du contenu sur *Urantiapedia* lui-même, comme des manuels d'utilisation, des recommandations, des documents de politique, l'état d'avancement et autres. Ces pages ont ce modèle d'URL : `https://urantiapedia.org/[lan]/help/[title]`


## Livres

Cela inclut non seulement *Le Livre d'Urantia* dans toutes ses traductions, mais aussi la Bible et tout livre du domaine public supposé être une source utilisée par les révélateurs ou dont le contenu peut expliquer les sujets du *Livre d'Urantia*. Peuvent également être inclus des livres qui sont des œuvres dérivées du *Livre d'Urantia* dont les auteurs souhaitent offrir une licence ouverte. Tout cela pourrait comprendre une sorte de *bibliothèque urantienne*, quelque chose comme Wikisource mais tout ce qui concerne le Livre d'Urantia.

### Le Livre d'Urantia

Concernant *Le Livre d'Urantia*, il y a une page principale pour chaque traduction avec le titre, le copyright, l'année, etc., une page pour l'index des articles, une page pour la version étendue de l'index, et enfin une page pour chaque article . Pour l'anglais, quelques exemples de ces pages :
- https://urantiapedia.org/en/The_Urantia_Book
- https://urantiapedia.org/en/The_Urantia_Book/Index
- https://urantiapedia.org/en/The_Urantia_Book/Index_Extended
- https://urantiapedia.org/en/The_Urantia_Book/147

D'autres contenus comme le *Mandat de publication* peuvent également être inclus sous le même chemin.

Chaque page papier a, outre le contenu lui-même avec des sections, quelques sections supplémentaires :
- *Références* contiennent des liens vers des citations ou des citations supposées. Dans *Le Livre d'Urantia*, les auteurs eux-mêmes indiquent qu'ils agissent souvent plus comme compilateurs que comme révélateurs, en utilisant la documentation humaine existante. Parfois, ce qui est une citation textuelle est sous-entendu parce que les développeurs utilisent des guillemets. Dans d'autres, la citation n'est que subtile et difficile à détecter. De nombreux lecteurs ont trouvé ces citations au fil du temps. Les citations font souvent référence à un passage de *La Bible*, ou à un livre sur la religion, la philosophie ou la science depuis l'époque où les révélations ont été écrites ou avant. C'est dans cette section *Références* que les liens seront placés vers le passage biblique ou vers tout autre livre utilisé par les révélateurs. *La Bible* et d'autres sources seront également dans *Urantiapedia* tant que les livres sont dans le domaine public,
- *Liens* sont des liens vers n'importe quel article, sujet, index ou image qui est lié à l'article et fournit un contenu utile qui clarifie l'article.
- Il pourrait également y avoir une section *Liens externes* avec des liens vers d'autres sites Web qui pourraient avoir des informations utiles liées à l'article.

Ces sections avec *Références*, *Liens* et *Liens externes* seront un modèle commun dans la plupart des pages de *Urantiapedia*.

### La Bible

En ce qui concerne *La Bible*, comme il s'agit d'un livre principal massivement cité par les auteurs du *Livre d'Urantia*, le chemin qui y mène est court. Chaque livre de la Bible a une page, et chaque chapitre une page pour lui. Par exemple, voici des liens vers des livres et des chapitres de Genèse et évangile de Jean :
- https://urantiapedia.org/en/Bible/Genesis
- https://urantiapedia.org/en/Bible/Genesis/Index
- https://urantiapedia.org/en/Bible/Genesis/2
- https://urantiapedia.org/fr/Bible/Jean
- https://urantiapedia.org/fr/Bible/Jean/Index
- https://urantiapedia.org/fr/Bible/Jean/2

Noms de livres valides à utiliser dans l'URL :

 | | | | |
 --- | --- | --- | ---
Genesis | Exodus | Leviticus | Numbers 
Deuteronomy | Joshua | Judges | Ruth
1_Samuel | 2_Samuel | 1_Kings | 2_Kings
1_Chronicles | 2_Chronicles | Ezra | Nehemiah
Esther | 1_Maccabees | 2_Maccabees | Job
Psalms | Proverbs | Ecclesiastes | Song_of_Solomon
Sirach | Wisdom_of_Solomon | Isaiah | Jeremiah
Lamentations | Baruch | Ezekiel | Daniel
Hosea | Joel | Amos | Obadiah | Jonah
Micah | Nahum | Habakkuk | Zephaniah
Haggai | Zechariah | Malachi | Matthew
Mark | Luke | John | Acts
Romans | 1_Corinthians | 2_Corinthians | Galatians
Ephesians | Philippians | Colossians | 1_Thessalonians
2_Thessalonians | 1_Timothy | 2_Timothy | Titus
Philemon | Hebrews | James | 1_Peter
2_Peter | 1_John | 2_John | 3_John
Jude | Revelation | Bel_and_the_Dragon | Prayer_of_Manesseh
Tobit | Judith | Enoch | Assumption_of_Moses

D'autres livres liés à la Bible en tant que livres non canoniques peuvent être placés sous le même chemin s'ils sont liés au * Livre d'Urantia * d'une manière ou d'une autre. Un bon exemple est le livre d'Enoch, qui est mentionné explicitement.

### Autres livres censés être des sources

En ce qui concerne tout autre livre en dehors de la Bible qui est une source possible du *Livre d'Urantia*, ils peuvent être ajoutés dans un chemin de «livre», avec une page pour le titre du livre, l'auteur, le copyright et la date, une pour l'index et une pour chaque chapitre. Il est important que si les livres sont anciens et ont été numérisés, les images numérisées et le texte soient mis à disposition. Les images peuvent être ajoutées sous la forme d'une collection d'images liées dans une section *Original* au bas de chaque texte de chapitre.

Par exemple, Matthew Block est un lecteur qui a fait un excellent travail pour trouver les sources du *Livre d'Urantia*, comme expliqué dans https://urantiabooksources.com/. L'un des livres qu'il a identifié comme une source possible de révélateurs est *The Universe Around Us*, de sir James Jeans, publié en 1930. Comme ce livre est entré dans le domaine public, il peut être ajouté à *Urantiapedia*, et des liens vers ce livre peut ressembler à ceci :
- https://urantiapedia.org/en/book/The_Universe_Around_Us
- https://urantiapedia.org/en/book/The_Universe_Around_Us/Index
- https://urantiapedia.org/en/book/The_Universe_Around_Us/3

### Autres livres de lecteurs

Les lecteurs peuvent également ajouter à * Urantipedia * leurs propres livres écrits s'ils souhaitent les partager en tant que licence publique. La façon de les ajouter est comme pour tout autre livre, dans le chemin `book`, avec une page pour le titre, l'auteur, l'avis de droit d'auteur et la date, une page pour l'index et une page par chapitre. Les livres, bien sûr, doivent avoir une relation avec *Le Livre d'Urantia* et fournir une sorte d'aide à la compréhension du livre, et non des romans ou tout autre travail inspiré avec peu de relations avec le livre.

Le modèle d'URL pour ces livres est le suivant : `https://urantiapedia.org/en/book/[AUTEUR]/[book_title]` pour les livres dont l'auteur est connu ou `https://urantiapedia.org/en/book/[book_title]` pour les livres anonymes. Sachez que le titre du livre dans l'URL est recommandé d'être en anglais même si la langue d'origine dans laquelle le livre est écrit n'est pas l'anglais. Vérifiez plus à ce sujet dans une section ci-dessous.


## Articles, aides à l'étude et schémas

Cela inclut tout article, matériel d'aide et document d'opinion qui peut être intéressant pour étudier et comprendre *Le Livre d'Urantia*.

Chacun sera une page avec des sections. Il est fortement recommandé d'avoir les sections communes *Références*, *Liens* et *Liens externes*. Des images seront ajoutées afin qu'elles soient liées en tant qu'entités par elles-mêmes, afin que de nombreux articles puissent partager les mêmes images sans les répéter. Les *références* sont importantes. De nombreux lecteurs ont écrit des articles dans lesquels ils n'incluent pas correctement la référence à une citation du livre d'Urantia ou de tout article scientifique. Dans la mesure du possible, ces articles doivent être modifiés pour ajouter ces références manquantes. Sans références, l'information n'est pas vraie.

Le modèle d'URL d'un article doit suivre ceci : `https://urantiapedia.org/en/article/[AUTEUR]/[article_title]` pour les articles dont l'auteur est connu ou `https://urantiapedia.org/en/article/[article_title]` pour les articles anonymes. Sachez que bien que les articles aient un titre dans la langue d'origine dans laquelle ils ont été écrits par leur auteur, il est de bonne pratique d'utiliser un nom traduit en anglais. De cette façon, l'URL peut avoir un modèle cohérent.

Prenons un exemple. Imaginez qu'un lecteur espagnol ait créé un article intitulé *Nazaret en tiempos de Jesús*, que nous pouvons traduire par *Nazareth au temps de Jésus*. Le meilleur choix pour l'URL serait

https://urantiapedia.org/es/article/Nazareth_in_Jesus_times

à la place de

https://urantiapedia.org/es/article/Nazaret_en_tiempos_de_Jesús

Sachez que le but de *Urantiapedia* est de permettre un contenu multilingue pour tout le monde, et toute page téléchargée dessus devrait être traduite dans toutes les langues prises en charge à un moment donné à l'avenir. Les titres en anglais fournissent un moyen commun et unifié d'identifier les URL. Cela n'affecte pas le titre de la page, qui est toujours une valeur différente de l'URL. Plus d'informations à ce sujet dans une section ci-dessous.

Ce type de contenu comprend également des schémas ou des dessins avec des schémas. Il existe un certain nombre de technologies qui permettent de créer facilement des diagrammes et des graphiques qui sont actuellement pris en charge dans *Urantiapedia* : [Kroki](https://kroki.io/), [Mermaid](http://mermaid-js.github.io/mermaid/#/) et [PlantUML](https://plantuml.com/). Si les générateurs de diagrammes précédents ne suffisent pas pour les besoins du *Livre d'Urantia* (car ils sont principalement destinés au développement de logiciels), il est possible d'utiliser n'importe quel contenu au [format SVG](https://developer.mozilla.org/en-US/docs/Web/SVG), c'est le meilleur format recommandé pour créer des diagrammes, des schémas ou des graphiques.

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/sample_page_article.png">
<figcaption><em> Exemple de rendu d'un article.</em></figcaption>
</figure>

## Les sujets

Il s'agit d'un type d'article lié à un sujet spécifique du *Livre d'Urantia*. Par exemple, il peut s'agir de concepts comme [absonity](/en/topic/absonity), ou de personnes comme [Grandfanda](/en/topic/Grandfanda), ou de types d'êtres comme [Thought Adjusters](/en/topic/Thought_Adjusters), ou des endroits comme [Nazareth](/en/topic/Nazareth) ou [Orvonton](/en/topic/Orvonton_(superuniverse)), ou des événements comme [l'arrivée d'Adam et Eve](/en/topic/Adam#arrival-of-adam-and-eve), etc.

Chaque sujet aura les sections communes *Références* avec des liens vers *Le Livre d'Urantia*, *Liens* avec des liens vers d'autres pages dans *Urantiapedia*, et la section *Liens externes* pour plus de liens en dehors de la page. Par exemple, la page sur *Nazareth* peut contenir une brève explication de base sur Nazareth (où elle se trouve, pourquoi elle est importante, des coordonnées géographiques avec des liens vers des cartes), mais la section *Liens* peut avoir un lien vers un article dans qu'un lecteur plonge dans la ville de Jésus, à quoi cela ressemblait à l'époque de Jésus et quelles découvertes archéologiques ont été trouvées qui semblent corroborer ou non les affirmations du livre.

Le modèle d'URL pour un sujet est : `https://urantiapedia.org/en/topic/[topic_name]`. Les noms de sujet sont toujours en anglais bien que le titre de la page soit dans chaque langue donnée.


## Index

Différents index sont inclus ici. Si le nombre d'éléments obtenus dans l'index est très élevé, il peut y avoir une page principale avec des sections principales puis des pages secondaires. Dans la mesure du possible, il est préférable que chaque index ne comporte qu'une seule page, afin qu'il soit plus facile de localiser quelque chose.

Ceux-ci pourraient être certains des index:

Index | Descriptif | Trié | Chemin
--- | --- | --- | ---
Liste des index | Liste de tous les index | Comme ce tableau | /fr/index/index
Index des sujets | Connu sous le nom de Glossaire | Par ordre alphabétique | /fr/index/topics
Index des personnes | Sous-ensemble du Glossaire des noms propres de personnes ou de personnalités | Par ordre alphabétique | /fr/index/people
Index des êtres | Sous-ensemble du Glossaire des types d'êtres dans l'univers (1) | Par ordre alphabétique | /fr/index/beings
Index des lieux | Sous-ensemble du Glossaire des lieux, dans l'univers ou sur Terre | Par ordre alphabétique | /fr/index/places
Index biblique | Pour chaque livre de la Bible, des liens vers *Le Livre d'Urantia* où un verset est pertinent | Par ordre biblique (Genèse, Exode, etc.) | /fr/index/biblical
Index des références | Pour chaque document du *Livre d'Urantia*, toutes les références dans d'autres livres, que ce soit la Bible ou d'autres | Par livre papier | /fr/index/references
Index des citations | Liste des références dans le livre aux phrases emblématiques | Par thèmes (Dieu, l'Univers, les Anges, Jésus, etc.) | /fr/index/quotes
Chronologie de la Terre | Événements sur Terre (2) | Chronologiquement | /fr/index/earth_timeline
Chronologie de la vie de Jésus | Description des principaux événements de Jésus et liens vers le livre | Par année, mois et jour | /fr/index/Jésus_timeline

(1) Si un type d'être reçoit des noms différents (par exemple, *Third Source and Center* = *Conjoint Actor*), chaque entrée aura à côté d'elle la liste du reste des termes équivalents.

(2) Les chronologies peuvent être considérées comme un type d'index d'événements. Dans ce cas, il s'agirait d'une chronologie, ordonnée par date, des événements du développement évolutif de la terre. Cela pourrait inclure les événements historiques mentionnés dans le livre.


## Images

Images pour toute la page Web :

* L'art d'Urantia. Dessins ou photographies qui évoquent un concept du livre.
* Régimes. Infographies ou graphiques qui expliquent et clarifient les sujets du livre.
* Photos. Images libres de droits utilisées n'importe où sur *Urantiapedia*.
* Animations. Images animées qui clarifient les concepts qui impliquent une visualisation animée.
* Plans. Cartes statiques, bien qu'elles puissent contenir des liens si elles sont au format `svg` ou si elles utilisent des [cartes d'images HTML](https://www.w3schools.com/html/html_images_imagemap.asp).

Le modèle d'URL pour les images est : `https://urantiapedia.org/en/image/[image_name].jpg`. Les noms des images doivent toujours être en anglais comme expliqué ci-dessus. Si les images n'ont pas besoin d'être localisées dans une langue, elles peuvent être laissées dans le chemin anglais par défaut, de sorte que le modèle d'URL pour elles serait : `https://urantiapedia.org/image/[image_name].jpg `, qui est plus compact.

Notez que dans le modèle d'URL, nous avons ajouté `jpg` comme format, mais il peut s'agir de l'un des formats pris en charge : `jpg`, `jpeg`, `png`, `gif`, `webp`, `svg`.

Les images n'ont pas leur propre page Web par défaut. Les images sont accessibles via l'URL comme n'importe quelle ressource publique. Mais si c'était intéressant, des pages pourraient être créées qui offrent des informations sur une image elle-même. Par exemple, dans les URL suivantes, la première est l'URL de l'image de couverture officielle du *Livre d'Urantia* en anglais, et la seconde est la page possible contenant des informations sur cette image :
- `https://urantiapedia.org/image/the_urantia_book.jpg`
- `https://urantiapedia.org/en/image/the_urantia_book`

## Plans

Les cartes ne seront pas de simples images statiques. Ce type de cartes sera enregistré dans la section des images. Les cartes seront des applications interactives qui permettront :
- panoramique et zoom sur la carte si elle a été définie avec cette option, toujours dans certaines limites d'étendue.
- centrer la carte sur le contenu.
- cliquez sur des éléments de la carte et obtenez des panneaux d'information dans lesquels des liens peuvent apparaître qui vous permettent d'accéder à d'autres pages d'*Urantiapedia* ou à d'autres sites Web.
- cliquez sur un bouton de lecture sur une visite virtuelle qui lance une animation avec des explications.

Le modèle d'URL pour les cartes est :
- pour une carte publique, que n'importe quel éditeur peut modifier : `https://urantiapedia.org/en/map/[map_name]`
- pour une carte d'auteur, qui ne peut être modifiée que par l'auteur ou une personne autorisée : `https://urantiapedia.org/en/map/[user_name]/[map_name]`

Les cartes permettront de se lier à une position dans la carte par le biais de paramètres, soit par un nom, soit par des coordonnées. Par exemple, imaginons une page de carte du vol vers le nord de Jésus avec ses apôtres. Cette carte pourrait avoir cette URL :

https://urantiapedia.org/en/map/Jesus_voyages_north_flight

Et deux façons d'ouvrir cette carte centrée sur Ramah seraient :
- `https://urantiapedia.org/en/map/Jesus_voyages_north_flight?name=Ramah`
- `https://urantiapedia.org/en/map/Jesus_voyages_north_flight?lonlat=32.936424,35.367742`

Les noms des cartes en URL ont déjà été expliqués qu'il faut être en anglais.

<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/sample_page_map.jpg">
<figcaption><em> Exemple de rendu d'une carte interactive.</em></figcaption>
</figure>


## Diapositives

Les diapositives sont des documents texte qui s'affichent sur la page sous forme de présentations animées. C'est essentiellement comme un article dans lequel vous pouvez vous déplacer en appuyant sur les touches avant et arrière ou en faisant défiler votre doigt sur un appareil tactile, en passant d'une diapositive à l'autre.

Le modèle d'URL pour les diapositives est :
- pour une présentation publique, que tout éditeur peut modifier : `https://urantiapedia.org/en/slides/[slides_name]`
- pour une présentation d'auteur, qui ne peut être modifiée que par l'auteur ou une personne autorisée : `https://urantiapedia.org/en/slides/[user_name]/[slides_name]`

Les URL auront un paramètre pour s'ouvrir sur une diapositive donnée.

<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/sample_page_slides.png">
<figcaption><em> Exemple de rendu d'une présentation.</em></figcaption>
</figure>


## Modèles 3D

Les modèles 3D sont des applications, comme les cartes. Ils vous permettront de vous déplacer librement dans le modèle dans certaines limites, de vous concentrer sur l'ensemble du modèle et d'afficher un panneau d'informations sur les éléments cliquables. Il pourrait également contenir différentes animations qui seraient exécutables indépendamment, pour montrer quelque chose d'animé.

Le modèle d'URL pour les modèles 3D est :
- pour un modèle 3D public, que tout éditeur peut modifier : `https://urantiapedia.org/en/3dmodel/[3dmodel_name]`
- pour un modèle 3D créé, qui ne peut être modifié que par l'auteur ou une personne autorisée : `https://urantiapedia.org/en/3dmodel/[user_name]/[3dmodel_name]`

Comme les cartes, les modèles 3D prendront en charge le centrage sur un élément en utilisant un nom, tel que : `https://urantiapedia.org/en/3dmodel/Jerusem?name=Mansonia_7`

<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/sample_page_3d.jpg">
<figcaption><em> Exemple de rendu d'un modèle 3D.</em></figcaption>
</figure>

## URL

Chaque page dans *Urantiapedia* a à la fois un titre et une URL. Les titres peuvent être répétés sur l'ensemble du site si nécessaire, mais chaque URL doit être unique. Pour y parvenir, les URL doivent suivre ce modèle générique :

`https://urantiapedia.org/[lan]/[path]/[user_name?]/[page_name]`

- `[lan]` est le code de n'importe quelle langue prise en charge, c'est-à-dire les langues avec une traduction pour *Le Livre d'Urantia*. Cochez [Langues prises en charge](/fr/help/languages).
- `[path]` est le chemin dépendant du type de page :
	- Page du site : 'aide'
	- *Le Livre d'Urantia* : `The_Urantia_Book`
	- *La Bible* : 'Bible'
	- Autres livres : 'livre'
	- Sujet : «sujet»
	- Indice : 'indice'
	- Article : 'article'
	- Image : «image»
	- Présentation : «diapositives»
	- Carte : `carte`
	- Modèle 3D : `3dmodel`
- `[user_name]`, s'il existe, est le nom de l'auteur, soit le nom d'un utilisateur pouvant modifier les pages, soit un auteur public. Il est recommandé de ne pas utiliser de caractères accentués dans le nom pour faciliter l'écriture.
- `[page_name]` est le nom qui apparaît dans l'URL, qui doit avoir des traits de soulignement au lieu d'espaces blancs. Pour les livres, chaque page est un chapitre, donc `[page_name]` doit juste un numéro, celui du chapitre. Si le livre contient une préface, ce chapitre est numéroté zéro.

`[titre du livre]` et `[page_name]` doivent avoir des noms courts dans la mesure du possible et de préférence en anglais. L'anglais est la langue par défaut du site. La raison en est que *Le Livre d'Urantia* a été écrit en anglais et est aujourd'hui une langue universelle utilisée partout. Avoir des noms de page différents pour différentes langues rend plus difficile le passage d'une langue à l'autre et devrait nécessiter un système pour connecter les pages sœurs. En utilisant un nom de page unique pour toutes les traductions, il est plus facile de savoir comment atteindre n'importe quelle page dans n'importe quelle langue une fois que la page anglaise est connue.

Exemples d'URL :
- https://urantiapedia.org/de/help/start
- https://urantiapedia.org/ja/The_Urantia_Book
- https://urantiapedia.org/hu/The_Urantia_Book/Index
- https://urantiapedia.org/it/The_Urantia_Book/Index_Extended
- https://urantiapedia.org/en/The_Urantia_Book/147
- https://urantiapedia.org/bg/Bible/Genesis
- https://urantiapedia.org/es/Bible/Genesis/Index
- https://urantiapedia.org/id/Bible/Genesis/2
- https://urantiapedia.org/lt/Bible/John
- https://urantiapedia.org/ro/Bible/John/Index
- https://urantiapedia.org/fr/Bible/Jean/2
- https://urantiapedia.org/en/book/The_Universe_Around_Us
- https://urantiapedia.org/en/book/The_Universe_Around_Us/Index
- https://urantiapedia.org/en/book/The_Universe_Around_Us/3
- https://urantiapedia.org/ko/topic/Andrew
- https://urantiapedia.org/es/article/Nazareth_in_Jesus_times
- https://urantiapedia.org/en/article/How_big_is_Orvonton
- https://urantiapedia.org/en/index/topics
- https://urantiapedia.org/en/index/people
- https://urantiapedia.org/ru/image/Master_Universe
- https://urantiapedia.org/pt/slides/Part_II_Introduction
- https://urantiapedia.org/cs/map/Jesus_Second_Preaching_Tour
- https://urantiapedia.org/es/3dmodel/Isle_of_Paradise

C'est une bonne idée de maintenir ces conventions afin que les URL aient une manière cohérente d'être construites et de cette manière soient plus faciles à retenir.


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
        <td><a href="/fr/help/principles">Principes régissant Urantiapedia</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/phases">Jalons du projet</a></td>
      </tr>
    </tbody>
  </table>
</figure>