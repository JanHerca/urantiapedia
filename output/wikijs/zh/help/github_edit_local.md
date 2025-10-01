---
title: "Urantiapedia — 在 PC 上本地工作"
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
        <td><a href="/zh/help/github_setting">设置你的 GitHub 项目</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_content">GitHub 项目内容</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## 对本地副本进行更改并保存

您的本地仓库是 GitHub 上项目的完整副本，因此您可以随时将更改保存到本地。在本地工作时，您可以一次更改数百个文件，然后一次性保存（提交）所有更改。

1. 当“源控制”按钮图标上出现数字时，您就会看到更改。

![](/image/help/github_setting_6.png)

2. 点击_源代码控制_。
3. 在“源代码控制”子面板中，您将看到已修改文件的列表。将鼠标悬停在这些文件上，然后点击出现的“暂存更改”按钮。

![](/image/help/github_setting_7.png)

4. 您的更改*暂存*后，请输入*提交*消息并点击“提交”按钮。您的更改将添加到本地存储库。
5. 要将您的更改推送到远程 GitHub 仓库，请点击有新提交时出现的“同步更改”按钮。这将在项目的本地和远程副本之间“拉取”和“推送”所有更改。
6. 您可以通过打开 Urantiapedia GitHub 页面来验证您的 *提交* 是否正确提交。

## 同步两个 Urantiapedia 项目之间的更改

*Urantiapedia* 项目是内容的开发和工作版本。*Urantiapedia-backup* 项目仅包含内容，并与网站同步，因此对其进行更改相当于对网站进行大规模更改，前提是这些更改由管理员提出或由管理员通过更改请求接受。

如果您对 *Urantiapedia* 项目的更改包括内容更改（`/output/wikijs` 文件夹），则必须使用任何同步实用程序或简单地通过在文件夹之间复制和粘贴将这些更改与 *Urantiapedia-backup* 项目同步。

这两个项目的重复可能会有点麻烦，但出于安全原因，这样设计是合理的。

## 为 Urantiapedia 项目创建拉取请求

当你在自己的 Urantiapedia 项目副本（*分支*）中提交了足够数量的 *提交* 后，你就可以向原项目提交 *拉取请求*，以便审查并合并更改。这在 GitHub 术语中称为 *拉取请求*。

1. 打开 GitHub 上的每个 Urantiapedia 页面。
  - `https://github.com/<用户名>/urantiapedia`
  - `https://github.com/<用户名>/urantiapedia-backup`
2. 确保您位于名为 _master_ 的主分支上。该分支会显示在文件列表顶部的菜单中。通常情况下，您只会看到该分支。
3. 选择下方的“贡献”菜单，然后选择“打开拉取请求”。如果菜单显示“此分支未领先于上游主分支”，则必须先获取主项目。参见下文。

![](/image/help/github_setting_8.png)

4. 为您的贡献添加标题。您也可以添加描述。
5. 点击“创建拉取请求”。为每个你修改过的项目创建一个“拉取请求”。

![](/image/help/github_edit_7.png)

6. 这将向项目*管理员*发送通知，如果他们发现没有问题，他们将合并您的更改。

## 同步项目副本（_forks_）

由于 *Urantiapedia* 是团队合作的成果，因此您的 *fork* 在任何特定时间与原始项目不同步是很常见的。建议您在发起任何 _pull 请求_ 之前将您的 *fork* 与原始项目同步。

1. 在 GitHub 上打开您的任何 Urantiapedia 项目。
2. 点击“同步分支”选项。您将看到一个菜单，其中显示有多少提交已提交到原始项目，而这些提交不在您的副本中。在图中，您可以看到有 4 个提交我们尚未提交，因此我们的副本已过期（“此分支已过期”）。只需点击“更新分支”即可将原始项目中的更改导入到您的副本中。

![](/image/help/github_fork_4.png)

3. 等待几秒钟，GitHub 会更新你的副本。完成后，如果再次点击“同步 fork”选项，你会看到所有内容都已更新，这表明更改已同步到原始版本（即“此分支未同步到上游”）。

![](/image/help/github_fork_5.png)

4. 转到 VS Code。
5. 按照前面的说明打开项目。
6. 在“源代码控制”面板中，转到“提交”子面板。点击小“获取”按钮，然后点击旁边的“拉取”按钮。此操作会同时获取并推送更改，以同步本地存储库。

![](/image/help/github_setting_9.png)

7. 有时，*Urantiapedia Tools* 代码的更改意味着依赖项的更改。您必须在 VS Code 的终端中运行“npm install”命令来安装或更新新的依赖项。这将更新项目的依赖项。


## 概括

总结一下，GitHub 上的流程如下（见图）：
1. “主编”们在 GitHub 上自己的 Urantiapedia 项目账户中创建了一个副本 (1) (*fork*)：*Urantiapedia* 和 *Urantiapedia-backup*。他们还会通过 _Sync fork_ 或 _Fetch upstream_ (1) 来保持这些副本的同步。
2. “主编”在他们的电脑上创建项目的本地副本。这通过 VS Code 中的“克隆”操作 (2) 完成。他们还通过 VS Code 中的“抓取”+“拉取”操作 (2) 保持这些本地副本同步，这些操作会将所有更改下载到本地副本。
3. “主编”对项目的本地副本进行更改，并对本地副本进行*提交*(3)以保存更改。
4. “主编”通过*推送*操作将他们的更改发送到他们的 GitHub 项目 (4)。
5. 然后，“主编”从 GitHub 网站为这两个项目 *Urantiapedia* 和 *Urantiapedia-backup* 创建拉取请求 (5)。
6. 来自“主编”的拉取请求将由“管理员”审核，并负责合并 (6) 所有正确的更改。任何不正确的更改将被拒绝 (6)，并通知“主编”进行更正。
7. 当更改正确后，合并到原始的 *urantiapedia-backup* 项目会导致更改自动与网站同步，几分钟后网站就会显示更新。(7)

![](/image/help/github_workflow_version_2.png)

## 外部链接

- [Urantiapedia 工具 - proyecto en GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia 基金会](https://www.urantia.org/)
- [蓝色田野](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_setting">设置你的 GitHub 项目</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_content">GitHub 项目内容</a></td>
      </tr>
    </tbody>
  </table>
</figure>