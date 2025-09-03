---
title: "获取图表"
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
        <td><a href="/zh/help/github_diagrams_catalog">创建图表目录</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_images_catalog">创建图像目录</a></td>
      </tr>
    </tbody>
  </table>
</figure>

这里描述了如何获取《尤兰提亚之书》的图表，这些图表已经按照任务[创建图表目录](/zh/help/github_diagrams_catalog)进行了分类。

## 过程

图表是一种非常特殊的内容类型，因为它们不是带有图像的简单文本，例如书籍、文章或学习辅助工具。

图表通常以 `PNG` 或 `JPG` 格式的简单图像形式提供。这些格式的图表用途不大，因为它们的目的是比图像更进一步，提供一些额外的功能，例如：
- 图表不同部分的超链接
- 将鼠标悬停在图表上时会弹出小框。
- 能够在不损失显示质量的情况下放大或缩小图表

浏览器原生支持此功能的格式仅为 [SVG](https://www.w3schools.com/graphics/svg_inhtml.asp) 格式。[HTML 图像地图](https://www.w3schools.com/html/html_images_imagemap.asp) 格式仅允许使用超链接。

因此，这里的过程将是通过引入上述功能（链接、弹出窗口和可扩展性）将任何图表转换为 SVG 格式。

### Urantiapedia 图表的结构

如果您是“主编”并将使用 GitHub 平台，则图表应保存在以下 GitHub 项目文件夹中：`/output/wikijs/en/article` 用于保存英文图表，`/output/wikijs/es/article` 用于保存西班牙语图表，等等。如果这些文件夹中不存在，我们将创建一个新的，并以作者姓名命名（空格替换为下划线）。最后，在作者文件夹中，我们将创建一个 Markdown 文件，并遵循以下标准为其指定唯一名称：
- 名称将使用图表的标题，但尽可能缩写。
- 名称始终为英文，因此如果原始图表不是英文，则标题会被翻译。
- 空格被下划线代替。
- 删除冒号或感叹号等特殊字符。
- 例如，如果图表的标题是“主宇宙”（The Master Universe），则可能的文件名是`The_Master_Universe.md`。如果标题是“无限精神的个性”（Las personalidades del Espíritu Infinito）（西班牙语），则文件名应该是“无限精神的个性”（`Personalities_of_Infinite_Spirit.md`）。

如果您是“助理编辑”，并且不打算使用 GitHub 平台发送文件，只需在您的电脑上创建任意文件夹，将您创建的图表保存在其中即可。之后，当您将工作发送给管理员时，管理员会负责创建正确的文件夹。

### Urantiapedia 图表的基本格式

要使用的格式是 Markdown，并且在其中我们将使用 SVG。

“助理编辑”应将以下内容添加到 Markdown 文件：
- 每个文件都有一个标题。
- 标题下方立即显示作者信息。
- 下面是 SVG 内容。

例如，这可能是一个非常简化的 Markdown 文件：

```
---
title："太阳"
description:
published: true
date: 2021-11-28T14:02:03.086Z
tags: Cosmology, Astronomy
publisher: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

作者：**John Doe**

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

SVG 内容的创建不在本帮助的范围内，需要使用 [Inkscape](https://inkscape.org/en/) 或类似图像矢量化软件。此项任务应由具有矢量图形创建经验的“主编”执行。

## 发送文件

如果您是使用 GitHub 的“主编”，您可以按照[主编帮助](/zh/help/github) 中的详细说明提交图表；如果您是“助理编辑”，您只需将 Markdown 文件发送到任何管理员的电子邮箱或 urantiapedia@gmail.com 即可。

## 外部链接

- [Urantiapedia 工具 - GitHub 项目](https://github.com/JanHerca/urantiapedia)
- [SVG 格式](https://www.w3schools.com/graphics/svg_inhtml.asp)
- [HTML 图像地图格式](https://www.w3schools.com/html/html_images_imagemap.asp)
- [Inkscape]（https://inkscape.org/en/）
- [一个有趣的创建 HTML 图像地图的工具](http://summerstyle.github.io/summer/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_diagrams_catalog">创建图表目录</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_images_catalog">创建图像目录</a></td>
      </tr>
    </tbody>
  </table>
</figure>