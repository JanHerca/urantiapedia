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

## Fase I - El Libro de Urantia, la Biblia y el Índice de Términos

Esta fase incorpora el contenido que se considera mínimo para iniciar la *Urantiapedia* en un determinado idioma. Esto incluye *El Libro de Urantia*, la *Biblia* y un *Índice de Términos*, todo enlazado entre sí de modo que haya vínculos que vayan de *El Libro de Urantia* a la *Biblia* y a las páginas de cada término, y viceversa. Del mismo modo la *Biblia* y el *Índice de Términos* también estarán enlazados entre sí de forma bidireccional.

Para crear los enlaces a la *Biblia* se está utilizando el *Paramony*, de Duane L. Faw, que es un fichero con las referencias cruzadas entre la *Biblia* y *El Libro de Urantia*.

https://urantia-book.org/urantiabook/paramony/

Para crear el *Índice de Términos* se está utilizando con guía el índice creado por la *Urantia Fellowship* para su edición de *El Libro de Urantia* en inglés. Este índice, como contiene sólo anotaciones breves se está expandiendo para convertirlo en un texto completo que sirva de versión inicial para cada página de cada término.

https://urantia-book.org/urantiabook/topical_index/index.htm

Esta fase se espera que termine en el Q2 2022.


Tareas | Dónde | Quién
--- | --- | ---
Desarrollo de los conversores de archivos a Wiki.js | GitHub | Desarrolladores
Convertir cada documento de *El Libro de Urantia* en una página con enlaces a *La Biblia* y a los *Términos* | GitHub | Editores Jefe
Convertir cada capítulo de *La Biblia* en una página con enlaces a *El Libro de Urantia* | GitHub | Editores Jefe
Desarrollo del *Topic Index Editor*, un asistente que permite acelerar el trabajo con el *Índice de Términos* | GitHub | Desarrolladores
Conversión del *Índice de Términos* en páginas con enlaces a *El Libro de Urantia* | GitHub | Editores Jefe
Carga masiva de los archivos en formato Wiki.js | GitHub | Administradores


## Fase II - Libros, artículos, ayudas de estudio, esquemas e índices

