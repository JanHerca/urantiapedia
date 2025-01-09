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

Por exemplo, _The Urantia Book_ está em HTML5, e o parágrafo 0:2.10 tem dois links para dois tópicos (Deus e Deidade) do Índice de Tópicos:

```html
<p id="p2_10"><sup><small>0:2.10</small></sup> O termo <a href="/topic/God">Deus</a> sempre denota <i>personalidade. </i> <a href="/topic/Deity">Divindade</a> pode, ou não, referir-se a personalidades divinas.</p>
```

Este exemplo conecta as páginas: o Prefácio em _O Livro de Urântia_, com as páginas para os tópicos “Deus” e “Deidade”.

Ou, por exemplo, auxiliares de estudo e artigos estão em Markdown. Este é um trecho do primeiro capítulo do Workbook I de William Sadler:

```markdown
**REFERÊNCIA**: [UB 1:0.1](/en/The_Urantia_Book/1#p0_1) — “O Pai Universal é...”
```

Este exemplo conecta uma página (um capítulo de um livro) a um parágrafo (âncora) em _The Urantia Book_. Usamos para isso a forma padrão de uma âncora com um caractere `#`, e o uso de um identificador único (neste caso `p0_1`). Cada parágrafo ou cabeçalho em um artigo do _O Livro de Urântia_ tem um ID único e uma âncora que segue este padrão: `p<section_index>_<par_index>`, que segue a convenção usual `<paper>:<section>.<paragrpah> ` para nomear parágrafos no livro.

## O que vai ser linkado na Urantiapedia

As tabelas a seguir resumem os links que queremos criar neste momento na Urantiapedia. Existem muitos tipos de links que poderíamos considerar adicionar no futuro.

### O Livro de Urântia :blue_book:

Código | Tipo de origem | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
UB_B | Nota de rodapé no parágrafo | A Bíblia | Verso em um capítulo de um livro | :+1: |
UB_A | Nota de rodapé no parágrafo | Artigos | Página do artigo | :+1: |
UB_S | Nota de rodapé no parágrafo | Auxílio aos estudos | Página ou título do capítulo | :+1: |
UB_O | Nota de rodapé no parágrafo | Outros livros | Livro âncora para uma página | :+1: |
UB_TI | Links em palavras de parágrafos | Índice de tópicos | Página do tópico | :+1: [1] |
UB_D | Nota de rodapé no parágrafo [2] | Diagramas | Página do diagrama ou âncora | |
UB_I | Inserção de imagem [3] | Ilustrações | - | :+1: [4] |
UB_P | Nota de rodapé no parágrafo | Apresentações | Página da apresentação ou slide | |
UB_M | Nota de rodapé no parágrafo [5] | Mapas | Página do mapa ou coordenada/ID | |
UB_3D | Nota de rodapé no parágrafo [6] | Modelos 3D | página modelo 3D ou ID | |
UB_V | Nota de rodapé no parágrafo | Vídeos do Youtube | Link externo | |
UB_C | Nota de rodapé no parágrafo | Podcasts | Link externo | |
UB_F | Nota de rodapé no parágrafo | Tópicos de discussão no fórum | Link externo | |

[1] O algoritmo que cria links está em andamento para ajustar o número de links a serem criados.
[2] Pequenos diagramas podem ser adicionados como ilustrações no livro, em uma seção recolhível em alguns parágrafos. A ideia é que cada diagrama, pequeno ou grande, tenha sua própria página, e todos eles serão indexados. Mas os pequenos, em vez de serem apenas uma página, podem ser incorporados dentro do _The Urantia Book_ como seções recolhíveis.
[3] As imagens não são links apropriados, mas são inseridas em um determinado parágrafo, então precisamos de uma maneira de definir essas inserções. Portanto, eles são considerados aqui como links de alguma forma.
[4] Este trabalho está em andamento. Por enquanto, algumas imagens foram adicionadas.
[5] Alguns mapas que são adequados para um determinado parágrafo podem ser realçados sob o parágrafo em um painel com um botão vinculado ao mapa.
[6] O mesmo anterior para mapas pode ser aplicado aqui.

