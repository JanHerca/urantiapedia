---
title: Milestones of Urantiapedia
description: 
published: true
date: 2021-12-08T13:55:38.362Z
tags: help
editor: markdown
dateCreated: 2021-11-28T13:55:38.362Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/content">Urantiapedia content</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/languages">Languages supported</a></td>
      </tr>
    </tbody>
  </table>
</figure>

For each language to be included in *Urantipedia*, the work will be carried out in the following milestones. For each stage we include here the tasks to be carried, where editions must be made, and the collaborator role.

## Milestone I - The Urantia Book and the Bible

This phase incorporates the content considered minimal for launching *Urantiapedia* in a given language. This includes *The Urantia Book* and the *Bible*, both linked together so that there are links that go from *The Urantia Book* to the *Bible* and vice versa.

To create the links to the *Bible*, we are using *Paramony* by Duane L. Faw, a file containing cross-references between the *Bible* and *The Urantia Book*.

https://urantia-book.org/urantiabook/paramony/


Tasks | Where | Who
--- | --- | ---
Development of file converters to Wiki.js | GitHub | Developers
Conversion of each *Urantia Book* paper to a page with links to the *Bible* | GitHub | Editors-in-Chief
Conversion of each *Bible* chapter in a page with links to *The Urantia Book* | GitHub | Editors-in-Chief
Bulk load of files in Wiki.js format | GitHub | administrators

> This phase is completed for 27 languages.
{.is-success}

## Milestone II - Newspaper Library, Urantia Library and Encyclopedia

