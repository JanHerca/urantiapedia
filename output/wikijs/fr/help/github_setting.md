---
title: Urantiapedia - Mise en place du projet GitHub
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
        <td><a href="/fr/help/web_html_editor">Utilisation de l'éditeur HTML</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_content">Contenu du projet GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Installez Git sur votre ordinateur

1. Allez sur https://git-scm.com/.
2. Téléchargez le programme d'installation pour votre système d'exploitation. Vous avez un tutoriel complet sur la façon d'installer dans différents systèmes d'exploitation ici: [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). Sous Windows, utilisez le programme d'installation et laissez toutes les options par défaut.
3. Vérifiez que Git est correctement installé en exécutant ceci dans un terminal: `git --version`. Si le numéro de version est renvoyé, alors Git est OK.
4. Exécutez les commandes suivantes dans un terminal (Git installe un terminal appelé Git CMD que vous pouvez utiliser) pour configurer votre identité dans Git, avec votre nom et votre adresse e-mail. Ceci est nécessaire pour que Git vous définisse comme contributeur au code.

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Créer un compte GitHub

Vous avez besoin d'un compte GitHub.
1. Allez sur https://github.com
2. Si vous avez déjà un compte, cliquez sur *Sign in* et validez.
3. Si vous n'avez pas de compte, créez-en un en cliquant sur *Sign up*. Entrez un nom d'utilisateur, une adresse e-mail et un mot de passe. Une fois que vous avez un compte, connectez-vous à GitHub avec celui-ci.
4. La première fois que vous entrez sur GitHub, il vous sera demandé de faire une vérification via notre compte de messagerie. Une fois vérifié, vous apparaîtrez sur la page d'accueil de GitHub.

## Installez Node.js sur votre ordinateur

Node.js est une exigence pour faire fonctionner *Urantiapedia Tools*.
1. Accédez à https://nodejs.org/.
2. Téléchargez Node.js. Utilisez la version LTS actuelle disponible.
3. Installez avec les options par défaut.
4. Vérifiez que Node.js est correctement installé. Ouvrez un terminal et exécutez `node -v`. Si le numéro de version apparaît, alors Node.js est OK.


## Projet Fork Urantiapedia

1. Ouvrez les pages du projet *Urantiapedia*:
   - https://github.com/JanHerca/urantiapedia
   - https://github.com/JanHerca/urantiapedia-backup
2. Créez un *fork* de chaque projet. Un *fork* n'est rien d'autre qu'une copie correcte d'un projet existant dans notre compte, de sorte que les modifications apportées à ce projet n'affectent pas le projet d'origine. Pour créer les *forks*, cliquez sur le bouton *Fork* dans le coin supérieur droit de chaque page GitHub.
3. Dans quelques secondes, une copie des projets *Urantiapedia* sera créée dans votre compte GitHub. Ces projets sont une nouvelle copie dans laquelle vous pouvez apporter les modifications dont vous avez besoin, sans affecter les projets originaux.

## Installer VS Code et GitLens

Il est recommandé d'utiliser Visual Studio Code.

1. Allez sur https://code.visualstudio.com/.
2. Téléchargez et installez-le. Lors de l'installation, il est recommandé de cocher «Ajouter une action 'Ouvrir avec le Code' au menu contextuel du dossier» si vous êtes un utilisateur Windows.
3. Ouvrez-le. La première fois qu'il est ouvert, vous pouvez configurer certains paramètres. Ignorez-les tous.
4. Dans VS Code, cliquez sur le bouton Extensions dans la barre de boutons de gauche. Il est fortement recommandé d'installer une extension appelée «GitLens». Il fait généralement partie des extensions les plus populaires. Localisez-le et cliquez sur le bouton d'installation.
5. Vous aurez maintenant un nouveau bouton pour GitLens dans la barre de boutons gauche de VS Code. Cliquez dessus et cliquez sur le bouton «Bienvenue (configuration rapide)». La page d'accueil s'ouvre. Il est recommandé de sélectionner “Source control layout” («Mise en page du contrôle de source») comme vue par défaut. Cela permet à GitLens de fusionner avec le panneau «Source control» par défaut dans VS Code.

## Cloner des projets Urantiapedia

