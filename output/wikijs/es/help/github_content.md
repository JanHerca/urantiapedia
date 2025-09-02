---
title: Urantiapedia - Contenido del proyecto de GitHub
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
        <td><a href="/es/help/github_edit_local">Trabajar localmente en el PC</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_initial_flow">Flujo de trabajo para crear el contenido inicial en un idioma</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Organización del proyecto *Urantiapedia* en GitHub

Las carpetas que componen el proyecto de *Urantiapedia* en Github son éstas:
- **.vscode**: ficheros de configuración para Visual Studio Code, que es el IDE de desarrollo de las *Urantiapedia Tools*.
- **app**: ficheros código fuente en JavaScript con la aplicación *Urantiapedia Tools*.
- **css**: algunos ficheros CSS para mostrar mejor los ficheros Markdown.
- **docs**: algunos documentos sobre el proyecto, aunque la ayuda principal está en `output/wikijs/help`.
- **input**: carpeta principal que contiene los archivos de entrada (inputs) que sirven para generar muchas páginas de la *Urantiapedia*.
  - **html**: carpeta con archivos en formato HTML.
    - **book-xx**: *El Libro de Urantia* en sus diferentes traducciones en formato HTML original obtenido de la *Fundación Urantia* (`book-es`, `book-en`, etc.)
  - **json**: carpeta con archivos en formato JSON.
    - **book-xx**: *El Libro de Urantia* en sus diferentes traducciones en formato JSON, pero sin las notas al pie del *Paramony* (`book-es`, `book-en`, etc.)
    - **book-xx-footnotes**: *El Libro de Urantia* en sus diferentes traducciones en formato JSON, pero con las notas al pie del *Paramony* (`book-es-footnotes`, `book-en-footnotes`, etc.)
    - **footnotes-book-xx.json** `DEPRECATED`: antigua versión del *Paramony* en formato JSON.
  - **kml**: ficheros KML y CSV usados para generar los mapass, cada uno dentro de una carpeta para cada idioma (`en`, `es`, etc.).
  - **markdown** / **xx** (`en`, `es`, etc.): 
    - **paramony**: contiene la versión última del Paramony. Anteriormente se usaban fichero JSON pero ahora se usan ficheros Markdown. Los ficheros para el idioma inglés contiene las tablas principales; los ficheros de otros idiomas son sólo traducciones.
    - **otras carpetas**: ficheros Markdown temporales para artículos y libros tal como se obtienen de una conversión de los formatos PDF / DOCX o al escanear, cada uno dentro de una carpeta para cada idioma (`en`, `es`, etc.). El contenido de esta carpeta no se mantendrá en el tiempo según vaya siendo corregido y movido a la carpeta output.
    - **3dmodels_catalog\.md**: catálogo de modelos 3D. El fichero para el idioma inglés contiene las tablas principales; los ficheros de otros idiomas son sólo traducciones.
    - **image_catalog\.md**: catálogo de imágenes. El fichero para el idioma inglés contiene las tablas principales; los ficheros de otros idiomas son sólo traducciones.
    - **map_catalog\.md**: catálogo de mapas. El fichero para el idioma inglés contiene las tablas principales; los ficheros de otros idiomas son sólo traducciones.
    - **paralells\.md** : catálogo general de paralelos entre _El Libro de Urantia_ y el resto de contenidos (artículos, Biblia, otros libros, etc.).
  - **mediawiki** `DEPRECATED`: carpeta con contenido antiguo en formato Wikitext para MediaWiki. La primera versión de la *Urantiapedia* se ha hecho con MediaWiki pero la actual está creada con *Wiki.js*.
    - **articles-xx**: carpetas en desuso con ejemplos de artículos en formato Wikitext.
    - **main-pages-xx**: carpetas en desuso con contenido de ayuda en formato Wikitext.
    - **modules**: módulos escritos en Lua, el lenguaje de scripting para crear templates en MediaWiki.
    - **sample**: contenido de ejemplo antiguo en formato Wikitext.
    - **templates**: templates para la *Urantipedia*, que son fragmentos reusables en formato MediaWiki.
  - **svg**: algunos archivos SVG.
  - **tex**: carpeta con los archivos en formato LaTeX.
    - **bible-xx**: *La Biblia* en cada una de sus traducciones en formato LaTeX (`bible-es`, `bible-en`, etc.)
  - **txt**: carpeta con los archivos en formato TXT.
    - **articles-xx**: algunos artículos de ejemplo en formato TXT (`articles-es`,`articles-en`, etc.).
    - **bible-refs-xx** `DEPRECATED`: versión antigua del _Paramony_ (referencias cruzadas de la Biblia a _El Libro de Urantia_) en formato TXT (`bible-refs-es`,`bible-refs-en`, etc.).
    - **books-xx** : Catálogos de libros de la Biblioteca Urantiapedia.
    - **topic-index-xx**: *Índice de términos* traducido a cada idioma en formato TXT (`topic-index-es`, `topic-index-en`, etc.)
