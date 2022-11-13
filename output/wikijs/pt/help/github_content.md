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
        <td><a href="/pt/help/github_setting">Configurando o projeto GitHub</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_paramony">Tradução de Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Pastas no projeto *Urantiapedia* no GitHub

As pastas que compõem o projeto *Urantiapedia* no Github são estas:
- **.vscode**: arquivos de configuração para Visual Studio Code, o software usado para desenvolver *Urantiapedia Tools*.
- **app**: arquivos de código fonte em JavaScript com o aplicativo *Urantiapedia Tools*.
- **css**: alguns arquivos CSS para mostrar melhor os arquivos Markdown.
- **docs**: alguma documentação do projeto, embora os documentos principais estejam em `output/wikijs/help`.
- **input**: pasta principal contendo arquivos de entrada usados ​​para gerar páginas *Urantiapedia* para um idioma. Esta é a única pasta que os "Editores Chefes" devem modificar no projeto.
    * **html**: pasta com arquivos em formato HTML.
        * **book-xx**: traduções do *O Livro de Urântia* em HTML original da *Urantia Foundation* (`book-en`,` book-es`, etc.)
    * **json**: pasta com arquivos no formato JSON.
        * **book-xx**: traduções do *O Livro de Urântia* no formato JSON, sem notas de rodapé do *Paramony* (`book-en`,` book-es`, etc.)
        * **book-xx-footnotes**: traduções do *O Livro de Urântia* em formato JSON e com notas de rodapé *Paramony* (`book-en-footnotes`,` book-es-footnotes`, etc.)
        * **footnotes-book-xx.json** `DEPRECATED`: versão antiga das notas de rodapé do *Paramony* no formato JSON.
    * **kml**: arquivos KML e arquivos CSV usados ​​para gerar os mapas, cada um dentro de uma pasta para cada idioma (`en`, `es`, etc.).
    * **markdown**:
      * **paramony**: Contém a versão mais recente do Paramony. Anteriormente, os arquivos JSON eram usados, mas agora os arquivos Markdown são usados. Os arquivos para o idioma inglês contêm as tabelas principais; arquivos para outros idiomas são apenas traduções.
      * **outras pastas**: Arquivos de Markdown temporários para artigos e livros, pois são obtidos a partir de uma conversão de formatos PDF/DOCX ou de digitalização, cada um dentro de uma pasta para cada idioma (`en`, `es`, etc.) . O conteúdo aqui não é mantido desde que seja limpo e movido para a pasta de saída.
      * **3dmodels_catalog.md**: catálogo de modelos 3D. O arquivo para o idioma inglês contém as tabelas principais; arquivos para outros idiomas são apenas traduções.
      * **image_catalog.md**: catálogo de imagens. O arquivo para o idioma inglês contém as tabelas principais; arquivos para outros idiomas são apenas traduções.
    * **mediawiki** `DEPRECATED`: pasta com arquivos antigos em formato Wikitexto para MediaWiki. A primeira versão do *Urantiapedia* foi feita para o MediaWiki, mas a atual é criada com o *Wiki.js*.
        * **articles-xx**: pastas antigas para amostras de artigos em formato Wikitexto.
        * **main-pages-xx**: pastas antigas com conteúdo de ajuda no formato Wikitexto.
        * **modules**: módulos escritos em Lua, a linguagem de script com a qual criar modelos para o MediaWiki.
        * **sample**: conteúdo de amostra antigo em formato Wikitexto.
        * **templates**: templates para a *Urantipedia*, que são fragmentos em formato MediaWiki que podem ser reutilizados.
    * **tex**: pasta com os arquivos em formato LaTeX.
        * **bible-xx**: traduções da *Bible* no formato LaTeX (`bible-es`,` bible-en`, etc.)
    * **txt**: pasta com os arquivos no formato TXT.
        * **articles-xx**: alguns exemplos de artigos em formato TXT (`articles-es`,`articles-en`, etc.).
        * **bible-refs-xx** `DEPRECATED`: versão antiga do Paramony (referências cruzadas da Bíblia para o Livro de Urântia) em formato TXT (`bible-refs-es`,`bible-refs-en`, etc.) .
        * **topic-index-xx**: traduções do *Topic Index* no formato TXT (`topic-index-es`,`topic-index-en`, etc.)
- **output**: pasta contendo arquivos de saída que serão carregados em massa no site *Urantipedia*.
    * **wikijs**: pasta com o conteúdo em formatos compatíveis com *Wiki.js*.
        * **xx**: O conteúdo de cada idioma está em sua própria pasta (`en`, `es`, etc.). A estrutura para cada idioma é a mesma, e é a seguinte:
            * **article**: Artigos, organizados em pastas por autor. Eles geralmente estão no formato Markdown.
            * **Bible**: conteúdo bíblico. IMPORTANTE: os arquivos desta pasta *não devem ser editados*. Em vez disso, os arquivos na pasta `input` devem ser atualizados e então usar *Urantiapedia Tools*.
            * **book**: Livros, organizados em pastas por autor. Eles geralmente estão no formato Markdown.
            * **help**: páginas de ajuda da Urantiapedia. No formato Markdown.
            * **index**: índices. IMPORTANTE: alguns arquivos nesta pasta, não todos, *não devem ser editados*. Em vez disso, eles são gerados usando *Urantiapedia Tools*.
            * **map**: mapas. Por enquanto eles estão no formato Markdown com um *iframe* que vincula o Google Maps, mas futuramente aqui só armazenaremos os arquivos KML.
            * **news**: notícias mensais do projeto em formato Markdown.
            * **The_Urantia_Book**: Os papéis do Livro de Urântia. IMPORTANTE: os arquivos desta pasta *não devem ser editados*. Em vez disso, os arquivos na pasta `input` devem ser atualizados e então usar *Urantiapedia Tools*.
            * **topic**: Índice de tópicos.
        * **image**: Imagens para o site.

