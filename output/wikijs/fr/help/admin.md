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

Ce manuel est destiné aux utilisateurs appelés *administrateurs*, ou *admins* en abrégé, utilisateurs qui remplissent les conditions suivantes :
- utilisateurs enregistrés sur [GitHub](https://github.com/).
- les utilisateurs autorisés comme *admins* par l'équipe qui gère le projet Urantiapedia.
- utilisateurs enregistrés sur Urantiapedia. Seul un autre utilisateur *admin* peut enregistrer un utilisateur en tant que *admin*.
- les utilisateurs connaissant Linux, [Docker](https://www.docker.com/), [Kubernetes](https://es.wikipedia.org/wiki/Kubernetes), [Git](https: // git-scm.com/) et [GitHub](https://github.com/).
- des utilisateurs ayant une connaissance du *Le Livre d'Urantia* dans au moins une langue dans laquelle il est publié, et de préférence avec un bon niveau de la version anglaise.
- les utilisateurs qui souhaitent collaborer de manière désintéressée à l'incorporation d'informations liées au *Le Livre d'Urantia* dans *Urantiapedia*.

Les utilisateurs *admin* sont les seuls responsables du téléchargement en masse des modifications sur le site Web *Urantiapedia* à chaque étape du projet. Plus d'informations sur les jalons du projet dans [Jalons du projet](/fr/help/phases).

## Flux de travail GitHub

Le processus sera le suivant :
1. «Éditeur en chef» crée un *fork* (une copie dans son propre compte) du projet *Urantiapedia* sur GitHub (https://github.com/JanHerca/urantiapedia) et du projet *Urantia-backup* sur GitHub (https://github.com/JanHerca/urantiapedia-backup). Le premier est un projet qui contient tous les fichiers. Le second ne contient que les fichiers qui sont synchronisés avec le site Web *Urantiapedia*.
2. «Éditeur en chef» crée une copie locale des deux projets sur PC. La copie locale doit être de la dernière version du contenu *Urantiapedia* (la branche principale). Cela se fait d'abord via une action *clone* et plus tard via des actions *pulls* vers le projet, qui télécharge toute modification dans la copie locale.
3. «Le rédacteur en chef» apporte des modifications dans la copie locale aux fichiers indiqués dans ce manuel et de la manière expliquée. «Éditeur en chef» s'engage sur la copie locale.
4. «Éditeur en chef» envoie les modifications à son compte GitHub via une action *push*.
5. «Chief Editor» effectue une *pull request* sur le site Web GitHub vers les projets d'origine.
6. Les *demandes d'extraction* des «éditeurs en chef» sont examinées par des «administrateurs», qui sont chargés de faire une *fusion* avec la branche principale (maître) de tous les changements qui sont corrects. Toutes les modifications qui ne sont pas correctes seront rejetées et les «rédacteurs en chef» seront avertis pour les corriger.
7. Lorsque les modifications sont correctes et que «l'administrateur» a effectué la fusion, toutes les modifications apportées au projet *Urantiapedia-backup* sont automatiquement synchronisées avec le site Web. Désormais, les modifications sont visibles par tous, afin de vérifier et valider qu'elles sont correctes.
8. Le processus est répété autant de fois que nécessaire, en revenant au point 2.

![](/image/help/github_workflow_version_2.png)

## Mise en place du projet *Urantiapedia*

Avant tout travail dans *Urantiapedia* en utilisant GitHub, vous devez configurer tous les outils nécessaires. Vérifiez [Configuration du projet GitHub](/fr/help/github_setting).

## Contenu du projet Urantiapedia sur GitHub

Pour connaître le contenu du projet GitHub et sa structure, consultez [Contenu du projet GitHub](/fr/help/github_content).

## Tâches

Pour connaître les jalons du projet, consultez [Jalons d'Urantiapedia](/fr/help/phases).

Une fois que nous avons l'entrée dans les bons dossiers, pour chaque langue, les étapes à suivre dans Milestone I sont :
1. Traduire *Paramony* de l'anglais vers la langue cible. Vérifiez [Traduction de Paramony](/fr/help/github_paramony).
2. Traduire et réviser *Topic Index* de l'anglais vers la langue cible. Vérifiez [Traduction et révision de Topic Index](/fr/help/github_topicindex).
3. Obtenir une traduction du domaine public de *La Bible* dans la langue cible. Vérifiez [Obtenir la Bible](/fr/help/github_bible).
4. Convertir *Le Livre d'Urantia* de HTML en JSON sans notes de bas de page. Vérifiez [Conversion en JSON](/fr/help/github_book_json).
5. Ajouter des notes de bas de page *Paramony* au *Livre d'Urantia* en JSON. Vérifiez [Ajouter des notes de bas de page Paramony](/fr/help/github_footnotes).
6. Conversion de *Topic index* de TXT en Wiki.js. Vérifiez [Conversion de l'index de rubrique](/fr/help/github_topicindex_to_wiki).
7. Convertir *Le Livre d'Urantia* de JSON avec des notes de bas de page en Wiki.js, y compris des références à des sujets. Vérifiez [Convertir Le Livre d'Urantia](/fr/help/github_book_to_wiki).
8. Convertir *La Bible* de LaTeX en Wiki.js avec des notes de bas de page. Vérifiez [Convertir la Bible](/fr/help/github_bible_to_wiki).
9. Valider les modifications apportées au projet [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Cochez [Télécharger du contenu en masse sur Urantiapedia](/fr/help/github_upload).

Les *rédacteurs en chef* et les *rédacteurs adjoints* effectuent les tâches 1 à 3. *Les administrateurs* effectuent les tâches 4 à 9.

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