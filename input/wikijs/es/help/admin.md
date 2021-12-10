---
title: Urantiapedia - Manual para administradores
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

Este manual va dirigido a los usuarios *administradores*, o *admins*, es decir:
- usuarios registrados en [Blue Fields](https://blue-fields.netlify.app/) y en [GitHub](https://github.com/).
- usuarios autorizados como *admins* por el equipo que dirige el proyecto en la plataforma [Blue Fields](https://blue-fields.netlify.app/).
- usuarios registrados en [Urantiapedia](https://urantiapedia.org). Sólo otro usuario *admin* puede registrar a un usuario como *admin*.
- usuarios con conocimientos de manejo de GitHub.
- usuarios con conocimientos de *El Libro de Urantia* al menos en un idioma en los que está publicado, y preferiblemente con un buen nivel de la versión en inglés.
- usuarios que desean colaborar de forma desinteresada en la incorporación de información relativa a *El Libro de Urantia* en la *Urantiapedia*.

Los administradores de la web son los únicos encargados de subir cambios a la web *Urantiapedia* durante la fase de preparación. Más acerca de las fases del proyecto en [Help start](/es/help/start).

## Configurar las *Urantiapedia Tools*

*Urantiapedia Tools* es una aplicación de escritorio desarrollada en JavaScript con [Electron](https://www.electronjs.org/). Para instalarla y ejecutarla sigue estos pasos:

1. Se recomienda el uso de [VS Code](https://code.visualstudio.com/).
2. Clona o crea un fork de [GitHub project](https://github.com/JanHerca/urantiapedia).
3. Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Abre un terminal en VS Code y ejecuta `node -v` para comprobar que lo tienes instalado.
4. Con el terminal abierto en la carpeta root del proyecto instala las dependencias: `npm install`. Espera a que todas se hayan instalado.
5. El proyecto está configurado con un lanzador por defecto. Pulsa F5 para ejecutarlo o bien ejecuta en el terminal `npm start`.
6. La aplicación se abre. Por defecto se abre una ventana Dev Tools para depurar. Puedes ignorarla si no estás desarrolando.

![](/image/uptools.png)

## Flujo de trabajo

Sobre el proeycto consulta  las fases del proyecto [Contenido de la Urantiapedia](/es/help/content).

Para cada idioma la lista de tareas a realizar es la siguiente:
1. Traducción del *Paramony* del inglés al idioma de destino.
2. Traducción y revisión de los *Indice de términos* del inglés al idioma de destino.
3. Obtención de una traducción de *La Biblia* en el idioma de destino.
4. Conversión de *El Libro de Urantia* de HTML a JSON sin notas al pie.
5. Adición de notas al pie del *Paramony* a *El Libro de Urantia* en JSON.
6. Conversión del *Índice de términos* de TXT al HTML de Wiki.js.
7. Conversión de *El Libro de Urantia* de JSON con notas al pie al HTML de Wiki.js incluyendo referencias a los términos.
8. Conversión de *La Biblia* de LaTeX al HTML de Wiki.js con notas al pie.
9. Subir cambios a [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup).

Los «editores GitHub» realizarán las tareas 1 a 3. Los «administradores» se encargan de las tareas 4 a 9. Pasamos a detallar cada tarea de los «administradores» en las secciones siguientes.

![](/image/formats.png)

## Conversión de *El Libro de Urantia* de HTML a JSON sin notas al pie

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

## Adición de notas al pie a *El Libro de Urantia* en JSON

La adición de notas al pie a *El Libro de Urantia* requiere haber realizado previamente las siguientes tareas:
- Traducción del *Paramony* del inglés al idioma de destino. El resultado de esta tarea es un archivo para cada idioma (`input/json/footnotes-book-xx.json`).
- Conversión previa de *El Libro de Urantia* de HTML a JSON sin notas al pie. El resultado de esta tarea es un conjunto de 197 archivos en una carpeta para cada idioma (`input/json/book-xx`).

Para añadir las notas al pie en los archivos JSON hay que seguir estos pasos:
- Abrir *Urantiapedia Tools*.
- En *Proceso* seleccionar: Actualizar Refs Biblia en Libro de Urantia (JSON).
- Las carpetas necesarias se seleccionan automáticamente: para *Ficheros JSON* será `input/json/book-xx`.
- Click en *Ejecutar*.
- Si todo está correcto aparecerá *Conversión realizada con éxito*. En caso de errores aparecerá el listado de errores. En este caso conviene avisar a alguno de los usuarios «desarrolladores» por si existe algún problema con el software.


![](/image/upt_json_json.png)

Los ficheros de salida son diferentes a los de entrada para evitar que si hay cualquier problema queden inservibles. La salida se guarda en carpetas `input/json/book-xx-footnotes`, donde `xx` es el código de idioma idéntico al usado como carpeta de entrada.

## Conversión del *Índice de términos* de TXT a Wiki.js

Los ficheros del *Índice de términos* en formato TXT son creados y revisados por los «editores GitHub». Estos archivos deben dejarse en carpetas como `input/txt/topic-index-xx` donde `xx` es el código del idioma de destino.

Para convertir estos ficheros TXT a formato Wiki.js hay que seguir estos pasos:
- Abrir *Urantiapedia Tools*.
- En *Proceso* seleccionar: Convertir TopicIndex (TXT) a Wiki.
- Las carpetas necesarias se seleccionan automáticamente: para *Ficheros TXT* es `input/txt/topic-index-xx`, para *Ficheros HTML* es `output/wikijs/xx/topic` (pero si `xx` = `en` se omite). Si la carpeta de salida no existe creála antes. Si en la carpeta de salida ya existen ficheros Wiki.js se sobreescribirán los existentes.
- En *Categorías de términos* seleccionar `TODOS` para procesar todos los términos de todas las categorías, o alternativamente, seleccionar sólo una categoría si se desea generar sólo los términos que pertenecen a esa categoría.
- Click en *Ejecutar*.
- Si todo está correcto aparecerá *Conversión realizada con éxito*. En caso de errores aparecerá el listado de errores. En este caso conviene avisar a alguno de los usuarios «desarrolladores» por si existe algún problema con el software.

![](/image/upt_txt_wiki.png)

Los ficheros de salida tienen formato HTML. Se genera un fochero por cada término.

Los ficheros de salida ya tienen el formato que permite subirlos directamente a la *Urantiapedia* mediante [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Ver abajo.

## Conversión de *El Libro de Urantia* de JSON con notas al pie a Wiki.js incluyendo referencias a los términos

Los ficheros de *El Libro de Urantia* en formato JSON con las notas al pie se generan con la herramienta *Actualizar Refs Biblia en Libro de Urantia (JSON)*, como ya hemos visto, y los ficheros resultantes se guardan en carpetas `input/json/book-xx-footnotes`.

Para convertir estos ficheros JSON a formato Wiki.js hay que seguir estos pasos:
- Abrir *Urantiapedia Tools*.
- En *Proceso* seleccionar: Convertir Libro de Urantia (JSON) + TopicIndex (TXT) a Wiki.js.
- Las carpetas necesarias se seleccionan automáticamente: para *Ficheros TXT* es `input/txt/topic-index-xx`, para *Ficheros JSON* es `input/json/book-xx-footnotes`, y para *Ficheros HTML* es `output/wikijs/xx/The_Urantia_Book` (pero si `xx` = `en` se omite). Si la carpeta de salida no existe creála antes. Si en la carpeta de salida ya existen ficheros Wiki.js se sobreescribirán los existentes.
- En *Categorías de términos* seleccionar `TODOS` para que al realizar el proceso de conversión se utilicen todos los términos de todas las categorías y se añadan enlaces en *El Libro de Urantia* a todos los términos, o alternativamente, seleccionar sólo una categoría si se desea generar sólo enlaces a los términos que pertenecen a esa categoría.
- Click en *Ejecutar*.
- Si todo está correcto aparecerá *Conversión realizada con éxito*. En caso de errores aparecerá el listado de errores. En este caso conviene avisar a alguno de los usuarios «desarrolladores» por si existe algún problema con el software.

![](/image/upt_json_wiki.png)

Los ficheros de salida tienen formato HTML. Se generarán 197 archivos, uno por cada documento de *El Libro de Urantia*.

Los ficheros de salida ya tienen el formato que permite subirlos directamente a la *Urantiapedia* mediante [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Ver abajo.

## Conversión de *La Biblia* de LaTeX a Wiki.js con notas al pie

Los ficheros de *La Biblia* en formato LaTeX se deberán haber creado en carpetas como `input/text/bible-xx` donde `xx` es el código del idioma de destino.

Para convertir estos ficheros LaTeX a formato Wiki.js hay que seguir estos pasos:
- Abrir *Urantiapedia Tools*.
- En *Proceso* seleccionar: Convertir Biblia (LaTeX) + Refs (TXT) a Wiki.
- Las carpetas necesarias se seleccionan automáticamente: para *Ficheros TXT* es `input/txt/bible-refs-es`, para *Ficheros LaTeX* es `input/tex/bible-xx` y para *Ficheros HTML* es `output/wikijs/xx/Bible` (pero si `xx` = `en` se omite). Si la carpeta de salida no existe creála antes. Si en la carpeta de salida ya existen ficheros Wiki.js se sobreescribirán los existentes.
- Click en *Ejecutar*.
- Si todo está correcto aparecerá *Conversión realizada con éxito*. En caso de errores aparecerá el listado de errores. En este caso conviene avisar a alguno de los usuarios «desarrolladores» por si existe algún problema con el software.

![](/image/upt_tex_wiki.png)

Los ficheros de salida tienen formato HTML. Se generará un archivo por cada capítulo de la Biblia.

Los ficheros de salida ya tienen el formato que permite subirlos directamente a la *Urantiapedia* mediante [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Ver abajo.

## Subir contenido

Par subir contenido a la Urantiapedia se usa un proyecto GitHub con una copia completa de [Urantiapedia](https://urantiapedia.org). El proyecto está aquí:

[Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup)

Este proyecto está sincronizado con el sitio web por lo que desde él puede obtenerse una copia completa de todo el contenido de la *Urantiapedia*.

Para subir contenido sigue estos pasos:
- Clona o haz un fork del proyecto *Urantiapedia-backup* en GitHub.
- Copia el nuevo contenido de la carpeta `output/wikijs` del proyecto *Urantiapedia* a la carpeta raíz del proyecto *Urantiapedia-backup*.
- Haz un pull request.
- Los usuarios *admin* del proyecto en GitHub realizarán un *merge* de los cambios. Una vez esos cambios hayan sido *mergeados* estarán disponibles en la página web de la *Urantiapedia* en las horas siguientes dependiendo del rendimiento actual de los servidores para ejecutar tareas de subida.

## Hacer copias de seguridad

### De todo el sitio web

TODO

### Sólo de la Base de Datos

TODO

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




