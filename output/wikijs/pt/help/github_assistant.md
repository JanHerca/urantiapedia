---
title: "Urantiapedia — Ajuda do editor assistente"
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
        <td><a href="/pt/help/github">Ajuda dos editores-chefe</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/devs">Ajuda dos desenvolvedores</a></td>
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

Este manual é para usuários chamados “Editores Assistentes”, ou usuários que cumprem com estes requisitos:
- Eles têm uma conta neste site com permissões de edição. Esta é a única conta necessária.
- Eles têm um bom conhecimento do *O Livro de Urântia* em pelo menos um idioma no qual ele é publicado, mas melhor se for o inglês e um segundo idioma no qual o livro é traduzido.
- Eles desejam colaborar de forma altruísta na adição de informações relacionadas ao *O Livro de Urântia* na *Urântiapédia*.

## Duas maneiras de colaborar

Os “editores assistentes” podem colaborar de duas maneiras conforme sua conveniência.
1. Baixando os arquivos do GitHub, fazendo alterações e adições e enviando seu trabalho por e-mail.
2. Usando este site diretamente.

Qualquer um dos métodos é igualmente aceitável. A diferença entre uma ou outra forma de colaboração está detalhada nesta tabela:

Modo | Vantagens | Desvantagens
--- | --- | ---
Por e-mail | Pode trabalhar sem rede <br> O conteúdo é criado mais rápido <br> Arquivos de suporte podem ser editados (pasta `/input`) | O editor não aparece como criador das alterações na web
Na web | O uso de editores visuais facilita a edição <br> O editor aparece como o criador das alterações | Requer acesso à rede <br> O salvamento é mais lento e você só pode ir página por página <br> Você só pode editar coisas que são páginas da web

A seguir detalhamos como seriam realizadas as ações necessárias nas duas formas de colaboração.

## Colaboração por e-mail

### Baixe os arquivos do GitHub

