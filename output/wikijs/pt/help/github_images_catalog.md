---
title: "Criando um catálogo de imagens"
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
        <td><a href="/pt/help/github_diagrams_svg">Obter diagramas</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Veja como criar o catálogo de imagens do projeto. Este catálogo é um arquivo usado para automatizar a inclusão de ilustrações no *O Livro de Urântia* e em outras partes da *Urantiapedia*.

O aspecto visual de Urantiapedia é algo que vamos cuidar. Todo o conteúdo tentará ser o mais visual possível, com ilustrações de qualidade.

## Catálogos de imagens de domínio público

Existem muitas fontes de imagens ou ilustrações de domínio público que podem ser usadas para esse fim. Alguns exemplos são:

-Wikimedia Commons. É o projeto irmão da Wikipedia para hospedar ilustrações de domínio público. Algumas coleções de artistas clássicos e com temas bíblicos podem ser encontradas aqui:
  - James Tissot:
    - https://commons.wikimedia.org/wiki/Gospel_harmony_(James_Tissot)
    - https://commons.wikimedia.org/wiki/Paintings_by_James_Tissot
    - https://www.wikidata.org/wiki/Wikidata:WikiProject_sum_of_all_paintings/Creator/James_Tissot
    - https://commons.wikimedia.org/wiki/Category:The_Life_of_Jesus_Christ_by_James_Tissot
  - William Buraco:
    - https://commons.wikimedia.org/wiki/William_Hole%27s_Bible_Illustrations#
  - Gustavo Doré:
    - https://commons.wikimedia.org/wiki/Dor%C3%A9%27s_Bible_Illustrations
  - Harold Copping:
    - https://commons.wikimedia.org/wiki/Copping%27s_Bible_Illustrations
- rawpixel. Um serviço de aquisição de imagens online. Tem muitos em domínio público:
  - https://www.rawpixel.com/category/53/public-domain
- Biblioteca Patrimonial. Uma grande coleção de ilustrações vintage.
  - https://www.heritagetype.com/pages/free-vintage-illustrations
- Museu Britânico.
  - https://www.britishmuseum.org/collection
- Biblioteca Britânica
  - https://www.flickr.com/photos/britishlibrary/albums
- europeana.
  - https://www.europeana.eu/en/collections
- Museo. Várias instituições de arte unidas.
  - https://museo.app/
- V&A.
  - https://collections.vam.ac.uk/search/
- Rikjsmuseum.
  - https://www.rijksmuseum.nl/en/rijksstudio
- Smithsonian.
  - https://www.si.edu/openaccess
- Museu de História Natural Yale Peabody
  - https://collections.peabody.yale.edu/search/
- O Metropolitano
  - https://www.metmuseum.org/art/the-collection
- Galeria Nacional de Arte
  - https://www.nga.gov/open-access-images.html
- The Public Domain Review
  - https://publicdomainreview.org/
- Coleção de mapas de David Rumsey
  - https://www.davidrumsey.com/luna/servlet/view/all
- Artistas conceituais. Eles não são de domínio público, mas os artistas podem ser contatados para solicitar permissão para usá-los.
  - Gary Tonge: https://visionafar.com

## Processo

O catálogo de imagens é encontrado apenas no GitHub, em `input/markdown/en/image_catalog.md`. Cada idioma tem seu próprio idioma, mas as tabelas principais são encontradas apenas na pasta `en` para o idioma inglês. Para os demais idiomas, há apenas uma tabela de traduções dos títulos do inglês. Por exemplo, em `/input/markdown/es/image_catalog.md` existem apenas traduções de títulos do inglês para o espanhol.

O catálogo é um arquivo Markdown que possui várias seções, cada uma marcada com a marca `##`. Essas seções representam blocos de ilustrações ou imagens que têm origem igual ou semelhante, para poder trabalhar em grupos de imagens.

Em cada seção há uma tabela em formato Markdown com este conteúdo:
- `ref`: indica o parágrafo de _O Livro de Urântia_ que terá a imagem abaixo ou ao lado. Se ainda não for conhecido, pode ser deixado em branco.
- `float`: indica se a imagem deve flutuar ao lado do texto. Pode assumir três valores:
  - Vazio: a imagem é um bloco e o texto é colocado acima e abaixo.
  - `R`: a imagem flutua para a direita e o texto continua para a esquerda. Se o dispositivo não tiver largura suficiente, esse comportamento não ocorre.
  - `L`: a imagem flutua para a esquerda e o texto continua para a direita. Se o dispositivo não tiver largura suficiente, esse comportamento não ocorre.
- `title`: Título da imagem ou ilustração. Deve existir sempre.
- `file`: nome do arquivo, incluindo a extensão. O caminho da pasta é indicado na seção. Deve existir sempre.
- `autor`: autor. Se não for conhecido, pode ser deixado em branco.
- `year`: ano ou anos de publicação. Se não for conhecido, pode ser deixado em branco.
- `url`: endereço web de onde a imagem foi obtida. Deve existir sempre.

Por exemplo, pode ser um trecho de uma seção:

```
## /image/The_Urantia_Book/Jesus_life/paintings


| ref      | float | title                          | file                           | author       | year        | url                                                                                                                                             |
| -------- | ----- | ------------------------------ | -------------------------------| -------------| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------|
| 122:8.5  |       | The Adoration of the Magi      | Adoration_of_the_Magi.jpg      | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Magi_(L'adoration_des_mages)_-_James_Tissot_-_overall.jpg        |
|          |       | The Adoration of the Shepherds | Adoration_of_the_Shepherds.jpg | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Shepherds_(L'adoration_des_bergers)_-_James_Tissot_-_overall.jpg |
```

Para editar o catálogo de imagens você deve ir ao projeto GitHub e modificar este arquivo em inglês: `input/markdown/en/image_catalog.md`. Então para cada nova imagem, você deve modificar este outro arquivo `input/markdown/en/image_catalog.md` e colocar nele a tradução do título de inglês para espanhol, embora esta segunda modificação possa ser ignorada porque ao usar o catálogo de imagens que verificamos se há títulos não traduzidos. Para modificar os arquivos você pode baixar o projeto inteiro do GitHub ou apenas os arquivos a serem modificados. Veja a [Ajuda dos Editores Assistentes](/pt/help/github_assistant) para saber como baixar coisas do GitHub.

## Enviando arquivos

Para enviar as alterações, você tem duas opções: 1) se você for um “editor-chefe” use o GitHub conforme detalhado na [Ajuda dos editores-chefe](/pt/help/github); se você for um “Editor Assistente”, você pode simplesmente enviar os arquivos Markdown modificados para o e-mail de qualquer Administrador ou para urantiapedia@gmail.com.

## Links externos

- [Urantiapedia Tools - projeto GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_diagrams_svg">Obter diagramas</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</figure>
