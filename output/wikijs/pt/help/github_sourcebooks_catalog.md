---
title: "Criando um catálogo de livros «fonte»"
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
        <td><a href="/pt/help/github_upload">Obtenha livros de todas as religiões</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_sourcebooks_markdown">Obter livros “fonte”</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Esta tarefa está atualmente concluída e encerrada, embora alterações na lista de livros possam ser propostas enviando um email para urantiapedia@gmail.com .
{.is-info}

Isto descreve como criar um catálogo de livros que são considerados fontes de *O Livro de Urântia* ou que têm algum relacionamento ou paralelo com *O Livro de Urântia*.

## Contexto

O próprio *Livro de Urântia* oferece duas indicações claras sobre um material humano que foi usado para sua preparação: ([LU 0:12.12](/pt/The_Urantia_Book/0#p12_12) e [LU 121:8.13](/pt/The_Urantia_Book/121#p8_13)). Somado a tudo isso, deve-se notar que *O Livro de Urântia* cita muitas vezes literalmente ou implicitamente livros da *Bíblia*, incluindo livros extra-canônicos, e outros.

Já há algum tempo, vários leitores proeminentes compilaram esses paralelos. O leitor Duane L. Faw publicou um extenso volume intitulado [Paramony](https://www.amazon.com/Paramony-Duane-L-Faw/dp/0965197255/ref=sr_1_2?crid=2FCT0LM14FRVT) no qual ele detalha sobre 60.000 paralelos entre *O Livro de Urântia* e *A Bíblia*. Outro leitor notável, Matthew Block, vem desenvolvendo [um projeto de descoberta paralela](https://urantiabooksources.com/) há anos com livros não-bíblicos escritos até o momento da concepção do *Livro de Urântia*, tendo detectado mais mais de cem livros como fontes potenciais para os autores.

## Processo

Nesta tarefa tentaremos criar uma lista de todos os livros não-bíblicos que foram detectados com paralelos com *O Livro de Urântia*. Uma fonte inestimável para esta listagem é acessar o site anterior de Matthew Block.

A lista provisória de livros pode ser encontrada aqui:

https://github.com/JanHerca/urantiapedia/blob/master/input/txt/books-en/Source_books.tsv

Para qualquer modificação deste arquivo no GitHub, as instruções fornecidas aos usuários [Administradores](/pt/help/admin), [Editores Chefes](/pt/help/github) ou [Editores Assistentes](/pt/help/github_assistant) deve ser seguido.

O conteúdo deste arquivo é muito simples:

- É um arquivo TSV, com texto separado por tabulações.
- Cada linha representa uma estante de livros, seja um grupo dentro da estante ou um livro individual.
- A ordem é importante porque a lista mantém uma hierarquia (estante, grupo, livro).
- Todas as linhas possuem seis dados separados por tabulações.
- Uma estante possui: nome da estante; caminho na Urântiapédia com o índice dessa estante; o resto vazio.
- Um grupo possui: nome do grupo; etiqueta `<grupo>`; o resto vazio.
- Um livro possui: autor; título (incluindo edição entre parênteses); documentos relacionados ao _Livro de Urântia_; nome da pasta com o livro no armazenamento em nuvem, ou `FAILED` se não foi possível localizar uma edição digital apesar de ter tentado, ou vazio se ainda não foi feita nenhuma tentativa de localizar uma edição digital; OK (se houver cópia digital disponível) ou vazio (caso contrário); rota na Urântiapedia se já estiver carregada.

> É altamente recomendável editar arquivos TSV com [Visual Studio Code](https://code.visualstudio.com/) adicionando a extensão [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv), que permite colorir dados e muito mais.
{.is-info}

## Resultado

Com este arquivo o índice da _Urantiapedia Library_ e os índices de cada estante foram criados manualmente (usando _replaces_). Você pode ver o resultado no [Índice de todos os grupos de livros](/pt/index/books). Esta página também está acessível neste site, no menu lateral à esquerda, opção `OUTROS LIVROS \ Índice`. No momento esta página está disponível apenas em inglês, espanhol e francês.

## Links externos

- [Urantiapedia Tools - projeto no GitHub](https://github.com/JanHerca/urantiapedia)
- [Paramony](https://www.amazon.com/Paramony-Duane-L-Faw/dp /0965197255/ref=sr_1_2?crid=2FCT0LM14FRVT)
- [«Fontes» do Livro de Urântia](https://urantiabooksources.com/)

<br>


<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_upload">Obtenha livros de todas as religiões</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_sourcebooks_markdown">Obter livros “fonte”</a></td>
      </tr>
    </tbody>
  </table>
</figure>