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

## Milestone I - The Urantia Book, the Bible and Topic Index

In this milestone the content that is considered minimum to start the *Urantiapedia* in each language is added. This includes *The Urantia Book*, the *Bible*, and the *Topic Index*, all linked together so that there are links from *The Urantia Book* to the *Bible* and to topics, and vice versa. In the same way the *Bible* and the *Topic Index* will also be linked to each other in a bidirectional way.

To create the links to the *Bible*, Duane L. Faw's Paramony is being used, which is a file with cross-references between the *Bible* and *The Urantia Book*.

https://urantia-book.org/urantiabook/paramony/

To create the *Topic Index*, the index created by the *Urantia Fellowship* for its English edition of *The Urantia Book* is being used as guidance. This index, as it contains only brief annotations, is being expanded to become a full text that will serve as the initial version for each topic page.

https://urantia-book.org/urantiabook/topical_index/index.htm

This milestone is expected to be reached in Q2 2022.


Tasks | Where | Who
--- | --- | ---
Development of file converters to Wiki.js | GitHub | Developers
Conversion of each *Urantia Book* paper to a page with links to the *Bible* and Topics | GitHub | Chief Editors
Conversion of each *Bible* chapter in a page with links to *The Urantia Book* | GitHub | Chief Editors
Development of *Topic Index Editor*, a wizard to help in the work with *Topic Index* | GitHub | Developers
Conversion of *Topic Index* to pages with links to *The Urantia Book* | GitHub | Chief Editors
Bulk load of files in Wiki.js format | GitHub | administrators

## Milestone II - Books, articles, study aids, schemas and indexes

