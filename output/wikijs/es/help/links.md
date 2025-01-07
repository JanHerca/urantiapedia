---
title: Urantiapedia - Enlaces
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
        <td><a href="/es/help/websites">Sitios web de referencia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/projects">Urantiapedia — Contexto del proyecto en un ámbito mayor</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Resumen

Este documento describe la forma en que se definen y crean los enlaces entre elementos en Urantiapedia. También analiza las mejoras que podrían realizarse en el futuro en el sistema de enlaces.

## ¿Qué es un enlace en Urantiapedia?

Los enlaces en Urantiapedia son siempre, al final, un enlace HTML entre dos páginas o entre dos anclas dentro de dos páginas. Si hay varios enlaces en la misma posición, se crearán varios enlaces HTML.

Dado que Urantiapedia es compatible con archivos HTML5 y Markdown, los enlaces pueden adoptar la sintaxis HTML5 o Markdown. Ambos son válidos.

Por ejemplo, _El Libro de Urantia_ está en HTML5, y el párrafo 0:2.10 tiene dos enlaces a dos temas (Dios y Deidad) del Índice de temas:

```html
<p id="p2_10"><sup><small>0:2.10</small></sup> El término <a href="/topic/God">Dios</a> siempre denota <i>personalidad. </i> <a href="/topic/Deity">Deity</a> puede, o no, referirse a personalidades de divinidad.</p>
```

Este ejemplo conecta páginas: el prólogo de _El Libro de Urantia_, con las páginas de los temas «Dios» y «Deidad».

O, por ejemplo, las ayudas de estudio y los artículos están en Markdown. Este es un extracto del primer capítulo del Cuaderno I de William Sadler:

```markdown
**REFERENCIA**: [UB 1:0.1](/es/The_Urantia_Book/1#p0_1) — “El Padre Universal es...”
```

Este ejemplo conecta una página (un capítulo de un libro) con un párrafo (ancla) en _El Libro de Urantia_. Usamos para eso la forma estándar para un ancla con un carácter `#`, y el uso de un identificador único (en este caso `p0_1`). Cada párrafo o encabezado de un documento de _El Libro de Urantia_ tiene un identificador único y un ancla que sigue este patrón: `p<índice_sección>_<índice_párrafo>`, que sigue la convención habitual `<documento>:<sección>.<párrafo> ` para nombrar párrafos en el Libro.

## Lo que se va a enlazar en Urantiapedia

Las siguientes tablas resumen los enlaces que queremos crear en este momento en Urantiapedia. Hay muchos tipos de enlaces que podríamos considerar agregar en el futuro.

### El Libro de Urantia :blue_book:

Código | Tipo de origen | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
UB_B | Nota al pie en el párrafo | La Biblia | Verso en un capítulo de un libro | :+1: |
UB_A | Nota al pie en el párrafo | Artículos | Página del artículo | :+1: |
UB_S | Nota al pie en el párrafo | Ayuda al estudio | Capítulo página o encabezamiento | :+1: |
UB_O | Nota al pie en el párrafo | Otros libros | Ancla en una página de un libro | :+1: |
UB_TI | Enlaces en palabras de párrafos | Índice de temas | Página del tema | :+1: [1] |
UB_D | Nota a pie de página en el párrafo [2] | Diagramas | Página de diagrama o ancla | |
UB_I | Inserción de imágenes [3] | Ilustraciones | - | :+1: [4] |
UB_P | Nota al pie en el párrafo | Presentaciones | Página de presentación o diapositiva | |
UB_M | Nota a pie de página en el párrafo [5] | Mapas | Página del mapa o coordenada/ID | |
UB_3D | Nota a pie de página en el párrafo [6] | Modelos 3D | Página de modelo 3D o ID | |
UB_V | Nota al pie en el párrafo | Vídeos de youtube | Enlace externo | |
UB_C | Nota al pie en el párrafo | Podcasts | Enlace externo | |
UB_F | Nota al pie en el párrafo | Hilos de discusión de foros | Enlace externo | |

