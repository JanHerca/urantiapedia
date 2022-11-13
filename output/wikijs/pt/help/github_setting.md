---
title: Urantiapedia - Configurando o projeto GitHub
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
        <td><a href="/pt/help/devs">Ajuda dos desenvolvedores</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_content">Conteúdo do projeto GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Instale o Git no seu computador

1. Acesse https://git-scm.com/.
2. Descarregue o instalador do seu sistema operativo. Você tem um tutorial completo sobre como instalar em diferentes sistemas operacionais aqui: [Instalando o Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). No Windows use o instalador e deixe todas as opções padrão.
3. Verifique se o Git está instalado corretamente executando isso em um terminal: `git --version`. Se o número da versão for retornado, o Git está OK.
4. Execute os próximos comandos em um terminal (o Git instala um terminal chamado Git CMD que você pode usar) para configurar sua identidade no Git, com seu nome e e-mail. Isso é necessário para o Git definir você como colaborador do código.

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Crie uma conta no GitHub

Você precisa de uma conta do GitHub.
1. Acesse https://github.com
2. Se você já possui uma conta, clique em *Sign in* e valide.
3. Se você não tiver uma conta, crie uma clicando em *Sign up*. Digite um nome de usuário, um endereço de e-mail e uma senha. Depois de ter uma conta, faça login no GitHub com ela.
4. Na primeira vez que você entrar no GitHub, ele solicitará que você faça uma verificação por meio de nossa conta de e-mail. Depois de verificado, você aparecerá na página inicial do GitHub.

## Instale o Node.js no seu computador

Node.js é um requisito para que as *Urantiapedia Tools* funcionem.
1. Acesse https://nodejs.org/.
2. Baixe o Node.js. Use a versão LTS atual disponível.
3. Instale com as opções padrão.
4. Verifique se o Node.js está instalado corretamente. Abra um terminal e execute `node -v`. Se o número da versão aparecer, o Node.js está OK.


## Projeto Fork Urantiapedia

1. Abra as páginas do projeto *Urantiapedia*:
   - https://github.com/JanHerca/urantiapedia
   - https://github.com/JanHerca/urantiapedia-backup
2. Crie um *fork* de cada projeto. Um *fork* nada mais é do que uma cópia adequada de um projeto existente em nossa conta, para que as alterações feitas neste projeto não afetem o projeto original. Para fazer os *forks* clique no botão *Fork* no canto superior direito de cada página do GitHub.
3. Em alguns segundos, uma cópia dos projetos *Urantiapedia* será criada em sua conta do GitHub. Esses projetos são uma nova cópia na qual você pode fazer as alterações necessárias, sem afetar os projetos originais.

## Instale o VS Code e o GitLens

Recomenda-se o uso do Visual Studio Code.

1. Acesse https://code.visualstudio.com/.
2. Faça o download e instale-o. Durante a instalação, é recomendável marcar a opção "Adicionar ação 'Abrir com Code' ao menu de contexto da pasta" se você for um usuário do Windows.
3. Abra-o. Na primeira vez que é aberto, você pode configurar algumas configurações. Pule todos eles.
4. No VS Code, clique no botão Extensions na barra de botões do lado esquerdo. É altamente recomendável instalar uma extensão chamada "GitLens". Geralmente está entre as extensões mais populares. Localize-o e clique no botão instalar.
5. Agora você terá um novo botão para GitLens na barra de botões esquerda do VS Code. Clique nele e clique no botão "Bem-vindo (configuração rápida)". A página de boas-vindas é aberta. Recomenda-se selecionar "Layout de controle de origem" como a visualização padrão. Isso faz com que o GitLens seja mesclado com o painel "Controle de origem" padrão no VS Code.

## Clonar projetos de Urantiapedia

