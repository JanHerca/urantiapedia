---
title: Conversión de La Biblia de LaTeX a Wiki.js con notas al pie
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
        <td><a href="/es/help/github_book_to_wiki">Conversión de El Libro de Urantia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_upload">Subir contenido de forma masiva a Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Esta tarea ya está actualmente terminada y cerrada para los 27 idiomas disponibles.
{.is-info}

Los ficheros de *La Biblia* en formato LaTeX se deberán haber creado en carpetas como `input/text/bible-xx` donde `xx` es el código del idioma de destino.

Para convertir estos ficheros LaTeX a formato Wiki.js hay que seguir estos pasos:
- Abrir *Urantiapedia Tools*.
- En *Proceso* seleccionar: Convertir Biblia (LaTeX) + Refs (TXT) a Wiki.
- Las carpetas necesarias se seleccionan automáticamente: para *Ficheros TXT* es `input/txt/bible-refs-es`, para *Ficheros LaTeX* es `input/tex/bible-xx` y para *Ficheros HTML* es `output/wikijs/xx/Bible` (pero si `xx` = `en` se omite). Si la carpeta de salida no existe creála antes. Si en la carpeta de salida ya existen ficheros Wiki.js se sobreescribirán los existentes.
- Click en *Ejecutar*.
- Si todo está correcto aparecerá *Conversión realizada con éxito*. En caso de errores aparecerá el listado de errores. En este caso conviene avisar a alguno de los usuarios «desarrolladores» por si existe algún problema con el software.

![](/image/help/upt_tex_wiki.png)

Los ficheros de salida tienen formato HTML. Se generará un archivo por cada capítulo de la Biblia.

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
        <td><a href="/es/help/github_book_to_wiki">Conversión de El Libro de Urantia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_upload">Subir contenido de forma masiva a Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>