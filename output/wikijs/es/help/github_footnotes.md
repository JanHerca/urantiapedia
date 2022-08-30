---
title: Adición de notas al pie a El Libro de Urantia en JSON
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
        <td><a href="/es/help/github_book_json">Conversión a JSON</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_topicindex_to_wiki">Conversión del Índice de Términos</a></td>
      </tr>
    </tbody>
  </table>
</figure>

La adición de notas al pie a *El Libro de Urantia* requiere haber realizado previamente las siguientes tareas:
- Traducción del *Paramony* del inglés al idioma de destino. El resultado de esta tarea es un archivo para cada idioma (`input/json/footnotes-book-xx.json`).
- Conversión previa de *El Libro de Urantia* de HTML a JSON sin notas al pie. El resultado de esta tarea es un conjunto de 197 archivos en una carpeta para cada idioma (`input/json/book-xx`).

Para añadir las notas al pie en los archivos JSON hay que seguir estos pasos:
- Abrir *Urantiapedia Tools*.
- En *Proceso* seleccionar: Actualizar Refs Biblia en Libro de Urantia (JSON).
- Las carpetas necesarias se seleccionan automáticamente: para *Ficheros JSON* será `input/json/book-xx`.
- Click en *Ejecutar*.
- Si todo está correcto aparecerá *Conversión realizada con éxito*. En caso de errores aparecerá el listado de errores. En este caso conviene avisar a alguno de los usuarios «desarrolladores» por si existe algún problema con el software.


![](/image/upt_json_json.png)

Los ficheros de salida son diferentes a los de entrada para evitar que si hay cualquier problema queden inservibles. La salida se guarda en carpetas `input/json/book-xx-footnotes`, donde `xx` es el código de idioma idéntico al usado como carpeta de entrada.

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
        <td><a href="/es/help/github_book_json">Conversión a JSON</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_topicindex_to_wiki">Conversión del Índice de Términos</a></td>
      </tr>
    </tbody>
  </table>
</figure>