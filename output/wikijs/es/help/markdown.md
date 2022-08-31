---
title: Ayuda del formato Markdown
description: 
published: true
date: 2022-07-30T10:07:46.165Z
tags: 
editor: markdown
dateCreated: 2022-04-05T10:55:15.557Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_upload">Subir contenido de forma masiva a Urantiapedia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</figure>

Este es un listado completo del formato Markdown que es compatible con *Urantiapedia*. Para cada ejemplo se proporciona el marcado y el resultado. Echa un vistazo a todas las opciones disponibles antes de usar el formato Markdown en cualquier página.

---

## Encabezados

**Markdown**
```
# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```
**Resultado**
<div style="padding-bottom:5px;color: #1565c0; font-size: 2em;font-weight:bold;background:linear-gradient(90deg,#1976d2,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 3px;">h1 Heading <img src="/_assets/svg/twemoji/1f60e.svg" alt="😎" draggable="false" class="emoji"></div>
<div style="padding-bottom:5px;color: #424242; font-size: 1.5em;font-weight: bold;background:linear-gradient(90deg,#424242,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h2 Heading</div>
<div style="padding-bottom:5px;color: #616161; font-size: 1.17em;font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h3 Heading</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h4 Heading</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h5 Heading</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h6 Heading</div>

Para una lista de emojis soportados ver más abajo. 
## Líneas horizontales

**Markdown**
```
___
---
***
```
**Resultado**
___
---
***

## Reemplazos tipográficos

**Markdown**
```
(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Bermudas, comillas dobles" y 'comillas simples'
```
**Resultado**

© © ® ® ™ ™ § § ±

test… test… test… test?.. test!..

!!! ??? , – —

Bermudas, comillas dobles” y ‘comillas simples’

## Énfasis

**Markdown**
```
**Esto es texto en negrita**
__Esto es texto en negrita__
*Esto es texto en cursiva*
_Esto es texto en cursiva_
~~Tachado~~
***Negrita y cursiva***
```
**Resultado**
**Esto es texto en negrita**
__Esto es texto en negrita__
*Esto es texto en cursiva*
_Esto es texto en cursiva_
~~Tachado~~
***Negrita y cursiva***

## Citas y bloques

**Markdown**
```
> Las citas se pueden anidar...
>> ...usando de signos adicionales de mayor que uno al lado del otro...
> > > ...or with spaces between arrows.
```
**Resultado**
> Las citas se pueden anidar...
>> ...usando de signos adicionales de mayor que uno al lado del otro...
> > > ...o con espacios entre signos.

Bloques personalizadas
**Markdown**
```
> Este es un bloque de información
{.is-info}

> Este es un bloque de éxito
{.is-success}

> Este es un bloque de advertencia
{.is-warning}

> Este es un bloque de error
{.is-danger}
```
**Resultado**
> Este es un bloque de información
{.is-info}

> Este es un bloque de éxito
{.is-success}

> Este es un bloque de advertencia
{.is-warning}

> Este es un bloque de error
{.is-danger}

## Listas

### No ordenadas

**Markdown**
```
+ Crea una lista empezando la línea con `+`, `-`, o `*`
+ Las sub-listas se crean indentando con 2 espacios:
  - Un cambio de carácter fuerza un comienzo de una nueva lista:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Muy fácil!
```
**Resultado**
+ Crea una lista empezando la línea con `+`, `-`, o `*`
+ Las sub-listas se crean indentando con 2 espacios:
  - Un cambio de carácter fuerza un comienzo de una nueva lista:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Muy fácil!

### Ordenadas

**Markdown**
```
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. Puedes usar números secuenciales...
1. ...o mantener todos los números como `1.`
```
**Resultado**
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. Puedes usar números secuenciales...
1. ...o mantener todos los números como `1.`

### Comenzar numeración con offset:

**Markdown**
```
57. foo
1. bar
```
**Resultado**
57. foo
1. bar

## Código

### Código inline

**Markdown**
```
Inline `code`

```
**Resultado**
Inline `code`

### Código indentado

**Markdown**
```
    // Comentario de código
    línea 1 de código
    línea 2 de código
    línea 3 de código

```
**Resultado**
    // Comentario de código
    línea 1 de código
    línea 2 de código
    línea 3 de código


### Bloques de código con "barreras"

**Markdown**
~~~
```
El texto aquí...
```
~~~
**Resultado**
```
El texto aquí...
```