In this milestone the content of the Urantiapedia is expanded with three major areas:
- Books beyond the *Bible* suspected to be books used by revelators in parts of *The Urantia Book*. For example, Matthew Block is a reader who has done a great job finding this material. https://urantiabooksources.com/
- Articles, study aids and schemas of *The Urantia Book*. There are many of them on the [Urantia Foundation](https://www.urantia.org/) website, in the [Fellowship](https://urantiabook.org/), in Urantia associations and on individual websites. No content will be published without the express permission of the authors whenever it is possible to locate them. The content can be uploaded in two ways: public edition (any editor can improve it), and closed edition (only the author or users authorized by the author are able to modify it). Articles may also include images.
- Indexes, which are either pages with lists of links, or pages themselves that summarize a topic.

This milestone is expected to be reached in Q2 2023.


Tasks | Where | Who
--- | --- | ---
Opening of *Topic Index* for manual editing of editors | web | Assistant Editors
Development for converting books and articles to Wiki.js | GitHub | Developers
Addition of other books that are presumed to be sources of *The Urantia Book* | GitHub | Chief Editors
Addition of articles and study aids linked to the book, the sources, and references | GitHub | Chief Editors
Addition of indexes of people, beings, places, *The Bible*, references, quotes, chronologies, etc | GitHub | Chief Editors
Bulk load of files in Wiki.js format | GitHub | Administrators

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/sample_page_article.png">
<figcaption><em> Sample of rendering an article.</em></figcaption>
</figure>

## Milestone III -Translator

In this milestone only development will be undertaken. Two new tools will be added in Wiki.js that will be of special importance in this project, and that are currently not included in the *Wiki.js* roadmap (https://docs.requarks.io/releases/roadmap):
- An application on Urantiapedia Tools that automates the translation into multiple languages of many pages at once. It is important that this tool does the following:
   - Allow to connect to one or several services like Google Cloud Translator to perform text translations.
   - Maintain the integrity of the style and format of the pages (Markdown and HTML).
   - Copy quotes from *The Urantia Book* and the *Bible* from the original or existing translation and do not translate them.
   - Allows to know in advance the cost that the execution of the translation will have when invoking the services used.
- A new type of editor on web pages that allows displaying two languages ​​at the same time and carrying out an assisted translation, so that on one side content is displayed as a guide, and in parallel you can see translation suggestions and the final translation saved. It will also have functionality that allows knowing the progress that the user has made in their translation work and coordinating with other users who are also translating in the same language.
- A new type of content viewer that allows viewing content in a double column, showing two of the available languages ​​at the same time. A good use of this is to be able to view the English original of *The Urantia Book* and another language, but this would work for any page and any language pair.
- An option will also be added to be able to select the desired translation into Spanish since there are three official translations of *The Urantia Book* into Spanish. Only one will be the default translation to which the links from other pages will be connected, but when showing the pages of the book in Spanish, an option will be added that allows switching from the default translation to the others.

This milestone is expected to be achieved in Q1 2024.


Tasks | Where | Who
--- | --- | ---
Opening of books and articles to manual editing of *editors* | web | Assistant Editors
Development in Urantiapedia Tools of a massive page translator | GitHub | Developers
Development in *Wiki.js* of a new editor for guided translations in the web | GitHub | Developers
Development in *Wiki.js* of a new dual mode viewer for *The Urantia Book* in pairs of languages | GitHub | Developers
Development in Wiki.js of a preference selector in the translation to use of *The Urantia Book* (for languages like Spanish with several) | GitHub | Developers

<figure id="Sample_fig_2" class="image urantiapedia">
<img src="/image/sample_page_side_by_side.png">
<figcaption><em> Sample of rendering The Urantia Book side by side.</em></figcaption>
</figure>

## Milestone IV - Interactive maps

Few standards currently exist for saving a map definition. The [KML](https://developers.google.com/kml/documentation) format (property of Google) is a good option that also allows extensibility because it is based on XML. In this milestone, an standard will be defined based on the best already existing that allows saving:
- The definition of base layers and basic functionality of a 2D or 3D map.
- Points, lines and polygons on the earth's surface.
- Custom styles for the above geometries.
- Pop-up annotations with text that may contain links to other Urantiapedia or external pages.
- Guided tours, that is, collections of concatenated animations where the camera moves from one position to another and contents or annotations are shown and hidden.
- Geometry animations, associated or not with guided tours, that allow showing, for example, an itinerary or visualizing the migration of a race.

The developments that will be needed in *Wiki.js* are:
- A client-side map editor that uses existing 2D and 3D map APIs (such as [Google Maps](https://www.google.com/maps) and [Google Earth](https://www.google.com/intl/en/earth/)) and allows you to create the map in the standard.
- A server-side renderer that converts the standard into a web viewer that renders the created map.
- The web viewer that presents the created map on the client side, a simplified version (without editing tools) of the map editor.

This milestone is expected to be reached in Q2 2024.


Tasks | Where | Who
--- | --- | ---
Development in *Wiki.js* of an interactive map editor, the format and the renderer | GitHub | Developers
Addition of a set of sample interactive maps, about race migrations, historical facts and Jesus voyages | GitHub | Chief Editors

<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/sample_page_map.jpg">
<figcaption><em> Sample of rendering an interactive map.</em></figcaption>
</figure>

## Milestone V - Slides

As with maps, there are no standard formats for saving presentations. The most universal format is PowerPoint's PPTX (proprietary by Microsoft) but it is not a text-type format. In this milestone, a standard for saving presentations will be defined. As very interesting open source alternatives that integrate presentations on the web without being tied to a format, we have:
- [Impress.js](https://github.com/impress/impress.js) with [Hovercraft](https://github.com/regebro/hovercraft) is a presentation creation library. Format is [ReST](https://docutils.sourceforge.io/rst.html).
- [Bespoke.js](https://github.com/bespokejs/bespoke) is a presentation creation micro-library. Format is XML and others.
- [Strut](https://github.com/tantaman/Strut) is an editor for Impress.js and Bespoke.js. Format is Markdown.
- [Reveal.js](https://revealjs.com/) is a presentation creation library. Format is  HTML or Markdown. [Hacker Slides](https://github.com/jacksingleton/hacker-slides) is a Reveal.js editor that uses Markdown .
- [Landslide](https://github.com/adamzap/landslide) is a slideshow creation library. Formats are Markdown, ReST or Textile.

The developments that will be needed in *Wiki.js* are:
- A client-side presentation editor that uses existing APIs and allows to create the presentation in a standard format such as Markdown.
- A server-side renderer that converts the standard into a web viewer that displays the created presentation.
- The web viewer that displays the presentation on the client side, a simplified version (without editing tools) of the presentation editor.

This milestone is expected for Q2 2025.


Tasks | Where | Who
--- | --- | ---
Opening of interactive maps to manual editing and additions by editors | web | Assistant Editors
Development in *Wiki.js* of a slides editor, with its format and renderer | GitHub | Developers
Addition of a set of slides using available ones in the association’s sites | GitHub | Chief Editors

<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/sample_page_slides.png">
<figcaption><em> Sample of rendering a presentation.</em></figcaption>
</figure>

## Milestone VI - 3D interactive models

Fortunately in the 3D world there is an open standard for creating 3D scenes, [glTF](https://www.khronos.org/api/index_2017/gltf) from the [Khronos group](https://github.com/KhronosGroup/glTF), which is like the JPG for 3D. You can see the power of this standard in this example website:

https://github.khronos.org/glTF-Sample-Viewer-Release/

The format is widely used and supported in many applications, and there are already online glTF editors and viewers:
- [PlayCanvas](https://playcanvas.com/). The engine is open source and has a paid online editor that allows you to create scenes collaboratively.
- [Babylon.js](https://www.babylonjs.com/). A full open source engine and editor.
- [Three.js](https://threejs.org/). An engine and an [editor](https://threejs.org/editor/) completely open source.
- [WebGL Studio](https://webglstudio.org/). An engine, [litescene.js](https://github.com/jagenjo/litescene.js), and a full open source editor.

The developments that will be necessary in Wiki.js are:
- Integrate into Wiki.js a glTF scene editor (using one of the above) on the client side. glTF uses a JSON format.
- A server-side renderer that converts the glTF JSON into a web viewer that displays the created 3D scene. The viewer used will be the one related with the selected editor.

This milestone is expected for Q2 2026.


Tasks | Where | Who
--- | --- | ---
Opening of slides for manual editing and additions of editors | web | Assistant Editors
Development in Wiki.js for a 3D interactive model creator/editor, its format and renderer | GitHub | Developers
Addition of a set of 3D models about Paradise, architectural spheres, Garden of Eden and the like | GitHub | Chief Editors

<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/sample_page_3d.jpg">
<figcaption><em> Sample of rendering a 3D model.</em></figcaption>
</figure>
 
## Future

From now on, the project could consider new challenges such as:
- To serve as a centralizing place for the translation efforts of *The Urantia Book* into other languages.
- Serve as a portal to offer talks and online training courses on different topics related to *The Urantia Book*.
- Serve as a virtual art gallery where artists who create works related to *The Urantia Book* can exhibit their works.
- Offer a center for questions and answers on topics related to *The Urantia Book*.

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