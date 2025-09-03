---
title: "获取文章"
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
        <td><a href="/zh/help/github_articles_catalog">创建文章目录</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_studyaids_catalog">创建学习辅助工具目录</a></td>
      </tr>
    </tbody>
  </table>
</figure>

这里介绍了如何获取与《尤兰提亚之书》相关的读者文章，这些文章已按照任务[创建文章目录](/zh/help/github_articles_catalog) 进行了编目。

## 过程

[获取“源”书籍](/zh/help/github_sourcebooks_markdown) 中关于书籍的所有内容也适用于此。文章可以以已托管它们的网页形式、不带文本的 PDF 或带文本的 PDF 格式找到。它们也可以单独发布，也可以作为杂志的一部分或与其他文章联合出版。无论如何，第一步都是将杂志转换为 Markdown 格式。

这项任务会根据具体情况使用不同的软件完成，部分已收集了大量文章，可在 GitHub 的 `/input/markdown/en/Innerface` 和 `/input/markdown/en/Herald` 目录中找到，其中包含两本与《尤兰提亚之书》相关的著名出版物，即 *Innerface International* 和 *Fellowship Herald*。这些出版物的文章目录已在此处创建：[计划文章](/en/index/articles)。

现在的任务是使用上述文件夹的内容并构建单独的文章，因为这些文件夹中有完整的杂志。

### Urantiapedia 文章结构

如果您是“主编”并将使用 GitHub 平台，则文章应保存在以下 GitHub 项目文件夹中：`/output/wikijs/en/article` 用于英文文章，`/output/wikijs/es/article` 用于西班牙语文章，等等。如果这些文件夹中不存在，我们将创建另一个文件夹，并以作者姓名命名（空格替换为下划线）。最后，在作者文件夹中，我们将创建一个 Markdown 文件，并根据以下标准为其指定一个唯一的名称：
  - 名称将使用文章标题，但尽可能缩写。
  - 名称始终为英文，因此如果原文不是英文，则标题会被翻译。
  - 空格被下划线代替。
  - 删除冒号或感叹号等特殊字符。
  - 例如，如果一篇文章的标题是《是时候做出更多改变了吗？符号、邪教和《尤兰提亚之书》》，那么可能的文件名应该是`Time_for_More_Change_Symbols_Cults.md`。如果标题是《Jerusalén en tiempos de Jesús》（西班牙语），那么文件名应该是`Jerusalem_in_Jesus_times.md`。

如果您是“助理编辑”，并且不打算使用 GitHub 平台发送文件，只需在您的电脑上创建任意文件夹，将您创建的文章保存在其中即可。之后，当您将工作发送给管理员时，管理员会负责创建正确的文件夹。

可以在`/output/wikijs/en/article/Ann_Bendall/Adam_an_Eve.md`中看到完成的文章示例。

### Urantiapedia 文章的基本格式

使用的格式是 Markdown，与其他替代方案相比，它的样式设置极其简单。

“助理编辑”应审阅文本并添加以下内容：
- 每个文件都有一个标题。
- 标题下方立即显示作者信息。
- 文章内的章节标记。
- 更正段落。
- 粗体和斜体。
- 引号。
- 图像。
- 图像参考。
- 脚注。
- 表格。
- 数学公式或科学计数法中的字符。

所有这些内容在讨论如何格式化书籍章节时已经解释过了：[获取“源”书籍](/zh/help/github_sourcebooks_markdown)。那里给出的所有提示也适用于文章。

## 发送文件

如果您是使用 GitHub 的“主编”，您可以按照[主编帮助](/zh/help/github) 中的详细说明提交文章；如果您是“助理编辑”，您可以直接将 Markdown 文件发送到任何管理员的电子邮箱或 urantiapedia@gmail.com。

## 外部链接

- [Urantiapedia 工具 - GitHub 项目](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_articles_catalog">创建文章目录</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_studyaids_catalog">创建学习辅助工具目录</a></td>
      </tr>
    </tbody>
  </table>
</figure>