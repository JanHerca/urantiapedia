---
title: Utilisation des éditeurs
description: 
published: true
date: 2022-09-06T09:19:18.947Z
tags: help
editor: markdown
dateCreated: 2022-09-02T14:21:26.328Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/web_pages">Gérer les pages</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/web_visual_editor">Utilisation de l'éditeur visuel</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Lors de la création d'une page, vous pouvez utiliser l'éditeur de votre choix. Certains utilisateurs préfèrent écrire du contenu dans Markdown tandis que d'autres préfèrent un éditeur plus visuel.

## Liste des éditeurs

- [Éditeur visuel *Rich-Text WYSIWYG*](/fr/help/web_visual_editor)
- [Markdown *Mise en forme du texte brut*](/fr/help/web_markdown_editor)
- [Code *HTML brut*](/fr/help/web_html_editor)
- [Éditeur multilingue *Traduction *(à venir)**](/fr/help/web_multi_editor)
- [Éditeur de cartes *similaire à Google Maps *(à venir)**](/fr/help/web_map_editor)
- [Éditeur de diapositives *semblable à Google Slides *(à venir)**](/fr/help/web_map_editor)
- [Éditeur 3D * Jouez comme Canvas * (à venir) **] (/fr/help/web_3d_editor)
- [API Docs *REST / GraphQL *(à venir)**](/fr/help/web_api)
- [Blog *Chronologie des publications *(à venir)**](/fr/help/web_blog)
- [Tabular *Excel *(à venir)**](/fr/help/web_tabular)

## Modifier l'éditeur

Vous pouvez modifier l'éditeur utilisé pour n'importe quelle page à l'aide de l'action **Convertir**. Cela tentera de convertir le contenu à utiliser par l'éditeur nouvellement sélectionné. Par exemple, une page précédemment créée avec l'éditeur Markdown peut être convertie en HTML pour être utilisée avec l'éditeur visuel.

Dans les menus **Actions de la page** (situés dans le coin supérieur droit et dans le coin inférieur droit), sélectionnez **Convertir**. La boîte de dialogue suivante s'affiche :

![ui-convert-page-dialog.png](https://docs.requarks.io/assets/ui/ui-convert-page-dialog.png =550x){.radius-5 .decor-shadow}

Sélectionnez l'éditeur que vous souhaitez utiliser à l'avenir et cliquez sur **Convertir**.

> :avertissement : **Important**
>
> En raison des différences entre les capacités de l'éditeur et du format, certains contenus de formatage ou non rendus peuvent être perdus après la conversion.
>
> Un instantané de la page est **automatiquement pris avant la conversion** et vous pouvez revenir ou vous référer à cette version **à tout moment par la suite** depuis l'historique de la page.
>
> _Exemples_
>
> ∗ Lors du passage de Markdown à HTML, les diagrammes `draw.io` seront conservés comme leur image rendue finale. Vous ne pourrez plus modifier le diagramme.
> ∗ Lors du passage de Markdown à HTML, les tabsets seront remplacés par des en-têtes et des paragraphes standard (comme on le voit dans l'éditeur Markdown).
> ∗ Lors du passage de HTML à Markdown, les classes CSS personnalisées et les éléments HTML qui n'existent pas dans le langage Markdown ne seront pas conservés.

À titre de référence, les conversions de format suivantes se produisent en fonction de l'éditeur source/cible sélectionné :

| source | Cible | Conversion de formats
| -- | -- | -- |
| Markdown | Éditeur visuel | Markdown → HTML |
| Markdown | HTML brut | Markdown → HTML |
| Éditeur visuel | Markdown | HTML→ Markdown |
| Éditeur visuel | HTML brut | *aucune conversion de format nécessaire*{.caption} |
| HTML brut | Markdown | HTML→ Markdown |
| HTML brut | Éditeur visuel | *aucune conversion de format nécessaire*{.caption} |

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/fr/help/web_pages">Gérer les pages</a></td>
        <td><a href="/fr/help">Table des matières</a></td>
        <td><a href="/fr/help/web_visual_editor">Utilisation de l'éditeur visuel</a></td>
      </tr>
    </tbody>
  </table>
</figure>