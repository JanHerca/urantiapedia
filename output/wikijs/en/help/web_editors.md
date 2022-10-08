---
title: Use of editors
description: 
published: true
date: 2022-09-06T09:19:18.947Z
tags: help
editor: markdown
dateCreated: 2022-09-02T14:21:26.328Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/web_pages">Manage pages</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/web_visual_editor">Using the visual editor</a></td>
      </tr>
    </tbody>
  </table>
</figure>
 
When creating a page, you can use the editor of your choice. Some users prefer to write content in Markdown while others might prefer a more visual editor.

## List of  Editors

- [Visual Editor *Rich-Text WYSIWYG*](/en/help/web_visual_editor)
- [Markdown *Plain Text Formatting*](/en/help/web_markdown_editor)
- [Code *Raw HTML*](/en/help/web_html_editor)
- [Multi-language Editor *Translation *(coming soon)**](/en/help/web_multi_editor)
- [Maps Editor *Google Maps-like *(coming soon)**](/en/help/web_map_editor)
- [Slides Editor *Google Slides-like *(coming soon)**](/en/help/web_map_editor)
- [3D Editor *Play Canvas-like *(coming soon)**](/en/help/web_3d_editor)
- [API Docs *REST / GraphQL *(coming soon)**](/en/help/web_api) 
- [Blog *Timeline of Posts *(coming soon)**](/en/help/web_blog)
- [Tabular *Excel-like *(coming soon)**](/en/help/web_tabular)

## Change Editor

You can change the editor used for any page using the **Convert** action. This will attempt to convert the content to be used by the newly selected editor. For example, a page previously created with the Markdown editor can be converted to HTML to be used with the Visual Editor.

From the **Page Actions** menus (located at the top-right corner and bottom-right corner), select **Convert**. The following dialog is shown:

![ui-convert-page-dialog.png](https://docs.requarks.io/assets/ui/ui-convert-page-dialog.png =550x){.radius-5 .decor-shadow}

Select the editor you want to use going forward and click **Convert**.

> :warning: **Important**
>
> Because of differences between editor / format capabilities, some formatting or non-rendered content may be lost after the conversion.
>
> A snapshot of the page is **automatically taken before the conversion** and you can revert or refer to this version **at any time afterwards** from the page history.
>
> _Examples_
>
> &#8727; When going from Markdown to HTML, `draw.io` diagrams will be kept as their final rendered image. You will no longer be able to edit the diagram.
> &#8727; When going from Markdown to HTML, tabsets will be reverted to standard headers and paragraphs (as seen in the markdown editor).
> &#8727; When going from HTML to Markdown, custom CSS classes and HTML elements that don't exist in the Markdown language will not be preserved.

As a reference, the following format conversions occur based on the source / target editor selected:

| Source | Target | Format Conversion
| -- | -- | -- |
| Markdown | Visual Editor | Markdown &rarr; HTML |
| Markdown | Raw HTML | Markdown &rarr; HTML |
| Visual Editor | Markdown | HTML &rarr; Markdown |
| Visual Editor | Raw HTML | *no format conversion needed*{.caption} |
| Raw HTML | Markdown | HTML &rarr; Markdown |
| Raw HTML | Visual Editor | *no format conversion needed*{.caption} |



<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/web_pages">Manage pages</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/web_visual_editor">Using the visual editor</a></td>
      </tr>
    </tbody>
  </table>
</figure>