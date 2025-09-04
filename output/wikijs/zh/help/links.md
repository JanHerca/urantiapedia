---
title: "Urantiapedia - 链接"
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
        <td><a href="/zh/help/websites">参考网站</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/projects">更大范围内的项目背景</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## 概括

本文档描述了 Urantiapedia 中条目间链接的定义和创建方式，并讨论了未来可以对链接系统进行的改进。

## Urantiapedia 中的链接是什么

Urantiapedia 上的链接最终总是两个页面之间或两个页面内两个锚点之间的 HTML 链接。如果同一位置有多个链接，则会创建多个 HTML 链接。

由于 Urantiapedia 同时支持 HTML5 和 Markdown 文件，链接可以采用 HTML5 或 Markdown 语法。两种语法均有效。

例如，《尤兰提亚之书》采用 HTML5 格式，其中第 0:2.10 段包含两个来自《百科全书》的主题（上帝和宇宙之父）的链接：

```html
<p id="p2_9"><sup><small>0:2.9</small></sup> <i>By context</i>—as when used in the discussion of some one deity level or association. When in doubt as to the exact interpretation of the word <a href="/es/topic/God">God</a>, it would be advisable to refer it to the person of the <a href="/es/topic/Universal_Father">Universal Father</a>.</p>
```

此示例连接页面：《尤兰提亚之书》的前言，以及“上帝”和“宇宙之父”主题的页面。

例如，学习辅助工具和文章都使用 Markdown 语言。以下是 William Sadler 著作《练习册 I》第一章的摘录：

```markdown
**REFERENCE**: [UB 1:0.1](/en/The_Urantia_Book/1#p0_1) — “The Universal Father is...”
```

此示例将《尤兰提亚之书》中的一页（学习辅助工具中的一章）与一个段落（锚点）连接起来。我们使用标准的锚点方式，即“#”字符，并使用唯一标识符（在本例中为“p0_1”）。《尤兰提亚之书》论文中的每个段落或标题都有一个唯一的ID和锚点，其格式如下：“p<section_index>_<par_index>”，并遵循书中段落命名的常用约定“<paper>:<section>.<paragrpah>”。

## Urantiapedia 中将会链接什么

下表总结了我们目前计划在 Urantiapedia 上创建的链接。未来我们还会考虑添加多种类型的链接。

### :blue_book: 《尤兰提亚之书》

<div class="urantiapedia-table-wrapper">

代码 | 出发地 | 目的地 | 流程 | 状态 |
--- | --- | --- | --- | --- |
UB_B | 段落脚注 | 圣经中的一本书（每章一节）|将 _Paramony_ ([Paramony.txt](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/paramony/Paramony.txt)) 转换为 Markdown ([The Urantia Book.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paramony/The%20Urantia%20Book.md))，然后转换为 JSON ([The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book))，最后转换为加载到 _Urantiapedia_ ([The_Urantia_Book](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/The_Urantia_Book)) 中的 HTML | :+1: |
UB_A | 段落脚注 | 一篇文章（任意位置）| 自动生成一个 Parallels 文件 ([ub_paralells.tsv](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/articles-en/ub_paralells.tsv)) | :+1: |
UB_S | 段落脚注 | 学习辅助中的章节（任何位置）| 与 UB_A 相同 | :+1: |
UB_O | 段落脚注 | 书中的章节（特定页面）| 手动生成 Parallels 文件 ([paralells.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paralells.md)) | :+1: |
UB_TI | 段落单词中的链接 | 百科全书主题页面 | 使用百科全书 TXT 文件，其中包含参考文献 ([topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en)) | :+1: [1] |
UB_I | 插入图片 [2] | - | 使用图片目录 ([image_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/image_catalog.md)) | :+1: |
UB_D | 下拉块 [3] | 图表页面 | 未定义 | :x: |
UB_P | 下拉块 | 演示或幻灯片页面 | 未定义 | :x: |
UB_M | 下拉块 | 地图页面 | 使用地图目录 ([map_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/map_catalog.md)) | :clock2: |
UB_3D | 可扩展块 | 3D 场景页面 | 未定义 | :x: |
UB_AU | 标题中的音频控制 [4] | - | Urantiapedia 工具添加了可用语言的音频 | :+1: |
UB_V | 可扩展块 | 嵌入式 YouTube 视频 | 未定义 | :x: |

</div>

- [1] 链接创建算法正在进行中，以调整创建的链接数量。
- [2] 图像实际上不是链接，但为了插入它们，需要将链接输入到图像目录中，然后进行处理。
- [3] 下拉块是放置在段落之间的元素，它可以展开并显示小图像大小的元素，或者如果元素太大，则可以显示指向可以详细查看该元素的页面的链接。
- [4] 《尤兰提亚之书》的音频实际上不是一个链接，但为了插入它，我们有一个软件程序可以指示哪些音频文件可用，并且有一个插入它们的过程。