### Remarcado de sintaxis

**Markdown**
~~~
```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```
~~~
**Resultado**

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tablas

**Markdown**

```
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

**Resultado**

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Columnas alineadas a la derecha

**Markdown**

```
| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

**Resultado**

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Enlaces


**Markdown**

```
[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Enlace autoconvertido https://github.com/nodeca/pica (habilitar linkify para verlo)
```

**Resultado**

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Enlace autoconvertido https://github.com/nodeca/pica (habilitar linkify para verlo)


## Imágenes

**Markdown**
```
![Minion](https://octodex.github.com/images/minion.png =300x300)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat" =300x300)
```

**Resultado**
![Minion](https://octodex.github.com/images/minion.png =300x300)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat" =300x300)

Al igual que los enlaces, las imágenes también tienen una sintaxis de estilo de nota al pie

**Markdown**
```
![Alt text][id]
```

**Resultado**

![Alt text][id]

Con una referencia más adelante en el documento que define la ubicación de la URL:

**Markdown**
```
[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat" =300x300
```

**Resultado**

[id]: https://octodex.github.com/images/dojocat.jpg "The Dojocat"

## SVG

SVG se puede incluir como cualquier otro contenido soportado por los navegadores:

**Markdown**

```svg
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

**Resultado**

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

## Mapas

**Markdown**
```
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>
```
**Resultado**
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>

## Plugins

La característica principal de `markdown-it` es un soporte muy efectivo de [plugins de sintaxis](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

**Markdown**
```
> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)
```

**Resultado**
> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

Ver emojis soportados en [Emoji Cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
Ver [cómo cambiar el output](https://github.com/markdown-it/markdown-it-emoji#change-output) con twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

**Markdown**
```
- 19^th^
- H~2~O
```

**Resultado**
- 19^th^
- H~2~O

### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

**Markdown**
```
++Inserted text++
```

**Resultado**
++Inserted text++

### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

**Markdown**
```
==Marked text==
```

**Resultado**
==Marked text==

### [Notas al pie](https://github.com/markdown-it/markdown-it-footnote)

**Markdown**
```
Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
```

**Resultado**
Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### [Listas de definiciones](https://github.com/markdown-it/markdown-it-deflist)

**Markdown**
```
Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.
```

**Resultado**
Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

**Markdown**
```
Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b
```

**Resultado**
Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b

### [Abreviaturas](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

**Markdown**
```
*[HTML]: Hyper Text Markup Language
```

**Resultado**
*[HTML]: Hyper Text Markup Language

### [Contenedores personalizados](https://github.com/markdown-it/markdown-it-container)

**Markdown**
```
::: warning
*here be dragons*
:::
```

**Resultado**
::: warning
*here be dragons*
:::

### [Tablas avanzadas](https://github.com/RedBug312/markdown-it-multimd-table)

#### Con agrupación, alineación y escape

**Markdown**
```
|             |          Grouping           ||
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*        ||
Content       |   **Cell**    |         Cell |

