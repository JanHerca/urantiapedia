---
title: Conversión de El Libro de Urantia de JSON con notas al pie a Wiki.js incluyendo referencias a los términos
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

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

Los ficheros de salida ya tienen el formato que permite subirlos directamente a la *Urantiapedia* mediante [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Ver [Subir contenido de forma masiva a Urantiapedia](/es/help/github_upload).

## Links

- [Empezar con la Urantiapedia](/es/help/start)
- [Contenido de la Urantiapedia](/es/help/content)
- [Urantiapedia - Idiomas soportados](/es/help/languages)
- [Manual para Administradores](/es/help/admin)
- [Manual para Desarrolladores](/es/help/devs)
- [Manual para Editores Jefe](/es/help/github)
- [Manual para Editores Asistente](/es/help/github_assistant)
- [Urantiapedia status - Progreso actual del proyecto](/es/help/status)

## External links

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)