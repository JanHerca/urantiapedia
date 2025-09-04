---
title: "Urantiapedia — Configurer le projet GitHub"
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
        <td><a href="/fr/help/web_html_editor">Travailler directement depuis le site GitHub</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_content">Travailler localement sur le PC</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Travailler avec GitHub localement sur votre PC

Cette solution pour travailler sur GitHub est beaucoup plus complexe que l'option précédente expliquée dans ce manuel, travaillez directement depuis le site Web GitHub. Pour cette raison, il n’est recommandé qu’aux utilisateurs ayant une certaine connaissance de Git et GitHub. Il s’agit d’une option beaucoup plus flexible et puissante qui nous permet d’éditer Urantiapedia de manière plus rapide et plus approfondie. De plus, il vous permet d'exécuter des outils, appelés *Urantiapedia Tools*, qui effectuent des tâches automatisées très rapides.

Cela devrait être l'option la plus recommandée pour les utilisateurs *Administrateurs* ou *Rédacteurs en chef*, tandis que l'option permettant de travailler directement à partir du site Web GitHub est recommandée pour les utilisateurs *Rédacteurs adjoints*.

La première chose pour travailler localement sur GitHub est d'effectuer plusieurs installations logicielles que nous allons vous expliquer. Ensuite nous donnerons quelques conseils de configuration.

:warning: Il est supposé qu'avant de suivre ces étapes, nous avons déjà créé un compte sur GitHub et avons fait les copies (_forks_) nécessaires des projets Urantiapedia dans notre compte, comme détaillé dans [Premiers pas sur GitHub](/fr/help/github_fork).

## Installez Git sur votre PC

1. Accédez à https://git-scm.com/.
2. Téléchargez le programme d'installation de votre système d'exploitation. Vous disposez d'un didacticiel complet sur la façon de l'installer sur différents systèmes d'exploitation ici : [Installer Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). Sous Windows, utilisez le programme d'installation et laissez les options par défaut.
3. Vérifiez que Git est correctement installé en exécutant ceci dans un terminal : `git --version`. S'il renvoie le numéro de version, alors Git est correct.
4. Exécutez les commandes suivantes dans un terminal (Git installe un terminal appelé Git CMD que vous pouvez utiliser) pour configurer votre identité dans Git, avec votre nom et votre email. Ceci est requis pour que Git vous configure en tant que contributeur de code.

```
git config --global user.name "John Doe" 
git config --global user.email johndoe@example.com
```

## Installez Node.js sur votre PC

Node.js est une condition requise pour faire fonctionner les *Urantiapedia Tools*. Si vous ne comptez pas les exécuter, vous ne pouvez jamais sauter cette étape, même si elle est recommandée.
1. Accédez à https://nodejs.org/.
2. Téléchargez Node.js. Utilisez la version LTS actuelle disponible.
3. Installez avec les options par défaut.
4. Vérifiez que Node.js est correctement installé. Ouvrez un terminal et exécutez `node -v`. Si le numéro de version apparaît, alors Node.js est correct.

## Installer VS Code et GitLens

L'utilisation de Visual Studio Code est fortement recommandée.

1. Accédez à https://code.visualstudio.com/.
2. Téléchargez-le et installez-le. Lors de l'installation, il est conseillé de cocher l'option « Ajouter l'action 'Ouvrir avec code' au menu contextuel des répertoires » si vous êtes un utilisateur Windows.
3. Ouvrez-le. La première fois qu'il s'ouvre, vous pouvez définir certaines options. Ignorez-les.
4. Dans VS Code, cliquez sur le bouton _Extensions_ sur le panneau de boutons de gauche. Il est fortement recommandé d'installer une extension appelée « GitLens ». Elle figure généralement sur la liste des extensions les plus populaires. Localisez-le et cliquez sur le bouton d'installation.
5. Vous aurez désormais un nouveau bouton pour GitLens dans le panneau de boutons de gauche de VS Code. Cliquez dessus et cliquez sur le bouton _Welcome (Quick setup)_. La page _Welcome_ s'ouvre. Il est recommandé de sélectionner _Source control layout_ comme vue par défaut. Cela provoque la fusion de GitLens avec le panneau _Source control_ par défaut de VS Code.