1. Abra o GitHub web e acesse sua conta.
2. Abra suas bifurcações de projetos Urantiapedia que você criou antes.
3. Na página principal localize um menu verde chamado "Code" e nele clique para copiar a URL do projeto, algo como `https://github.com/<username>/urantiapedia.git` e `https:/ /github.com/<username>/urantiapedia-backup.git`.
4. Abra o VS Code, abra o painel "Source control" e clique em "Clone repository".
5. Na caixa de texto exibida, digite ou cole o caminho anterior copiado.
6. Selecione "Clone do GitHub".
7. Permita que a extensão do GitHub entre.
8. Aparece uma página da Web pedindo para autorizar o VS Code a acessar o GitHub. Clique em Continuar.
9. Clique em Autorizar github.
10. Agora você é redirecionado para uma nova página da web e uma mensagem é aberta. Clique em "Abrir VS Code".
11. Agora clique em Abrir para permitir o uso do caminho de URI fornecido. Se algo der errado, repita a partir do ponto 4.
12. Quando o nome do seu repositório Urantiapedia for mostrado na paleta de comandos, selecione-o. Aparece uma caixa de diálogo solicitando uma pasta. Selecione qualquer pasta para o projeto ou crie uma.
13. Aguarde alguns segundos para que o VS Code clone o repositório. Por fim, clique em "Abrir repositório". Clique também em "Sim, confio nos autores".
14. O projeto será aberto corretamente.

## Configure *Urantiapedia Tools*