1. Ouvrez le site Web GitHub et accédez à votre compte.
2. Ouvrez vos forks de projets Urantiapedia que vous avez créés auparavant.
3. Sur la page principale, localisez un menu vert nommé «Code» et cliquez dessus pour copier l'URL du projet, quelque chose comme `https://github.com/<username>/urantiapedia.git` et `https:/ /github.com/<nom d'utilisateur>/urantiapedia-backup.git`.
4. Ouvrez VS Code, ouvrez le panneau «Source control» et cliquez sur «Cloner le référentiel».
5. Dans la zone de texte qui apparaît, saisissez ou collez le chemin précédemment copié.
6. Sélectionnez «Cloner depuis GitHub».
7. Autoriser l'extension GitHub à se connecter.
8. Une page Web apparaît demandant d'autoriser VS Code à accéder à GitHub. Cliquez sur Continuer.
9. Cliquez sur Autoriser github.
10. Vous êtes maintenant redirigé vers une nouvelle page Web et un message s'ouvre. Cliquez sur «Ouvrir VS Code».
11. Cliquez maintenant sur Ouvrir pour autoriser l'utilisation du chemin URI fourni. Si quelque chose ne va pas, répétez à partir du point 4.
12. Lorsque le nom de votre référentiel Urantiapedia apparaît dans la palette de commandes, sélectionnez-le. Une boîte de dialogue apparaît demandant un dossier. Sélectionnez n'importe quel dossier pour le projet ou créez-en un.
13. Attendez quelques secondes que VS Code clone le référentiel. Cliquez enfin sur «Ouvrir le dépôt». Cliquez également sur «Oui, je fais confiance aux auteurs».
14. Le projet s'ouvrira correctement.

## Configurer *Urantiapedia Tools*

*Urantiapedia Tools* est une application de bureau JavaScript développée avec [Electron](https://www.electronjs.org/). Pour l'installer et l'exécuter, suivez ces étapes:

1. Ouvrez VS Code et sélectionnez Fichier > Ouvrir le dossier. Sélectionnez ensuite le dossier racine du projet, celui qui contient le fichier `package.json`.
2. Alternativement, sous Windows, vous pouvez ouvrir le menu contextuel du dossier racine et sélectionner «Ouvrir avec le Code».
3. Ouvrez un terminal en utilisant Terminal > Nouveau terminal. Assurez-vous que le terminal est ouvert dans le dossier racine du projet.
4. Pour installer les dépendances, exécutez: `npm install`. Attendez qu'ils soient tous installés.
5. Le projet est configuré avec une configuration de lancement par défaut. Appuyez sur F5 pour exécuter ou dans le terminal, exécutez `npm run start`.
6. L'application s'ouvre. Par défaut, une fenêtre Dev Tools est ouverte pour le débogage. Vous pouvez l'ignorer ou le fermer s'il ne se développe pas.

![](/image/help/uptools.png)

## Valider et pousser les modifications

Vos référentiels locaux sont une copie complète des projets afin que vous puissiez y enregistrer des modifications chaque fois que vous avez des modifications pouvant être publiées.

1. Vous verrez que vous avez des modifications lorsqu'un nombre apparaît dans l'icône du bouton «Source control».
2. Cliquez dans «Source control».
3. Dans le sous-panneau «Source control», vous verrez une liste des fichiers modifiés. Passez la souris dessus et cliquez sur le bouton «Changements d'étape» qui apparaîtra.
4. Une fois que les changements sont dans l'étape, entrez un message pour le commit et cliquez sur le bouton «Commit». Les modifications sont ajoutées à votre référentiel local.
5. Pour envoyer vos modifications à votre référentiel distant dans GitHub, cliquez sur le bouton «Synchroniser les modifications» qui apparaît lorsque de nouveaux commits existent. Cela tirera et poussera toutes les modifications entre vos copies locales et distantes du projet.
6. Vous pouvez vérifier que vos commits sont poussés correctement en ouvrant votre page GitHub Urantiapedia.

## Synchroniser les modifications entre les projets

Le projet Urantiapedia est la version pour le développement et le travail avec le contenu. Le projet Urantiapedia-backup ne contient que le contenu et est synchronisé avec la page Web, donc y apporter des modifications équivaut à apporter des modifications massives au Web.

Si vos modifications apportées au projet Urantiapedia incluent des modifications du contenu (dossier `/output/wikijs`), vous devez synchroniser ces modifications avec le projet Urantiapedia-backup avec n'importe quel utilitaire de synchronisation ou simplement en copiant et collant entre les dossiers.

## Créer des «pull request» pour les projets Urantiapedia

Lorsque vous avez un nombre suffisant de commits poussés vers vos propres forks des projets Urantiapedia, vous pouvez envoyer vos modifications aux projets afin que les modifications puissent être examinées et fusionnées. C'est ce qu'on appelle une «pull request» dans la terminologie GitHub.

1. Ouvrez chacune des pages Urantiapedia dans GitHub.
   - `https://github.com/<username>/urantiapedia`
   - `https://github.com/<username>/urantiapedia-backup`
