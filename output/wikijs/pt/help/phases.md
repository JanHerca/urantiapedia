---
title: Marcos de Urantiapedia
description: 
published: true
date: 2021-12-08T13:55:38.362Z
tags: help
editor: markdown
dateCreated: 2021-11-28T13:55:38.362Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/content">Conteúdo da Urantiapedia</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/languages">Idiomas suportados</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Para cada idioma a ser incluído na *Urantipedia*, o trabalho será realizado nos seguintes marcos. Para cada etapa incluímos aqui as tarefas a serem realizadas, onde as edições devem ser feitas e o papel do colaborador.

## Marco I - O Livro de Urântia, a Bíblia e o Índice de Tópicos

Neste marco é adicionado o conteúdo considerado mínimo para iniciar a *Urantiapedia* em cada idioma. Isso inclui *O Livro de Urântia*, a *Bíblia* e o *Índice de Tópicos*, todos ligados entre si para que haja links do *Livro de Urântia* para a *Bíblia* e para tópicos, e vice-versa. Da mesma forma, a *Bíblia* e o *Índice de Tópicos* também estarão ligados entre si de forma bidirecional.

Para criar os links para a *Bíblia*, está sendo usado o Paramony de Duane L. Faw, que é um arquivo com referências cruzadas entre a *Bíblia* e o *Livro de Urântia*.

https://urantia-book.org/urantiabook/paramony/
Para criar o *Topic Index*, o índice criado pela *Urantia Fellowship* para sua edição em inglês do *O Livro de Urântia* está sendo usado como orientação. Este índice, por conter apenas breves anotações, está sendo expandido para se tornar um texto completo que servirá como a versão inicial para cada página de tópico.

https://urantia-book.org/urantiabook/topical_index/index.htm

Espera-se que este marco seja alcançado no segundo trimestre de 2022.


Tarefas | Onde | Quem
--- | --- | ---
Desenvolvimento de conversores de arquivos para Wiki.js | GitHub | Desenvolvedores
Conversão de cada papel do *Livro de Urântia* para uma página com links para a *Bíblia* e Tópicos | GitHub | Editores-chefes
Conversão de cada capítulo da *Bíblia* em uma página com links para *O Livro de Urântia* | GitHub | Editores-chefes
Desenvolvimento do *Topic Index Editor*, um wizard para auxiliar no trabalho com o *Topic Index* | GitHub | Desenvolvedores
Conversão do *Índice de Tópicos* para páginas com links para *O Livro de Urântia* | GitHub | Editores-chefes
Carregamento em massa de arquivos no formato Wiki.js | GitHub | administradores

## Marco II - Livros, artigos, auxílios de estudo, esquemas e índices

