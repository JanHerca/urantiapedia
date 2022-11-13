---
title: "Obter livros "fonte""
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
        <td><a href="/pt/help/github_sourcebooks_catalog">Criando um catálogo de livros "fonte"</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_articles_catalog">Criando catálogo de artigos</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Descrito aqui é como obter os livros que supostamente são fontes do *O Livro de Urântia* ou têm qualquer relação ou paralelo com *O Livro de Urântia*, e foram catalogados seguindo a tarefa [Criando um Catálogo de Livros "Fontes"](/pt/help/github_sourcebooks_catalog).

## Processo

### Download do livro

Esta tarefa consiste em tentar localizar uma versão digital de cada livro na Internet. Estas situações podem ocorrer:
- O livro não foi encontrado em nenhum site para download como digital. Você pode considerar comprar uma cópia em papel, se estiver disponível, ou tentar conseguir alguém para obtê-la em uma biblioteca pública para digitalizá-la.
- O livro foi encontrado mas não está disponível para download, só pode ser lido online. Normalmente você pode tirar screenshots de cada página ou fazer alguns hacks na web para baixar as digitalizações.
- O livro pode ser baixado, mas na forma de imagens ou em PDF onde não há texto. Você precisará usar o software de reconhecimento de caracteres (OCR).
- O livro pode ser baixado como PDF com texto, ou melhor ainda, como arquivo de texto. Este é o ideal de todos os casos.

Para obter livros digitais, algumas fontes podem ser:
- [Google Livros](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)

Seja qual for o caso em que nos encontremos, a tarefa de um “Editor Assistente” será anotar o endereço da web onde conseguimos baixar o livro e baixá-lo em nosso PC. Ambos os itens devem ser enviados para qualquer um dos Administradores de *Urantiapedia* ou para urantiapedia@gmail.com. Os administradores estão criando uma coleção de armazenamento em nuvem de todos os arquivos grandes que não cabem no GitHub.

A tarefa é então entregue a um “Editor Chefe”, que processará o livro em um único arquivo Markdown com tudo isso. Este arquivo não está de forma alguma finalizado e o trabalho será limpá-lo e formatá-lo corretamente para que possa ser carregado para *Urantiapedia*. Isto é o que vamos ver como fazer a seguir.

### Estrutura de um livro sobre Urantiapedia

Se você for um “editor chefe” e estiver usando a plataforma GitHub, os livros devem ser salvos nestas pastas do projeto GitHub: `/output/wikijs/en/book` para livros em inglês, `/output/wikijs/es/book ` para livros em espanhol, etc. Dentro dessas pastas criaremos outra, caso não exista, com o nome do autor (com espaços em branco substituídos por sublinhados). Por fim, dentro da pasta do autor, criaremos uma pasta para cada livro ao qual colocaremos um nome exclusivo seguindo este critério:
  - O nome usará o título do livro, mas o mais abreviado possível.
  - O nome estará sempre em inglês, portanto, se o livro original não estiver em inglês, o título será traduzido.
  - Os espaços em branco são substituídos por sublinhados.
  - Caracteres especiais como dois pontos ou exclamações são removidos.
  - Por exemplo, se o título de um livro for *Jesus existiu?*, a pasta desse livro seria chamada `Did_Jesus_exist`. Se o título fosse *Principios de Teología* (espanhol), a pasta seria `Principles_of_Theology`.

Se você é um “Assistente Editor” e não vai usar a plataforma GitHub para enviar arquivos, basta criar qualquer pasta no seu PC. Então, quando você enviar seu trabalho para um Administrador, ele cuidará de criar as pastas corretas.

Cada capítulo será um arquivo dentro da pasta do livro chamado `xx.md` onde `xx` será:
- Um número de 0 a N com o número do capítulo (sem o título, apenas o número). O zero é reservado para um prólogo ou introdução em que o próprio autor não utilizou um número para numerá-lo. Se não houver prólogo ou introdução, o primeiro capítulo será `1.md`, o segundo será `2.md`, e assim por diante.
- `Index` para a página de índice, que será deixada como `Index.md`.
- `Preface` para a página com o prefácio, se houver, que será deixado como `Preface.md`.

