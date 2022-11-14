---
title: "Obtenir des aides à l'étude"
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
        <td><a href="/fr/help/github_studyaids_catalog">Catalogue d'aides à l'étude</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/github_diagrams_catalog">Catalogue de diagrammes</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Ici, il est décrit comment obtenir les aides à l'étude du _Livre d'Urantia_, qui ont été cataloguées à la suite de la tâche [Créer un catalogue d'aides à l'étude](/fr/help/github_studyaids_catalog).

## Traiter

Tout ce qui est dit sur les livres dans [Get Articles](/fr/help/github_articles_markdown) s'applique également ici. Les aides à l'étude se trouvent généralement sous forme d'articles, sous la forme d'une page Web qui les héberge déjà, sous forme de PDF sans texte ou sous forme de PDF avec texte. Dans tous les cas, la première étape consiste à convertir l'aide à l'étude au format Markdown.

Le catalogue des aides à l'étude se trouve ici : [Planned Study Aids](/en/index/studyaids).

Il s'agit maintenant d'utiliser le contenu des aides à l'étude pour obtenir les fichiers Markdown dont nous avons besoin.

### Structure des aides à l'étude sur Urantiapedia

Si vous êtes un « éditeur en chef » et que vous utiliserez la plate-forme GitHub, les aides à l'étude doivent être enregistrées dans ces dossiers de projet GitHub : `/output/wikijs/en/article` pour les aides à l'étude en anglais, `/output/wikijs/es/article` pour les aides aux études d'espagnol, etc.

Comme vous pouvez le voir, nous utilisons les mêmes dossiers pour les articles que pour les aides à l'étude. Ceci est fait pour que toutes les œuvres (autres que les livres) réalisées par le même auteur soient rassemblées dans le même dossier de projet.

Dans les dossiers `article` nous en créerons un autre, s'il n'existe pas, avec le nom de l'auteur (avec des espaces remplacés par des traits de soulignement). Enfin, à l'intérieur du dossier de l'auteur, nous allons créer l'aide à l'étude comme suit :
- Si l'aide à l'étude est un document court, de la taille d'un article, un fichier Markdown sera créé pour celui-ci.
- Si l'aide à l'étude est un long ensemble de différentes parties, presque un livre, un dossier sera créé pour cela, et les fichiers Markdown individuels iront à l'intérieur.


Le fichier Markdown dans le dossier d'aide à l'étude courte et le dossier d'une aide à l'étude approfondie seront nommés avec un nom unique suivant ces critères :
  - Le nom reprendra le titre de l'aide à l'étude mais le plus court possible.
  - Le nom sera toujours en anglais, donc si l'article original n'est pas en anglais, le titre est traduit.
  - Les espaces vides sont remplacés par des traits de soulignement.
  - Les caractères spéciaux comme les deux-points ou les exclamations sont supprimés.
  - Par exemple, si le titre d'une aide à l'étude est *Étude du Maître Univers*, un nom possible serait «Étude_du_Maître_Univers». Si le titre était *Las enseñanzas de Jesús* (espagnol), le nom serait `Jesus_teachings`.

Si vous êtes un «Rédacteur adjoint» et que vous n'allez pas utiliser la plateforme GitHub pour envoyer des fichiers, créez simplement n'importe quel dossier sur votre PC dans lequel laisser les aides à l'étude que vous créez. Ensuite, lorsque vous envoyez votre travail à un administrateur, il s'occupe de créer les bons dossiers.


### Format de base d'une aide à l'étude sur Urantiapedia

Le format à utiliser est Markdown, qui est extrêmement simple à formater par rapport à d'autres alternatives.

Le «rédacteur adjoint» doit réviser le texte et ajouter les éléments suivants :
- Un en-tête dans chaque fichier.
- Immédiatement sous l'en-tête, une indication de l'auteur.
- Marques de sections à l'intérieur de chaque fichier qui compose l'aide à l'étude.
- Corriger les paragraphes.
- Gras et italique.
- Devis.
- Images.
- Références aux images.
- Notes de bas de page.
- Les tables.
- Formules mathématiques ou caractères en notation scientifique.

Tous ces éléments ont déjà été expliqués lors de la présentation de la mise en forme des chapitres de livre: [Obtenir des livres «sources»](/fr/help/github_sourcebooks_markdown). Toutes les instructions qui y sont données s'appliquent également ici dans le cas des aides à l'étude.

## Envoi de fichiers

Si vous êtes un « éditeur en chef » utilisant GitHub, vous pouvez soumettre des aides à l'étude comme indiqué dans l'[Aide des éditeurs en chef](/fr/help/github) ; si vous êtes un «éditeur adjoint», vous pouvez simplement envoyer les fichiers Markdown à l'e-mail de n'importe quel administrateur ou à urantiapedia@gmail.com.

## Liens externes

- [Urantiapedia Tools - Projet GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_studyaids_catalog">Catalogue d'aides à l'étude</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/github_diagrams_catalog">Catalogue de diagrammes</a></td>
      </tr>
    </tbody>
  </table>
</figure>