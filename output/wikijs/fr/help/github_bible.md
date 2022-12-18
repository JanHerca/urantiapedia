---
title: Obtenir la Bible
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
        <td><a href="/fr/help/github_topicindex">Traduction et révision de Topic Index</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_book_json">Conversion en JSON</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Cette tâche est actuellement terminée et fermée pour les 25 langues disponibles.
{.is-info}

Une bonne source pour obtenir des traductions de *La Bible* qui sont également libres de droit est d'utiliser le logiciel [e-Sword](https://www.e-sword.net/), une application gratuite qui permet de télécharger traductions de *La Bible* dans différentes langues, puis exportez ou copiez son contenu dans d'autres fichiers.

Tout autre moyen d'obtenir une traduction libre de droits d'auteur de *La Bible* est valable tant que le contenu est ensuite copié dans les bons fichiers. Ces fichiers doivent suivre ces règles :
- les fichiers seront créés dans le dossier `input/tex/bible-xx`, où `xx` est le code de langue de *The Bible*.
- Chaque fichier aura un nom suivant ce modèle : `xxx_name.tex` où `xxx` sera un numéro séquentiel toujours à trois chiffres commençant par 1 (`001`, `002`, etc.) et `name` sera le nom du livre. Les noms doivent être dans chaque langue, mais sinon, ils pourraient être en anglais. Vous trouverez ci-dessous une liste provisoire des livres à inclure, avec leur numéro. Il convient de noter que l'ordre dans lequel les livres sont numérotés place d'abord les livres qui sont canoniques à toutes les croyances avant les livres qui ne sont canoniques que dans certaines croyances. Cet ordre n'est pas indispensable mais est utile pour faciliter l'identification de chaque livre simplement par le numéro initial, surtout lorsque les noms de chaque livre sont utilisés dans chaque langue particulière.
- Le contenu de chaque livre doit être au format LaTeX. Le format n'utilisera que quelques commandes LaTeX (`\begin{document}`, `\end{document}`, `\title`,` \chapter`, `\section` et `\par`) comme détaillé dans le extrait suivant de l'Evangile de Matthieu:

```tex
\begin{document}

\title{Évangile de Matthieu}

\chapter{1}

\par 1 Le livre de la génération de Jésus-Christ, fils de David, fils d'Abraham.
. . .

\chapter{2}

1 Lorsque Jésus naquit à Bethléem de Judée, du temps du roi Hérode, voici, des sages venus de l'orient vinrent à Jérusalem, disant :
. . .

\end{document}
```

Comme vous pouvez le voir dans l'extrait précédent, les règles à suivre sont :
- Chaque livre biblique commencera par une ligne `\begin{document}` et se terminera par une ligne `\end{document}`.
- Des commentaires peuvent être placés, qui seront ignorés, en utilisant `%` devant chaque ligne.
- Chaque livre aura son titre dans une commande `\title{}` au début de tout.
- Chaque chapitre sera marqué avec la commande `\chapter{}` et à l'intérieur du numéro de chapitre commençant à 1.
- S'il y a des sections (certains sous-titres qui sont parfois mis dans certaines éditions) elles seront marquées avec la commande `\section{}` et à l'intérieur le titre de la section sera placé.
- Après une section ou un chapitre s'il n'y a pas de sections, des versets seront placés, chacun commençant par la commande `\par`, puis séparés par le numéro du verset, commençant toujours à 1 puis séparés par le contenu. Chaque verset sera une ligne.
- Pour améliorer la lisibilité, des lignes blanches peuvent être placées avant et après les chapitres et les sections, qui seront ignorées.

## Installation de l'outil e-Sword

e-Sword est un outil entièrement gratuit pour étudier la Bible sur PC. Voici l'URL pour le télécharger :

https://www.e-sword.net/

Cliquez sur le bouton Téléchargements. Vous avez des versions pour Windows, Mac, et aussi pour smartphone et tablettes.

Une fois téléchargé, exécutez le programme d'installation et suivez les étapes par défaut.

## Téléchargement des traductions de la Bible dans e-Sword

Pour télécharger une traduction de la Bible dans e-Sword, suivez ces étapes :

1. Ouvrez e-Sword.
2. Fermez tout message de démarrage.
3. Allez dans le menu *Téléchargements* puis *Bibles*.
4. Cela ouvre le *téléchargeur de module e-Sword*. Dans l'onglet *Bible*, vous verrez une liste des Bibles disponibles, triées par langue. Il s'agit d'une arborescence qui vous permet de réduire ou de développer chaque langue pour voir la liste des traductions disponibles.
5. Il est important de ne télécharger que des traductions du domaine public. Nous ne pouvons pas utiliser des versions protégées par copyright de la Bible qui ne sont pas dans le domaine public pour éviter tout problème juridique dans *Urantiapedia*.
6. Pour le téléchargement, cliquez sur le lien et attendez qu'il soit installé.
7. Vous pouvez procéder de la même manière avec toute autre traduction.

## Copier le contenu d'e-Sword

Pour copier les versets d'e-Sword vers des fichiers bibliques, nous pouvons utiliser ce processus :

