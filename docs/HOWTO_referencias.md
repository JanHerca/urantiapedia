# Urantiapedia - Cómo usar las referencias

## Referencias a *El Libro de Urantia*

Para referirnos a *El Libro de Urantia* en este sitio vamos a utilizar las siguientes reglas:

* Las unidades de referencia son el documento, la sección y el párrafo. Por ejemplo, LU 100:3.1 se refiere a *El Libro de Urantia* (por la abreviatura LU), documento 100, sección 3 y párrafo 1 dentro de esa sección. El documento de prólogo es el documento 0. Los párrafos que están en algunos documentos como anteriores a la sección 1 se encuentran en la sección 0. Por ejemplo, LU 0:0.1 es el primer párrafo del libro.
* LU 101. Esto se refiere a un documento concreto, en este caso el 101.
* LU 101:1. Esto se refiere a la primera sección del documento 101.
* LU 101:1.1. Esto se refiere al primer párrafo de la primera sección del documento 101.
* LU 101; 103. Esto se refiere a los documentos 101 y 103 en su totalidad. Para decir un rango de documentos no es válido usar LU 101-103. En su lugar, debe usarse LU 101; 102; 103, con una indicación por cada documento del rango. El motivo de esto es que cada documento del libro es una página web distinta en la Urantiapedia. Sólo de este modo cada documento del rango tendrá un hipervínculo.
* LU 101:1; 103:1. Para indicar varias secciones completas. Cada referencia en un conjunto de referencias debe estar siempre separada por punto y coma (;).
* LU 101:1,5; LU 102:1-5. Para indicar varios párrafos dentro de una sección se puede usar la coma (,) para separar párrafos individuales, o usar el guión (-) para indicar un rango de párrafos. También se pueden usar ambos al tiempo como en LU 102:1,3-5.
* Es importante poner un espacio en blanco entre la abreviatura (LU) y el resto de la referencia. El resto de la referencia ya no tendrá espacios en blanco salvo detrás de cada punto y coma (;).

## Usar el módulo *Lib* para indicar referencias a *El Libro de Urantia*

En las páginas de la Wiki, utiliza este módulo para simplicar la creación de hipervínculos:

Se muestra | Se debe escribir
---|---
LU 101 | ```{{lib|LU|101}}```
LU 101:1 | ```{{lib|LU|101|1}}```
LU 101:1.1 | ```{{lib|LU|101|1|1}}```
LU 101; 103 | ```{{lib|LU|101}}; {{lib|LU|103}}```
LU 101:1; 103:1 | ```{{lib|LU|101|1}}; {{lib|LU|103|1}}```
LU 101:1.1,5; LU 102:1.1-5 | ```{{lib|LU|101|1|1|1,5}}; {{lib|LU|102|1|1|1-5}}```
LU 102:1.1,3-5 | ```{{lib|LU|101|1|1|1,3-5}}```


El módulo utiliza la nomenclatura ```{{lib|LU|num_doc|num_sec|num_par|pars}}``` donde:
- num_doc debe ser el número de documento empezando por cero para el prólogo.
- num_sec es opcional y es el número de sección.
- num_par es opcional y es el número de párrafo (el primero al que apunte la referencia).
- pars es opcional y es la forma en que se mostrarán los párrafos en el hipervínculo (útil tan sólo cuando queramos mostrar que la referencia se refiere a varios párrafos y no a uno solo).

## Referencias bíblicas

Hay distintas formas de referirse a los textos bíblicos. En este sitio, vamos a utilizar el siguiente sistema:

* Gn 1. Esto se refiere al capitulo 1 del libro de Génesis. Como no hay mención de cierto versículo, quiere decir que el capitulo entero se incluye en esta referencia.
* Gn 1; 3. Aquí el punto y coma quiere decir “y”. La referencia, entonces, incluye los capítulos 1 y 3 en su totalidad.
* Gn 1; 2; 3. Esto quiere decir todos los versículos de los capítulos 1, 2 y 3. Gn 1-3 no es válido. Para decir esto correctamente hay que indicar todos los capítulos. El motivo de obligar a esto es que cada capítulo de cada libro de la Biblia es una página web diferente en la Urantiapedia y si indicamos un rango de capítulos debemos tener un enlace a cada página del rango.
* Gn 1:1. Los dos puntos (:) separan el número del capitulo de los números de los versículos. Esto se refiere al capitulo 1 de Génesis, versículo 1.
* Gn 1:1,3. Esto indica los versículos 1 y 3 del capitulo 1. Otra vez, la coma quiere decir “y”.
* Gn 1:1-3. Esto se refiere a los versículos 1, 2 y 3 (es decir, 1 al 3 inclusive) del capítulo 1 de Génesis.
* Gn 1:1-3; 6:1; 7:5-10. Ya lo hemos explicado antes. Esta es una lista de varias referencias. Los capítulos siempre se separan de los versículos con los dos puntos (:), pero una referencia se separa de otra por el punto y coma (;). Todo esto, entonces, quiere decir: Génesis, capitulo 1, versículos 1 al 3; capitulo 6, versículo 1; y capitulo 7, versículos 5 al 10.
* Gn 1:1-3; 6:1; 7:5-10; 1 Jn 1:5-7,10. En una lista de referencias también son separados los diferentes libros de la Biblia de otros por el punto y coma. La cita aquí indicada en 1 Juan se refiere a los versículos 5 al 7 y el versículo 10 del mismo capítulo 1. Note que el número que aparece antes del nombre de un libro indica uno de los libros de una serie, en la cual todos tienen el mismo nombre. Por ejemplo: 1 Reyes, 2 Reyes; 1 Juan, 2 Juan, 3 Juan. No vaya a confundir el Evangelio de Juan con las cartas de Juan. Si Juan no lleva número al frente, se refiere al Evangelio de Juan. Si lleva número, son las cartas (epístolas).

