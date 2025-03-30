---
title: "Urantiapedia - Links"
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
        <td><a href="/pt/help/websites">Sites para referências</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/projects">Contexto do projeto em um escopo mais amplo</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Resumo

Este documento descreve a forma como os links entre os itens são definidos e criados na Urantiapedia. Também discute melhorias que podem ser feitas no futuro para o sistema de link.

## O que é um link na Urantiapedia

Os links na Urantiapedia são sempre, no final, um link HTML entre duas páginas ou entre duas âncoras dentro de duas páginas. Se houver vários links na mesma posição, vários links HTML serão criados.

Uma vez que a Urantiapedia oferece suporte a links de arquivos HTML5 e Markdown, eles podem usar a sintaxe HTML5 ou Markdown. Ambos são válidos.

Por exemplo, _The Urantia Book_ está em HTML5, e o parágrafo 0:2.9 tem dois links para dois tópicos (Deus e Pai Universal) do _Enciclopédia_:

```html
<p id="p2_9"><sup><small>0:2.9</small></sup> <i>Pelo contexto</i> — como quando é usado na argumentação a respeito de uma associação de deidades ou um nível da deidade. Quando houver dúvida sobre a interpretação exata da palavra <a href="/es/topic/God">Deus</a>, seria aconselhável referirmo-nos à pessoa do <a href="/es/topic/Universal_Father">Pai Universal</a>.</p>
```

Este exemplo conecta as páginas: o Prefácio em _O Livro de Urântia_, com as páginas para os tópicos “Deus” e “Pai Universal”.

Ou, por exemplo, auxiliares de estudo e artigos estão em Markdown. Este é um trecho do primeiro capítulo do Workbook I de William Sadler:

```markdown
**REFERÊNCIA**: [UB 1:0.1](/en/The_Urantia_Book/1#p0_1) — “O Pai Universal é...”
```

Este exemplo conecta uma página (um capítulo de um auxiliar de estudo) a um parágrafo (âncora) em _The Urantia Book_. Usamos para isso a forma padrão de uma âncora com um caractere `#`, e o uso de um identificador único (neste caso `p0_1`). Cada parágrafo ou cabeçalho em um artigo do _O Livro de Urântia_ tem um ID único e uma âncora que segue este padrão: `p<section_index>_<par_index>`, que segue a convenção usual `<paper>:<section>.<paragrpah> ` para nomear parágrafos no livro.

## O que vai ser linkado na Urantiapedia

As tabelas a seguir resumem os links que queremos criar neste momento na Urantiapedia. Existem muitos tipos de links que poderíamos considerar adicionar no futuro.

### :blue_book: O Livro de Urântia

Código | Origem | Destino | Estado |
--- | --- | --- | --- |
UB_B | Nota de rodapé no parágrafo | Um livro da Bíblia (um versículo num capítulo) | :+1: |
UB_A | Nota de rodapé no parágrafo | Um artigo (qualquer posição) | :+1: |
UB_S | Nota de rodapé no parágrafo | Um capítulo de um auxiliar de estudo (qualquer posição) | :+1: |
UB_O | Nota de rodapé no parágrafo | Um capítulo de um livro (uma página específica) | :+1: |
UB_TI | Ligações em palavras de parágrafo | Página de um tópico na _Enciclopédia_ | :+1: [1] |
UB_I | Inserir imagem [2] | - | :+1: |
UB_D | Bloco suspenso [3] | Página de um diagrama | :x: |
UB_P | Bloco suspenso | Página de uma apresentação ou diapositivo | :x: |
UB_M | Bloco suspenso | Página do mapa | :x: |
UB_3D | Bloco suspenso | Página de uma cena 3D | :x: |
UB_AU | Controlo de áudio no headend [4] | - | :+1: |
UB_V | Bloco suspenso | Vídeos do YouTube incorporados | :x: |

- [1] O algoritmo de criação de ligações está em curso para ajustar o número de ligações a criar.
- [2] As imagens não são propriamente links, mas para as inserir é necessário inserir um link num catálogo de imagens que é depois processado.
- [3] Um bloco suspenso é um elemento colocado entre parágrafos que pode expandir-se e exibir pequenos elementos do tamanho de uma imagem ou, se o elemento for muito grande, uma ligação para uma página onde esse elemento pode ser visualizado em detalhe.
- [4] O áudio de _O Livro de Urântia_ não é propriamente um link, mas para o inserir indicamos num software quais os áudios disponíveis e existe um processo que os insere.

