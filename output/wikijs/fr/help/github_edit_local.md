---
title: "Urantiapedia — Travailler localement sur PC"
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
        <td><a href="/fr/help/github_setting">Configurer le projet GitHub</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_content">Contenu du projet GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Apportez des modifications à votre copie locale et enregistrez-les.

Vos référentiels locaux sont une copie complète des projets qui se trouvent sur GitHub afin que vous puissiez enregistrer les modifications localement à chaque fois que vous en avoir. Lorsque vous travaillez localement, vous pouvez apporter des modifications à des centaines de fichiers à la fois, puis effectuer une seule sauvegarde (_commit_) de chacun d'entre eux.

1. Vous verrez que vous avez des modifications lorsqu'un numéro apparaît sur l'icône du bouton _Source control_.

![](/image/help/github_setting_6.png)

2. Cliquez sur _Source control_.
3. Dans le sous-panneau _Source control_, vous verrez une liste des fichiers modifiés. Passez la souris sur eux et cliquez sur le bouton _Stage changes_ qui apparaîtra.

![](/image/help/github_setting_7.png)

4. Une fois les modifications en *stage*, entrez un message pour la sauvegarde (*commit*) et cliquez sur le bouton _Commit_. Les modifications sont ajoutées à votre référentiel local.
5. Pour transférer vos modifications vers votre référentiel distant sur GitHub, cliquez sur le bouton _Sync changes_ qui apparaît lorsqu'il y a de nouveaux *commits*. Cela *pull* et *push* recevra et enverra toutes les modifications entre vos copies locales et distantes du projet.
6. Vous pouvez vérifier que vos *commits* sont soumis correctement en ouvrant votre page GitHub Urantiapedia.

## Synchroniser les changements entre les deux projets Urantiapedia

Le projet *Urantiapedia* est la version pour développer et travailler avec le contenu. Le projet *Urantiapedia-backup* contient uniquement le contenu et est synchronisé avec le site Web, donc y apporter des modifications équivaut à apporter des modifications massives au site Web, à condition que ces modifications soient introduites par les Administrateurs ou acceptées par les Administrateurs via une demande de changement.

Si vos modifications apportées au projet *Urantiapedia* incluent des modifications du contenu (dossier `/output/wikijs`), vous devez synchroniser ces modifications avec le projet *Urantiapedia-backup* avec n'importe quel utilitaire de synchronisation ou simplement en copiant et collant entre les dossiers.

Cette duplication des deux projets peut être un peu lourde mais elle est conçue ainsi pour des raisons de sécurité.

## Créer des demandes d'extraction pour les projets Urantiapedia

Lorsque vous avez envoyé un nombre suffisant de commits à vos propres copies des *forks* d'Urantiapedia, vous pouvez envoyer une demande d'extraction aux projets d'origine ( _pull request_) afin que les modifications puissent être révisées et fusionnées dans ceux-ci. C'est ce qu'on appelle une _pull request_ dans la terminologie GitHub.

1. Ouvrez chacune des pages Urantiapedia sur GitHub.
   - `https://github.com/<username>/urantiapedia`
   - `https://github.com/<username>/urantiapedia-backup`
