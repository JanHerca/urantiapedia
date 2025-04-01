---
title: "Urantiapedia — Ajuda dos administradores"
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
        <td><a href="/pt/help/roles">Perfis de colaborador</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github">Ajuda dos editores-chefe</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Sobre Urantiapedia

[Urantiapedia](https://urantiapedia.org) é um site colaborativo baseado em [Wiki.js](https://js.wiki/) com o propósito de ser um centro unificado para a disseminação de todo o conhecimento sobre *O Livro de Urântia*. 

## Sobre o Registo da Urantiapedia e Blue Fields

Se pretende colaborar neste projeto, o melhor meio de contacto é urantiapedia@gmail.com. Envie uma mensagem a comentar o seu interesse no projeto e os Administradores encarregar-se-ão de lhe dar acesso.

Outra forma que estará disponível em breve será através do registo no site [Blue Fields](https://blue-fields.netlify.app/), que é um site que foi criado para unir e organizar os leitores de *O Livro de Urântia* que desejam participar em projetos inteligentes, intencionais e altruístas em todo o mundo. Uma vez registado, a equipa do projeto entrará em contacto consigo. O projeto Urantiapedia em Blue Fields é acedido aqui: [Urantiapedia on Blue Fields](https://blue-fields.netlify.app/projects/292396532506821125). No entanto, este website não se encontra 100% operacional pelo que se recomenda o contacto via email.

## Sobre o GitHub

[GitHub](https://github.com/) é uma plataforma para controlo de versões em projetos colaborativos, especialmente em projetos de código ou conteúdo web.

O projeto *Urantiapedia* no GitHub (https://github.com/JanHerca/urantiapedia) é um projeto que contém todo o conteúdo do site, bem como uma aplicação (*Urantiapedia Tools*) para ajudar a automatizar a criação de conteúdo. O projeto *Urantiapedia-backup* (https://github.com/JanHerca/urantiapedia-backup) é o mecanismo utilizado para fazer uploads massivos de conteúdos.

## Para quem é este manual?

Este manual é direcionado a usuários *administradores*, ou *admins*, ou seja:
- usuários registrados no [GitHub](https://github.com/).
- usuários autorizados como *admins* pela equipe que gerencia o projeto Urantiapedia.
- usuários registrados na Urântiapedia. Somente outro usuário *admin* pode registrar um usuário como *admin*.
- usuários com conhecimento de Linux, [Docker](https://www.docker.com/), [Kubernetes](https://es.wikipedia.org/wiki/Kubernetes), [Git](https: // git-scm.com/) e [GitHub](https://github.com/).
- usuários com conhecimento do *Livro de Urântia* em pelo menos um idioma em que é publicado, e de preferência com bom nível da versão em inglês.
- usuários que desejam colaborar desinteressadamente na incorporação de informações relacionadas ao *Livro de Urântia* na *Urantiapédia*.

Os administradores da web são os únicos responsáveis ​​por enviar mudanças massivas ao site *Urantiapedia* durante cada uma das fases do projeto. Mais sobre as fases do projeto em [Help start](/pt/help/phases).

## Procedimento de trabalho no GitHub

O processo de trabalho no GitHub é detalhado no Manual do Usuário dos Projetos Urantiapedia no GitHub. Você deve começar dando uma olhada em [Primeiros passos no GitHub](/pt/help/github_fork) e depois continuar a partir daí com o restante dos passos a seguir e as diferentes opções que existem para trabalhar no GitHub.

Este é o índice completo do manual:
- [Primeiros passos no GitHub](/pt/help/github_fork)
- Trabalhe no GitHub:
  - [Trabalhe diretamente no site do GitHub](/pt/help/github_edit_on_web)
  - Trabalhe localmente no GitHub:
    - [Configurar o projeto GitHub](/pt/help/github_setting)
    - [Trabalhar localmente no PC](/pt/help/github_edit_local)
- [conteúdo do projeto GitHub](/pt/help/github_content)
- [Fluxo de trabalho para criar conteúdo inicial em um idioma](/pt/help/github_initial_flow)

## Colaboração através deste site

Este tipo de colaboração, devido aos riscos envolvidos, é reservada aos usuários *Administradores* e *Editores-Chefes*. No primeiro caso, podem editar qualquer conteúdo; Neste último caso, eles terão acesso de edição apenas a determinadas seções.

Neste caso todas as tarefas são realizadas através deste site. Você precisa fazer login com a conta de edição fornecida e seguir os manuais sobre como fazer edições:
- [Interface e uso básico da Urântiapedia](/pt/help/web_basics)
- [Gerenciamento de páginas](/pt/help/web_pages)
- [Uso de editores](/pt/help/web_editors)
  - [Uso do editor visual](/pt/help/web_visual_editor)
  - [Usando o editor Markdown](/pt/help/web_markdown_editor)
  - [Usando o editor HTML](/pt/help/web_html_editor)

## Tarefas

Sobre as fases do projeto, consulte [Urantiapedia Phases](/pt/help/phases).

### Marco I - O Livro de Urântia e a Bíblia

Uma vez que tenhamos a _entrada_ inicial nas pastas corretas, seguindo os passos do manual indicado anteriormente, para cada idioma, durante a fase I, os passos a seguir são:
1. Tradução de *Paramony* do inglês para o idioma alvo. Consulte [Tradução do Paramony](/pt/help/github_paramony).
2. Obter uma tradução da Bíblia na língua alvo. Veja [Obtenha a Bíblia](/pt/help/github_bible).
3. Convertendo *O Livro de Urântia* de HTML para JSON sem notas de rodapé. Consulte [Converter para JSON](/pt/help/github_book_json).
4. Adicionando notas de rodapé ao *Livro de Urântia* em JSON. Consulte [Adicionar notas de rodapé](/pt/help/github_footnotes).
5. Conversão de *O Livro de Urântia* de JSON com notas de rodapé para Wiki.js incluindo referências aos termos. Veja [Conversão do Livro de Urântia](/pt/help/github_book_to_wiki).
6. Conversão de *A Bíblia* de LaTeX para Wiki.js com notas de rodapé. Consulte [Conversão da Bíblia](/pt/help/github_bible_to_wiki).
7. Faça upload das alterações para [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Consulte [Upload em massa de conteúdo para Urantiapedia](/pt/help/github_upload).

### Marco II - Hemeroteca, Biblioteca e Enciclopédia

1. Crie um catálogo de artigos escritos por leitores. Consulte [Catálogo de artigos](/pt/help/github_articles_catalog).
2. Pegue os itens. Consulte [Obter artigos](/pt/help/github_articles_markdown).
3. Crie um catálogo de materiais de estudo. Consulte [Catálogo de materiais de estudo](/pt/help/github_studyaids_catalog).
4. Obtenha os materiais de estudo acima. Consulte [Obter auxílios de estudo](/pt/help/github_studyaids_markdown).
5. Criação de um catálogo de livros de todas as religiões. Consulte [Catálogo de livros de todas as religiões](/pt/help/github_religious_books_catalog)
6. Obtenção de livros supostamente usados ​​por reveladores. Consulte [Obtenção](/pt/help/github_sourcebooks_markdown).
7. Criar um catálogo de livros que sejam considerados fontes do *Livro de Urântia* ou que contenham paralelos interessantes. Consulte [Catálogo de livros de origem](/pt/help/github_sourcebooks_catalog).
8. Obtenha os livros anteriores. Consulte [Obter livros](/pt/help/github_sourcebooks_markdown).
9. Tradução e revisão do *Enciclopédia* do inglês para o idioma alvo. Veja [Tradução e revisão da Enciclopédia](/pt/help/github_topicindex).
10. Convertendo *Enciclopédia* de TXT para Wiki.js. Consulte [Conversão da Enciclopédia](/pt/help/github_topicindex_to_wiki).

### Marco IV - Cartoteca e Mediateca

1. Crie um catálogo de diagramas. Consulte [Catálogo de diagramas](/pt/help/github_diagrams_catalog).
2. Obtenha os diagramas acima em HTML ou, de preferência, em formato de mapa de imagem SVG. Consulte [Obter diagramas](/pt/help/github_diagrams_svg).
3. Crie o catálogo de imagens do projeto. Consulte [Catálogo de imagens](/pt/help/github_images_catalog).


![](/image/help/formatos.png)

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
        <td><a href="/pt/help/roles">Perfis de colaborador</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github">Ajuda dos editores-chefe</a></td>
      </tr>
    </tbody>
  </table>
</figure>