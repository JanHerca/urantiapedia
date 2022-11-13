---
title: Contenido de la Urantiapedia
description: 
published: true
date: 2021-12-08T14:09:29.761Z
tags: help
editor: markdown
dateCreated: 2021-11-28T14:09:29.761Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/principles">Principios que rigen Urantiapedia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/phases">Fases de la Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Aquí se ofrece una explicación detallada de todos los tipos de contenido esperados en la *Urantiapedia*, cómo se acceden, cómo están organizados y quién puede modificarlos.

## Cómo se organiza el contenido

Como en toda Wiki en [Urantiapedia](https://urantiapedia.org) hay páginas, cada una con un título y una URL únicas. Por ejemplo:
* https://urantiapedia.org/en/The_Urantia_Book/156 es la URL de una página con el documento 156 de *El Libro de Urantia* en inglés.
* https://urantiapedia.org/es/article/How_big_is_Orvonton es la URL de una página con un artículo sobre Orvonton en español.
* https://urantiapedia.org/ko/topic/Andrew es la URL de una página acerca del apóstol Andrés en coreano.

Cada página puede ser un artículo, un capítulo de un libro, la página de índice de un libro, un índice agrupando enlaces a otras páginas, etc. Lo que cada página contenga es algo a libertad de los usuarios y puede ser modificado con el paso del tiempo según las necesidades cambien, aunque es muy recomendable que una vez creada una página esta permanezca siempre y se usen redireccionamientos si resulta necesario.


## Grupos de usuarios

La tabla resume los grupos de usuarios en la página web:

Grupo | Descripción de los usuarios del grupo
--- | ---
ADMIN | Usuario que puede hacerlo todo
EDITOR (1) | Usuario que tras una petición ha sido validado y autorizado por un usuario ADMIN para editar libros, artículos / ayudas de estudio, presentaciones, mapas, modelos 3D y recursos (imágenes, audio, vídeo).
AUTHOR (2) | Usuario dentro de un grupo con su nombre que actúa como EDITOR pero sólo para un número restringido de libros, artículos, etc. de los cuales es el autor.
REVIEWER | Usuario que sólo puede ver las páginas, el historial y hacer comentarios. Son usuarios que revisan el contenido y notifican fallos.
USER | Cualquier usuario no registado. Puede sólo ver las páginas.

(1) Algunos tipos de contenido en algunas fases iniciales del proyecto solo deben editarse usando las *Urantiapedia Tools* por usuarios llamados *Editores Jefe*, fuera de la web *Urantiapedia*. Una vez el contenido inicial se ha cargado en cada fase del proyecto, las *Urantiapedia Tools* ya no se usan más y los usuarios del grupo EDITOR pueden editar contenidos directamente desde esta web.

(2) AUTHOR significa que habrá varios grupos de tipo AUTHOR, cada uno con usuarios que son los autores (o autorizados por los autores) para determinadas páginas. Por ejemplo, si hay dos usuarios llamados Han Solo y Obi Wan que quieren ser autores, habrá un par de grupos llamados HANSOLO y OBIWAN, el primero con el usuario Han Solo, el segundo con el usuario Obi Wan. El primero será el único que podrá editar páginas en rutas como `/en/article/hansolo/` (y en cualquier otro idioma además del inglés), `/en/slides/hansolo`, y así sucesivamente. Por otro lado, el usuario Obi Wan podría editar páginas en rutas como `/en/article/obiwan/`, `/en/slides/obiwan/` y así sucesivamente. De esta forma, algunos usuarios serán los únicos editores de determinadas páginas.

Ten en cuenta que los únicos usuarios que pueden eliminar páginas son los usuarios ADMIN para asegurar que no se producen vínculos rotos. Sólo hay una excepción a esta regla. Así pues, el proceso con una página es:
1. Creación:
  - Un usuario EDITOR o AUTHOR crea una página directamente en este sitio web, o
  - Un usuario ADMIN crea un gran número de páginas al tiempo mediante un proceso en masa (los usuarios ADMIN pueden recibir la ayuda de usuarios EDITOR y AUTHOR en esta tarea mediante el uso de GitHub)
2. Edición:
  - Un usuario EDITOR o AUTHOR edita una página directamente en este sitio web, o
  - Un usuario ADMIN edita un gran número de páginas al tiempo mediante un proceso en masa (los usuarios ADMIN pueden recibir la ayuda de usuarios EDITOR y AUTHOR en esta tarea mediante el uso de GitHub)
3. Borrado o Movido (si es necesario):
  - Un usuario ADMIN elimina o mueve una página asegurándose de que los enlaces a esa página se actualizan.
  - Un usuario AUTHOR elimina o mueve una página siempre que esté contenida en las carpetas de las que sólo él es responsable.

## Tipos de páginas

La tabla resume los tipos de páginas. Muestra el usuario mínimo necesario para editar cada tipo de página. Los usuarios ADMIN pueden hacerlo todo por lo que si la tabla indica EDITOR o AUTHOR eso implica también ADMIN. Cuando la tabla dice usuario AUTHOR significa que hay varios usuarios de este tipo y cada uno controla las páginas dentro de la carpeta que se indica, siendo el único que tiene permisos para editarlas.

La tabla muestra la ruta a añadir al dominio de [https://urantiapedia.org](https://urantiapedia.org) para obtener la URL en inglés. Hay que reemplazar el código de idioma para obtener páginas en cada idioma. Por ejemplo, la URL para obtener el índice de *El Libro de Urantia* es:
- en inglés: https://urantiapedia.org/en/The_Urantia_Book/Index
- en español: https://urantiapedia.org/es/The_Urantia_Book/Index

Más sobre las URL en una sección posterior.

Tipo | Descripción | Creación | Modif. | Borrado | URL
--- | --- | --- | --- | --- | ---
WEPPAGE | Páginas de la propia Wiki como la página de inicio, páginas de ayuda, hoja de ruta | ADMIN |  ADMIN | ADMIN | /en/help/
BOOK_UB | El Libro de Urantia | ADMIN | ADMIN | ADMIN | /en/The_Urantia_Book/
BOOK_BIBLE | La Biblia | ADMIN | ADMIN | ADMIN | /en/Bible/
BOOK_AUTHORED | Libro de un usuario autor | AUTHOR | AUTHOR | AUTHOR | /en/book/user_name/book_title/
BOOK_PUBLIC | Libro que cualquier puede editar | EDITOR | EDITOR | ADMIN | /en/book/author/book_title/
TOPIC | Término, vocablo o concepto mencionado en *El Libro de Urantia* | ADMIN | EDITOR | ADMIN | /en/topic/topic_name
INDEX | Páginas con colecciones de enlaces | ADMIN | EDITOR | ADMIN | /en/index/index_name
ARTICLE_AUTHORED | Artículo de un usuario autor | AUTHOR | AUTHOR | AUTHOR | /en/article/user_name/article_title
ARTICLE_PUBLIC | Artículo que cualquiera puede editar | ADMIN | EDITOR | ADMIN | /en/article/author/article_title
SLIDES_AUTHORED | Presentación de un autor | AUTHOR | AUTHOR | AUTHOR | /en/slides/user_name/slides_title
SLIDES_PUBLIC | Presentación que cualquiera puede editar | EDITOR | EDITOR | ADMIN | /en/slides/slides_title
MAPS_AUTHORED | Mapa (1) de un autor | AUTHOR | AUTHOR | AUTHOR | /en/map/user_name/map_title
MAPS_PUBLIC | Mapa (1) editable por cualquiera | ADMIN | EDITOR | ADMIN | /en/map/map_title
3DMODEL_AUTHORED | Un modelo 3D de un autor | AUTHOR | AUTHOR | AUTHOR | /en/3dmodel/user_name/3dmodel_name
3DMODEL_PUBLIC | Un modelo 3D | ADMIN | EDITOR | ADMIN (2) | /en/3dmodel/3dmodel_name
IMAGE | Una imagen, bien un dibujo o esquema o ilustración | EDITOR | EDITOR | EDITOR (3) | /en/image/image_name

1. Los mapas pueden ser 2D o 3D y pueen contener:
   - Marcas puntuales con mensajes emergentes mostrando localizaciones. Los mensajes pueden tener enlaces a la Wiki o externos.
   - Itinerarios: varios puntos de paso con mensajes emergentes en cada uno mostrando el viaje de una persona o un pueblo. Estos itinerarios se pueden mostrar como animaciones.
   - Áreas: polígonos mostrando localizaciones de algo sin una localización específica como imperios o naciones.
2. Un modelo 3D solo se puede eliminar si no hay otra página que lo vincule. La página del modelo 3D, la página que permite actualizar el modelo 3D, debe permitir conocer la lista de páginas que utiliza el modelo 3D. Los modelos 3D solo se pueden cargar en cierto formato (preferiblemente glTF) y tamaños máximos.
3. Una imagen sólo puede ser eliminada is no hay otras páginas que enlacen con ella. La página de la imagen, la página que permite actualizar la imagen, debe mostrar la lista de páginas que usan esa imagen. Las imágenes sólo se pueden subir en ciertos formatos y tamaños máximos.


## Páginas de la web

Estas son páginas con contenido sobre la propia *Urantiapedia*, como manuales de usuario, recomendaciones, documentos de políticas, estado de progreso y similares. Estas páginas tienen este patrón de URL: `https://urantiapedia.org/[lan]/help/[title]`


## Libros

Aquí se incluye no sólo *El Libro de Urantia* en cualquiera de sus traducciones sino también la Biblia y cualquier libro de dominio público que se sospeche ser una fuente que los reveladores han usado o bien libros cuyo contenido pueda aclarar aspectos de *El Libro de Urantia*. También se podrían incluir libros que sean trabajos derivados de *El Libro de Urantia* y cuyos autores quieran ofrecerlo en modo de licencia libre. Todo esto constituiría una especie de *biblioteca urantiana*, algo similar a la Wikisource pero para temas relacionados con las revelaciones de Urantia.

### El Libro de Urantia

Respecto a *El Libro de Urantia* hay una página principal por cada traducción con el título, copyright, año, etc., una página con el índice de los documentos, una para la versión extendida del índice, y finalmente una página por cada documento. Para el inglés, estos son ejemplos de estas páginas:
- https://urantiapedia.org/en/The_Urantia_Book
- https://urantiapedia.org/en/The_Urantia_Book/Index
- https://urantiapedia.org/en/The_Urantia_Book/Index_Extended
- https://urantiapedia.org/en/The_Urantia_Book/147

Otro contenido con el *Mandato de publicación* también puede estar incluido bajo la misma ruta.

Cada página de cada documento tiene, aparte del contenido en secciones, algunas secciones extra:
- *Referencias* contiene enlaces para citas o supuestas citas. En *El Libro de Urantia* los propios autores indican que muchas veces hacen más de recopiladores que de reveladores, utilizando documentación humana ya existente. En ocasiones lo que es una cita textual queda implícito porque los reveladores usan comillas. En otras la cita es sólo sutil y de difícil detección. Muchos lectores han ido encontrando estas citas con el paso del tiempo. Las citas hacen referencia muchas veces a un pasaje de *La Biblia*, o a un libro de religión, filosofía o ciencia de la época en que se escribieron las revelaciones o anterior. En esta sección de *Referencias* es donde se colocarán enlaces al pasaje bíblico o al libro en que los reveladores se basan. *La Biblia* y otras fuentes estarán también dentro de la *Urantiapedia* siempre que sean de dominio público, de modo que se puedan consultar las posibles fuentes de los reveladores mientras se lee el libro.
- *Enlaces* son enlaces a cualquier artículo, término, índice o imagen que esté relacionado con el documento y sirva para ofrecer contenido de ayuda que aclare el documento.
- También podría existir una sección *Enlaces externos* con enlaces a otras webs que pudieran tener información útil relacionada con el documento.

Esta estructura con *Referencias*, *Enlaces* y *Enlaces externos* será un patrón común a muchas páginas e la *Urantiapedia*.

### La Biblia

Respecto a la Biblia, por ser un libro destacado que es masivamente citado por los autores de *El Libro de Urantia*, dispone de una ruta corta. Cada libro de la Biblia es una página, y caa capítulo una página. Por ejemplo, estos son los enlaces para los libros y capítulos del Génesis y el evangelio de Juan:
- https://urantiapedia.org/en/Bible/Genesis
- https://urantiapedia.org/en/Bible/Genesis/Index
- https://urantiapedia.org/en/Bible/Genesis/2
- https://urantiapedia.org/en/Bible/John
- https://urantiapedia.org/en/Bible/John/Index
- https://urantiapedia.org/en/Bible/John/2

Los nombres válidos de los libros para la URL:

 | | | | |
 --- | --- | --- | ---
Genesis | Exodus | Leviticus | Numbers 
Deuteronomy | Joshua | Judges | Ruth
1_Samuel | 2_Samuel | 1_Kings | 2_Kings
1_Chronicles | 2_Chronicles | Ezra | Nehemiah
Esther | 1_Maccabees | 2_Maccabees | Job
Psalms | Proverbs | Ecclesiastes | Song_of_Solomon
Sirach | Wisdom_of_Solomon | Isaiah | Jeremiah
Lamentations | Baruch | Ezekiel | Daniel
Hosea | Joel | Amos | Obadiah | Jonah
Micah | Nahum | Habakkuk | Zephaniah
Haggai | Zechariah | Malachi | Matthew
Mark | Luke | John | Acts
Romans | 1_Corinthians | 2_Corinthians | Galatians
Ephesians | Philippians | Colossians | 1_Thessalonians
2_Thessalonians | 1_Timothy | 2_Timothy | Titus
Philemon | Hebrews | James | 1_Peter
2_Peter | 1_John | 2_John | 3_John
Jude | Revelation | Bel_and_the_Dragon | Prayer_of_Manesseh
Tobit | Judith | Enoch | Assumption_of_Moses

Otros libros relacionados con la Biblia y que no son canónicos pueden colocarse en la misma ruta si están relacionados con *El Libro de Urantia* en cierto modo. Un buen ejemplo es el libro de Enoc, que es mencionado explícitamente.

### Otros libros que se suponen fuentes

Con respecto a cualquier otro libro, aparte de la Biblia, que sea una posible fuente de *El libro de Urantia*, se pueden agregar en la ruta `book`, con una página para el título del libro, autor, derechos de autor y fecha, una para el índice y una para cada capítulo. Es importante que si los libros son viejos y han sido escaneados, tanto las imágenes escaneadas como el texto estén disponibles. Las imágenes se pueden agregar como una colección de imágenes vinculadas en una sección *Original* en la parte inferior del texto de cada capítulo.

Por ejemplo, Matthew Block es un lector que ha hecho un gran trabajo encontrando material fuente de *El libro de Urantia*, como se explica en https://urantiabooksources.com/. Uno de los libros que ha identificado como una posible fuente de los reveladores es *The Universe Around Us*, de sir James Jeans, publicado en 1930. Como este libro ha pasado a ser de dominio público, se puede añadir a *Urantiapedia* y los enlaces a este libro pueden ser así:
- https://urantiapedia.org/en/book/The_Universe_Around_Us
- https://urantiapedia.org/en/book/The_Universe_Around_Us/Index
- https://urantiapedia.org/en/book/The_Universe_Around_Us/3

### Otros libros de lectores

Los lectores también pueden agregar a la *Urantipedia* sus propios libros escritos si desean compartirlos como una licencia pública. La forma de agregarlos es como con cualquier otro libro, en la ruta `book`, con una página para el título, autor, derechos de autor y fecha, una página para el índice y una página por capítulo. Los libros, por supuesto, deben tener una relación con *El libro de Urantia* y proporcionar algún tipo de ayuda en la comprensión del libro, no ser novelas o cualquier obra inspirada con pocas relaciones con el libro.

El patrón de URL de estos libros es así: `https://urantiapedia.org/en/book/[author]/[book_title]` para libros con autor conocido o `https://urantiapedia.org/en/book/[book_title]` para libros anónimos. Ten en cuenta que el título del libro en la URL se recomiena que esté en inglés incluso si si el idioma original en el que está escrito el libro no es inglés. Más acerca de esto en una sección posterior.


## Artículos, Ayudas de Estudio y Diagramas

Aquí se incluye todo artículo, material de ayuda y documento de opinión que pueda tener algún interés para el estudio y comprensión de *El Libro de Urantia*.

Cada uno será una página con secciones. Es muy recomendable que tenga al final las secciones habituales de *Referencias*, *Enlaces* y *Enlaces externos*. Las imágenes estarán añadidas de modo que sean enlazables como entidades por sí mismas, de modo que muchos artículos puedan compartir las mismas imágenes sin repetirse. Las *Referencias* son importantes. Muchos lectores han escrito artículos en los que no incluyen correctamente las referencias a una cita de *El Libro de Urantia* o a una publicación científica. Siempre que se pueda hay que enmendar estos artículos para añadir estas referencias faltantes. Sin la referencia, la información no es veraz.

El patrón de la URL de un artículo debe seguir esto: `https://urantiapedia.org/en/article/[author]/[article_title]` para artículos con autor conocido o `https://urantiapedia.org/en/article/[article_title]` para artículos anónimos. Ten en cuenta que aunque los artículos tienen un título en el idioma original en el que fueron escritos por su autor, es una buena práctica utilizar un nombre traducido en inglés. De esta forma, la URL puede tener un patrón coherente.

Pongamos un ejemplo. Imagina que un lector español ha creado un artículo titulado *Nazaret en tiempos de Jesús*, que podemos traducir al inglés como *Nazareth in Jesus times*. La mejor opción para URL sería

https://urantiapedia.org/es/article/Nazareth_in_Jesus_times

en lugar de

https://urantiapedia.org/es/article/Nazaret_en_tiempos_de_Jesús

Ten en cuenta que el propósito de la *Urantipedia* es permitir un contenido en varios idiomas para todos, y se espera que cualquier página cargada en ella se traduzca a todos los idiomas soportados en algún momento en el futuro. Los títulos en inglés proporcionan una forma común unificada de identificar la URL. Esto no afecta al título de la página que siempre es un valor diferente al de la URL. Más sobre esto en una sección posterior.

Este tipo de contenido incluye también esquemas o dibujos con esquemas. Hay una serie de tecnologías que permiten la creación sencilla de diagramas y gráficos que actualmente son compatibles con *Urantiapedia*: [Kroki](https://kroki.io/), [Mermaid](http://mermaid-js.github.io/mermaid/#/) y [PlantUML](https://plantuml.com/). Si los generadores de diagramas anteriores no son suficientes para los propósitos de *El libro de Urantia* (porque son principalmente para el desarrollo de software) es posible utilizar cualquier contenido en [formato SVG](https://developer.mozilla.org/es/docs/Web/SVG), que es el formato más recomendado para crear diagramas, esquemas o gráficos.

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/sample_page_article.png">
<figcaption><em> Ejemplo de visualización de un artículo.</em></figcaption>
</figure>

## Términos

Estos son un tipo especial de artículos relativos a un tema concreto relacionado con *El Libro de Urantia*. Por ejemplo, podrían ser conceptos como la [absonidad](/es/topic/absonity), o personas como [Grandfanda](/es/topic/Grandfanda), o tipos de seres como los [Ajustadores del Pensamiento](/es/topic/Thought_Adjusters), o lugares como [Nazaret](/es/topic/Nazareth) u [Orvonton](/es/topic/Orvonton_(superuniverse)), o eventos como la [llegada de Adán y Eva](/es/topic/Adam#llegada-de-ad%C3%A1n-y-eva), etc.

Cada término tendrá las secciones habituales de *Referencias* con enlaces a *El Libro de Urantia*, *Enlaces* con enlaces a otras páginas de la *Urantiapedia*. Por ejemplo, la página sobre *Nazaret* puede contener una explicación sucinta y básica sobre Nazaret (qué lugar es, porqué es importante, coordenadas geográficas con enlace a mapas), pero la sección de *Enlaces* puede tener un artículo en el que un lector profundiza sobre la ciudad de Jesús, cómo era en sus tiempos y qué hallazgos arqueológicos se han encontrado que parezcan corroborar o no las afirmaciones del libro.

El patrón de la URL para un términos es: `https://urantiapedia.org/en/topic/[topic_name]`. Los nombres de los términos son siempre en inglés aunque el título de la página estará en cada idioma dado.


## Índices

Aquí se incluyen diferentes índices. Si el número de elementos en el índice es muy alto puede haber una página con las divisiones principales y luego páginas secundarias. Siempre que sea posible es preferible que cada índice sea sólo una página, para que sea más fácil ubicar algo. 

Estos podrían ser algunos de los índices:

Index | Description | Sorted | Path
--- | --- | --- | ---
Lista de índices | Listado de todos los índices | Como esta tabla | /es/index/index
Índice de términos | Conocido como Glosario | Alfabéticamente | /en/index/topics
Índice de personas | subconjunto del Glosario para nombres propios de personas o personalidades | Alfabéticamente | /en/index/people
Índice de seres | Subconjunto del Glosario para tipos de seres en el universo (1) | Alfabéticamente | /en/index/beings
Índice de lugares | Subconjunto del Glosario para lugares, en el universo o en la Tierra. | Alfabéticamente | /en/index/places
Índice bíblico | Para cada libro de la Biblia, enlaces a *El Libro de Urantia* donde un versículo es de relevancia | Por orden bíblico (Genésis, Éxodo, etc.) | /en/index/biblical
Índice de referencias | Para cada documento de *El Libro de Urantia*, todas las referencias en otros libros, ya sea la Biblia u otros | Por documento | /en/index/references
Índice de citas | Listado de referencias del libro a frases emblemáticas | Por temáticas (Dios, el Universo, los Ángeles, Jesús, etc.) | /en/index/quotes
Cronología de la Tierra | Acontecimientos de la Tierra (2) | Cronológicamente | /en/index/earth_timeline
Cronología de la vida de Jesús | Descripción de eventos principales de la vida de Jesús y enlaces al libro | Por año, mes y día | /en/index/Jesus_timeline

(1) Si un tipo de ser recibe diferentes denominaciones (por ejemplo, *Tercera Fuente y Centro* = *Actor Conjunto*), cada entrada tendrá al lado el listado del resto de términos equivalentes.

(2) Las cronologías se pueden considerar un tipo de índice de eventos. En este caso sería una cronología, ordenada por fecha, de los sucesos del desarrollo evolutivo terrestre. Podría incluir los eventos históricos mencionados en el libro.


## Imágenes

Imágenes para todo el sitio web:

* Arte urantiano. Dibujos o fotografías que evoquen algún concepto del libro.
* Esquemas. Infografías o gráficos que expliquen y aclaren temas del libro.
* Fotos. Imágenes libres de derechos de autor usados en cualquier parte de la *Urantiapedia*.
* Animaciones. Imágenes animadas que aclaren conceptos que impliquen una visualización animada.
* Mapas. Mapas estáticos, aunque pueden contener enlaces si están en formato `svg` o si usan [mapas de imagen HTML](https://www.w3schools.com/html/html_images_imagemap.asp).

El patrón para la URL de las imágenes es: `https://urantiapedia.org/en/image/[image_name].jpg`. Los nombres de las imágenes deben ser siempre en inglés como ya se ha explicado anteriormente. Si las imágenes no se necesita localizarlas a cada idioma, se pueden dejar en la ruta en inglés por defecto, de modo que el patrón de la URL para ellas sería: `https://urantiapedia.org/image/[image_name].jpg`, que es más compacto.

Observa que en el patrón URL hemos puesto `jpg` como formato pero podría ser otro de los soportados: `jpg`, `jpeg`, `png`, `gif`, `webp`, `svg`.

Las imágenes carecen de una página web propia por defecto. Se accede a las imágenes con la URL como cualquier recurso público. Pero si resultara interesante se podrían crear páginas que ofrezcan información sobre una imagen en sí. Por ejemplo, en las URL siguientes la primera es la URL a la imagen de la portada oficial de *El Libro de Urantia* en inglés, y la segunda es la posible página con información sobre esta imagen:
- `https://urantiapedia.org/image/the_urantia_book.jpg`
- `https://urantiapedia.org/en/image/the_urantia_book`

## Mapas

Los mapas no serán simples imágenes estáticas. Este tipo de mapas se guardarán dentro de la sección de imágenes. Los mapas serán aplicaciones interactivas que permitirán:
- desplazarse por el mapa si es que se ha configurado con esta opción, siempre dentro de unos límites establecidos.
- centrar el mapa en el contenido
- hacer click en elementos dentro del mapa y obtener paneles de información en los que pueden aparecer vínculos que permitan saltar a otras páginas de *Urantiapedia* o a otras webs.
- pulsar en un botón de reproducción sobre un tour virtual que inicie una animación con explicaciones.

El patrón de la URL para mapas es: 
- para un mapa público, que cualquier editor puede modificar: `https://urantiapedia.org/en/map/[map_name]`
- para un mapa de autor, que sólo el autor o alguien autorizado puede modificar: `https://urantiapedia.org/en/map/[user_name]/[map_name]`

Los mapas permitirán enlace a una posición dentro del mapa mediante parámetros, bien por un nombre o bien por coordenadas. Por ejemplo, imaginemos una página con el mapa del viaje de huida de Jesús hacia el norte con sus apóstoles. Este mapa podría tener esta URL:

https://urantiapedia.org/en/map/Jesus_voyages_north_flight

Y dos formas de abrir este mapa centrado en Ramá sería:
- `https://urantiapedia.org/en/map/Jesus_voyages_north_flight?name=Ramah`
- `https://urantiapedia.org/en/map/Jesus_voyages_north_flight?lonlat=32.936424,35.367742`

Los nombres de los mapas ya se ha explicado que es necesario en la URL que estén en inglés.

<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/sample_page_map.jpg">
<figcaption><em> Ejemplo de visualización de un mapa interactivo.</em></figcaption>
</figure>

## Presentaciones

Las presentaciones son documentos de texto que en la página se muestran como presentaciones animadas. Es básicamente como un artículo sólo que se avanza por él pulsando en las teclas de avance y retroceso o bien desplazando el dedo en un dispositivo táctil, pasando de una diapositiva a otra.

El patrón de la URL para presentaciones es:
- para una presentación pública, que cualquier editor puede modificar: `https://urantiapedia.org/en/slides/[slides_name]`
- para una presentación de autor, que sólo el autor o alguien autorizado puede modificar: `https://urantiapedia.org/en/slides/[user_name]/[slides_name]`

Las URL dispondrán de un parámetro para abrise en una determinada diapositiva.

<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/sample_page_slides.png">
<figcaption><em> Ejemplo de visualización de una presentación.</em></figcaption>
</figure>


## Modelos 3D

Los modelos 3D son aplicaciones, como los mapas. Permitirán moverse libremente por el modelo dentro de ciertos límits, centrarse en el conjunto y mostar un panel de información sobre elementos en los que se pueda hacer click. También podría contener diferentes animaciones que serían ejecutables de forma independiente, para mostrar algo animado.

El patrón de la URL para modelos 3D es: 
- para un modelo 3D público, que cualquier editor puede modificar: `https://urantiapedia.org/en/3dmodel/[3dmodel_name]`
- para un modelo 3D de autor, que sólo el autor o alguien autorizado puede modificar: `https://urantiapedia.org/en/3dmodel/[user_name]/[3dmodel_name]`

Al igual que los mapas, los modelos 3D admitirán el centrado en un elemento usando un nombre, como: `https://urantiapedia.org/en/3dmodel/Jerusem?name=Mansonia_7`

<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/sample_page_3d.jpg">
<figcaption><em> Ejemplo de visualización de un modelo 3D.</em></figcaption>
</figure>

## URLs

Cada página de la *Urantiapedia* tiene un título y una URL. Los títulos se pueden repetir en todo el sitio web si es necesario, pero cada URL debe ser única. Para lograr esto, las URL deben seguir este patrón genérico:

`https://urantiapedia.org/[lan]/[path]/[user_name?]/[page name]`

- `[lan]` es el código de cualquier idioma soportado, que son los idiomas con una traducción de *El libro de Urantia*. Consulta [Idiomas soportados](/es/help/languages).
- `[path]` es la ruta según el tipo de página:
	- Página del sitio: `help`
	- *El libro de Urantia*: `The_Urantia_Book`
	- *La Biblia*: `Bible`
	- Otros libros: `book`
	- Término: `topic`
	- Índice: `index`
	- Article: `article`
	- Imagen: `image`
	- Presentación: `slides`
	- Mapa: `map`
	- Modelo 3D: `3dmodel`
- `[user_name]`, si existe, es el nombre del autor, bien el nombre del usuario que es el único que puede modificar las páginas, or el nombre de un autor público. Se recomienda no usar caracteres acentuados en el nombre para facilitar su escritura. 
- `[page name]` es el nombre que aparece en la URL, que debe tener guiones bajos en lugar de espacios en blanco. Para los libros, cada página es un capítulo, por lo que `[page name]` debe ser solo un número, el del capítulo. Si el libro contiene un prólogo, ese capítulo se numera con el cero.

`[book title]` y `[page name]` deben tener nombres cortos siempre que sea posible y preferiblemente en inglés. El inglés es el idioma predeterminado del sitio. La razón de esto es que *El libro de Urantia* fue escrito en inglés y hoy es un idioma universal que se usa en todas partes. Tener diferentes nombres de página para diferentes idiomas hace que sea más difícil cambiar entre idiomas y debería requerir un sistema para conectar páginas hermanas. Al usar un nombre de página único para todas las traducciones, es más fácil saber cómo llegar a cualquier página en cualquier idioma una vez que se conoce la página en inglés.

Ejemplos de URLs:
- https://urantiapedia.org/de/help/start
- https://urantiapedia.org/ja/The_Urantia_Book
- https://urantiapedia.org/hu/The_Urantia_Book/Index
- https://urantiapedia.org/it/The_Urantia_Book/Index_Extended
- https://urantiapedia.org/en/The_Urantia_Book/147
- https://urantiapedia.org/bg/Bible/Genesis
- https://urantiapedia.org/es/Bible/Genesis/Index
- https://urantiapedia.org/id/Bible/Genesis/2
- https://urantiapedia.org/lt/Bible/John
- https://urantiapedia.org/ro/Bible/John/Index
- https://urantiapedia.org/en/Bible/John/2
- https://urantiapedia.org/en/book/The_Universe_Around_Us
- https://urantiapedia.org/en/book/The_Universe_Around_Us/Index
- https://urantiapedia.org/en/book/The_Universe_Around_Us/3
- https://urantiapedia.org/ko/topic/Andrew
- https://urantiapedia.org/es/article/Nazareth_in_Jesus_times
- https://urantiapedia.org/en/article/How_big_is_Orvonton
- https://urantiapedia.org/en/index/topics
- https://urantiapedia.org/en/index/people
- https://urantiapedia.org/ru/image/Master_Universe
- https://urantiapedia.org/pt/slides/Part_II_Introduction
- https://urantiapedia.org/cs/map/Jesus_Second_Preaching_Tour
- https://urantiapedia.org/es/3dmodel/Isle_of_Paradise

Es una buena idea mantener estas convenciones de modo que las URL mantengan una consistencia en la forma de construirse y sea más fácil recordarlas.

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
        <td><a href="/es/help/principles">Principios que rigen Urantiapedia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/phases">Fases de la Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>