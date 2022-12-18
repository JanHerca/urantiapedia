---
title: Gérer les pages
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
        <td><a href="/fr/help/web_basics">Interface and basic use of Urantiapedia</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/web_editors">Use of editors</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Créer une page

Il existe plusieurs façons de créer une nouvelle page :

- Depuis le bouton **Nouvelle page**, situé en haut à droite de la page.
- En cliquant sur un lien pointant vers une page inexistante.
- Tapez manuellement le chemin dans la barre d'adresse du navigateur.

Consultez le guide [Interface et utilisation de base d'Urantiapedia](/fr/help/web_basics) pour savoir comment créer votre première page étape par étape.


## Modifier une page

Vous pouvez modifier une page existante en cliquant sur l'icône **Crayon** dans le coin inférieur droit de n'importe quelle page ou en utilisant le **Menu de la page**, situé dans le coin supérieur droit de la page.

L'éditeur sélectionné lors de la première création de la page sera chargé automatiquement. Notez qu'il est possible de [changer d'éditeur](/fr/help/web_editors) une fois qu'une page est créée.

## Dossiers

Urantiapedia ne s'appuie pas sur une structure de dossiers traditionnelle pour organiser les pages. Au lieu de cela, le chemin de la page est utilisé.

Par exemple, sur un système traditionnel, pour créer une page sur `article/Ann_Bendall/Adam_and_Eve`, vous devez d'abord créer un dossier `article`, puis ouvrir ce dossier et créer un sous-dossier nommé `Ann_Bendall` pour enfin pouvoir créer une page à l'intérieur nommée `Adam_and_Eve`.

Dans Urantiapedia, vous pouvez directement créer une page au chemin `article/Ann_Bendall/Adam_and_Eve`. Les dossiers `article` et `Ann_Bendall` seront automatiquement déduits, mais ils n'existent pas vraiment en dehors du contexte du chemin de page. Par conséquent, vous n'avez pas à gérer les dossiers et vous pouvez vous concentrer uniquement sur le chemin que vous souhaitez pour vos pages.

Pour cette raison, il n'y a pas d'option pour créer des dossiers. Tapez simplement le chemin complet que vous voulez. Les dossiers seront déduits automatiquement lors de la création.

## Restrictions de nommage

Les chemins suivants ne peuvent pas être utilisés pour le contenu et sont réservés à l'utilisation du système.

### Pages à un seul caractère

**Tous** les chemins d'accès à un seul caractère sont réservés pour accéder aux différentes parties d'Urantiapedia :

- `a` : zone d'administration
- `c` : commentaires
- `e` : Éditeur de pages
- `f` : gestionnaire d'actifs
- `h` : Historique des pages
- `i` : Parcourir la page par ID
- `p` : profil utilisateur
- `s` : source de la page
- `t` : Balises
- `u` : télécharger le point de terminaison *(API)*
- `w` : Wiki personnel
{.grid-list}

### Balises de langue IETF

Les balises de langue dans les formats répertoriés ci-dessous sont réservées pour spécifier l'espace de noms de paramètres régionaux à utiliser.

- Code de langue à deux lettres (par exemple `en`, `fr`)
- Code de paramètres régionaux spécifiques au pays (par exemple, `en-us`, `fr-ca`)
{.grid-list}

### Mots réservés

Les chemins ne peuvent pas correspondre exactement aux termes ci-dessous ou être la première partie du chemin. Par exemple, `register` ou `register/test` ne sont pas des chemins valides, mais `registering` convient.

- _assets
- favicon *\[.ico]*
- graphql
- healthz
- home *(réservé à la page d'accueil racine)*
- login
- logout
- register
{.grid-list}

### Caractères illégaux

Les chemins ne peuvent pas contenir les caractères suivants :

- Espace *(utiliser des tirets à la place)*
- Période *(réservé aux extensions de fichiers)*
- Caractères d'URL non sécurisés * (tels que des signes de ponctuation, des guillemets, des symboles mathématiques, etc.) *
<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/web_basics">Interface and basic use of Urantiapedia</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/web_editors">Use of editors</a></td>
      </tr>
    </tbody>
  </table>
</figure>