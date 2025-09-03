---
title: "Urantiapedia — 开发者帮助"
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
        <td><a href="/zh/help/github_assistant">助理编辑帮助</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_fork">GitHub 入门</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## 关于 Urantiapedia

[Urantiapedia](https://urantiapedia.org) 是一个基于 [Wiki.js](https://js.wiki/) 的协作网站，旨在成为传播有关 *《尤兰提亚之书》* 所有知识的统一中心。

## 关于蓝色田野

[蓝色田野](https://blue-fields.netlify.app/) 是一个旨在聚集和组织《尤兰提亚之书》读者的网站，这些读者希望在世界各地合作开展智慧、有目的且利他性的项目。该网站负责管理《尤兰提亚百科全书》志愿者的注册和协作。

## 关于 GitHub

GitHub 上的 [Urantiapedia](https://github.com/JanHerca/urantiapedia) 项目旨在为 *Urantiapedia* 内容提供快速启动程序。它包含特定格式的文件和软件，可帮助自动创建初始内容。

## 本手册适用于谁？

本手册适用于“开发人员”或符合以下要求的用户：
- 在 [Blue Fields](https://blue-fields.netlify.app/)、[Urantiapedia](https://urantiapedia.org) 和 [GitHub](https://github.com/) 上拥有账户的注册用户。
- 被 [Blue Fields](https://blue-fields.netlify.app/) 平台上运行项目的团队授权为项目合作者。
- 精通 HTML、CSS、Javascript、[Node.js](https://nodejs.org/)、[Git](https://git-scm.com/)、[GitHub](https://github.com/)、[Bootstrap](https://getbootstrap.com/) 和 [Vue.js](https://vuejs.org/)。

## GitHub 工作流程

该过程是通常的 GitHub 工作流程：
1.“开发者”在 GitHub 上 (https://github.com/JanHerca/urantiapedia) 创建 *Urantiapedia* 项目的 *fork*（在自己的帐户中复制一份）以在 *Urantiapedia Tools* 中进行开发，或者创建 Wiki.js (https://github.com/Requarks/wiki) 的 *fork* 以在 *Wiki.js* 中进行开发。
2. “开发者”在电脑上创建项目的本地副本。本地副本必须是主分支的最新版本。此操作首先通过“克隆”操作完成，然后通过“拉取”操作将项目的所有更改下载到本地副本。
3.“开发人员”在本地副本中进行更改并提交。
4.“开发人员”通过*推送*将更改发送到 GitHub。
5. 对于 *Urantiapedia Tools*，由于它是一个自有仓库，因此可以从 GitHub 网站发起 *拉取请求*。对于 *Wiki.js*，由于它归第三方所有，因此需要在此 *fork* https://github.com/JanHerca/wiki 中创建一个 *合并*，以便在需要时将 *拉取请求*集中到 Wiki.js *上游*，并协调开发工作。
6. *拉取请求*由授权开发人员审核，负责将所有通过的更改*合并*到主分支。任何无效的更改都会被拒绝，并通知开发人员进行修复。
7. 当 Wiki.js 的修改完成后，我们就可以启动新版本的服务器了。此任务由“管理员”完成。
8. 根据需要重复该过程多次，返回到点 3。

## 安装开发服务器

请参阅https://docs.requarks.io/install。

请参阅https://docs.requarks.io/install/upgrade。

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
        <td><a href="/zh/help/github_assistant">助理编辑帮助</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_fork">GitHub 入门</a></td>
      </tr>
    </tbody>
  </table>
</figure>