---
title: "Urantiapedia - Enlaces"
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
        <td><a href="/es/help/projects">Contexto del proyecto en un ámbito mayor</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Resumen

Este documento describe la forma en que se definen y crean los enlaces entre elementos en Urantiapedia. También analiza las mejoras que podrían realizarse en el futuro en el sistema de enlaces.

## ¿Qué es un enlace en Urantiapedia?

Los enlaces en Urantiapedia son siempre, al final, un enlace HTML entre dos páginas o entre dos anclas dentro de dos páginas. Si hay varios enlaces en la misma posición, se crearán varios enlaces HTML.

Dado que Urantiapedia es compatible con archivos HTML5 y Markdown, los enlaces pueden adoptar la sintaxis HTML5 o Markdown. Ambos son válidos.

Por ejemplo, _El Libro de Urantia_ está en HTML5, y el párrafos 0:2.9 tiene dos enlaces a dos temas (Dios y Padre Universal) de la _Enciclopedia_:

```html
<p id="p2_9"><sup><small>0:2.9</small></sup> <i>Por el contexto</i> —como cuando se utiliza para hablar de algún nivel o asociación de la deidad. Cuando se tengan dudas sobre la interpretación exacta de la palabra <a href="/es/topic/God">Dios</a>, sería aconsejable aplicarla a la persona del <a href="/es/topic/Universal_Father">Padre Universal</a>.</p>
```

Este ejemplo conecta páginas: el prólogo de _El Libro de Urantia_, con las páginas de los temas «Dios» y «Padre Universal».

O, por ejemplo, las ayudas de estudio y los artículos están en Markdown. Este es un extracto del primer capítulo del Cuaderno I de William Sadler:

```markdown
**REFERENCIA**: [UB 1:0.1](/es/The_Urantia_Book/1#p0_1) — “El Padre Universal es...”
```

Este ejemplo conecta una página (un capítulo de una ayuda de estudio) con un párrafo (ancla) en _El Libro de Urantia_. Usamos para eso la forma estándar para un ancla con un carácter `#`, y el uso de un identificador único (en este caso `p0_1`). Cada párrafo o encabezado de un documento de _El Libro de Urantia_ tiene un identificador único y un ancla que sigue este patrón: `p<índice_sección>_<índice_párrafo>`, y que sigue la convención habitual `<documento>:<sección>.<párrafo> ` para nombrar párrafos en el Libro.

## Lo que se va a enlazar en Urantiapedia

Las siguientes tablas resumen los enlaces que queremos crear en este momento en Urantiapedia. Hay muchos tipos de enlaces que podríamos considerar agregar en el futuro.

### :blue_book: El Libro de Urantia

<div class="urantiapedia-table-wrapper">

Código | Origen | Destino | Procedimiento | Estado |
--- | --- | --- | --- | --- |
UB_B | Nota al pie en el párrafo | Un libro de la Biblia (un verso en un capítulo) | El _Paramony_ ([Paramony.txt](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/paramony/Paramony.txt)) se convierte a Markdown ([The Urantia Book.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paramony/The%20Urantia%20Book.md)), luego a JSON ([The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book)), y finalmente al HTML que se carga en _Urantiapedia_ ([The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book)) | :+1: |
UB_A | Nota al pie en el párrafo | Un artículo (una posición cualquiera) | Se genera por medio automático un archivo de paralelos ([ub_paralells.tsv](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/articles-en/ub_paralells.tsv)) | :+1: |
UB_S | Nota al pie en el párrafo | Un capítulo de una ayuda al estudio (una posición cualquiera) | Igual que UB_A | :+1: |
UB_O | Nota al pie en el párrafo | Un capítulo de un libro (una página concreta) | Se genera manualmente un archivo de paralelos ([paralells.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paralells.md)) | :+1: |
UB_TI | Enlaces en palabras de párrafos | Página de un tema de la _Enciclopedia_ | Se utilizan los archivos TXT de la _Enciclopedia_, que contienen las referencias ([topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en)) | :+1: [1] |
UB_I | Imagen inserta [2] | - |  Se utiliza un catálogo de imágenes ([image_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/image_catalog.md)) | :+1: |
UB_D | Bloque desplegable [3] | Página de un diagrama | No definido |  :x: |
UB_P | Bloque desplegable | Página de una presentación o diapositiva | No definido | :x: |
UB_M | Bloque desplegable | Página de un mapa | Se utiliza un catálogo de mapas ([map_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/map_catalog.md)) | :clock2: |
UB_3D | Bloque desplegable | Página de una escena 3D | No definido | :x: |
UB_AU | Control de audio en la cabecera [4] | - | Las _Urantiapedia Tools_ añaden el audio en los idiomas disponibles | :+1: |
UB_V | Bloque desplegable | Vídeos de youtube incrustado | No definido | :x: |

