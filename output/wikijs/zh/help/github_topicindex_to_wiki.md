---
title: 将百科全书从 TXT 转换为 Wiki.js
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
        <td><a href="/zh/help/github_topicindex">翻译百科全书的修订版</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_diagrams_catalog">图表目录</a></td>
      </tr>
    </tbody>
  </table>
</figure>

TXT 格式的“百科全书”文件由“主编”创建和审阅。这些文件应保存在`input/txt/topic-index-xx`等文件夹中，其中`xx`为目标语言的代码。

要将这些 TXT 文件转换为 Wiki.js 格式，请按照以下步骤操作：
- 打开*Urantiapedia 工具*。
- 在*流程*中选择：将百科全书（TXT）转换为 Wiki.js。
- 文件夹会自动填充：对于 *TXT 文件*，文件夹类似于 `input / txt / topic-index-xx`；对于 *HTML 文件*，文件夹类似于 `output / wikijs / xx / topic`（但如果 `xx` = `en`，则省略）。如果输出文件夹存在，请在项目中创建所有路径。如果输出文件夹中已有 Wiki.js 文件，则现有文件将被覆盖。
- 在*主题类别*中选择`ALL`来处理所有类别的所有主题，或者，只选择一个类别以仅生成属于该类别的主题。
- 单击“*执行*”。
- 如果一切正确，将显示“转换已成功执行”*。如果出现错误，将显示错误列表。在这种情况下，建议将错误通知给其中一位*开发者*用户。

![](/image/help/upt_txt_wiki.png)

输出文件为 HTML 格式。每个主题都会生成一个文件。

输出文件已采用可使用 [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) 项目直接上传至 *Urantiapedia* 的格式。请勾选 [批量上传内容至 Urantiapedia](/zh/help/github_upload)。

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
        <td><a href="/zh/help/github_topicindex">翻译百科全书的修订版</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_diagrams_catalog">图表目录</a></td>
      </tr>
    </tbody>
  </table>
</figure>