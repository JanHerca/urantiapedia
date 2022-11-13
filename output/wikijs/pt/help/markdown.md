---
title: Ajuda do formato Markdown
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
        <td><a href="/pt/help/web_markdown_editor">Usando o editor Markdown</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/web_html_editor">Usando o editor HTML</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
## Visão geral

Markdown é uma linguagem de marcação leve com sintaxe de formatação de texto simples. É a sintaxe de fato para escrever documentação nos principais repositórios de código, como o GitHub.

*Urantiapedia* suporta a [especificação CommonMark](https://spec.commonmark.org/) completa + adiciona algumas extensões úteis (incluindo os addons Github Flavored Markdown).

Esta é uma lista abrangente de marcação Markdown que é suportada em *Urantiapedia*. Para cada elemento suportado você tem: como usar no editor, atalhos se existirem e exemplos com a marcação e o resultado. Dê uma olhada em todas as opções disponíveis antes de usar o formato Markdown em qualquer página.

---

## Títulos
### Aba {.tabset}

#### Uso
Usando entre 1 e 6 símbolos **hashtag**, seguidos de um espaço, antes da seleção do texto.

#### Atalhos
- Na linha desejada, clique no botão suspenso ![Header](https://docs.requarks.io/assets/ui/ui-markdown-headers.png =x30){.radius-4} na barra de ferramentas.
- Na linha desejada, pressione <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Direita</kbd> para aumentar o nível do cabeçalho.
- Na linha desejada, pressione <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Esquerda</kbd> para diminuir o nível do cabeçalho.

#### Exemplo

**Markdown**
```
# h1 Título 8-)
## h2 Título
### h3 Título
#### h4 Título
##### h5 Título
###### h6 Título
```
**Resultado**
<div style="padding-bottom:5px;color: #1565c0; font-size: 2em;font-weight:bold;background:linear-gradient(90deg,#1976d2,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 3px;">h1 Título <img src="/_assets/svg/twemoji/1f60e.svg" alt="😎" draggable="false" class="emoji"></div>
<div style="padding-bottom:5px;color: #424242; font-size: 1.5em;font-weight: bold;background:linear-gradient(90deg,#424242,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h2 Título</div>
<div style="padding-bottom:5px;color: #616161; font-size: 1.17em;font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h3 Título</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h4 Título</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h5 Título</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h6 Título</div>

Para obter uma lista de emojis compatíveis, veja abaixo.

## Linhas horizontais

### Aba {.tabset}

#### Uso

Usando símbolos de **traço triplo** em uma linha dedicada.

#### Atalhos
- Ao clicar no botão ![Regra horizontal](https://docs.requarks.io/assets/ui/ui-markdown-hr.png =x30){.radius-4} na barra de ferramentas.

#### Exemplos

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

## Substituições tipográficas

### Aba {.tabset}

#### Uso
Digite o texto como de costume.

#### Exemplos

**Markdown**
```
(c) (C) (r) (R) (tm) (TM) (p) (P) +-

teste... teste... teste... teste?... teste!....

!!!!!! ???? ,, -- ---

"Smartypants, aspas duplas" e 'aspas simples'
```
**Resultado**

© © ® ® ™ ™ § § ±

teste… teste… teste… teste?.. teste!..

!!! ??? ,--

“Smartypants, aspas duplas” e 'aspas simples'

## Ênfase

### Aba {.tabset}

#### Uso

Itálico: Usando um símbolo de **asterisco único** antes e depois da seleção do texto.

Negrito: usando símbolos **duplos asteriscos** antes e depois da seleção do texto.

#### Atalhos
- Selecionando o texto e clicando no botão ![Bold](https://docs.requarks.io/assets/ui/ui-markdown-bold.png =x30){.radius-4} na barra de ferramentas.
- Selecionando o texto e pressionando <kbd>CTRL</kbd> + <kbd>B</kbd>

#### Exemplos

**Markdown**
```
**Este é um texto em negrito**
__Este é um texto em negrito__
*Este é o texto em itálico*
_Este é o texto em itálico_
~~Tachado~~
***Negrito itálico***
```
**Resultado**
**Este é um texto em negrito**
__Este é um texto em negrito__
*Este é o texto em itálico*
_Este é o texto em itálico_
~~Tachado~~
***Negrito itálico***

## Citações em bloco

### Aba {.tabset}

#### Uso
Usando um símbolo **maior que**, seguido por um espaço, antes de cada linha de texto.

#### Atalhos
- Ao selecionar o texto e clicar no botão ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-blockquotes.png =x30){.radius-4} na barra de ferramentas.

#### Exemplo 1

**Markdown**
```
> Blockquotes também podem ser aninhados...
>> ...usando sinais adicionais de maior que um ao lado do outro...
> > > ...ou com espaços entre as setas.
```
**Resultado**
> Blockquotes também podem ser aninhados...
>> ...usando sinais adicionais de maior que um ao lado do outro...
> > > ...ou com espaços entre as setas.

#### Exemplo 2

Citações personalizadas
**Markdown**
```
> Esta é uma citação de bloco de informações
{.is-info}

> Esta é uma frase de sucesso
{.is-success}

> Esta é uma citação de bloco de aviso
{.is-warning}

> Esta é uma citação de bloco de erro
{.is-danger}
```
**Resultado**
> Esta é uma citação de bloco de informações
{.is-info}

> Esta é uma frase de sucesso
{.is-success}

> Esta é uma citação de bloco de aviso
{.is-warning}

> Esta é uma citação de bloco de erro
{.is-danger}

## Listas não ordenadas

### Aba {.tabset}

#### Uso

Usando um símbolo de **asterisco** ou **traço**, seguido por um espaço, antes de cada linha de texto.

#### Atalhos
- Selecionando o texto e clicando no botão ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-ul.png =x30){.radius-4} na barra de ferramentas.

#### Exemplos

**Markdown**
```
+ Crie uma lista iniciando uma linha com `+`, `-` ou `*`
+ As sublistas são feitas recuando 2 espaços:
  - A alteração do caractere marcador força o início de uma nova lista:
    * Ac tristique libero volutpat em
    + Facilisis em pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Muito fácil!
```
**Resultado**
+ Crie uma lista iniciando uma linha com `+`, `-` ou `*`
+ As sublistas são feitas recuando 2 espaços:
  - A alteração do caractere marcador força o início de uma nova lista:
    * Ac tristique libero volutpat em
    + Facilisis em pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Muito fácil!

#### Estilos

Ao adicionar uma classe em uma linha separada, após a lista, você pode alterar a aparência da lista:

- `lista de links`
- `lista de grade`

**Markdown**

```markdown
- Grade Item 1
- Grade Item 2
- Grade Item 3
{.grid-list}

- [Lorem ipsum dolor sit amet *Descrição da legenda aqui*](https://www.google.com)
- [Consectetur adipiscing elit *Outra descrição da legenda aqui*](https://www.google.com)
- [Morbi vehicula aliquam *Descrição da terceira legenda aqui*](https://www.google.com)
{.links-list}
```
**Resultado**

- Grade Item 1
- Grade Item 2
- Grade Item 3
{.grid-list}

e:

- [Link Title 1 *Descrição da legenda aqui*](https://www.google.com)
- [Link Title 2 *Outra descrição da legenda aqui*](https://www.google.com)
- [Link Title 3 *Descrição da terceira legenda aqui*](https://www.google.com)
{.links-list}

> Observe que esses estilos são específicos para Urantiapedia e retornarão ao estilo de lista padrão em outros aplicativos.
{.is-warning}

## Listas ordenadas

### Aba {.tabset}

#### Uso

Usando um **número**, seguido por um símbolo de **ponto**, seguido por um espaço, antes de cada linha de texto.

#### Atalhos
- Ao selecionar o texto e clicar no botão ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-ol.png =x30){.radius-4} na barra de ferramentas.

#### Exemplo 1

**Markdown**
```
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Inteiro molestie lorem em massa


1. Você pode usar números sequenciais...
1. ...ou mantenha todos os números como '1.'
```
**Resultado**
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Inteiro molestie lorem em massa


1. Você pode usar números sequenciais...
1. ...ou mantenha todos os números como '1.'

#### Exemplo 2
Comece a numeração com deslocamento:

**Markdown**
```
1. foo
2. barra
```
**Resultado**
57. fo
1. barra

## Código

### Código embutido

### Aba {.tabset}

#### Uso

Usando **backticks** antes e depois do texto selecionado.

#### Atalhos
- Ao selecionar o texto e clicar no botão ![Código embutido](https://docs.requarks.io/assets/ui/ui-markdown-inlinecode.png =x30){.radius-4} na barra de ferramentas.

#### Exemplos

**Markdown**
```
`código` embutido

```
**Resultado**
`código` embutido

### Código recuado

### Aba {.tabset}

#### Uso

Adicionando guias antes de cada linha.

#### Exemplos

**Markdown**
```
    // Alguns comentários
    linha 1 do código
    linha 2 do código
    linha 3 do código

```
**Resultado**
    // Alguns comentários
    linha 1 do código
    linha 2 do código
    linha 3 do código

### Código de bloco "cercas"

### Aba {.tabset}

#### Uso

Use símbolos de **crase triplo** antes e depois da seleção de texto, em linhas dedicadas.

#### Atalhos

- Usando a ferramenta **Code Block** na barra de ferramentas esquerda.

#### Exemplos

**Markdown**
~~~
```
Exemplo de texto aqui...
```
~~~
**Resultado**
```
Exemplo de texto aqui...
```

### Realce de sintaxe

### Aba {.tabset}

#### Uso

Use símbolos de **acentos graves** triplos antes e depois da seleção de texto, em linhas dedicadas e, em seguida, o código da linguagem de programação (`js`, `html`, `css`, etc).

#### Atalhos
- Usando a ferramenta **Code Block** na barra de ferramentas esquerda.

#### Exemplos

**Markdown**
~~~
``` js
var foo = function (bar) {
  return++;
};

console.log(foo(5));
```
~~~
**Resultado**

``` js
var foo = function (bar) {
  return++;
};

console.log(foo(5));
```

## Tabelas

### Aba {.tabset}

#### Uso

Separe as células na tabela usando **barra vertical**.

#### Exemplo 1

**Markdown**

```
| Opção | Descrição |
| ------ | ----------- |
| dados | caminho para arquivos de dados para fornecer os dados que serão passados ​​em modelos. |
| motor | mecanismo a ser usado para o processamento de modelos. O guidão é o padrão. |
| ramal | extensão a ser usada para arquivos dest. |
```

**Resultado**

| Opção | Descrição |
| ------ | ----------- |
| dados | caminho para arquivos de dados para fornecer os dados que serão passados ​​em modelos. |
| motor | mecanismo a ser usado para o processamento de modelos. O guidão é o padrão. |
| ramal | extensão a ser usada para arquivos dest. |


#### Exemplo 2

Colunas alinhadas à direita

**Markdown**

```
| Opção | Descrição |
| ------:| -----------:|
| dados | caminho para arquivos de dados para fornecer os dados que serão passados ​​em modelos. |
| motor | mecanismo a ser usado para o processamento de modelos. O guidão é o padrão. |
| ramal | extensão a ser usada para arquivos dest. |
```

**Resultado**

| Opção | Descrição |
| ------:| -----------:|
| dados | caminho para arquivos de dados para fornecer os dados que serão passados ​​em modelos. |
| motor | mecanismo a ser usado para o processamento de modelos. O guidão é o padrão. |
| ramal | extensão a ser usada para arquivos dest. |

## Links

### Aba {.tabset}

#### Uso

Usando a sintaxe `[Link Text](Link Target)`.

#### Acesso
- Usando a ferramenta **Link** na barra de ferramentas à esquerda.

#### Exemplos

**Markdown**

```
[texto do link](http://dev.nodeca.com)

[link com título](http://nodeca.github.io/pica/demo/ "texto do título!")

Link convertido automaticamente https://github.com/nodeca/pica (habilite o linkify para ver)
```

**Resultado**

[texto do link](http://dev.nodeca.com)

[link com título](http://nodeca.github.io/pica/demo/ "texto do título!")

Link convertido automaticamente https://github.com/nodeca/pica (habilite o linkify para ver)


## Imagens

### Aba {.tabset}

#### Uso

Usando a sintaxe `![Caption Image](Image Source)`.

#### Acesso
- Usando a ferramenta **Recursos** na barra de ferramentas à esquerda.

#### Exemplos

**Markdown**
```
![Minion](https://octodex.github.com/images/minion.png =300x300)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "O Stormtroopocat" =300x300)
```

**Resultado**
![Minion](https://octodex.github.com/images/minion.png =300x300)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "O Stormtroopocat" =300x300)

#### Estilo

Assim como os links, as imagens também têm uma sintaxe de estilo de nota de rodapé

**Markdown**
```
![Texto alternativo][id]
```

**Resultado**

![Texto alternativo][id]

#### Referências

Com uma referência posterior no documento definindo o local da URL:

**Markdown**
```
[id]: https://octodex.github.com/images/dojocat.jpg "O Dojocat" =300x300
```

**Resultado**

[id]: https://octodex.github.com/images/dojocat.jpg "O Dojocat"

#### Dimensões

Às vezes as imagens são muito grandes ou talvez você queira que a imagem ocupe todo o espaço disponível.

Simplesmente nas dimensões no final do caminho da imagem no seguinte formato:

```
![Imagem](/link/to/image.jpg =100x50)
```

Você também pode omitir um dos valores para manter automaticamente a proporção da imagem:

```
![Imagem](/link/to/image.jpg =100x)
![Imagem](/link/to/image.jpg =x50)
```

Também é possível usar outras unidades, como %. Útil quando você precisa que a imagem ocupe todo o espaço disponível:

```
![Imagem](/link/to/image.jpg =100%x)
```

## SVG

### Aba {.tabset}

#### Uso

O SVG pode ser incluído como qualquer outro conteúdo suportado pelos navegadores.

#### Exemplos

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

### Aba {.tabset}

#### Uso

Por meio de um `iframe` que aponta para um mapa feito em uma plataforma de mapas. Esta é uma maneira temporária de adicionar mapas dinâmicos até que o editor de mapas esteja disponível.

#### Exemplo

**Markdown**
```
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>
```
**Resultado**
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>

## Emojis

### Aba {.tabset}

#### Uso

Usando a sintaxe `:identifier:`

Veja os emojis compatíveis em [Emoji Cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
Veja [como alterar a saída](https://github.com/markdown-it/markdown-it-emoji#change-output) com twemoji.

https://github.com/markdown-it/markdown-it-emoji

#### Exemplos

**Markdown**
```
> Marcação clássica: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Atalhos (emoticons): :-) :-( 8-) ;)
```

**Resultado**
> Marcação clássica: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Atalhos (emoticons): :-) :-( 8-) ;)

Veja os emojis compatíveis em [Emoji Cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
Veja [como alterar a saída](https://github.com/markdown-it/markdown-it-emoji#change-output) com twemoji.


## Subscrito

### Aba {.tabset}

#### Uso

Use um símbolo de **til simples** antes e depois da seleção de texto.

https://github.com/markdown-it/markdown-it-sub

#### Atalhos
- Selecionar texto e clicar no botão ![Subscrito](https://docs.requarks.io/assets/ui/ui-markdown-sub.png =x30){.radius-4} na barra de ferramentas .

#### Exemplos

**Markdown**
```
- H~2~O
```

**Resultado**
- H~2~O

## Sobrescrito

### Aba {.tabset}

#### Uso

Usando um acento circunflexo **único** antes e depois da seleção do texto.

https://github.com/markdown-it/markdown-it-sup

#### Atalhos
- Selecionar texto e clicar no botão ![Superscript](https://docs.requarks.io/assets/ui/ui-markdown-sup.png =x30){.radius-4} na barra de ferramentas .

#### Exemplos

**marca para baixo**
```
- 19^º^
```

**Resultado**
- 19^º^

## Texto inserido

### Aba {.tabset}

#### Uso

https://github.com/markdown-it/markdown-it-ins

#### Exemplos

**Markdown**
```
++Texto inserido++
```

**Resultado**
++Texto inserido++

## Marcar texto

### Aba {.tabset}

#### Uso

https://github.com/markdown-it/markdown-it-mark

#### Exemplos

**Markdown**
```
==Texto marcado==
```

**Resultado**
==Texto marcado==

## Notas de rodapé

### Aba {.tabset}

#### Usar

Use a sintaxe `[^1]` para a localização da nota de rodapé no texto principal e `[^1]: esta é uma nota de rodapé` para a nota de rodapé real. As notas de rodapé aparecerão automaticamente na parte inferior da página, abaixo de uma linha horizontal.

https://github.com/markdown-it/markdown-it-footnote

#### Exemplos

**Markdown**
```
Nota de rodapé 1 link[^primeiro].

Nota de rodapé 2 link[^segundo].

Definição de nota de rodapé embutida^[Texto da nota de rodapé embutida].

Referência de nota de rodapé duplicada[^segundo].

[^primeiro]: Nota de rodapé **pode ter marcação**

    e vários parágrafos.

[^segundo]: Texto da nota de rodapé.
```

**Resultado**
Nota de rodapé 1 link[^primeiro].

Nota de rodapé 2 link[^segundo].

Definição de nota de rodapé embutida^[Texto da nota de rodapé embutida].

Referência de nota de rodapé duplicada[^segundo].

[^primeiro]: Nota de rodapé **pode ter marcação**

    e vários parágrafos.

[^segundo]: Texto da nota de rodapé.

## Listas de definição

### Aba {.tabset}

#### Usar

https://github.com/markdown-it/markdown-it-deflist

#### Exemplos

**Markdown**
```
Termo 1

:   Definição 1
com continuação preguiçosa.

Termo 2 com *marcação inline*

:   Definição 2

        { algum código, parte da Definição 2 }

    Terceiro parágrafo da definição 2.
```

**Resultado**
Termo 1

:   Definição 1
com continuação preguiçosa.

Termo 2 com *marcação inline*

:   Definição 2

        { algum código, parte da Definição 2 }

    Terceiro parágrafo da definição 2.

#### Estilo compacto

**Markdown**
```
Termo 1
  ~ Definição 1

Termo 2
  ~ Definição 2a
  ~ Definição 2b
```

**Resultado**
Termo 1
  ~ Definição 1

Termo 2
  ~ Definição 2a
  ~ Definição 2b

## Abreviaturas

### Aba {.tabset}

#### Uso

https://github.com/markdown-it/markdown-it-abbr

#### Exemplos

Este é um exemplo de abreviação HTML.

Ele converte "HTML", mas mantém entradas parciais intactas como "xxxHTMLyyy" e assim por diante.

**Markdown**
```
*[HTML]: linguagem de marcação de hipertexto
```

**Resultado**
*[HTML]: linguagem de marcação de hipertexto

## Recipientes personalizados

### Aba {.tabset}

#### Uso

https://github.com/markdown-it/markdown-it-container

#### Exemplos

**Markdown**
```
::: warning
*aqui são dragões*
:::
```

**Resultado**
::: warning
*aqui são dragões*
:::

## Tabelas avançadas

### Aba {.tabset}

#### Uso

https://github.com/RedBug312/markdown-it-multimd-table

#### Com agrupamento, alinhamento e escaping

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

#### Com várias linhas

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

#### Com extensão de linha

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

## Expressões matemáticas (Mathjax)

### Aba {.tabset}

#### Uso

Veja os links externos para saber mais sobre como usar o Math no Markdown.

https://github.com/classeur/markdown-it-mathjax

#### Exemplo 1

Processa a matemática exibida no TeX

**Markdown**
```
$$1 *2* 3$$

Processa a matemática em linha do TeX $1 *2* 3$
```

**Resultado**
$$1 *2* 3$$

#### Exemplo 2

Processa a matemática em linha do TeX $1 *2* 3$

**Markdown**
```
Quando $a \ne 0$, existem duas soluções para $ax^2 + bx + c = 0$ e elas são
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$


$$\frac{1}{\sqrt{x^2 + 1}}$$
```

**Resultado**
Quando $a \ne 0$, existem duas soluções para $ax^2 + bx + c = 0$ e elas são
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

$$\frac{1}{\sqrt{x^2 + 1}}$$

#### Exemplo 3

**Markdown**
```
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11 ^ O^12^__
```

**Resultado**
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11 ^ O^12^__


#### Exemplo 4

**Markdown**
```
$$V = H_0 * D, $$
```

**Resultado**
$$V = H_0 * D, $$

#### Exemplo 5

**Markdown**
```
Na maior parte sim, em $ 1/4 $ não.
```

**Resultado**
Na maior parte sim, em $ 1/4 $ não.

#### Exemplo 6

**Markdown**
```
descrição | código | exemplos
--- | --- | ---
letras gregas |	\alpha \beta \gamma \rho \sigma \delta \epsilon	| $\alpha \beta \gamma \rho \sigma \delta \epsilon$
Operadores binários | \times \otimes \oplus \cup \cap | $\times \otimes \oplus \cup \cap$
Operadores de relação | < > \subset \supset \subseteq \supseteq | $< > \subset \supset \subseteq \supseteq$
Outros | \int \oint \sum \prod | $\int \oint \sum \prod$
```

**Resultado**
descrição | código | exemplos
--- | --- | ---
letras gregas | \alpha \beta \gamma \rho \sigma \delta \epsilon | $\alpha \beta \gamma \rho \sigma \delta \epsilon$
Operadores binários | \times \otimes \oplus \cup \cap | $\times \otimes \oplus \cup \cap$
Operadores de relação | < > \subset \supset \subseteq \supseteq | $< > \subset \supset \subseteq \supseteq$
Outros | \int \oint \sum \prod | $\int \oint \soma \prod$

#### Exemplo 7

**Markdown**
```
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D \end{cases}$$
```

**Resultado**
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D \end{cases}$$

#### Exemplo 8

**Markdown**
```
Massa da Terra = $M^\odot$
```

**Resultado**
Massa da Terra = $M^\odot$

## Guias de conteúdo

### Aba {.tabset}

#### Uso

Use cabeçalhos e adicione a classe `{.tabset}` ao cabeçalho principal. O texto do cabeçalho principal não será exibido no resultado final.

Observe que você pode usar qualquer nível de cabeçalho, desde que os cabeçalhos filho estejam um nível acima. Por exemplo, se um cabeçalho principal for `###` *(h3)*, os cabeçalhos das guias devem ser `####` *(h4)*. O nível máximo de cabeçalho para um pai é 5 e os filhos são 6.

#### Exemplos

```
# Abas {.tabset}
## Primeira guia

Qualquer conteúdo aqui irá para a primeira guia...

## Segunda guia

Qualquer conteúdo aqui irá para a segunda guia...

## Terceira guia

Qualquer conteúdo aqui irá para a terceira guia...
```

## Mostrar teclas do teclado

### Aba {.tabset}

#### Uso

Usando `<kbd>` antes e `</kbd>` após a seleção do texto.

#### Acesso
- Selecionar texto e clicar no botão ![Teclas do teclado](https://docs.requarks.io/assets/ui/ui-markdown-kbd.png =x30){.radius-4} na barra de ferramentas.

#### Exemplos

```html
Lorem ipsum pain <kbd>CTRL</kbd> + <kbd>C</kbd>
```

Lorem ipsum pain <kbd>CTRL</kbd> + <kbd>C</kbd>

## Links externos

- [Urantiapedia Tools - projeto GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - projeto GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundação Urântia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)
- [Guia do usuário do MultiMarkdown](https://fletcher.github.io/MultiMarkdown-6/)
- [Especificação de redução](https://commonmark.org/)
- [Ajuda do Markdown](https://commonmark.org/help/)
- [Sintaxe estendida do Markdown](https://www.markdownguide.org/extended-syntax/)
- [Ajuda do Markdown Wiki.js](https://docs.requarks.io/en/editors/markdown)
- [Folha de dicas de emoji](https://www.webfx.com/tools/emoji-cheat-sheet/)
- [Alterar saída de emoji](https://github.com/markdown-it/markdown-it-emoji#change-output)
- [Mathjax](https://www.mathjax.org/)
- [Documentação do Mathjax](http://docs.mathjax.org/en/latest/index.html)
- [Expressões matemáticas do LaTeX](https://www.overleaf.com/learn/latex/Mathematical_expressions)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/web_markdown_editor">Usando o editor Markdown</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/web_html_editor">Usando o editor HTML</a></td>
      </tr>
    </tbody>
  </table>
</figure>



