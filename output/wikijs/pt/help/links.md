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

<div class="urantiapedia-table-wrapper">

Código | Origem | Destino | Procedimento | Estado |
--- | --- | --- | --- | --- |
UB_B | Nota de rodapé no parágrafo | Um livro da Bíblia (um versículo num capítulo) | O _Paramony_ ([Paramony.txt](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/paramony/Paramony.txt)) é convertido para Markdown ([The Urantia Book.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paramony/The%20Urantia%20Book.md)), depois para JSON ([The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book)) e, finalmente, para o HTML que é carregado no _Urantiapedia_ ([The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book)) | :+1: |
UB_A | Nota de rodapé no parágrafo | Um artigo (qualquer posição) | É gerado automaticamente um ficheiro parallels ([ub_paralells.tsv](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/articles-en/ub_paralells.tsv)) | :+1: |
UB_S | Nota de rodapé no parágrafo | Um capítulo de um auxiliar de estudo (qualquer posição) | O mesmo que UB_A | :+1: |
UB_O | Nota de rodapé no parágrafo | Um capítulo de um livro (uma página específica) | Um ficheiro parallels é gerado manualmente ([paralells.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paralells.md)) | :+1: |
UB_TI | Ligações em palavras de parágrafo | Página de um tópico na _Enciclopédia_ | São utilizados os ficheiros TXT da _Enciclopédia_, que contêm as referências ([topic-index-pt](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-pt)) | :+1: [1] |
UB_I | Inserir imagem [2] | - |  É utilizado um catálogo de imagens ([image_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/image_catalog.md)) | :+1: |
UB_D | Bloco suspenso [3] | Página de um diagrama | Não definido |  :x: |
UB_P | Bloco suspenso | Página de uma apresentação ou diapositivo | Não definido | :x: |
UB_M | Bloco suspenso | Página do mapa | É utilizado um catálogo de mapas ([map_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/map_catalog.md)) | :clock2: |
UB_3D | Bloco suspenso | Página de uma cena 3D | Não definido | :x: |
UB_AU | Controlo de áudio no headend [4] | - | Ferramentas Urantiapedia adicionam áudio nos idiomas disponíveis | :+1: |
UB_V | Bloco suspenso | Vídeos do YouTube incorporados | Não definido | :x: |

</div>

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

### :closed_book: A Bíblia

<div class="urantiapedia-table-wrapper">

