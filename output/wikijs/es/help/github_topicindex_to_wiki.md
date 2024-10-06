---
title: Conversión del Índice de términos de TXT a Wiki.js
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
        <td><a href="/es/help/github_footnotes">Adición de notas al pie</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_book_to_wiki">Conversión de El Libro de Urantia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Los ficheros del *Índice de términos* en formato TXT son creados y revisados por los «Editores Jefe». Estos archivos deben dejarse en carpetas como `input/txt/topic-index-xx` donde `xx` es el código del idioma de destino.

Para convertir estos ficheros TXT a formato Wiki.js hay que seguir estos pasos:
- Abrir *Urantiapedia Tools*.
- En *Proceso* seleccionar: Convertir TopicIndex (TXT) a Wiki.
- Las carpetas necesarias se seleccionan automáticamente: para *Ficheros TXT* es `input/txt/topic-index-xx`, para *Ficheros HTML* es `output/wikijs/xx/topic` (pero si `xx` = `en` se omite). Si la carpeta de salida no existe creála antes. Si en la carpeta de salida ya existen ficheros Wiki.js se sobreescribirán los existentes.
- En *Categorías de términos* seleccionar `TODOS` para procesar todos los términos de todas las categorías, o alternativamente, seleccionar sólo una categoría si se desea generar sólo los términos que pertenecen a esa categoría.
- Click en *Ejecutar*.
- Si todo está correcto aparecerá *Conversión realizada con éxito*. En caso de errores aparecerá el listado de errores. En este caso conviene avisar a alguno de los usuarios «desarrolladores» por si existe algún problema con el software.

![](/image/help/upt_txt_wiki.png)

Los ficheros de salida tienen formato HTML. Se genera un fochero por cada término.

Los ficheros de salida ya tienen el formato que permite subirlos directamente a la *Urantiapedia* mediante [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Ver [Subir contenido de forma masiva a Urantiapedia](/es/help/github_upload).

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
        <td><a href="/es/help/github_footnotes">Adición de notas al pie</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_book_to_wiki">Conversión de El Libro de Urantia</a></td>
      </tr>
    </tbody>
  </table>
</figure>