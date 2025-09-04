---
title: 编辑器的使用
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
        <td><a href="/zh/help/web_pages">管理页面</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/web_visual_editor">使用可视化编辑器</a></td>
      </tr>
    </tbody>
  </table>
</figure>

创建页面时，您可以使用自己喜欢的编辑器。有些用户喜欢用 Markdown 编写内容，而有些用户可能更喜欢可视化的编辑器。

## 编辑名单

- [可视化编辑器 *富文本所见即所得*](/zh/help/web_visual_editor)
- [Markdown *纯文本格式*](/zh/help/web_markdown_editor)
- [代码 *原始 HTML*](/zh/help/web_html_editor)
- [多语言编辑器*翻译*(即将推出)**](/zh/help/web_multi_editor)
- [地图编辑器 *类似谷歌地图*(即将推出)**](/zh/help/web_map_editor)
- [幻灯片编辑器 *类似 Google 幻灯片*(即将推出)**](/zh/help/web_map_editor)
- [3D 编辑器 *类似画布播放*(即将推出)**](/zh/help/web_3d_editor)
- [API 文档 *REST / GraphQL *(即将推出)**](/zh/help/web_api)
- [博客*帖子时间线*（即将推出）**]（/zh/help/web_blog）
- [类似 Excel 的表格（即将推出）](/zh/help/web_tabular)

## 更改编辑器

您可以使用“转换”操作更改任何页面使用的编辑器。这将尝试将内容转换为新选择的编辑器使用的内容。例如，之前使用 Markdown 编辑器创建的页面可以转换为 HTML 格式，以便与可视化编辑器一起使用。

从**页面操作**菜单（位于右上角和右下角）中选择**转换**。将显示以下对话框：

![ui-convert-page-dialog.png](https://docs.requarks.io/assets/ui/ui-convert-page-dialog.png =550x){.radius-5 .decor-shadow}

选择您想要使用的编辑器，然后单击**转换**。

> :warning: **重要**
>
> 由于编辑器/格式功能的差异，转换后某些格式或未渲染的内容可能会丢失。
>
> 转换前会自动拍摄页面快照，之后您可以随时从页面历史记录中恢复或参考此版本。
>
> _示例_
>
> ∗ 从 Markdown 转换为 HTML 时，`draw.io`图表将保留为其最终渲染图像。您将无法再编辑该图表。
> ∗ 从 Markdown 转换为 HTML 时，标签集将恢复为标准标题和段落（如在 Markdown 编辑器中所示）。
> ∗ 从 HTML 转到 Markdown 时，Markdown 语言中不存在的自定义 CSS 类和 HTML 元素将不会被保留。

作为参考，根据所选的源/目标编辑器会发生以下格式转换：

| 源 | 目标 | 格式转换
| -- | -- | -- |
| Markdown | 可视化编辑器 | Markdown → HTML |
| Markdown | 原始 HTML | Markdown → HTML |
| 可视化编辑器 | Markdown | HTML → Markdown |
| 可视化编辑器 | 原始 HTML | *无需格式转换*{.caption} |
| 原始 HTML | Markdown | HTML → Markdown |
| 原始 HTML | 可视化编辑器 | *无需格式转换*{.caption} |



<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/web_pages">管理页面</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/web_visual_editor">使用可视化编辑器</a></td>
      </tr>
    </tbody>
  </table>
</figure>