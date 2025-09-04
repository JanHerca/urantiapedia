---
title: 管理页面
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
        <td><a href="/zh/help/web_basics">Urantiaapedia 的界面和基本使用</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/web_editors">编辑器的使用</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## 创建页面

创建新页面的方法有多种：

- 从位于页面右上角的**新建页面**按钮。
- 点击指向不存在页面的链接。
- 在浏览器地址栏中手动输入路径。

请参阅 [Urantiaapedia 的界面和基本使用](/zh/help/web_basics) 指南，了解如何逐步创建您的第一个页面。


## 编辑页面

您可以通过单击任何页面右下角的**铅笔**图标或使用位于页面右上角的**页面菜单**来编辑现有页面。

首次创建页面时选择的编辑器将自动加载。请注意，页面创建后可以[更改编辑器](/zh/help/web_editors)。

## 文件夹

Urantiapedia 并不依赖传统的文件夹结构来组织页面，而是使用页面的路径。

例如，在传统系统上，为了在`article/Ann_Bendall/Adam_and_Eve`处创建页面，您需要先创建一个文件夹`article`，然后打开此文件夹并创建一个名为`Ann_Bendall`的子文件夹，最后才能在其中创建一个名为`Adam_and_Eve`的页面。

在 Urantiapedia 中，您可以直接在路径`article/Ann_Bendall/Adam_and_Eve`处创建页面。文件夹`article`和`Ann_Bendall`会被自动推断，但它们实际上并不存在于页面路径上下文之外。因此，您无需管理文件夹，只需专注于您想要的页面路径即可。

因此，没有创建文件夹的选项。只需输入所需的完整路径即可。文件夹将在创建时自动推断。

## 命名限制

以下路径不能用于内容，仅供系统使用。

### 单字符页面

**所有**单字符路径均保留用于访问 Urantiapedia 的各个部分：

- `a`: 管理区域
- `c`: 注释
- `e`: 页面编辑器
- `f`：资产管理器
- `h`: 页面历史记录
- `i`: 通过 ID 浏览页面
- `p`: 用户资料
- `s`: 页面源代码
- `t`: 标签
- `u`: 上传端点*(API)*
- `w`：个人维基
{.grid-list}

### IETF 语言标签

下列格式的语言标签被保留用于指定要使用的区域设置命名空间。

- 两个字母的语言代码（例如 `en`、`fr`）
- 特定国家/地区的区域设置代码（例如`en-us`、`fr-ca`）
{.grid-list}

### 保留字

路径不能完全匹配以下条件，也不能作为路径的第一部分。例如，`register`或`register/test`不是有效路径，但`registering`可以。

- _assets
- favicon *\[.ico]*
- graphql
- healthz
- home*（保留用于根主页）*
- login
- logout
- register
{.grid-list}

### 非法字符

路径不能包含以下字符：

- 空格*（请使用破折号代替）*
- 句点*（保留用于文件扩展名）*
- 不安全的 URL 字符*（例如标点符号、引号、数学符号等）*

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/web_basics">Urantiaapedia 的界面和基本使用</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/web_editors">编辑器的使用</a></td>
      </tr>
    </tbody>
  </table>
</figure>