Exemplos:
- UB_B: https://urantiapedia.org/en/The_Urantia_Book/1#the-bible
- UB_A: https://urantiapedia.org/en/The_Urantia_Book/1#articles
- UB_S: https://urantiapedia.org/en/The_Urantia_Book/1#study-aids
- UB_O: https://urantiapedia.org/en/The_Urantia_Book/0#other-books
- UB_M: https://urantiapedia.org/en/The_Urantia_Book/149#p0_1
- UB_I: https://urantiapedia.org/en/The_Urantia_Book/0#p0_1

<br>

### A Bíblia :closed_book:

Código | Tipo de origem | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
B_UB | Nota de rodapé em verso | O Livro de Urântia | Parágrafo | :+1: |
B_A | Nota de rodapé em verso | Artigos | Página do artigo | |
B_S | Nota de rodapé em verso | Auxílio aos estudos | Página ou título do capítulo | |
B_O | Nota de rodapé em verso | Outros Livros | Livro âncora para uma página | |
B_TI | Links em palavras de versos | Índice de tópicos | Página do tópico | |
B_I | Inserção de imagem [1] | Ilustrações | - | |
B_M | Versículo da nota de rodapé [2] | Mapas | Página do mapa ou coordenada/ID | |

[1] O mesmo dito para _O Livro de Urântia_ se aplica aqui.
[2] O mesmo dito para _O Livro de Urântia_ se aplica aqui.

Exemplos:
- B_UB: https://urantiapedia.org/en/Bible/Genesis/1#references

<br>

### Artigos :page_with_curl:

Código | Tipo de origem | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
A_UB | Link entre aspas ou parágrafos | O Livro de Urântia | Parágrafo | :+1: |
A_B | Link entre aspas ou parágrafos | A Bíblia | Verso em um capítulo de um livro | :+1: |
A_A | Nota de rodapé no parágrafo | Artigos | Página do artigo | :+1: |
A_S | Nota de rodapé no parágrafo | Auxílios de estudo | Página ou título do capítulo | |
A_O | Nota de rodapé no parágrafo | Outros livros | Livro âncora para uma página | |
A_I | Inserção de imagem [1] | Ilustrações | - | |
A_M | Nota de rodapé no parágrafo [2] | Mapas | Página do mapa ou coordenada/ID | |
A_3D | Nota de rodapé no parágrafo [3] | Modelos 3D | página modelo 3D ou ID | |
A_V | Nota de rodapé no parágrafo | Vídeos do Youtube | Link externo | |
A_C | Nota de rodapé no parágrafo | Podcasts | Link externo | |
A_F | Nota de rodapé no parágrafo | Tópicos de discussão no fórum | Link externo | |

[1] O mesmo dito para _O Livro de Urântia_ se aplica aqui.
[2] O mesmo dito para _O Livro de Urântia_ se aplica aqui.
[3] O mesmo dito para _O Livro de Urântia_ se aplica aqui.

Exemplos:
- A_UB: https://urantiapedia.org/en/article/A_Letter_to_Astronomers_and_Astrophysicists (qualquer uma das citações)
- A_B: https://urantiapedia.org/en/article/Sheila_Keene_Lund/Understanding_the_Relation_of_Love_to_the_Mind#love-defined

<br>

### Auxílios de estudo :notebook:

Código | Tipo de origem | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
S_UB | Link entre aspas ou parágrafos | O Livro de Urântia | Parágrafo | :+1: |
S_B | Link entre aspas ou parágrafos | A Bíblia | Verso em um capítulo de um livro | :+1: |
S_A | Nota de rodapé no parágrafo | Artigos | Página do artigo | :+1: |
S_S | Nota de rodapé no parágrafo | Auxílios de estudo | Página ou título do capítulo | |
S_O | Nota de rodapé no parágrafo | Outros livros | Livro âncora para uma página | |
S_I | Inserção de imagem [1] | Ilustrações | - | |
S_M | Nota de rodapé no parágrafo [2] | Mapas | Página do mapa ou coordenada/ID | |
S_3D | Nota de rodapé no parágrafo [3] | Modelos 3D | página modelo 3D ou ID | |
S_V | Nota de rodapé no parágrafo | Vídeos do Youtube | Link externo | |
S_C | Nota de rodapé no parágrafo | Podcasts | Link externo | |
S_F | Nota de rodapé no parágrafo | Tópicos de discussão no fórum | Link externo | |

[1] O mesmo dito para _O Livro de Urântia_ se aplica aqui.
[2] O mesmo dito para _O Livro de Urântia_ se aplica aqui.
[3] O mesmo dito para _O Livro de Urântia_ se aplica aqui.

