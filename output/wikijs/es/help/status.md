---
title: Urantiapedia status - Progreso actual del proyecto
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
        <td><a href="/es/help/languages">Idiomas soportados</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/roles">Perfiles de colaboradores</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Fase I - El Libro de Urantia, la Biblia y el Índice de Términos

Esta fase se explica en detalle aquí: [Fase I](/es/help/phases#fase-i-el-libro-de-urantia-la-biblia-y-el-%C3%ADndice-de-t%C3%A9rminos).

### Tareas de desarollo de software

En esta fase los desarrollos a realizar son:

Tarea                                                                                                       | Estado             |
----------------------------------------------------------------------------------------------------------- | ------------------ |
Desarrollo de los conversores de archivos a Wiki.js                                                         | :heavy_check_mark: |
Desarrollo del _Topic Index Editor_, un asistente que permite acelerar el trabajo con el Índice de Términos | :clock2:           |

### Tareas de adición de contenido

Para cada idioma soportado la lista de tareas a realizar durante la fase I es esta:

1. Traducción del _Paramony_ :ledger: del inglés al idioma de destino (`Paramony`).
2. Traducción y revisión del _Índice de términos_ :card_index: del inglés al idioma de destino (`Términos`).
3. Obtención de una traducción de _La Biblia_ :closed_book: en el idioma de destino (`Biblia`).
4. Conversión de _El Libro de Urantia_ :blue_book: de HTML a JSON sin notas al pie del _Paramony_ :ledger: (`LU`).
5. Adición de notas al pie a _El Libro de Urantia_ :blue_book: en JSON (`LU Paramony`).
6. Conversión del _Índice de términos_ :card_index: de TXT a Wiki.js y subida de cambios mediante [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) (`Términos`).
7. Conversión de _El Libro de Urantia_ :blue_book: de JSON con notas al pie del _Paramony_ :ledger: a Wiki.js incluyendo referencias a los términos, y subida de cambios mediante [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) (`LU Wiki`).
8. Conversión de _La Biblia_ :closed_book: de LaTeX a Wiki.js con notas al pie del _Parammony_ :ledger:, y subida de cambios mediante [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) (`Biblia Wiki`).

Otras tareas adicionales en las que se debe trabajar son:

- :sound: Probar soluciones de texto a voz. El objetivo es ofrecer lectura automatizada de todos los libros del sitio web, empezando por _El Libro de Urantia_. En inglés existe un audio libro oficial de la Fundación Urantia. Para otros idiomas se van a buscar soluciones automatizadas. (`Audio`)
- :sunrise_over_mountains: Crear un catálogo de imágenes para ilustrar _El libro de Urantia_, la _Biblia_ y el _Índice de Términos_. Actualmente está realizado con la parte IV del _Libro de Urantia_. (`LU Imágenes`)

Relación de tareas e idiomas a soportar, con indicación del progreso actual:

| Idioma     | Código | :ledger: Paramony  | :card_index: Términos | :closed_book: Biblia | :blue_book: LU     | :blue_book: :ledger: LU <br>Paramony    |    :blue_book: LU<br>Wiki     |  :closed_book: Biblia<br>Wiki   |     :sound: LU Audio      | :sunrise_over_mountains: LU Imágenes |
| ---------- | :----: | :----------------: | :-------------------: | :------------------: | :----------------: | :-------------------------------------: | :---------------------------: | :-----------------------------: | :-----------------------: | :----------------------------------: |
| Búlgaro    |  `bg`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Checo      |  `cs`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Danés      |  `da`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Alemán     |  `de`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              | :heavy_check_mark:        |  :clock2:                            |
| Griego     |  `el`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Inglés     |  `en`  | :heavy_check_mark: | :clock2:              | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              | :heavy_check_mark:        |  :clock2:                            |
| Español    |  `es`  | :heavy_check_mark: | :clock2:              | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              | :heavy_check_mark:        |  :clock2:                            |
| Estonio    |  `et`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Persa      |  `fa`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Finlandés  |  `fi`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Francés    |  `fr`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              | :heavy_check_mark:        |  :clock2:                            |
| Hebreo     |  `he`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Húngaro    |  `hu`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Indonesio  |  `id`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Italiano   |  `it`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              | :heavy_check_mark:        |  :clock2:                            |
| Japonés    |  `ja`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Coreano    |  `ko`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Lituano    |  `lt`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Neerlandés |  `nl`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Polaco     |  `pl`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Portugués  |  `pt`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              | :heavy_check_mark:        |  :clock2:                            |
| Rumano     |  `ro`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Ruso       |  `ru`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Sueco      |  `sv`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |
| Turco      |  `tr`  | :heavy_check_mark: |                       | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark:                      | :heavy_check_mark:            | :heavy_check_mark:              |                           |  :clock2:                            |

## Fase II - Libros, artículos, ayudas de estudio, esquemas e índices

Esta fase se explica en detalle aquí: [Fase II](/es/help/phases#fase-ii-libros-art%C3%ADculos-ayudas-de-estudio-esquemas-e-%C3%ADndices).

### Tareas de desarollo de software

En esta fase los desarrollos a realizar son:

Tarea                                                         | Estado             |
--------------------------------------------------------------| ------------------ |
Desarrollo para la conversión de libros y artículos a Wiki.js | :clock2:           |

### Tareas de adición de contenido

Para cada idioma, el contenido esperado en esta fase es:

- Libros:
  - :green_book:Libros extrabíblicos: 11 libros previstos. (`Extrabíblicos`)
  - :books: Otros libros que se supone que son fuentes: 17 libros planeados. (`Libros fuentes`)
- :page_with_curl: Artículos (`Artículos`):
  - Innerface: 510 planeado
  - Urantian Journal: 11 planeados
  - Fellowship Journal: 23 planeados
  - Fellowship Herald: 225 planeados
  - UB Annotated: 17 previstos
  - Artículos de Jan Herca: 41 previstos
  - Otros: 100 previstos
  - TOTAL: 927 previstos
- :notebook: Ayudas al estudio: planeadas unas 20 de ellas, disponibles en `en`. (`Ayudas de estudio`)
- :memo: Esquemas: no planificados, sólo pruebas. (`Esquemas`)
- :capital_abcd: Índices: actualmente se encuentran disponibles los índices para los términos. Se requiere planificar otros. (`Índices`)

| Idioma     | Código | :green_book: Extrabíblicos  | :books: Libros fuentes  | :page_with_curl: Artículos | :notebook: Ayudas de estudio | :memo: Esquemas   | :capital_abcd: Índices |
| ---------- | :----: | :-------------------------: | :---------------------: | :------------------------: | :--------------------------: | :---------------: | :--------------------: |
| Búlgaro    |  `bg`  |                             |                         |                            |                              |                   |                        |
| Checo      |  `cs`  |                             |                         |                            |                              |                   |                        |
| Danés      |  `da`  |                             |                         |                            |                              |                   |                        |
| Alemán     |  `de`  |                             |                         |                            |                              |                   |                        |
| Griego     |  `el`  |                             |                         |                            |                              |                   |                        |
| Inglés     |  `en`  | :heavy_check_mark:          | :clock2: 3 / 100+       | :clock2: 50 / 927          | :heavy_check_mark:           |                   | :heavy_check_mark:     |
| Español    |  `es`  | :clock2:                    | :clock2: 3 / 100+       | :clock2: 50 / 927          | :clock2:                     |                   | :heavy_check_mark:     |
| Estonio    |  `et`  |                             |                         |                            |                              |                   |                        |
| Persa      |  `fa`  |                             |                         |                            |                              |                   |                        |
| Finlandés  |  `fi`  |                             |                         |                            |                              |                   |                        |
| Francés    |  `fr`  |                             |                         |                            | :clock2:                     |                   |                        |
| Hebreo     |  `he`  |                             |                         |                            |                              |                   |                        |
| Húngaro    |  `hu`  |                             |                         |                            |                              |                   |                        |
| Indonesio  |  `id`  |                             |                         |                            |                              |                   |                        |
| Italiano   |  `it`  |                             |                         |                            |                              |                   |                        |
| Japonés    |  `ja`  |                             |                         |                            |                              |                   |                        |
| Coreano    |  `ko`  |                             |                         |                            |                              |                   |                        |
| Lituano    |  `lt`  |                             |                         |                            |                              |                   |                        |
| Neerlandés |  `nl`  |                             |                         |                            |                              |                   |                        |
| Polaco     |  `pl`  |                             |                         |                            |                              |                   |                        |
| Portugués  |  `pt`  |                             |                         |                            |                              |                   |                        |
| Rumano     |  `ro`  |                             |                         |                            |                              |                   |                        |
| Ruso       |  `ru`  |                             |                         |                            |                              |                   |                        |
| Sueco      |  `sv`  |                             |                         |                            |                              |                   |                        |
| Turco      |  `tr`  |                             |                         |                            |                              |                   |                        |

## Fase III - Traductor

Esta fase se explica en detalle aquí: [Fase III](/es/help/phases#fase-iii-traductor).

En esta fase únicamente se realizarán desarrollos en las aplicaciones, por lo que será una fase en paralelo a las otras. Las tareas previstas son éstas:

Tarea                                                                                                                                       | Estado             |
------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
Desarrollo en Urantiapedia Tools de un traductor masivo de páginas                                                                          |                    |
Desarrollo en Wiki.js un nuevo editor que permita traducciones asistidas directamente en la web                                             |                    |
Desarrollo en Wiki.js de un modo de visualización de El Libro de Urantia y cualquier otro contenido en dos a cuatro idiomas                 |                    |
Desarrollo en Wiki.js de un selector de preferencia en la traducción a usar de *El Libro de Urantia* (para idiomas como español con varias) |                    |

## Fase IV - Mapas interactivos

Esta fase se explica en detalle aquí: [Fase IV](/es/help/phases#fase-iv-mapas-interactivos).

Esta fase incluye algunos desarrollos que actualmente no están planificados.

Para cada idioma, el contenido esperado en esta fase es:

- :globe_with_meridians: `Mapas estáticos`: 100 planificados.
- :earth_americas: `Mapas interactivos`: 20 previstos. Por ahora se ha creado un mapa para probar.

| Idioma     | Código | :globe_with_meridians: Mapas estáticos | :earth_americas: Mapas interactivos |
| ---------- | :----: | :-------------: | :----------------: |
| Búlgaro    |  `bg`  |                 |                    |
| Checo      |  `cs`  |                 |                    |
| Danés      |  `da`  |                 |                    |
| Alemán     |  `de`  |                 |                    |
| Griego     |  `el`  |                 |                    |
| Inglés     |  `en`  |                 |  :clock2: 1 / 20   |
| Español    |  `es`  |                 |  :clock2: 1 / 20   |
| Estonio    |  `et`  |                 |                    |
| Persa      |  `fa`  |                 |                    |
| Finlandés  |  `fi`  |                 |                    |
| Francés    |  `fr`  |                 |                    |
| Hebreo     |  `he`  |                 |                    |
| Húngaro    |  `hu`  |                 |                    |
| Indonesio  |  `id`  |                 |                    |
| Italiano   |  `it`  |                 |                    |
| Japonés    |  `ja`  |                 |                    |
| Coreano    |  `ko`  |                 |                    |
| Lituano    |  `lt`  |                 |                    |
| Neerlandés |  `nl`  |                 |                    |
| Polaco     |  `pl`  |                 |                    |
| Portugués  |  `pt`  |                 |                    |
| Rumano     |  `ro`  |                 |                    |
| Ruso       |  `ru`  |                 |                    |
| Sueco      |  `sv`  |                 |                    |
| Turco      |  `tr`  |                 |                    |

## Fase V - Presentaciones

Esta fase se explica en detalle aquí: [Fase V](/es/help/phases#fase-v-presentaciones).

Esta fase incluye algunos desarrollos que actualmente no están planificados. También se requiere planificar una lista de presentaciones a incluir.

## Fase VI - Modelos 3D

Esta fase se explica en detalle aquí: [Fase VI](/es/help/phases#fase-vi-modelos-3d-interactivos).

Esta fase incluye algunos desarrollos que actualmente no están planificados. También se requiere planificar una lista de modelos 3D a incluir.

## Tareas planificadas

Aquí puedes encontrar una lista de tareas que actualmente no están activas. Si eres un colaborador o quieres serlo, consulta esta lista con frecuencia para ver dónde puedes hacer tus mejores aportaciones. Si una tarea está indentada debajo de la anterior, eso significa que la tarea depende de la anterior para comenzar.

| Icono  | Contenido | Tareas |
| :----: | ------- | ----- |
| :blue_book: | El libro de Urantia | Revisión de la traducción automática de las notas al pie del _Paramony_ excepto en: `es` y `en`. |
| :sound: | Audio | Probar soluciones de texto a voz más adecuadas: todos los idiomas.<br> Generación del audio de _El libro de Urantia_: actualmente disponible en `en` y en proceso con `es`. |
| :sunrise_over_mountains: | Imágenes | Crear un catálogo de imágenes para ilustrar _El libro de Urantia_, la _Biblia_ y el _Índice de Términos_. Actualmente está realizado con la parte IV del Libro de Urantia. |
| :card_index: | El índice de Términos | Producir la primera versión para `en` y `es`. Esta es una tarea pesada que ha sido dividida por letras del alfabeto. Las letras `A` a `G` ya están terminadas y quedan las letras `H` a `Z`.<br> Traducción automática del índice de Términos: no se recomienda iniciar estas tareas hasta que se complete la anterior porque algún proceso automático ayudará aquí.<br> Revisión de la traducción anterior: como se indicó anteriormente, no se recomienda comenzar esta tarea hasta que se produzca la primera versión para `en` y `es`. |
| :closed_book: | La Biblia | Revisión de la traducción automática de las notas a pie de página del _Paramony_: todos los idiomas excepto `en` y `es` |
| :green_book: | Libros extra-bíblicos | Obtener libros extrabíblicos de dominio público: todos los idiomas. |
| :books: | Otros libros | Obtener libros que se suponen fuentes (descargándolos de la Web o escaneando): los libros suelen estar en `en`.<br> Traducción automática de los libros anteriores: todos los idiomas excepto `en`.<br> Revisión de la traducción anterior: todos los idiomas excepto `en`. |
| :page_with_curl: | Artículos | Adición de artículos en `en` y revisión del estilo.<br>Traducción automática de artículos: todos los idiomas excepto `en`.<br> Revisión de la traducción anterior: todos los idiomas excepto `en`. |
| :notebook: | Ayudas para el estudio | Traducción automática de las ayudas de estudio: todos los idiomas excepto `en`.<br> Revisión de la traducción anterior: todos los idiomas excepto `en` |
| :memo: | Diagramas | Planificar una lista de diagramas a incluir y crear uno de pruebas. |
| :capital_abcd: | Índices | Planificar una lista de índices a incluir. |
| :globe_with_meridians: | Mapas estáticos | Planificar una lista de mapas estáticos (imágenes) a incluir y crfear uno de pruebas. |
| :earth_americas: | Mapas interactivos | Crear una geodatabase y proyectos QGIS para la generación automática de mapas<br>Probar a exportar mapas a SVG, mapas de imágenes HTML, y KML (este último requiere una plataforma de mapas como Google My Maps o una nuestra)<br> Traducción automática de los textos en mapas: todos los idiomas. |
| :bar_chart: | Presentaciones | Planificar una lista de presentaciones a incluir y crear una para pruebas usando Google Drive. |
| :milky_way: | Modelos 3D | Planificar una lista de escenas 3D a incluir y crear una de pruenas usando Sketchfab. |
| :movie_camera: | Vídeo | Crear una introducción ampliada a Urantiapedia (canal de Youtube).<br> Crear un tutorial avanzado para los colaboradores de Urantiapedia (canal de Youtube). |

## Resumen

La siguiente tabla resume todos los avances con cada tipo de contenido:

| Idioma     | Código |  :blue_book:       | :sound:            | :sunrise_over_mountains:  |  :card_index:  | :closed_book:      | :green_book:       |  :books:        | :page_with_curl:  | :notebook:           | :memo:  | :globe_with_meridians:   | :earth_americas: | :bar_chart: | :milky_way: |
| ---------- | :----: | :----------------: | :----------------: | :-----------------------: | :------------: | :----------------: | :------------:     | :-------------: | :---------------: | :------------------: | :-----: | :----------------------: | :--------------: | :---------: | :---------: |
| Búlgaro    |  `bg`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Checo      |  `cs`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Danés      |  `da`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Alemán     |  `de`  | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Griego     |  `el`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Inglés     |  `en`  | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  | :clock2:       | :heavy_check_mark: | :heavy_check_mark: | :clock2:        | :clock2:          | :heavy_check_mark:   | :one:   |                          | :one:            | :one:       | :one:       |
| Español    |  `es`  | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  | :clock2:       | :heavy_check_mark: | :clock2:           | :clock2:        | :clock2:          | :clock2:             |         |                          | :one:            |             |             |
| Estonio    |  `et`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Persa      |  `fa`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Finlandés  |  `fi`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Francés    |  `fr`  | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   | :clock2:             |         |                          |                  |             |             |
| Hebreo     |  `he`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Húngaro    |  `hu`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Indonesio  |  `id`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Italiano   |  `it`  | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Japonés    |  `ja`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Coreano    |  `ko`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Lituano    |  `lt`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Neerlandés |  `nl`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Polaco     |  `pl`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Portugués  |  `pt`  | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Rumano     |  `ro`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Ruso       |  `ru`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Sueco      |  `sv`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Turco      |  `tr`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |

(1) El Libro de Urantia :blue_book: y la Biblia :closed_book: con _Paramony_ incluidos.



## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/languages">Idiomas soportados</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/roles">Perfiles de colaboradores</a></td>
      </tr>
    </tbody>
  </table>
</figure>
