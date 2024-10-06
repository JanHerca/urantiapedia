---
title: Urantiapedia - Conteúdo do projeto GitHub
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
        <td><a href="/pt/help/github_edit_local">Trabalhar localmente no PC</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_initial_flow">Fluxo de trabalho para criar conteúdo inicial em um idioma</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Organização do projeto *Urantiapedia* no GitHub 

As pastas que compõem o projeto *Urantiapedia* no Github são estas: 
- **.vscode**: arquivos de configuração do Visual Studio Code, que é o IDE de desenvolvimento do *Urantiapedia Tools*. 
- **app**: arquivos de código-fonte JavaScript com o aplicativo *Urantiapedia Tools*. 
- **css**: alguns arquivos CSS para melhor exibição dos arquivos Markdown. 
- **docs**: alguns documentos sobre o projeto, embora a ajuda principal esteja em `output/wikijs/help`. 
- **input**: pasta principal que contém os arquivos de entrada que são usados ​​para gerar muitas páginas da *Urantiapedia*. 
    * ***html**: pasta com arquivos em formato HTML. 
        * **book-xx**: *O Livro de Urântia* em suas diferentes traduções em formato HTML original obtido da *Fundação Urântia* (`book-es`, `book-en`, etc.) 
    * **json**: pasta com arquivos no formato JSON. 
        * **book-xx**: *O Livro de Urântia* em suas diferentes traduções em formato JSON, mas sem as notas de rodapé *Paramony* (`book-es`, `book-en`, etc.) 
        * **book-xx-footnotes**: *O Livro de Urântia* em suas diferentes traduções em formato JSON, mas com as notas de rodapé do *Paramony* (`book-es-footnotes`, `book-en-footnotes` , etc.) 
        * **footnotes-book-xx.json** `DEPRECATED`: versão antiga de *Paramony* em formato JSON. 
    * **kml**: Arquivos KML e CSV usados ​​para gerar os mapas, cada um dentro de uma pasta para cada idioma (`en`, `es`, etc.). 
    * **markdown** / **xx** (`en`, `es`, etc.):  
      * **paramony**: contém a versão mais recente do Paramony. Anteriormente, eram usados ​​arquivos JSON, mas agora são usados ​​arquivos Markdown. Os arquivos para o idioma inglês contêm as tabelas principais; arquivos de outros idiomas são apenas traduções.
      * **outras pastas**: arquivos Markdown temporários para artigos e livros obtidos de uma conversão de formato PDF / DOCX ou ao digitalizar, cada um dentro de uma pasta para cada idioma (`en`, `es`, etc.).O conteúdo desta pasta não será mantido ao longo do tempo, pois será corrigido e movido para a pasta de saída.
      * **3dmodels_catalog.md**: catálogo de modelos 3D. O arquivo para o idioma inglês contém as tabelas principais; arquivos de outros idiomas são apenas traduções. 
      * **image_catalog.md**: catálogo de imagens. O arquivo para o idioma inglês contém as tabelas principais; arquivos de outros idiomas são apenas traduções. 
      * **map_catalog.md**: Catálogo de mapas. O arquivo para o idioma inglês contém as tabelas principais; arquivos de outros idiomas são apenas traduções. 
      * __paralells.md__ : catálogo geral de paralelos entre _O Livro de Urântia_ e o restante do conteúdo (artigos, Bíblia, outros livros, etc.). 
    * **mediawiki** `DEPRECATED`: pasta com conteúdo antigo em formato Wikitexto para MediaWiki. A primeira versão de *Urantiapedia* foi feita com MediaWiki, mas a atual é criada com *Wiki.js*. 
        * **articles-xx**: Pastas obsoletas com exemplos de artigos no formato Wikitexto. 
        * **main-pages-xx**: Pastas obsoletas com conteúdo de ajuda no formato Wikitexto. 
        * **modules**: módulos escritos em Lua, a linguagem de script para criação de modelos no MediaWiki. 
        * **sample**: Exemplo de conteúdo antigo em formato Wikitexto. 
        * **templates**: modelos para *Urantipedia*, que são fragmentos reutilizáveis ​​no formato MediaWiki. 
    * **svg**: alguns arquivos SVG. 
    * **tex**: pasta com os arquivos em formato LaTeX. 
        * **bible-xx**: *A Bíblia* em cada uma de suas traduções em formato LaTeX (`bible-es`, `bible-en`, etc.) 
    * **txt**: pasta com os arquivos em TXT formatar. 
        * **articles-xx**: alguns exemplos de artigos em formato TXT (`articles-es`, `articles-en`, etc.). 
        * **bible-refs-xx** `DEPRECATED`: versão antiga de _Paramony_ (referências cruzadas da Bíblia para _O Livro de Urântia_) em formato TXT (`bible-refs-es`,`bible-refs-en`, etc.). 
        * **topic-index-xx**: *Índice de termos* traduzidos para cada idioma em formato TXT (`topic-index-es`, `topic-index-en`, etc.)  
