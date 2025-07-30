---
title: Tests de Jan en Markdown
description: 
published: true
date: 2025-07-29T12:34:45.683Z
tags: 
editor: markdown
dateCreated: 2022-09-12T09:12:29.765Z
---

## JM Graph Data Model Extended


```mermaid
classDiagram
    Person --> Person : Relative of
    Person --> Person : Parent of
    Person --> Person : Child of
    Person --> Group : Member of
    Person --> Relationship : Is part of
    Person --> Event : Participate in
    Person --> Event : Related to
    Person --> Presentation : Described in
    Person --> Topic : Related to
    Person --> Order : Belongs to
    Group --> Event : Participate in
    Group --> Event : Related to
    Group --> Presentation : Described in
    Group --> Location : Visit
    Topic --> Presentation : Describe in
    Topic --> Event : Related to
    Relationship --> Presentation : Described in
    Relationship --> Event : Related to
    Event --> Presentation : Described in
    Event --> Time : Occur on
    Event --> Location : Occur at
    Time --> Presentation : Described in
    Time --> Age : Occur in
    Location --> Presentation : Described in
    Object --> Location : Located at
    Object --> Topic : Related to
    Object --> Presentation : Describe in
    Object --> Event : Related to
    Order --> Presentation : Described in
    Order --> Location : Found in
    Race --> Presentation : Described in
    Race --> Location : Extended at
    Race --> Religion : Believed in
    Religion --> Presentation : Described in
    Religion --> God : Related to
    God --> Presentation : Described in
    More --> Presentation : Described in
    More --> Race : Practiced by
    More --> Religion : Contained in
    Age --> Presentation : Described in
    Animal --> Presentation : Described in
    Animal --> Race : Used by
    Plant --> Presentation : Described in
    Plant --> Race : Used by
    Presentation
```

```mermaid
flowchart TD
	s1("What do their author's say?")
	s2("`Physical facts are fairly uniform, but truth is a living and flexible factor in the philosophy 
	of the universe. Evolving personalities are only partially wise and relatively true in their 
	communications. They can be certain only as far as their personal experience extends. That 
	which apparently may be wholly true in one place may be only relatively true in another 
	segment of creation.)
	Divine truth, final truth, is uniform and **universal**, but the story of things spiritual, as it is told 
	by numerous individuals hailing from various spheres, may sometimes vary in details owing 
	to this relativity in the completeness of knowledge and in the repleteness of personal 
	experience as well as in the length and extent of that experience.`")
	s1 --> s2
```


$$
\left.
\begin{array}{l}
  \text{7. Totalidad} \\
  \text{6. Personalidad} \\
    \left.
    \begin{array}{l}
      \text{5. Espíritu} \\
      \text{4. Mente} \\
      \left.
      \begin{array}{l}
        \text{3. Profundidad} \\
        \text{2. Altura} \\
        \text{1. Anchura}
      \end{array}
      \right\}
      \begin{array}{l}
      \text{Material,} \\
      \text{1ª integración}
      \end{array}
    \end{array}
    \right\}
    \begin{array}{l}
    \text{Fusión,} \\
    \text{2º integración}
    \end{array}
  \end{array}
\right\}
\begin{array}{l}
\text{Finalidad,} \\
\text{3ª integración}
\end{array}
$$