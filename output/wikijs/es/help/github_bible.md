---
title: Obtener la Biblia
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
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/es/help/github_topicindex">Traducción y revisión del Índice de términos</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/es/help">Índice</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/es/help/github_book_json">Conversión a JSON</a></td>
      </tr>
    </tbody>
  </table>
</figure>

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

## Instalación de la herramienta e-Sword

e-Sword es una herramienta completamente gratuita para estudiar la Biblia en el ordenador. Esta es la URL para descargarla:

https://www.e-sword.net/

Haz clic en el botón Descargas (Downloads). Hay versiones para Windows, Mac, y también para smartphone y tablets.

Una vez descargado, ejecuta el instalador y sigue los pasos predeterminados.

## Descarga de traducciones de la Biblia en e-Sword

Para descargar una traducción de la Biblia en e-Sword, sigue estos pasos:

1. Abre e-Sword.
2. Cierra cualquier mensaje de inicio.
3. Selecciona el menú *Descargas* (*Downloads*) y luego *Biblias* (*Bibles*).
4. Eso abre el *Cargador de módulos e-Sword* (*e-Sword module downloader*). En la pestaña *Biblia* (*Bible*), verás una lista de Biblias disponibles, ordenadas por idioma. Es una vista en árbol para que puedas colapsar o expandir cada idioma y ver la lista de traducciones disponibles.
5. Es importante descargar sólo traducciones de dominio público. No podemos usar versiones de la Biblia con derechos de autor que no sean de dominio público para evitar cualquier problema legal en *Urantiapedia*.
6. Para descargar haz clic en el enlace y espera a que se instale.
7. Puedes proceder de la misma manera con cualquier otra traducción.

## Copiar contenido de e-Sword

Para copiar los versículos de e-Sword a los archivos de la Biblia, podemos usar este proceso:

1. Copia todos los archivos en otro idioma ya disponible, por ejemplo en inglés. De esta manera tendrás una guía o plantilla.
2. Ve al primer archivo, `001_Genesis.tex`. Selecciona todo lo que está debajo de `\title{Génesis}` y encima de `\end{document}` y elimínalo.
3. Ahora en e-Sword, selecciona el menú *Biblia* (*Bible*) y luego *Copiar versículos* (*Copy verses*). Se abre la ventana *Copiar versos* (*Copy verses*).
4. En los selectores superiores, selecciona el libro, en este ejemplo *Génesis*, y selecciona el primer versículo (generalmente es el predeterminado) y el último versículo del último capítulo (generalmente no es el predeterminado).
5. Como formato de salida, deja seleccionada la primera opción, la predeterminada, que crea textos como `Gen 1:1 El texto del versículo`.
6. Ahora haz clic en *Copiar* (*Copy*) y luego pégalo en Visual Studio Code debajo del título.
7. El texto pegado debe cambiarse para seguir las convenciones de formato de LaTeX. Vamos a hacer esto muy rápido con tres reemplazos.
8. En Visual Studio Code, selecciona el menú *Editar > Reemplazar* (*Edit > Replace*).
9. En la casilla *Buscar* (*Find*), escribe `^... ` (ten cuidado de agregar un espacio final). En la casilla *Reemplazar* (*Replace*), escribe `\par` (agrega también un espacio final). Asegúrate de hacer clic en el botón *Usar expresión regular* (*Use Regular expression*). Ahora haz clic en el botón *Reemplazar todo* (*Replace All*).
10. A continuación, en la casilla *Buscar* (*Find*), escribe `\\par ([0-9]*):([1]) ` (ten cuidado de agregar el espacio final). En la casilla *Reemplazar* (*Replace*), escribe `\n\chapter{$1}\n\n\par $2` (ten en cuenta que ahora no hay espacio adicional). Haz clic en *Reemplazar todo* (*Replace All*). Esto creará las etiquetas de los capítulos.
11. Finalmente, en la casilla *Buscar* (*Find*), escribe `\\par ([0-9]*):([0-9]*) ` (ten cuidado de agregar el espacio final). En la casilla *Reemplazar* (*Replace*), escribe `\par $2` (sin ningún espacio final). Haz clic en *Reemplazar todo* (*Replace All*). Esto establecerá el formato correcto para los párrafos.
12. Eso es todo. Ahora necesitas repetir este proceso con cada libro de la Biblia. Es una tarea aburrida, pero se necesita menos de una hora para tener todos los libros de la Biblia en el formato correcto compatible con *Urantiapedia*.

Una vez que hayas terminado el trabajo con una traducción de la Biblia, la puedes enviar a los administradores del proyecto.

## Listado de libros bíblicos

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

<br>

<figure class="table">
  <table style="border-bottom:0.2em solid #c8ccd1;border-left:1px solid #c8ccd1;border-right:1px solid #c8ccd1;border-top:1px solid #c8ccd1;table-layout: fixed; width: 100%;">
    <tbody>
      <tr>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/es/help/github_topicindex">Traducción y revisión del Índice de términos</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/es/help">Índice</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/es/help/github_book_json">Conversión a JSON</a></td>
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