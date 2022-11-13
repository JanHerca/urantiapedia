---
title: "Obter diagramas"
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
        <td><a href="/pt/help/github_diagrams_catalog">Criando um catálogo de diagramas</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_images_catalog">Criando um catálogo de imagens</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Aqui está descrito como obter os diagramas do _O Livro de Urântia_, que foram catalogados seguindo a tarefa [Criando um catálogo de diagramas](/pt/help/github_diagrams_catalog).

## Processo

Os diagramas são um tipo de conteúdo muito especial porque não são simples textos com imagens como livros, artigos ou auxílios de estudo.

Os diagramas geralmente estão disponíveis como imagens simples no formato `PNG` ou `JPG`. Os diagramas nestes formatos não são muito úteis porque o que se pretende com os diagramas é ir um passo além do que as imagens oferecem e permitir funcionalidades extras como:
- Hiperlinks em diferentes partes do diagrama
- Pequenas caixas pop-up ao passar o mouse sobre o diagrama.
- Ser capaz de dimensionar o diagrama para cima e para baixo sem perder a qualidade da exibição

Essa funcionalidade nativa no navegador é fornecida apenas pelo formato [SVG](https://www.w3schools.com/graphics/svg_inhtml.asp). O formato [mapa de imagem HTML](https://www.w3schools.com/html/html_images_imagemap.asp) permite apenas hiperlinks.

O processo aqui será, portanto, a conversão de qualquer diagrama para o formato SVG, introduzindo a funcionalidade acima (links, pop-ups e escalabilidade).

### Estrutura dos diagramas em Urantiapedia

Se você for um “editor chefe” e estiver usando a plataforma GitHub, os diagramas devem ser salvos nestas pastas do projeto GitHub: `/output/wikijs/en/article` para diagramas em inglês, `/output/wikijs/es/article` para diagramas em espanhol, etc. Dentro dessas pastas criaremos outra, caso não exista, com o nome do autor (com espaços em branco substituídos por sublinhados). Por fim, dentro da pasta do autor, criaremos um arquivo Markdown com um nome exclusivo seguindo este critério:
  - O nome usará o título do diagrama, mas o mais abreviado possível.
  - O nome estará sempre em inglês, portanto, se o diagrama original não estiver em inglês, o título será traduzido.
  - Os espaços em branco são substituídos por sublinhados.
  - Caracteres especiais como dois pontos ou exclamações são removidos.
  - Por exemplo, se o título de um diagrama for *The Master Universe*, um possível nome de arquivo seria `The_Master_Universe.md`. Se o título fosse *Las personalidades del Espíritu Infinito* (espanhol), o arquivo seria `Personalities_of_Infinite_Spirit.md`.

Se você é um “Assistente Editor” e não vai usar a plataforma GitHub para enviar arquivos, basta criar uma pasta no seu PC para deixar os diagramas que você criar. Então, quando você enviar seu trabalho para um Administrador, ele cuidará de criar as pastas corretas.

### Formato básico de um diagrama em Urantiapedia

O formato a usar é Markdown e dentro dele usaremos SVG.

O “Editor Assistente” deve adicionar o seguinte ao arquivo Markdown:
- Um cabeçalho em cada arquivo.
- Imediatamente abaixo do cabeçalho, indicação do autor.
- Por baixo iria o conteúdo SVG.

Por exemplo, este seria um possível arquivo Markdown muito simplificado:

```
---
title: "O Sol"
description:
published: verdadeiro
date: 2021-11-28T14:02:03.086Z
tags: Cosmologia, Astronomia
publisher: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

Autor: **John Doe**

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

A criação de conteúdo SVG está fora do escopo desta ajuda e envolveria o uso de software de vetorização de imagens como [Inkscape](https://inkscape.org/en/) ou similar. Esta tarefa deve ser realizada por um “Editor Chefe” com experiência na criação de gráficos vetoriais.

## Enviando arquivos

Se você é um “editor chefe” usando o GitHub, pode enviar diagramas conforme detalhado na [Ajuda do editor chefe](/pt/help/github); se você for um “Editor Assistente”, você pode simplesmente enviar os arquivos Markdown para o e-mail de qualquer Administrador ou para urantiapedia@gmail.com.

## Links externos

- [Urantiapedia Tools - projeto GitHub](https://github.com/JanHerca/urantiapedia)
- [Formato SVG](https://www.w3schools.com/graphics/svg_inhtml.asp)
- [Formato de mapa de imagem HTML](https://www.w3schools.com/html/html_images_imagemap.asp)
- [Inkscape](https://inkscape.org/en/)
- [Uma ferramenta interessante para criar mapas de imagens HTML](http://summerstyle.github.io/summer/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_diagrams_catalog">Criando um catálogo de diagramas</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_images_catalog">Criando um catálogo de imagens</a></td>
      </tr>
    </tbody>
  </table>
</figure>