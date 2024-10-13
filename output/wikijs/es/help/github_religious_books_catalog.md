---
title: "Creación de un catálogo de libros de todas las religiones"
description: 
published: true
date: 2024-10-10T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2024-10-10T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_upload">Subir contenido de forma masiva a Urantiapedia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_religious_books_markdown">Obtener libros de todas las religiones</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Esta tarea está actualmente terminada y cerrada, aunque se pueden proponer cambios en el listado de libros enviando un correo a urantiapedia@gmail.com.
{.is-info}

Aquí se describe cómo crear un catálogo de libros de todas las religiones destacadas del mundo para que sirva de guía en la creación de [Biblioteca de Urantiapedia](/es/book), que es uno de los grandes bloques de que se compone el [proyecto Urantiapedia](/es/help/phases).

## Contexto

Tal como se explica en la motivación de la [Biblioteca de Urantiapedia](/es/book) existen importantes razones para que los lectores de _El Libro de Urantia_ se esfuercen por conocer y dar a conocer los escritos religiosos de todas las religiones del mundo, en especial de aquellas religiones de larga tradición o que siempre han aceptado la creencia en un Dios creador.

El conocimiento de las ideas y creencias de todos los pueblos del mundo es importante para facilitar la simpatía y la compresión entre las razas y las naciones, y poder aspirar a un mundo en paz y fraternidad. Tenemos en _El Libro de Urantia_ una bella estampa que muestra a Jesús y un alumno hindú suyo familiarizándose con los escritos de muchas religiones de su tiempo. [LU 130:3.5](/es/The_Urantia_Book/130#p3_5) Es un pasaje inédito e inspirador de la vida de Jesús que sin duda tiene el propósito de motivarnos a que hagamos más variadas nuestras lecturas de libros religiosos.

Tal como Jesús y Ganid hicieron en Alejandría recopilando escritos religiosos, así vamos a hacer en Urantiapedia. Vamos a crear una Biblioteca digital online que cualquier lector pueda consultar fácilmente. Y no sólo eso, también vamos a enlazar todos esos libros con el resto de contenido de Urantiapedia.

## Proceso

En esta tarea se tratará de crear un listado de libros de todas las religiones del mundo. El fichero de este listado es éste:

https://github.com/JanHerca/urantiapedia/blob/master/input/txt/books-en/Religious_books.tsv

Para cualquier modificación de este fichero en GitHub deberán seguirse las instrucciones proporcionadas para los usuarios [Administradores](/es/help/admin), [Editores Jefe](/es/help/github) o [Editores Asistentes](/es/help/github_assistant).

El contenido de este archivo es muy simple:

- Se trata de un archivo TSV, con texto separado por tabuladores.
- Cada línea representa un estante de libros, o bien un grupo dentro del estante, o un subgrupo dentro de un grupo anterior, o bien un libro individual.
- El orden es importante pues el listado mantiene una jerarquía (estante, grupo, subgrupo, libro).
- Todas las líneas tienen tres datos separados por dos tabulaciones.
- Un estante tiene: nombre del estante; referencias de webs o libros de donde se han obtenido los libros del estante; ruta en Urantiapedia con el índice de ese estante.
- Un grupo tiene: nombre del grupo; etiqueta `<group>`; vacío.
- Un subgrupo tiene: nombre del subgrupo; etiqueta `<subgroup>`; vacío.
- Un libro tiene: título; ruta en Urantiapedia a ese libro (si existe); OK (si el libro está subido) o vacío (si no lo está).

> Es muy recomendable etitar los archivos TSV con [Visual Studio Code](https://code.visualstudio.com/) añadiéndole la extensión [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv), que permite colorear los datos y muchas más cosas.
{.is-info}

## Resultado

Con este fichero se ha creado manualmente (mediante _replaces_) el índice de la _Biblioteca Urantiapedia_ y los índices de cada estante. Se puede ver el resultado en el [Índice de todos los grupos de libros](/es/index/books). Esta página está también accesible en esta web, desde el menú lateral a la izquierda, opción `OTROS LIBROS \ Índice`. Por el momento esta página sólo está disponible en inglés, español y francés.

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_upload">Subir contenido de forma masiva a Urantiapedia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_religious_books_markdown">Obtener libros de todas las religiones</a></td>
      </tr>
    </tbody>
  </table>
</figure>