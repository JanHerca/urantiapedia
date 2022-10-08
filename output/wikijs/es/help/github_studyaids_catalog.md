---
title: "Creación de un catálogo de ayudas de estudio"
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
        <td><a href="/es/help/github_articles_markdown">Obtener artículos</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_studyaids_markdown">Obtener ayudas de estudio</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Aquí se describe cómo crear un catálogo de ayudas de estudio de _El Libro de Urantia_.

La diferencia entre un artículo y una ayuda de estudio es que el primero es simplemente un texto breve, normalmente aparecido en una publiación, y que en Urantiapedia será una única página web; mientras que el segundo es un texto más completo, que en Urantiapedia podrá ser una página o varias dentro de una carpeta (como los libros), y que está sobre todo orientado hacia el estudio y comprensión de *El Libro de Urantia* en algún tema complejo. 

Distinguimos entre uno y otro, aunque luego todos se guardan en el proyecto bajo la misma carpeta `/es/article`, junto a los diagramas, y la distinción puede ser un poco tenue y artifical según el tipo de contenido. Se guarda en el mismo sitio para que todo el material creado por un mismo autores que no sean libros quede reunido bajo una misma carpeta o sección de Urantiapedia.

## Proceso

El proceso es idéntico al explicado para los artículos. Consultar la [Creación de un catálogo de artículos](/es/help/github_articles_catalog). El listado provisional de ayudas de estudio se encuentra aquí: [Ayudas de estudio planeadas](/es/index/studyaids).

Para editar ese listado, puedes hacerlo de dos maneras:

- Haz log in aquí en _Urantiapedia_. Ve al listado de ayudas de estudio: [Ayudas de estudio planeadas](/es/index/studyaids). Pon la página en edición en el menú _Acciones > Editar_ (_Page actions > Edit_) en la botonera superior derecha. Se abrirá un sencillo editor Markdown donde puedes editar el listado. (IMPORTANTE: para poder hacer esto necesitas que un Administrador te habilite permisos de edición en esa página.)
- En el proyecto de GitHub modifica este archivo: `/output/wikijs/es/index/studyaids.md`. Para modificarlo puedes descargarte simplemente ese archivo o todo el proyecto de GitHub. Consulta el [Manual para Editores Asistentes](/es/help/github_assistant) para saber cómo descargar cosas de GitHub.

En cualquiera de los dos casos anteriores el fichero a editar es un archivo Markdown muy simple donde para cada ayuda de estudio hay que incluir, en forma de una tabla, lo siguiente:

- Una marca `:white_square_button:` que indica que la ayuda de estudio aún no se ha creado.
- El título.
- El autor.
- Unas etiquetas, opcionales, que categoricen la ayuda de estudio.
- La URL de donde se puede descargar esa ayuda.

Por ejemplo:

```
| Estado                | Título                            |     Autor             | Etiquetas           | URL                                                                        |
| ----------------------| ----------------------------------| ----------------------| ------------------- | -------------------------------------------------------------------------- |
| :white_square_button: | "Estudio del Universo Maestro"    | William S. Sadler Jr. | Astronomy           | https://www.urantia.org/es/el-libro-de-urantia/estudia-el-libro-de-urantia |
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
        <td><a href="/es/help/github_articles_markdown">Obtener artículos</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_studyaids_markdown">Obtener ayudas de estudio</a></td>
      </tr>
    </tbody>
  </table>
</figure>
