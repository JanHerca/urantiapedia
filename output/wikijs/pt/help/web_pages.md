---
title: Gerenciar páginas
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
        <td><a href="/pt/help/web_basics">Interface e uso básico da Urantiapedia</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/web_editors">Uso de editores</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## Crie uma página

Existem várias maneiras de criar uma nova página:

- No botão **Nova página**, localizado no canto superior direito da página.
- Ao clicar em um link apontando para uma página não existente.
- Digite manualmente o caminho na barra de endereços do navegador.

Confira o guia [Interface and basic use of Urantiapedia](/pt/help/web_basics) sobre como criar sua primeira página passo a passo.


## Editar uma página

Você pode editar uma página existente clicando no ícone **Lápis** no canto inferior direito de qualquer página ou usando o **Menu da página**, localizado no canto superior direito da página.

O editor selecionado ao criar a página pela primeira vez será carregado automaticamente. Observe que é possível [alterar editor](/pt/help/web_editors) depois que uma página é criada.

## Pastas

Urantiapedia não depende de uma estrutura de pastas tradicional para organizar as páginas. Em vez disso, o caminho da página é usado.

Por exemplo, em um sistema tradicional, para criar uma página em `article/Ann_Bendall/Adam_and_Eve`, você precisa primeiro criar uma pasta `article`, depois abrir esta pasta e criar uma subpasta chamada `Ann_Bendall` para finalmente poder criar uma página dentro chamada `Adam_and_Eve`.

Na Urantiapedia, você pode criar uma página diretamente no caminho `article/Ann_Bendall/Adam_and_Eve`. As pastas `article` e `Ann_Bendall` serão automaticamente inferidas, mas elas não existem fora do contexto do caminho da página. Portanto, você não precisa gerenciar pastas e pode se concentrar apenas no caminho que deseja para suas páginas.

Por esse motivo, não há opção para criar pastas. Basta digitar o caminho completo desejado. As pastas serão inferidas automaticamente após a criação.

## Restrições de nomenclatura

Os caminhos a seguir não podem ser usados ​​para conteúdo e são reservados para uso do sistema.

### Páginas de um caractere

**Todos** os caminhos de um único caractere são reservados para acessar várias partes da Urantiapedia:

- `a`: Área de Administração
- `c`: Comentários
- `e`: Editor de página
- `f`: Gerenciador de Ativos
- `h`: Histórico da página
- `i`: Navegar na página por ID
- `p`: Perfil do usuário
- `s`: Origem da página
- `t`: Etiquetas
- `u`: Carregar Endpoint *(API)*
- `w`: Wiki pessoal
{.grid-list}

### Tags de idioma IETF

As tags de idioma nos formatos listados abaixo são reservadas para especificar o namespace de localidade a ser usado.

- Código de idioma de duas letras (por exemplo, `en`, `fr`)
- Código de localidade específico do país (por exemplo, `en-us`, `fr-ca`)
{.grid-list}

### Palavras reservadas

Os caminhos não podem corresponder exatamente aos termos abaixo ou ser a primeira parte do caminho. Por exemplo, `register` ou `register/test` não são caminhos válidos, mas `registering` está bem.

- _ativos
- favicon *\[.ico]*
- graphql
- saúdez
- home *(reservado para a página inicial raiz)*
- Conecte-se
- sair
- registro
{.grid-list}

### Caracteres ilegais

Os caminhos não podem conter os seguintes caracteres:

- Espaço *(use traços)*
- Período *(reservado para extensões de arquivo)*
- Caracteres de URL não seguros *(como sinais de pontuação, aspas, símbolos matemáticos etc.)*


<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/web_basics">Interface e uso básico da Urantiapedia</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/web_editors">Uso de editores</a></td>
      </tr>
    </tbody>
  </table>
</figure>