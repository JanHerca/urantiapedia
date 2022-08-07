---
title: "Urantiapedia — Manual para Administradores"
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table">
  <table style="border-bottom:0.2em solid #c8ccd1;border-left:1px solid #c8ccd1;border-right:1px solid #c8ccd1;border-top:1px solid #c8ccd1;table-layout: fixed; width: 100%;">
    <tbody>
      <tr>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/es/help/roles">Perfiles de colaboradores</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/es/help">Índice</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/es/help/github">Manual para Editores Jefe</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Acerca de la Urantiapedia

[Urantiapedia](https://urantiapedia.org) es una web colaborativa basada en [Wiki.js](https://js.wiki/) con el propósito de servir de centro unificado de difusión de todo el conocimiento relativo a *El Libro de Urantia*.

## Acerca de Blue Fields

[Blue Fields](https://blue-fields.netlify.app/) es una web que ha sido creada para unir y organizar a lectores de *El Libro de Urantia* que desean participar en proyectos inteligentes, propositados y altruistas en todo el mundo. Es el sitio web que gestiona el registro y la colaboración entre los voluntarios de *Urantiapedia*.

## Acerca de GitHub

El proyecto *Urantiapedia* en GitHub (https://github.com/JanHerca/urantiapedia) es un proyecto creado para servir de procedimiento rápido de creación inicial de la *Urantiapedia*. Contiene unos archivos en ciertos formatos y un software que ayudan a automatizar la creación de un contenido inicial.

## A quién va dirigido este manual

Este manual va dirigido a los usuarios *administradores*, o *admins*, es decir:
- usuarios registrados en [Blue Fields](https://blue-fields.netlify.app/) y en [GitHub](https://github.com/).
- usuarios autorizados como *admins* por el equipo que dirige el proyecto en la plataforma [Blue Fields](https://blue-fields.netlify.app/).
- usuarios registrados en [Urantiapedia](https://urantiapedia.org). Sólo otro usuario *admin* puede registrar a un usuario como *admin*.
- usuarios con conocimientos de manejo de Git y GitHub.
- usuarios con conocimientos de *El Libro de Urantia* al menos en un idioma en los que está publicado, y preferiblemente con un buen nivel de la versión en inglés.
- usuarios que desean colaborar de forma desinteresada en la incorporación de información relativa a *El Libro de Urantia* en la *Urantiapedia*.

Los administradores de la web son los únicos encargados de subir cambios masivos a la web *Urantiapedia* durante cada una de las fases del proyecto. Más acerca de las fases del proyecto en [Help start](/es/help/phases).

## Procedimiento de trabajo en GitHub

El proceso a seguir será el siguiente:
1. El «Editor Jefe» crea un *fork* (una copia en su propia cuenta) del proyecto de la *Urantiapedia* en GitHub: https://github.com/JanHerca/urantiapedia.
2. El «Editor Jefe» crea una copia local del proyecto en su PC. La copia local debe ser de la última versión del contenido de la *Urantiapedia* (la rama master). Esto se hace primero con una acción *clone* y luego con acciones *pull* contra el proyecto, lo que descarga cualquier cambio a nuestra copia local.
3. El «Editor Jefe» realiza los cambios que desea en la copia local a los archivos que se indican en este manual y del modo en como se indica.Realiza *commits* a su copia local.
4. El «Editor Jefe» envía cambios a GitHub mediante acciones *push*.
5. El «Editor Jefe» realiza un *pull request* desde la web de GitHub. 
6. Los *pull request* de los «Editores Jefe» son revisados por los «Administradores», que se encargan de hacer un *merge* con la rama principal (master) de todos aquellos cambios que estén correctos. Cualquier cambio que no esté correcto será rechazado y se notificará a los «Editores Jefe» para que los corrijan.
7. Cuando los cambios están correctos el «Administrador» hace un *pull* para bajarse los cambios a su copia local.
8. El «Administrador» convierte los archivos del repositorio de [Urantiapedia](https://github.com/JanHerca/urantiapedia) en ficheros en formato Wiki.js (HTML) usando las *Urantiapedia Tools* y los copia al repositorio de [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Este proyecto es una copia sincronizada con la web de la *Urantiapedia*.
9. El «Administrador» sube los cambios al repositorio remoto de [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup).
10. La web de la *Urantiapedia* se sincroniza de forma automática. Ahora los cambios quedan visibles para todos, para poder comprobar y validar que quedan bien.
11. El proceso se repite cuantas veces sea necesario regresando al punto 3.

![](/image/github_workflow.png)

## Configurar el proyecto Urantiapedia

Antes de cualquier trabajo en la *Urantiapedia* usando GitHub debes configurar todas las herramientas necesarias. Consulta [Configurar el proyecto de GitHub](/es/help/github_setting).

## Contenido del proyecto Urantiapedia en GitHub

Para conocer el contenido del proyecto en GitHub y cómo está estructurado, consulta [Contenido del proyecto de GitHub](/es/help/github_content).

## Tareas

Sobre las fases del proyecto consulta [Fases de la Urantiapedia](/es/help/phases).

Una vez tenemos el input en las carpetas correctas, para cada idioma, durante la fase I, los pasos a dar son:
1. Traducción del *Paramony* del inglés al idioma de destino. Consulta [Traducción del Paramony](/es/help/github_paramony).
2. Traducción y revisión del *Índice de términos* del inglés al idioma de destino. Consulta [Traducción y revisión del Índice de términos](/es/help/github_topicindex).
3. Obtención de una traducción de La Biblia en el idioma de destino. Consulta [Obtener la Biblia](/es/help/github_bible).
4. Conversión de *El Libro de Urantia* de HTML a JSON sin notas al pie. Consulta [Conversión a JSON](/es/help/github_book_json).
5. Adición de notas al pie a *El Libro de Urantia* en JSON. Consulta [Adición de notas al pie](/es/help/github_footnotes).
6. Conversión del *Índice de términos* de TXT a Wiki.js. Consulta [Conversión del Índice de Términos](/es/help/github_topicindex_to_wiki).
7. Conversión de *El Libro de Urantia* de JSON con notas al pie a Wiki.js incluyendo referencias a los términos. Consulta [Conversión de El Libro de Urantia](/es/help/github_book_to_wiki).
8. Conversión de *La Biblia* de LaTeX a Wiki.js con notas al pie. Consulta [Conversión de La Biblia](/es/help/github_bible_to_wiki).
9. Subir cambios a [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Consulta [Subir contenido de forma masiva a Urantiapedia](/es/help/github_upload).

Los «Editores Jefe» y los «Editores Asistente» realizarán las tareas 1 a 3. Los «Administradores» se encargan de las tareas 4 a 9.

![](/image/formats.png)

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table">
  <table style="border-bottom:0.2em solid #c8ccd1;border-left:1px solid #c8ccd1;border-right:1px solid #c8ccd1;border-top:1px solid #c8ccd1;table-layout: fixed; width: 100%;">
    <tbody>
      <tr>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/es/help/roles">Perfiles de colaboradores</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/es/help">Índice</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/es/help/github">Manual para Editores Jefe</a></td>
      </tr>
    </tbody>
  </table>
</figure>




