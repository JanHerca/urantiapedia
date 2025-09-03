---
title: Urantiapedia 内容
description:
published: true
date: 2021-12-08T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/principles">统治 Urantiapedia 的原则</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/phases">项目里程碑</a></td>
      </tr>
    </tbody>
  </table>
</figure>

这里详细解释了*Urantiapedia* 中预期的所有类型的内容，包括如何访问、组织以及谁可以更改它。

## 内容如何组织

与 [Urantiapedia](https://urantiapedia.org) 中的任何 Wiki 一样，这里也包含多个页面，每个页面都有唯一的标题和 URL。例如：
* https://urantiapedia.org/en/The_Urantia_Book/156 是《尤兰提亚之书》第 156 篇英文版页面的 URL。
* https://urantiapedia.org/es/article/Norm_Duval/How_big_is_Orvonton 是有关 Orvonton 的西班牙语文章页面的 URL。
* https://urantiapedia.org/fr/topic/Andrew 是有关使徒安德鲁的法语页面的 URL。

每个页面可以是一篇文章、一本书的一个章节、一本书的索引页、一个指向其他页面的链接的索引页等等。页面的内容由用户自主决定，并可根据需要随时修改。不过，页面创建后，建议将其设为永久页面，并在需要时使用重定向。


## 用户组

该表总结了网络内部的用户组：

群组 | 群组内用户的描述
--- | ---
管理员 | 可以做任何事情的用户
编辑 (1) | 请求经过管理员用户的验证和授权后，可以编辑书籍、文章和学习辅助工具、幻灯片、地图、3D 模型和资产（图像、音频、视频）的用户。
作者 (2) | 组内的用户以其姓名充当编辑，但仅限于编辑由该用户创作的书籍、文章等有限的集合。
审阅者 | 只能查看页面、查看历史记录和发表评论的用户。
用户 | 任何未注册的用户。仅用于查看页面。

(1) 在项目的初始阶段，某些类型的内容只能由被称为“主编”的用户在“Urantiapedia”网站之外使用“Urantiapedia 工具”进行编辑。在项目的每个里程碑中，初始内容上传完成后，“Urantiapedia 工具”将不再使用，“编辑”群组的用户将能够通过该网站编辑内容。

(2) AUTHOR 表示将存在多个 AUTHOR 类型的组，每个组包含指定页面的作者（或由作者授权）用户。例如，如果有两个名为 Han Solo 和 Obi Wan 的用户想要成为作者，则会有一对名为 HANSOLO 和 OBIWAN 的组，第一个组包含 Han Solo 用户，第二个组包含 Obi Wan 用户。第一个组是唯一可以编辑 `/en/article/hansolo/`（以及除英语以外的任何其他语言环境）、`/en/slides/hansolo` 等路径中页面的用户。另一方面，Obi Wan 用户可以编辑 `/en/article/obiwan/`、`/en/slides/obiwan/` 等路径中的页面。这样，某些用户将成为某些页面的唯一编辑者。

请注意，只有管理员或作者用户才能删除页面，以确保链接不会失效。因此，删除页面的流程如下：
1. 创作：
  - 编辑或作者用户直接在此站点创建页面，或
  - ADMIN 用户通过批量上传过程一次创建多个页面（EDITOR 和 AUTHOR 用户可以通过使用 GitHub 为 ADMIN 用户提供帮助）
2. 版本：
  - EDITOR 或 AUTHOR 用户直接在本网站编辑页面，或
  - ADMIN 用户通过批量上传流程同时编辑多个页面（EDITOR 和 AUTHOR 用户可以通过使用 GitHub 为 ADMIN 用户提供帮助）
3. 删除或移动（如果需要）：
  - 管理员用户删除或移动页面，确保任何链接的页面都得到更新。
  - 如果页面位于其拥有的文件夹中，则 AUTHOR 用户可删除或移动该页面。

## 页面类型

该表汇总了页面类型。表中显示了编辑该类型页面所需的最低用户组。ADMIN 用户可以执行所有操作，因此当表中显示 EDITOR 或 AUTHOR 时，也表示 ADMIN。当表中显示 AUTHOR 用户时，表示有多个此类型的用户，每个用户都控制指定文件夹中的页面，并且是唯一拥有编辑权限的用户。

下表显示了添加到 [https://urantiapedia.org](https://urantiapedia.org) 域名以获取英语 URL 的 URL 路径。请将语言代码替换为其他语言所需的代码。例如，获取《尤兰提亚之书》索引的 URL 为：
- 英文版：https://urantiapedia.org/en/The_Urantia_Book/Index
- 西班牙语：https://urantiapedia.org/es/The_Urantia_Book/Index

有关 URL 的更多信息请参见下面的部分。

类型 | 描述 | 创建 | 修改 | 删除 | URL
--- | --- | --- | --- | --- | ---
网页 | Wiki 本身的页面，如起始页、帮助页、路线图 | 管理员 | 管理员 | 管理员 | /zh/help/
BOOK_UB | 《尤兰提亚之书》| 管理员 | 管理员 | 管理员 | /en/The_Urantia_Book/
BOOK_BIBLE | 圣经 | 管理 | 管理 | 管理 | /en/Bible/
BOOK_AUTHORED | 来自作者用户的书籍 | AUTHOR | AUTHOR | AUTHOR | /en/book/user_name/book_title/
BOOK_PUBLIC | 任何人都可以编辑的书籍 | EDITOR | EDITOR | ADMIN | /en/book/author/book_title/
TOPIC | 《尤兰提亚之书》中提到的术语、主题或概念 | 管理员 | 编辑 | 管理员 | /en/topic/topic_name/
INDEX | 包含链接集合的页面 | 管理员 | 编辑 | 管理员 | /en/index/index_name
ARTICLE_AUTHORED | 来自作者用户的文章 | AUTHOR | AUTHOR | AUTHOR | /en/article/user_name/article_title
ARTICLE_PUBLIC | 任何人都可以编辑的文章 | EDITOR | EDITOR | ADMIN | /en/article/author/article_title
SLIDES_AUTHORED | 来自作者的幻灯片 | AUTHOR | AUTHOR | AUTHOR | /en/slides/user_name/slides_title
SLIDES_PUBLIC | 任何人都可以编辑的幻灯片 | EDITOR | EDITOR | ADMIN | /en/slides/slides_title
MAPS_AUTHORED | 地图 (1) 来自一位作者 | AUTHOR | AUTHOR | AUTHOR | /en/map/user_name/map_title
MAPS_PUBLIC | 任何人都可以编辑的地图 (1) | EDITOR | EDITOR | ADMIN | /en/map/map_title
3DMODEL_AUTHORED | 来自作者的 3D 模型 | AUTHOR | AUTHOR | AUTHOR | /en/3dmodel/user_name/3dmodel_name
3DMODEL_PUBLIC | 公共 3D 模型 | 编辑 | 编辑 | 管理员 (2) | /en/3dmodel/3dmodel_name
IMAGE | 图像，可以是绘图、图表或插图 | 编辑或作者 | 编辑或作者 | 管理员 (3) | /en/image/image_name

1. 地图可以是 2D 或 3D 的，可以包含：
   - 点标记会弹出显示位置。弹出窗口可以包含指向 Wiki 或外部的链接。
   - 路径：多个路径点，每个路径点都会弹出窗口，展示一个人或多个人的行进轨迹。这些路径可以动画形式显示。
   - 区域：显示某物位置的多边形，没有特定位置，例如帝国或国家。
2. 只有在没有其他页面链接到某个 3D 模型的情况下，才可以将其移除。3D 模型的页面（即允许更新 3D 模型的页面）必须允许查看使用该 3D 模型的页面列表。3D 模型只能以特定格式（最好是 glTF）和最大尺寸上传。
3. 只有在没有其他页面链接到该图片的情况下，才能删除该图片。图片所在页面（即允许更新图片的页面）必须允许查看使用该图片的页面列表。图片上传的格式和最大尺寸必须符合特定要求。


## 帮助页面

这些页面包含有关 *Urantiapedia* 本身的内容，例如用户手册、建议、政策文件、进度状态等。这些页面的 URL 格式如下：`https://urantiapedia.org/[lan]/help/[title]`


## 书籍

这不仅包括所有译本的《尤兰提亚之书》，还包括《圣经》以及任何被认为是启示者使用的资料来源，或内容能够解释《尤兰提亚之书》主题的公共领域书籍。此外，还包括作者希望以开放许可形式提供的《尤兰提亚之书》的衍生作品。所有这些可以构成一种“尤兰提亚图书馆”，类似于[维基文库](https://wikisource.org/wiki/Main_Page)或[Archive.org](https://archive.org/)，但涵盖了所有与《尤兰提亚之书》相关的内容。

### 《尤兰提亚之书》

关于《尤兰提亚之书》，每个译本都有一个主页，其中包含书名、版权、年份等信息；此外，还有一个页面用于文献索引；还有一个页面用于索引的扩展版本；最后，每篇文献各有一个页面。以下是英文版的一些页面示例：
- https://urantiapedia.org/en/The_Urantia_Book
- https://urantiapedia.org/en/The_Urantia_Book/Index
- https://urantiapedia.org/en/The_Urantia_Book/Index_Extended
- https://urantiapedia.org/en/The_Urantia_Book/147

其他内容如*发布授权*也可以包含在同一路径下。

每张纸页除了包含章节的内容本身外，还包含一些额外的章节：
- *参考文献*包含引用或假定引用的链接。在《尤兰提亚之书》中，作者本人也表示，他们更多地扮演着编纂者而非启示者的角色，使用现有的人类文献。有时，由于开发人员使用引号，因此隐含着逐字引用。有时，引用非常微妙，难以察觉。许多读者随着时间的推移发现了这些引用。引用通常指《圣经》中的一段文字，或启示录成书时或更早时期的宗教、哲学或科学书籍。此“参考文献*”部分将放置指向圣经段落或启示者使用过的任何其他书籍的链接。只要这些书籍属于公共领域，《圣经》和其他资料也将包含在《尤兰提亚百科全书》中，以便读者在阅读本书时可以参考启示者可能参考的资料。
- *链接* 是指向与论文相关的任何文章、主题、索引或图像的链接，并提供有助于阐明论文的内容。
- 还可以有一个*外部链接*部分，其中包含指向其他网站的链接，这些网站可能包含与该论文相关的有用信息。

包含*参考资料*、*链接*和*外部链接*的部分将成为大多数*Urantiapedia*页面的常见模式。

### 圣经

关于《圣经》，由于它是一本大量引用《尤兰提亚之书》作者著作的主要书籍，因此通往《圣经》的路径很短。圣经的每一卷书都有一页，每一章也有一页。例如，以下是《创世记》和《约翰福音》各卷书和章节的链接：
- https://urantiapedia.org/en/Bible/Genesis
- https://urantiapedia.org/en/Bible/Genesis/Index
- https://urantiapedia.org/en/Bible/Genesis/2
- https://urantiapedia.org/en/Bible/John
- https://urantiapedia.org/en/Bible/John/Index
- https://urantiapedia.org/en/Bible/John/2

URL 中使用的有效书名：

 | | | | |
 --- | --- | --- | ---
Genesis | Exodus | Leviticus | Numbers
Deuteronomy | Joshua | Judges | Ruth
1_Samuel | 2_Samuel | 1_Kings | 2_Kings
1_Chronicles | 2_Chronicles | Ezra | Nehemiah
Esther | 1_Maccabees | 2_Maccabees | Job
Psalms | Proverbs | Ecclesiastes | Song_of_Solomon
Sirach | Wisdom_of_Solomon | Isaiah | Jeremiah
Lamentations | Baruch | Ezekiel | Daniel
Hosea | Joel | Amos | Obadiah
Jonah | Micah | Nahum | Habakkuk
Zephaniah | Haggai | Zechariah | Malachi
Matthew | Mark | Luke | John
Acts_of_the_Apostles | Romans | 1_Corinthians | 2_Corinthians
Galatians | Ephesians | Philippians | Colossians
1_Thessalonians | 2_Thessalonians | 1_Timothy | 2_Timothy
Titus | Philemon | Hebrews | James
1_Peter | 2_Peter | 1_John | 2_John
3_John | Jude | Revelation | Bel_and_the_Dragon
Prayer_of_Manesseh | Tobit | Judith | Book_of_Enoch
Assumption_of_Moses

其他与《圣经》相关的非正典书籍，如果与《尤兰提亚之书》有某种关联，也可以放在同一路径下。《以诺书》就是一个很好的例子，它被明确提及。

### 其他应作为资料来源的书籍

除了《圣经》之外，任何其他可能成为《尤兰提亚之书》来源的书籍，都可以添加到“书籍”路径中，其中一页用于显示书名、作者、版权和日期，一页用于显示索引，最后一页用于显示每一章。如果书籍年代久远且已扫描，则务必同时提供扫描图像和文本。图像可以作为图片集添加到每章文本底部的“原始”部分，并附上链接。

例如，马修·布洛克（Matthew Block）是一位读者，他为寻找《尤兰提亚之书》（The Urantia Book）的原始资料做出了巨大的贡献，详情可参见https://urantiabooksources.com/。他认为其中一本可能成为启示来源的书是詹姆斯·金斯爵士（Sir James Jeans）于1930年出版的《我们周围的宇宙》（The Universe Around Us）。由于这本书已进入公共领域，因此可以将其添加到《尤兰提亚百科》（Urantiapedia）中，并可以像这样链接：
- https://urantiapedia.org/en/book/Sir_James_Jeans/The_Universe_Around_Us
- https://urantiapedia.org/en/book/Sir_James_Jeans/The_Universe_Around_Us/3

### 其他世界各大宗教的书籍

《尤兰提亚之书》的作者建议我们熟悉所有宗教的宗教著作，因为它们都包含有益的内容 ([UB 92:7.3](/en/The_Urantia_Book/92#p7_3))，并且实现世界范围内的兄弟情谊需要更多地了解其他国家的文献 ([UB 52:6.4](/en/The_Urantia_Book/52#p6_4))。秉承这一原则，我们将在《尤兰提亚百科全书》中汇编世界各大宗教的书籍。

这些书籍可以添加到“book”路径中。此路径中将包含各主要宗教的文件夹，如下所示：
- “巴哈伊教”：巴哈伊教的书籍。
- `Bahaism`：佛教书籍。
- `Buddhism`：基督教书籍。
- `Christianity`：有关儒家思想的书籍。
- `印度教`：有关印度教的书籍。
- `Hinduism`：有关伊斯兰教的书籍。
- `Islam`：有关耆那教的书籍。
- `Jainism`：有关犹太教的书籍。
- `Shintoism`：有关神道教的书籍。
- `Sikhism`：有关锡克教的书籍。
- `Taoism`：有关道教的书籍。
- `Zoroastrianism`：有关琐罗亚斯德教的书籍。

例如：
- 西班牙语的巴哈伊教书籍：https://urantiapedia.org/es/book/Bahaism/The_Splendour_of_God
- 英文版佛教书籍：https://urantiapedia.org/en/book/Buddhism/The_Gateless_Gate
- 法语版《古兰经》：https://urantiapedia.org/fr/book/Islam/Quran

### 其他读者的书籍

如果读者希望以公共许可证的形式分享自己创作的书籍，也可以将其添加到 *Urantipedia*。添加方式与其他书籍相同，在 `book` 路径下，分别用一页来记录书名、作者、版权声明和日期，一页来记录索引，最后每章用一页来记录。当然，书籍必须与 *The Urantia Book* 有关联，并且能够帮助理解该书，而不是小说或任何与该书关联不大的灵感作品。

这些书籍的 URL 格式如下：已知作者的书籍使用 `https://urantiapedia.org/en/book/[author]/[book_title]`，匿名书籍使用 `https://urantiapedia.org/en/book/[book_title]`。请注意，即使书籍的原始语言不是英语，也建议 URL 中的书名使用英文。更多信息请参见下文。


## 文章、学习辅助和图表

这包括任何可能对研究和理解《尤兰提亚之书》有趣的文章、帮助材料和意见文件。

每个页面都包含多个章节。强烈建议包含*参考文献*、*链接*和*外部链接*等公共章节。图片将被添加，以便它们可以作为独立实体进行链接，这样多篇文章就可以共享相同的图片而不会重复。*参考文献*非常重要。许多读者撰写的文章中，没有正确引用《尤兰提亚之书》或任何科学论文中的引文。应尽可能修改这些文章，添加这些缺失的参考文献。没有参考文献，信息就不真实。

文章的 URL 格式应遵循以下规则：已知作者的文章使用 `https://urantiapedia.org/en/article/[author]/[article_title]`，匿名文章使用 `https://urantiapedia.org/en/article/[article_title]`。请注意，尽管文章的标题是作者撰写的原始语言，但最好使用英文翻译的名称。这样，URL 的格式才能保持一致。

举个例子。假设一位西班牙读者写了一篇题为“耶稣时代的拿撒勒”的文章，我们可以将其翻译成“耶稣时代的拿撒勒”。URL 的更佳选择是

https://urantiapedia.org/es/article/Jan_Herca/What_was_Nazareth_like_in_the_time_of_Jesus

而不是

https://urantiapedia.org/es/article/Jan_Herca/Cómo_fue_Nazaret_en_tiempos_de_Jesús

请注意，*Urantiapedia* 旨在为所有人提供多语言内容，任何上传到此的页面都有望在未来某个时间点翻译成所有支持的语言。英文标题提供了一种统一的 URL 标识方式。这不会影响页面标题，因为标题的值始终与 URL 的值不同。更多详情请参阅下文。

此类内容还包括架构图或带有示意图的绘图。*Urantiapedia* 目前支持多种技术，可以轻松创建图表：[Kroki](https://kroki.io/)、[Mermaid](http://mermaid-js.github.io/mermaid/#/) 和 [PlantUML](https://plantuml.com/)。如果之前的图表生成器不足以满足 *《尤兰提亚之书》* 的需求（因为它们主要用于软件开发），则可以使用 [SVG 格式](https://developer.mozilla.org/en-US/docs/Web/SVG) 中的任何内容，这是创建图表、架构图或示意图的最佳推荐格式。

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/help/sample_page_article.png">
<figcaption><em>渲染文章的示例。</em></figcaption>
</figure>

## 主题

这些是与《尤兰提亚之书》特定主题相关的文章类型。例如，可以是像[absonity](/en/topic/absonity)这样的概念，像[Grandfanda](/en/topic/Grandfanda)这样的人物，像[Thought Adjusters](/en/topic/Thought_Adjusters)这样的生物类型，像[Nazareth](/en/topic/Nazareth)或[Orvonton](/en/topic/Orvonton_(superuniverse))这样的地方，或是像[亚当和夏娃的到来](/en/topic/Adam#arrival-of-adam-and-eve)这样的事件，等等。

每个主题都会包含一些公共部分：*参考资料*（包含指向*《尤兰提亚之书》*的链接）、*链接*（包含指向*尤兰提亚百科*其他页面的链接）以及*外部链接*（包含更多页面外的链接）。例如，关于*拿撒勒*的页面可以包含关于拿撒勒的简要基本介绍（它的位置、重要性、地理坐标以及地图链接），但*链接*部分可以包含指向一篇文章的链接，在该文章中，读者可以深入探究耶稣之城，了解它在耶稣时代的面貌，以及有哪些考古发现可以佐证或反驳书中的论述。

主题的 URL 格式为：`https://urantiapedia.org/en/topic/[topic_name]`。主题名称始终为英文，但页面标题会使用每种语言。


## 索引

这里包含不同的索引。如果索引中包含的内容非常多，可以创建一个包含主要部分和次要页面的主页。尽可能将每个索引设置为一页，以便于查找。

这些可能是一些索引：

索引 | 描述 | 排序 | 路径
--- | --- | --- | ---
索引列表 | 所有索引列表 | 如此表所示 | /en/index/index
主题索引 | 称为词汇表 | 按字母顺序 | /en/index/topics
人物索引 | 人名或名人专有名词词汇表 | 按字母顺序 | /en/index/people
众生索引 | 宇宙众生类型词汇表子集 (1) | 按字母顺序 | /en/index/beings
地点索引 | 宇宙或地球上地点词汇表子集 | 按字母顺序 | /en/index/places
圣经索引 | 每本圣经，提供与《尤兰提亚之书》相关章节的链接 | 按圣经顺序排列（《创世纪》《出埃及记》等）| /en/index/biblical
参考文献索引 | 每篇《尤兰提亚之书》文献均引用自其他书籍，无论是《圣经》还是其他书籍 | 按纸张排列 | /en/index/references
引文索引 | 书中引用的象征性句子列表 | 按主题（上帝、宇宙、天使、耶稣等）| /en/index/quotes
地球年表 | 地球大事记 (2) | 按时间顺序 | /en/index/earth_timeline
耶稣生平年表 | 耶稣生平主要事件及书籍链接描述 | 按年、月、日 | /en/index/Jesus_timeline

(1) 如果一类存在体有不同的名称（例如，*第三源头和中心* = *联合行动者*），则每个条目旁边都会有其余等效术语的列表。

（2）年表可以被视为一种事件索引。在这种情况下，它是指按日期排序的地球演化发展事件年表。它可以包括书中提到的历史事件。


## 图片

图片属于特殊内容，因为它们几乎不需要翻译成其他语言。因此，图片会被放置在整个网站的根目录下的一个公共文件夹中：`https://urantiapedia.org/image/`。没有针对每种语言的单独文件夹。

在此文件夹中，图像按如下方式组织到子文件夹中：

* `article`：报纸档案的图片。最好将出版物的所有图片放在该出版物专属的文件夹中。
* `book`：图库的图片。该文件夹内的结构应与上面显示的 `[language]/book` 文件夹的结构相同。
* `diagram`：图表。用于解释和阐明书中主题的信息图或图表。
* 帮助：此 Urantiapedia 帮助的图像。
* `map`：地图。静态地图，但如果采用 `svg` 格式或使用 [HTML 图像地图](https://www.w3schools.com/html/html_images_imagemap.asp)，则可能包含链接。
* `The_Urantia_Book`：用于说明《Urantia 之书》的图片。

支持的图像格式包括：`jpg`、`jpeg`、`png`、`gif`、`webp`、`svg`。

## 地图

地图并非简单的静态图像。此类地图将保存在图像部分。这些地图将是交互式应用程序，允许：
- 如果已设置此选项，则平移和放大地图，始终在一定范围的限制内。
- 将地图置于内容的中心。
- 单击地图内的元素并获取信息面板，其中可能出现链接，允许您跳转到 *Urantiapedia* 的其他页面或其他网站。
- 单击虚拟游览中的播放按钮，即可启动带有解释的动画。

地图的 URL 模式为：
- 对于公共地图，任何编辑者都可以修改：`https://urantiapedia.org/en/map/[map_name]`
- 对于作者地图，只能由作者或授权人员修改：`https://urantiapedia.org/en/map/[user_name]/[map_name]`

地图允许通过参数（名称或坐标）链接到地图中的某个位置。例如，假设有一个耶稣与使徒们北上飞行的地图页面。该地图的网址如下：

https://urantiapedia.org/en/map/Places_visited_by_Jesus_in_Palestine

当这种地图全面投入使用时，打开这张以拉玛为中心的地图有两种方式：
- `https://urantiapedia.org/en/map/Places_visited_by_Jesus_in_Palestine?name=Ramah`
- `https://urantiapedia.org/en/map/Places_visited_by_Jesus_in_Palestine?lonlat=32.936424,35.367742`

URL里的地图名称已经说明，需要英文。

<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/help/sample_page_map.jpg">
<figcaption><em>渲染交互式地图的示例。</em></figcaption>
</figure>


## 幻灯片

幻灯片是以动画形式显示在页面上的文本文档。它基本上就像一篇文章，您可以通过按前进和后退键或在触摸设备上滚动手指来浏览幻灯片，从而从一张幻灯片移动到另一张幻灯片。

幻灯片的 URL 模式为：
- 用于公开演示，任何编辑者都可以修改：`https://urantiapedia.org/en/slides/[slides_name]`
- 对于作者演示文稿，只能由作者或授权人员修改：`https://urantiapedia.org/en/slides/[user_name]/[slides_name]`

URL 将有一个在给定幻灯片上打开的参数。

<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/help/sample_page_slides.png">
<figcaption><em>渲染演示文稿的示例。</em></figcaption>
</figure>


## 3D模型

3D 模型就像地图一样，是应用程序。它们允许您在一定范围内自由移动模型，聚焦于整个模型，并显示可点击元素的信息面板。它还可以包含可独立执行的不同动画，以显示动态内容。

3D 模型的 URL 模式为：
- 对于任何编辑者都可以修改的公共 3D 模型：`https://urantiapedia.org/en/3dmodel/[3dmodel_name]`
- 对于创作的 3D 模型，只能由作者或授权人员修改：`https://urantiapedia.org/en/3dmodel/[user_name]/[3dmodel_name]`

与地图类似，3D 模型将支持使用名称以项目为中心，例如：`https://urantiapedia.org/en/3dmodel/Jerusem?name=Mansonia_7`

<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/help/sample_page_3d.jpg">
<figcaption><em>渲染 3D 模型的示例。</em></figcaption>
</figure>

## 网址

*Urantiapedia* 中的每个页面都有标题和 URL。如果需要，标题可以在网站中重复，但每个 URL 必须是唯一的。为此，URL 必须遵循以下通用模式：

`https://urantiapedia.org/[lan]/[path]/[user_name?]/[页面名称]`

- `[lan]` 是任何受支持语言的代码，这些语言是《尤兰提亚之书》中已有翻译的语言。请查看 [支持的语言](/zh/help/languages)。
- `[path]` 是取决于页面类型的路径：
	- 网站页面：`help`
	- *《尤兰提亚之书》*：“The_Urantia_Book”
	- *圣经*：“圣经”
	- 其他书籍：`book`
	- 主题：`topic`
	- 索引：`index`
	- 文章：`article`
	- 演示：幻灯片
	- 地图：`map`
	- 3D模型：`3dmodel`
- `[user_name]`（如果存在）表示作者的姓名，可以是可修改页面的用户，也可以是公共作者。建议不要在名称中使用重音字符，以便于书写。
- `[页面名称]` 是 URL 中显示的名称，必须使用下划线而非空格。对于书籍来说，每页都是一个章节，因此 `[页面名称]` 必须只是一个数字，即章节编号。如果书籍包含前言，则该章节的编号为零。

`[书名]` 和 `[页面名称]` 应尽可能使用简短的名称，最好使用英文。英语是本网站的默认语言。原因是《尤兰提亚之书》是用英文写成的，如今已成为一种全球通用的语言。不同语言使用不同的页面名称会使语言切换更加困难，并且需要一个系统来连接同级页面。所有翻译版本使用唯一的页面名称，一旦找到英文页面，就能更容易地找到任何语言的页面。

URL 示例：
- https://urantiapedia.org/de/help/start
- https://urantiapedia.org/ja/The_Urantia_Book
- https://urantiapedia.org/hu/The_Urantia_Book/Index
- https://urantiapedia.org/it/The_Urantia_Book/Index_Extended
- https://urantiapedia.org/en/The_Urantia_Book/147
- https://urantiapedia.org/bg/Bible/Genesis
- https://urantiapedia.org/es/Bible/Genesis/Index
- https://urantiapedia.org/id/Bible/Genesis/2
- https://urantiapedia.org/lt/Bible/John
- https://urantiapedia.org/ro/Bible/John/Index
- https://urantiapedia.org/en/Bible/John/2
- https://urantiapedia.org/en/book/Sir_James_Jeans/The_Universe_Around_Us
- https://urantiapedia.org/en/book/Sir_James_Jeans/The_Universe_Around_Us/3
- https://urantiapedia.org/fr/topic/Andrew
- https://urantiapedia.org/es/article/Jan_Herca/What_was_Nazareth_like_in_the_time_of_Jesus
- https://urantiapedia.org/es/article/Norm_Duval/How_big_is_Orvonton
- https://urantiapedia.org/en/index/topics
- https://urantiapedia.org/en/index/people
- https://urantiapedia.org/ru/image/Master_Universe
- https://urantiapedia.org/pt/slides/Part_II_Introduction
- https://urantiapedia.org/cs/map/Jesus_Second_Preaching_Tour
- https://urantiapedia.org/es/3dmodel/Isle_of_Paradise

保持这些约定是一个好主意，这样 URL 就有了一致的构造方式，而且这种方式更容易记住。


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
        <td><a href="/zh/help/principles">统治 Urantiapedia 的原则</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/phases">项目里程碑</a></td>
      </tr>
    </tbody>
  </table>
</figure>