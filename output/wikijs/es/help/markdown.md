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
        <td><a href="/es/help/web_markdown_editor">Uso del editor Markdown</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/web_html_editor">Uso del editor HTML</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Visión general

Markdown es un lenguaje de marcado ligero con sintaxis de formato de texto plano. Es la sintaxis de facto para escribir documentación en los principales repositorios de código, como GitHub.

*Urantiapedia* admite la [especificación completa CommonMark](https://spec.commonmark.org/) + agrega algunas extensiones útiles (incluidos los complementos Github Flavored Markdown). Mediante el uso deal de `markdown-it` se soportan [plugins de sintaxis](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

Esta es una lista completa del marcado Markdown que es compatible con *Urantiapedia*. Para cada elemento admitido, tiene: cómo usarlo en el editor, accesos directos si existen y ejemplos con el marcado y el resultado. Eche un vistazo a todas las opciones disponibles antes de usar el formato Markdown en cualquier página.

---

## Encabezados

### Tab {.tabset}

#### Uso
Mediante 1 a 6 símbolos **almohadilla**, seguidos de un espacio, antes del texto.

#### Acceso
- En la línea deseada, haz clic en el botón desplegable ![Header](https://docs.requarks.io/assets/ui/ui-markdown-headers.png =x30){.radius-4} en la barra de herramientas.
- En la línea deseada, presiona <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Derecha</kbd> para aumentar el nivel del encabezado.
- En la línea deseada, presiona <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Izquierda</kbd> para disminuir el nivel del encabezado.

#### Ejemplos

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

### Tab {.tabset}

#### Uso

Usando símbolos de **triple guion** en una línea dedicada.

#### Acceso
- Haciendo clic en el botón ![Regla horizontal](https://docs.requarks.io/assets/ui/ui-markdown-hr.png =x30){.radius-4} en la barra de herramientas.

#### Ejemplos

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

### Tab {.tabset}

#### Uso
Escribe con normalidad en el texto.

#### Ejemplos

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

“Bermudas, comillas dobles” y ‘comillas simples’

## Énfasis

### Tab {.tabset}

#### Uso

Cursiva: uso de un símbolo de **asterisco simple** antes y después de la selección de texto.

Negrita: Usar símbolos de **doble asterisco** antes y después de la selección de texto.

#### Acceso
- Seleccionando texto y luego haciendo clic en el botón ![Bold](/assets/ui/ui-markdown-bold.png =x30){.radius-4} en la barra de herramientas.
- Seleccionando texto, luego presionando <kbd>CTRL</kbd> + <kbd>B</kbd>

#### Ejemplos

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

### Tab {.tabset}

#### Uso
Usar un símbolo **mayor que**, seguido de un espacio, antes de cada línea de texto.

#### Acceso
- Seleccionando texto y luego haciendo clic en el botón ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-blockquotes.png =x30){.radius-4} en la barra de herramientas.

#### Ejemplo 1

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

#### Ejemplo 2

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

## Listas no ordenadas

### Tab {.tabset}

#### Uso

Usar un símbolo de **asterisco** o **guión**, seguido de un espacio, antes de cada línea de texto.

#### Acceso
- Seleccionando texto, luego haciendo clic en el botón ![Blockquote](/assets/ui/ui-markdown-ul.png =x30){.radius-4} en la barra de herramientas.

#### Ejemplos

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

#### Estilos

Añadiendo una class en una línea separada, después de la lista, puedes cambiar el aspecto de la lista:

- `links-list`
- `grid-list`

**Markdown**

```markdown
- Grid Item 1
- Grid Item 2
- Grid Item 3
{.grid-list}

- [Lorem ipsum dolor sit amet *Subtitle description here*](https://www.google.com)
- [Consectetur adipiscing elit *Another subtitle description here*](https://www.google.com)
- [Morbi vehicula aliquam *Third subtitle description here*](https://www.google.com)
{.links-list}
```
**Resultado**

- Grid Item 1
- Grid Item 2
- Grid Item 3
{.grid-list}

y

- [Link Title 1 *Subtitle description here*](https://www.google.com)
- [Link Title 2 *Another subtitle description here*](https://www.google.com)
- [Link Title 3 *Third subtitle description here*](https://www.google.com)
{.links-list}

> Ten en cuenta que estos estilos son específicos de Urantiapedia y cambiarán al estilo de lista estándar en otras aplicaciones.
{.is-warning}

## Listas Ordenadas

### Tab {.tabset}

#### Uso

Usando un **número**, seguido de un símbolo de **punto**, seguido de un espacio, antes de cada línea de texto.

#### Acceso
- Seleccionando texto y luego haciendo clic en el botón ![Blockquote](/assets/ui/ui-markdown-ol.png =x30){.radius-4} en la barra de herramientas.

#### Ejemplo 1

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

#### Ejemplo 2

Comenzar numeración con offset:

**Markdown**
```
57. foo
1. bar
```
**Resultado**
57. foo
1. bar

## Código inline

### Tab {.tabset}

#### Uso

Usando un símbolo de **comilla invertida** antes y después de la selección de texto.

#### Acceso
- Seleccionando texto, luego haciendo clic en el botón ![Código en línea](/assets/ui/ui-markdown-inlinecode.png =x30){.radius-4} en la barra de herramientas.

#### Ejemplos

**Markdown**
```
Inline `code`

```
**Resultado**
Inline `code`

## Código indentado

### Tab {.tabset}

#### Uso

Introduciendo tabulaciones delante de cada línea.

#### Ejemplos

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


## Bloques de código con "barreras"

### Tab {.tabset}

#### Uso

Usar símbolos de **triples acentos graves** antes y después de la selección de texto, en líneas dedicadas.

#### Acceso
- Usando la herramienta **Bloque de código** en la barra de herramientas izquierda.

#### Ejemplos

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

### Tab {.tabset}

#### Uso

Separar las celdas de la tabla con la **barra vertical**.

#### Ejemplo 1

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

#### Ejemplo 2

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

### Tab {.tabset}

#### Uso

Usando la sintaxis `[Texto del enlace](Objetivo del enlace)`.

#### Acceso
- Usando la herramienta **Enlace** en la barra de herramientas izquierda.

#### Ejemplos

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

### Tab {.tabset}

#### Uso

Usando la sintaxis `![Imagen de pie de foto](Fuente de la imagen)`.

#### Acceso
- Usando la herramienta **Recursos** en la barra de herramientas izquierda.

#### Ejemplos

**Markdown**
```
![Minion](https://octodex.github.com/images/minion.png =300x300)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat" =300x300)
```

**Resultado**
![Minion](https://octodex.github.com/images/minion.png =300x300)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat" =300x300)

#### Estilo

Al igual que los enlaces, las imágenes también tienen una sintaxis de estilo de nota al pie

**Markdown**
```
![Alt text][id]
```

**Resultado**

![Alt text][id]

#### Referencias

Con una referencia más adelante en el documento que define la ubicación de la URL:

**Markdown**
```
[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat" =300x300
```

**Resultado**

[id]: https://octodex.github.com/images/dojocat.jpg "The Dojocat"

#### Dimensiones

A veces, las imágenes son demasiado grandes o tal vez deseas que la imagen ocupe todo el espacio disponible.

Simplemente en las dimensiones al final de la ruta de la imagen en el siguiente formato:

```
![Image](/link/to/image.jpg =100x50)
```

También puedes omitir uno de los valores para mantener automáticamente la relación de imagen:

```
![Image](/link/to/image.jpg =100x)
![Image](/link/to/image.jpg =x50)
```

También es posible utilizar otras unidades, como %. Útil cuando necesitas que la imagen ocupe todo el espacio disponible:

```
![Image](/link/to/image.jpg =100%x)
```

## SVG

### Tab {.tabset}

#### Uso

SVG se puede incluir como cualquier otro contenido soportado por los navegadores

#### Ejemplo

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

### Tab {.tabset}

#### Uso

Mediante un `iframe` que apunte a un mapa hecho en una plataforma de mapas.

#### Ejemplo

**Markdown**
```
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>
```
**Resultado**
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>

## Emojies

### Tab {.tabset}

#### Uso

Usando la sintaxis `:identifier:`

Ver emojis soportados en [Emoji Cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
Ver [cómo cambiar el output](https://github.com/markdown-it/markdown-it-emoji#change-output) con twemoji.

https://github.com/markdown-it/markdown-it-emoji

#### Ejemplos

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

## Subíndice

### Tab {.tabset}

#### Uso

Usar un símbolo de **tilde simple** antes y después de la selección de texto.

https://github.com/markdown-it/markdown-it-sub

#### Acceso
- Seleccionando texto, luego haciendo clic en el botón ![Subíndice](/assets/ui/ui-markdown-sub.png =x30){.radius-4} en la barra de herramientas.

#### Ejemplos

**Markdown**
```
- H~2~O
```

**Resultado**
- H~2~O

## Superíndice

### Tab {.tabset}

#### Uso

Usando un símbolo de intercalación **único** antes y después de la selección de texto.

https://github.com/markdown-it/markdown-it-sup

#### Atajos
- Seleccionando texto, luego haciendo clic en el botón ![Superíndice](/assets/ui/ui-markdown-sup.png =x30){.radius-4} en la barra de herramientas.

#### Ejemplos

**Markdown**
```
- 19^th^
```

**Resultado**
- 19^th^


## \<ins>

### Tab {.tabset}

#### Uso

https://github.com/markdown-it/markdown-it-ins

#### Ejemplos

**Markdown**
```
++Inserted text++
```

**Resultado**
++Inserted text++

## \<mark>

### Tab {.tabset}

#### Uso

https://github.com/markdown-it/markdown-it-mark

#### Ejemplos

**Markdown**
```
==Marked text==
```

**Resultado**
==Marked text==

## Notas al pie

### Tab {.tabset}

#### Uso

Utiliza la sintaxis `[^1]` para la ubicación de la nota al pie en el texto principal, y `[^1]: esto es una nota al pie` para la nota al pie real. Las propias notas al pie aparecerán automáticamente en la parte inferior de la página debajo de una línea horizontal.

https://github.com/markdown-it/markdown-it-footnote

#### Ejemplos

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

## Listas de definiciones

### Tab {.tabset}

#### Uso

https://github.com/markdown-it/markdown-it-deflist

#### Ejemplos

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

#### Estilo compacto

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

## Abreviaturas 

### Tab {.tabset}

#### Uso

https://github.com/markdown-it/markdown-it-abbr

#### Ejemplos

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

**Markdown**
```
*[HTML]: Hyper Text Markup Language
```

**Resultado**
*[HTML]: Hyper Text Markup Language

## Contenedores personalizados

### Tab {.tabset}

#### Uso

https://github.com/markdown-it/markdown-it-container

#### Ejemplos

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

## Tablas avanzadas

### Tab {.tabset}

#### Uso

https://github.com/RedBug312/markdown-it-multimd-table

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

#### Título agrupado

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

## Mathjax 

### Tab {.tabset}

#### Uso

Veáse los enlaces externos para saber más acerca del uso de Matemáticas en Markdown.

https://github.com/classeur/markdown-it-mathjax

#### Ejemplo 1

Procesa TeX mostrando textos matemáticos

**Markdown**
```
$$1 *2* 3$$

Processes TeX in-line math $1 *2* 3$
```

**Resultado**
$$1 *2* 3$$

Processes TeX in-line math $1 *2* 3$

#### Ejemplo 2

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

#### Ejemplo 3

**Markdown**
```
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11^ O^12^__
```

**Resultado**
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11^ O^12^__

#### Ejemplo 4

**Markdown**
```
$$V = H_0 * D, $$
```

**Resultado**
$$V = H_0 * D, $$

#### Ejemplo 5

**Markdown**
```
In most part yes, in $1/4$ no.
```

**Resultado**
In most part yes, in $1/4$ no.

#### Ejemplo 6

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

#### Ejemplo 7

**Markdown**
```
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D  \end{cases}$$
```

**Resultado**
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D  \end{cases}$$

#### Ejemplo 8

**Markdown**
```
Earth mass = $M^\odot$
```

**Resultado**
Earth mass = $M^\odot$



## Content Tabs

### Tab {.tabset}

#### Uso

Usar encabezados y agregar la clase `{.tabset}` al encabezado principal. El texto del encabezado principal no se mostrará en el resultado final.

Ten en cuenta que puedes usar cualquier nivel de encabezado, siempre que los encabezados secundarios estén un nivel más alto. Por ejemplo, si un encabezado principal es `###` *(h3)*, los encabezados de las pestañas deben ser `####` *(h4)*. El nivel de encabezado máximo para un padre es 5 y los hijos 6.

#### Ejemplos

```
# Tabs {.tabset}
## First Tab

Any content here will go into the first tab...

## Second Tab

Any content here will go into the second tab...

## Third Tab

Any content here will go into the third tab...
```

## Mostrar teclas

### Tab {.tabset}

#### Uso

Usando `<kbd>` antes y `</kbd>` después de la selección de texto.

#### Acceso
- Seleccionando texto, luego haciendo clic en el botón ![Teclas del teclado](/assets/ui/ui-markdown-kbd.png =x30){.radius-4} en la barra de herramientas.

#### Ejemplos

```html
Lorem ipsum dolor <kbd>CTRL</kbd> + <kbd>C</kbd>
```

Lorem ipsum dolor <kbd>CTRL</kbd> + <kbd>C</kbd>

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
        <td><a href="/es/help/web_markdown_editor">Uso del editor Markdown</a></td>
        <td><a href="/es/help">Índice</a></td>
        <td><a href="/es/help/web_html_editor">Uso del editor HTML</a></td>
      </tr>
    </tbody>
  </table>
</figure>