[1] El algoritmo que crea enlaces está en progreso para ajustar la cantidad de enlaces a crear.
[2] Se pueden agregar pequeños diagramas como ilustraciones en el libro, en una sección plegable debajo de algunos párrafos. La idea es que cada diagrama, pequeño o grande, tenga su propia página, y todos estarán indexados. Pero los pequeños, en lugar de ser solo una página, se pueden incrustar dentro de _El Libro de Urantia_ como secciones plegables.
[3] Las imágenes no son enlaces adecuados, pero se insertan bajo un párrafo determinado, por lo que necesitamos una forma de definir estas inserciones. Por lo que se consideran aquí como enlaces de alguna manera.
[4] Este trabajo está en progreso. Por ahora hay algunas imágenes añadidas.
[5] Algunos mapas que se adaptan bien a un párrafo determinado se pueden resaltar debajo del párrafo en un panel con un botón que vincula al mapa.
[6] Aquí se puede aplicar lo mismo que antes para los mapas.

Ejemplos:
- UB_B: https://urantiapedia.org/en/The_Urantia_Book/1#the-bible
- UB_A: https://urantiapedia.org/en/The_Urantia_Book/1#articles
- UB_S: https://urantiapedia.org/en/The_Urantia_Book/1#study-aids
- UB_O: https://urantiapedia.org/en/The_Urantia_Book/0#other-books
- UB_M: https://urantiapedia.org/en/The_Urantia_Book/149#p0_1
- UB_I: https://urantiapedia.org/en/The_Urantia_Book/0#p0_1

<br>

### La Biblia :closed_book:

Código | Tipo de origen | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
B_UB | Nota al pie en verso | El Libro de Urantia | Párrafo | :+1: |
B_A | Nota al pie en verso | Artículos | Página del artículo | |
B_S | Nota al pie en verso | Ayuda al estudio | Capítulo página o encabezamiento | |
B_O | Nota al pie en verso | Otros libros | Ancla en una página de un libro | |
B_TI | Enlaces en palabras de versos | Índice de temas | Página del tema | |
B_I | Inserción de imágenes [1] | Ilustraciones | - | |
B_M | Versículo de nota al pie [2] | Mapas | Página del mapa o coordenada/ID | |

[1] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.
[2] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.

Ejemplos:
- B_UB: https://urantiapedia.org/en/Bible/Génesis/1#referencias

<br>

### Artículos :page_with_curl:

Código | Tipo de origen | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
A_UB | Enlace en citas o párrafos | El Libro de Urantia | Párrafo | :+1: |
A_B | Enlace en citas o párrafos | La Biblia | Verso en un capítulo de un libro | :+1: |
A_A | Nota al pie en el párrafo | Artículos | Página del artículo | :+1: |
A_S | Nota al pie en el párrafo | Ayudas de estudio | Capítulo página o encabezamiento | |
A_O | Nota al pie en el párrafo | Otros libros | Ancla en una página de un libro | |
A_I | Inserción de imágenes [1] | Ilustraciones | - | |
A_M | Nota a pie de página en el párrafo [2] | Mapas | Página del mapa o coordenada/ID | |
A_3D | Nota a pie de página en el párrafo [3] | Modelos 3D | Página de modelo 3D o ID | |
A_V | Nota al pie en el párrafo | Vídeos de youtube | Enlace externo | |
A_C | Nota al pie en el párrafo | Podcasts | Enlace externo | |
A_F | Nota al pie en el párrafo | Hilos de discusión de foros | Enlace externo | |

[1] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.
[2] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.
[3] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.

Ejemplos:
- A_UB: https://urantiapedia.org/en/article/A_Letter_to_Astronomers_and_Astrophysicists (cualquiera de las citas)
- A_B: https://urantiapedia.org/en/article/Sheila_Keene_Lund/Understanding_the_Relation_of_Love_to_the_Mind#love-defined

<br>

### Ayudas para el estudio :notebook:

Código | Tipo de origen | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
S_UB | Enlace en citas o párrafos | El Libro de Urantia | Párrafo | :+1: |
S_B | Enlace en citas o párrafos | La Biblia | Verso en un capítulo de un libro | :+1: |
S_A | Nota al pie en el párrafo | Artículos | Página del artículo | :+1: |
S_S | Nota al pie en el párrafo | Ayudas de estudio | Capítulo página o encabezamiento | |
S_O | Nota al pie en el párrafo | Otros libros | Ancla en una página de un libro | |
S_I | Inserción de imágenes [1] | Ilustraciones | - | |
S_M | Nota a pie de página en el párrafo [2] | Mapas | Página del mapa o coordenada/ID | |
S_3D | Nota a pie de página en el párrafo [3] | Modelos 3D | Página de modelo 3D o ID | |
S_V | Nota al pie en el párrafo | Vídeos de youtube | Enlace externo | |
S_C | Nota al pie en el párrafo | Podcasts | Enlace externo | |
S_F | Nota al pie en el párrafo | Hilos de discusión de foros | Enlace externo | |