Código | Origem | Destino | Procedimento | Estado |
--- | --- | --- | --- | --- |
B_UB | Nota de rodapé em verso | O Livro de Urântia (parágrafo) | O _Paramony_ ([bible-refs-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/bible-refs-en)) é convertido em Markdown ([paramony](https://github.com/JanHerca/urantiapedia/tree/master/input/markdown/en/paramony)) e depois no HTML que é carregado em _Urantiapedia_ ([Bíblia](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/Bible)) | Não definido | :+1: |
B_A | Nota de rodapé em verso | Um artigo (qualquer posição) | Não definido | :x: |
B_S | Nota de rodapé em verso | Um capítulo de um auxiliar de estudo (qualquer posição) | Não definido | :x: |
B_O | Nota de rodapé em verso | Um capítulo de um livro (qualquer posição) | Não definido | :x: |
B_TI | Ligações em palavras de versos | Página de um tópico na _Enciclopédia_ | Não definido | :x: |
B_I | Inserir imagem [1] | - | Não definido | :x: |

</div>

- [1] O mesmo que se diz para _O Livro de Urântia_ aplica-se aqui.
- [2] O mesmo que se diz para _O Livro de Urântia_ aplica-se aqui.

Exemplos:
- B_UB: https://urantiapedia.org/en/Bible/Genesis/1#references

<br>

### :page_with_curl: Artigos

<div class="urantiapedia-table-wrapper">

Código | Origem | Destino | Procedimento | Estado |
--- | --- | --- | --- | --- |
Um_UB | Link em citações ou parágrafos | O Livro de Urântia (parágrafo) | Os links [1] para o _Livro_ são incluídos manualmente | :+1: |
Um B | Link em citações ou parágrafos | Um livro da Bíblia (um versículo num capítulo) | O mesmo que A_UB | :+1: |
Um Um | Qualquer ligação | Uma página de um artigo | O mesmo que A_UB | :+1: |
A_S | Qualquer ligação | Uma página de um auxiliar de estudo | O mesmo que A_UB | :+1: |
A_O | Qualquer ligação | Um capítulo de um livro (uma página específica) | O mesmo que A_UB | :+1: |
A_V | Qualquer posição | Vídeos do YouTube incorporados | Link manual | :+1: |

</div>

Exemplos:
- A_UB: https://urantiapedia.org/en/article/A_Letter_to_Astronomers_and_Astrophysicists (qualquer uma das citações)
- A_B: https://urantiapedia.org/en/article/Sheila_Keene_Lund/Understanding_the_Relation_of_Love_to_the_Mind#love-defined (link para 1 Coríntios na Bíblia)

<br>

### :notebook: Auxílios de estudo

<div class="urantiapedia-table-wrapper">

Código | Origem | Destino | Procedimento | Estado |
--- | --- | --- | --- | --- |
S_UB | Link em citações ou parágrafos | O Livro de Urântia (parágrafo) | O mesmo que A_UB | :+1: |
S_B | Link em citações ou parágrafos | Um livro da Bíblia (um versículo num capítulo) | O mesmo que A_B | :+1: |
S_A | Qualquer ligação | Uma página de um artigo | O mesmo que A_A | :+1: |
S_S | Qualquer ligação | Uma página de um auxiliar de estudo | O mesmo que A_S | :+1: |
S_O | Qualquer ligação | Um capítulo de um livro (uma página específica) | O mesmo que A_O | :+1: |
S_V | Qualquer posição | Vídeos do YouTube incorporados | Link manual | :+1: |

</div>

Exemplos:
- S_UB: https://urantiapedia.org/en/article/William_S_Sadler/Workbook_1_Foreword_and_Part_I/1#i-ub-101-the-universal-father-is
- S_B: https://urantiapedia.org/en/article/William_S_Sadler/Consideration_some_criticisms_Urantia_Book

<br>

### :books: Livros

<div class="urantiapedia-table-wrapper">

Código | Origem | Destino | Procedimento | Estado |
--- | --- | --- | --- | --- |
O_B | Link em citações ou parágrafos | Um livro da Bíblia (um versículo num capítulo) | O mesmo que A_B | :x: |

</div>

<br>

### :card_index: Enciclopédia

<div class="urantiapedia-table-wrapper">

Código | Origem | Destino | Procedimento | Estado |
--- | --- | --- | --- | --- |
TI_UB | Nota de rodapé no parágrafo ou "Veja também" | O Livro de Urântia (parágrafo) | O mesmo que UB_TI, mas num processo inverso. São utilizados os ficheiros TXT da _Enciclopédia_, que contêm as referências ([topic-index-pt](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-pt)) | :+1: |
TI_B | Nota de rodapé no parágrafo | Um livro da Bíblia (versículo em um capítulo) | Não definido | :x: |
TI_A | Nota de rodapé no parágrafo | Página do artigo | Não definido | :x: |
TI_S | Nota de rodapé no parágrafo | Capítulo de um auxiliar de estudo | Não definido | :x: |
TI_TI | Veja também a secção | Outra página ou secção de uma página na _Enciclopédia_ | Os ficheiros TXT acima mencionados são utilizados ​​| :+1: |
TI_I | Imagem inserida | - | Os links para imagens são incluídos nos ficheiros TXT manualmente | :clock2: |
TI_D | Bloco suspenso | Página de um diagrama | Não definido | :x: |
TI_P | Bloco suspenso | Página de uma apresentação ou diapositivo | Não definido | :x: |
TI_M | Bloco suspenso | Página do mapa | Não definido | :x: |
TI_3D | Bloco suspenso | Página de uma cena 3D | Não definido | :x: |
TI_V | Qualquer posição | Vídeos do YouTube incorporados | Não definido | :x: |

</div>

Exemplos:
- TI_UB: https://urantiapedia.org/en/topic/Abraham_(Old_Testament)#references

<br>

### :memo: Diagramas

<div class="urantiapedia-table-wrapper">

Código | Origem | Destino | Procedimento | Estado |
--- | --- | --- | --- | --- |
D_UB | Link no diagrama | O Livro de Urântia (parágrafo) | Os links são adicionados manualmente | :clock2: |

</div>

Exemplos:
- D_UB: https://urantiapedia.org/en/article/The_Kingdom_of_Heaven_Revelation_Nebadon_Chart (qualquer uma das caixas no diagrama)

<br>

### :bar_chart: Apresentações

<div class="urantiapedia-table-wrapper">

Código | Origem | Destino | Procedimento | Estado |
--- | --- | --- | --- | --- |
P_UB | Link no diapositivo | O Livro de Urântia (parágrafo) | Não definido, mas provavelmente adicionando links manualmente | :x: |

</div>

<br>

### :earth_americas: Mapas

<div class="urantiapedia-table-wrapper">

Código | Origem | Destino | Procedimento | Estado |
--- | --- | --- | --- | --- |
M_UB | Link no painel lateral | O Livro de Urântia (parágrafo) | Ligações manuais dentro de ficheiros KML | :x: |
M_TI | Link no painel lateral | Página da Enciclopédia | Ligações manuais dentro de ficheiros KML | :x: |

</div>

Exemplos:
- M_TI: https://urantiapedia.org/en/map/The_Preaching_of_Jesus_Second_Galilee_Tour (clique num ícone para abrir o painel com links)

<br>

### :milky_way: Cenas 3D

<div class="urantiapedia-table-wrapper">

Código | Origem | Destino | Procedimento | Estado |
--- | --- | --- | --- | --- |
3D_UB | Link em elemento 3D | O Livro de Urântia (parágrafo) | Não definido | :x: |

</div>

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