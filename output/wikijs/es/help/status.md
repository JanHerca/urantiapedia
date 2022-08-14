---
title: Urantiapedia status - Progreso actual del proyecto
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
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/es/help/languages">Idiomas soportados</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/es/help">Índice</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/es/help/roles">Perfiles de colaboradores</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Fase I - El Libro de Urantia, la Biblia y el Índice de Términos

Para cada idioma soportado la lista de tareas a realizar durante la fase I es esta:

1. Traducción del _Paramony_ del inglés al idioma de destino (`Paramony`).
2. Traducción y revisión del _Índice de términos_ del inglés al idioma de destino (`Términos`).
3. Obtención de una traducción de _La Biblia_ en el idioma de destino (`Biblia`).
4. Conversión de _El Libro de Urantia_ de HTML a JSON sin notas al pie del _Paramony_ (`LU`).
5. Adición de notas al pie a _El Libro de Urantia_ en JSON (`LU + Paramony`).
6. Conversión del _Índice de términos_ de TXT a Wiki.js y subida de cambios mediante [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) (`Términos`).
7. Conversión de _El Libro de Urantia_ de JSON con notas al pie del _Paramony_ a Wiki.js incluyendo referencias a los términos, y subida de cambios mediante [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) (`LU Wiki`).
8. Conversión de _La Biblia_ de LaTeX a Wiki.js con notas al pie del _Parammony_, y subida de cambios mediante [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) (`Biblia Wiki`).

Otras tareas adicionales en las que se debe trabajar son:

- Probar soluciones de texto a voz. El objetivo es ofrecer lectura automatizada de todos los libros del sitio web, empezando por _El Libro de Urantia_. En inglés existe un audio libro oficial de la Fundación Urantia. Para otros idiomas se van a buscar soluciones automatizadas.
- Crear un catálogo de imágenes para ilustrar _El libro de Urantia_, la _Biblia_ y el _Índice de Términos_. Actualmente está realizado con la parte IV del _Libro de Urantia_.

Relación de tareas e idiomas a soportar, con indicación del progreso actual:

| Idioma     | Código |      Paramony      | Términos |       Biblia       |         LU         |  LU +<br>Paramony  |     LU<br>Wiki     |   Biblia<br>Wiki   |      LU Audio      | LU Imágenes |
| ---------- | :----: | :----------------: | :------: | :----------------: | :----------------: | :----------------: | :----------------: | :----------------: | :----------------: | :---------: |
| Búlgaro    |  `bg`  | :heavy_check_mark: |          | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |  :clock2:   |
| Checo      |  `cs`  | :heavy_check_mark: |          | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |  :clock2:   |
| Danés      |  `da`  | :heavy_check_mark: |          | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |  :clock2:   |
| Alemán     |  `de`  | :heavy_check_mark: |          | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |  :clock2:   |
| Griego     |  `el`  | :heavy_check_mark: |          | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |  :clock2:   |
| Inglés     |  `en`  | :heavy_check_mark: | :clock2: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  :clock2:   |
| Español    |  `es`  | :heavy_check_mark: | :clock2: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  :clock2:   |
| Estonio    |  `et`  | :heavy_check_mark: |          |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |                    |  :clock2:   |
| Persa      |  `fa`  | :heavy_check_mark: |          | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |  :clock2:   |
| Finlandés  |  `fi`  | :heavy_check_mark: |          | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |  :clock2:   |
| Francés    |  `fr`  | :heavy_check_mark: |          |      :clock2:      | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |      :clock2:      |      :clock2:      |  :clock2:   |
| Hebreo     |  `he`  | :heavy_check_mark: |          |      :clock2:      | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |      :clock2:      |                    |  :clock2:   |
| Húngaro    |  `hu`  | :heavy_check_mark: |          |      :clock2:      | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |      :clock2:      |                    |  :clock2:   |
| Indonesio  |  `id`  | :heavy_check_mark: |          |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |                    |  :clock2:   |
| Italiano   |  `it`  | :heavy_check_mark: |          | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |  :clock2:   |
| Japonés    |  `ja`  | :heavy_check_mark: |          |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |                    |  :clock2:   |
| Coreano    |  `ko`  | :heavy_check_mark: |          |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |                    |  :clock2:   |
| Lituano    |  `lt`  | :heavy_check_mark: |          |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |                    |  :clock2:   |
| Neerlandés |  `nl`  | :heavy_check_mark: |          | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |  :clock2:   |
| Polaco     |  `pl`  | :heavy_check_mark: |          |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |                    |  :clock2:   |
| Portugués  |  `pt`  | :heavy_check_mark: |          |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |                    |  :clock2:   |
| Rumano     |  `ro`  | :heavy_check_mark: |          |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |                    |  :clock2:   |
| Ruso       |  `ru`  | :heavy_check_mark: |          |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |                    |  :clock2:   |
| Sueco      |  `sv`  | :heavy_check_mark: |          |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    |                    |  :clock2:   |

