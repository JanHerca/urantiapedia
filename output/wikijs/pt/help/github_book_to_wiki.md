---
title: Convertendo O Livro de Urântia de JSON com notas de rodapé para Wiki.js incluindo referências a tópicos
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
        <td><a href="/pt/help/github_footnotes">Adicionar notas de rodapé do Paramony</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_bible_to_wiki">Conversão da Bíblia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Esta tarefa está atualmente encerrada e fechada para os 25 idiomas disponíveis.
{.is-info}

Os arquivos do *Livro de Urântia* no formato JSON com as notas de rodapé são gerados com a ferramenta *Update Bible Refs in Urantia Book (JSON)*, como já vimos, e os arquivos resultantes são salvos em `input folders / json / book- xx-footnotes`.

Para converter esses arquivos JSON para o formato Wiki.js, siga estas etapas:
- Abra *Urantiapedia Tools*.
- Em *Processo* selecione: Converter _Livro de Urântia_ (JSON) + _Enciclopédia_ (TXT) para Wiki.js.
- As pastas são preenchidas automaticamente: para *arquivos TXT* uma como `input / txt / topic-index-xx`, para *arquivos JSON* uma como `input / json / book-xx-footnotes` e para *Arquivos HTML * um como `output / wikijs / xx / The_Urantia_Book` (mas se `xx` = `en` é omitido). Se a pasta de saída existir, crie todo o caminho em seu projeto. Se já houver arquivos Wiki.js na pasta de saída, os existentes serão substituídos.
- Em *Categorias de Tópicos* selecione `TODOS` para que ao realizar o processo de conversão todos os tópicos de todas as categorias sejam usados ​​e links em *O Livro de Urântia* sejam adicionados a todos os tópicos, ou alternativamente, selecione apenas uma categoria para gerar apenas links para tópicos que pertencem a essa categoria.
- Clique em *Executar*.
- Se tudo estiver correto aparecerá *Conversão executada com sucesso*. Em caso de erros, a lista de erros aparecerá. Neste caso, é aconselhável notificar um dos usuários *desenvolvedores* sobre o erro.

![](/image/help/upt_json_wiki.png)

Os arquivos de saída têm formato HTML. Serão gerados 197 arquivos, um para cada papel do *O Livro de Urântia*.

Os arquivos de saída já estão no formato que permite o upload direto para *Urantiapedia* usando o projeto [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Verifique [upload de conteúdo em massa para Urantiapedia](/pt/help/github_upload).

## Links externos

- [Urantiapedia Tools - projeto GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - projeto GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundação Urântia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_footnotes">Adicionar notas de rodapé do Paramony</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_bible_to_wiki">Conversão da Bíblia</a></td>
      </tr>
    </tbody>
  </table>
</figure>