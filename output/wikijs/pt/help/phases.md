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

## Marco I - O Livro de Urântia e a Bíblia

Esta fase incorpora o conteúdo considerado mínimo para iniciar a *Urantiapedia* numa determinada língua. Isto inclui *O Livro de Urântia* e a *Bíblia*, ambos interligados de modo a que existam ligações que vão do *Livro de Urântia* para a *Bíblia* e vice-versa.

Para criar as ligações para a *Bíblia*, estamos a utilizar *Paramony*, de Duane L. Faw, que é um ficheiro com referências cruzadas entre a *Bíblia* e *O Livro de Urântia*.

https://urantia-book.org/urantiabook/paramony/


Tarefas | Onde | Quem
--- | --- | ---
Desenvolvimento de conversores de arquivos para Wiki.js | GitHub | Desenvolvedores
Conversão de cada papel do *Livro de Urântia* para uma página com links para a *Bíblia* | GitHub | Editores-chefes
Conversão de cada capítulo da *Bíblia* em uma página com links para *O Livro de Urântia* | GitHub | Editores-chefes
Carregamento em massa de arquivos no formato Wiki.js | GitHub | Administradores

> Esta fase está concluída para 27 idiomas.
{.is-success}

## Marco II - Hemeroteca, Biblioteca e Enciclopédia