1. Copiez tous les fichiers dans une autre langue déjà disponible, par exemple en anglais. De cette façon, vous avez un guide et un modèle.
2. Accédez au premier fichier, "001_Genesis.tex". Sélectionnez tout ce qui se trouve sous `\title{Genesis}` et au-dessus de `\end{document}` et supprimez-le.
3. Maintenant, dans e-Sword, sélectionnez le menu *Bible* puis *Copy versets*. La fenêtre *Copier les versets* s'ouvre.
4. Dans les sélecteurs supérieurs, sélectionnez le livre, dans cet exemple *Genesis*, et sélectionnez le premier verset (généralement celui par défaut) et le dernier verset du dernier chapitre (généralement pas celui par défaut).
5. Comme format de sortie, laissez la première option sélectionnée, la valeur par défaut, qui crée des textes comme `Gen 1: 1 The verse text`.
6. Cliquez maintenant sur * Copier *, puis collez Visual Studio Code sous le titre.
7. Le texte collé doit être modifié pour suivre les conventions de format LaTeX. On va faire ça très vite avec trois remplacements.
8. Dans Visual Studio Code, sélectionnez le menu *Édition > Remplacer*.
9. Dans la zone *Rechercher*, tapez `^... ` (n'oubliez pas d'ajouter un espace final). Dans la zone * Remplacer *, tapez `\par ` (faites également attention à ajouter un espace final). Assurez-vous que le bouton *Utiliser une expression régulière* est cliqué. Cliquez maintenant sur le bouton * Remplacer tout *.
10. Ensuite, dans la zone *Rechercher*, tapez `\\par ([0-9]*):([1]) ` (veillez à ajouter l'espace final). Dans la zone *Remplacer*, tapez `\n\chapter{$1}\n\n\par $2` (sachez qu'il n'y a plus d'espace supplémentaire). Cliquez sur *Remplacer tout*. Cela créera les balises de chapitre.
11. Enfin, dans la zone *Rechercher*, tapez `\\par ([0-9]*):([0-9]*) ` (attention à ajouter l'espace final). Dans la zone *Remplacer*, tapez `\par $2` (sans espace final). Cliquez sur *Remplacer tout*. Cela définira le format correct pour les paragraphes.
12. C'est tout. Vous devez maintenant répéter ce processus avec chaque livre de la Bible. C'est une tâche ennuyeuse mais cela prend moins d'une heure pour avoir tous les livres de la Bible dans le bon format pris en charge dans *Urantiapedia*.

Une fois que vous avez terminé le travail avec une traduction de la Bible, celle-ci peut être envoyée aux mainteneurs du projet.

## Liste des livres bibliques

Num. | Abr. | Titre anglais
---|---|---
001 | Gn | Genèse
002 | Ex | Exode
003 | Lv | Lévitique
004 | Nb | Nombres
005 | Dt | Deutéronome
006 | Jos | Josué
007 | Jg | Juges
008 | Rt | Ruth
009 | 1 Sam | I Samuel
010 | 2 Sam | II Samuel
011 | 1 R | I Rois
012 | 2 R | II Rois
013 | 1 Ch | I Chroniques
014 | 2 Ch | II Chroniques
015 | Esd | Esdras
016 | Neh | Néhémie
017 | Est | Esther
018 | 1 Mac | I Maccabées
019 | 2 Mac | II Maccabées
020 | Job | Job
021 | Ps | Psaumes
022 | Pr | Proverbes
023 | Qo | Ecclésiaste
024 | Cant | Cantique des cantiques
025 | Sir | Siracide (Ecclésiastique)
026 | Sag | Sagesse
027 | Is | Isaïe
028 | Jr | Jérémie
029 | Lam | Lamentations de Jérémie
030 | Bar | Baruch
031 | Ez | Ézéchiel
032 | Dn | Daniel
033 | Os | Osée
034 | Jl | Joël
035 | Am | Amos
036 | Abd | Abdias
037 | Jon | Jonas
038 | Mic | Michée
039 | Nah | Nahum
040 | Hab | Habacuc
041 | Soph | Sophonie
042 | Ag | Aggée
043 | Zach | Zacharie
044 | Mal | Malachie
045 | Mt | Évangile selon Matthieu
046 | Mc | Évangile selon Marc
047 | Lc | Évangile selon Luc
048 | Jn | Évangile selon Jean
049 | Ac | Actes des Apôtres
050 | Ro | Épître de Paul aux Romains
051 | 1 Co | Ire Épître de Paul aux Corinthiens
052 | 2 Co | IIe Épître de Paul aux Corinthiens
053 | Ga | Épître de Paul aux Galates
054 | Ep | Épître de Paul aux Éphésiens
055 | Ph | Épître de Paul aux Philippiens
056 | Col | Épître de Paul aux Colossiens
057 | 1 Th | Ire ép. de Paul aux Thessaloniciens
058 | 2 Th | IIe ép. de Paul aux Thessaloniciens
059 | 1 Tm | Ire Épître de Paul à Timothée
060 | 2 Tm | IIe Épître de Paul à Timothée
061 | Tt | Épître de Paul à Tite
062 | Phm | Épître de Paul à Philémon
063 | He | Épître aux Hébreux
064 | Jc | Épître de Jacques
065 | 1 P | Ire Épître de Pierre
066 | 2 P | IIe Épître de Pierre
067 | 1 Jn | Ire Épître de Jean
068 | 2 Jn | IIe Épître de Jean
069 | 3 Jn | IIIe Épître de Jean
070 | Jude | Épître de Jude
071 | Ap | Apocalypse de Jean
072 | Bel | Bel et le Dragon
073 | Man | Prière de Manassé
074 | Tb | Tobie
075 | Jdt | Judith
076 | 1 Hénoch | Livre d'Hénoch
077 | As. Mo. | Assomption de Moïse

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
        <td><a href="/fr/help/github_topicindex">Traduction et révision de Topic Index</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_book_json">Conversion en JSON</a></td>
      </tr>
    </tbody>
  </table>
</figure>