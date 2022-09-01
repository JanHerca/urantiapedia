---
title: Uso de editores
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/web_pages">Manejo de páginas</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/web_visual_editor">Uso del editor visual</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Al crear una página, puedes utilizar el editor que prefieras. Algunos usuarios prefieren escribir contenido en Markdown, mientras que otros prefieren un editor más visual.

## Lista de editores

- [Editor visual *Texto enriquecido WYSIWYG*](/es/help/web_visual_editor)
- [Markdown *Formato de texto plano*](/es/help/web_markdown_editor)
- [Código *HTML*](/es/help/web_html_editor)
- [Editor multilenguaje *Traducción *(próximamente)**](/es/help/web_multi_editor)
- [Editor de mapas *similar a Google Maps *(próximamente)**](/es/help/web_map_editor)
- [Editor de diapositivas *similar a Google Slides *(próximamente)**](/es/help/web_map_editor)
- [Editor 3D *similar a Play Canvas *(próximamente)**](/es/help/web_3d_editor)
- [API Docs *REST / GraphQL *(próximamente)**](/es/help/web_api)
- [Blog *Cronología de publicaciones *(próximamente)**](/es/help/web_blog)
- [Tabular *similar a Excel *(próximamente)**](/es/help/web_tabular)
{.lista de enlaces}

## Cambiar editor

Puedes cambiar el editor utilizado para cualquier página mediante la acción **Convertir**. Esto intentará convertir el contenido para que sea utilizado por el editor recién seleccionado. Por ejemplo, una página creada previamente con el editor Markdown se puede convertir a HTML para usarla con el editor visual.

En los menús **Acciones de la página** (ubicados en la esquina superior derecha y en la esquina inferior derecha), selecciona **Convertir**. Se muestra el siguiente cuadro de diálogo:

![ui-convert-page-dialog.png](https://docs.requarks.io/assets/ui/ui-convert-page-dialog.png =550x){.radius-5 .decor-shadow}

Selecciona el editor que deseas usar en adelante y haz clic en **Convertir**.

> :warning: **Importante**
>
> Debido a las diferencias entre las capacidades del editor / formato, es posible que se pierda algo de formato o contenido no renderizado después de la conversión.
>
> Se toma una instantánea de la página **automáticamente antes de la conversión** y puedes revertir o consultar esta versión **en cualquier momento posterior** desde el historial de la página.
>
> _Ejemplos_
>
> &#8727; Al pasar de Markdown a HTML, los diagramas `draw.io` se mantendrán como su imagen renderizada final. Ya no se podrá editar el diagrama.
> &#8727; Al pasar de Markdown a HTML, los conjuntos de pestañas se revertirán a encabezados y párrafos estándar (como se ve en el editor de Markdown).
> &#8727; Al pasar de HTML a Markdown, las clases CSS personalizadas y los elementos HTML que no existen en el lenguaje Markdown no se conservarán.
{.es-advertencia}

Como referencia, se producen las siguientes conversiones de formato en función del editor de origen / destino seleccionado:

| Origen | Destino | Conversión de formato
| -- | -- | -- |
| Markdown | Editor visual | Markdown &rarr; HTML |
| Markdown | HTML | Markdown &rarr; HTML |
| Editor visual | Markdown | HTML &rarr; Markdown |
| Editor visual | HTML | *no se necesita conversión de formato*{.caption} |
| HTML | Markdown | HTML &rarr; Markdown |
| HTML | Editor visual | *no se necesita conversión de formato*{.caption} |



<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/web_pages">Manejo de páginas</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/web_visual_editor">Uso del editor visual</a></td>
      </tr>
    </tbody>
  </table>
</figure>