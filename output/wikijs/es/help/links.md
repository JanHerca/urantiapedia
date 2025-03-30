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

Código | Origen | Destino | Estado |
--- | --- | --- | --- |
UB_B | Nota al pie en el párrafo | Un libro de la Biblia (un verso en un capítulo) | :+1: |
UB_A | Nota al pie en el párrafo | Un artículo (una posición cualquiera) | :+1: |
UB_S | Nota al pie en el párrafo | Un capítulo de una ayuda al estudio (una posición cualquiera) | :+1: |
UB_O | Nota al pie en el párrafo | Un capítulo de un libro (una página concreta) | :+1: |
UB_TI | Enlaces en palabras de párrafos | Página de un tema de la _Enciclopedia_ | :+1: [1] |
UB_I | Imagen inserta [2] | - | :+1: |
UB_D | Bloque desplegable [3] | Página de un diagrama | :x: |
UB_P | Bloque desplegable | Página de una presentación o diapositiva | :x: |
UB_M | Bloque desplegable | Página de un mapa | :x: |
UB_3D | Bloque desplegable | Página de una escena 3D | :x: |
UB_AU | Control de audio en la cabecera [4] | - | :+1: |
UB_V | Bloque desplegable | Vídeos de youtube incrustado | :x: |

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

Código | Origen | Destino | Estado |
--- | --- | --- | --- |
B_UB | Nota al pie en verso | El Libro de Urantia (párrafo) | :+1: |
B_A | Nota al pie en verso | Un artículo (una posición cualquiera) | :x: |
B_S | Nota al pie en verso | Un capítulo de una ayuda al estudio (una posición cualquiera) | :x: |
B_O | Nota al pie en verso | Un capítulo de un libro (una posición cualquiera) | :x: |
B_TI | Enlaces en palabras de versos | Página de un tema de la _Enciclopedia_ | :x: |
B_I | Imagen inserta  [1] | - | :x: |

- [1] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.
- [2] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.

Ejemplos:
- B_UB: https://urantiapedia.org/en/Bible/Genesis/1#references

<br>

### :page_with_curl: Artículos

Código | Origen | Destino | Estado |
--- | --- | --- | --- |
A_UB | Enlace en citas o párrafos | El Libro de Urantia (párrafo) | :+1: |
A_B | Enlace en citas o párrafos | Un libro de la Biblia (un verso en un capítulo) | :+1: |
A_A | Enlace cualquiera | Una página de un artículos | :+1: |
A_S | Enlace cualquiera | Una página de una ayuda de estudio | :+1: |
A_O | Enlace cualquiera | Un capítulo de un libro (una página concreta) | :+1: |
A_V | Cualquier posición | Vídeos de youtube incrustado | :+1: |


Ejemplos:
- A_UB: https://urantiapedia.org/en/article/A_Letter_to_Astronomers_and_Astrophysicists (cualquiera de las citas)
- A_B: https://urantiapedia.org/en/article/Sheila_Keene_Lund/Understanding_the_Relation_of_Love_to_the_Mind#love-defined (enlace a 1 Corintios de la Biblia)

<br>

### :notebook: Ayudas para el estudio

Código | Origen | Destino | Estado |
--- | --- | --- | --- |
S_UB | Enlace en citas o párrafos | El Libro de Urantia (párrafo) | :+1: |
S_B | Enlace en citas o párrafos | Un libro de la Biblia (un verso en un capítulo) | :+1: |
S_A | Enlace cualquiera | Una página de un artículos | :+1: |
S_S | Enlace cualquiera | Una página de una ayuda de estudio | :+1: |
S_O | Enlace cualquiera | Un capítulo de un libro (una página concreta) | :+1: |
S_V | Cualquier posición | Vídeos de youtube incrustado | :+1: |

Ejemplos:
- S_UB: https://urantiapedia.org/en/article/William_S_Sadler/Workbook_1_Foreword_and_Part_I/1#i-ub-101-el-padre-universal-es
- S_B: https://urantiapedia.org/en/article/William_S_Sadler/Consideration_some_criticisms_Urantia_Book

