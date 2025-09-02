---
title: Urantiapedia - Fluxo de trabalho para criar conteúdo inicial em uma linguagem
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
        <td><a href="/pt/help/github_edit_local">Conteúdo do projeto GitHub</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_paramony">Tradução Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Para cada idioma a ser incorporado na *Urantiapedia* serão usadas as seguintes _entradas_: 
- Uma tradução oficial de *O Livro de Urântia* , ou o original para o inglês, em formato HTML. Este conteúdo será deixado na pasta `input/html/book-xx` do projeto no GitHub, onde `xx` é o código do idioma de duas letras (`es` = espanhol, `en` = inglês, etc.) . No caso da língua espanhola, uma vez que existem várias traduções, `book-es` conterá a chamada edição europeia, `book-es-1993` a tradução de 1993, e `book-es-2021` a tradução de 2021 . Se esta situação de diversas traduções ocorrer no futuro em outras línguas, um acordo semelhante será adotado. 
- Uma tradução isenta de royalties da *Bíblia* que seja o mais padronizada possível no idioma em questão. O formato será LaTeX e os arquivos serão deixados na pasta `input/tex/bible-xx` do projeto no GitHub, onde `xx` é o código do idioma. 
- Uma cópia de *Paramony* em espanhol (a ideia é que sirva de guia para tradução, o conteúdo em espanhol é o menos importante) encontrada em `input/markdown/es/paramony`. Os *Paramony* são referências cruzadas entre *A Bíblia* e *O Livro de Urântia* encontrados em `input/markdown/en/paramony`. Ele foi criado usando o relacionamento de referência cruzada desenvolvido por Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), convertido de seu formato TXT original para um formato Markdown que é mais fácil de processar. Na pasta Inglês estão as tabelas com todas as informações originais; Nas pastas dos demais idiomas encontram-se simplesmente as tabelas com os textos que são traduzidos.
- Uma cópia do *Índice de Termos* em inglês. Este índice é composto por uma coleção de arquivos encontrados na pasta `input/txt/topic-index-en`. Esses arquivos TXT foram obtidos do apêndice da edição da *Urantia Fellowship* do *The Urantia Book* ([Topic Index](https://urantia-book.org/urantiabook/topical_index/index.htm)), que nós será referido daqui em diante como *Índice de Termos*. Este *Índice de Termos* foi convertido em um grupo de arquivos TXT, um para cada letra do alfabeto, com os termos que começam com cada letra em inglês. A cópia deve ser renomeada modificando as duas últimas letras pelas do código do idioma. Por exemplo, para francês você deve criar uma cópia da pasta inglês e chamar essa cópia de `input/txt/topic-index-fr`. 

Em resumo, para o exemplo francês o conteúdo a ser criado como entrada seria: 

```
input
    html
        book-fr
            *.html
    markdown
        fr
            paramony
                *.md
    tex
        bible-fr
            *.tex
    txt
        topic-index-fr
            *.txt
```
Para qualquer outra linguagem isso seria feito de maneira semelhante. Parte desse conteúdo já pode estar disponível no projeto atual no GitHub. É aconselhável revisar o que existe antes de incorporar novos conteúdos. 

O resultado que o conteúdo anterior em francês geraria seria o seguinte:

```
output
    wikijs
        fr
            Bible
                (pastas com os livros da Bíblia)
                    *.html
            index
                *.html
            The_Urantia_Book
                *.html
            The_Urantia_Book_Multiple
                *.html
            topic
                *.html
```

Uma vez as pastas e arquivos estão organizados conforme indicado, cada uma das tarefas necessárias será realizada para criar os arquivos finais usando as *Ferramentas Urantiapedia* e algumas edições manuais. Isto é detalhado nas páginas subsequentes deste manual.

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_edit_local">Conteúdo do projeto GitHub</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_paramony">Tradução Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>