O GitHub é uma página da Web para criação de projetos colaborativos, geralmente sobre desenvolvimento de software. Os arquivos do projeto para *Urantiapedia* estão aqui: [Urantiapedia](https://github.com/JanHerca/urantiapedia).

Este projeto é público. Qualquer pessoa pode baixar os arquivos. Você tem duas opções:
- Baixe tudo no projeto. Esta é a melhor opção se você for trabalhar em várias partes da *Urantiapedia*.
- Baixe apenas os arquivos necessários. Esta opção é mais simples se você for ajudar apenas em uma pequena parte.

### Baixando todo o projeto

Para baixar tudo vá até a página principal do [projeto no GitHub](https://github.com/JanHerca/urantiapedia) e no botão verde que diz *Code*, clique e selecione a opção *Download ZIP*. O navegador começará a baixar um arquivo ZIP com o conteúdo mais atualizado. Salve-o em qualquer pasta ou verifique sua pasta *Downloads* para localizar o arquivo.

Esteja ciente de que pode ser um download longo porque o projeto contém uma boa quantidade de arquivos. Você deve ter pelo menos 2-3 GB de espaço livre em seu computador.

Assim que o download terminar, você terá um arquivo chamado `urantiapedia-master.zip`. Este é um arquivo compactado, portanto, descompacte-o em qualquer pasta. Se você não sabe como descompactar um arquivo ZIP, é muito fácil. No Windows, por exemplo, clique com o botão direito do mouse no arquivo e selecione *Extrair tudo* para abrir a ferramenta de descompactação.

Uma vez que os arquivos são descompactados, você está pronto para ir para a próxima etapa com o Editor de Texto.

### Baixando apenas os arquivos necessários

Caso você não queira baixar todo o projeto, você pode fazer isso.

Vá para este URL no navegador: https://github.com/JanHerca/urantiapedia/tree/master/

Este é o caminho com os arquivos. Você pode percorrer as pastas na página do GitHub. Quando precisar de um arquivo, clique com o botão direito do mouse no nome dele e selecione *Salvar link como*. Isso trará a caixa de diálogo para salvar cada arquivo.

Dessa forma, você pode escolher quais arquivos deseja baixar, o que é uma opção melhor se você não tiver muito espaço livre no disco rígido ou não precisar do projeto completo.

Agora podemos editá-los em um Editor de Texto.

### Edite os arquivos em um Editor de Texto

Para editar os arquivos podemos usar qualquer ferramenta que possa editar arquivos de texto. No entanto, é altamente recomendável usar um software que possa mostrar caracteres ocultos e espaços em branco. É importante mostrá-los porque esses caracteres extras são usados ​​para criar a estrutura dos arquivos e, se os removermos, podemos corromper os arquivos.

O software mais recomendado é o *Visual Studio Code*, mas outros podem fazer o trabalho:
* *Visual Studio Code*: https://code.visualstudio.com/
* *Notepad++*: https://notepad-plus-plus.org/
* *Atom*: https://atom.io/
* *Sublime*: https://www.sublimetext.com/

Todos eles são de uso gratuito.

Se você for usar *Visual Studio Code*, as etapas para configurá-lo são estas:
1. Baixe *Visual Studio Code*. Acesse o site e clique no botão *Download*.
2. Instale-o. Durante a instalação, é recomendável marcar a opção *Adicionar ação 'Abrir com Code' ao menu de contexto da pasta* se você for um usuário do Windows. Com isso, uma opção será adicionada ao menu de contexto das pastas do Windows para que você possa abrir facilmente o conteúdo de qualquer pasta no editor.
3. Abra-o. Na primeira vez que é aberto, você pode configurar algumas configurações. Pule todos eles.
4. Vá para o menu *Arquivo* e selecione *Abrir pasta*. Em seguida, selecione a pasta com o projeto completo ou com os arquivos individuais que você baixou.
5. Abra qualquer um dos arquivos.
6. Uma extensão que pode facilitar a vida é *Sync Scroll*. Esta extensão permite rolar em vários arquivos em paralelo, algo que ajuda muito na hora de editar em vários idiomas ao mesmo tempo.
7. Para instalar a extensão, vá ao painel *Extensões*. Digite *Sync Scroll* na caixa de pesquisa. Clique no botão *Instalar* na extensão. Agora há um botão na barra de status para ativar ou desativar o *Sync Scroll*. É necessário ter vários arquivos abertos em paralelo para ver a opção. Para isso, clique com o botão direito do mouse em qualquer arquivo aberto na lista de arquivos abertos e selecione *Abrir ao lado*.

### Conteúdo do projeto Urantiapedia no GitHub

Para conhecer o conteúdo do projeto GitHub e sua estrutura, consulte [Content of GitHub project](/pt/help/github_content).

### Enviando alterações para administradores

A colaboração por meio do GitHub tem a vantagem de que qualquer coisa pode ser feita facilmente pela web do GitHub. Mas para que os *Assistentes Editores* funcionem bem simples, eles podem enviar os arquivos editados enviando-os por e-mail para qualquer um dos mantenedores do projeto ou para urantiapedia@gmail.com.

Se você esteve em contato com algum dos administradores do projeto, pode enviar diretamente seu trabalho. Então é muito fácil para os mantenedores atualizarem o site *Urantiapedia* do GitHub com o novo conteúdo e, por meio dele, atualizar o site *Urantiapedia*. Você será notificado quando as alterações forem feitas na web, que geralmente não leva mais de uma hora, para verificar se suas alterações foram atualizadas corretamente.

Lembre-se de que, se você enviar seu trabalho por correio, não será refletido que as alterações enviadas foram feitas por você e, em vez disso, elas aparecerão como alterações feitas pelos administradores. Se você deseja ser marcado como criador das alterações, deve usar a funcionalidade deste site.

## Colaboração através deste site

Neste caso, todas as tarefas são realizadas através deste site. Você precisa fazer login com a conta de edição fornecida e seguir os manuais sobre como fazer edições:
- [Interface e uso básico da Urantiapedia](/pt/help/web_basics)
- [Gerenciar páginas](/pt/help/web_pages)
- [Uso de editores](/pt/help/web_editors)
  - [Usando o editor visual](/pt/help/web_visual_editor)
  - [Usando o editor Markdown](/pt/help/web_markdown_editor)
  - [Usando o editor HTML](/pt/help/web_html_editor)

## Tarefas

Para saber sobre os marcos do projeto, consulte [Marcos de Urantiapedia](/pt/help/phases). As tarefas que podem ser realizadas pelos “Editores Assistentes” são as indicadas aqui:

### Marco I: O Livro de Urântia, a Bíblia e o Índice de Tópicos

1. Traduzindo *Paramony* do inglês para o idioma de destino. Verifique [Tradução do Paramony](/pt/help/github_paramony).
2. Traduzindo e revisando o *Topic Index* do inglês para o idioma de destino. Verifique [Tradução de uma revisão do Índice de tópicos](/pt/help/github_topicindex).
3. Obter uma tradução de domínio público de *A Bíblia* no idioma de destino. Verifique [Obter a Bíblia](/pt/help/github_bible).

Atualmente as tarefas 1 e 3 foram concluídas.

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

- [Urantiapedia - Projeto principal no GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - Projeto para cargas em massa no GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Fundação Urântia](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)


<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github">Ajuda dos editores-chefe</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/devs">Ajuda dos desenvolvedores</a></td>
      </tr>
    </tbody>
  </table>
</figure>