## Fase II - Libros, artículos, ayudas de estudio, esquemas e índices

Para cada idioma, el contenido esperado en esta fase es:

- Libros:
  - Libros extrabíblicos: 11 libros previstos
  - Otros libros que se supone que son fuentes: 17 libros planeados
- Artículos:
  - Innerface: 510 planeado
  - Urantian Journal: 11 planeados
  - Fellowship Journal: 23 planeados
  - Fellowship Herald: 225 planeados
  - UB Annotated: 17 previstos
  - Artículos de Jan Herca: 41 previstos
  - Otros: 100 previstos
  - TOTAL: 927 previstos
- Ayudas al estudio: no planificadas.
- Esquemas: no planificados.
- Índices: actualmente se encuentran disponibles los índices para los términos. Se requiere planificar otros.

| Idioma     | Código | Extrabíblicos | Libros fuentes  |     Artículos     |
| ---------- | :----: | :-----------: | :-------------: | :---------------: |
| Búlgaro    |  `bg`  |               |                 |                   |
| Checo      |  `cs`  |               |                 |                   |
| Danés      |  `da`  |               |                 |                   |
| Alemán     |  `de`  |               |                 |                   |
| Griego     |  `el`  |               |                 |                   |
| Inglés     |  `en`  |               | :clock2: 1 / 17 | :clock2: 50 / 927 |
| Español    |  `es`  |               | :clock2: 1 / 17 | :clock2: 50 / 927 |
| Estonio    |  `et`  |               |                 |                   |
| Persa      |  `fa`  |               |                 |                   |
| Finlandés  |  `fi`  |               |                 |                   |
| Francés    |  `fr`  |               |                 |                   |
| Hebreo     |  `he`  |               |                 |                   |
| Húngaro    |  `hu`  |               |                 |                   |
| Indonesio  |  `id`  |               |                 |                   |
| Italiano   |  `it`  |               |                 |                   |
| Japonés    |  `ja`  |               |                 |                   |
| Coreano    |  `ko`  |               |                 |                   |
| Lituano    |  `lt`  |               |                 |                   |
| Neerlandés |  `nl`  |               |                 |                   |
| Polaco     |  `pl`  |               |                 |                   |
| Portugués  |  `pt`  |               |                 |                   |
| Rumano     |  `ro`  |               |                 |                   |
| Ruso       |  `ru`  |               |                 |                   |
| Sueco      |  `sv`  |               |                 |                   |

## Fase III - Traductor

Esta fase incluye algunos desarrollos que actualmente no están planificados.

## Fase IV - Mapas interactivos

Esta fase incluye algunos desarrollos que actualmente no están planificados.

Para cada idioma, el contenido esperado en esta fase es:

- Mapas estáticos: 100 planificados.
- Mapas interactivos: 20 previstos. Por ahora se ha creado un mapa para probar.

| Idioma     | Código | Mapas estáticos | Mapas interactivos |
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

## Fase V - Presentaciones

Esta fase incluye algunos desarrollos que actualmente no están planificados. También se requiere planificar una lista de presentaciones a incluir.

## Fase VI - Modelos 3D

Esta fase incluye algunos desarrollos que actualmente no están planificados. También se requiere planificar una lista de modelos 3D a incluir.

## Resumen

La siguiente tabla resume todos los avances con cada tipo de contenido:

| Idioma     | Código | Libro Urantia (1)  |      LU Audio      | LU Imágenes | Términos |     Biblia (1)     | Libros Extra - bíblicos | Libros Fuentes  |     Artículos     | Ayudas de estudio | Esquemas | Mapas estáticos | Mapas Interactivos | Presentaciones | Modelos 3D |
| ---------- | :----: | :----------------: | :----------------: | :---------: | :------: | :----------------: | :---------------------: | :-------------: | :---------------: | :---------------: | :------: | :-------------: | :----------------: | :------------: | :--------: |
| Búlgaro    |  `bg`  | :heavy_check_mark: |                    |  :clock2:   |          | :heavy_check_mark: |                         |                 |                   |                   |          |                 |                    |                |            |
| Checo      |  `cs`  | :heavy_check_mark: |                    |  :clock2:   |          | :heavy_check_mark: |                         |                 |                   |                   |          |                 |                    |                |            |
| Danés      |  `da`  | :heavy_check_mark: |                    |  :clock2:   |          | :heavy_check_mark: |                         |                 |                   |                   |          |                 |                    |                |            |
| Alemán     |  `de`  | :heavy_check_mark: |                    |  :clock2:   |          | :heavy_check_mark: |                         |                 |                   |                   |          |                 |                    |                |            |
| Griego     |  `el`  | :heavy_check_mark: |                    |  :clock2:   |          | :heavy_check_mark: |                         |                 |                   |                   |          |                 |                    |                |            |
| Inglés     |  `en`  | :heavy_check_mark: | :heavy_check_mark: |  :clock2:   | :clock2: | :heavy_check_mark: |       :clock2:          | :clock2: 1 / 17 | :clock2: 50 / 927 |                   |          | :clock2: 1 / 20 |                    |                |            |
| Español    |  `es`  | :heavy_check_mark: | :heavy_check_mark: |  :clock2:   | :clock2: | :heavy_check_mark: |                         | :clock2: 1 / 17 | :clock2: 50 / 927 |                   |          | :clock2: 1 / 20 |                    |                |            |
| Estonio    |  `et`  | :heavy_check_mark: |                    |  :clock2:   |          |                    |                         |                 |                   |                   |          |                 |                    |                |            |
| Persa      |  `fa`  | :heavy_check_mark: |                    |  :clock2:   |          | :heavy_check_mark: |                         |                 |                   |                   |          |                 |                    |                |            |
| Finlandés  |  `fi`  | :heavy_check_mark: |                    |  :clock2:   |          | :heavy_check_mark: |                         |                 |                   |                   |          |                 |                    |                |            |
| Francés    |  `fr`  | :heavy_check_mark: |      :clock2:      |  :clock2:   |          |      :clock2:      |                         |                 |                   |                   |          |                 |                    |                |            |
| Hebreo     |  `he`  | :heavy_check_mark: |                    |  :clock2:   |          |      :clock2:      |                         |                 |                   |                   |          |                 |                    |                |            |
| Húngaro    |  `hu`  | :heavy_check_mark: |                    |  :clock2:   |          |      :clock2:      |                         |                 |                   |                   |          |                 |                    |                |            |
| Indonesio  |  `id`  | :heavy_check_mark: |                    |  :clock2:   |          |                    |                         |                 |                   |                   |          |                 |                    |                |            |
| Italiano   |  `it`  | :heavy_check_mark: |                    |  :clock2:   |          | :heavy_check_mark: |                         |                 |                   |                   |          |                 |                    |                |            |
| Japonés    |  `ja`  | :heavy_check_mark: |                    |  :clock2:   |          |                    |                         |                 |                   |                   |          |                 |                    |                |            |
| Coreano    |  `ko`  | :heavy_check_mark: |                    |  :clock2:   |          |                    |                         |                 |                   |                   |          |                 |                    |                |            |
| Lituano    |  `lt`  | :heavy_check_mark: |                    |  :clock2:   |          |                    |                         |                 |                   |                   |          |                 |                    |                |            |
| Neerlandés |  `nl`  | :heavy_check_mark: |                    |  :clock2:   |          | :heavy_check_mark: |                         |                 |                   |                   |          |                 |                    |                |            |
| Polaco     |  `pl`  | :heavy_check_mark: |                    |  :clock2:   |          |                    |                         |                 |                   |                   |          |                 |                    |                |            |
| Portugués  |  `pt`  | :heavy_check_mark: |                    |  :clock2:   |          |                    |                         |                 |                   |                   |          |                 |                    |                |            |
| Rumano     |  `ro`  | :heavy_check_mark: |                    |  :clock2:   |          |                    |                         |                 |                   |                   |          |                 |                    |                |            |
| Ruso       |  `ru`  | :heavy_check_mark: |                    |  :clock2:   |          |                    |                         |                 |                   |                   |          |                 |                    |                |            |
| Sueco      |  `sv`  | :heavy_check_mark: |                    |  :clock2:   |          |                    |                         |                 |                   |                   |          |                 |                    |                |            |

