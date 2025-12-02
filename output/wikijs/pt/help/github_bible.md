---
title: Obtendo a Bíblia
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
        <td><a href="/pt/help/github_paramony">Tradução do Paramony</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_book_json">Conversão para JSON</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> Esta tarefa está atualmente encerrada e fechada para os 28 idiomas disponíveis.
{.is-info}

Uma boa fonte para obter traduções de *A Bíblia* que também são livres de direitos autorais é usar o software [e-Sword](https://www.e-sword.net/), um aplicativo gratuito que permite baixar traduções de *A Bíblia* em diferentes idiomas e depois exportar ou copiar seu conteúdo para outros arquivos.

Qualquer outra forma de obter uma tradução livre de direitos autorais de *A Bíblia* é válida desde que o conteúdo seja copiado para os arquivos corretos. Esses arquivos devem seguir estas regras:
- os arquivos serão criados na pasta `input/tex/bible-xx`, onde `xx` é o código do idioma de *The Bible*.
- Cada arquivo terá um nome seguindo este padrão: `xxx_name.tex` onde `xxx` será um número sequencial sempre com três dígitos começando em 1 (`001`, `002`, etc.) e `name` será o nome do livro. Os nomes devem estar em cada idioma, mas se não, eles podem estar em inglês. Abaixo está uma lista provisória dos livros a serem incluídos, com seu número. Deve-se notar que a ordem em que os livros são numerados coloca os primeiros livros que são canônicos para todos os credos antes dos livros que são canônicos apenas em alguns credos. Essa ordem não é essencial, mas é útil para facilitar a identificação de cada livro simplesmente pelo número inicial, especialmente quando os nomes de cada livro são usados ​​em cada idioma específico.
- O conteúdo de cada livro deve vir em formato LaTeX. O formato usará apenas alguns comandos LaTeX (`\begin{document}`, `\end{document}`, `\title`,` \chapter`, `\section` e `\par`) conforme detalhado no seguinte trecho do Evangelho de Mateus:

```tex
\begin{document}

\title{Evangelho de Mateus}

\chapter{1}

\par 1 O livro da geração de Jesus Cristo, filho de Davi, filho de Abraão.
. . .

\chapter{2}

\par 1 Tendo nascido Jesus em Belém da Judéia, nos dias do rei Herodes, eis que vieram do oriente magos a Jerusalém, dizendo:
. . .

\end{document}
```

Como você pode ver no extrato anterior, as regras a seguir são:
- Cada livro bíblico começará com uma linha `\begin{document}` e terminará com uma linha `\end{document}`.
- Podem ser colocados comentários, que serão ignorados, usando `%` na frente de cada linha.
- Cada livro terá seu título dentro de um comando `\title{}` no início de tudo.
- Cada capítulo será marcado com o comando `\chapter{}` e dentro do número do capítulo começando em 1.
- Se houver seções (algumas legendas que às vezes são colocadas em algumas edições) elas serão marcadas com o comando `\section{}` e dentro do título da seção serão colocadas.
- Após uma seção ou um capítulo se não houver seções, serão colocados versos, cada um iniciando com o comando `\par`, depois separe o número do verso, sempre iniciando em 1 e depois separe o conteúdo. Cada verso será uma linha.
- Para melhorar a legibilidade, linhas em branco podem ser colocadas antes e depois de capítulos e seções, que serão ignoradas.

## Instalando a ferramenta e-Sword

e-Sword é uma ferramenta totalmente gratuita para estudar a Bíblia no PC. Este é o URL para baixá-lo:

https://www.e-sword.net/

Clique no botão Downloads. Você tem versões para Windows, Mac e também para smartphone e tablets.

Uma vez baixado, execute o instalador e siga as etapas padrão.

## Baixando traduções da Bíblia em e-Sword

Para baixar uma tradução da Bíblia em e-Sword siga estes passos:

1. Abra o e-Sword.
2. Feche qualquer mensagem de inicialização.
3. Vá para o menu *Downloads* e depois *Bibles*.
4. Isso abre o *downloader do módulo e-Sword*. Na aba *Bible* você verá uma lista de Bíblias disponíveis, ordenadas por idioma. É uma visualização em árvore para que você possa recolher ou expandir cada idioma para ver a lista de traduções disponíveis.
5. É importante baixar apenas traduções de domínio público. Não podemos usar versões da Bíblia protegidas por direitos autorais que não sejam de domínio público para evitar qualquer problema legal na *Urantiapedia*.
6. Para download clique no link e aguarde a instalação.
7. Você pode fazer o mesmo com qualquer outra tradução.

## Copiando conteúdo do e-Sword

Para copiar os versículos do e-Sword para os arquivos da Bíblia, podemos usar este processo:

1. Copie todos os arquivos em outro idioma já disponível, por exemplo, em inglês. Dessa forma, você tem um guia e um modelo.
2. Vá para o primeiro arquivo, `001_Genesis.tex`. Selecione tudo o que estiver abaixo de `\title{Genesis}` e acima de `\end{document}` e remova-o.
3. Agora no e-Sword selecione o menu *Bíblia* e então *Copiar versículos*. A janela *Copiar versículos* é aberta.
4. Nos seletores superiores selecione o livro, neste exemplo *Gênesis*, e selecione o primeiro versículo (geralmente é o padrão) e o último versículo do último capítulo (geralmente não é o padrão).
5. Como formato de saída deixe a primeira opção selecionada, a padrão, que cria textos como `Gen 1:1 O texto do versículo`.
6. Agora clique em *Copiar* e cole no Visual Studio Code abaixo do título.
7. O texto colado precisa ser alterado para seguir as convenções de formato LaTeX. Vamos fazer isso muito rápido com três substituições.
8. No Visual Studio Code, selecione o menu *Editar > Substituir*.
9. Na caixa *Localizar* digite `^... ` (atenção para adicionar um espaço final). Na caixa *Substituir* digite `\par ` (também fique atento para adicionar um espaço final). Certifique-se de que o botão *Usar Expressão Regular* esteja clicado. Agora clique no botão *Substituir tudo*.
10. Em seguida, na caixa *Localizar*, digite `\\par ([0-9]*):([1]) ` (esteja ciente de adicionar o espaço final). Na caixa *Substituir* digite `\n\chapter{$1}\n\n\par $2` (esteja ciente de que agora não há espaço extra). Clique em *Substituir tudo*. Isso criará as tags de capítulo.
11. Finalmente na caixa *Find* digite `\\par ([0-9]*):([0-9]*) ` (atenção ao adicionar o espaço final). Na caixa *Substituir* digite `\par $2` (sem nenhum espaço final). Clique em *Substituir tudo*. Isso definirá o formato correto para os parágrafos.
12. É isso. Agora você precisa repetir esse processo com cada livro da Bíblia. É uma tarefa chata, mas leva menos de uma hora para ter todos os livros da Bíblia no formato correto suportados em *Urantiapedia*.

Depois de terminar o trabalho com a tradução da Bíblia, ela pode ser enviada aos mantenedores do projeto.

## Lista de livros bíblicos

Número | Abr. | Título português
---|---|---
001 | Gn | Génesis
002 | Êx | Êxodo
003 | Lv | Levítico
004 | Nm | Números
005 | Dt | Deuteronómio
006 | Js | Josué
007 | Jz | Juízes
008 | Rt | Rute
009 | I Sm | I Samuel
010 | II Sm | II Samuel
011 | I Re | I Reis
012 | II Re | II Reis
013 | I Cr | I Crónicas
014 | II Cr | II Crónicas
015 | Ed | Esdras
016 | Ne | Neemias
017 | Et | Ester
018 | 1 Mac | 1 Macabeos
019 | 2 Mac | 2 Macabeos
020 | Jó | Jó
021 | Sl | Salmos
022 | Pv | Provérbios
023 | Ec | Eclesiastes
024 | Ct | Cantares de Salomão
025 | Eclo | Eclesiástico
026 | Sab | Sabiduría
027 | Is | Isaías
028 | Jr | Jeremias
029 | Lm | Lamentações
030 | Bar | Baruc
031 | Ez | Ezequiel
032 | Dn | Daniel
033 | Os | Oséias
034 | Jl | Joel
035 | Am | Amós
036 | Ob | Obadias
037 | Jn | Jonas
038 | Mq | Miquéias
039 | Na | Naum
040 | Hc | Habacuque
041 | Sf | Sofonias
042 | Ag | Ageu
043 | Zc | Zacarias
044 | Ml | Malaquias
045 | Mt | Mateus
046 | Mc | Marcos
047 | Lc | Lucas
048 | Jo | João
049 | At | Atos
050 | Rm | Romanos
051 | I Co | I Coríntios
052 | II Co | II Coríntios
053 | Gl | Gálatas
054 | Ef | Efésios
055 | Fp | Filipenses
056 | Cl | Colossenses
057 | I Ts | I Tessalonicenses
058 | II Ts | II Tessalonicenses
059 | I Tm | I Timóteo
060 | II Tm | II Timóteo
061 | Tt | Tito
062 | Fm | Filemon
063 | Hb | Hebreus
064 | Tg | Tiago
065 | I P | I Pedro
066 | II P | II Pedro
067 | I Jo | I João
068 | II Jo | II João
069 | III Jo | III João
070 | Jd | Judas
071 | Ap | Apocalipse
072 | Bel | Bel e o Dragão
073 | Man | Prece de Manassés
074 | Tb | Tobias
075 | Jdt | Judite
076 | 1 Enoque | Primeiro Livro de Enoque
077 | As. Mo. | Assunção de Moisés

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
        <td><a href="/pt/help/github_paramony">Tradução do Paramony</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/github_book_json">Conversão para JSON</a></td>
      </tr>
    </tbody>
  </table>
</figure>