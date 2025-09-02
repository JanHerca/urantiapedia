---
title: Urantiapedia - Flujo de trabajo para crear el contenido inicial en un idioma
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
        <td><a href="/es/help/github_edit_local">Contenido del proyecto de GitHub</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_paramony">Traducción del Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Para cada idioma a incorporar en la *Urantiapedia* se partirá del siguiente _input_ de entrada:
- Una traducción oficial de *El Libro de Urantia*, o el original para el inglés, en formato HTML. Este contenido se dejará en la carpeta `input/html/book-xx` del proyecto en GitHub, donde `xx` es el código de dos letras del idioma (`es` = español, `en` = inglés, etc.). En el caso del idioma español, puesto que hay varias traducciones, `book-es` contendrá la llamada edición europea, `book-es-1993` la traducción de 1993, y `book-es-2021` la traducción de 2021. Si esta situación de varias traducciones ocurriera en el futuro en otros idiomas se adoptaría un convenio similar.
- Una traducción libre de derechos de autor de *La Biblia* que sea lo más estándar posible en el idioma en cuestión. El formato será LaTeX y los ficheros se dejarán en la carpeta `input/tex/bible-xx` del proyecto en GitHub, donde `xx` es el código del idioma.
- Una copia del *Paramony* en español (la idea es que sirva de guía para la traducción, el contenido en español es lo de menos) que se encuentra en `input/markdown/es/paramony`. El *Paramony* son unas las referencias cruzadas entre la *La Biblia* y *El Libro de Urantia* que se encuentra en `input/markdown/en/paramony`. Ha sido creado usando la relación de referencias cruzadas desarrollado por Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), convertido de su formato original TXT a un formato Markdown que es más fácil de procesar. En la carpeta en inglés están las tablas con toda la información original; en las carpetas del resto de idiomas simplemente están las tablas con los textos que se traducen.
- Una copia del *Índice de Términos* en idioma inglés. Este índice está compuesto por una colección de archivos que se encuentran en la carpeta `input/txt/topic-index-en`. Estos archivos TXT se han obtenido a partir del apéndice de la edición de *The Urantia Book* de la *Urantia Fellowship* ([Topic Index](https://urantia-book.org/urantiabook/topical_index/index.htm)), al que nos referiremos a partir de aquí como el *Índice de términos*. Este *Índice de Términos* ha sido convertido a un grupo de ficheros de tipo TXT, uno por cada letra del alfabeto, con los términos que empiezan por cada letra en inglés. La copia debe renombrarse modificando las dos últimas letras por las del código del idioma. Por ejemplo, para francés deberá crearse un copia de la carpeta en inglés y llamar a esa copia como `input/txt/topic-index-fr`.

En resumen, para el ejemplo del idioma francés el contenido a crear como input sería:

```
input
    html
        book-fr
            *.html
    markdown
        fr
            paramony
                *.md
    tex
        bible-fr
            *.tex
    txt
        topic-index-fr
            *.txt
```
Para cualquier otro idioma se haría de manera similar. Es posible que parte de este contenido ya se encuentre disponible en el actual proyecto en GitHub. Conviene revisar lo existente antes de incorporar contenido nuevo.

El resultado que generaría el contenido previo en francés sería como sigue:

```
output
    wikijs
        fr
            Bible
                (carpetas con los libros de la Biblia)
                    *.html
            index
                *.html
            The_Urantia_Book
                *.html
            The_Urantia_Book_Multiple
                *.html
            topic
                *.html
```

Una vez las carpetas y ficheros están organizados como se indica, se procederá con cada una de las tareas necesarias para crear los archivos finales usando las *Urantiapedia Tools* y alguna edición a mano. Esto se detalla en páginas siguientes de este manual.

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
        <td><a href="/es/help/github_edit_local">Contenido del proyecto de GitHub</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_paramony">Traducción del Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>