<br>

### :books: Libros

Código | Origen | Destino | Estado |
--- | --- | --- | --- |
O_B | Enlace en citas o párrafos | Un libro de la Biblia (un verso en un capítulo) | :x: |

<br>

### :card_index: Enciclopedia

Código | Origen | Destino | Estado |
--- | --- | --- | --- |
TI_UB | Nota al pie en el párrafo o «Ver también» | El Libro de Urantia (párrafo) | :+1: |
TI_B | Nota al pie en el párrafo | Un libro de la Biblia (verso en un capítulo) | :x: |
TI_A | Nota al pie en el párrafo | Página de un artículo | :x: |
TI_S | Nota al pie en el párrafo | Capítulo de una ayudas de estudio | :x: |
TI_TI | Sección «Ver también» | Otra página o sección de una página de la _Enciclopedia_ | :+1: |
TI_I | Imagen inserta [1] | - | :x: |
TI_D | Bloque desplegable [2] | Página de un diagrama | :x: |
TI_P | Bloque desplegable | Página de una presentación o diapositiva | :x: |
TI_M | Bloque desplegable | Página de un mapa | :x: |
TI_3D | Bloque desplegable | Página de una escena 3D | :x: |
TI_V | Cualquier posición | Vídeos de youtube incrustado | :x: |

- [1] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.
- [2] Lo mismo dicho para _El Libro de Urantia_ se aplica aquí.

Ejemplos:
- TI_UB: https://urantiapedia.org/en/topic/Abraham_(Old_Testament)#references

<br>

### :memo: Diagramas

Código | Origen | Destino | Estado |
--- | --- | --- | --- |
D_UB | Enlace en el diagrama | El Libro de Urantia (párrafo) | :x: |

Ejemplos:
- D_UB: https://urantiapedia.org/en/article/The_Kingdom_of_Heaven_Revelation_Nebadon_Chart (cualquiera de los recuadros del diagrama)

<br>

### :bar_chart: Presentaciones

Código | Origen | Destino | Estado |
--- | --- | --- | --- |
P_UB | Enlace en diapositiva | El Libro de Urantia (párrafo) | :x: |

<br>

### :earth_americas: Mapas

Código | Origen | Destino | Estado |
--- | --- | --- | --- |
M_UB | Enlace en panel lateral | El Libro de Urantia (párrafo) | :x: |
M_TI | Enlace en panel lateral | Página de la _Enciclopedia_ | :x: |

Ejemplos:
- M_TI: https://urantiapedia.org/en/map/The_Preaching_of_Jesus_Second_Galilee_Tour (haga clic en un icono para abrir el panel con enlaces)

<br>

### :milky_way: Escenas 3D

Código | Origen | Destino | Estado |
--- | --- | --- | --- |
3D_UB | Enlace en elemento 3D | El Libro de Urantia (párrafo) | :x: |

<br>


## Cómo estamos definiendo enlaces

Para cada tipo de contenido, aquí hay una descripción de los archivos que almacenan los enlaces y el proceso para generar los enlaces en las páginas finales para subir a Urantiapedia.

### :blue_book: El Libro de Urantia