Esta fase expande el contenido de la *Urantiapedia* con tres grandes áreas:
- Otros libros aparte de la *Biblia* que se sospeche son libros usados por los reveladores en algunas partes de *El Libro de Urantia*. Por ejemplo, Matthew Block es un lector que ha hecho un gran trabajo encontrando este material. https://urantiabooksources.com/
- Artículos, ayudas de estudio y esquemas de *El Libro de Urantia*. Existen multitud de ellos en las webs de la [Fundación Urantia](https://www.urantia.org/), la [Fellowship](https://urantiabook.org/), las asociaciones Urantia y en webs de particulares. Ningún contenido se publicará sin permiso expreso de los autores siempre que sea posible localizarlos. El contenido podrá subirse en dos modos: edición pública (cualquier editor puede mejorarlo), y edición cerrada (sólo el autor o personas autorizadas por el autor pueden modificarlo). Los artículos podrán incluir también imágenes.
- Índices, que son o bien páginas con listas de enlaces, o bien páginas en sí mismas que resuman un tema.

Esta fase se espera que termine en el Q2 2023.


Tareas | Dónde | Quién
--- | --- | ---
Apertura del *Índice de Términos* para su edición manual por los editores | web | Editores Asistentes
Desarrollo para la conversión de libros y artículos a Wiki.js | GitHub | Desarrolladores
Adición de otros libros que se presuman fuentes de *El Libro de Urantia* aparte de *La Biblia* | GitHub | Editores Jefe
Adición de artículos y estudios enlazados con el libro y las fuentes, con las referencias usadas | GitHub | Editores Jefe
Adición de índices de personas, seres, lugares, bíblicos, de referencias, de citas, cronologías, etc | GitHub | Editores Jefe
Carga masiva de los archivos en formato Wiki.js | GitHub | Administradores

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/sample_page_article.png">
<figcaption><em> Ejemplo de visualización de un artículo.</em></figcaption>
</figure>

## Fase III - Traductor

Esta fase es únicamente de desarrollo. En ella se incorporarán dos herramientas en Wiki.js que resultarán de especial importancia en este proyecto, y que actualmente no se encuentran previstas en el plan de trabajo de Wiki.js (https://docs.requarks.io/releases/roadmap):
- Una aplicación en Urantiapedia Tools que automatice la traducción a múltiples idiomas de muchas páginas a la vez. Es importante que esta herramienta haga lo siguiente:
  - Permita conectar a uno o varios servicios tipo Google Cloud Translator para realizar traducciones del texto.
  - Mantenga la integridad del estilo y formato de las páginas (Markdown y HTML).
  - Copie citas de *El Libro de Urantia* y la *Biblia* del original o la traducción existente y no las traduzca.
  - Permita conocer de antemano el coste que tendrá la ejecución de la traducción al invocar los servicios usados.
- Un nuevo tipo de editor en las páginas de la web que permita mostrar dos idiomas al tiempo y realizar una traducción asistida, de modo que en un lado se muestre un contenido que sirva de guía, y en paralelo se pueda ir viendo sugerencias de traducción y la traducción definitiva guardada. Además dispondrá de funcionalidad que permita conocer el progreso que lleva realizado el usuario en su trabajo de traducción y coordinarse con otros usuarios que también estén traduciendo en un mismo idioma.
- Un nuevo tipo de visor de contenidos que permita ver un contenido a doble columna, mostrando dos idiomas de los disponibles al mismo tiempo. Una buena utilidad de esto es poder ver el original en inglés de *El Libro de Urantia* y otro idioma, pero esto serviría para cualquier página y cualquier par de idiomas.
- También se añadirá una opción para poder seleccionar la traducción deseada al español puesto que hay tres traducciones oficiales de *El Libro de Urantia* al español. Sólo una será la traducción por defecto con la que conectarán los vínculos de otras páginas, pero al mostrar las páginas del libro en español se añadirá una opción que permita pasar de la traducción por defecto a las otras.

Esta fase se espera que termine en Q1 2024.


Tareas | Dónde | Quién
--- | --- | ---
Apertura de los libros y artículos para su edición manual por los editores | web | Editores Asistentes
Desarrollo en Urantiapedia Tools de un traductor masivo de páginas | GitHub | Desarrolladores
Desarrollo en Wiki.js un nuevo editor que permita traducciones asistidas directamente en la web | GitHub | Desarrolladores
Desarrollo en Wiki.js de un modo de visualización de *El Libro de Urantia* y cualquier otro contenido en dos a cuatro idiomas | GitHub | Desarrolladores
Desarrollo en Wiki.js de un selector de preferencia en la traducción a usar de *El Libro de Urantia* (para idiomas como español con varias) | GitHub | Desarrolladores

<figure id="Sample_fig_2" class="image urantiapedia">
<img src="/image/sample_page_side_by_side.png">
<figcaption><em> Ejemplo de visualización lado a lado de El Libro de Urantia.</em></figcaption>
</figure>

## Fase IV - Mapas interactivos

Actualmente existen pocos estándares para guardar la definición de un mapa. El formato [KML](https://developers.google.com/kml/documentation) (propiedad de Google) es una buena opción que además permite extenderse porque está basado en XML. En esta fase se definirá un estándar basándose en lo mejor ya existente que permita guardar:
- La definición de capas base y de funcionalidad básica de un mapa en 2D o 3D.
- Puntos, líneas y polígonos sobre la superficie terrestre.
- Estilos personalizados para las geometrías anteriores.
- Anotaciones emergentes con texto que puedan contener vínculos a otras páginas de la *Urantiapedia* o externas.
- Visitas guiadas, es decir, colecciones de animaciones concatenadas donde la cámara se mueve de una posición a otra y se van mostrando y ocultando contenidos o anotaciones.
- Animaciones de la geometría, asociadas o no a las visitas guiadas, que permitan mostrar, por ejemplo, un itinerario o visualizar una migración de una raza.

Los desarrollos que se serán necesarios en *Wiki.js* son:
- Un editor de mapas en el lado del cliente que use APIs existentes de mapas 2D y 3D (como por ejemplo, [Google Maps](https://www.google.com/maps) y [Google Earth](https://www.google.com/intl/es/earth/)) y permita crear el mapa en el estándar.
- Un renderizador en el lado del servidor que convierta el estándar en un visor web que presente el mapa creado.
- El visor web que presenta el mapa creado en el lado del cliente, una versión simplificada (sin herramientas de edición) del editor de mapas.

Esta fase se espera que finalice en el Q2 2024.


Tareas | Dónde | Quién
--- | --- | ---
Desarrollo en *Wiki.js* un editor de mapas interactivos, su formato y su renderizador | GitHub | Desarrolladores
Adición de una colección de mapas interactivos de ejemplo sobre migraciones de razas, hechos históricos y viajes de Jesús de Nazaret | GitHub | Editores Jefe

<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/sample_page_map.jpg">
<figcaption><em> Ejemplo de visualización de un mapa interactivo.</em></figcaption>
</figure>

## Fase V - Presentaciones

Como ocurre con los mapas no existen formatos estándar para guardar presentaciones. El formato más universal es PPTX de PowerPoint (propiedad de Microsoft) pero no es un formato de tipo texto. En esta fase se definirá un estándar de guardado para presentaciones. Como alternativas open source muy interesantes que integran presentaciones en la web sin que estén atadas a un formato tenemos:
- [Impress.js](https://github.com/impress/impress.js) con [Hovercraft](https://github.com/regebro/hovercraft) es una librería de creación de presentaciones. Formato [ReST](https://docutils.sourceforge.io/rst.html).
- [Bespoke.js](https://github.com/bespokejs/bespoke) es una micro-librería de creación de presentaciones. Formato XML y otros.
- [Strut](https://github.com/tantaman/Strut) es un editor para Impress.js y Bespoke.js. Formato Markdown.
- [Reveal.js](https://revealjs.com/) es una librería de creación de presentaciones. Formato HTML o Markdown. [Hacker Slides](https://github.com/jacksingleton/hacker-slides) es un editor de Reveal.js que usa Markdown.
- [Landslide](https://github.com/adamzap/landslide) es una librería de creación de presentaciones. Formato Markdown, ReST o Textile. 

Los desarrollos que serán necesarios en *Wiki.js* son:
- Un editor de presentaciones en el lado del cliente que use APIs existentes y permita crear la presentación en un formato estándar como Markdown.
- Un renderizador en el lado del servidor que convierta el estándar en un visor web que muestre la presentación creada.
- El visor web que muestra la presentación en el lado del cliente, una versión simplificada (sin herramientas de edición) del editor de presentaciones.

Esta fase está prevista que finalice en Q2 2025.


Tareas | Dónde | Quién
--- | --- | ---
Apertura de los mapas para su edición y adición manual por los editores | web | editores
Desarrollo en *Wiki.js* de un editor de presentaciones, su formato y su renderizador | GitHub | Desarrolladores
Adición de una colección de presentaciones usando disponibles en algunos sitios web de asociaciones | GitHub | Editores Jefe

<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/sample_page_slides.png">
<figcaption><em> Ejemplo de visualización de una presentación.</em></figcaption>
</figure>

## Fase VI - Modelos 3D interactivos

Afortunadamente en el mundo 3D existe un estándar abierto para la creación de escenas 3D, [glTF](https://www.khronos.org/api/index_2017/gltf) del grupo [Khronos](https://github.com/KhronosGroup/glTF), que es como el JPG del 3D. Puede verse la potencia de este estándar en esta web de ejemplo: 

https://github.khronos.org/glTF-Sample-Viewer-Release/

El formato está ampliamente extendido y soportado en muchas aplicaciones, y ya existen editores y visores de glTF online:
- [PlayCanvas](https://playcanvas.com/). El engine es open source y dispone de un editor online de pago que permite crear escenas de forma colaborativa.
- [Babylon.js](https://www.babylonjs.com/). Un engine y un editor completamente open source.
- [Three.js](https://threejs.org/). Un engine y un [editor](https://threejs.org/editor/) completamente open source.
- [WebGL Studio](https://webglstudio.org/). Un engine, [litescene.js](https://github.com/jagenjo/litescene.js), y un editor completamente open source.

Los desarrollos que se serán necesarios en *Wiki.js* son:
- Integrar en *Wiki.js* un editor de escenas glTF (usando alguno de los anteriores) en el lado del cliente. glTF utiliza JSON como formato.
- Un renderizador en el lado del servidor que convierta el glTF JSON en un visor web que muestre la escena 3D creada. El visor usado será el correspondiente al editor seleccionado.

Esta fase está prevista que finalice en el Q2 2026.


Tareas | Dónde | Quién
--- | --- | ---
Apertura de las presentaciones para su edición y adición por los editores | web | editores
Desarrollo en *Wiki.js* un editor de modelos 3D interactivos, su formato y su renderizador | GitHub | developers
Adición de una colección de modelos 3D, como la Isla del Paraíso, las esferas arquitectónicas, o el Jardín del Eden | GitHub | Editores Jefe

<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/sample_page_3d.jpg">
<figcaption><em> Ejemplo de visualización de un modelo 3D.</em></figcaption>
</figure>

## Futuro

A partir de aquí se podrán evaluar otras posibles adiciones futuras al proyecto. Algunas ideas de cara al futuro que podrían albergarse en la *Urantiapedia*:
* Servir de lugar centralizador para los esfuerzos de traducción del libro a otros idiomas.
* Servir de portal donde ofrecer cursos de formación online sobre diferentes temáticas relacionadas con *El Libro de Urantia*.

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


