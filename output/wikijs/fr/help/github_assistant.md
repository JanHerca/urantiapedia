---
title: "Urantiapedia — Aide de l'éditeur adjoint"
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
        <td><a href="/fr/help/github">Aide des rédacteurs en chef</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/devs">Aide aux développeurs</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
## À propos d'Urantiapédia

[Urantiapedia](https://urantiapedia.org) est un site Web collaboratif basé sur [Wiki.js](https://js.wiki/) dans le but d'être un centre unifié pour la diffusion de toutes les connaissances concernant *Le Livre d'Urantia*.

## À propos des champs bleus

[Blue Fields](https://blue-fields.netlify.app/) est un site Web qui a été créé pour rejoindre et organiser les lecteurs du *Livre d'Urantia* qui souhaitent collaborer à des projets intelligents, utiles et altruistes partout dans le monde. monde. C'est le site web qui gère le registre et la collaboration entre les bénévoles d'*Urantiapedia*.

## À propos de GitHub

Urantiapedia a deux projets publics dans GitHub: [Urantiapedia](https://github.com/JanHerca/urantiapedia) et [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) créés pour servir de procédure de démarrage rapide pour le contenu initial. Il contient des fichiers dans certains formats et des logiciels qui aident à automatiser la création du contenu initial.

## À qui s'adresse ce manuel ?

Ce manuel est destiné aux utilisateurs appelés «éditeurs adjoints», ou aux utilisateurs qui se conforment aux exigences suivantes:
- Ils ont un compte sur ce site Web avec des autorisations d'édition. C'est le seul compte nécessaire.
- Ils ont une bonne connaissance du *Livre d'Urantia* dans au moins une langue dans laquelle il est publié, mais mieux s'il s'agit de l'anglais et d'une seconde langue dans laquelle le livre est traduit.
- Ils souhaitent collaborer de manière désintéressée à l'ajout d'informations relatives au *Livre d'Urantia* dans *Urantiapedia*.

## Deux façons de collaborer

Les «Assistant Editors» peuvent collaborer de deux manières à leur convenance.
1. Télécharger les fichiers depuis GitHub, apporter des modifications et des ajouts, et envoyer leur travail par e-mail.
2. Utilisation directe de ce site Web.

L'une ou l'autre méthode est également acceptable. La différence entre telle ou telle forme de collaboration est détaillée dans ce tableau :

mode | Avantages | Désavantages
--- | --- | ---
Par courriel | Peut fonctionner sans réseau <br> Les contenus sont créés plus rapidement <br> Les fichiers de support peuvent être modifiés (dossier `/input`) | L'éditeur n'apparaît pas comme créateur des modifications sur le web
Sur le Web | L'utilisation d'éditeurs visuels facilite l'édition <br> L'éditeur apparaît comme le créateur des modifications | Nécessite un accès au réseau <br> L'enregistrement est plus lent et vous ne pouvez parcourir que page par page <br> Vous ne pouvez modifier que les éléments qui sont des pages Web

Ci-dessous, nous détaillons comment les actions nécessaires seraient menées dans les deux formes de collaboration.

## Collaboration par e-mail

### Téléchargez les fichiers depuis GitHub

GitHub est une page Web permettant de créer des projets collaboratifs, généralement sur le développement de logiciels. Les fichiers du projet pour *Urantiapedia* sont ici: [Urantiapedia](https://github.com/JanHerca/urantiapedia).

Ce projet est public. N'importe qui peut télécharger les fichiers. Vous avez deux options :
- Téléchargez tout dans le projet. C'est la meilleure option si vous allez travailler dans plusieurs parties d'*Urantiapedia*.
- Téléchargez uniquement les fichiers nécessaires. Cette option est plus simple si vous allez aider juste dans une petite partie.

### Téléchargement de tout le projet

Pour tout télécharger, allez à la page principale du [projet dans GitHub](https://github.com/JanHerca/urantiapedia) et dans le bouton vert qui dit *Code*, cliquez et sélectionnez l'option *Download ZIP*. Le navigateur commencera à télécharger un fichier ZIP avec le contenu le plus à jour. Enregistrez-le dans n'importe quel dossier ou vérifiez votre dossier * Téléchargements * pour localiser le fichier.

Sachez que le téléchargement peut être long car le projet contient une bonne quantité de fichiers. Vous devez disposer d'au moins 2 à 3 GB d'espace libre sur votre ordinateur.

Une fois le téléchargement terminé, vous aurez un fichier appelé `urantiapedia-master.zip`. Il s'agit d'un fichier compressé, veuillez donc le décompresser dans n'importe quel dossier. Si vous ne savez pas comment décompresser un fichier ZIP, c'est très simple. Sous Windows, par exemple, faites un clic droit avec la souris dans le fichier et sélectionnez *Extraire tout* pour ouvrir l'outil de décompression.

Une fois les fichiers décompressés, vous êtes prêt à passer à l'étape suivante avec Text Editor.

### Téléchargement uniquement des fichiers requis

Si vous ne souhaitez pas télécharger tout le projet, vous pouvez le faire.

Accédez à cette URL dans le navigateur : https://github.com/JanHerca/urantiapedia/tree/master/

C'est le chemin avec les fichiers. Vous pouvez vous déplacer dans les dossiers de la page GitHub. Lorsque vous avez besoin d'un fichier, faites un clic droit avec la souris sur le nom de celui-ci et sélectionnez *Enregistrer le lien sous*. Cela vous amènera à la boîte de dialogue pour enregistrer chaque fichier.

De cette façon, vous pouvez choisir les fichiers que vous souhaitez télécharger, ce qui est une meilleure option si vous n'avez pas beaucoup d'espace libre sur votre disque dur ou si vous n'avez pas besoin du projet complet.

Nous pouvons maintenant les modifier dans un éditeur de texte.

### Modifier les fichiers dans un éditeur de texte

Pour éditer les fichiers, nous pouvons utiliser n'importe quel outil capable d'éditer des fichiers texte. Cependant, il est fortement recommandé d'utiliser un logiciel capable d'afficher des caractères masqués et des espaces blancs. Il est important de les montrer car ces caractères supplémentaires sont utilisés pour créer la structure des fichiers et si nous les supprimons, nous pouvons corrompre les fichiers.

Le logiciel le plus recommandé est *Visual Studio Code*, mais d'autres peuvent faire le travail :
* *Visual Studio Code*: https://code.visualstudio.com/
* *Bloc-notes++*: https://notepad-plus-plus.org/
* *Atom*: https://atom.io/
* *Sublime*: https://www.sublimetext.com/

Tous sont libres d'utilisation.

Si vous envisagez d'utiliser *Visual Studio Code*, les étapes pour le configurer sont les suivantes :
1. Téléchargez *Code Visual Studio*. Allez sur le site Web et cliquez sur le bouton *Télécharger*.
2. Installez-le. Lors de l'installation, il est recommandé de cocher *Ajouter une action «Ouvrir avec Code au menu contextuel du dossier* si vous êtes un utilisateur Windows. Avec cela, une option sera ajoutée à votre menu contextuel des dossiers Windows afin que vous puissiez facilement ouvrir le contenu de n'importe quel dossier dans l'éditeur.
3. Ouvrez-le. La première fois qu'il est ouvert, vous pouvez configurer certains paramètres. Ignorez-les tous.
4. Allez dans le menu *Fichier* et sélectionnez *Ouvrir le dossier*. Sélectionnez ensuite le dossier avec le projet complet ou avec les fichiers individuels que vous avez téléchargés.
5. Ouvrez l'un des fichiers.
6. Une extension qui peut vous faciliter la vie est *Sync Scroll*. Cette extension permet de faire défiler plusieurs fichiers en parallèle, ce qui aide beaucoup lors de l'édition dans plusieurs langues en même temps.
7. Pour installer l'extension, accédez au panneau *Extensions*. Tapez *Sync Scroll* dans le champ de recherche. Cliquez sur le bouton *Installer* dans l'extension. Il y a maintenant un bouton dans la barre d'état pour activer ou désactiver le *défilement de synchronisation*. Il est nécessaire d'avoir plusieurs fichiers ouverts en parallèle pour voir l'option. Pour cela, faites un clic droit sur n'importe quel fichier ouvert dans la liste des fichiers ouverts et sélectionnez *Ouvrir sur le côté*.

### Contenu du projet Urantiapedia sur GitHub

Pour connaître le contenu du projet GitHub et sa structure, consultez [Contenu du projet GitHub](/fr/help/github_content).

### Envoi des modifications aux administrateurs

La collaboration via GitHub a l'avantage que tout peut être fait facilement via le Web GitHub. Mais pour simplifier le travail des *éditeurs adjoints*, ils peuvent envoyer les fichiers édités en les envoyant par e-mail à l'un des responsables du projet ou à urantiapedia@gmail.com.

Si vous avez été en contact avec l'un des administrateurs du projet, vous pouvez leur envoyer directement votre travail. Ensuite, il est très facile pour les responsables de mettre à jour le site Web *Urantiapedia* GitHub avec le nouveau contenu, et à travers lui, de mettre à jour le site *Urantiapedia*. Vous serez averti lorsque les modifications seront apportées sur le Web, ce qui ne prend généralement pas plus d'une heure, pour vérifier que vos modifications ont été correctement mises à jour.

N'oubliez pas que si vous envoyez votre travail par courrier, il ne sera pas reflété que les modifications téléchargées ont été apportées par vous, et à la place, elles apparaîtront comme des modifications par les administrateurs. Si vous souhaitez être identifié comme créateur des modifications, vous devez utiliser les fonctionnalités de ce site Web.

## Collaboration via ce site

Dans ce cas, toutes les tâches sont effectuées via ce site Web. Vous devez vous connecter avec le compte d'édition fourni et suivre les manuels sur la façon d'apporter des modifications :
- [Interface et utilisation de base d'Urantiapedia](/fr/help/web_basics)
- [Gérer les pages](/fr/help/web_pages)
- [Utilisation des éditeurs](/fr/help/web_editors)
  - [Utilisation de l'éditeur visuel](/fr/help/web_visual_editor)
  - [Utilisation de l'éditeur Markdown](/fr/help/web_markdown_editor)
  - [Utilisation de l'éditeur HTML](/fr/help/web_html_editor)

## Tâches

Pour connaître les jalons du projet, consultez [Jalons d'Urantiapedia](/fr/help/phases). Les tâches pouvant être effectuées par les « assistants rédacteurs » sont celles indiquées ici :

### Étape I : Le Livre d'Urantia, la Bible et l'index des sujets

1. Traduire *Paramony* de l'anglais vers la langue cible. Vérifiez [Traduction de Paramony](/fr/help/github_paramony).
2. Traduire et réviser *Topic Index* de l'anglais vers la langue cible. Vérifiez [Traduction et révision de Topic Index](/fr/help/github_topicindex).
3. Obtenir une traduction du domaine public de *La Bible* dans la langue cible. Vérifiez [Obtenir la Bible](/fr/help/github_bible).

Actuellement, les tâches 1 et 3 sont terminées.

### Milestone II : Livres, articles, aides à l'étude, schémas et index

1. Créez un catalogue de livres qui sont considérés comme des sources du *Livre d'Urantia* ou qui contiennent des parallèles intéressants. Voir [Catalogue de livres sources](/fr/help/github_sourcebooks_catalog).
2. Obtenez les livres précédents. Voir [Obtenir des livres «sources»](/fr/help/github_sourcebooks_markdown).
3. Créez un catalogue d'articles rédigés par des lecteurs. Voir [Catalogue d'articles](/fr/help/github_articles_catalog).
4. Obtenez les articles précédents. Voir [Obtenir des articles](/fr/help/github_articles_markdown).
5. Créer un catalogue d'aides à l'étude. Voir [Catalogue des aides à l'étude](/fr/help/github_studyaids_catalog).
6. Obtenez les aides à l'étude ci-dessus. Voir [Obtenir des aides à l'étude](/fr/help/github_studyaids_markdown).
7. Créez un catalogue de diagrammes. Voir [Catalogue de diagrammes](/fr/help/github_diagrams_catalog).
8. Procurez-vous les diagrammes ci-dessus au format HTML ou, de préférence, SVG. Voir [Obtenir des diagrammes](/fr/help/github_diagrams_svg).
9. Créez le catalogue d'images du projet. Voir [Catalogue d'images](/fr/help/github_images_catalog).

## Liens externes

- [Urantiapedia - Projet principal dans GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - Projet pour les chargements en masse dans GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fondation Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github">Aide des rédacteurs en chef</a></td>
        <td><a href="/fr/help">Indice</a></td>
        <td><a href="/fr/help/devs">Aide aux développeurs</a></td>
      </tr>
    </tbody>
  </table>
</figure>