- **output**: pasta com os arquivos de saída que serão carregados em massa no site *Urantipedia*. 
    * **wikijs**: pasta com o conteúdo nos formatos suportados pelo *Wiki.js*. 
        * **xx**: Conteúdo para cada idioma em sua própria pasta (`en`, `es`, etc.). A estrutura para cada idioma é a mesma e é a seguinte:
            * **3dmodel**: Modelos 3D. 
            * **article**: Artigos, organizados em pastas por autor. Geralmente no formato Markdown. 
            * **Bible**: Conteúdo da Bíblia. IMPORTANTE: os arquivos desta pasta *não devem ser editados*. Em vez disso você tem que editar os arquivos na pasta `input` e então usar *Urantiapedia Tools*. 
            * **book**: Livros, organizados em pastas por autor. Geralmente no formato Markdown. 
            * **help**: páginas de ajuda da Urantiapedia. No formato Markdown.
            * **index**: Índices. IMPORTANTE: Alguns arquivos nesta pasta, mas não todos, *não devem ser editados*. Em vez disso, você deve usar as *Ferramentas Urantiapedia* para gerá-los. 
            * **map**: Mapas. Por enquanto eles estão no formato Markdown com um *iframe* que aponta para o Google Maps, mas no futuro apenas arquivos KML serão salvos aqui. 
            * **news**: Notícias mensais do projeto em formato Markdown. 
            * **slides**: Apresentações. 
            * **tests**: páginas onde você pode testar conteúdos futuros. 
            * **The_Urantia_Book**: Documentos do Livro de Urântia. IMPORTANTE: os arquivos desta pasta *não devem ser editados*. Em vez disso você tem que editar os arquivos na pasta `input` e então usar *Urantiapedia Tools*. 
            * **topic**: Índice de termos. 
        * **imagem**: Imagens do site. 

As pastas marcadas como *obsoletas* podem ser ignoradas, pois contêm material que não está mais sendo usado no processo e provavelmente será excluído no futuro. 

Os códigos de idioma a serem utilizados nas pastas devem seguir o padrão ISO 639-1 com duas letras para cada idioma. https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes 

Ao gerar conteúdo para um novo idioma, as pastas com as quais se preocupar são: 
- `input/html` 
- `input/json` 
- `input/markdown` 
- `input/tex` 
- `input/txt` 

Vale lembrar que atualmente existem três traduções na língua espanhola. Todas as três traduções estarão disponíveis em *Urantiapedia*. Por isso existirão estas pastas: 
- `book-es`, com a chamada tradução europeia, feita em 2009; 
- `book-es-1993`, com a primeira tradução para o espanhol feita em 1993; 
- `book-es-2021`, com a nova tradução feita em 2021.

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
        <td><a href="/pt/help/github_edit_local">Trabalhar localmente no PC</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_initial_flow">Fluxo de trabalho para criar conteúdo inicial em um idioma</a></td>
      </tr>
    </tbody>
  </table>
</figure>