---
title: "Obtener diagramas"
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
        <td><a href="/es/help/github_diagrams_catalog">Creación de un catálogo de diagramas</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_images_catalog">Creación de un catálogo de imágenes</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Aquí se describe cómo obtener los diagramas de _El Libro de Urantia_, y que han sido catalogados siguiendo la tarea [Creación de un catálogo de diagramas](/es/help/github_diagrams_catalog).

## Proceso

Los diagramas son un tipo de contenido muy especial pues no es simple texto con imágenes como pueden ser los libros, los artículos o las ayudas de estudio.

Los diagramas normalmente se encuentran disponibles como meras imágenes en formato `PNG` o `JPG`. Los diagramas en estos formatos no sirven de mucho porque lo que se pretende con los diagramas es ir un paso más allá de lo que ofrecen las imágenes y permitir funcionalidades extra como:
- Hipervínculos en distintas partes del diagrama
- Pequeños cajetines emergentes al pasar por encima del diagrama.
- Poder escalar y reducir el diagrama sin perder calidad de visualización

Esta funcionalidad de forma nativa en el navegador sólo la proporciona el formato [SVG](https://www.w3schools.com/graphics/svg_inhtml.asp). El formato de [mapa de imágenes HTML](https://www.w3schools.com/html/html_images_imagemap.asp) permite sólo permite hipervínculos.

El proceso aquí por tanto será la conversión de cualquier diagrama al formato SVG introduciendo la funcionalidad anterior (vínculos, cajetines y escalabilidad).

### Estructura de los diagramas en Urantiapedia

Si eres un «Editor Jefe» y vas a usar la plataforma GitHub, los diagramas deben guardarse en estas carpetas del proyecto GitHub: `/output/wikijs/en/article` para diagramas en inglés, `/output/wikijs/es/article` para diagramas en español, etc. Dentro de estas carpetas crearemos otra, si no existe, con el nombre del autor (con los espacios en blanco sustituidos por guiones bajos). Finalmente, dentro de la carpeta del autor, crearemos un archivo Markdown al que pondremos un nombre único siguiendo este criterio:
- El nombre usará el título del diagrama pero lo más abreviado posible.
- El nombre siempre será en inglés, de modo que si el diagrama original no es en inglés se traduce el título.
- Los espacios en blanco se reemplazan por guiones bajos.
- Los caracteres raros como dos puntos o exclamaciones se quitan.
- Por ejemplo, si el título de un diagrama es *The Master Universe* un posible nombre de fichero sería `The_Master_Universe.md`. Si el título fuera *Las personalidades del Espíritu Infinito*, el fichero sería `Personalities_of_Infinite_Spirit.md`.

Si eres un «Editor Asistente» y no vas a usar la plataforma GitHub para el envío de ficheros, simplemente crea una carpeta cualquiera en tu PC en la que dejar los diagramas que vayas creando. Luego al enviar tu trabajo a un Administrador él se encargará de crear las carpetas correctas.

### Formato básico de un diagrama en Urantiapedia

El formato a usar es Markdown y dentro de él usaremos SVG.

El «Editor Asistente» debe añadir lo siguiente en el fichero Markdown:
- Una cabecera en cada archivo.
- Inmediatamente debajo de la cabecera, una indicación del autor.
- Debajo iría el contenido SVG.

Por ejemplo, esto sería un posible fichero Markdown muy simplificado:

```
---
title: "The Sun"
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: Cosmology, Astronomy
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

Autor: **John Doe**

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

La creación del contenido SVG está fuera del alcance de esta ayuda e implicaría el uso de software de vectorización de imágenes como [Inkscape](https://inkscape.org/es/) o similares. Esta tarea debe correr a cargo de un «Editor Jefe» con experiencia en la creación de gráficos vectoriales.

## Envío de ficheros

Si eres un «Editor Jefe» utilizando GitHub puedes enviar los diagramas tal como se detalla en el [Manual para Editores Jefe](/es/help/github); si eres un «Editor Asistente», puedes simplemente enviar los archivos Markdown al correo de cualquier Administrador o a urantiapedia@gmail.com.

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Formato SVG](https://www.w3schools.com/graphics/svg_inhtml.asp)
- [Formato de mapa de imágenes HTML](https://www.w3schools.com/html/html_images_imagemap.asp)
- [Inkscape](https://inkscape.org/es/)
- [Una herramienta interesante para crear mapas de imágenes HTML](http://summerstyle.github.io/summer/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_diagrams_catalog">Creación de un catálogo de diagramas</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_images_catalog">Creación de un catálogo de imágenes</a></td>
      </tr>
    </tbody>
  </table>
</figure>