This phase expands the content of *Urantiapedia* with the following areas:
- **Newspaper Archive**: Articles and study aids for *The Urantia Book*. There are many of them on the [Urantia Foundation](https://www.urantia.org/) website, in the [Fellowship](https://urantiabook.org/), in Urantia associations and on individual websites. No content will be published without the express permission of the authors whenever it is possible to locate them. The content can be uploaded in two ways: public edition (any editor can improve it), and closed edition (only the author or users authorized by the author are able to modify it). Articles may also include images.
- **Library**. Religious books from the world's major religions, readers' books, and books other than the *Bible* that are suspected of being books used by the revelators in some parts of *The Urantia Book*. For example, Matthew Block is a reader who has done a great job finding this material. https://urantiabooksources.com/
- **Encyclopedia**. The index created by the *Urantia Fellowship* for its English edition of *The Urantia Book* is being used as a guide to create it. This index, as it contains only brief annotations, is being expanded to become a full text that will serve as the initial version for each topic page. https://urantia-book.org/urantiabook/topical_index/index.htm
- **Indexes**, pages with lists of links that serve as an entry point for the previous content.


Tasks | Where | Who
--- | --- | ---
Development for converting books and articles to Wiki.js | GitHub | Developers
Development of the *Topic Index Editor*, a wizard that speeds up work with the *Encyclopedia* | GitHub | Developers
Development to convert the *Encyclopedia* into pages with links to *The Urantia Book* | ​​GitHub | Developers
Adding articles and studies linked to the book and its sources | GitHub | Editors-in-Chief
Adding books other than *The Bible* | GitHub | Editors-in-Chief
Adding content to the *Encyclopedia* | GitHub | Editors-in-Chief
Adding indexes of people, beings, places, biblical sources, references, quotes, chronologies, etc. | GitHub | Editors-in-Chief
Bulk uploading files in Wiki.js format | GitHub | Administrators

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/help/sample_page_article.png">
<figcaption><em> Sample of rendering an article.</em></figcaption>
</figure>

> This phase is complete for three languages ​​(English, Spanish, and French).
{.is-success}

## Milestone III - Translator

This phase is solely for development. The following content has been incorporated:
- **An application in _Urantiapedia Tools_ that automates the translation** of multiple pages into multiple languages ​​at once. This tool does the following:
  - Allows you to connect to services like Google Cloud Translator to perform text translations.
  - Maintains the integrity of page style and formatting (Markdown and HTML).
  - Copies quotes from *The Urantia Book* and the *Bible* from the original or the existing translation and does not translate them, maintaining the integrity of the texts and reducing translation costs.
  - Allows you to know in advance the cost of performing the translation when invoking the services used.
- **The Urantia Book in multiple translation format**. Allows you to view the original English version and any available translations (one or more).


Tasks | Where | Who
--- | --- | ---
Development in _Urantiapedia Tools_ of a massive page translator | GitHub | Developers
Developing a display mode for *The Urantia Book* in multiple translations | GitHub | Developers

<figure id="Sample_fig_2" class="image urantiapedia">
<img src="/image/help/sample_page_side_by_side.png">
<figcaption><em> Sample of rendering The Urantia Book side by side.</em></figcaption>
</figure>

> This phase is complete.
{.is-success}

## Milestone IV - Extensions, corrections, Map Library and Media Library

In this new phase, which the project is currently in, work will be done in the following areas:
- **Extensions** to the content from the previous phases.
- **Corrections**. Since much of the content was introduced quickly, using automation whenever possible, there are many bugs and errors that will be ironed out over time.
- **Map Library**. A collection of maps, both interactive and static, that clarifies the geographic information provided by *The Urantia Book*.
- **Media Library**: This will be a repository of various audiovisual materials, including items such as the following:
  * Images, either drawings or photographs of concepts that illustrate *The Urantia Book*.
  * Diagrams or schemes, which will be made interactive if they are very large, so they can be viewed on small devices.
  * Slideshows.
  * 3D models, each on a separate page, which can be static or interactive like maps.
  * Audio versions of The Urantia Book.
  * Collections of videos embedded on the site, or if that's not possible, links to videos, with courses or explanations about The Urantia Book.

The _Map Library_ will require the development of a solution to display interactive maps. Whether the maps are based on static images or interactive content, the ability to zoom in and out of the map to show details or obtain an overview will be sought in both cases. There are commercial solutions such as [Google Maps](https://www.google.com/maps) and [Google Earth](https://www.google.com/intl/es/earth/), which use Google's proprietary format ([KML](https://developers.google.com/kml/documentation)). However, there are also other open-source alternatives that will be studied during this phase to avoid introducing technological dependencies unless absolutely necessary.

The functionality to be developed in the _Map Library_ should allow the following:
- Zoom: zoom in/out of the map. This function should always be available, whether the map is a static image or dynamic. The following would only be available for dynamic maps.
- Rendering of a base layer, preferably several (modern street map, satellite, relief map).
- Rendering of vector elements (points, lines, polygons) with different visual styles (icons, thicknesses, colors).
- Pop-up annotations with text that may contain links to other *Urantiapedia* or external pages.
- Guided tours, i.e., collections of linked animations where the camera moves from one position to another and content or annotations are shown and hidden.
- Geometry animations, whether or not associated with guided tours, that allow you to show, for example, an itinerary or visualize a racial migration.


<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/help/sample_page_map.jpg">
<figcaption><em> Sample of rendering an interactive map.</em></figcaption>
</figure>

The _Media Library_ will also require development that allows for interactive presentations on _Urantiapedia_. We don't want to simply link to PowerPoint or PDF files for users to download and view externally. We want content in all languages ​​and connected to the rest of _Urantiapedia_. This isn't easy using proprietary formats that also introduce technological dependencies. Therefore, we will look for alternatives that allow for broad functionality while also being based on standard formats.

Some alternatives could be:
- [Google Docs](https://docs.google.com/).
- [Prezi](https://prezi.com/).
- [Impress.js](https://impress.js.org/) ([GitHub](https://github.com/impress/impress.js)) + [Hovercraft](https://regebro.github.io/hovercraft) ([GitHub](https://github.com/regebro/hovercraft))
- [Bespoke.js](https://markdalgleish.com/projects/bespoke.js/) ([GitHub](https://github.com/bespokejs/bespoke)).
- [Reveal.js](https://revealjs.com/) + [Hacker Slides](https://github.com/jacksingleton/hacker-slides).
- [Landslide](https://github.com/adamzap/landslide).


<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/help/sample_page_slides.png">
<figcaption><em> Sample of rendering a presentation.</em></figcaption>
</figure>

As part of the _Media Library_, 3D scenes will also be included. Fortunately, in the world of 3D models, there is an open standard for creating these 3D scenes: [glTF](https://www.khronos.org/api/index_2017/gltf) from the [Khronos](https://github.com/KhronosGroup/glTF) group, which is similar to the JPG format, but in the 3D world. You can see the power of this standard on this example website:

https://github.khronos.org/glTF-Sample-Viewer-Release/

The format is widely used and supported in many applications, and online glTF editors and viewers already exist:
- [Sketchfab](https://sketchfab.com/)
- [PlayCanvas](https://playcanvas.com/).
- [Babylon.js](https://www.babylonjs.com/).
- [Three.js](https://threejs.org/) + [editor](https://threejs.org/editor/)
- [WebGL Studio](https://webglstudio.org/) + [litescene.js](https://github.com/jagenjo/litescene.js).


<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/help/sample_page_3d.jpg">
<figcaption><em> Sample of rendering a 3D model.</em></figcaption>
</figure>

Tasks | Where | Who
--- | --- | ---
Development of an Interactive Map Display System | GitHub | Developers
Development of a Presentation Display System | GitHub | Developers
Development of an Interactive 3D Model Display System | GitHub | Developers
Adding a Collection of Sample Interactive Maps on Race Migrations, Historical Facts, and the Journeys of Jesus of Nazareth | GitHub | Editors-in-Chief
Adding a Collection of Presentations Using Maps Available on Some Association Websites | GitHub | Editors-in-Chief
Adding a Collection of Interactive Diagrams or Schemes | GitHub | Editors-in-Chief
Adding a Collection of 3D Models, Such as Paradise Island, Architectural Spheres, or the Garden of Eden | GitHub | Editors-in-Chief
Creating Audio for The Urantia Book | GitHub | Editors-in-Chief
Adding a Collection of Embedded Videos or Video Links | GitHub | Editors-in-Chief

> This phase is currently in progress.
{.is-warning}


## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub project](https://github.com/JanHerca/urantiapedia-backup)
- [Urantia Foundation](https://www.urantia.org/)
- [Blue Fields](https://blue-fields.netlify.app/)
- [Wiki.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/content">Urantiapedia content</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/languages">Languages supported</a></td>
      </tr>
    </tbody>
  </table>
</figure>