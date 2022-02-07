---
title: Obtener la Biblia
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

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
