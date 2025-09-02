---
title: "Criação de um catálogo de auxílios de estudo"
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
        <td><a href="/pt/help/github_articles_markdown">Obter artigos</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_studyaids_markdown">Obter auxílios de estudo</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Aqui está como criar um catálogo de auxílios de estudo _O Livro de Urântia_.

A diferença entre um artigo e um auxílio de estudo é que o primeiro é simplesmente um texto curto, geralmente aparecendo em uma revista, e em _Urantiapedia_ será uma única página da web; enquanto o segundo é um texto mais completo, que em _Urantiapedia_ pode ser uma página ou várias dentro de uma pasta (como livros), e que é sobretudo orientado para o estudo e compreensão de um tópico complexo do *O Livro de Urântia*.

Distinguimos entre um e outro, embora posteriormente todos sejam salvos no projeto na mesma pasta `/pt/article`, ao lado dos diagramas, e a distinção pode ser um pouco tênue e artificial dependendo do tipo de conteúdo. Ele é mantido no mesmo local para que todo o material criado pelo mesmo autor, exceto livros, seja reunido na mesma pasta ou seção de _Urantiapedia_.

## Processo

O processo é idêntico ao explicado para os artigos. Consulte [Criando um catálogo de artigos](/pt/help/github_articles_catalog). A lista provisória de auxílios de estudo pode ser encontrada aqui: [Auxílios de estudo planejados](/en/index/study_aids).

Para editar essa lista, você pode fazer isso de duas maneiras:

- Faça login aqui em _Urantiapedia_. Vá para a lista de auxílios de estudo: [auxílios de estudo planejados](/en/index/study_aids). Coloque a página em edição no menu _Page actions > Edit_ no painel de botões superior direito. Um editor Markdown simples será aberto, onde você poderá editar a listagem. (IMPORTANTE: para poder fazer isso, você precisa de um Administrador para habilitar as permissões de edição nessa página.)
- No projeto GitHub modifique este arquivo: `/output/wikijs/en/index/study_aids.html`. Para modificá-lo, você pode simplesmente baixar esse arquivo ou todo o projeto do GitHub. Veja a [Ajuda dos Editores Assistentes](/pt/help/github_assistant) para saber como baixar coisas do GitHub.

Em qualquer um dos dois casos anteriores, o arquivo a ser editado é um arquivo Markdown muito simples onde para cada auxílio de estudo deve ser incluído o seguinte, na forma de uma tabela:

- Um sinalizador `:white_square_button:` indicando que o auxílio de estudo ainda não foi criado.
- Título.
- O autor.
- Alguns rótulos opcionais que categorizam o auxílio de estudo.
- O URL de onde essa ajuda pode ser baixada.

Por exemplo:

```
| Status                | Title                             | Author                | Tags       | URL                                                           |
| ----------------------| ----------------------------------| ----------------------| ---------- | -------------------------------------------------------------- |
| :white_square_button: | "Study of the Master Universe"    | William S. Sadler Jr. | Astronomia | https://www.urantia.org/en/urantia-book/study-the-urantia-book |
```

## Enviando arquivos

Se você modificou a listagem do arquivo no GitHub, você tem duas opções para confirmar suas alterações: se você for um “Editor Chefe” use o GitHub conforme detalhado na [Ajuda do Editor Chefe](/pt/help/github) ; se você for um “Editor Assistente”, você pode simplesmente enviar esse arquivo Markdown modificado para o e-mail de qualquer Administrador ou para urantiapedia@gmail.com.

## Links externos

- [Urantiapedia Tools - projeto GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_articles_markdown">Obter artigos</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_studyaids_markdown">Obter auxílios de estudo</a></td>
      </tr>
    </tbody>
  </table>
</figure>