Um exemplo de um livro finalizado pode ser visto em `/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us`.

### Formato básico de um livro sobre Urantiapedia

O formato a ser usado é o Markdown, que é extremamente simples para estilizar em comparação com outras alternativas.

O “Editor Assistente” deve revisar o texto e adicionar o seguinte (conforme detalhado abaixo):
- Um cabeçalho em cada arquivo.
- Imediatamente abaixo do cabeçalho, indicação do autor.
- Marcações de seção dentro de cada capítulo.
- Corrigir parágrafos.
- Negrito e itálico.
- Citações.
- Marcas de quebra de página.
- Imagens.
- Referências a imagens.
- Notas de rodapé.
- Tabelas.
- Fórmulas matemáticas ou caracteres em notação científica.

Alguns dos itens acima são complexos e um “Editor Assistente” pode ignorá-los em uma primeira revisão. Você pode simplesmente anotar essas partes com alguma marcação específica para um “Editor Chefe” revisar mais tarde.

### Cabeçalho de cada arquivo

Este é um exemplo de cabeçalho para adicionar:

```
---
title: "O universo ao nosso redor - Capítulo I - Explorando o céu"
description:
published: true
date: 2021-11-28T14:02:03.086Z
tags: Cosmology, Astronomy
publisher: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---
```

Deve ser copiado como está aqui e substituir apenas os valores que vierem após os dois pontos. O título deve ser colocado entre aspas em toda a sua extensão, e deve ser formado a partir do título do livro, e separado por hífen, o título do capítulo, incluindo seu número.

Na descrição não é necessário colocar nada.

Coloque a data de criação e a data atual iguais e torne-a a data de criação do arquivo. O tempo não é relevante.

Nas tags você deve colocar as etiquetas, separadas por vírgulas, que foram estabelecidas para aquele livro. Normalmente os “Redatores Chefes” decidem quais são as tags mais apropriadas, para que possam ser deixadas em branco e depois preenchidas de uma só vez em todos os arquivos do livro.

### Autor

Abaixo do cabeçalho, sempre adicione uma assinatura, assim:

```
Autor: **Sir James Jeans, M. A., D. Sc., Sc. D., LL. D., F.R.S.**
```

É comum no mundo inglês colocar os títulos acadêmicos do autor após o nome, separados por vírgulas.

### Marcas de seção

Se um capítulo tiver seções, elas devem ser marcadas da seguinte forma:

```
## O sistema solar

### Sol

### Os planetas
```

As seções de primeiro nível sempre terão a tag `##`, as seções de próximo nível `###` e assim por diante. Não é muito conveniente usar mais de quatro níveis, embora o livro o faça. Como você pode ver, não usamos seções com a marca `#` porque elas criam títulos de seção muito grandes depois.

### Corrigir parágrafos

Um parágrafo é uma linha dentro do arquivo Markdown e deve ter uma linha em branco antes e depois dele. Deve-se garantir que isso ocorra em cada parágrafo.

### Negrito e itálico

Eles são adicionados conforme indicado:

```
Este é um texto em um parágrafo *com alguns itálicos*.

Este é um **novo parágrafo** que tem algo em negrito.

Os sublinhados também podem ser usados ​​para exibir _italic_ ou __bold__.
```

Como você pode ver, um asterisco ou hífen significa itálico e dois significa negrito.

### Citações

Se o autor cita um texto, essa citação deve ser destacada da seguinte forma:

```wrap
Como o grande Sêneca disse uma vez:
> «There is no favorable wind for those who do not know where they are going».
```

Basta adicionar a marca `>` e separar a citação com um espaço.

Se a citação for longa e tiver vários parágrafos, ela pode ser escrita assim:

```wrap
Em vários lugares comenta Cícero:
> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
> 
> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolor et quas discomfort excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
```

Observe que colocamos um `> ` com um espaço à direita em cada linha separadora de parágrafo.

### Marcas de quebra de página

Como ao converter cada capítulo de um livro em uma página da web perdemos a informação de onde passamos de uma página para outra, é conveniente adicionar uma marca que o sinalize, para ter uma maneira de referenciar as páginas de cada livro, visto que esses livros que processamos nesta tarefa não são livros bíblicos, que possuem uma divisão padrão em versículos.