(1) El Libro de Urantia y la Biblia con _Paramony_ incluidos.

## Tareas planificadas

Aquí puedes encontrar una lista de tareas que actualmente no están activas. Si eres un colaborador o quieres serlo, consulta esta lista con frecuencia para ver dónde puedes hacer tus mejores aportaciones. Si una tarea está indentada debajo de la anterior, eso significa que la tarea depende de la anterior para comenzar.

- El libro de Urantia :blue_book: :
  - Revisión de la traducción automática de las notas al pie del _Paramony_ excepto en: `es` y `en`.
- La Biblia :closed_book: :
  - Obtener una Biblia de dominio público: `et`, `fi`, `fr`, `he`, `hu`, `id`, `ja`, `ko`, `lt`, `pl`, `pt` , `ro`, `ru`, `sv`.
  - Traducción automática de las notas a pie de página del Paramony: todos los idiomas excepto `bg`, `en` y `es`.
    - Revisión de la traducción anterior: todos los idiomas excepto `en` y `es`
- El índice de Términos :card_index: :
  - Producir la primera versión para `en` y `es`. Esta es una tarea pesada que ha sido dividida por letras del alfabeto. Las letras `A` a `G` ya están terminadas y quedan las letras `H` a `Z`.
    - Traducción automática del índice de Términos: no se recomienda iniciar estas tareas hasta que se complete la anterior porque algún proceso automático ayudará aquí.
      - Revisión de la traducción anterior: como se indicó anteriormente, no se recomienda comenzar esta tarea hasta que se produzca la primera versión para `en` y `es`.
- Libros :books: :
  - Obtener libros extrabíblicos de dominio público: todos los idiomas.
  - Obtener libros que se suponen fuentes (descargándolos de la Web o escaneando): los libros suelen estar en `en`.
    - Traducción automática de los libros anteriores: todos los idiomas excepto `en`.
      - Revisión de la traducción anterior: todos los idiomas excepto `en`.
- Artículos :page_with_curl: :
  - Traducción automática de artículos: todos los idiomas excepto `en`.
    - Revisión de la traducción anterior: todos los idiomas excepto `en`.
- Ayudas para el estudio :notebook: :
  - Planificar una lista de ayudas de estudio a incluir.
- Esquemas :memo: :
  - Planificar una lista de esquemas a incluir.
- Índices :capital_abcd: :
  - Planificar una lista de índices a incluir.
- Mapas :earth_americas: :
  - Crear una geodatabase y proyectos QGIS para la generación automática de mapas en SVG, mapas de imágenes HTML (mapas estáticos), y KML (mapas interactivos).
    - Traducción automática de los textos en mapas: todos los idiomas.
      - Revisión de las traducciones anteriores: todos los idiomas.
- Presentaciones :bar_chart: :
  - Planificar una lista de presentaciones a incluir.
- Modelos 3D :globe_with_meridians: :
  - Planificar una lista de escenas 3D a incluir.
- Audio :sound: :
  - Probar soluciones de texto a voz más adecuadas: todos los idiomas.
  - Generación del audio de _El libro de Urantia_: actualmente disponible en `en` y en proceso con `es`.
- Imágenes :sunrise_over_mountains: :
  - Crear un catálogo de imágenes para ilustrar _El libro de Urantia_, la _Biblia_ y el _Índice de Términos_. Actualmente está realizado con la parte IV del Libro de Urantia.
- Vídeo :movie_camera: :
  - Crear una introducción ampliada a Urantiapedia (canal de Youtube).
  - Crear un tutorial avanzado para los colaboradores de Urantiapedia (canal de Youtube).

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table">
  <table style="border-bottom:0.2em solid #c8ccd1;border-left:1px solid #c8ccd1;border-right:1px solid #c8ccd1;border-top:1px solid #c8ccd1;table-layout: fixed; width: 100%;">
    <tbody>
      <tr>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;"><a href="/es/help/languages">Idiomas soportados</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: center;"><a href="/es/help">Índice</a></td>
        <td style="padding:0.4em 0.5em;border:1px solid #c8ccd1;width:33%;text-align: right;"><a href="/es/help/roles">Perfiles de colaboradores</a></td>
      </tr>
    </tbody>
  </table>
</figure>
