---
title: Urantiapedia - Ajuda do Editor Chefe
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
        <td><a href="/pt/help/admin">Ajuda dos administradores</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_assistant">Ajuda dos editores assistentes</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Sobre Urantiapedia

[Urantiapedia](https://urantiapedia.org) é um site colaborativo baseado em [Wiki.js](https://js.wiki/) com o propósito de ser um centro unificado para a disseminação de todo o conhecimento sobre *O Livro de Urântia*.

## Sobre os campos azuis

[Blue Fields](https://blue-fields.netlify.app/) é um site que foi criado para juntar e organizar os leitores do *O Livro de Urântia* que desejam colaborar em projetos inteligentes, propositais e altruístas em todo o mundo. mundo. É o site que gerencia o cadastro e a colaboração entre os voluntários da *Urantiapedia*.

## Sobre o GitHub

A Urantiapedia tem dois projetos públicos no GitHub: [Urantiapedia](https://github.com/JanHerca/urantiapedia) e [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) criado para servir como um procedimento de inicialização rápida para conteúdo inicial. Ele contém arquivos em determinados formatos e softwares que ajudam a automatizar a criação do conteúdo inicial.

## Para quem é este manual?

Este manual é para usuários chamados “Editores-chefes”, ou usuários que cumprem estes requisitos:
- Eles têm uma conta neste com permissões de edição e outra no [GitHub](https://github.com/).
- Eles podem adicionar conteúdo a ambos os projetos Urantiapedia no GitHub: [Urantiapedia](https://github.com/JanHerca/urantiapedia) e [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Eles podem fazer o carregamento em massa de alterações usando o segundo projeto.
- Eles têm um bom conhecimento de gerenciamento de Git e GitHub.
- Eles têm um bom conhecimento do *O Livro de Urântia* em pelo menos um idioma no qual ele é publicado, mas melhor se for o inglês e um segundo idioma no qual o livro é traduzido.
- Eles desejam colaborar de forma altruísta na adição de informações relacionadas ao *O Livro de Urântia* na *Urântiapédia*.

## Fluxo de trabalho do GitHub

O processo para um “Editor Chefe” será o seguinte:
1. Cria um *fork* (uma cópia em sua própria conta) de projetos *Urantiapedia* no GitHub:
  - https://github.com/JanHerca/urantiapedia
  - https://github.com/JanHerca/urantiapedia-backup
2. Cria uma cópia local dos projetos no PC. A cópia local deve ser da versão mais recente do conteúdo da *Urantiapedia* (o branch master). Isso é feito primeiro por meio de uma ação *clone* e depois por meio de ações *pulls* para os projetos, que baixam qualquer alteração na cópia local.
3. Faz alterações na cópia local do projeto Urantiapedia nos arquivos indicados neste manual e na forma explicada. Ele ou ela se compromete com a cópia local.
4. Envia alterações parciais (não prontas para serem carregadas na web) para o projeto *Urantiapedia* no GitHub através de um *push*. Quando há um conjunto de alterações pronto para a web, sincroniza o projeto local *Urantiapedia* com o projeto local *Urantiapedia-backup* e carrega as alterações no GitHub por meio de um *push*.
5. Em seguida, cria um *pull requests* do site do GitHub para ambos os projetos: *Urantiapedia* e *Urantiapedia-backup*.
6. Esses *pull requests* de “Editores-chefes” são revisados ​​por “Administrators”, que são responsáveis ​​por fazer um *merge* com o branch principal (master) de todas as mudanças que estiverem corretas. Quaisquer alterações que não estejam corretas serão rejeitadas e os “Editores Chefes” serão notificados para corrigi-las.
7. Quando as alterações estão OK um “Administrador” faz uma *merge* delas e elas são carregadas automaticamente para a web. Eles geralmente estão disponíveis em alguns minutos, dependendo do número de alterações e do tipo.

![](/image/help/github_workflow_version_2.png)

## Configurando o projeto *Urantiapedia*

Antes de qualquer trabalho no *Urantiapedia* usando o GitHub, você deve configurar todas as ferramentas necessárias. Verifique [Configurando o projeto GitHub](/pt/help/github_setting).

## Conteúdo do projeto Urantiapedia no GitHub

Para conhecer o conteúdo do projeto GitHub e sua estrutura, consulte [Content of GitHub project](/pt/help/github_content).
## Tarefas

Para saber sobre os marcos do projeto, consulte [Milestones of Urantiapedia](/pt/help/phases).

### Marco I: O Livro de Urântia, a Bíblia e o Índice de Tópicos

1. Traduzindo *Paramony* do inglês para o idioma de destino. Verifique [Tradução do Paramony](/pt/help/github_paramony).
2. Traduzindo e revisando o *Topic Index* do inglês para o idioma de destino. Verifique [Tradução de uma revisão do Índice de tópicos](/pt/help/github_topicindex).
3. Obter uma tradução de domínio público de *A Bíblia* no idioma de destino. Verifique [Obter a Bíblia](/pt/help/github_bible).
4. Convertendo *O Livro de Urântia* de HTML para JSON sem notas de rodapé. Verifique [Conversão para JSON](/pt/help/github_book_json).
5. Adicionando notas de rodapé do *Paramony* ao *O Livro de Urântia* em JSON. Verifique [Adicionando notas de rodapé do Paramony](/pt/help/github_footnotes).
6. Convertendo *Índice de tópicos* de TXT para Wiki.js. Verifique [Converting Topic Index](/pt/help/github_topicindex_to_wiki).
7. Convertendo *O Livro de Urântia* de JSON com notas de rodapé para Wiki.js incluindo referências a tópicos. Verifique [Convertendo o Livro de Urântia](/pt/help/github_book_to_wiki).
8. Convertendo *A Bíblia* de LaTeX para Wiki.js com notas de rodapé. Verifique [Convertendo a Bíblia](/pt/help/github_bible_to_wiki).
9. Confirmando alterações no projeto [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Verifique [upload de conteúdo em massa para Urantiapedia](/pt/help/github_upload).

Atualmente todas as tarefas, exceto 2, foram concluídas.

![](/image/help/formats.png)

### Marco II: Livros, artigos, auxílios de estudo, esquemas e índices

1. Crie um catálogo de livros que sejam considerados fontes do *O Livro de Urântia* ou que contenham paralelos interessantes. Consulte [Catálogo de livros de origem](/pt/help/github_sourcebooks_catalog).
2. Obtenha livros anteriores. Consulte [Obter livros “fonte”](/pt/help/github_sourcebooks_markdown).
3. Crie um catálogo de artigos escritos por leitores. Consulte [Catálogo de artigos](/pt/help/github_articles_catalog).
4. Obtenha artigos anteriores. Consulte [Obter artigos](/pt/help/github_articles_markdown).
5. Crie um catálogo de auxílios de estudo. Veja [Catálogo de Auxílios de Estudo](/pt/help/github_studyaids_catalog).
6. Obtenha os auxílios de estudo acima. Consulte [Obter auxílios de estudo](/pt/help/github_studyaids_markdown).
7. Crie um catálogo de diagramas. Consulte [Catálogo de diagramas](/pt/help/github_diagrams_catalog).
8. Obtenha os diagramas acima em formato de mapa de imagem HTML ou preferencialmente SVG. Consulte [Obter diagramas](/pt/help/github_diagrams_svg).
9. Crie o catálogo de imagens do projeto. Veja [Catálogo de Imagens](/pt/help/github_images_catalog).

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
        <td><a href="/pt/help/admin">Ajuda dos administradores</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_assistant">Ajuda dos editores assistentes</a></td>
      </tr>
    </tbody>
  </table>
</figure>