Exemplos:
- UB_B: https://urantiapedia.org/en/The_Urantia_Book/1#the-bible
- UB_A: https://urantiapedia.org/en/The_Urantia_Book/1#articles
- UB_S: https://urantiapedia.org/en/The_Urantia_Book/1#study-aids
- UB_O: https://urantiapedia.org/en/The_Urantia_Book/0#other-books
- UB_I: https://urantiapedia.org/en/The_Urantia_Book/11#p0_2 (exemplo de imagem)
- UB_M: https://urantiapedia.org/en/The_Urantia_Book/149#p0_1 (exemplo de um bloco suspenso)
- UB_AU: https://urantiapedia.org/en/The_Urantia_Book/10 (exemplo de controlo áudio no cabeçalho da página)

<br>

### A Bíblia :closed_book:

Código | Origem | Destino | Estado |
--- | --- | --- | --- |
B_UB | Nota de rodapé em verso | O Livro de Urântia (parágrafo) | :+1: |
B_A | Nota de rodapé em verso | Um artigo (qualquer posição) | :x: |
B_S | Nota de rodapé em verso | Um capítulo de um auxiliar de estudo (qualquer posição) | :x: |
B_O | Nota de rodapé em verso | Um capítulo de um livro (qualquer posição) | :x: |
B_TI | Ligações em palavras de versos | Página de um tópico na _Enciclopédia_ | :x: |
B_I | Inserir imagem [1] | - | :x: |

- [1] O mesmo que se diz para _O Livro de Urântia_ aplica-se aqui.
- [2] O mesmo que se diz para _O Livro de Urântia_ aplica-se aqui.

Exemplos:
- B_UB: https://urantiapedia.org/en/Bible/Genesis/1#references

<br>

### :page_with_curl: Artigos

Código | Origem | Destino | Estado |
--- | --- | --- | --- |
A_UB | Link em citações ou parágrafos | O Livro de Urântia (parágrafo) | :+1: |
A_B | Link em citações ou parágrafos | Um livro da Bíblia (um versículo num capítulo) | :+1: |
A_A | Qualquer ligação | Uma página de um artigo | :+1: |
A_S | Qualquer ligação | Uma página de um auxiliar de estudo | :+1: |
A_O | Qualquer ligação | Um capítulo de um livro (uma página específica) | :+1: |
A_V | Qualquer posição | Vídeos do YouTube incorporados | :+1: |

Exemplos:
- A_UB: https://urantiapedia.org/en/article/A_Letter_to_Astronomers_and_Astrophysicists (qualquer uma das citações)
- A_B: https://urantiapedia.org/en/article/Sheila_Keene_Lund/Understanding_the_Relation_of_Love_to_the_Mind#love-defined (link para 1 Coríntios na Bíblia)

<br>

### :notebook: Auxílios de estudo

Código | Origem | Destino | Estado |
--- | --- | --- | --- |
S_UB | Link em citações ou parágrafos | O Livro de Urântia (parágrafo) | :+1: |
S_B | Link em citações ou parágrafos | Um livro da Bíblia (um versículo num capítulo) | :+1: |
S_A | Qualquer ligação | Uma página de um artigo | :+1: |
S_S | Qualquer ligação | Uma página de um auxiliar de estudo | :+1: |
S_O | Qualquer ligação | Um capítulo de um livro (uma página específica) | :+1: |
S_V | Qualquer posição | Vídeos do YouTube incorporados | :+1: |

Exemplos:
- S_UB: https://urantiapedia.org/en/article/William_S_Sadler/Workbook_1_Foreword_and_Part_I/1#i-ub-101-the-universal-father-is
- S_B: https://urantiapedia.org/en/article/William_S_Sadler/Consideration_some_criticisms_Urantia_Book

<br>

### :books: Livros

Código | Origem | Destino | Estado |
--- | --- | --- | --- |
O_B | Link em citações ou parágrafos | Um livro da Bíblia (um versículo num capítulo) | :x: |

<br>

### :card_index: Enciclopédia

Código | Origem | Destino | Estado |
--- | --- | --- | --- |
TI_UB | Nota de rodapé no parágrafo ou "Veja também" | O Livro de Urântia (parágrafo) | :+1: |
TI_B | Nota de rodapé no parágrafo | Um livro da Bíblia (versículo em um capítulo) | :x: |
TI_A | Nota de rodapé no parágrafo | Página do artigo | :x: |
TI_S | Nota de rodapé no parágrafo | Capítulo de um auxiliar de estudo | :x: |
TI_TI | Veja também a secção | Outra página ou secção de uma página na _Enciclopédia_ | :+1: |
TI_I | Inserir imagem [1] | - | :x: |
TI_D | Bloco suspenso [2] | Página de um diagrama | :x: |
TI_P | Bloco suspenso | Página de uma apresentação ou diapositivo | :x: |
TI_M | Bloco suspenso | Página do mapa | :x: |
TI_3D | Bloco suspenso | Página de uma cena 3D | :x: |
TI_V | Qualquer posição | Vídeos do YouTube incorporados | :x: |