[1] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.
[2] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.
[3] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.

Ejemplos:
- S_UB: https://urantiapedia.org/en/article/William_S_Sadler/Workbook_1_Foreword_and_Part_I/1#i-ub-101-el-padre-universal-es
- S_B: https://urantiapedia.org/en/article/William_S_Sadler/Consideration_some_criticisms_Urantia_Book

<br>

### Otros libros :books:

Código | Tipo de origen | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
O_UB | Nota al pie en el párrafo | El Libro de Urantia | Párrafo | |
O_B | Enlace o nota al pie en el párrafo | La Biblia | Verso en un capítulo de un libro | |
O_A | Nota al pie en el párrafo | Artículos | Página del artículo | |
SO_S | Nota al pie en el párrafo | Ayudas de estudio | Capítulo página o encabezamiento | |

<br>

### Índice de temas :card_index:

Código | Tipo de origen | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
TI_UB | Nota al pie en el párrafo o «Ver también» | El Libro de Urantia | Párrafo | :+1: |
TI_B | Nota al pie en el párrafo | La Biblia | Verso en un capítulo de un libro | |
TI_A | Nota al pie en el párrafo | Artículos | Página del artículo | |
TI_S | Nota al pie en el párrafo | Ayudas de estudio | Capítulo página o encabezamiento | |
TI_TI | Sección «Ver también» | Índice de temas | Capítulo página o encabezamiento | :+1: |
TI_I | Inserción de imágenes [1] | Ilustraciones | - | |
TI_M | Nota a pie de página en el párrafo [2] | Mapas | Página del mapa o coordenada/ID | |
TI_3D | Nota a pie de página en el párrafo [3] | Modelos 3D | Página de modelo 3D o ID | |
TI_V | Nota al pie en el párrafo | Vídeos de youtube | Enlace externo | |
TI_C | Nota al pie en el párrafo | Podcasts | Enlace externo | |
TI_F | Nota al pie en el párrafo | Hilos de discusión de foros | Enlace externo | |

[1] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.
[2] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.
[3] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.

Ejemplos:
- TI_UB: https://urantiapedia.org/en/topic/Abraham_(Antiguo_Testamento)#referencias

<br>

### Diagramas :memo:

Código | Tipo de origen | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
D_UB | Enlace en objeto de diagrama | El Libro de Urantia | Párrafo | |
D_B | Enlace en objeto de diagrama | La Biblia | Verso en un capítulo de un libro | |

Ejemplos:
- D_UB: https://urantiapedia.org/en/article/The_Kingdom_of_Heaven_Revelation_Nebadon_Chart (cualquiera de los recuadros del diagrama)

<br>

### Ilustraciones :sunrise_over_mountains:

No se espera que las ilustraciones tengan una página por cada una, por lo que no son objetos enlazables. Simplemente se insertan en otros elementos, como los documentos de _El Libro de Urantia_, los capítulos de la Biblia, los artículos, las ayudas para el estudio o las entradas del Índice de temas.

<br>

### Presentaciones :bar_chart:

Código | Tipo de origen | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
P_UB | Enlace en diapositiva | El Libro de Urantia | Párrafo | |
P_B | Enlace en diapositiva | La Biblia | Verso en un capítulo de un libro | |

<br>

### Mapas :earth_americas:

Código | Tipo de origen | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
M_UB | Enlace en panel lateral | El Libro de Urantia | Párrafo | |
M_B | Enlace en panel lateral | La Biblia | Verso en un capítulo de un libro | |
M_TI | Enlace en panel lateral | Índice de temas | Página del tema | |

Ejemplos:
- M_TI: https://urantiapedia.org/en/map/The_Preaching_of_Jesus_Second_Galilee_Tour (haga clic en un icono para abrir el panel con enlaces)

<br>

### Modelos 3D :milky_way:

Código | Tipo de origen | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
3D_UB | Enlace en elemento 3D | El Libro de Urantia | Párrafo | |

