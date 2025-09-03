---
title: Markdown format help
description: 
published: true
date: 2022-09-06T09:08:14.892Z
tags: help
editor: markdown
dateCreated: 2022-08-01T19:59:13.093Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/web_markdown_editor">Using the Markdown editor</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/web_html_editor">Using the HTML editor</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
## Overview

Markdown is a lightweight markup language with plain text formatting syntax. It's the de-facto syntax for writing documentation on major code repositories such as GitHub.

*Urantiapedia* supports the full [CommonMark specification](https://spec.commonmark.org/) + adds some useful extensions (including the Github Flavored Markdown addons).

This is a comprehensive list of Markdown markup that is supported in *Urantiapedia*. For each element supported you have: how to use it in editor, shortcuts if exist and examples with the markup and the result. Give a look at all the available options before using Markdown format in any page.

---

## Headings
### Tab {.tabset}

#### Usage
Using between 1 and 6 **hashtag** symbol(s), followed by a space, before the text selection.

#### Shortcuts
- On the desired line, then clicking the ![Header](https://docs.requarks.io/assets/ui/ui-markdown-headers.png =x30){.radius-4} dropdown button in the toolbar.
- On the desired line, press <kbd>CTRL</kbd> + <kbd>ALT</kbd> +  <kbd>Right</kbd> to increase the header level.
- On the desired line, press <kbd>CTRL</kbd> + <kbd>ALT</kbd> +  <kbd>Left</kbd> to decrease the header level.

#### Example

**Markdown**
```
# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```
**Result**
<div style="padding-bottom:5px;color: #1565c0; font-size: 2em;font-weight:bold;background:linear-gradient(90deg,#1976d2,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 3px;">h1 Heading <img src="/_assets/svg/twemoji/1f60e.svg" alt="😎" draggable="false" class="emoji"></div>
<div style="padding-bottom:5px;color: #424242; font-size: 1.5em;font-weight: bold;background:linear-gradient(90deg,#424242,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h2 Heading</div>
<div style="padding-bottom:5px;color: #616161; font-size: 1.17em;font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h3 Heading</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h4 Heading</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h5 Heading</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h6 Heading</div>

For a list of supported emojis see below.

## Horizontal lines

### Tab {.tabset}

#### Usage

Using **triple dash** symbols on a dedicated line.

#### Shortcuts
- By clicking the ![Horizontal Rule](https://docs.requarks.io/assets/ui/ui-markdown-hr.png =x30){.radius-4} button in the toolbar.

#### Examples

**Markdown**
```
___
---
***
```
**Result**
___
---
***

## Typographic replacements

### Tab {.tabset}

#### Usage
Type text as usual.

#### Examples

**Markdown**
```
(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'
```
**Result**

© © ® ® ™ ™ § § ±

test… test… test… test?.. test!..

!!! ??? , – —

“Smartypants, double quotes” and ‘single quotes’

## Emphasis

### Tab {.tabset}

#### Usage

Italic: Using a **single asterisk** symbol before and after the text selection.

Bold: Using **double asterisks** symbols before and after the text selection.

#### Shortcuts
- By selecting text, then clicking the ![Bold](https://docs.requarks.io/assets/ui/ui-markdown-bold.png =x30){.radius-4} button in the toolbar.
- By selecting text, then pressing <kbd>CTRL</kbd> + <kbd>B</kbd>

#### Examples

**Markdown**
```
**This is bold text**
__This is bold text__
*This is italic text*
_This is italic text_
~~Strikethrough~~
***Bold & italic***
```
**Result**
**This is bold text**
__This is bold text__
*This is italic text*
_This is italic text_
~~Strikethrough~~
***Bold & italic***

## Blockquotes

### Tab {.tabset}

#### Usage
Using a **greater-than** symbol, followed by a space, before each line of text.

#### Shortcuts
- By selecting text, then clicking the ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-blockquotes.png =x30){.radius-4} button in the toolbar.

#### Example 1

**Markdown**
```
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
```
**Result**
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

#### Example 2

Custom blockquotes
**Markdown**
```
> This is an info blockquote
{.is-info}

> This is a success blockquote
{.is-success}

> This is a warning blockquote
{.is-warning}

> This is an error blockquote
{.is-danger}
```
**Result**
> This is an info blockquote
{.is-info}

> This is a success blockquote
{.is-success}

> This is a warning blockquote
{.is-warning}

> This is an error blockquote
{.is-danger}

## Unordered Lists

### Tab {.tabset}

#### Usage

Using an **asterisk** or a **dash** symbol, followed by a space, before each line of text.

#### Shortcuts
- By selecting text, then clicking the ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-ul.png =x30){.radius-4} button in the toolbar.

#### Examples

**Markdown**
```
+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
```
**Result**
+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

#### Stylings

By adding a class on a separate line, after the list, you can change the look of the list:

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
**Result**

- Grid Item 1
- Grid Item 2
- Grid Item 3
{.grid-list}

and:

- [Link Title 1 *Subtitle description here*](https://www.google.com)
- [Link Title 2 *Another subtitle description here*](https://www.google.com)
- [Link Title 3 *Third subtitle description here*](https://www.google.com)
{.links-list}

> Note that these stylings are specific to Urantiapedia and will fallback to standard list styling in other applications.
{.is-warning}

## Ordered Lists

### Tab {.tabset}

#### Usage

Using an **number**, followed by a **dot** symbol, followed by a space, before each line of text.

#### Shortcuts
- By selecting text, then clicking the ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-ol.png =x30){.radius-4} button in the toolbar.

#### Example 1

**Markdown**
```
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`
```
**Result**
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

#### Example 2
Start numbering with offset:

**Markdown**
```
1.  foo
2. bar
```
**Result**
57. foo
1. bar

## Code

### Inline code

### Tab {.tabset}

#### Usage

Using **backticks** before and after the text selected.

#### Shortcuts
- By selecting text, then clicking the ![Inline code](https://docs.requarks.io/assets/ui/ui-markdown-inlinecode.png =x30){.radius-4} button on the toolbar.

#### Examples

**Markdown**
```
Inline `code`

```
**Result**
Inline `code`

### Indented code

### Tab {.tabset}

#### Usage

Adding tabs before each line.

#### Examples

**Markdown**
```
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

```
**Result**
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

### Block code “fences”

### Tab {.tabset}

#### Usage

Use **triple backticks** symbols before and after text selection, on dedicated lines.

#### Shortcuts

- Using the **Code Block** tool on the left toolbar.

#### Examples

**Markdown**
~~~
```
Sample text here...
```
~~~
**Result**
```
Sample text here...
```

### Syntax highlighting

### Tab {.tabset}

#### Usage

Use **triple backticks** symbols before and after the text selection, on dedicated lines, and then the programming language code (`js`, `html`, `css`, etc).

#### Shortcuts
- Using the **Code Block** tool on the left toolbar.

#### Examples

**Markdown**
~~~
```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```
~~~
**Result**

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

### Tab {.tabset}

#### Usage

Separate cells in the table using **vertical bar**.

#### Example 1

**Markdown**

```
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

**Result**

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


#### Example 2

Right aligned columns

**Markdown**

```
| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

**Result**

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Links

### Tab {.tabset}

#### Usage

Using the syntax `[Link Text](Link Target)`.

#### Access
- Using the **Link** tool on the left toolbar.

#### Examples

**Markdown**

```
[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)
```

**Result**

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

### Tab {.tabset}

#### Usage

Using the syntax `![Caption Image](Image Source)`.

#### Access
- Using the **Resources** tool on the left toolbar.

#### Examples

**Markdown**
```
![Minion](https://octodex.github.com/images/minion.png =300x300)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat" =300x300)
```

**Result**
![Minion](https://octodex.github.com/images/minion.png =300x300)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat" =300x300)

#### Styling

Like links, Images also have a footnote style syntax

**Markdown**
```
![Alt text][id]
```

**Result**

![Alt text][id]

#### References

With a reference later in the document defining the URL location:

**Markdown**
```
[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat" =300x300
```

**Result**

[id]: https://octodex.github.com/images/dojocat.jpg "The Dojocat"

#### Dimensions

Sometimes the images are too big or maybe you want the image to take up all the available space.

Simply in the dimensions at the end of the image path in the following format:

```
![Image](/link/to/image.jpg =100x50)
```

You can also omit one of the values to automatically maintain the image ratio:

```
![Image](/link/to/image.jpg =100x)
![Image](/link/to/image.jpg =x50)
```

It is also possible to use other units, such as %. Useful when you need the image to take up all the available space:

```
![Image](/link/to/image.jpg =100%x)
```

## SVG

### Tab {.tabset}

#### Usage

SVG can be included as any other content supported by browsers.

#### Examples

**Markdown**

```svg
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

**Result**

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

## Maps

### Tab {.tabset}

#### Usage

By means of an `iframe` that points to a map made on a map platform. This is a temporary way to add dynamic maps until the map editor is available.

#### Example

**Markdown**
```
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>
```
**Result**
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>

## Emojies

### Tab {.tabset}

#### Usage

Using the `:identifier:` syntax

See supported emojis in [Emoji Cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
See [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

https://github.com/markdown-it/markdown-it-emoji

#### Examples

**Markdown**
```
> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)
```

**Result**
> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

See supported emojis at [Emoji Cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
See [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


## Subscript

### Tab {.tabset}

#### Usage

Use a **simple tilde** symbol before and after the text selection.

https://github.com/markdown-it/markdown-it-sub

#### Shortcuts
- Selecting text, then clicking the ![Subscript](https://docs.requarks.io/assets/ui/ui-markdown-sub.png =x30){.radius-4} button on the toolbar .

#### Examples

**Markdown**
```
- H~2~O
```

**Result**
- H~2~O

## Superscript

### Tab {.tabset}

#### Usage

Using a **unique** caret before and after the text selection.

https://github.com/markdown-it/markdown-it-sup

#### Shortcuts
- Selecting text, then clicking the ![Superscript](https://docs.requarks.io/assets/ui/ui-markdown-sup.png =x30){.radius-4} button on the toolbar .

#### Examples

**mark down**
```
- 19^th^
```

**Result**
- 19^th^

## Inserted text

### Tab {.tabset}

#### Usage

https://github.com/markdown-it/markdown-it-ins

#### Examples

**Markdown**
```
++Inserted text++
```

**Result**
++Inserted text++

## Mark text

### Tab {.tabset}

#### Usage

https://github.com/markdown-it/markdown-it-mark

#### Examples

**Markdown**
```
==Marked text==
```

**Result**
==Marked text==

## Footnotes

### Tab {.tabset}

#### Use

Use the syntax `[^1]` for the footnote location in the main text, and `[^1]: this is a footnote` for the actual footnote. The footnotes themselves will automatically appear at the bottom of the page below a horizontal line.

https://github.com/markdown-it/markdown-it-footnote

#### Examples

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

**Result**
Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

## Definition lists

### Tab {.tabset}

#### Use

https://github.com/markdown-it/markdown-it-deflist

#### Examples

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

**Result**
Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

#### Compact style

**Markdown**
```
Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b
```

**Result**
Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b

## Abbreviations

### Tab {.tabset}

#### Usage

https://github.com/markdown-it/markdown-it-abbr

#### Examples

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

**Markdown**
```
*[HTML]: Hyper Text Markup Language
```

**Result**
*[HTML]: Hyper Text Markup Language

## Custom containers

### Tab {.tabset}

#### Usage

https://github.com/markdown-it/markdown-it-container

#### Examples

**Markdown**
```
::: warning
*here be dragons*
:::
```

**Result**
::: warning
*here be dragons*
:::

## Advanced tables

### Tab {.tabset}

#### Usage

https://github.com/RedBug312/markdown-it-multimd-table

#### With grouping, alignment, and scaping

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

**Result**
|             |          Grouping           ||
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*        ||
Content       |   **Cell**    |         Cell |

New section   |     More      |         Data |
And more      | With an escaped \|       ||
[Prototype table]

#### With multiline

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

**Result**
|   Markdown   | Rendered HTML |
|--------------|---------------|
|    *Italic*  | *Italic*      | \
|              |               |
|    - Item 1  | - Item 1      | \
|    - Item 2  | - Item 2      |
|    ```python | ```python       \
|    .1 + .2   | .1 + .2         \
|    ```       | ```           |

#### With rowspan

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

**Result**
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

#### Title grouped

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

**Result**
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

## Mathematical expressions (Mathjax)

### Tab {.tabset}

#### Usage

See the external links to learn more about using Math in Markdown.

https://github.com/classeur/markdown-it-mathjax

#### Example 1

Processes TeX displayed math

**Markdown**
```
$$1 *2* 3$$

Processes TeX in-line math $1 *2* 3$
```

**Result**
$$1 *2* 3$$

#### Example 2

Processes TeX in-line math $1 *2* 3$

**Markdown**
```
When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$


$$\frac{1}{\sqrt{x^2 + 1}}$$
```

**Result**
When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

$$\frac{1}{\sqrt{x^2 + 1}}$$

#### Example 3

**Markdown**
```
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11^ O^12^__
```

**Result**
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11^ O^12^__


#### Example 4

**Markdown**
```
$$V = H_0 * D, $$
```

**Result**
$$V = H_0 * D, $$

#### Example 5

**Markdown**
```
In most part yes, in $1/4$ no.
```

**Result**
In most part yes, in $1/4$ no.

#### Example 6

**Markdown**
```
description	| code | examples
--- | --- | ---
Greek letters |	\alpha \beta \gamma \rho \sigma \delta \epsilon	| $\alpha \beta \gamma \rho \sigma \delta \epsilon$
Binary operators | \times \otimes \oplus \cup \cap | $\times \otimes \oplus \cup \cap$
Relation operators | < > \subset \supset \subseteq \supseteq | $< > \subset \supset \subseteq \supseteq$
Others | \int \oint \sum \prod | $\int \oint \sum \prod$
```

**Result**
description	| code | examples
--- | --- | ---
Greek letters |	\alpha \beta \gamma \rho \sigma \delta \epsilon	| $\alpha \beta \gamma \rho \sigma \delta \epsilon$
Binary operators | \times \otimes \oplus \cup \cap | $\times \otimes \oplus \cup \cap$
Relation operators | < > \subset \supset \subseteq \supseteq | $< > \subset \supset \subseteq \supseteq$
Others | \int \oint \sum \prod | $\int \oint \sum \prod$

#### Example 7

**Markdown**
```
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D  \end{cases}$$
```

**Result**
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D  \end{cases}$$

#### Example 8

**Markdown**
```
Earth mass = $M^\odot$
```

**Result**
Earth mass = $M^\odot$

## Content Tabs

### Tab {.tabset}

#### Usage

Use headers and add the `{.tabset}` class to the main header. The main header text will not be displayed in the final result.

Note that you can use any header level, as long as the child headers are one level higher. For example, if a main header is `###` *(h3)*, tab headers should be `####` *(h4)*. The maximum header level for a parent is 5 and children are 6.

#### Examples

```
# Tabs {.tabset}
## FirstTab

Any content here will go into the first tab...

## Second Tab

Any content here will go into the second tab...

## ThirdTab

Any content here will go into the third tab...
```

## Show keyboard keys

### Tab {.tabset}

#### Usage

Using `<kbd>` before and `</kbd>` after the text selection.

#### Access
- Selecting text, then clicking the ![Keyboard Keys](https://docs.requarks.io/assets/ui/ui-markdown-kbd.png =x30){.radius-4} button on the bar of tools.

#### Examples

```html
Lorem ipsum pain <kbd>CTRL</kbd> + <kbd>C</kbd>
```

Lorem ipsum pain <kbd>CTRL</kbd> + <kbd>C</kbd>

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub project](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia Foundation](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)
- [MultiMarkdown User's Guide](https://fletcher.github.io/MultiMarkdown-6/)
- [Markdown Specification](https://commonmark.org/)
- [Markdown Help](https://commonmark.org/help/)
- [Markdown Extended Syntax](https://www.markdownguide.org/extended-syntax/)
- [Markdown Wiki.js Help](https://docs.requarks.io/en/editors/markdown)
- [Emoji Cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
- [Change emoji output](https://github.com/markdown-it/markdown-it-emoji#change-output)
- [Mathjax](https://www.mathjax.org/)
- [Mathjax documentation](http://docs.mathjax.org/en/latest/index.html)
- [LaTeX Math expressions](https://www.overleaf.com/learn/latex/Mathematical_expressions)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/web_markdown_editor">Using the Markdown editor</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/web_html_editor">Using the HTML editor</a></td>
      </tr>
    </tbody>
  </table>
</figure>



