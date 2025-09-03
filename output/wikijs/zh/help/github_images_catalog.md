---
title: "创建图像目录"
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
        <td><a href="/zh/help/github_diagrams_svg">获取图表</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</figure>

以下是创建项目图像目录的方法。此目录是一个文件，用于自动将插图添加到《尤兰提亚之书》和《尤兰提亚百科全书》的其他部分。

我们将负责《Urantiapedia》的视觉效果。所有内容都将尽可能地清晰易懂，并配有高质量的插图。

## 公共领域图像目录

公共领域有许多图像或插图资源可用于此目的。例如：

-维基共享资源。它是维基百科的姊妹项目，用于托管公共领域插图。一些古典和圣经主题艺术家的作品集可以在这里找到：
  - 詹姆斯·蒂索（James Tissot）：
    - https://commons.wikimedia.org/wiki/Gospel_harmony_(James_Tissot)
    - https://commons.wikimedia.org/wiki/Paintings_by_James_Tissot
    - https://www.wikidata.org/wiki/Wikidata:WikiProject_sum_of_all_paintings/Creator/James_Tissot
    - https://commons.wikimedia.org/wiki/Category:The_Life_of_Jesus_Christ_by_James_Tissot
  - William Hole:
    - https://commons.wikimedia.org/wiki/William_Hole%27s_Bible_Illustrations#
  - Gustave Doré:
    - https://commons.wikimedia.org/wiki/Dor%C3%A9%27s_Bible_Illustrations
  - Harold Copping:
    - https://commons.wikimedia.org/wiki/Copping%27s_Bible_Illustrations
- rawpixel。一款在线图像采集服务。它有很多公开的资源：
  - https://www.rawpixel.com/category/53/public-domain
- 遗产图书馆。大量复古插图。
  - https://www.heritagetype.com/pages/free-vintage-illustrations
- 大英博物馆。
  - https://www.britishmuseum.org/collection
- 大英图书馆
  - https://www.flickr.com/photos/britishlibrary/albums
- europeana.
  - https://www.europeana.eu/en/collections
- 博物馆。各种艺术机构联合起来。
  - https://museo.app/
- V&A。
  - https://collections.vam.ac.uk/search/
- Rikjsmuseum.
  - https://www.rijksmuseum.nl/en/rijksstudio
- Smithsonian.
  - https://www.si.edu/openaccess
- 耶鲁大学皮博迪自然历史博物馆
  - https://collections.peabody.yale.edu/search/
- 大都会
  - https://www.metmuseum.org/art/the-collection
- 国家美术馆
  - https://www.nga.gov/open-access-images.html
-《公共领域评论》
  - https://publicdomainreview.org/
- David Rumsey Map Collection
  - https://www.davidrumsey.com/luna/servlet/view/all
- 概念艺术家。他们的作品不属于公共领域，但可以联系艺术家申请使用许可。
  - Gary Tonge：https://visionafar.com

## 过程

图片目录仅在 GitHub 上的`input/markdown/en/image_catalog.md`文件夹中。每种语言都有各自的目录，但主要表格仅在英语的`en`文件夹中找到。对于其他语言，只有一个英文标题翻译表。例如，`/input/markdown/es/image_catalog.md`中仅包含英文到西班牙语的标题翻译。

该目录是一个 Markdown 文件，包含多个部分，每个部分都标有`##`标记。这些部分代表具有相同或相似来源的插图或图像块，以便能够以图像组的形式进行工作。

每个部分都有一个 Markdown 格式的表格，内容如下：
- `ref`：表示《尤兰提亚之书》中将在其下方或旁边显示图片的段落。如果尚未确定，可以留空。
- `float`：指示图片是否浮动在文本旁边。它可以采用以下三个值：
  - 空：图像是一个块，文本位于其上方和下方。
  - `R`：图片向右浮动，文本继续在左侧显示。如果设备宽度不足，则不会出现此行为。
  - `L`：图片向左浮动，文本继续在右侧显示。如果设备宽度不足，则不会出现此行为。
- `title`：图片或插图的标题。必须始终存在。
- `file`：文件的名称，包含扩展名。文件夹路径在部分中指明。它必须始终存在。
- `author`：作者。如果未知，可以留空。
- `year`：出版年份。如果不知道，可以留空。
- `url`：获取图片的网址。该地址必须始终存在。

例如，这可能是某个部分的片段：

```
## /image/The_Urantia_Book/Jesus_life/paintings


| ref      | float | title                          | file                           | author       | year        | url                                                                                                                                             |
| -------- | ----- | ------------------------------ | -------------------------------| -------------| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------|
| 122:8.5  |       | The Adoration of the Magi      | Adoration_of_the_Magi.jpg      | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Magi_(L'adoration_des_mages)_-_James_Tissot_-_overall.jpg        |
|          |       | The Adoration of the Shepherds | Adoration_of_the_Shepherds.jpg | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Shepherds_(L'adoration_des_bergers)_-_James_Tissot_-_overall.jpg |
```

要编辑图片目录，您必须前往 GitHub 项目并修改以下英文文件：`input/markdown/en/image_catalog.md`。然后，对于每张新图片，您都必须修改另一个文件 `input/markdown/en/image_catalog.md`，并将标题从英语翻译成西班牙语。不过，这第二次修改可以忽略，因为在使用图片目录时，我们会检查未翻译的标题。要修改文件，您可以从 GitHub 下载整个项目，也可以仅下载需要修改的文件。有关如何从 GitHub 下载内容，请参阅[助理编辑帮助](/zh/help/github_assistant)。

## 发送文件

要推送更改，您有两个选择：如果您是“主编”，请按照[主编帮助](/zh/help/github)中的详细说明使用 GitHub；如果您是“助理编辑”，您可以直接将修改后的 Markdown 文件发送到任何管理员的电子邮箱或 urantiapedia@gmail.com。

## 外部链接

- [Urantiapedia 工具 - GitHub 项目](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_diagrams_svg">获取图表</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</figure>
