---
title: "创建所有宗教书籍目录"
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
        <td><a href="/zh/help/github_studyaids_markdown">获取学习辅助</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_religious_books_markdown">获取有关所有宗教的书籍</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> 此任务目前已完成并关闭，但您可以通过发送电子邮件至 urantiapedia@gmail.com 对图书列表提出更改建议。
{.is-info}

这描述了如何创建一个关于世界各大宗教书籍的目录，以作为创建 [Urantiapedia 图书馆](/en/book) 的指南，该图书馆是 [Urantiapedia 项目](/zh/help/phases) 的主要基石之一。

## 语境

正如《尤兰提亚百科图书馆》的创作动机所解释的那样，《尤兰提亚之书》的读者努力学习和宣传世界所有宗教的宗教著作有着重要的原因，尤其是那些有着悠久传统或始终信仰造物主上帝的宗教。

了解世界各国人民的思想和信仰，对于促进不同种族和国家之间的同情与理解，以及对构建一个和平友爱的世界至关重要。《尤兰提亚之书》中有一幅精美的插图，描绘了耶稣和他的一位印度学生正在研读当时许多宗教的著作。[UB 130:3.5](/en/The_Urantia_Book/130#p3_5) 这是一段未发表的耶稣生平中鼓舞人心的文字，无疑旨在激励我们更加广泛地阅读宗教书籍。

正如耶稣和加尼德在亚历山大编纂宗教著作一样，我们也将在《Urantiapedia》中继续前行。我们将创建一个任何读者都可以轻松查阅的在线数字图书馆。不仅如此，我们还将把所有这些书籍与《Urantiapedia》的其他内容链接起来。

## 过程

这项任务将涉及创建一份涵盖世界所有宗教的书籍清单。清单文件如下：

https://github.com/JanHerca/urantiapedia/blob/master/input/txt/books-en/Religious_books.tsv

对于在 GitHub 上对此文件的任何修改，必须遵循为[管理员](/zh/help/admin)、[主编](/zh/help/github) 或 [助理编辑](/zh/help/github_assistant) 用户提供的说明。

这个文件的内容很简单：

- 这是一个 TSV 文件，其中的文本由制表符分隔。
- 每行代表一书架的书，或书架内的一组书，或前一组书中的一个子组，或一本书。
- 顺序很重要，因为列表保持层次结构（书架、组、子组、书籍）。
- 所有行均有三条数据，由两个制表符分隔。
- 书架包含：书架名称；书架上书籍来源网站或书籍的参考资料；Urantiapedia 上的该书架索引路径。
- 一个组有：组的名称；标签`<group>`；空。
- 子组具有：子组名称；标签`<subgroup>`；空。
- 一本书有：标题；该书在 Urantiapedia 上的路径（如果存在）；OK（如果该书已上传）或为空（如果未上传）。

> 强烈建议使用 [Visual Studio Code](https://code.visualstudio.com/) 编辑 TSV 文件，并添加扩展名 [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)，这样可以对数据进行着色以及执行其他更多操作。
{.is-info}

## 结果

使用此文件，已手动创建了_Urantiapedia 图书馆_的索引以及每个书架的索引（使用_replaces_）。结果可在[所有书组索引](/en/index/books)中查看。您也可以在本网站左侧菜单中选择`OTHER BOOKS \ Index`访问此页面。目前，此页面仅提供英语、西班牙语和法语版本。

## 外部链接

- [Urantiapedia 工具 - GitHub 项目](https://github.com/JanHerca/urantiapedia)

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_studyaids_markdown">获取学习辅助</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_religious_books_markdown">获取有关所有宗教的书籍</a></td>
      </tr>
    </tbody>
  </table>
</figure>