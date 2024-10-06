---
title: "Urantiapedia — Trabalhe diretamente do site GitHub"
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
        <td><a href="/pt/help/github_fork">Primeiros passos no GitHub</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_setting.md">Configurar o projeto GitHub Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Trabalhar diretamente no site do GitHub é o procedimento recomendado porque é muito simples comparado ao procedimento para trabalhar localmente no PC. É a opção recomendada para usuários de *Editores Assistentes*. Para usuários *Administradores* ou *Editores-Chefes*, recomenda-se a opção explicada nas páginas seguintes deste manual. 

Vamos supor um exemplo onde editaremos um artigo que apresenta erros de tradução. Os passos seriam estes: 

1. Insira seu *fork* do projeto *Urantiapedia* (`https://github.com/user-name/urantiapedia` onde _user-name_ é seu nome de usuário). 
2. Navegue até qualquer arquivo que deseja modificar usando a listagem de diretórios. Em nosso exemplo vamos corrigir um erro em um arquivo que está em `urantiapedia / output / wikijs / es /article / Alain_Cyr / Our_Experience...`. Uma vez no arquivo ele pode ser lido confortavelmente em seu modo _Preview_, conforme mostrado na imagem. Lá detectamos um erro que diz _pero las cuentas se perdieron_ (_mas as contas foram perdidas_) em vez de algo mais correto como _pero perdí la cuenta_ (_mas perdi a conta_). 

![](/image/help/github_edit_1.png) 

3. Clique no menu superior com um ícone de lápis e selecione _Edit in place_. 

![](/image/help/github_edit_2.png) 

4. Você entrará no modo de edição. Encontre o texto que estava errado e modifique-o. Depois de fazer todas as alterações necessárias no arquivo, clique no botão verde _Commit changes..._ 

![](/image/help/github_edit_3.png) 

5. Você será solicitado a confirmar que deseja salvar algumas mudanças. Deixe a mensagem padrão ou coloque uma mensagem mais descritiva sobre suas alterações onde diz _Commit message_. Mantenha a opção _Commit directly to the master branch_ selecionada (não se preocupe com isso, pois você é o único trabalhando em sua cópia do projeto). Por fim, clique em _Confirmar Commit changes. 

![](/image/help/github_edit_4.png)

6. Agora criaremos uma solicitação pull para enviar as alterações que fizemos em nossa cópia do projeto para o projeto original. Para fazer isso, selecione a opção _Pull requests_ no menu principal do GitHub. Se for a primeira vez, aparecerá uma lista vazia, como na imagem a seguir. 

![](/image/help/github_edit_5.png) 

7. Clique no botão verde _New pull request_ para criar uma nova solicitação pull. Uma tela de comparação aparecerá entre suas alterações e o projeto original. Se a comparação não encontrou conflitos, uma mensagem _Able to merge_ aparecerá. Você pode clicar no botão verde _Create pull request_ para finalmente criar a solicitação de alteração. 

![](/image/help/github_edit_6.png) 

8. Uma tela final permite que você insira um título e uma descrição para a solicitação de mudança. Por fim, clique no botão verde _Create pull request_ para criar a solicitação. 

![](/image/help/github_edit_7.png) 

9. A última tela nos leva ao projeto original (**atenção**, não estamos mais na página da nossa cópia do projeto) onde podemos ver o enviou solicitação de mudança e adicionou às _Pull requests_ do projeto original. Agora só temos que esperar que os *Administradores* aceitem ou não as alterações, momento em que veremos a confirmação de aceitação em nossa lista de _pull requests_. Esta operação não é imediata, pode demorar dias, mas isso não significa que não possa continuar a trabalhar, fazendo novas modificações e pedidos de alterações, repetindo os passos aqui explicados. Sua lista de _pull requests_ pode ser tão longa quanto você precisar. 

![](/image/help/github_edit_8.png) 

> :warning: IMPORTANTE: Todas essas etapas do projeto *urantiapedia* devem ser reproduzidas novamente no projeto *urantiapedia-backup* sempre que você quiser que seu nome de usuário seja refletido no projeto como autor das alterações. Caso contrário, basta introduzir as alterações apenas no projeto *urantiapedia* e os Administradores se encarregarão de introduzir as alterações para você no projeto *urantiapedia-backup*, que é aquele que está sincronizado com o site . Neste segundo caso, o usuário *Administrador* que carregou suas alterações aparecerá como autor. 
> Esta duplicação pode parecer complicada, mas é necessária por razões de segurança. 
{.is-warning}

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_fork">Primeiros passos no GitHub</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_setting.md">Configurar o projeto GitHub Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>