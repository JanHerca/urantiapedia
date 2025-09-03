---
title: "创建学习辅助目录"
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
        <td><a href="/zh/help/github_articles_markdown">获取文章</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_studyaids_markdown">获取学习辅助</a></td>
      </tr>
    </tbody>
  </table>
</figure>

以下是如何创建《尤兰提亚之书》学习辅助工具目录的方法。

文章和学习辅助工具之间的区别在于，前者只是一段短文，通常出现在杂志中，而在《尤兰提亚百科》中它将是一个单独的网页；而后者是一段更完整的文本，在《尤兰提亚百科》中可能是一页或文件夹（例如书籍）内的几页，并且它主要面向对《尤兰提亚之书》这个复杂主题的研究和理解。

我们区分了两者，尽管它们最终都会保存在项目中的同一个 `/en/article` 文件夹下，与图表相邻。根据内容类型的不同，这种区分可能略显生硬。它们保存在同一位置，以便同一作者创作的所有资料（书籍除外）都集中到_Urantiapedia_ 的同一文件夹或版块下。

## 过程

该流程与文章的流程相同。请参阅[创建文章目录](/en/help/github_articles_catalog)。学习辅助工具的暂定列表可在此处找到：[计划中的学习辅助工具](/en/index/study_aids)。

要编辑该列表，您可以通过两种方式进行：

- 登录 _Urantiapedia_。前往学习辅助工具列表：[计划学习辅助工具](/en/index/study_aids)。在右上角按钮面板的“页面操作 > 编辑”菜单中，将页面设置为编辑状态。一个简单的 Markdown 编辑器将打开，您可以在其中编辑列表。（重要提示：要执行此操作，您需要管理员权限才能在该页面上启用编辑权限。）
- 在 GitHub 项目中修改此文件：`/output/wikijs/en/index/study_aids.html`。要修改它，您可以直接从 GitHub 下载该文件或整个项目。有关如何从 GitHub 下载内容，请参阅[助理编辑帮助](/en/help/github_assistant)。

在前两种情况下，要编辑的文件是一个非常简单的 Markdown 文件，其中每个学习辅助工具都必须以表格的形式包含以下内容：

- `:white_square_button:` 标志表示学习辅助工具尚未创建。
- 标题。
——作者。
- 一些可选的标签，用于对学习辅助工具进行分类。
- 可下载该帮助的 URL。

例如：

```
| Status                | Title                             | Author                | Tags       | URL                                                           |
| ----------------------| ----------------------------------| ----------------------| ---------- | -------------------------------------------------------------- |
| :white_square_button: | "Study of the Master Universe"    | William S. Sadler Jr. | Astronomia | https://www.urantia.org/en/urantia-book/study-the-urantia-book |
```

## 发送文件

如果您修改了 GitHub 上文件的列表，则有两种提交更改的方式：如果您是“主编”，请按照[主编帮助](/en/help/github) 中的详细说明使用 GitHub；如果您是“助理编辑”，则可以直接将修改后的 Markdown 文件发送到任何管理员的电子邮箱或 urantiapedia@gmail.com。

## 外部链接

- [Urantiapedia 工具 - GitHub 项目](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_articles_markdown">获取文章</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_studyaids_markdown">获取学习辅助</a></td>
      </tr>
    </tbody>
  </table>
</figure>
