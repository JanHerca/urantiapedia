---
title: "다이어그램 가져오기"
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
        <td><a href="/ko/help/github_diagrams_catalog">다이어그램 카탈로그 만들기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_images_catalog">이미지 카탈로그 만들기</a></td>
      </tr>
    </tbody>
  </table>
</figure>

여기에서는 [다이어그램 카탈로그 만들기](/ko/help/github_diagrams_catalog) 작업에 따라 카탈로그화된 _우란시아 책_의 다이어그램을 얻는 방법을 설명합니다.

## 프로세스

다이어그램은 책, 기사 또는 학습 자료와 같이 이미지가 들어간 단순한 텍스트가 아니기 때문에 매우 특별한 유형의 콘텐츠입니다.

다이어그램은 일반적으로 `PNG` 또는 `JPG` 형식의 간단한 이미지로 제공됩니다. 이러한 형식의 다이어그램은 이미지가 제공하는 기능보다 한 단계 더 나아가 다음과 같은 추가 기능을 제공하기 때문에 그다지 유용하지 않습니다.
- 다이어그램의 다른 부분에 있는 하이퍼링크
- 다이어그램 위에 마우스를 올리면 작은 팝업 상자가 나타납니다.
- 디스플레이 품질을 손상시키지 않고 다이어그램을 확대하거나 축소할 수 있음

브라우저에서 기본적으로 제공되는 이 기능은 [SVG](https://www.w3schools.com/graphics/svg_inhtml.asp) 형식에서만 제공됩니다. [HTML 이미지 맵](https://www.w3schools.com/html/html_images_imagemap.asp) 형식은 하이퍼링크만 허용합니다.

따라서 여기서의 프로세스는 위의 기능(링크, 팝업 및 확장성)을 도입하여 모든 다이어그램을 SVG 형식으로 변환하는 것입니다.

### Urantiapedia의 다이어그램 구조

"편집장"이시고 GitHub 플랫폼을 사용하시는 경우, 다이어그램은 다음 GitHub 프로젝트 폴더에 저장해야 합니다. 영어 다이어그램은 `/output/wikijs/en/article` 폴더에, 스페인어 다이어그램은 `/output/wikijs/es/article` 폴더에 저장합니다. 이 폴더 안에 작성자 이름(공백은 밑줄로 대체)을 사용하여 새 폴더를 만듭니다(폴더가 없는 경우). 마지막으로 작성자 폴더 안에 다음 기준에 따라 고유한 이름의 마크다운 파일을 만듭니다.
- 이름은 다이어그램의 제목을 사용하지만 가능한 한 줄여서 사용합니다.
- 이름은 항상 영어로 되어 있으므로 원본 다이어그램이 영어가 아닌 경우 제목은 번역됩니다.
- 공백은 밑줄로 대체됩니다.
- 콜론이나 느낌표와 같은 특수 문자가 제거됩니다.
- 예를 들어, 다이어그램 제목이 *The Master Universe*라면 파일 이름은 `The_Master_Universe.md`가 될 수 있습니다. 제목이 *Las personalidades del Espíritu Infinito*(스페인어)라면 파일 이름은 `Personalities_of_Infinite_Spirit.md`가 됩니다.

"보조 편집자"이고 GitHub 플랫폼을 사용하여 파일을 전송하지 않을 경우, PC에 다이어그램을 저장할 폴더를 생성하기만 하면 됩니다. 그러면 작업 내용을 관리자에게 전송하면 관리자가 적절한 폴더를 자동으로 생성합니다.

### Urantiapedia 다이어그램의 기본 형식

사용할 형식은 Markdown이고, 그 안에서 SVG를 사용할 것입니다.

"보조 편집기"는 Markdown 파일에 다음을 추가해야 합니다.
- 각 파일에 헤더가 있습니다.
- 헤더 바로 아래에 작성자를 표시합니다.
- 그 아래에 SVG 콘텐츠가 들어갑니다.

예를 들어, 이는 매우 단순화된 Markdown 파일이 될 수 있습니다.

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

SVG 콘텐츠 제작은 이 도움말의 범위를 벗어나며 [Inkscape](https://inkscape.org/en/) 또는 이와 유사한 이미지 벡터화 소프트웨어를 사용해야 합니다. 이 작업은 벡터 그래픽 제작 경험이 있는 "편집장"이 수행해야 합니다.

## 파일 보내기

GitHub을 사용하는 "편집장"인 경우 [편집장 도움말](/ko/help/github)에 자세히 설명된 대로 다이어그램을 제출할 수 있습니다. "보조 편집자"인 경우 Markdown 파일을 관리자의 이메일이나 urantiapedia@gmail.com으로 보내면 됩니다.

## 외부 링크

- [Urantiapedia 도구 - GitHub 프로젝트](https://github.com/JanHerca/urantiapedia)
- [SVG 형식](https://www.w3schools.com/graphics/svg_inhtml.asp)
- [HTML 이미지 맵 형식](https://www.w3schools.com/html/html_images_imagemap.asp)
- [잉크스케이프](https://inkscape.org/ko/)
- [HTML 이미지 맵을 만드는 흥미로운 도구](http://summerstyle.github.io/summer/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/github_diagrams_catalog">다이어그램 카탈로그 만들기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_images_catalog">이미지 카탈로그 만들기</a></td>
      </tr>
    </tbody>
  </table>
</figure>