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

## Sobre o Blue Fields 

[Blue Fields](https://blue-fields.netlify.app/) é um site que foi criado para juntar e organizar os leitores do *O Livro de Urântia* que desejam colaborar de forma inteligente, projetos altruístas em todo o mundo. É o site que gerencia o cadastro e a colaboração entre os voluntários da *Urantiapedia*. 

## Sobre o GitHub

O projeto [Urantiapedia](https://github.com/JanHerca/urantiapedia) no GitHub é um projeto criado para servir como um procedimento de inicialização rápida para *Urantiapedia*. Ele contém arquivos em determinados formatos e softwares que ajudam a automatizar a criação do conteúdo inicial. 

## Para quem é este manual? 

Este manual destina-se a usuários chamados *administradores*, ou *administradores*, abreviados, usuários que atendem aos seguintes requisitos: 
- usuários registrados com uma conta em [Blue Fields](https://blue-fields.netlify.app/) e no [GitHub](https://github.com/). 
- usuários que foram autorizados como *administradores* do projeto pela equipe que lidera o projeto na plataforma [Blue Fields](https://blue-fields.netlify.app/).
- usuários registrados com uma conta na [Urantiapedia](https://urantiapedia.org). Apenas outro usuário *admin* pode registrar um usuário como um novo usuário *admin*.  
- usuários com bom conhecimento sobre o uso do Git e GitHub.
- usuários com bom conhecimento do *O Livro de Urântia* em pelo menos um idioma no qual ele é publicado, e preferencialmente com um bom nível da versão em inglês. 
- usuários que desejam colaborar de forma altruísta na adição de conteúdo relacionado ao *O Livro de Urântia* na *Urantiapedia*. 

Os usuários *Admin* são os únicos responsáveis ​​pelo upload em massa das alterações no site *Urantiapedia* durante cada etapa do projeto. Mais sobre os marcos do projeto em [Help start](/pt/help/phases). 

## Fluxo de trabalho do GitHub

O processo será o seguinte:
1. "Chief Editor" cria um *fork* (uma cópia em sua própria conta) do projeto *Urantiapedia* no GitHub (https://github.com/JanHerca/urantiapedia) e do projeto *Urantia-backup* no GitHub (https ://github.com/JanHerca/urantiapedia-backup). O primeiro é um projeto que contém todos os arquivos. O segundo contém apenas os arquivos que estão sincronizados com o site *Urantiapedia*. 
2. O "Editor Chefe" cria uma cópia local de ambos os projetos no PC. A cópia local deve ser da versão mais recente do conteúdo da *Urantiapedia* (o branch master). Isso é feito primeiro por meio de uma ação *clone* e depois por meio de ações *puxadas* para o projeto, que baixa qualquer alteração na cópia local.
3. O "Editor Chefe" efetua alterações na cópia local dos arquivos indicados neste manual e na forma explicada. O "Editor Chefe" se compromete com a cópia local. 
4. "Editor-chefe" envia as alterações para sua conta do GitHub por meio de uma ação *push*. 
5. "Chief Editor" realiza um *pull request* no GitHub web para os projetos originais.
6. Os *pull requests* dos "Editores-chefes" são revisados ​​pelos "Administrators", que são responsáveis ​​por fazer um *merge* com o branch principal (master) de todas as mudanças que estiverem corretas. Quaisquer alterações que não estejam corretas serão rejeitadas e os "Editores Chefes" serão notificados para corrigi-las. 
7. Quando as alterações estiverem OK e o "Administrador" fizer a mesclagem, todas as alterações no projeto *Urantiapedia-backup* serão automaticamente sincronizadas com o site. Agora as alterações são visíveis para todos, para verificar e validar se estão corretas. 
8. O processo é repetido quantas vezes forem necessárias, retornando ao ponto 2. 

![](/image/github_workflow_version_2.png)

## Configurando o projeto *Urantiapedia*

Antes de qualquer trabalho em *Urantiapedia* usando o GitHub, você deve configurar todas as ferramentas necessárias. Verifique [Configurando o projeto GitHub](/pt/help/github_setting). 

## Conteúdo do projeto Urantiapedia no GitHub 

Para conhecer o conteúdo do projeto GitHub e sua estrutura, consulte [Content of GitHub project](/pt/help/github_content). 

## Tarefas 

Para saber sobre os marcos do projeto, consulte [Milestones of Urantiapedia](/pt/help/phases). 

Uma vez que tenhamos a entrada nas pastas corretas, para cada idioma, os passos a seguir no Marco I são: 
1. Traduzir o *Paramony* do inglês para o idioma de destino. Verifique [Tradução do Paramony](/pt/help/github_paramony).
2. Traduzindo e revisando o *Topic Index* do inglês para o idioma de destino. Verifique [Tradução de uma revisão do Índice de tópicos](/pt/help/github_topicindex). 
3. Obter uma tradução de domínio público de *A Bíblia* no idioma de destino. Verifique [Obter a Bíblia](/pt/help/github_bible). 
4. Convertendo *O Livro de Urântia* de HTML para JSON sem notas de rodapé. Verifique [Conversão para JSON](/pt/help/github_book_json). 
5. Adicionando notas de rodapé do *Paramony* ao *O Livro de Urântia* em JSON. Verifique [Adicionando notas de rodapé do Paramony](/pt/help/github_footnotes). 
6. Convertendo *Índice de tópicos* de TXT para Wiki.js. Verifique [Converting Topic Index](/pt/help/github_topicindex_to_wiki).
7. Convertendo *O Livro de Urântia* de JSON com notas de rodapé para Wiki.js incluindo referências a tópicos. Verifique [Convertendo o Livro de Urântia](/pt/help/github_book_to_wiki).
8. Convertendo *A Bíblia* de LaTeX para Wiki.js com notas de rodapé. Verifique [Convertendo a Bíblia](/pt/help/github_bible_to_wiki). 
9. Confirmando alterações no projeto [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). Verifique [upload de conteúdo em massa para Urantiapedia](/pt/help/github_upload). 

*Editores Chefes* e *Editores Assistentes* realizam as tarefas 1-3. *Admins* executam tarefas 4-9. 

![](/image/formats.png) 

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