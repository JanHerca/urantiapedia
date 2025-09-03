---
title: "Obtenir des diagrammes"
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
        <td><a href="/fr/help/github_diagrams_catalog">Catalogue de diagrammes</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_images_catalog">Catalogue d'images</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Ici, il est décrit comment obtenir les diagrammes du _Livre d'Urantia_, qui ont été catalogués en suivant la tâche [Créer un catalogue de diagrammes](/fr/help/github_diagrams_catalog).

## Traiter

Les diagrammes sont un type de contenu très spécial car ils ne sont pas de simples textes avec des images telles que des livres, des articles ou des aides à l'étude.

Les diagrammes sont généralement disponibles sous forme d'images simples au format «PNG» ou «JPG». Les diagrammes dans ces formats ne sont pas très utiles car le but des diagrammes est d'aller un peu plus loin que ce que proposent les images et de permettre des fonctionnalités supplémentaires telles que :
- Hyperliens dans différentes parties du diagramme
- Petites boîtes pop-up lors du survol du diagramme.
- Pouvoir mettre à l'échelle le diagramme de haut en bas sans perdre en qualité d'affichage

Cette fonctionnalité nativement dans le navigateur est uniquement fournie par le format [SVG](https://www.w3schools.com/graphics/svg_inhtml.asp). Le format [image cartographique HTML](https://www.w3schools.com/html/html_images_imagemap.asp) n'autorise que les hyperliens.

Le processus ici sera donc la conversion de n'importe quel diagramme au format SVG en introduisant les fonctionnalités ci-dessus (liens, pop-ups et évolutivité).

### Structure des diagrammes dans Urantiapedia

Si vous êtes un « éditeur en chef » et que vous utiliserez la plate-forme GitHub, les diagrammes doivent être enregistrés dans ces dossiers de projet GitHub : `/output/wikijs/en/article` pour les diagrammes en anglais, `/output/wikijs/es/article` pour les schémas en espagnol, etc. Dans ces dossiers, nous en créerons un autre, s'il n'existe pas, avec le nom de l'auteur (avec des espaces vides remplacés par des traits de soulignement). Enfin, dans le dossier de l'auteur, nous allons créer un fichier Markdown avec un nom unique suivant ce critère :
- Le nom reprendra le titre du diagramme mais aussi abrégé que possible.
- Le nom sera toujours en anglais, donc si le schéma original n'est pas en anglais, le titre est traduit.
- Les espaces vides sont remplacés par des traits de soulignement.
- Les caractères spéciaux comme les deux-points ou les exclamations sont supprimés.
- Par exemple, si le titre d'un diagramme est *The Master Universe*, un nom de fichier possible serait `The_Master_Universe.md`. Si le titre était *Las personalidades del Espíritu Infinito* (espagnol), le fichier serait `Personalities_of_Infinite_Spirit.md`.

Si vous êtes un «Assistant Editor» et que vous n'allez pas utiliser la plateforme GitHub pour envoyer des fichiers, créez simplement n'importe quel dossier sur votre PC dans lequel laisser les diagrammes que vous créez. Ensuite, lorsque vous envoyez votre travail à un administrateur, il s'occupe de créer les bons dossiers.

### Format de base d'un diagramme dans Urantiapedia

Le format à utiliser est Markdown et dans celui-ci, nous utiliserons SVG.

L'«Assistant Editor» doit ajouter ce qui suit au fichier Markdown :
- Un en-tête dans chaque fichier.
- Immédiatement sous l'en-tête, une indication de l'auteur.
- En dessous irait le contenu SVG.

Par exemple, ce serait un possible fichier Markdown très simplifié :

```
---
title: "The Sun"
description:
published: true
date: 2021-11-28T14:02:03.086Z
tags: Cosmology, Astronomy
publisher: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

Author: **John Doe**

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

La création de contenu SVG sort du cadre de cette aide et impliquerait l'utilisation d'un logiciel de vectorisation d'images tel que [Inkscape](https://inkscape.org/en/) ou similaire. Cette tâche doit être effectuée par un « rédacteur en chef » ayant de l'expérience dans la création de graphiques vectoriels.

## Envoi de fichiers

Si vous êtes un « éditeur en chef » utilisant GitHub, vous pouvez soumettre des diagrammes comme indiqué dans l'[Aide des éditeurs en chef](/fr/help/github) ; si vous êtes un « éditeur adjoint », vous pouvez simplement envoyer les fichiers Markdown à l'e-mail de n'importe quel administrateur ou à urantiapedia@gmail.com.

## Liens externes

- [Urantiapedia Tools - Projet GitHub](https://github.com/JanHerca/urantiapedia)
- [Format SVG](https://www.w3schools.com/graphics/svg_inhtml.asp)
- [Format de carte d'image HTML](https://www.w3schools.com/html/html_images_imagemap.asp)
- [Inkscape](https://inkscape.org/en/)
- [Un outil intéressant pour créer des cartes d'images HTML](http://summerstyle.github.io/summer/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_diagrams_catalog">Creating a catalog of diagrams</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_images_catalog">Creating an image catalog</a></td>
      </tr>
    </tbody>
  </table>
</figure>