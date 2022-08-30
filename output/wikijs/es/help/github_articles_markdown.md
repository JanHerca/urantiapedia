---
title: "Obtener artículos"
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
        <td><a href="/es/help/github_articles_catalog">Creación de un catálogo de artículos</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_studyaids_catalog">Creación de un catálogo de ayudas de estudio</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Aquí se describe cómo obtener los artículos de lectores relativos a _El Libro de Urantia_, y que han sido catalogados siguiendo la tarea [Creación de un catálogo de artículos](/es/help/github_articles_catalog).

## Proceso

Todo lo dicho relativo a libros en [Obtener libros «fuente»](/es/help/github_sourcebooks_markdown) también tiene aplicación aquí. Los artículos los podemos encontrar en forma de una página web que ya los alberga, como un PDF sin texto, o como un PDF con texto. Además pueden estar de forma individual o bien formando parte de una revista o publicación conjunta con otros artículos. En cualquier caso el primer paso es lograr convertir esa publicación a formato Markdown.

Esa tarea, realizada con software diverso según el caso, ya se ha hecho en parte con una buena colección de artículos, que se encuentran disponibles en GitHub en las carpetas `/input/markdown/en/Innerface` e `/input/markdown/en/Herald` para dos conocidas publicaciones relacionadas con El Libro de Urantia, el *Innerface International* y el *Fellowship Herald*. El catálogo de artículos ya está construído para estas publicaciones aquí: [Artículos planeados](/es/index/articles).

La tarea ahora consiste en usar el contenido de las carpetas mencionadas antes e ir construyendo los artículos individuales, pues en esas carpetas lo que hay son revistas completas.

### Estructura de los artículos en Urantiapedia

Si eres un «Editor Jefe» y vas a usar la plataforma GitHub, los artículos deben guardarse en estas carpetas del proyecto GitHub: `/output/wikijs/en/article` para artículos en inglés, `/output/wikijs/es/article` para artículos en español, etc. Dentro de estas carpetas crearemos otra, si no existe, con el nombre del autor (con los espacios en blanco sustituidos por guiones bajos). Finalmente, dentro de la carpeta del autor, crearemos un archivo Markdown al que pondremos un nombre único siguiendo este criterio:
  - El nombre usará el título del artículo pero lo más abreviado posible.
  - El nombre siempre será en inglés, de modo que si el artículo original no es en inglés se traduce el título.
  - Los espacios en blanco se reemplazan por guiones bajos.
  - Los caracteres raros como dos puntos o exclamaciones se quitan.
  - Por ejemplo, si el título de un artículo es *Time for More Change? Symbols, Cults, and The Urantia Book* un posible nombre de fichero sería `Time_for_More_Change_Symbols_Cults.md`. Si el título fuera *Jerusalén en tiempos de Jesús*, el fichero sería `Jerusalem_in_Jesus_times.md`.

Si eres un «Editor Asistente» y no vas a usar la plataforma GitHub para el envío de ficheros, simplemente crea una carpeta cualquiera en tu PC en la que dejar los artículos que vayas creando. Luego al enviar tu trabajo a un Administrador él se encargará de crear las carpetas correctas.

Se puede ver un ejemplo de artículo ya terminado en `/output/wikijs/es/article/Ann_Bendall/Adam_an_Eve.md`.

### Formato básico de un artículo en Urantiapedia

El formato a usar es Markdown, que es extremadamente simple para dar formato frente a otras alternativas.

El «Editor Asistente» debe revisar el texto y añadir lo siguiente:
- Una cabecera en cada archivo.
- Inmediatamente debajo de la cabecera, una indicación del autor.
- Marcas de secciones dentro del artículo.
- Párrafos correctos.
- Negritas y cursivas.
- Citas.
- Imágenes.
- Referencias a imágenes.
- Notas al pie de página.
- Tablas.
- Fórmulas matemáticas o caracteres en notación científica.

Todas estas indicaciones ya han sido explicadas aquí al hablar de cómo formatear capítulos de libros: [Obtener libros «fuente»](/es/help/github_sourcebooks_markdown). Todas las indicaciones dadas ahí sirven también aquí en el caso de artículos.

## Envío de ficheros

Si eres un «Editor Jefe» utilizando GitHub puedes enviar los artículos tal como se detalla en el [Manual para Editores Jefe](/es/help/github); si eres un «Editor Asistente», puedes simplemente enviar los archivos Markdown al correo de cualquier Administrador o a urantiapedia@gmail.com.

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_articles_catalog">Creación de un catálogo de artículos</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_studyaids_catalog">Creación de un catálogo de ayudas de estudio</a></td>
      </tr>
    </tbody>
  </table>
</figure>