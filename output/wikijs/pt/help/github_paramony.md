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

> Esta tarefa está atualmente encerrada e fechada para os 25 idiomas disponíveis.
{.is-info}

Aqui estão descritos os passos necessários para traduzir o *Paramony* do inglês para um novo idioma da *Urantiapedia*. Esta é uma tarefa realizada pelos "Editores Chefes".

O *Paramony* é um arquivo com referências cruzadas entre *A Bíblia* e *O Livro de Urântia*. Ele foi criado em inglês usando um relacionamento de referência cruzada desenvolvido por Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)), convertido de seu formato TXT original para um formato JSON que é mais fácil de processar.

Partimos da versão em inglês de *Paramony* encontrada em `input/json/footnotes-book-en.json`. Faça uma cópia dele e altere o nome para o idioma de destino.

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