A marca de página deve ser incluída entre as palavras que vão de uma página para outra da seguinte forma:

```wrap
Além dos asteróides vêm os quatro grandes planetas Júpiter, Saturno, Urano e Netuno, todos eles muito maiores que a Terra. Júpiter, o maior, tem, segundo Sampson, 142.652 km de diâmetro, ou <span id="p18">[<sup><small>p. 18</small></sup>]</span> mais de onze vezes o diâmetro da Terra; Mil e quatrocentos corpos do tamanho da Terra poderiam ser colocados dentro de Júpiter e deixar espaço de sobra. Saturno, o próximo na ordem, perde apenas para Júpiter em tamanho, com um diâmetro de cerca de 112.654 quilômetros. Estes dois são de longe os maiores dos planetas.
```

Você pode ver que a marcação é: `<span id="p18">[<sup><small>p. 18</small></sup>]</span>`.

Como essa tarefa pode ser tediosa, uma maneira de simplificar é colocar uma marcação alternativa mais curta, como `ppp18` se estiver usando o exemplo anterior. Então um “Editor Chefe” pode detectar essas marcas e substituí-las pelas definitivas automaticamente. Ou seja, também valeria:

```wrap
Além dos asteróides vêm os quatro grandes planetas Júpiter, Saturno, Urano e Netuno, todos eles muito maiores que a Terra. Júpiter, o maior, tem, segundo Sampson, um diâmetro de 142.652 quilômetros, ou ppp18, mais de onze vezes o diâmetro da Terra; Mil e quatrocentos corpos do tamanho da Terra poderiam ser colocados dentro de Júpiter e deixar espaço de sobra. Saturno, o próximo na ordem, perde apenas para Júpiter em tamanho, com um diâmetro de cerca de 112.654 quilômetros. Estes dois são de longe os maiores dos planetas.
```

### Imagens

As imagens devem ser incluídas assim:

```
<figure id="Universe_plate_01" class="image urantiapedia">
<img src="/image/book/Sir_James_Jeans/The_Universe_Around_Us/plate_01.png">
<figcaption><em><b>Placa I.</b> Gráfico de Franklin-Adams, a Via Láctea no bairro do Cruzeiro do Sul</em></figcaption>
</figure>
```

Você pode copiar o exemplo acima onde uma imagem é necessária e substituir apenas o seguinte:
- Onde diz `id="Universe_plate_01"` é um identificador exclusivo para a imagem. Você pode colocar qualquer um desde que no mesmo arquivo de cada capítulo não haja dois iguais.
- Onde diz `src="..."` deve haver um caminho para o arquivo de imagem. O caminho deve sempre começar com `/image/`, que é onde estão todas as imagens, e deve ser seguido por um caminho idêntico ao que temos para o livro. Ou seja, seguindo o exemplo, como o livro está em `/en/book/Sir_James_Jeans/The_Universe_Around_Us`, as imagens desse livro devem estar em `/image/book/Sir_James_Jeans/The_Universe_Around_Us`. O nome do arquivo de cada imagem pode ser curto, sempre indicando a extensão (`.png` ou `.jpg`) do arquivo. Se você não tiver o arquivo, o que vai acontecer inicialmente, você pode colocar qualquer nome, e então os “Redatores Chefes” decidirão sobre o nome final e a extensão.
- Se a imagem tiver uma legenda, ela deve ser colocada dentro da tag `figcaption`.

Como essa tarefa de incluir a imagem pode ser tediosa, os “Editores Assistentes” podem simplesmente incluir uma marca indicando que há uma imagem a ser encontrada no arquivo PDF original, algo como `iiii` ou qualquer caractere repetido que nunca ocorrerá em outro parte do texto.


### Referências a imagens

Quando o texto menciona uma imagem, é uma boa ideia colocar um link interno para essa imagem. Por exemplo, continuando com a imagem mostrada acima, para incluir uma referência ela seria colocada assim:

```wrap
...cada um deles muito fraco para ser visto individualmente sem auxílio telescópico (veja [Placa I](#Universe_plate_01)).

...como vimos na [Placa VIII](/pt/book/Sir_James_Jeans/The_Universe_Around_Us/#Universe_plate_01) do capítulo anterior...
```

