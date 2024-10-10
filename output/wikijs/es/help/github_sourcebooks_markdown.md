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

### Descarga de libros

Esta tarea consiste en tratar de localizar en Internet una versión digital de cada libro. Se pueden dar estas situaciones:
- El libro no se ha encontrado en ningún sitio web descargable como digital. Se puede evaluar adquirir un ejemplar en papel si está disponible o tratar de solicitar a alguien que lo obtenga de una biblioteca pública para escanearlo.
- El libro se ha encontrado pero no está descargable, sólo se puede leer online. Normalmente se pueden realizar capturas de pantalla de cada página o hacer algun hacking de la web para descargar los escaneados.
- El libro está descargable pero en forma de imágenes o en un PDF donde no hay texto. Será necesario usar un software de reconocimiento de caracteres (OCR).
- El libro está descargable en forma de PDF con texto o mejor aún en forma de archivo de texto o como página web. Este es el ideal de todos los casos.

Para obtener libros digitales algunas fuentes pueden ser:
- [Google Libros](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)

Se cual sea el caso en que nos encontremos, la tarea de un «Editor Asistente» será anotar la dirección web donde hemos logrado descargar el libro y descargarlo a nuestro PC. Ambas cosas luego se deben enviar a cualquiera de los Administradores de *Urantiapedia* o bien a urantiapedia@gmail.com. Los Administradores están creando en un almacenamiento en la Nube una colección de todos los archivos de gran tamaño que no tienen cabida en GitHub.

La tarea entonces pasa a manos de un «Editor Jefe», que procesará el libro hasta obtener un fichero Markdown único con todo él. Este fichero no es en modo alguno definitivo y el trabajo consistirá en limpiarlo y darle el formato adecuado para poder subirlo a *Urantiapedia*. Esto es lo que vamos a ver cómo hacer a continuación.

### Estructura de un libro en Urantiapedia

Si eres un «Editor Jefe» y vas a usar la plataforma GitHub, los libros deben guardarse en estas carpetas del proyecto GitHub: `/output/wikijs/en/book` para libros en inglés, `/output/wikijs/es/book` para libros en español, etc. Dentro de estas carpetas crearemos otra, si no existe, con el nombre del autor (con los espacios en blanco sustituidos por guiones bajos). Finalmente, dentro de la carpeta del autor, crearemos una carpeta para cada libro a la que pondremos un nombre único siguiendo este criterio:
  - El nombre usará el título del libro pero lo más abreviado posible.
  - El nombre siempre será en inglés, de modo que si el libro original no es en inglés se traduce el título.
  - Los espacios en blanco se reemplazan por guiones bajos.
  - Los caracteres raros como dos puntos o exclamaciones se quitan.
  - Por ejemplo, si el título de un libro es *Did Jesus exist?* la carpeta de ese libro se llamaría `Did_Jesus_exist`. Si el título fuera *Principios de Teología*, la carpeta sería `Principles_of_Theology`.

Si eres un «Editor Asistente» y no vas a usar la plataforma GitHub para el envío de ficheros, simplemente crea una carpeta cualquiera en tu PC. Luego al enviar tu trabajo a un Administrador él se encargará de crear las carpetas correctas.

Cada capítulo será un fichero dentro de la carpeta del libro llamado `xx.md` donde `xx` será:
- Un número de 0 a N con el número del capítulo (sin el título, sólo el número). El cero está reservado a un prólogo o introducción en el que el propio autor no haya usado un número para numerarlo. Si no hay prólogo ni introducción alguna, el primer capítulo será `1.md`, el segundo será `2.md`, etc.
- `Index` para la página del índice, que quedará como `Index.md`.
- `Preface` para la página con el prefacio, si lo hay, que quedará como `Preface.md`.

Se puede ver un ejemplo de libro ya terminado en `/output/wikijs/es/book/Sir_James_Jeans/The_Universe_Around_Us`.

### Formato básico de un libro en Urantiapedia

El formato a usar es Markdown, que es extremadamente simple para dar formato frente a otras alternativas.

El «Editor Asistente» debe revisar el texto y añadir lo siguiente (tal como se detalla más abajo):
- Una cabecera en cada archivo.
- Inmediatamente debajo de la cabecera, una indicación del autor.
- Marcas de secciones dentro de cada capítulo.
- Párrafos correctos.
- Negritas y cursivas.
- Citas.
- Marcas de salto de página.
- Imágenes.
- Referencias a imágenes.
- Notas al pie de página.
- Tablas.
- Fórmulas matemáticas o caracteres en notación científica.

Algunas de las modificaciones anteriores son complejas y un «Editor Asistente» podría saltarlas en una primera revisión. Simplemente puede anotar esas partes con alguna marca específica para que un «Editor Jefe» las revise posteriormente.

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

La fecha de creación y fecha actual poner la misma y que sea la fecha de creación del archivo. La hora no es relevante.

En tags hay que poner etiquetas, separadas por comas, que se haya establecido para ese libro. Normalmente los Editores Jefe deciden cuáles son las etiquetas más apropiadas, por lo que pueden dejarse en blanco para rellenarse luego todas a la vez en todos los archivos del libro. 

### Autor

Debajo de la cabecera, añadir siempre una línea de autor, como ésta:

```
Autor: **Sir James Jeans, M. A., D. Sc., Sc. D., LL. D., F. R. S.**
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

Un párrafo es una línea dentro del fichero Markdown y debe tener una línea en blanco delante y detrás. Debe garantizarse que eso ocurre en cada párrafo.

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

Como esta tarea puede ser tediosa una manera de hacerla más simple puede ser colocar una marca alternativa más corta, como `ppp18`, por seguir con el ejemplo anterior. Luego un «Editor Jefe» puede detectar esas marcas y reemplazarlas por las definitivas de un modo automático. Es decir, así también valdría:

```wrap
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
- Donde dice `id="Universe_plate_01"` es un identificador único para la imagen. Se puede poner uno cualquiera con tal de que en el mismo fichero de cada capítulo no haya dos iguales.
- Donde dice `src="..."` debe ir una ruta hasta el fichero de imagen. La ruta debe empezar siempre con `/image/`, que es donde están todas las imágenes, y detrás debería ir una ruta idéntica a la que tenemos para el libro. Es decir, siguiendo el ejemplo, puesto que el libro se encuentra en `/es/book/Sir_James_Jeans/The_Universe_Around_Us`, las imágenes para ese libro deberían estar en `/image/book/Sir_James_Jeans/The_Universe_Around_Us`. El nombre de archivo de cada imagen puede ser un cualquiera que sea breve, indicando siempre la extensión (`.png` o `.jpg`) del archivo. Si no se tiene el archivo, cosa que inicialmente va a ocurrir, se puede poner un nombre cualquiera, y luego el «Editor Jefe» ya decidirá el nombre y extensión definitivas.
- Si la imagen tiene un pie se debe poner dentro de la etiqueta `figcaption`.

Puesto que esta tarea de incluir la imagen puede ser tediosa el «Editor Asistente» puede incluir simplemente una marca que indique que ahí va una imagen que debe buscarse en el fichero PDF original, algo como `iiii` o cualquier repetición que nunca va a ocurrir en otra parte del texto.


### Referencias a imágenes

Cuando el texto menciona una imagen es buena idea colocar un enlace interno a esa imagen. Por ejemplo, siguiendo con la imagen que se mostraba arriba, para incluir una referencia se pondría así:

```wrap
... cada una de ellas demasiado tenue para ser vistas individualmente sin ayuda telescópica (ver [Lámina I](#Universe_plate_01)).

... como ya vimos en la [Lámina VIII](/es/book/Sir_James_Jeans/The_Universe_Around_Us/#Universe_plate_01) del capítulo anterior ...
```

La sintaxis `[Lámina I](#Universe_plate_01)` es la forma de añadir hipervínculos en Markdown. Entre corchetes se indica el texto que se muestra, y justo detrás entre paréntesis se indica la ruta web. Cuando la imagen está en el mismo capítulo, basta con poner `#` y luego el identificador. Si la imagen está en otro capítulo la ruta debe ser más larga.

Puesto que esta tarea de incluir las referencias a imágenes puede ser tediosa el «Editor Asistente» puede incluir simplemente una marca que indique que ahí va una referencia, algo como `rrrr`.

### Notas al pie de página

Si el libro tiene notas al pie de página, o notas al final del capítulo, o notas globales que aparecen al final del libro, pero de las cuales se coloca una marca en el libro mediante un número o una indicación, esas marcas de anotación se convertirán en notas a pie de página siempre, como sigue:

```wrap
El hecho de que Altair y Saturno parezcan igualmente brillantes en el cielo solo puede significar que Altair está 80.000 veces más lejos que Saturno[^1].

. . . 

[^1]: Porque el brillo aparente de un objeto cae con el inverso del cuadrado de su distancia, y el cuadrado de 80.000 es aproximadamente igual a 6000 millones.
```

Las notas al pie se marcan siempre como un número correlativo empezando en 1, y se escriben como `[^1]`, `[^2]`, etc. El carácter `^` se escribe en el teclado usando `Mayús + [` y luego pulsando espacio.

La nota al pie tiene dos partes: una es la indicación, que se pone justo en el texto, y la otra es la nota en sí misma, que se coloca en la parte final, detrás de cualquier otra cosa, del archivo, cada nota con su marca, luego dos puntos, y luego el texto, y cada nota separada entre sí por una línea en blanco.

Puesto que esta tarea de incluir las notas a pie de página puede ser tediosa el «Editor Asistente» puede incluir simplemente una marca que indique que ahí va una referencia, algo como `nnnn`, y luego copiar todas las notas del capítulo en la parte inferior.


### Tablas

La creación de tablas siempre es una tarea compleja en cualquier software de ofimática. Markdown facilita la creación de tablas pero aún así es una tarea compleja cuando la tabla tiene celdas anidadas, textos alineados, etc. 

El «Editor Asistente», para no perder demasiado tiempo aquí, puede simplemente marcar dónde hay tablas en el texto con algo como `tttt`.

Si quieres saber más acerca de cómo formatear tablas en Markdown puedes consultarlo aquí: [Ayuda del formato Markdown](/es/help/markdown).

### Fórmulas matemáticas o caracteres en notación científica

La creación de fórmulas matemáticas o el uso de caracteres en notación científica siempre es una tarea compleja en cualquier software de ofimática. Markdown facilita su creación pero aún así es una tarea compleja dependiendo de las fórmulas o caracteres a usar. 

El «Editor Asistente», para no perder demasiado tiempo aquí, puede simplemente marcar dónde hay fórmulas o notación científica en el texto con algo como `ffff`, de modo que un «Editor Jefe» puede ir a esos puntos a revisar.

Si quieres saber más acerca de cómo formatear fórmulas y textos científicos en Markdown puedes consultarlo aquí: [Ayuda del formato Markdown](/es/help/markdown).

## Envío de ficheros

Si eres un «Editor Jefe» utilizando GitHub puedes enviar los libros creados por ti tal como se detalla en el [Manual para Editores Jefe](/es/help/github); si eres un «Editor Asistente», puedes simplemente enviar los archivos Markdown al correo de cualquier Administrador o a urantiapedia@gmail.com.

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Google Libros](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)
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