- **output**: carpeta con los ficheros de salida que serán subidos en masa a la web *Urantipedia*.
  - **wikijs**: carpeta con el contenido en los formatos soportados por *Wiki.js*.
    - **xx**: Contenido para cada idioma en su propia carpeta (`en`, `es`, etc.). La estructura para cada idioma es la misma, y es como sigue:
      - **3dmodel**: Mediateca (Modelos 3D).
      - **article**: Hemeroteca (artículos y ayudas de estudio), organizados en carpetas por autor. Normalmente en formato Markdown.
      - **Bible**: Contenido de la Biblia. :warning: IMPORTANTE: los ficheros en esta carpeta *no deben editarse*. En lugar de eso hay que editar los ficheros en la carpeta `input` y luego usar las *Urantiapedia Tools*.
      - **book**: Biblioteca (Libros), organizados en carpetas por autor. Normalmente en formato Markdown.
      - **help**: Páginas de ayuda de la Urantiapedia. En formato Markdown.
      - **index**: Índices. :warning: IMPORTANTE: algunos archivos de esta carpeta, aunque no todos, *no deben editarse*. En lugar de eso hay que utilizar *Urantiapedia Tools* para generarlos.
      - **map**: Cartoteca (Mapas). Por ahora están en formato Markdown con un *iframe* que apunta a Google Maps, pero en un futuro aquí sólo se guardarán ficheros KML.
      - **news**: Novedades mensuales del proyecto en formato Markdown.
      - **slides**: Mediateca (Presentaciones).
      - **tests**: Páginas donde poder hacer pruebas de contenidos futuros.
      - **The_Urantia_Book** y **The_Urantia_Book_Multiple**: Documentos de El Libro de Urantia. :warning: IMPORTANTE: los ficheros en esta carpeta *no deben editarse*. En lugar de eso hay que editar los ficheros en la carpeta `input` y luego usar las *Urantiapedia Tools*.
      - **topic**: Enciclopedia. :warning: IMPORTANTE: los ficheros en esta carpeta *no deben editarse*. En lugar de eso hay que editar los ficheros en la carpeta `input` y luego usar las *Urantiapedia Tools*.
    - **image**: Imágenes del sitio.
    - **tests**: Páginas donde poder hacer pruebas de contenidos futuros.

Las carpetas marcadas como *deprecated* pueden ser ignoradas por contener material que ya no se está usando en el proceso y será seguramente eliminado en un futuro.

Los códigos de idioma a usar en las carpetas deben seguir la norma ISO 639-1 con dos letras por cada idioma. https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes 

Cuando se está generando contenido para un nuevo idioma, las carpetas de las que preocuparse son las siguientes:
- `input/html`
- `input/json`
- `input/markdown`
- `input/tex`
- `input/txt`

Conviene tener presente que en el idioma español existen actualmente tres traducciones. Las tres traducciones van a estar disponibles en la *Urantiapedia*. Por esa razón habrá estas carpetas:
- `book-es`, con la traducción denominada Europea, hecha en 2009; 
- `book-es-1993`, con la primera traducción al español hecha en 1993; 
- `book-es-2021`, con la nueva traducción hecha en 2021.


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
        <td><a href="/es/help/github_edit_local">Trabajar localmente en el PC</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_initial_flow">Flujo de trabajo para crear el contenido inicial en un idioma</a></td>
      </tr>
    </tbody>
  </table>
</figure>