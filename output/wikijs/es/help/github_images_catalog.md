---
title: "Creación de un catálogo de imágenes"
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
        <td><a href="/es/help/github_diagrams_markdown">Obtener diagramas</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/markdown">Ayuda del formato Markdown</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Aquí se describe cómo crear el catálogo de imágenes del proyecto. Este catálogo es un archivo que es usado para automatizar la inclusión de ilustraciones en *El Libro de Urantia* y otras partes de *Urantiapedia*.

El aspecto visual de Urantiapedia es algo que vamos a cuidar. Todo el contenido se va a intentar que sea lo más visual posible, con ilustraciones de calidad. 

## Catálogos de imágenes de dominio público

Hay muchas fuentes de imágenes o ilustraciones de dominio público que pueden usarse para este fin. Algunos ejemplos son:

- Wikimedia Commons. Se trata del proyecto hermano de la Wikipedia para albergar ilustraciones de dominio público. Algunas colecciones de artistas clásicos y de temática bíblica se pueden encontrar aquí:
  - James Tissot:
    - https://commons.wikimedia.org/wiki/Gospel_harmony_(James_Tissot)
    - https://commons.wikimedia.org/wiki/Paintings_by_James_Tissot
    - https://www.wikidata.org/wiki/Wikidata:WikiProject_sum_of_all_paintings/Creator/James_Tissot
    - https://commons.wikimedia.org/wiki/Category:The_Life_of_Jesus_Christ_by_James_Tissot
  - William Hole:
    - https://commons.wikimedia.org/wiki/William_Hole%27s_Bible_Illustrations#
  - Gustave Doré:
    - https://commons.wikimedia.org/wiki/Dor%C3%A9%27s_Bible_Illustrations
  - Harold Copping:
    - https://commons.wikimedia.org/wiki/Copping%27s_Bible_Illustrations
- rawpixel. Un servicio online de adquisición de imágenes. Dispone de muchas de dominio público: 
  - https://www.rawpixel.com/category/53/public-domain
- Heritage Library. Una gran colección de ilustraciones antiguas.
  - https://www.heritagetype.com/pages/free-vintage-illustrations
- British Museum.
  - https://www.britishmuseum.org/collection
- British Library
  - https://www.flickr.com/photos/britishlibrary/albums
- europeana.
  - https://www.europeana.eu/en/collections
- Museo. Varias instituciones de arte unidas.
  - https://museo.app/
- V&A.
  - https://collections.vam.ac.uk/search/
- Rikjsmuseum.
  - https://www.rijksmuseum.nl/en/rijksstudio
- Smithsonian.
  - https://www.si.edu/openaccess
- Yale Peabody Museum of Natural History
  - https://collections.peabody.yale.edu/search/
- The Metropolitan
  - https://www.metmuseum.org/art/the-collection
- National Gallery of Art
  - https://www.nga.gov/open-access-images.html
- The Public Domain Review
  - https://publicdomainreview.org/
- David Rumsey Map Collection
  - https://www.davidrumsey.com/luna/servlet/view/all
- Artistas conceptuales. No son de dominio público pero se puede contactar con los artistas para solicitar permiso de uso.
  - Gary Tonge: https://visionafar.com

## Proceso

El catálogo de imágenes se encuentra únicamente en GitHub, en `input/markdown/en/image_catalog.md`. Cada idioma tiene el suyo, pero las tablas principales se encuentran únicamente en la carpeta `en` del idioma inglés. Para el resto de idiomas, sólo hay una tabla de traducciones de los títulos desde el inglés. Por ejemplo, en `/input/markdown/es/image_catalog.md` solamente están las traducciones de los títulos del inglés al español.

El catálogo es un fichero Markdown que tiene varias secciones, cada una marcada con la indicación `##`. Estas secciones representan bloques de ilustraciones o imágenes que tienen una misma o parecida procedencia, para poder trabajar en grupos de imágenes.

En cada sección hay una tabla en formato Markdown con este contenido:
- `ref`: indica el párrafo de _El Libro de Urantia_ debajo del cual, o junto al cual, deberá aparecer la imagen. Si aún no se conoce se ouede dejar en blanco.
- `float`: indica si la imagen debe flotar junto al texto. Puede tomar tres valores:
  - Vacío: la imagen es un bloque y el texto se sitúa arriba y abajo.
  - `R`: la imagen flota a la derecha y el texto continúa en paralelo a la izquierda. Si el dispositivo no tiene ancho sucifiente este comportamiento no se da.
  - `L`: la imagen flota a la izquierda y el texto continúa en paralelo a la derecha. Si el dispositivo no tiene ancho sucifiente este comportamiento no se da.
- `title`: Título de la imagen o ilustración. Siempre debe existir.
- `file`: nombre del fichero, incluida la extension. La ruta de la carpeta se indica en la sección. Siempre debe existir.
- `author`: autor. Si no se conoce se puede dejar en blanco.
- `year`: año o años de publicación. Si no se conoce se puede dejar en blanco.
- `url`: dirección web desde donde se ha obtenido la imagen. Siempre debe existir.

Por ejemplo, este podría ser un fragmento de una sección:

```
## /image/The_Urantia_Book/Jesus_life/paintings


| ref      | float | title                          | file                           | author       | year        | url                                                                                                                                             |
| -------- | ----- | ------------------------------ | -------------------------------| -------------| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------|
| 122:8.5  |       | The Adoration of the Magi      | Adoration_of_the_Magi.jpg      | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Magi_(L'adoration_des_mages)_-_James_Tissot_-_overall.jpg        |
|          |       | The Adoration of the Shepherds | Adoration_of_the_Shepherds.jpg | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Shepherds_(L'adoration_des_bergers)_-_James_Tissot_-_overall.jpg |
```

Para editar el catálogo de imágenes tienes que acudir al proyecto de GitHub y modificar este archivo en inglés: `input/markdown/en/image_catalog.md`. Luego por cada nueva imagen, debes modificar este otro archivo `input/markdown/es/image_catalog.md` y poner en él la traducción del título del inglés al español, aunque esta segunda modificación se puede pasar por alto porque al usar el catálogo de imágenes se comprueba si hay títulos no traducidos. Para modificar los archivos puedes descargar todo el proyecto de GitHub o solamente los archivos a modificar. Consulta el [Manual para Editores Asistentes](/es/help/github_assistant) para saber cómo descargar cosas de GitHub.

## Envío de ficheros

Para enviar los cambios ienes dos opciones: 1) si eres un «Editor Jefe» utiliza GitHub tal como se detalla en el [Manual para Editores Jefe](/es/help/github); si eres un «Editor Asistente», puedes simplemente enviar los archivos Markdown modificados al correo de cualquier Administrador o a urantiapedia@gmail.com.

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_diagrams_markdown">Obtener diagramas</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/markdown">Ayuda del formato Markdown</a></td>
      </tr>
    </tbody>
  </table>
</figure>
