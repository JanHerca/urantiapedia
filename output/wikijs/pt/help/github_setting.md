---
title: "Urantiapedia — Configure o projeto GitHub"
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
        <td><a href="/pt/help/web_html_editor">Trabalhe diretamente no site do GitHub</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_content">Trabalhar localmente no PC</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Trabalhe com GitHub localmente em seu PC

Esta solução para trabalhar no GitHub é muito mais complexa que a opção anterior explicada neste manual, trabalhando diretamente no site do GitHub. Por este motivo é recomendado apenas para usuários que tenham algum conhecimento de Git e GitHub. É uma opção muito mais flexível e poderosa que nos permite editar a Urântiapédia de maneira mais rápida e abrangente. Além disso, permite executar ferramentas, chamadas *Urantiapedia Tools*, que executam tarefas automatizadas muito rápidas.

Esta deve ser a opção mais recomendada para usuários de *Administradores* ou *Editores Chefes*, enquanto a opção de trabalhar diretamente do site do GitHub é recomendada para usuários de *Editores Assistentes*.

A primeira coisa para trabalhar localmente no GitHub é realizar diversas instalações de software que iremos explicar. A seguir daremos algumas dicas de configuração.

:aviso: Presume-se que antes de seguir estes passos já criamos uma conta no GitHub e fizemos as cópias necessárias (_forks_) dos projetos da Urantiapedia em nossa conta, conforme detalhado em [Primeiros passos no GitHub](/pt/help/github_fork).

## Instale o Git no seu PC

1. Navegue até https://git-scm.com/.
2. Baixe o instalador para o seu sistema operacional. Você tem um tutorial completo sobre como instalá-lo em diferentes sistemas operacionais aqui: [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). No Windows use o instalador e deixe as opções padrão.
3. Verifique se o Git está instalado corretamente executando em um terminal: `git --version`. Se retornar o número da versão, o Git está correto.
4. Execute os seguintes comandos em um terminal (o Git instala um terminal chamado Git CMD que você pode usar) para configurar sua identidade no Git, com seu nome e email. Isso é necessário para que o Git configure você como contribuidor de código.

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Instale o Node.js no seu PC

Node.js é um requisito para executar *Urantiapedia Tools*. Se não for executá-los, nunca poderá pular esta etapa, embora seja recomendado.
1. Navegue até https://nodejs.org/.
2. Baixe o Node.js. Use a versão LTS atual disponível.
3. Instale com as opções padrão.
4. Verifique se o Node.js está instalado corretamente. Abra um terminal e execute `node -v`. Se o número da versão aparecer, o Node.js está correto.

## Instale o código VS e o GitLens

O uso do Visual Studio Code é altamente recomendado.

1. Navegue até https://code.visualstudio.com/.
2. Baixe e instale-o. Durante a instalação é aconselhável marcar a opção "Adicionar ação 'Abrir com Código' ao menu de contexto dos diretórios" se você for usuário do Windows.
3. Abra-o. Na primeira vez que abrir você pode definir algumas opções. Ignore-os.
4. No VS Code, clique no botão _Extensões_ no painel de botões do lado esquerdo. É altamente recomendável instalar uma extensão chamada “GitLens”. Geralmente está na lista das extensões mais populares. Localize-o e clique no botão instalar.
5. Agora você terá um novo botão para GitLens no painel de botões esquerdo do VS Code. Clique nele e clique no botão _Welcome (Quick setup)_. A página _Welcome_ é aberta. Recomenda-se selecionar _Source control layout_ como visualização padrão. Isso faz com que o GitLens se funda com o painel _Source control_ padrão do VS Code.

## Clonar projetos de Urântiapedia

1. Abra o site GitHub e navegue até sua conta.
2. Abra suas cópias dos projetos Urantiapedia (_forks_) que você deveria ter criado.
3. Na página principal de cada cópia clique no menu verde chamado _Code_ e clique nele para copiar a URL do projeto, algo como `https://github.com/<username>/urantiapedia.git` e ` https:/ /github.com/<nomedeusuário>/urantiapedia-backup.git`.

![](/image/help/github_setting_1.png)

4. Abra o VS Code, abra o painel _Source control_ e clique em _Clone repository_.

![](/image/help/github_setting_2.png)

5. Na caixa de texto exibida, digite ou cole o caminho copiado anteriormente.
6. Selecione _Clone from GitHub_.

![](/image/help/github_setting_3.png)

7. Clique em _Allow in the GitHub extension to sign in_.
8. Uma página da web aparece solicitando permissão do VS Code para acessar o GitHub. Clique em _Continue_.
9. Clique em _Authorize github_.
10. Agora você é redirecionado para uma nova página da web onde uma mensagem é aberta. Clique em _Open VS Code_.
11. Agora clique em _Open_ para permitir o uso do caminho fornecido. Se algo der errado, repita a partir do ponto 4.
12. Quando o nome do repositório do seu projeto Urantiapedia for exibido no centro de comando, selecione-o. Uma caixa de diálogo aparecerá solicitando uma pasta. Selecione qualquer pasta ou crie uma para o projeto.

![](/image/help/github_setting_4.png)

13. Aguarde alguns minutos para que o VS Code clone o repositório. Por fim, clique em _Open repo_. Clique também em _Yes, I trust the authors_.
14. O projeto será aberto com sucesso.
15. Execute estas mesmas etapas para cada projeto, para *urantiapedia* e para *urantiapedia-backup*.

## Configurar *Ferramentas Urantiapedia*

O *Urantiapedia Tools* é um aplicativo desktop desenvolvido em JavaScript com [Electron](https://www.electronjs.org/). É usado para executar processos muito rápidos que modificam centenas de páginas por vez. Se não for necessário usá-lo, você pode pular esta etapa. Para instalar e executá-lo, siga estas etapas:

1. Abra o projeto *urantiapedia* no VS Code. Para fazer isso, você pode fazer isso de duas maneiras:
  - Abra o código VS. Selecione _File > Open folder_. Selecione a pasta raiz do projeto, aquela que contém o arquivo `package.json`.
  - Opcionalmente, no Windows você pode abrir o projeto usando o menu de contexto da pasta raiz e selecionar _Abrir con Code_.
2. Abra um terminal usando _Terminal > New Terminal_. Certifique-se de que o terminal esteja aberto na pasta raiz do projeto.
3. Para instalar as dependências do *Urantiapedia Tools* execute: `npm install`. Espere até que todos estejam instalados.

![](/image/help/github_setting_5.png)

4. O projeto é configurado com uma configuração de execução padrão. Pressione F5 para executar o aplicativo ou no terminal execute `npm run start`.
5. O aplicativo é aberto. Por padrão, uma janela _Dev Tools_ é aberta para poder depurar. Se você não estiver desenvolvendo, pode ignorá-lo ou fechá-lo.

![](/image/help/uptools.png)


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
        <td><a href="/pt/help/web_html_editor">Trabalhe diretamente no site do GitHub</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_content">Trabalhar localmente no PC</a></td>
      </tr>
    </tbody>
  </table>
</figure>