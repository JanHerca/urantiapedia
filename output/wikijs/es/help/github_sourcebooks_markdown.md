---
title: "Obtener libros «fuente»"
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
        <td><a href="/es/help/github_sourcebooks_catalog">Creación de un catálogo de libros «fuente»</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_articles_catalog">Catálogo de artículos</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Aquí se describe cómo obtener los libros que se suponen fuentes de *El Libro de Urantia* o tienen alguna relación o paralelismo con *El Libro de Urantia*, y que han sido catalogados siguiendo la tarea [Creación de un catálogo de libros «fuente»](/es/help/github_sourcebooks_catalog).

## Proceso

Esta tarea consiste en tratar de localizar en Internet una versión digital de cada libro, descargarla y procesarla hasta obtener un fichero o varios en formato [Markdown](/es/help/markdown).

Se pueden dar estas situaciones:
- El libro no se encuentra en ningún sitio web descargable como digital. Se puede evaluar adquirir un ejemplar en papel si está disponible o tratar de obtenerlo de una biblioteca pública para escanearlo.
- El libro se ha encontrado pero no está descargable, sólo se puede leer online. Normalmente se pueden realizar capturas de pantalla de cada página o hacer algun hacking de la web para descargar los escaneados. Estamos usando el [software de captura Greenshot](https://getgreenshot.org/) para este propósito pero se puede usar cualquier otro.
- El libro está descargable pero en forma de imágenes o en un PDF donde no hay texto. Será necesario usar un software de reconocimiento de caracteres (OCR). Ver más adelante.
- El libro está descargable en forma de PDF con texto, o mejor aún, en forma de archivo de texto o como página web. Este es el ideal de todos los casos. Si sólo está disponible como PDF, hay que convertirlo a texto (ver más adelante).

### Descarga de libros

Para obtener libros digitales algunas fuentes pueden ser:
- [Google Libros](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)
- [El proyecto Gutemberg](https://www.gutenberg.org/)

Sea cual sea el caso en que nos encontremos, la tarea será anotar la dirección web de donde hemos logrado descargar el libro y descargarlo a nuestro PC. Luego sería conveniente enviar un correo a urantiapedia@gmail.com indicando las direcciones web de todos los libros que se hayan obtenido. Los *Administradores* están creando un almacén en la Nube de todos los archivos de gran tamaño que no tienen cabida en GitHub. Los libros originales, que a veces son PDF muy grandes, se están dejando ahí para evitar problemas si las webs desde donde se descargaron dejan de estar accesibles en un futuro.

Una vez el fichero del libro se ha convertido a un fichero de tipo texto, la tarea consistirá en procesar el libro hasta obtener un conjunto de ficheros en formato [Markdown](/es/help/markdown), un fichero por cada capítulo, prefacio o apéndice del libro.

Para cualquier modificación de carpetas y ficheros en GitHub deberán seguirse las instrucciones proporcionadas para los usuarios [Administradores](/es/help/admin), [Editores Jefe](/es/help/github) o [Editores Asistentes](/es/help/github_assistant).

### Derechos de autor

Todo lo indicado sobre _Derechos de autor_ en la sección [Obtener libros de todas las religiones](/es/help/github_religious_books_markdown) de este manual también es de aplicación aquí.

### Escanear libros con un OCR

Si resultara necesario escanear un libro, consulta la sección [Obtener libros de todas las religiones](/es/help/github_religious_books_markdown) de este manual y sigue los mismos pasos.

### Conversión de PDF a Markdown

Si resultara necesario convertir un PDF a Markdown, consulta la sección [Obtener libros de todas las religiones](/es/help/github_religious_books_markdown) de este manual y sigue los mismos pasos.

## Estructura de un libro en Urantiapedia

Ya indicamos en [la tarea anterior](/es/help/github_sourcebooks_catalog) cómo se organizan los libros «fuente» en estantes y grupos, y dónde se puede consultar el listado de todos los libros previstos.

Los libros deben guardarse en estas carpetas del proyecto GitHub: `/output/wikijs/en/book` para libros en inglés, `/output/wikijs/es/book` para libros en español, etc. Dentro de estas carpetas crearemos otra, si no existe, con el nombre del autor (con los espacios en blanco sustituidos por guiones bajos). Finalmente, dentro de la carpeta del autor, crearemos una carpeta para cada libro, donde irán los capítulos, y un fichero Markdown con el mismo nombre que la carpeta, donde irá la portada del libro. Por ejemplo, la carpeta `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us` contiene los capítulos de un libro sobre astronomía, y el fichero `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us.md` es el de la portada de ese libro.

Al respecto de los nombres de carpetas deben tenerse en cuenta estas indicaciones:
- Deben ser únicos dentro de cada carpeta y deben contener siempre tres caracteres o más.
- Si se prevee que el libro va a formar parte de una colección (volumen 1, 2, etc.), añadir un sufijo `_1`, `_2`, etc (hasta un máximo de 9 volúmenes), o `_01`, `_02` (si se preveen más de 9 volúmenes).
- El nombre de la carpeta no debe tener espacios en blanco o guiones, que deberán sustituirse por guiones bajos (`_`).
- El nombre usará el título del libro pero lo más abreviado posible.
- El nombre siempre será en inglés, de modo que si el libro original no es en inglés se traduce el título.
- Los caracteres raros como dos puntos, apóstrofes o exclamaciones se quitan.
- Por ejemplo, si el título de un libro es *Did Jesus exist?* la carpeta de ese libro se llamaría `Did_Jesus_exist`. Si el título fuera *Principios de Teología* (un libro cuyo original fuera en español), la carpeta sería `Principles_of_Theology`.
- Siempre se usarán los mismos nombres de carpetas para todos los idiomas. Por ejemplo, la carpeta para el ejemplo anterior en inglés es `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us` y para el español es `/output/wikijs/es/book/Sir_James_Jeans/The_Universe_Around_Us` (NO ES ~~`/output/wikijs/es/book/Sir_James_Jeans/El_Universo_que_nos_rodea`~~). Es decir, lo único que cambia en la URL entre diferentes idiomas es el código de lenguaje (`en`, `es`, etc.). Esto facilita muchas operaciones con las rutas en Urantiapedia.

Cada capítulo será un fichero dentro de la carpeta del libro llamado `xx.md` donde `xx` será:
- Un número de 0 a N con el número del capítulo (sin el título, sólo el número). El cero está reservado a un prólogo o introducción en el que el propio autor no haya usado un número para numerarlo. Si no hay prólogo ni introducción alguna, el primer capítulo será `1.md`, el segundo será `2.md`, etc.
- `Index` para la página del índice, que quedará como `Index.md`. Esta página a veces puede omitirse si el índice no es muy largo e incluir el índice en la página de la portada.
- `Preface` para la página con el prefacio, si lo hay, que quedará como `Preface.md`.
- Los apéndices deberán nombrarse como `Appendix_xx` donde `xx` sigue una numeración 1 a N.

Se puede ver un ejemplo de libro ya terminado en `/output/wikijs/es/book/Sir_James_Jeans/The_Universe_Around_Us`.

## Formato básico de un libro en Urantiapedia

El formato a usar es Markdown, que es extremadamente simple para dar formato frente a otras alternativas.

De todo el formato [Markdown](/es/help/markdown), que es bastante amplio, un colaborador que añada un libro «fuente» en Urantiapedia seguramente no deberá preocuparse más que de añadir estas cosas (la lista se detalla más abajo):
- Una cabecera en cada archivo.
- Inmediatamente debajo de la cabecera, una indicación del autor.
- Secciones dentro de cada capítulo.
- Párrafos separados correctamente.
- Negritas y cursivas.
- Citas.
- Marcas de salto de página.
- Imágenes.
- Referencias a imágenes.
- Notas al pie de página.
- Tablas.
- Fórmulas matemáticas o caracteres en notación científica.
- Enlaces de navegación.

Parecen muchas cosas pero la verdad es que Markdown es muy sencillo y se puede aprender en menos de una hora. En los siguientes apartados explicaremos un poco cada una de las cosas de la lista anterior.

### Cabecera de cada archivo

Este es un ejemplo de cabecera a añadir:

```
---
title: "The Universe Around Us — Chapter I — Exploring the Sky"
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: Cosmology, Astronomy
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---
```
Se debe copiar tal cual está aquí y reemplazar tan sólo los valores que van detrás de los dos puntos. El título es mejor que vayan entrecomillado todo él, y debe formarse del título del libro, y separado con un guión, del título del capítulo, incluyendo su número.

En la descripción no es necesario poner nada.

La fecha de creación y fecha actual deberían ser la fecha de creación del archivo. La hora no es relevante.

En _tags_ hay que poner etiquetas, separadas por comas, que se haya establecido para ese libro. Una lista completa de las etiquetas que se están usando en Urantiapedia está disponible aquí: [Tags en Urantiapedia](https://github.com/JanHerca/urantiapedia/blob/master/docs/tags.md?plain=1). Se pueden dejar en blanco porque es muy rápido rellenarlas luego todas a la vez en todos los archivos del libro. Algunas recomendaciones son estas:
- Las etiquetas deben ser **obligatoriamente en inglés**. La opción de etiquetas traducidas no está actualmente disponible en [Wiki.js](https://js.wiki/), el software que utiliza Urantiapedia.
- La etiqueta da igual si está en mayúsculas o minúsculas. `book` y `Book` es la misma etiqueta. De hecho luego todas se muestran en minúsculas en Urantiapedia: [Búsqueda por etiquetas](https://urantiapedia.org/t). En esta página también se muestran todas las etiquetas existentes.
- Al menos todos los archivos de un libro deberán llevar la etiqueta `book` que indica que es un contenido de la Biblioteca.
- Al menos deberá llevar una etiqueta del estante al que pertenece el libro: `Theology`, `Philosophy`, `Science`.
- Para libros de ciencia se puede añadir una etiqueta más con la disciplina. Algunas ya creadas son: `Anthropology`, `Archaeology`, `Astronomy`, `Biology`, `Chemistry`, `Chronology`, `Cosmology`, `Evolutionism`, `Genetics`, `Geography`, `Geology`, `History`, `Linguistics`, `Mathematics`, `Medicine`, `Paleontology`, `Pedagogy`, `Physics`, `Politics`, `Psychiatry`, `Psychology`, `Sociology`.
- Si alguna etiqueta no existe y se desea añadir, basta con añadirla en la cabecera de cualquier archivo y esa etiqueta será creada.

### Autor

Debajo de la cabecera, añadir siempre una línea de autor, como ésta:

```
<p class="v-card v-sheet theme--light grey lighten-3 px-2">Sir James Jeans, M. A., D. Sc., Sc. D., LL. D., F. R. S.</p>
```

Es corriente en el mundo anglosajón colocar detrás del nombre, separados por comas, los títulos académicos del autor.

### Marcas de secciones

Si un capítulo tiene secciones deben marcarse, como sigue:

```
## El Sistema Solar

### El Sol

### Los Planetas
```

Las secciones de primer nivel siempre tendrán la marca `##`, las de siguiente nivel `###` y así sucesivamente. No es muy conveniente usar más de cuatro niveles aunque el libro lo haga. Como se puede ver no usamos secciones con la marca `#` porque después crean unos títulos de sección demasiado grandes.

### Párrafos correctos

Un párrafo es una línea dentro del fichero Markdown y debe tener una línea en blanco delante y detrás. Debe garantizarse que eso ocurre en cada párrafo. En caso de que el texto sea poético, las versos de las estrofas pueden mantenerse juntas y sólo tener una línea en blanco delante y detrás de la estrofa.

### Negritas y cursivas

Se añaden como se indica:

```
Esto es un texto en un párrafo *con algo en cursiva*.

Esto es un **nuevo párrafo** que tiene algo con negrita.

También se puede usar guiones bajos para mostrar _cursiva_ o __negrita__.
```

Como puede verse un asterisco o guión significa cursiva, y dos significan negrita.

### Citas

Si el autor cita un texto, debe resaltarse esa cita como sigue:

```
Como ya dijo el gran Séneca:

> «No hay viento favorable para el que no sabe adónde va».
```

Simplemente añadir la marca `>` y separada con un espacio la cita.

Si la cita es extensa y tiene varios párrafos se puede poner así:

```
En varios lugares lo comenta Cicerón:

> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
> 
> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
```

Observa que ponemos un `> ` con un espacio detrás en cada línea de separación de párrafo.

### Marcas de salto de página

Puesto que al convertir cada capítulo de un libro en una página web perdemos la información de dónde se pasaba de una página a otra, es conveniente añadir una marca que lo indique, para de este modo poder tener una manera de referenciar páginas de cada libro, ya que estos libros que procesamos en esta tarea no son libros bíblicos, que tienen una divisón estándar en versículos.

La marca de página debe incluirse entre las palabras en las que se pasa de una página a otra como sigue:

```
Más allá de los asteroides vienen los cuatro grandes planetas Júpiter, Saturno, Urano y Neptuno, todos ellos mucho más grandes que la Tierra. Júpiter, el más grande, tiene, según Sampson, un diámetro de 88.640 millas [142.652 km], o <span id="p18">[<sup><small>p. 18</small></sup>]</span> más de once veces el diámetro de la tierra; mil cuatrocientos cuerpos del tamaño de la Tierra podrían estar empaquetados dentro de Júpiter y dejar espacio de sobra. Saturno, que le sigue en orden, solo es superado por Júpiter en tamaño, con un diámetro de unas 70.000 millas [112.654 km]. Estos dos son, con mucho, los más grandes de los planetas.
```

Se puede ver que la marca es: `<span id="p18">[<sup><small>p. 18</small></sup>]</span>`.

Como esta tarea puede ser tediosa una manera de hacerla más simple puede ser colocar una marca alternativa más corta, como `ppp18` (`ppp` es un texto que sabemos que nunca va a ocurrir), por seguir con el ejemplo anterior. Luego se pueden buscar esas marcas y reemplazarlas por las definitivas de un modo automático como hemos indicado en otro ejemplo más arriba. Es decir, así también valdría:

```
Más allá de los asteroides vienen los cuatro grandes planetas Júpiter, Saturno, Urano y Neptuno, todos ellos mucho más grandes que la Tierra. Júpiter, el más grande, tiene, según Sampson, un diámetro de 88.640 millas [142.652 km], o ppp18 más de once veces el diámetro de la tierra; mil cuatrocientos cuerpos del tamaño de la Tierra podrían estar empaquetados dentro de Júpiter y dejar espacio de sobra. Saturno, que le sigue en orden, solo es superado por Júpiter en tamaño, con un diámetro de unas 70.000 millas [112.654 km]. Estos dos son, con mucho, los más grandes de los planetas.
```

### Imágenes

Las imágenes deben incluirse así:

```
<figure id="Universe_plate_01" class="image urantiapedia">
<img src="/image/book/Sir_James_Jeans/The_Universe_Around_Us/plate_01.png">
<figcaption><em><b>Lámina I.</b> Carta de Franklin-Adams, La Vía Láctea en el vecindario de la Cruz del Sur</em></figcaption>
</figure>
```

Se puede copiar el ejemplo anterior donde se necesite una imagen y reemplazar tan sólo lo siguiente:
- Donde dice `id="Universe_plate_01"` debe ser un identificador único para la imagen. Se puede poner uno cualquiera con tal de que en el mismo fichero de cada capítulo no haya dos iguales.
- Donde dice `src="..."` debe ir una ruta hasta el fichero de imagen. La ruta debe empezar siempre con `/image/`, que es donde están todas las imágenes, y detrás debería ir una ruta idéntica a la que tenemos para el libro. Es decir, siguiendo el ejemplo, puesto que el libro se encuentra en `/es/book/Sir_James_Jeans/The_Universe_Around_Us`, las imágenes para ese libro deberían estar en `/image/book/Sir_James_Jeans/The_Universe_Around_Us`. El nombre de archivo de cada imagen puede ser cualquiera que sea breve, indicando siempre la extensión (`.png` o `.jpg`). Es recomendable que el nombre de archivo no tenga espacios en blanco ni caracteres especiales, apóstrofes o acentos.
- Si la imagen tiene un pie se debe poner dentro de la etiqueta `figcaption`.
- Si se quiere alinear la imagen a la izquierda, centro o derecha hay que reemplazar `class="image urantiapedia"` por `class="image urantiapedia image-style-align-left"`, `class="image urantiapedia image-style-align-center"` y `class="image urantiapedia image-style-align-right"`, respectivamente. Unos párrafos más abajo hay que añadir una línea con `<br style="clear:both;"/>` para que la alineación deje de afectar a la colocación del texto.

Puesto que esta tarea de incluir imágenes puede ser tediosa se puede usar un truco como los mencionados antes. Si ninguna imagen va a llevar un pie se podría poner algo como `fff18` (o `fffl18`, `fffc18`, `fffr18`) como manera de simplificar que ahí va una imagen con número 18 (e incluso alineada).

### Referencias a imágenes

Cuando el texto menciona una imagen es buena idea colocar un enlace interno a esa imagen. Por ejemplo, siguiendo con la imagen que se mostraba arriba, para incluir una referencia se pondría así:

```
... cada una de ellas demasiado tenue para ser vistas individualmente sin ayuda telescópica (ver [Lámina I](#Universe_plate_01)).

... como ya vimos en la [Lámina VIII](/es/book/Sir_James_Jeans/The_Universe_Around_Us/#Universe_plate_01) del capítulo anterior ...
```

La sintaxis `[Lámina I](#Universe_plate_01)` es la forma de añadir hipervínculos en Markdown. Entre corchetes se indica el texto que se muestra, y justo detrás entre paréntesis se indica la ruta web. Cuando la imagen está en el mismo capítulo, basta con poner `#` y luego el identificador. Si la imagen está en otro capítulo la sintaxis debería ser algo como `[Lámina I](/image/book/Sir_James_Jeans/The_Universe_Around_Us/3#Universe_plate_01)`. En este ejemplo apuntamos a la figura 1 que está en el capítulo 3.

### Notas al pie de página

Si el libro tiene notas al pie de página, o notas al final del capítulo, o notas globales que aparecen al final del libro, pero de las cuales se coloca una marca en el libro mediante un número o una indicación, esas marcas de anotación se convertirán en notas a pie de capítulo siempre, como sigue:

```
El hecho de que Altair y Saturno parezcan igualmente brillantes en el cielo solo puede significar que Altair está 80.000 veces más lejos que Saturno[^1].

. . . 

[^1]: Porque el brillo aparente de un objeto cae con el inverso del cuadrado de su distancia, y el cuadrado de 80.000 es aproximadamente igual a 6000 millones.
```

Las notas al pie se marcan siempre como un número correlativo empezando en 1, y se escriben como `[^1]`, `[^2]`, etc. El carácter `^` se escribe en el teclado usando `Mayús + [` y luego pulsando espacio.

La nota al pie tiene dos partes: una es la indicación, que se pone justo en el texto, y la otra es la nota en sí misma, que se coloca en la parte final, detrás de cualquier otra cosa, del archivo, cada nota con su marca, luego dos puntos, y luego el texto, y cada nota separada entre sí por una línea en blanco. Es conveniente poner una sección `## Notas` para las notas, que como se ha dicho debería ir siempre al final de todo, incluído de los enlaces de navegación.


### Tablas

La creación de tablas siempre es una tarea compleja en cualquier software de ofimática. Markdown facilita la creación de tablas pero aún así es una tarea compleja cuando la tabla tiene celdas anidadas, textos alineados, etc. 

Por ejemplo, resulta muy sencillo crear un tabla con dos columnas simplemente usando el carácter «barra vertical» («|»):

```
Edades | Tiempo
--- | ---:
Edad de la tierra | unos 2.000.000.000 años
Edad de la vida en la tierra | „ 300.000.000 „
Edad del hombre en la tierra | „ 300,000 „
Era de la ciencia astronómica | „ 3,000 „
Era de la astronomía telescópica | „ 300 „
```
Para alinear la columna a la izquierda, derecha o centro basta con usar los caracteres `---`, `---:` y `:---:`, respectivamente, como se ve en el ejemplo.

Para tablas que requieran múltiples líneas por celda se puede recurrir a colocar `<br>` como separador. Por ejemplo:

```
Longitudes de onda (cms.) | Naturaleza de la radiación | Efecto sobre el átomo | Temperatura (grados abs.) | Dónde se encuentra
--- | --- | --- | --- | ---
7500 x 10^-8^<br>a<br>3750 x 10^-8^ | Luz visible | Perturba los electrones más externos | 3.850°<br>a<br>7.700° | Atmósferas estelares
250 x 10^-8^<br>a<br>10^-8^ | rayos X | Perturba los electrones internos | 115.000°<br>a<br>29.000.000° | Interiores estelares
```

Si quieres saber más acerca de cómo formatear tablas en Markdown puedes consultarlo aquí: [Ayuda del formato Markdown](/es/help/markdown), en las secciones _Tablas_ y _Tablas avanzadas_. Se pueden crear tablas complejas de una forma muy simple con Markdown. Si finalmente la tabla no es posible crearla en Markdown por tener mucha complejidad, siempre se puede crear usando sintaxis HTML. Conviene recordar que Markdown es una manera alternativa de escribir HTML, pero admite también cualquier contenido HTML. Un buen tutorial sobre creación de tablas HTML lo tienes en Mozilla Docs: [HTML table basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics).

Conviene tener presente que las tablas se leen mal en dispositivos móviles cuando su ancho es mayor que el ancho de pantalla. Para evitar este inconveniente, cuando la tabla tiene más de dos columnas, es recomendable encerrar la tabla en un contenedor con desplazamiento lateral, como se muestra en este ejemplo:

```
<div class="urantiapedia-table-wrapper">

Longitudes de onda (cms.) | Naturaleza de la radiación | Efecto sobre el átomo | Temperatura (grados abs.) | Dónde se encuentra
--- | --- | --- | --- | ---
7500 x 10^-8^<br>a<br>3750 x 10^-8^ | Luz visible | Perturba los electrones más externos | 3.850°<br>a<br>7.700° | Atmósferas estelares
250 x 10^-8^<br>a<br>10^-8^ | rayos X | Perturba los electrones internos | 115.000°<br>a<br>29.000.000° | Interiores estelares

</div>
```

### Fórmulas matemáticas o caracteres en notación científica

La creación de fórmulas matemáticas o el uso de caracteres en notación científica siempre es una tarea compleja en cualquier software de ofimática. Markdown facilita su creación pero aún así es una tarea compleja dependiendo de las fórmulas o caracteres a usar porque en realidad la sintaxis utilizada es [LaTeX](https://es.wikipedia.org/wiki/LaTeX) a través de una extensión de Markdown llamada [Mathjax](https://www.mathjax.org/).

Si quieres saber más acerca de cómo formatear fórmulas y textos científicos en Markdown puedes consultarlo aquí: [Ayuda del formato Markdown](/es/help/markdown), en la sección _Expresiones matemáticas (Mathjax)_.

### Enlaces de navegación

Estos enlaces van en una sencilla tabla al principio y final de cada capítulo, y permiten pasar de un capítulo a otro con facilidad, o ir al índice. Deberán ser como en el ejemplo siguiente:

```
<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us/1">
            <span class="mdi mdi-arrow-left-drop-circle"></span><span class="pl-2">Capítulo I — Explorando el cielo</span>
          </a>
        </td>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us#índice">
            <span class="mdi mdi-book-open-variant"></span><span class="pl-2">Índice</span>
          </a>
        </td>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us/3">
            <span class="pr-2">Capítulo III — Explorando en el tiempo</span><span class="mdi mdi-arrow-right-drop-circle"></span>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</figure>
```

Como se ha dicho antes, lo último del archivo siempre debe ser la sección de notas, si es que la hay, incluso debajo de estos enlaces de navegación.

## Creación de un fichero de portada

Para la creación del fichero de portada sirve todo lo indicado en la sección [Obtener libros de todas las religiones](/es/help/github_religious_books_markdown) de este manual. Como ya se ha dicho, la portada será un archivo Markdown con el mismo nombre que la carpeta con los capítulos. Por ejemplo, la carpeta `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us` contiene los capítulos de un libro sobre astronomía, y el fichero `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us.md` es el de la portada de ese libro.

## Envío de solicitudes de cambios

Esto completa todas las cosas a tener en cuenta al añadir libros «fuente» a la Biblioteca Urantipedia. Una vez hechos estos cambios en el proyecto GitHub, hay que realizar una solicitud de cambios tal y como se detalla en los manuales para los usuarios [Administradores](/es/help/admin), [Editores Jefe](/es/help/github) o [Editores Asistentes](/es/help/github_assistant). 


## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Google Libros](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)
- [El proyecto Gutemberg](https://www.gutenberg.org/)
- [Ayuda del formato Markdown](/es/help/markdown)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_sourcebooks_catalog">Creación de un catálogo de libros «fuente»</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_articles_catalog">Catálogo de artículos</a></td>
      </tr>
    </tbody>
  </table>
</figure>