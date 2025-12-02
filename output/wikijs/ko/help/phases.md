---
title: 우란티아페디아의 이정표
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
        <td><a href="/ko/help/content">우란티아피디아 콘텐츠</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/languages">지원 언어</a></td>
      </tr>
    </tbody>
  </table>
</figure>

*Urantipedia*에 포함될 각 언어에 대한 작업은 다음과 같은 단계별로 진행됩니다. 각 단계마다 수행해야 할 작업, 편집해야 할 부분, 그리고 공동 작업자의 역할이 여기에 포함됩니다.

## 이정표 I - 우란시아서와 성경

이 단계에서는 해당 언어로 *우란티아피디아*를 출시하는 데 필요한 최소한의 콘텐츠만 포함됩니다. 여기에는 *우란시아서*와 *성경*이 포함되며, 두 자료가 서로 연결되어 *우란시아서*에서 *성경*으로, 그리고 그 반대로 연결될 수 있도록 합니다.

*성경*에 대한 링크를 만들기 위해 Duane L. Faw의 *Paramony*를 사용하고 있습니다. 이 파일에는 *성경*과 *우란시아서* 간의 상호 참조가 포함되어 있습니다.

https://urantia-book.org/urantiabook/paramony/


작업 | 위치 | 누구
--- | --- | ---
Wiki.js로 파일 변환기 개발 | GitHub | 개발자
각 *우란시아서* 논문을 *성경* 링크가 있는 페이지로 변환 | GitHub | 편집장
각 *성경* 장을 *우란시아서* 링크가 있는 페이지로 변환 | GitHub | 편집장
Wiki.js 형식의 파일 대량 로드 | GitHub | 관리자

> 이 단계는 28개 언어에 대해 완료되었습니다.
{.is-success}

## 마일스톤 II - 신문 도서관, 우란시아 도서관 및 백과사전

