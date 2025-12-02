---
title: Tradução de Paramony
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
        <td><a href="/pt/help/web_html_editor">Usando o editor de HTML</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_bible">Obter a Bíblia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Esta tarefa está atualmente encerrada e fechada para os 28 idiomas disponíveis.
{.is-info}

Aqui estão descritos os passos necessários para traduzir o *Paramony* do inglês para um novo idioma da *Urantiapedia*. Esta é uma tarefa realizada pelos "Editores Chefes".

O *Paramony* é um arquivo com referências cruzadas entre *A Bíblia* e *O Livro de Urântia*. Ele foi criado em inglês usando um relacionamento de referência cruzada desenvolvido por Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), convertido de seu formato TXT original para um formato JSON que é mais fácil de processar.

## Procedimento antigo (obsoleto)

Partimos da versão em inglês de *Paramony* encontrada em `input/json/footnotes-book-en.json`. Faça uma cópia dele e altere o nome para o idioma de destino.

> Este procedimento foi atualizado por ser muito trabalhoso. Veja abaixo.
{.is-warning}

O arquivo *Paramony* contém notas de rodapé (com referências a *A Bíblia*) a serem incluídas em cada documento do *Livro de Urântia*.

Você tem que traduzir as seções marcadas como textos (`texts`), bem como atualizar as abreviações dos livros *A Bíblia* com uma operação de substituição.

A estrutura do arquivo JSON é uma tabela de três colunas. Para cada documento no *O Livro de Urântia* há uma seção no arquivo que contém o índice do documento (`paperIndex`) e uma subseção (`footnotes`) que contém três colunas:
- o primeiro são os textos (`texts`) que aparecem na nota de rodapé.
- a segunda são as referências bíblicas (`bible_refs`) que correspondem a cada texto.
- a terceira são as referências ao parágrafo e frase dentro do parágrafo de *O Livro de Urântia* (`locations`). O padrão dessas referências é `x:y.z#n`, onde `x:y.z` é a referência do parágrafo e `n` indica a frase dentro do parágrafo onde a nota se encontra, começando com a primeira frase terminando com um ponto como frase 0 e assim por diante.

Essa forma de apresentar os textos torna mais simples copiá-los e colá-los em um tradutor como o Google Translator e depois colar o resultado da tradução novamente.

Exemplo de trecho:

```json
{
    "content": [
        {
            "paperIndex": 0,
            "footnotes": {
                "texts" : [
                    [
                        "Spirit light"
                    ],
                    [
                        "Paradise Trinity",
                        "Paradise Trinity (Paul's early view)"
                    ]
                ],
                "bible_refs": [
                   [
                        "Ezk 7:55; Is 9:2; Mt 4:16; Mt 5:14-16; Lk 1:79; Lk 2:32; Jn 1:4-9; Jn 3:19-21; Jn 8:12; Jn 9:5; Jn 12:46; 1 Jn 1:5; 1 Jn 2:8"
                    ],
                    [
                        "Mt 28:19; Acts 2:32-33; 2 Co 13:14; 1 Jn 5:7",
                        "1 Co 12:4-6"
                    ]
                ],
                "locations": [
                    "0:6.9#0",
                    "0:12.2#0"
                ]
            }
        }
    ]
}
```

> Deve-se ter o cuidado de copiar corretamente as aspas que possam existir nos textos. Confira aqui as aspas válidas para cada idioma: [Aspas](/pt/help/languages).

## Novo Procedimento

Partimos de uma tradução existente de *Paramony*, por exemplo, a tradução em espanhol, localizada em `input/markdown/es/paramony`. Uma cópia desta pasta deve ser feita dentro de `input/markdown/xx`, onde `xx` é o código da língua de destino. Por exemplo, se o idioma de destino for o árabe, a pasta `paramony` deverá ser copiada para `input/markdown/ar`.

*Paramony* contém as notas de rodapé (com referências à *Bíblia*) que devem ser incluídas em cada documento do *Livro de Urântia*.

Na pasta `paramony`, existem dois ficheiros: `Bible.md` e `The Urantia Book.md`, contendo as traduções de *Paramony* para a *Bíblia* e o *Livro de Urântia*, respectivamente. Cada ficheiro possui uma estrutura de tabela de duas colunas muito simples em formato Markdown. Tudo o que tem de fazer é criar uma cópia temporária destes dois ficheiros e apagar o conteúdo da coluna `translation`, deixando apenas a primeira coluna `text`, bem como os caracteres de barra (`|`) e o cabeçalho. Por outras palavras, criámos ficheiros temporários contendo apenas o texto em inglês, separado em linhas. Depois, basta traduzir os dois ficheiros temporários com um tradutor automático, como o Google Translate, e copiar a tradução após cada linha. O Visual Studio Code tem opções para selecionar e copiar texto que tornam esta tarefa muito rápida, mas lembre-se que estes ficheiros são muito longos e não é boa ideia copiar e colar mais de 1.000 linhas de cada vez.

O resultado final deverá ser semelhante ao apresentado neste excerto (por exemplo, para o espanhol):

```md
| text                                        | translation                             |
| --------------------------------------------| ----------------------------------------|
| “Amen” as ritual                            | «Amen» como ritual                      |
| “Blind” man converted                       | La conversión del hombre «ciego»        |
| “Blind” man's speech                        | El discurso del hombre «ciego»          |
| “By what authority do you do these things?” | «¿Con qué autoridad haces estas cosas?» |
| “Children of light”                         | «Hijos de la luz»                       |
```

Este procedimento tem a vantagem sobre o antigo de que o tradutor não tem de lidar com caracteres estranhos típicos do JSON; a única coisa que traduzimos aqui são textos simples separados em linhas, o que facilita e agiliza bastante a tarefa.

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
        <td><a href="/pt/help/web_html_editor">Usando o editor de HTML</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_bible">Obter a Bíblia</a></td>
      </tr>
    </tbody>
  </table>
</figure>