## Usar el módulo *Lib* para indicar referencias a la Biblia

En las páginas de la Wiki, utiliza este módulo para simplicar la creación de hipervínculos:

Se muestra | Se debe escribir
---|---
Gn 1 | ```{{lib|Gn|1}}```
Gn 1; 3 | ```{{lib|Gn|1}}; {{lib|Gn|3}}```
Gn 1; 2; 3 | ```{{lib|Gn|1}}; {{lib|Gn|2}}; {{lib|Gn|3}}```
Gn 1:1 | ```{{lib|Gn|1|1}}```
Gn 1:1,3 | ```{{lib|Gn|1|1|1,3}}```
Gn 1:1-3 | ```{{lib|Gn|1|1|1-3}}```
Gn 1:1-3; 6:1; 7:5-10 | ```{{lib|Gn|1|1|1-3}}; {{lib|Gn|6|1}}; {{lib|Gn|7|5|5-10}}```
Gn 1:1-3; 6:1; 7:5-10; 1 Jn 1:5-7,10 | ```{{lib|Gn|1|1|1-3}}; {{lib|Gn|6|1}}; {{lib|Gn|7|5|5-10}}; {{lib|1 Jn|1|5|5-7,10}}```


El módulo utiliza la nomenclatura ```{{lib|LU|ab_libro|num_cap|num_ver|vers}}``` donde:
- ab_libro debe ser la abreviatura del libro de la Biblia (ver abajo).
- num_cap es opcional y es el número de capítulo, empezando siempre en 1.
- num_ver es opcional y es el número de versículo (el primero al que apunte la referencia).
- vers es opcional y es la forma en que se mostrarán los versículos en el hipervínculo (útil tan sólo cuando queramos mostrar que la referencia se refiere a varios versículos y no a uno solo).

## Abreviaturas bíblicas válidas

* Gn: Génesis
* Ex: Éxodo
* Lv: Levítico
* Nm: Números
* Dt: Deuteronomio
* Jos:Josué
* Jue: Jueces
* Rt: Rut
* 1 Sam: I Samuel
* 2 Sam: II Samuel
* 1 Re: I Reyes
* 2 Re: II Reyes
* 1 Cr: I Crónicas
* 2 Cr: II Crónicas
* Esd: Esdras
* Neh: Nehemías
* Est: Ester
* 1 Mac: I Macabeos
* 2 Mac: II Macabeos
* Job: Job
* Sal: Salmos
* Pr: Proverbios
* Ec: Eclesiastés
* Cnt: Cantar de los Cantares
* Eclo: Eclesiásitco
* Sab: Sabiduría
* Is: Isaías
* Jer: Jeremías
* Lm: Lamentaciones de Jeremías
* Bar: Baruc
* Ez: Ezequiel
* Dn: Daniel
* Os: Oseas
* Jl: Joel
* Am: Amós
* Abd: Abdías
* Jon: Jonás
* Miq: Miqueas
* Nah: Nahum
* Hab: Habacuc
* Sof: Sofonías
* Hag: Hageo
* Zac: Zacarías
* Mal: Malaquías
* Mt: Evangelio de Mateo
* Mc: Evangelio de Marcos
* Lc: Evangelio de Lucas
* Jn: Evangelio de Juan
* Hch: Hechos de los Apóstoles
* Ro: Epístola a los Romanos
* 1 Co: Epístola a los Corintios I
* 2 Co: Epístola a los Corintios II
* Gl: Epístola a los Gálatas
* Ef: Epístola a los Efesios
* Flp: Epístola a los Filipenses
* Col: Epístola a los Colosenses
* 1 Ts: Epístola a los Tesalonicenses I
* 2 Ts: Epístola a los Tesalonicenses II
* 1 Ti: Epístola a Timoteo I
* 2 Ti: Epístola a Timoteo II
* Tit: Epístola a Tito
* Flm: Epístola a Filemón
* Heb: Epístola a los Hebreos
* Stg: Epístola de Santiago
* 1 P: Epístola de Pedro I
* 2 P: Epístola de Pedro II
* 1 Jn: Epístola de Juan I
* 2 Jn: Epístola de Juan II
* 3 Jn: Epístola de Juan III
* Jud: Epístola de Judas
* Ap: Apocalipsis de Juan
* Bel: Historia de Bel y el Dragón
* Man: Oración de Manasés
* Tb: Tobit
* 1 Hen: Enoc
* AsMo: Asunción de Moisés

## Referencias

Ver el Módulo Lib, escrito en lenguaje Lua.