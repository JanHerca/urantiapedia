---
title: Fases de la Urantiapedia
description: 
published: true
date: 2021-12-08T13:55:38.362Z
tags: help
editor: markdown
dateCreated: 2021-11-28T13:55:38.362Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/content">Contenido de la Urantiapedia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/languages">Idiomas soportados</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Para cada idioma a incluir en la *Urantipedia* se ejecutará el trabajo en las siguientes fases. Para cada etapa se detalla las tareas a realizar, dónde se realizarán las ediciones y qué colaboradores realizarán cada tarea.

## Fase I - El Libro de Urantia y la Biblia

Esta fase incorpora el contenido que se considera mínimo para iniciar la *Urantiapedia* en un determinado idioma. Esto incluye *El Libro de Urantia* y la *Biblia*, ambos enlazados entre sí de modo que haya vínculos que vayan de *El Libro de Urantia* a la *Biblia* y viceversa.

Para crear los enlaces a la *Biblia* se está utilizando el *Paramony*, de Duane L. Faw, que es un fichero con las referencias cruzadas entre la *Biblia* y *El Libro de Urantia*.

https://urantia-book.org/urantiabook/paramony/


Tareas | Dónde | Quién
--- | --- | ---
Desarrollo de los conversores de archivos a Wiki.js | GitHub | Desarrolladores
Convertir cada documento de *El Libro de Urantia* en una página con enlaces a *La Biblia* | GitHub | Editores Jefe
Convertir cada capítulo de *La Biblia* en una página con enlaces a *El Libro de Urantia* | GitHub | Editores Jefe
Carga masiva de los archivos en formato Wiki.js | GitHub | Administradores

> Esta fase se encuentra completada para 28 idiomas.
{.is-success}

## Fase II - Hemeroteca, Biblioteca y Enciclopedia

