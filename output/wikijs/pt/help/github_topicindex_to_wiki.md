---
title: Convertendo Índice de Tópicos de TXT para Wiki.js
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
        <td><a href="/pt/help/github_book_to_wiki">Convertendo o Livro de Urântia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Os arquivos *Topic Index* em formato TXT são criados e revisados ​​por *Editores-chefes*. Esses arquivos devem ser deixados em pastas como `input / txt / topic-index-xx` onde `xx` é o código do idioma de destino.

Para converter esses arquivos TXT para o formato Wiki.js, siga estas etapas:
- Abra *Urantiapedia Tools*.
- Em *Process* selecione: Convert Topic Index (TXT) para Wiki.js.
- As pastas são preenchidas automaticamente: para *arquivos TXT* uma como `input / txt / topic-index-xx`, para *Arquivos HTML* uma como `output / wikijs / xx / topic` (mas se `xx` = `en` é omitido). Se a pasta de saída existir, crie todo o caminho em seu projeto. Se já houver arquivos Wiki.js na pasta de saída, os existentes serão substituídos.
- Em *Categorias de tópicos* selecione `TODOS` para processar todos os tópicos de todas as categorias ou, alternativamente, selecione apenas uma categoria para gerar apenas os tópicos que pertencem a essa categoria.
- Clique em *Executar*.
- Se tudo estiver correto aparecerá *Conversão executada com sucesso*. Em caso de erros, a lista de erros aparecerá. Neste caso, é aconselhável notificar um dos usuários *desenvolvedores* sobre o erro.

![](/image/upt_txt_wiki.png)

Os arquivos de saída têm formato HTML. Um arquivo será gerado para cada tópico.

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
        <td><a href="/pt/help/github_book_to_wiki">Convertendo o Livro de Urântia</a></td>
      </tr>
    </tbody>
  </table>
</figure>