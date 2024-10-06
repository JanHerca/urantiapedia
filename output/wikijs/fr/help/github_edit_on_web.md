---
title: "Urantiapedia — Travaillez directement à partir du site Web GitHub"
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
        <td><a href="/fr/help/github_fork">Démarrer sur GitHub</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_setting.md">Configurer le projet GitHub Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Travailler directement depuis le site GitHub est la procédure recommandée car elle est très simple par rapport à la procédure pour travailler localement sur le PC. Il s'agit de l'option recommandée pour les utilisateurs *Assistants Editors*. Pour les utilisateurs *Administrateurs* ou *Rédacteurs en chef*, l'option expliquée dans les pages suivantes de ce manuel est recommandée. 

Supposons un exemple dans lequel nous modifierons un article contenant des erreurs de traduction. Les étapes seraient les suivantes : 

1. Entrez votre *fork* du projet *Urantiapedia* (`https://github.com/user-name/urantiapedia` où _user-name_ est votre nom d'utilisateur). 
2. Accédez à n'importe quel fichier que vous souhaitez modifier à l'aide de la liste des répertoires. Dans notre exemple nous allons corriger une erreur dans un fichier qui se trouve dans `urantiapedia / output / wikijs / es /article / Alain_Cyr / Our_Experience...`. Une fois dans le fichier, il peut être lu confortablement dans son mode _Preview_, comme le montre l'image. Là, nous avons détecté une erreur qui dit _pero las cuentas se perdieron_ (_mais les comptes ont été perdus_) au lieu de quelque chose de plus correct comme _pero perdí la cuenta_ (_mais j'ai perdu le compte_). 

![](/image/help/github_edit_1.png) 

3. Cliquez sur le menu supérieur avec une icône en forme de crayon et sélectionnez _Edit in place_. 

![](/image/help/github_edit_2.png) 

4. Vous entrerez en mode édition. Trouvez le texte erroné et modifiez-le. Lorsque vous avez apporté toutes les modifications nécessaires au fichier, cliquez sur le bouton vert _Commit changes..._ 

![](/image/help/github_edit_3.png) 

5. Il vous sera demandé de confirmer que vous souhaitez enregistrer certains changements. Laissez le message par défaut ou mettez un message plus descriptif sur vos modifications là où il est indiqué _Commit message_. Gardez l'option _Commit directly to the master branch_ sélectionnée (ne vous inquiétez pas car vous êtes le seul à travailler sur votre copie du projet). Cliquez enfin sur _Commit changes_. 

![](/image/help/github_edit_4.png)

6. Nous allons maintenant créer une _pull request_ pour transférer les modifications que nous avons apportées dans notre copie du projet au projet d'origine. Pour ce faire, sélectionnez l'option _Pull request_ dans le menu principal de GitHub. Si c'est votre première fois, une liste vide apparaîtra, comme dans l'image suivante. 

![](/image/help/github_edit_5.png) 

7. Cliquez sur le bouton vert _New pull request_ pour créer une nouvelle pull request. Un écran de comparaison apparaîtra entre vos modifications et le projet d'origine. Si la comparaison n'a pas trouvé de conflits, un message _Able to merge_ apparaîtra. Vous pouvez cliquer sur le bouton vert _Create pull request_ pour enfin créer la demande de modification. 

![](/image/help/github_edit_6.png) 

8. Un dernier écran vous permet de saisir un titre et une description pour la demande de modification. Cliquez enfin sur le bouton vert _Create pull request_ pour créer la demande. 

![](/image/help/github_edit_7.png) 

9. Le dernier écran nous amène au projet original (**attention**, nous ne sommes plus sur la page de notre copie du projet) où l'on peut voir le demande de modification soumise et ajoutée aux _Pull request_ du projet d'origine. Il ne nous reste plus qu'à attendre que les *Administrateurs* acceptent ou non les modifications, auquel cas nous verrons la confirmation de l'acceptation dans notre liste de _pull request_. Cette opération n'est pas immédiate, elle peut prendre des jours, mais cela ne signifie pas que vous ne pouvez pas continuer à travailler, en effectuant de nouvelles modifications et demandes de changement, en répétant les étapes expliquées ici. Votre liste de demandes de tirage peut être aussi longue que nécessaire. 

![](/image/help/github_edit_8.png) 

> :warning: IMPORTANT : Toutes ces étapes du projet *urantiapedia* doivent être reproduites à nouveau dans le projet *urantiapedia-backup* chaque fois que vous souhaitez que votre nom d'utilisateur soit reflété dans le projet en tant qu’auteur des modifications. Si ce n'est pas le cas, introduisez simplement les modifications uniquement dans le projet *urantiapedia* et les Administrateurs se chargeront d'introduire les modifications pour vous dans le projet *urantiapedia-backup*, qui est celui qui est synchronisé avec le site web. . Dans ce deuxième cas, l'utilisateur *Administrateur* qui a téléchargé vos modifications apparaîtra comme leur auteur. 
> Cette duplication peut paraître lourde mais elle est nécessaire pour des raisons de sécurité. 
{.is-warning}

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/github_fork">Démarrer sur GitHub</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_setting.md">Configurer le projet GitHub Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>