New section   |     More      |         Data |
And more      | With an escaped \|       ||
[Prototype table]
```

**Resultado**
|             |          Grouping           ||
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*        ||
Content       |   **Cell**    |         Cell |

New section   |     More      |         Data |
And more      | With an escaped \|       ||
[Prototype table]

#### Con multilínea

**Markdown**
```
|   Markdown   | Rendered HTML |
|--------------|---------------|
|    *Italic*  | *Italic*      | \
|              |               |
|    - Item 1  | - Item 1      | \
|    - Item 2  | - Item 2      |
|    ```python | ```python       \
|    .1 + .2   | .1 + .2         \
|    ```       | ```           |
```

**Resultado**
|   Markdown   | Rendered HTML |
|--------------|---------------|
|    *Italic*  | *Italic*      | \
|              |               |
|    - Item 1  | - Item 1      | \
|    - Item 2  | - Item 2      |
|    ```python | ```python       \
|    .1 + .2   | .1 + .2         \
|    ```       | ```           |

#### Con celdas agrupadas

**Markdown**
```
Stage | Direct Products | ATP Yields
----: | --------------: | ---------:
Glycolysis | 2 ATP ||
^^ | 2 NADH | 3--5 ATP |
Pyruvaye oxidation | 2 NADH | 5 ATP |
Citric acid cycle | 2 ATP ||
^^ | 6 NADH | 15 ATP |
^^ | 2 FADH2 | 3 ATP |
**30--32** ATP |||
[Net ATP yields per hexose]
```

**Resultado**
Stage | Direct Products | ATP Yields
----: | --------------: | ---------:
Glycolysis | 2 ATP ||
^^ | 2 NADH | 3--5 ATP |
Pyruvaye oxidation | 2 NADH | 5 ATP |
Citric acid cycle | 2 ATP ||
^^ | 6 NADH | 15 ATP |
^^ | 2 FADH2 | 3 ATP |
**30--32** ATP |||
[Net ATP yields per hexose]

**Markdown**
```
| Archetypes ||
--- | ---
Adam and Eve | Faith 
Lucifer | Prophecy 
Satan Guardian | Angels 
Melchizedek | Life after death 
Seraphim | The Kingdom of Heaven 
Heaven | The Apostles 
Hell | Jesus and the stories of His Life and Teachings 
Salvation | The “Second Coming” 
```

**Resultado**
| Archetypes ||
--- | ---
Adam and Eve | Faith 
Lucifer | Prophecy 
Satan Guardian | Angels 
Melchizedek | Life after death 
Seraphim | The Kingdom of Heaven 
Heaven | The Apostles 
Hell | Jesus and the stories of His Life and Teachings 
Salvation | The “Second Coming” 

### [Mathjax](https://github.com/classeur/markdown-it-mathjax)

Procesa TeX mostrando textos matemáticos

**Markdown**
```
$$1 *2* 3$$

Processes TeX in-line math $1 *2* 3$
```

**Resultado**
$$1 *2* 3$$

Processes TeX in-line math $1 *2* 3$

**Markdown**
```
When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$


$$\frac{1}{\sqrt{x^2 + 1}}$$
```

**Resultado**
When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

$$\frac{1}{\sqrt{x^2 + 1}}$$

**Markdown**
```
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11^ O^12^__
```

**Resultado**
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11^ O^12^__

**Markdown**
```
$$V = H_0 * D, $$
```

**Resultado**
$$V = H_0 * D, $$

**Markdown**
```
In most part yes, in $1/4$ no.
```

**Resultado**
In most part yes, in $1/4$ no.

**Markdown**
```
description	| code | examples
--- | --- | ---
Greek letters |	\alpha \beta \gamma \rho \sigma \delta \epsilon	| $\alpha \beta \gamma \rho \sigma \delta \epsilon$
Binary operators | \times \otimes \oplus \cup \cap | $\times \otimes \oplus \cup \cap$
Relation operators | < > \subset \supset \subseteq \supseteq | $< > \subset \supset \subseteq \supseteq$
Others | \int \oint \sum \prod | $\int \oint \sum \prod$
```

**Resultado**
description	| code | examples
--- | --- | ---
Greek letters |	\alpha \beta \gamma \rho \sigma \delta \epsilon	| $\alpha \beta \gamma \rho \sigma \delta \epsilon$
Binary operators | \times \otimes \oplus \cup \cap | $\times \otimes \oplus \cup \cap$
Relation operators | < > \subset \supset \subseteq \supseteq | $< > \subset \supset \subseteq \supseteq$
Others | \int \oint \sum \prod | $\int \oint \sum \prod$

**Markdown**
```
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D  \end{cases}$$
```

**Resultado**
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D  \end{cases}$$

**Markdown**
```
Earth mass = $M^\odot$
```

**Resultado**
Earth mass = $M^\odot$

Veáse los enlaces externos para saber más acerca del uso de Matemáticas en Markdown.

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)
- [Guía de Usuario de MultiMarkdown](https://fletcher.github.io/MultiMarkdown-6/)
- [Especificación Markdown](https://commonmark.org/)
- [Ayuda de Markdown](https://commonmark.org/help/)
- [Sintaxis Extendida Markdown](https://www.markdownguide.org/extended-syntax/)
- [Ayuda de Markdown Wiki.js](https://docs.requarks.io/en/editors/markdown)
- [Emoji Cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
- [Cambiar salida de emojis](https://github.com/markdown-it/markdown-it-emoji#change-output)
- [Mathjax](https://www.mathjax.org/)
- [Documentación de Mathjax](http://docs.mathjax.org/en/latest/index.html)
- [Expresiones matemáticas con LaTeX](https://www.overleaf.com/learn/latex/Mathematical_expressions)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/es/help/github_upload">Subir contenido de forma masiva a Urantiapedia</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</figure>

