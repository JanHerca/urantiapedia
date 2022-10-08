---
title: "Get diagrams"
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
        <td><a href="/en/help/github_diagrams_catalog">Creating a catalog of diagrams</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_images_catalog">Creating an image catalog</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Here it is described how to obtain the diagrams of _The Urantia Book_, that have been cataloged following the task [Creating a catalog of diagrams](/en/help/github_diagrams_catalog).

## Process

Diagrams are a very special type of content because they are not simple text with images such as books, articles or study aids.

Diagrams are usually available as simple images in `PNG` or `JPG` format. The diagrams in these formats are not very useful because what is intended with the diagrams is to go one step further than what the images offer and allow extra functionalities such as:
- Hyperlinks in different parts of the diagram
- Small pop-up boxes when hovering over the diagram.
- Being able to scale the diagram up and down without losing display quality

This functionality natively in the browser is only provided by the [SVG](https://www.w3schools.com/graphics/svg_inhtml.asp) format. The [HTML image map](https://www.w3schools.com/html/html_images_imagemap.asp) format allows only hyperlinks.

The process here will therefore be the conversion of any diagram to SVG format by introducing the above functionality (links, pop-ups and scalability).

### Structure of the diagrams in Urantiapedia

If you are a “Chief Editor” and will be using the GitHub platform, diagrams should be saved in these GitHub project folders: `/output/wikijs/en/article` for English diagrams, `/output/wikijs/es/article` for diagrams in Spanish, etc. Within these folders we will create another one, if it does not exist, with the author's name (with blank spaces replaced by underscores). Finally, inside the author's folder, we will create a Markdown file with a unique name following this criteria:
  - The name will use the title of the diagram but as abbreviated as possible.
  - The name will always be in English, so if the original diagram is not in English, the title is translated.
  - Blank spaces are replaced by underscores.
  - Special characters like colons or exclamations are removed.
  - For example, if the title of a diagram is *The Master Universe* a possible file name would be `The_Master_Universe.md`. If the title were *Las personalidades del Espíritu Infinito* (Spanish), the file would be `Personalities_of_Infinite_Spirit.md`.

If you are an “Assistant Editor” and you are not going to use the GitHub platform to send files, simply create any folder on your PC in which to leave the diagrams that you create. Then when you send your work to an Administrator he or she will take care of creating the correct folders.

### Basic format of a diagram in Urantiapedia

The format to use is Markdown and within it we will use SVG.

The “Assistant Editor” should add the following to the Markdown file:
- A header in each file.
- Immediately below the header, an indication of the author.
- Underneath would go the SVG content.

For example, this would be a possible very simplified Markdown file:

```
---
title: "The Sun"
description:
published: true
date: 2021-11-28T14:02:03.086Z
tags: Cosmology, Astronomy
publisher: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

Author: **John Doe**

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

The creation of SVG content is outside the scope of this help and would involve the use of image vectorization software such as [Inkscape](https://inkscape.org/en/) or similar. This task should be carried out by a “Chief Editor” with experience in creating vector graphics.

## Sending files

If you are a “Chief Editor” using GitHub you can submit diagrams as detailed in the [Chief Editors Help](/en/help/github); if you are an “Assistant Editor”, you can simply send the Markdown files to any Administrator's email or to urantiapedia@gmail.com.

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)
- [SVG format](https://www.w3schools.com/graphics/svg_inhtml.asp)
- [HTML Image Map Format](https://www.w3schools.com/html/html_images_imagemap.asp)
- [Inkscape](https://inkscape.org/en/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_diagrams_catalog">Creating a catalog of diagrams</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/github_images_catalog">Creating an image catalog</a></td>
      </tr>
    </tbody>
  </table>
</figure>