- UB_B: El archivo original utilizado para obtener los enlaces es un trabajo existente llamado Paramony, obtenido del sitio web de la Fundación Urantia: [Paramony.txt](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/paramony/Paramony.txt). El archivo se convirtió a través de Urantipedia Tools en un conjunto de archivos Markdown (por ejemplo, [The Urantia Book.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paramony/The%20Urantia%20Book.md)) y luego se agregó a _El Libro de Urantia_ en formato JSON: [footnotes-book-en](https://github.com/JanHerca/urantiapedia/tree/master/input/json/book-en-footnotes). Estos JSON luego se convirtieron en archivos HTML que se cargan en Urantiapedia: [The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book). Los archivos de Markdown en inglés contienen la tabla completa con enlaces.
- UB_A: El archivo original utilizado para obtener los enlaces es un archivo grande: [ub_paralells.tsv](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/articles-en/ub_paralells.tsv). Este archivo se genera a través de las herramientas de Urantiapedia (escaneando todos los artículos y ayudas de estudio en busca de enlaces a la UB).
- UB_S: Los enlaces se obtienen como para UB_A.
- UB_O: un archivo Markdown con un par de tablas contiene la lista de libros y la lista de enlaces (llamados paralells): [paralells.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paralells.md) Este proceso se cambiará para seguir el mismo método que para UB_A y UB_S.
- UB_TI: El Topic Index es un índice obtenido del sitio web de la Fellowship. Este índice se ha formateado en un conjunto de archivos TXT: [topi-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en). Estos archivos contienen enlaces entre frases dentro de un tema y _El Libro de Urantia_. Cuando creamos archivos HTML para cargarlos en Urantiapedia, buscamos temas que se vinculen a cada párrafo e introducimos vínculos con esas palabras que coinciden con los nombres de los temas. Este proceso tiene algunos problemas cuando las mismas palabras comparten diferentes temas, y ahora es un trabajo en progreso.
- UB_D: Aún no definido. Probablemente usaremos un catálogo de diagramas como en los mapas.
- UB_I: las ilustraciones se registran en un catálogo mediante archivos Markdown: [image_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/image_catalog.md). Cuando creamos archivos HTML para subirlos a Urantiapedia, buscamos ilustraciones que enlacen a cada párrafo e introducimos imágenes debajo de esos párrafos. Este proceso tiene algunos problemas. Es un trabajo en progreso.
- UB_P: Aún no definido. Probablemente usaremos un catálogo de Presentaciones como en los mapas.
- UB_M: los mapas se registran en un catálogo mediante archivos Markdown: [map_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/map_catalog.md). Cuando creamos archivos HTML para subirlos a Urantiapedia, buscamos mapas con enlaces a cada párrafo e introducimos una sección con una miniatura y un botón que enlaza con la página del mapa.
- UB_3D: Aún no definido. Probablemente usaremos un catálogo de modelos 3D como en los mapas.
- UB_V: Aún no definido. Probablemente usaremos un catálogo de videos como en los mapas. Pero este contenido, como es externo y generalmente en un idioma determinado (sin traducciones), es difícil de reproducir en todos los idiomas.

<br>

### :closed_book: La Biblia

- B_UB: Los archivos originales usados ​​para obtener los enlaces son el mismo trabajo llamado Paramony usado de UB_B, pero esta vez enlazando libros de la Biblia con _El Libro de Urantia_: [bible-refs-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/bible-refs-en). Estos archivos se convirtieron a través de Urantiapedia Tools en un conjunto de archivos Markdown: [paramony](https://github.com/JanHerca/urantiapedia/tree/master/input/markdown/en/paramony) y luego se agregaron a los libros de la Biblia cuando se convirtieron en archivos HTML que se cargaron en Urantiapedia: [Bible](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/Bible). Los archivos de Markdown en inglés contienen la tabla completa con enlaces. Los otros idiomas solo tienen una tabla con traducciones de textos en inglés.
- B_A: Aún no definido. Una opción podría ser invertir A_B con Urantiapedia Tools.
- B_S: Aún no definido. Una opción podría ser invertir S_B con Urantiapedia Tools.
- B_O: Aún no definido. Una opción podría ser invertir O_B con Urantiapedia Tools.
- B_TI: Aún no definido. Este proceso es difícil. Vamos a tener unos enlaces de tipo TI_B para poder revertirlos. Una forma podría ser usar Paramony, es decir B_UB, para encontrar párrafos de UB y luego extraer en ellos los nombres de los temas usados ​​en UB_TI. Finalmente tratar de encontrar esos mismos temas en los versículos de la Biblia.
- B_I: Aún no definido. Una opción podría ser utilizar el mismo sistema que UB_I, con un catálogo de imágenes.

<br>

### :page_with_curl: Artículos

- A_UB: Los artículos suelen venir con referencias al _Libro de Urantia_. Los revisamos y los agregamos manualmente o, a veces, a través de expresiones regulares que convierten las referencias detectadas en enlaces. Ver más abajo acerca de la importancia de un [sistema global único de referencias de _El Libro de Urantia_](#sistema-global-único-de-referencias-de-el-libro-de-urantia).
- A_B: Lo mismo que el anterior se aplica a los libros de la Biblia. Cuando se detecta una referencia bíblica, ya sea manualmente o mediante RegExp, se convierten en enlaces.
- A_A: Cuando un artículo hace referencia a otro artículo, cosa que rara vez sucede, vamos a agregar ese enlace manualmente.
- A_S: Lo mismo que el anterior.
- A_O: Si el artículo menciona un libro que tengamos en Urantiapedia, agregaremos el enlace manualmente.

<br>

### :notebook: Ayudas para el estudio

- S_UB: Las ayudas para el estudio normalmente vienen con referencias al _Libro de Urantia_. Estamos haciendo aquí lo mismo que A_UB.
- S_B: Lo mismo que A_B.
- S_A: Este es un tipo de enlace que rara vez ocurre. Los estamos agregando manualmente.
- S_S: Esto también es raro. Estamos agregando esto manualmente.
- S_O: Lo mismo que el anterior.

<br>

### :books: Otros libros

- O_UB: Usando el mismo proceso que UB_O pero invirtiendo enlaces, es posible agregar enlaces en una página de un libro.
- O_B: Si un libro menciona un libro de la Biblia estamos introduciendo un enlace manualmente.

<br>

### :card_index: Enciclopedia

- TI_UB: La _Enciclopedia_, descrito para UB_TI, se usa aquí de forma directa, introduciendo notas al pie con enlaces cuando los archivos de la _Enciclopedia_ en formato TXT se convierten a HTML para cargarlos en Urantiapedia. El resultado está aquí: [topic](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/topic). Por ahora solo estamos trabajando en inglés y español. Estamos repitiendo todo el contenido de los archivos para cada idioma.
- TI_B: Aún no definido. El Índice de Temas menciona la Biblia muy raramente.
- TI_A: Aún no definido.
- TI_S: Aún no definido.
- TI_I: Aún no definido.
- TI_M: Enlaces manuales en la sección Enlaces.
- TI_3D: Enlaces manuales en la sección Enlaces.
- TI_V: Enlaces externos manuales en la sección Enlaces externos. Estamos agregando enlaces de Wikipedia de esta manera.

<br>

### :memo: Diagramas

- D_UB: Queremos convertir diagramas a SVG tanto como sea posible, o mapas de imágenes HTML. En el proceso, convertiremos las referencias de UB en enlaces.

<br>

### :bar_chart: Presentaciones

- P_UB: Queremos convertir las presentaciones en algo que se pueda agregar a Urantiapedia, no solo enlaces a Google Docs o similar. De esta forma, cualquier referencia del LU o de la Biblia se convertirá en enlaces de Urantiapedia.

<br>

### :earth_americas: Mapas

- M_UB: Una vez creados los enlaces M_TI, podemos añadir enlaces como este usando enlaces TI_UB.
- M_TI: este tipo de enlaces solo será posible si los mapas se convierten en pequeñas aplicaciones interactivas que se ejecutan en un mapa integrable (por ejemplo, usando la plataforma Google My Maps) o como mapas que se ejecutan dentro de Urantiapedia (más recomendado). Al definir estos mapas (probablemente en un formato como KML), agregaremos enlaces a lugares temáticos como información emergente que se muestra en un panel lateral.

<br>

### :milky_way: Modelos 3D

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
        <td><a href="/es/help/projects">Contexto del proyecto en un ámbito mayor</a></td>
      </tr>
    </tbody>
  </table>
</figure>