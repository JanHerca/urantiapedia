---
title: "Obtenção de livros supostamente usados ​​por reveladores"
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
        <td><a href="/pt/help/github_sourcebooks_catalog">Criação de um catálogo de livros supostamente usados ​​por reveladores</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_topicindex">Tradução e revisão da Enciclopédia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Isto descreve como obter livros que deveriam ser fontes de *O Livro de Urântia* ou que tenham algum relacionamento ou paralelo com *O Livro de Urântia*, e que foram catalogados seguindo a tarefa [Criar um catálogo de livros «fonte»](/pt/help/github_sourcebooks_catalog).

## Processo

Esta tarefa consiste em tentar localizar na Internet uma versão digital de cada livro, baixá-la e processá-la até obter um ou vários arquivos em formato [Markdown](/pt/help/markdown).

Estas situações podem ocorrer:
- O livro não é encontrado em nenhum site para download como digital. Você pode considerar comprar uma cópia em papel, se estiver disponível, ou tentar obtê-la em uma biblioteca pública para digitalizá-la.
- O livro foi encontrado, mas não pode ser baixado, só pode ser lido online. Normalmente você pode fazer capturas de tela de cada página ou hackear a web para baixar os scans. Estamos usando o [software de captura Greenshot](https://getgreenshot.org/) para essa finalidade, mas qualquer outro software pode ser usado.
- O livro pode ser baixado, mas em forma de imagens ou em PDF onde não há texto. Você precisará usar um software de reconhecimento de caracteres (OCR). Veja abaixo.
- O livro pode ser baixado em PDF com texto, ou melhor ainda, como arquivo de texto ou como página da web. Este é o ideal em todos os casos. Se estiver disponível apenas em PDF, deverá ser convertido para texto (veja abaixo).

### Baixar livro

Para obter livros digitais algumas fontes podem ser:
- [Google Livros](https://books.google.es/)
- [Internet Archive - Livros](https://archive.org/details/books)
- [Projeto Gutenberg](https://www.gutenberg.org/)

Seja qual for o caso em que nos encontremos, a tarefa será anotar o endereço web de onde conseguimos baixar o livro e baixá-lo para o nosso PC. Então seria conveniente enviar um e-mail para urantiapedia@gmail.com indicando os endereços web de todos os livros obtidos. *Administradores* estão criando um repositório na nuvem para todos os arquivos grandes que não têm lugar no GitHub. Os livros originais, que às vezes são PDFs muito grandes, estão sendo deixados lá para evitar problemas caso os sites dos quais foram baixados não estejam mais acessíveis no futuro.

Uma vez convertido o arquivo do livro em arquivo texto, a tarefa será processar o livro até obter um conjunto de arquivos no formato [Markdown](/pt/help/markdown), um arquivo para cada capítulo, prefácio ou apêndice ao o livro.

Para qualquer modificação de pastas e arquivos no GitHub, as instruções fornecidas aos usuários [Administradores](/pt/help/admin), [Editores Chefes](/pt/help/github) ou [Editores Assistentes](/pt/help/github_assistant) deve ser seguido.

### Direitos autorais

Tudo sobre _Copyright_ na seção [Obtenha livros de todas as religiões](/pt/help/github_religious_books_markdown) deste manual também se aplica aqui.

### Digitalize livros com um OCR

Se você precisar digitalizar um livro, consulte a seção [Obtenha livros de todas as religiões](/pt/help/github_religious_books_markdown) deste manual e siga as mesmas etapas.

### Conversão de PDF para Markdown

Caso seja necessário converter um PDF para Markdown, consulte a seção [Obter livros de todas as religiões](/pt/help/github_religious_books_markdown) deste manual e siga os mesmos passos.

## Estrutura de um livro sobre Urântiapédia

Já indicamos na [tarefa anterior](/pt/help/github_sourcebooks_catalog) como os livros "fonte" estão organizados em estantes e grupos, e onde você pode consultar a lista de todos os livros planejados.

Os livros devem ser salvos nestas pastas de projeto do GitHub: `/output/wikijs/en/book` para livros em inglês, `/output/wikijs/es/book` para livros em espanhol, etc. Dentro dessas pastas criaremos outra, caso não exista, com o nome do autor (com espaços em branco substituídos por sublinhados). Por fim, dentro da pasta do autor, criaremos uma pasta para cada livro, para onde irão os capítulos, e um arquivo Markdown com o mesmo nome da pasta, para onde irá a capa do livro. Por exemplo, a pasta `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us` contém os capítulos de um livro sobre astronomia, e o arquivo `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us.md` é o de a capa desse livro.

Em relação aos nomes das pastas, estas instruções devem ser levadas em consideração:
- Devem ser únicos dentro de cada pasta e devem conter sempre três caracteres ou mais.
- Caso se preveja que o livro fará parte de uma coleção (volume 1, 2, etc.), adicionar o sufixo `_1`, `_2`, etc. (até um máximo de 9 volumes), ou `_01 `, `_02` (se mais de 9 volumes forem planejados).
- O nome da pasta não deve conter espaços em branco ou hífens, que devem ser substituídos por sublinhados (`_`).
- O nome utilizará o título do livro, mas o mais abreviado possível.
- O nome estará sempre em inglês, portanto caso o livro original não esteja em inglês o título é traduzido.
- Caracteres raros, como dois pontos, apóstrofos ou exclamações, são removidos.
- Por exemplo, se o título de um livro for *Será que Jesus existiu?* a pasta desse livro se chamaria `Será que Jesus_existiu`. Se o título fosse *Princípios de Teologia* (livro cujo original estava em espanhol), a pasta seria `Princípios_de_Teologia`.
- Os mesmos nomes de pasta serão sempre usados ​​para todos os idiomas. Por exemplo, a pasta para o exemplo acima em inglês é `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us` e para espanhol é `/output/wikijs/es/book/Sir_James_Jeans/The_Universe_Around_Us` (NO ES ~~ `/output/wikijs/es/book/Sir_James_Jeans/El_Universo_que_nos_surdea`~~). Ou seja, a única coisa que muda na URL entre os diferentes idiomas é o código do idioma (`en`, `es`, etc.). Isto facilita muitas operações com as rotas em Urântiapedia.

Cada capítulo será um arquivo dentro da pasta do livro chamado `xx.md` onde `xx` será:
- Um número de 0 a N com o número do capítulo (sem título, apenas o número). O zero é reservado para um prólogo ou introdução em que o próprio autor não tenha utilizado um número para numerá-lo. Se não houver prólogo ou introdução, o primeiro capítulo será `1.md`, o segundo será `2.md`, etc.
- `Index` para a página de índice, que será `Index.md`. Esta página às vezes pode ser omitida se o índice não for muito longo e incluir o índice na página de rosto.
- `Preface` para a página com o prefácio, se houver, que permanecerá como `Preface.md`.
- Os apêndices devem ser nomeados como `Appendix_xx` onde `xx` segue uma numeração de 1 a N.

Um exemplo de livro finalizado pode ser visto em `/output/wikijs/es/book/Sir_James_Jeans/The_Universe_Around_Us`.

## Formato básico de um livro sobre Urântiapédia

O formato a utilizar é o Markdown, que é extremamente simples de formatar em comparação com outras alternativas.

De todo o formato [Markdown](/es/help/markdown), que é bastante extenso, um contribuidor que adiciona um livro "fonte" à Urantiapedia certamente não terá que se preocupar com nada além de adicionar essas coisas (a lista é detalhada abaixo) :
- Um cabeçalho em cada arquivo.
- Imediatamente abaixo do cabeçalho, indicação do autor.
- Seções dentro de cada capítulo.
- Parágrafos corretamente separados.
- Negrito e itálico.
- Outros.
- Marcas de salto de página.
- Imagens.
- Referências a imagens.
- Notas de rodapé.
- Tabelas.
- Fórmulas matemáticas ou caracteres em notação científica.
- Links de navegação.

Parece muita coisa, mas a verdade é que o Markdown é muito simples e pode ser aprendido em menos de uma hora. Nas seções seguintes explicaremos um pouco cada uma das coisas da lista anterior.

### Cabeçalho de cada arquivo

Este é um exemplo de cabeçalho a ser adicionado:

```
---
title: "The Universe Around Us — Chapter I — Exploring the Sky"
description: 
published: true
date: 2021-11-28T14:02:03.086Z
tags: Cosmology, Astronomy
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---
```
Deve ser copiado como está aqui e substituir apenas os valores que seguem os dois pontos. O título é melhor colocado entre aspas, e deve ser formado a partir do título do livro, e separado por hífen, do título do capítulo, incluindo seu número.

Não é necessário colocar nada na descrição.

A data de criação e a data atual devem ser a data de criação do arquivo. A hora não é relevante.

Em _tags_ você deve colocar tags, separadas por vírgulas, que foram estabelecidas para aquele livro. Uma lista completa de tags usadas na Urantiapedia está disponível aqui: [Tags on Urantiapedia](https://github.com/JanHerca/urantiapedia/blob/master/docs/tags.md?plain=1). Podem ser deixados em branco porque é muito rápido preenchê-los todos de uma vez em todas as fichas do livro. Algumas recomendações são estas:
- As etiquetas devem ser **obrigatoriamente em inglês**. A opção de tags traduzidas não está atualmente disponível em [Wiki.js](https://js.wiki/), o software usado pela Urantiapedia.
- O rótulo não importa se está em letras maiúsculas ou minúsculas. `book` e `Book` são a mesma tag. Na verdade, todos eles são mostrados em letras minúsculas na Urantiapedia: [Pesquisar por tags](https://urantiapedia.org/t). Todas as tags existentes também são exibidas nesta página.
- Pelo menos todos os arquivos de um livro devem ter a tag `book` indicando que se trata de um conteúdo da Biblioteca.
- Pelo menos um rótulo da estante a que pertence o livro: `Theology`, `Philosophy`, `Science`.
- Para livros de ciências você pode adicionar mais um rótulo com a disciplina. Alguns dos já criados são: `Anthropology`, `Archaeology`, `Astronomy`, `Biology`, `Chemistry`, `Chronology`, `Cosmology`, `Evolutionism`, `Genetics`, `Geography`, `Geology`, `History`, `Linguistics`, `Mathematics`, `Medicine`, `Paleontology`, `Pedagogy`, `Physics`, `Politics`, `Psychiatry`, `Psychology`, `Sociology`.
- Caso não exista uma tag e você queira adicioná-la, basta adicioná-la no cabeçalho de qualquer arquivo e essa tag será criada.

### Autor

Abaixo do cabeçalho, sempre adicione uma linha de autor, assim:

```
<p class="v-card v-sheet theme--light grey lighten-3 px-2">Sir James Jeans, M. A., D. Sc., Sc. D., LL. D., F. R. S.</p>
```

É comum no mundo de língua inglesa colocar os títulos acadêmicos do autor após o nome, separados por vírgulas.

### Marcas de seção

Se um capítulo tiver seções, elas deverão ser marcadas da seguinte forma:

```
## O Sistema Solar

### O Sol

### Os Planetas
```

As seções de primeiro nível sempre serão marcadas como `##`, as seções de próximo nível como `###` e assim por diante. Não é muito conveniente usar mais de quatro níveis, mesmo que o livro o faça. Como você pode ver, não usamos seções com a marca `#` porque elas criam títulos de seção muito grandes.

### Parágrafos corretos

Um parágrafo é uma linha dentro do arquivo Markdown e deve ter uma linha em branco antes e depois. Deve-se garantir que isso ocorra em cada parágrafo. Caso o texto seja poético, os versos das estrofes podem ser mantidos juntos e conter apenas uma linha em branco antes e depois da estrofe.

### Negrito e itálico

Eles são adicionados conforme indicado:

```
Este é um texto em um parágrafo *com alguns itálicos*.

Este é um **novo parágrafo** que tem algo em negrito.

Você também pode usar sublinhados para exibir _itálico_ ou __bold__.
```

Como você pode ver, um asterisco ou travessão significa itálico e dois significa negrito.

### Citaçãos

Se o autor citar um texto, essa citação deverá ser destacada da seguinte forma:

```
Como já disse o grande Sêneca:

> «Não há vento favorável para quem não sabe para onde vai».
```

Basta adicionar a marca `>` e separar a citação com um espaço.

Se a citação for longa e tiver vários parágrafos, ela pode ser escrita assim:

```
Em vários lugares Cícero comenta sobre isso:

> Mas para que vocês possam ver de onde vem todo esse erro nascido daqueles que acusam o prazer e elogiam a dor, vou expor todo o assunto e explicar exatamente as coisas que foram ditas por aquele descobridor da verdade e, por assim dizer, pelo arquiteto. de uma vida feliz.
> 
> Mas, na verdade, ambos acusamos e com justo ódio trazemos aqueles que merecem, que são amolecidos e corrompidos pela lisonja dos prazeres presentes, cegos pela ganância pelas dores e problemas que estão prestes a experimentar, e não os sustentam.
```

Observe que colocamos um `> ` com um espaço depois em cada linha separadora de parágrafo.

### Marcas de salto de página

Como ao converter cada capítulo de um livro em uma página web perdemos a informação de onde ele foi passado de uma página para outra, é conveniente adicionar uma marca que indique isso, para ter uma forma de referenciar as páginas de cada livro , visto que esses livros que processamos nesta tarefa não são livros bíblicos, que possuem uma divisão padrão em versículos.

A marca de página deve ser incluída entre as palavras nas quais você passa de uma página para outra da seguinte forma:

```
Além dos asteróides vêm os quatro grandes planetas Júpiter, Saturno, Urano e Netuno, todos eles muito maiores que a Terra. Júpiter, o maior, tem, segundo Sampson, um diâmetro de 88.640 milhas [142.652 km], ou <span id="p18">[<sup><small>p. 18</small></sup>]</span> mais de onze vezes o diâmetro da terra; Mil e quatrocentos corpos do tamanho da Terra poderiam ser acondicionados dentro de Júpiter e deixar espaço de sobra. Saturno, o próximo na ordem, perde apenas para Júpiter em tamanho, com um diâmetro de cerca de 112.654 km. Esses dois são de longe os maiores dos planetas.
```

Você pode ver que a marca é: `<span id="p18">[<sup><small>p. 18</small></sup>]</span>`.

Como esta tarefa pode ser entediante, uma forma de simplificá-la pode ser colocar uma marca alternativa mais curta, como `ppp18` (`ppp` é um texto que sabemos que nunca acontecerá), para continuar com o exemplo anterior. Depois você pode procurar essas marcas e substituí-las pelas definitivas automaticamente, conforme indicamos em outro exemplo acima. Ou seja, isso também seria válido:

```
Além dos asteróides vêm os quatro grandes planetas Júpiter, Saturno, Urano e Netuno, todos eles muito maiores que a Terra. Júpiter, o maior, tem, segundo Sampson, um diâmetro de 88.640 milhas [142.652 km], ou ppp18, mais de onze vezes o diâmetro da Terra; Mil e quatrocentos corpos do tamanho da Terra poderiam ser acondicionados dentro de Júpiter e deixar espaço de sobra. Saturno, o próximo na ordem, perde apenas para Júpiter em tamanho, com um diâmetro de cerca de 112.654 km. Esses dois são de longe os maiores dos planetas.
```

### Imagens

As imagens devem ser incluídas assim:

```
<figure id="Universe_plate_01" class="image urantiapedia">
<img src="/image/book/Sir_James_Jeans/The_Universe_Around_Us/plate_01.png">
<figcaption><em><b>Lámina I.</b> Carta de Franklin-Adams, La Vía Láctea en el vecindario de la Cruz del Sur</em></figcaption>
</figure>
```

Você pode copiar o exemplo anterior onde uma imagem é necessária e substituir apenas o seguinte:
- Onde diz `id="Universe_plate_01"` deve ser um identificador único para a imagem. Você pode colocar qualquer um, desde que não haja dois idênticos no mesmo arquivo de cada capítulo.
- Onde diz `src="..."` deve haver um caminho para o arquivo de imagem. O caminho deve sempre começar com `/image/`, que é onde estão todas as imagens, e atrás dele deve haver um caminho idêntico ao que temos para o livro. Ou seja, seguindo o exemplo, como o livro está localizado em `/es/book/Sir_James_Jeans/The_Universe_Around_Us`, as imagens desse livro devem estar em `/image/book/Sir_James_Jeans/The_Universe_Around_Us`. O nome do arquivo de cada imagem pode ser qualquer que seja curto, indicando sempre a extensão (`.png` ou `.jpg`). Recomenda-se que o nome do arquivo não contenha espaços em branco ou caracteres especiais, apóstrofos ou acentos.
- Se a imagem possuir legenda ela deverá ser colocada dentro da tag `figcaption`.
- Se você quiser alinhar a imagem à esquerda, centro ou direita você deve substituir `class="image urantiapedia"` por `class="image urantiapedia image-style-align-left"`, `class="image urantiapedia image-style-align-center"` e `class="image urantiapedia image-style-align-right"`, respectivamente. Alguns parágrafos abaixo você deve adicionar uma linha com `<br style="clear:both;"/>` para que o alinhamento não afete mais o posicionamento do texto.

Como essa tarefa de incluir imagens pode ser entediante, você pode usar um truque como os mencionados anteriormente. Se nenhuma imagem tiver rodapé, você pode colocar algo como `fff18` (ou `fffl18`, `fffc18`, `fffr18`) como forma de simplificar que vai uma imagem com o número 18 (e até alinhada ).

### Referências a imagens

Quando o texto menciona uma imagem, é uma boa ideia colocar um link interno para essa imagem. Por exemplo, continuando com a imagem mostrada acima, para incluir uma referência ficaria assim:

```
...cada um deles muito fraco para ser visto individualmente sem auxílio telescópico (veja [Placa I](#Universe_plate_01)).

...como já vimos na [Placa VIII](/pt/book/Sir_James_Jeans/The_Universe_Around_Us/#Universe_plate_01) do capítulo anterior...
```

A sintaxe `[Plate I](#Universe_plate_01)` é a maneira de adicionar hiperlinks no Markdown. O texto exibido é indicado entre colchetes e o caminho da web é indicado logo atrás dele, entre parênteses. Quando a imagem estiver no mesmo capítulo, basta colocar `#` e depois o identificador. Se a imagem estiver em outro capítulo a sintaxe deve ser algo como `[Plate I](/image/book/Sir_James_Jeans/The_Universe_Around_Us/3#Universe_plate_01)`. Neste exemplo apontamos para a figura 1 que está no capítulo 3.

### Notas de rodapé

Se o livro tiver notas de rodapé, ou notas de final de capítulo, ou notas globais que aparecem no final do livro, mas para as quais é colocada uma marca no livro por um número ou indicação, essas marcas de anotação serão sempre convertidas em notas de rodapé de capítulo, conforme segue:

```
O fato de Altair e Saturno parecerem igualmente brilhantes no céu só pode significar que Altair está 80.000 vezes mais distante que Saturno[^1].

. . .

[^1]: Porque o brilho aparente de um objeto cai com o inverso do quadrado de sua distância, e o quadrado de 80.000 é aproximadamente igual a 6 bilhões.
```

As notas de rodapé são sempre marcadas como um número consecutivo começando com 1 e são escritas como `[^1]`, `[^2]`, etc. O caracter `^` é digitado no teclado usando `Shift + [` e pressionando espaço.

A nota de rodapé tem duas partes: uma é a indicação, que fica logo no texto, e a outra é a nota propriamente dita, que fica no final, atrás de tudo, no arquivo, cada nota com a sua marca, depois uma dois pontos e, em seguida, o texto e cada nota separada uma da outra por uma linha em branco. É conveniente colocar uma seção `## Notas` para as notas, que como já foi dito deve sempre ir no final de tudo, inclusive dos links de navegação.


### Tabelas

Criar tabelas é sempre uma tarefa complexa em qualquer software de escritório. Markdown facilita a criação de tabelas, mas ainda é uma tarefa complexa quando a tabela possui células aninhadas, textos alinhados, etc.

Por exemplo, é muito fácil criar uma tabela com duas colunas simplesmente usando o caractere “barra vertical” (“|”):

```
Idades | Tempo
--- | ---:
Idade da terra | cerca de 2.000.000.000 de anos
Idade da vida na terra | „ 300.000.000 „
Idade do homem na terra | „ 300,000 „
Era da ciência astronômica | „ 3,000 „
Era da astronomia telescópica | „ 300 „
```
Para alinhar a coluna à esquerda, à direita ou ao centro, basta utilizar os caracteres `---`, `---:` e `:---:`, respectivamente, como visto no exemplo.

Para tabelas que requerem múltiplas linhas por célula, você pode usar `<br>` como separador. Por exemplo:

```
Comprimentos de onda (cms.) | Natureza da radiação | Efeito no átomo | Temperatura (graus absolutos) | Onde está localizado
--- | --- | --- | --- | ---
7500 x 10^-8^<br>a<br>3750 x 10^-8^ | Luz visível | Perturba os elétrons mais externos | 3.850°<br>a<br>7.700° | Atmosferas estelares
250 x 10^-8^<br>a<br>10^-8^ | radiografias | Perturba elétrons internos | 115.000°<br>a<br>29.000.000° | Interiores estelares
```

Se quiser saber mais sobre como formatar tabelas no Markdown você pode consultá-lo aqui: [Ajuda de formatação do Markdown](/pt/help/markdown), nas seções _Tabelas_ e _Tabelas Avançadas_. Tabelas complexas podem ser criadas de forma muito simples com Markdown. Se a tabela não puder ser criada em Markdown devido à sua complexidade, ela sempre poderá ser criada usando a sintaxe HTML. Vale lembrar que Markdown é uma forma alternativa de escrever HTML, mas também suporta qualquer conteúdo HTML. Você tem um bom tutorial sobre como criar tabelas HTML no Mozilla Docs: [Noções básicas sobre tabelas HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics).

Vale lembrar que as tabelas são mal lidas em dispositivos móveis quando sua largura é maior que a largura da tela. Para evitar este inconveniente, quando a tabela possui mais de duas colunas, é aconselhável encerrar a tabela em um container com rolagem lateral, conforme mostrado neste exemplo:

```
<div class="urantiapedia-table-wrapper">

Comprimentos de onda (cms.) | Natureza da radiação | Efeito no átomo | Temperatura (graus absolutos) | Onde está localizado
--- | --- | --- | --- | ---
7500 x 10^-8^<br>a<br>3750 x 10^-8^ | Luz visível | Perturba os elétrons mais externos | 3.850°<br>a<br>7.700° | Atmosferas estelares
250 x 10^-8^<br>a<br>10^-8^ | radiografias | Perturba elétrons internos | 115.000°<br>a<br>29.000.000° | Interiores estelares

</div>
```

### Fórmulas matemáticas ou caracteres em notação científica

Criar fórmulas matemáticas ou utilizar caracteres em notação científica é sempre uma tarefa complexa em qualquer software de escritório. O Markdown facilita a sua criação, mas ainda é uma tarefa complexa dependendo das fórmulas ou caracteres a utilizar porque na realidade a sintaxe utilizada é [LaTeX](https://es.wikipedia.org/wiki/LaTeX) através de uma extensão do Markdown chamado [Mathjax](https://www.mathjax.org/).

Se quiser saber mais sobre como formatar fórmulas e textos científicos no Markdown você pode consultá-lo aqui: [Ajuda de formatação do Markdown](/pt/help/markdown), na seção _Expressões matemáticas (Mathjax)_.

### Links de navegação

Esses links estão em uma tabela simples no início e no final de cada capítulo e permitem que você passe facilmente de um capítulo para outro ou vá até o índice. Eles deveriam ser como o exemplo a seguir:

```
<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us/1">
            <span class="mdi mdi-arrow-left-drop-circle"></span><span class="pl-2">Capítulo I — Explorando el cielo</span>
          </a>
        </td>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us#índice">
            <span class="mdi mdi-book-open-variant"></span><span class="pl-2">Índice</span>
          </a>
        </td>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us/3">
            <span class="pr-2">Capítulo III — Explorando en el tiempo</span><span class="mdi mdi-arrow-right-drop-circle"></span>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</figure>
```

Como dito antes, a última coisa no arquivo deve ser sempre a seção de notas, se houver, mesmo abaixo desses links de navegação.

## Criando um arquivo de capa

Para criar o arquivo de capa, é usado tudo o que está indicado na seção [Obter livros de todas as religiões](/pt/help/github_religious_books_markdown) deste manual. Como já dito, a capa será um arquivo Markdown com o mesmo nome da pasta com os capítulos. Por exemplo, a pasta `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us` contém os capítulos de um livro sobre astronomia, e o arquivo `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us.md` é o de a capa desse livro.

## Envio de solicitações de mudança

Isso completa todas as coisas que você deve ter em mente ao adicionar livros “fonte” à Biblioteca Urantipedia. Depois que essas alterações forem feitas no projeto GitHub, uma solicitação de alteração deverá ser feita conforme detalhado nos manuais para usuários [Administradores](/pt/help/admin), [Editores-chefes](/pt/help/github ) ou [Editores Assistentes](/pt/help/github_assistant).


## Links externos

- [Ferramentas Urantiapedia - projeto no GitHub](https://github.com/JanHerca/urantiapedia)
- [Google Livros](https://books.google.es/)
- [Internet Archive - Livros](https://archive.org/details/books)
- [Projeto Gutenberg](https://www.gutenberg.org/)
- [Ajuda do formato Markdown](/es/help/markdown)

<br>


<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_sourcebooks_catalog">Criação de um catálogo de livros supostamente usados ​​por reveladores</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_topicindex">Tradução e revisão da Enciclopédia</a></td>
      </tr>
    </tbody>
  </table>
</figure>