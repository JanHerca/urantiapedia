---
title: Markdown 格式帮助
description:
published: true
date: 2022-09-06T09:08:14.892Z
tags: help
editor: markdown
dateCreated: 2022-08-01T19:59:13.093Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/web_markdown_editor">使用 Markdown 编辑器</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/web_html_editor">使用 HTML 编辑器</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## 概述

Markdown 是一种轻量级标记语言，具有纯文本格式语法。它是在 GitHub 等主流代码库上编写文档的默认语法。

*Urantiapedia* 支持完整的 [CommonMark 规范](https://spec.commonmark.org/) + 添加了一些有用的扩展（包括 Github Flavored Markdown 插件）。

这是 *Urantiapedia* 支持的 Markdown 标记的完整列表。对于每个支持的元素，您都可以找到：如何在编辑器中使用、快捷键（如有）以及包含标记和结果的示例。在任何页面中使用 Markdown 格式之前，请先查看所有可用的选项。

---

## 标题
### 标签 {.tabset}

#### 用法
在文本选择之前使用 1 到 6 个 **hashtag** 符号，后跟一个空格。

快捷方式
- 在所需的行上，然后单击工具栏中的 ![Header](https://docs.requarks.io/assets/ui/ui-markdown-headers.png =x30){.radius-4} 下拉按钮。
- 在所需行上，按 <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>右</kbd> 增加标题级别。
- 在所需的行上，按 <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>左</kbd> 可降低标题级别。

#### 例子

**降价**
```
# h1 标题 8-)
## h2 标题
### h3 标题
#### h4 标题
##### h5 标题
###### h6 标题
```
**结果**
<div style="padding-bottom:5px;color: #1565c0; font-size: 2em;font-weight:bold;background:linear-gradient(90deg,#1976d2,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 3px;">h1 标题 <img src="/_assets/svg/twemoji/1f60e.svg" alt="😎" draggable="false" class="emoji"></div>
<div style="padding-bottom:5px;color: #424242; font-size: 1.5em;font-weight: bold;background:linear-gradient(90deg,#424242,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h2 标题</div>
<div style="padding-bottom:5px;color: #616161; font-size: 1.17em;font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h3 标题</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h4 标题</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h5 标题</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) left bottom #fff0 no-repeat;;background-size:100% 1px;">h6 标题</div>

有关受支持的表情符号列表，请参见下文。

## 水平线

### 标签 {.tabset}

#### 用法

在专用线路上使用**三重破折号**符号。

#### 快捷方式
- 通过点击工具栏中的 ![水平规则](https://docs.requarks.io/assets/ui/ui-markdown-hr.png =x30){.radius-4} 按钮。

#### 示例

**降价**
```
___
---
***
```
**结果**
___
---
***

## 印刷替换

### 标签 {.tabset}

#### 用法
像平常一样输入文本。

#### 示例

**降价**
```
（c）（C）（r）（R）（tm）（TM）（p）（P）+-

测试..测试...测试.....测试？.....测试！....

!!!!!! ???? ,, -- ---

"聪明人，双引号"和'单引号'
```
**结果**

© © ® ® ™ ™ § § ±

测试...测试...测试...测试？..测试！..

!!! ??? , – —

“聪明人，双引号”和‘单引号’

## 强调

### 标签 {.tabset}

#### 用法

斜体：在文本选择前后使用**单个星号**符号。

粗体：在文本选择前后使用**双星号**符号。

#### 快捷方式
- 通过选择文本，然后单击工具栏中的 ![Bold](https://docs.requarks.io/assets/ui/ui-markdown-bold.png =x30){.radius-4} 按钮。
- 选择文本，然后按 <kbd>CTRL</kbd> + <kbd>B</kbd>

#### 示例

**降价**
```
**这是粗体文本**
__这是粗体文本__
*这是斜体文本*
_这是斜体文本_
~~删除线~~
***粗体和斜体***
```
**结果**
**这是粗体文本**
__这是粗体文本__
*这是斜体文本*
_这是斜体文本_
~~删除线~~
***粗体和斜体***

## 块引用

### 标签 {.tabset}

#### 用法
在每行文本前使用**大于**符号，后跟一个空格。

#### 快捷方式
- 选择文本，然后点击工具栏中的 ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-blockquotes.png =x30){.radius-4} 按钮。

#### 示例 1

**降价**
```
> 块引用也可以嵌套...
>> ...通过在彼此旁边使用额外的大于号...
> > > ...或者箭头之间有空格。
```
**结果**
> 块引用也可以嵌套...
>> ...通过在彼此旁边使用额外的大于号...
> > > ...或者箭头之间有空格。

#### 示例 2

自定义引用
**降价**
```
> 这是一个信息块引用
{.is-info}

> 这是一个成功的引用
{.is-success}

> 这是一个警告块引用
{.is-warning}

> 这是一个错误的引用
{.is-danger}
```
**结果**
> 这是一个信息块引用
{.is-info}

> 这是一个成功的引用
{.is-success}

> 这是一个警告块引用
{.is-warning}

> 这是一个错误的引用
{.is-danger}

## 无序列表

### 标签 {.tabset}

#### 用法

在每行文本前使用**星号**或**破折号**符号，后跟一个空格。

#### 快捷方式
- 通过选择文本，然后点击工具栏中的 ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-ul.png =x30){.radius-4} 按钮。

#### 示例

**降价**
```
+ 通过以 `+`、`-` 或 `*` 开头的行来创建列表
+ 通过缩进 2 个空格来创建子列表：
  - 标记字符的改变强制开始新的列表：
    * Ac tristique libero volutpat at
    + Pretium nisl Aliquet 的便利性
    - Nulla volutpat aliquam velit
+ 非常简单！
```
**结果**
+ 通过以 `+`、`-` 或 `*` 开头的行来创建列表
+ 通过缩进 2 个空格来创建子列表：
  - 标记字符的改变强制开始新的列表：
    * Ac tristique libero volutpat at
    + Pretium nisl Aliquet 的便利性
    - Nulla volutpat aliquam velit
+非常简单！

#### 样式

通过在列表后面的单独行上添加一个类，您可以更改列表的外观：

- `links-list`
- `grid-list`

**降价**

```markdown
- 网格项目 1
- 网格项目 2
- 网格项目 3
{.grid-list}

- [Lorem ipsum dolor sat amet *此处字幕描述*](https://www.google.com)
- [Consectetur adipiscing elit *此处还有另一个字幕说明*](https://www.google.com)
- [Morbi vehicula aliquam *此处为第三个字幕说明*](https://www.google.com)
{.links-list}
```
**结果**

- 网格项目 1
- 网格项目 2
- 网格项目 3
{.grid-list}

和：

- [链接标题 1 *此处为副标题描述*](https://www.google.com)
- [链接标题 2 *此处有另一个副标题描述*](https://www.google.com)
- [链接标题 3 *此处为第三个副标题描述*](https://www.google.com)
{.links-list}

> 请注意，这些样式特定于 Urantiapedia，并将在其他应用程序中恢复为标准列表样式。
{.is-warning}

## 有序列表

### 标签 {.tabset}

#### 用法

在每行文本前使用一个**数字**，后跟一个**点**符号，再后跟一个空格。

#### 快捷方式
- 通过选择文本，然后点击工具栏中的 ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-ol.png =x30){.radius-4} 按钮。

#### 示例 1

**降价**
```
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Massa 的整数骚扰 lorem


1. 您可以使用连续的数字...
1. ...或者将所有数字保留为`1`。
```
**结果**
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Massa 的整数骚扰 lorem


1. 您可以使用连续的数字...
1. ...或者将所有数字保留为`1`。

#### 示例 2
从偏移量开始编号：

**降价**
```
1. foo
2. 酒吧
```
**结果**
57. foo
1. 酒吧

## 代码

### 内联代码

### 标签 {.tabset}

#### 用法

在选定文本前后使用**反引号**。

#### 快捷方式
- 通过选择文本，然后点击工具栏上的 ![内联代码](https://docs.requarks.io/assets/ui/ui-markdown-inlinecode.png =x30){.radius-4} 按钮。

#### 示例

**降价**
```
内联`代码`

```
**结果**
内联`代码`

### 缩进代码

### 标签 {.tabset}

#### 用法

在每行前添加制表符。

#### 示例

**降价**
```
    // 一些评论
    代码第 1 行
    代码第 2 行
    代码第 3 行

```
**结果**
    // 一些评论
    代码第 1 行
    代码第 2 行
    代码第 3 行

### 块代码“围栏”

### 标签 {.tabset}

#### 用法

在文本选择前后的专用行上使用**三重反引号**符号。

#### 快捷方式

- 使用左侧工具栏上的**代码块**工具。

#### 示例

**降价**
~~~
```
这里是示例文本...
```
~~~
**结果**
```
这里是示例文本...
```

### 语法高亮

### 标签 {.tabset}

#### 用法

在文本选择前后、专用行上使用**三重反引号**符号，然后输入编程语言代码（`js`、`html`、`css` 等）。

#### 快捷方式
- 使用左侧工具栏上的**代码块**工具。

#### 示例

**降价**
~~~
```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```
~~~
**结果**

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## 表格

### 标签 {.tabset}

#### 用法

使用**竖线**分隔表格中的单元格。

#### 示例 1

**降价**

```
| 选项 | 说明 |
| ------ | ----------- |
| 数据 | 提供将传递到模板的数据的数据文件路径。|
| 引擎 | 用于处理模板的引擎。默认使用 Handlebars。|
| ext | 用于目标文件的扩展名。|
```

**结果**

| 选项 | 说明 |
| ------ | ----------- |
| 数据 | 提供将传递到模板的数据的数据文件路径。|
| 引擎 | 用于处理模板的引擎。默认使用 Handlebars。|
| ext | 用于目标文件的扩展名。|


#### 示例 2

右对齐列

**降价**

```
| 选项 | 说明 |
| ------:| -----------:|
| 数据 | 提供将传递到模板的数据的数据文件路径。|
| 引擎 | 用于处理模板的引擎。默认使用 Handlebars。|
| ext | 用于目标文件的扩展名。|
```

**结果**

| 选项 | 说明 |
| ------:| -----------:|
| 数据 | 提供将传递到模板的数据的数据文件路径。|
| 引擎 | 用于处理模板的引擎。默认使用 Handlebars。|
| ext | 用于目标文件的扩展名。|

## 链接

### 标签 {.tabset}

#### 用法

使用语法“[链接文本]（链接目标）”。

#### 使用权
- 使用左侧工具栏上的**链接**工具。

#### 示例

**降价**

```
[链接文本](http://dev.nodeca.com)

[带标题的链接](http://nodeca.github.io/pica/demo/ "title text!")

自动转换的链接 https://github.com/nodeca/pica （启用 linkify 即可查看）
```

**结果**

[链接文本](http://dev.nodeca.com)

[带标题的链接](http://nodeca.github.io/pica/demo/ "title text!")

自动转换的链接 https://github.com/nodeca/pica （启用 linkify 即可查看）


## 图片

### 标签 {.tabset}

#### 用法

使用语法`![Caption Image](Image Source)`。

#### 使用权
- 使用左侧工具栏上的**资源**工具。

#### 示例

**降价**
```
![小黄人](https://octodex.github.com/images/minion.png =300x300)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "Stormtroopocat" =300x300)
```

**结果**
![小黄人](https://octodex.github.com/images/minion.png =300x300)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "Stormtroopocat" =300x300)

#### 造型

与链接类似，图像也具有脚注样式的语法

**降价**
```
![替代文本][id]
```

**结果**

![替代文本][id]

#### 参考

稍后在文档中引用定义 URL 位置：

**降价**
```
[id]: https://octodex.github.com/images/dojocat.jpg “Dojocat” =300x300
```

**结果**

[id]: https://octodex.github.com/images/dojocat.jpg “Dojocat”

#### 方面

有时图像太大或者您可能希望图像占据所有可用空间。

只需在图像路径末尾添加以下格式的尺寸：

```
![图片](/link/to/image.jpg =100x50)
```

您还可以省略其中一个值以自动保持图像比例：

```
![图片](/link/to/image.jpg =100x)
![图片](/link/to/image.jpg =x50)
```

也可以使用其他单位，例如%。当需要图像占据所有可用空间时很有用：

```
![图片](/link/to/image.jpg =100%x)
```

## SVG

### 标签 {.tabset}

#### 用法

SVG 可以像浏览器支持的任何其他内容一样被包含在内。

#### 示例

**降价**

```svg
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

**结果**

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

## 地图

### 标签 {.tabset}

#### 用法

通过指向地图平台上制作的地图的`iframe来实现。这是在地图编辑器可用之前添加动态地图的临时方法。

#### 例子

**降价**
```
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>
```
**结果**
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>

## 表情符号

### 标签 {.tabset}

#### 用法

使用 `:identifier:` 语法

支持的表情符号请参阅 [表情符号速查表](https://www.webfx.com/tools/emoji-cheat-sheet/)
请参阅[如何使用 twemoji 更改输出](https://github.com/markdown-it/markdown-it-emoji#change-output)。

https://github.com/markdown-it/markdown-it-emoji

#### 示例

**降价**
```
> 经典标记：:wink: :crush: :cry: :tear: :laughing: :yum:
>
> 快捷方式（表情符号）：:-) :-( 8-) ;)
```

**结果**
> 经典标记：:wink: :crush: :cry: :tear: :laughing: :yum:
>
> 快捷方式（表情符号）：:-) :-( 8-) ;)

支持的表情符号请参阅 [表情符号速查表](https://www.webfx.com/tools/emoji-cheat-sheet/)
请参阅[如何使用 twemoji 更改输出](https://github.com/markdown-it/markdown-it-emoji#change-output)。


## 下标

### 标签 {.tabset}

#### 用法

在文本选择之前和之后使用**简单的波浪号**符号。

https://github.com/markdown-it/markdown-it-sub

快捷方式
- 选择文本，然后点击工具栏上的 ![Subscript](https://docs.requarks.io/assets/ui/ui-markdown-sub.png =x30){.radius-4} 按钮。

#### 示例

**降价**
```
- H~2~O
```

**结果**
- H~2~O

## 上标

### 标签 {.tabset}

#### 用法

在文本选择之前和之后使用**独特**插入符号。

https://github.com/markdown-it/markdown-it-sup

#### 快捷方式
- 选择文本，然后点击工具栏上的 ![上标](https://docs.requarks.io/assets/ui/ui-markdown-sup.png =x30){.radius-4} 按钮。

#### 示例

**记下来**
```
- 19^th^
```

**结果**
- 19^th^

## 插入文本

### 标签 {.tabset}

#### 用法

https://github.com/markdown-it/markdown-it-ins

#### 示例

**降价**
```
++插入文本++
```

**结果**
++插入文本++

## 标记文本

### 标签 {.tabset}

#### 用法

https://github.com/markdown-it/markdown-it-mark

#### 示例

**降价**
```
==标记文本==
```

**结果**
==标记文本==

## 脚注

### 标签 {.tabset}

#### 使用

使用语法 `[^1]` 表示正文中脚注的位置，并使用 `[^1]: this is a footnote` 表示实际的脚注。脚注本身将自动显示在页面底部水平线下方。

https://github.com/markdown-it/markdown-it-footnote

#### 示例

**降价**
```
脚注 1 链接[^first].

脚注 2 链接[^second].

内嵌脚注^[内嵌脚注文本] 定义。

重复的脚注引用[^second]。

[^first]: 脚注**可以有标记**

    以及多个段落。

[^second]: 脚注文本。
```

**结果**
脚注 1 链接[^first].

脚注 2 链接[^second].

内嵌脚注^[内嵌脚注文本] 定义。

重复的脚注引用[^second]。

[^first]: 脚注**可以有标记**

    以及多个段落。

[^second]: 脚注文本。

## 定义列表

### 标签 {.tabset}

#### 使用

https://github.com/markdown-it/markdown-it-deflist

#### 示例

**降价**
```
第一学期

：定义 1
懒惰延续。

带有*内联标记*的术语 2

：定义 2

        { 一些代码，定义 2 的一部分 }

    定义2第三段。
```

**结果**
第一学期

：定义 1
懒惰延续。

带有*内联标记*的术语 2

：定义 2

        { 一些代码，定义 2 的一部分 }

    定义2第三段。

#### 紧凑风格

**降价**
```
第一学期
  ~ 定义 1

第 2 学期
  ~ 定义 2a
  ~ 定义 2b
```

**结果**
第一学期
  ~ 定义 1

第 2 学期
  ~ 定义 2a
  ~ 定义 2b

## 缩写

### 标签 {.tabset}

#### 用法

https://github.com/markdown-it/markdown-it-abbr

#### 示例

这是 HTML 缩写示例。

它转换“HTML”，但保留完整的部分条目，如“xxxHTMLyyy”等等。

**降价**
```
*[HTML]：超文本标记语言
```

**结果**
*[HTML]：超文本标记语言

## 自定义容器

### 标签 {.tabset}

#### 用法

https://github.com/markdown-it/markdown-it-container

#### 示例

**降价**
```
::: warning
*here be dragons*
:::
```

**结果**
::: warning
*here be dragons*
:::

## 高级表格

### 标签 {.tabset}

#### 用法

https://github.com/RedBug312/markdown-it-multimd-table

#### 具有分组、对齐和布局

**降价**
```
|             |          Grouping           ||
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*        ||
Content       |   **Cell**    |         Cell |

New section   |     More      |         Data |
And more      | With an escaped \|       ||
[Prototype table]
```

**结果**
|             |          Grouping           ||
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*        ||
Content       |   **Cell**    |         Cell |

New section   |     More      |         Data |
And more      | With an escaped \|       ||
[Prototype table]

#### 使用多行

**降价**
```
|   Markdown   | Rendered HTML |
|--------------|---------------|
|    *Italic*  | *Italic*      | \
|              |               |
|    - Item 1  | - Item 1      | \
|    - Item 2  | - Item 2      |
|    ```python | ```python       \
|    .1 + .2   | .1 + .2         \
|    ```       | ```           |
```

**结果**
|   Markdown   | Rendered HTML |
|--------------|---------------|
|    *Italic*  | *Italic*      | \
|              |               |
|    - Item 1  | - Item 1      | \
|    - Item 2  | - Item 2      |
|    ```python | ```python       \
|    .1 + .2   | .1 + .2         \
|    ```       | ```           |

#### 使用行跨度

**降价**
```
Stage | Direct Products | ATP Yields
----: | --------------: | ---------:
Glycolysis | 2 ATP ||
^^ | 2 NADH | 3--5 ATP |
Pyruvaye oxidation | 2 NADH | 5 ATP |
Citric acid cycle | 2 ATP ||
^^ | 6 NADH | 15 ATP |
^^ | 2 FADH2 | 3 ATP |
**30--32** ATP |||
[Net ATP yields per hexose]
```

**结果**
Stage | Direct Products | ATP Yields
----: | --------------: | ---------:
Glycolysis | 2 ATP ||
^^ | 2 NADH | 3--5 ATP |
Pyruvaye oxidation | 2 NADH | 5 ATP |
Citric acid cycle | 2 ATP ||
^^ | 6 NADH | 15 ATP |
^^ | 2 FADH2 | 3 ATP |
**30--32** ATP |||
[Net ATP yields per hexose]

#### 标题分组

**降价**
```
| 原型 ||
--- | ---
亚当和夏娃 | 信仰
路西法 | 预言
撒旦守护者 | 天使
麦基洗德 | 死后的生命
炽天使 | 天国
天堂 | 使徒们
地狱 | 耶稣和他的生平故事和教诲
救恩｜“第二次降临”
```

**结果**
| 原型 ||
--- | ---
亚当和夏娃 | 信仰
路西法 | 预言
撒旦守护者 | 天使
麦基洗德 | 死后的生命
炽天使 | 天国
天堂 | 使徒们
地狱 | 耶稣和他的生平故事和教诲
救恩｜“第二次降临”

## 数学表达式（Mathjax）

### 标签 {.tabset}

#### 用法

请参阅外部链接以了解有关在 Markdown 中使用数学的更多信息。

https://github.com/classeur/markdown-it-mathjax

#### 示例 1

处理 TeX 显示的数学

**降价**
```
$$1 *2* 3$$

处理 TeX 内联数学 $1 *2* 3$
```

**结果**
$$1 *2* 3$$

#### 示例 2

处理 TeX 内联数学 $1 *2* 3$

**Markdown**
```
当 $a \ne 0$ 时，$ax^2 + bx + c = 0$ 有两个解，分别是
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$


$$\frac{1}{\sqrt{x^2 + 1}}$$
```

**结果**
当 $a \ne 0$ 时，$ax^2 + bx + c = 0$ 有两个解，分别是
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

$$\frac{1}{\sqrt{x^2 + 1}}$$

#### 示例 3

**降价**
```
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11^ O^12^__
```

**结果**
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11^ O^12^__


#### 示例 4

**降价**
```
$$V = H_0 * D, $$
```

**结果**
$$V = H_0 * D, $$

#### 示例 5

**降价**
```
在大多数情况下是的，但在 1/4 的情况下不是。
```

**结果**
在大多数情况下是的，但在 1/4 的情况下不是。

#### 示例 6

**降价**
```
描述 | 代码 | 示例
--- | --- | ---
希腊字母 | \alpha \beta \gamma \rho \sigma \delta \epsilon | $\alpha \beta \gamma \rho \sigma \delta \epsilon$
二元运算符 | \times \otimes \oplus \cup \cap | $\times \otimes \oplus \cup \cap$
关系运算符 | < > \subset \supset \subseteq \supseteq | $< > \subset \supset \subseteq \supseteq$
其他 | \int \oint \sum \prod | $\int \oint \sum \prod$
```

**结果**
描述 | 代码 | 示例
--- | --- | ---
希腊字母 | \alpha \beta \gamma \rho \sigma \delta \epsilon | $\alpha \beta \gamma \rho \sigma \delta \epsilon$
二元运算符 | \times \otimes \oplus \cup \cap | $\times \otimes \oplus \cup \cap$
关系运算符 | < > \subset \supset \subseteq \supseteq | $< > \subset \supset \subseteq \supseteq$
其他 | \int \oint \sum \prod | $\int \oint \sum \prod$

#### 示例 7

**降价**
```
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D \end{cases}$$
```

**结果**
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D \end{cases}$$

#### 示例 8

**降价**
```
地球质量 = $M^\odot$
```

**结果**
地球质量 = $M^\odot$

## 内容标签

### 标签 {.tabset}

#### 用法

使用标题并将 `{.tabset}` 类添加到主标题。主标题文本不会显示在最终结果中。

请注意，您可以使用任意级别的标题，只要子标题比主标题高一级即可。例如，如果主标题为 `###` *(h3)*，则标签标题应为 `####` *(h4)*。父级标题的最大级别为 5，子级标题的最大级别为 6。

#### 示例

```
# 标签 {.tabset}
## 第一个标签页

此处的任何内容都将进入第一个选项卡...

## 第二个标签

此处的任何内容都将进入第二个选项卡...

## 第三个标签页

此处的任何内容都将进入第三个选项卡...
```

## 显示键盘键

### 标签 {.tabset}

#### 用法

在文本选择之前使用 `<kbd>`，在文本选择之后使用 `</kbd>`。

#### 使用权
- 选择文本，然后点击工具栏上的 ![键盘键](https://docs.requarks.io/assets/ui/ui-markdown-kbd.png =x30){.radius-4} 按钮。

#### 示例

```html
Lorem ipsum pain <kbd>CTRL</kbd> + <kbd>C</kbd>
```

Lorem ipsum pain <kbd>CTRL</kbd> + <kbd>C</kbd>

## 外部链接

- [Urantiapedia 工具 - GitHub 项目](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub 项目](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia基金会](https://www.urantia.org/)
- [蓝色田野](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)
- [MultiMarkdown 用户指南](https://fletcher.github.io/MultiMarkdown-6/)
- [Markdown 规范](https://commonmark.org/)
- [Markdown 帮助](https://commonmark.org/help/)
- [Markdown 扩展语法](https://www.markdownguide.org/extended-syntax/)
- [Markdown Wiki.js 帮助](https://docs.requarks.io/en/editors/markdown)
- [表情符号备忘单]（https://www.webfx.com/tools/emoji-cheat-sheet/）
- [更改表情符号输出]（https://github.com/markdown-it/markdown-it-emoji#change-output）
- [Mathjax](https://www.mathjax.org/)
- [Mathjax 文档](http://docs.mathjax.org/en/latest/index.html)
- [LaTeX 数学表达式](https://www.overleaf.com/learn/latex/Mathematical_expressions)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/web_markdown_editor">使用 Markdown 编辑器</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/web_html_editor">使用 HTML 编辑器</a></td>
      </tr>
    </tbody>
  </table>
</figure>