- [1] O mesmo que se diz para _O Livro de Urântia_ aplica-se aqui.
- [2] O mesmo que se diz para _O Livro de Urântia_ aplica-se aqui.

Exemplos:
- TI_UB: https://urantiapedia.org/en/topic/Abraham_(Old_Testament)#references

<br>

### :memo: Diagramas

Código | Origem | Destino | Estado |
--- | --- | --- | --- |
D_UB | Link no diagrama | O Livro de Urântia (parágrafo) | :x: |

Exemplos:
- D_UB: https://urantiapedia.org/en/article/The_Kingdom_of_Heaven_Revelation_Nebadon_Chart (qualquer uma das caixas no diagrama)

<br>

### :bar_chart: Apresentações

Código | Origem | Destino | Estado |
--- | --- | --- | --- |
P_UB | Link no diapositivo | O Livro de Urântia (parágrafo) | :x: |

<br>

### :earth_americas: Mapas

Código | Origem | Destino | Estado |
--- | --- | --- | --- |
M_UB | Link no painel lateral | O Livro de Urântia (parágrafo) | :x: |
M_TI | Link no painel lateral | Página da Enciclopédia | :x: |

Exemplos:
- M_TI: https://urantiapedia.org/en/map/The_Preaching_of_Jesus_Second_Galilee_Tour (clique num ícone para abrir o painel com links)

<br>

### :milky_way: Cenas 3D

Código | Origem | Destino | Estado |
--- | --- | --- | --- |
3D_UB | Link em elemento 3D | O Livro de Urântia (parágrafo) | :x: |

<br>


## Como estamos definindo links

Para cada tipo de conteúdo aqui está uma descrição dos arquivos que armazenam os links e o processo para gerar os links nas páginas finais para enviar para a Urantiapedia.

### :blue_book: O Livro de Urântia