2. Assurez-vous que vous êtes sur la branche principale appelée _master_. La branche apparaît dans un menu en haut de la liste des fichiers. Normalement, vous n'aurez que cette branche.
3. Sélectionnez le menu _Contribute_ ci-dessous, puis sélectionnez _Open pull request_. Si le menu indique _This branch is not ahead of the upstream master_ (_Cette branche n'est pas en avance sur le maître en amont_), vous devez d'abord *fetch* le projet principal. Regardez devant vous.

![](/image/help/github_setting_8.png)

4. Ajoutez un titre à vos contributions. Vous pouvez également ajouter une description.
5. Cliquez sur _Create pull request_. Faites une _pull request_ pour chaque projet dans lequel vous avez des modifications.

![](/image/help/github_edit_7.png)

6. Cela enverra une notification aux *administrateurs* du projet qui fusionneront vos modifications s'ils ne trouvent aucun problème.

## Synchronisez vos copies des projets (_forks_)

Comme *Urantiapedia* est l'effort d'une équipe de collaborateurs, il est courant qu'à tout moment vos copies des projets (*forks*) ne soient pas synchronisées avec les projets originaux. Il est de bonne pratique qu'avant toute *pull request*, vous synchronisiez vos *forks* avec les projets originaux.

1. Ouvrez n’importe lequel de vos projets Urantiapedia sur GitHub.
2. Cliquez sur l'option _Sync fork_. Un menu s'affichera indiquant combien de commits ont été effectués sur le projet original qui ne figurent pas dans votre copie. Dans l'image vous pouvez voir qu'il y a 4 sauvegardes que nous n'avons pas et donc notre copie est obsolète (_This branch is out-of-date_). Cliquez simplement sur _Update branch_ pour apporter les modifications du projet d'origine à votre copie.

![](/image/help/github_fork_4.png)

3. Attendez quelques secondes pendant que GitHub met à jour votre copie. A la fin, si vous cliquez à nouveau sur l'option _Sync fork_ vous verrez que tout est déjà mis à jour indiquant que les modifications ne sont pas en retard sur l'original (_This branch is not behind the upstream_).

![](/image/help/github_fork_5.png)

4. Accédez à VS Code.
5. Ouvrez le projet comme déjà expliqué.
5. Dans le panneau _Source control_, accédez au sous-panneau _Commits_. Cliquez sur le petit bouton _Fetch_ puis sur le bouton _Pull_ à côté. Cette action récupère et transmet les modifications en même temps pour synchroniser le référentiel local.

![](/image/help/github_setting_9.png)

6. Parfois, les modifications apportées au code des *Urantiapedia Tools* impliquent des modifications des dépendances. Vous devez installer ou mettre à jour de nouvelles dépendances en exécutant la commande `npm install` depuis un terminal dans VS Code. Cela mettra à jour les dépendances du projet.


## Résumé

En résumé, le processus sur GitHub est le suivant (voir schéma) :
1. Les « Rédacteurs en Chef » créent une copie (1) (*fork*) dans leur propre compte des projets *Urantiapedia* sur GitHub : *Urantiapedia* et *Urantiapedia-backup*. Ils gardent également ces copies synchronisées à l'aide d'un _Sync fork_ ou d'un _Fetch Upstream_ (1).
2. Les « rédacteurs en chef » créent une copie locale des projets sur leur PC. Cela se fait via une action *clone* (2) dans VS Code. Ils maintiennent également ces copies locales synchronisées via les actions *fetch* + *pull* dans VS Code (2), qui suppriment toutes les modifications apportées à la copie locale.
3. Les « rédacteurs en chef » apportent des modifications à la copie locale des projets et s'engagent * (3) sur leur copie locale pour enregistrer les modifications.
4. Les « rédacteurs en chef » transmettent leurs modifications à leurs projets GitHub via des actions *push* (4).
5. Les « rédacteurs en chef » créent ensuite des *pull request* (5) à partir du site Web GitHub pour les projets *Urantiapedia* et *Urantiapedia-backup*.
6. Ces *pull request* des « Rédacteurs en chef » sont examinées par un « Administrateur », qui est chargé de faire une fusion (6) de toutes les modifications qui sont correctes. Toute modification incorrecte sera rejetée (6) et les « Rédacteurs en chef » en seront informés afin qu'ils puissent les corriger.
7. Lorsque les modifications sont correctes, la fusion avec le projet original *urantiapedia-backup* entraîne la synchronisation automatique des modifications avec le site Web, qui apparaîtra mis à jour dans quelques minutes. (7)

![](/image/help/github_workflow_version_2.png)

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_setting">Configurer le projet GitHub</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_content">Contenu du projet GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>