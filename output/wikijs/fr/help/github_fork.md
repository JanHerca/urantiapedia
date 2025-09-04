---
title: "Urantiapedia — Commencer sur GitHub"
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
        <td><a href="/fr/help/devs">Aide aux développeurs</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_edit_on_web.md">Travailler directement depuis le site Web GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Avant de faire quoi que ce soit sur GitHub, vous devrez suivre ces étapes :

1. Vous avez besoin d'un compte GitHub. Accédez à https://github.com
2. Si vous possédez déjà un compte, cliquez sur *Sign in* et validez.
3. Si vous n'avez pas de compte, créez-en un en cliquant sur *Sign up*. Entrez un nom d'utilisateur, une adresse e-mail et un mot de passe. Une fois que vous avez un compte, connectez-vous à GitHub avec celui-ci.
4. La première fois que vous entrez dans GitHub, il vous demandera une vérification par e-mail. Une fois vérifié, vous apparaîtrez sur votre page GitHub.
5. Ouvrez les pages du projet *Urantiapedia* :
  - https://github.com/JanHerca/urantiapedia
  - https://github.com/JanHerca/urantiapedia-backup
6. Créez un *fork* des projets. Un *fork* n'est rien de plus qu'une copie d'un projet sur votre propre compte, de sorte que les modifications apportées à la copie n'affectent pas le projet original. Pour créer un *fork*, cliquez sur le bouton *Fork* dans le coin supérieur droit de chaque page de projet GitHub.

![](/image/help/github_fork_1.png)

7. Dans quelques secondes, une copie des projets *Urantiapedia* sera créée dans votre compte GitHub. Ces projets constituent une copie nouvelle et complète dans laquelle vous pouvez apporter toutes les modifications dont vous avez besoin sans affecter les projets originaux. Vérifiez que vous les avez en cliquant sur votre menu utilisateur et en sélectionnant _Your repositories_ pour revenir à votre compte. Vous devriez voir les deux projets et un message indiquant _Forked from ..._.

![](/image/help/github_fork_2.png)

![](/image/help/github_fork_3.png)

8. À partir de là, vous avez deux options :
  - [Travailler directement depuis le site Web GitHub](/fr/help/github_edit_on_web). Cette procédure est recommandée car elle est très simple.
  - Travailler localement sur le PC. Cette procédure est plus complexe. Nécessite plus d'étapes :
    - [Configurer le projet Urantiapedia GitHub](/fr/help/github_setting)
    - [Suivez le workflow GitHub](/fr/help/github_edit_local)


## :warning: IMPORTANT : Comment maintenir votre copie à jour

Vos copies (*forks*) des deux projets *Urantiapedia* (*urantiapedia* et *urantiapedia-backup*) sont des copies que GitHub ne met pas à jour automatiquement. À partir du moment où vous les créez, d'autres utilisateurs créeront des modifications dans le projet d'origine, et ces modifications ne seront pas automatiquement reflétées dans vos projets. N'oubliez pas que vos projets **sont une copie indépendante** et que les modifications apportées à la copie ou à l'original ne sont pas synchronisées sans surveillance avec l'autre.

**Il est donc très important qu'avant d'apporter des modifications aux fichiers de vos copies, vous vous assuriez qu'ils sont synchronisés avec l'état actuel des projets originaux.**

Pour ce faire, **avant toute séance de travail** (détaillée dans les étapes suivantes de ce manuel) **vous devez suivre ces étapes simples** :

1. Cliquez sur chacune de vos copies des projets, et une fois là-bas, cliquez sur l'option _Sync fork_. Un menu s'affichera indiquant combien de _commits_ ont été effectués sur le projet original qui ne figurent pas dans votre copie. Dans l'image vous pouvez voir qu'il y a 4 sauvegardes que nous n'avons pas et donc notre copie est obsolète (_This branch is out-of-date_). Cliquez simplement sur _Update branch_ pour apporter les modifications du projet d'origine à votre copie.

![](/image/help/github_fork_4.png)

2. Attendez quelques secondes pendant que GitHub met à jour votre copie. A la fin, si vous cliquez à nouveau sur l'option _Sync fork_ vous verrez que tout est déjà mis à jour indiquant que les modifications ne sont pas en retard sur l'original (_This branch is not behind the upstream_).

![](/image/help/github_fork_5.png)

Vous devrez penser à effectuer cette opération sur chaque projet à chaque fois que vous souhaiterez démarrer un travail de modification. Que faire si on oublie de faire cette opération ? Normalement, rien ne se passera tant que les fichiers que nous allons modifier n'auront déjà reçu aucune modification. Vous pourrez continuer à travailler sans problème et effectuer toutes les tâches décrites dans les étapes suivantes du manuel, mais il est fortement recommandé de suivre la pratique plus sûre consistant à effectuer ces étapes avant toute modification.

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/web_html_editor">Utilisation de l'éditeur HTML</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_edit_on_web.md">Travailler directement depuis le site Web GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>