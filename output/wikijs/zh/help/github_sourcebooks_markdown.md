---
title: "获取据称是启示者使用的书籍"
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
        <td><a href="/zh/help/github_sourcebooks_catalog">创建据称是启示者使用的书籍目录</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_topicindex">翻译百科全书修订版</a></td>
      </tr>
    </tbody>
  </table>
</figure>

这描述了如何获取据称是《尤兰提亚之书》来源或与之有某种关系的书籍与《尤兰提亚之书》平行，并已按照任务[创建“源”书籍目录](/zh/help/github_sourcebooks_catalog)进行了编目。

## 流程

此任务包括尝试在互联网上查找每本书的数字版本，下载并处理，直到获得一个或多个[Markdown](/zh/help/markdown)格式的文件。

可能会出现以下情况：
- 在任何可下载的网站上都找不到这本书的数字版本。您可以考虑购买纸质副本（如果有），或者尝试从公共图书馆获取并扫描。
- 找到了这本书，但无法下载，只能在线阅读。通常，您可以截取每个页面的屏幕截图或进行一些网页黑客攻击来下载扫描件。我们使用[Greenshot 截图软件](https://getgreenshot.org/)来实现此目的，但您也可以使用任何其他软件。
- 这本书可以下载，但以图像或没有文本的 PDF 格式。您需要使用字符识别软件 (OCR)。见下文。
- 本书可下载为包含文本的 PDF 格式，或者更好的是，以文本文件或网页格式下载。这在所有情况下都是理想的选择。如果仅提供 PDF 格式，则必须将其转换为文本（见下文）。

### 下载图书

要获取电子书，以下来源可能包括：
- [Google 图书](https://books.google.es/)
- [Internet Archive - Books](https://archive.org/details/books)
- [古腾堡计划](https://www.gutenberg.org/)

无论如何，我们的任务是记下我们成功下载书籍的网址，并将其下载到电脑上。然后，我们可以将已下载书籍的网址发送邮件至urantiapedia@gmail.com，告知我们所有已下载书籍的网址。*管理员*正在为所有无法在GitHub上存储的大型文件创建一个云存储空间。原版书籍（有时是很大的PDF文件）会保留在那里，以避免将来下载书籍的网站无法访问时出现问题。

将书籍文件转换为文本文件后，接下来的任务是处理书籍，直到获得一组[Markdown](/zh/help/markdown)格式的文件，每个文件对应书籍的每个章节、前言或附录。

对于 GitHub 上文件夹和文件的任何更改，请按照为[管理员](/zh/help/admin)、[主编](/zh/help/github) 或 [助理编辑](/zh/help/github_assistant) 用户提供的说明进行操作。

### 版权

本手册[获取所有宗教的书籍](/zh/help/github_religious_books_markdown)部分中关于_版权_的所有内容也适用于此处。

### 使用 OCR 扫描书籍

如果需要扫描书籍，请参阅本手册[获取所有宗教的书籍](/zh/help/github_religious_books_markdown)部分并按照相同的步骤操作。

### 将 PDF 转换为 Markdown

如果您需要将 PDF 转换为 Markdown，请参阅本手册[获取所有宗教的书籍](/zh/help/github_religious_books_markdown)部分并按照相同的步骤操作。

## Urantiapedia 书籍的结构

我们已经在[上一个任务](/zh/help/github_sourcebooks_catalog)中说明了“源”书籍是如何组织到书架和组中的，以及您可以在哪里查看所有计划书籍的列表。

这些书籍必须保存在 GitHub 项目的以下文件夹中：`/output/wikijs/en/book` 用于英文书籍，`/output/wikijs/es/book` 用于西班牙文书籍，等等。如果这些文件夹中不存在，我们将创建一个新的文件夹，并以作者的名字命名（空格替换为下划线）。最后，在作者文件夹中，我们将为每本书创建一个文件夹，用于存放章节，以及一个与文件夹同名的 Markdown 文件，用于存放书籍封面。例如，文件夹`/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us`包含一本关于天文学的书籍的章节，文件`/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us.md`是该书籍的封面。

关于文件夹名称，应遵循以下准则：
- 每个文件夹中的名称必须是唯一的，并且必须始终包含三个或更多字符。
- 如果这本书是合集的一部分（第 1 卷、第 2 卷等），请添加后缀`_1`、`_2`等（最多 9 卷），或`_01`、`_02`（如果计划超过 9 卷）。
- 文件夹名称不能有空格或破折号，应用下划线（`_`）代替。
- 名称将使用书名，但尽可能缩写。
- 名称始终为英文，因此如果原书不是英文，则使用书名翻译。
- 删除冒号、撇号或感叹号等不寻常的字符。
- 例如，如果一本书的书名是*耶稣存在吗？*，那么这本书的文件夹将被称为`Did_Jesus_exist`。如果书名是《神学原理》（一本西班牙语书籍），文件夹名称应该是“神学原理”。
- 所有语言的文件夹名称始终相同。例如，上述英语示例的文件夹名称为`/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us`，西班牙语示例的文件夹名称为`/output/wikijs/es/book/Sir_James_Jeans/The_Universe_Around_Us`（而不是~~`/output/wikijs/es/book/Sir_James_Jeans/El_Universo_que_nos_rodea`~~）。也就是说，不同语言之间 URL 的唯一区别在于语言代码（`en`、`es`等）。这使得 Urantiapedia 上的许多路径操作更加轻松。

每一章都将是书文件夹中一个名为`xx.md`的文件，其中`xx`将是：
- 从 0 到 N 的数字，包含章节编号（没有标题，只有编号）。零保留用于作者本人未使用数字编号的前言或介绍。如果没有前言或介绍，则第一章将是`1.md`，第二章将是`2.md`，等等。-
`Index`为索引页，将保留为`Index.md`。如果索引不是很长，有时可以省略此页面并将索引包含在封面中。-
`Preface`为包含前言的页面（如果有），将保留为`Preface.md`。
- 附录应命名为`Appendix_xx`，其中`xx`后跟从 1 到 N 的数字。

完成的书的示例可以在`/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us`中看到。

## Urantiapedia 上书籍的基本格式

要使用的格式是 Markdown，与其他格式相比，它的格式极其简单。

在所有 [Markdown](/zh/help/markdown) 格式中，它相当广泛，向 Urantiapedia 添加“源”书籍的贡献者可能只需要担心添加以下内容（如下所列）：
- 每个文件的标题。
- 标题下方的作者注。
- 每章中的章节。
- 正确分隔的段落。
- 粗体和斜体。
- 引用。
- 分页符。
- 图片。
- 图片引用。
- 脚注。
- 表格。
- 数学公式或科学计数法中的字符。
- 导航链接。

这听起来好像很多东西，但 Markdown 实际上非常简单，可以在不到一个小时内学会。在以下部分中，我们将对上面列出的每一项进行一些解释。

### 每个文件的标题

以下是要添加的标题示例：

```
---
title: "我们周围的宇宙 — 第一章 — 探索天空"
description:
published: true
date: 2021-11-28T14:02:03.086Z
tags: Cosmology, Astronomy
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---
```
应​​按原样复制此处，仅替换冒号后面的值。标题应放在引号中，由书名组成，并用连字符与章节标题（包括章节编号）分隔。

描述中无需添加任何内容。

创建日期和当前日期应为文件的创建日期。时间无关紧要。

在_tags_中，应输入已为该书建立的标签，并用逗号分隔。Urantiaapedia 中使用的标签完整列表可在此处查看：[Urantiaapedia 中的标签](https://github.com/JanHerca/urantiapedia/blob/master/docs/tags.md?plain=1)。这些标签可以留空，因为这样可以快速地将它们一次性填充到所有文件中。以下是一些建议：
- 标签必须**使用英文**。Urantiaapedia 使用的软件 [Wiki.js](https://js.wiki/) 目前不支持翻译标签。
- 标签的大小写无关紧要。`book`和`Book`是同一个标签。事实上，它们在Urantiapedia上都以小写显示：[按标签搜索](https://urantiapedia.org/t)。所有现有标签也会显示在此页面上。-
一本书中至少所有文件都必须带有`book`标签，以表明它是图书馆内容。
- 它至少应该带有与其所属书架对应的标签：`Theology`, `Philosophy`, `Science`。
- 对于科学类书籍，您可以再添加一个带有学科的标签。已经创建的一些学科包括：`Anthropology`, `Archaeology`, `Astronomy`, `Biology`, `Chemistry`, `Chronology`, `Cosmology`, `Evolutionism`, `Genetics`, `Geography`, `Geology`, `History`, `Linguistics`, `Mathematics`, `Medicine`, `Paleontology`, `Pedagogy`, `Physics`, `Politics`, `Psychiatry`, `Psychology`, `Sociology`。
- 如果标签不存在而您想要添加它，只需将其添加到任何文件的标题中，该标签就会被创建。

### 作者

在标题下方，始终添加署名，如下所示：

```
<p class="v-card v-sheet theme--light grey lighten-3 px-2">Sir James Jeans, M. A., D. Sc., Sc. D., LL. D., F. R. S.</p>
```

在盎格鲁-撒克逊世界，通常将作者的学术头衔放在姓名后面，用逗号分隔。

### 章节标记

如果一章有章节，则应按如下方式标记：

```
## 太阳系

### 太阳

### 行星
```

第一级章节始终标记为 `##`，下一级章节标记为 `###`，依此类推。即使书中使用了四个以上的级别，使用也不是很方便。如您所见，我们不使用带有 `#` 标记的章节，因为它们会创建太大的章节标题。

### 正确的段落

段落是 Markdown 文件中的一行，其前后都必须有一个空行。每个段落都必须保证这一点。如果文本是诗歌，则可以将诗节的各行保持在一起，并且诗节前后只留一个空行。

### 粗体和斜体

它们按指示添加：

```
这是段落中的文本*带有一些斜体*。

这是一个**新段落**，其中包含粗体内容。

下划线也可用于显示_italic_或__bold__。
```

如您所见，一个星号或破折号表示斜体，两个星号或破折号表示粗体。

### 引用

如果作者引用了一段文字，则应按如下方式突出显示该引用：

```
正如伟大的塞内加所说：

> “不知道自己要去哪里的人不会遇到顺风。”
```

只需添加 `>` 标签并用空格分隔引用即可。

如果引文很长并且包含多个段落，则可以这样写：

```
西塞罗在多个地方对此进行了评论：

> 但是，为了让你明白那些指责快乐、赞扬痛苦的人的错误从何而来，我将揭示整个问题，并解释真理的发现者和幸福生活的建筑师所说的话。
>
> 但事实上，我们既指责那些被眼前快乐的奉承所软化和腐蚀的人，又带着正当的仇恨，他们罪有应得，他们被即将经历的痛苦和烦恼的贪婪所蒙蔽，没有为他们做好准备。
```

请注意，我们在每个段落分隔线上都放置了一个 `> `，后面有一个空格。

### 页面跳转标记

因为在将一本书的每一章转换成网页时，我们会丢失从一页转到另一页的信息，所以添加一个标记来指示这一点会很方便，这样我们就可以有办法引用每本书的页面，因为我们在这个任务中处理的这些书不是圣经书，圣经书有标准的诗节划分。

页码标记必须包含在你从一页翻到另一页的单词之间，如下所示：

```
除了小行星之外，还有四大行星：木星、土星、天王星和海王星，它们都比地球大得多。根据桑普森的说法，最大的木星的直径为 88,640 英里 [142,652 公里]，或<span id="p18">[<sup><small>p. 18</small></sup>]</span> 地球直径的 11 倍多；一千四百个地球大小的天体可以塞进木星里面，还有多余的空间。土星排在第二位，其大小仅次于木星，直径约为 70,000 英里 [112,654 公里]。这两颗行星是迄今为止最大的行星。
```

可以看出标记为：`<span id="p18">[<sup><small>p. 18</small></sup>]</span>`。

由于这项任务可能很繁琐，一种简化方法是添加一个更短的替代标记，例如`ppp18`（`ppp`是我们知道永远不会出现的文本），以便继续前面的示例。然后，这些标记可以自动搜索并替换为确定的标记，就像我们在上面另一个示例中指出的那样。也就是说，下面这样也可以：

```
除了小行星之外，还有四大行星：木星、土星、天王星和海王星，它们都比地球大得多。据桑普森称，最大的行星木星直径为142,652公里（88,640英里），相当于地球直径的11倍多；一千四百个地球大小的天体可以塞进木星内部，还能留出足够的空间。土星紧随其后，其大小仅次于木星，直径约为112,654公里（70,000英里）。这两颗行星是迄今为止最大的行星。
```

### 图像

图像应像这样包含：

```
<figure id="Universe_plate_01" class="image urantiapedia">
<img src="/image/book/Sir_James_Jeans/The_Universe_Around_Us/plate_01.png">
<figcaption><em><b>Plate I.</b> 富兰克林·亚当斯的信，《南十字星附近的银河》</em></figcaption>
</figure>
```

您可以将前面的示例复制到需要图像的任何地方，然后仅替换以下内容：
- 其中显示 `id="Universe_plate_01"` 应该是图像的唯一标识符。您可以放置​​任意一个，只要同一文件中每个章节没有两个相同的即可。
- 在 `src="..."` 处应该包含图片文件的路径。该路径应始终以 `/image/` 开头，所有图片都位于此处，其后应为与书籍路径相同的路径。也就是说，按照示例，由于书籍位于 `/en/book/Sir_James_Jeans/The_Universe_Around_Us`，因此该书籍的图片应位于 `/image/book/Sir_James_Jeans/The_Universe_Around_Us`。每张图片的文件名可以是任何短文件名，只要它能指示扩展名（`.png` 或 `.jpg`）。建议文件名不要包含任何空格、特殊字符、撇号或重音符号。
- 如果图片有标题，则应将其放在 `figcaption` 标签内。
- 如果要将图像左对齐、居中或右对齐，请分别将 `class="image urantiapedia"` 替换为 `class="image urantiapedia image-style-align-left"`、`class="image urantiapedia image-style-align-center` 和 `class="image urantiapedia image-style-align-right`。在下面的几段中，您必须添加一行 `<br style="clear:both;"/>`，以便对齐不再影响文本的位置。

由于包含图像的这项任务可能很繁琐，因此您可以使用类似上面提到的技巧。如果没有图像带有标题，您可以放置​​类似 `fff18`（或 `fffl18`、`fffc18`、`fffr18`）的内容，以简化编号为 18 的图像（甚至对齐）出现在那里的方式。

### 图像引用

当文本提到图像时，最好包含指向该图像的内部链接。例如，继续上面显示的图像，要包含引用，您可以这样写：

```
... each of them too faint to be seen individually without telescopic aid (see [Plate I](#Universe_plate_01)).

... as we already saw in [Plate VIII](/en/book/Sir_James_Jeans/The_Universe_Around_Us/#Universe_plate_01) of the previous chapter ...
```

语法 `[Plate I](#Universe_plate_01)` 是在 Markdown 中添加超链接的方式。要显示的文本在方括号中指示，紧接着的括号中是网络路径。如果图像在同一章节中，只需输入 `#` 然后是标识符。如果图像在另一个章节中，语法应该类似于 `[Plate I](/image/book/Sir_James_Jeans/The_Universe_Around_Us/3#Universe_plate_01)`。在这个例子中，我们指向第 3 章中的图 1。

### 脚注

如果您的书有脚注、章节尾注或出现在书末的全局注释，但在书中用数字或其他指示标记，这些注释标记将始终成为章节脚注，如下所示：

```
事实上，Altair 和 Saturn 在天空中看起来同样明亮，只能意味着 Altair 是 80，比土星远000倍[^1]。

...

[^1]：因为物体的视亮度与其距离的平方成反比，而 80,000 的平方约等于 60 亿。
```

脚注始终标记为从 1 开始的连续数字，并写作 `[^1]`、`[^2]` 等。`^` 字符在键盘上使用 `Shift + [` 然后按空格键键入。

脚注分为两部分：一部分是指示，放在文本中；另一部分是注释本身，放在文件的末尾，在其他内容之后，每个注释都有其标记，然后是冒号，然后是文本，每个注释之间用空行分隔。为注释放置一个 `## Notes` 部分会很方便，正如已经提到的，它应该始终放在所有内容的末尾，包括导航链接。


### 表格

在任何办公软件中创建表格始终是一项复杂的任务。 Markdown 可以轻松创建表格，但是当表格具有嵌套单元格，对齐文本等时，它仍然是一项复杂的任务。

例如，只需使用“管道”字符（“|”）即可轻松创建具有两列的表格：

```
年龄|时间
--- | ---：
地球年龄|大约 2,000,000,000 年
地球生命的年龄| 300,000,000
地球人类时代 | 300,000
天文科学时代 | 3,000
望远镜天文学时代 | 300
```
要将列对齐到左侧、右侧或中间，只需分别使用字符 `---`, `---:` 和 `:---:`，如示例所示。

对于每个单元格需要多行的表格，可以使用 `<br>` 分隔符。例如：

```
波长（厘米）| 辐射性质 | 对原子的影响 | 温度（绝对度）| 发现地点
--- | --- | --- | --- | ---
7,500 x 10^-8^<br>到<br>3,750 x 10^-8^ | 可见光 | 干扰外层电子 | 3,850°<br>至<br>7,700° | 恒星大气
250 x 10^-8^<br>至<br>10^-8^ | X 射线 | 扰动内层电子 | 115,000°<br>至<br>29,000,000° | 恒星内部
```

如果您想了解更多关于如何在 Markdown 中格式化表格的信息，可以在这里查看：[Markdown 格式化帮助](/zh/help/markdown)，在_表格_和_高级表格_部分。使用 Markdown 可以非常简单地创建复杂的表格。如果表格最终无法在 Markdown 中创建，因为它太复杂，那么可以使用 HTML 语法创建。值得记住的是，Markdown 是编写 HTML 的另一种方式，但它也支持任何 HTML 内容。在 Mozilla Docs 中可以找到有关创建 HTML 表格的优秀教程：[HTML 表格基础知识]（https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics）。

值得注意的是，当表格的宽度大于屏幕宽度时，移动设备上的表格阅读效果不佳。为避免这种不便，当表格有两列以上时，建议将表格放在侧滚动条中，如下例所示：

```
<div class="urantiapedia-table-wrapper">

波长（厘米）| 辐射性质 | 对原子的影响 | 温度（绝对度）| 发现位置
--- | --- | --- | --- | ---
7,500 x 10^-8^<br>a<br>3,750 x 10^-8^ | 可见光 | 干扰外层电子 | 3,850°<br>a<br>7,700° | 恒星大气
250 x 10^-8^<br>a<br>10^-8^ | X 射线 | 干扰内层电子 | 115,000°<br>a<br>29,000,000° | 恒星内部

</div>
```

### 数学公式或科学计数法字符

在任何办公软件中，创建数学公式或使用科学计数法字符始终是一项复杂的任务。Markdown 使创建它们变得更容易，但这仍然是一项复杂的任务，具体取决于要使用的公式或字符，因为所使用的语法实际上是 [LaTeX](https://es.wikipedia.org/wiki/LaTeX)，通过名为 [Mathjax](https://www.mathjax.org/) 的 Markdown 扩展程序。

如果您想了解有关如何在 Markdown 中格式化科学公式和文本的更多信息，可以在此处查看：[Markdown 格式化帮助](/zh/help/markdown)，在 _数学表达式 (Mathjax)_ 部分。

### 导航链接

这些链接放置在每个章节开头和结尾的简单表格中，方便您轻松地从一章移动到另一章，或转到索引。它们应该像以下示例一样：

```
<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us/1">
            <span class="mdi mdi-arrow-left-drop-circle"></span><span class="pl-2">第一章 — 探索天空</span>
          </a>
        </td>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us#índice">
            <span class="mdi mdi-book-open-variant"></span><span class="pl-2">索引</span>
          </a>
        </td>
        <td>
          <a href="/es/book/Sir_James_Jeans/The_Universe_Around_Us/3">
            <span class="pr-2">第三章 — 探索当时</span><span class="mdi mdi-arrow-right-drop-circle"></span>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</figure>
```


如上所述，文件中的最后部分应始终是注释部分（如果有），即使在这些导航链接下方也是如此。 ## 创建封面文件要创建封面文件，本手册[获取所有宗教的书籍](/zh/help/github_religious_books_markdown)部分中描述的所有内容均适用。如上所述，封面文件将是一个 Markdown 文件，其名称与包含章节的文件夹相同。例如，文件夹`/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us`包含一本关于天文学的书籍的章节，文件`/output/wikijs/en/book/Sir_James_Jeans/The_Universe_Around_Us.md`是该书籍的封面文件。

## 提交拉取请求

这完成了将“源”书籍添加到 Urantipedia 图书馆时需要考虑的所有事项。一旦对 GitHub 项目进行了这些更改，就必须按照[管理员](/zh/help/admin)、[主编](/zh/help/github) 或 [助理编辑](/zh/help/github_assistant) 用户手册中的详细说明提交拉取请求。

## 外部链接

- [Urantiapedia 工具 - GitHub 项目](https://github.com/JanHerca/urantiapedia )
- [Google 图书](https://books.google.es/ )
- [互联网档案馆 - 图书](https://archive.org/details/books)
- [古腾堡计划](https://www.gutenberg.org/)
- [Markdown 格式帮助](/zh/help/markdown)

<br>


<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_sourcebooks_catalog">创建据称是启示者使用的书籍目录</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_topicindex">翻译百科全书修订版</a></td>
      </tr>
    </tbody>
  </table>
</figure>