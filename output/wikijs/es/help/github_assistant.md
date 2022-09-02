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

*Urantiapedia* tiene dos proyectos públicos en GitHub: [Urantiapedia](https://github.com/JanHerca/urantiapedia) y [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) creados para servir de procedimiento rápido de creación inicial de contenidos. Contiene unos archivos en ciertos formatos y un software que ayudan a automatizar la creación de un contenido inicial.

## A quién va dirigido este manual

Este manual va dirigido a los usuarios denominados «Editores Asistente», es decir, aquellos usuarios que cumplen los siguientes requisitos:
- Tienen un cuenta en esta web con permisos de edición. Es la única cuenta necesaria.
- Tienen un buen conocimiento de *El Libro de Urantia* al menos en un idioma en los que está publicado, pero mejor si es inglés y en un segundo idioma en el que esté traducido el libro.
- Desean colaborar de forma desinteresada en la incorporación de información relativa a *El Libro de Urantia* en la *Urantiapedia*.

## Dos maneras de colaborar

Los «Editores Asistente» pueden colaborar de dos maneras a su conveniencia.
1. Descargando los ficheros de GitHub, haciendo cambios y adiciones, y enviando su trabajo por email.
2. Usando esta web directamente.

Cualquiera de ambos métodos es igualmente aceptable. La diferencia que supone una u otra forma de colaboración se detalla en esta tabla:

Modo | Ventajas | Desventajas
--- | --- | ---
Por email | Se puede trabajar sin red <br> Se crean contenidos más rápido <br> Se pueden editar los archivos de apoyo (carpeta `/input`) | El editor no aparece como creador de los cambios en la web
En la web | El uso de los editores visuales facilita la edición <br> El editor aparece como creador de los cambios | Requiere acceso de red <br> El guardado es más lento y sólo se puede ir página a página <br> Sólo se pueden editar cosas que sean páginas de la web

A continuación detallamos cómo se realizarían las acciones necesarias en una y otra forma de colaboración.

## Colaboración por email
### Descargar los ficheros desde GitHub

GitHub es una página web para crear proyectos colaborativos, normalmente sobre desarrollo de software. Los ficheros de proyecto para la *Urantiapedia* están aquí: [Urantiapedia](https://github.com/JanHerca/urantiapedia).

El proyecto es público. Cualquiera puede descargar los ficheros. Tienes dos opciones:
- Descargar todo el proyecto. Es la mejor opción si vas a trabajr en muchas partes de *Urantiapedia*.
- Descargar sólo los ficheros necesarios. Esta opción es más sencilla si sólo vas a ayudar en una pequeña parte.

### Descargar todo el proyecto

Para descargar todo el proyecto navega a la página del [proyecto en GitHub](https://github.com/JanHerca/urantiapedia) y en el botón verde que dice *Code*, haz click y selecciona la opción *Download ZIP* (*Descargar ZIP*). El navegador empezará a descargar el fichero ZIP con el contenido más actualizado. Guárdalo en cualquier carpeta o comprueba tu carpeta de *Descargas* para localizar el fichero.

Ten en cuenta que puede ser una descarga larga porque el proyecto contiene un buen número de archivos. Deberías tener al menos 2-3 GB de espacio libre en el PC.

Una vez finalizada la descarga, tendrás un fichero llamado `urantiapedia-master.zip`. Este es un archivo comprimido, así que descomprímelo en cualquier carpeta. Si no sabes cómo descomprimir un archivo ZIP es muy fácil. En Windows, por ejemplo, haz clic con el botón derecho del ratón en el fichero y selecciona *Extraer todo* para abrir la herramienta de descompresión.

Una vez que los archivos estén descomprimidos, estás listo para ir al siguiente paso con el editor de texto.

### Descargar sólo los ficheros necesarios

En el caso de que no quieras descargar todo el proyecto, puedes hacer esto.

Navega a esta URL: https://github.com/JanHerca/urantiapedia/tree/master/

Esta es la página de GitHub con los archivos. Puedes moverte por las carpetas en la página de GitHub. Cuando necesites un archivo, haz clic derecho con el ratón sobre el nombre del mismo y selecciona *Save link as* (*Guardar enlace como*). Eso abrirá el cuadro de diálogo para guardar cada fichero.

De esta manera puedes elegir qué ficheros quieres descargar, lo cual es una mejor opción si no tienes mucho espacio libre en tu disco duro o no requieres el proyecto completo.

Ahora podemos editar los archivos en un editor de texto.

### Editar los ficheros en un editor de texto

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


### Contenido del proyecto Urantiapedia en GitHub

Para conocer el contenido del proyecto en GitHub y cómo está estructurado, consulta [Contenido del proyecto de GitHub](/es/help/github_content).

### Envío de cambios a los administradores

La colaboración a través de GitHub tiene la ventaja de que cualquier cosa se puede hacer fácilmente a través de la web de GitHub. Pero para hacer que los *Editores asistentes* funcionen de manera realmente simple, pueden enviar los archivos editados a través del correo electrónico a cualquiera de los administradores del proyecto o bien a urantiapedia@gmail.com.

Si has estado en contacto con alguno de los administradores del proyecto, puedes enviarles directamente tu trabajo. Posteriormente, resulta muy sencillo para los administradores actualizar el sitio web de *Urantiapedia* en GitHub con el nuevo contenido y, a través de él, actualizar la página *Urantiapedia*. Se te notificará cuándo están listos los cambios en la web, lo que no suele tardar más de una hora, para que puedas comprobar que tus cambios se han actualizado correctamente.

Recuerda que si haces envíos por correo en la web no quedará reflejado que los cambios subidos los realizaste tú, sino que aparecerán como cambios de los Administradores. Si quieres que constancia de que tú hiciste cambios deberás usar la funcionalidad de esta propia web.

## Colaboración a través de esta web

En este caso todas las tareas se realizan a través de esta web. Es necesario iniciar sesión con la cuenta de edición proporcionada, y seguir los manuales sobre cómo realizar ediciones:
- [Interfaz y uso básico de Urantiapedia](/es/help/web_basics)
- [Manejo de páginas](/es/help/web_pages)
- [Uso de editores](/es/help/web_editors)
  - [Uso del editor visual](/es/help/web_visual_editor)
  - [Uso del editor Markdown](/es/help/web_markdown_editor)
  - [Uso del editor HTML](/es/help/web_html_editor)


## Tareas

Sobre las fases del proyecto consulta [Fases de la Urantiapedia](/es/help/phases). Las tareas que pueden realizar los «Editores Asistente» son las que se indican aquí:

### Fase I: El Libro de Urantia, la Biblia y el Índice de Términos

1. Traducción del *Paramony* del inglés a otro idioma. Consulta [Traducción del Paramony](/es/help/github_paramony).
2. Revisión del *Índice de términos* en inglés y español. También la traducción del *Índice de términos* a otros idiomas. Consulta [Traducción y revisión del Índice de términos](/es/help/github_topicindex).
3. Obtención de una traducción de La Biblia en todos los idiomas. Consulta [Obtener la Biblia](/es/help/github_bible).

Actualmente las tareas 1 y 3 han sido completadas.

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

- [Urantiapedia - Proyecto principal en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - Proyecto para cargas masivas en GitHub](https://github.com/JanHerca/urantiapedia-backup)
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