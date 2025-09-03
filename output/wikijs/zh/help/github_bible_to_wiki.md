---
title: 将圣经从 LaTeX 格式转换为 Wiki.js 格式并附带脚注
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
        <td><a href="/zh/help/github_book_to_wiki">转换《尤兰提亚之书》</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_upload">批量上传内容至 Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> 此任务目前已结束，并关闭了 27 种可用语言。
{.is-info}

必须在诸如`input / text / bible-xx`之类的文件夹中创建 LaTeX 格式的 *Bible* 文件，其中`xx`是目标语言的代码。

要将这些 LaTeX 文件转换为 Wiki.js 格式，请按照以下步骤操作：
- 打开*Urantiapedia 工具*。
- 在*流程*中选择：将圣经（LaTeX）+参考文献（TXT）转换为Wiki.js。
- 文件夹会自动填充：对于 *TXT 文件*，文件夹类似于 `input / txt / bible-refs-xx`；对于 *LaTeX 文件*，文件夹类似于 `input / tex / bible-xx`；对于 *HTML 文件*，文件夹类似于 `output / wikijs / xx / Bible`（但如果 `xx` = `en`，则省略）。如果输出文件夹存在，请在项目中创建所有路径。如果输出文件夹中已有 Wiki.js 文件，则现有文件将被覆盖。
- 单击“*执行*”。
- 如果一切正确，将显示“转换已成功执行”*。如果出现错误，将显示错误列表。在这种情况下，建议将错误通知给其中一位*开发者*用户。

![](/image/help/upt_tex_wiki.png)

输出文件为 HTML 格式。圣经的每一章都会生成一个文件。

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
        <td><a href="/zh/help/github_book_to_wiki">转换《尤兰提亚之书》</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_upload">批量上传内容至 Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>