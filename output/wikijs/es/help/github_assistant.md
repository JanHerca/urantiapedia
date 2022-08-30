---
title: "Urantiapedia — Manual para Editores Asistentes"
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github">Manual para Editores Jefe</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/devs">Manual para Desarrolladores</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Acerca de la Urantiapedia

[Urantiapedia](https://urantiapedia.org) es una web colaborativa basada en [Wiki.js](https://js.wiki/) con el propósito de servir de centro unificado de difusión de todo el conocimiento relativo a *El Libro de Urantia*.

## Acerca de Blue Fields

[Blue Fields](https://blue-fields.netlify.app/) es una web que ha sido creada para unir y organizar a lectores de *El Libro de Urantia* que desean participar en proyectos inteligentes, propositados y altruistas en todo el mundo. Es el sitio web que gestiona el registro y la colaboración entre los voluntarios de *Urantiapedia*.

## Acerca de GitHub

El proyecto *Urantiapedia* en GitHub (https://github.com/JanHerca/urantiapedia) es un proyecto creado para servir de procedimiento rápido de creación inicial de contenido de la *Urantiapedia*. Contiene unos archivos en ciertos formatos y un software que ayudan a automatizar la creación de un contenido inicial.

## A quién va dirigido este manual

Este manual va dirigido a los usuarios denominados «Editores Asistente», es decir, aquellos usuarios que cumplen los siguientes requisitos:
- registrados con una cuenta en [Blue Fields](https://blue-fields.netlify.app/) y en [Urantiapedia](https://urantiapedia.org).
- autorizados como colaboradores del proyecto por el equipo que dirige el proyecto en la plataforma [Blue Fields](https://blue-fields.netlify.app/).
- autorizados como «Editores Asistente» por un usuario «Administrador» de [Urantiapedia](https://urantiapedia.org).
- con buen conocimiento de *El Libro de Urantia* al menos en un idioma en los que está publicado, pero mejor si es inglés y en un segundo idioma en el que esté traducido el libro.
- desean colaborar de forma desinteresada en la incorporación de información relativa a *El Libro de Urantia* en la *Urantiapedia*.

## Descargar los ficheros desde GitHub

GitHub es una página web para crear proyectos colaborativos, normalmente sobre desarrollo de software. Los ficheros de proyecto para la *Urantiapedia* están aquí: [Urantiapedia](https://github.com/JanHerca/urantiapedia).

El proyecto es público. Cualquiera puede crear una copia del proyecto, añadir contribuciones a la copia, y enviar los cambios. Los administradores del proyecto pueden entonces aceptar o rechazar los cambios y añadirlos al contenido existente. GitHub tiene herramientas que hacen esto muy fácil y rápido.

Para descargar los ficheros tienes dos opciones:
- Descargar todo el proyecto. Es la mejor opción para colaboradores que van a trabajar en varias tareas de la *Urantiapedia*.
- Descargar sólo los ficheros necesarios. Esta opción es más sencilla para colaboradores que sólo van a ayudar en una única tarea.

### Descargar todo el proyecto

Para descargar todo el proyecto navega a la página del proyecto en GitHub y en el botón verde que dice *Code*, selecciona la opción *Download ZIP* (*Descargar ZIP*). El navegador empezará a descargar el fichero ZIP con el contenido más actualizado. Guárdalo en cualquier carpeta o comprueba tu carpeta de *Descargas* para localizar el fichero.

Ten en cuenta que puede ser una descarga larga porque el proyecto contiene un buen número de archivos. Deberías tener al menos 2-3 GB de espacio libre en el PC.

Una vez finalizada la descarga, tendrás un fichero llamado `urantiapedia-master.zip`. Este es un archivo comprimido, así que descomprímelo en cualquier carpeta. Si no sabes cómo descomprimir un archivo ZIP es muy fácil. En Windows, por ejemplo, haz clic con el botón derecho del ratón en el fichero y selecciona *Extraer todo* para abrir la herramienta de descompresión.

Una vez que los archivos estén descomprimidos, estás listo para ir al siguiente paso con el editor de texto.

### Descargar sólo los ficheros necesarios

En el caso de que no quieras descargar todo el proyecto, puedes hacer esto.

Navega a esta URL: https://github.com/JanHerca/urantiapedia/tree/master/input/

Esta es la página de GitHub con los archivos. Puedes moverte por las carpetas en la página de GitHub. Cuando necesites un archivo, haz clic derecho con el ratón sobre el nombre del mismo y selecciona *Save link as* (*Guardar enlace como*). Eso abrirá el cuadro de diálogo para guardar cada fichero.

De esta manera puedes elegir qué ficheros quieres descargar, lo cual es una mejor opción si no tienes mucho espacio libre en tu disco duro o no requieres el proyecto completo.

Ahora podemos editar los archivos en un editor de texto.

## Editar los ficheros en un editor de texto

Para editar los ficheros podemos usar cualquier herramienta que pueda editar archivos de tipo texto. Sin embargo, se recomienda encarecidamente utilizar un software que pueda mostrar caracteres ocultos y espacios en blanco. Es importante mostrarlos porque estos caracteres adicionales se utilizan para crear la estructura de los archivos y si los eliminamos podemos dañar los archivos.

El software más recomendado es *Visual Studio Code*, pero otros pueden hacer el trabajo:
* *Visual Studio Code*: https://code.visualstudio.com/
* *Notepad++*: https://notepad-plus-plus.org/
* *Atom*: https://atom.io/
* *Sublime*: https://www.sublimetext.com/

Todos ellos son de uso gratuito.

Si utilizas *Visual Studio Code* los pasos para configurarlo son estos:
1. Descarga *Visual Studio Code*. Navega al sitio web y haz clic en el botón *Download* (*Descargar*).
2. Instálalo. Durante la instalación, se recomienda marcar la opción *Add action 'Open with Code' to folder context menu* (*Agregar acción 'Abrir con Code' al menú contextual de la carpeta*) si eres usuario de Windows. Con esto, se agregará una opción al menú contextual de las carpetas de Windows para poder abrir fácilmente el contenido de cualquier carpeta en el editor.
3. Abre *VS Code*. La primera vez que se abre, puedes configurar algunos ajustes. Sáltalos todos.
4. Ve al menú *File* (*Archivo*) y selecciona *Open Folder* (*Abrir carpeta*). Luego selecciona la carpeta con el proyecto completo o con los archivos individuales que has descargado.
5. Abre cualquiera de los archivos.
6. Una extensión que puede hacerte la vida más fácil es *Sync Scroll*. Esta extensión permite desplazarse en varios archivos en paralelo, algo que ayuda mucho a la hora de editar en varios idiomas al mismo tiempo.
7. Para instalar la extensión, ve al panel *Extensions* (*Extensiones*). Escribe *Sync Scroll* en el cuadro de búsqueda. Haz clic en el botón *Install* (*Instalar*) en la extensión. Ahora tendrás un botón en la barra de estado para activar o desactivar *Sync Scroll*. Es necesario tener varios ficheros abiertos en paralelo para ver esta opción. Para ello haz clic con el botón derecho del ratón en un fichero abierto en la lista de ficheros y selecciona *Open to the side* (*Abrir en el lateral*).


## Contenido del proyecto Urantiapedia en GitHub

Para conocer el contenido del proyecto en GitHub y cómo está estructurado, consulta [Contenido del proyecto de GitHub](/es/help/github_content).

## Envío de cambios a los administradores

La colaboración a través de GitHub tiene la ventaja de que cualquier cosa se puede hacer fácilmente a través de la web de GitHub. Pero para hacer que los *Editores asistentes* funcionen de manera realmente simple, pueden enviar los archivos editados a través del correo electrónico a cualquiera de los administradores del proyecto o bien a urantiapedia@gmail.com.

Si has estado en contacto con alguno de los administradores del proyecto, puedes enviarles directamente tu trabajo. Posteriormente, resulta muy sencillo para los administradores actualizar el sitio web de *Urantiapedia* en GitHub con el nuevo contenido y, a través de él, actualizar la página *Urantiapedia*. Se te notificará cuándo están listos los cambios en la web, lo que no suele tardar más de una hora, para que puedas comprobar que tus cambios se han actualizado correctamente.

## Tareas

Sobre las fases del proyecto consulta [Fases de la Urantiapedia](/es/help/phases).

### Fase I: El Libro de Urantia, la Biblia y el Índice de Términos

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

### Fase II: Libros, artículos, ayudas de estudio, diagramas e índices

Las tareas a realizar en esta fase son:
1. Crear un catálogo de libros que se consideran fuentes de *El Libro de Urantia* o contienen paralelos interesantes. Consulta [Catálogo de libros «fuente»](/es/help/github_sourcebooks_catalog).
2. Obtener los libros anteriores en formato texto Markdown. Consulta [Obtener libros «fuente»](/es/help/github_sourcebooks_markdown).
3. Crear un catálogo de artículos escritos por lectores. Consulta [Catálogo de artículos](/es/help/github_articles_catalog).
4. Obtener los artículos anteriores en formato Markdown. Consulta [Obtener artículos](/es/help/github_articles_markdown).
5. Crear un catálogo de ayudas de estudio. Consulta [Catálogo de ayudas de estudio](/es/help/github_studyaids_catalog).
6. Obtener las ayudas de estudio anteriores en formato Markdown. Consulta [Obtener ayudas de estudio](/es/help/github_studyaids_markdown).
7. Crear un catálogo de diagramas. Consulta [Catálogo de diagramas](/es/help/github_diagrams_catalog).
8. Obtener los diagramas anteriores en formato mapa de imágenes HTML o preferiblemente SVG. Consulta [Obtener diagramas](/es/help/github_diagrams_markdown).
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
        <td><a href="/es/help/github">Manual para Editores Jefe</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/devs">Manual para Desarrolladores</a></td>
      </tr>
    </tbody>
  </table>
</figure>