---
title: "获取学习辅助"
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
        <td><a href="/zh/help/github_studyaids_catalog">创建学习辅助工具目录</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_religious_books_catalog">创建所有宗教书籍目录</a></td>
      </tr>
    </tbody>
  </table>
</figure>

这里介绍了如何获取《尤兰提亚之书》的学习辅助工具，这些辅助工具已按照任务[创建学习辅助工具目录](/zh/help/github_studyaids_catalog)进行了编目。

## 过程

[获取文章](/zh/help/github_articles_markdown) 中关于书籍的所有内容也适用于此。学习辅助工具通常以文章形式存在，可以是已包含它们的网页，也可以是不含文本的 PDF 文件，或者包含文本的 PDF 文件。无论如何，第一步都是将学习辅助工具转换为 Markdown 格式。

学习辅助目录位于此处：[计划学习辅助](/en/index/study_aids)。

现在的任务是利用学习辅助工具的内容来获取我们需要的Markdown文件。

### Urantiapedia 学习辅助工具的结构

如果您是“主编”并将使用 GitHub 平台，则学习辅助工具应保存在以下 GitHub 项目文件夹中：`/output/wikijs/en/article` 用于英语学习辅助工具，`/output/wikijs/es/article` 用于西班牙语学习辅助工具，等等。

如您所见，我们为文章和学习辅助工具使用相同的文件夹。这样做是为了将同一作者创作的所有作品（书籍除外）集中到同一个项目文件夹中。

如果在 `article` 文件夹中不存在，我们将创建一个新的，并添加作者名称（空格替换为下划线）。最后，在 author 文件夹中，我们将创建学习辅助工具，如下所示：
- 如果学习辅助工具是一篇短文档，大小与文章相当，则会为其创建一个 Markdown 文件。
- 如果学习辅助工具是一长套不同的部分，几乎是一本书，则会为其创建一个文件夹，并将单独的 Markdown 文件放入其中。


简短学习辅助案例中的 Markdown 文件和广泛学习辅助案例中的文件夹都将按照以下标准以唯一的名称命名：
  - 名称将使用学习辅助工具的标题，但尽可能简短。
  - 名称始终为英文，因此如果原文不是英文，则标题会被翻译。
  - 空格被下划线代替。
  - 删除冒号或感叹号等特殊字符。
  - 例如，如果一个学习辅助工具的标题是“Study of the Master Universe”，那么可能的名称应该是`Study_of_the_Master_Universe`。如果标题是“Las enseñanzas de Jesús”（西班牙语），那么名称应该是`Jesus_teachings`。

如果您是“助理编辑”，并且不打算使用 GitHub 平台发送文件，只需在您的电脑上创建任意文件夹，将您创建的学习辅助工具保存在其中即可。之后，当您将工作发送给管理员时，管理员会负责创建正确的文件夹。


### Urantiapedia 学习辅助工具的基本格式

使用的格式是 Markdown，与其他替代方案相比，它的格式化极其简单。

“助理编辑”应审阅文本并添加以下内容：
- 每个文件都有一个标题。
- 标题下方立即显示作者信息。
- 组成学习辅助工具的每个文件内的章节标记。
- 更正段落。
- 粗体和斜体。
- 引号。
- 图像。
- 图像参考。
- 脚注。
- 表格。
- 数学公式或科学计数法中的字符。

所有这些元素在讨论如何格式化书籍章节时已经解释过了：[获取“源”书籍](/zh/help/github_sourcebooks_markdown)。那里给出的所有说明也适用于学习辅助工具。

## 发送文件

如果您是使用 GitHub 的“主编”，您可以按照[主编帮助](/zh/help/github) 中的详细说明提交学习辅助材料；如果您是“助理编辑”，您可以直接将 Markdown 文件发送到任何管理员的电子邮箱或 urantiapedia@gmail.com。

## 外部链接

- [Urantiapedia 工具 - GitHub 项目](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_studyaids_catalog">创建学习辅助工具目录</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_religious_books_catalog">创建所有宗教书籍目录</a></td>
      </tr>
    </tbody>
  </table>
</figure>