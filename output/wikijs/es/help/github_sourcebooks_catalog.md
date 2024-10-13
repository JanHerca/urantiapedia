---
title: "Creación de un catálogo de libros «fuente»"
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
        <td><a href="/es/help/github_religious_books_markdown">Obtener libros de todas las religiones</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_sourcebooks_markdown">Obtener libros «fuente»</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Esta tarea está actualmente terminada y cerrada, aunque se pueden proponer cambios en el listado de libros enviando un correo a urantiapedia@gmail.com.
{.is-info}

Aquí se describe cómo crear un catálogo de libros que se suponen fuentes de *El Libro de Urantia* o tienen alguna relación o paralelismo con *El Libro de Urantia*.

## Contexto

*El Libro de Urantia* en sí mismo ofrece dos indicaciones claras sobre un material humano que se ha utilizado para su elaboración: ([LU 0:12.12](/es/The_Urantia_Book/0#p12_12) y [LU 121:8.13](/es/The_Urantia_Book/121#p8_13)). Añadido a todo esto hay que indicar que *El Libro de Urantia* cita muchas veces textualmente o implícitamente libros de la *Biblia*, incluidos libros extra-canónicos, y otros.

Desde hace tiempo varios lectores destacados han realizado trabajos de recopilación de estos paralelos. El lector Duane L. Faw tiene publicado un extenso volumen titulado [Paramony](https://www.amazon.com/Paramony-Duane-L-Faw/dp/0965197255/ref=sr_1_2?crid=2FCT0LM14FRVT) en el que detalla unos 60.000 paralelismos entre *El Libro de Urantia* y *La Biblia*. Otro lector destacado, Matthew Block, lleva años desarrollando [un proyecto de localización de paralelos](https://urantiabooksources.com/) con libros no bíblicos escritos hasta la época de concepción de *El Libro de Urantia*, habiendo detectado más de un centenar de libros como potenciales fuentes de los autores.

## Proceso

En esta tarea se tratará de crear un listado de todos los libros no bíblicos que se han detectado con paralelos con *El Libro de Urantia*. Una fuente invaluable para obtener este listado es acudir al sitio web anterior de Matthew Block.

El listado provisional de libros se encuentra aquí:

https://github.com/JanHerca/urantiapedia/blob/master/input/txt/books-en/Source_books.tsv

Para cualquier modificación de este fichero en GitHub deberán seguirse las instrucciones proporcionadas para los usuarios [Administradores](/es/help/admin), [Editores Jefe](/es/help/github) o [Editores Asistentes](/es/help/github_assistant).

El contenido de este archivo es muy simple:

- Se trata de un archivo TSV, con texto separado por tabuladores.
- Cada línea representa un estante de libros, o bien un grupo dentro del estante, o bien un libro individual.
- El orden es importante pues el listado mantiene una jerarquía (estante, grupo, libro).
- Todas las líneas tienen seis datos separados por tabulaciones.
- Un estante tiene: nombre del estante; ruta en Urantiapedia con el índice de ese estante; el resto vacíos.
- Un grupo tiene: nombre del grupo; etiqueta `<group>`; el resto vacíos.
- Un libro tiene: autor; título (incluyendo la edición entre paréntesis); documentos de _El Libro de Urantia_ relacionados;  nombre de la carpeta con el libro en el almacenamiento en la Nube, o `FAILED` si no ha sido posible localizar una edición digital a pesar de haberlo intentado, o vacío si aún no se ha intentado localizar una edición digital; OK (si se dispone de copia digital) o vacío (en caso contrario); ruta en Urantiapedia si ya está subido.

> Es muy recomendable etitar los archivos TSV con [Visual Studio Code](https://code.visualstudio.com/) añadiéndole la extensión [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv), que permite colorear los datos y muchas más cosas.
{.is-info}

## Resultado

Con este fichero se ha creado manualmente (mediante _replaces_) el índice de la _Biblioteca Urantiapedia_ y los índices de cada estante. Se puede ver el resultado en el [Índice de todos los grupos de libros](/es/index/books). Esta página está también accesible en esta web, desde el menú lateral a la izquierda, opción `OTROS LIBROS \ Índice`. Por el momento esta página sólo está disponible en inglés, español y francés.

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Paramony](https://www.amazon.com/Paramony-Duane-L-Faw/dp/0965197255/ref=sr_1_2?crid=2FCT0LM14FRVT)
- [«Fuentes» de El Libro de Urantia](https://urantiabooksources.com/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_religious_books_markdown">Obtener libros de todas las religiones</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_sourcebooks_markdown">Obtener libros «fuente»</a></td>
      </tr>
    </tbody>
  </table>
</figure>