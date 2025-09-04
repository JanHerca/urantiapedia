---
title: "Urantiapedia — GitHub 入门"
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
        <td><a href="/zh/help/devs">开发者帮助</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_edit_on_web.md">直接在 GitHub 网站上工作</a></td>
      </tr>
    </tbody>
  </table>
</figure>

在 GitHub 上执行任何操作之前，您需要遵循以下步骤：

1. 你需要有一个 GitHub 账户。访问 https://github.com
2. 如果您已经有账户，请点击*登录*并登录。
3. 如果您没有账户，请点击“注册”创建一个。输入用户名、邮箱和密码。创建账户后，请使用该账户登录 GitHub。
4. 首次登录 GitHub 时，系统会要求您通过电子邮件进行验证。验证通过后，您将进入 GitHub 主页。
5. 打开*Urantiapedia*项目页面：
  - https://github.com/JanHerca/urantiapedia
  - https://github.com/JanHerca/urantiapedia-backup
6. 创建项目的“分支”。“分支”只是将项目复制到您自己的帐户中，这样对副本所做的更改就不会影响原始项目。要“分支”项目，请点击每个 GitHub 项目页面右上角的“分支”按钮。

![](/image/help/github_fork_1.png)

7. 几秒钟后，*Urantiapedia* 项目的副本将创建在您的 GitHub 帐户中。这些项目是全新且完整的副本，您可以根据需要进行任何更改，而不会影响原始项目。点击您的用户菜单，选择“您的仓库”，返回您的帐户，检查这些项目是否已创建。您应该会看到两个项目以及一条“Forked from ...”的消息。

![](/image/help/github_fork_2.png)

![](/image/help/github_fork_3.png)

8. 从这里开始，有两个选项：
  - [直接从 GitHub 网站进行操作](/zh/help/github_edit_on_web)。此方法非常简单，推荐使用。
  - 在电脑上本地操作。此过程较为复杂，需要更多步骤：
    - [设置 Urantiapedia GitHub 项目](/zh/help/github_setting)
    - [遵循 GitHub 工作流程](/zh/help/github_edit_local)


## :warning: 重要提示：如何保持你的副本更新

您对两个 *Urantiapedia* 项目（*urantiapedia* 和 *urantiapedia-backup*）的 *fork* 是副本，GitHub 不会自动更新。从您创建它们的那一刻起，其他用户就会对原始项目进行更改，而这些更改不会自动反映在您的项目中。请记住，您的项目**是独立的副本**，对副本或原始项目所做的更改不会在无人值守的情况下同步到另一个项目。

**因此，在对副本中的文件进行任何更改之前，务必确保它们与原始项目的当前状态同步，这一点非常重要。**

为此，**在任何工作会议之前**（本手册的以下步骤详述）**您必须遵循以下简单步骤**：

1. 点击每个项目的副本，进入后点击“同步分支”选项。您将看到一个菜单，其中显示有多少次保存（提交）已提交到原始项目，而这些保存（提交）不在您的副本中。在图中，您可以看到有 4 次保存我们没有，因此我们的副本已过期（此分支已过期）。只需点击“更新分支”即可将原始项目中的更改同步到您的副本中。

![](/image/help/github_fork_4.png)

2. 等待几秒钟，GitHub 会更新你的副本。完成后，如果再次点击“同步分支”，你会看到所有内容都已更新，这表明更改并不落后于原始分支（即“此分支不落后于上游”）。

![](/image/help/github_fork_5.png)

每次要开始更改工作时，都需要记住为每个项目执行此操作。如果忘记执行此操作该怎么办？通常情况下，只要您要修改的文件尚未被修改，就不会发生任何事情。您可以继续工作，而不会遇到任何问题，并执行手册以下步骤中指示的所有任务，但强烈建议您遵循更安全的做法，在进行任何编辑之前运行这些步骤。

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/devs">开发者帮助</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_edit_on_web.md">直接在 GitHub 网站上工作</a></td>
      </tr>
    </tbody>
  </table>
</figure>