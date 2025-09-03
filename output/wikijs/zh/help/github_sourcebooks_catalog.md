---
title: 创建启示者使用的书籍目录
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
        <td><a href="/zh/help/github_religious_books_markdown">获取所有宗教的书籍</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_sourcebooks_markdown">获取据称是启示者使用的书籍</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> 此任务目前已完成并关闭，但您可以通过发送电子邮件至 urantiapedia@gmail.com 提出书籍列表中的更改建议。
{.is-info}

这描述了如何创建一个书籍目录，这些书籍应该是《尤兰提亚之书》的来源，或者与《尤兰提亚之书》有某种关系或平行。

## 语境

《尤兰提亚之书》本身就其编写过程中运用的人文素材提供了两个清晰的线索：([UB 0:12.12](/zh/The_Urantia_Book/0#p12_12) 和 [UB 121:8.13](/zh/The_Urantia_Book/121#p8_13))。除此之外，值得注意的是，《尤兰提亚之书》经常逐字或隐晦地引用《圣经》中的书籍，包括正典以外的书籍和其他书籍。

一段时间以来，几位杰出的读者一直在收集这些相似之处。读者杜安·L·福（Duane L. Faw）出版了一本名为《[Paramony](https://www.amazon.com/Paramony-Duane-L-Faw/dp/0965197255/ref=sr_1_2?crid=2FCT0LM14FRVT)》的长篇著作，其中详细列举了《尤兰提亚之书》与《圣经》之间约6万处相似之处。另一位杰出的读者马修·布洛克（Matthew Block）多年来一直在开展一[项寻找相似之处的项目](https://urantiabooksources.com/)，研究《尤兰提亚之书》构思时期之前的非圣经书籍，并已确定了一百多本书可能是作者的潜在来源。

## 过程

这项作业将尝试列出所有被发现与《尤兰提亚之书》有相似之处的非圣经书籍。获取这份清单的一个宝贵资源是访问马修·布洛克的旧网站。

暂定的书籍清单可以在这里找到：

https://github.com/JanHerca/urantiapedia/blob/master/input/txt/books-en/Source_books.tsv

对于在 GitHub 上对此文件的任何修改，应遵循为[管理员](/zh/help/admin)、[主编](/zh/help/github)或[助理编辑](/zh/help/github_assistant)用户提供的说明。

这个文件的内容很简单：

- 这是一个 TSV 文件，带有制表符分隔的文本。
- 每行代表一架书，或书架内的一组书，或一本书。
- 顺序很重要，因为列表保持层次结构（书架、组、书籍）。
- 所有线条都有六个制表符分隔的数据点。
- 一个架子有：架子的名称；Urantiapedia 中该架子的索引路径；其余为空。
- 一个群组有：群组名称；标签 `<group>`；其余为空。
- 一本书包含：作者；标题（包括括号中的版本）；相关的《尤兰提亚之书》文档；云存储中包含该书的文件夹名称，如果尝试过但仍无法找到数字版本，则显示`FAILED`；如果尚未尝试数字版本，则显示为空；OK（如果有数字副本）或为空（否则）；如果已上传，则显示 Urantiapedia 中的路径。

> 强烈建议使用 [Visual Studio Code](https://code.visualstudio.com/) 编辑 TSV 文件，并添加扩展名 [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)，这样可以对数据进行着色以及执行其他更多操作。
{.is-info}

## 结果

使用此文件，已手动创建了_Urantiapedia 图书馆_的索引以及每个书架的索引（使用_replaces_）。结果可在[所有书组索引](/en/index/books)中查看。您也可以在本网站左侧菜单中选择`OTHER BOOKS \ Index`访问此页面。目前，此页面仅提供英语、西班牙语和法语版本。

## 外部链接

- [Urantiapedia 工具 - GitHub 项目](https://github.com/JanHerca/urantiapedia)
- [Paramony](https://www.amazon.com/Paramony-Duane-L-Faw/dp/0965197255/ref=sr_1_2?crid=2FCT0LM14FRVT)
- [《尤兰提亚之书》的“资料来源”](https://urantiabooksources.com/)

<br>


<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_religious_books_markdown">获取所有宗教的书籍</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_sourcebooks_markdown">获取据称是启示者使用的书籍</a></td>
      </tr>
    </tbody>
  </table>
</figure>