---
title: "Obtenha livros de todas as religiões"
description:
published: true
date: 2024-10-10T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2024-10-10T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_religious_books_catalog">Criando um catálogo de livros de todas as religiões</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_sourcebooks_catalog">Criação de um catálogo de livros supostamente usados ​​por reveladores</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Descreve como obter os livros de todas as religiões e como carregá-los na [Biblioteca Urântiapedia](/pt/book). Na tarefa anterior foi criado um catálogo desses livros para servir de guia.

## Processo

Esta tarefa consiste em tentar localizar na Internet uma versão digital de cada livro, baixá-la e processá-la até obter um ou vários arquivos em formato [Markdown](/pt/help/markdown).

Estas situações podem ocorrer:
- O livro não é encontrado em nenhum site para download como digital. Você pode considerar comprar uma cópia em papel, se estiver disponível, ou tentar obtê-la em uma biblioteca pública para digitalizá-la.
- O livro foi encontrado, mas não pode ser baixado, só pode ser lido online. Normalmente você pode fazer capturas de tela de cada página ou hackear a web para baixar os scans. Estamos usando o [software de captura Greenshot](https://getgreenshot.org/) para essa finalidade, mas qualquer outro software pode ser usado.
- O livro pode ser baixado, mas em forma de imagens ou em PDF onde não há texto. Você precisará usar um software de reconhecimento de caracteres (OCR). Veja abaixo.
- O livro pode ser baixado em PDF com texto, ou melhor ainda, como arquivo de texto ou como página da web. Este é o ideal em todos os casos. Se estiver disponível apenas em PDF, deverá ser convertido para texto (veja abaixo).

### Baixar livro

Para obter livros religiosos digitais, algumas fontes podem ser:
- [Textos sagrados](https://archive.sacred-texts.com)
- [Google Livros](https://books.google.es/)
- [Internet Archive - Livros](https://archive.org/details/books)
- O software [e-Sword](https://www.e-sword.net/)

Seja qual for o caso em que nos encontremos, a tarefa será anotar o endereço web de onde conseguimos baixar o livro e baixá-lo para o nosso PC. Então seria conveniente enviar um e-mail para urantiapedia@gmail.com indicando os endereços web de todos os livros obtidos. *Administradores* estão criando um repositório na nuvem para todos os arquivos grandes que não têm lugar no GitHub. Os livros originais, que às vezes são PDFs muito grandes, estão sendo deixados lá para evitar problemas caso os sites dos quais foram baixados não estejam mais acessíveis no futuro.

Uma vez convertido o arquivo do livro em arquivo texto, a tarefa será processar o livro até obter um conjunto de arquivos no formato [Markdown](/pt/help/markdown), um arquivo para cada capítulo, prefácio ou apêndice ao o livro.

Para qualquer modificação de pastas e arquivos no GitHub, as instruções fornecidas aos usuários [Administradores](/pt/help/admin), [Editores Chefes](/pt/help/github) ou [Editores Assistentes](/pt/help/github_assistant) deve ser seguido.

### Direitos autorais

Os livros que podem ser carregados na Urântiapédia devem estar livres de direitos autorais, que tenham entrado em [domínio público](https://pt.wikipedia.org/wiki/Dom%C3%ADnio_p%C3%BAblico). Isto significa que as edições modernas da Bíblia ou de outros livros religiosos não podem ser usadas. Infelizmente, estas edições recebem atualizações mínimas por parte dos editores que implicam uma aquisição de direitos, ainda que se trate de textos milenares ou centenários que nunca tiveram estas limitações legais no passado.

Esta situação deplorável não deve ser negligenciada mesmo num site sem fins lucrativos como o Urantiapedia. Não importa que tipo de projeto estamos fazendo. Um autor ou editor de uma obra pode sentir que seus direitos e compensação financeira estão diminuídos e processar a administração da Urantiapedia por uso indevido de obras.

Os livros passam a ser de domínio público dependendo da legalidade vigente no país de origem do autor ou da edição.

Nos Estados Unidos, todas as obras publicadas ou transmitidas pela primeira vez antes de 1º de janeiro de 1929 perderam a proteção de direitos autorais 95 anos depois, a partir de 1º de janeiro de 2024. Da mesma forma, as obras publicadas em 1929 entrarão no domínio público a partir de 1º de janeiro de 2025, e isso o ciclo se repetirá até que os trabalhos publicados em 1977 entrem em domínio público em 1º de janeiro de 2073. Os trabalhos de autoria corporativa continuarão a cumprir o prazo de noventa e cinco anos a partir da data de 2073. De acordo com a atual lei de direitos autorais, começando em 2049, 1978 e. além disso, obras de criadores que morreram sete décadas antes expirarão a cada ano. Por exemplo, se um criador morresse em 2002, os direitos autorais de suas obras durariam até o final de 2072 e entrariam em domínio público em 1º de janeiro de 2073. Obras publicadas sem aviso de direitos autorais antes de 1977, bem como aquelas publicadas antes de março 1989 se os direitos autorais não foram registrados dentro de cinco anos a partir da data de publicação, e aqueles publicados antes de 1964 se os direitos autorais não foram renovados 28 anos depois.

Na Espanha são 80 anos se o autor faleceu antes de 7 de dezembro de 1987 ou 70 anos se o autor faleceu depois.

Regra geral, os países têm entre 50 a 100 anos de exploração dos direitos de autor após a sua morte, algo que é estabelecido pela Convenção de Berna.

### Digitalize livros com um OCR

Às vezes, um determinado livro não é digitalizado ou convertido em texto. Para fazer isso, siga estas etapas:

1. Se o livro estiver disponível em um site como archive.org, crie capturas de tela das páginas usando uma ferramenta como [Greenshot](https://getgreenshot.org/), que se integra ao botão `ImpScreen` para agilizar a leitura. criando uma série de instantâneos.
2. Instala [TesseractOCR](https://github.com/UB-Mannheim/tesseract/wiki), gratuito y de código abierto.
3. Instale o [Visual Studio Code](https://code.visualstudio.com/), adicionando a extensão [Powershell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell).
4. Crie algumas pastas, uma com as capturas de tela e outra com os textos.
5. Abra o VS Code na raiz usando o menu _Terminal > Novo Terminal_ e, no **prompt do terminal**, crie um arquivo listando todos os snapshots: `dir *.* > ocr.ps1`
6. Edite o arquivo ps1 com o editor do PowerShell, para que todos os comandos sejam parecidos com isto: `& 'c:\Program Files\Tesseract-OCR\tesseract' ".\snapshots\<filename>.png" " .\ textos\<nome do arquivo>.txt"`
7. Clique no botão `Executar tudo` no editor do PowerShell. Isso cria um arquivo TXT para cada arquivo PNG verificado.
8. Certifique-se de ter a extensão _Combine Files_ ([Combine Files](https://marketplace.visualstudio.com/items?itemName=BateleurIO.vscode-combine-scripts)) no VS Code.
9. Clique com o botão direito na pasta Textos e use _Mesclar Arquivos_. Um arquivo temporário é criado. Copie todo o conteúdo para um arquivo TXT permanente.

Uma maneira mais simples para as últimas etapas:

1. Crie um arquivo (`convert.ps1`) com este conteúdo:

```
Definir localização 'C:\Usuários\Scan'
Obter-ItemFilho -Filtro '*.png' | ParaCada-Objeto {
& 'c:\Arquivos de Programas\Tesseract-OCR\tesseract.exe' $_.Name ($_.BaseName)
}
```

2. Substitua `C:\Users\Scan` pelo caminho real para os arquivos verificados.
3. Proceda conforme indicado no passo 8 acima.

O resultado final será um arquivo TXT com o texto de todos os arquivos de captura de tela. O próximo passo será converter esse arquivo TXT para Markdown (veja abaixo).

### Conversão de PDF para Markdown

Quando um livro digital já está no formato PDF, seja PDF com ou sem texto, existem ferramentas que permitem a conversão direta para Markdown. Algumas ferramentas que estamos usando, em ordem de interesse, são estas:

- [Mathpix](https://mathpix.com/). A ferramenta mais poderosa que encontramos, pois não apenas digitaliza textos e imagens e os converte muito bem em Markdown, mas também digitaliza tabelas e equações matemáticas, tornando-a uma ferramenta ideal para digitalizar livros científicos ou acadêmicos.
- [pdf-to-markdown](https://pdf2md.morethan.io/) ([GitHub](https://github.com/jzillmann/pdf-to-markdown)). Uma API Javascript para conversão de PDF. Existe um site de exemplo.
- [pdf-tools](https://github.com/bsorrentino/pdf-tools). Inspirado em _pdf-to-markdown_.
- [Aspor DPF para MD](https://products.aspose.app/words/es/conversion/pdf-to-md). É um produto que também é vendido como [API](https://github.com/aspose-words/Aspose.Words-for-.NET). Sua documentação está [aqui](https://reference.aspose.com/words/net/).
- [Um conversor online](https://www.onlineocr.net/). Converta não apenas para texto, mas também para MS Word.
- [Dividir PDF por tamanho de arquivo](https://deftpdf.com/split-pdf-by-size). Ferramenta para dividir um PDF em vários arquivos de acordo com o tamanho. Algumas ferramentas não são capazes de funcionar em PDFs muito grandes.


## Estrutura de um livro sobre Urântiapédia

Já indicamos na [tarefa anterior](/pt/help/github_religious_books_catalog) como os livros religiosos são organizados em estantes, grupos e subgrupos, e onde você pode consultar a lista de todos os livros planejados.

As pastas de trabalho devem ser salvas nestas pastas de projeto do GitHub:
- Se for um livro das estantes "Livros Religiosos Judaico-Cristãos (Antigo Testamento)" ou "Livros Religiosos Judaico-Cristãos (Novo Testamento)" os livros devem ser salvos nestas pastas do projeto GitHub: `/output/wikijs/en/Bible` para livros em inglês, `/output/wikijs/es/Bible` para livros em espanhol, etc. Dentro dessas pastas criaremos uma para cada livro, onde irão os capítulos, e um arquivo Markdown com o mesmo nome da pasta, onde irá a capa do livro. Por exemplo, a pasta `/output/wikijs/en/Bible/Genesis` contém os 50 capítulos de Gênesis, e o arquivo `/output/wikijs/en/Bible/Genesis.md` é a capa de Gênesis.
- Se for um livro do resto das estantes de livros religiosos, os livros devem ser salvos nestas pastas do projeto GitHub: `/output/wikijs/en/book` para livros em inglês, `/output/wikijs/es /book` para livros em espanhol, etc. Dentro dessas pastas criaremos outra, caso não exista, com o nome de cada religião:
	- `Judaism`: para livros da estante «Livros religiosos do Judaísmo».
	- `Christianism`: para livros da estante «Escritos Religiosos Cristãos».
	- `Islam`: para livros da estante «Livros religiosos islâmicos».
	- `Buddhism`: para livros da estante «Escritos Religiosos Budistas».
	- `Hinduism`: para livros da estante «Livros Religiosos do Hinduísmo».
	- `Taoism`: para livros da estante «Livros religiosos taoístas».
	- `Bahaism`: para os livros dos «Escritos religiosos del Bahaismo» existentes.
	- `Shikhism`: para livros da estante “Livros religiosos do Sikhismo”.
	- `Shintoism`: para libros del estante «Libros religiosos sintoístas».
	- `Zoroastrianism`: para libros del estante «Libros religiosos del zoroastrismo».
	- `Jainism`: para livros da estante «Livros religiosos do Jainismo».
	- Dentro das pastas anteriores faremos como na Bíblia, criaremos uma pasta para cada livro e um arquivo Markdown para a capa. Por exemplo, a pasta `/output/wikijs/en/book/Islam/Quran` contém as 114 suratas ou capítulos do Alcorão, e o arquivo `/output/wikijs/en/book/Islam/Quran.md` a capa do Alcorão.

Em relação aos nomes das pastas, estas instruções devem ser levadas em consideração:
- Devem ser únicos dentro de cada pasta e devem conter sempre três caracteres ou mais.
- Caso se preveja que o livro fará parte de uma coleção (volume 1, 2, etc.), adicionar o sufixo `_1`, `_2`, etc. (até um máximo de 9 volumes), ou `_01 `, `_02` (se mais de 9 volumes forem planejados).
- O nome da pasta não deve conter espaços em branco ou hífens, que devem ser substituídos por sublinhados (`_`).
- O nome utilizará o título do livro, mas o mais abreviado possível.
- O nome estará sempre em inglês, portanto caso o livro original não esteja em inglês o título é traduzido.
- Caracteres raros, como dois pontos, apóstrofos ou exclamações, são removidos.
- Por exemplo, se o título de um livro for *Did Jesus exist?* a pasta desse livro se chamaria `Did_Jesus_exist`. Se o título fosse *Principios de Teología* (livro cujo original estava em espanhol), a pasta seria `Principles_of_Theology`.
- Os mesmos nomes de pasta serão sempre usados ​​para todos os idiomas. Por exemplo, a pasta para o Alcorão em inglês é `/output/wikijs/en/book/Islam/Quran` e para o espanhol é `/output/wikijs/es/book/Islam/Quran` (NO ES ~~` / output/wikijs/es/book/Islam/Corán`~~). Ou seja, a única coisa que muda na URL entre os diferentes idiomas é o código do idioma (`en`, `es`, etc.). Isto facilita muitas operações com as rotas em Urântiapedia.

Cada capítulo será um arquivo dentro da pasta do livro chamado `xx.md` onde `xx` será:
- Um número de 0 a N com o número do capítulo (sem título, apenas o número). O zero é reservado para um prólogo ou introdução em que o próprio autor não tenha utilizado um número para numerá-lo. Se não houver prólogo ou introdução, o primeiro capítulo será `1.md`, o segundo será `2.md`, etc.
- `Index` para a página de índice, que será `Index.md`. Esta página às vezes pode ser omitida se o índice não for muito longo e incluir o índice na página de rosto.
- `Preface` para a página com o prefácio, se houver, que permanecerá como `Preface.md`.
- Os apêndices devem ser nomeados como `Appendix_xx` onde `xx` segue uma numeração de 1 a N.

> No caso de muitos livros bíblicos, os arquivos com os capítulos estão em formato HTML e não Markdown porque foram gerados a partir de arquivos em formato LaTeX que se encontram dentro do projeto em `/input/tex`. Essa automatização se deve ao fato de muitos desses livros terem sido obtidos através da exportação do software [e-Sword](https://www.e-sword.net/), que gera conteúdo semelhante ao LaTeX. Esta tarefa é detalhada na seção do manual [Obter a Bíblia](/pt/help/github_bible). Esta tarefa foi concluída para os 25 idiomas suportados atualmente.
> Livros extra-bíblicos que não são obtidos no e-Sword são adicionados no formato Markdown seguindo o processo manual detalhado nesta página.
{.is-warning}

## Formato básico de um livro religioso sobre Urântiapédia

O formato a utilizar é o Markdown, que é extremamente simples de formatar em comparação com outras alternativas.

De todo o formato [Markdown](/pt/help/markdown), que é bastante extenso, um contribuidor que adicione um livro religioso à Urântiapedia certamente não terá que se preocupar com nada além de adicionar essas coisas (a lista é detalhada abaixo) :
- Um cabeçalho em cada arquivo.
- Seções dentro de cada capítulo.
- Parágrafos corretamente separados.
- Indicação e link de versículo na frente de alguns parágrafos.
- Negrito e itálico.
- Outros.
- Marcas de quebra de página em livro que não utiliza versos.
- Imagens.
- Referências a imagens.
- Notas de rodapé.
- Links de navegação.

Parece muita coisa, mas a verdade é que o Markdown é muito simples e pode ser aprendido em menos de uma hora. Nas seções seguintes explicaremos um pouco cada uma das coisas da lista anterior.

### Cabeçalho de cada arquivo

Este é um exemplo de cabeçalho a ser adicionado:

```
---
title: "Qur'an — 1.  al-Fatihah: The Opening"
description: 
published: true
date: 2024-01-10T13:55:38.362Z
tags: book, Islam
editor: markdown
dateCreated: 2024-01-10T13:55:38.362Z
---
```
Deve ser copiado como está aqui e substituir apenas os valores que seguem os dois pontos. O título é melhor colocado entre aspas, e deve ser formado a partir do título do livro, e separado por hífen, do título do capítulo, incluindo seu número.

Não é necessário colocar nada na descrição.

A data de criação e a data atual devem ser a data de criação do arquivo. A hora não é relevante.

Em _tags_ você deve colocar tags, separadas por vírgulas, que foram estabelecidas para aquele livro. Uma lista completa de tags usadas na Urantiapedia está disponível aqui: [Tags on Urantiapedia](https://github.com/JanHerca/urantiapedia/blob/master/docs/tags.md?plain=1). Podem ser deixados em branco porque é muito rápido preenchê-los todos de uma vez em todas as fichas do livro. Algumas recomendações são estas:
- As etiquetas devem ser **obrigatoriamente em inglês**. A opção de tags traduzidas não está atualmente disponível em [Wiki.js](https://js.wiki/), o software usado pela Urantiapedia.
- O rótulo não importa se está em letras maiúsculas ou minúsculas. `book` e `Book` são a mesma tag. Na verdade, todos eles são mostrados em letras minúsculas na Urantiapedia: [Pesquisar por tags](https://urantiapedia.org/t). Todas as tags existentes também são exibidas nesta página.
- Pelo menos todos os arquivos de um livro devem ter a tag `book` indicando que se trata de um conteúdo da Biblioteca.
- Pelo menos deve ter um rótulo da religião a que o livro pertence: `Judaism`, `Christianity`, `Islam`, `Buddhism`, `Hinduism`, `Taoism`, `Bahai`, `Shikhism`, `Shintoism`.
- Para livros bíblicos e extra-bíblicos existem muitas tags criadas como `Bible`, `Apocrypha OT`, `Apocrypha NT`, `Deuterocanon OT`, `Deuterocanon NT` e outras.
- Caso não exista uma tag e você queira adicioná-la, basta adicioná-la no cabeçalho de qualquer arquivo e essa tag será criada.

### Marcas de seção

Se um capítulo tiver seções, elas deverão ser marcadas da seguinte forma:

```
## Os sete céus

### O Primeiro Céu

### O Segundo Céu
```

As seções de primeiro nível sempre serão marcadas como `##`, as seções de próximo nível como `###` e assim por diante. Não é muito conveniente usar mais de quatro níveis, mesmo que o livro o faça. Como você pode ver, não usamos seções com a marca `#` porque elas criam títulos de seção muito grandes.

### Parágrafos corretos

Um parágrafo é uma linha dentro do arquivo Markdown e deve ter uma linha em branco antes e depois. Deve-se garantir que isso ocorra em cada parágrafo. Caso o texto seja poético, os versos das estrofes podem ser mantidos juntos e conter apenas uma linha em branco antes e depois da estrofe.

### Prompt de versículo e link

Em livros que possuem numeração de versículos dentro de cada capítulo, isso deve ser incluído antes de cada parágrafo.

Por exemplo, no primeiro capítulo do livro [«Evangelho da Infância Armênia»](/es/Bible/Armenian_Infancy_Gospel):

```
<span id="v1"><sup><small>1</small></sup></span>  En aquel tiempo, un hombre llamado Joaquín salió su casa, llevando consigo sus rebaños y sus pastores, y fue al desierto, donde fijó su tienda. ...
<span id="v2"><sup><small>2</small></sup></span>  Y, cuando se acabaron los cuarenta días de ayuno, advino el ángel del Señor, y, colocándose ante Joaquín, le dijo: Joaquín, el Señor ha oído tus plegarias, y ha atendido tus súplicas. ...
```

Como você pode ver, a indicação segue sempre este padrão:

`<span id="vXXX"><sup><small>XXX</small></sup></span>` e dois espaços em branco atrás dele para dar alguma separação. `XXX` pode ser um número, uma letra ou qualquer elemento curto que diferencie claramente cada versículo e seja um modo comum usado para cada livro.

> Um truque muito útil para adicionar os indicadores é colocar apenas o número na frente de cada parágrafo com dois espaços em branco depois dele, e então fazer uma substituição em todos os arquivos usando expressões regulares. Procurando por este `^(\d+)  ` e substituindo-o por este `<span id="v$1"><sup><small>$1</small></sup></span>  `.
{.is-info}


### Negrito e itálico

Eles são adicionados conforme indicado:

```
Este é um texto em um parágrafo *com alguns itálicos*.

Este é um **novo parágrafo** que tem algo em negrito.

Você também pode usar sublinhados para exibir _itálico_ ou __bold__.
```

Como você pode ver, um asterisco ou travessão significa itálico e dois significa negrito.

### Outro

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

Se o livro não utiliza versículos precisamos de algum mecanismo para podermos nos referir a uma posição do texto dentro de cada capítulo. Uma opção pode ser usar marcas de página, ou seja, uma indicação de onde o livro original passa de uma página para outra.

A marca de página deve ser incluída entre as palavras nas quais você passa de uma página para outra da seguinte forma:

```
E o anjo do Senhor, aparecendo a Eleazar, o sumo sacerdote, numa visão semelhante, disse-lhe: Eis que Jeoiaquim vem a ti com ofertas. Ele recebe seus dons religiosamente e de acordo com a lei, conforme for apropriado. Porque o Senhor ouviu suas orações e cumpriu suas <span id="p18">[<sup><small>p. 18</small></sup>]</span> demanda. E o Sumo Sacerdote acordou do seu sono, levantou-se e deu graças ao Altíssimo, dizendo: Bendito seja o Senhor, o Deus de Israel, porque não despreza os seus servos que o imploram. Então o anjo apareceu pela segunda vez a Ana e disse-lhe: Eis que vem teu marido. Levante-se, vá buscá-lo e receba-o com alegria. E Anna se levantou, vestiu o traje de casamento e foi procurar o marido. E quando o viu, prostrou-se diante dele com alegria e lançou-lhe os braços ao pescoço.
```

Você pode ver que a marca é: `<span id="p18">[<sup><small>p. 18</small></sup>]</span>`.

Como esta tarefa pode ser entediante, uma forma de simplificá-la pode ser colocar uma marca alternativa mais curta, como `ppp18` (`ppp` é um texto que sabemos que nunca acontecerá), para continuar com o exemplo anterior. Depois você pode procurar essas marcas e substituí-las pelas definitivas automaticamente, conforme indicamos em outro exemplo acima. Ou seja, isso também seria válido:

```
E o anjo do Senhor, aparecendo a Eleazar, o sumo sacerdote, numa visão semelhante, disse-lhe: Eis que Jeoiaquim vem a ti com ofertas. Ele recebe seus dons religiosamente e de acordo com a lei, conforme for apropriado. Porque o Senhor ouviu suas orações e fez sua exigência de ppp18. E o Sumo Sacerdote acordou do seu sono, levantou-se e deu graças ao Altíssimo, dizendo: Bendito seja o Senhor, o Deus de Israel, porque não despreza os seus servos que o imploram. Então o anjo apareceu pela segunda vez a Ana e disse-lhe: Eis que vem teu marido. Levante-se, vá buscá-lo e receba-o com alegria. E Anna se levantou, vestiu o traje de casamento e foi procurar o marido. E quando o viu, prostrou-se diante dele com alegria e lançou-lhe os braços ao pescoço.
```

### Imagens

As imagens devem ser incluídas assim:

```
<figure id="Figure_01" class="image urantiapedia">
<img src="/image/book/Islam/Songs_of_Kabir/image_01.png">
<figcaption><em><b>Figura 1.</b> Dios Está Dentro de Nosotros</em></figcaption>
</figure>
```

Você pode copiar o exemplo anterior onde uma imagem é necessária e substituir apenas o seguinte:
- Onde diz `id="Figure_01"` deve ser um identificador único para a imagem. Você pode colocar qualquer um, desde que não haja dois idênticos no mesmo arquivo de cada capítulo.
- Onde diz `src="..."` deve haver um caminho para o arquivo de imagem. O caminho deve sempre começar com `/image/`, que é onde estão todas as imagens, e atrás dele deve haver um caminho idêntico ao que temos para o livro. Ou seja, seguindo o exemplo, como o livro está localizado em `/es/book/Islam/Songs_of_Kabir`, as imagens desse livro devem estar em `/image/book/Islam/Songs_of_Kabir`. O nome do arquivo de cada imagem pode ser qualquer que seja curto, indicando sempre a extensão (`.png` ou `.jpg`). Recomenda-se que o nome do arquivo não contenha espaços em branco ou caracteres especiais, apóstrofos ou acentos.
- Se a imagem possuir legenda ela deverá ser colocada dentro da tag `figcaption`.
- Se você quiser alinhar a imagem à esquerda, centro ou direita você deve substituir `class="image urantiapedia"` por `class="image urantiapedia image-style-align-left"`, `class="image urantiapedia image-style-align-center"` e `class="image urantiapedia image-style-align-right"`, respectivamente. Alguns parágrafos abaixo você deve adicionar uma linha com `<br style="clear:both;"/>` para que o alinhamento não afete mais o posicionamento do texto.

Como essa tarefa de incluir imagens pode ser entediante, você pode usar um truque como os mencionados anteriormente. Se nenhuma imagem tiver rodapé, você pode colocar algo como `fff18` (ou `fffl18`, `fffc18`, `fffr18`) como forma de simplificar que vai uma imagem com o número 18 (e até alinhada ).

### Referências a imagens

Quando o texto menciona uma imagem, é uma boa ideia colocar um link interno para essa imagem. Por exemplo, continuando com a imagem mostrada acima, para incluir uma referência ficaria assim:

```
...é um dos destaques dessa música. Kabir minimizou os rituais e a austeridade (ver [Figura 1](#Figure_01)), ensinando que Deus não está confinado a mesquitas, templos ou locais de peregrinação.
```

A sintaxe `[Figura 1](#Figure_01)` é a maneira de adicionar hiperlinks no Markdown. O texto exibido é indicado entre colchetes e o caminho da web é indicado logo atrás dele, entre parênteses. Quando a imagem estiver no mesmo capítulo, basta colocar `#` e depois o identificador. Se a imagem estiver em outro capítulo, a sintaxe deve ser algo como `[Figura 1](/image/book/Islam/Songs_of_Kabir/3#Figure_01)`. Neste exemplo apontamos para a figura 1 que está no capítulo 3.

### Notas de rodapé

Se o livro tiver notas de rodapé, ou notas de final de capítulo, ou notas globais que aparecem no final do livro, mas para as quais é colocada uma marca no livro por um número ou indicação, essas marcas de anotação serão sempre convertidas em notas de rodapé para cada capítulo, conforme segue:

```
O mais importante é que Deus está dentro de nós, e é para lá que devemos olhar se quisermos conhecê-lo.[^1]

. . .

## Notas

[^1]: Mestre, David. Kabir diz. Traduzido por Tagore, Rabindranath. Publicação de três pombos. ISBN 979-8-6501-4828-9
```

As notas de rodapé são sempre marcadas como um número consecutivo começando com 1 e são escritas como `[^1]`, `[^2]`, etc. O caracter `^` é digitado no teclado usando `Shift + [` e pressionando espaço.

A nota de rodapé tem duas partes: uma é a indicação, que fica logo no texto, e a outra é a nota propriamente dita, que fica no final, atrás de tudo, no arquivo, cada nota com a sua marca, depois uma dois pontos e, em seguida, o texto e cada nota separada uma da outra por uma linha em branco. É conveniente colocar uma seção `## Notas` para as notas, que como já foi dito deve sempre ir no final de tudo, inclusive dos links de navegação.

### Links de navegação

Esses links estão em uma tabela simples no início e no final de cada capítulo e permitem que você passe facilmente de um capítulo para outro ou vá até o índice. Eles deveriam ser como o exemplo a seguir:

```
<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir/1">
          <span class="mdi mdi-arrow-left-drop-circle"></span><span class="pl-2">Capítulo I — Dios está dentro de nosotros</span></a>
        </td>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir#índice">
          <span class="mdi mdi-book-open-variant"></span><span class="pl-2">Índice </span></a>
        </td>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir/3">
          <span class="pr-2">Capítulo III — La insuficiencia del lenguaje</span><span class="mdi mdi-arrow-right-drop-circle"></span></a>
        </td>
      </tr>
    </tbody>
  </table>
</figure>
```

Como dito antes, a última coisa no arquivo deve ser sempre a seção de notas, se houver, mesmo abaixo desses links de navegação.

## Criando um arquivo de capa

A capa, como já mencionado, está em um arquivo Markdown com o mesmo nome da pasta onde estão incluídos os capítulos. Por exemplo: a pasta `/output/wikijs/en/Bible/Genesis` contém os 50 capítulos de Gênesis, e o arquivo `/output/wikijs/en/Bible/Genesis.md` é a capa de Gênesis. Da mesma forma, a pasta `/output/wikijs/en/book/Islam/Quran` contém as 114 suratas ou capítulos do Alcorão, e o arquivo `/output/wikijs/en/book/Islam/Quran.md` a página de rosto .do livro do Alcorão.

A capa é um arquivo Markdown que deve conter estes elementos:
- Um cabeçalho em cada arquivo.
- Capa do livro em formato SVG.
- (Opcional) Seções dentro da capa.
- (Opcional) Índice.
- Links externos (de onde foi baixado).

O cabeçalho deve seguir a mesma sintaxe já indicada para os capítulos.

A capa deve estar no formato SVG.

Esta é a capa de Gênesis:

```
<div class="urantiapedia-book-front urantiapedia-book-bible">
<svg xmlns="http://www.w3.org/2000/svg"
	width="102.6mm" height="136.8mm"
	viewBox="0 0 102.6 136.8" version="1.1">
	<g transform="translate(-7,-5)">
		<rect width="9.6" height="136.8" x="7" y="5" />
		<rect width="96.9" height="136.8" x="17" y="5" />
		<text style="font-size:5px" x="61" y="22">LA BIBLIA</text>
		<text style="font-size:4px" x="61" y="125">Biblia Reina Valera, 1960</text>
		<text style="font-size:9px" x="61" y="60">Génesis</text>
	</g>
</svg>
</div>
```

Esta é a capa do Alcorão:

```
<div class="urantiapedia-book-front urantiapedia-book-islam">
<svg xmlns="http://www.w3.org/2000/svg"
	width="102.6mm" height="136.8mm"
	viewBox="0 0 102.6 136.8" version="1.1">
	<g transform="translate(-7,-5)">
		<rect width="9.6" height="136.8" x="7" y="5" />
		<rect width="96.9" height="136.8" x="17" y="5" />
		<text style="font-size:4px" x="61" y="130">M.M. Pickthall</text>
		<text style="font-size:3px" x="61" y="135">The Meaning of the Glorious Quran, 1938</text>
		<text style="font-size:9px" x="61" y="60">Qur'an</text>
	</g>
</svg>
</div>
```

Todas as capas de todos os livros planejados já estão geradas porque são exibidas nos índices de cada estante. Portanto, basta ir até o índice das [prateleiras da Biblioteca Urantiapédia](/pt/index/books), entrar na estante desejada, e de lá copiar a capa necessária (o conteúdo dentro da tag `<svg> ...</svg >`) copiando-o como nos exemplos acima.

Se o livro tiver uma descrição, dedicatórias ou outro conteúdo típico das páginas introdutórias, ele será adicionado a este arquivo de capa, usando seções Markdown e formatação conforme apropriado.

Para textos que você deseja centralizar, você pode usar esta sintaxe como no exemplo a seguir:

```
<p style="text-align:center;">
<b>THE MEANING OF THE GLORIOUS QURAN</b><br>
by Mohammed Marmaduke Pickthall<br>
Hyderabad-Deccan : Government Central Press [138]
</p>
```

Se o índice não for muito extenso, pode ser incluído em uma seção da capa. Alternativamente, você pode colocá-lo em seu próprio arquivo chamado `Index.md` dentro da pasta do capítulo e incluir um link para ele na capa.

## Envio de solicitações de mudança

Isso completa todas as coisas que você deve ter em mente ao adicionar livros religiosos à Biblioteca Urantipedia. Depois que essas alterações forem feitas no projeto GitHub, uma solicitação de alteração deverá ser feita conforme detalhado nos manuais para usuários [Administradores](/pt/help/admin), [Editores-chefes](/pt/help/github) ou [Editores Assistentes](/pt/help/github_assistant).

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_religious_books_catalog">Criando um catálogo de livros de todas as religiões</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_sourcebooks_catalog">Criação de um catálogo de livros supostamente usados ​​por reveladores</a></td>
      </tr>
    </tbody>
  </table>
</figure>