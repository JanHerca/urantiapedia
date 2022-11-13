---
title: Convertendo O Livro de Urântia de HTML para JSON sem notas de rodapé
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
        <td><a href="/pt/help/github_bible">Obter a Bíblia</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_footnotes">Adicionar notas de rodapé do Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Esta tarefa está atualmente encerrada e fechada para os 25 idiomas disponíveis.
{.is-info}

Os arquivos de entrada em formato HTML devem estar nas pastas `input / html / book-xx`, onde `xx` são as duas letras do idioma (`es` = espanhol, `en` = inglês, etc.)

> IMPORTANTE: Os arquivos HTML baixados do site oficial da [Urantia Foundation](https://www.urantia.org/urantia-book/download-text-urantia-book) podem ter alguns problemas para serem processados ​​e precisam ser adicionados pequenas alterações para ajudar no processo de conversão para o formato JSON.

Uma vez que os arquivos tenham sido baixados do site da *Urantia Foundation*, deve haver um arquivo (.html) para cada documento do *O Livro de Urântia*, um total de 197 arquivos. O nome de cada arquivo com cada documento deve seguir o padrão de que os três últimos caracteres do nome sejam o número do documento, de 000 a 196 para que a conversão funcione posteriormente. Por exemplo, em francês o arquivo com o documento 1 é chamado `06-Fascicule001.html`; o mesmo arquivo em búlgaro é chamado `06-Документ001.html`.

Como no formato HTML *O Livro de Urântia* pode adotar diferentes tags HTML para o que é considerado o título do documento, o título de uma seção, etc., no aplicativo que realiza a conversão pode ser necessário incluir algumas alterações ao adicionar um nova linguagem. Este trabalho será feito pelos usuários *desenvolvedores*, responsáveis ​​pelo desenvolvimento das *Urantiapedia Tools*. Este software é desenvolvido em Javascript e o código está na pasta `app` do projeto.

Arquivos para um total de 24 idiomas estão atualmente disponíveis: búlgaro (`book-bg`), tcheco (`book-cs`), dinamarquês (`book-da`), alemão (`book-de`), grego (`book-el`), inglês (`book-en`), espanhol (`book-es`, `book-es-1993` e em breve` book-es-2021`), estoniano (`book-et` ), farsi (`book-fa`), finlandês (`book-fi`), francês (`book-fr`), hebraico (`book-he`), húngaro (`book-hu`), indonésio (` book-id `), italiano (`book-it`), japonês (`book-ja`), coreano (`book-ko`), lituano (`book-lt`), holandês (`book-nl`) , polonês (`book-pl`), português (`book-pt`), romeno (`book-ro`), russo (`book-ru`) e sueco (`book-sv`). Esses arquivos já foram modificados e processados ​​para que o programa de conversão JSON funcione corretamente com eles e os arquivos JSON resultantes também estejam disponíveis.

A tradução de farsi está atualmente em processo e nem todos os documentos estão disponíveis.

Deve-se ter em mente que atualmente existem três traduções na língua espanhola. Todas as três traduções estarão disponíveis em *Urantiapedia*. Por esse motivo, haverá essas pastas:
- `book-es`, com a chamada tradução européia, feita em 2009;
- `book-es-1993`, com a primeira tradução espanhola feita em 1993;
- `book-es-2021`, com a nova tradução feita em 2021.

Para converter arquivos de HTML para JSON sem notas de rodapé, siga estas etapas:
- Abra as *Urantiapedia Tools*.
- Em *Processo* selecione: Converter Livro de Urântia (HTML) para JSON.
- As pastas são preenchidas automaticamente: para *Arquivos HTML* uma como `input/html/book-xx` e para *arquivos JSON* uma como `input/json/book-xx`.
- Clique em *Executar*.
- Se tudo estiver correto aparecerá *Conversão executada com sucesso*. Em caso de erros, a lista de erros aparecerá. Neste caso, é aconselhável notificar um dos usuários *desenvolvedores* sobre o erro.

![](/image/upt_html_json.png)

Os arquivos resultantes no formato JSON serão salvos na pasta `input/json/book-xx`, onde `xx` são as duas letras do idioma (`es` = espanhol, `en` = inglês, etc.)

> IMPORTANTE: Esses arquivos não devem ser gerados ou editados pelos usuários manualmente. Eles devem sempre ser criados por conversão do formato HTML.

Haverá um arquivo para cada documento do *O Livro de Urântia*, um total de 197 arquivos. Os arquivos são denominados `DocXXX.json`, onde `XXX` é o número do documento de `000` a `196`.

O formato desses arquivos é JSON (https://en.wikipedia.org/wiki/JSON). Existe um conversor nas *Urantiapedia Tools* que converte esse formato JSON para o formato final do Wiki.js.

A estrutura dos arquivos JSON é esta:

``` json
{
    "paper_index": "<índice do papel, 0 a 196>",
    "sections": [
        {
            "section_index": "<índice de seção, 0 se existir para N>",
            "section_ref": "<texto de referência da seção, como “0:0”>",
            "section_title": "<título da seção para seções diferentes de zero>",
            "par": [
                {
                    "par_ref": "<par ref, como “0:0.1”>",
                    "par_pageref": "<par ref por página, como “1.1”>",
                    "par_content": "<par content. Veja o formato abaixo>"
                },
                {

                }
            ]
        },
        {

        }
    ],
    "footnotes": [
        "<array de rodapés com referências bíblicas>"
    ],
    "paper_title": "<título do artigo, sem papel X, apenas título>"
}
```
Nos arquivos JSON resultantes desta tarefa, a seção `footnotes` estará vazia. Para completá-lo, a seguinte tarefa deve ser executada.

Para formatar o texto do parágrafo com alguns caracteres estranhos que aparecem no *O Livro de Urântia* nos arquivos JSON, esses equivalentes são usados:

Tipo de caractere | Como são escritos
--- | ---
Itálico | * * (entre asteriscos)
Maiúsculas | $ $ (entre cifrões)
Sublinhado (para idiomas que não incluem opção itálica) | \| \| (entre plecas)

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
        <td><a href="/pt/help/github_bible">Obter a Bíblia</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_footnotes">Adicionar notas de rodapé do Paramony</a></td>
      </tr>
    </tbody>
  </table>
</figure>