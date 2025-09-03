---
title: "Urantiapedia — 设置 GitHub 项目"
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
        <td><a href="/zh/help/web_html_editor">直接从 GitHub 网站工作</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_content">在您的电脑上本地工作</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## 在您的电脑上本地使用 GitHub

此 GitHub 操作方案比本手册中介绍的直接从 GitHub 网站操作的方案复杂得多。因此，仅推荐对 Git 和 GitHub 有一定了解的用户使用。它更加灵活，功能更强大，使我们能够以更快、更全面的方式编辑 Urantiapedia。此外，它还允许我们运行名为 *Urantiapedia Tools* 的工具，这些工具可以快速执行自动化任务。

对于*管理员*或*主编*用户来说，这应该是最推荐的选项，而对于*助理编辑*用户，则建议选择直接从 GitHub 网站工作。

在 GitHub 上本地工作的第一步是执行几个软件的安装，我们将对此进行讲解。然后，我们将提供一些配置技巧。

:warning: 假设在执行这些步骤之前，我们已经创建了一个 GitHub 帐户，并将 Urantiapedia 项目必要的副本（_forks_）复制到我们的帐户中，如 [GitHub 上的第一步](/zh/help/github_fork) 中所述。

## 在你的电脑上安装 Git

1. 导航到 https://git-scm.com/。
2. 下载适用于您操作系统的安装程序。您可以在此处找到有关如何在不同操作系统上安装的完整教程：[安装 Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)。在 Windows 上，请使用安装程序并保留默认选项。
3. 在终端中运行以下命令，检查 Git 是否正确安装：git --version。如果返回版本号，则表示 Git 运行正常。
4. 在终端中运行以下命令（Git 会安装一个名为 Git CMD 的终端供您使用），使用您的姓名和电子邮件设置您的 Git 身份。这是 Git 将您设置为代码贡献者所必需的。

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## 在你的电脑上安装 Node.js

Node.js 是运行 *Urantiapedia 工具* 的必要条件。如果您不打算运行它们，可以跳过此步骤，但我们建议您这样做。
1. 导航到 https://nodejs.org/。
2. 下载 Node.js。使用当前可用的 LTS 版本。
3. 使用默认选项安装。
4. 检查 Node.js 是否正确安装。打开终端并运行 `node -v`。如果显示版本号，则表示 Node.js 已正确安装。

## 安装 VS Code 和 GitLens

强烈建议使用 Visual Studio Code。

1. 导航到 https://code.visualstudio.com/。
2. 下载并安装。如果您是 Windows 用户，建议在安装过程中勾选“将‘使用代码打开’操作添加到目录的上下文菜单”选项。
3. 打开它。第一次打开时，您可以设置一些选项。请跳过这些选项。
4. 在 VS Code 中，点击左侧边栏的“扩展”按钮。强烈建议安装名为“GitLens”的扩展。它通常位于最受欢迎的扩展列表中。找到它并点击安装按钮。
5. 现在，VS Code 左侧按钮栏中将出现一个新的 GitLens 按钮。点击该按钮，然后点击“欢迎（快速设置）”按钮。“欢迎”页面将打开。建议选择“源代码控制布局”作为默认视图。这将使 GitLens 与 VS Code 中的默认“源代码控制”面板合并。

## 克隆 Urantiapedia 项目

1.打开 GitHub 网站并导航到您的帐户。
2. 打开您应该创建的 Urantiapedia 项目（_forks_）的副本。
3. 在每个副本的主页上单击名为 _Code_ 的绿色菜单，然后单击那里复制项目 URL，例如 `https://github.com/<username>/urantiapedia.git` 和 `https://github.com/<username>/urantiapedia-backup.git`。

![](/image/help/github_setting_1.png)

4. 打开 VS Code，打开_Source control_面板并点击_Clone repository_。

![](/image/help/github_setting_2.png)

5. 在出现的文本框中，键入或粘贴您之前复制的路径。
6. 选择“从 GitHub 克隆”。

![](/image/help/github_setting_3.png)

7. 单击_GitHub 扩展中的允许登录_。
8. 出现一个网页，要求 VS Code 授权访问 GitHub。点击“继续”。
9. 点击_授权github_。
10. 现在，您将被重定向到一个新的网页，并打开一条消息。点击“打开 VS Code”。
11. 现在点击“打开”以允许使用提供的路径。如果出现问题，请从第 4 点开始重复操作。
12. 当您的 Urantiapedia 项目存储库名称显示在命令中心时，请选择它。将出现一个对话框，询问您选择一个文件夹。您可以选择任意文件夹，或为项目创建一个文件夹。

![](/image/help/github_setting_4.png)

13. 等待几分钟，VS Code 会克隆仓库。最后点击“打开仓库”。同时点击“是，我信任作者”。
14.项目将成功打开。
15. 对每个项目、*urantiapedia* 和 *urantiapedia-backup* 执行相同的步骤。

## 设置 *Urantiapedia 工具*

*Urantiapedia Tools* 是一款使用 JavaScript 和 [Electron](https://www.electronjs.org/) 开发的桌面应用程序。它用于运行非常快速的进程，可以一次修改数百个页面。如果您不需要使用它，可以跳过此步骤。要安装并运行它，请按照以下步骤操作：

1. 在 VS Code 中打开 *urantiapedia* 项目。您可以通过两种方式操作：
  - 打开 VS Code。选择“文件”>“打开文件夹”。选择项目的根文件夹，即包含`package.json`文件的文件夹。
  - 或者，在 Windows 上，您可以通过根文件夹的上下文菜单打开项目并选择_使用代码打开_。
3. 使用“终端”>“新建终端”打开终端。确保该终端已在项目根文件夹中打开。
4. 要安装 *Urantiapedia Tools* 依赖项，请运行：`npm install`。等待所有依赖项安装完成。

![](/image/help/github_setting_5.png)

5. 项目已设置默认运行配置。按 F5 运行应用程序，或在终端中运行 `npm run start`。
6. 应用程序打开。默认情况下，会打开一个“开发工具”窗口用于调试。如果您不进行开发，可以忽略或关闭它。

![](/image/help/uptools.png)



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
        <td><a href="/zh/help/web_html_editor">直接从 GitHub 网站工作</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_content">在您的电脑上本地工作</a></td>
      </tr>
    </tbody>
  </table>
</figure>