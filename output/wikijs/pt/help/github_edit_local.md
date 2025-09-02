---
title: "Urantiapedia — Trabalhe localmente no PC"
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
        <td><a href="/pt/help/github_setting">Configurar o projeto GitHub</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_content">Conteúdo do projeto do GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Faça alterações em sua cópia local e salve-as

Seus repositórios locais são uma cópia completa dos projetos que estão no GitHub para que você possa salvar as alterações localmente sempre que tiver alguma. Ao trabalhar localmente, você pode fazer alterações em centenas de arquivos de uma vez e depois salvar (_commit_) todos eles.

1. Você verá que houve alterações quando um número aparecer no ícone do botão _Controle de fonte_.

![](/image/help/github_setting_6.png)

2. Clique em _Controle de origem_.
3. No subpainel _Source control_, você verá uma lista de arquivos modificados. Passe o mouse sobre eles e clique no botão _Stage changes_ que aparecerá.

![](/image/help/github_setting_7.png)

4. Assim que as alterações estiverem no *stage*, insira uma mensagem para salvar (*commit*) e clique no botão _Commit_. As alterações são adicionadas ao seu repositório local.
5. Para enviar suas alterações para seu repositório remoto no GitHub, clique no botão _Sync changes_ que aparece quando há novos *commits*. Isso irá *pull* e *push* receber e enviar quaisquer alterações entre suas cópias locais e remotas do projeto.
6. Você pode verificar se seus *commits* foram enviados corretamente abrindo sua página GitHub Urantiapedia.

## Sincronize as mudanças entre os dois projetos da Urantiapedia

O projeto *Urantiapedia* é a versão para desenvolvimento e trabalho com os conteúdos. O projeto *Urantiapedia-backup* contém apenas o conteúdo e é sincronizado com o site, portanto, fazer alterações nele equivale a fazer alterações massivas no site, desde que essas alterações sejam introduzidas pelos Administradores ou aceitas pelos Administradores através um pedido de mudança.

Se suas alterações no projeto *Urantiapedia* incluírem alterações no conteúdo (pasta `/output/wikijs`), você deverá sincronizar essas alterações no projeto *Urantiapedia-backup* com qualquer utilitário de sincronização ou simplesmente copiando e colando entre pastas.

Esta duplicação de ambos os projetos pode ser um pouco complicada, mas foi projetada desta forma por razões de segurança.

## Crie solicitações pull para projetos da Urantiapedia

Quando você tiver um número suficiente de *commits* enviados para suas próprias cópias dos projetos Urantiapedia (*forks*), você poderá enviar uma solicitação pull para os projetos originais (_pull requests_) para que as alterações possam ser revisadas e mescladas neles . Isso é chamado de _pull request_ na terminologia do GitHub.

1. Abra cada uma das páginas da Urantiapedia no GitHub.
   - `https://github.com/<nomedeusuário>/urantiapedia`
   - `https://github.com/<nomedeusuário>/urantiapedia-backup`
2. Certifique-se de estar no branch master chamado _master_. A ramificação aparece em um menu no topo da lista de arquivos. Normalmente você terá apenas esse ramo.
3. Selecione o menu _Contribute_ abaixo e selecione _Open pull request_. Se o menu disser _This branch is not ahead of the upstream master_ (_Este branch não está à frente do master upstream_), você deve primeiro *fetch* o projeto principal. Olhe para frente.

![](/image/help/github_setting_8.png)

4. Adicione um título às suas contribuições. Você também pode adicionar uma descrição.
5. Clique em _Create pull request_. Faça uma _pull request_ para cada projeto no qual você tenha alterações.

![](/image/help/github_edit_7.png)

6. Isso enviará uma notificação aos *administradores* do projeto que mesclarão suas alterações se não encontrarem problemas.

## Sincronize suas cópias dos projetos (_forks_)

Como *Urantiapedia* é o esforço de uma equipe de colaboradores, é comum que a qualquer momento suas cópias dos projetos (*forks*) não estejam sincronizadas com os projetos originais. É uma boa prática que antes de qualquer *pull request* você sincronize seus *forks* com os projetos originais.

1. Abra qualquer um dos seus projetos da Urantiapedia no GitHub.
2. Clique na opção _Sync fork_. Será mostrado um menu indicando quantos _commits_ foram feitos no projeto original que não estão em sua cópia. Na imagem você pode ver que existem 4 saves que não temos e portanto nossa cópia está desatualizada (_This branch is out-of-date_). Basta clicar em _Update branch_ para trazer as alterações do projeto original para sua cópia.

![](/image/help/github_fork_4.png)

3. Aguarde alguns segundos enquanto o GitHub atualiza sua cópia. Ao final, se você clicar novamente na opção _Sync fork_ você verá que tudo já está atualizado indicando que as alterações não estão atrás do original (_This branch is not behind the upstream_).

![](/image/help/github_fork_5.png)

4. Vá para o Código VS.
5. Abra o projeto conforme já explicado.
5. No painel _Source control_, vá para o subpainel _Commits_. Clique no pequeno botão _Fetch_ e depois no botão _Pull_ próximo a ele. Esta ação busca e envia alterações ao mesmo tempo para sincronizar o repositório local.

![](/image/help/github_setting_9.png)

6. Às vezes, alterações no código do *Urantiapedia Tools* envolvem alterações nas dependências. Você deve instalar ou atualizar novas dependências executando o comando `npm install` em um terminal no VS Code. Isso atualizará as dependências do projeto.


## Resumo

Em resumo, o processo no GitHub é o seguinte (veja o diagrama):
1. Os “Editores Chefes” criam uma cópia (1) (*fork*) em sua própria conta dos projetos *Urantiapedia* no GitHub: *Urantiapedia* e *Urantiapedia-backup*. Eles também mantêm essas cópias sincronizadas usando um _Sync fork_ ou _Fetch upstream_ (1).
2. “Editores Chefes” criam uma cópia local dos projetos em seu PC. Isso é feito por meio de uma ação *clone* (2) no VS Code. Eles também mantêm essas cópias locais sincronizadas por meio de ações *fetch* + *pull* no VS Code (2), que despejam quaisquer alterações na cópia local.
3. Os "Editores Chefes" fazem alterações na cópia local dos projetos e fazem *commits* (3) em sua cópia local para salvar as alterações.
4. “Editores-chefes” enviam suas alterações para seus projetos GitHub por meio de ações *push* (4).
5. Os “Editores Chefes” então criam *solicitações pull* (5) do site GitHub para os projetos *Urantiapedia* e *Urantiapedia-backup*.
6. Estas *solicitações pull* dos "Editores Chefes" são revisadas por um “Administrador”, que é responsável por fazer uma fusão (6) de todas as alterações que estiverem corretas. Quaisquer alterações que não estejam corretas serão rejeitadas (6) e os “Editores Chefes” serão notificados para que possam corrigi-las.
7. Quando as alterações estiverem corretas, a fusão com o projeto original *urantiapedia-backup* faz com que as alterações sejam sincronizadas automaticamente com o site, que aparecerá atualizado em alguns minutos. (7)

![](/image/help/github_workflow_version_2.png)

## Enlaces externos

- [Urantiapedia Tools - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundación Urantia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_setting">Configurar o projeto GitHub</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_content">Conteúdo do projeto do GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>