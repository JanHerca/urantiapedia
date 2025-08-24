---
title: Adicionando notas de rodapé ao Livro de Urântia em JSON
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
        <td><a href="/pt/help/github_book_json">Conversão para JSON</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_book_to_wiki">Convertendo o Livro de Urântia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Esta tarefa está atualmente encerrada e fechada para os 25 idiomas disponíveis.
{.is-info}

## Procedimento antigo (obsoleto)

> Este procedimento foi atualizado porque era muito trabalhoso. Veja abaixo.
{.is-warning}

Adicionar notas de rodapé ao *O Livro de Urântia* requer a conclusão prévia das seguintes tarefas:
- Tradução de *Paramony* do inglês para o idioma de destino. O resultado desta tarefa é um arquivo para cada idioma (`input / json / footnotes-book-xx.json`).
- Tarefa anterior de converter *O Livro de Urântia* de HTML para JSON sem notas de rodapé. O resultado desta tarefa é um conjunto de 197 arquivos em uma pasta para cada idioma (`input / json / book-xx`).

Para adicionar notas de rodapé a arquivos JSON, siga estas etapas:
- Abra *Urantiapedia Tools*.
- Em *Processo* selecione: Atualizar Referências Bíblicas no Livro de Urântia (JSON).
- As pastas são preenchidas automaticamente: para arquivos *JSON* um como `input / json / book-xx`.
- Clique em *Executar*.
- Se tudo estiver correto aparecerá *Conversão executada com sucesso*. Em caso de erros, a lista de erros aparecerá. Neste caso, é aconselhável notificar um dos usuários *desenvolvedores* sobre o erro.

![](/image/help/upt_json_json.png)

Os arquivos de saída são diferentes dos arquivos de entrada para evitar que, se houver algum problema, eles fiquem inutilizáveis. A saída é salva nas pastas `input / json / book-xx-footnotes`, onde `xx` é o código do idioma igual ao usado como pasta de entrada.

## Novo Procedimento

A adição de notas de rodapé a *O Livro de Urântia* requer a realização das seguintes tarefas:
- Tradução de *Paramony* do inglês para a língua de chegada. O resultado desta tarefa é um ficheiro para cada idioma (`input/markdown/xx/paramony/The Urantia Book.md`).
- Pré-conversão de *O Livro de Urântia* de HTML para JSON sem notas de rodapé. O resultado desta tarefa é um conjunto de 197 ficheiros numa pasta para cada idioma (`input/json/book-xx`).

Para adicionar notas de rodapé a ficheiros JSON, siga os seguintes passos:
- Abra as *Ferramentas da Urântia*.
- Em *Processo*, selecione: Atualizar Referências Bíblicas em *O Livro de Urântia* (MARKDOWN).
- As pastas necessárias são selecionadas automaticamente: para *JSON Files*, será `input/json/book-xx`.
- Clique em *Executar*.
Se tudo estiver correto, é apresentada a mensagem *Conversão concluída com sucesso*. Se existirem erros, a lista de erros é apresentada. Neste caso, é recomendável notificar um dos utilizadores "desenvolvedores" caso exista algum problema com o software.

Os ficheiros de saída são diferentes dos ficheiros de entrada para evitar que se tornem inutilizáveis ​​em caso de problemas. A saída é guardada nas pastas `input/json/book-xx-footnotes`, onde `xx` é o código de idioma idêntico ao utilizado como pasta de entrada.

![](/image/help/upt_md_json.png)

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
        <td><a href="/pt/help/github_book_json">Conversão para JSON</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_book_to_wiki">Convertendo o Livro de Urântia</a></td>
      </tr>
    </tbody>
  </table>
</figure>