2. Assurez-vous que vous êtes dans la branche principale appelée «master». La branche apparaît dans un menu en haut de la liste des fichiers.
3. Sélectionnez le menu Contribuer qui apparaît ci-dessous, puis sélectionnez «Open pull request». Si le menu indique «This branch is not ahead of the upstream master» («Cette branche n'est pas en avance sur le maître en amont»), vous devez d'abord faire une récupération du projet principal. Voir ci-dessous.
4. Ajoutez un titre à vos contributions. Vous pouvez également ajouter une description.
5. Cliquez sur «Create pull request». Faites une «pull request» pour chaque projet avec des modifications.
6. Cela enverra une notification aux utilisateurs «admin» du projet qui fusionneront vos modifications s'ils ne trouvent aucun problème.

## Synchronisez vos fourches

Comme *Urantiapedia* est l'effort d'une équipe de collaborateurs, il est courant qu'à tout moment vos fourches de projets soient désynchronisées avec les projets principaux. C'est une bonne pratique qu'avant toute pull request vous synchronisiez vos forks avec les projets principaux.

1. Ouvrez n'importe laquelle de vos pages Urantiapedia dans GitHub.
2. Sélectionnez le menu «Fetch upstream» qui apparaît sous le sélecteur de branche et cliquez dans «Fetch and merge». Cela copiera toutes les nouvelles modifications du projet principal vers votre projet fork.
3. Accédez à VS Code.
4. Ouvrez le projet et expliqué précédemment.
5. Dans le panneau «Source control», accédez au sous-panneau «Remotes». Vous devez avoir un référentiel distant listé ici appelé `JanHerca/urantiapedia`. Cliquez sur le bouton «Fetch» à côté du nom. Cette action effectue une récupération et une poussée en même temps pour synchroniser le référentiel local.
6. Parfois, des changements dans le code «Urantiapedia Tools» impliquent des changements dans les dépendances. Vous devez installer ou mettre à jour de nouvelles dépendances en exécutant la commande «npm install» à partir d'un terminal dans VS Code. Cela mettra à jour les dépendances du projet.

## Sommaire

En résumé, le processus dans GitHub est le suivant (voir le schéma):
1. «L'éditeur en chef» crée un *fork* (une copie dans son propre compte) des projets *Urantiapedia* sur GitHub: *Urantiapedia* et *Urantiapedia-backup*.
2. «L'éditeur en chef» crée une copie locale des projets sur PC. Cela se fait d'abord via une action *clone*, puis via des actions *Fetch upstream* sur le Web GitHub et via des actions *pulls* vers les projets locaux, qui téléchargent toute modification dans la copie locale.
3. «L'éditeur en chef» apporte des modifications à la copie locale des projets et s'engage sur la copie locale.
4. «L'éditeur en chef» envoie des modifications aux projets GitHub via des actions *push*.
5. Ensuite, «l'éditeur en chef» crée des *pull requests* à partir du site Web GitHub pour les deux projets: *Urantiapedia* et *Urantiapedia-backup*.
6. Ces *pull requests* des «éditeurs en chef» sont examinées par des «administrateurs», qui sont chargés de faire une *merge* avec la branche principale (maître) de tous les changements qui sont corrects. Toutes les modifications qui ne sont pas correctes seront rejetées et les «éditeurs en chef» seront avertis de les corriger.
7. Lorsque les modifications sont correctes, un «administrateur» en fait une *merge* et elles sont automatiquement synchronisées avec le Web.

![](/image/help/github_workflow_version_2.png)

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
        <td><a href="/fr/help/web_html_editor">Utilisation de l'éditeur HTML</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_content">Contenu du projet GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>