</div>

- [1] El algoritmo que crea enlaces está en progreso para ajustar la cantidad de enlaces a crear.
- [2] Las imágenes no son propiamente enlaces, pero para insertarlas se introduce un enlace en un catálogo de imágenes que luego se procesa.
- [3] Un bloque desplegable es un elemento colocado entre los párrafos que se puede expandir y mostrar elementos pequeños del tamaño de una imagen, o bien si el elemento es demasiado grande, un enlace a una página donde poder visualizar en detalle ese elemento.
- [4] El audio de _El Libro de Urantia_ no es propiamente un enlace, pero para insertarlo tenemos indicado en un software qué audios están disponibles y hay un proceso que los inserta.

Ejemplos:
- UB_B: https://urantiapedia.org/en/The_Urantia_Book/1#the-bible
- UB_A: https://urantiapedia.org/en/The_Urantia_Book/1#articles
- UB_S: https://urantiapedia.org/en/The_Urantia_Book/1#study-aids
- UB_O: https://urantiapedia.org/en/The_Urantia_Book/0#other-books
- UB_I: https://urantiapedia.org/en/The_Urantia_Book/11#p0_2 (ejemplo de imagen)
- UB_M: https://urantiapedia.org/en/The_Urantia_Book/149#p0_1 (ejemplo de bloque desplegable)
- UB_AU: https://urantiapedia.org/en/The_Urantia_Book/10 (ejemplo de control de audio en la cabecera de la página)

<br>

### :closed_book: La Biblia

<div class="urantiapedia-table-wrapper">

