---
title: Conteúdo de Urantiapedia
description: 
published: true
date: 2021-12-08T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/principles">Princípios que regem a Urantiapedia</a></td>
        <td><a href="/pt/help">Index</a></td>
        <td><a href="/pt/help/phases">Marcos do projeto</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Aqui está uma explicação detalhada de todos os tipos de conteúdo esperados para *Urantiapedia*, como é acessado, organizado e quem pode alterá-lo.

## Como o conteúdo é organizado

Como em qualquer Wiki em [Urantiapedia](https://urantiapedia.org) existem páginas, cada uma com um título e URL únicos. Por exemplo:
* https://urantiapedia.org/pt/The_Urantia_Book/156 é o URL de uma página com o papel 156 do Livro de Urântia em inglês.
* https://urantiapedia.org/es/article/How_big_is_Orvonton é o URL de uma página com um artigo sobre Orvonton em espanhol.
* https://urantiapedia.org/ko/topic/Andrew é o URL de uma página sobre o apóstolo André em coreano.

Cada página pode ser um artigo, um capítulo de um livro, a página de índice de um livro, um índice agrupando links para outras páginas e assim por diante. O que as páginas compõem depende da criatividade dos usuários e podem ser modificados a qualquer momento conforme as necessidades mudam, embora uma vez criada uma página, é recomendável torná-la permanente e usar redirecionamentos, se necessário.


## Grupos de usuários

A tabela resume os grupos de usuários dentro da web:

Grupo | Descrição dos usuários no grupo
--- | ---
ADMIN | Usuário que pode fazer tudo
EDITOR (1) | Usuário que após uma solicitação foi validada e autorizada por um usuário ADMIN para editar livros, artigos e auxílios de estudo, slides, mapas, modelos 3D e ativos (imagens, áudio, vídeo).
AUTOR (2) | Usuário dentro de um grupo com seu nome que atua como EDITOR, mas apenas para uma coleção restrita de livros, artigos, etc. de autoria do usuário.
REVISOR | Usuário que só pode visualizar páginas, visualizar o histórico e fazer comentários.
USUÁRIO | Qualquer usuário não registrado. Apenas para visualização de páginas.

(1) Nos primeiros estágios do projeto, alguns tipos de conteúdo são editáveis ​​apenas usando *Urantiapedia Tools* por usuários chamados *Editores-chefes*, fora da web da *Urantiapedia*. Uma vez que o conteúdo inicial é carregado em cada etapa do projeto, *Urantiapedia Tools* não é mais usada e os usuários do grupo EDITOR poderão editar conteúdo através desta web.

(2) AUTOR significa que haverá vários grupos do tipo AUTOR, cada um contendo usuários que são os autores (ou autorizados pelos autores) de determinadas páginas. Por exemplo, se houver dois usuários chamados Han Solo e Obi Wan que desejam ser autores, haverá um par ou grupos denominados HANSOLO e OBIWAN, o primeiro com o usuário Han Solo, o segundo com o usuário Obi Wan. O primeiro será o único usuário que poderá editar páginas em caminhos como `/pt/article/hansolo/` (e qualquer outra localidade além do inglês), `/pt/slides/hansolo` e assim por diante. Por outro lado, o usuário Obi Wan pode editar páginas em caminhos como `/pt/article/obiwan/`, `/pt/slides/obiwan/` e assim por diante. Desta forma, alguns usuários serão os únicos editores de determinadas páginas.

Esteja ciente de que os únicos usuários que podem excluir páginas são usuários ADMIN para garantir que os links não sejam quebrados. Há apenas uma exceção a essa regra. Portanto, o processo com uma página é:
1. Criação:
  - Usuários EDITOR ou AUTOR criam uma página diretamente neste site, ou
  - O usuário ADMIN cria várias páginas de uma só vez por um processo de upload em massa (os usuários ADMIN podem ser ajudados pelos usuários EDITOR e AUTOR através do uso do GitHub)
2. Edição:
  - Usuários EDITOR ou AUTOR editam uma página diretamente neste site, ou
  - O usuário ADMIN edita várias páginas de uma só vez por um processo de upload em massa (os usuários ADMIN podem ser ajudados pelos usuários EDITOR e AUTOR através do uso do GitHub)
3. Exclusão ou Mover (se necessário):
  - O usuário ADMIN exclui ou move uma página garantindo que qualquer página vinculada seja atualizada.
  - O usuário AUTOR exclui ou move uma página se estiver dentro de pastas próprias.

## Tipos de página

A tabela resume os tipos de páginas. A tabela mostra o grupo mínimo de usuários necessário para editar o tipo de página. Os usuários ADMIN podem fazer tudo, então quando a tabela diz EDITOR ou AUTOR, isso implica também em ADMIN. Quando a tabela diz usuário AUTOR, significa que existem vários usuários desse tipo e cada um controla as páginas dentro da pasta indicada, sendo o único com permissão para editá-las.

A tabela mostra o caminho do URL para adicionar ao domínio [https://urantiapedia.org](https://urantiapedia.org) para obter o URL para inglês. Substitua o código do idioma pelo desejado para outros idiomas. Por exemplo, a URL para obter o índice do *O Livro de Urântia* é:
- em inglês: https://urantiapedia.org/pt/The_Urantia_Book/Index
- em espanhol: https://urantiapedia.org/es/The_Urantia_Book/Index

Mais sobre URLs na seção abaixo.

Tipo | Descrição | Criação | Modificar | Remoção | URL
--- | --- | --- | --- | --- | ---
WEBPAGE | Páginas do próprio Wiki como página inicial, páginas de ajuda, roteiro | ADMIN | ADMIN | ADMIN | /pt/help/
LIVRO_UB | O Livro de Urântia | ADMIN | ADMIN | ADMIN | /pt/The_Urantia_Book/
LIVRO_BIBLIA | A Bíblia | ADMIN | ADMIN | ADMIN | /pt/Bible/
BOOK_AUTORED | Livro de um usuário autor | AUTOR | AUTOR | AUTOR | /pt/book/user_name/book_title/
LIVRO_PÚBLICO | Livro que qualquer um pode editar | EDITOR | EDITOR | ADMIN | /pt/book/AUTOR/book_title/
TÓPICO | Termo, tópico ou conceito mencionado no Livro de Urântia | ADMIN | EDITOR | ADMIN | /pt/topic/topic_name/
ÍNDICE | Páginas com coleções de links | ADMIN | EDITOR | ADMIN | /pt/index/index_name
ARTIGO_AUTORED | Artigo de um usuário autor | AUTOR | AUTOR | AUTOR | /pt/article/user_name/article_title
ARTIGO_PUBLIC | Artigo que pode ser editado por qualquer pessoa | EDITOR | EDITOR | ADMIN | /pt/article/AUTOR/article_title
SLIDES_AUTORED | Slides de um autor | AUTOR | AUTOR | AUTOR | /pt/slides/user_name/slides_title
SLIDES_PUBLIC | Slides que podem ser editados por qualquer pessoa | EDITOR | EDITOR | ADMIN | /pt/slides/slides_title
MAPS_AUTORED | Mapa (1) de um autor | AUTOR | AUTOR | AUTOR | /pt/map/user_name/map_title
MAPS_PUBLIC | Mapa (1) que pode ser editado por qualquer pessoa | EDITOR | EDITOR | ADMIN | /pt/map/map_title
3DMODEL_AUTORED | Um modelo 3D de um autor | AUTOR | AUTOR | AUTOR | /pt/3dmodel/user_name/3dmodel_name
3DMODEL_PUBLIC | Um modelo 3D público | EDITOR | EDITOR | ADMIN (2) | /pt/3dmodel/3dmodel_name
IMAGEM | Uma imagem, seja um desenho ou um esquema gráfico ou ilustração | EDITOR ou AUTOR | EDITOR ou AUTOR | ADMIN (3) | /pt/imagem/nome_imagem

1. Os mapas podem ser em 2D ou 3D e podem conter:
   - Marcas de ponto com um pop-up mostrando os locais. Os pop-ups podem ter links para Wiki ou externos.
   - Caminhos: vários pontos de caminho com pop-ups em cada um mostrando uma viagem de uma pessoa ou pessoas. Esses caminhos podem ser mostrados como animações.
   - Áreas: polígonos que mostram a localização de algo sem uma localização específica, como impérios ou nações.
2. Um modelo 3D só pode ser removido se não houver outra página vinculada a ele. A página do modelo 3D, a página que permite atualizar o modelo 3D, deve permitir conhecer a lista de páginas que utiliza o modelo 3D. Os modelos 3D só podem ser carregados em determinados formatos (de preferência glTF) e tamanhos máximos.
3. Uma imagem só pode ser removida se não houver outra página vinculada a ela. A página da imagem, a página que permite atualizar a imagem, deve permitir conhecer a lista de páginas que utilizam a imagem. As imagens só podem ser carregadas em determinados formatos e tamanhos máximos.


## Páginas de ajuda

Estas são páginas com conteúdo sobre a própria *Urantiapedia*, como manuais do usuário, recomendações, documentos de políticas, status de progresso e afins. Estas páginas têm este padrão de URL: `https://urantiapedia.org/[lan]/help/[title]`


## Livros

Isso inclui não apenas *O Livro de Urântia* em todas as suas traduções, mas também a Bíblia e qualquer livro de domínio público que se suponha ser uma fonte usada por reveladores ou com conteúdo que possa explicar tópicos do *Livro de Urântia*. Também podem ser incluídos livros que são trabalhos derivados de *O Livro de Urântia* cujos autores desejam oferecer com uma licença aberta. Tudo isso poderia incluir uma espécie de *biblioteca urantiana*, algo como o [Wikisource](https://wikisource.org/wiki/Main_Page) ou [Archive.org](https://archive.org/), mas tudo relacionado com o Livro de Urântia.

### O Livro de Urântia

Com relação ao *O Livro de Urântia* há uma página principal para cada tradução com o título, copyright, ano, etc., uma página para o índice dos artigos, uma página para a versão estendida do índice e, finalmente, uma página para cada artigo . Para inglês, alguns exemplos destas páginas:
- https://urantiapedia.org/en/The_Urantia_Book
- https://urantiapedia.org/en/The_Urantia_Book/Index
- https://urantiapedia.org/en/The_Urantia_Book/Index_Extended
- https://urantiapedia.org/en/The_Urantia_Book/147

Outros conteúdos como o *Mandato de publicação* também podem ser incluídos no mesmo caminho.

Cada página de papel possui, além do próprio conteúdo com seções, algumas seções extras:
- *Referências* contém links para citações ou supostas citações. Em *O Livro de Urântia* os próprios autores indicam que muitas vezes agem mais como compiladores do que reveladores, usando a documentação humana existente. Às vezes, o que é uma citação literal está implícito porque os desenvolvedores usam aspas. Em outros, a citação é apenas sutil e difícil de detectar. Muitos leitores encontraram essas citações ao longo do tempo. As citações geralmente se referem a uma passagem na *A Bíblia*, ou a um livro sobre religião, filosofia ou ciência da época em que as revelações foram escritas ou antes. Nesta seção de *Referências* é onde serão colocados links para a passagem bíblica ou para qualquer outro livro usado pelos reveladores. *A Bíblia* e outras fontes também estarão dentro da *Urantiapedia* desde que os livros sejam de domínio público,
- *Links* são links para qualquer artigo, tópico, índice ou imagem que esteja relacionado ao artigo e forneça conteúdo útil que esclarece o artigo.
- Também pode haver uma seção de *Links Externos* com links para outros sites que possam ter informações úteis relacionadas ao artigo.

Essas seções com *Referências*, *Links* e *Links externos* serão um padrão comum na maioria das páginas da *Urantiapedia*.

### A Bíblia

Com relação à *A Bíblia*, como é um livro principal massivamente citado dos autores do *O Livro de Urântia*, ela tem um caminho curto até ela. Cada livro da Bíblia tem uma página, e cada capítulo uma página para ele. Por exemplo, estes são links para livros e capítulos de Gênesis e um evangelho de João:
- https://urantiapedia.org/pt/Bible/Genesis
- https://urantiapedia.org/pt/Bible/Genesis/Index
- https://urantiapedia.org/pt/Bible/Genesis/2
- https://urantiapedia.org/pt/Bible/John
- https://urantiapedia.org/pt/Bible/John/Index
- https://urantiapedia.org/pt/Bible/John/2

Nomes de livros válidos para usar no URL:

 | | | | |
 --- | --- | --- | ---
Genesis | Exodus | Leviticus | Numbers 
Deuteronomy | Joshua | Judges | Ruth
1_Samuel | 2_Samuel | 1_Kings | 2_Kings
1_Chronicles | 2_Chronicles | Ezra | Nehemiah
Esther | 1_Maccabees | 2_Maccabees | Job
Psalms | Proverbs | Ecclesiastes | Song_of_Solomon
Sirach | Wisdom_of_Solomon | Isaiah | Jeremiah
Lamentations | Baruch | Ezekiel | Daniel
Hosea | Joel | Amos | Obadiah | Jonah
Micah | Nahum | Habakkuk | Zephaniah
Haggai | Zechariah | Malachi | Matthew
Mark | Luke | John | Acts
Romans | 1_Corinthians | 2_Corinthians | Galatians
Ephesians | Philippians | Colossians | 1_Thessalonians
2_Thessalonians | 1_Timothy | 2_Timothy | Titus
Philemon | Hebrews | James | 1_Peter
2_Peter | 1_John | 2_John | 3_John
Jude | Revelation | Bel_and_the_Dragon | Prayer_of_Manesseh
Tobit | Judith | Enoch | Assumption_of_Moses

Outros livros relacionados com a Bíblia como livros não canônicos podem ser colocados no mesmo caminho se estiverem relacionados com o *Livro de Urântia* de alguma forma. Um bom exemplo é o livro de Enoque, que é mencionado explicitamente.

### Outros livros deveriam ser fontes

Com relação a qualquer outro livro além da Bíblia que seja uma possível fonte do *O Livro de Urântia*, eles podem ser adicionados em um caminho de `book`, com uma página para título do livro, autor, copyright e data, uma para o índice e uma para cada capítulo. É importante que, se os livros forem antigos e tiverem sido digitalizados, as imagens digitalizadas e o texto sejam disponibilizados. As imagens podem ser adicionadas como uma coleção de imagens vinculadas em uma seção *Original* na parte inferior do texto de cada capítulo.

Por exemplo, Matthew Block é um leitor que fez um ótimo trabalho encontrando material de origem do *O Livro de Urântia*, conforme explicado em https://urantiabooksources.com/. Um dos livros que ele identificou como uma possível fonte de reveladores é *The Universe Around Us*, de Sir James Jeans, publicado em 1930. Como este livro entrou em domínio público, ele pode ser adicionado a *Urantiapedia* e links para este livro pode ser assim:
- https://urantiapedia.org/en/book/Sir_James_Jeans/The_Universe_Around_Us
- https://urantiapedia.org/en/book/Sir_James_Jeans/The_Universe_Around_Us/Index
- https://urantiapedia.org/en/book/Sir_James_Jeans/The_Universe_Around_Us/3

### Outros livros de leitores

Os leitores também podem adicionar ao *Urantipedia* seus próprios livros escritos se quiserem compartilhar como uma licença pública. A maneira de adicioná-los é como em qualquer outro livro, no caminho `book`, com uma página para título, autor, aviso de direitos autorais e data, uma página para índice e uma página por capítulo. Livros, é claro, devem ter uma relação com *O Livro de Urântia* e fornecer algum tipo de ajuda na compreensão do livro, não ser romances ou qualquer obra inspirada com poucas relações com o livro.

O padrão de URL para esses livros é assim: `https://urantiapedia.org/en/book/[author]/[book_title]` para livros com um autor conhecido ou `https://urantiapedia.org/en/book/[book_title]` para livros anônimos. Esteja ciente de que é recomendado que o título do livro na URL seja em inglês, mesmo que o idioma original no qual o livro foi escrito não seja o inglês. Confira mais sobre isso em uma seção abaixo.


## Artigos, auxílios de estudo e diagramas

Isso inclui qualquer artigo, material de ajuda e documento de opinião que possa ser interessante para estudar e compreender *O Livro de Urântia*.

Cada uma será uma página com seções. É altamente recomendável ter as seções comuns *Referências*, *Links* e *Links externos*. As imagens serão adicionadas para que sejam vinculáveis ​​como entidades por si mesmas, para que muitos artigos possam compartilhar as mesmas imagens sem repeti-las. *Referências* são importantes. Muitos leitores escreveram artigos nos quais não incluem corretamente a referência a uma citação do livro de Urântia ou de qualquer artigo científico. Sempre que possível, esses artigos devem ser alterados para adicionar essas referências ausentes. Sem referências, a informação não é verdadeira.

O padrão de URL para um artigo deve seguir este: `https://urantiapedia.org/en/article/[author]/[article_title]` para artigos com autor conhecido ou `https://urantiapedia.org/en/article/[article_title]` para artigos anônimos. Esteja ciente de que, embora os artigos tenham um título no idioma original em que foram escritos pelo autor, é uma boa prática usar um nome traduzido em inglês. Dessa forma, a URL pode ter um padrão consistente.

Vamos colocar um exemplo. Imagine que um leitor espanhol criou um artigo intitulado *Nazaret en tiempos de Jesús*, que podemos traduzir para *Nazaré nos tempos de Jesus*. A melhor escolha para URL seria

https://urantiapedia.org/es/article/Nazareth_in_Jesus_times

ao invés de

https://urantiapedia.org/es/article/Nazaret_en_tiempos_de_Jesús

Esteja ciente de que o propósito do *Urantipedia* é permitir um conteúdo multilíngue para todos, e espera-se que qualquer página carregada nele seja traduzida para todos os idiomas suportados em algum momento no futuro. Os títulos em inglês fornecem uma maneira comum unificada de identificar URLs. Isso não afeta o título da página, que é sempre um valor diferente da URL. Mais sobre isso em uma seção abaixo.

Este tipo de conteúdo inclui também esquemas ou desenhos com esquemas. Existem várias tecnologias que permitem a criação fácil de diagramas e gráficos que são atualmente suportados em *Urantiapedia*: [Kroki](https://kroki.io/), [Mermaid](http://mermaid-js.github.io/mermaid/#/) e [PlantUML](https://plantuml.com/). Se os geradores de diagramas anteriores não forem suficientes para os propósitos do *O Livro de Urântia* (porque eles são principalmente para desenvolvimento de software) é possível usar qualquer conteúdo em [formato SVG](https://developer.mozilla.org/en-US/docs/Web/SVG), que é o melhor formato recomendado para criar diagramas, esquemas ou gráficos.

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/help/sample_page_article.png">
<figcaption><em> Exemplo de renderização de um artigo.</em></figcaption>
</figure>

## Tópicos

Estes são um tipo de artigo relacionado a um tópico específico do *O Livro de Urântia*. Por exemplo, podem ser conceitos como [absonidade](/pt/topic/absonity), ou pessoas como [Grandfanda](/pt/topic/Grandfanda), ou tipos de seres como [Thought Adjusters](/pt/topic/Thought_Adjusters ), ou lugares como [Nazaré](/pt/topic/Nazareth) ou [Orvonton](/pt/topic/Orvonton_(superuniverse)), ou eventos como a [chegada de Adão e Eva](/pt/topic/Adam#chegada-de-adão-e-eve), etc.

Cada tópico terá as seções comuns *Referências* com links para *O Livro de Urântia*, *Links* com links para outras páginas em *Urantiapedia*, e a seção *Links externos* para mais links fora da página. Por exemplo, a página sobre *Nazareth* pode conter uma explicação breve e básica sobre Nazareth (onde fica, por que é importante, coordenadas geográficas com links para mapas), mas a seção *Links* pode ter um link para um artigo em qual o leitor mergulha na cidade de Jesus, como era no tempo de Jesus e quais achados arqueológicos foram encontrados que parecem corroborar ou não as afirmações do livro.

O padrão de URL para um tópico é: `https://urantiapedia.org/pt/topic/[topic_name]`. Os nomes dos tópicos são sempre em inglês, embora o título da página seja em cada idioma.


## Índices

Diferentes índices estão incluídos aqui. Se o número de elementos obtidos no índice for muito alto, pode haver uma página principal com seções principais e depois páginas secundárias. Sempre que possível é preferível que cada índice seja apenas uma página, para que seja mais fácil localizar algo.

Estes podem ser alguns dos índices:

Índice | Descrição | Classificado | Caminho
--- | --- | --- | ---
Lista de índices | Lista de todos os índices | Como esta tabela | /pt/index/index
Índice de tópicos | Conhecido como Glossário | Alfabeticamente | /pt/index/topics
Índice de pessoas | Subconjunto do Glossário para nomes próprios de pessoas ou personalidades | Alfabeticamente | /pt/index/people
Índice de seres | Subconjunto do Glossário para tipos de seres no universo (1) | Alfabeticamente | /pt/index/beings
Índice de lugares | Subconjunto do Glossário para lugares, no universo ou na Terra | Alfabeticamente | /pt/index/places
Índice Bíblico | Para cada livro da Bíblia, links para *O Livro de Urântia* onde um versículo é relevante | Por ordem bíblica (Gênesis, Êxodo, etc.) | /pt/index/biblical
Índice de Referências | Para cada documento do *Livro de Urântia*, todas as referências em outros livros, seja a Bíblia ou outros | Por livro de papel | /pt/index/references
Índice de cotações | Lista de referências no livro a frases emblemáticas | Por temas (Deus, o Universo, os Anjos, Jesus, etc.) | /pt/index/quotes
Cronologia da Terra | Eventos na Terra (2) | Cronologicamente | /pt/index/earth_timeline
Cronologia da vida de Jesus | Descrição dos principais eventos de Jesus e links para o livro | Por ano, mês e dia | /pt/index/Jesus_timeline

(1) Se um tipo de ser recebe nomes diferentes (por exemplo, *Terceira Fonte e Centro* = *Ator Conjunta*), cada entrada terá ao lado a lista dos demais termos equivalentes.

(2) As cronologias podem ser consideradas um tipo de índice de eventos. Neste caso seria uma cronologia, ordenada por data, dos acontecimentos do desenvolvimento evolutivo da Terra. Pode incluir os eventos históricos mencionados no livro.


## Imagens

Imagens para toda a página:

* Arte de Urântia. Desenhos ou fotografias que evocam um conceito do livro.
* Esquemas. Infográficos ou gráficos que explicam e esclarecem os tópicos do livro.
* Fotos. Imagens isentas de royalties usadas em qualquer lugar na *Urantiapedia*.
* Animações. Imagens animadas que esclarecem conceitos que envolvem uma visualização animada.
* Mapas. Mapas estáticos, embora possam conter links se estiverem no formato `svg` ou se usarem [mapas de imagem HTML](https://www.w3schools.com/html/html_images_imagemap.asp).

O padrão de URL para imagens é: `https://urantiapedia.org/en/image/[image_name].jpg`. Os nomes das imagens devem estar sempre em inglês conforme explicado acima. Se as imagens não precisarem ser localizadas em nenhum idioma, elas podem ser deixadas no caminho padrão em inglês, então o padrão de URL para elas seria: `https://urantiapedia.org/image/[image_name].jpg `, que é mais compacto.

Observe que no padrão de URL adicionamos `jpg` como formato, mas pode ser qualquer um dos formatos suportados: `jpg`, `jpeg`, `png`, `gif`, `webp`, `svg`.

As imagens não têm sua própria página da web por padrão. As imagens são acessadas através da URL como qualquer recurso público. Mas se fosse interessante, poderiam ser criadas páginas que oferecem informações sobre a própria imagem. Por exemplo, nas seguintes URLs, a primeira é a URL para a imagem de capa oficial do *O Livro de Urântia* em inglês, e a segunda é a possível página com informações sobre esta imagem:
- `https://urantiapedia.org/image/the_urantia_book.jpg`
- `https://urantiapedia.org/en/image/the_urantia_book`

## Mapas

Os mapas não serão simples imagens estáticas. Este tipo de mapa será salvo dentro da seção de imagens. Os mapas serão aplicativos interativos que permitirão:
- desloque e amplie o mapa se estiver configurado com esta opção, sempre dentro de alguns limites de extensão.
- centralizar o mapa no conteúdo.
- clique em elementos dentro do mapa e obtenha painéis de informação nos quais podem aparecer links que permitem saltar para outras páginas de *Urantiapedia* ou para outros sites.
- clique em um botão play em um tour virtual que inicia uma animação com explicações.

O padrão de URL para mapas é:
- para um mapa público, que qualquer editor pode modificar: `https://urantiapedia.org/en/map/[map_name]`
- para um mapa de autor, que só pode ser modificado pelo autor ou por alguém autorizado: `https://urantiapedia.org/en/map/[user_name]/[map_name]`

Os mapas permitirão vincular a uma posição dentro do mapa por meio de parâmetros, seja por um nome ou por coordenadas. Por exemplo, vamos imaginar uma página de mapa da viagem de vôo de Jesus para o norte com seus apóstolos. Este mapa pode ter este URL:

https://urantiapedia.org/en/map/Jesus_voyages_north_flight

E duas maneiras de abrir este mapa centrado em Ramah seriam:
- `https://urantiapedia.org/en/map/Jesus_voyages_north_flight?name=Ramah`
- `https://urantiapedia.org/en/map/Jesus_voyages_north_flight?lonlat=32.936424,35.367742`

Os nomes dos mapas em URL já foram explicados que é necessário estar em inglês.

<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/help/sample_page_map.jpg">
<figcaption><em> Exemplo de renderização de um mapa interativo.</em></figcaption>
</figure>


## Apresentações

Slides são documentos de texto exibidos na página como apresentações animadas. É basicamente como um artigo no qual você pode se mover pressionando as teclas para frente e para trás ou rolando o dedo em um dispositivo de toque, passando de um slide para outro.

O padrão de URL para slides é:
- para uma apresentação pública, que qualquer editor pode modificar: `https://urantiapedia.org/en/slides/[slides_name]`
- para uma apresentação do autor, que só pode ser modificada pelo autor ou por alguém autorizado: `https://urantiapedia.org/en/slides/[user_name]/[slides_name]`

As URLs terão um parâmetro para abrir em um determinado slide.

<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/help/sample_page_slides.png">
<figcaption><em> Exemplo de renderização de uma apresentação.</em></figcaption>
</figure>


## Modelos 3D

Modelos 3D são aplicativos, como mapas. Eles permitirão que você se mova livremente pelo modelo dentro de certos limites, concentre-se em todo o modelo e mostre um painel de informações sobre elementos clicáveis. Também poderia conter diferentes animações que seriam executáveis ​​independentemente, para mostrar algo animado.

O padrão de URL para modelos 3D é:
- para um modelo 3D público, que qualquer editor pode modificar: `https://urantiapedia.org/en/3dmodel/[3dmodel_name]`
- para um modelo 3D de autoria, que só pode ser modificado pelo autor ou alguém autorizado: `https://urantiapedia.org/en/3dmodel/[user_name]/[3dmodel_name]`

Assim como os mapas, os modelos 3D suportarão a centralização em um item usando um nome, como: `https://urantiapedia.org/en/3dmodel/Jerusem?name=Mansonia_7`

<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/help/sample_page_3d.jpg">
<figcaption><em> Exemplo de renderização de um modelo 3D.</em></figcaption>
</figure>

## URLs

Cada página em *Urantiapedia* tem um título e um URL. Os títulos podem ser repetidos em todo o site, se necessário, mas cada URL deve ser exclusivo. Para conseguir isso, os URLs devem seguir este padrão genérico:

`https://urantiapedia.org/[lan]/[path]/[user_name?]/[page_name]`

- `[lan]` é o código de qualquer idioma suportado, que são os idiomas com uma tradução para *O Livro de Urântia*. Verifique [Idiomas suportados](/pt/help/languages).
- `[path]` é o caminho dependendo do tipo de página:
	- Página do site: `help`
	- *O Livro de Urântia*: `The_Urantia_Book`
	- *A Bíblia*: 'Bíblia'
	- Outros livros: `book`
	- Tópico: `topic`
	- Índice: `index`
	- Artigo: `article`
	- Imagem: `image`
	- Apresentação: `slides`
	- Mapa: `map`
	- Modelo 3D: `3dmodel`
- `[user_name]`, se existir, é o nome do autor, ou o nome de um usuário que pode modificar páginas, ou um autor público. Recomenda-se não usar caracteres acentuados no nome para facilitar a escrita.
- `[page_name]` é o nome que aparece na URL, que deve ter sublinhados em vez de espaços em branco. Para livros cada página é um capítulo, então `[page_name]` deve apenas um número, o do capítulo. Se o livro contém um prefácio, esse capítulo é numerado como zero.

`[book_title]` e `[page_name]` devem ter nomes curtos sempre que possível e preferencialmente em inglês. Inglês é o idioma padrão do site. A razão para isso é que *O Livro de Urântia* foi escrito em inglês e hoje é uma linguagem universal usada em todos os lugares. Ter nomes de página diferentes para idiomas diferentes torna mais difícil alternar entre idiomas e deve exigir um sistema para conectar páginas irmãs. Ao usar um nome de página exclusivo para todas as traduções, é mais fácil saber como chegar a qualquer página em qualquer idioma, uma vez que a página em inglês é conhecida.

Exemplos de URLs:
- https://urantiapedia.org/de/help/start
- https://urantiapedia.org/ja/The_Urantia_Book
- https://urantiapedia.org/hu/The_Urantia_Book/Index
- https://urantiapedia.org/it/The_Urantia_Book/Index_Extended
- https://urantiapedia.org/pt/The_Urantia_Book/147
- https://urantiapedia.org/bg/Bible/Genesis
- https://urantiapedia.org/es/Bible/Genesis/Index
- https://urantiapedia.org/id/Bible/Genesis/2
- https://urantiapedia.org/lt/Bible/John
- https://urantiapedia.org/ro/Bible/John/Index
- https://urantiapedia.org/pt/Bible/John/2
- https://urantiapedia.org/pt/book/The_Universe_Around_Us
- https://urantiapedia.org/pt/book/The_Universe_Around_Us/Index
- https://urantiapedia.org/pt/book/The_Universe_Around_Us/3
- https://urantiapedia.org/ko/topic/Andrew
- https://urantiapedia.org/es/article/Nazareth_in_Jesus_times
- https://urantiapedia.org/pt/article/How_big_is_Orvonton
- https://urantiapedia.org/pt/index/topics
- https://urantiapedia.org/pt/index/people
- https://urantiapedia.org/ru/image/Master_Universe
- https://urantiapedia.org/pt/slides/Part_II_Introduction
- https://urantiapedia.org/cs/map/Jesus_Second_Preaching_Tour
- https://urantiapedia.org/es/3dmodel/Isle_of_Paradise

É uma boa ideia manter essas convenções para que as URLs tenham uma forma consistente de serem construídas e desta forma sejam mais fáceis de lembrar.


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
        <td><a href="/pt/help/principles">Princípios que regem a Urantiapedia</a></td>
        <td><a href="/pt/help">Index</a></td>
        <td><a href="/pt/help/phases">Marcos do projeto</a></td>
      </tr>
    </tbody>
  </table>
</figure>