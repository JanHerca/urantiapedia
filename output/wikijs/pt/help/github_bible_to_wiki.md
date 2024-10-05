---
title: Convertendo a Bíblia de LaTeX para Wiki.js com notas de rodapé
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
        <td><a href="/pt/help/github_book_to_wiki">Convertendo o Livro de Urântia</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_upload">Carregar conteúdo em massa para Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Esta tarefa está atualmente encerrada e fechada para os 25 idiomas disponíveis.
{.is-info}

Os arquivos *Bíblia* no formato LaTeX devem ter sido criados em pastas como `input /text / bible-xx` onde `xx` é o código do idioma de destino.

Para converter esses arquivos LaTeX para o formato Wiki.js, siga estas etapas:
- Abra *Urantiapedia Tools*.
- Em *Processo* selecione: Converter Bíblia (LaTeX) + Refs (TXT) para Wiki.js.
- As pastas são preenchidas automaticamente: para *arquivos TXT* uma como `input / txt / bible-refs-xx`, para *Arquivos LaTeX* uma como `input / tex / bible-xx` e para *Arquivos HTML* uma como ` output / wikijs / xx / Bible` (mas se `xx` = `en` é omitido). Se a pasta de saída existir, crie todo o caminho em seu projeto. Se já houver arquivos Wiki.js na pasta de saída, os existentes serão substituídos.
- Clique em *Executar*.
- Se tudo estiver correto aparecerá *Conversão executada com sucesso*. Em caso de erros, a lista de erros aparecerá. Neste caso, é aconselhável notificar um dos usuários *desenvolvedores* sobre o erro.

![](/image/help/upt_tex_wiki.png)

Os arquivos de saída têm formato HTML. Será gerado um arquivo para cada capítulo da Bíblia.

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
        <td><a href="/pt/help/github_book_to_wiki">Convertendo o Livro de Urântia</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_upload">Carregar conteúdo em massa para Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>