As pastas marcadas como obsoletas podem ser ignoradas porque contêm material que não está mais sendo usado no processo e certamente será eliminado no futuro.

Os códigos de idioma a serem utilizados nas pastas devem seguir a norma ISO 639-1 com duas letras para cada idioma. https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

As únicas pastas com as quais os "Editores-chefes" precisam se preocupar são as seguintes:
- `input/html`
- `input/json`
- `input/markdown`
- `input/tex`
- `input/txt`

Deve-se ter em mente que atualmente existem três traduções na língua espanhola. Todas as três traduções estarão disponíveis em *Urantiapedia*. Por esse motivo, haverá essas pastas:
- `book-es`, com a chamada tradução européia, feita em 2009;
- `book-es-1993`, com a primeira tradução espanhola feita em 1993;
- `book-es-2021`, com a nova tradução feita em 2021.

## Fluxo de trabalho de conteúdo

Para cada idioma a ser incorporado em *Urantiapedia*, a seguinte entrada será usada:
- Uma tradução oficial do *O Livro de Urântia*, ou o original para o inglês, em formato HTML. Este conteúdo será deixado na pasta `input/html/book-xx` do projeto no GitHub, onde `xx` é o código de duas letras para o idioma (`es` = espanhol, `en` = inglês, etc .). No caso da língua espanhola, como existem várias traduções, `book-es` conterá a chamada edição européia, `book-es-1993` a tradução de 1993 e `book-es-2021` a tradução de 2021 .
- Uma tradução livre de direitos autorais de *A Bíblia*, o mais padrão possível e no idioma em questão. O formato será LaTeX e os arquivos serão deixados na pasta `input/tex/bible-xx` do projeto GitHub, onde `xx` é o código do idioma.
- Uma cópia de *Paramony* em um idioma em que já esteja traduzido, por exemplo, em espanhol. O Paramony é uma referência cruzada entre *A Bíblia* e *O Livro de Urântia* encontrado em `input/markdown/en/paramony`. Ele foi criado usando o relacionamento de referência cruzada desenvolvido por Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), convertido de seu formato TXT original para um formato Markdown que é mais fácil de processar. Em inglês estão as tabelas com as informações originais; nas restantes línguas, simplesmente copiamos os textos a traduzir.
- Uma cópia do *Topic Index* em inglês. Este índice é composto por uma coleção de arquivos encontrados na pasta `input/txt/topic-index-en`. Esses arquivos TXT são derivados do apêndice da edição *Urantia Fellowship* do *O Livro de Urântia* ([Topic Index](https://urantia-book.org/urantiabook/topical_index/index.htm)), ao qual nos referiremos doravante como *Índice de Tópicos*. Este *Índice de tópicos* foi convertido em um grupo de arquivos TXT, um para cada letra do alfabeto, com tópicos que começam com cada letra em inglês. A cópia deve ser renomeada modificando as duas últimas letras pelas do código do idioma. Por exemplo, para francês, crie uma cópia da pasta em inglês e chame essa cópia como `input/txt/topic-index-fr`.

Em resumo, para o exemplo do idioma francês, o conteúdo a ser criado como entrada seria:

```
input
    html
        book-fr
            *.html
    markdown
        fr
            paramony
                *.md
    tex
        bible-fr
            *.tex
    TXT
        topic-index-fr
            *.txt
```
Para qualquer outro idioma, seria feito de maneira semelhante. Parte desse conteúdo pode já estar disponível no projeto atual no GitHub. É conveniente revisar o que existe antes de adicionar novo conteúdo.

A saída que a entrada francesa anterior gerará seria assim:

```
output
    wikijs
        fr
            Bible
                (pastas com livros bíblicos)
                    *.html
            index
                *.html
            The_Urantia_Book
                *.html
            topic
                *.html
```

Todas as pastas indicadas acima para a pasta `output` são criadas usando *Urantiapedia Tools*, que espera que algumas pastas existam na pasta `output`.

> Devido a alguns problemas ao salvar artigos em inglês ao mesmo tempo pelo site e pelo GitHub, a pasta de artigos em inglês não fica dentro da subpasta `en` (a pasta para todo o conteúdo em inglês). Em vez disso, ele está localizado em `output\wikijs\article`, no mesmo nível das pastas de cada idioma. Isso não afeta o resto dos idiomas. No futuro, este problema será resolvido e a pasta de artigos em inglês retornará dentro da subpasta `en`.
{.is-aviso}

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
        <td><a href="/pt/help/github_setting">Configurando o projeto GitHub</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_paramony">Tradução de Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>