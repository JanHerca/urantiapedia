---
title: Status da Urantiapedia - Progresso atual do projeto
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
        <td><a href="/pt/help/languages">Idiomas suportados</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/websites">Sites para referências</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Marco I - O Livro de Urântia, a Bíblia e o Índice de Tópicos

Esta fase é explicada em detalhes aqui: [Marco I](/pt/help/phases#marco-i-o-livro-de-ur%C3%A2ntia-a-b%C3%ADblia-e-o-%C3%ADndice-de-t%C3%B3picos).

### Tarefas de desenvolvimento de software

Nesta fase os desenvolvimentos a realizar são:

Tarefa                                                                                                        | Estado             |
------------------------------------------------------------------------------------------------------------- | ------------------ |
Desenvolvimento de conversores de arquivos para Wiki.js                                                       | :heavy_check_mark: |
Desenvolvimento do _Topic Index Editor_, um assistente que permite agilizar o trabalho com o Índice de Termos | :clock2:           |

### Tarefas de adição de conteúdo

Para cada idioma suportado, a lista de tarefas para completar o marco I é esta:

1. Tradução de _Paramony_ :ledger: do inglês para o idioma de destino (`Paramony`).
2. Tradução e revisão de _Topic index_ :card_index: do inglês para o idioma de destino (`Topics`).
3. Obtenha uma tradução de domínio público de _The Bible_ :closed_book: no idioma de destino (`Bíblia`).
4. Conversão _O Livro de Urântia_ :blue_book: de HTML para JSON sem _Paramony_ :ledger: footnotes (`LU`).
5. Adição de _Paramony_ :ledger: notas de rodapé para _O Livro de Urântia_ :blue_book: em JSON (`LU Paramony`).
6. Conversão do _Topic index_ :card_index: de TXT para Wiki.js e commit das alterações usando [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) (`Topics`).
7. Conversão de _O Livro de Urântia_ :blue_book: de JSON com _Paramony_ :ledger: notas de rodapé para Wiki.js incluindo referências a tópicos e alterações de commit usando [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup ) (`LU Wiki`).
8. Conversão de _The Bible_ :closed_book: de LaTeX para Wiki.js com _Paramony_ :ledger: notas de rodapé e alterações de commit usando [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) (`Bible Wiki `).

Outras tarefas adicionais para trabalhar são:

- :sound: Testa soluções de conversão de texto em fala. O objetivo é oferecer leitura automatizada de todos os livros do site, começando com _O Livro de Urântia_. Em inglês há um audiolivro oficial da Urantia Foundation. Para outros idiomas, serão buscadas soluções automatizadas. (`LU Áudio`)
- :sunrise_over_mountains: Crie um catálogo de imagens para ilustrar _O Livro de Urântia_, a _Bíblia_ e o _Índice de Tópicos_. Atualmente é feito com a parte IV de _O Livro de Urântia_. (`imagens LU`)

Tabela de tarefas e idiomas para suporte, mostrando o progresso atual:

| Idioma      | Código | :ledger: Paramony  | :card_index: Tópicos | :closed_book: Bíblia |   :blue_book: LU   | :blue_book: :ledger: LU <br> Paramony | :blue_book: LU<br>Wiki | :closed_book: Bíblia<br>Wiki |  :sound: LU Áudio  | :sunrise_over_mountains: imagens LU |
| ----------- | :----: | :----------------: | :------------------: | :------------------: | :----------------: | :-----------------------------------: | :--------------------: | :--------------------------: | :----------------: | :---------------------------------: |
| Búlgaro     |  `bg`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Checo       |  `cs`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Dinamarquês |  `da`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Alemão      |  `de`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      | :heavy_check_mark: |              :clock2:               |
| Grego       |  `el`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Inglês      |  `en`  | :heavy_check_mark: |       :clock2:       |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      | :heavy_check_mark: |              :clock2:               |
| Espanhol    |  `es`  | :heavy_check_mark: |       :clock2:       |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      | :heavy_check_mark: |              :clock2:               |
| estoniano   |  `et`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Persa       |  `fa`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Finlandês   |  `fi`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Francês     |  `fr`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      | :heavy_check_mark: |              :clock2:               |
| Hebraico    |  `he`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Húngaro     |  `hu`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| indonésio   |  `id`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Italiano    |  `it`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      | :heavy_check_mark: |              :clock2:               |
| Japonês     |  `ja`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Coreano     |  `ko`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Lituano     |  `lt`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Holandês    |  `nl`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Polonês     |  `pl`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Português   |  `pt`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      | :heavy_check_mark: |              :clock2:               |
| Romeno      |  `ro`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Russo       |  `ru`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Sueco       |  `sv`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |
| Turco       |  `tr`  | :heavy_check_mark: |                      |  :heavy_check_mark:  | :heavy_check_mark: |          :heavy_check_mark:           |   :heavy_check_mark:   |      :heavy_check_mark:      |                    |              :clock2:               |


## Marco II - Livros, artigos, auxílios de estudo, esquemas e índices

Esta fase é explicada em detalhes aqui: [Marco II](/pt/help/phases#marco-ii-livros-artigos-aux%C3%ADlios-de-estudo-esquemas-e-%C3%ADndices).

### Tarefas de desenvolvimento de software

Nesta fase os desenvolvimentos a realizar são:

Tarefa                                                          | Estado             |
----------------------------------------------------------------| ------------------ |
Desenvolvimento para conversão de livros e artigos para Wiki.js | :clock2:           |

### Tarefas de adição de conteúdo

Para cada idioma, o conteúdo esperado neste marco é:

- Livros:
  - :green_book: Livros extra-bíblicos: 11 livros planejados. (`Extra-bíblico`)
  - :books: Outros livros supostamente fontes: 17 livros planejados. (`Livros Fontes`)
- :page_with_curl: Artigos: Mais de 2.000 artigos planejados [veja abaixo]. (`Artigos`)
- :notebook: Auxílios de estudo: Planejei cerca de 20 deles, disponível em `en`. (`Auxílios de estudo`)
- :memo: Diagramas: não planejado, apenas testes. (`Diagramas`)
- :capital_abcd: Índices: atualmente estão disponíveis índices para tópicos. Mais precisam ser planejados. (`Índices`)

| Idioma      | Código | :green_book: Extra-bíblico | :books: Livros Fontes    | :page_with_curl: Artigos | :notebook: Auxílios de estudo | :memo: Diagramas | :capital_abcd: Índices |
| ----------- | :----: | :------------------------: | :----------------------: | :----------------------: | :---------------------------: | :--------------: | :--------------------: |
| Búlgaro     |  `bg`  |                            |                          |                          |                               |                  |                        |
| Checo       |  `cs`  |                            |                          |                          |                               |                  |                        |
| Dinamarquês |  `da`  |                            |                          |                          |                               |                  |                        |
| Alemão      |  `de`  |                            |                          |                          |                               |                  |                        |
| Grego       |  `el`  |                            |                          |                          |                               |                  |                        |
| Inglês      |  `en`  |     :heavy_check_mark:     |    :clock2:              |    :clock2:              |  :heavy_check_mark:           |                  |   :heavy_check_mark:   |
| Espanhol    |  `es`  |          :clock2:          |    :clock2:              |    :clock2:              |           :clock2:            |                  |   :heavy_check_mark:   |
| estoniano   |  `et`  |                            |                          |                          |                               |                  |                        |
| Persa       |  `fa`  |                            |                          |                          |                               |                  |                        |
| Finlandês   |  `fi`  |                            |                          |                          |                               |                  |                        |
| Francês     |  `fr`  |                            |                          |                          |           :clock2:            |                  |                        |
| Hebraico    |  `he`  |                            |                          |                          |                               |                  |                        |
| Húngaro     |  `hu`  |                            |                          |                          |                               |                  |                        |
| indonésio   |  `id`  |                            |                          |                          |                               |                  |                        |
| Italiano    |  `it`  |                            |                          |                          |                               |                  |                        |
| Japonês     |  `ja`  |                            |                          |                          |                               |                  |                        |
| Coreano     |  `ko`  |                            |                          |                          |                               |                  |                        |
| Lituano     |  `lt`  |                            |                          |                          |                               |                  |                        |
| Holandês    |  `nl`  |                            |                          |                          |                               |                  |                        |
| Polonês     |  `pl`  |                            |                          |                          |                               |                  |                        |
| Português   |  `pt`  |                            |                          |                          |                               |                  |                        |
| Romeno      |  `ro`  |                            |                          |                          |                               |                  |                        |
| Russo       |  `ru`  |                            |                          |                          |                               |                  |                        |
| Sueco       |  `sv`  |                            |                          |                          |                               |                  |                        |
| Turco       |  `tr`  |                            |                          |                          |                               |                  |                        |

### Progresso dos artigos detalhado

Esta é uma informação detalhada sobre o progresso com a adição de artigos. A Urantiapedia recebeu uma doação da Fundação Urântia como parte do [Programa Semente de Mostarda](https://www.urantia.org/news/2023-03/mustard-seed-grants-program). Esta doação inclui recursos para ajudar na adição de artigos nos idiomas especificados abaixo.

A tabela abaixo não está completa. Existem mais sites que estamos considerando adicionar à Urântiapedia. Esta tabela será atualizada à medida que houver progresso nos meses seguintes.

| Editora / Publicação         | Número de<br>artigos  | Inglês             | Espanhol           | Francês   | Português    |
| ---------------------------- | --------------------: | :----------------: | :----------------: | :-------: | :----------: |
| The Urantia Foundation       |                       |                    |                    |           |              |
| - News Online                | 614                   | :heavy_check_mark: |                    |           |              |
| - News Flash                 |  24                   | :heavy_check_mark: |                    |           |              |
| - Urantian                   |  63                   | :heavy_check_mark: |                    |           |              |
| Fellowship                   |                       |                    |                    |           |              |
| - Fellowship Herald          | 232                   | :heavy_check_mark: | :heavy_check_mark: |           |              |
| - Mighty Messenger           | 218                   | :heavy_check_mark: | :heavy_check_mark: |           |              |
| - Study Group Herald         |   ?                   | :clock2:           |                    |           |              |
| - The Urantian               |   ?                   | :clock2:           |                    |           |              |
| IUA                          |                       |                    |                    |           |              |
| - Journal                    |  99                   | :heavy_check_mark: |                    |           |              |
| - Tidings                    | 364                   | :heavy_check_mark: |                    |           |              |
| Innerface International      | 568                   | :heavy_check_mark: | :heavy_check_mark: |           |              |
| Spiritual Fellowship Journal |   ?                   | :clock2:           |                    |           |              |
| Spain Association            |                       |                    |                    |           |              |
| - Luz y Vida                 | 337                   | :heavy_check_mark: | :heavy_check_mark: |           |              |
| - Website                    |   ?                   |                    |                    |           |              |
| ANZURA Association           |                       |                    |                    |           |              |
| - 6-0-6                      |   ?                   |                    |                    |           |              |
| - The Arena                  |   ?                   |                    |                    |           |              |
| Cosmic Reflections           |   ?                   |                    |                    |           |              |
| Urantia Society of LA        |                       |                    |                    |           |              |
| - Agondonter                 |   ?                   |                    |                    |           |              |
| French Association           |                       |                    |                    |           |              |
| - CERDH - The Letter         |   ?                   |                    |                    |           |              |
| - Le Lien                    |   ?                   |                    |                    |           |              |
| Quebec Association           |                       |                    |                    |           |              |
| - Reflectivite               |   ?                   |                    |                    |           |              |
| - Website                    | 116                   |                    |                    |           |              |
| UB Annotated                 |   ?                   | :clock2:           | :clock2:           |           |              |
| Jan Herca articles           |  41                   | :clock2:           | :clock2:           |           |              |
| **TOTAL**                    | **2676**              |                    |                    |           |              |


## Marco III - Tradutor

Esta fase é explicada em detalhes aqui: [Marco III](/pt/help/phases#marco-iii-tradutor).

Nesta fase, os desenvolvimentos serão realizados apenas nas aplicações, pelo que será uma fase paralela às restantes. As tarefas previstas são estas:

Tarefa                                                                                                                                       | Estado |
-------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
Desenvolvimento em Urantiapedia Ferramentas de um tradutor de páginas massivas                                                               | :heavy_check_mark: |
Desenvolvimento em Wiki.js de um novo editor que permite traduções assistidas diretamente na web                                             |        |
Desenvolvimento em Wiki.js de um modo de exibição para O Livro de Urântia e qualquer outro conteúdo em dois a quatro idiomas                 |        |
Desenvolvimento em Wiki.js de um seletor de preferência na tradução para uso do *Livro de Urântia* (para idiomas como o espanhol com vários) |        |

## Marco IV - Mapas interativos

Esta fase é explicada em detalhes aqui: [Marco IV](/pt/help/phases#marco-iv-mapas-interativos).

Este marco inclui alguns desenvolvimentos que atualmente não estão planejados.

Para cada idioma, o conteúdo esperado neste marco é:

- :globe_with_meridians: `Mapas estáticos`: 100 planejados.
- :earth_americas: `Mapas interativos`: 20 planejados. Por enquanto um mapa foi criado para teste.

| Idioma      | Código | :globe_with_meridians: Mapas estáticos | :earth_americas: Mapas Interativos |
| ----------- | :----: | :------------------------------------: | :--------------------------------: |
| Búlgaro     |  `bg`  |                                        |                                    |
| Checo       |  `cs`  |                                        |                                    |
| Dinamarquês |  `da`  |                                        |                                    |
| Alemão      |  `de`  |                                        |                                    |
| Grego       |  `el`  |                                        |                                    |
| Inglês      |  `en`  |                                        |          :clock2: 1 / 20           |
| Espanhol    |  `es`  |                                        |          :clock2: 1 / 20           |
| estoniano   |  `et`  |                                        |                                    |
| Persa       |  `fa`  |                                        |                                    |
| Finlandês   |  `fi`  |                                        |                                    |
| Francês     |  `fr`  |                                        |                                    |
| Hebraico    |  `he`  |                                        |                                    |
| Húngaro     |  `hu`  |                                        |                                    |
| indonésio   |  `id`  |                                        |                                    |
| Italiano    |  `it`  |                                        |                                    |
| Japonês     |  `ja`  |                                        |                                    |
| Coreano     |  `ko`  |                                        |                                    |
| Lituano     |  `lt`  |                                        |                                    |
| Holandês    |  `nl`  |                                        |                                    |
| Polonês     |  `pl`  |                                        |                                    |
| Português   |  `pt`  |                                        |                                    |
| Romeno      |  `ro`  |                                        |                                    |
| Russo       |  `ru`  |                                        |                                    |
| Sueco       |  `sv`  |                                        |                                    |
| Turco       |  `tr`  |                                        |                                    |


## Marco V - Apresentações

Esta fase é explicada em detalhes aqui: [Marco V](/pt/help/phases#marco-v-apresenta%C3%A7%C3%B5es).

Este marco inclui algum desenvolvimento que atualmente não está planejado. Também é necessário planejar uma lista de apresentações a serem incluídas.

## Marco VI - Modelos 3D

Esta fase é explicada em detalhes aqui: [Marco VI](/pt/help/phases#marco-vi-modelos-interativos-3d).

Este marco inclui algum desenvolvimento que atualmente não está planejado. Também é necessário planejar uma lista de modelos 3D a serem incluídos.

## Tarefas planejadas

Aqui você pode encontrar uma lista de tarefas que não estão ativas no momento. Se você é um colaborador ou deseja ser um, verifique esta lista com frequência para ver onde você pode fazer suas melhores adições. Se uma tarefa estiver recuada acima, isso significa que a tarefa depende de anterior para iniciar.

|          Ícone           | Conteúdo              | Tarefas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :----------------------: | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       :blue_book:        | O Livro de Urântia    | Revisão da tradução automática feita para notas de rodapé _Paramony_ exceto `es` e `en`.                                                                                                                                                                                                                                                                                                                                                                                                           |
|         :sound:          | Áudio                 | Teste as soluções de conversão de texto em fala mais adequadas: todos os idiomas.<br> Geração de áudio do Livro de Urântia: atualmente disponível em `en` e em processo com `es`.                                                                                                                                                                                                                                                                                                                  |
| :sunrise_over_mountains: | Imagens               | Crie um catálogo de imagens para ilustrar O Livro de Urântia, a Bíblia e o Índice de Tópicos. Atualmente é feito com a parte IV do Livro de Urântia.                                                                                                                                                                                                                                                                                                                                               |
|       :card_index:       | O Índice do Tópico    | Produza a primeira versão para `en` e `es`. Esta é uma tarefa pesada que foi dividida por letras do alfabeto. As letras `A` a `G` já estão finalizadas e permanecem as letras `H` a `Z`.<br> Tradução automática do Índice de Tópicos: não é recomendado iniciar esta tarefa até que a anterior seja concluída porque algum processo automático ajudará aqui .<br> Revisão da tradução anterior: como acima não é recomendado iniciar esta tarefa até produzir a primeira versão para `en` e `es`. |
|      :closed_book:       | A Bíblia              | Revisão da tradução automática das notas de rodapé _Paramony_: todos os idiomas exceto `en` e `es`.                                                                                                                                                                                                                                                                                                                                                                                                |
|       :green_book:       | Livros extra-bíblicos | Obtenha livros extra-bíblicos de domínio público: todas as línguas.                                                                                                                                                                                                                                                                                                                                                                                                                                |
|         :books:          | Outros livros         | Obtenha as supostas fontes dos livros (baixando da web ou digitalizando): os livros geralmente estão em `en`.<br> Tradução automática de livros anteriores: todos os idiomas exceto `en`.<br> Revisão da tradução anterior: todos os idiomas exceto ` en`.                                                                                                                                                                                                                                         |
|     :page_with_curl:     | Artigos               | Adição de artigos em `en` e revisão do estilo.<br>Tradução automática de artigos: todos os idiomas exceto `en`.<br> Revisão da tradução anterior: todos os idiomas exceto `en`.                                                                                                                                                                                                                                                                                                                    |
|        :notebook:        | Auxílios de estudo    | Tradução automática de auxiliares de estudo: todos os idiomas, exceto `en`.<br> Revisão da tradução anterior: todos os idiomas, exceto `en`                                                                                                                                                                                                                                                                                                                                                        |
|          :memo:          | Diagramas             | Planeje uma lista de diagramas para incluir e crie um para teste.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|      :capital_abcd:      | Índices               | Planeje uma lista de índices a serem incluídos.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  :globe_with_meridians:  | Mapas estáticos       | Planeje uma lista de mapas estáticos (imagens) para incluir e crie uma para teste                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     :earth_americas:     | Mapas interativos     | Crie um geodatabase e projetos QGIS para geração automática de mapas<br>Teste a exportação de mapas para SVG, mapas de imagem HTML e KML (isso requer uma plataforma de mapas como Google My Maps ou nossa própria)<br> Tradução automática de textos em mapas: todas as línguas.                                                                                                                                                                                                                  |
|       :bar_chart:        | Apresentações         | Planeje uma lista de apresentações para incluir e crie uma para teste usando o Google Drive.                                                                                                                                                                                                                                                                                                                                                                                                       |
|       :milky_way:        | Modelos 3D            | Planeje uma lista de cenas 3D para incluir e crie uma para teste usando o Sketchfab.                                                                                                                                                                                                                                                                                                                                                                                                               |
|      :movie_camera:      | Vídeo                 | Crie uma introdução estendida ao Urantiapedia (canal do YouTube).<br> Crie um tutorial avançado para contribuidores do Urantiapedia (canal do YouTube).                                                                                                                                                                                                                                                                                                                                            |


## Resumo

A tabela a seguir resume todo o progresso com cada tipo de conteúdo:

| Idioma      | Código |  :blue_book:       | :sound:            | :sunrise_over_mountains:  |  :card_index:  | :closed_book:      | :green_book:       |  :books:        | :page_with_curl:  | :notebook:           | :memo:  | :globe_with_meridians:   | :earth_americas: | :bar_chart: | :milky_way: |
| ----------- | :----: | :----------------: | :----------------: | :-----------------------: | :------------: | :----------------: | :------------:     | :-------------: | :---------------: | :------------------: | :-----: | :----------------------: | :--------------: | :---------: | :---------: |
| Búlgaro     |  `bg`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Checo       |  `cs`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Dinamarquês |  `da`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Alemão      |  `de`  | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Grego       |  `el`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Inglês      |  `en`  | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  | :clock2:       | :heavy_check_mark: | :heavy_check_mark: | :clock2:        | :clock2:          | :heavy_check_mark:   | :one:   |                          | :one:            | :one:       | :one:       |
| Espanhol    |  `es`  | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  | :clock2:       | :heavy_check_mark: | :clock2:           | :clock2:        | :clock2:          | :clock2:             |         |                          | :one:            |             |             |
| estoniano   |  `et`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Persa       |  `fa`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Finlandês   |  `fi`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Francês     |  `fr`  | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   | :clock2:             |         |                          |                  |             |             |
| Hebraico    |  `he`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Húngaro     |  `hu`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| indonésio   |  `id`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Italiano    |  `it`  | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Japonês     |  `ja`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Coreano     |  `ko`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Lituano     |  `lt`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Holandês    |  `nl`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Polonês     |  `pl`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Português   |  `pt`  | :heavy_check_mark: | :heavy_check_mark: | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Romeno      |  `ro`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Russo       |  `ru`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Sueco       |  `sv`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |
| Turco       |  `tr`  | :heavy_check_mark: |                    | :clock2:                  |                | :heavy_check_mark: |                    |                 |                   |                      |         |                          |                  |             |             |


(1) Livro de Urântia :blue_book: e Bíblia :closed_book: com o _Paramony_ incluído.

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
        <td><a href="/pt/help/languages">Idiomas suportados</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/websites">Sites para referências</a></td>
      </tr>
    </tbody>
  </table>
</figure>
