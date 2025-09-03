---
title: "Urantiapedia — 直接从 GitHub 网站工作"
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
        <td><a href="/zh/help/github_fork">GitHub 入门</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_setting.md">设置 Urantiapedia GitHub 项目</a></td>
      </tr>
    </tbody>
  </table>
</figure>

建议直接从 GitHub 网站进行操作，因为与在 PC 上本地操作相比，它非常简单。对于“助理编辑”用户，我们推荐使用此方法。对于“管理员”或“主编”用户，我们建议使用本手册后续页面中介绍的方法。

假设我们要编辑一篇有翻译错误的文章。步骤如下：

1. 输入您的 *Urantiapedia* 项目的 *fork*（`https://github.com/user-name/urantiapedia`，其中 _user-name_ 是您的用户名）。
2. 使用目录列表导航到您想要修改的任何文件。在我们的示例中，我们将更正位于`urantiapedia / output / wikijs / en / article / Alain_Cyr / Our_Experience...`目录中的文件中的错误。进入文件后，您可以在其“预览”模式下轻松阅读，如图所示。我们发现一个错误，其内容是“pero las cuentas se perdieron”（西班牙语翻译为“但计数丢失了”），而不是更正确的内容，例如“pero perdí la cuenta”（西班牙语翻译为“但我数错了”）。

![](/image/help/github_edit_1.png)

3. 单击带有铅笔图标的顶部菜单，然后选择_就地编辑_。

![](/image/help/github_edit_2.png)

4. 您将进入编辑模式。找到错误的文本并进行修改。完成所有必要的修改后，点击绿色按钮“提交更改...”。

![](/image/help/github_edit_3.png)

5. 系统会要求您确认是否要保存一些更改。保留默认消息，或在“提交消息”处输入更具描述性的更改消息。保留“直接提交到主分支”选项（无需担心，因为只有您在处理该项目副本）。最后点击“提交更改”。

![](/image/help/github_edit_4.png)

6. 现在我们将创建一个拉取请求，将我们在项目副本中所做的更改发送到原始项目。为此，请在 GitHub 主菜单中选择“拉取请求”选项。如果这是您第一次创建，您将看到一个空列表，如下图所示。

![](/image/help/github_edit_5.png)

7. 点击绿色的“新建拉取请求”按钮，创建一个新的拉取请求。此时将出现一个屏幕，显示您的更改与原始项目的比较结果。如果比较结果未发现任何冲突，则会显示“可合并”消息。您可以点击绿色的“创建拉取请求”按钮，最终创建拉取请求。

![](/image/help/github_edit_6.png)

8. 最后一个屏幕允许您输入拉取请求的标题和描述。最后，点击绿色的“创建拉取请求”按钮即可创建请求。

![](/image/help/github_edit_7.png)

9. 最后一个屏幕将带我们进入原始项目（**注意**，我们现在不再位于项目副本的页面），在这里我们可以看到已发送的变更请求，并已添加到原始项目的“拉取请求”中。现在我们只需等待“管理员”决定是否接受这些变更，届时我们将在“拉取请求”列表中看到接受确认。此操作并非即时完成，可能需要几天时间，但这并不意味着您不能继续工作，进行新的修改和变更请求，并重复此处介绍的步骤。您的“拉取请求”列表可以根据需要添加任意长度。

![](/image/help/github_edit_8.png)

> :warning: 重要提示：如果您希望您的用户名在项目中反映为更改的作者，则必须在 *urantiapedia* 项目中重新执行 *urantiapedia-backup* 项目中的所有这些步骤。如果不是这种情况，您只需在 *urantiapedia* 项目中引入更改，管理员将负责在 *urantiapedia-backup* 项目中为您引入更改，该项目与网站同步。在第二种情况下，上传您更改的 *Administrator* 用户将显示为更改的作者。
> 这种重复可能看起来很麻烦，但出于安全原因这是必要的。
{.is-warning}

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/zh/help/github_fork">GitHub 入门</a></td>
        <td><a href="/zh/help">索引</a></td>
        <td><a href="/zh/help/github_setting.md">设置 Urantiapedia GitHub 项目</a></td>
      </tr>
    </tbody>
  </table>
</figure>