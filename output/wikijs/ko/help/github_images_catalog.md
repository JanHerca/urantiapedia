---
title: "이미지 카탈로그 만들기"
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
        <td><a href="/ko/help/github_diagrams_svg">다이어그램 가져오기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</figure>

프로젝트 이미지 카탈로그를 만드는 방법은 다음과 같습니다. 이 카탈로그는 *우란시아서*와 *우란티아피디아*의 다른 부분에 그림을 자동으로 포함하는 데 사용되는 파일입니다.

Urantiapedia의 시각적인 측면은 저희가 담당할 부분입니다. 모든 콘텐츠는 고품질 일러스트를 활용하여 최대한 시각적으로 표현되도록 노력할 것입니다.

## 퍼블릭 도메인 이미지 카탈로그

이러한 목적으로 사용할 수 있는 퍼블릭 도메인 이미지나 일러스트레이션은 많이 있습니다. 몇 가지 예를 들면 다음과 같습니다.

- 위키미디어 커먼즈. 위키백과의 자매 프로젝트로, 퍼블릭 도메인 일러스트레이션을 호스팅합니다. 고전 및 성경 관련 예술가들의 컬렉션은 다음에서 찾아볼 수 있습니다.
  - 제임스 티소:
    - https://commons.wikimedia.org/wiki/Gospel_harmony_(제임스_티소)
    - https://commons.wikimedia.org/wiki/Paintings_by_James_Tissot
    - https://www.wikidata.org/wiki/Wikidata:WikiProject_sum_of_all_paintings/Creator/James_Tissot
    - https://commons.wikimedia.org/wiki/Category:제임스 티소의 예수 그리스도의_삶
  - 윌리엄 홀:
    - https://commons.wikimedia.org/wiki/William_Hole%27s_Bible_Illustrations#
  - 구스타브 도레:
    - https://commons.wikimedia.org/wiki/Dor%C3%A9%27s_성경_일러스트레이션
  - 해럴드 코핑:
    - https://commons.wikimedia.org/wiki/Copping%27s_Bible_Illustrations
- rawpixel. 온라인 이미지 수집 서비스입니다. 퍼블릭 도메인에 속하는 콘텐츠가 많습니다.
  - https://www.rawpixel.com/category/53/공개 도메인
- 헤리티지 도서관. 빈티지 일러스트를 대량 소장하고 있습니다.
  - https://www.heritagetype.com/pages/free-vintage-illustrations
- 대영박물관.
  - https://www.britishmuseum.org/collection
- 영국 도서관
  - https://www.flickr.com/photos/britishlibrary/albums
- 유로페아나.
  - https://www.europeana.eu/en/collections
- 박물관. 다양한 예술 기관이 연합했습니다.
  - https://museo.app/
- V&A.
  - https://collections.vam.ac.uk/search/
- 릭스 박물관.
  - https://www.rijksmuseum.nl/en/rijksstudio
- 스미소니언.
  - https://www.si.edu/openaccess
- 예일 피바디 자연사 박물관
  - https://collections.peabody.yale.edu/search/
- 메트로폴리탄
  - https://www.metmuseum.org/art/the-collection
- 국립 미술관
  - https://www.nga.gov/open-access-images.html
- 퍼블릭 도메인 리뷰
  - https://publicdomainreview.org/
- 데이비드 럼지 지도 컬렉션
  - https://www.davidrumsey.com/luna/servlet/view/all
- 컨셉 아티스트. 퍼블릭 도메인은 아니지만, 아티스트에게 연락하여 사용 허가를 요청할 수 있습니다.
  - 게리 톤지: https://visionafar.com

## 프로세스

이미지 카탈로그는 GitHub의 `input/markdown/en/image_catalog.md`에서만 찾을 수 있습니다. 각 언어마다 고유한 이미지 카탈로그가 있지만, 주요 표는 영어의 `en` 폴더에만 있습니다. 나머지 언어의 경우, 영어 제목의 번역 표는 하나만 있습니다. 예를 들어, `/input/markdown/es/image_catalog.md` 폴더에는 영어에서 스페인어로 번역된 제목만 있습니다.

