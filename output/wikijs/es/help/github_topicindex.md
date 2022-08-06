---
title: Traducción y revisión del Índice de términos
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table">
  <table style="border-bottom:0.2em solid #c8ccd1;border-left:1px solid #c8ccd1;border-right:1px solid #c8ccd1;border-top:1px solid #c8ccd1;table-layout: fixed; width: 100%;">
    <tbody>
      <tr>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/es/help/github_paramony">Traducción del Paramony</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/es/help">Índice</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/es/help/github_bible">Obtener la Biblia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Aquí se describen los pasos necesarios para traducir y revisar el *Índice de Términos* en cualquiera de los idiomas de la *Urantiapedia*. Esta es una tarea que la realizan los «Editores Jefe».

El *Índice de Términos* está compuesto por una colección de archivos TXT obtenidos a partir del apéndice de la edición de *The Urantia Book* de la *Urantia Fellowship* ([Topic Index](https://urantia-book.org/urantiabook/topical_index/index.htm)).

> IMPORTANTE: para ejecutar esta tarea actualmente hay un desarrollo en progreso en las *Urantiapedia Tools*, llamado *Topic Index Editor*, que hace las ediciones más fáciles y menos propensas a errores. Echa un vitazo a la sección más abajo.

Para crear un nuevo *Índice de Términos* en otro idioma empieza con la versión en inglés del *Índice de términos* que se encuentra en `input/txt/topic-index-en`. Haz una copia de esa carpeta y cambia el nombre por el del idioma de destino.

La carpeta contiene un archivo por cada letra del alfabeto (`a.txt`, `b.txt`, etc.) más un archivo `_.txt` que contiene las entradas que empiezan por un dígito numérico. La ordenación de referencia de los términos siempre es la del inglés, por lo que en cada archivo están contenidos los términos o tópicos cuya letra inicial en el término inglés coincide con esa letra. Por ejemplo, el término español «Espíritu Infinito» debe encontrarse en el archivo `i.txt` porque ese término en inglés empieza por I («Infinite Spirit»).

El formato es ligeramente parecido al formato YAML (https://en.wikipedia.org/wiki/YAML) pero simplificado al máximo para ser muy fácil de editar.

> IMPORTANTE: este archivo contiene tabulaciones y debe ser editado con un editor de texto que admita la visualización de tabuladores. Editores recomendados son: Visual Studio Code (https://code.visualstudio.com/), Notepad++ (https://notepad-plus-plus.org/), o Sublime Text (https://www.sublimetext.com/).

## Formato TXT del Índice de Términos

Aquí se muestra un extracto del fichero `a.txt`:

```
<__________________________________________________________________________________
<
<                     A
< Urantia Book Uversa Press Topical index converted to text file
< Each entry has a previous blank line
< Entry = Name | Refs | See also | Category | OK (= revised)
< An entry can have one or several sub-entries (= the lines after entry)
< A sub-entry can have sub-sub-entries with tabs and so on
< Help: https://urantiapedia.org/es/help/github_topicindex
<__________________________________________________________________________________

A-B-C el Primero;a-b-c el primero | (77:8.2) | | PERSON | OK
es el nombre del primer intermedio secundario del primer subgrupo de los ocho subgrupos que existen. Cada subgrupo son 248 hermanos y hermanas hijos de unos mismos padres (77:6.4)

suposiciones a priori | | doctrinas | | OK
la causación, el deber y la adoración contituyen las suposiciones a priori que hacen posible que el hombre actúe como una personalidad racional y consciente de sí misma (16:6.10)

Aarón (Viejo Testamento); Aarón | | hijas de Aarón | PERSON | OK
Aarón era el hermano mayor de Moisés y quien protagonizó el suceso del becerro de oro, un ídolo con el que los israelitas decidieron representar a Yahvé. 
Pedro utilizó esta historia en una de sus sermones (146:1.1)
> https://es.wikipedia.org/wiki/Aarón

...
```

Cada archivo consta de:
- Una cabecera que explica su contenido en la que cada línea empieza por `<`. Estas líneas son ignoradas al procesarse el archivo.
- Una lista de términos. Cada término viene precedido de una línea en blanco y contiene varias líneas:
    - La primera línea es una breve tabla de descripción del término con los valores o celdas separados por `|` (pleca). Los valores son:
        - El nombre del término. Si detrás del nombre aparecen uno o varias denominaciones más separadas por `;` esas denominaciones son alias que serán buscados en el texto de *El Libro de Urantia* como una forma alternativa al nombre real del término. El primer nombre será siempre el que se utilizará como título de la página en la *Urantiapedia*. El resto de nombres separados por `;` serán los nombres o alias que a mayores del primero serán buscados dentro de *El Libro de Urantia* para crear enlaces a estos términos.
        - Referencias generales o globales a *El Libro de Urantia* de todo el término. Este valor puede estar en blanco. Estos enlaces se mostrarán en la página de la *Urantiapedia* como una breve sección superior que dirá «Véase» y detrás la lista de enlaces.
        - Enlaces a otros términos. Este valor puede estar en blanco. Representa uno o varios términos que están relacionados con el término actual. Aparecerán en la parte inferior de la página que se generará, en el listado de las sección «Enlaces». Si existe más de un enlace, estarán separados por `;`. Es posible añadir enlaces a secciones específicas dentro de un término usando `:`. Por ejemplo: `bautismo:el bautismo de Jesús` es un enlace que apunta a la página del término `bautismo` y dentro de él a la sección relativa al bautismo de Jesús.
        - Categoría del término. Este valor puede estar en blanco. Hay cinco categorías: Personas (`PERSON`), lugares (`PLACE`), órdenes de seres (`ORDER`), religiones (`RELIGION`), y razas (`RACE`). Estas categorías permiten trabajar sólo en una de ellas para permitir una mayor división del trabajo y para generar índices.
        - Indicación de estado. Los usuarios «Editores Jefe» deberán poner `OK` cuando hayan terminado su trabajo de revisión de un término. Si el término está todavía pendiente de revisión, estará en blanco.
    - Las siguientes líneas, si existen, representan el contenido del término. Estas líneas también son unas breves tablas que pueden o no tener valores separados por `|` (pleca). Hay dos tipos de tablas:
        - Tabla de una sóla celda sin pleca: contendrá un texto, el texto de una línea de la página de la *Urantiapedia* y detrás, encerradas entre paréntesis, si existen, una o varias referencias a párrafos de *El Libro de Urantia*.
        - Tabla de dos celdas separadas por pleca (|): el primer dato es como en la tabla de una celda, y el segundo una lista de enlaces a otros términos, separados por punto y coma `;`.
    - Algunas líneas opcionales al final del término que empiecen con `>`. Estas serán enlaces a otras páginas web que aparecerán en una sección "Enlaces Externos".

Las reglas de construcción de cada línea de los términos que no sea la primera son estas:
- No tiene por qué empezar en mayúscula ni terminar en punto. Se pondrá automáticamente en mayúsculas y se terminará automáticamente en punto al convertir el archivo a formato Wiki.js.
- El texto de cada línea puede ser una sola frase o varias. Si son varias y hay puntos y seguidos entonces la siguiente frase debe empezar en mayúscula porque esa frase no será corregida.
- El texto de cada línea no debe contener paréntesis porque esos caracteres están reservados para indicar referencias a *El Libro de Urantia*.
- Cada línea puede tener tabuladores al inicio. Cada tabulación indica que esas líneas estarán contenidas dentro de la inmediatamente por encima sin tabulación, que actuará como título de sección o subsección.
- Las líneas pueden empezar con `*` o `#` o una mezcla de ellos para crear listas no numeradas, numeradas o mixtas. Consulta la sección más abajo.

Ejemplo de extracto de término (fichero `a.txt`):
```
apóstoles de Jesús | (138) (145:4.1) (150:4) (158:0.2) (158:2.5) (172:5) (173:5.6) (184:2.2) (193:3.2) | apostolado | PERSON | OK
Los apóstoles fue el grupo de doce seguidores con los que Jesús inició su predicación
sus nombres eran: 
* Andrés | Andrés
* Simón Pedro | Simón Pedro
* Santiago Zebedeo | Santiago Zebedeo
* Juan Zebedeo | Juan Zebedeo
* Felipe | Felipe (apóstol)
* Natanael | Natanael (apóstol)
* Mateo Leví | Mateo Leví
* Tomás Dídimo | Tomás Dídimo
* Santiago Alfeo | gemelos Alfeo
* Judas Alfeo
* Simón Celotes | Simón Celotes
* Judas Iscariote | Judas Iscariote
* Otros conocidos fueron Matías y Pablo aunque éste último no conoció a Jesús | Matías; Pablo
El Libro de Urantia da descripciones personales detalladas de cada uno (139)
la mayoría estuvieron casados, y algunos tuvieron varios hijos (138:9.3)
todos excepto los gemelos Alfeo estaban graduados en las escuelas de la sinagoga (139:0.3-4)
la mayoría eran pescadores rudos (140:8.20)
no eran todos iguales en cuanto a la escolarización (139:0.3-4)
muchos llevaban espadas (171:4.1) (172:0.3) (172:2.1) (172:5.2)
muchos murieron martirizados | mártires
organización
	su organización se detalla en El Libro de Urantia (138:10)
	Andrés era el jefe (139:1.2)
	Pedro, Santiago y Juan fueron los ayudantes personales de Jesús (138:10.3)
	Felipe fue el mayordomo apostólico (139:5.3)
	Natanael cuidaba de las familias de los apóstoles (139:6.7)
	el itinerario era gestionado por Tomás (139:8.5)
	Mateo fue un recaudador de fondos (139:7.2)
	Simón estaba a cargo de la diversión y la relajación (139:11.2)
	Los gemelos Alfeo eran los chicos de los recados; los que se encargaban de las multitudes (139:10.3)
	Judas Iscariote era tesorero (139:12.3)
	Matías elegido para tomar el lugar de Judas (192:0.2)
> https://es.wikipedia.org/wiki/Apóstol
```

En el extracto anterior se puede ver:
- Es el contenido relativo al término [apóstoles de Jesús](/es/topic/apostles_of_Jesus). Navega a esta página para ver el resultado de este texto cuando se lo convierte a *Wiki.js*.
- Al inicio de la página resultante se añade una indicación que dice «Véase» y detrás las referencias que se encuentra en la cabecera del término. 
- Fíjate que en la cabecera el término tiene un enlace a `apostolado`, y también las líneas con la lista de apóstoles tienen un `|` y enlaces a los términos de los apóstoles. Estos enlaces aparecen en la sección «Enlaces» al final de la página. 
- El tipo de término es relativo a personas (`PERSON`), en este caso a los apóstoles de Jesús.
- Fíjate que la indicación `OK` está presente lo que significa que este término ha sido revisado en español.
- Comprueba que para crear una lista no numerada las líneas deben empezar por `*`.
- Date cuenta que muchas líneas no empiezan en mayúsculas o terminan en punto. Eso se corrige al crear la página.
- El término crea una sección llamada `Organización` porque debajo de esa línea las siguientes empiezan con tabulación.
- Una línea como `sus nombres eran:` es una línea con una única celda y que no contiene referencias.
- Una línea como `Felipe fue el mayordomo apostólico (139:5.3)` es una línea con una única celda y que contiene una referencia. 
- Una línea como `muchos murieron martirizados | mártires` es una línea con dos celdas, en la que la segunda celda siempre son enlaces a otros términos. Para usar más términos deben estar separados por `;`, así: `muchos murieron martirizados | mártires; Simón Pedro`.
- Una línea como `Mateo fue un recaudador de fondos (139:7.2) | Mateo Leví` (que no está en el ejemplo) sería una línea con dos celdas en la que la primera tiene referencias y la segunda tiene enlaces.
- Fíjate que los enlaces externos de un término se añaden al final del término usando el carácter `>` delante de cada línea. El ejemplo anterior muestra cómo se ha añadido un enlace a la web de la Wikipedia en español sobre los apóstoles. Se pueden añadir varios enlaces, cada uno en una línea, siempre que empiecen con el carácter `>` y detrás un espacio en blanco antes de la URL.

> IMPORTANTE: en el texto de una línea los paréntesis `(` `)` deben evitarse porque están reservados para definir referencias a *El Libro de Urantia*. Si necesitas decir algo entre paréntesis, cambia el texto para que use `,` comas como separación.

## Nombres y alias

El primer nombre en el encabezado es el título del término en la página resultante. Es importante asegurarse de que este nombre aparezca en tantos párrafos referenciados como sea posible. A veces, un nombre aparece en *El libro de Urantia* con muchas expresiones diferentes. Por ejemplo, echa un vistazo al siguiente encabezado:

```
absoluta; fuerza cósmica; fuerza cósmica; potencia espacial; Potencia espacial; energía espacial; espacio-energía; fuerza madre del espacio; fuerza espacial; carga de fuerza del espacio; fuerza-carga universal del espacio; manta de fuerza; fuerza primordial; Fuerza primordial; fuerza espacial; fuerza del universo; carga espacial de fuerza universal; carga de fuerza del espacio; carga de fuerza; carga de energía; fuerza cósmica; fuerza primordial | | | | OK
```

Este encabezado trata sobre `absoluta`, una de las manifestaciones de la energía en el universo. Pero en *El Libro de Urantia* recibe muchas variaciones en el nombre. Todos ellas se han añadido después del nombre principal separándolas con `;`. Este trabajo debe realizarse y revisarse para todo el *Índice de temas*. Si el nombre aparece en el libro en mayúsculas y minúsculas, se deben agregar ambas variaciones en la lista de alias para garantizar que se generen los enlaces correctos.

El *Topic Index Editor* es una herramienta que ayuda mucho a verificar esto. Consulta la sección más abajo.


## Listas

Para crear listas no numeradas en el archivo de términos hay que usar el carácter `*` delante de cada línea. Para listas numeradas, `#`. Para listas mixtas, una combinación de ambos. Ejemplos:

```txt
Alejandro el Grande; Alejandro | | | PERSON | OK
Hechos sobre Alejandro Magno mencionados en El Libro de Urantia
	* su campaña en el Punjab introdujo herencia aria en la India (79:4.3)
	* su mausoleo real de Alejandría fue visitado por Jesús (130:3.4)
	* Los samaritanos asistieron a Alejandro y eso irritó a los judíos contra ellos (143:4.	2-3)
	* Alejandro difundió la civilización helenística en Oriente Próximo (195:1.7-10)
```

Comprueba el resultado aquí: [Alejandro el Grande](/es/topic/Alexander_the_Great)

```
Seres de origen dual; SERES DE ORIGEN DOBLE; tipo doble | | Hijos de Dios | ORDER | 
seres de origen directo o indirecto en dos de las Deidades del Paraíso (30:1.29)
La creación de Servitales de Havona es un patrón para (25:1.2)
en la clasificación del Paraíso (30:1.29-54)
órdenes
	* A. Las Órdenes Descendentes
	*# Los Hijos Creadores
	*# Los Hijos Magistrales
	*# Las Radiantes Estrellas Matutinas
	*# Los Padres Melquisedeks
	*# Los Melquisedeks
	*# Los Vorondadeks
	*# Los Lanonandeks
	*# Las Brillantes Estrellas Vespertinas
	*# Los Arcángeles
	*# Los Portadores de Vida
	*# Los Ayudantes Universales No Revelados (30:1.41)
	*# Los Hijos de Dios No Revelados (30:1.42)
	* B. Las Órdenes Estacionarias
	*# Los Abandontarios
	*# Los Susatias
	*# Los Univitatia
	*# Los Espirongas
	*# Los Seres de Origen Doble No Revelados (30:1.48)
	* C. Las Órdenes Ascendentes
	*# Los Mortales Fusionados con el Ajustador
	*# Los Mortales fusionados con el Hijo
	*# Los Mortales fusionados con el Espíritu
	*# Los Intermedios Trasladados | intermedios
	*# Los Ascendentes No Revelados (30:1.54)
```

Comprueba el resultado aquí: [Seres de origen dual](/es/topic/dual-origin_beings)

Las listas no requieren estar debajo de un encabezado de sección y tener tabuladores al principio. Hemos visto un ejemplo arriba con la página de los apóstoles. En ese caso, la lista se ha creado debajo de la línea anterior.

## Sincronización en todos los idiomas

Es importante mantener todos los ficheros en todos los idiomas en sincronía, de modo que las mismas líneas de los mismos términos ocupen la misma posición en todos los archivos. Cuando se añada un contenido a un archivo en un idioma, es importante garantizar que el mismo contenido está también en el mismo número de línea en el resto de idiomas. De otro modo, la conversión a Wiki.js fallará.

Es recomendable editar los archivos lado a lado en un editor que admita abrir varios archivos en paralalo, como VS Code. Una extensión de VS Code que puede interesar instalar es *Sync Scroll*, que permite hacer scroll por varios archivos a la vez de forma síncrona.

## Qué se puede modificar

Para los "Editores Jefe" no hay restricciones especiales en lo que pueden cambiar en los archivos del Índice de Términos. Deben seguir las reglas anteriores explicadas, pero pueden hacer cualquier cambio que sea necesario.

Para los "Editores Asistentes", ya que siguen un proceso más simple, deben cumplir con algunas restricciones. Los "Editores asistentes" NO DEBEN cambiar nada de lo siguiente:
- Términos que no están revisados, que no tienen la marca `OK`. Deben dejarse intactos. Tal vez todavía se necesita trabajar en ellos. Hasta que un término no está revisado por los "Editores Jefes", los "Editores asistentes" no deben trabajar en él.
- Las referencias globales o la categoría en la primera línea del término.
- Las referencias a *El Libro de Urantia* o referencias a otros términos que aparecen en las líneas en los términos.
- El orden de las líneas.

Si un "Editor Asistente" encuentra algún error en el contenido anterior, se deben tomar notas en otro lugar para enviarlas aparte de los archivos de los términos.

El único contenido que los "Editores asistentes" deben cambiar es este:
- El nombre o alias que se encuentran en la primera línea de los términos si el idioma de trabajo no es inglés y español. Los nombres en inglés y español ya están revisados ​​en estos idiomas.
- El texto dentro de cada línea de los términos.
- Las URL de las páginas de la Wikipedia.

Al usar Visual Studio Code para editar el Índice de temas, los "Editores Asistentes" deben centrarse en dos tipos de tareas, según el idioma:
- Para inglés y español, basta con revisar el contenido de los textos.
- Para otros idiomas, traducir los textos. El "Editor" debe crear una copia de un Índice de términos existente en cualquier otro idioma, preferiblemente inglés, y ahora traducir los textos lo más rápido posible con la ayuda de herramientas de traducción.

## El *Topic Index Editor*

El *Topic Index Editor* es una herramienta que está en desarrollo pero en su estado actual ayuda en algunas tareas de revisión y edición del *Índice de Términos*. Como este software necesita instalarse y complica la configuración no entra dentro del uso de los "Editores Asistentes" sino del uso de los "Editores Jefes". Consulta [Configurar el proyecto de GitHub](/es/help/github_setting).

Para acceder:
1. Abre las *Urantiapedia Tools* presionando F5 en VS Code con el proyecto abierto.
2. Se abren dos ventanas. Ignore la instancia de Dev Tools. Está ahí para depuración.
3. Selecciona *Edit Topic Index* en el panel lateral.

![](/image/uptools_topic_editor.png)

El *Topic Index Editor* tiene cuatro áreas principales:
- en el lado izquierdo una lista de términos.
- en la parte superior algunos selectores para configurar los idiomas deseados.
- en el centro una lista con el contenido de los términos, y también con los mensajes de error, si los hay.
- a la derecha, el contenido del *Libro de Urantia*, con los párrafos a los que hace referencia el término seleccionado.

En un futuro, el *Topic Index Editor* permitirá editar términos directamente desde la aplicación, pero actualmente la funcionalidad que brinda es la siguiente:
- Cargar la lista de términos para un idioma dado.
- Filtra términos por categoría, letra inicial, si están revisados ​​o no, y si tienen errores o no.
- Muestra el contenido de un término.
- Muestra los párrafos del *Libro de Urantia* a los que se hace referencia en una línea determinada de un término.
- Resalta el nombre (o alias) en *El libro de Urantia* para comprobar si se encuentra el nombre.
- Resalta la mejor frase de *El libro de Urantia* que coincida con la línea seleccionada en el término y permite copiarla.

Para utilizar el *Topic Index Editor*, sigue estas instrucciones:
1. En el selector superior *Idioma principal (para modificar)* selecciona el idioma que desees. Deja el selector de idioma secundario como inglés. Los términos se cargan después de unos segundos.
2. En el selector superior *Topic letters* selecciona la letra en la que estás trabajando. Los términos se filtran por esa letra mostrando solo los que comienzan con esa letra en inglés.
3. Selecciona un término de la lista. La lista de líneas, si las hay, se muestran en el área de contenido del término. Las líneas del término se enumeran en los dos idiomas seleccionados en los selectores superiores para que ambos idiomas puedan compararse.
4. Selecciona una línea en el término. La lista de párrafos a los que hace referencia la línea se muestra en el área de contenido de *El libro de Urantia*.

Una de las funcionalidades útiles del *Topic Index Editor* es que muestra los errores encontrados en los términos. Por ejemplo, en la imagen debajo se muestra cómo se ha encontrado un enlace a un término que no existe. Ahora podemos ir a VS Code y verificar el archivo con el error y corregirlo.

![](/image/uptools_topic_editor_2.png)

Otra funcionalidad útil es que el nombre del término se resalta en el texto del *Libro de Urantia*. Por ejemplo, en la imagen abajo, con el término `brotherhood of man` en inglés y `hermandad de los hombres` en español, se ha encontrado el nombre en el texto en inglés pero no en español. Puedes comprobar y ver que en español el *Libro de Urantia* dice `fraternidad de los hombres` en lugar de `hermandad de los hombres`, que significa lo mismo. Entonces, para solucionar esto, debemos agregar `fraternidad de los hombres` como alias en el término.

Otra funcionalidad útil es que la línea breve que está seleccionada en el ejemplo debajo, que dice `civilization encompased by love` en inglés y `civilización rodeada por el amor` en español, se ha encontrado en el párrafo del *Libro de Urantia* al que se hace referencia para la línea del término. La oración del párrafo que mejor coincide con la línea se resalta en negrita y aparece un botón Copiar en la parte inferior. Puedes usar ese botón para copiar la oración al portapapeles y pegarla en VS Code, mejorando el texto del término con un texto más explicativo.

![](/image/uptools_topic_editor_3.png)

<br>

<figure class="table">
  <table style="border-bottom:0.2em solid #c8ccd1;border-left:1px solid #c8ccd1;border-right:1px solid #c8ccd1;border-top:1px solid #c8ccd1;table-layout: fixed; width: 100%;">
    <tbody>
      <tr>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/es/help/github_paramony">Traducción del Paramony</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/es/help">Índice</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/es/help/github_bible">Obtener la Biblia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)