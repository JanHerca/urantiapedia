---
title: "创建文章目录"
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
        <td><a href="/zh/help/github_upload">批量上传内容至 Urantiapedia</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_articles_markdown">获取文章</a></td>
      </tr>
    </tbody>
  </table>
</figure>

以下是如何创建与《尤兰提亚之书》相关的读者撰写的文章目录。

## 过程

文章的临时列表可以在这里找到：[计划文章]（/en/index/articles）。

该列表目前内容非常丰富，并按来源进行组织。目前正在使用的来源如下：

- Urantia 协会网站
- 杂志_Innerface International_
- 杂志《Urantian Journal》
- 期刊《Fellowship Journal》
- 《团契先驱报》杂志
- 文章来自 Halbert Katzen 的《UB Annotaded & UBTheNews》项目
- 来自 Jan Herca 的《拿撒勒的耶稣》项目的文章

资料来源链接已整理在该列表末尾，地址为：[文章参考](/en/index/articles#references)。任何其他读者文章的参考资料也应包含在该列表中。

要编辑文章列表，您可以通过两种方式进行：

- 登录 _Urantiapedia_。前往文章列表：[计划文章](/en/index/articles)。在右上角按钮面板的 _页面操作 > 编辑_ 菜单中，将页面设置为编辑状态。一个简单的 Markdown 编辑器将打开，您可以在其中编辑列表。（重要提示：要执行此操作，您需要管理员权限来启用该页面的编辑权限。）
- 在 GitHub 项目中修改此文件：`/output/wikijs/en/index/articles.md`。要修改它，您可以直接下载该文件或从 GitHub 下载整个项目。有关如何从 GitHub 下载内容，请参阅[助理编辑帮助](/zh/help/github_assistant)。

在前两种情况下，要编辑的文件是一个非常简单的 Markdown 文件，其中每篇文章都必须以表格的形式包含以下内容：

- `:white_square_button:` 标记表示该文章尚未创建。
- 所用源的可选标识符。
- 如果文章出现在杂志上，则会出现问题。
- 标题。
——作者。
- 一些可选的标签，用于对文章进行分类。

例如：

```
| Status                | Source | Issue        | Title                                                 | Author       | Tags     |
| ----------------------| ------ | ------------ | ------------------------------------------------------| -------------| -------- |
| :white_square_button: | Herald | Vol 01, No 1 | "48 Chromosomes - Are We Asking the Right Questions?" | Ken Glasziou | Biology  |
```

## 发送文件

如果您已经从 GitHub 上的文件修改了列表，则有两种方式提交更改：1）如果您是“主编”，请按照[主编帮助](/zh/help/github)中的详细说明使用 GitHub；如果您是“助理编辑”，您可以直接将修改后的 Markdown 文件发送到任何管理员的电子邮箱或 urantiapedia@gmail.com。

## 外部链接

- [Urantiapedia 工具 - GitHub 项目](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_upload">批量上传内容至 Urantiapedia</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_articles_markdown">获取文章</a></td>
      </tr>
    </tbody>
  </table>
</figure>
