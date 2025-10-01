---
title: Paramony 的翻译
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
        <td><a href="/zh/help/web_html_editor">使用 HTML 编辑器</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_bible">获取圣经</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> 此任务目前已结束，并关闭了 27 种可用语言。
{.is-info}

以下描述了将《Paramony》从英文翻译成《Urantiapedia》所需步骤。这项任务由“主编”完成。

*Paramony* 是一个包含 *《圣经》* 和 *《尤兰提亚之书》* 交叉引用的文件。该文件以英文创建，使用了由 Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/)) 开发的交叉引用关系，并将其从原始的 TXT 格式转换为更易于处理的 JSON 格式。

## 旧程序（已过时）

> 此流程已更新，因为之前过于繁琐。详见下文。
{.is-警告}

我们从 `input/json/footnotes-book-en.json` 中找到的 *Paramony* 的英文版本开始。复制一份并将名称更改为目标语言。

*Paramony* 文件包含脚注（参考*圣经*），将包含在每个*Urantia Book* 文档中。

您必须翻译标记为文本（`texts`）的部分，以及使用替换操作更新《圣经》书籍的缩写。

JSON 文件的结构是一个包含三列的表格。《尤兰提亚之书》中的每篇文档，文件中都有一个包含文档索引的部分（`paperIndex`），以及一个包含三列的子部分（`footnotes`）。
- 第一个是出现在脚注中的文本（`texts`）。
- 第二个是与每篇文章相对应的圣经参考文献（`bible_refs`）。
- 第三部分是对《尤兰提亚之书》（`locations`）中段落和段落内句子的引用。这些引用的格式为`x:yz#n`，其中`x:yz`表示段落引用，`n`表示注释所在的段落内的句子，从第一个以句号结尾的句子开始，作为句子 0，依此类推。

这种呈现文本的方式使得将其复制并粘贴到 Google 翻译等翻译器中，然后再次粘贴翻译结果变得更加简单。

片段示例：

```json
{
    "content": [
        {
            "paperIndex": 0,
            "footnotes": {
                "texts" : [
                    [
                        "Spirit light"
                    ],
                    [
                        "Paradise Trinity",
                        "Paradise Trinity (Paul's early view)"
                    ]
                ],
                "bible_refs": [
                   [
                        "Ezk 7:55; Is 9:2; Mt 4:16; Mt 5:14-16; Lk 1:79; Lk 2:32; Jn 1:4-9; Jn 3:19-21; Jn 8:12; Jn 9:5; Jn 12:46; 1 Jn 1:5; 1 Jn 2:8"
                    ],
                    [
                        "Mt 28:19; Acts 2:32-33; 2 Co 13:14; 1 Jn 5:7",
                        "1 Co 12:4-6"
                    ]
                ],
                "locations": [
                    "0:6.9#0",
                    "0:12.2#0"
                ]
            }
        }
    ]
}
```

> 必须小心正确地复制文本中可能存在的引号。请在此处查看每种语言的有效引号：[引号](/zh/help/languages)。

## 新程序

我们从现有的 *Paramony* 翻译开始，例如位于 `input/markdown/es/paramony` 的西班牙语翻译。此文件夹的副本必须复制到 `input/markdown/xx` 中，其中 `xx` 是目标语言代码。例如，如果目标语言是阿拉伯语，则应将 `paramony` 文件夹复制到 `input/markdown/ar`。

*Paramony* 包含必须包含在每本 *《尤兰提亚之书》* 文档中的脚注（参考 *《圣经》*）。

在 `paramony` 文件夹中，有两个文件：`Bible.md` 和 `The Urantia Book.md`，分别包含 *Paramony* 对应 *Bible* 和 *The Urantia Book* 的译文。每个文件都采用 Markdown 格式，结构非常简单，包含两列。您只需临时复制这两个文件，并删除 `translation` 列的内容，只保留第一个 `text` 列以及斜杠字符 (`|`) 和标题即可。换句话说，我们创建了只包含分行英文文本的临时文件。然后，我们只需使用谷歌翻译等自动翻译工具翻译这两个临时文件，并在每行后复制译文即可。Visual Studio Code 提供了选择和复制文本的选项，可以快速完成此任务，但请记住，这些文件很长，一次复制粘贴超过 1,000 行并非明智之举。

最终结果应类似于此代码片段中显示的结果（例如，对于西班牙语）：

```md
| text                                        | translation                             |
| --------------------------------------------| ----------------------------------------|
| “Amen” as ritual                            | «Amen» como ritual                      |
| “Blind” man converted                       | La conversión del hombre «ciego»        |
| “Blind” man's speech                        | El discurso del hombre «ciego»          |
| “By what authority do you do these things?” | «¿Con qué autoridad haces estas cosas?» |
| “Children of light”                         | «Hijos de la luz»                       |
```
与旧程序相比，此程序的优势在于翻译器不必处理 JSON 中典型的奇怪字符；我们在这里唯一翻译的是分成几行的纯文本，这极大地方便了翻译并加快了任务速度。

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
        <td><a href="/zh/help/web_html_editor">使用 HTML 编辑器</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_bible">获取圣经</a></td>
      </tr>
    </tbody>
  </table>
</figure>