<br>

### Vídeos :movie_camera:

Este contenido estará fuera de Urantiapedia, por lo que planeamos tener índices o páginas que enumeren enlaces externos o algunos videos incrustados en algunas páginas. Esto se codifica como UB_V, A_V, S_V y TI_V.

<br>

### Podcasts :radio:

Este contenido estará fuera de Urantiapedia, por lo que planeamos tener índices o páginas que enumeren enlaces externos o algunos podcasts integrados en algunas páginas. Esto se codifica como UB_C, A_C, S_C y TI_C.

<br>

### Temas de foros de discusión :speech_balloon:

Este contenido estará fuera de Urantiapedia, por lo que planeamos tener páginas con enlaces externos a hilos relacionados con el contenido. Esto se codifica como UB_F, A_F, A_F y TI_F.

<br>

### Resumen de tipos de enlaces

| &nbsp;             | UB :blue_book: | B :closed_book: | A :page_with_curl: | S :notebook: | O :books: | TI :card_index: | D :memo: | P :bar_chart: | M :earth_americas: | 3D :milky_way: | V :movie_camera: | C :radio: | F :speech_balloon: |
| ------------------ | :------------: | :-------------: | :----------------: | :----------: | :-------: | :-------------: | :------: | :-----------: | :----------------: | :------------: | :--------------: | :-------: | :----------------: |
| UB :blue_book:     |                |     &harr;      |       &harr;       |    &harr;    |  &harr;   |     &harr;      |  &harr;  |    &harr;     |       &harr;       |     &harr;     |      &rarr;      |   &rarr;  |      &rarr;        |
| B :closed_book:    |     &harr;     |                 |       &harr;       |    &harr;    |  &harr;   |     &harr;      |  &larr;  |    &larr;     |       &harr;       |                |                  |           |                    |
| A :page_with_curl: |     &harr;     |     &harr;      |       &harr;       |    &harr;    |  &harr;   |     &harr;      |          |               |       &rarr;       |                |      &rarr;      |   &rarr;  |      &rarr;        |
| S :notebook:       |     &harr;     |     &harr;      |       &harr;       |    &harr;    |  &harr;   |     &harr;      |          |               |       &rarr;       |                |      &rarr;      |   &rarr;  |      &rarr;        |
| O :books:          |     &harr;     |     &harr;      |       &harr;       |    &harr;    |           |                 |          |               |                    |                |                  |           |                    |
| TI :card_index:    |     &harr;     |     &harr;      |                    |              |           |     &harr;      |          |               |       &harr;       |                |      &rarr;      |   &rarr;  |      &rarr;        |
| D :memo:           |     &harr;     |     &rarr;      |                    |              |           |                 |          |               |                    |                |                  |           |                    |
| P :bar_chart:      |     &harr;     |     &rarr;      |                    |              |           |                 |          |               |                    |                |                  |           |                    |
| M :earth_americas: |     &harr;     |     &larr;      |       &larr;       |    &larr;    |           |     &harr;      |          |               |                    |                |                  |           |                    |
| 3D :milky_way:     |     &harr;     |                 |                    |              |           |                 |          |               |                    |                |                  |           |                    |


## Cómo estamos definiendo enlaces

Para cada tipo de contenido, aquí hay una descripción de los archivos que almacenan los enlaces y el proceso para generar los enlaces en las páginas finales para subir a Urantiapedia.

### El Libro de Urantia :blue_book:

