---
title: "Urantiapedia — Ajuda dos desenvolvedores"
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
        <td><a href="/pt/help/devs">Ajuda dos editores assistentes</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/web_basics">Interface e uso básico da Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Sobre Urantiapedia

[Urantiapedia](https://urantiapedia.org) é um site colaborativo baseado em [Wiki.js](https://js.wiki/) com o propósito de ser um centro unificado para a disseminação de todo o conhecimento sobre *O Livro de Urântia*.

## Sobre os campos azuis

[Blue Fields](https://blue-fields.netlify.app/) é um site que foi criado para juntar e organizar os leitores do *O Livro de Urântia* que desejam colaborar em projetos inteligentes, propositais e altruístas em todo o mundo. mundo. É o site que gerencia o cadastro e a colaboração entre os voluntários da *Urantiapedia*.

## Sobre o GitHub

O projeto [Urantiapedia](https://github.com/JanHerca/urantiapedia) no GitHub é um projeto criado para servir como um procedimento de inicialização rápida para o conteúdo *Urantiapedia*. Ele contém arquivos em determinados formatos e softwares que ajudam a automatizar a criação do conteúdo inicial.

## Para quem é este manual?

Este manual é para "Desenvolvedores", ou usuários que cumprem com estes requisitos:
- usuários registrados com uma conta no [Blue Fields](https://blue-fields.netlify.app/), no [Urantiapedia](https://urantiapedia.org) e no [GitHub](https://github.com/).
- autorizados como colaboradores do projeto pela equipe que executa o projeto na plataforma [Blue Fields](https://blue-fields.netlify.app/).
- com bons conhecimentos de HTML, CSS, Javascript, [Node.js](https://nodejs.org/), [Git](https://git-scm.com/), [GitHub](https: //github.com/), [Bootstrap](https://getbootstrap.com/) e [Vue.js](https://vuejs.org/).

## Fluxo de trabalho do GitHub

O processo é o fluxo de trabalho usual do GitHub:
1. "Desenvolvedor" cria um *fork* (uma cópia em sua própria conta) do projeto *Urantiapedia* no GitHub (https://github.com/JanHerca/urantiapedia) para desenvolvimento em *Urantiapedia Tools* ou cria um *fork* do Wiki.js (https://github.com/Requarks/wiki) para desenvolvimento em *Wiki.js*.
2. "Desenvolvedor" cria uma cópia local do projeto no PC. A cópia local deve ser da versão mais recente do branch master. Isso é feito primeiro por meio de uma ação *clone* e depois por meio de ações *pulls* para o projeto, que baixa qualquer alteração na cópia local.
3. O "Desenvolvedor" faz alterações na cópia local e se compromete com ela.
4. "Desenvolvedor" envia as alterações para o GitHub por meio de um *push*.
5. Para *Urantiapedia Tools*, como é um repositório próprio, é possível fazer um *pull request* do site do GitHub. No caso de *Wiki.js*, como é de propriedade de terceiros, é necessário criar um *merge* neste *fork* https://github.com/JanHerca/wiki para centralizar *pull requests* para Wiki,js *upstream* quando necessário e para coordenar desenvolvimentos.
6. *Pull requests* são revisados ​​por desenvolvedores autorizados, encarregados de fazer um *merge* no branch master de todas as mudanças que estiverem OK. Qualquer alteração inválida é rejeitada e notificada para uma correção.
7. Quando as alterações são feitas no Wiki.js e estão OK, podemos prosseguir para lançar uma nova versão do servidor. Esta tarefa é feita por "Admins".
8. O processo é repetido quantas vezes forem necessárias, voltando ao ponto 3.

## Instalando um servidor dev

Consulte https://docs.requarks.io/install.

Consulte https://docs.requarks.io/install/upgrade.

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
        <td><a href="/pt/help/devs">Ajuda dos editores assistentes</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/web_basics">Interface e uso básico da Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>