Esta fase expande el contenido de la *Urantiapedia* con las siguientes áreas:
- **Hemeroteca**. Artículos y ayudas de estudio de *El Libro de Urantia*. Existen multitud de ellos en las webs de la [Fundación Urantia](https://www.urantia.org/), la [Fellowship](https://urantiabook.org/), las asociaciones Urantia y en webs de particulares. Ningún contenido se publicará sin permiso expreso de los autores siempre que sea posible localizarlos. El contenido podrá subirse en dos modos: edición pública (cualquier editor puede mejorarlo), y edición cerrada (sólo el autor o personas autorizadas por el autor pueden modificarlo). Los artículos podrán incluir también imágenes.
- **Biblioteca**. Libros religiosos de las grandes religiones del mundo, libros de lectores, y otros libros aparte de la *Biblia* que se sospeche que son libros usados por los reveladores en algunas partes de *El Libro de Urantia*. Por ejemplo, Matthew Block es un lector que ha hecho un gran trabajo encontrando este material. https://urantiabooksources.com/
- **Enciclopedia**. Para crearla se está utilizando como guía el índice creado por la *Urantia Fellowship* para su edición de *El Libro de Urantia* en inglés. Este índice, como contiene sólo anotaciones breves, se está expandiendo para convertirlo en un texto completo que sirva de versión inicial para cada página de cada término. https://urantia-book.org/urantiabook/topical_index/index.htm
- **Índices**, páginas con listas de enlaces que sirven de punto de entrada para los contenidos anteriores.


Tareas | Dónde | Quién
--- | --- | ---
Desarrollo para la conversión de libros y artículos a Wiki.js | GitHub | Desarrolladores
Desarrollo del *Topic Index Editor*, un asistente que permite acelerar el trabajo con la *Enciclopedia* | GitHub | Desarrolladores
Desarrolllo para la conversión de la *Enciclopedia* en páginas con enlaces a *El Libro de Urantia* | GitHub | Desarrolladores
Adición de artículos y estudios enlazados con el libro y con sus fuentes | GitHub | Editores Jefe
Adición de libros aparte de *La Biblia* | GitHub | Editores Jefe
Adición de contenido a la *Enciclopedia* | GitHub | Editores Jefe
Adición de índices de personas, seres, lugares, bíblicos, de referencias, de citas, cronologías, etc | GitHub | Editores Jefe
Carga masiva de los archivos en formato Wiki.js | GitHub | Administradores

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/help/sample_page_article.png">
<figcaption><em> Ejemplo de visualización de un artículo.</em></figcaption>
</figure>

> Esta fase se encuentra completada para 3 idiomas (inglés, español y francés).
{.is-success}

## Fase III - Traductor

Esta fase es únicamente de desarrollo. En ella se han incorporado los siguientes contenidos:
- **Una aplicación en _Urantiapedia Tools_ que automatiza la traducción** a múltiples idiomas de muchas páginas a la vez. Esta herramienta hace lo siguiente:
  - Permite conectar a servicios tipo Google Cloud Translator para realizar traducciones del texto.
  - Mantiene la integridad del estilo y formato de las páginas (Markdown y HTML).
  - Copia citas de *El Libro de Urantia* y la *Biblia* del original o la traducción existente y no las traduce, manteniendo la integridad de los textos y reduciendo el coste de traducción.
  - Permite conocer de antemano el coste que tendrá la ejecución de la traducción al invocar los servicios usados.
- **El Libro de Urantia en formato de múltiples traducciones**. Permite ver el original en inglés y las traducciones (una o varias) que estén disponibles.


Tareas | Dónde | Quién
--- | --- | ---
Desarrollo en _Urantiapedia Tools_ de un traductor masivo de páginas | GitHub | Desarrolladores
Desarrollo de un modo de visualización de *El Libro de Urantia* en varias traducciones | GitHub | Desarrolladores

<figure id="Sample_fig_2" class="image urantiapedia">
<img src="/image/help/sample_page_side_by_side.png">
<figcaption><em> Ejemplo de visualización lado a lado de El Libro de Urantia.</em></figcaption>
</figure>

> Esta fase se encuentra completada.
{.is-success}

## Fase IV - Ampliaciones, correcciones, Cartoteca y Mediateca

En esta nueva fase, en la que se encuentra actualmente el proyecto, se trabajará en estas áreas:
- **Ampliaciones** al contenido de las fases anteriores.
- **Correcciones**. Puesto que mucho del contenido se ha introducido de una forma rápida, usando automatizaciones cuando ha sido posible, existen muchos fallos y errores que se irán puliendo con el tiempo.
- **Cartoteca**. Una colección de mapas, tanto en formato interactivo como en formato imagen estática, que aclare la información geográfica que ofrece _El Libro de Urantia_.
- **Mediateca**: será un repositorio de diversos materiales audiovisuales, que incluirá cosas como las siguientes:
  * Imágenes, ya sean dibujos o fotografías de conceptos que ilustren *El libro de Urantia*.
  * Diagramas o esquemas, que se intentará hacerlos interactivos si son muy grandes, para poder visualizarlos en dispositivos pequeños.
  * Presentaciones de diapositivas.
  * Modelos 3D, cada uno en una página, que pueden ser estáticos o interactivos como en los mapas.
  * Versiones de audio de _El Libro de Urantia_.
  * Colecciones de vídeos incrustados en el sitio, o si no es posible enlaces a vídeos, con cursos o explicaciones sobre _El Libro de Urantia_.

La _Cartoteca_ va a necesitar el desarrollo de alguna solución para mostrar mapas interactivos. Tanto si los mapas se basan en imágenes estáticas como en un contenido interactivo, en ambos casos se buscará poder acercar y alejar el mapa para mostrar detalles u obtener una visión de conjunto. Existen soluciones comerciales como [Google Maps](https://www.google.com/maps) y [Google Earth](https://www.google.com/intl/es/earth/), que utilizan un formato propietario de Google ([KML](https://developers.google.com/kml/documentation)). Pero también hay otras alternativas opensource que serán estudiadas durante esta fase con el objetivo de no introducir dependencias tecnológicas si no resulta completamente necesario.

La funcionalidad a desarrollar en la _Cartoteca_ debería permitir lo siguiente:
- Zoom: acercar / alejar el mapa. Esta función debería estar disponible siempre, tanto si el mapa es una imagen estática como si es dinámico. Lo siguiente sólo estaría disponible para mapas dinámicos.
- Renderizado de una capa base, y mejor si es posible seleccionar entre varias (callejero moderno, satélite, mapa de relieve).
- Renderizado de elementos vectoriales (puntos, líneas, polígonos) con diferentes estilos visuales (iconos, grosores, colores).
- Anotaciones emergentes con texto que puedan contener vínculos a otras páginas de la *Urantiapedia* o externas.
- Visitas guiadas, es decir, colecciones de animaciones concatenadas donde la cámara se mueve de una posición a otra y se van mostrando y ocultando contenidos o anotaciones.
- Animaciones de la geometría, asociadas o no a las visitas guiadas, que permitan mostrar, por ejemplo, un itinerario o visualizar una migración de una raza.


<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/help/sample_page_map.jpg">
<figcaption><em> Ejemplo de visualización de un mapa interactivo.</em></figcaption>
</figure>

La _Mediateca_ también va a necesitar de un desarrollo que permita presentaciones interactivas en _Urantiapedia_. No queremos colocar simplemente enlaces a ficheros PPT o PDF para que los usuarios los descarguen y tengan que visualizarlos de una forma externa. Queremos contenido en todos los idiomas y conectado con el resto de _Urantiapedia_. Esto no es fácil usando formatos propietarios que además introducen dependencias tecnológicas. Por eso buscaremos alternativas que permitan una funcionalidad amplia a la vez que basada en formatos estándares.

Algunas alternativas podrían ser:
- [Google Docs](https://docs.google.com/).
- [Prezi](https://prezi.com/).
- [Impress.js](https://impress.js.org/) ([GitHub](https://github.com/impress/impress.js)) + [Hovercraft](https://regebro.github.io/hovercraft) ([GitHub](https://github.com/regebro/hovercraft))
- [Bespoke.js](https://markdalgleish.com/projects/bespoke.js/) ([GitHub](https://github.com/bespokejs/bespoke)).
- [Reveal.js](https://revealjs.com/) + [Hacker Slides](https://github.com/jacksingleton/hacker-slides).
- [Landslide](https://github.com/adamzap/landslide).


<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/help/sample_page_slides.png">
<figcaption><em> Ejemplo de visualización de una presentación.</em></figcaption>
</figure>

Como parte de la _Mediateca_ también se incluirán escenas en 3 dimensiones. Por suerte en el mundo de los modelos 3D existe un estándar abierto para la creación de estas escenas 3D: [glTF](https://www.khronos.org/api/index_2017/gltf) del grupo [Khronos](https://github.com/KhronosGroup/glTF), que es algo así al formato JPG pero del mundo 3D. Puede verse la potencia de este estándar en esta web de ejemplo: 

https://github.khronos.org/glTF-Sample-Viewer-Release/

El formato está ampliamente extendido y soportado en muchas aplicaciones, y ya existen editores y visores de glTF online:
- [Sketchfab](https://sketchfab.com/)
- [PlayCanvas](https://playcanvas.com/).
- [Babylon.js](https://www.babylonjs.com/).
- [Three.js](https://threejs.org/) + [editor](https://threejs.org/editor/)
- [WebGL Studio](https://webglstudio.org/) + [litescene.js](https://github.com/jagenjo/litescene.js).


<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/help/sample_page_3d.jpg">
<figcaption><em> Ejemplo de visualización de un modelo 3D.</em></figcaption>
</figure>

Tareas | Dónde | Quién
--- | --- | ---
Desarrollo de un sistema de visualización de mapas interactivos | GitHub | Desarrolladores
Desarrollo de un sistema de visualización de presentaciones | GitHub | Desarrolladores
Desarrollo de un sistema de visualización de modelos 3D interactivos | GitHub | developers
Adición de una colección de mapas interactivos de ejemplo sobre migraciones de razas, hechos históricos y viajes de Jesús de Nazaret | GitHub | Editores Jefe
Adición de una colección de presentaciones usando disponibles en algunos sitios web de asociaciones | GitHub | Editores Jefe
Adición de una colección de diagramas o esquemas interactivos | GitHub | Editores Jefe
Adición de una colección de modelos 3D, como la Isla del Paraíso, las esferas arquitectónicas, o el Jardín del Eden | GitHub | Editores Jefe
Creación de audio de _El Libro de Urantia_ | GitHub | Editores Jefe
Adición de una colección de vídeos incrustados o de enlaces a vídeos | GitHub | Editores Jefe

> Esta fase es la actualmente en progreso.
{.is-warning}

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
        <td><a href="/es/help/content">Contenido de la Urantiapedia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/languages">Idiomas soportados</a></td>
      </tr>
    </tbody>
  </table>
</figure>


