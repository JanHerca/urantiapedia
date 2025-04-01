---
title: "Criação de catálogo de artigos"
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
        <td><a href="/pt/help/github_upload">Carregar conteúdo em massa para Urantiapedia</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_articles_markdown">Obter artigos</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Aqui está como criar um catálogo de artigos escritos por leitores relacionados ao _O Livro de Urântia_.

## Processo

A lista provisória de artigos pode ser encontrada aqui: [Artigos planejados](/en/index/articles).

A lista, atualmente muito extensa, está organizada por fonte. As fontes que estão sendo usadas agora são:

- Websites das Associações de Urântia
- A revista _Innerface International_
- A revista _Urantian Journal_
- A revista _Jornal da Sociedade_
- A revista _Fellowship Herald_
- Artigos do projeto _UB Annotated & UBTheNews_, de Halbert Katzen
- Artigos do projeto _Jesus de Nazaré_, de Jan Herca

Os links de onde o material está sendo obtido estão sendo compilados no final dessa lista, aqui: [Referências de artigos](/en/index/articles#references). Quaisquer outras referências onde os artigos dos leitores tenham sido obtidos devem ser incluídas nessa lista.

Para editar a lista de artigos, você pode fazê-lo de duas maneiras:

- Faça login aqui em _Urantiapedia_. Acesse a lista de artigos: [Artigos planejados](/en/index/articles). Coloque a página em edição no menu _Page actions > Edit_ no painel de botões superior direito. Um editor Markdown simples será aberto, onde você poderá editar a listagem. (IMPORTANTE: para poder fazer isso, você precisa de um Administrador para habilitar as permissões de edição nessa página.)
- No projeto GitHub modifique este arquivo: `/output/wikijs/en/index/articles.md`. Para modificá-lo, você pode simplesmente baixar esse arquivo ou todo o projeto do GitHub. Veja a [Ajuda dos Editores Assistentes](/pt/help/github_assistant) para saber como baixar coisas do GitHub.

Em qualquer um dos dois casos anteriores, o arquivo a ser editado é um arquivo Markdown muito simples onde para cada artigo deve ser incluído o seguinte, na forma de uma tabela:

- Uma marca `:white_square_button:` indicando que o artigo ainda não foi criado.
- Um identificador opcional da fonte utilizada.
- A questão se o artigo apareceu em uma revista.
- Título.
- O autor.
- Alguns rótulos opcionais que categorizam o artigo.

Por exemplo:

```
| Status                | Source | Issue        | Title                                                 | Author       | Tags     |
| ----------------------| ------ | ------------ | ------------------------------------------------------| -------------| -------- |
| :white_square_button: | Herald | Vol 01, No 1 | "48 Chromosomes - Are We Asking the Right Questions?" | Ken Glasziou | Biology  |
```

## Enviando arquivos

Se você modificou a listagem do arquivo no GitHub, você tem duas opções para confirmar suas alterações: 1) se você for um “Editor Chefe” use o GitHub conforme detalhado na [Ajuda do Editor Chefe](/pt/help/github); se você for um “Editor Assistente”, você pode simplesmente enviar esse arquivo Markdown modificado para o e-mail de qualquer Administrador ou para urantiapedia@gmail.com.

## Links externos

- [Urantiapedia Tools - projeto GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_upload">Carregar conteúdo em massa para Urantiapedia</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_articles_markdown">Obter artigos</a></td>
      </tr>
    </tbody>
  </table>
</figure>
