---
title: 百科全书的翻译与修订
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
        <td><a href="/zh/help/github_sourcebooks_markdown">获取据称是启示者使用的书籍</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_topicindex_to_wiki">转换百科全书</a></td>
      </tr>
    </tbody>
  </table>
</figure>

以下描述了将《百科全书》翻译并审阅为《Urantiapedia》任何一种语言所需的步骤。此项任务由“主编”完成。

该 *百科全书* 由一系列 TXT 文件组成，这些文件源自 *Urantia Fellowship* 版 *The Urantia Book* 的附录（[主题索引](https://urantia-book.org/urantiabook/topical_index/index.htm)）。

> 重要提示：为了执行此任务，*Urantiapedia 工具* 目前正在开发一项名为“主题索引编辑器”的开发功能，该功能可简化编辑工作，并降低错误率。请参阅下文。
{.is-info}

要为其他语言创建新的*百科全书*，请从 `input/txt/topic-index-en` 文件夹中找到的英文版*百科全书*开始。复制该文件夹，并将名称更改为目标语言的名称。

该文件夹包含字母表中每个字母对应的文件（`a.txt`、`b.txt` 等），以及一个 `_.txt` 文件，其中包含以数字开头的条目。主题的引用顺序始终按照英语排序，因此每个文件都包含英文首字母与该字母匹配的主题。例如，西班牙语主题“Espíritu Infinito”必须在 `i.txt` 文件中找到，因为英语主题以 I（“Infinite Spirit”）开头。

该格式与 YAML 格式（https://en.wikipedia.org/wiki/YAML）略有相似，但经过简化，非常易于编辑。

> 重要提示：此文件包含标签页，必须使用支持标签页渲染的文本编辑器进行编辑。推荐使用的编辑器有：Visual Studio Code (https://code.visualstudio.com/)、Notepad++ (https://notepad-plus-plus.org/) 或 Sublime Text (https://www.sublimetext.com/)。
{.is-info}

## 百科全书TXT格式

以下是文件`a.txt`的摘录：

```
<__________________________________________________________________________________
<
<                     A
< Urantia Book Uversa Press Topical index converted to text file
< Each entry has a previous blank line
< Entry = Name | Refs | See also | Category | OK (= revised)
< An entry can have one or several sub-entries (= the lines after entry)
< A sub-entry can have sub-sub-entries with tabs and so on
< Help: https://urantiapedia.org/zh/help/github_topicindex
<__________________________________________________________________________________

A-B-C the First; A-B-C the first | (77:8.2) | | PERSON | OK
it is the name of the first secondary midwayer of the first subgroup of eight subgroups that exists. Each subgroup are 248 brothers and sisters, childs of the same parents (77:6.4)

a priori assumptions | | doctrines | | OK
causation, duty, and worship constitute the a priori assumptions which make it possible for man to function as a rational and self-conscious personality (16:6.10)

Aaron (Old Testament); Aaron | | daughters of Aaron | PERSON | OK
Aaron was the older brother of Moses and the one who starred in the event of the golden calf, an idol with which the Israelites decided to represent Yahweh.
Peter talk about him in a preach (146:1.1)
> https://en.wikipedia.org/wiki/Aaron

...
```

每个文件包括：
- 标题部分，用于解释文件内容，每行以 `<` 开头。处理文件时，这些行会被忽略。
- 主题列表。每个主题前面都有一个空行，包含以下几行：
    - 第一行是一个简短的表格，包含主题描述，以及用`|`（竖线）分隔的值或单元格。值为：
        - 主题名称。如果名称后出现一个或多个以`;`分隔的名称，则这些名称为别名，将在《尤兰提亚之书》文本中作为主题名称的替代形式进行搜索。第一个名称始终是《尤兰提亚百科全书》中页面标题的名称。其余以`;`分隔的名称将是名称或别名，它们将添加到第一个名称中，并在《尤兰提亚之书》中搜索，以创建指向这些主题的链接。
        - 整个主题中对《尤兰提亚之书》的一般或全局引用。此值可以为空。这些链接将在《尤兰提亚百科》顶部的“另见”部分显示，并附带链接列表。
        - 指向其他主题的链接。此值可以为空。表示与当前主题相关的一个或多个主题。它们将显示在生成的页面底部的“链接”列表中。如果存在多个链接，它们将以`;`分隔。可以使用`:`添加指向主题内特定部分的链接。例如：`baptism:Jesus baptism`是一个指向主题页面`baptism`的链接，该页面内包含有关耶稣受洗的部分。
        - 主题类别。此值可以为空。共有五个类别：人物（`PERSON`）、地点（`PLACE`）、生物秩序（`ORDER`）、宗教（`RELIGION`）和种族（`RACE`）。这些类别允许只在其中一个类别中工作，以便更好地划分任务并生成索引。
        - 状态。“主编”完成某个主题的审阅任务后，应填写`OK`。如果该主题仍处于待审状态，则状态为空。
    - 以下各行（如果存在）是主题内容。这些行也是简短的表格，可能有也可能没有用 `|`（竖线）分隔的值。表格有两种类型：
        - 不带 `|`（竖线）的单个单元格表格：它将包含一段文本、《Urantiapedia》页面一行的文本，以及文本后面括号（如果存在）中对《Urantia Book》段落的一个或多个引用。
        - 由 `|`（竖线）分隔的两个单元格组成的表格，第一个单元格的内容与只有一个单元格的表格相同，第二个单元格的内容是指向其他主题的链接列表，以 `;` 分隔。
    - 主题末尾有一些以 `>` 开头的可选行。这些行将链接到其他网页，并显示在“外部链接”部分。

除第一行之外，其他主题中每一行的构造规则如下：
- 句子无需以大写字母开头或以句号结尾。软件在将文件转换为 Wiki.js 格式时，会自动将每个句子大写并以句号结尾。
- 每行文本可以是单句或多句。如果是多句，则中间必须出现句号或大写字母，因为只需校正行首和行尾。
- 每行的文本不能包含括号，因为这些字符是为《尤兰提亚之书》参考保留的。
- 每行开头都可以有制表符。每个制表符表示该行将包含在紧邻上一行（不带制表符）中，该行将充当章节或小节的标题。
- 行可以以 `*` 或 `#` 开头，也可以混合使用，从而构成无编号、编号和混合列表。请参阅下文。

主题摘录示例（文件`a.txt`）：
```
apostles of Jesus | (138) (145:4.1) (150:4) (158:0.2) (158:2.5) (172:5) (173:5.6) (184:2.2) (193:3.2) | apostleship | PERSON | OK
The apostles were the group of twelve followers with whom Jesus began his preaching
their names:
* Andrew | Andrew
* Simon Peter | Simon Peter
* James Zebedee | James Zebedee
* John Zebedee | John Zebedee
* Philip | Philip (Apostle)
* Nathaniel | Nathaniel (Apostle)
* Matthew Levi | Matthew Levi
* Thomas Didymus | Thomas Didymus
* James Alpheus | Alpheus twins
* Judas Alpheus
* Simon Zelotes | Simon Zelotes
* Judas Iscariot | Judas Iscariot
* Other known were Matthias and Paul, although the latest never met Jesus | Matthias; Paul
The Urantia Book gives detailed personal descriptions of each (139)
most were married, and some had several children (138:9.3)
all except the Alphaeus twins were graduates of synagogue schools (139:0.3-4)
most were rough fishermen (140:8.20)
they were not all the same in terms of schooling (139:0.3-4)
many carried swords (171:4.1) (172:0.3) (172:2.1) (172:5.2)
many were martyred | martyrs
organization
	their organization is detailed in The Urantia Book (138:10)
	Andrew was the chief (139:1.2)
	Peter, James, and John were Jesus' personal aids (138:10.3)
	Philip was the apostolic steward (139:5.3)
	Nathanael cared for the families of the apostles (139:6.7)
	the itinerary was managed by Thomas (139:8.5)
	Matthew was a fund-raiser (139:7.2)
	Simon was in charge of diversion and relaxation (139:11.2)
	The Alphaeus twins were the errand boys; those who took care of the multitudes (139:10.3)
	Judas Iscariot was treasurer (139:12.3)
	Matthias was chosen to take the place of Judas (192:0.2)
> https://en.wikipedia.org/wiki/Apostles_in_Christianity
```

在前面的摘录中我们可以看到：
- 这是与[“耶稣的使徒”](/en/topic/apostles_of_Jesus)主题相关的内容。请前往此页面查看此文本转换为 *Wiki.js* 后的效果。
- 在结果页面的顶部添加了“另请参阅”提示，后面跟着主题标题中的参考资料。
- 注意，标题中主题包含指向“使徒职分”的链接，并且包含使徒列表的行也包含“|”符号，并链接到使徒主题。这些链接显示在末尾添加的“链接”部分中。
- 主题类型与人（`PERSON`）有关，在本例中是耶稣的使徒。
- 请注意，存在`OK`标记，这意味着该主题已经过英文审核。
- 检查要创建无序列表，各行必须以`*`开头。
- 注意，很多行不是以大写字母开头，也不是以句号结尾。这个问题在创建页面时已修复。
- 该主题将创建一个名为“组织” (`Organization`) 的部分，因为该行下方的下一行开头都有一个制表符。
- 像“他们的名字：” (`their names:`) 这样的行是一行只有一个单元格并且不包含任何引用。
- 像“菲利普是使徒管家（139:5.3）” (`Philip was the apostolic steward (139:5.3)`) 这样的行是一行只有一个单元格并且包含一个引用。
- 像“许多人殉道 | 殉道者”这样的一行有两个单元格，因此第二个单元格必须包含指向其他主题的链接。要使用更多主题，可以用`;`分隔，例如：`many were martyred | martyrs; Simon Peter`。
- 像`Matthew was a fund-raiser (139:7.2) | Matthew Levi`这样的行（不在示例中）将是一行有两个单元格的行，其中第一个单元格有引用，第二个单元格是链接。
- 请注意，指向主题的外部链接应添加在主题末尾，并在每行开头使用字符 `>`。上面的示例展示了如何链接到关于使徒的英文维基百科。您可以添加多个链接，每个链接占一行，只要它们以字符 `>` 开头，并在 URL 前留一个空格即可。

> 重要提示：在单行文本中，必须避免使用括号 `(` `)`，因为它们仅用于定义对《尤兰提亚之书》的引用。如果您需要在括号中说明内容，请将文本更改为使用 `,` 逗号分隔的文本。
{.is-info}

## 名称和别名

页眉中的第一个名字是转换后页面的主题标题。务必确保此名字尽可能多地出现在引用的段落中。有时，一个名字在《尤兰提亚之书》中会以多种不同的表达方式出现。例如，请看下一个页眉：

```
absoluta; cosmic force; Cosmic force; space potency; Space potency; space energy; space-energy; mother force of space; space-force; force-charge of space; universal force-charge of space; force blanket; Primordial-force; Primordial force; space-force; universe force; space charge of universal force; force-charge of space; force-charge; power charge; cosmic-force; primal force | | | | OK
```

此标题与`absoluta`有关，它是宇宙能量的表现形式之一。但在《尤兰提亚之书》中，该名称有很多变体。所有变体均已添加在主名称后，并用`;`分隔。所有《百科全书》均需进行此项工作并进行审核。如果该名称在书中以大写和小写形式出现，则必须将两种变体都添加到别名列表中，以确保创建正确的链接。

*主题索引编辑器* 是一款非常有助于检查这一点的工具。请参阅下文。


## 列表

要在主题文件中创建无序列表，请在每行开头使用字符 `*`。对于有序列表，请使用 `#`。对于混合列表，请结合使用两者。以下是一些示例：

```txt
Alexander the Great; Alexander | | | PERSON | OK
Facts about Alexander the Great mentioned in The Urantia Book
    * his campaign in Punjab introduced Aryan heritage to India (79:4.3)
    * his royal mausoleum at Alexandria was visited by Jesus (130:3.4)
    * The Samaritans assisted Alexander and that angered the Jews against them (143:4.2-3)
    * Alexander spread the Hellenistic civilization in the Middle East (195:1.7-10)
```
在这里查看结果：[亚历山大大帝](/en/topic/Alexander_the_Great)

```
dual-origin beings | | Sons of God | ORDER | 
orders
    * A. descending orders
    *# Creator Sons
    *# Magisterial Sons
    *# Bright and Morning Stars
    *# Father Melchizedeks
    *# Melchizedek Sons
    *# Vorondadek Sons
    *# Lanonandek Sons
    *# Brilliant Evening Stars
    *# Archangels
    *# Life Carriers
    *# Unrevealed Universe Aids (30:1.41)
    *# Unrevealed Sons of God (30:1.42)
    * B. stationary orders
    *# abandonters
    *# susatia
    *# univitatia
    *# spironga
    *# unrevealed (30:1.48)
    * C. ascending orders
    *# ascending mortals
    *# Son-fused mortals
    *# Spirit-fused mortals
    *# translated midwayers | midwayers
    *# unrevealed ascenders (30:1.54)
```
在这里查看结果：[dual-origin beings](/en/topic/dual-origin_beings)

列表不必位于章节标题下，也不必在开头添加标签。我们上面已经看到过使徒侍从的示例。在这种情况下，列表会创建在上一行下方。

## 所有语言同步

保持所有语言文件同步非常重要，这样相同主题的相同行在所有文件中都位于相同的位置。在向一种语言的文件添加内容时，务必确保相同的内容在所有其他语言中也位于相同的行号。否则，转换为 Wiki.js 将会失败。

建议使用允许并行打开多个文件的文本编辑器（例如 VS Code）来并排编辑文件。一个值得安装的 VS Code 扩展是 *Sync Scroll*，它允许同时同步滚动多个文件。

## 贡献者应该改变什么

对于“主编”来说，他们在百科全书文件中的修改没有任何特殊限制。他们必须遵循前面解释的规则，但可以进行任何必要的更改。

对于“助理编辑”，由于他们遵循更简单的流程，因此必须遵守一些限制。“助理编辑”不得更改以下任何内容：
- 未经审核且未获得“OK”标记的主题。这些主题必须保留，或许仍需进一步处理。在“主编”未审核该主题之前，“助理编辑”不得进行任何工作。
- 主题第一行中的全局参考或类别。
- 对《尤兰提亚之书》的引用或对主题中出现的行中的其他主题的引用。
- 线条的顺序。

如果“助理编辑”发现先前内容有任何错误，则应在主题文件以外的其他地方记录并发送。

“助理编辑”唯一需要修改的内容是：
- 如果工作语言不是英语或西班牙语，则在主题第一行找到的名称或别名。英语和西班牙语名称已在这些语言中审核过。
- 每行主题内的文本。
- 维基百科页面的 URL。

当使用 Visual Studio Code 编辑百科全书时，“助理编辑”应根据语言关注两类任务：
- 对于英语和西班牙语，仅校对文本中的内容。
- 翻译其他语言的文本。“编辑”应创建现有《百科全书》的其他语言版本（最好是英语），并借助翻译工具尽快翻译文本。

## *主题索引编辑器*

*主题索引编辑器*是一款正在开发中的工具，但目前状态下，它有助于完成一些百科全书的审阅和编辑任务。由于该软件需要预先安装且设置复杂，因此它不属于“助理编辑”的范畴，而是“主编”的范畴。请查看[设置 GitHub 项目](/zh/help/github_setting)。

要访问它：
1. 在打开项目的 VS Code 中按 F5 打开 *Urantiapedia Tools*。
2. 打开两个窗口。忽略 Dev Tools 实例。它是用来调试的。
3. 在侧面板上选择“编辑主题索引”。

![](/image/help/uptools_topic_editor.png)

*主题索引编辑器*有四个主要区域：
- 左侧是主题列表。
- 顶部有一些选择器来设置所需的语言。
- 中心显示主题内容列表，同时显示错误消息。
- 右侧是《尤兰提亚之书》的内容，其中包含所选主题引用的段落。

将来，*主题索引编辑器*将允许直接从应用程序编辑主题，但目前它提供的功能如下：
- 加载给定语言的主题列表。
- 按类别、首字母、是否修改以及是否有错误来过滤主题。
- 显示主题的内容。
- 显示主题中某一行引用的《尤兰提亚之书》段落。
- 突出显示《尤兰提亚之书》中的名称（或别名）以检查是否找到了该名称。
- 突出显示《尤兰提亚之书》中与主题中选定的行相匹配的最佳句子并允许复制。

要使用*主题索引编辑器*，请按照以下说明操作：
1. 在顶部选择器“主要语言（可修改）”中选择您想要的语言。将次要语言选择器保留为“英语”。主题将在几秒钟后加载。
2. 在顶部选择器“主题字母”中，选择您正在处理的字母。主题会根据该字母进行筛选，仅显示以该字母开头的英文主题。
3. 在列表中选择一个主题。如果有行列表，则会填充到主题内容区域中。顶部选择器中会列出所选语言的两种主题行，以便可以比较两种语言。
4. 选择主题中的一行。该主题行引用的段落列表将填充在《尤兰提亚之书》内容区域中。

*主题索引编辑器* 的一个实用功能是显示主题中发现的错误。例如，在下面的快照中，我们发现了一个指向不存在主题的链接。现在我们可以前往 VS Code 检查出错的文件并进行修复。

![](/image/help/uptools_topic_editor_2.png)

另一个实用功能是主题名称会在《尤兰提亚之书》文本中高亮显示。例如，在主题下方的快照中，英文版`brotherhood of man`和西班牙语版`hermandad de los hombres`在英文版中出现，但在西班牙语版中却未找到。您可以查看西班牙语版《尤兰提亚之书》的西班牙语版本，发现`fraternidad de los hombres`而不是`hermandad de los hombres`，意思相同。因此，为了解决这个问题，我们需要在主题中添加`fraternidad de los hombres`作为别名。

另一个实用功能是，所选的短句，英文为`civilization encompased by love`（被爱包围的文明），西班牙语为`civilización rodeada por el amor`（爱之文明），已在主题行所引用的《尤兰提亚之书》段落中找到。段落中与该句最匹配的句子将以粗体突出显示，底部将显示一个“复制”按钮。您可以使用该按钮将句子复制到剪贴板并粘贴到 VS Code 中，从而使用更具解释性的文本改进主题中的文本。

![](/image/help/uptools_topic_editor_3.png)

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
        <td><a href="/zh/help/github_sourcebooks_markdown">获取据称是启示者使用的书籍</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_topicindex_to_wiki">转换百科全书</a></td>
      </tr>
    </tbody>
  </table>
</figure>