- UB_B: O arquivo original usado para obter os links é um trabalho existente chamado Paramony, obtido no site da Urantia Foundation: [Paramony.txt](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/paramony/Paramony.txt). O arquivo foi convertido através do Urantipedia Tools para um conjunto de arquivos Markdown (por exemplo [The Urantia Book.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paramony/The%20Urantia%20Book.md)) e depois adicionado ao _The Urantia Book_ no formato JSON: [footnotes-book-en](https://github.com/JanHerca/urantiapedia/tree/master/input/json/book-en-footnotes). Esses JSON são então convertidos em arquivos HTML que são carregados na Urantiapedia: [The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book). Os arquivos Markdown em inglês contêm a tabela completa com links.
- UB_A: O arquivo original usado para obter os links é um arquivo grande: [ub_paralells.tsv](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/articles-en/ub_paralells.tsv) . Este arquivo é gerado através das Urantiapedia Tools (verificando todos os artigos e auxílios de estudo em busca de links para UB).
- UB_S: Os links são obtidos como para UB_A.
- UB_O: Um arquivo Markdown com um par de tabelas contém a lista de livros e a lista de links (chamados paralells): [paralells.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paralells.md) Este processo será alterado para seguir o mesmo método de UB_A e UB_S.
- UB_TI: O _Enciclopédia_ é um índice obtido do site da Fellowship. Este índice foi formatado em um conjunto de arquivos TXT: [topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en). Esses arquivos contêm links entre sentenças dentro de um tópico e _The Urantia Boo_k. Ao criar arquivos HTML para serem enviados para a Urantiapedia, procuramos tópicos com links para cada parágrafo e introduzimos links nessas palavras que correspondem aos nomes dos tópicos. Esse processo tem alguns problemas quando as mesmas palavras compartilham tópicos diferentes e agora é um trabalho em andamento.
- UB_D: Ainda não definido. Provavelmente usamos um catálogo de Diagramas como nos mapas.
- UB_I: As ilustrações estão sendo registradas em um catálogo usando arquivos Markdown: [image_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/image_catalog.md). Ao criar arquivos HTML para serem carregados na Urantiapedia, procuramos ilustrações com links para cada parágrafo e introduzimos imagens sob esses parágrafos. Este processo tem alguns problemas. É um trabalho em progresso.
- UB_P: Ainda não definido. Provavelmente usamos um catálogo de apresentações como nos mapas.
- UB_M: Os mapas estão sendo registrados em um catálogo usando arquivos Markdown: [map_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/map_catalog.md). Ao criar arquivos HTML para serem carregados na Urantiapedia, procuramos por mapas com links para cada parágrafo e apresentamos uma seção com uma miniatura e um botão com links para a página do mapa.
- UB_3D: Ainda não definido. Provavelmente usamos um catálogo de modelos 3D como nos mapas.
- UB_V: Ainda não definido. Provavelmente usamos um catálogo de vídeo como nos mapas. Mas esse conteúdo como é externo e geralmente em um determinado idioma (sem traduções) é difícil de reproduzir em todos os idiomas.

<br>

### :closed_book: A Bíblia

- B_UB: Os arquivos originais usados ​​para obter os links é o mesmo trabalho chamado Paramony usado no UB_B, mas desta vez vinculando livros bíblicos com _Urantia Book_: [bible-refs-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/bible-refs-en). Esses arquivos foram convertidos por meio do Urantiapedia Tools para um conjunto de arquivos Markdown: [paramony](https://github.com/JanHerca/urantiapedia/tree/master/input/markdown/en/paramony) e depois adicionados aos Livros da Bíblia quando eles são convertidos em arquivos HTML que são carregados na Urantiapedia: [Bible](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/Bible). Os arquivos Markdown em inglês contêm a tabela completa com links. As demais línguas possuem apenas uma tabela com as traduções dos textos em inglês.
- B_A: Ainda não definido. Uma opção poderia ser inverter A_B com Urantiapedia Tools.
- B_S: Ainda não definido. Uma opção poderia ser o S_B reverso com Urantiapedia Tools.
- B_O: Ainda não definido. Uma opção poderia ser O_B reverso com Urantiapedia Tools.
- B_TI: Ainda não definido. Este processo é difícil. Vamos ter poucos links do tipo TI_B para poder revertê-los. Uma maneira poderia ser usar Paramony, ou seja, B_UB, para encontrar parágrafos de UB e então extrair neles nomes de tópicos usados ​​em UB_TI. Por fim, tente encontrar esses mesmos tópicos nos versículos da Bíblia.
- B_I: Ainda não definido. Uma opção seria usar o mesmo sistema do UB_I, com um catálogo de imagens.

<br>

### :page_with_curl: Artigos

- A_UB: Os artigos geralmente vêm com referências ao _Urantia Book_. Estamos verificando-os e adicionando-os manualmente ou, às vezes, por meio de expressões regulares que convertem as referências detectadas em links. Veja abaixo sobre a importância de um [sistema de referência global exclusivo para _O Livro de Urântia_](#sistema-de-referência-global-exclusivo-para-O-Livro-de-Urântia).
- A_B: O mesmo que o anterior se aplica aos livros da Bíblia. Quando uma referência bíblica é detectada, manualmente ou por meio do RegExp, elas são convertidas em links.
- A_A: Quando um artigo faz referência a outro artigo, algo que raramente acontece, vamos adicionar esses links manualmente.
- A_S: O mesmo que o anterior.
- A_O: Se o artigo mencionar um livro que temos na Urantiapedia, adicionaremos o link manualmente.

<br>

### :notebook: Auxílios de estudo

- S_UB: Auxílios de estudo geralmente vêm com referências ao _Urantia Book_. Estamos fazendo aqui o mesmo que A_UB.
- S_B: O mesmo que A_B.
- S_A: Este é um tipo de link que raramente ocorre. Estamos adicionando-os manualmente.
- S_S: Isso também é raro. Estamos adicionando isso manualmente.
- S_O: O mesmo que o anterior.

<br>

### :books: Livros

- O_UB: Usando o mesmo processo de UB_O, mas invertendo os links, é possível adicionar links em uma página de um livro.
- O_B: Se um livro menciona um livro da Bíblia estamos introduzindo um link manualmente.

<br>

### :card_index: Enciclopédia

- TI_UB: O _Enciclopédia_, descrito para UB_TI, é usado aqui de forma direta, introduzindo notas de rodapé com links quando os arquivos do _Enciclopédia_ em formato TXT são convertidos para HTML para upload para a Urantiapedia. O resultado está aqui: [topic](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/topic). Por enquanto estamos trabalhando apenas em inglês e espanhol. Estamos repetindo todo o conteúdo dos arquivos para cada idioma.
- TI_B: Ainda não definido. O índice de tópicos usado menciona a Bíblia muito raramente.
- TI_A: Ainda não definido.
- TI_S: Ainda não definido.
- TI_I: Ainda não definido.
- TI_M: Links manuais na seção Links.
- TI_3D: Links manuais na seção Links.
- TI_V: Links externos manuais na seção Links Externos. Estamos adicionando links da Wikipedia dessa maneira.

<br>

### :memo: Diagramas

- D_UB: Queremos converter diagramas para SVG tanto quanto possível, ou mapas de imagem HTML. No processo, estaremos convertendo UB refs em links.

<br>

### :bar_chart: Apresentações

- P_UB: Queremos converter apresentações em algo que possa ser adicionado à Urantiapedia, não apenas links para Google Docs ou similares. Dessa forma, qualquer referência do UB ou da Bíblia será convertida em links da Urantiapedia.

<br>

### :earth_americas: Mapas

- M_UB: Uma vez criados os links M_TI, podemos adicionar links como este usando links TI_UB.
- M_TI: Este tipo de link só será possível se os mapas forem convertidos em pequenos aplicativos interativos executados em um mapa incorporável (por exemplo usando a plataforma Google My Maps) ou como mapas executados dentro da Urantiapedia (mais recomendado). Ao definir esses mapas (provavelmente em um formato como KML), adicionaremos links para locais de tópicos como informações pop-up mostradas em um painel lateral.

<br>

### :milky_way: Modelos 3D

- 3D_UB: Alguns modelos 3D podem ter itens que mostram pop-ups se clicados contendo citações de UB e um link. Isso é totalmente possível usando WebGL.

<br>

## Como copiar links

Todos os navegadores permitem clicar com o botão direito do mouse ou tocar e segurar um link para copiá-lo. Para copiar a própria página, isso pode ser feito na caixa de texto de endereço.

Um truque que geralmente não é conhecido na Urantiapedia é que você pode copiar o link de um cabeçalho em uma página. Quando o mouse estiver sobre um cabeçalho, um símbolo `¶` à direita deve ser clicado com o botão direito para obter o link.

## Sistema de referência global exclusivo para O Livro de Urântia

Desde que _The Urantia Book_ foi publicado pela primeira vez em 1955, este original em inglês foi citado inúmeras vezes em trabalhos e artigos de leitores. A forma tradicional de citar _The Urantia Book_ era dar a página e o parágrafo daquela primeira edição em inglês (comumente chamada de edição padrão). A codificação seguida foi `<page_number>.<paragraph_order>`.

Esta forma de citar _O Livro de Urântia_ introduz um problema que já deveria ter sido visto em uma data anterior. Nas traduções e nas diferentes edições em papel, o número de páginas e a posição do parágrafo não são constantes. Forçar os leitores de _O Livro de Urântia_ ao redor do mundo a ter uma cópia em inglês da primeira edição do Livro para indicar uma referência corretamente não fazia sentido.

Rapidamente, como o Livro foi traduzido e publicado em diferentes edições, surgiu a necessidade de criar um único sistema de referência global para _O Livro de Urântia_, baseado no índice do documento, no índice da seção e, finalmente, no índice do parágrafo dentro da seção. E para cada parágrafo foi atribuído um identificador único desta forma, com o qual é fácil e rápido ir ao conteúdo que alguém citou ou referenciou. A codificação agora é geralmente escrita assim `<documento>:<seção>.<parágrafo>`.

É impressionante que os anos vão passando e muitos sites e publicações continuam mantendo o antigo sistema de referências, ora como referência única, ora como complemento da nova referência. Isso mostra claramente que ainda existem muitas publicações muito focadas no uso da língua inglesa, pois essa duplicação de referências introduz mais trabalho e só é útil para leitores de uma determinada edição do livro em inglês.

Na Urantiapedia, um de nossos princípios básicos é a [globalização](/en/help/principles#principle-i-multi-language). Este site não foi projetado para um idioma ou alguns idiomas. O objetivo deste site é que todo o conteúdo indistintamente possa ser oferecido em todos os idiomas desejados. Introduzir duas referências cada vez que _O Livro de Urântia_ é citado é acrescentar um esforço inútil que também vai contra este princípio de capacidade multilíngue. Por esta razão, a diretoria da Urantiapedia tomou a decisão desde o início de adotar em qualquer link para _O Livro de Urântia_ um único sistema global e unificado de oferta da referência, que segue fielmente o modelo atual. Qualquer outra menção ou referência que não seja oferecida da mesma forma, é corrigida para deixar o link de forma unificada.

Acreditamos que essas correções de conteúdo antigo são necessárias para fornecer aos leitores de todo o mundo um sistema único que reduza a confusão e facilite a troca de ideias.

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/websites">Sites para referências</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/projects">Contexto do projeto em um escopo mais amplo</a></td>
      </tr>
    </tbody>
  </table>
</figure>