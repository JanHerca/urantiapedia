---
title: Uso de editores
description: 
published: true
date: 2022-09-06T09:19:18.947Z
tags: help
editor: markdown
dateCreated: 2022-09-02T14:21:26.328Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/web_pages">Gerenciar páginas</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/web_visual_editor">Usando o editor visual</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
Ao criar uma página, você pode usar o editor de sua escolha. Alguns usuários preferem escrever conteúdo no Markdown, enquanto outros podem preferir um editor mais visual.

## Lista de Editores

- [Editor Visual *Rich-Text WYSIWYG*](/pt/help/web_visual_editor)
- [Markdown *Formatação de texto simples*](/pt/help/web_markdown_editor)
- [Código *HTML bruto*](/pt/help/web_html_editor)
- [Editor multilíngue *Tradução *(em breve)**](/pt/help/web_multi_editor)
- [Editor do Google Maps *semelhante ao Google Maps *(em breve)**](/pt/help/web_map_editor)
- [Editor de Apresentações *semelhante ao Apresentações Google *(em breve)**](/pt/help/web_map_editor)
- [Editor 3D *Play Canvas-like *(em breve)**](/pt/help/web_3d_editor)
- [Documentos API *REST / GraphQL *(em breve)**](/pt/help/web_api)
- [Blog *Cronograma de postagens *(em breve)**](/pt/help/web_blog)
- [Tabular *Excel-like *(em breve)**](/pt/help/web_tabular)

## Alterar editor

Você pode alterar o editor usado para qualquer página usando a ação **Converter**. Isso tentará converter o conteúdo a ser usado pelo editor recém-selecionado. Por exemplo, uma página criada anteriormente com o editor Markdown pode ser convertida em HTML para ser usada com o Editor Visual.

Nos menus **Ações da página** (localizados no canto superior direito e no canto inferior direito), selecione **Converter**. A seguinte caixa de diálogo é mostrada:

![ui-convert-page-dialog.png](https://docs.requarks.io/assets/ui/ui-convert-page-dialog.png =550x){.radius-5 .decor-shadow}

Selecione o editor que deseja usar daqui para frente e clique em **Converter**.

> :aviso: **Importante**
>
> Devido às diferenças entre os recursos do editor/formato, alguns conteúdos de formatação ou não renderizados podem ser perdidos após a conversão.
>
> Um instantâneo da página é **tirado automaticamente antes da conversão** e você pode reverter ou consultar esta versão **a qualquer momento posterior** a partir do histórico da página.
>
> _Exemplos_
>
> ∗ Ao passar do Markdown para o HTML, os diagramas `draw.io` serão mantidos como sua imagem final renderizada. Você não poderá mais editar o diagrama.
> ∗ Ao passar de Markdown para HTML, os conjuntos de guias serão revertidos para cabeçalhos e parágrafos padrão (como visto no editor de markdown).
> ∗ Ao passar de HTML para Markdown, classes CSS personalizadas e elementos HTML que não existem na linguagem Markdown não serão preservados.

Como referência, as seguintes conversões de formato ocorrem com base no editor de origem/destino selecionado:

| Fonte | Alvo | Conversão de formato
| -- | -- | -- |
| Remarcação | Editor Visual | Remarcação → HTML |
| Remarcação | HTML bruto | Remarcação → HTML |
| Editor Visual | Remarcação | HTML → Remarcação |
| Editor Visual | HTML bruto | *nenhuma conversão de formato necessária*{.caption} |
| HTML bruto | Remarcação | HTML → Remarcação |
| HTML bruto | Editor Visual | *nenhuma conversão de formato necessária*{.caption} |


<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/pt/help/web_pages">Gerenciar páginas</a></td>
        <td><a href="/pt/help">Índice</a></td>
        <td><a href="/pt/help/web_visual_editor">Usando o editor visual</a></td>
      </tr>
    </tbody>
  </table>
</figure>