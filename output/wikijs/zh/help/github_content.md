---
title: Urantiapedia - GitHub 项目内容
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
        <td><a href="/zh/help/github_edit_local">在您的电脑上本地工作</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_initial_flow">使用某种语言创建初始内容的工作流程</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## *Urantiapedia* 项目的组织

GitHub Github 上组成 *Urantiapedia* 项目的文件夹如下：
- **.vscode**：Visual Studio Code 的配置文件，它是 *Urantiapedia Tools* 的开发 IDE。
- **app**：*Urantiapedia Tools* 应用程序的 JavaScript 源代码文件。
- **css**：一些 CSS 文件，以便更好地显示 Markdown 文件。
- **docs**：一些关于项目的文档，尽管主要帮助在`output/wikijs/help`中。
- **input**：主文件夹，包含用于生成 *Urantiapedia* 许多页面的输入文件。
  - **html**：包含 HTML 格式文件的文件夹。
    - **book-xx**：从 *Urantia Foundation* 获得的原始 HTML 格式的 *Urantia Book* 的不同译本（`book-es`、`book-en` 等）
  - **json**：包含 JSON 格式文件的文件夹。
    - **book-xx**：JSON 格式的不同译本的《尤兰提亚之书》，但没有《Paramony》的脚注（`book-es`、`book-en` 等）
    - **book-xx-footnotes**：JSON 格式的不同译本的《尤兰提亚之书》，但带有 *Paramony* 的脚注（`book-es-footnotes`、`book-en-footnotes` 等）
    - **footnotes-book-xx.json** `DEPRECATED`：JSON 格式的旧版本 *Paramony*。
  - **kml**：用于生成地图的 KML 和 CSV 文件，每个文件位于每种语言的文件夹中（`en`, `es`等）。
  - **markdown** / **xx** （`en`、`es` 等）： 
    - **paramony**：包含最新版本的 Paramony。之前使用的是 JSON 文件，现在使用 Markdown 文件。英语语言文件包含主要表格；其他语言文件仅为翻译。
    - **其他文件夹**：从 PDF/DOCX 格式转换或扫描获得的文章和书籍的临时 Markdown 文件，每个文件都位于每种语言（`en`, `es`等）的文件夹中。此文件夹的内容不会随着时间的推移而保留，因为它会被更正并移动到输出文件夹。
    - **3dmodels_catalog\.md**：3D 模型目录。英语语言文件包含主要表格；其他语言文件仅为翻译。
    - **image_catalog\.md**：图像目录。英语语言文件包含主要表格；其他语言文件仅为翻译。
    - **map_catalog\.md**：地图目录。英语语言文件包含主要表格；其他语言文件仅为翻译。
    - **paralells\.md**：《尤兰提亚之书》与其他内容（文章、圣经、其他书籍等）之间的相似之处的一般目录。
  - **mediawiki** `DEPRECATED`：包含 MediaWiki 的旧版 Wikitext 格式内容的文件夹。*Urantiapedia* 的第一个版本是用 MediaWiki 制作的，但当前版本是用 *Wiki.js* 创建的。
    - **articles-xx**：包含 Wikitext 格式文章示例的弃用文件夹。
    - **main-pages-xx**：包含 Wikitext 格式的帮助内容的弃用文件夹。
    - **modules**：用 Lua 编写的模块，Lua 是用于创建 MediaWiki 模板的脚本语言。
    - **sample**：Wikitext 格式的旧样本内容。
    - **templates**：*Urantipedia* 的模板，是 MediaWiki 格式的可重复使用片段。
  - **svg**：一些 SVG 文件。
  - **tex**：包含 LaTeX 格式文件的文件夹。
    - **bible-xx**：*圣经*的各个译本的 LaTeX 格式（`bible-es`、`bible-en` 等）
  - **txt**：包含 TXT 格式文件的文件夹。
    - **articles-xx**：一些 TXT 格式的示例文章（`articles-es`、`articles-en` 等）。
    - **bible-refs-xx** `DEPRECATED`：TXT 格式的旧版本《Paramony》（《圣经》对《尤兰提亚之书》的交叉引用）（`bible-refs-es`、`bible-refs-en` 等）。
    - **books-xx**：Urantiapedia 图书馆的书籍目录。
    - **topic-index-xx**：以 TXT 格式翻译成每种语言的*术语索引*（`topic-index-es`、`topic-index-en` 等） 
- **output**：包含将批量上传到 *Urantipedia* 网站的输出文件的文件夹。
  - **wikijs**：包含 *Wiki.js* 支持的格式的内容的文件夹。
    - **xx**：每种语言的内容位于各自的文件夹中（例如 `en`、`es` 等）。每种语言的结构相同，如下所示：
      - **3dmodel**：媒体库（3D 模型）。
      - **article**：报纸库（文章和学习辅助工具），按作者分类存放。通常采用 Markdown 格式。
      - **Bible**：圣经的内容。:warning: 重要提示：此文件夹中的文件*不应编辑*。请先编辑`input`文件夹中的文件，然后使用*Urantiapedia 工具*。
      - **book**：书库，按作者分类，通常采用 Markdown 格式。
      - **help**：Urantiapedia 帮助页面。采用 Markdown 格式。
      - **index**：索引。:warning: 重要提示：此文件夹中的部分文件（并非全部）*不应编辑*。请使用 *Urantiapedia Tools* 生成它们。
      - **map**：地图库。目前，它们采用 Markdown 格式，并带有指向 Google 地图的 *iframe*，但未来将仅存储 KML 文件。
      - **news**：Markdown 格式的每月项目更新。
      - **slides**：媒体库（演示文稿）。
      - **tests**：您可以测试未来内容的页面。
      - **The_Urantia_Book** 和 **The_Urantia_Book_Multiple**：《尤兰提亚之书》文档。:warning: 重要提示：此文件夹中的文件*不应编辑*。请先编辑`input`文件夹中的文件，然后使用 *Urantiapedia Tools*。
      - **topic**：百科全书。:warning: 重要提示：此文件夹中的文件*不应编辑*。请先编辑`input`文件夹中的文件，然后使用*Urantiapedia 工具*。
    - **image**：来自网站的图像。
    - **tests**：您可以测试未来内容的页面。

标记为“*已弃用*”的文件夹可以被忽略，因为它们包含在流程中不再使用的材料，并且将来可能会被删除。

文件夹使用的语言代码应遵循 ISO 639-1 标准，每种语言两个字母。https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

为新语言生成内容时，需要担心的文件夹是：
- `input/html`
- `input/json`
- `input/markdown`
- `input/tex`
- `input/txt`

值得注意的是，西班牙语版本目前有三种译本。所有三种译本都将在“Urantiapedia”上发布。因此，将包含以下文件夹：
- `book-es`，带有所谓的欧洲翻译，于 2009 年制作；
- `book-es-1993`，第一版西班牙语译本于 1993 年出版；
- `book-es-2021`，新翻译于 2021 年完成。

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
        <td><a href="/zh/help/github_edit_local">在您的电脑上本地工作</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_initial_flow">使用某种语言创建初始内容的工作流程</a></td>
      </tr>
    </tbody>
  </table>
</figure>