Esta fase expande o conteúdo da *Urantiapedia* com as seguintes áreas:
- **Hemeroteca**: artigos e materiais de estudo para *O Livro de Urântia*. Há muitos deles no site da [Fundação Urântia](https://www.urantia.org/), na [Fellowship](https://urantiabook.org/), nas associações de Urantia e em sites individuais. Nenhum conteúdo será publicado sem a autorização expressa dos autores sempre que for possível localizá-los. O conteúdo pode ser carregado de duas formas: edição pública (qualquer editor pode aprimorá-lo) e edição fechada (somente o autor ou usuários autorizados pelo autor podem modificá-lo). Os artigos também podem incluir imagens.
- **Biblioteca**. Livros religiosos das principais religiões do mundo, livros de leitura e livros que não a *Bíblia* que são suspeitos de serem livros utilizados pelos reveladores em algumas partes do *Livro de Urântia*. Por exemplo, Matthew Block é um leitor que fez um ótimo trabalho encontrando este material. https://urantiabooksources.com/
- **Enciclopédia**. O índice criado pela *Urantia Fellowship* para a sua edição inglesa do *The Urantia Book* está a ser utilizado como guia para a sua criação. Este índice, por conter apenas breves anotações, está sendo expandido para se tornar um texto completo que servirá como a versão inicial para cada página de tópico. https://urantia-book.org/urantiabook/topical_index/index.htm
- **Índices**, páginas com listas de links que servem de ponto de entrada para o conteúdo anterior.


Tarefas | Onde | Quem
--- | --- | ---
Desenvolvimento para conversão de livros e artigos para Wiki.js | GitHub | Desenvolvedores
Desenvolvimento do *Topic Index Editor*, um assistente que permite agilizar o trabalho com a *Enciclopédia* | GitHub | Desenvolvedores
Desenvolvimento para converter a *Enciclopédia* em páginas com ligações para *O Livro de Urântia* | GitHub | Desenvolvedores
Adição de artigos e estudos ligados ao livro e às suas fontes | GitHub | Editores-chefes
Adição de outros livros para além da *Bíblia* | GitHub | Editores-chefes
Adicionar conteúdo à *Enciclopédia* | GitHub | Editores-chefes
Adição de índices de pessoas, seres, lugares, referências bíblicas, citações, cronologias, etc. | GitHub | Editores-chefes
Upload em massa de ficheiros no formato Wiki.js | GitHub | Administradores

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/help/sample_page_article.png">
<figcaption><em> Exemplo de renderização de um artigo.</em></figcaption>
</figure>

> Esta fase está concluída para 3 línguas (inglês, espanhol e francês).
{.is-success}

## Marco III -Tradutor

Esta fase é apenas para desenvolvimento. Foram incorporados os seguintes conteúdos:
- **Uma aplicação no _Urantiapedia Tools_ que automatiza a tradução** para vários idiomas de muitas páginas de uma só vez. Esta ferramenta faz o seguinte:
  - Permite ligar-se a serviços como o Google Cloud Translator para traduzir o texto.
  - Mantém a integridade do estilo e formato das páginas (Markdown e HTML).
  - Copia citações do *Livro de Urântia* e da *Bíblia* do original ou da tradução existente e não as traduz, mantendo a integridade dos textos e reduzindo o custo da tradução.
  - Permite saber antecipadamente o custo de execução da tradução aquando da contratação dos serviços utilizados.
- **O Livro de Urântia em formato de múltiplas traduções**. Permite visualizar a versão original em inglês e quaisquer traduções disponíveis (uma ou mais).


Tarefas | Onde | Quem
--- | --- | ---
Desenvolvimento em _Urantiapedia Tools_ de um tradutor de páginas massivas | GitHub | Desenvolvedores
Desenvolvendo um modo de visualização para *O Livro de Urântia* em múltiplas traduções | GitHub | Desenvolvedores

<figure id="Sample_fig_2" class="image urantiapedia">
<img src="/image/help/sample_page_side_by_side.png">
<figcaption><em> Amostra de renderização do Livro de Urântia lado a lado.</em></figcaption>
</figure>

> Esta fase está concluída.
{.is-success}

## Marco IV - Extensões, correções, Cartoteca e Mediateca

Nesta nova fase, em que o projeto se encontra, serão realizados trabalhos nas seguintes áreas:
- **Extensões** ao conteúdo das fases anteriores.
- **Correções**. Como grande parte do conteúdo foi introduzido rapidamente, utilizando a automação sempre que possível, existem muitos bugs e erros que serão corrigidos ao longo do tempo.
- **Cartoteca**. Uma coleção de mapas, tanto interativos como em formatos de imagens estáticas, que esclarecem a informação geográfica contida no _Livro de Urântia_.
- **Mediateca**: Este será um repositório de vários materiais audiovisuais, que incluirá itens como o seguinte:
  * Imagens, sejam desenhos ou fotografias de conceitos que ilustrem *O Livro de Urântia*.
  * Diagramas ou esquemas, que tentarão ser interativos se forem demasiado grandes, para que possam ser visualizados em dispositivos pequenos.
  * Apresentações de diapositivos.
  * Modelos 3D, cada um numa página separada, que podem ser estáticos ou interativos como mapas.
  * Versões áudio de _O Livro de Urântia_.
  * Colecções de vídeos incorporados no site, ou caso não seja possível, links para vídeos, com cursos ou explicações sobre _O Livro de Urântia_.

A _Cartoteca_ necessitará de desenvolver alguma solução para exibir mapas interativos. Não importa se os mapas são baseados em imagens estáticas ou conteúdo interativo, vai querer poder aumentar ou diminuir o zoom para mostrar detalhes ou obter uma visão geral. Existem soluções comerciais, como o [Google Maps](https://www.google.com/maps) e o [Google Earth](https://www.google.com/intl/es/earth/), que utilizam um formato proprietário da Google ([KML](https://developers.google.com/kml/documentation)). Mas existem também outras alternativas de código aberto que serão estudadas durante esta fase com o objectivo de não introduzir dependências tecnológicas, a não ser que seja absolutamente necessário.

A funcionalidade a desenvolver na _Cartoteca_ deverá permitir:
- Zoom: aumenta/diminui o zoom no mapa. Esta funcionalidade deve estar sempre disponível, quer o mapa seja uma imagem estática ou dinâmica. O seguinte só estaria disponível para mapas dinâmicos.
- Renderização de uma camada base, de preferência várias (mapa de rua moderno, satélite, mapa de relevo).
- Renderização de elementos vetoriais (pontos, linhas, polígonos) com diferentes estilos visuais (ícones, espessuras, cores).
- Notas pop-up com texto que pode conter ligações para outras *Urantiapedia* ou páginas externas.
- Visitas guiadas, ou seja, coleções de animações concatenadas onde a câmara se move de uma posição para outra e conteúdos ou anotações são mostrados e ocultados.
- Animações geométricas, associadas ou não a visitas guiadas, que permitam mostrar, por exemplo, um itinerário ou visualizar uma migração de raça.


<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/help/sample_page_map.jpg">
<figcaption><em> Exemplo de renderização de um mapa interativo.</em></figcaption>
</figure>

A _Mediateca_ necessitará também de um desenvolvimento que permita apresentações interativas na _Urantiapedia_. Não queremos simplesmente ligar ficheiros PPT ou PDF para que os utilizadores descarreguem e visualizem externamente. Queremos conteúdo em todos os idiomas e ligado ao resto da Urantiapedia. Isto não é fácil utilizando formatos proprietários que também introduzem dependências tecnológicas. É por isso que procuraremos alternativas que permitam uma ampla funcionalidade e que ao mesmo tempo se baseiem em formatos padrão.

Algumas alternativas poderão ser:
- [Google Docs](https://docs.google.com/).
- [Prezi](https://prezi.com/).
- [Impress.js](https://impress.js.org/) ([GitHub](https://github.com/impress/impress.js)) + [Hovercraft](https://regebro.github.io/hovercraft) ([GitHub](https://github.com/regebro/hovercraft))
- [Bespoke.js](https://markdalgleish.com/projects/bespoke.js/) ([GitHub](https://github.com/bespokejs/bespoke)).
- [Reveal.js](https://revealjs.com/) + [Hacker Slides](https://github.com/jacksingleton/hacker-slides).
- [Landslide](https://github.com/adamzap/landslide).


<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/help/sample_page_slides.png">
<figcaption><em> Exemplo de renderização de uma apresentação.</em></figcaption>
</figure>

Como parte da _Mediateca_, serão também incluídas cenas 3D. Felizmente, no mundo dos modelos 3D, existe um padrão aberto para criar estas cenas 3D: [glTF](https://www.khronos.org/api/index_2017/gltf) do grupo [Khronos](https://github.com/KhronosGroup/glTF), que é algo semelhante ao formato JPG, mas do mundo 3D. O poder deste padrão pode ser visto neste site de exemplo:

https://github.khronos.org/glTF-Sample-Viewer-Release/

O formato é amplamente utilizado e suportado por muitas aplicações, e já existem editores e visualizadores glTF online:
- [Sketchfab](https://sketchfab.com/)
- [PlayCanvas](https://playcanvas.com/).
- [Babylon.js](https://www.babylonjs.com/).
- [Three.js](https://threejs.org/) + [editor](https://threejs.org/editor/)
- [WebGL Studio](https://webglstudio.org/) + [litescene.js](https://github.com/jagenjo/litescene.js).


<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/help/sample_page_3d.jpg">
<figcaption><em> Exemplo de renderização de um modelo 3D.</em></figcaption>
</figure>

Tarefas | Onde | Quem
--- | --- | ---
Desenvolvimento de um sistema de exibição de mapas interativos | GitHub | Desenvolvedores
Desenvolvimento de um sistema de exibição de apresentações | GitHub | Desenvolvedores
Desenvolvimento de um sistema interativo de visualização de modelos 3D | GitHub | desenvolvedores
Adicionar uma coleção de mapas de amostra interativos sobre migrações raciais, factos históricos e as viagens de Jesus de Nazaré | GitHub | Editores-chefes
Adicionar uma coleção de apresentações utilizando as disponíveis em alguns sites de associações | GitHub | Editores-chefes
Adicionar uma coleção de diagramas ou gráficos interativos | GitHub | Editores-chefes
Adicionar uma coleção de modelos 3D, como Paradise Island, esferas arquitetónicas ou o Jardim do Éden | GitHub | Editores-chefes
Criação áudio de _O Livro de Urântia_ | GitHub | Editores-chefes
Adicionar uma coleção de vídeos incorporados ou links para vídeos | GitHub | Editores-chefes

> Esta fase está em curso.
{.is-warning}


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