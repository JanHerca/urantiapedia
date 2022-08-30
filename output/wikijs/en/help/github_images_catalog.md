---
title: "Creating an image catalog"
description:
published: true
date: 2021-11-28T14:02:03.086Z
tags:
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_diagrams_markdown">Get diagrams</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/markdown">Markdown formatting help</a></td>
      </tr>
    </tbody>
  </table>
</figure>

Here's how to create the project image catalog. This catalog is a file that is used to automate the inclusion of illustrations in *The Urantia Book* and other parts of *Urantiapedia*.

The visual aspect of Urantiapedia is something that we are going to take care of. All content will try to be as visual as possible, with quality illustrations.

## Public domain image catalogs

There are many sources of images or illustrations in the public domain that can be used for this purpose. Some examples are:

-Wikimedia Commons. It is Wikipedia's sister project for hosting public domain illustrations. Some collections of classical and Biblical-themed artists can be found here:
  - James Tissot:
    - https://commons.wikimedia.org/wiki/Gospel_harmony_(James_Tissot)
    - https://commons.wikimedia.org/wiki/Paintings_by_James_Tissot
    - https://www.wikidata.org/wiki/Wikidata:WikiProject_sum_of_all_paintings/Creator/James_Tissot
    - https://commons.wikimedia.org/wiki/Category:The_Life_of_Jesus_Christ_by_James_Tissot
  - William Hole:
    - https://commons.wikimedia.org/wiki/William_Hole%27s_Bible_Illustrations#
  - Gustave Doré:
    - https://commons.wikimedia.org/wiki/Dor%C3%A9%27s_Bible_Illustrations
  - Harold Copping:
    - https://commons.wikimedia.org/wiki/Copping%27s_Bible_Illustrations
- rawpixel. An online image acquisition service. It has many in the public domain:
  - https://www.rawpixel.com/category/53/public-domain
- Heritage Library. A large collection of vintage illustrations.
  - https://www.heritagetype.com/pages/free-vintage-illustrations
- British Museum.
  - https://www.britishmuseum.org/collection
- British Library
  - https://www.flickr.com/photos/britishlibrary/albums
- europeana.
  - https://www.europeana.eu/en/collections
- Museo. Various art institutions united.
  - https://museo.app/
- V&A.
  - https://collections.vam.ac.uk/search/
- Rikjsmuseum.
  - https://www.rijksmuseum.nl/en/rijksstudio
- Smithsonian.
  - https://www.si.edu/openaccess
- Yale Peabody Museum of Natural History
  - https://collections.peabody.yale.edu/search/
- The Metropolitan
  - https://www.metmuseum.org/art/the-collection
- National Gallery of Art
  - https://www.nga.gov/open-access-images.html
- The Public Domain Review
  - https://publicdomainreview.org/
- David Rumsey Map Collection
  - https://www.davidrumsey.com/luna/servlet/view/all
- Conceptual artists. They are not in the public domain but the artists can be contacted to request permission to use them.
  - Gary Tonge: https://visionafar.com

## Process

The image catalog is only found on GitHub, at `input/markdown/en/image_catalog.md`. Each language has its own, but the main tables are only found in the `en` folder for the English language. For the rest of the languages, there is only one table of translations of the titles from English. For example, in `/input/markdown/es/image_catalog.md` there are only translations of titles from English to Spanish.

The catalog is a Markdown file that has several sections, each marked with the `##` mark. These sections represent blocks of illustrations or images that have the same or similar origin, to be able to work in groups of images.

In each section there is a table in Markdown format with this content:
- `ref`: indicates the paragraph of _The Urantia Book_ that will have the image below or next to it. If it is not yet known, it can be left blank.
- `float`: indicates if the image should float next to the text. It can take three values:
  - Empty: the image is a block and the text is placed above and below.
  - `R`: the image floats to the right and the text continues on the left. If the device does not have enough width, this behavior does not occur.
  - `L`: the image floats to the left and the text continues on the right. If the device does not have enough width, this behavior does not occur.
- `title`: Title of the image or illustration. It must always exist.
- `file`: name of the file, including the extension. The folder path is indicated in the section. It must always exist.
- `author`: author. If it is not known, it can be left blank.
- `year`: year or years of publication. If it is not known, it can be left blank.
- `url`: web address from where the image was obtained. It must always exist.

For example, this could be a snippet from a section:

```
## /image/The_Urantia_Book/Jesus_life/paintings


| ref      | float | title                          | file                           | author       | year        | url                                                                                                                                             |
| -------- | ----- | ------------------------------ | -------------------------------| -------------| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------|
| 122:8.5  |       | The Adoration of the Magi      | Adoration_of_the_Magi.jpg      | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Magi_(L'adoration_des_mages)_-_James_Tissot_-_overall.jpg        |
|          |       | The Adoration of the Shepherds | Adoration_of_the_Shepherds.jpg | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Shepherds_(L'adoration_des_bergers)_-_James_Tissot_-_overall.jpg |
```

To edit the image catalog you have to go to the GitHub project and modify this file in English: `input/markdown/en/image_catalog.md`. Then for each new image, you must modify this other file `input/markdown/en/image_catalog.md` and put in it the translation of the title from English to Spanish, although this second modification can be ignored because when using the catalog of images we check for untranslated titles. To modify the files you can download the entire project from GitHub or just the files to modify. See the [Assistant Editors Help](/en/help/github_assistant) for how to download things from GitHub.

## Sending files

To push changes you have two options: 1) if you are a “Chief Editor” use GitHub as detailed in the [Chief Editors Help](/en/help/github); if you are an “Assistant Editor”, you can simply send the modified Markdown files to any Administrator's email or to urantiapedia@gmail.com.

## External links

- [Urantiapedia Tools - GitHub project](https://github.com/JanHerca/urantiapedia)

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/en/help/github_diagrams_markdown">Get diagrams</a></td>
        <td><a href="/en/help">Index</a></td>
        <td><a href="/en/help/markdown">Markdown formatting help</a></td>
      </tr>
    </tbody>
  </table>
</figure>
