---
title: Traducción del Paramony
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: 
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

Aquí se describen los pasos necesarios para traducir el *Paramony* del inglés a otro idioma de la *Urantiapedia*. Esta es una tarea que la realizan los «Editores Jefe».

El *Paramony* es un fichero con las referencias cruzadas entre la *La Biblia* y *El Libro de Urantia*. Ha sido creado usando la relación de referencias cruzadas desarrollado por Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), convertido de su formato original TXT a un formato JSON que es más fácil de procesar.

Partimos de la versión en inglés del *Paramony* que se encuentra en `input/json/footnotes-book-en.json`. Hay que hacer una copia y cambiar el nombre por el del idioma de destino.

El *Paramony* contiene las notas al pie (con las referencias a *La Biblia*) que hay que incluir en cada documento de *El Libro de Urantia*.

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

## Links

- [Empezar con la Urantiapedia](/es/help/start)
- [Contenido de la Urantiapedia](/es/help/content)
- [Urantiapedia - Idiomas soportados](/es/help/languages)
- [Manual para Administradores](/es/help/admin)
- [Manual para Desarrolladores](/es/help/devs)
- [Manual para Editores Jefe](/es/help/github)
- [Urantiapedia status - Progreso actual del proyecto](/es/help/status)

## External links

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)