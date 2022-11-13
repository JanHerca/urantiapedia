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
        <td><a href="/pt/help/github_topicindex_to_wiki">Conversão de índice de tópicos</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Esta tarefa está atualmente encerrada e fechada para os 25 idiomas disponíveis.
{.is-info}

Adicionar notas de rodapé ao *O Livro de Urântia* requer a conclusão prévia das seguintes tarefas:
- Tradução de *Paramony* do inglês para o idioma de destino. O resultado desta tarefa é um arquivo para cada idioma (`input / json / footnotes-book-xx.json`).
- Tarefa anterior de converter *O Livro de Urântia* de HTML para JSON sem notas de rodapé. O resultado desta tarefa é um conjunto de 197 arquivos em uma pasta para cada idioma (`input / json / book-xx`).

Para adicionar notas de rodapé a arquivos JSON, siga estas etapas:
- Abra *Urantiapedia Tools*.
- Em *Processo* selecione: Atualizar Referências Bíblicas no Livro de Urântia (JSON).
- As pastas são preenchidas automaticamente: para arquivos *JSON* um como `input / json / book-xx`.
- Clique em *Executar*.
- Se tudo estiver correto aparecerá *Conversão executada com sucesso*. Em caso de erros, a lista de erros aparecerá. Neste caso, é aconselhável notificar um dos usuários *desenvolvedores* sobre o erro.

![](/image/upt_json_json.png)

Os arquivos de saída são diferentes dos arquivos de entrada para evitar que, se houver algum problema, eles fiquem inutilizáveis. A saída é salva nas pastas `input / json / book-xx-footnotes`, onde `xx` é o código do idioma igual ao usado como pasta de entrada.

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
        <td><a href="/pt/help/github_topicindex_to_wiki">Conversão de índice de tópicos</a></td>
      </tr>
    </tbody>
  </table>
</figure>