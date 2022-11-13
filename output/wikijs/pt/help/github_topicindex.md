---
title: Tradução e revisão do Índice de Tópicos
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
        <td><a href="/pt/help/github_paramony">Tradução de Paramony</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_bible">Obter a Bíblia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Aqui estão descritos os passos necessários para traduzir e revisar o *Índice de Tópicos* para qualquer um dos idiomas da *Urantiapedia*. Esta é uma tarefa realizada pelos "Editores Chefes".

O *Topic Index* é composto de uma coleção de arquivos TXT derivados do apêndice da edição *Urantia Fellowship* do *O Livro de Urântia* ([Topic Index](https://urantia-book.org/urantiabook/topical_index/index.htm)).

> IMPORTANTE: para a execução desta tarefa atualmente existe um desenvolvimento em andamento no *Urantiapedia Tools*, chamado *Topic Index Editor*, que torna as edições mais fáceis e menos propensas a erros. Verifique a seção abaixo.

Para criar um novo *Topic Index* para outro idioma, comece na versão em inglês do *Topic Index* encontrado em `input/txt/topic-index-en`. Faça uma cópia dessa pasta e altere o nome para o idioma de destino.

A pasta contém um arquivo para cada letra do alfabeto (`a.txt`, `b.txt`, etc.) mais um arquivo `_.txt` que contém as entradas que começam com um dígito numérico. A ordenação de referência dos tópicos é sempre a do inglês, portanto, cada arquivo contém os tópicos cuja letra inicial em inglês corresponde a essa letra. Por exemplo, o tópico em espanhol "Espíritu Infinito" deve ser encontrado no arquivo `i.txt` porque o tópico em inglês começa com I ("Espírito Infinito").

O formato é um pouco semelhante ao formato YAML (https://en.wikipedia.org/wiki/YAML), mas simplificado para ser muito fácil de editar.

> IMPORTANTE: este arquivo contém abas e deve ser editado com um editor de texto que suporte renderização de abas. Os editores recomendados são: Visual Studio Code (https://code.visualstudio.com/), Notepad++ (https://notepad-plus-plus.org/) ou Sublime Text (https://www.sublimetext.com/) ).

## Formato TXT do índice de tópicos

Aqui está um trecho do arquivo `a.txt`:

```
<__________________________________________________________________________________
<
<                     A
< Urantia Book Uversa Press Topical index converted to text file
< Each entry has a previous blank line
< Entry = Name | Refs | See also | Category | OK (= revised)
< An entry can have one or several sub-entries (= the lines after entry)
< A sub-entry can have sub-sub-entries with tabs and so on
< Help: https://urantiapedia.org/en/help/github_topicindex
<__________________________________________________________________________________

A-B-C the First; A-B-C the first | (77:8.2) | | PERSON | OK
it is the name of the first secondary midwayer of the first subgroup of eight subgroups that exists. Each subgroup are 248 brothers and sisters, childs of the same parents (77:6.4)

a priori assumptions | | doctrines | | OK
causation, duty, and worship constitute the a priori assumptions which make it possible for man to function as a rational and self-conscious personality (16:6.10)

Aaron (Old Testament); Aaron | | daughters of Aaron | PERSON | OK
Aaron was the older brother of Moses and the one who starred in the event of the golden calf, an idol with which the Israelites decided to represent Yahweh.
Peter talk about him in a preach (146:1.1)
> https://en.wikipedia.org/wiki/Aaron

...
```

Cada arquivo consiste em:
- Um cabeçalho que explica seu conteúdo quais linhas começam com `<`. Essas linhas são ignoradas quando o arquivo é processado.
- Uma lista de tópicos. Cada tópico é precedido por uma linha em branco e contém várias linhas:
    - A primeira linha é uma pequena tabela com a descrição do tópico, e os valores ou células separados por `|` (barra vertical). Os valores são:
        - Nome do tópico. Se um ou mais nomes separados por `;` aparecerem atrás do nome, esses nomes serão aliases que serão pesquisados ​​no texto de *O Livro de Urântia* como uma forma alternativa ao nome do tópico. O primeiro nome será sempre aquele usado como título da página em *Urantiapedia*. O resto dos nomes separados por `;` serão os nomes ou aliases que, adicionados ao primeiro, serão pesquisados ​​dentro do *O Livro de Urântia* para criar links para esses tópicos.
        - Referências gerais ou globais ao *O Livro de Urântia* de todo o tópico. Este valor pode estar vazio. Esses links serão exibidos em *Urantiapedia* como uma seção superior "Ver também" com uma lista de links.
        - Links para outros tópicos. Este valor pode estar vazio. Representa um ou mais tópicos relacionados ao tópico atual. Eles aparecerão na parte inferior da página que será gerada, na lista da seção "Links". Se existir mais de um link, eles serão separados por `;`. É possível adicionar links para seções específicas dentro de um tópico usando `:`. Por exemplo: `batismo:batismo de Jesus` é um link que aponta para a página do tópico `batismo` e dentro dela para a seção sobre o batismo de Jesus.
        - Categoria do tópico. Este valor pode estar vazio. Existem cinco categorias: Pessoas (`PERSON`), lugares (`PLACE`), ordens de seres (`ORDER`), religiões (`RELIGION`) e raças (`RACE`). Essas categorias permitem trabalhar apenas em uma delas para melhor separação de tarefas e geração de índices.
        - Status. Os "editores-chefes" devem escrever 'OK' quando terminarem sua tarefa de revisão de um tópico. Se o tópico ainda estiver pendente de revisão, ele estará vazio.
    - As seguintes linhas, se existirem, são o conteúdo do tópico. Essas linhas também são tabelas curtas que podem ou não ter valores separados por `|` (barra vertical). Existem dois tipos de tabelas:
        - Tabela de uma única célula sem `|` (barra vertical): conterá um texto, o texto de uma linha da página de *Urantiapedia* e após o texto, entre parênteses, caso existam, uma ou mais referências aos parágrafos do *O Livro de Urântia*.
        - Tabela de duas células separadas por `|` (barra vertical), a primeira com o mesmo conteúdo de uma tabela com uma única célula, e a segunda com uma lista de links para outros tópicos, separados por `;`.
    - Algumas linhas opcionais no final do tópico que começam com `>`. Estes serão links para outras páginas da web e aparecerão em uma seção "Links Externos".

As regras de construção para cada linha em tópicos diferentes do primeiro são estas:
- Não precisam começar com letra maiúscula ou terminar com ponto. O software irá automaticamente capitalizar e terminar com ponto cada frase ao converter arquivos para o formato Wiki.js.
- O texto de cada linha pode ser uma única frase ou várias. Se houver vários pontos intermediários ou letras maiúsculas devem aparecer porque apenas o início e o fim das linhas são corrigidos.
- O texto de cada linha não deve conter parênteses porque esses caracteres são reservados para referências do *Livro de Urântia*.
- Cada linha pode ter caracteres de tabulação no início. Cada caractere de tabulação indica que essas linhas estarão contidas na imediatamente acima sem uma tabulação, que funcionará como um título de seção ou subseção.
- As linhas podem começar com `*` ou `#` ou uma mistura deles para fazer listas não numeradas, numeradas e mistas. Veja a seção abaixo.

Exemplo de trecho de um tópico (arquivo `a.txt`):
```
apostles of Jesus | (138) (145:4.1) (150:4) (158:0.2) (158:2.5) (172:5) (173:5.6) (184:2.2) (193:3.2) | apostleship | PERSON | OK
The apostles were the group of twelve followers with whom Jesus began his preaching
their names:
* Andrew | Andrew
* Simon Peter | Simon Peter
* James Zebedee | James Zebedee
* John Zebedee | John Zebedee
* Philip | Philip (Apostle)
* Nathaniel | Nathaniel (Apostle)
* Matthew Levi | Matthew Levi
* Thomas Didymus | Thomas Didymus
* James Alpheus | Alpheus twins
* Judas Alpheus
* Simon Zelotes | Simon Zelotes
* Judas Iscariot | Judas Iscariot
* Other known were Matthias and Paul, although the latest never met Jesus | Matthias; Paul
The Urantia Book gives detailed personal descriptions of each (139)
most were married, and some had several children (138:9.3)
all except the Alphaeus twins were graduates of synagogue schools (139:0.3-4)
most were rough fishermen (140:8.20)
they were not all the same in terms of schooling (139:0.3-4)
many carried swords (171:4.1) (172:0.3) (172:2.1) (172:5.2)
many were martyred | martyrs
organization
	their organization is detailed in The Urantia Book (138:10)
	Andrew was the chief (139:1.2)
	Peter, James, and John were Jesus' personal aids (138:10.3)
	Philip was the apostolic steward (139:5.3)
	Nathanael cared for the families of the apostles (139:6.7)
	the itinerary was managed by Thomas (139:8.5)
	Matthew was a fund-raiser (139:7.2)
	Simon was in charge of diversion and relaxation (139:11.2)
	The Alphaeus twins were the errand boys; those who took care of the multitudes (139:10.3)
	Judas Iscariot was treasurer (139:12.3)
	Matthias was chosen to take the place of Judas (192:0.2)
> https://en.wikipedia.org/wiki/Apostles_in_Christianity
```

No extrato anterior podemos ver:
- É o conteúdo relacionado ao tema [apostles of Jesus](/en/topic/apostles_of_Jesus). Vá para esta página para ver o resultado deste texto quando convertido para *Wiki.js*.
- No topo da página resultante é adicionada uma indicação dizendo "Veja também" seguida das referências encontradas no cabeçalho do tópico.
- Observe que no cabeçalho o tópico tem um link para `apostleship` (`apostolado`), e também as linhas com a lista de apóstolos tem um `|` e links para tópicos dos apóstolos. Esses links aparecem na seção "Links" adicionada no final.
- O tipo de tópico é relativo a pessoas (`PERSON`), neste caso os apóstolos de Jesus.
- Observe que a marca `OK` está presente, o que significa que este tópico foi revisado para inglês.
- Verifique se para fazer uma lista não ordenada as linhas devem começar com `*`.
- Observe que muitas linhas não começam em maiúsculas ou terminam com ponto. Isso é corrigido ao criar a página.
- O tópico criará uma seção chamada `Organization` porque abaixo dessa linha as próximas linhas têm um caractere de tabulação no início.
- Uma linha como `their names:` é uma linha com uma única célula e não contém referências.
- Uma linha como `Philip was the apostolic steward (139:5.3)` é uma linha com uma única célula e contém uma referência.
- Uma linha como `many were martyred | martyrs` (`muitos foram martirizados | martyrs`) é uma linha com duas células, então a segunda célula deve conter links para outros tópicos. Para usar mais tópicos eles podem ser separados por `;`, assim: `many were martyred | martyrs; Simon Peter` (`muitos foram martirizados | mártires; Simão Pedro`).
- Uma frase como `Matthew was a fund-raiser (139:7.2) | Matthew Levi` (`Mateus foi um angariador de fundos (139:7.2) | Matthew Levi`) (que não está no exemplo) seria uma linha com duas células em que a primeira célula tem referências e a segunda célula é um link.
- Observe que links externos para um tópico são adicionados no final do tópico e usam o caractere `>` no início de cada linha. O exemplo acima mostra como vincular a Wikipedia em inglês sobre apóstolos. Você pode adicionar vários links, cada um em uma linha, desde que comecem com o caractere `>` e sigam um espaço em branco antes do URL.

> IMPORTANTE: no texto de um parêntese de linha devem ser evitados `(` `)` porque eles são reservados apenas para definir referências ao *O Livro de Urântia*. Se você precisar dizer algo entre parênteses, altere o texto para um que use `,` vírgula para separação.

## Nomes e alias

O primeiro nome no cabeçalho é o título do tópico na página convertida. É importante garantir que esse nome apareça no maior número possível de parágrafos referenciados. Às vezes, um determinado nome aparece no *O Livro de Urântia* em muitas expressões diferentes. Por exemplo, verifique o próximo cabeçalho:

```
absoluta; força cósmica; Força cósmica; potência do espaço; Potência do espaço; energia espacial; espaço-energia; força mãe do espaço; espaço-força; força-carga do espaço; carga de força universal do espaço; manta de força; Força primordial; Força primordial; espaço-força; força do universo; carga espacial de força universal; força-carga do espaço; carga de força; carga de energia; força cósmica; força primordial | | | | OK
```

Este cabeçalho é sobre `absoluta`, uma das manifestações de energia no universo. Mas em *O Livro de Urântia* recebe muitas variações no nome. Todos eles foram adicionados após o nome principal separando-os com `;`. Este trabalho deve ser feito e revisado para todos os *Índice de Tópicos*. Se o nome aparecer no livro em maiúsculas e minúsculas, ambas as variações devem ser adicionadas à lista de alias para garantir que os links corretos sejam criados.

*Topic Index Editor* é uma ferramenta que ajuda muito a verificar isso. Veja a seção abaixo.


## Listas

Para criar listas não ordenadas no arquivo de tópicos, use o caractere `*` no início de cada linha. Para listas ordenadas, use `#`. Para listas mistas, use uma combinação de ambos. Alguns exemplos:

```txt
Alexander the Great; Alexander | | | PERSON | OK
Facts about Alexander the Great mentioned in The Urantia Book
    * his campaign in Punjab introduced Aryan heritage to India (79:4.3)
    * his royal mausoleum at Alexandria was visited by Jesus (130:3.4)
    * The Samaritans assisted Alexander and that angered the Jews against them (143:4.2-3)
    * Alexander spread the Hellenistic civilization in the Middle East (195:1.7-10)
```
Confira o resultado aqui: [Alexander the Great](/en/topic/Alexander_the_Great)

```
dual-origin beings | | Sons of God | ORDER | 
orders
    * A. descending orders
    *# Creator Sons
    *# Magisterial Sons
    *# Bright and Morning Stars
    *# Father Melchizedeks
    *# Melchizedek Sons
    *# Vorondadek Sons
    *# Lanonandek Sons
    *# Brilliant Evening Stars
    *# Archangels
    *# Life Carriers
    *# Unrevealed Universe Aids (30:1.41)
    *# Unrevealed Sons of God (30:1.42)
    * B. stationary orders
    *# abandonters
    *# susatia
    *# univitatia
    *# spironga
    *# unrevealed (30:1.48)
    * C. ascending orders
    *# ascending mortals
    *# Son-fused mortals
    *# Spirit-fused mortals
    *# translated midwayers | midwayers
    *# unrevealed ascenders (30:1.54)
```
Confira o resultado aqui: [seres de origem dupla](/en/topic/dual-origin_beings)

As listas não precisam estar sob um cabeçalho de seção e ter guias no início. Vimos um exemplo acima com a página dos apóstolos. Nesse caso, a lista é criada abaixo da linha anterior.

## Sincronização em todos os idiomas

É importante manter todos os arquivos em todos os idiomas sincronizados, para que as mesmas linhas dos mesmos tópicos estejam localizadas na mesma posição em todos os arquivos. Ao adicionar conteúdo a um arquivo em um idioma, é importante garantir que o mesmo conteúdo também esteja no mesmo número de linha em todos os outros idiomas. Caso contrário, a conversão para Wiki.js falhará.

Recomenda-se editar os arquivos lado a lado em um editor de texto que permita abrir vários arquivos em paralelo, como VS Code. Uma extensão interessante do VS Code para instalar é a *Sync Scroll*, que permite rolar vários arquivos ao mesmo tempo de forma síncrona.

## O que os contribuidores devem mudar

Para "Editores-chefes" não há restrições especiais sobre o que eles podem alterar nos arquivos de Índice de Tópicos. Eles devem seguir as regras anteriores explicadas, mas podem fazer qualquer alteração necessária.

Para os "Editores Assistentes", por seguirem um processo mais simples, devem obedecer a algumas restrições. Os "Editores Assistentes" NÃO DEVEM alterar nenhum dos itens a seguir:
- Tópicos que não são revisados ​​e que não possuem a marca 'OK'. Eles devem ser deixados intocados. Talvez ainda haja trabalho necessário neles. Até que um tópico não seja revisado por "Editores Chefes", nenhum trabalho deve ser feito nele por "Editores Assistentes".
- As referências globais ou a categoria na primeira linha do tópico.
- As referências ao *Livro de Urântia* ou referências a outros tópicos que aparecem nas linhas dos tópicos.
- A ordem das linhas.

Caso um "Assistente de Editor" encontre algum erro no conteúdo anterior, deverão ser feitas anotações em outro local para enviá-las além dos arquivos de Tópicos.

O único conteúdo que os "Editores Assistentes" devem alterar é este:
- O nome ou aliases encontrados na primeira linha dos tópicos se o idioma de trabalho não for inglês e espanhol. Os nomes em inglês e espanhol já são revisados ​​nesses idiomas.
- O texto dentro de cada linha de tópicos.
- Os URLs para páginas na Wikipedia.

Ao usar o Visual Studio Code para editar o Índice de Tópicos, os "Editores Assistentes" devem se concentrar em dois tipos de tarefas, dependendo do idioma:
- Para inglês e espanhol, basta revisar o conteúdo nos textos.
- Para outros idiomas, traduzindo os textos. O "Editor" deve criar uma cópia de um Índice de Tópicos existente em qualquer outro idioma, preferencialmente inglês, e agora traduzir os textos o mais rápido possível com a ajuda de ferramentas de tradução.

## *Editor de índice de tópicos*

O *Topic Index Editor* é uma ferramenta que está em desenvolvimento, mas em seu estado atual ajuda em algumas tarefas de revisão e edição do *Topic Index*. Como este software precisa ser instalado e complica a configuração, não está no escopo de "Editores Assistentes", mas de "Editores-chefes". Verifique [Configurando o projeto GitHub](/pt/help/github_setting).

Para acessá-lo:
1. Abra *Urantiapedia Tools* pressionando F5 no VS Code com o projeto aberto.
2. Duas janelas se abrem. ignore a instância do Dev Tools. Está lá para depuração.
3. Selecione *Editar Índice de Tópicos* no painel lateral.

![](/image/uptools_topic_editor.png)

O *Editor de Índice de Tópicos* tem quatro áreas principais:
- no lado esquerdo a lista de tópicos.
- em cima alguns seletores para definir os idiomas desejados.
- no centro uma lista de conteúdo do tópico, que também mostra mensagens de erro.
- à direita, o conteúdo do *Livro de Urântia*, com os parágrafos referenciados pelo tópico selecionado.

No futuro, o *Editor de Índice de Tópicos* permitirá editar tópicos diretamente do aplicativo, mas atualmente a funcionalidade que ele oferece é a seguinte:
- Carregar a lista de tópicos para um determinado idioma.
- Filtre os tópicos por categoria, letra inicial, se são revisados ​​ou não, e se apresentam erros ou não.
- Mostrar o conteúdo de um tópico.
- Mostrar os parágrafos do* Livro de Urântia* que são referenciados por uma determinada linha em um tópico.
- Realce o nome (ou apelido) em *O Livro de Urântia* para revisar se o nome foi encontrado.
- Destaque a melhor frase em *O Livro de Urântia* que corresponda à linha selecionada no tópico e permita a cópia.

Para usar o *Topic Index Editor* siga estas instruções:
1. No seletor superior *Idioma Principal (para modificar)* selecione o idioma desejado. Deixe o seletor de idioma secundário como inglês. Os tópicos são carregados após alguns segundos.
2. No seletor superior *Letras de tópico* selecione a letra na qual você está trabalhando. Os tópicos são filtrados por essa letra mostrando apenas os que começam com essa letra em inglês.
3. Selecione um tópico na lista. A lista de linhas, se houver, é preenchida na área de conteúdo do Tópico. As linhas de tópicos são listadas em ambos os idiomas selecionados nos seletores principais para que ambos os idiomas possam ser comparados.
4. Selecione uma linha no tópico. A lista de parágrafos referenciados pela linha do tópico é preenchida na área de conteúdo do *Livro de Urântia*.

Uma das funcionalidades úteis do *Topic Index Editor* é que ele mostra os erros encontrados nos tópicos. Por exemplo, no instantâneo abaixo foi encontrado um link para um tópico não existente. Agora podemos ir ao VS Code e verificar o arquivo com o erro e corrigi-lo.

![](/image/uptools_topic_editor_2.png)

Outra funcionalidade útil é que o nome do tópico é destacado no texto do *Livro de Urântia*. Por exemplo, no instantâneo abaixo o tópico, `brotherhood of man` em inglês e `hermandad de los hombres` em espanhol, foi encontrado no texto em inglês, mas não em espanhol. Você pode verificar e ver que em espanhol o *Livro de Urântia* diz `fraternidad de los hombres` em vez de `hermandad de los hombres`, que significa o mesmo. Então, para corrigir isso, precisamos adicionar `fraternidad de los hombres` como um alias no tópico.

Também uma funcionalidade útil é que a linha curta selecionada, que diz `civilization encompased by love` em inglês e `civilización rodeada por el amor` em espanhol, foi encontrada no parágrafo *Livro de Urântia* que é referenciado para a linha do tópico. A frase no parágrafo que melhor corresponde à linha é destacada em negrito e um botão Copiar aparece na parte inferior. Você pode usar esse botão para copiar a frase para a área de transferência e colar no VS Code, melhorando o texto do tópico com um texto mais explicativo.

![](/image/uptools_topic_editor_3.png)

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
        <td><a href="/pt/help/github_paramony">Tradução de Paramony</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_bible">Obter a Bíblia</a></td>
      </tr>
    </tbody>
  </table>
</figure>