Código | Origen | Destino | Procedimiento | Estado |
--- | --- | --- | --- | --- |
B_UB | Nota al pie en verso | El Libro de Urantia (párrafo) | El _Paramony_ ([bible-refs-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/bible-refs-en)) se convierte a Markdown ([paramony](https://github.com/JanHerca/urantiapedia/tree/master/input/markdown/en/paramony)) y luego en el HTML que se carga en _Urantiapedia_ ([Bible](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/Bible)) | No definido | :+1: |
B_A | Nota al pie en verso | Un artículo (una posición cualquiera) | No definido | :x: |
B_S | Nota al pie en verso | Un capítulo de una ayuda al estudio (una posición cualquiera) | No definido | :x: |
B_O | Nota al pie en verso | Un capítulo de un libro (una posición cualquiera) | No definido | :x: |
B_TI | Enlaces en palabras de versos | Página de un tema de la _Enciclopedia_ | No definido | :x: |
B_I | Imagen inserta  [1] | - | No definido | :x: |

</div>

- [1] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.
- [2] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.

Ejemplos:
- B_UB: https://urantiapedia.org/en/Bible/Genesis/1#references

<br>

### :page_with_curl: Artículos

<div class="urantiapedia-table-wrapper">

Código | Origen | Destino | Procedimiento | Estado |
--- | --- | --- | --- | --- |
A_UB | Enlace en citas o párrafos | El Libro de Urantia (párrafo) | Se incluyen enlaces [1] al _Libro_ de forma manual | :+1: |
A_B | Enlace en citas o párrafos | Un libro de la Biblia (un verso en un capítulo) | Igual que A_UB | :+1: |
A_A | Enlace cualquiera | Una página de un artículos | Igual que A_UB | :+1: |
A_S | Enlace cualquiera | Una página de una ayuda de estudio | Igual que A_UB | :+1: |
A_O | Enlace cualquiera | Un capítulo de un libro (una página concreta) | Igual que A_UB | :+1: |
A_V | Cualquier posición | Vídeos de youtube incrustado | Enlace manual | :+1: |

</div>

- [1] Ver más abajo acerca de la importancia de un [sistema global único de referencias de _El Libro de Urantia_](#sistema-global-único-de-referencias-de-el-libro-de-urantia)

Ejemplos:
- A_UB: https://urantiapedia.org/en/article/A_Letter_to_Astronomers_and_Astrophysicists (cualquiera de las citas)
- A_B: https://urantiapedia.org/en/article/Sheila_Keene_Lund/Understanding_the_Relation_of_Love_to_the_Mind#love-defined (enlace a 1 Corintios de la Biblia)

<br>

### :notebook: Ayudas para el estudio

<div class="urantiapedia-table-wrapper">

Código | Origen | Destino | Procedimiento | Estado |
--- | --- | --- | --- | --- |
S_UB | Enlace en citas o párrafos | El Libro de Urantia (párrafo) | Lo mismo que A_UB | :+1: |
S_B | Enlace en citas o párrafos | Un libro de la Biblia (un verso en un capítulo) | Lo mismo que A_B | :+1: |
S_A | Enlace cualquiera | Una página de un artículos | Lo mismo que A_A | :+1: |
S_S | Enlace cualquiera | Una página de una ayuda de estudio | Lo mismo que A_S | :+1: |
S_O | Enlace cualquiera | Un capítulo de un libro (una página concreta) | Lo mismo que A_O | :+1: |
S_V | Cualquier posición | Vídeos de youtube incrustado | Enlace manual | :+1: |

</div>

Ejemplos:
- S_UB: https://urantiapedia.org/en/article/William_S_Sadler/Workbook_1_Foreword_and_Part_I/1#i-ub-101-el-padre-universal-es
- S_B: https://urantiapedia.org/en/article/William_S_Sadler/Consideration_some_criticisms_Urantia_Book

<br>

### :books: Libros

<div class="urantiapedia-table-wrapper">

Código | Origen | Destino | Procedimiento | Estado |
--- | --- | --- | --- | --- |
O_B | Enlace en citas o párrafos | Un libro de la Biblia (un verso en un capítulo) | Lo mismo que A_B | :x: |

</div>

<br>

### :card_index: Enciclopedia

<div class="urantiapedia-table-wrapper">

Código | Origen | Destino | Procedimiento | Estado |
--- | --- | --- | --- | --- |
TI_UB | Nota al pie en el párrafo o «Ver también» | El Libro de Urantia (párrafo) | Igual que UB_TI pero en un proceso inverso. Se utilizan los archivos TXT de la _Enciclopedia_, que contienen las referencias ([topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en)) | :+1: |
TI_B | Nota al pie en el párrafo | Un libro de la Biblia (verso en un capítulo) | No definido | :x: |
TI_A | Nota al pie en el párrafo | Página de un artículo | No definido | :x: |
TI_S | Nota al pie en el párrafo | Capítulo de una ayudas de estudio | No definido | :x: |
TI_TI | Sección «Ver también» | Otra página o sección de una página de la _Enciclopedia_ | Se usan los ficheros TXT mencionados antes | :+1: |
TI_I | Imagen inserta | - | Se incluyen enlaces a imágenes en los ficheros TXT de forma manual | :clock2: |
TI_D | Bloque desplegable | Página de un diagrama | No definido | :x: |
TI_P | Bloque desplegable | Página de una presentación o diapositiva | No definido | :x: |
TI_M | Bloque desplegable | Página de un mapa | No definido | :x: |
TI_3D | Bloque desplegable | Página de una escena 3D | No definido | :x: |
TI_V | Cualquier posición | Vídeos de youtube incrustado | No definido | :x: |

</div>

Ejemplos:
- TI_UB: https://urantiapedia.org/en/topic/Abraham_(Old_Testament)#references

<br>

### :memo: Diagramas

<div class="urantiapedia-table-wrapper">

Código | Origen | Destino | Procedimiento | Estado |
--- | --- | --- | --- | --- |
D_UB | Enlace en el diagrama | El Libro de Urantia (párrafo) | Se añaden enlaces manualmente | :clock2: |

</div>

Ejemplos:
- D_UB: https://urantiapedia.org/en/article/The_Kingdom_of_Heaven_Revelation_Nebadon_Chart (cualquiera de los recuadros del diagrama)

<br>

### :bar_chart: Presentaciones

<div class="urantiapedia-table-wrapper">

Código | Origen | Destino | Procedimiento | Estado |
--- | --- | --- | --- | --- |
P_UB | Enlace en diapositiva | El Libro de Urantia (párrafo) | No definido, pero seguramente añadiendo enlaces manualmente | :x: |

</div>

<br>

### :earth_americas: Mapas

<div class="urantiapedia-table-wrapper">

Código | Origen | Destino | Procedimiento | Estado |
--- | --- | --- | --- | --- |
M_UB | Enlace en panel lateral | El Libro de Urantia (párrafo) | Enlaces manuales dentro de ficheros KML | :x: |
M_TI | Enlace en panel lateral | Página de la _Enciclopedia_ | Enlaces manuales dentro de ficheros KML | :x: |

</div>

Ejemplos:
- M_TI: https://urantiapedia.org/en/map/The_Preaching_of_Jesus_Second_Galilee_Tour (haga clic en un icono para abrir el panel con enlaces)

<br>

### :milky_way: Escenas 3D

<div class="urantiapedia-table-wrapper">

Código | Origen | Destino | Procedimiento | Estado |
--- | --- | --- | --- | --- |
3D_UB | Enlace en elemento 3D | El Libro de Urantia (párrafo) | No definido | :x: |

</div>

<br>

## Cómo copiar enlaces

Todos los navegadores permiten hacer clic derecho o tocar y mantener presionado un enlace para copiarlo. Para copiar la página en sí, se puede hacer en el cuadro de texto de la dirección.

Un truco que normalmente no se conoce en Urantiapedia es que puedes copiar el enlace de un encabezado en una página. Cuando el ratón está sobre un encabezado, aparece el símbolo `¶` a la derecha en el que se debe hacer clic con el botón derecho para obtener el enlace.

## Sistema global único de referencias de El Libro de Urantia

Desde que se publicó _El Libro de Urantia_ por primera vez en 1955, este original en inglés ha sido citado numerosas veces en trabajos de lectores y artículos. La forma tradicional de citar _El Libro de Urantia_ consistía en dar la página y el párrafo de esa primera edición en inglés (comúnmente llamada edición estándar). La codificación que se seguía era `<número_página>.<orden_del_párrafo>`.

Esta forma de citar _El Libro de Urantia_ introduce un problema que debería haberse visto ya en fecha temprana. En las traducciones y en diferentes ediciones en papel, el número de las páginas y la posición del párrafo no se mantienen constantes. Forzar a los lectores de _El Libro de Urantia_ de todo el mundo a disponer de una copia en inglés de la primera edición del Libro para poder indicar una referencia de forma correcta no tenía sentido.

Rápidamente, a medida que el Libro se ha ido traduciendo y se ha publicado en diferentes ediciones, se ha visto la necesidad de crear un sistema de referencia único y global para _El Libro de Urantia_, basado en el índice del documento, el índice de la sección y finalmente el índice del párrafo dentro de la sección. Y para cada párrafo se asignó de este modo un identificador único con el que resulta fácil y rápido ir al contenido que alguien ha citado o referenciado. La codificación ahora suele escribirse así `<documento>:<sección>.<párrafo>`.

Resulta llamativo que pasan los años y muchos sitios web y publicaciones siguen manteniendo el sistema antiguo de referencias, a veces como única referencia, o como complemento de la nueva referencia. Esto muestra claramente que aún hay muchas publicaciones que están excesivamente centradas en el uso del idioma inglés, pues esta duplicidad de referencias introduce más trabajo y sólo resulta útil para los lectores de una edición concreta del libro en inglés.

En Urantiapedia, uno de nuestros principios básicos es la [globalización](/es/help/principles#principio-i-multi-idioma). Este sitio web no está diseñado para un idioma o unos pocos idiomas. El objetivo de este sitio web es que todo el contenido sin distinción se pueda ofrecer en todos los idiomas que se desee. Introducir dos referencias cada vez que se cita _El Libro de Urantia_ es añadir un esfuerzo inútil que además va en contra de este principio de capacidad multi-idiomática. Por esta razón, la dirección de Urantiapedia tomó la decisión desde el primer momento de adoptar en cualquier enlace a _El Libro de Urantia_ un único sistema global y unificado al ofrecer la referencia, que sigue fielmente el modelo actual. Cualquier otra mención o referencia que no se ofrezca de la misma manera, se corrige para dejar el enlace de la forma unificada.

Creemos que estas correcciones a contenidos antiguos son necesarias para facilitar a los lectores de todo el mundo un único sistema que reduzca la confusión y que facilite el intercambio de ideas. 

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/websites">Sitios web de referencia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/projects">Contexto del proyecto en un ámbito mayor</a></td>
      </tr>
    </tbody>
  </table>
</figure>