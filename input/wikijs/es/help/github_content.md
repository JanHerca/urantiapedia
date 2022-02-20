---
title: Urantiapedia - Contenido del proyecto de GitHub
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

## Organización del proyecto *Urantiapedia* en GitHub

Las carpetas que componen el proyecto de *Urantiapedia* en Github son éstas:
- **.vscode**: ficheros de configuración para Visual Studio Code, que es el IDE de desarrollo de las *Urantiapedia Tools*.
- **app**: ficheros código fuente en JavaScript con la aplicación *Urantiapedia Tools*.
- **css**: algunso ficheros CSS para mostrar mejor los ficheros Markdown.
- **docs**: documentación del proyecto.
- **input**: carpeta principal que contiene los archivos de entrada (inputs) que sirven para generar las páginas de la *Urantiapedia* para un idioma. Esta es la única carpeta que los «Editores Jefe» deben modificar del proyecto.
    * **html**: carpeta con archivos en formato HTML.
        * **book-xx**: *El Libro de Urantia* en sus diferentes traducciones en formato HTML original obtenido de la *Fundación Urantia* (`book-es`, `book-en`, etc.)
    * **json**: carpeta con archivos en formato JSON.
        * **book-xx**: *El Libro de Urantia* en sus diferentes traducciones en formato JSON, pero sin las notas al pie del *Paramony* (`book-es`, `book-en`, etc.)
        * **book-xx-footnotes**: *El Libro de Urantia* en sus diferentes traducciones en formato JSON, pero con las notas al pie del *Paramony* (`book-es-footnotes`, `book-en-footnotes`, etc.)
        * **footnotes-book-xx.json**: notas al pie del *Paramony* en formato JSON.
    * **mediawiki** [`DEPRECATED`]: carpeta con contenido antiguo en formato Wikitext para MediaWiki. La primera versión de la *Urantiapedia* se ha hecho con MediaWiki pero la actual está creada con *Wiki.js*.
        * **articles-xx**: carpetas en desuso con ejemplos de artículos en formato Wikitext.
        * **main-pages-xx**: carpetas en desuso con contenido de ayuda en formato Wikitext.
        * **modules**: módulos escritos en Lua, el lenguaje de scripting para crear templates en MediaWiki.
        * **sample**: contenido de ejemplo antiguo en formato Wikitext.
        * **templates**: templates para la *Urantipedia*, que son fragmentos reusables en formato MediaWiki.
    * **tex**: carpeta con los archivos en formato LaTeX.
        * **bible-xx**: *La Biblia* en cada una de sus traducciones en formato LaTeX (`bible-es`, `bible-en`, etc.)
    * **txt**: carpeta con los archivos en formato TXT.
        * **articles-xx**: algunos artículos de ejemplo en formato TXT.
        * **bible-refs-xx** [`DEPRECATED`]: antigua carpeta con el *Paramony*. Este contenido ya no es necesario.
        * **topic-index-xx**: *Índice de términos* traducido a cada idioma en formato TXT (`topic-index-es`, `topic-index-en`, etc.)
    * **wikijs**: carpeta con el contenido para *Wiki.js* que se ha creado manualmente.

Las carpetas marcadas como *deprecated* pueden ser ignoradas por contener material que ya no se está usando en el proceso y será seguramente eliminado en un futuro.

Los códigos de idioma a usar en las carpetas deben seguir la norma ISO 639-1 con dos letras por cada idioma. https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes 

Las únicas carpetas de las cuales deben preocuparse los usuarios «Editores Jefe» son las siguientes:
- `input/html`
- `input/json`
- `input/tex`
- `input/txt`

Conviene tener presente que en el idioma español existen actualmente tres traducciones. Las tres traducciones van a estar disponibles en la *Urantiapedia*. Por esa razón habrá estas carpetas:
- `book-es`, con la traducción denominada Europea, hecha en 2009; 
- `book-es-1993`, con la primera traducción al español hecha en 1993; 
- `book-es-2021`, con la nueva traducción hecha en 2021.

## Flujo de trabajo con el contenido

Para cada idioma a incorporar en la *Urantiapedia* se partirá del siguiente input de entrada:
- Una traducción oficial de *El Libro de Urantia*, o el original para el inglés, en formato HTML. Este contenido se dejará en la carpeta `input/html/book-xx` del proyecto en GitHub, donde `xx` es el código de dos letras del idioma (`es` = español, `en` = inglés, etc.). En el caso del idioma español, puesto que hay varias traducciones, `book-es` contendrá la llamada edición europea, `book-es-1993` la traducción de 1993, y `book-es-2021` la traducción de 2021.
- Una traducción libre de derechos de autor de *La Biblia* que sea lo más estándar posible en el idioma en cuestión. El formato será LaTeX y los ficheros se dejarán en la carpeta `input/tex/bible-xx` del proyecto en GitHub, donde `xx` es el código del idioma.
- Una copia del *Paramony* en inglés. Este es un fichero con las referencias cruzadas entre la *La Biblia* y *El Libro de Urantia* que se encuentra en `input/json/footnotes-book-en.json`. Ha sido creado usando la relación de referencias cruzadas desarrollado por Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), convertido de su formato original TXT a un formato JSON que es más fácil de procesar. La copia debe renombrarse modificando las dos últimas letras por las del código del idioma. Por ejemplo, para francés deberá crearse un copia del archivo en inglés y llamar a esa copia como `input/json/footnotes-book-fr.json`.
- Una copia del *Índice de Términos* en idioma inglés. Este índice está compuesto por una colección de archivos que se encuentran en la carpeta `input/txt/topic-index-en`. Estos archivos TXT se han obtenido a partir del apéndice de la edición de *The Urantia Book* de la *Urantia Fellowship* ([Topic Index](https://urantia-book.org/urantiabook/topical_index/index.htm)), al que nos referiremos a partir de aquí como el *Índice de términos*. Este *Índice de Términos* ha sido convertido a un grupo de ficheros de tipo TXT, uno por cada letra del alfabeto, con los términos que empiezan por cada letra en inglés. La copia debe renombrarse modificando las dos últimas letras por las del código del idioma. Por ejemplo, para francés deberá crearse un copia de la carpeta en inglés y llamar a esa copia como `input/txt/topic-index-fr`.

En resumen, para el ejemplo del idioma francés el contenido a crear como input sería:

```
input
    html
        book-fr
            *.html
    json
        footnotes-book-fr.json
    tex
        bible-fr
            *.tex
    txt
        topic-index-fr
            *.txt
```
Para cualquier otro idioma se haría de manera similar. Es posible que parte de este contenido ya se encuentre disponible en el actual proyecto en GitHub. Conviene revisar lo existente antes de incorporar contenido nuevo.

## Links

- [Empezar con la Urantiapedia](/es/help/start)
- [Contenido de la Urantiapedia](/es/help/content)
- [Urantiapedia - Idiomas soportados](/es/help/languages)
- [Manual para administradores](/es/help/admin)
- [Manual para desarrolladores](/es/help/devs)
- [Manual para Editores Jefe](/es/help/github)
- [Urantiapedia status - Progreso actual del proyecto](/es/help/status)

## External links

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)