이 단계에서는 *우란티아페디아*의 내용을 다음 영역으로 확장합니다.
- **신문 자료실**: *우란시아서* 관련 기사 및 학습 자료. [우란시아 재단](https://www.urantia.org/) 웹사이트, [펠로우십](https://urantiabook.org/), 우란시아 협회 및 개별 웹사이트에 다양한 자료가 있습니다. 저자의 명시적인 허가 없이는 어떠한 콘텐츠도 게시되지 않습니다. 콘텐츠는 공개판(모든 편집자가 수정할 수 있음)과 비공개판(저자 또는 저자가 허가한 사용자만 수정할 수 있음) 두 가지 방식으로 업로드할 수 있습니다. 기사에는 이미지가 포함될 수도 있습니다.
- **도서관**. 세계 주요 종교의 종교 서적, 독자 서적, 그리고 *성경* 외에 *우란시아서*의 일부에서 계시자들이 사용한 것으로 의심되는 책들. 예를 들어, 매튜 블록은 이 자료를 찾는 데 매우 능숙한 독자입니다. https://urantiabooksources.com/
- **백과사전**. *우란시아 펠로우십*에서 *우란시아서* 영문판을 위해 제작한 색인을 참고 자료로 활용하고 있습니다. 이 색인은 간략한 주석만 포함하고 있어, 각 주제 페이지의 초기 버전으로 사용될 전문을 확장하고 있습니다. https://urantia-book.org/urantiabook/topical_index/index.htm
- **색인**은 이전 콘텐츠에 대한 진입점 역할을 하는 링크 목록이 있는 페이지입니다.


작업 | 위치 | 누구
--- | --- | ---
책과 기사를 Wiki.js로 변환하는 개발 | GitHub | 개발자
*백과사전* 작업 속도를 높여주는 마법사인 *주제 색인 편집기* 개발 | GitHub | 개발자
*백과사전*을 *우란시아서*에 대한 링크가 있는 페이지로 변환하는 개발 | ​​GitHub | 개발자
책과 출처에 연결된 기사와 연구 추가 | GitHub | 편집장
*성경* 외의 책 추가 | GitHub | 편집장
*백과사전*에 콘텐츠 추가 | GitHub | 편집장
사람, 존재, 장소, 성경 출처, 참고 문헌, 인용문, 연대기 등의 색인 추가 | GitHub | 편집장
Wiki.js 형식의 파일 대량 업로드 | GitHub | 관리자

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/help/sample_page_article.png">
<figcaption><em>기사 렌더링 샘플.</em></figcaption>
</figure>

> 이 단계는 3개 언어(영어, 스페인어, 프랑스어)에 대해 완료되었습니다.
{.is-success}

## 마일스톤 III - 번역가

이 단계는 개발 전용입니다. 다음 콘텐츠가 통합되었습니다.
- **Urantiapedia Tools_의 여러 페이지를 여러 언어로 한 번에 자동 번역하는 애플리케이션**입니다. 이 도구는 다음과 같은 기능을 제공합니다.
  - Google Cloud Translator와 같은 서비스에 연결하여 텍스트 번역을 수행할 수 있습니다.
  - 페이지 스타일과 서식(마크다운 및 HTML)의 무결성을 유지합니다.
  - *우란시아서*와 *성경*에서 발췌한 내용을 원본이나 기존 번역본에서 복사하고 번역하지 않음으로써 텍스트의 무결성을 유지하고 번역 비용을 절감합니다.
  - 서비스를 이용할 때 번역 비용을 미리 알 수 있습니다.
- **다중 번역본으로 제공되는 우란시아서**. 원본 영어 버전과 제공되는 번역본(하나 이상)을 볼 수 있습니다.


작업 | 위치 | 누구
--- | --- | ---
_Urantiapedia Tools_에서 대용량 페이지 번역기 개발 | GitHub | 개발자
여러 번역본으로 된 *우란시아서*의 표시 모드 개발 | GitHub | 개발자

<figure id="Sample_fig_2" class="image urantiapedia">
<img src="/image/help/sample_page_side_by_side.png">
<figcaption><em> 유란시아서를 나란히 렌더링한 샘플</em></figcaption>
</figure>

> 이 단계가 완료되었습니다.
{.is-success}

## 마일스톤 IV - 확장, 수정, 지도 라이브러리 및 미디어 라이브러리

현재 프로젝트는 새로운 단계에 있으며, 다음 분야에서 작업이 진행될 예정입니다.
- 이전 단계의 콘텐츠에 대한 **확장**
- **수정 사항**. 대부분의 콘텐츠가 가능한 한 자동화를 활용하여 빠르게 도입되었기 때문에 시간이 지남에 따라 수정될 버그와 오류가 많습니다.
- **지도 라이브러리**. *우란시아서*에서 제공하는 지리적 정보를 명확하게 보여주는 대화형 및 고정형 지도 모음입니다.
- **미디어 라이브러리**: 여기에는 다음과 같은 항목을 포함하여 다양한 시청각 자료가 보관됩니다.
  * 우란시아서를 설명하는 개념의 그림이나 사진.
  * 매우 큰 다이어그램이나 구성표는 대화형으로 만들어져서 작은 기기에서도 볼 수 있습니다.
  * 슬라이드쇼.
  * 3D 모델은 각각 별도의 페이지에 있으며, 정적이거나 지도처럼 대화형일 수 있습니다.
  * 우란시아서 오디오 버전.
  * 사이트에 내장된 비디오 모음이거나, 그것이 불가능한 경우 우란시아서에 대한 과정이나 설명을 담은 비디오 링크입니다.

_지도 라이브러리_는 인터랙티브 지도를 표시하는 솔루션 개발이 필요합니다. 지도가 정적 이미지 기반이든 인터랙티브 콘텐츠 기반이든, 세부 정보를 표시하거나 전체 개요를 보기 위해 지도를 확대/축소할 수 있는 기능을 두 가지 모두 모색할 것입니다. [Google 지도](https://www.google.com/maps) 및 [Google 어스](https://www.google.com/intl/es/earth/)와 같은 상용 솔루션이 있으며, 이러한 솔루션은 Google의 독점 형식([KML](https://developers.google.com/kml/documentation))을 사용합니다. 그러나 이 단계에서는 절대적으로 필요한 경우가 아니면 기술적 종속성을 피하기 위해 다른 오픈소스 대안도 연구할 것입니다.

_맵 라이브러리_에서 개발할 기능은 다음과 같은 기능을 허용해야 합니다.
- 확대/축소: 지도를 확대/축소합니다. 이 기능은 지도가 정적 이미지이든 동적 이미지이든 항상 사용할 수 있어야 합니다. 다음 기능은 동적 지도에서만 사용할 수 있습니다.
- 기본 레이어의 렌더링(최신 거리 지도, 위성 지도, 입체 지도 등 여러 개가 바람직함).
- 다양한 시각적 스타일(아이콘, 두께, 색상)을 적용한 벡터 요소(점, 선, 다각형) 렌더링.
- 다른 *우란티피디아* 또는 외부 페이지로의 링크가 포함될 수 있는 텍스트가 있는 팝업 주석.
- 가이드 투어, 즉 카메라가 한 위치에서 다른 위치로 움직이고 콘텐츠나 주석이 표시되거나 숨겨지는 연결된 애니메이션 컬렉션입니다.
- 가이드 투어와 관련이 있든 없든, 예를 들어 여행 일정을 보여주거나 인종 이주를 시각화할 수 있는 기하 애니메이션입니다.


<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/help/sample_page_map.jpg">
<figcaption><em>대화형 지도 렌더링 샘플.</em></figcaption>
</figure>

_미디어 라이브러리_는 _우란티아피디아_에서 인터랙티브 프레젠테이션을 지원하는 개발도 필요합니다. 단순히 사용자가 외부에서 다운로드하여 볼 수 있도록 PowerPoint나 PDF 파일에 연결하는 것은 바람직하지 않습니다. 모든 언어로 콘텐츠를 제공하고 _우란티아피디아_의 다른 콘텐츠와 연결되기를 바랍니다. 기술적인 종속성을 유발하는 독점 형식을 사용하는 것은 쉽지 않습니다. 따라서 표준 형식을 기반으로 하면서도 다양한 기능을 제공하는 대안을 모색할 것입니다.

몇 가지 대안은 다음과 같습니다.
- [Google 문서](https://docs.google.com/).
- [프레지](https://prezi.com/).
- [Impress.js](https://impress.js.org/) ([GitHub](https://github.com/impress/impress.js)) + [호버크래프트](https://regebro.github.io/hovercraft) ([GitHub](https://github.com/regebro/hovercraft))
- [Bespoke.js](https://markdalgleish.com/projects/bespoke.js/) ([GitHub](https://github.com/bespokejs/bespoke)).
- [Reveal.js](https://revealjs.com/) + [해커 슬라이드](https://github.com/jacksingleton/hacker-slides).
- [산사태](https://github.com/adamzap/landslide).


<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/help/sample_page_slides.png">
<figcaption><em>프레젠테이션 렌더링 샘플.</em></figcaption>
</figure>

_미디어 라이브러리_의 일부로 3D 장면도 포함될 예정입니다. 다행히 3D 모델 분야에는 이러한 3D 장면을 제작할 수 있는 공개 표준이 있습니다. 바로 [Khronos](https://github.com/KhronosGroup/glTF) 그룹의 [glTF](https://www.khronos.org/api/index_2017/gltf)입니다. JPG 형식과 유사하지만 3D 세계에 속합니다. 이 표준의 위력은 다음 예시 웹사이트에서 확인할 수 있습니다.

https://github.khronos.org/glTF-샘플-뷰어-릴리스/

이 형식은 다양한 애플리케이션에서 널리 사용되고 지원되며, 온라인 glTF 편집기와 뷰어가 이미 존재합니다.
- [스케치팹](https://sketchfab.com/)
- [플레이캔버스](https://playcanvas.com/).
- [Babylon.js](https://www.babylonjs.com/).
- [Three.js](https://threejs.org/) + [에디터](https://threejs.org/editor/)
- [WebGL Studio](https://webglstudio.org/) + [litescene.js](https://github.com/jagenjo/litescene.js).


<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/help/sample_page_3d.jpg">
<figcaption><em>3D 모델 렌더링 샘플.</em></figcaption>
</figure>

작업 | 위치 | 누구
--- | --- | ---
대화형 지도 표시 시스템 개발 | GitHub | 개발자
프레젠테이션 디스플레이 시스템 개발 | GitHub | 개발자
대화형 3D 모델 디스플레이 시스템 개발 | GitHub | 개발자
인종 이동, 역사적 사실, 나사렛 예수의 여정에 대한 샘플 대화형 지도 모음 추가 | GitHub | 편집장
일부 협회 웹사이트에서 제공되는 지도를 활용한 프레젠테이션 모음 추가 | GitHub | 편집장
대화형 다이어그램 또는 스키마 컬렉션 추가 | GitHub | 편집장
파라다이스 아일랜드, 건축 구체, 에덴 동산 등 3D 모델 컬렉션 추가 | GitHub | 편집장
우란시아서 오디오 제작 | GitHub | 편집장
내장된 비디오 또는 비디오 링크 컬렉션 추가 | GitHub | 편집장

> 이 단계는 현재 진행 중입니다.
{.is-warning}


## 외부 링크

- [Urantiapedia 도구 - GitHub 프로젝트](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub 프로젝트](https://github.com/JanHerca/urantiapedia-backup)
- [우란시아 재단](https://www.urantia.org/)
- [블루 필즈](https://blue-fields.netlify.app/)
- [위키.js](https://js.wiki/)


<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/content">우란티아피디아 콘텐츠</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/languages">지원 언어</a></td>
      </tr>
    </tbody>
  </table>
</figure>