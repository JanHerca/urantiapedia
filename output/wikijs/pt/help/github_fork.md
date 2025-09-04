---
title: "Urantiapedia — Primeiros passos no GitHub"
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
        <td><a href="/pt/help/devs">Ajuda dos desenvolvedore</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_edit_on_web.md">Trabalhe diretamente no site do GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Antes de fazer qualquer coisa no GitHub, você precisará seguir estas etapas: 

1. Você precisa de uma conta GitHub. Navegue até https://github.com 
2. Se você já possui uma conta, clique em *Sign in* e valide. 
3. Se você não possui uma conta, crie uma clicando em *Sign up*. Digite um nome de usuário, e-mail e senha. Depois de ter uma conta, faça login no GitHub com ela. 
4. Na primeira vez que você entrar no GitHub, ele solicitará verificação por e-mail. Depois de verificado, você aparecerá na sua página do GitHub. 
5. Abra as páginas do projeto *Urantiapedia*: 
  - https://github.com/JanHerca/urantiapedia 
  - https://github.com/JanHerca/urantiapedia-backup 
6. Crie um *fork* dos projetos. Um *fork* nada mais é do que uma cópia de um projeto por sua própria conta, de forma que as alterações feitas na cópia não afetem o projeto original. Para bifurcar, clique no botão *Fork* no canto superior direito de cada página do projeto GitHub. 

![](/image/help/github_fork_1.png) 

7. Em alguns segundos uma cópia dos projetos *Urantiapedia* será criada em sua conta GitHub. Esses projetos são uma cópia nova e completa na qual você pode fazer todas as alterações necessárias sem afetar os projetos originais. Verifique se você os possui clicando no menu do usuário e selecionando _Your repositories_ para retornar à sua conta. Você deverá ver ambos os projetos e uma mensagem informando _Forked from ..._. 

![](/image/help/github_fork_2.png) 

![](/image/help/github_fork_3.png) 

8. A partir daqui existem duas opções: 
  - [Trabalhar diretamente no site do GitHub](/pt/help/github_edit_on_web). Este procedimento é recomendado porque é muito simples. 
  - Trabalhe localmente no PC. Este procedimento é mais complexo. Requer mais etapas:
    - [Configurar o projeto Urantiapedia GitHub](/pt/help/github_setting) 
    - [Siga o fluxo de trabalho do GitHub](/pt/help/github_edit_local)


## :warning: IMPORTANTE: Como manter sua cópia atualizada 

Suas cópias (*forks*) dos dois projetos *Urantiapedia* (*urantiapedia* e *urantiapedia-backup*) são cópias que o GitHub não atualiza automaticamente. A partir do momento em que você os cria, outros usuários criarão alterações no projeto original, e essas alterações não serão refletidas automaticamente em seus projetos. Seus projetos, lembre-se, **são uma cópia independente**, e as alterações feitas na cópia ou no original não são sincronizadas sem a supervisão uma da outra. 

**É muito importante, portanto, que antes de fazer qualquer alteração nos arquivos de suas cópias, você garanta que eles estejam sincronizados com o estado atual dos projetos originais.** 

Para fazer isso, **antes de qualquer sessão de trabalho** (que é detalhado nas etapas a seguir deste manual) **você deve seguir estes passos simples**: 

1. Clique em cada uma de suas cópias dos projetos e, uma vez lá, clique na opção _Sync fork_. Será mostrado um menu indicando quantos _commits_ foram feitos no projeto original que não estão em sua cópia. Na imagem você pode ver que existem 4 saves que não temos e portanto nossa cópia está desatualizada (_This branch is out-of-date_). Basta clicar em _Update branch_ para trazer as alterações do projeto original para sua cópia. 

![](/image/help/github_fork_4.png) 

2. Aguarde alguns segundos enquanto o GitHub atualiza sua cópia. Ao final, se você clicar novamente na opção _Sync fork_ você verá que tudo já está atualizado indicando que as alterações não estão atrás do original (_This branch is not behind the upstream_). 

![](/image/help/github_fork_5.png) 

Você precisará se lembrar de fazer isso em cada projeto sempre que quiser iniciar um trabalho de mudança. O que pode ser feito se esquecermos de fazer esta operação? Normalmente nada acontecerá, desde que os arquivos que vamos modificar ainda não tenham recebido nenhuma modificação. Você poderá continuar trabalhando sem problemas e realizar todas as tarefas descritas nas etapas a seguir do manual, mas é altamente recomendável que você siga a prática mais segura de realizar essas etapas antes de qualquer edição.

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/devs">Ajuda dos desenvolvedore</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_edit_on_web.md">Trabalhe diretamente no site do GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>