## Cloner des projets Urantiapedia

1. Ouvrez le site Web GitHub et accédez à votre compte.
2. Ouvrez vos copies des projets Urantiapedia (_forks_) que vous auriez dû créer.
3. Sur la page principale de chaque copie, cliquez sur le menu vert appelé _Code_ et cliquez dessus pour copier l'URL du projet, quelque chose comme `https://github.com/<username>/urantiapedia.git` et ` https:/ /github.com/<username>/urantiapedia-backup.git`.

![](/image/help/github_setting_1.png)

4. Ouvrez VS Code, ouvrez le panneau _Source control_ et cliquez sur _Clone repository_.

![](/image/help/github_setting_2.png)

5. Dans la zone de texte qui apparaît, saisissez ou collez le chemin copié précédemment.
6. Sélectionnez _Clone from GitHub_.

![](/image/help/github_setting_3.png)

7. Cliquez sur _Allow in the GitHub extension to sign in_.
8. Une page Web apparaît demandant l'autorisation de VS Code pour accéder à GitHub. Cliquez sur _Continue_.
9. Cliquez sur _Authorize github_.
10. Vous êtes maintenant redirigé vers une nouvelle page Web où un message s'ouvre. Cliquez sur _Open VS Code_.
11. Cliquez maintenant sur _Open_ pour autoriser l'utilisation du chemin fourni. Si quelque chose ne va pas, répétez à partir du point 4.
12. Lorsque le nom du référentiel de votre projet Urantiapedia est affiché dans le centre de commande, sélectionnez-le. Une boîte de dialogue apparaîtra demandant un dossier. Sélectionnez n’importe quel dossier ou créez-en un pour le projet.

![](/image/help/github_setting_4.png)

13. Attendez quelques minutes que VS Code clone le référentiel. Cliquez enfin sur _Open repo_. Cliquez également sur _Yes, I trust the authors_.
14. Le projet s'ouvrira avec succès.
15. Effectuez ces mêmes étapes pour chaque projet, pour *urantiapedia* et pour *urantiapedia-backup*.

## Configurer les *Urantiapedia Tools*

Les *Urantiapedia Tools* sont une application de bureau développée en JavaScript avec [Electron](https://www.electronjs.org/). Il est utilisé pour exécuter des processus très rapides qui modifient des centaines de pages à la fois. Si vous n’en avez pas besoin, vous pouvez ignorer cette étape. Pour l'installer et l'exécuter, suivez ces étapes :

1. Ouvrez le projet *urantiapedia* dans VS Code. Pour ce faire, vous pouvez le faire de deux manières :
  - Ouvrir VS Code. Sélectionnez _File > Open folder_. Sélectionnez le dossier racine du projet, celui qui contient le fichier `package.json`.
  - En option, sous Windows, vous pouvez ouvrir le projet en utilisant le menu contextuel du dossier racine et sélectionner _Ouvrir avec Code_.
2. Ouvrez un terminal en utilisant _Terminal > New Terminal_. Assurez-vous que le terminal est ouvert dans le dossier racine du projet.
3. Pour installer les dépendances des *Urantiapedia Tools*, exécutez : `npm install`. Attendez qu'ils soient tous installés.

![](/image/help/github_setting_5.png)

4. Le projet est configuré avec une configuration d'exécution par défaut. Appuyez sur F5 pour exécuter l'application ou dans le terminal, exécutez « npm run start ».
5. L'application s'ouvre. Par défaut, une fenêtre _Dev Tools_ s'ouvre pour pouvoir déboguer. Si vous ne développez pas, vous pouvez l'ignorer ou le fermer.

![](/image/help/uptools.png)

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
        <td><a href="/fr/help/web_html_editor">Travailler directement depuis le site GitHub</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_content">Travailler localement sur le PC</a></td>
      </tr>
    </tbody>
  </table>
</figure>