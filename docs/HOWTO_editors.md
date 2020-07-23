# Urantiapedia - HOWTO para editores

## Crear una nueva página

1. Escribir directamente la URL. Por ejemplo si se quiere crear la página sobre Grandfanda, escribir:
https://es.urantiapedia.com/wiki/Grandfanda
2. Se mostrará una página en blanco diciendo que no existe. Hacer clic arriba para crearla.

## Modificar una página existente

1. Escribir la URL de la página. Pulsar arriba en Edit.

## Sintaxis Wiki - nivel básico

- cursiva: ''cursiva''
- negrita: '''negrita'''
- cursiva y negrita: '''''cursiva y negrita'''''
- secciones: == Level 2 == === Level 3 === ==== Level 4 ==== etc.
- línea horizontal: ----
- listas con varios niveles: * ** *** (para puntos) :- ::- (para guiones) # ## ### (para números)
- citas <q>Texto de la cita</q>
- links internos dentro de la wiki (sólo el nombre de la página): [[Grandfanda]] o si se prefiere con un texto alternativo [[Grandfanda|primer humano en Havona]]. Si se quiere ir a anchor [[Grandfanda#Referencias]], y a una sección de la misma página [[#Referencias]]
- links externos: [https://mediawiki.org MediaWiki]
- anchors: todos las secciones tienen un anchor automatico. Para uno manual: <span id="LU_42_3_1"/>
- referencias: <ref>[[El_Libro_de_Urantia_Doc_41#LU_41_3_1]]</ref> y luego abajo se pone <references/>

## Caracteres especiales

- guión largo: —
- espacio en blanco extra: &emsp;
- comillas tipográficas: « »

## Buscar y reemplazar en VS Code

En el texto de la Biblia:
- Capítulos: Capítulo (\d+)  >  \chapter{$1}
- Secciones: ^([^\n\\\d]+)\n\n  >  \section*{$1}\n\n
- Quitar número de capítulo en inicio de la línea: ^\d+:  > nada

Ver [Regular expression Quisck start](http://www.regular-expressions.info/quickstart.html)


## Referencias

https://www.mediawiki.org/wiki/Help:Starting_a_new_page

https://www.mediawiki.org/wiki/Help:Formatting
