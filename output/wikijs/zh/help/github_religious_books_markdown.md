---
title: "获取所有宗教的书籍"
description:
published: true
date: 2024-10-10T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2024-10-10T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_religious_books_catalog">创建所有宗教书籍目录</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_sourcebooks_catalog">创建启示者使用的书籍目录</a></td>
      </tr>
    </tbody>
  </table>
</figure>

本任务介绍了如何获取各宗教的书籍，以及如何将它们上传到 [Urantiapedia 图书馆](/en/book)。在上一个任务中，我们创建了这些书籍的目录，以供参考。

## 过程

此任务包括尝试在互联网上找到每本书的数字版本，下载并处理它，直到获得一个或多个 [Markdown](/zh/help/markdown) 格式的文件。

可能会出现以下情况：
- 本书目前无法在任何网站上下载电子版。如有纸质版，您可以考虑购买，或尝试从公共图书馆获取并扫描。
- 这本书已找到，但无法下载，只能在线阅读。通常您可以截取每个页面的屏幕截图或进行网络攻击来下载扫描件。我们使用 [Greenshot 截图软件](https://getgreenshot.org/) 进行此操作，但任何其他软件都可以使用。
- 本书可下载，但以图片或PDF格式，不含文字。需要使用字符识别软件（OCR）。详情请见下文。
- 本书提供PDF格式（含文本），或者更好的是，提供文本文件或网页版本下载。以上两种方式均可下载。如果仅提供PDF格式，则必须将其转换为文本（见下文）。

### 下载书籍

要获取数字宗教书籍，可以参考以下来源：
- [圣经](https://archive.sacred-texts.com)
- [Google图书]（https://books.google.es/）
- [互联网档案馆 - 书籍](https://archive.org/details/books)
- 软件 [e-Sword](https://www.e-sword.net/)

无论如何，我们的任务是记下我们成功下载书籍的网址，并将其下载到电脑上。然后，我们可以将下载到的书籍网址发送邮件至urantiapedia@gmail.com，告知我们所有书籍的网址。*管理员*正在为所有无法在GitHub上存储的大型文件创建一个云存储空间。原版书籍（有时是很大的PDF文件）会保留在那里，以避免将来下载书籍的网站无法访问时出现问题。

将书籍文件转换为文本文件后，任务将是处理该书籍，直到获得一组 [Markdown](/zh/help/markdown) 格式的文件，该书籍的每个章节、前言或附录都有一个文件。

对于 GitHub 上文件夹和文件的任何修改，您都应遵循为用户 [管理员](/zh/help/admin)、[主编](/zh/help/github) 或 [助理编辑](/zh/help/github_assistant) 提供的说明。

### 版权

可以上传到Urantiapedia的书籍必须不受版权保护，并且必须已进入[公共领域](https://en.wikipedia.org/wiki/Public_domain)。这意味着现代版本的圣经或其他宗教书籍不能使用。遗憾的是，这些版本很少收到出版商的更新，这意味着需要获得版权，即使我们讨论的是几千年或几百年前的文本，它们过去从未受到过这些法律限制。

即使是像Urantiapedia这样非营利性的网站，这种令人痛惜的情况也不容忽视。无论我们开展的是何种项目，都无所谓。作品的作者或编辑可能会觉得自己的权利和经济补偿受到了损害，并起诉Urantiapedia的管理层，指控其不当使用作品。

根据作者或版本所在国的现行法律，书籍是否属于公共领域。

在美国，所有在 1929 年 1 月 1 日之前首次出版或发行的作品将在 95 年后失去版权保护，即自 2024 年 1 月 1 日起。同样，1929 年出版的作品将于 2025 年 1 月 1 日起进入公共领域，此循环将重复，直到 1977 年出版的作品于 2073 年 1 月 1 日进入公共领域。公司创作的作品将从 2073 年开始继续享受九十五年的版权保护期。根据现行版权法，从 2049 年、1978 年及以后开始，七十年前去世的创作者的作品将每年到期。例如，如果一位创作者于 2002 年去世，那么其作品的版权将持续到 2072 年底，并于 2073 年 1 月 1 日进入公共领域。1977 年之前出版的未附版权声明的作品也属于公共领域，如果在出版日期后五年内未注册版权，则 1989 年 3 月之前出版的作品也属于公共领域，如果在 28 年后未续签版权，则 1964 年之前出版的作品也属于公共领域。

在西班牙，如果作者在 1987 年 12 月 7 日之前去世，则为 80 年，如果作者在 1987 年 12 月 7 日之后去世，则为 70 年。

一般来说，根据《伯尔尼公约》，各国在作者去世后有50至100年的时间来行使版权。

### 使用 OCR 扫描书籍

有时，某些书籍无法扫描或转换为文本。为此，请按照以下步骤操作：

1. 如果该书在 archive.org 等网站上可用，请使用 [Greenshot](https://getgreenshot.org/) 等工具创建页面截图，该工具与 `ImpScreen` 按钮集成，可以加快创建一系列快照的速度。
2. 安装 [TesseractOCR](https://github.com/UB-Mannheim/tesseract/wiki)，免费且开源。
3. 安装 [Visual Studio Code](https://code.visualstudio.com/)，并添加 [Powershell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell) 扩展。
4. 创建几个文件夹，一个用于存放屏幕截图，另一个用于存放文本。
5. 使用“终端”>“新建终端”菜单在根目录中打开 VS Code，然后从**终端提示符**创建一个列出所有快照的文件：`dir *.* > ocr.ps1`
6. 使用 PowerShell 编辑器编辑 ps1 文件，使所有命令都类似于：`&'c:\Program Files\Tesseract-OCR\tesseract' ".\snapshots\<filename>.png" ".\texts\<filename>.txt"`
7. 点击 PowerShell 编辑器中的“全部运行”按钮。这将为每个扫描的 PNG 文件创建一个 TXT 文件。
8. 确保 VS Code 中安装了 [Combine Files](https://marketplace.visualstudio.com/items?itemName=BateleurIO.vscode-combine-scripts) 扩展。
9. 右键单击​​“文本”文件夹，然后使用“合并文件”。将创建一个临时文件。将所有内容复制到永久 TXT 文件中。

最后几步的更简单方法：

1. 创建一个包含以下内容的文件（`convert.ps1`）：

```
Set-Location 'C:\Users\Scan'
Get-ChildItem -Filter '*.png' | ForEach-Object {
& 'c:\Program Files\Tesseract-OCR\tesseract.exe' $_.Name ($_.BaseName)
}
```

2. 将`C:\Users\Scan`替换为扫描文件的实际路径。
3. 按照上面步骤 8 所示进行操作。

最终结果将是一个包含所有截图文件文本的 TXT 文件。下一步是将该 TXT 文件转换为 Markdown 格式（见下文）。

### PDF 到 Markdown 的转换

如果电子书已经是 PDF 格式，无论是否包含文本，都可以使用一些工具直接转换为 Markdown 格式。我们正在使用的一些工具（按兴趣排序）如下：

- [Mathpix](https://mathpix.com/)。这是我们发现的最强大的工具，它不仅可以扫描文本和图像并将其完美地转换为 Markdown 格式，还能扫描数学表格和公式，是扫描科学或学术书籍的理想工具。
- [pdf-to-markdown](https://pdf2md.morethan.io/) ([GitHub](https://github.com/jzillmann/pdf-to-markdown))。一个用于 PDF 转换的 JavaScript API。这里有一个示例网站。
- [pdf-tools](https://github.com/bsorrentino/pdf-tools)。灵感来自 pdf-to-markdown。
- [Aspose DPF 到 MD](https://products.aspose.app/words/en/conversion/pdf-to-md)。该产品也作为 [API](https://github.com/aspose-words/Aspose.Words-for-.NET) 出售。其文档位于 [此处](https://reference.aspose.com/words/net/)。
- [在线转换器](https://www.onlineocr.net/)。不仅可以转换为文本，还可以转换为微软Word文档。
- [按文件大小拆分 PDF](https://deftpdf.com/split-pdf-by-size)。此工具可根据文件大小将 PDF 拆分为多个文件。某些工具无法处理较大的 PDF 文件。


## Urantiapedia 书籍的结构

我们已经在[上一个任务](/zh/help/github_religious_books_catalog)中指出了宗教书籍如何组织到书架、组和子组中，以及在哪里可以查阅所有计划中的书籍列表。

书籍应保存在 GitHub 项目的这些文件夹中：
- 如果书架上有“犹太-基督教宗教书籍（旧约）”或“犹太-基督教宗教书籍（新约）”的书籍，则必须将其保存在 GitHub 项目的以下文件夹中：英文书籍保存在 `/output/wikijs/en/Bible` 文件夹中，西班牙语书籍保存在 `/output/wikijs/es/Bible` 文件夹中，等等。在这些文件夹中，我们将为每本书创建一个文件夹，用于存放章节，并创建一个与文件夹同名的 Markdown 文件，用于存放书籍封面。例如，文件夹 `/output/wikijs/en/Bible/Genesis` 包含《创世纪》的 50 个章节，文件 `/output/wikijs/en/Bible/Genesis.md` 是《创世纪》的封面文件。
- 如果是来自其他宗教书架的书籍，则必须将其保存在 GitHub 项目的以下文件夹中：英文书籍保存在 `/output/wikijs/en/book` 文件夹中，西班牙文书籍保存在 `/output/wikijs/es/book` 文件夹中，等等。如果这些文件夹中不存在，我们将创建另一个文件夹，并以每种宗教的名称命名：
	- `Judaism`：适用于“犹太教宗教书籍”书架上的书籍。
	- `Christianity`：适用于“基督教宗教著作”书架上的书籍。
	- `Islam`：适用于“伊斯兰宗教书籍”书架上的书籍。
	- `Buddhism`：适用于“佛教宗教著作”书架上的书籍。
	- `Hinduism`：适用于“印度教宗教书籍”书架上的书籍。
	- `Taoism`：适用于“道教宗教书籍”书架上的书籍。
	- `Bahaism`：针对现有的“巴哈伊教宗教书籍”的书籍。
	- `Shikhism`：针对书架上“锡克教宗教书籍”的书籍。
	- `Shintoism`：针对“神道教宗教书籍”书架上的书籍。
	- `Zoroastrianism`：针对书架上“琐罗亚斯德教的宗教书籍”的书籍。
	- `Jainism`：针对书架“耆那教宗教书籍”上的书籍。
	- 在之前的文件夹中，我们将像处理《圣经》一样，为每本书创建一个文件夹，并为封面创建一个 Markdown 文件。例如，文件夹`/output/wikijs/en/book/Islam/Quran`包含《古兰经》的 114 个章节，文件`/output/wikijs/en/book/Islam/Quran.md`包含《古兰经》的封面。

关于文件夹名称，应考虑以下准则：
- 它们在每个文件夹中必须是唯一的，并且必须始终包含三个或更多字符。
- 如果该书预计成为某个系列（第 1 卷、第 2 卷等）的一部分，请添加后缀`_1`、`_2`等（最多 9 卷），或`_01`、`_02`（如果计划超过 9 卷）。
- 文件夹名称不能包含任何空格或破折号，应使用下划线（`_`）代替。
- 名称将使用书名，但尽可能缩写。
- 书名始终为英文，因此如果原书不是英文，则书名会被翻译。
- 删除冒号、撇号或感叹号等罕见字符。
- 例如，如果一本书的书名是《耶稣存在吗？》，那么该书的文件夹名称应该是“耶稣存在吗？”。如果书名是《神学原理》（一本西班牙语书籍），那么文件夹名称应该是“神学原理”。
- 所有语言的文件夹名称始终相同。例如，英语版《古兰经》的文件夹名称为`/output/wikijs/en/book/Islam/Quran`，西班牙语版的文件夹名称为`/output/wikijs/es/book/Islam/Quran`（而非`/output/wikijs/es/book/Islam/Corán`）。也就是说，不同语言之间 URL 的唯一区别在于语言代码（`en`、`es`等）。这使得 Urantiapedia 上的许多路径操作更加便捷。

每个章节都将是书籍文件夹中一个名为`xx.md`的文件，其中`xx`将是：
- 一个从 0 到 N 的数字，表示章节编号（不含标题，仅包含编号）。零保留用于表示序言或引言，如果作者本人未使用数字进行编号。如果没有序言或引言，则第一章为`1.md`，第二章为`2.md`，依此类推。
- `Index` 表示索引页，将保留为 `Index.md`。如果索引不太长，且索引可以包含在首页中，则有时可以省略此页面。
- 包含序言的页面的`Preface`（如果有）将保留为`Preface.md`。
- 附录应命名为`Appendix_xx`，其中`xx`跟在 1 到 N 的数字后面。

> 许多圣经书籍的章节文件都是 HTML 格式而非 Markdown 格式，因为它们是由项目内 `/input/tex` 目录下的 LaTeX 格式文件生成的。这种自动化操作的原因是，许多此类书籍是通过 [e-Sword](https://www.e-sword.net/) 软件导出的，该软件生成的内容类似于 LaTeX。此操作的详细说明请参阅手册中的 [获取圣经](/zh/help/github_bible) 部分。目前已针对支持的 27 种语言完成了此操作。
> 未从 e-Sword 获得的圣经以外的书籍将按照本页详述的手动流程以 Markdown 格式添加。
{.is-warning}

## Urantiapedia 宗教书籍的基本格式

使用的格式是 Markdown，与其他替代方案相比，它的格式化极其简单。

在所有的 [Markdown](/zh/help/markdown) 格式中，它相当广泛，向 Urantiapedia 添加宗教书籍的贡献者可能只需要担心添加这些内容（列表详细如下）：
- 每个文件都有一个标题。
- 每章内的章节。
- 段落正确分隔。
- 某些段落前的诗句指示和链接。
- 粗体和斜体。
- 引号。
- 不使用诗句的书中的分页标记。
- 图像。
- 图像参考。
- 脚注。
- 导航链接。

Markdown 看起来内容很多，但实际上它非常简单，不到一个小时就能学会。接下来我们将逐一解释上面列出的每一项。

### 每个文件的标题

这是要添加的标题的示例：

```
---
title: "Qur'an — 1.  al-Fatihah: The Opening"
description:
published: true
date: 2024-01-10T13:55:38.362Z
tags: book, Islam
editor: markdown
dateCreated: 2024-01-10T13:55:38.362Z
---
```
此处应完全照原样复制，仅需替换冒号后面的值。标题应放在引号中，并由书名组成，并与章节标题（包括章节编号）用连字符分隔。

描述中无需添加任何内容。

创建日期和当前日期应为文件创建的日期。时间无关紧要。

在“标签”中，你应该输入已为该书建立的标签，并用逗号分隔。Urantiapedia 中使用的标签完整列表可在此处查看：[Urantiapedia 中的标签](https://github.com/JanHerca/urantiapedia/blob/master/docs/tags.md?plain=1)。这些标签可以留空，因为这样可以快速地将所有标签一次性填充到该书的所有文件中。以下是一些建议：
- 标签必须**使用英文**。Urantiaapedia 使用的软件 [Wiki.js](https://js.wiki/) 目前不支持翻译标签。
- 标签大小写无关紧要。`book` 和 `Book` 是同一个标签。事实上，它们在 Urantiapedia 上均以小写显示：[按标签搜索](https://urantiapedia.org/t)。所有现有标签也会显示在此页面上。
- 至少一本书中的所有文件都必须标有`book`以表明它是图书馆内容。
- 必须至少带有该书所属宗教的标签：`Judaism`, `Christianity`, `Islam`, `Buddhism`, `Hinduism`, `Taoism`, `Bahai`, `Shikhism`, `Shintoism`。
- 对于圣经和圣经以外的书籍，创建了许多标签，例如`Bible`, `Apocrypha OT`, `Apocrypha NT`, `Deuterocanon OT`, `Deuterocanon NT`等。
- 如果标签不存在而您想添加它，只需将其添加到任何文件的标题中，即可创建该标签。

### 分段标记

如果章节包含章节，则应按如下方式标记：

```
## 七重天

### 第一层天

### 第二天堂
```

第一级章节始终标记为`##`，下一级章节标记为`###`，依此类推。即使本书确实使用了四级以上，使用四级以上也不太方便。正如您所见，我们不使用带有`#`标记的章节，因为它们会创建过大的章节标题。

### 正确的段落

Markdown 文件中的段落是一行，其前后必须各留一个空行。每个段落都必须保证这一点。如果文本是诗歌，则诗节的行可以保持连贯，并且诗节前后各留一个空行。

### 诗句指示和链接

如果书中的每一章都有诗句编号，则应在每一段之前添加诗句编号。

例如，在《亚美尼亚婴儿福音》一书(/es/Bible/Armenian_Infancy_Gospel)的第一章中：

```
<span id="v1"><sup><small>1</small></sup></span>  En aquel tiempo, un hombre llamado Joaquín salió su casa, llevando consigo sus rebaños y sus pastores, y fue al desierto, donde fijó su tienda. ...
<span id="v2"><sup><small>2</small></sup></span>  Y, cuando se acabaron los cuarenta días de ayuno, advino el ángel del Señor, y, colocándose ante Joaquín, le dijo: Joaquín, el Señor ha oído tus plegarias, y ha atendido tus súplicas. ...
```

正如您所见，指示始终遵循以下模式：

`<span id="vXXX"><sup><small>XXX</small></sup></span>` 后面跟着两个空格来分隔。`XXX` 可以是数字、字母或任何简短的元素，可以清楚地区分每节经文，这是每本书使用的标准方法。

> 添加指示符的一个非常有用的技巧是，在每个段落前面只添加一个数字，后面跟两个空格，然后使用正则表达式对所有文件进行替换。搜索 `^(\d+) `，并将其替换为 `<span id="v$1"><sup><small>$1</small></sup></span> `。
{.is-info}


### 粗体和斜体

它们的添加方式如下：

```
这是一段带有斜体字的文本。

这是一个**新段落**，其中包含一些粗体内容。

下划线还可用于显示_italic_或__bold__。
```

如您所见，一个星号或破折号表示斜体，两个星号或破折号表示粗体。

### 引号

如果作者引用了文本，则应按如下方式突出显示引用：

```
正如伟大的塞内加所说：

> “不知道去哪里的人，不会有顺风。”
```

只需添加 `>` 标签并用空格分隔引号。

如果引文很长并且包含多个段落，您可以这样写：

```
西塞罗在多处对此进行了评论：

> 但是，为了让你们明白那些指责快乐、赞扬痛苦的人的错误从何而来，我将揭示整个事情的经过，并解释那位真理的发现者和幸福生活的建筑师所说的话。
>
> 但事实上，我们既指责又怀有仇恨，那些应得惩罚的人被眼前的快乐所软化和腐蚀，被即将经历的痛苦和麻烦的贪婪所蒙蔽，没有为他们做好准备。
```

请注意，我们在每个段落分隔线上都放置一个 `>`，并在其后留一个空格。

### 页面跳转标记

如果书本没有使用诗节，我们需要某种机制来引用每章文本中的位置。一种选择是使用页码标记，即指示原书从一页翻到另一页的位置。

从一页翻到另一页时，单词之间必须包含页码标记，如下所示：

```
耶和华的使者在异象中向大祭司以利亚撒显现，对他说：“看哪，约雅斤带着礼物来见你。你要虔诚地、按律法接受他的礼物，这是合宜的。因为耶和华听了他的祷告，成就了他的<span id="p18">[<sup><small>p. 18</small></sup>]</span> 祈求。”大祭司睡醒了，站起来，称谢至高者，说：“主以色列的神是应当称颂的，因他不轻看祷告他的仆人。”天使第二次向亚拿显现，对她说：“看哪，你的丈夫来了。起来，去找他，欢欢喜喜地迎接他。”亚拿就起来，穿上婚礼的礼服，去找她的丈夫。她一见他，就欢欢喜喜地俯伏在他面前，抱着他的颈项。
```

Se puede ver que la marca es: `<span id="p18">[<sup><small>p. 18</小></sup>]</span>`。

由于这项任务可能很繁琐，一种简化方法是添加一个更短的替代标记，例如`ppp18`（`ppp`是我们知道永远不会出现的文本），以便继续前面的示例。然后，这些标记可以自动搜索并替换为确定的标记，就像我们在上面另一个示例中指出的那样。也就是说，下面这样也可以：

```
耶和华的使者在异象中向大祭司以利亚撒显现，对他说：“看哪，约雅斤带着礼物来见你。你要虔诚地、按律法接受他的礼物，这才相宜，因为耶和华听了他的祷告，成就了他的祈求。” 大祭司睡醒了，站起来，感谢至高者，说：“耶和华以色列的神是应当称颂的，因为他不轻看祷告他的仆人。” 天使第二次向亚拿显现，对她说：“看哪，你丈夫来了。起来，去迎接他，欢欢喜喜地迎接他。” 亚拿就起来，穿上婚礼的礼服，去迎接她的丈夫。她一看见他，就欢欢喜喜地俯伏在他面前，抱着他的颈项。
```

### 图片

图像必须包含以下内容：

```
<figure id="Figure_01" class="image urantiapedia">
<img src="/image/book/Islam/Songs_of_Kabir/image_01.png">
<figcaption><em><b>图 1.</b> 上帝在我们心中</em></figcaption>
</figure>
```

您可以将上述示例复制到任何需要图像的地方，然后仅替换以下内容：
- id="Figure_01" 必须是图片的唯一标识符。您可以输入任意一个，只要同一文件中每个章节的标识符不重复即可。
- 在`src="..."`处，应该包含图片文件的路径。该路径应始终以`/image/`开头，所有图片都位于此处，后跟与书籍路径相同的路径。也就是说，按照示例，由于书籍位于`/en/book/Islam/Songs_of_Kabir`，因此该书籍的图片应位于`/image/book/Islam/Songs_of_Kabir`。每张图片的文件名可以是任何短文件名，只要包含扩展名（例如`.png`或`.jpg`）。建议文件名不要包含任何空格、特殊字符、撇号或重音符号。
- 如果图像有标题，则必须将其放在`figcaption`标签内。
- 如果您想将图片左对齐、居中或右对齐，请分别将 `class="image urantiapedia"` 替换为 `class="image urantiapedia image-style-align-left"`、`class="image urantiapedia image-style-align-center"` 和 `class="image urantiapedia image-style-align-right"`。在下面几段中，添加一行 `<br style="clear:both;"/>`，这样对齐方式就不会再影响文本的位置。

由于添加图片这项任务可能比较繁琐，您可以使用类似上面提到的技巧。如果没有图片需要标题，您可以添加类似 `fff18`（或 `fffl18`、`fffc18`、`fffr18`）的标题，这样可以简化图片标题的显示，使其包含数字 18（甚至对齐）。

### 图片引用

当文本中提到图片时，最好添加指向该图片的内部链接。例如，继续上面显示的图片，要添加引用，您可以这样写：

```
……是这首歌的突出主题之一。卡比尔淡化了仪式和苦行（见[图1](#Figure_01)），并教导说，真主并不局限于清真寺、寺庙或朝圣地。
```

语法 `[图 1](#Figure_01)` 是在 Markdown 中添加超链接的方式。要显示的文本用方括号表示，后面的括号中是网页路径。如果图片位于同一章节，只需输入 `#` 加上标识符即可。如果图片位于其他章节，语法应类似于 `[图 1](/image/book/Islam/Songs_of_Kabir/3#Figure_01)`。在本例中，我们指向的是第 3 章中的图 1。

### 脚注

如果书中有脚注，或章节尾注，或出现在书末但在书中以数字或指示标记的一般注释，则这些注释标记将始终成为每章的脚注，如下所示：

```
最重要的是，上帝就在我们心中，我们若想认识他，就必须去那里寻找。[^1]

...

## 注释

[^1]：Masterman, David。Kabir 著。泰戈尔译。三鸽出版社。ISBN 979-8-6501-4828-9
```

脚注总是标记为从 1 开始的连续数字，写为 `[^1]`、`[^2]` 等。`^` 字符在键盘上使用 `Shift + [` 然后按空格键键入。

脚注分为两部分：一部分是指示，位于正文正文中；另一部分是注释本身，位于文件末尾，位于所有其他内容的后面。每个注释都有其标记，然后是冒号，最后是正文，每个注释之间用空行分隔。为注释添加一个 `## Notes` 部分会比较方便，正如前文所述，它应该始终位于所有内容的末尾，包括导航链接。

### 导航链接

这些链接放置在每章开头和结尾的简单表格中，方便您轻松从一章跳转到另一章，或跳转到索引。它们应该像以下示例一样：

```
<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir/1">
          <span class="mdi mdi-arrow-left-drop-circle"></span><span class="pl-2">Capítulo I — Dios está dentro de nosotros</span></a>
        </td>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir#índice">
          <span class="mdi mdi-book-open-variant"></span><span class="pl-2">Índice </span></a>
        </td>
        <td>
        <a href="/es/book/Islam/Songs_of_Kabir/3">
          <span class="pr-2">Capítulo III — La insuficiencia del lenguaje</span><span class="mdi mdi-arrow-right-drop-circle"></span></a>
        </td>
      </tr>
    </tbody>
  </table>
</figure>
```

如前所述，文件中的最后一部分应该始终是注释部分（如果有的话），甚至位于这些导航链接下方。

## 创建封面文件

如前所述，封面会保存在一个与章节所在文件夹同名的 Markdown 文件中。例如：文件夹`/output/wikijs/en/Bible/Genesis`包含《创世纪》的 50 个章节，文件`/output/wikijs/en/Bible/Genesis.md`是《创世纪》的封面。同样，文件夹`/output/wikijs/en/book/Islam/Quran`包含《古兰经》的 114 个章节，文件`/output/wikijs/en/book/Islam/Quran.md`是《古兰经》的封面。

封面是一个 Markdown 文件，必须包含以下元素：
- 每个文件都有一个标题。
- SVG 格式的书籍封面。
- （可选）封面内的部分。
- (可选)索引。
- 外部链接（下载地址）。

标题应遵循与章节中所示相同的语法。

封面必须是 SVG 格式。

这是《Genesis》的封面：

```
<div class="urantiapedia-book-front urantiapedia-book-bible">
<svg xmlns="http://www.w3.org/2000/svg"
	width="102.6mm" height="136.8mm"
	viewBox="0 0 102.6 136.8" version="1.1">
	<g transform="translate(-7,-5)">
		<rect width="9.6" height="136.8" x="7" y="5" />
		<rect width="96.9" height="136.8" x="17" y="5" />
		<text style="font-size:5px" x="61" y="22">LA BIBLIA</text>
		<text style="font-size:4px" x="61" y="125">Biblia Reina Valera, 1960</text>
		<text style="font-size:9px" x="61" y="60">Génesis</text>
	</g>
</svg>
</div>
```

这是《古兰经》的封面：

```
<div class="urantiapedia-book-front urantiapedia-book-islam">
<svg xmlns="http://www.w3.org/2000/svg"
	width="102.6mm" height="136.8mm"
	viewBox="0 0 102.6 136.8" version="1.1">
	<g transform="translate(-7,-5)">
		<rect width="9.6" height="136.8" x="7" y="5" />
		<rect width="96.9" height="136.8" x="17" y="5" />
		<text style="font-size:4px" x="61" y="130">M.M. Pickthall</text>
		<text style="font-size:3px" x="61" y="135">The Meaning of the Glorious Quran, 1938</text>
		<text style="font-size:9px" x="61" y="60">Qur'an</text>
	</g>
</svg>
</div>
```

所有目标图书的封面均已生成，因为它们会显示在每个书架的索引中。因此，只需前往 [Urantiapedia 图书馆书架](/en/index/books) 索引，进入所需的书架，然后像上面的例子一样从那里复制所需的封面（即 `<svg>...</svg>` 标签内的内容）。

如果该书有描述、献词或其他特定于介绍页面的内容，则会将其添加到此封面文件中，并使用 Markdown 部分和适当的格式。

对于想要居中的文本，可以使用以下语法，如以下示例所示：

```
<p style="text-align:center;">
<b>辉煌的《古兰经》的含义</b><br>
作者：Mohammed Marmaduke Pickthall<br>
海得拉巴-德干：政府中央出版社 [138]
</p>
```

如果索引内容不够详尽，可以将其放在封面的某个章节中。或者，也可以将其放在 chapters 文件夹中名为 Index.md 的单独文件中，并在封面中添加指向该文件的链接。

## 提交变更请求

至此，将宗教书籍添加到 Urantipedia 图书馆时需要考虑的所有事项已全部完成。一旦对 GitHub 项目进行了这些更改，就必须按照[管理员](/zh/help/admin)、[主编](/zh/help/github) 或 [助理编辑](/zh/help/github_assistant) 用户手册中的详细说明提交拉取请求。

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_religious_books_catalog">创建所有宗教书籍目录</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_sourcebooks_catalog">创建启示者使用的书籍目录</a></td>
      </tr>
    </tbody>
  </table>
</figure>