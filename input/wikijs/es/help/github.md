---
title: Urantiapedia - Manual para editores GitHub
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

## Acerca de la Urantiapedia

[Urantiapedia](https://urantiapedia.org) es una web colaborativa basada en [Wiki.js](https://js.wiki/) con el propósito de servir de centro unificado de difusión de todo el conocimiento relativo a *El Libro de Urantia*.

## Acerca de Blue Fields

[Blue Fields](https://blue-fields.netlify.app/) es una web que ha sido creada para unir y organizar a lectores de *El Libro de Urantia* que desean participar en proyectos inteligentes, propositados y altruistas en todo el mundo.

## Acerca de GitHub

El proyecto *Urantiapedia* en GitHub (https://github.com/JanHerca/urantiapedia) es un proyecto creado para servir de procedimiento rápido de creación inicial de la *Urantiapedia*. Contiene unos archivos en ciertos formatos y un software que ayudan a automatizar la creación de un contenido inicial.

## A quién va dirigido este manual

Este manual va dirigido a los usuarios denominados «editores GitHub», es decir, aquellos usuarios que cumplen los siguientes requisitos:
- son usuarios registrados con una cuenta en [Blue Fields](https://blue-fields.netlify.app/) y en [GitHub](https://github.com/).
- son usuarios que han sido autorizados como colaboradores del proyecto por el equipo que dirige el proyecto en la plataforma [Blue Fields](https://blue-fields.netlify.app/).
- son usuarios con unos mínimos conocimientos de manejo de GitHub.
- son usuarios con cierto conocimiento de *El Libro de Urantia* al menos en un idioma en los que está publicado.
- desean colaborar de forma desinteresada en la incorporación de información relativa a *El Libro de Urantia* en la *Urantiapedia*.

Los «editores GitHub» no necesitan estar registrados en la web *Urantiapedia* porque un «editor GitHub» sólo usará su cuenta de GitHub para enviar el resultado de su trabajo al proyecto *Urantiapedia* en GitHub. Todo el trabajo necesario se realizará únicamente a través de GitHub, y serán los «administradores» de la web los encargados de subir cambios a la web *Urantiapedia* para comprobar el resultado del trabajo.

## Procedimiento de trabajo en GitHub

El proceso a seguir será el siguiente:
1. El «editor GitHub» crea un *fork* (una copia en su propia cuenta) del proyecto de la *Urantiapedia* en GitHub: https://github.com/JanHerca/urantiapedia.
2. El «editor GitHub» crea una copia local del proyecto en su PC. 
3. La copia local debe ser de la última versión del contenido de la *Urantiapedia* (la rama master). Esto se hace primero con una acción *clone* y luego con acciones *pull* contra el proyecto, lo que descarga cualquier cambio a nuestra copia local.
4. El «editor GitHub» realiza los cambios que desee en la copia local a los archivos que se indican en este manual y del modo en como se indica.
5. El «editor GitHub» realiza *commits* a su copia local y envía cambios a GitHub mediante acciones *push*. Luego realiza un *pull request* desde la web de GitHub.
6. Los *pull request* de los «editores GitHub» son revisados por los «administradores», que se encargan de hacer un *merge* con la rama principal (master) de todos aquellos cambios que estén correctos. Cualquier cambio que no esté correcto será rechazado y se notificará a los «editores GitHub» para que los corrijan.
7. Los cambios que estén correctos serán subidos a la web de la *Urantiapedia* por los «administradores» para poder comprobar y validar que quedan bien y para que cualquiera pueda examinar el resultado.
8. El proceso se repite cuantas veces sea necesario regresando al punto 4.

## Configurar el proyecto Urantiapedia

Antes de cualquier trabajo en la *Urantiapedia* usando GitHub debes configurar todas las herramientas necesarias. Consulta [Configurar el proyecto de GitHub](/es/help/github_setting).

## Organización del proyecto *Urantiapedia* en GitHub

Las carpetas que componen el proyecto de *Urantiapedia* en Github son éstas:
- **.vscode**: ficheros de configuración para Visual Studio Code, que es el software con el que se está desarrollando las *Urantiapedia Tools*.
- **app**: ficheros código fuente en JavaScript con la aplicación *Urantiapedia Tools*.
- **css**: algunso ficheros CSS para mostrar mejor los ficheros Markdown.
- **docs**: documentación del proyecto.
- **input**: carpeta principal que contiene los archivos de entrada (inputs) que sirven para generar las páginas de la *Urantiapedia* para un idioma. Esta es la única carpeta que los «editores GitHub» deben modificar del proyecto.
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

Las únicas carpetas de las cuales deben preocuparse los usuarios «editores GitHub» son las siguientes:
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

Una vez tenemos el input en las carpetas correctas los pasos a dar son:
1. Traducción del *Paramony* del inglés al idioma de destino. Consulta [Traducción del Paramony](/es/help/github_paramony).
2. Traducción y revisión del *Índice de términos* del inglés al idioma de destino. Consulta [Traducción y revisión del Índice de términos](/es/help/github_topicindex).
3. Obtención de una traducción de La Biblia en el idioma de destino. Consulta [Obtener la Biblia](/es/help/github_bible).
4. Conversión de *El Libro de Urantia* de HTML a JSON sin notas al pie.
5. Adición de notas al pie a *El Libro de Urantia* en JSON.
6. Conversión del *Índice de términos* de TXT a Wiki.js.
7. Conversión de *El Libro de Urantia* de JSON con notas al pie a Wiki.js incluyendo referencias a los términos.
8. Conversión de *La Biblia* de LaTeX a Wiki.js con notas al pie.
9. Subir cambios a [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup).

Los «editores GitHub» realizarán las tareas 1 a 3. Los «administradores» se encargan de las tareas 4 a 9. Pasamos a detallar cada tarea  de los «editores GitHub» en las secciones siguientes.

![](/image/formats.png)

## Links

- [Empezar con la Urantiapedia](/es/help/start)
- [Contenido de la Urantiapedia](/es/help/content)
- [Urantiapedia - Idiomas soportados](/es/help/languages)
- [Manual para administradores](/es/help/admin)
- [Manual para desarrolladores](/es/help/devs)
- [Manual para editores GitHub](/es/help/github)
- [Urantiapedia status - Progreso actual del proyecto](/es/help/status)

## External links

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)
