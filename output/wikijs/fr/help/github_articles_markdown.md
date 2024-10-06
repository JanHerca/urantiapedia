---
title: "Obtenir des articles"
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
        <td><a href="/fr/help/github_articles_catalog">Catalogue d'articles</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_studyaids_catalog">Catalogue d'aides à l'étude</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Ici, il est décrit comment obtenir les articles de lecteurs liés au _Livre d'Urantia_, et qui ont été catalogués en suivant la tâche [Créer un catalogue d'articles](/fr/help/github_articles_catalog).

## Traiter

Tout ce qui a été dit sur les livres dans [Obtenir des livres «sources»](/fr/help/github_sourcebooks_markdown) s'applique également ici. Les articles peuvent être trouvés sous la forme d'une page web qui les héberge déjà, sous forme de PDF sans texte, ou sous forme de PDF avec texte. Ils peuvent également être individuellement ou dans le cadre d'un magazine ou d'une publication conjointe avec d'autres articles. Dans tous les cas, la première étape consiste à convertir ce magazine au format Markdown.

Cette tâche, réalisée avec des logiciels différents selon les cas, a déjà été réalisée en partie avec une bonne collection d'articles, qui sont disponibles sur GitHub dans `/input/markdown/en/Innerface` et `/input/markdown/en/Herald` pour deux publications bien connues liées au _Le Livre d'Urantia_, l'*Innerface International* et le *Fellowship Herald*. Le catalogue d'articles est déjà construit pour ces publications ici: [Articles prévus](/fr/index/articles).

La tâche consiste maintenant à utiliser le contenu des dossiers susmentionnés et à créer les articles individuels, car ces dossiers contiennent des magazines complets.

### Structure des articles dans Urantiapedia

Si vous êtes un « éditeur en chef » et que vous utiliserez la plate-forme GitHub, les articles doivent être enregistrés dans ces dossiers de projet GitHub : `/output/wikijs/en/article` pour les articles en anglais, `/output/wikijs/es/article` pour les articles en espagnol, etc. Dans ces dossiers, nous en créerons un autre, s'il n'existe pas, avec le nom de l'auteur (avec des espaces vides remplacés par des traits de soulignement). Enfin, à l'intérieur du dossier de l'auteur, nous créerons un fichier Markdown auquel nous donnerons un nom unique suivant ce critère :
  - Le nom reprendra le titre de l'article mais aussi abrégé que possible.
  - Le nom sera toujours en anglais, donc si l'article original n'est pas en anglais, le titre est traduit.
  - Les espaces vides sont remplacés par des traits de soulignement.
  - Les caractères spéciaux comme les deux-points ou les exclamations sont supprimés.
  - Par exemple, si le titre d'un article est *Time for More Change? Symbols, Cults et The Urantia Book* un nom de fichier possible serait `Time_for_More_Change_Symbols_Cults.md`. Si le titre est *Jerusalén en tiempos de Jesús* (espagnol), le fichier serait `Jerusalem_in_Jesus_times.md`.

Si vous êtes un «éditeur adjoint» et que vous n'allez pas utiliser la plate-forme GitHub pour envoyer des fichiers, créez simplement n'importe quel dossier sur votre PC dans lequel laisser les articles que vous créez. Ensuite, lorsque vous envoyez votre travail à un administrateur, il s'occupe de créer les bons dossiers.

Un exemple d'article fini peut être vu sur `/output/wikijs/en/article/Ann_Bendall/Adam_an_Eve.md`.

### Format de base d'un article sur Urantiapedia

Le format à utiliser est Markdown, qui est extrêmement simple à donner du style par rapport aux autres alternatives.

Le « rédacteur adjoint » doit réviser le texte et ajouter les éléments suivants :
- Un en-tête dans chaque fichier.
- Immédiatement sous l'en-tête, une indication de l'auteur.
- Marques de section dans l'article.
- Corriger les paragraphes.
- Gras et italique.
- Devis.
- Images.
- Références aux images.
- Notes de bas de page.
- Les tables.
- Formules mathématiques ou caractères en notation scientifique.

Tous ces éléments ont déjà été expliqués lors de la présentation de la mise en forme des chapitres de livre : [Obtenir des livres «sources»](/fr/help/github_sourcebooks_markdown). Tous les conseils qui y sont donnés s'appliquent également ici dans le cas d'articles.

## Envoi de fichiers

Si vous êtes un « éditeur en chef » utilisant GitHub, vous pouvez soumettre des articles comme indiqué dans [Aide des éditeurs en chef](/fr/help/github) ; si vous êtes un «éditeur adjoint», vous pouvez simplement envoyer les fichiers Markdown à l'e-mail de n'importe quel administrateur ou à urantiapedia@gmail.com.

## Liens externes

- [Urantiapedia Tools - Projet GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_articles_catalog">Catalogue d'articles</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_studyaids_catalog">Catalogue d'aides à l'étude</a></td>
      </tr>
    </tbody>
  </table>
</figure>