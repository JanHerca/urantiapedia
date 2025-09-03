---
title: 《尤兰提阿百科全书》里程碑
description:
published: true
date: 2021-12-08T13:55:38.362Z
tags: help
editor: markdown
dateCreated: 2021-11-28T13:55:38.362Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/content">《Urantiapedia》内容</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/languages">支持的语言</a></td>
      </tr>
    </tbody>
  </table>
</figure>

对于即将收录到 *Urantipedia* 的每种语言，工作将按照以下阶段进行。我们在此列出每个阶段需要完成的任务、需要进行修订的地区以及合作者的角色。

## 里程碑一——《尤兰提亚之书》和《圣经》

此阶段整合了以特定语言推出《尤兰提亚百科全书》所需的最低限度内容。这包括《尤兰提亚之书》和《圣经》，两者相互关联，从而形成从《尤兰提亚之书》到《圣经》以及从《圣经》到《尤兰提亚之书》的链接。

为了创建到《圣经》的链接，我们使用了 Duane L. Faw 编写的《Paramony》，这是一个包含《圣经》和《尤兰提亚之书》之间交叉引用的文件。

https://urantia-book.org/urantiabook/paramony/


任务 | 地点 | 人员
--- | --- | ---
开发 Wiki.js 文件转换器 | GitHub | 开发人员
将每篇《尤兰提亚之书》论文转换为包含《圣经》链接的页面 | GitHub | 主编
将《圣经》的每一章转换成一个页面，并链接到《尤兰提亚之书》| GitHub | 主编
批量加载 Wiki.js 格式的文件 | GitHub | 管理员

> 此阶段已完成 27 种语言的翻译。
{.is-success}

## 里程碑 II - 报纸图书馆、尤兰提亚图书馆和百科全书

