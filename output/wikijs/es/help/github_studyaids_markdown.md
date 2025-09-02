---
title: "Obtener ayudas de estudio"
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
        <td><a href="/es/help/github_studyaids_catalog">Creación de un catálogo de ayudas de estudio</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_religious_books_catalog">Creación de un catálogo de libros de todas las religiones</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Aquí se describe cómo obtener las ayudas de estudio de _El Libro de Urantia_, y que han sido catalogadas siguiendo la tarea [Creación de un catálogo de ayudas de estudio](/es/help/github_studyaids_catalog).

## Proceso

Todo lo dicho relativo a libros en [Obtener artículos](/es/help/github_articles_markdown) también tiene aplicación aquí. Las ayudas de estudio se suelen encontrar como los artículos, en forma de una página web que ya los alberga, como un PDF sin texto, o como un PDF con texto. En cualquier caso el primer paso es lograr convertir la ayuda de estudio a formato Markdown.

El catálogo de ayudas de estudio se encuentra aquí: [Ayudas de estudio planeadas](/es/index/study_aids).

La tarea ahora consiste en usar el contenido de las ayudas de estudio para obtener los archivos Markdown que necesitamos.

### Estructura de las ayudas de estudio en Urantiapedia

Si eres un «Editor Jefe» y vas a usar la plataforma GitHub, las ayudas de estudio deben guardarse en estas carpetas del proyecto GitHub: `/output/wikijs/en/article` para ayudas de estudio en inglés, `/output/wikijs/es/article` para ayudas de estudio en español, etc. 

Como se puede ver usamos las mismas carpetas para artículos que para ayudas de estudio. Esto se hace con el propósito de que todos los trabajos (que no sean libros) realizados por un mismo autor estén reunidos en una misma carpeta del proyecto.

Dentro de las carpetas `article` crearemos otra, si no existe, con el nombre del autor (con los espacios en blanco sustituidos por guiones bajos). Finalmente, dentro de la carpeta del autor, crearemos la ayuda de estudio del siguiente modo:
- Si la ayuda de estudio es un documento breve, del tamaño de un artículo, se creará un archivo Markdown para él.
- Si la ayuda de estudio es un conjunto largo de partes diferentes, casi un libro, se creará una carpeta para él, y dentro irán archivos individuales Markdown.


Tanto el archivo Markdown en el caso ayuda de estudio breve, como la carpeta para una ayuda de estudio extensa, los nombraremos con un nombre único siguiendo este criterio:
  - El nombre usará el título de la ayuda de estudio pero lo más abreviado posible.
  - El nombre siempre será en inglés, de modo que si el artículo original no es en inglés se traduce el título.
  - Los espacios en blanco se reemplazan por guiones bajos.
  - Los caracteres raros como dos puntos o exclamaciones se quitan.
  - Por ejemplo, si el título de una ayuda de estudio es *Study of the Master Universe* un posible nombre sería `Study_of_the_Master_Universe`. Si el título fuera *Las enseñanzas de Jesús*, el nombre sería `Jesus_teachings`.

Si eres un «Editor Asistente» y no vas a usar la plataforma GitHub para el envío de ficheros, simplemente crea una carpeta cualquiera en tu PC en la que dejar las ayudas de estudio que vayas creando. Luego al enviar tu trabajo a un Administrador él se encargará de crear las carpetas correctas.


### Formato básico de una ayuda de estudio en Urantiapedia

El formato a usar es Markdown, que es extremadamente simple para dar formato frente a otras alternativas.

El «Editor Asistente» debe revisar el texto y añadir lo siguiente:
- Una cabecera en cada archivo.
- Inmediatamente debajo de la cabecera, una indicación del autor.
- Marcas de secciones dentro del cada archivo que componga la ayuda de estudio.
- Párrafos correctos.
- Negritas y cursivas.
- Citas.
- Imágenes.
- Referencias a imágenes.
- Notas al pie de página.
- Tablas.
- Fórmulas matemáticas o caracteres en notación científica.

Todas estas indicaciones ya han sido explicadas aquí al hablar de cómo formatear capítulos de libros: [Obtener libros «fuente»](/es/help/github_sourcebooks_markdown). Todas las indicaciones dadas ahí sirven también aquí en el caso de ayudas de estudio.

## Envío de ficheros

Si eres un «Editor Jefe» utilizando GitHub puedes enviar las ayudas de estudio tal como se detalla en el [Manual para Editores Jefe](/es/help/github); si eres un «Editor Asistente», puedes simplemente enviar los archivos Markdown al correo de cualquier Administrador o a urantiapedia@gmail.com.

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_studyaids_catalog">Creación de un catálogo de ayudas de estudio</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_religious_books_catalog">Creación de un catálogo de libros de todas las religiones</a></td>
      </tr>
    </tbody>
  </table>
</figure>