---
title: "Urantiapedia — Aide aux développeurs"
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
        <td><a href="/fr/help/devs">Aide des éditeurs adjoints</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/web_basics">Interface et utilisation de base d'Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## À propos d'Urantiapédia

[Urantiapedia](https://urantiapedia.org) est un site Web collaboratif basé sur [Wiki.js](https://js.wiki/) dans le but d'être un centre unifié pour la diffusion de toutes les connaissances concernant *Le Livre d'Urantia*.

## À propos des champs bleus

[Blue Fields](https://blue-fields.netlify.app/) est un site Web qui a été créé pour rejoindre et organiser les lecteurs du *Livre d'Urantia* qui souhaitent collaborer à des projets intelligents, utiles et altruistes partout dans le monde. monde. C'est le site web qui gère le registre et la collaboration entre les bénévoles d'*Urantiapedia*.

## À propos de GitHub

Le projet [Urantiapedia](https://github.com/JanHerca/urantiapedia) sur GitHub est un projet créé pour servir de procédure de démarrage rapide pour le contenu *Urantiapedia*. Il contient des fichiers dans certains formats et des logiciels qui aident à automatiser la création du contenu initial.

## À qui s'adresse ce manuel ?

Ce manuel est destiné aux «Développeurs», ou aux utilisateurs qui se conforment aux exigences suivantes :
- utilisateurs enregistrés avec un compte sur [Blue Fields](https://blue-fields.netlify.app/), sur [Urantiapedia](https://urantiapedia.org) et sur [GitHub](https://github .com/).
- autorisés en tant que collaborateurs du projet par l'équipe qui gère le projet sur la plateforme [Blue Fields](https://blue-fields.netlify.app/).
- avec une bonne connaissance de HTML, CSS, Javascript, [Node.js](https://nodejs.org/), [Git](https://git-scm.com/), [GitHub](https: //github.com/), [Bootstrap](https://getbootstrap.com/) et [Vue.js](https://vuejs.org/).

## Flux de travail GitHub

Le processus est le workflow GitHub habituel :
1. «Développeur» crée un *fork* (une copie dans son propre compte) du projet *Urantiapedia* sur GitHub (https://github.com/JanHerca/urantiapedia) pour le développement dans *Urantiapedia Tools*, ou crée un * fork* de Wiki.js (https://github.com/Requarks/wiki) pour développer dans *Wiki.js*.
2. «Développeur» crée une copie locale du projet sur PC. La copie locale doit être de la dernière version de la branche master. Cela se fait d'abord via une action * clone * et plus tard via des actions *pulls* vers le projet, qui télécharge toute modification dans la copie locale.
3. «Développeur» apporte des modifications à la copie locale et s'y engage.
4. Le «développeur» envoie les modifications à GitHub via un *push*.
5. Pour *Urantiapedia Tools*, comme il s'agit d'un référentiel détenu, il est possible de faire une *pull request* depuis le site Web GitHub. Dans le cas de *Wiki.js*, comme il appartient à un tiers, il est nécessaire de créer une *merge* dans le this *fork* https://github.com/JanHerca/wiki pour centraliser les *pull requests* à Wiki,js *en amont* quand c'est nécessaire et pour coordonner les développements.
6. Les *pull requests* sont examinées par des développeurs autorisés, chargés de faire une *merge* dans la branche master de tous les changements qui sont OK. Toute modification invalide est rejetée et est notifiée pour un correctif.
7. Lorsque des modifications sont apportées à Wiki.js et sont OK, nous pouvons procéder au lancement d'une nouvelle version du serveur. Cette tâche est effectuée par les «Admins».
8. Le processus est répété autant de fois que nécessaire, en revenant au point 3.

## Installer un serveur de développement

Voir https://docs.requarks.io/install.

Voir https://docs.requarks.io/install/upgrade.

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
        <td><a href="/fr/help/devs">Aide des éditeurs adjoints</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/web_basics">Interface et utilisation de base d'Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>