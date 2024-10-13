---
title: "Criação de um catálogo de livros de todas as religiões"
description:
published: true
date: 2024-10-10T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2024-10-10T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_upload">Upload em massa de conteúdo para Urantiapedia</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_religious_books_markdown">Obtenha livros de todas as religiões</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Esta tarefa está atualmente concluída e encerrada, embora alterações na lista de livros possam ser propostas enviando um email para urantiapedia@ gmail.com.
{.is-info}

Veja como criar um catálogo de livros de todas as principais religiões do mundo para servir de guia na criação da [Biblioteca Urântiapedia](/pt/book), que é um dos grandes blocos da qual o [projeto Urantiapedia](/pt/help/phases) é composto.

## Contexto

Conforme explicado na motivação da [Biblioteca de Urântia](/pt/book) há razões importantes para os leitores de _O Livro de Urântia_ se esforçarem para conhecer e tornar conhecidos os escritos religiosos de todas as religiões do mundo, especialmente aquelas religiões com longa tradição ou que sempre aceitaram a crença num Deus criador.

O conhecimento das ideias e crenças de todos os povos do mundo é importante para facilitar a simpatia e a compreensão entre raças e nações, e para poder aspirar a um mundo de paz e fraternidade. Temos no Livro de Urântia uma bela imagem que mostra Jesus e um estudante hindu se familiarizando com os escritos de muitas religiões de seu tempo. [LU 130:3.5](/pt/The_Urantia_Book/130#p3_5) É uma passagem inédita e inspiradora da vida de Jesus que, sem dúvida, tem o propósito de nos motivar a tornar mais variadas nossas leituras de livros religiosos.

Assim como Jesus e Ganid fizeram em Alexandria coletando escritos religiosos, o mesmo faremos em Urântiapédia. Vamos criar uma biblioteca digital online que qualquer leitor possa consultar facilmente. E não só isso, também iremos vincular todos esses livros ao restante do conteúdo da Urântiapedia.

## Processo

Nesta tarefa tentaremos criar uma lista de livros de todas as religiões do mundo. O arquivo para esta lista é este:

https://github.com/JanHerca/urantiapedia/blob/master/input/txt/books-en/Religious_books.tsv

Para qualquer modificação deste arquivo no GitHub, as instruções fornecidas aos usuários [Administradores](/pt/help/admin), [Editores Chefes](/pt/help/github) ou [Editores Assistentes](/pt/help/github_assistant) deve ser seguido.

O conteúdo deste arquivo é muito simples:

- É um arquivo TSV, com texto separado por tabulações.
- Cada linha representa uma estante de livros, ou um grupo dentro da estante, ou um subgrupo dentro de um grupo anterior, ou um livro individual.
- A ordem é importante porque a lista mantém uma hierarquia (estante, grupo, subgrupo, livro).
- Todas as linhas possuem três dados separados por duas guias.
- Uma estante possui: nome da estante; referências a sites ou livros dos quais os livros da estante foram obtidos; caminho em Urântiapédia com o índice dessa estante.
- Um grupo possui: nome do grupo; etiqueta `<grupo>`; vazio.
- Um subgrupo possui: nome do subgrupo; tag `<subgrupo>`; vazio.
- Um livro possui: título; Caminho da Urantiapedia para esse livro (se existir); OK (se o livro estiver carregado) ou vazio (se não estiver).

> É altamente recomendável editar arquivos TSV com [Visual Studio Code](https://code.visualstudio.com/) adicionando a extensão [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv), que permite colorir dados e muito mais.
{.is-info}

## Resultado

Com este arquivo o índice da _Urantiapedia Library_ e os índices de cada estante foram criados manualmente (usando _replaces_). Você pode ver o resultado no [Índice de todos os grupos de livros](/pt/index/books). Esta página também está acessível neste site, no menu lateral à esquerda, opção `OUTROS LIVROS \ Índice`. No momento esta página está disponível apenas em inglês, espanhol e francês.

## Links externos

- [Urantiapedia Tools - projeto no GitHub](https://github.com/JanHerca/urantiapedia)

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_upload">Upload em massa de conteúdo para Urantiapedia</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_religious_books_markdown">Obtenha livros de todas as religiões</a></td>
      </tr>
    </tbody>
  </table>
</figure>