例子：
- UB_B：https://urantiapedia.org/en/The_Urantia_Book/1#the-bible
- UB_A：https://urantiapedia.org/en/The_Urantia_Book/1#articles
- UB_S：https://urantiapedia.org/en/The_Urantia_Book/1#study-aids
- UB_O：https://urantiapedia.org/en/The_Urantia_Book/0#other-books
- UB_I：https://urantiapedia.org/en/The_Urantia_Book/11#p0_2（图片示例）
- UB_M：https://urantiapedia.org/en/The_Urantia_Book/149#p0_1（下拉块示例）
- UB_AU：https://urantiapedia.org/en/The_Urantia_Book/10（标题音频控制示例）

<br>

### :closed_book: 圣经

<div class="urantiapedia-table-wrapper">

代码 | 来源 | 目的地 | 程序 | 状态 |
--- | --- | --- | --- | --- |
B_UB | 诗节脚注 | 《尤兰提亚之书》（段落）| _Paramony_ ([bible-refs-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/bible-refs-en)) 转换为 Markdown ([paramony](https://github.com/JanHerca/urantiapedia/tree/master/input/markdown/en/paramony))，然后转换为 HTML，加载到 _Urantiapedia_ ([圣经](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/Bible)) | 未定义 | :+1: |
B_A | 诗句脚注 | 一篇文章（任意位置）| 未定义 | :x: |
B_S | 诗句脚注 | 学习辅助中的章节（任何位置）| 未定义 | :x: |
B_O | 诗句脚注 | 书中的一章（任意位置）| 未定义 | :x: |
B_TI | 以诗句形式链接 | 百科全书主题页面 | 未定义 | :x: |
B_I | 插入图片 [1] | - | 未定义 | :x: |

</div>

- [1] 与《尤兰提亚之书》相同，此处也适用。
- [2] 与《尤兰提亚之书》相同的内容也适用于此。

例子：
- B_UB：https://urantiapedia.org/en/Bible/Genesis/1#references

<br>

### :page_with_curl: 文章

<div class="urantiapedia-table-wrapper">

代码 | 来源 | 目的地 | 程序 | 状态 |
--- | --- | --- | --- | --- |
A_UB | 引用或段落中的链接 | 《尤兰提亚之书》（段落）| 手动包含指向本书的链接 [1] | :+1: |
A_B | 引号或段落中的链接 | 圣经中的一本书（一章中的一节）| 与 A_UB 相同 | :+1: |
A_A | 任何链接 | 文章中的页面 | 与 A_UB 相同 | :+1: |
A_S | 任何链接 | 学习辅助中的页面 | 与 A_UB 相同 | :+1: |
A_O | 任何链接 | 书中的一章（特定页面）| 与 A_UB 相同 | :+1: |
A_V | 任意位置 | 嵌入式 YouTube 视频 | 手动链接 | :+1: |

</div>

例子：
- A_UB：https://urantiapedia.org/en/article/A_Letter_to_Astronomers_and_Astrophysicists（任何引文）
- A_B：https://urantiapedia.org/en/article/Sheila_Keene_Lund/Understanding_the_Relation_of_Love_to_the_Mind#love-defined（链接至《圣经》哥林多前书）

<br>

### :notebook: 学习辅助工具

<div class="urantiapedia-table-wrapper">

代码 | 出发地 | 目的地 | 流程 | 状态 |
--- | --- | --- | --- | --- |
S_UB | 引用或段落中的链接 | 《尤兰提亚之书》（段落）| 与 A_UB 相同 | :+1: |
S_B | 引用或段落中的链接 | 圣经中的一本书（每章一节）| 与 A_B 相同 | :+1: |
S_A | 任何链接 | 文章中的页面 | 与 A_A 相同 | :+1: |
S_S | 任何链接 | 学习辅助中的页面 | 与 A_S 相同 | :+1: |
S_O | 任何链接 | 书中的一章（特定页面）| 与 A_O 相同 | :+1: |
S_V | 任意位置 | 嵌入式 YouTube 视频 | 手动链接 | :+1: |

</div>

例子：
- S_UB：https://urantiapedia.org/en/article/William_S_Sadler/Workbook_1_Foreword_and_Part_I/1#i-ub-101-the-universal-father-is
- S_B：https://urantiapedia.org/en/article/William_S_Sadler/Consideration_some_criticisms_Urantia_Book

<br>

### :books: 书籍

<div class="urantiapedia-table-wrapper">

代码 | 出发地 | 目的地 | 流程 | 状态 |
--- | --- | --- | --- | --- |
O_B | 引号或段落中的链接 | 圣经中的一本书（每章一节）| 与 A_B 相同 | :x: |

</div>

<br>

### :card_index: 百科全书

<div class="urantiapedia-table-wrapper">

代码 | 来源 | 目的地 | 程序 | 状态 |
--- | --- | --- | --- | --- |
TI_UB | 段落脚注或“另请参阅”| 《尤兰提亚之书》（段落）| 与 UB_TI 相同，但顺序相反。使用来自_百科全书_的 TXT 文件，其中包含参考文献 ([topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en)) | :+1: |
TI_B | 段落脚注 | 圣经中的一本书（章节中的一节）| 未定义 | :x: |
TI_A | 段落脚注 | 文章页面 | 未定义 | :x: |
TI_S | 段落脚注 | 学习辅助章节 | 未定义 | :x: |
TI_TI | “另请参阅”部分 | _百科全书_页面的另一个页面或部分 | 使用上面提到的 TXT 文件 | :+1: |
TI_I | 插入图片 | - | 图像链接手动包含在 TXT 文件中 | :clock2: |
TI_D | 下拉块 | 图表页面 | 未定义 | :x: |
TI_P | 下拉块 | 演示或幻灯片页面 | 未定义 | :x: |
TI_M | 下拉块 | 地图页面 | 未定义 | :x: |
TI_3D | 下拉块 | 3D场景页面 | 未定义 | :x: |
TI_V | 任何位置 | 嵌入式 YouTube 视频 | 未定义 | :x: |

</div>

例子：
- TI_UB：https://urantiapedia.org/en/topic/Abraham_(Old_Testament)#references

<br>

### :memo: 图表

<div class="urantiapedia-table-wrapper">

代码 | 出发地 | 目的地 | 程序 | 国家 |
--- | --- | --- | --- | --- |
D_UB | 图表中的链接 | 《尤兰提亚之书》（段落）| 手动添加的链接 | :clock2: |

</div>

例子：
- D_UB：https://urantiapedia.org/en/article/The_Kingdom_of_Heaven_Revelation_Nebadon_Chart（任意图表框）

<br>

### :bar_chart: 演示文稿

<div class="urantiapedia-table-wrapper">

代码 | 来源 | 目的地 | 程序 | 状态 |
--- | --- | --- | --- | --- |
P_UB | 幻灯片上的链接 | 《尤兰提亚之书》（段落）| 未定义，但可能手动添加链接 | :x: |

</div>

<br>

### :earth_americas: 地图

<div class="urantiapedia-table-wrapper">

代码 | 出发地 | 目的地 | 流程 | 状态 |
--- | --- | --- | --- | --- |
M_UB | 侧边栏链接 | 《尤兰提亚之书》（段落）| KML 文件中的手动链接 | :x: |
M_TI | 侧边栏链接 | 百科全书页面 | KML 文件中的手动链接 | :x: |

</div>

例子：
- M_TI：https://urantiapedia.org/en/map/The_Preaching_of_Jesus_Second_Galilee_Tour（单击图标打开带有链接的面板）

<br>

### :milky_way: 3D 场景

<div class="urantiapedia-table-wrapper">

代码 | 出发地 | 目的地 | 流程 | 状态 |
--- | --- | --- | --- | --- |
3D_UB | 3D 元素中的链接 | 《尤兰提亚之书》（段落）| 未定义 | :x: |

</div>

<br>

## 如何复制链接

所有浏览器都允许右键单击或长按链接进行复制。复制页面本身可以在地址文本框中进行。

Urantiapedia 中一个通常不为人知的技巧是，你可以复制页面中页眉的链接。当鼠标悬停在页眉上时，右侧会出现一个`¶`符号，点击右键即可获取链接。

##《尤兰提亚之书》独特的全球参考系统

自《尤兰提亚之书》于1955年首次出版以来，这本英文原版已被读者在作品和文章中多次引用。引用《尤兰提亚之书》的传统方式是给出该英文初版（通常称为标准版）的页码和段落。所遵循的编码是`<页码>.<段落顺序>`。

这种引用《尤兰提亚之书》的方式引入了一个本应早就意识到的问题。在不同的译本和纸质版本中，页数和段落位置并不一致。强迫世界各地的《尤兰提亚之书》读者必须持有该书初版的英文版才能正确引用，这显然不合理。

随着《尤兰提亚之书》被翻译并出版成不同的版本，很快就需要为《尤兰提亚之书》创建一个统一的全球参考系统，该系统基于文档索引、章节索引以及章节内段落的索引。每个段落都以这种方式分配了一个唯一的标识符，以便快速便捷地找到引用或参考的内容。现在的编码通常写成`<document>:<section>.<paragraph>`。

令人惊讶的是，多年来，许多网站和出版物仍然保留着旧的参考文献体系，有时将其作为唯一参考文献，或作为新参考文献的补充。这清楚地表明，仍然有许多出版物过于注重英语的使用，因为重复的参考文​​献会增加工作量，而且只对特定版本英文书籍的读者有用。

在Urantiapedia，我们的基本原则之一是[全球化](/zh/help/principles#principle-i-multi-language)。本网站并非仅针对一种或几种语言设计。本网站的目标是将所有内容一视同仁地以所有所需语言提供。每次引用《尤兰提亚之书》时都引用两处，只会徒劳无功，也违背了多语言支持原则。因此，Urantiapedia董事会从一开始就决定，所有指向《尤兰提亚之书》的链接都将采用单一的、全球统一的参考系统，并忠实遵循当前的模式。任何其他未以相同方式提供的提及或参考，都将更正为保留统一的链接方式。

我们认为，对旧内容进行这些更正是必要的，以便为世界各地的读者提供一个减少混淆并促进思想交流的单一系统。

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/websites">参考网站</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/projects">更大范围内的项目背景</a></td>
      </tr>
    </tbody>
  </table>
</figure>