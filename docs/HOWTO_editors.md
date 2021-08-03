# Urantiapedia - Manual para «editores web»

## Acerca de la Urantiapedia

*Urantiapedia* (https://urantiapedia.site) es una web colaborativa basada en [*MediaWiki*](https://www.mediawiki.org/wiki/MediaWiki) con el propósito de servir de centro unificado de difusión de todo el conocimiento relativo a *El Libro de Urantia*.

---

## A quién va dirigido este manual

Este manual va dirigido a los usuarios denominados «editores web», es decir, aquellos usuarios que cumplen los siguientes requisitos:
- son usuarios registrados en la página web de la *Urantiapedia*. Este registro sólo se podrá realizar durante la fase de apertura de la web al público general.
- son usuarios con cierto conocimiento de *El Libro de Urantia* al menos en un idioma en los que está publicado.
- desean colaborar de forma desinteresada en la incorporación de información relativa a *El Libro de Urantia* en la *Urantiapedia*.
- desean respetar las políticas de privacidad y buenas prácticas que rigen en el uso de la web de la *Urantiapedia*.

---

## Fases del proyecto Urantiapedia

La *Urantiapedia* se va a crear en dos fase para cada uno de los idiomas que se incorporen:
1. **Fase de preparación**: en esta fase la creación de contenido se realiza usando el proyecto de la *Urantiapedia* en GitHub. En esta fase la creación de usuarios estará bloqueada en la web *Urantiapedia* y los únicos usuarios capaces de realizar cambios en ella serán los usuarios «administradores». En esta fase los usuarios, denominados «editores GitHub», introducen cambios únicamente en el proyecto existente en GitHub.
2. **Fase pública**: la página *Urantiapedia* se abre al público, de modo que cualquier usuario que lo desee y cumpla unos requisitos de seguridad, podrá crear su propia cuenta y añadir o modificar contenido desde la web. Estos usuarios, denominados «editores web», deberán cumplir ciertas políticas de privacidad y buenas prácticas que regirán el uso de la web *Urantiapedia*. Junto a los usuarios «administradores» existirán usuarios llamados «revisores» que velarán por el correcto uso de la web y podrán vetar usuarios que no cumplan las normas.

---

## Componentes de la Urantiapedia

La *Urantiapedia* está basada en el software *MediaWiki*, que es el que hace que funcionen la *Wikipedia*, *Wikisource* y otras páginas similares. Este software es uno de los más extendidos en el mundo para la creación de wikis, es decir, de páginas web colaborativas que son mantenidas por una amplia comunidad de usuarios en lugar de ser actualizadas por grupos reducidos de personas como en el caso de los blogs.

Puesto que está basada en *MediaWiki* (https://www.mediawiki.org/wiki/MediaWiki), el uso de la *Urantiapedia* por parte de los «editores web» va a requirir obtener algunos conocimientos básicos sobre cómo usar este software. No conviene asustarse ante esto porque el manejo de *MediaWiki* es muy sencillo y ha sido pensado para hacer que los usuarios puedan editar contenido sin conocer los detalles internos de su funcionamiento.


## Contenido que podrán crear los «editores web»

Durante la fase de apertura al público de Urantiapedia se podrán incorporar otros contenidos que no se hayan podido incluir durante la fase de preparación, así como modificar contenido existente. Esto incluye:
- **Libros religiosos extrabíblicos** que aparezcan como referencias directas o indirectas de *El Libro de Urantia*, cada libro convertido en una página principal y varias páginas por cada capítulo, todas con enlaces a *El Libro de Urantia* y de éste a esas páginas.
- **Libros científicos y de humanidades** que se hayan comprobado poder haber sido material usado por los reveladores para componer *El Libro de Urantia*, cada libro convertido en una página principal y varias páginas por cada capítulo, todas con enlaces a *El Libro de Urantia* y de éste a esas páginas.
- **Índices**: de personas, de seres, de lugares, bíblicos, de referencias, de citas, cronologías, etc. Cada índice será una página y habrá una página principal de índices que listará los existentes. La creación de algunos de estos índices podrá automatizarse usando las *Urantiapedia Tools* por parte de los usuarios «administradores». Un ejemplo de un índice es éste: https://urantiapedia.site/index.php/Índice:Urantiapedia 
- **Artículos y estudios** enlazados con el libro y las fuentes, con las referencias usadas apuntando a las páginas de la *Urantiapedia*. Aquí habrá que hacer un encomiable esfuerzo por modicar los artículos que se incorporen para que usen correctamente las referencias a *El Libro de Urantia* y no formas personales de referenciarlo. Por ejemplo, algunos autores escriben las referencias como `1002:3`, indicando el número de página de la edición inglesa estándar, o escriben cosas como `Doc. 109 sec. 2`. Todas estas formas de referenciar tanto *El Libro de Urantia* como *La Biblia* o cualquier otro libro disponible en la *Urantiapedia* estarán estandarizadas y armonizadas para que todo el contenido esté correctamente enlazado. Un ejemplo de un artículo correctamente incorporado a la *Urantiapedia* se puede ver aquí: https://urantiapedia.site/index.php?title=Artículo:Cómo_es_de_grande_Orvonton 
- **Arte urantiano, esquemas, fotos, animaciones, mapas, etc.** Este contenido es lo que se conoce como *recursos*. Puede subirse este contenido utilizando la herramienta *Subir archivo* disponible en el panel *Herramientas wiki* en el lado izquierdo de la web, para usuarios registrados. Sin embargo, debido a potenciales problemas de espacio, estos recursos estarán limitados a un tamaño máximo por archivo y las animaciones y videos que ocupen mucho se incorporarán como enlaces a plataformas de video.

---

## Manejo básico de la Urantiapedia

A la *Urantiapedia* se accede en esta web: https://urantiapedia.site

Al entrar en la web aparece la página de bienvenida. Esta página contiene varias partes que son constantes.
- Desde un PC tenemos:
    - Cabecera, que es fija y contiene, de izquierda a derecha: el nombre *Urantiapedia*, que es un enlace a la página de bienvenida, la casilla de búsqueda, y el menú de usuario.
    - Panel lateral izquierdo con el logo de la *Urantiapedia*, el menú de *navegación* y el menú llamado *Herramientas wiki*.
    - Panel lateral derecho con varias opciones comunes.
    - Panel central donde aparece el contenido de la página abierta. Cualquier página de la *Urantiapedia* siempre tiene un título y luego varios botones:
        - Página Principal: que muestra la página tal cual es.
        - Discusión: que muestra la página de discusiones asociada a cada página. Si la página aún no tiene creado ningún contenido en la sección de discusión, el botón aparecerá en rojo.
        - Editar: es un botón a la derecha que pone la página en edición, pasando al editor de contenido.
        - Historial: permite ver el historial de cambios hechos en la página, con el autor que hizo cada cambio y la fecha en que lo hizo.
    -Pie de página, con la fecha de última actualización de cada página y enlaces de utilidad.
- Desde un móvil tenemos una versión más compacta:
    - Cabecera, que no es fija y contiene tres botones de menu: el menú de *navegación* (a la izquierda), el menú *Herramientas wiki* y el menú de *usuario* (a la derecha). Debajo el nombre *Urantiapedia*, que es un enlace a la página de bienvenida, y debajo la casilla de búsqueda.
    - Un único panel central con el contenido de la página abierta, con su título y luego los mismos botones pero en forma de iconos que hay en la versión PC para acceder a la Página principal, a la página de discusión, al modo de editar y al historial.
    - Pie de página con el mismo contenido que en PC.

---

## Crearse un usuario

> IMPORTANTE: Esta operación sólo podrá realizarse durante la fase pública del proyecto y no durante la fase de preparación.

Un usuario «editor web» debe estar registrado en la web. Se puede consultar cualquier página sin estar registrado, pero para hacer cambios en la web, es necesario ser un usuario «editor web» registrado. En la esquina superior derecha de la *Urantiapedia* está el menú de usuario con las opciones para crear un usuario nuevo o acceder con un usuario existente. Sigue estos pasos:
1. Selecciona la opción *Crear una cuenta* del menú de *usuario*. Esta opción redirige a esta página: [Especial:Crear una cuenta](https://urantiapedia.site/index.php/Especial:Crear_una_cuenta).
2. Introduce un *nombre de usuario* corto y una *contraseña*. El *nombre de usuario* puede ser un alias y es el nombre que aparecerá al guardar cualquier edición.
3. Confirma tu *contraseña* y opcionalmente ofrece un *correo electrónico* y un *nombre real* si deseas que otros usuarios puedan ponerse en contacto contigo.
4. Haz clic en *Crea tu cuenta*.
5. Se creará tu cuenta y aparecerás con ella accedida.

Una vez registrado, para acceder a tu cuenta de usuario:
1. Selecciona la opción *Acceder* del menú de *usuario*.
2. Introduce tu *nombre de usuario* y tu *contraseña*.
3. Marca la casilla *Mantener mi sesión iniciada* si no deseas que la aplicación te saque de la sesión al cabo de cierto tiempo.
4. Haz clic en Acceder.

Si has olvidado tu contraseña:
1. Selecciona la opción *Acceder* del menú de *usuario*.
2. Haz clic en *¿Has olvidado tu contraseña?*
3. Se abre la página de restablecimiento de la contraseña. Ofrece tu *nombre de usuario* y tu *correo electrónico*.
4. 3Haz clic en *Restablecer contraseña*.

Recuerda que como usuario «editor web» debes acceder a la página para poder ver todas las opciones de un usuario con esos permisos. Por ejemplo, el botón para poner una página en edición no estará disponible para un usuario que no ha accedido, y se mostrará un botón *Ver código* que sólo permite ver la página en formato Wikitext pero no modificarlo.

---

## Modificar una página

Para modificar una página existente simplemente hay que entrar en esa página y hacer clic en el botón *Editar* de la parte superior derecha. Aparecerá la página en el modo de edición, con los siguientes controles:
- Una amplia casilla de texto central, donde aparecerá la página en formato Wikitext. Aquí es donde hay que introducir los cambios. El formato Wikitext puede asustar un poco al principio pero es muy simple, y en la *Urantiapedia* sólo se va a usar un subconjunto pequeño de todo lo que admite. Para conocer mejor este formato ver más adelante.
- Una casilla de texto para indicar una breve descripción sobre los cambios que estás introduciendo.
- Una casilla para indicar si el cambio que se hace es pequeño, como una corrección ortotipográfica, o bien un cambio sustancial en el contenido.
- Una casilla para indicar si se quieren recibir notificaciones cuando la página sea modificada por otros.
- Los botones para guardar los cambios, mostrar una previsualización de la página con los cambios, mostrar los cambios en forma de una lista o cancelar.

https://www.mediawiki.org/wiki/Help:Editing_pages/es 

> IMPORTANTE: Durante la fase de preparación con un idioma no se deben modificar páginas de forma manual porque este proceso se automatiza con las *Urantiapedia Tools*, y cualquier edición manual podría sobreescribirse al lanzar los procesos automatizados. La modificación de páginas en un idioma sólo deberán realizarla los «editores web» una vez se haya superado la fase de preparación para un idioma.

---

## Crear una nueva página

Para crear una página que aún no exista, simplemente sigue estos pasos:
- Teclea en en el navegador la URL de la futura página, que será algo así:
https://urantiapedia.site/index.php/título donde `título` será el título de la página. El título admite caracteres especiales como acentos y los espacios en blanco deben ponerse como _ (guiones bajos). Por ejemplo, el título para los *Hijos Paradisíacos de Dios* sería esta:
    - https://urantiapedia.site/index.php/Hijos_Paradisíacos_de_Dios 
- Aparecerá la página, pero en blanco. Haz clic en el botón *Crear* que aparecerá en lugar del botón *Editar*.
- Se abrirá la misma página que para modificar una página, pero con el contenido en blanco. Introduce el contenido Wikitext en la casilla principal y utiliza el resto de opciones como al modificar una página existente.

> IMPORTANTE: Durante la fase de preparació con un idioma no se deben crear páginas de forma manual porque este proceso se automatiza con las *Urantiapedia Tools*, y cualquier edición manual podría sobreescribirse al lanzar los procesos automatizados. La creación de páginas en un idioma sólo deberán realizarla los «editores web» una vez se haya superado la fase de preparación para un idioma.

---

## Espacios de nombres

Al crear una página manualmente durante la fase pública con un idioma hay que tener en cuenta que en la *Urantiapedia* existirán lo que se conoce como «espacios de nombres» («namespaces»), por lo que para escribir el título completo de una página deberá tenerse en cuenta.

Un «espacio de nombres» es una forma de agrupar y ordenar contenidos dentro de la *Urantiapedia*. Básicamente es un prefijo que se coloca delante del título de una página.

Existen en toda web basada en MediaWiki una serie de «espacios de nombres» que ya vienen definidos por defecto. Algunos de estos son:
- *Archivo* (*File*), el prefijo a usar para recursos como imágenes.
- *Especial* (*Special*), el prefijo para unas páginas especiales que permiten conocer listados y estadísticas de la propia página.
- *Usuario* (*User*), el prefijo a usar para las páginas de cada usuario, pues cada usuario tiene sus propias páginas personales con contenido exclusivo de él.
- *Ayuda* (*Help*), el prefijo para las páginas de ayuda.

Además de los «espacio de nombre» por defecto en la *Urantiapedia* existirán los siguientes:
- *Índice* (*Index*): para páginas que sean índices que listan otras páginas y conectan con ellas.
- *Artículo* (*Article*): para páginas que sean artículos de algún lector, ya sean ayudas de estudio o bien artículos investigando un tema relacionado.

Las páginas básicas con *El Libro de Urantia*, *La Biblia*, otros libros, o los *Términos*, ninguna de ellas estará incluida en ningún «espacio de nombres».

Cualquier dibujo, esquema, foto, diagrama, animación o cualquier otro contenido gráfico que sea básicamente un archivo y que esté basado en *El Libro de Urantia* se colocará, al igual que cualquier otra imagen, en el «espacio de nombres» *Archivo* (*File*) usando las herramientas por defecto de que dispone MediaWiki.

Teniendo todo lo anterior en cuenta el título completo de una página siempre adopta este patrón:

https:/urantiapedia.site/index.php/namespace:titulo

- donde `namespace` es el nombre del «espacio de nombres», si existe. Si no existe el separador de los dos puntos se omite. El «espacio de nombres» deberá estar escrito en el idioma correspondiente. Por ejemplo, para una página en español habrá un «espacio de nombres» *Artículo*, pero en una página en inglés ese «espacio de nombres» será *Article*.
- donde `titulo` es el título en sí de la página.

Por ejemplo, existe esta página ya añadida a los artículos:

https://urantiapedia.site/index.php?Artículo:Cómo_es_de_grande_Orvonton 

La página equivalente a la anterior, pero en inglés, sería algo así:

https://urantiapedia.site/en/index.php?Article:How_big_is_Orvonton 

Para más información sobre los «espacios de nombres» consulta aquí:

https://www.mediawiki.org/wiki/Help:Namespaces/es 

---

## El formato Wikitext

Aunque esto no pretende ser un manual completo del formato Wikitext, comprende la mayor parte de las cosas que deben ser tenidas en cuenta al editar contenido en la *Urantiapedia*. Para una comprensión más exhaustiva de cómo editar en formato Wikitext, consulta los enlaces más abajo.

### Formato básico del texto

Se muestra | Se debe escribir
---|---
Texto en cursiva | ''Texto en cursiva''
Texto en negrita | '''Texto en negrita'''
Texto en negrita y cursiva | '''''Texto en negrita y cursiva'''''

Para la cursiva y negrita se deben usar los caracteres de comilla simple (tecla a la derecha de la tecla 0). 

Para introducir entrecomillados usa las comillas angulares, españolas o guillemetes (« »). No es recomendable usar las comillas inglesas (" ") ni (“ ”). En Windows la forma para introducir las comillas angulares es la siguiente:
- Para la comilla de apertura («) utiliza la tecla Alt, manteniéndola pulsada, y luego marca 174 en el teclado numérico, y suelta Alt. También puedes escribir &laquo;.
- Para la comilla de cierre (») utiliza Alt + 175 y luego suelta la tecla Alt. Alternativamente puedes escribir &raquo;.

En un equipo portátil que no dispone de teclado numérico este sistema se complica algo más, pero existe un modo de crear las comillas angulares:
- Activa el panel numérico utilizando Fn + NumLock. La tecla Fn suele estar junto a la tecla Ctrl izquierda. La tecla NumLock suele ser la F10 o alguna similar.
- Con las teclas m, j, k, l, u, i, o, 7, 8, 9 asignadas para reemplazar los números del 0 al 9 en el panel numérico, utiliza el equivalente al número. Para la comilla de apertura teclea Alt + 174 (Alt + j + 7 + u) y la para las de cierre Alt + 175 (Alt j + 7 + o). Recuerda siempre de mantener Alt pulsado mientras se pulsan los números o sus teclas equivalentes y luego soltar Alt.
- Recuerda desactivar el teclado numérico provisional con Fn + NumLock para poder seguir escribiendo con normalidad.


### Formato extendido del texto

Se muestra | Se debe escribir
---|---
<ins>Texto insertado</ins> | `<ins>Texto insertado</ins>`
<u>Texto subrayado</u> | `<u>Texto subrayado</u>`
<s>Texto tachado</s> | `<s>Texto tachado</s>`
<del>Texto borrado</del> | `<del>Texto borrado</del>`
<code>Texto código fuente</code> | `<code>Texto código fuente</code>`
Texto citado | `<blockquote>Texto citado</blockquote>`
<q>Cita</q> | `<q>Cita</q>`
 [vacío] | `<!--Esto es un comentario -->`
Texto sin ''formato'', literal | `<pre>Texto sin ''formato'', literal</pre>`

---

### Secciones y listas

Para obtener secciones se debe escribir:

```
== Nivel 2 ==

=== Nivel 3 ===

==== Nivel 4 ====
```

Se muestra:

## Nivel 2

### Nivel 3

### Nivel 4


Para obtener una línea horizontal se debe escribir:

```
Texto antes
---
Texto después
```

Para obtener una lista no numerada se debe escribir:

```
\* Lista con viñetas<br>
\* Usan asteriscos<br>
\*\* Dos y más asteriscos para subniveles<br>
\*\* Otro más<br>
\*\*\* Otro subnivel
```

Se mostrará:

* Lista con viñetas
* Usan asteriscos
  * Dos y más asteriscos para subniveles
  * Otro más
      * Otro subnivel

Para obtener una lista numerada se debe escribir:

```
\# Lista numerada<br>
\# Usa almohadillas<br>
\#\# Dos y más almohadillas para subniveles<br>
\#\# Otro más<br>
\#\#\# Otro subnivel
```

Se mostrará:

1. Lista numerada
2. Usa almohadillas
    1. Dos y más almohadillas para subniveles
    2. Otro más
        1. Otro subnivel

Para obtener una lista mixta se debe escribir:

```
\# Lista mezclada<br>
\# Usa asteriscos y almohadillas<br>
\#\* Un subnivel sin número<br>
\#\* Otro más<br>
\# Otro
```

Se mostrará:

1. Lista mezclada
2. Usa asteriscos y almohadillas
    * Un subnivel sin número
    * Otro más
3. Otro

---

### Hiperenlaces

Ejemplos de enlaces a la propia *Urantiapedia*:

```
[[Página principal]]
[[Ayuda:Cómo crear un usuario]]
[[El Libro de Urantia Doc 156]]
[[Artículo:Cómo es de grande Orvonton]]
[[Andrés]]
```

Ejemplos de enlaces a la propia *Urantiapedia* con texto alternativo:

```
[[Andrés|el apóstol Andrés]]
```

Ejemplos de enlaces a la propia *Urantiapedia* con anclas:

A una sección del libro:
```
[[El Libro de Urantia Doc 156#LU_156_3]]
```
A un párrafo del libro:
```
[[El Libro de Urantia Doc156#LU_156_3_1]]
```
A otra página web (no es necesario formato):
```
https://www.urantia.org/es/fundacion-urantia

[https://www.urantia.org/es/fundacion-urantia Fundación Urantia]
```

---

### Imágenes

Para insertar una imagen se recomienda este formato en una línea aislada con una línea en blanco antes y después:
```
[[File:nombre_archivo|frame|leyenda]]
```
donde nombre_archivo es el nombre de un archivo que de tipo imagen se habrá incorporado a la *Urantiapedia*, frame indica que se mostrará la imagen rodeada por un marco y leyenda es el texto a mostrar como leyenda. De este modo la imagen se colocará en la posición más idónea relativa al texto.

Por ejemplo, escribiendo:
```
[[File:Orvonton_ViaLactea.jpg|frame|¿Es Orvonton la Vía Láctea o algo mucho mayor?]]
se obtiene una imagen grande y centrada.
```
---

### Tablas

Para obtener la siguiente tabla:

División administrativa | Nombre
---|---
Planeta habitado | Urantia
Sistema solar | Monmatia
Sistema local | Satania
Constelación | Norlatiadek
Universo local | Nebadon

se debe escribir esto en formato MediaWiki:

```
{| class="wikitable"
| División <br> administrativa || Nombre
|-
| Planeta habitado || Urantia
|-
| Sistema solar || Monmatia
|-
| Sistema local || Satania
|-
| Constelación || Norlatiadek
|-
| Universo local || Nebadon
|}
```

Es decir:
- Se empieza una tabla con {| y se termina con |}.
- Se empieza una fila de la tabla con |-.
- Se empieza la primera celda de una fila con | y las siguientes celdas de la fila con ||.

---

### Referencias

Para insertar referencias dentro de una página la Urantiapedia dispone de un módulo llamado Lib que facilita la inclusión de estas. Consulta el manual sobre [Cómo usar las referencias](https://github.com/JanHerca/urantiapedia/blob/master/docs/HOWTO_referencias.md).

---

## Caracteres especiales

- guión largo: —
- espacio en blanco extra: &emsp;
- comillas tipográficas: « »

---

## Buscar y reemplazar en VS Code

En el texto de la Biblia:
- Capítulos: Capítulo (\d+)  >  \chapter{$1}
- Secciones: ^([^\n\\\d]+)\n\n  >  \section*{$1}\n\n
- Quitar número de capítulo en inicio de la línea: ^\d+:  > nada
- Añadir marca de párrafo: ^(\d+)  >  \par $1  y también ^([^\\])  >  \par $1

Ver [Regular expression Quisck start](http://www.regular-expressions.info/quickstart.html)

---

## Enlaces

https://www.mediawiki.org/wiki/Help:Starting_a_new_page

https://www.mediawiki.org/wiki/Help:Formatting

https://www.mediawiki.org/wiki/Help:Formatting/es 

https://www.mediawiki.org/wiki/Help:Lists/es 

https://www.mediawiki.org/wiki/Help:Links/es 

https://www.mediawiki.org/wiki/Help:Tables/es 

https://www.mediawiki.org/wiki/Help:Images/es 

https://es.wikipedia.org/wiki/Comillas 