此阶段将扩展《尤兰提亚百科全书》的内容，涉及以下领域：
- **报纸档案**：《尤兰提亚之书》的文章和学习辅助资料。[尤兰提亚基金会](https://www.urantia.org/) 网站、[联谊会](https://urantiabook.org/)、尤兰提亚协会以及个人网站上都有很多此类资料。未经作者明确许可，任何内容不得发布。内容可以通过两种方式上传：公开版（任何编辑均可修改）和封闭版（只有作者或经作者授权的用户才能修改）。文章中也可能包含图片。
- **图书馆**。涵盖世界各大宗教的宗教书籍、读者书籍，以及除《圣经》之外，疑似《尤兰提亚之书》部分章节中启示者所用书籍。例如，马修·布洛克就是一位非常出色的读者，他找到了这些资料。https://urantiabooksources.com/
- **百科全书**。*尤兰提亚联谊会*为其英文版《尤兰提亚之书》创建的索引，正被用作创建指南。由于该索引仅包含简短注释，因此正在扩展为全文，作为每个主题页面的初始版本。https://urantia-book.org/urantiabook/topical_index/index.htm
- **索引**，包含链接列表的页面，可作为先前内容的入口点。


任务 | 地点 | 人员
--- | --- | ---
将书籍和文章转换为 Wiki.js 的开发 | GitHub | 开发人员
开发“主题索引编辑器”，这是一个可加速“百科全书”工作速度的向导 | GitHub | 开发人员
将《百科全书》转换成包含《尤兰提亚之书》链接的页面 | GitHub | 开发人员
添加与本书及其来源相关的文章和研究 | GitHub | 主编
添加除《圣经》之外的其他书籍 | GitHub | 主编
向 *百科全书* 添加内容 | GitHub | 主编
添加人物、生物、地点、圣经来源、参考文献、引文、年表等的索引。| GitHub | 主编
批量上传 Wiki.js 格式的文件 | GitHub | 管理员

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/help/sample_page_article.png">
<figcaption><em>渲染文章的示例。</em></figcaption>
</figure>

> 此阶段已针对三种语言（英语、西班牙语和法语）完成。
{.is-success}

## 里程碑 III - 翻译

此阶段仅用于开发。已纳入以下内容：
- **Urantiapedia Tools_ 中的一款应用程序，可自动将多个页面同时翻译成多种语言**。此工具执行以下操作：
  - 允许您连接到 Google Cloud Translator 等服务来执行文本翻译。
  - 保持页面样式和格式（Markdown 和 HTML）的完整性。
  - 从原文或现有译本中复制《尤兰提亚之书》和《圣经》的引文，但不进行翻译，以保持文本的完整性并降低翻译成本。
  - 允许您在调用所使用的服务时提前知道执行翻译的成本。
- **《尤兰提亚之书》多种翻译格式**。您可以查看英文原版以及任何可用的译本（一个或多个）。


任务 | 地点 | 人员
--- | --- | ---
_Urantiapedia Tools_ 中大型页面翻译器的开发 | GitHub | 开发人员
为《尤兰提亚之书》开发多种译本的显示模式 | GitHub | 开发人员

<figure id="Sample_fig_2" class="image urantiapedia">
<img src="/image/help/sample_page_side_by_side.png">
<figcaption><em>并排渲染 The Urantia Book 的示例。</em></figcaption>
</figure>

> 此阶段已完成。
{.is-success}

## 里程碑 IV - 扩展、修正、地图库和媒体库

目前，项目已进入新阶段，将在以下领域开展工作：
- 对前几个阶段的内容进行**扩展**。
- **修正**。由于大部分内容都是快速引入的，并且尽可能使用自动化，因此存在许多错误和漏洞，这些错误将随着时间的推移而得到解决。
- **地图库**。一系列交互式和静态地图，阐明了《尤兰提亚之书》提供的地理信息。
- **媒体库**：这将是各种视听材料的存储库，包括以下内容：
  * 图像，可以是说明《尤兰提亚之书》概念的图画或照片。
  * 图表或方案，如果它们非常大，将会变得具有交互性，以便在小型设备上查看。
  * 幻灯片。
  * 3D 模型，每个模型位于单独的页面上，可以是静态的，也可以是像地图一样的交互式的。
  *《尤兰提亚之书》的音频版本。
  * 网站上嵌入了视频集，如果无法嵌入，则提供视频链接，其中包含有关《尤兰提亚之书》的课程或说明。

地图库需要开发一个显示交互式地图的解决方案。无论地图是基于静态图像还是交互式内容，都需要能够放大和缩小地图以显示细节或获取概览。目前已有商业解决方案，例如 [Google Maps](https://www.google.com/maps) 和 [Google Earth](https://www.google.com/intl/es/earth/)，它们使用 Google 的专有格式 ([KML](https://developers.google.com/kml/documentation))。然而，我们也将在此阶段研究其他开源替代方案，以避免在非绝对必要的情况下引入技术依赖。

地图库中要开发的功能应允许以下内容：
- 缩放：放大/缩小地图。无论地图是静态图像还是动态图像，此功能都应始终可用。以下操作仅适用于动态地图。
- 渲染基础层，最好是多个（现代街道地图、卫星地图、地形图）。
- 以不同的视觉风格（图标、粗细、颜色）渲染矢量元素（点、线、多边形）。
- 弹出注释文本，其中可能包含指向其他 *Urantiapedia* 或外部页面的链接。
- 导览，即链接动画的集合，其中摄像机从一个位置移动到另一个位置，内容或注释显示和隐藏。
- 几何动画，无论是否与导游相关，都可以让您展示行程或可视化种族迁徙等。


<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/help/sample_page_map.jpg">
<figcaption><em>渲染交互式地图的示例。</em></figcaption>
</figure>

媒体库也需要开发能够在 Urantiapedia 上进行交互式演示的功能。我们不想简单地链接到 PowerPoint 或 PDF 文件供用户下载和外部查看。我们希望内容涵盖所有语言，并与 Urantiapedia 的其他部分相连接。使用专有格式并引入技术依赖性，这并非易事。因此，我们将寻找能够实现广泛功能且基于标准格式的替代方案。

一些替代方案可能是：
- [Google 文档](https://docs.google.com/)。
- [Prezi](https://prezi.com/)。
- [Impress.js](https://impress.js.org/) ([GitHub](https://github.com/impress/impress.js)) + [Hovercraft](https://regebro.github.io/hovercraft) ([GitHub](https://github.com/regebro/hovercraft))
- [Bespoke.js](https://markdalgleish.com/projects/bespoke.js/) ([GitHub](https://github.com/bespokejs/bespoke))。
- [Reveal.js](https://revealjs.com/) + [黑客幻灯片](https://github.com/jacksingleton/hacker-slides)。
-[Landslide]（https://github.com/adamzap/landslide）。


<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/help/sample_page_slides.png">
<figcaption><em>渲染演示文稿的示例。</em></figcaption>
</figure>

作为_媒体库_的一部分，3D 场景也将包含在内。幸运的是，在 3D 模型领域，有一个用于创建这些 3D 场景的开放标准：来自 [Khronos](https://github.com/KhronosGroup/glTF) 组织的 [glTF](https://www.khronos.org/api/index_2017/gltf)，它类似于 JPG 格式，但属于 3D 领域。您可以在此示例网站上看到此标准的强大功能：

https://github.khronos.org/glTF-Sample-Viewer-Release/

该格式在许多应用程序中被广泛使用和支持，并且已经存在在线 glTF 编辑器和查看器：
- [Sketchfab]（https://sketchfab.com/）
- [PlayCanvas](https://playcanvas.com/)。
- [Babylon.js](https://www.babylonjs.com/)。
- [Three.js](https://threejs.org/) + [编辑器](https://threejs.org/editor/)
- [WebGL Studio](https://webglstudio.org/) + [litescene.js](https://github.com/jagenjo/litescene.js)。


<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/help/sample_page_3d.jpg">
<figcaption><em>渲染 3D 模型的示例。</em></figcaption>
</figure>

任务 | 地点 | 人员
--- | --- | ---
交互式地图显示系统开发 | GitHub | 开发人员
演示显示系统的开发 | GitHub | 开发人员
交互式 3D 模型展示系统开发 | GitHub | 开发人员
添加关于种族迁徙、历史事实和拿撒勒耶稣之旅的交互式地图示例集 | GitHub | 主编
添加一些协会网站上提供的地图演示文稿集合 | GitHub | 主编
添加交互式图表或方案集合 | GitHub | 主编
添加 3D 模型集合，例如天堂岛、建筑球体或伊甸园 | GitHub | 主编
为《尤兰提亚之书》创作音频 | GitHub | 主编
添加嵌入式视频或视频链接集合 | GitHub | 主编

> 此阶段目前正在进行中。
{.is-warning}


## 外部链接

- [Urantiapedia 工具 - GitHub 项目](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub 项目](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia基金会](https://www.urantia.org/)
- [蓝色田野]（https://blue-fields.netlify.app/）
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/content">《Urantiapedia》内容</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/languages">支持的语言</a></td>
      </tr>
    </tbody>
  </table>
</figure>