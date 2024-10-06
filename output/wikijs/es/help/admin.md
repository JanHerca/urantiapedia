---
title: "Urantiapedia — Manual para Administradores"
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
        <td><a href="/es/help/roles">Perfiles de colaboradores</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github">Manual para Editores Jefe</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Acerca de la Urantiapedia

[Urantiapedia](https://urantiapedia.org) es una web colaborativa basada en [Wiki.js](https://js.wiki/) con el propósito de servir de centro unificado de difusión de todo el conocimiento relativo a *El Libro de Urantia*.

## Acerca del registro en Urantiapedia y Blue Fields

En caso de querer colaborar en este proyecto el mejor medio de contacto es el correo electrónico urantiapedia@gmail.com. Envía un mensaje comentando tu interés en el proyecto y los Administradores se encargarán de darte acceso.

Otra forma que estará disponible pronto será a través del registro en la web [Blue Fields](https://blue-fields.netlify.app/), que es una web que ha sido creada para unir y organizar a lectores de *El Libro de Urantia* que desean participar en proyectos inteligentes, propositados y altruistas en todo el mundo. Una vez registrado el equipo del proyecto se pondrá en contacto contigo. El proyecto Urantiapedia en Blue Fields se accede aquí: [Urantiapedia en Blue Fields](https://blue-fields.netlify.app/projects/292396532506821125). Sin embargo, esta web no está operativa al 100% por lo que se recomienda el contacto a través del correo electrónico.

## Acerca de GitHub

[GitHub](https://github.com/) es una plataforma para el control de versiones en proyectos colaborativos, especialmente en proyectos de código o de contenido web.

El proyecto *Urantiapedia* en GitHub (https://github.com/JanHerca/urantiapedia) es un proyecto que contiene todo el contenido del sitio web, además de una aplicación (*Urantiapedia Tools*) para ayudar a automatizar la creación de contenido. El proyecto *Urantiapedia-backup* (https://github.com/JanHerca/urantiapedia-backup) es el mecanismo usado para poder realizar subidas masivas de contenido.

## A quién va dirigido este manual

Este manual va dirigido a los usuarios *administradores*, o *admins*, es decir:
- usuarios registrados en [GitHub](https://github.com/).
- usuarios autorizados como *admins* por el equipo que dirige el proyecto Urantiapedia.
- usuarios registrados en Urantiapedia. Sólo otro usuario *admin* puede registrar a un usuario como *admin*.
- usuarios con conocimientos de manejo de Linux, [Docker](https://www.docker.com/), [Kubernetes](https://es.wikipedia.org/wiki/Kubernetes), [Git](https://git-scm.com/) y [GitHub](https://github.com/).
- usuarios con conocimientos de *El Libro de Urantia* al menos en un idioma en los que está publicado, y preferiblemente con un buen nivel de la versión en inglés.
- usuarios que desean colaborar de forma desinteresada en la incorporación de información relativa a *El Libro de Urantia* en la *Urantiapedia*.

Los administradores de la web son los únicos encargados de subir cambios masivos a la web *Urantiapedia* durante cada una de las fases del proyecto. Más acerca de las fases del proyecto en [Help start](/es/help/phases).

## Procedimiento de trabajo en GitHub

El proceso de trabajo en GitHub se detalla en el Manual de uso de los proyectos de Urantiapedia en GitHub. Se debería empezar echando un vistazo a los [Primeros pasos en GitHub](/es/help/github_fork.md) y luego continuar desde ahí con el resto de pasos a dar y las distintas opciones que hay para trabajar en GitHub.

Este es el índice completo del manual:
- [Primeros pasos en GitHub](/es/help/github_fork.md)
- Trabajo en GitHub:
  - [Trabajar directamente desde la web de GitHub](/es/help/github_edit_on_web)
  - Trabajar localmente en GitHub:
    - [Configurar el proyecto de GitHub](/es/help/github_setting)
    - [Trabajar localmente en el PC](/es/help/github_edit_local)
- [Contenido del proyecto de GitHub](/es/help/github_content)
- [Flujo de trabajo para crear el contenido inicial en un idioma](/es/help/github_initial_flow)

## Colaboración a través de esta web

Este tipo de colaboración, debido a los riesgos que entraña, está reservada para los usuarios *Administradores* y *Editores Jefe*. En el caso de los primeros pueden editar cualquier contenido; en el caso de los segundos sólo tendrán acceso de edición a ciertas secciones.

En este caso todas las tareas se realizan a través de esta web. Es necesario iniciar sesión con la cuenta de edición proporcionada, y seguir los manuales sobre cómo realizar ediciones:
- [Interfaz y uso básico de Urantiapedia](/es/help/web_basics)
- [Manejo de páginas](/es/help/web_pages)
- [Uso de editores](/es/help/web_editors)
  - [Uso del editor visual](/es/help/web_visual_editor)
  - [Uso del editor Markdown](/es/help/web_markdown_editor)
  - [Uso del editor HTML](/es/help/web_html_editor)

## Tareas

Sobre las fases del proyecto consulta [Fases de la Urantiapedia](/es/help/phases).

### Fase I: El Libro de Urantia, la Biblia y el Índice de Términos

Una vez tenemos el _input_ inicial en las carpetas correctas, siguiendo los pasos del manual indicado antes, para cada idioma, durante la fase I, los pasos a dar son:
1. Traducción del *Paramony* del inglés al idioma de destino. Consulta [Traducción del Paramony](/es/help/github_paramony).
2. Traducción y revisión del *Índice de términos* del inglés al idioma de destino. Consulta [Traducción y revisión del Índice de términos](/es/help/github_topicindex).
3. Obtención de una traducción de La Biblia en el idioma de destino. Consulta [Obtener la Biblia](/es/help/github_bible).
4. Conversión de *El Libro de Urantia* de HTML a JSON sin notas al pie. Consulta [Conversión a JSON](/es/help/github_book_json).
5. Adición de notas al pie a *El Libro de Urantia* en JSON. Consulta [Adición de notas al pie](/es/help/github_footnotes).
6. Conversión del *Índice de términos* de TXT a Wiki.js. Consulta [Conversión del Índice de Términos](/es/help/github_topicindex_to_wiki).
7. Conversión de *El Libro de Urantia* de JSON con notas al pie a Wiki.js incluyendo referencias a los términos. Consulta [Conversión de El Libro de Urantia](/es/help/github_book_to_wiki).
8. Conversión de *La Biblia* de LaTeX a Wiki.js con notas al pie. Consulta [Conversión de La Biblia](/es/help/github_bible_to_wiki).
9. Subir cambios a [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Consulta [Subir contenido de forma masiva a Urantiapedia](/es/help/github_upload).

Actualmente todas las tareas excepto la 2 han sido completadas para 25 idiomas.

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

![](/image/help/formats.png)

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
        <td><a href="/es/help/roles">Perfiles de colaboradores</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github">Manual para Editores Jefe</a></td>
      </tr>
    </tbody>
  </table>
</figure>