Neste marco, o conteúdo da Urantiapedia é expandido com três áreas principais:
- Livros além da *Bíblia* suspeitos de serem livros usados ​​por reveladores em partes do *Livro de Urântia*. Por exemplo, Matthew Block é um leitor que fez um ótimo trabalho encontrando este material. https://urantiabooksources.com/
- Artigos, auxílios de estudo e esquemas do *O Livro de Urântia*. Há muitos deles no site da [Fundação Urântia](https://www.urantia.org/), na [Fellowship](https://urantiabook.org/), nas associações de Urantia e em sites individuais. Nenhum conteúdo será publicado sem a autorização expressa dos autores sempre que for possível localizá-los. O conteúdo pode ser carregado de duas formas: edição pública (qualquer editor pode aprimorá-lo) e edição fechada (somente o autor ou usuários autorizados pelo autor podem modificá-lo). Os artigos também podem incluir imagens.
- Índices, que são páginas com listas de links ou páginas que resumem um tópico.


Tarefas | Onde | Quem
--- | --- | ---
Abertura do *Índice de tópicos* para edição manual dos editores | web | Editores assistentes
Desenvolvimento para conversão de livros e artigos para Wiki.js | GitHub | Desenvolvedores
Adição de outros livros que se presume serem fontes do *O Livro de Urântia* | GitHub | Editores-chefes
Adição de artigos e auxílios de estudo vinculados ao livro, fontes e referências | GitHub | Editores-chefes
Adição de índices de pessoas, seres, lugares, *A Bíblia*, referências, citações, cronologias, etc | GitHub | Editores-chefes
Carregamento em massa de arquivos no formato Wiki.js | GitHub | Administradores

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/sample_page_article.png">
<figcaption><em> Exemplo de renderização de um artigo.</em></figcaption>
</figure>

## Marco III -Tradutor

Neste marco apenas o desenvolvimento será realizado. Duas novas ferramentas serão adicionadas ao Wiki.js que serão de especial importância neste projeto e que atualmente não estão incluídas no roadmap do *Wiki.js* (https://docs.requarks.io/releases/roadmap):
- Um aplicativo no Urantiapedia Tools que automatiza a tradução em vários idiomas de muitas páginas ao mesmo tempo. É importante que esta ferramenta faça o seguinte:
   - Permite conectar-se a um ou vários serviços como o Google Cloud Translator para realizar traduções de texto.
   - Manter a integridade do estilo e formato das páginas (Markdown e HTML).
   - Copie citações do *Livro de Urântia* e da *Bíblia* da tradução original ou existente e não as traduza.
   - Permite conhecer antecipadamente o custo que terá a execução da tradução ao invocar os serviços utilizados.
- Um novo tipo de editor em páginas da web que permite exibir dois idiomas ao mesmo tempo e realizar uma tradução assistida, para que de um lado o conteúdo seja exibido como guia e, em paralelo, você possa ver sugestões de tradução e o final tradução salva. Também terá funcionalidades que permitem conhecer o progresso que o usuário fez em seu trabalho de tradução e coordenar com outros usuários que também estão traduzindo no mesmo idioma.
- Um novo tipo de visualizador de conteúdo que permite visualizar o conteúdo em uma coluna dupla, mostrando dois dos idiomas disponíveis ao mesmo tempo. Um bom uso disso é poder ver o original em inglês do *O Livro de Urântia* e outro idioma, mas isso funcionaria para qualquer página e qualquer par de idiomas.
- Uma opção também será adicionada para poder selecionar a tradução desejada para o espanhol, uma vez que existem três traduções oficiais de *O Livro de Urântia* para o espanhol. Apenas uma será a tradução padrão à qual os links de outras páginas serão conectados, mas ao mostrar as páginas do livro em espanhol, será adicionada uma opção que permite alternar da tradução padrão para as demais.


Tarefas | Onde | Quem
--- | --- | ---
Abertura de livros e artigos para edição manual de *editores* | web | Editores assistentes
Desenvolvimento em Urantiapedia Ferramentas de um tradutor de páginas massivas | GitHub | Desenvolvedores
Desenvolvimento em *Wiki.js* de um novo editor para traduções guiadas na web | GitHub | Desenvolvedores
Desenvolvimento em *Wiki.js* de um novo visualizador de modo duplo para *O Livro de Urântia* em pares de idiomas | GitHub | Desenvolvedores
Desenvolvimento em Wiki.js de um seletor de preferência na tradução para uso do *Livro de Urântia* (para idiomas como o espanhol com vários) | GitHub | Desenvolvedores

<figure id="Sample_fig_2" class="image urantiapedia">
<img src="/image/sample_page_side_by_side.png">
<figcaption><em> Amostra de renderização do Livro de Urântia lado a lado.</em></figcaption>
</figure>

## Marco IV - Mapas interativos

Atualmente, existem poucos padrões para salvar uma definição de mapa. O formato [KML](https://developers.google.com/kml/documentation) (propriedade do Google) é uma boa opção que também permite extensibilidade por ser baseado em XML. Neste marco, será definido um padrão com base no melhor já existente que permite salvar:
- A definição de camadas base e funcionalidades básicas de um mapa 2D ou 3D.
- Pontos, linhas e polígonos na superfície da Terra.
- Estilos personalizados para as geometrias acima.
- Anotações pop-up com texto que pode conter links para outras Urantiapedia ou páginas externas.
- Visitas guiadas, ou seja, coleções de animações concatenadas onde a câmera se move de uma posição para outra e conteúdos ou anotações são mostrados e ocultados.
- Animações geométricas, associadas ou não a visitas guiadas, que permitem mostrar, por exemplo, um itinerário ou visualizar a migração de uma corrida.

Os desenvolvimentos que serão necessários no *Wiki.js* são:
- Um editor de mapas do lado do cliente que usa APIs de mapas 2D e 3D existentes (como [Google Maps](https://www.google.com/maps) e [Google Earth](https://www.google.com /intl/en/earth/)) e permite que você crie o mapa no padrão.
- Um renderizador do lado do servidor que converte o padrão em um visualizador da web que renderiza o mapa criado.
- O visualizador web que apresenta o mapa criado no lado do cliente, uma versão simplificada (sem ferramentas de edição) do editor de mapas.


Tarefas | Onde | Quem
--- | --- | ---
Desenvolvimento em *Wiki.js* de um editor de mapas interativo, o formato e o renderizador | GitHub | Desenvolvedores
Adição de um conjunto de mapas interativos de amostra, sobre migrações de raça, fatos históricos e viagens de Jesus | GitHub | Editores-chefes

<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/sample_page_map.jpg">
<figcaption><em> Exemplo de renderização de um mapa interativo.</em></figcaption>
</figure>

## Marco V - Apresentações

Assim como nos mapas, não há formatos padrão para salvar apresentações. O formato mais universal é o PPTX do PowerPoint (proprietário da Microsoft), mas não é um formato do tipo texto. Neste marco, será definido um padrão para salvar apresentações. Como alternativas de código aberto muito interessantes que integram apresentações na web sem estarem vinculadas a um formato, temos:
- [Impress.js](https://github.com/impress/impress.js) com [Hovercraft](https://github.com/regebro/hovercraft) é uma biblioteca de criação de apresentações. O formato é [ReST](https://docutils.sourceforge.io/rst.html).
- [Bespoke.js](https://github.com/bespokejs/bespoke) é uma micro-biblioteca de criação de apresentações. O formato é XML e outros.
- [Strut](https://github.com/tantaman/Strut) é um editor para Impress.js e Bespoke.js. O formato é Markdown.
- [Reveal.js](https://revealjs.com/) é uma biblioteca de criação de apresentações. O formato é HTML ou Markdown. [Hacker Slides](https://github.com/jacksingleton/hacker-slides) é um editor Reveal.js que usa Markdown .
- [Landslide](https://github.com/adamzap/landslide) é uma biblioteca de criação de slides. Os formatos são Markdown, ReST ou Textile.

Os desenvolvimentos que serão necessários no *Wiki.js* são:
- Um editor de apresentação do lado do cliente que usa APIs existentes e permite criar a apresentação em um formato padrão, como Markdown.
- Um renderizador do lado do servidor que converte o padrão em um visualizador da Web que exibe a apresentação criada.
- O visualizador da web que exibe a apresentação no lado do cliente, uma versão simplificada (sem ferramentas de edição) do editor de apresentações.


Tarefas | Onde | Quem
--- | --- | ---
Abertura de mapas interativos para edição manual e acréscimos pelos editores | web | Editores assistentes
Desenvolvimento em *Wiki.js* de um editor de slides, com seu formato e renderizador | GitHub | Desenvolvedores
Adição de um conjunto de diapositivos utilizando os disponíveis nos sites da associação | GitHub | Editores-chefes

<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/sample_page_slides.png">
<figcaption><em> Exemplo de renderização de uma apresentação.</em></figcaption>
</figure>

## Marco VI - modelos interativos 3D

Felizmente no mundo 3D existe um padrão aberto para criar cenas 3D, [glTF](https://www.khronos.org/api/index_2017/gltf) do [grupo Khronos](https://github.com/ KhronosGroup/glTF), que é como o JPG para 3D. Você pode ver o poder deste padrão neste site de exemplo:

https://github.khronos.org/glTF-Sample-Viewer-Release/

O formato é amplamente utilizado e suportado em muitas aplicações, e já existem editores e visualizadores de glTF online:
- [PlayCanvas](https://playcanvas.com/). O mecanismo é de código aberto e possui um editor online pago que permite criar cenas de forma colaborativa.
- [Babylon.js](https://www.babylonjs.com/). Um mecanismo e editor de código aberto completo.
- [Three.js](https://threejs.org/). Um motor e um [editor](https://threejs.org/editor/) totalmente de código aberto.
- [WebGL Studio](https://webglstudio.org/). Um mecanismo, [litescene.js](https://github.com/jagenjo/litescene.js) e um editor de código aberto completo.

Os desenvolvimentos que serão necessários no Wiki.js são:
- Integrar no Wiki.js um editor de cena glTF (usando um dos acima) no lado do cliente. glTF usa um formato JSON.
- Um renderizador do lado do servidor que converte o glTF JSON em um visualizador da Web que exibe a cena 3D criada. O visualizador utilizado será aquele relacionado com o editor selecionado.


Tarefas | Onde | Quem
--- | --- | ---
Abertura de slides para edição manual e acréscimos de editores | web | Editores assistentes
Desenvolvimento em Wiki.js para um criador/editor de modelo interativo 3D, seu formato e renderizador | GitHub | Desenvolvedores
Adição de um conjunto de modelos 3D sobre o Paraíso, esferas arquitetônicas, Jardim do Éden e similares | GitHub | Editores-chefes

<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/sample_page_3d.jpg">
<figcaption><em> Exemplo de renderização de um modelo 3D.</em></figcaption>
</figure>
 
## Futuro

A partir de agora, o projeto poderá contemplar novos desafios como:
- Servir como um local centralizador para os esforços de tradução do *O Livro de Urântia* para outros idiomas.
- Servir como um portal para oferecer palestras e cursos de treinamento online sobre diferentes tópicos relacionados ao *O Livro de Urântia*.
- Servir como uma galeria de arte virtual onde artistas que criam obras relacionadas ao *O Livro de Urântia* podem expor suas obras.
- Oferecer um centro para perguntas e respostas sobre tópicos relacionados ao *O Livro de Urântia*.

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
        <td><a href="/pt/help/content">Conteúdo da Urantiapedia</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/languages">Idiomas suportados</a></td>
      </tr>
    </tbody>
  </table>
</figure>