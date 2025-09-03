---
title: "Obter auxílios de estudo"
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
        <td><a href="/pt/help/github_studyaids_catalog">Criando um catálogo de auxílios de estudo</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_religious_books_catalog">Criação de um catálogo de livros de todas as religiões</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Aqui é descrito como obter os auxílios de estudo do _O Livro de Urântia_, que foram catalogados seguindo a tarefa [Criando um catálogo de auxílios de estudo](/pt/help/github_studyaids_catalog).

## Processo

Tudo o que foi dito sobre livros em [Obter artigos](/pt/help/github_articles_markdown) também se aplica aqui. Os auxílios de estudo geralmente são encontrados como artigos, na forma de uma página da Web que já os hospeda, como PDF sem texto ou como PDF com texto. De qualquer forma, o primeiro passo é converter o auxílio de estudo para o formato Markdown.

O catálogo de auxílios de estudo está localizado aqui: [Planned Study Aids](/en/index/study_aids).

A tarefa agora é usar o conteúdo dos auxílios de estudo para obter os arquivos Markdown que precisamos.

### Estrutura de auxílios de estudo em Urantiapedia

Se você for um “editor-chefe” e estiver usando a plataforma GitHub, os auxílios de estudo devem ser salvos nestas pastas do projeto GitHub: `/output/wikijs/en/article` para auxílios de estudo em inglês, `/output/wikijs/es/article` para auxílios de estudo de espanhol, etc.

Como você pode ver, usamos as mesmas pastas para artigos e para auxílios de estudo. Isso é feito para que todas as obras (exceto livros) feitas pelo mesmo autor sejam reunidas na mesma pasta do projeto.

Dentro das pastas `article` criaremos outra, caso não exista, com o nome do autor (com espaços em branco substituídos por sublinhados). Por fim, dentro da pasta do autor, criaremos o auxílio de estudo da seguinte forma:
- Se o auxílio de estudo for um documento curto, do tamanho de um artigo, será criado um arquivo Markdown para ele.
- Se o auxílio de estudo for um conjunto longo de partes diferentes, quase um livro, uma pasta será criada para ele e os arquivos individuais do Markdown irão para dentro.


Tanto o arquivo Markdown no caso de auxílio de estudo curto quanto a pasta para um auxílio de estudo extenso serão nomeados com um nome exclusivo seguindo este critério:
- O nome usará o título do auxílio de estudo, mas o mais curto possível.
- O nome estará sempre em inglês, portanto, se o artigo original não estiver em inglês, o título será traduzido.
- Os espaços em branco são substituídos por sublinhados.
- Caracteres especiais como dois pontos ou exclamações são removidos.
- Por exemplo, se o título de um auxílio de estudo for *Study of the Master Universe*, um nome possível seria `Study_of_the_Master_Universe`. Se o título fosse *Las enseñanzas de Jesús* (espanhol), o nome seria `Jesus_teachings`.

Se você é um “Assistente Editor” e não vai usar a plataforma GitHub para enviar arquivos, basta criar uma pasta no seu PC para deixar os apostilas que você criou. Então, quando você enviar seu trabalho para um Administrador, ele cuidará de criar as pastas corretas.


### Formato básico de um auxílio de estudo em Urantiapedia

O formato a utilizar é o Markdown, que é extremamente simples de formatar em comparação com outras alternativas.

O “Editor Assistente” deve revisar o texto e adicionar o seguinte:
- Um cabeçalho em cada arquivo.
- Imediatamente abaixo do cabeçalho, indicação do autor.
- Marcas de seções dentro de cada arquivo que compõe o auxílio de estudo.
- Corrigir parágrafos.
- Negrito e itálico.
- Citações.
- Imagens.
- Referências a imagens.
- Notas de rodapé.
- Tabelas.
- Fórmulas matemáticas ou caracteres em notação científica.

Todos esses elementos já foram explicados ao falar sobre como formatar capítulos de livros: [Obter livros “fonte”](/pt/help/github_sourcebooks_markdown). Todas as instruções dadas também se aplicam aqui no caso de auxílios de estudo.

## Enviando arquivos

Se você for um “editor-chefe” usando o GitHub, poderá enviar auxílios de estudo conforme detalhado na [Ajuda do editor-chefe](/pt/help/github); se você for um “Editor Assistente”, você pode simplesmente enviar os arquivos Markdown para o e-mail de qualquer Administrador ou para urantiapedia@gmail.com.

## Links externos

- [Urantiapedia Tools - projeto GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_studyaids_catalog">Criando um catálogo de auxílios de estudo</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_religious_books_catalog">Criação de um catálogo de livros de todas as religiões</a></td>
      </tr>
    </tbody>
  </table>
</figure>