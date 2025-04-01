---
title: "Creación de un catálogo de artículos"
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
        <td><a href="/es/help/github_upload">Subir contenido de forma masiva a Urantiapedia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_articles_markdown">Obtener artículos</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Aquí se describe cómo crear un catálogo de artículos escritos por lectores relativos a _El Libro de Urantia_.

## Proceso

El listado provisional de artículos se encuentra aquí: [Artículos planeados](/es/index/articles).

El listado, que ya es muy extenso actualmente, está organizado por fuentes. Las fuentes que se están usando ahora mismo son:

- Sitios web de las Asociaciones Urantia
- La publicación _Innerface International_
- La revista _Urantian Journal_
- La revista _Fellowship Journal_
- La revista _Fellowship Herald_
- Artículos del proyecto _UB Annotaded & UBTheNews_, de Halbert Katzen
- Artículos del proyecto _Jesús de Nazaret_, de Jan Herca

Los enlaces de donde se está obteniendo material se están recopilando al final de ese listado, aquí: [Referencias de los artículos](/es/index/articles#referencias). Cualquier otra referencia de donde se han podido obtener artículos de lectores deberá incluirse en esa lista.

Para editar el listado de artículos, puedes hacerlo de dos maneras:

- Haz log in aquí en _Urantiapedia_. Ve al listado de artículos: [Artículos planeados](/es/index/articles). Pon la página en edición en el menú _Acciones > Editar_ (_Page actions > Edit_) en la botonera superior derecha. Se abrirá un sencillo editor Markdown donde puedes editar el listado. (IMPORTANTE: para poder hacer esto necesitas que un Administrador te habilite permisos de edición en esa página.)
- En el proyecto de GitHub modifica este archivo: `/output/wikijs/es/index/articles.md`. Para modificarlo puedes descargarte simplemente ese archivo o todo el proyecto de GitHub. Consulta el [Manual para Editores Asistentes](/es/help/github_assistant) para saber cómo descargar cosas de GitHub.

En cualquiera de los dos casos anteriores el fichero a editar es un archivo Markdown muy simple donde para cada artículo hay que incluir, en forma de una tabla, lo siguiente:

- Una marca `:white_square_button:` que indica que el artículo aún no se ha creado.
- Un identificador opcional de la fuente usada.
- El ejemplar si el artículo apareció en una puplicación periódica.
- El título.
- El autor.
- Unas etiquetas, opcionales, que categoricen el artículo.

Por ejemplo:

```
| Estado                | Fuente | Ejemplar       | Título                                                | Autor        | Etiquetas  |
| ----------------------| ------ | -------------- | ------------------------------------------------------| -------------| ---------- |
| :white_square_button: | Herald | Vol. 01, No. 1 | "48 Chromosomes - Are We Asking the Right Questions?" | Ken Glasziou | Biology    |
```

## Envío de ficheros

Si has modificado el listado a partir del fichero que hay en GitHub, tienes dos opciones para enviar los cambios: 1) si eres un «Editor Jefe» utiliza GitHub tal como se detalla en el [Manual para Editores Jefe](/es/help/github); si eres un «Editor Asistente», puedes simplemente enviar ese archivo Markdown modificado al correo de cualquier Administrador o a urantiapedia@gmail.com.

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_upload">Subir contenido de forma masiva a Urantiapedia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_articles_markdown">Obtener artículos</a></td>
      </tr>
    </tbody>
  </table>
</figure>
