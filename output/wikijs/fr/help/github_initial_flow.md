---
title: Urantiapedia - Workflow pour créer du contenu initial dans une langue 
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
        <td><a href="/fr/help/github_edit_local">Contenu du projet GitHub</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_paramony">Traduction Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Pour chaque langue à incorporer dans *Urantiapedia*, l'_entrée_ suivante sera utilisée : 
- Une traduction officielle du *Le Livre d'Urantia*, ou l'original pour l'anglais, au format HTML. Ce contenu sera laissé dans le dossier `input/html/book-xx` du projet sur GitHub, où `xx` est le code de langue à deux lettres (`es` = espagnol, `en` = anglais, etc.) . Dans le cas de la langue espagnole, puisqu'il existe plusieurs traductions, « book-es » contiendra l'édition dite européenne, « book-es-1993 » la traduction de 1993 et ​​« book-es-2021 » la traduction de 2021. Si cette situation de plusieurs traductions se produisait à l'avenir dans d'autres langues, un accord similaire serait adopté. 
- Une traduction libre de droits de *La Bible*, la plus standard possible dans la langue concernée. Le format sera LaTeX et les fichiers seront laissés dans le dossier « input/tex/bible-xx » du projet sur GitHub, où « xx » est le code de la langue. 
- Une copie de *Paramony* en espagnol (l'idée est qu'il sert de guide pour la traduction, le contenu en espagnol est le moins important) trouvée dans `input/markdown/es/paramony`. Les *Paramony* sont des références croisées entre *La Bible* et *Le Livre d'Urantia* trouvées dans `input/markdown/en/paramony`. Il a été créé en utilisant la relation de références croisées développée par Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), converti de son format TXT d'origine en un format Markdown qui est plus facile à traiter. Dans le dossier anglais se trouvent les tableaux avec toutes les informations originales ; Dans les dossiers du reste des langues se trouvent simplement les tableaux avec les textes traduits.
- Une copie de l'*Index des termes* en anglais. Cet index est constitué d'un ensemble de fichiers trouvés dans le dossier `input/txt/topic-index-en`. Ces fichiers TXT ont été obtenus à partir de l'annexe de l'édition *Urantia Fellowship* du *Le Livre d'Urantia* ([Topic Index](https://urantia-book.org/urantiabook/topical_index/index.htm)) , que nous sera désormais appelé *Indice de terme*. Cet *Index des termes* a été converti en un groupe de fichiers TXT, un pour chaque lettre de l'alphabet, avec les termes qui commencent par chaque lettre en anglais. La copie doit être renommée en modifiant les deux dernières lettres par celles du code langue. Par exemple, pour le français, vous devez créer une copie du dossier anglais et appeler cette copie « input/txt/topic-index-fr ». 

En résumé, pour l'exemple français le contenu à créer en entrée serait : 

```
input
    html
        book-fr
            *.html
    markdown
        fr
            paramony
                *.md
    tex
        bible-fr
            *.tex
    txt
        topic-index-fr
            *.txt
```
Pour toute autre langue, cela se ferait de la même manière. Une partie de ce contenu est peut-être déjà disponible dans le projet en cours sur GitHub. Il est conseillé de revoir ce qui existe avant d’incorporer du nouveau contenu. 

Le résultat que générerait le contenu précédent en français serait le suivant :

```
output
    wikijs
        fr
            Bible
                (dossiers contenant les livres de la Bible)
                    *.html
            index
                *.html
            The_Urantia_Book
                *.html
            The_Urantia_Book_Multiple
                *.html
            topic
                *.html
```

Une fois les dossiers et fichiers sont organisés comme indiqué, chacune des tâches nécessaires sera effectuée pour créer les fichiers finaux à l'aide des *Urantiapedia Tools* et de quelques modifications manuelles. Ceci est détaillé dans les pages suivantes de ce manuel.

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
        <td><a href="/fr/help/github_edit_local">Contenu du projet GitHub</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/github_paramony">Traduction Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>