- UB_B: El archivo original utilizado para obtener los enlaces es un trabajo existente llamado Paramony, obtenido del sitio web de la Fundación Urantia: [Paramony.txt](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/paramony/Paramony.txt). El archivo se convirtió a través de Urantipedia Tools en un conjunto de archivos Markdown (por ejemplo, [The Urantia Book.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paramony/The%20Urantia%20Book.md)) y luego se agregó a _El Libro de Urantia_ en formato JSON: [footnotes-book-en](https://github.com/JanHerca/urantiapedia/tree/master/input/json/book-en-footnotes). Estos JSON luego se convirtieron en archivos HTML que se cargan en Urantiapedia: [The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book). Los archivos de Markdown en inglés contienen la tabla completa con enlaces.
- UB_A: El archivo original utilizado para obtener los enlaces es un archivo grande: [ub_paralells.tsv](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/articles-en/ub_paralells.tsv). Este archivo se genera a través de las herramientas de Urantiapedia (escaneando todos los artículos y ayudas de estudio en busca de enlaces a la UB).
- UB_S: Los enlaces se obtienen como para UB_A.
- UB_O: un archivo Markdown con un par de tablas contiene la lista de libros y la lista de enlaces (llamados paralells): [paralells.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paralells.md) Este proceso se cambiará para seguir el mismo método que para UB_A y UB_S.
- UB_TI: El Topic Index es un índice obtenido del sitio web de la Fellowship. Este índice se ha formateado en un conjunto de archivos TXT: [topi-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en). Estos archivos contienen enlaces entre oraciones dentro de un tema y _El Libro de Urantia_. Cuando creamos archivos HTML para cargarlos en Urantiapedia, buscamos temas que se vinculen a cada párrafo e introducimos vínculos con esas palabras que coinciden con los nombres de los temas. Este proceso tiene algunos problemas cuando las mismas palabras comparten diferentes temas, y ahora es un trabajo en progreso.
- UB_D: Aún no definido. Probablemente usaremos un catálogo de diagramas como en los mapas.
- UB_I: las ilustraciones se registran en un catálogo mediante archivos Markdown: [image_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/image_catalog.md). Cuando creamos archivos HTML para subirlos a Urantiapedia, buscamos ilustraciones que enlacen a cada párrafo e introducimos imágenes debajo de esos párrafos. Este proceso tiene algunos problemas. Es un trabajo en progreso.
- UB_P: Aún no definido. Probablemente usaremos un catálogo de Presentaciones como en los mapas.
- UB_M: los mapas se registran en un catálogo mediante archivos Markdown: [map_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/map_catalog.md). Cuando creamos archivos HTML para subirlos a Urantiapedia, buscamos mapas con enlaces a cada párrafo e introducimos una sección con una miniatura y un botón que enlaza con la página del mapa.
- UB_3D: Aún no definido. Probablemente usaremos un catálogo de modelos 3D como en los mapas.
- UB_V: Aún no definido. Probablemente usaremos un catálogo de videos como en los mapas. Pero este contenido, como es externo y generalmente en un idioma determinado (sin traducciones), es difícil de reproducir en todos los idiomas.
- UB_C: Aún no definido. Lo mismo que para los vídeos.
- UB_F: Aún no definido. Lo mismo que para los vídeos.

<br>

### La Biblia :closed_book:

- B_UB: Los archivos originales usados ​​para obtener los enlaces son el mismo trabajo llamado Paramony usado de UB_B, pero esta vez enlazando libros de la Biblia con _El Libro de Urantia_: [bible-refs-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/bible-refs-en). Estos archivos se convirtieron a través de Urantiapedia Tools en un conjunto de archivos Markdown: [paramony](https://github.com/JanHerca/urantiapedia/tree/master/input/markdown/en/paramony) y luego se agregaron a los libros de la Biblia cuando se convirtieron en archivos HTML que se cargaron en Urantiapedia: [Bible](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/Bible). Los archivos de Markdown en inglés contienen la tabla completa con enlaces. Los otros idiomas solo tienen una tabla con traducciones de textos en inglés.
- B_A: Aún no definido. Una opción podría ser invertir A_B con Urantiapedia Tools.
- B_S: Aún no definido. Una opción podría ser invertir S_B con Urantiapedia Tools.
- B_O: Aún no definido. Una opción podría ser invertir O_B con Urantiapedia Tools.
- B_TI: Aún no definido. Este proceso es difícil. Vamos a tener unos enlaces de tipo TI_B para poder revertirlos. Una forma podría ser usar Paramony, es decir B_UB, para encontrar párrafos de UB y luego extraer en ellos los nombres de los temas usados ​​en UB_TI. Finalmente tratar de encontrar esos mismos temas en los versículos de la Biblia.
- B_I: Aún no definido. Una opción podría ser utilizar el mismo sistema que UB_I, con un catálogo de imágenes.
- B_M: Aún no definido.

<br>

### Artículos :page_with_curl:

- A_UB: Los artículos suelen venir con referencias al _Libro de Urantia_. Los revisamos y los agregamos manualmente o, a veces, a través de expresiones regulares que convierten las referencias detectadas en enlaces. Ver más abajo acerca de la importancia de un [sistema global único de referencias de _El Libro de Urantia_](#sistema-global-único-de-referencias-de-el-libro-de-urantia).
- A_B: Lo mismo que el anterior se aplica a los libros de la Biblia. Cuando se detecta una referencia bíblica, ya sea manualmente o mediante RegExp, se convierten en enlaces.
- A_A: Cuando un artículo hace referencia a otro artículo, cosa que rara vez sucede, vamos a agregar ese enlace manualmente.
- A_S: Lo mismo que el anterior.
- A_O: Si el artículo menciona un libro que tengamos en Urantiapedia, agregaremos el enlace manualmente.
- A_I: Por ahora estamos incluyendo imágenes que ya existen en los artículos.
- A_M: Enlaces manuales.
- A_3D: Enlaces manuales.
- A_V: Enlaces externos manuales.
- A_C: Enlaces externos manuales.
- A_F: Enlaces externos manuales.

<br>

### Ayudas para el estudio :notebook:

- S_UB: Las ayudas para el estudio normalmente vienen con referencias al _Libro de Urantia_. Estamos haciendo aquí lo mismo que A_UB.
- S_B: Lo mismo que A_B.
- S_A: Este es un tipo de enlace que rara vez ocurre. Los estamos agregando manualmente.
- S_S: Esto también es raro. Estamos agregando esto manualmente.
- S_O: Lo mismo que el anterior.
- S_I: Por ahora estamos incluyendo imágenes que ya existen en los estudios.
- S_M: Enlaces manuales.
- S_3D: Enlaces manuales.
- S_V: Enlaces externos manuales.
- S_C: Enlaces externos manuales.
- S_F: Enlaces externos manuales.

<br>

### Otros libros :books:

- O_UB: Usando el mismo proceso que UB_O pero invirtiendo enlaces, es posible agregar enlaces en una página de un libro.
- O_B: Si un libro menciona un libro de la Biblia estamos introduciendo un enlace manualmente.
- O_I: Estamos incluyendo imágenes que ya existen en los libros.
- O_M: Si un libro contiene mapas no los vamos a convertir en un mapa interactivo, sino en mapas de imágenes estáticas.

<br>

### Índice de temas :card_index:

- TI_UB: El Índice de temas, descrito para UB_TI, se usa aquí de forma directa, introduciendo notas al pie con enlaces cuando los archivos del Índice de temas en formato TXT se convierten a HTML para cargarlos en Urantiapedia. El resultado está aquí: [topic](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/topic). Por ahora solo estamos trabajando en inglés y español. Estamos repitiendo todo el contenido de los archivos para cada idioma.
- TI_B: Aún no definido. El Índice de Temas menciona la Biblia muy raramente.
- TI_A: Aún no definido.
- TI_S: Aún no definido.
- TI_I: Aún no definido.
- TI_M: Enlaces manuales en la sección Enlaces.
- TI_3D: Enlaces manuales en la sección Enlaces.
- TI_V: Enlaces externos manuales en la sección Enlaces externos. Estamos agregando enlaces de Wikipedia de esta manera.
- TI_C: Enlaces externos manuales.
- TI_F: Enlaces externos manuales.

<br>

### Diagramas :memo:

- D_UB: Queremos convertir diagramas a SVG tanto como sea posible, o mapas de imágenes HTML. En el proceso, convertiremos las referencias de UB en enlaces.
- D_B: Lo mismo que el anterior, tratando de detectar enlaces bíblicos.

<br>

### Ilustraciones :sunrise_over_mountains:

Para _El Libro de Urantia_, su uso se ha explicado en UB_I. Para Biblia en B_I. Para artículos, ayudas de estudio y otros libros, en A_I, S_I y O_I. Necesitamos definir alguna forma de agregar imágenes al índice de temas.

<br>

### Presentaciones :bar_chart:

- P_UB: Queremos convertir las presentaciones en algo que se pueda agregar a Urantiapedia, no solo enlaces a Google Docs o similar. De esta forma, cualquier referencia del LU o de la Biblia se convertirá en enlaces de Urantiapedia.
- P_B: Lo mismo que el anterior.

<br>

### Mapas :earth_americas:

- M_UB: Una vez creados los enlaces M_TI, podemos añadir enlaces como este usando enlaces TI_UB.
- M_B: Una vez que se crean los enlaces M_TI, podemos agregar enlaces como este usando enlaces TI_B.
- M_TI: este tipo de enlaces solo será posible si los mapas se convierten en pequeñas aplicaciones interactivas que se ejecutan en un mapa integrable (por ejemplo, usando la plataforma Google My Maps) o como mapas que se ejecutan dentro de Urantiapedia (más recomendado). Al definir estos mapas (probablemente en un formato como KML), agregaremos enlaces a lugares temáticos como información emergente que se muestra en un panel lateral.

<br>

### Modelos 3D :milky_way:

- 3D_UB: algunos modelos 3D pueden tener elementos que muestran ventanas emergentes si se hace clic en ellos que contienen citas de UB y un enlace. Esto es completamente posible usando WebGL.

<br>

## Cómo copiar enlaces

Todos los navegadores permiten hacer clic derecho o tocar y mantener presionado un enlace para copiarlo. Para copiar la página en sí, se puede hacer en el cuadro de texto de la dirección.

Un truco que normalmente no se conoce en Urantiapedia es que puedes copiar el enlace de un encabezado en una página. Cuando el ratón está sobre un encabezado, aparece el símbolo `¶` a la derecha en el que se debe hacer clic con el botón derecho para obtener el enlace.

## Sistema global único de referencias de El Libro de Urantia

Desde que se publicó _El Libro de Urantia_ por primera vez en 1955, este original en inglés ha sido citado numerosas veces en trabajos de lectores y artículos. La forma tradicional de citar _El Libro de Urantia_ consistía en dar la página y el párrafo de esa primera edición en inglés (comúnmente llamada edición estándar). La codificación que se seguía era `<número_página>.<orden_del_párrafo>`.

Esta forma de citar _El Libro de Urantia_ introduce un problema que debería haberse visto ya en fecha temprana. En las traducciones y en diferentes ediciones en papel, el número de las páginas y la posición del párrafo no se mantienen constantes. Forzar a los lectores de _El Libro de Urantia_ de todo el mundo a disponer de una copia en inglés de la primera edición del Libro para poder indicar una referencia de forma correcta no tenía sentido.

Rápidamente, a medida que el Libro se ha ido traduciendo y se ha publicado en diferentes ediciones, se ha visto la necesidad de crear un sistema de referencia único y global para _El Libro de Urantia_, basado en el índice del documento, el índice de la sección y finalmente el índice del párrafo dentro de la sección. Y para cada párrafo se asignó de este modo un identificador único con el que resulta fácil y rápido ir al contenido que alguien ha citado o referenciado. La codificación ahora suele escribirse así `<documento>:<sección>.<párrafo>`.

Resulta llamativo que pasan los años y muchos sitios web y publicaciones siguen manteniendo el sistema antiguo de referencias, a veces como única referencia, o como complemento de la nueva referencia. Esto muestra claramente que aún hay muchas publicaciones que están excesivamente centradas en el uso del idioma inglés, pues esta duplicidad de referencias introduce más trabajo y sólo resulta útil para los lectores de una edición concreta del libro en inglés.

En Urantiapedia, uno de nuestros principios básicos es la [globalización](/es/help/principles#principio-i-multi-idioma). Este sitio web no está diseñado para un idioma o unos pocos idiomas. El objetivo de este sitio web es que todo el contenido sin distinción se pueda ofrecer en todos los idiomas que se desee. Introducir dos referencias cada vez que se cita _El Libro de Urantia_ es añadir un esfuerzo inútil que además va en contra de este principio de capacidad multi-idiomática. Por esta razón, la dirección de Urantiapedia tomó la decisión desde el primer momento de adoptar en cualquier enlace a _El Libro de Urantia_ un único sistema global y unificado de ofrecer la referencia, que sigue fielmente el modelo actual. Cualquier otra mención o referencia que no se ofrezca de la misma manera, se corrige para dejar el enlace de la forma unificada.

Creemos que estas correcciones a contenidos antiguos son necesarias para facilitar a los lectores de todo el mundo un único sistema que reduzca la confusión y que facilite el intercambio de ideas. 

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/websites">Sitios web de referencia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/projects">Urantiapedia — Contexto del proyecto en un ámbito mayor</a></td>
      </tr>
    </tbody>
  </table>
</figure>