A sintaxe `[Placa I](#Universe_plate_01)` é a maneira de adicionar hiperlinks no Markdown. O texto a ser exibido é indicado entre colchetes e o caminho da web é indicado logo atrás entre parênteses. Quando a imagem estiver no mesmo capítulo, basta colocar `#` e depois o identificador. Se a imagem estiver em outro capítulo o caminho deve ser mais longo.

Como essa tarefa de incluir referências de imagem pode ser tediosa, os “Editores Assistentes” podem simplesmente incluir uma marcação indicando que uma referência vai para lá, algo como `rrrr`.

### Notas de rodapé

Se o livro tiver notas de rodapé, ou notas de fim de capítulo, ou notas gerais que aparecem no final do livro, mas para as quais uma marca é colocada no livro por número ou indicação, essas marcas de nota de rodapé serão sempre convertidas em notas de rodapé, da seguinte forma:

```wrap
O fato de Altair e Saturno parecerem igualmente brilhantes no céu só pode significar que Altair está 80.000 vezes mais distante que Saturno[^1].

. . .

[^1]: Porque o brilho aparente de um objeto diminui com o inverso do quadrado de sua distância, e o quadrado de 80.000 é aproximadamente igual a 6 bilhões.
```

As notas de rodapé são sempre marcadas como um número corrido começando em 1 e são escritas como `[^1]`, `[^2]`, etc. O caractere `^` é digitado no teclado usando `Shift + [` e depois pressionando espaço.

A nota de rodapé tem duas partes: uma é a indicação, que é colocada logo no texto, e a outra é a própria nota de rodapé, que é colocada no final, atrás de tudo, do arquivo. Cada nota de rodapé deve ter sua marca, depois dois pontos e depois o texto, com cada nota separada uma da outra por uma linha em branco.

Como essa tarefa de incluir notas de rodapé pode ser tediosa, os “Editores Assistentes” podem simplesmente incluir uma marca indicando que uma nota de rodapé vai para lá, algo como `nnnn`, e então copiar todas as notas de capítulo para o final do arquivo.


### Tabelas

Criar tabelas é sempre uma tarefa complexa em qualquer software de escritório. O Markdown facilita a criação de tabelas, mas ainda é uma tarefa complexa quando a tabela possui células aninhadas, texto alinhado etc.

Os “Editores Assistentes”, para não perder muito tempo aqui, podem simplesmente marcar onde há tabelas no texto com algo como `tttt`.

Se você quiser saber mais sobre como formatar tabelas no Markdown, confira aqui: [Ajuda de formatação do Markdown](/pt/help/markdown).

### Fórmulas matemáticas ou caracteres em notação científica

A criação de fórmulas matemáticas ou o uso de caracteres em notação científica é sempre uma tarefa complexa em qualquer software de escritório. O Markdown facilita a criação, mas ainda é uma tarefa complexa, dependendo das fórmulas ou caracteres a serem usados.

Os “Editores Assistentes”, para não perder muito tempo aqui, podem simplesmente marcar onde há fórmulas ou notações científicas no texto com algo como `ffff`, para que um “Editor Chefe” possa ir até esses pontos verificar.

Se você quiser saber mais sobre como formatar fórmulas e textos científicos no Markdown, confira aqui: [Ajuda de formatação do Markdown](/pt/help/markdown).

## Enviando arquivos

Se você é um “editor-chefe” usando o GitHub, pode enviar os livros que cria conforme detalhado na [Ajuda dos editores-chefe](/pt/help/github); se você for um “Editor Assistente”, você pode simplesmente enviar os arquivos Markdown para o e-mail de qualquer Administrador ou para urantiapedia@gmail.com.

## Links externos

- [Urantiapedia Tools - projeto GitHub](https://github.com/JanHerca/urantiapedia)
- [Google Livros](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)
- [Ajuda do formato Markdown](/pt/help/markdown)

<br>


<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/github_sourcebooks_catalog">Criando um catálogo de livros "fonte"</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_articles_catalog">Criando catálogo de artigos</a></td>
      </tr>
    </tbody>
  </table>
</figure>