Exemplos:
- S_UB: https://urantiapedia.org/en/article/William_S_Sadler/Workbook_1_Foreword_and_Part_I/1#i-ub-101-the-universal-father-is
- S_B: https://urantiapedia.org/en/article/William_S_Sadler/Consideration_some_criticisms_Urantia_Book

<br>

### Outros livros :books:

Código | Tipo de origem | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
O_UB | Nota de rodapé no parágrafo | O Livro de Urântia | Parágrafo | |
O_B | Link ou nota de rodapé no parágrafo | A Bíblia | Verso em um capítulo de um livro | |
O_A | Nota de rodapé no parágrafo | Artigos | Página do artigo | |
O_S | Nota de rodapé no parágrafo | Auxílios de estudo | Página ou título do capítulo | |

<br>

### Índice de Tópicos :card_index:

Código | Tipo de origem | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
TI_UB | Nota de rodapé em parágrafo ou “Veja também” | O Livro de Urântia | Parágrafo | :+1: |
TI_B | Nota de rodapé no parágrafo | A Bíblia | Verso em um capítulo de um livro | |
TI_A | Nota de rodapé no parágrafo | Artigos | Página do artigo | |
TI_S | Nota de rodapé no parágrafo | Auxílios de estudo | Página ou título do capítulo | |
TI_TI | Seção “Veja também” | Índice de tópicos | Página ou título do capítulo | :+1: |
TI_I | Inserção de imagem [1] | Ilustrações | - | |
TI_M | Nota de rodapé no parágrafo [2] | Mapas | Página do mapa ou coordenada/ID | |
TI_3D | Nota de rodapé no parágrafo [3] | Modelos 3D | página modelo 3D ou ID | |
TI_V | Nota de rodapé no parágrafo | Vídeos do Youtube | Link externo | |
TI_C | Nota de rodapé no parágrafo | Podcasts | Link externo | |
TI_F | Nota de rodapé no parágrafo | Tópicos de discussão no fórum | Link externo | |

[1] O mesmo dito para _O Livro de Urântia_ se aplica aqui.
[2] O mesmo dito para _O Livro de Urântia_ se aplica aqui.
[3] O mesmo dito para _O Livro de Urântia_ se aplica aqui.

Exemplos:
- TI_UB: https://urantiapedia.org/en/topic/Abraham_(Old_Testament)#references

<br>

### Diagramas :memo:

Código | Tipo de origem | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
D_UB | Link no objeto de diagrama | O Livro de Urântia | Parágrafo | |
D_B | Link no objeto de diagrama | A Bíblia | Verso em um capítulo de um livro | |

Exemplos:
- D_UB: https://urantiapedia.org/en/article/The_Kingdom_of_Heaven_Revelation_Nebadon_Chart (qualquer uma das caixas no diagrama)

<br>

### Ilustrações :sunrise_over_mountains:

Não se espera que as ilustrações tenham uma página para cada uma, portanto, não são objetos vinculáveis. Eles são apenas inseridos em outros elementos, como documentos do _O Livro de Urântia_, os capítulos da Bíblia, artigos, apostilas de estudo ou entradas do Índice de Tópicos.

<br>

### Apresentações :bar_chart:

Código | Tipo de origem | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
P_UB | Link no slide | O Livro de Urântia | Parágrafo | |
P_B | Link no slide | A Bíblia | Verso em um capítulo de um livro | |

<br>

### Mapas :earth_americas:

Código | Tipo de origem | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
M_UB | Link no painel lateral | O Livro de Urântia | Parágrafo | |
M_B | Link no painel lateral | A Bíblia | Verso em um capítulo de um livro | |
M_TI | Link no painel lateral | Índice de tópicos | Página do tópico | |

Exemplos:
- M_TI: https://urantiapedia.org/en/map/The_Preaching_of_Jesus_Second_Galilee_Tour (clique em um ícone para abrir o painel com links)

<br>

### Modelos 3D :milky_way:

Código | Tipo de origem | Destino | Tipo de destino | Estado |
--- | --- | --- | --- | ---- | --- |
3D_UB | Link em elemento 3D | O Livro de Urântia | Parágrafo | |

<br>

### Vídeos :movie_camera:

Este conteúdo estará fora da Urantiapedia, então planejamos ter índices ou páginas que listam links externos ou alguns vídeos embutidos em algumas páginas. Isso é codificado como UB_V, A_V, S_V e TI_V.

<br>

### Podcasts :radio:

Este conteúdo estará fora da Urantiapedia, então planejamos ter índices ou páginas que listam links externos ou alguns podcasts embutidos em algumas páginas. Isso é codificado como UB_C, A_C, S_C e TI_C.

<br>

### Tópicos de Fóruns de Discussão :speech_balloon:

Este conteúdo estará fora da Urantiapedia, então planejamos ter páginas com links externos para tópicos relacionados ao conteúdo. Isso é codificado como UB_F, A_F, A_F e TI_F.

<br>

### Resumo dos tipos de links

| &nbsp;             | UB :blue_book: | B :closed_book: | A :page_with_curl: | S :notebook: | O :books: | TI :card_index: | D :memo: | P :bar_chart: | M :earth_americas: | 3D :milky_way: | V :movie_camera: | C :radio: | F :speech_balloon: |
| ------------------ | :------------: | :-------------: | :----------------: | :----------: | :-------: | :-------------: | :------: | :-----------: | :----------------: | :------------: | :--------------: | :-------: | :----------------: |
| UB :blue_book:     |                |     &harr;      |       &harr;       |    &harr;    |  &harr;   |     &harr;      |  &harr;  |    &harr;     |       &harr;       |     &harr;     |      &rarr;      |   &rarr;  |      &rarr;        |
| B :closed_book:    |     &harr;     |                 |       &harr;       |    &harr;    |  &harr;   |     &harr;      |  &larr;  |    &larr;     |       &harr;       |                |                  |           |                    |
| A :page_with_curl: |     &harr;     |     &harr;      |       &harr;       |    &harr;    |  &harr;   |     &harr;      |          |               |       &rarr;       |                |      &rarr;      |   &rarr;  |      &rarr;        |
| S :notebook:       |     &harr;     |     &harr;      |       &harr;       |    &harr;    |  &harr;   |     &harr;      |          |               |       &rarr;       |                |      &rarr;      |   &rarr;  |      &rarr;        |
| O :books:          |     &harr;     |     &harr;      |       &harr;       |    &harr;    |           |                 |          |               |                    |                |                  |           |                    |
| TI :card_index:    |     &harr;     |     &harr;      |                    |              |           |     &harr;      |          |               |       &harr;       |                |      &rarr;      |   &rarr;  |      &rarr;        |
| D :memo:           |     &harr;     |     &rarr;      |                    |              |           |                 |          |               |                    |                |                  |           |                    |
| P :bar_chart:      |     &harr;     |     &rarr;      |                    |              |           |                 |          |               |                    |                |                  |           |                    |
| M :earth_americas: |     &harr;     |     &larr;      |       &larr;       |    &larr;    |           |     &harr;      |          |               |                    |                |                  |           |                    |
| 3D :milky_way:     |     &harr;     |                 |                    |              |           |                 |          |               |                    |                |                  |           |                    |


## Como estamos definindo links

Para cada tipo de conteúdo aqui está uma descrição dos arquivos que armazenam os links e o processo para gerar os links nas páginas finais para enviar para a Urantiapedia.

### O Livro de Urântia :blue_book:

- UB_B: O arquivo original usado para obter os links é um trabalho existente chamado Paramony, obtido no site da Urantia Foundation: [Paramony.txt](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/paramony/Paramony.txt). O arquivo foi convertido através do Urantipedia Tools para um conjunto de arquivos Markdown (por exemplo [The Urantia Book.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paramony/The%20Urantia%20Book.md)) e depois adicionado ao _The Urantia Book_ no formato JSON: [footnotes-book-en](https://github.com/JanHerca/urantiapedia/tree/master/input/json/book-en-footnotes). Esses JSON são então convertidos em arquivos HTML que são carregados na Urantiapedia: [The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book). Os arquivos Markdown em inglês contêm a tabela completa com links.
- UB_A: O arquivo original usado para obter os links é um arquivo grande: [ub_paralells.tsv](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/articles-en/ub_paralells.tsv) . Este arquivo é gerado através das Urantiapedia Tools (verificando todos os artigos e auxílios de estudo em busca de links para UB).
- UB_S: Os links são obtidos como para UB_A.
- UB_O: Um arquivo Markdown com um par de tabelas contém a lista de livros e a lista de links (chamados paralells): [paralells.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paralells.md) Este processo será alterado para seguir o mesmo método de UB_A e UB_S.
- UB_TI: O Topic Index é um índice obtido do site da Fellowship. Este índice foi formatado em um conjunto de arquivos TXT: [topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en). Esses arquivos contêm links entre sentenças dentro de um tópico e _The Urantia Boo_k. Ao criar arquivos HTML para serem enviados para a Urantiapedia, procuramos tópicos com links para cada parágrafo e introduzimos links nessas palavras que correspondem aos nomes dos tópicos. Esse processo tem alguns problemas quando as mesmas palavras compartilham tópicos diferentes e agora é um trabalho em andamento.
- UB_D: Ainda não definido. Provavelmente usamos um catálogo de Diagramas como nos mapas.
- UB_I: As ilustrações estão sendo registradas em um catálogo usando arquivos Markdown: [image_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/image_catalog.md). Ao criar arquivos HTML para serem carregados na Urantiapedia, procuramos ilustrações com links para cada parágrafo e introduzimos imagens sob esses parágrafos. Este processo tem alguns problemas. É um trabalho em progresso.
- UB_P: Ainda não definido. Provavelmente usamos um catálogo de apresentações como nos mapas.
- UB_M: Os mapas estão sendo registrados em um catálogo usando arquivos Markdown: [map_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/map_catalog.md). Ao criar arquivos HTML para serem carregados na Urantiapedia, procuramos por mapas com links para cada parágrafo e apresentamos uma seção com uma miniatura e um botão com links para a página do mapa.
- UB_3D: Ainda não definido. Provavelmente usamos um catálogo de modelos 3D como nos mapas.
- UB_V: Ainda não definido. Provavelmente usamos um catálogo de vídeo como nos mapas. Mas esse conteúdo como é externo e geralmente em um determinado idioma (sem traduções) é difícil de reproduzir em todos os idiomas.
- UB_C: Ainda não definido. O mesmo que para vídeos.
- UB_F: Ainda não definido. O mesmo que para vídeos.

<br>

### A Bíblia :closed_book:

- B_UB: Os arquivos originais usados ​​para obter os links é o mesmo trabalho chamado Paramony usado no UB_B, mas desta vez vinculando livros bíblicos com _Urantia Book_: [bible-refs-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/bible-refs-en). Esses arquivos foram convertidos por meio do Urantiapedia Tools para um conjunto de arquivos Markdown: [paramony](https://github.com/JanHerca/urantiapedia/tree/master/input/markdown/en/paramony) e depois adicionados aos Livros da Bíblia quando eles são convertidos em arquivos HTML que são carregados na Urantiapedia: [Bible](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/Bible). Os arquivos Markdown em inglês contêm a tabela completa com links. As demais línguas possuem apenas uma tabela com as traduções dos textos em inglês.
- B_A: Ainda não definido. Uma opção poderia ser inverter A_B com Urantiapedia Tools.
- B_S: Ainda não definido. Uma opção poderia ser o S_B reverso com Urantiapedia Tools.
- B_O: Ainda não definido. Uma opção poderia ser O_B reverso com Urantiapedia Tools.
- B_TI: Ainda não definido. Este processo é difícil. Vamos ter poucos links do tipo TI_B para poder revertê-los. Uma maneira poderia ser usar Paramony, ou seja, B_UB, para encontrar parágrafos de UB e então extrair neles nomes de tópicos usados ​​em UB_TI. Por fim, tente encontrar esses mesmos tópicos nos versículos da Bíblia.
- B_I: Ainda não definido. Uma opção seria usar o mesmo sistema do UB_I, com um catálogo de imagens.
- B_M: Ainda não definido.

<br>

### Artigos :page_with_curl:

- A_UB: Os artigos geralmente vêm com referências ao _Urantia Book_. Estamos verificando-os e adicionando-os manualmente ou, às vezes, por meio de expressões regulares que convertem as referências detectadas em links. Veja abaixo sobre a importância de um [sistema de referência global exclusivo para _O Livro de Urântia_](#sistema-de-referência-global-exclusivo-para-O-Livro-de-Urântia).
- A_B: O mesmo que o anterior se aplica aos livros da Bíblia. Quando uma referência bíblica é detectada, manualmente ou por meio do RegExp, elas são convertidas em links.
- A_A: Quando um artigo faz referência a outro artigo, algo que raramente acontece, vamos adicionar esses links manualmente.
- A_S: O mesmo que o anterior.
- A_O: Se o artigo mencionar um livro que temos na Urantiapedia, adicionaremos o link manualmente.
- A_I: Por enquanto estamos incluindo imagens que já existem nos artigos.
- A_M: Ligações manuais.
- A_3D: Ligações manuais.
- A_V: Links externos manuais.
- A_C: Links externos manuais.
- A_F: Links externos manuais.

<br>

### Auxílios de estudo :notebook:

- S_UB: Auxílios de estudo geralmente vêm com referências ao _Urantia Book_. Estamos fazendo aqui o mesmo que A_UB.
- S_B: O mesmo que A_B.
- S_A: Este é um tipo de link que raramente ocorre. Estamos adicionando-os manualmente.
- S_S: Isso também é raro. Estamos adicionando isso manualmente.
- S_O: O mesmo que o anterior.
- S_I: Por enquanto estamos incluindo imagens que já existem em estudos.
- S_M: Ligações manuais.
- S_3D: Ligações manuais.
- S_V: Links externos manuais.
- S_C: Links externos manuais.
- S_F: Links externos manuais.

<br>

### Outros livros :books:

- O_UB: Usando o mesmo processo de UB_O, mas invertendo os links, é possível adicionar links em uma página de um livro.
- O_B: Se um livro menciona um livro da Bíblia estamos introduzindo um link manualmente.
- O_I: Estamos incluindo imagens que já existem nos livros.
- O_M: Se um livro contém mapas, não vamos convertê-los em um mapa interativo, mas em mapas de imagens estáticas.

<br>

### Índice de Tópicos :card_index:

- TI_UB: O Índice de Tópicos, descrito para UB_TI, é usado aqui de forma direta, introduzindo notas de rodapé com links quando os arquivos do Índice de Tópicos em formato TXT são convertidos para HTML para upload para a Urantiapedia. O resultado está aqui: [topic](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/topic). Por enquanto estamos trabalhando apenas em inglês e espanhol. Estamos repetindo todo o conteúdo dos arquivos para cada idioma.
- TI_B: Ainda não definido. O índice de tópicos usado menciona a Bíblia muito raramente.
- TI_A: Ainda não definido.
- TI_S: Ainda não definido.
- TI_I: Ainda não definido.
- TI_M: Links manuais na seção Links.
- TI_3D: Links manuais na seção Links.
- TI_V: Links externos manuais na seção Links Externos. Estamos adicionando links da Wikipedia dessa maneira.
- TI_C: Links externos manuais.
- TI_F: Links externos manuais.

<br>

### Diagramas :memo:

- D_UB: Queremos converter diagramas para SVG tanto quanto possível, ou mapas de imagem HTML. No processo, estaremos convertendo UB refs em links.
- D_B: O mesmo que o anterior, tentando detectar links bíblicos.

<br>

### Ilustrações :sunrise_over_mountains:

Para _Urantia Book_ seu uso foi explicado em UB_I. Para Bíblia em B_I. Para artigos, apostilas e outros livros, em A_I, S_I e O_I. Precisamos definir alguma forma de adicionar imagens ao Topic Index.

<br>

### Apresentações :bar_chart:

- P_UB: Queremos converter apresentações em algo que possa ser adicionado à Urantiapedia, não apenas links para Google Docs ou similares. Dessa forma, qualquer referência do UB ou da Bíblia será convertida em links da Urantiapedia.
- P_B: O mesmo que o anterior.

<br>

### Mapas :earth_americas:

- M_UB: Uma vez criados os links M_TI, podemos adicionar links como este usando links TI_UB.
- M_B: Uma vez criados os links M_TI, podemos adicionar links como este usando links TI_B.
- M_TI: Este tipo de link só será possível se os mapas forem convertidos em pequenos aplicativos interativos executados em um mapa incorporável (por exemplo usando a plataforma Google My Maps) ou como mapas executados dentro da Urantiapedia (mais recomendado). Ao definir esses mapas (provavelmente em um formato como KML), adicionaremos links para locais de tópicos como informações pop-up mostradas em um painel lateral.

<br>

### Modelos 3D :milky_way:

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