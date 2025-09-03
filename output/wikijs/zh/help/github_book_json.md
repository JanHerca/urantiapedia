---
title: 将《尤兰提亚之书》从 HTML 转换为不带脚注的 JSON
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
        <td><a href="/zh/help/github_bible">获取圣经</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_footnotes">添加 Paramony 脚注</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> 此任务目前已结束，并针对 27 种可用语言关闭。
{.is-info}

HTML 格式的输入文件必须位于 `input / html / book-xx` 文件夹中，其中 `xx` 是语言的两个字母（`es` = 西班牙语，`en` = 英语，等等）。

> 重要提示：从 [Urantia Foundation](https://www.urantia.org/urantia-book/download-text-urantia-book) 官方网站下载的 HTML 文件可能存在一些问题，需要进行一些小改动才能转换为 JSON 格式。

从 *Urantia Foundation* 网站下载文件后，《Urantia 之书》的每个文档都应该有一个对应的文件 (.html)，总共 197 个文件。每个文档的每个文件的名称必须符合以下模式：名称的最后三个字符是文档编号，从 000 到 196，以便稍后进行转换。例如，法语版文档 1 的文件名为`06-Fascicule001.html`；保加利亚语版则名为`06-Документ001.html`。

由于 HTML 格式的《尤兰提亚之书》可能采用不同的 HTML 标签来表示文档标题、章节标题等，因此在执行转换的应用程序中，添加新语言时可能需要进行一些更改。这项工作将由负责开发“尤兰提亚百科工具”的“开发者”用户完成。该软件使用 Javascript 开发，代码位于项目的“app”文件夹中。

目前共有 27 种语言的文件可用：阿拉伯语（`book-ar`）、保加利亚语（`book-bg`）、捷克语（`book-cs`）、丹麦语（`book-da`）、德语（`book-de`）、希腊语（`book-el`）、英语（`book-en`）、西班牙语（`book-es`、`book-es-1993` 和即将推出的 `book-es-2021`）、爱沙尼亚语（`book-et`）、波斯语（`book-fa`）、芬兰语（`book-fi`）、法语（`book-fr`）、希伯来语（`book-he`）、匈牙利语（`book-hu`）、印尼语（`book-id`）、意大利语（`book-it`）、日语（`book-ja`）、韩语（`book-ko`）、立陶宛语（`book-lt`）、荷兰语（`book-nl`）、波兰语（`book-pl`）、葡萄牙语（`book-pt`）、罗马尼亚语（`book-ro`）、俄语（`book-ru`），瑞典语（`book-sv`）、土耳其语（`book-tr`）和中文（`book-zh`）。这些文件已修改并处理，以便 JSON 转换程序能够正确处理它们，并且生成的 JSON 文件也可供使用。

波斯语翻译目前正在进行中，并非所有文档均可用。

需要注意的是，西班牙语目前有三种译本。所有三种译本都将在 *Urantiapedia* 上提供。因此，将有以下文件夹：
- `book-es`，包含 2009 年翻译的欧洲版本；
- `book-es-1993`，包含 1993 年翻译的第一个西班牙语版本；
- `book-es-2021`，包含 2021 年翻译的新版本。

要将文件从 HTML 转换为 JSON（不带脚注），请按照以下步骤操作：
- 打开 *Urantiapedia 工具*。-
在 *处理* 中选择：将《尤兰提亚之书》（HTML）转换为 JSON。
- 文件夹会自动填充：对于 *HTML 文件*，文件夹类似于 `input / html / book-xx`；对于 *JSON 文件*，文件夹类似于 `input / json / book-xx`。
- 点击 *执行*。
- 如果一切正确，将显示 *转换已成功执行*。如果出现错误，将显示错误列表。在这种情况下，建议将错误通知给其中一位 *开发者* 用户。

![](/image/help/upt_html_json.png)

生成的 JSON 格式文件将保存在 `input / json / book-xx` 文件夹中，其中 `xx` 是语言的两个字母（`es` = 西班牙语，`en` = 英语，等等）

> 重要提示：用户不应手动生成或编辑这些文件。它们应始终通过从 HTML 格式转换而来创建。
>
每个 *《尤兰提亚之书》* 文档都会有一个文件，总共 197 个文件。这些文件名为`DocXXX.json`，其中`XXX`表示文档编号，从`000`到`196`。

这些文件的格式为 JSON（https://en.wikipedia.org/wiki/JSON）。*Urantiapedia Tools* 中有一个转换器，可以将此 JSON 格式转换为最终的 Wiki.js 格式。JSON

文件的结构如下：

```json
{
    "paper_index": "<paper index, 0 to 196>",
    "sections": [
        {
            "section_index": "<章节索引，如果存在则为 0 到 N>",
            "section_ref": "<章节引用文本，例如 “0:0”>",
            "section_title": "<非零章节的章节标题>",
            "pars": [
                {
                    "par_ref": "<par 引用，例如 “0:0.1”>",
                    "par_pageref": "<par 引用页码，例如 “1.1”>",
                    "par_content": "<par 内容。参见下方格式>"
                },
                {

                }
            ]
        },
        {

        }
    ],
    "footnotes": [
        "<带有圣经引用的脚注数组>"
    ],
    "paper_title": "<论文标题，不包括论文 X，只有标题>"
}
```
在此任务生成的 JSON 文件中，`footnotes` 部分将为空。要完成此任务，必须执行以下任务。

为了在 JSON 文件中用《尤兰提亚之书》中出现的一些奇怪字符来格式化段落文本，使用了以下等效项：

字符类型 | 写法
--- | ---
斜体 | * *（星号之间）
小型大写字母 | $ $（美元符号之间）
下划线（对于不包含斜体选项的语言）| \| \| (在 pipes 之间)

## 外部链接

- [Urantiapedia 工具 - GitHub 项目](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub 项目](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia 基金会](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_bible">获取圣经</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_footnotes">添加 Paramony 脚注</a></td>
      </tr>
    </tbody>
  </table>
</figure>