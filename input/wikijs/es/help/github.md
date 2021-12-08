---
title: Urantiapedia - Manual para editores GitHub
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

## Acerca de la Urantiapedia

[Urantiapedia](https://urantiapedia.org) es una web colaborativa basada en [Wiki.js](https://js.wiki/) con el propósito de servir de centro unificado de difusión de todo el conocimiento relativo a *El Libro de Urantia*.

## Acerca de Blue Fields

[Blue Fields](https://blue-fields.netlify.app/) es una web que ha sido creada para unir y organizar a lectores de *El Libro de Urantia* que desean participar en proyectos inteligentes, propositados y altruistas en todo el mundo.

## Acerca de GitHub

El proyecto *Urantiapedia* en GitHub (https://github.com/JanHerca/urantiapedia) es un proyecto creado para servir de procedimiento rápido de creación inicial de la *Urantiapedia*. Contiene unos archivos en ciertos formatos y un software que ayudan a automatizar la creación de un contenido inicial.

## A quién va dirigido este manual

Este manual va dirigido a los usuarios denominados «editores GitHub», es decir, aquellos usuarios que cumplen los siguientes requisitos:
- son usuarios registrados con una cuenta en [Blue Fields](https://blue-fields.netlify.app/) y en [GitHub](https://github.com/).
- son usuarios que han sido autorizados como colaboradores del proyecto por el equipo que dirige el proyecto en la plataforma [Blue Fields](https://blue-fields.netlify.app/).
- son usuarios con unos mínimos conocimientos de manejo de GitHub.
- son usuarios con cierto conocimiento de *El Libro de Urantia* al menos en un idioma en los que está publicado.
- desean colaborar de forma desinteresada en la incorporación de información relativa a *El Libro de Urantia* en la *Urantiapedia*.

Los «editores GitHub» no necesitan estar registrados en la web *Urantiapedia* porque un «editor GitHub» sólo usará su cuenta de GitHub para enviar el resultado de su trabajo al proyecto *Urantiapedia* en GitHub. Todo el trabajo necesario se realizará únicamente a través de GitHub, y serán los «administradores» de la web los encargados de subir cambios a la web *Urantiapedia* para comprobar el resultado del trabajo.

## Procedimiento de trabajo en la fase de preparación

El proceso a seguir será el siguiente:
1. El «editor GitHub» crea un *fork* (una copia en su propia cuenta) del proyecto de la *Urantiapedia* en GitHub: https://github.com/JanHerca/urantiapedia.
2. El «editor GitHub» crea una copia local del proyecto en su PC. 
3. La copia local debe ser de la última versión del contenido de la *Urantiapedia* (la rama master). Esto se hace con una acción *pull* contra el proyecto, que descarga cualquier cambio a nuestra copia local.
4. El «editor GitHub» realiza los cambios que desee en la copia local a los archivos que se indican en este manual y del modo en como se indica.
5. El «editor GitHub» realiza un *pull request* subiendo sus cambios a GitHub.
6. Los *pull request* de los «editores GitHub» son revisados por los «administradores», que se encargan de hacer un *merge* con la rama principal (master) de todos aquellos cambios que estén correctos. Cualquier cambio que no esté correcto será rechazado y se notificará a los «editores GitHub» qué cambios deben corregir, normalmente por email o través de notificaciones en la propia plataforma GitHub.
7. Los cambios que estén correctos serán subidos a la web de la *Urantiapedia* por los «administradores» para poder comprobar y validar que quedan bien y para que cualquiera pueda examinar el resultado.
8. El proceso se repite cuantas veces sea necesario regresando a la tarea 3 hasta que toda la *Urantiapedia* tenga completada su fase de preparación.

## Crearse de una copia del proyecto Urantiapedia en GitHub

Para realizar la copia sigue estos pasos:
1. Entra en https://github.com 
2. Si ya tienes una cuenta, haz clic en *Sign in* y valídate.
3. Si no tienes una cuenta, créate una haciendo clic en *Sign up*. Introduce un nombre de usuario, una dirección de correo, y una contraseña. Una vez tengas una cuenta, entra en GitHub con ella.
4. La primera vez que entremos en GitHub nos pedirá que hagamos una verificación a través de nuestra cuenta de correo. Una vez verificados apareceremos en la página de inicio de GitHub.
5. Abre la página del proyecto *Urantiapedia*: https://github.com/JanHerca/urantiapedia 
6. Crea un *fork* del proyecto. Un *fork* no es sino una copia propia de un proyecto existente en nuestra cuenta, de modo que los cambios que hagamos a este proyecto no afecten al proyecto original. Para hacer el *fork* haz clic en el botón *Fork* que se encuentra en la esquina superior derecha de la página de GitHub.
7. En breves segundos se creará una copia del proyecto *Urantiapedia* dentro de tu cuenta de GitHub. Este proyecto es una copia nueva en la que puedes hacer los cambios que necesites, sin afectar al proyecto original.
8. Para descargar una copia de un proyecto existen varias maneras:
    * Descargar todo haciendo clic en el menú verde *Code* y luego seleccionando *Download ZIP*. Esto nos crea un fichero comprimido con todos los archivos del proyecto. Luego hay que descomprimir el archivo en cualquier ruta de nuestro PC para tenerlo listo. Ya puedes proceder con la instlación tal como se describe en la sección siguiente.
    * Usar el software GitHub Desktop (https://desktop.github.com/). Es más recomendable porque este software permite mostrarnos qué ficheros hemos cambiado, enviar nuestros cambios al proyecto original, y ver qué están cambiando otros participantes. En este caso, una vez GitHub Desktop está instalado, procede como sigue:
        - En el menu *File* selecciona *Clone a repository*.
        - En el cuadro de diálogo que se abre selecciona la pestaña *GitHub.com*, selecciona el proyecto *urantiapedia* que es tu *fork*, introduce una ruta para la copia local y haz click en *Clone*. Ya puedes proceder con la instalación tal como se describe en la sección siguiente.

Tanto de un modo como otro finalmente tendremos una carpeta con varias subcarpetas con el proyecto de la *Urantiapedia*.

## Configurar las *Urantiapedia Tools*

*Urantiapedia Tools* es una aplicación de escritorio desarrollada en JavaScript con [Electron](https://www.electronjs.org/). Para instalarla y ejecutarla sigue estos pasos:

- Se recomienda el uso de [VS Code](https://code.visualstudio.com/).
- Clona o crea un fork de [GitHub project](https://github.com/JanHerca/urantiapedia).
- Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Abre un terminal en VS Code y ejecuta `node -v` para comprobar que lo tienes instalado.
- Con el terminal abierto en la carpeta root del proyecto instala las dependencias: `npm install`. Espera a que todas se hayan instalado.
- El proyecto está configurado con un lanzador por defecto. Pulsa F5 para ejecutarlo o bien ejecuta en el terminal `npm start`.
- La aplicación se abre. Por defecto se abre una ventana Dev Tools para depurar. Puedes ignorarla si no estás desarrolando.

![](/image/uptools.png)

## Organización del proyecto *Urantiapedia* en GitHub

Las carpetas más destacadas que componen el proyecto de *Urantiapedia* en Github son éstas:
- **.vscode**: ficheros de configuración para Visual Studio Code, que es el software con el que se está desarrollando las *Urantiapedia Tools*.
- **app**: ficheros código fuente en JavaScript con la aplicación *Urantiapedia Tools*.
- **docs**: documentación del proyecto.
- **input**: carpeta principal que contiene los archivos de entrada (inputs) que sirven para generar las páginas de la *Urantiapedia* para un idioma. Estas son las únicas carpetas que los «editores GitHub» deben modificar del proyecto.
    * **html**: carpeta con archivos en formato HTML.
        * **book-xx**: *El Libro de Urantia* en sus diferentes traducciones en formato HTML original obtenido de la *Fundación Urantia* (`book-es`, `book-en`, etc.)
    * **json**: carpeta con archivos en formato JSON.
        * **book-xx**: *El Libro de Urantia* en sus diferentes traducciones en formato JSON, pero sin las notas al pie del *Paramony* (`book-es`, `book-en`, etc.)
        * **book-xx-footnotes**: *El Libro de Urantia* en sus diferentes traducciones en formato JSON, pero con las notas al pie del *Paramony* (`book-es-footnotes`, `book-en-footnotes`, etc.)
        * **footnotes-book-xx.json**: notas al pie del *Paramony* en formato JSON.
    * **mediawiki** [`DEPRECATED`]: carpeta con contenido antiguo en formato Wikitext para MediaWiki. La primera versión de la *Urantiapedia* se ha hecho con MediaWiki pero la actual está creada con *Wiki.js*.
        * **articles-xx**: carpetas en desuso con ejemplos de artículos en formato Wikitext.
        * **main-pages-xx**: carpetas en desuso con contenido de ayuda en formato Wikitext.
        * **modules**: módulos escritos en Lua, el lenguaje de scripting para crear templates en MediaWiki.
        * **sample**: contenido de ejemplo antiguo en formato Wikitext.
        * **templates**: templates para la *Urantipedia*, que son fragmentos reusables en formato MediaWiki.
    * **tex**: carpeta con los archivos en formato LaTeX.
        * **bible-xx**: *La Biblia* en cada una de sus traducciones en formato LaTeX (`bible-es`, `bible-en`, etc.)
    * **txt**: carpeta con los archivos en formato TXT.
        * **articles-xx**: algunos artículos de ejemplo en formato TXT.
        * **bible-refs-xx** [`DEPRECATED`]: antigua carpeta con el *Paramony*. Este contenido ya no es necesario.
        * **topic-index-xx**: *Índice de términos* traducido a cada idioma en formato TXT (`topic-index-es`, `topic-index-en`, etc.)
    * **wikijs**: carpeta con el contenido para *Wiki.js* que se ha creado manualmente.

Este listado incluye las carpetas más importantes. Cualquier otra carpeta puede ser ignorada por contener material que ya no se está usando en el proceso y será seguramente eliminada en un futuro.

Los códigos de idioma a usar en las carpetas deben seguir la norma ISO 639-1 con dos letras por cada idioma. https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes 

Las únicas carpetas de las cuales deben preocuparse los usuarios «editores GitHub» son las siguientes:
- `input/html`
- `input/json`
- `input/tex`
- `input/txt`

Conviene tener presente que en el idioma español existen actualmente tres traducciones. Las tres traducciones van a estar disponibles en la *Urantiapedia*. Por esa razón habrá estas carpetas:
- `book-es`, con la traducción denominada Europea, hecha en 2009; 
- `book-es-1993`, con la primera traducción al español hecha en 1993; 
- `book-es-2021`, con la nueva traducción hecha en 2021.

## Flujo de trabajo

Para cada idioma a incorporar en la *Urantiapedia* se partirá del siguiente input de entrada:
- Una traducción oficial de *El Libro de Urantia*, o el original para el inglés, en formato HTML. Este contenido se dejará en la carpeta `input/html/book-xx` del proyecto en GitHub, donde `xx` es el código de dos letras del idioma (`es` = español, `en` = inglés, etc.). En el caso del idioma español, puesto que hay varias traducciones, `book-es` contendrá la llamada edición europea, `book-es-1993` la traducción de 1993, y `book-es-2021` la traducción de 2021.
- Una traducción libre de derechos de autor de *La Biblia* que sea lo más estándar posible en el idioma en cuestión. El formato será LaTeX y los ficheros se dejarán en la carpeta `input/tex/bible-xx` del proyecto en GitHub, donde `xx` es el código del idioma.
- Una copia del *Paramony* en inglés. Este es un fichero con las referencias cruzadas entre la *La Biblia* y *El Libro de Urantia* que se encuentra en `input/json/footnotes-book-en.json`. Ha sido creado usando la relación de referencias cruzadas desarrollado por Duane L. Faw, convertido de su formato original TXT a un formato JSON que es más fácil de procesar. La copia debe renombrarse modificando las dos últimas letras por las del código del idioma. Por ejemplo, para francés deberá crearse un copia del archivo en inglés y llamar a esa copia como `input/json/footnotes-book-fr.json`.
- Una copia del *Índice de Términos* en idioma inglés. Este índice está compuesto por una colección de archivos que se encuentran en la carpeta `input/txt/topic-index-en`. Estos archivos TXT se han obtenido a partir del apéndice de la edición de *The Urantia Book* de la *Urantia Fellowship*, al que nos referiremos a partir de aquí como el *Índice de términos*. Este *Índice de Términos* ha sido convertido a un grupo de ficheros de tipo TXT, uno por cada letra del alfabeto, con los términos que empiezan por cada letra en inglés. La copia debe renombrarse modificando las dos últimas letras por las del código del idioma. Por ejemplo, para francés deberá crearse un copia de la carpeta en inglés y llamar a esa copia como `input/txt/topic-index-fr`.

En resumen, para el ejemplo del idioma francés el contenido a crear como input sería:

```
input
    html
        book-fr
            *.html
    json
        footnotes-book-fr.json
    tex
        bible-fr
            *.tex
    txt
        topic-index-fr
            *.txt
```
Para cualquier otro idioma se haría de manera similar. Es posible que parte de este contenido ya se encuentre disponible en el actual proyecto en GitHub. Conviene revisar lo existente antes de incorporar contenido nuevo.

Una vez tenemos el input en las carpetas correctas los pasos a dar son:
1. Traducción del *Paramony* del inglés al idioma de destino.
2. Traducción y revisión del *Índice de términos* del inglés al idioma de destino.
3. Obtención de una traducción de La Biblia en el idioma de destino.
4. Conversión de *El Libro de Urantia* de HTML a JSON sin notas al pie.
5. Adición de notas al pie a *El Libro de Urantia* en JSON.
6. Conversión del *Índice de términos* de TXT a Wikitext.
7. Conversión de *El Libro de Urantia* de JSON con notas al pie a Wikitext incluyendo referencias a los términos.
8. Conversión de *La Biblia* de LaTeX a Wikitext con notas al pie.
9. Subir cambios a [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup).

Los «editores GitHub» realizarán las tareas 1 a 3. Los «administradores» se encargan de las tareas 4 a 9. Pasamos a detallar cada tarea  de los «editores GitHub» en las secciones siguientes.

![](/image/formats.png)

## Traducción del *Paramony* del inglés al idioma de destino

Partimos de la versión en inglés del *Paramony* que se encuentra en `input/json/footnotes-book-en.json`. Hay que hacer una copia y cambiar el nombre por el del idioma de destino.

Estos ficheros contienen las notas al pie (con las referencias a *La Biblia*) que hay que incluir en cada documento de *El Libro de Urantia*.

Hay que traducir las secciones marcadas como textos (`texts`), así como actualizar las abreviaturas de los libros de *La Biblia* con una operación reemplazar.

La estructura del fichero JSON es una tabla de tres columnas. Para cada documento de *El Libro de Urantia* hay una sección en el archivo que contiene el índice del documento (`paperIndex`) y una subseccción (`footnotes`) que contiene tres columnas:
- la primera son los textos (`texts`) que aparecen en la nota al pie.
- la segunda son las referencias bíblicas (`bible_refs`) que corresponden a cada texto.
- la tercera son las referencias al párrafo y frase dentro del párrafo de *El Libro de Urantia* (`locations`). El patrón de estas referencias es `x:y.z#n`, donde `x:y.z` es la referencia del párrafo y `n` indica la frase dentro del párrafo en la que se encuentra la nota, empezando con la primera frase con punto seguido como la frase 0 y así sucesivamente.

Este modo de presentar los textos hace más simple copiar y pegarlos a un traductor como Google Translator para luego volver a pegar el resultado de la traducción.

Ejemplo de un fragmento:

```json
{
    "content": [
        {
            "paperIndex": 0,
            "footnotes": {
                "texts" : [
                    [
                        "Luz espiritual"
                    ],
                    [
                        "La Trinidad del Paraíso",
                        "La visión de Pablo sobre la Trinidad"
                    ]
                ],
                "bible_refs": [
                   [
                        "Esd 7:55; Is 9:2; Mt 4:16; Mt 5:14-16; Lc 1:79; Lc 2:32; Jn 1:4-9; Jn 3:19-21; Jn 8:12; Jn 9:5; Jn 12:46; 1 Jn 1:5; 1 Jn 2:8"
                    ],
                    [
                        "Mt 28:19; Hch 2:32-33; 2 Co 13:14; 1 Jn 5:7",
                        "1 Co 12:4-6"
                    ]
                ],
                "locations": [
                    "0:6.9#0",
                    "0:12.2#0"
                ]
            }
        }
    ]
}
```

> Hay que tener precaución de copiar adecuadamente las comillas tipográficas que puedan existir en los textos. Consulta aquí las comillas tipográficas válidas para cada idioma: [Quotation marks](/es/help/languages).

## Traducción y revisión del *Índice de términos* del inglés al idioma de destino

> IMPORTANTE: para ejecutar esta tarea actualmente hay un nuevo desarrollo en progreso en las *Urantiapedia Tools* para hacerla más fácil y menos propensa a errores. Echa un vitazo a la sección más abajo.

Partimos de la versión en inglés del *Índice de términos* que se encuentra en `input/txt/topic-index-en`. Hay que hacer una copia de esa carpeta y cambiar el nombre por el del idioma de destino.

La carpeta contien un archivo por cada letra del alfabeto (`a.txt`, `b.txt`, etc.) más un archivo `_.txt` que contiene las entradas que empiezan por un dígito numérico. La ordenación de referencia de los términos siempre es la del inglés, por lo que en cada archivo están contenidos los términos o tópicos cuya letra inicial en el término inglés coincide con esa letra. Por ejemplo, el término español «Espíritu Infinito» debe encontrarse en el archivo `i.txt` porque ese término en inglés empieza por I («Infinite Spirit»).

El formato es ligeramente parecido al formato YAML (https://en.wikipedia.org/wiki/YAML) pero simplificado al máximo para ser muy fácil de editar.

> IMPORTANTE: este archivo contiene tabulaciones y debe ser editado con un editor de texto que admita la visualización de tabuladores. Editores recomendados son: Visual Studio Code (https://code.visualstudio.com/), Notepad++ (https://notepad-plus-plus.org/), o Sublime Text (https://www.sublimetext.com/).

Cada archivo debe constar de:
- Una cabecera que explica su contenido en la que cada línea empieza por #. Estas líneas son ignoradas al procesarse el archivo.
- Una lista de términos. Cada término viene precedido de una línea en blanco y contiene varias líneas:
    - La primera línea es una breve tabla de descripción del término con los valores o celdas separados por | (pleca). Los valores son:
        - El nombre del término. Si detrás del nombre aparecen uno o varias denominaciones más separadas por (;) esas denominaciones son alias que serán buscados en el texto de *El Libro de Urantia* como una forma alternativa al nombre real del término. El primer nombre será siempre el que se utilizará como título de la página en la *Urantiapedia*. El resto de nombres separados por (;) serán los nombres o alias que a mayores del primero serán buscados dentro de *El Libro de Urantia* para crear enlaces a estos términos.
        - Referencias generales o globales a *El Libro de Urantia* de todo el término. Este valor puede estar en blanco. Estos enlaces se mostrarán en la página de la *Urantiapedia* como una breve sección superior que dirá «Véase» y detrás la lista de enlaces.
        - Enlaces a otros términos. Este valor puede estar en blanco. Representa uno o varios términos que están relacionados con el término actual. Aparecerán en la parte inferior de la página que se generará, en el listado de las sección «Enlaces».
        - Categoría del término. Este valor puede estar en blanco. Hay cinco categorías: Personas (`PERSON`), lugares (`PLACE`), órdenes de seres (`ORDER`), religiones (`RELIGION`), y razas (`RACE`). Estas categorías permiten trabajar sólo en una de ellas para permitir una mayor división del trabajo.
        - Indicación de estado. Los usuarios «editores GitHub» deberán poner `OK` cuando hayan terminado su trabajo de revisión de un término. Si el término está todavía pendiente de revisión, estará en blanco.
    - Las siguientes líneas, si existen, representan el contenido del término. Estas líneas también son unas breves tablas que pueden o no tener valores separados por | (pleca). Hay dos tipos de tablas:
        - Tabla de una sóla celda sin pleca: contendrá un texto, el texto de una línea de la página de la *Urantiapedia* y detrás, encerradas entre paréntesis, si existen, una o varias referencias a párrafos de *El Libro de Urantia*.
        - Tabla de dos celdas separadas por pleca (|): el primer dato es como en la tabla de una celda, y el segundo una lista de enlaces a otros términos, separados por punto y coma (;).

Las reglas de construcción de cada línea de los términos que no sea la primera son estas:
- No tiene por qué empezar en mayúscula ni terminar en punto. Se pondrá automáticamente en mayúsculas y se terminará automáticamente en punto al convertir el archivo a formato Wiki.js.
- El texto de cada línea puede ser una sola frase o varias. Si son varias y hay puntos y seguidos entonces la siguiente frase debe empezar en mayúscula porque esa frase no será corregida.
- El texto de cada línea no debe contener paréntesis porque esos caracteres están reservados para indicar referencias a *El Libro de Urantia*.
- Cada línea puede tener tabuladores al inicio. Cada tabulación indica que esas líneas estarán contenidas dentro de la inmediatamente por encima sin tabulación, que actuará como título de sección o subsección.

Ejemplo (fichero `a.txt`, línea 889):
```
gemelos Alfeo | (143:3.5) | Ver apóstoles de Jesús | PERSONA | OK
Santiago y Judas Alfeo, también llamados los gemelos Alfeo, fueron dos de los apóstoles de Jesús
su madre se llamaba María y su padre Alfeo (138:4.1) (189:4.4) (190:3.1)
Santiago o Jacobo Alfeo o Tadeo
    era un pescador y granjero de Jeresa, seleccionado por Santiago Zebedeo como nuevo apóstol (138:2.6)
    estaba casado y tenía tres hijos. Fue llamado también Tadeo (139:10.1,5)
```

En el extracto anterior podemos ver que es el principio del contenido relativo al término [Gemelos Alfeo](/es/topic/Alpheus_twins). Al inicio de la página resultante se añadirá una indicación que dirá «Véase» y detrás la referencia a [LU 143:3.5](/es/The_Urantia_Book/143#p3_5). La página tendrá añadida al final una sección de «Enlaces» entre las que se incluirá una a la página [apóstoles de Jesús](/es/topic/apostles_of_Jesus). El tipo de término es relativo a personas, en este caso a dos apóstoles de Jesús, y la indicación `OK` significa que este término ha sido revisado en español.

Detrás de la primera línea del término el extracto contiene cinco líneas del contenido de la página. La primera línea es una única celda sin pleca y no contiene referencias. La segunda línea es una única celda sin pleca con tres referencias a tres párrafos de *El Libro de Urantia*. La tercera línea es un título de sección porque la cuarta y quinta línea tienen tabulaciones delante.

El resultado al convertir este contenido se puede ver aquí: [Gemelos Alfeo](/es/topic/Alpheus_twins)

### Listas

Para crear listas en el archivo de términos hay que usar el carácter `*` delante de cada línea. Por ejemplo, así se ha usado en el término relativo a Alejandro Magno (fichero `a.txt`, línea 835):

```txt
Alejandro el Grande; Alejandro | | | PERSONA | OK
Hechos sobre Alejandro Magno mencionados en El Libro de Urantia
	* su campaña en el Punjab introdujo herencia aria en la India (79:4.3)
	* su mausoleo real de Alejandría fue visitado por Jesús (130:3.4)
	* Los samaritanos asistieron a Alejandro y eso irritó a los judíos contra ellos (143:4.2-3)
	* Alejandro difundió la civilización helenística en Oriente Próximo (195:1.7-10)
> https://es.wikipedia.org/wiki/Alejandro_Magno
```

### Enlaces externos

Para añadir enlaces externos a un término en el archivo de términos hay que usar el carácter `>` delante de cada línea. El ejemplo anterior muestra cómo se ha añadido un enlace a la web de la Wikipedia en español sobre Alejandro Magno. Se pueden añadir varios enlaces, cada uno en una línea, siempre que empiecen con el carácter `>` y detrás un espacio en blanco antes de la URL.

### Sincronización en todos los idiomas

Es importante mantener todos los ficheros en todos los idiomas en sincronía, de modo que las mismas líneas de los mismos términos ocupen la misma posición en todos los archivos. Cuando se añada un contenido a un archivo en un idioma, es importante garantizar que el mismo contenido está también en el mismo número de línea en el resto de idiomas. Este es el motivo del nuevo desarrollo en progreso con un editor específico para el índice de términos, porque mantener los ficheros en sincronía no es tarea sencilla y provoca errores. Each un vistazo a la sección siguiente.

### Revisión de los términos.

El contenido del *Indice de términos* se ha generado utilizando como partida un apéndice a la edición de *El Libro de Urantia* publicada en inglés por la *Urantia Fellowship*. Este apéndice es un índice breve de cada término por lo que el contenido es escueto y telegráfico. Por tanto, hay un trabajo extra que realizar para convertir este contenido es un texto más claro y explicativo. Este trabajo consiste en acudir a cada referencia de *El Libro de Urantia* y comprobar que el texto es suficientemente explicativo respecto a lo que comenta el libro, y en caso contrario, modificarlo.

## Editor del *Indice de términos* en las *Urantiapedia Tools*

TODO

![](/image/uptools_topic_editor.png)

## Obtención de una traducción de *La Biblia* en el idioma de destino

Una buena fuente para obtener traducciones de *La Biblia* que además estén libres de derechos de autor es utilizar el software [e-Sword](https://www.e-sword.net/), una aplicación gratuita que permite descargar traducciones de *La Biblia* en diferentes idiomas y luego exportar o copiar su contenido a otros archivos.

Cualquier otro modo de obtener una traducción de *La Biblia* libre de derechos de autor es válida siempre y cuando luego se copie el contenido a los archivos correctos. Estos archivos deben seguir estas reglas:
- los archivos se crearán en la carpeta `input/tex/bible-xx`, donde `xx` es el código del idioma de *La Biblia*.
- Cada fichero tendrá un nombre siguiendo este patrón: `xxx_nombre.tex` donde `xxx` será un número secuencial siempre con tres dígitos empezando en 1 (`001`, `002`, etc.) y `nombre` será el nombre del libro. Los nombres deberían estar en cada idioma aunque en su defecto podrían estar en inglés. Más abajo se ofrece un listado provisional de los libros a incluir, con su número. Conviene advertir que el orden de la numeración de los libros coloca primero los libros que son canónicos a todos credos antes que los libros que son canónicos sólo en algunos credos. Este orden no es esencial pero resulta útil para facilitar la identificación de cada libro simplemente por el número inicial, sobre todo cuando se usen los nombres de cada libro en cada idioma particular.
- El contenido de cada libro tiene que venir en formato LaTeX. El formato sólo usará unos pocos comandos LaTeX (`\begin{document}`, `\end{document}`, `\title`, `\chapter`, `\section` y `\par`) como se detalla en el siguiente fragmento del evangelio de Mateo:

```tex
\begin{document}
%\title{EL EVANGELIO SEGÚN SAN MATEO}
\title{Evangelio de Mateo}

\chapter{1}

\section*{Genealogía de Jesucristo}

\par 1 Libro de la genealogía de Jesucristo, hijo de David, hijo de Abraham.
. . .

\section*{Nacimiento de Jesucristo}

\par 18 El nacimiento de Jesucristo fue así: Estando desposada María su madre con José, antes que se juntasen, se halló que había concebido del Espíritu Santo.
. . .

\chapter{2}

\section*{La visita de los magos}

\par 1 Cuando Jesús nació en Belén de Judea en días del rey Herodes, vinieron del oriente a Jerusalén unos magos,
. . .

\end{document}
```

Como se puede ver en el extracto anterior las reglas a seguir son:
- Cada libro bíblico comenzará con una línea `\begin{document}` y terminará con una línea `\end{document}`.
- Se pueden colocar comentarios, que serán ignorados, usando `%` delante de cada línea.
- Cada libro tendrá su título dentro de un comando `\title{}` al principio del todo.
- Cada capítulo tendrá una marca de inicio con el comando `\chapter{}` y dentro el número del capítulo empezando en 1.
- Si hay secciones (unos subtítulos que a veces se ponen en algunas ediciones) se marcará su inicio con el comando `\section{}` y dentro el título de la sección.
- Después del inicio de una sección o de un inicio de capítulo si no hay secciones irán los versículos, cada uno empezando con el comando `\par`, luego separado el número de versículo empezando siempre en 1 y luego separado el contenido. Cada versículo será una línea.
- Para mejorar la legibilidiad se pueden poner líneas en blanco antes y después de los capítulos y secciones, que serán ignoradas.

### Listado de libros bíblicos

Núm. | Abr. | Título español
---|---|---
001 | Gn | Génesis
002 | Ex | Éxodo
003 | Lv | Levítico
004 | Nm | Números
005 | Dt | Deuteronomio
006 | Jos | Josué
007 | Jue | Jueces
008 | Rt | Ruth
009 | 1 Sam | I Samuel
010 | 2 Sam | II Samuel
011 | 1 Re | I Reyes
012 | 2 Re | II Reyes
013 | 1 Cr | I Crónicas
014 | 2 Cr | II Crónicas
015 | Esd | Esdras
016 | Neh | Nehemías
017 | Est | Ester
018 | 1 Mac | I Macabeos
019 | 2 Mac | II Macabeos
020 | Job | Job
021 | Sal | Salmos
022 | Pr | Proverbios
023 | Ec | Eclesiastés
024 | Cnt | Cantar de los Cantares
025 | Eclo | Eclesiástico
026 | Sab | Sabiduría
027 | Is | Isaías
028 | Jer | Jeremías
029 | Lm | Lamentaciones de Jeremías
030 | Bar | Baruc
031 | Ez | Ezequiel
032 | Dn | Daniel
033 | Os | Oseas
034 | Jl | Joel
035 | Am | Amós
036 | Abd | Abdías
037 | Jon | Jonás
038 | Miq | Miqueas
039 | Nah | Nahum
040 | Hab | Habacuc
041 | Sof | Sofonías
042 | Hag | Hageo
043 | Zac | Zacarías
044 | Mal | Malaquías
045 | Mt | Evangelio de Mateo'
046 | Mc | Evangelio de Marcos
047 | Lc | Evangelio de Lucas
048 | Jn | Evangelio de Juan
049 | Hch | Hechos de los apóstoles
050 | Ro | Epístola a los romanos
051 | 1 Co | Primera epístola a los corintios
052 | 2 Co | Segunda epístola a los corintios
053 | Gl | Epístola a los gálatas
054 | Ef | Epístola a los efesios
055 | Flp | Epístola a los filipenses
056 | Col | Epístola a los colosenses
057 | 1 Ts | Primera epístola a los tesalonicenses
058 | 2 Ts | Segunda epístola a los tesalonicenses'
059 | 1 Ti | Primera epístola a Timoteo
060 | 2 Ti | Segunda epístola a Timoteo
061 | Tit | Epístola a Tito
062 | Flm | Epístola a Filemón
063 | Heb | Epístola a los hebreos
064 | Stg | Epístola de Santiago
065 | 1 P | Primera epístola de Pedro
066 | 2 P | Segunda epístola de Pedro
067 | 1 Jn | Primera epístola de Juan
068 | 2 Jn | Segunda epístola de Juan
069 | 3 Jn | Tercera epístola de Juan
070 | Jud | Epístola de Judas
071 | Ap | Apocalipsis
072 | Bel | Historia de Bel y el Dragón
073 | Man | Oración de Manasés
074 | Tb | Tobit
075 | Jdt | Judith
076 | 1 Enoc | Libro de Enoc
077 | As. Mos. | Asunción de Moisés