*Urantiapedia Tools* é um aplicativo de desktop JavaScript desenvolvido com [Electron](https://www.electronjs.org/). Para instalá-lo e executá-lo siga estes passos:

1. Abra o VS Code e selecione Arquivo > Abrir pasta. Em seguida, selecione a pasta raiz do projeto, aquela que contém o arquivo `package.json`.
2. Alternativamente, no Windows, você pode abrir o menu de contexto da pasta raiz e selecionar "Abrir com código".
3. Abra um terminal usando Terminal > Novo Terminal. Certifique-se de que o terminal esteja aberto na pasta raiz do projeto.
4. Para instalar as dependências execute: `npm install`. Aguarde até que todos estejam instalados.
5. O projeto é configurado com uma configuração de inicialização padrão. Pressione F5 para executar ou no terminal execute `npm start`.
6. O aplicativo é aberto. Por padrão, uma janela Dev Tools é aberta para depuração. Você pode ignorá-lo ou fechá-lo se não estiver desenvolvendo.

![](/image/uptools.png)

## Confirmar e enviar alterações

Seus repositórios locais são uma cópia completa dos projetos para que você possa salvar as alterações neles sempre que tiver algumas alterações que possam ser postadas.

1. Você verá que há alterações quando um número aparecer no ícone do botão "Source control".
2. Clique em "Source control".
3. No subpainel "Source control" você verá uma lista de arquivos alterados. Passe o mouse sobre eles e clique no botão "Stage changes" que aparecerá.
4. Uma vez que as alterações estão em fase, digite uma mensagem para o commit e clique no botão "Commit". As alterações são adicionadas ao seu repositório local.
5. Para enviar suas alterações para seu repositório remoto no GitHub, clique no botão "Sync changes" que aparece quando há novos commits. Isso puxará e enviará todas as alterações entre suas cópias locais e remotas do projeto.
6. Você pode verificar se seus commits foram enviados corretamente abrindo sua página do GitHub Urantiapedia.

## Sincronize alterações entre projetos

O projeto Urantiapedia é a versão para desenvolvimento e trabalho com o conteúdo. O projeto Urantiapedia-backup contém apenas o conteúdo e está em sincronia com a página da web, portanto, fazer alterações nele é equivalente a fazer grandes alterações na web.

Se suas alterações no projeto Urantiapedia incluem alterações no conteúdo (pasta `/output/wikijs`), você deve sincronizar essas alterações no projeto Urantiapedia-backup com qualquer utilitário de sincronização ou simplesmente copiando e colando entre as pastas.

## Crie "solicitações pull" para projetos da Urantiapedia

Quando você tiver um número suficiente de commits enviados para seus próprios forks dos projetos da Urantiapedia, você pode enviar suas alterações para os projetos para que as alterações possam ser revisadas e mescladas nele. Isso é chamado de "solicitação pull" na terminologia do GitHub.

1. Abra cada uma das páginas do Urantiapedia no GitHub.
   - `https://github.com/<username>/urantiapedia`
   - `https://github.com/<username>/urantiapedia-backup`
2. Certifique-se de estar no branch principal chamado "master". A ramificação aparece em um menu no topo da lista de arquivos.
3. Selecione o menu Contribuir que aparece abaixo e, em seguida, selecione "Open pull request". Se o menu disser "Esta ramificação não está à frente do mestre upstream", você deve primeiro fazer uma busca do projeto principal. Veja abaixo.
4. Adicione um título às suas contribuições. Você também pode adicionar uma descrição.
5. Clique em "Create pull request". Faça um "pull request" para cada projeto com alterações.
6. Isso enviará uma notificação aos usuários "admin" do projeto que mesclarão suas alterações se não encontrarem problemas.

## Sincronize suas bifurcações

Como *Urantiapedia* é o esforço de uma equipe de colaboradores, é comum que a qualquer momento seus forks de projetos fiquem fora de sincronia com os projetos principais. É uma boa prática que antes de qualquer pull request você sincronize seus forks com os projetos principais.

1. Abra qualquer uma de suas páginas do Urantiapedia no GitHub.
2. Selecione o menu "Fetch upstream" que aparece abaixo do seletor de branch e clique em "Fetch and merge". Isso copiará todas as novas alterações do projeto principal para o seu projeto de bifurcação.
3. Vá para o VS Code.
4. Abra o projeto e expliquei anteriormente.
5. No painel "Controle de origem", vá para o subpainel "Remotos". Você deve ter um repositório remoto listado lá chamado `JanHerca/urantiapedia`. Clique no botão "Buscar" ao lado do nome. Essa ação faz uma busca e um push ao mesmo tempo para sincronizar o repositório local.
6. Às vezes, mudanças no código das "Urantiapedia Tools" implicam em mudanças nas dependências. Você deve instalar ou atualizar novas dependências executando o comando `npm install` de um terminal no VS Code. Isso atualizará as dependências do projeto.

## Resumo

Em resumo, o processo no GitHub é o seguinte (veja o diagrama):
1. O “Editor Chefe” cria um *fork* (uma cópia em sua própria conta) de projetos *Urantiapedia* no GitHub: *Urantiapedia* e *Urantiapedia-backup*.
2. O “Editor Chefe” cria uma cópia local dos projetos no PC. Isso é feito primeiro por meio de uma ação *clone* e depois por meio de ações *fetch upstream* no GitHub web e por meio de ações *pulls* para os projetos locais, que baixam qualquer alteração na cópia local.
3. O “Editor Chefe” faz alterações na cópia local dos projetos e se compromete com a cópia local.
4. O “editor chefe” envia as alterações para os projetos do GitHub por meio de ações *push*.
5. Em seguida, o “Editor Chefe” cria *pull requests* do site do GitHub para ambos os projetos: *Urantiapedia* e *Urantiapedia-backup*.
6. Esses *pull requests* de “Editores-chefes” são revisados ​​por “Administrators”, que são responsáveis ​​por fazer um *merge* com o branch principal (master) de todas as mudanças que estiverem corretas. Quaisquer alterações que não estejam corretas serão rejeitadas e os “Editores Chefes” serão notificados para corrigi-las.
7. Quando as alterações estão OK um “Administrador” faz um *merge* delas e elas são sincronizadas automaticamente com a web.

![](/image/github_workflow_version_2.png)

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
        <td><a href="/pt/help/devs">Ajuda dos desenvolvedores</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_content">Conteúdo do projeto GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>