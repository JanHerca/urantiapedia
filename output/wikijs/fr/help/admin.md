---
title: "Urantiapedia — Aide aux administrateurs"
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
        <td><a href="/fr/help/roles">Profils des collaborateurs</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github">Aide des rédacteurs en chef</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## À propos d'Urantiapédia

[Urantiapedia](https://urantiapedia.org) est un site Web collaboratif basé sur [Wiki.js](https://js.wiki/) dans le but d'être un centre unifié pour la diffusion de toutes les connaissances concernant *Le Livre d'Urantia*.

## À propos de l'inscription sur Urantiapedia et Blue Fields

Si vous souhaitez collaborer à ce projet, le meilleur moyen de contact est urantiapedia@gmail.com. Envoyez un message commentant votre intérêt pour le projet et les Administrateurs se chargeront de vous donner accès.

Un autre moyen qui sera bientôt disponible sera l'inscription sur le site Web [Blue Fields](https://blue-fields.netlify.app/), qui est un site Web qui a été créé pour unir et organiser les lecteurs de *El Urantia. Book* qui souhaitent participer à des projets intelligents, utiles et altruistes à travers le monde. Une fois inscrit, l’équipe du projet vous contactera. Le projet Urantiapedia sur Blue Fields est accessible ici : [Urantiapedia on Blue Fields](https://blue-fields.netlify.app/projects/292396532506821125). Cependant, ce site Web n'est pas opérationnel à 100 %, un contact par e-mail est donc recommandé.

## À propos de GitHub

[GitHub](https://github.com/) est une plateforme de contrôle de version dans les projets collaboratifs, notamment dans les projets de code ou de contenu Web.

Le projet *Urantiapedia* sur GitHub (https://github.com/JanHerca/urantiapedia) est un projet qui contient tout le contenu du site Web, plus une application (*Urantiapedia Tools*) pour aider à automatiser la création de contenu. Le projet *Urantiapedia-backup* (https://github.com/JanHerca/urantiapedia-backup) est le mécanisme utilisé pour effectuer des téléchargements massifs de contenu.

## À qui s'adresse ce manuel ?

Ce manuel s'adresse aux utilisateurs *administrateurs*, ou *admins*, c'est-à-dire :
- les utilisateurs enregistrés sur [GitHub](https://github.com/).
- les utilisateurs autorisés comme *admins* par l'équipe qui gère le projet Urantiapedia.
- utilisateurs enregistrés sur Urantiapedia. Seul un autre utilisateur *admin* peut enregistrer un utilisateur en tant que *admin*.
- les utilisateurs connaissant Linux, [Docker](https://www.docker.com/), [Kubernetes](https://es.wikipedia.org/wiki/Kubernetes), [Git](https: // git-scm.com/) et [GitHub](https://github.com/).
- des utilisateurs ayant une connaissance du *Le Livre d'Urantia* dans au moins une langue dans laquelle il est publié, et de préférence avec un bon niveau de la version anglaise.
- les utilisateurs qui souhaitent collaborer de manière désintéressée à l'incorporation d'informations liées au *Le Livre d'Urantia* dans *Urantiapedia*.

Les administrateurs Web sont les seuls chargés de télécharger des changements massifs sur le site Web *Urantiapedia* pendant chacune des phases du projet. Pour en savoir plus sur les phases du projet, consultez [Aide à démarrer](/fr/help/phases).

## Procédure de travail dans GitHub

Le processus de travail dans GitHub est détaillé dans le manuel d'utilisation des projets Urantiapedia sur GitHub. Vous devriez commencer par jeter un œil à [Premiers pas dans GitHub](/fr/help/github_fork), puis continuer à partir de là avec le reste des étapes à suivre et les différentes options disponibles pour travailler sur GitHub.

Ceci est l'index complet du manuel :
- [Démarrer sur GitHub](/fr/help/github_fork)
- Travailler sur GitHub :
  - [Travailler directement depuis le site Web de GitHub](/fr/help/github_edit_on_web)
  - Travailler localement sur GitHub :
    - [Configurer le projet GitHub](/fr/help/github_setting)
    - [Travailler localement sur PC](/fr/help/github_edit_local)
- [Contenu du projet GitHub](/fr/help/github_content)
- [Workflow pour créer contenu initial dans une langue](/fr/help/github_initial_flow)

## Collaboration via ce site Web

Ce type de collaboration, en raison des risques encourus, est réservé aux utilisateurs *Administrateurs* et *Rédacteurs en chef*. Dans le cas des premiers, ils peuvent modifier n’importe quel contenu ; Dans le cas de ces derniers, ils n’auront accès qu’à l’édition de certaines sections.

Dans ce cas, toutes les tâches sont effectuées via ce site Internet. Il est nécessaire de se connecter avec le compte d'édition fourni et de suivre les manuels pour effectuer des modifications :
- [Interface et utilisation de base d'Urantiapedia](/fr/help/web_basics)
- [Gestion des pages](/fr/help/ web_pages )
- [Utilisation des éditeurs](/fr/help/web_editors)
  - [Utilisation de l'éditeur visuel](/fr/help/web_visual_editor)
  - [Utilisation de l'éditeur Markdown](/fr/help/web_markdown_editor)
  - [ Utilisation de l'éditeur HTML](/fr/help/web_html_editor)

## Tâches

À propos des phases du projet, consultez [Urantiapedia Phases](/fr/help/phases).

### Étape I : Le Livre d'Urantia et la Bible


Une fois que nous avons l'_input_ initial dans les bons dossiers, en suivant les étapes du manuel indiqué ci-dessus, pour chaque langue, pendant la phase I, les étapes à suivre sont :
1. Traduction de *Paramony* de l'anglais vers la langue cible. Voir [Traduction Paramony](/fr/help/github_paramony).
2. Obtenir une traduction de la Bible dans la langue cible. Voir [Obtenir la Bible](/fr/help/github_bible).
3. Conversion du *Livre d'Urantia* de HTML en JSON sans notes de bas de page. Voir [Conversion en JSON](/fr/help/github_book_json).
4. Ajout de notes de bas de page au *Le Livre d'Urantia* en JSON. Voir [Ajout de notes de bas de page](/en/help/github_footnotes).
5. Conversion du *Le Livre d'Urantia* de JSON avec des notes de bas de page vers Wiki.js, y compris des références aux termes. Voir [Conversion du Livre d'Urantia](/fr/help/github_book_to_wiki).
6. Conversion de *La Bible* de LaTeX vers Wiki.js avec notes de bas de page. Consultez [Conversion biblique](/fr/help/github_bible_to_wiki).
7. Téléchargez les modifications sur [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Voir [Télécharger du contenu en masse sur Urantiapedia](/fr/help/github_upload).

### Étape II : Hémérothèque, Bibliothèque et Encyclopédie

1. Créez un catalogue d'articles rédigés par des lecteurs. Voir [Catalogue d'articles](/fr/help/github_articles_catalog).
2. Récupérez les objets. Voir [Obtenir les articles](/en/help/github_articles_markdown).
3. Créez un catalogue d’aides à l’étude. Voir [Catalogue d'aide aux études](/fr/help/github_studyaids_catalog).
4. Obtenez les supports d’étude ci-dessus. Voir [Obtenir des aides à l'étude](/fr/help/github_studyaids_markdown).
5. Création d'un catalogue de livres de toutes religions. Voir [Catalogue de livres](/fr/help/github_religious_books_catalog).
6. Obtenez les livres précédents. Voir [Obtenir des livres](/en/help/github_religious_books_markdown).
7. Création d'un catalogue de livres supposément utilisés par les révélateurs. Voir [Création d'un catalogue](/fr/help/github_sourcebooks_catalog)
8. Obtenir des livres supposément utilisés par les révélateurs. Voir [Obtenir livres](/fr/help/github_sourcebooks_markdown)
9. Traduction et révision de l'*Encyclopédie* de l'anglais vers la langue cible. Voir [Traduction et révision de l'Encyclopédie](/fr/help/github_topicindex).
10. Conversion de l'*Encyclopédie* de TXT en Wiki.js. Voir [Conversion d'Encyclopédie](/fr/help/github_topicindex_to_wiki).


### Étape IV - Cartothèque et Médiathèque

1. Créez un catalogue de diagrammes. Voir [Catalogue de diagrammes](/fr/help/github_diagrams_catalog).
2. Obtenez les diagrammes ci-dessus au format HTML ou de préférence au format de carte d'image SVG. Voir [Obtenir des diagrammes](/en/help/github_diagrams_svg).
3. Créez le catalogue d'images du projet. Voir [Catalogue d'images](/fr/help/github_images_catalog).

![](/image/help/formats.png)

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
        <td><a href="/fr/help/roles">Profils des collaborateurs</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github">Aide des rédacteurs en chef</a></td>
      </tr>
    </tbody>
  </table>
</figure>