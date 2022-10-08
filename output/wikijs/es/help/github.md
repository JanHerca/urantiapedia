---
title: "Urantiapedia — Manual para Editores Jefe"
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
        <td><a href="/es/help/admin">Manual para Administradores</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_assistant">Manual para Editores Asistentes</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Acerca de la Urantiapedia

[Urantiapedia](https://urantiapedia.org) es una web colaborativa basada en [Wiki.js](https://js.wiki/) con el propósito de servir de centro unificado de difusión de todo el conocimiento relativo a *El Libro de Urantia*.

## Acerca de Blue Fields

[Blue Fields](https://blue-fields.netlify.app/) es una web que ha sido creada para unir y organizar a lectores de *El Libro de Urantia* que desean participar en proyectos inteligentes, propositados y altruistas en todo el mundo. Es el sitio web que gestiona el registro y la colaboración entre los voluntarios de *Urantiapedia*.

## Acerca de GitHub

*Urantiapedia* tiene dos proyectos públicos en GitHub: [Urantiapedia](https://github.com/JanHerca/urantiapedia) y [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) creados para servir de procedimiento rápido de creación inicial de contenidos. Contiene unos archivos en ciertos formatos y un software que ayudan a automatizar la creación de un contenido inicial.

## A quién va dirigido este manual

Este manual va dirigido a los usuarios denominados «Editores Jefe», es decir, aquellos usuarios que cumplen los siguientes requisitos:
- Tienen una cuenta en esta web con permisos de edición, y una cuenta en [GitHub](https://github.com/).
- Pueden aportar contenido a los dos proyectos de Urantiapedia en GitHub: [Urantiapedia](https://github.com/JanHerca/urantiapedia) y [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Pueden hacer cambios de forma masiva usando el segundo proyecto.
- Tienen buenos conocimientos de manejo de Git y GitHub.
- Tienen buen conocimiento de *El Libro de Urantia* al menos en un idioma en los que está publicado, pero mejor si es inglés y en un segundo idioma en el que esté traducido el libro.
- Desean colaborar de forma desinteresada en la incorporación de información relativa a *El Libro de Urantia* en la *Urantiapedia*.

## Procedimiento de trabajo en GitHub

El proceso a seguir para el «Editor Jefe» será el siguiente:
1. Crea un *fork* (una copia en su propia cuenta) de los proyectos de la *Urantiapedia* en GitHub: 
  - https://github.com/JanHerca/urantiapedia
  - https://github.com/JanHerca/urantiapedia-backup
2. Crea una copia local de los proyectos en su PC. La copia local debe ser de la última versión del contenido de la *Urantiapedia* (la rama master). Esto se hace primero con una acción *clone* y luego con acciones *pull* contra los proyectos, lo que descarga cualquier cambio a nuestra copia local.
3. Realiza los cambios que desea en la copia local del proyecto Urantiapedia a los archivos que se indican en este manual y del modo en como se indica. Realiza *commits* a su copia local.
4. Envía cambios parciales (aún no listos para subir a la web) a su proyecto Urantiapedia en GitHub mediante acciones *push*.
5. Cuando tiene un conjunto de cambios que desea subir a la web, sincroniza el proyecto Urantiapedia con el proyecto Urantiapedia-backup y sube los cambios de ambos a sus proyectos mediante acciones *push*.
6. Realiza entonces un *pull request* desde la web de GitHub para ambos proyectos: Urantiapedia y Urantiapedia-backup. 
7. Estos *pull request* de los «Editores Jefe» son revisados por los «Administradores», que se encargan de hacer un *merge* con la rama principal (master) de todos aquellos cambios que estén correctos. Cualquier cambio que no esté correcto será rechazado y se notificará a los «Editores Jefe» para que los corrijan.
8. Cuando los cambios están correctos y el «Administrador» hace un *merge* los cambios se suben automáticamente a la web y suelen estar disponibles en unos minutos dependiendo del número de cambios y su tipo.

![](/image/github_workflow.png)
## Configurar el proyecto Urantiapedia

Antes de cualquier trabajo en la *Urantiapedia* usando GitHub debes configurar todas las herramientas necesarias. Consulta [Configurar el proyecto de GitHub](/es/help/github_setting).

## Contenido del proyecto Urantiapedia en GitHub

Para conocer el contenido del proyecto en GitHub y cómo está estructurado, consulta [Contenido del proyecto de GitHub](/es/help/github_content).
## Tareas

Sobre las fases del proyecto consulta [Fases de la Urantiapedia](/es/help/phases).

### Fase I: El Libro de Urantia, la Biblia y el Índice de Términos

1. Traducción del *Paramony* del inglés al idioma de destino. Consulta [Traducción del Paramony](/es/help/github_paramony).
2. Traducción y revisión del *Índice de términos* del inglés al idioma de destino. Consulta [Traducción y revisión del Índice de términos](/es/help/github_topicindex).
3. Obtención de una traducción de La Biblia en el idioma de destino. Consulta [Obtener la Biblia](/es/help/github_bible).
4. Conversión de *El Libro de Urantia* de HTML a JSON sin notas al pie. Consulta [Conversión a JSON](/es/help/github_book_json).
5. Adición de notas al pie a *El Libro de Urantia* en JSON. Consulta [Adición de notas al pie](/es/help/github_footnotes).
6. Conversión del *Índice de términos* de TXT a Wiki.js. Consulta [Conversión del Índice de Términos](/es/help/github_topicindex_to_wiki).
7. Conversión de *El Libro de Urantia* de JSON con notas al pie a Wiki.js incluyendo referencias a los términos. Consulta [Conversión de El Libro de Urantia](/es/help/github_book_to_wiki).
8. Conversión de *La Biblia* de LaTeX a Wiki.js con notas al pie. Consulta [Conversión de La Biblia](/es/help/github_bible_to_wiki).
9. Subir cambios a [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Consulta [Subir contenido de forma masiva a Urantiapedia](/es/help/github_upload).

Actualmente todas las tareas excepto la 2 han sido completadas.

![](/image/formats.png)

### Fase II: Libros, artículos, ayudas de estudio, diagramas e índices

1. Crear un catálogo de libros que se consideran fuentes de *El Libro de Urantia* o contienen paralelos interesantes. Consulta [Catálogo de libros «fuente»](/es/help/github_sourcebooks_catalog).
2. Obtener los libros anteriores. Consulta [Obtener libros «fuente»](/es/help/github_sourcebooks_markdown).
3. Crear un catálogo de artículos escritos por lectores. Consulta [Catálogo de artículos](/es/help/github_articles_catalog).
4. Obtener los artículos. Consulta [Obtener artículos](/es/help/github_articles_markdown).
5. Crear un catálogo de ayudas de estudio. Consulta [Catálogo de ayudas de estudio](/es/help/github_studyaids_catalog).
6. Obtener las ayudas de estudio anteriores. Consulta [Obtener ayudas de estudio](/es/help/github_studyaids_markdown).
7. Crear un catálogo de diagramas. Consulta [Catálogo de diagramas](/es/help/github_diagrams_catalog).
8. Obtener los diagramas anteriores en formato mapa de imágenes HTML o preferiblemente SVG. Consulta [Obtener diagramas](/es/help/github_diagrams_svg).
9. Crear el catálogo de imágenes del proyecto. Consulta [Catálogo de imágenes](/es/help/github_images_catalog).

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
        <td><a href="/es/help/admin">Manual para Administradores</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_assistant">Manual para Editores Asistentes</a></td>
      </tr>
    </tbody>
  </table>
</figure>
