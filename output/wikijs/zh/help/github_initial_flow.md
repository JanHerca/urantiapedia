---
title: Urantiapedia - 用一种语言创建初始内容的工作流程
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
        <td><a href="/zh/help/github_edit_local">GitHub 项目内容</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_paramony">Paramony 翻译</a></td>
      </tr>
    </tbody>
  </table>
</figure>

对于要纳入 *Urantiapedia* 的每种语言，以下内容将作为起点。_输入_：
- 《尤兰提亚之书》的官方译本，或原版英文版，以 HTML 格式呈现。此内容将保存在 GitHub 项目的`input/html/book-xx`文件夹中，其中`xx`为双字母语言代码（`es`表示西班牙语，`en`表示英语，等等）。西班牙语版本有多种译本，`book-es`表示所谓的欧洲版本，`book-es-1993`表示 1993 年译本，`book-es-2021`表示 2021 年译本。如果将来其他语言版本也出现多种译本的情况，也将采用类似的惯例。
- 免版税翻译《圣经》，尽可能使用相关语言进行标准化翻译。格式为 LaTeX，文件将保存在 GitHub 项目的`input/tex/bible-xx`文件夹中，其中`xx`为语言代码。
- 西班牙语版《Paramony》的副本（旨在作为翻译指南，西班牙语内容最不重要），位于`input/markdown/es/paramony`。《Paramony》是《圣经》和《尤兰提亚之书》之间的一些交叉引用，位于`input/markdown/en/paramony`。它使用由 Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)) 开发的交叉引用关系创建，并从原始的 TXT 格式转换为更易于处理的 Markdown 格式。英语文件夹中包含包含所有原始信息的表格；其他语言的文件夹中仅包含包含已翻译文本的表格。
- 一份英文版《术语索引》的副本。该索引包含一系列文件，位于`input/txt/topic-index-en`文件夹中。这些TXT文件取自《尤兰提亚之书》*尤兰提亚团契*版附录（[主题索引](https://urantia-book.org/urantiabook/topical_index/index.htm)），以下简称“术语索引”。该“术语索引”已被转换为一组TXT文件，每个字母对应一个TXT文件，其中包含以每个英文字母开头的术语。请将副本重命名，将最后两个字母更改为语言代码。例如，对于法语，应创建一份英文文件夹的副本，并将其命名为`input/txt/topic-index-fr`。

总之，对于法语示例，要创建作为输入的内容将是：

```
input
    html
        book-fr
            *.html
    markdown
        fr
            paramony
                *.md
    tex
        bible-fr
            *.tex
    txt
        topic-index-fr
            *.txt
```
对于任何其他语言，此操作方式类似。部分内容可能已在当前 GitHub 项目中提供。在添加新内容之前，建议先查看现有内容。

先前法语内容生成的结果如下：

```
output
    wikijs
        fr
            Bible
                (folders with the books of the Bible)
                    *.html
            index
                *.html
            The_Urantia_Book
                *.html
            The_Urantia_Book_Multiple
                *.html
            topic
                *.html
```

一旦文件夹和文件按指示整理完毕，创建最终文件所需的每项任务都将使用 *Urantiapedia 工具* 和一些手动编辑来完成。本手册的后续页面将详细介绍这些任务。

## 外部链接

- [Urantiapedia 工具 - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia 基金会](https://www.urantia.org/)
- [蓝色田野](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_edit_local">GitHub 项目内容</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_paramony">Paramony 翻译</a></td>
      </tr>
    </tbody>
  </table>
</figure>