카탈로그는 여러 섹션으로 구성된 마크다운 파일이며, 각 섹션은 `##` 표시로 표시됩니다. 이 섹션들은 동일하거나 유사한 출처를 가진 일러스트레이션이나 이미지 블록을 나타내므로 이미지 그룹으로 작업할 수 있습니다.

각 섹션에는 다음 내용이 담긴 마크다운 형식의 표가 있습니다.
- `ref`: 아래 또는 옆에 이미지가 표시될 _우란시아 서_의 문단을 나타냅니다. 아직 알려지지 않은 경우 비워둘 수 있습니다.
- `float`: 이미지를 텍스트 옆에 띄울지 여부를 나타냅니다. 다음 세 가지 값을 사용할 수 있습니다.
  - 비어 있음: 이미지는 블록이고 텍스트는 위와 아래에 배치됩니다.
  - `R`: 이미지는 오른쪽으로 이동하고 텍스트는 왼쪽에 계속 표시됩니다. 기기의 너비가 충분하지 않으면 이 동작은 발생하지 않습니다.
  - `L`: 이미지는 왼쪽으로 이동하고 텍스트는 오른쪽으로 계속 이동합니다. 기기의 너비가 충분하지 않으면 이 동작은 발생하지 않습니다.
- `title`: 이미지 또는 일러스트의 제목입니다. 반드시 존재해야 합니다.
- `file`: 확장자를 포함한 파일 이름입니다. 폴더 경로는 섹션에 표시되어 있으며, 항상 존재해야 합니다.
- `author`: 작성자. 알 수 없는 경우 비워둘 수 있습니다.
- `year`: 출판 연도. 알 수 없는 경우 비워둘 수 있습니다.
- `url`: 이미지를 가져온 웹 주소입니다. 항상 존재해야 합니다.

예를 들어, 이는 섹션의 일부일 수 있습니다.

```
## /image/The_Urantia_Book/Jesus_life/paintings


| ref      | float | title                          | file                           | author       | year        | url                                                                                                                                             |
| -------- | ----- | ------------------------------ | -------------------------------| -------------| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------|
| 122:8.5  |       | The Adoration of the Magi      | Adoration_of_the_Magi.jpg      | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Magi_(L'adoration_des_mages)_-_James_Tissot_-_overall.jpg        |
|          |       | The Adoration of the Shepherds | Adoration_of_the_Shepherds.jpg | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Shepherds_(L'adoration_des_bergers)_-_James_Tissot_-_overall.jpg |
```

이미지 카탈로그를 편집하려면 GitHub 프로젝트로 이동하여 이 파일을 영어로 수정해야 합니다. `input/markdown/en/image_catalog.md`. 그런 다음 새 이미지마다 이 다른 파일인 `input/markdown/en/image_catalog.md`를 수정하고 영어에서 스페인어로 번역된 제목을 추가해야 합니다. 단, 이미지 카탈로그를 사용할 때 번역되지 않은 제목을 확인하므로 두 번째 수정은 무시해도 됩니다. 파일을 수정하려면 GitHub에서 전체 프로젝트를 다운로드하거나 수정할 파일만 다운로드할 수 있습니다. GitHub에서 항목을 다운로드하는 방법은 [보조 편집기 도움말](/ko/help/github_assistant)을 참조하세요.

## 파일 보내기

변경 사항을 푸시하려면 두 가지 옵션이 있습니다. "편집장"인 경우 [편집장 도움말](/ko/help/github)에 자세히 설명된 대로 GitHub를 사용하세요. "보조 편집자"인 경우 수정된 Markdown 파일을 관리자의 이메일이나 urantiapedia@gmail.com으로 보내면 됩니다.

## 외부 링크

- [Urantiapedia 도구 - GitHub 프로젝트](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/github_diagrams_svg">다이어그램 가져오기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</figure>
