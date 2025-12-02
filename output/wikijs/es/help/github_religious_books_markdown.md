---
title: "Obtener libros de todas las religiones"
description: 
published: true
date: 2024-10-10T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2024-10-10T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_religious_books_catalog">Creación de un catálogo de libros de todas las religiones</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_sourcebooks_catalog">Creación de un catálogo de libros supuestamente usados por los reveladores</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Aquí se describe cómo obtener los libros de todas las religiones y cómo subirlos a la [Biblioteca Urantiapedia](/es/book). En la tarea previa se creó un catálogo de estos libros para que sirva de guía.

## Proceso

Esta tarea consiste en tratar de localizar en Internet una versión digital de cada libro, descargarla y procesarla hasta obtener un fichero o varios en formato [Markdown](/es/help/markdown).

Se pueden dar estas situaciones:
- El libro no se encuentra en ningún sitio web descargable como digital. Se puede evaluar adquirir un ejemplar en papel si está disponible o tratar de obtenerlo de una biblioteca pública para escanearlo.
- El libro se ha encontrado pero no está descargable, sólo se puede leer online. Normalmente se pueden realizar capturas de pantalla de cada página o hacer algun hacking de la web para descargar los escaneados. Estamos usando el [software de captura Greenshot](https://getgreenshot.org/) para este propósito pero se puede usar cualquier otro.
- El libro está descargable pero en forma de imágenes o en un PDF donde no hay texto. Será necesario usar un software de reconocimiento de caracteres (OCR). Ver más adelante.
- El libro está descargable en forma de PDF con texto, o mejor aún, en forma de archivo de texto o como página web. Este es el ideal de todos los casos. Si sólo está disponible como PDF, hay que convertirlo a texto (ver más adelante).

### Descarga de libros

Para obtener libros religiosos digitales algunas fuentes pueden ser:
- [Sacred texts](https://archive.sacred-texts.com)
- [Google Libros](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)
- El software [e-Sword](https://www.e-sword.net/)

Sea cual sea el caso en que nos encontremos, la tarea será anotar la dirección web de donde hemos logrado descargar el libro y descargarlo a nuestro PC. Luego sería conveniente enviar un correo a urantiapedia@gmail.com indicando las direcciones web de todos los libros que se hayan obtenido. Los *Administradores* están creando un almacén en la Nube de todos los archivos de gran tamaño que no tienen cabida en GitHub. Los libros originales, que a veces son PDF muy grandes, se están dejando ahí para evitar problemas si las webs desde donde se descargaron dejan de estar accesibles en un futuro.

Una vez el fichero del libro se ha convertido a un fichero de tipo texto, la tarea consistirá en procesar el libro hasta obtener un conjunto de ficheros en formato [Markdown](/es/help/markdown), un fichero por cada capítulo, prefacio o apéndice del libro.

Para cualquier modificación de carpetas y ficheros en GitHub deberán seguirse las instrucciones proporcionadas para los usuarios [Administradores](/es/help/admin), [Editores Jefe](/es/help/github) o [Editores Asistentes](/es/help/github_assistant).

### Derechos de autor

Los libros que pueden subirse a Urantiapedia han de ser libres de derechos de autor, que hayan entrado en el [dominio público](https://es.wikipedia.org/wiki/Dominio_p%C3%BAblico). Esto significa que ediciones modernas de la Biblia u otros libros religiosos no pueden ser usados. Lamentablemente, estas ediciones reciben mínimas actualizaciones por parte de los editores que suponen una adquisición de derechos, a pesar de que hablamos de textos milenarios o centenarios que jamás han tenido estas limitaciones legales en el pasado.

Esta situación deplorable no debe descuidarse incluso en un sitio web como Urantiapedia que carece de ánimo de lucro. No importa el tipo de proyecto que estamos haciendo. Un autor o editor de una obra puede sentir mermados sus derechos y sus compensaciones económicas y demandar a la dirección de Urantiapedia por un uso indebido de obras.

Los libros pasan a ser de dominio público dependiendo de la legalidad vigente en el país de origen del autor o de la edición. 

En Estados Unidos, todas las obras publicadas o difundidas por primera vez antes del 1 de enero de 1929 han perdido su protección de derechos de autor 95 años después, a partir del 1 de enero de 2024. De la misma manera, las obras publicadas en 1929 pasarán al dominio público a partir del 1 de enero de 2025, y este ciclo se repetirá hasta que las obras publicadas en 1977 pasen al dominio público el 1 de enero de 2073. Las obras de autoría corporativa seguirán cumpliendo el plazo de noventa y cinco años a partir de la fecha de 2073. Según la legislación actual sobre derechos de autor, a partir de 2049, 1978 y más allá, las obras de creadores que fallecieron siete décadas antes expirarán cada año. Por ejemplo, si un creador falleciera en 2002, los derechos de autor de sus obras durarían hasta finales de 2072 y pasarían al dominio público el 1 de enero de 2073. También son de dominio público las obras publicadas sin aviso de derechos de autor antes de 1977, así como las publicadas antes de marzo de 1989 si los derechos de autor no se registraron dentro de los cinco años siguientes a la fecha de publicación, y las publicadas antes de 1964 si los derechos de autor no se renovaron 28 años después.

En España es de 80 años si el autor falleció antes del 7 de diciembre de 1987 o de 70 años si el autor falleció después.

Por norma general, los países tienen entre 50 a 100 años sobre la explotación de los derechos de autor tras el fallecimiento de los mismos, algo que está marcado por el Convenio de Berna.

### Escanear libros con un OCR

A veces, un libro determinado no está escaneado o convertido a texto. Para hacerlo sigue estos pasos:

1. Si el libro está disponible en un sitio como archive.org, crea capturas de las páginas utilizando una herramienta como [Greenshot](https://getgreenshot.org/), que se integra con el botón `ImpScreen` para agilizar la creación de una serie de instantáneas.
2. Instala [TesseractOCR](https://github.com/UB-Mannheim/tesseract/wiki), gratuito y de código abierto.
3. Instala [Visual Studio Code](https://code.visualstudio.com/), añadiendo la extensión [Powershell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell).
4. Crea un par de carpetas, una con las capturas de pantalla y otra para los textos.
5. Abre VS Code en la raíz usando el menú _Terminal > New Terminal_ y, desde el **indicador de terminal**, crea un archivo que enumere todas las instantáneas: `dir *.* > ocr.ps1`
6. Edita el archivo ps1 con el editor PowerShell, de modo que todos los comandos sean más o menos así: `& 'c:\Program Files\Tesseract-OCR\tesseract' ".\snapshots\<filename>.png" ".\texts\<filename>.txt"`
7. Haz clic en el botón `Ejecutar todo` en el editor PowerShell. Esto crea un archivo TXT por cada archivo PNG escaneado.
8. Asegúrate de tener la extensión _Combinar archivos_ ([Combine Files](https://marketplace.visualstudio.com/items?itemName=BateleurIO.vscode-combine-scripts)) en VS Code.
9. Haz clic derecho en la carpeta Textos y usa _Combinar archivos_. Se crea un archivo temporal. Copia todo el contenido a un archivo TXT permanente.

Una forma más sencilla para los últimos pasos:

1. Crea un archivo (`convert.ps1`) con este contenido:

```
Set-Location 'C:\Users\Scan'
Get-ChildItem -Filter '*.png' | ForEach-Object {
& 'c:\Program Files\Tesseract-OCR\tesseract.exe' $_.Name ($_.BaseName)
}
```

2. Reemplaza `C:\Users\Scan` con la ruta real a los archivos escaneados.
3. Procede como se indica en el paso 8 anterior.

El resultado final será tener un archivo TXT con el texto de todos los archivos de capturas de pantalla. El siguiente paso será convertir ese archivo TXT a Markdown (ver más abajo).

### Conversión de PDF a Markdown

Cuando un libro digital ya se encuentra en formato PDF, tanto si es PDF con texto como sin él, existen herramientas que permiten hacer la conversión directa a Markdown. Algunas herramientas que estamos usando, por orden de interés, son éstas:

- [Mathpix](https://mathpix.com/). La herramienta más potente que hemos encontrado pues no sólo escanea texto e imágenes y las convierte muy bien a Markdown, sino que también escanea tablas y ecuaciones matemáticas, lo que lo convierte en una herramienta ideal para escanear libros científicos o académicos.
- [pdf-to-markdown](https://pdf2md.morethan.io/) ([GitHub](https://github.com/jzillmann/pdf-to-markdown)). Una API Javascript para conversión de PDFs. Hay una web de ejemplo.
- [pdf-tools](https://github.com/bsorrentino/pdf-tools). Inspirado en _pdf-to-markdown_.
- [Aspose DPF to MD](https://products.aspose.app/words/es/conversion/pdf-to-md). Es un producto que también se vende como [API](https://github.com/aspose-words/Aspose.Words-for-.NET). Su documentación está [aquí](https://reference.aspose.com/words/net/).
- [Un convertidor online](https://www.onlineocr.net/). Convierte no solo a texto sino también a MS Word.
- [Split PDF by file size](https://deftpdf.com/split-pdf-by-size). Herramienta para dividir un PDF en varios ficheros según tamaño. Algunas herramientas no son capaces de trabajar sobre PDF muy grandes.


## Estructura de un libro en Urantiapedia

Ya indicamos en [la tarea anterior](/es/help/github_religious_books_catalog) cómo se organizan los libros religiosos en estantes, grupos y subgrupos, y dónde se puede consultar el listado de todos los libros previstos.

Los libros deben guardarse en estas carpetas del proyecto GitHub:
- En el caso de que sea un libro de los estantes «Libros religiosos judeo-cristianos (Antiguo Testamento)»  o «Libros religiosos judeo-cristianos (Nuevo Testamento)» los libros deben guardarse en estas carpetas del proyecto GitHub: `/output/wikijs/en/Bible` para libros en inglés, `/output/wikijs/es/Bible` para libros en español, etc. Dentro de estas carpetas crearemos una por cada libro, donde irán los capítulos, y un fichero Markdown con el mismo nombre que la carpeta, donde irá la portada del libro. Por ejemplo, la carpeta `/output/wikijs/en/Bible/Genesis` contiene los 50 capítulos del Génesis, y el fichero `/output/wikijs/en/Bible/Genesis.md` es el de la portada del Génesis.
- En el caso de que sea un libro del resto de estantes de libros religiosos, los libros deberán guardarse en estas carpetas del proyecto GitHub: `/output/wikijs/en/book` para libros en inglés, `/output/wikijs/es/book` para libros en español, etc. Dentro de estas carpetas crearemos otra, si no existe, con el nombre de cada religión:
	- `Judaism`: para libros del estante «Libros religiosos del judaísmo».
	- `Christianism`: para libros del estante «Escritos religiosos cristianos».
	- `Islam`: para libros del estante «Libros religiosos islámicos».
	- `Buddhism`: para libros del estante «Escritos religiosos budistas».
	- `Hinduism`: para libros del estante «Libros religiosos del hinduismo».
	- `Taoism`: para libros del estante «Libros religiosos taoístas».
	- `Bahaism`: para libros del estante «Escritos religiosos del Bahaismo».
	- `Sikhism`: para libros del estante «Libros religiosos del sijismo».
	- `Shintoism`: para libros del estante «Libros religiosos sintoístas».
	- `Zoroastrianism`: para libros del estante «Libros religiosos del zoroastrismo».
	- `Jainism`: para libros del estante «Libros religiosos del jainismo».
	- Dentro de las carpetas anteriores haremos como con la Biblia, crearemos una carpeta por cada libro y un archivo Markdown para la portada. Por ejemplo, la carpeta `/output/wikijs/en/book/Islam/Quran` contiene las 114 suras o capítulos del Corán, y el archivo `/output/wikijs/en/book/Islam/Quran.md` la portada del libro del Corán.

Al respecto de los nombres de carpetas deben tenerse en cuenta estas indicaciones:
- Deben ser únicos dentro de cada carpeta y deben contener siempre tres caracteres o más.
- Si se prevee que el libro va a formar parte de una colección (volumen 1, 2, etc.), añadir un sufijo `_1`, `_2`, etc (hasta un máximo de 9 volúmenes), o `_01`, `_02` (si se preveen más de 9 volúmenes).
- El nombre de la carpeta no debe tener espacios en blanco o guiones, que deberán sustituirse por guiones bajos (`_`).
- El nombre usará el título del libro pero lo más abreviado posible.
- El nombre siempre será en inglés, de modo que si el libro original no es en inglés se traduce el título.
- Los caracteres raros como dos puntos, apóstrofes o exclamaciones se quitan.
- Por ejemplo, si el título de un libro es *Did Jesus exist?* la carpeta de ese libro se llamaría `Did_Jesus_exist`. Si el título fuera *Principios de Teología* (un libro cuyo original fuera en español), la carpeta sería `Principles_of_Theology`.
- Siempre se usarán los mismos nombres de carpetas para todos los idiomas. Por ejemplo, la carpeta para el Corán en inglés es `/output/wikijs/en/book/Islam/Quran` y para el español es `/output/wikijs/es/book/Islam/Quran` (NO ES ~~`/output/wikijs/es/book/Islam/Corán`~~). Es decir, lo único que cambia en la URL entre diferentes idiomas es el código de lenguaje (`en`, `es`, etc.). Esto facilita muchas operaciones con las rutas en Urantiapedia.

Cada capítulo será un fichero dentro de la carpeta del libro llamado `xx.md` donde `xx` será:
- Un número de 0 a N con el número del capítulo (sin el título, sólo el número). El cero está reservado a un prólogo o introducción en el que el propio autor no haya usado un número para numerarlo. Si no hay prólogo ni introducción alguna, el primer capítulo será `1.md`, el segundo será `2.md`, etc.
- `Index` para la página del índice, que quedará como `Index.md`. Esta página a veces puede omitirse si el índice no es muy largo e incluir el índice en la página de la portada.
- `Preface` para la página con el prefacio, si lo hay, que quedará como `Preface.md`.
- Los apéndices deberán nombrarse como `Appendix_xx` donde `xx` sigue una numeración 1 a N.

> En el caso de muchos libros bíblicos los ficheros con los capítulos están en formato HTML y no Markdown porque se han generado a partir de unos archivos en formato LaTeX que se encuentran dentro del proyecto en `/input/tex`. Este automatismo se debe a que muchos de esos libros se han obtenido por exportación desde el software [e-Sword](https://www.e-sword.net/), que genera un contenido parecido a LaTeX. Esta tarea está detallada en la sección del manual [Obtener la Biblia](/es/help/github_bible). Esta tarea ha quedado finalizada para los 28 idiomas soportados actualmente.
> Los libros extra-bíblicos que no se obtienen de e-Sword se añaden en formato Markdown siguiendo el proceso manual que se detalla en esta página.
{.is-warning}

## Formato básico de un libro religioso en Urantiapedia

El formato a usar es Markdown, que es extremadamente simple para dar formato frente a otras alternativas.

De todo el formato [Markdown](/es/help/markdown), que es bastante amplio, un colaborador que añada un libro religioso en Urantiapedia seguramente no deberá preocuparse más que de añadir estas cosas (la lista se detalla más abajo):
- Una cabecera en cada archivo.
- Secciones dentro de cada capítulo.
- Párrafos separados correctamente.
- Indicación y enlace de versículo delante de algunos párrafos.
- Negritas y cursivas.
- Citas.
- Marcas de salto de página en un libro que no use versículos.
- Imágenes.
- Referencias a imágenes.
- Notas al pie de página.
- Enlaces de navegación.

Parecen muchas cosas pero la verdad es que Markdown es muy sencillo y se puede aprender en menos de una hora. En los siguientes apartados explicaremos un poco cada una de las cosas de la lista anterior.

### Cabecera de cada archivo

Este es un ejemplo de cabecera a añadir:

```
---
title: "Qur'an — 1.  al-Fatihah: The Opening"
description: 
published: true
date: 2024-01-10T13:55:38.362Z
tags: book, Islam
editor: markdown
dateCreated: 2024-01-10T13:55:38.362Z
---
```
Se debe copiar tal cual está aquí y reemplazar tan sólo los valores que van detrás de los dos puntos. El título es mejor que vayan entrecomillado todo él, y debe formarse del título del libro, y separado con un guión, del título del capítulo, incluyendo su número.

En la descripción no es necesario poner nada.

La fecha de creación y fecha actual deberían ser la fecha de creación del archivo. La hora no es relevante.

En _tags_ hay que poner etiquetas, separadas por comas, que se haya establecido para ese libro. Una lista completa de las etiquetas que se están usando en Urantiapedia está disponible aquí: [Tags en Urantiapedia](https://github.com/JanHerca/urantiapedia/blob/master/docs/tags.md?plain=1). Se pueden dejar en blanco porque es muy rápido rellenarlas luego todas a la vez en todos los archivos del libro. Algunas recomendaciones son estas:
- Las etiquetas deben ser **obligatoriamente en inglés**. La opción de etiquetas traducidas no está actualmente disponible en [Wiki.js](https://js.wiki/), el software que utiliza Urantiapedia.
- La etiqueta da igual si está en mayúsculas o minúsculas. `book` y `Book` es la misma etiqueta. De hecho luego todas se muestran en minúsculas en Urantiapedia: [Búsqueda por etiquetas](https://urantiapedia.org/t). En esta página también se muestran todas las etiquetas existentes.
- Al menos todos los archivos de un libro deberán llevar la etiqueta `book` que indica que es un contenido de la Biblioteca.
- Al menos deberá llevar una etiqueta de la religión a la que pertenece el libro: `Judaism`, `Christianity`, `Islam`, `Buddhism`, `Hinduism`, `Taoism`, `Bahai`, `Sikhism`, `Shintoism`.
- Para libros bíblicos y extra-bíblicos hay muchas etiquetas creadas como `Bible`, `Apocrypha OT`, `Apocrypha NT`, `Deuterocanon OT`, `Deuterocanon NT` y otras.
- Si alguna etiqueta no existe y se desea añadir, basta con añadirla en la cabecera de cualquier archivo y esa etiqueta será creada.

### Marcas de secciones

Si un capítulo tiene secciones deben marcarse, como sigue:

```
## Los siete cielos

### El Primer Cielo

### El Segundo Cielo
```

Las secciones de primer nivel siempre tendrán la marca `##`, las de siguiente nivel `###` y así sucesivamente. No es muy conveniente usar más de cuatro niveles aunque el libro lo haga. Como se puede ver no usamos secciones con la marca `#` porque después crean unos títulos de sección demasiado grandes.

### Párrafos correctos

Un párrafo es una línea dentro del fichero Markdown y debe tener una línea en blanco delante y detrás. Debe garantizarse que eso ocurre en cada párrafo. En caso de que el texto sea poético, las versos de las estrofas pueden mantenerse juntas y sólo tener una línea en blanco delante y detrás de la estrofa.

### Indicación y enlace de versículo

En libros que dispongan de una numeración de versículo dentro de cada capítulo, debe incluirse ésta delante de cada párrafo.

Por ejemplo, en el primer capítulo del libro [«Evangelio armenio de la infancia»](/es/Bible/Armenian_Infancy_Gospel):

```
<span id="v1"><sup><small>1</small></sup></span>  En aquel tiempo, un hombre llamado Joaquín salió su casa, llevando consigo sus rebaños y sus pastores, y fue al desierto, donde fijó su tienda. ...
<span id="v2"><sup><small>2</small></sup></span>  Y, cuando se acabaron los cuarenta días de ayuno, advino el ángel del Señor, y, colocándose ante Joaquín, le dijo: Joaquín, el Señor ha oído tus plegarias, y ha atendido tus súplicas. ...
```

Como puede verse la indicación sigue siempre este patrón:

`<span id="vXXX"><sup><small>XXX</small></sup></span>` y dos espacios en blanco detrás para dar cierta separación. `XXX` puede ser un número, o una letra, o cualquier elemento breve que diferencie claramente cada versículo y sea un modo habitual usado para cada libro.

> Un truco muy útil para añadir los indicadores es colocar sólo el número delante de cada párrafo con dos espacios en blanco detrás, y luego hacer un reemplazo en todos los archivos usando expresiones regulares. Buscando esto `^(\d+)  ` y reemplazándolo con esto `<span id="v$1"><sup><small>$1</small></sup></span>  `.
{.is-info}


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

Si el libro no usa versículos necesitamos algún mecanismo para poder referirnos a una posición del texto dentro de cada capítulo. Una opción puede ser usar marcas de página, es decir, una indicación de dónde el libro original pasa de una página a otra.

La marca de página debe incluirse entre las palabras en las que se pasa de una página a otra como sigue:

```
Y el ángel del Señor, apareciendo a Eleazar, el Gran Sacerdote, en una visión semejante, le dijo: He aquí que Joaquín viene hacia ti con ofrendas. Recibe sus dones religiosamente y conforme a la ley, como conviene. Porque el Señor ha escuchado sus ruegos, y ha realizado su <span id="p18"><sup><small>[ p. 18 ]</small></sup></span> demanda. Y el Gran Sacerdote se despertó de su sueño, se levantó, y dio gracias al Altísimo, diciendo: Bendito sea el Señor, Dios de Israel, porque no desdeña a sus servidores que le imploran. Después, el ángel apareció por segunda vez a Ana, y le dijo: He aquí que tu marido llega. Levántate, ve a buscarlo, y recíbelo con alegría. Y Ana se levantó, revistió su atavío nupcial, y fue a buscar a su marido. Y, cuando lo divisó, se prosternó con júbilo ante él, y le echó al cuello los brazos.
```

Se puede ver que la marca es: `<span id="p18"><sup><small>[ p. 18 ]</small></sup></span>`.

Como esta tarea puede ser tediosa una manera de hacerla más simple puede ser colocar una marca alternativa más corta, como `ppp18` (`ppp` es un texto que sabemos que nunca va a ocurrir), por seguir con el ejemplo anterior. Luego se pueden buscar esas marcas y reemplazarlas por las definitivas de un modo automático como hemos indicado en otro ejemplo más arriba. Es decir, así también valdría:

```
Y el ángel del Señor, apareciendo a Eleazar, el Gran Sacerdote, en una visión semejante, le dijo: He aquí que Joaquín viene hacia ti con ofrendas. Recibe sus dones religiosamente y conforme a la ley, como conviene. Porque el Señor ha escuchado sus ruegos, y ha realizado su ppp18 demanda. Y el Gran Sacerdote se despertó de su sueño, se levantó, y dio gracias al Altísimo, diciendo: Bendito sea el Señor, Dios de Israel, porque no desdeña a sus servidores que le imploran. Después, el ángel apareció por segunda vez a Ana, y le dijo: He aquí que tu marido llega. Levántate, ve a buscarlo, y recíbelo con alegría. Y Ana se levantó, revistió su atavío nupcial, y fue a buscar a su marido. Y, cuando lo divisó, se prosternó con júbilo ante él, y le echó al cuello los brazos.
```

### Imágenes

Las imágenes deben incluirse así:

```
<figure id="Figure_01" class="image urantiapedia">
<img src="/image/book/Islam/Songs_of_Kabir/image_01.png">
<figcaption><em><b>Figura 1.</b> Dios Está Dentro de Nosotros</em></figcaption>
</figure>
```

Se puede copiar el ejemplo anterior donde se necesite una imagen y reemplazar tan sólo lo siguiente:
- Donde dice `id="Figure_01"` debe ser un identificador único para la imagen. Se puede poner uno cualquiera con tal de que en el mismo fichero de cada capítulo no haya dos iguales.
- Donde dice `src="..."` debe ir una ruta hasta el fichero de imagen. La ruta debe empezar siempre con `/image/`, que es donde están todas las imágenes, y detrás debería ir una ruta idéntica a la que tenemos para el libro. Es decir, siguiendo el ejemplo, puesto que el libro se encuentra en `/es/book/Islam/Songs_of_Kabir`, las imágenes para ese libro deberían estar en `/image/book/Islam/Songs_of_Kabir`. El nombre de archivo de cada imagen puede ser cualquiera que sea breve, indicando siempre la extensión (`.png` o `.jpg`). Es recomendable que el nombre de archivo no tenga espacios en blanco ni caracteres especiales, apóstrofes o acentos.
- Si la imagen tiene un pie se debe poner dentro de la etiqueta `figcaption`.
- Si se quiere alinear la imagen a la izquierda, centro o derecha hay que reemplazar `class="image urantiapedia"` por `class="image urantiapedia image-style-align-left"`, `class="image urantiapedia image-style-align-center"` y `class="image urantiapedia image-style-align-right"`, respectivamente. Unos párrafos más abajo hay que añadir una línea con `<br style="clear:both;"/>` para que la alineación deje de afectar a la colocación del texto.

Puesto que esta tarea de incluir imágenes puede ser tediosa se puede usar un truco como los mencionados antes. Si ninguna imagen va a llevar un pie se podría poner algo como `fff18` (o `fffl18`, `fffc18`, `fffr18`) como manera de simplificar que ahí va una imagen con número 18 (e incluso alineada).

### Referencias a imágenes

Cuando el texto menciona una imagen es buena idea colocar un enlace interno a esa imagen. Por ejemplo, siguiendo con la imagen que se mostraba arriba, para incluir una referencia se pondría así:

```
... es uno de los temas destacados de esta canción. Kabir restó importancia tanto a los rituales como a la austeridad (ver [Figura 1](#Figure_01)), enseñando que Dios no está confinado en mezquitas, templos o lugares de peregrinación.
```

La sintaxis `[Figura 1](#Figure_01)` es la forma de añadir hipervínculos en Markdown. Entre corchetes se indica el texto que se muestra, y justo detrás entre paréntesis se indica la ruta web. Cuando la imagen está en el mismo capítulo, basta con poner `#` y luego el identificador. Si la imagen está en otro capítulo la sintaxis debería ser algo como `[Figura 1](/image/book/Islam/Songs_of_Kabir/3#Figure_01)`. En este ejemplo apuntamos a la figura 1 que está en el capítulo 3.

### Notas al pie de página

Si el libro tiene notas al pie de página, o notas al final del capítulo, o notas globales que aparecen al final del libro, pero de las cuales se coloca una marca en el libro mediante un número o una indicación, esas marcas de anotación se convertirán en notas a pie de cada capítulo siempre, como sigue:

```
Lo más importante es que Dios está dentro de nosotros, y es ahí donde debemos mirar si buscamos conocerlo.[^1]

. . . 

## Notas

[^1]: Masterman, David. Kabir dice . Traducido por Tagore, Rabindranath. Three Pigeons Publishing. ISBN 979-8-6501-4828-9.
```

Las notas al pie se marcan siempre como un número correlativo empezando en 1, y se escriben como `[^1]`, `[^2]`, etc. El carácter `^` se escribe en el teclado usando `Mayús + [` y luego pulsando espacio.

La nota al pie tiene dos partes: una es la indicación, que se pone justo en el texto, y la otra es la nota en sí misma, que se coloca en la parte final, detrás de cualquier otra cosa, del archivo, cada nota con su marca, luego dos puntos, y luego el texto, y cada nota separada entre sí por una línea en blanco. Es conveniente poner una sección `## Notas` para las notas, que como se ha dicho debería ir siempre al final de todo, incluído de los enlaces de navegación.

### Enlaces de navegación

Estos enlaces van en una sencilla tabla al principio y final de cada capítulo, y permiten pasar de un capítulo a otro con facilidad, o ir al índice. Deberán ser como en el ejemplo siguiente:

```
<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir/1">
          <span class="mdi mdi-arrow-left-drop-circle"></span><span class="pl-2">Capítulo I — Dios está dentro de nosotros</span></a>
        </td>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir#índice">
          <span class="mdi mdi-book-open-variant"></span><span class="pl-2">Índice </span></a>
        </td>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir/3">
          <span class="pr-2">Capítulo III — La insuficiencia del lenguaje</span><span class="mdi mdi-arrow-right-drop-circle"></span></a>
        </td>
      </tr>
    </tbody>
  </table>
</figure>
```

Como se ha dicho antes, lo último del archivo siempre debe ser la sección de notas, si es que la hay, incluso debajo de estos enlaces de navegación.

## Creación de un fichero de portada

La portada como ya se ha dicho va en un archivo Markdown con el mismo nombre que la carpeta donde se incluyen los capítulos. Por ejemplo: la carpeta `/output/wikijs/en/Bible/Genesis` contiene los 50 capítulos del Génesis, y el fichero `/output/wikijs/en/Bible/Genesis.md` es el de la portada del Génesis. Del mismo modo, la carpeta `/output/wikijs/en/book/Islam/Quran` contiene las 114 suras o capítulos del Corán, y el archivo `/output/wikijs/en/book/Islam/Quran.md` la portada del libro del Corán.

La portada es un archivo Markdown que ha de contener estos elementos:
- Una cabecera en cada archivo.
- Portada del libro en formato SVG.
- (Opcional) Secciones dentro de la portada.
- (Opcional) Índice.
- Enlaces externos (de dónde se ha descargado).

La cabecera debe seguir la misma sintaxis que ya se ha indicado para los capítulos.

La portada deberá estar en formato SVG.

Esta es la portada del Génesis:

```
<div class="urantiapedia-book-front urantiapedia-book-bible">
<svg xmlns="http://www.w3.org/2000/svg"
	width="102.6mm" height="136.8mm"
	viewBox="0 0 102.6 136.8" version="1.1">
	<g transform="translate(-7,-5)">
		<rect width="9.6" height="136.8" x="7" y="5" />
		<rect width="96.9" height="136.8" x="17" y="5" />
		<text style="font-size:5px" x="61" y="22">LA BIBLIA</text>
		<text style="font-size:4px" x="61" y="125">Biblia Reina Valera, 1960</text>
		<text style="font-size:9px" x="61" y="60">Génesis</text>
	</g>
</svg>
</div>
```

Esta es la portada del Corán:

```
<div class="urantiapedia-book-front urantiapedia-book-islam">
<svg xmlns="http://www.w3.org/2000/svg"
	width="102.6mm" height="136.8mm"
	viewBox="0 0 102.6 136.8" version="1.1">
	<g transform="translate(-7,-5)">
		<rect width="9.6" height="136.8" x="7" y="5" />
		<rect width="96.9" height="136.8" x="17" y="5" />
		<text style="font-size:4px" x="61" y="130">M.M. Pickthall</text>
		<text style="font-size:3px" x="61" y="135">The Meaning of the Glorious Quran, 1938</text>
		<text style="font-size:9px" x="61" y="60">Qur'an</text>
	</g>
</svg>
</div>
```

Todas las portadas de todos los libros previstos ya están generadas porque se muestran en los índices de cada estante. Por tanto, basta con ir a el índice de [estantes de la Biblioteca Urantiapedia](/es/index/books), entrar en el estante deseado, y copiar de ahí la portada necesaria (el contenido dentro de la etiqueta `<svg>...</svg>`) copiándolo como en los ejemplos de arriba.

Si el libro tiene una descripción, o bien dedicatorias, u otro contenido propio de las páginas introductorias, se añadirá a este fichero de portada, utilizando secciones Markdown y formato según proceda.

Para textos que se desee centrados se puede usar esta sintaxis como en el siguiente ejemplo:

```
<p style="text-align:center;">
<b>THE MEANING OF THE GLORIOUS QURAN</b><br>
by Mohammed Marmaduke Pickthall<br>
Hyderabad-Deccan : Government Central Press [138]
</p>
```

Si el índice no es muy extenso, se puede incluir en una sección en la portada. Alternativamente, se puede colocar en un archivo propio llamado `Index.md` dentro de la carpeta con los capitulos, y luego incluir un enlace a él en la portada.

## Envío de solicitudes de cambios

Esto completa todas las cosas a tener en cuenta al añadir libros religiosos a la Biblioteca Urantipedia. Una vez hechos estos cambios en el proyecto GitHub, hay que realizar una solicitud de cambios tal y como se detalla en los manuales para los usuarios [Administradores](/es/help/admin), [Editores Jefe](/es/help/github) o [Editores Asistentes](/es/help/github_assistant). 

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_religious_books_catalog">Creación de un catálogo de libros de todas las religiones</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/github_sourcebooks_catalog">Creación de un catálogo de libros supuestamente usados por los reveladores</a></td>
      </tr>
    </tbody>
  </table>
</figure>