---
title: Conversión de El Libro de Urantia de HTML a JSON sin notas al pie
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---


Los ficheros de entrada en formato HTML deberán estar en las carpetas `input/html/book-xx`, donde `xx` son las dos letras del idioma (`es` = español, `en` = inglés, etc.)

> IMPORTANTE: Los ficheros HTML tal cual descargados de la web oficial de la [Fundación Urantia](https://www.urantia.org/urantia-book/download-text-urantia-book) pueden tener algunos problemas para ser procesados tal cual y resulte necesario introducir pequeñas modificaciones para ayudar en el proceso de conversión al formato JSON.

Una vez descargados los archivos de la web de la *Fundación Urantia* debería existir un archivo (*.html) por cada documento de *El Libro de Urantia*, en total 197 archivos. El nombre de cada archivo con cada documento debe cumplir el patrón de que los últimos tres caracteres del nombre sean el número del documento, desde 000 a 196 para que la conversión luego funcione. Por ejemplo, en francés el fichero con el documento 1 se llama `06-Fascicule001.html`; el mismo fichero en búlgaro se llama `06-Документ001.html`.

Puesto que en formato HTML *El Libro de Urantia* puede adoptar diferentes etiquetas HTML para lo que se considera el título del documento, el título de una sección, etc., en el programa que realiza la conversión quizá sea necesario incluir algunas modificaciones cuando se incorpore un nuevo idioma. Este trabajo correrá a cargo de los usuarios «desarrolladores» encargados de la aplicación *Urantiapedia Tools*. Este software está desarrollado en Javascript y el código se encuentra en la carpeta `app` del proyecto.

Actualmente están disponibles los archivos para 24 idiomas: búlgaro (`book-bg`), checo (`book-cs`), danés (`book-da`), alemán (`book-de`), griego (`book-el`), inglés (`book-en`), español (`book-es`, `book-es-1993` y en breve `book-es-2021`), estonio (`book-et`), farsi (`book-fa`), finlandés (`book-fi`), francés (`book-fr`), hebreo (`book-he`), húngaro (`book-hu`), indonesio (`book-id`), italiano (`book-it`), japonés (`book-ja`), coreano (`book-ko`), lituano (`book-lt`), holandés (`book-nl`), polaco (`book-pl`), portugués (`book-pt`), rumano (`book-ro`), ruso (`book-ru`) y sueco (`book-sv`). Estos archivos ya han sido modificados y procesados para que el programa de conversión a JSON funcione correctamente con ellos, y también están disponibles los ficheros JSON resultantes.

La traducción al farsi está actualmente en proceso y no se encuentran todos los documentos disponibles.

Conviene tener presente que en el idioma español existen actualmente tres traducciones. Las tres traducciones van a estar disponibles en la *Urantiapedia*. Por esa razón habrá estas carpetas:
- `book-es`, con la traducción denominada Europea, hecha en 2009; 
- `book-es-1993`, con la primera traducción al español hecha en 1993; 
- `book-es-2021`, con la nueva traducción hecha en 2021.

Para convertir los ficheros de HTML a JSON sin las notas al pie hay que seguir estos pasos:
- Abre *Urantiapedia Tools*.
- En *Proceso* selecciona: Convertir Libro de Urantia (HTML) a JSON.
- Las carpetas necesarias se seleccionan automáticamente: `input/html/book-xx` para los ficheros HTML y `input/json/book-xx` para los ficheros JSON.
- Click en *Ejecutar*.
- Si todo está correcto aparecerá *Conversión realizada con éxito*. En caso de errores aparecerá el listado de errores. En este caso conviene avisar a alguno de los usuarios «desarrolladores» por si existe algún problema con el software.

![](/image/upt_html_json.png)

Los ficheros resultantes en formato JSON deberán guardarse en las carpetas `input/json/book-xx`, donde `xx` son las dos letras del idioma (`es` = español, `en` = inglés, etc.)

> IMPORTANTE: Estos ficheros se deben generar ni editar de forma manual por conversión del formato HTML.

Existirá un archivo por cada documento de *El Libro de Urantia*, en total 197 archivos. Los archivos se denominan `DocXXX.json`, donde `XXX` es el número de documento desde `000` a `196`.

El formato de estos archivos es JSON (https://es.wikipedia.org/wiki/JSON). Existe un conversor en las *Urantiapedia Tools* que luego convierte este formato JSON al formato HTML de Wiki.js.

La estructura de los ficheros JSON es ésta:

```json
{
    "paper_index": "<número de documento, de 0 a 196>",
    "sections": [
        {
            "section_index": "<número de sección, desde 0 si existe a N>",
            "section_ref": "<texto con la ref. de sección, por ejemplo “0:0”>",
            "section_title": "<título de sección para secciones que no sean la 0>",
            "pars": [
                {
                    "par_ref": "<Referencia del párrafo, p.e. “0:0.1”>",
                    "par_pageref": "<Referencia del párrafo según página, p.e. “1.1”>",
                    "par_content": "<Contenido del párrafo. Ver abajo sobre formateo>"
                },
                {

                }
            ]
        },
        {

        }
    ],
    "footnotes": [
        "<array de notas al pie que son referencias a la Biblia>"
    ],
    "paper_title": "<título del documento, sin poner Documento X, sólo el título>"
}
```
En los archivos JSON resultantes de esta tarea la sección `footnotes` se encontrará vacía. Para completarla hay que ejecutar la tarea siguiente.

Para formatear el texto del párrafo con algunos caracteres extraños que aparecen en *El Libro de Urantia* en los ficheros JSON se usan estos equivalentes:

Tipo de caracter | Cómo se escriben
---|---
Cursiva | * * (entre asteriscos)
Versalitas | $ $ (entre signos de dólar)
Subrayado (para idiomas que no incluyen opción de cursiva) | \| \| (entre plecas)

## Links

- [Empezar con la Urantiapedia](/es/help/start)
- [Contenido de la Urantiapedia](/es/help/content)
- [Urantiapedia - Idiomas soportados](/es/help/languages)
- [Manual para Administradores](/es/help/admin)
- [Manual para Desarrolladores](/es/help/devs)
- [Manual para Editores Jefe](/es/help/github)
- [Urantiapedia status - Progreso actual del proyecto](/es/help/status)

## External links

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)