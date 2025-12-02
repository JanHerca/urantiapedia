---
title: 用 JSON 格式为《尤兰提亚之书》添加脚注
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
        <td><a href="/zh/help/github_book_json">转换为 JSON</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_book_to_wiki">转换《尤兰提亚之书》</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> 此任务目前已结束，并关闭了 28 种可用语言。
{.is-info}

## 旧程序（已过时）

> 此流程已更新，因为之前过于繁琐。详见下文。
{.is-warning}

为《尤兰提亚之书》添加脚注需要事先完成以下任务：
- 将《Paramony》从英语翻译成目标语言。此任务的结果是针对每种语言生成一个文件（`input/json/footnotes-book-xx.json`）。
- 先前的任务是将《尤兰提亚之书》从 HTML 转换为 JSON（不带脚注）。此任务的结果是，每个语言的文件夹 (`input/json/book-xx`) 中包含 197 个文件。

要向 JSON 文件添加脚注，请按照以下步骤操作：
- 打开*Urantiapedia 工具*。
- 在*流程*中选择：更新《尤兰提亚之书》（JSON）中的圣经参考。
- 文件夹自动填充：对于 *JSON 文件*，类似 `input / json / book-xx`。
- 单击“*执行*”。
- 如果一切正确，将显示“转换已成功执行”*。如果出现错误，将显示错误列表。在这种情况下，建议将错误通知给其中一位*开发者*用户。

![](/image/help/upt_json_json.png)

输出文件与输入文件不同，以避免出现任何问题而无法使用。输出保存在 `input/json/book-xx-footnotes` 文件夹中，其中 `xx` 是与输入文件夹相同的语言代码。

## 新程序

为《尤兰提亚之书》添加脚注需要完成以下任务：
- 将《Paramony》从英语翻译成目标语言。此任务的结果是每种语言对应一个文件（`input/markdown/xx/paramony/The Urantia Book.md`）。
- 将《尤兰提亚之书》从 HTML 预转换为 JSON（不带脚注）。此任务的结果是，每个语言的文件夹 (`input/json/book-xx`) 中包含 197 个文件。

要向 JSON 文件添加脚注，请按照以下步骤操作：
- 打开*Urantiapedia 工具*。
- 在*进程*中，选择：更新*尤兰提亚之书*中的圣经参考资料（MARKDOWN）。
- 自动选择必要的文件夹：对于*JSON 文件*，它将是`input/json/book-xx`。
- 单击“*运行*”。
- 如果一切正确，将显示“转换成功完成”。如果出现错误，则会显示错误列表。在这种情况下，最好通知“开发者”用户，以防软件出现问题。

输出文件与输入文件不同，以防止出现问题时无法使用。输出保存在 `input/json/book-xx-footnotes` 文件夹中，其中 `xx` 是与输入文件夹相同的语言代码。

![](/image/help/upt_md_json.png)

## 外部链接

- [Urantiapedia 工具 - GitHub 项目](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub 项目](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia基金会](https://www.urantia.org/)
- [蓝色田野](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_book_json">转换为 JSON</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_book_to_wiki">转换《尤兰提亚之书》</a></td>
      </tr>
    </tbody>
  </table>
</figure>