---
title: "Urantiapedia — 管理员帮助"
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
        <td><a href="/zh/help/roles">合作者资料</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github">主编帮助</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## 关于 Urantiapedia

[Urantiapedia](https://urantiapedia.org) 是一个基于 [Wiki.js](https://js.wiki/) 的协作网站，旨在成为传播有关 *《尤兰提亚之书》* 所有知识的统一中心。

## 关于在 Urantiapedia 和 Blue Fields 上注册

如果您想参与此项目，最佳联系方式是发送电子邮件至 urantiapedia@gmail.com。请发送邮件说明您对此项目的兴趣，管理员将授予您访问权限。

另一种即将推出的方式是，在蓝色田野 (Blue Fields) 网站注册。该网站旨在团结和组织《尤兰提亚之书》(The Urantia Book) 的读者，帮助他们参与世界各地充满智慧、意义深远且利他主义的项目。注册后，项目团队将与您联系。蓝色田野上的尤兰提亚百科 (Urantiapedia) 项目可在此处访问：蓝色田野上的尤兰提亚百科 (Urantiapedia on Blue Fields)：[蓝色田野上的尤兰提亚百科 (Urantiapedia on Blue Fields)](https://blue-fields.netlify.app/projects/292396532506821125)。然而，该网站尚未完全投入运营，因此建议您通过电子邮件联系。

## 关于 GitHub

[GitHub](https://github.com/) 是一个用于协作项目（尤其是代码或 Web 内容项目）版本控制的平台。

GitHub 上的 *Urantiapedia* 项目 (https://github.com/JanHerca/urantiapedia) 包含网站的所有内容，以及一个用于自动化内容创建的应用程序 (*Urantiapedia Tools*)。*Urantiapedia-backup* 项目 (https://github.com/JanHerca/urantiapedia-backup) 是一种用于批量上传内容的机制。

## 本手册适用于谁？

本手册适用于用户 *管理员* 或 *admins*，即：
- 在 [GitHub](https://github.com/) 上注册的用户。
- 由运行 Urantiapedia 项目的团队授权为 *管理员* 的用户。
- Urantiapedia 上的注册用户。只有其他 *admin* 用户才能将用户注册为 *admin*。
- 具有 Linux、[Docker](https://www.docker.com/)、[Kubernetes](https://en.wikipedia.org/wiki/Kubernetes)、[Git](https://git-scm.com/) 和 [GitHub](https://github.com/) 知识的用户。
- 至少熟悉《尤兰提亚之书》一种出版语言的用户，最好能熟练掌握英文版。
- 希望无私合作将与《尤兰提亚之书》相关的信息纳入《尤兰提亚百科》的用户。

在项目的每个阶段，只有网站管理员负责将大量更改上传到 *Urantiapedia* 网站。更多关于项目阶段的信息，请参阅 [帮助开始](/zh/help/phases)。

## GitHub 工作流程

GitHub 工作流程详见 Urantiapedia GitHub 项目用户手册。您可以先阅读 [GitHub 入门](/zh/help/github_fork)，然后再了解 GitHub 上其他操作的步骤和选项。

这是该手册的完整索引：
- [GitHub 入门](/zh/help/github_fork)
- 在 GitHub 上工作：
  - [直接从 GitHub 网站工作](/zh/help/github_edit_on_web)
  - 在 GitHub 上本地工作：
    - [设置你的 GitHub 项目](/zh/help/github_setting)
    - [在您的电脑上本地工作](/zh/help/github_edit_local)
- [GitHub 项目内容](/zh/help/github_content)
- [使用某种语言创建初始内容的工作流程](/zh/help/github_initial_flow)

## 通过本网站进行合作

由于存在风险，此类协作仅限*管理员*和*主编*用户使用。前者可以编辑任何内容；而后者则只能编辑部分内容。

在这种情况下，所有任务都通过此网站执行。您需要使用提供的编辑帐户登录，并按照以下手册进行编辑：
- [Urantiapedia 界面和基本使用](/zh/help/web_basics)
- [管理页面](/zh/help/web_pages)
- [使用编辑器](/zh/help/web_editors)
  - [使用可视化编辑器](/zh/help/web_visual_editor)
  - [使用 Markdown 编辑器](/zh/help/web_markdown_editor)
  - [使用 HTML 编辑器](/zh/help/web_html_editor)

## 任务

有关该项目各个阶段的更多信息，请参阅[Urantiaapedia 的阶段](/zh/help/phases)。

### 第一阶段：《尤兰提亚之书》和《圣经》

一旦我们将初始输入放入正确的文件夹中，按照上面手册中的步骤，对于每种语言，在第一阶段，要采取的步骤如下：
1. 将 *Paramony* 从英语翻译成目标语言。请参阅 [Paramony 翻译](/zh/help/github_paramony)。
2. 获取目标语言的圣经译本。请参阅[获取圣经](/zh/help/github_bible)。
3. 将《尤兰提亚之书》从 HTML 格式转换为 JSON 格式（不带脚注）。请参阅[转换为 JSON](/zh/help/github_book_json)。
4. 为《尤兰提亚之书》添加 JSON 格式的脚注。请参阅[添加脚注](/help/github_footnotes)。
5. 将《尤兰提亚之书》（含脚注）从 JSON 格式转换为 Wiki.js 格式，并包含相关术语的引用。请参阅[《尤兰提亚之书》转换](/help/github_book_to_wiki)。
6. 将《圣经》从 LaTeX 格式转换为 Wiki.js 格式并添加脚注。请参阅[圣经转换](/help/github_bible_to_wiki)。
7. 将更改上传至 [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup)。请参阅 [批量上传内容至 Urantiapedia](/zh/help/github_upload)。

### 第二阶段：报刊图书馆、图书图书馆和百科全书

1. 创建读者撰写文章的目录。请参阅[文章目录](/zh/help/github_articles_catalog)。
2. 获取文章。请参阅[获取文章](/zh/help/github_articles_markdown)。
3. 创建学习辅助工具目录。
4. 获取之前的学习辅助工具。请参阅[获取学习辅助工具]( /zh/help/github_studyaids_markdown)。
5. 创建涵盖所有宗教书籍的目录。请参阅[宗教书籍目录](/zh/help/github_religious_books_catalog)。
6. 获取以上书籍。请参阅[获取源书籍](/zh/help/github_religious_books_markdown)。
7. 创建启示者使用的书籍目录。请参阅[创建目录](/zh/help/github_sourcebooks_catalog)
8. 获取据称是启示者使用的书籍。请参阅[获取书籍](/zh/help/github_sourcebooks_markdown)
9. 将*百科全书*从英语翻译成目标语言并进行修订。请参阅[百科全书的翻译和修订](/zh/help/github_topicindex)。
10. 将 *Encyclopedia* 从 TXT 格式转换为 Wiki.js 格式。请参阅 [Encyclopedia Convert](/help/github_topicindex_to_wiki)。

### 第四阶段：地图库和媒体库

1. 创建图表目录。请参阅[图表目录](/zh/help/github_diagrams_catalog)。
2. 获取之前的图表，以 HTML 图像地图格式，最好是 SVG 格式。请参阅[获取图表](/zh/help/github_diagrams_svg)。
3. 创建项目的镜像目录。请参阅[镜像目录](/zh/help/github_images_catalog)。

![](/image/help/formats.png)

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
        <td><a href="/zh/help/roles">合作者资料</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github">主编帮助</a></td>
      </tr>
    </tbody>
  </table>
</figure>