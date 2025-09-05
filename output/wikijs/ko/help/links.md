---
title: "우란티아페디아 - 링크"
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
        <td><a href="/ko/help/websites">참고 자료 웹사이트</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/projects">더 넓은 범위에서의 프로젝트 맥락</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## 요약

이 문서에서는 우란티아페디아에서 항목 간 링크를 정의하고 생성하는 방법을 설명합니다. 또한 향후 링크 시스템의 개선 사항에 대해서도 논의합니다.

## Urantiapedia의 링크란 무엇입니까?

Urantiapedia의 링크는 결국 두 페이지 간 또는 두 페이지 내 두 앵커 간의 HTML 링크입니다. 같은 위치에 여러 링크가 있는 경우, 여러 개의 HTML 링크가 생성됩니다.

Urantiapedia는 HTML5와 Markdown 파일을 모두 지원하므로 링크는 HTML5 또는 Markdown 구문을 모두 사용할 수 있습니다. 두 구문 모두 유효합니다.

예를 들어, _우란시아서_는 HTML5로 되어 있고, 단락 0:2.10에는 _백과사전_의 두 가지 주제(하나님과 우주 아버지)에 대한 두 개의 링크가 있습니다.

```html
<p id="p2_9"><sup><small>0:2.9</small></sup> <i>문맥에 따라</i> — 특정 신의 차원이나 연합에 대한 논의에서 사용되는 경우. <a href="/es/topic/God">신</a>이라는 단어의 정확한 해석이 불분명할 경우, <a href="/es/topic/Universal_Father">우주적 아버지</a>를 지칭하는 것이 좋습니다.</p>
```

이 예는 페이지를 연결합니다: _우란시아 서_의 서문과 "하느님"과 "우주적 아버지"라는 주제에 대한 페이지입니다.

예를 들어, 학습 자료와 기사는 마크다운으로 작성됩니다. 다음은 윌리엄 새들러의 워크북 I 첫 번째 장에서 발췌한 내용입니다.

```markdown
**REFERENCE**: [UB 1:0.1](/en/The_Urantia_Book/1#p0_1) — “The Universal Father is...”
```

이 예시는 _우란시아 서_의 한 페이지(학습 자료의 한 장)를 한 단락(앵커)에 연결합니다. 앵커의 표준 방식인 `#` 문자와 고유 식별자(이 경우 `p0_1`)를 사용합니다. _우란시아 서_의 각 단락 또는 제목은 `p<section_index>_<par_index>` 패턴을 따르는 고유 ID와 앵커를 가지며, 책의 단락 이름을 지정하는 일반적인 규칙인 `<paper>:<section>.<paragrpah>`를 따릅니다.

## Urantiapedia에 무엇이 링크될 예정인가요?

다음 표는 현재 우란티아페디아에 생성하려는 링크를 요약한 것입니다. 앞으로 추가할 수 있는 링크 유형은 매우 다양합니다.

### :blue_book: 우란시아서

<div class="urantiapedia-table-wrapper">

코드 | 출발지 | 도착지 | 절차 | 상태 |
--- | --- | --- | --- | --- |
UB_B | 문단 각주 | 성경의 한 권(한 장에 한 구절) | _파라모니_([파라모니.txt](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/paramony/Paramony.txt))는 마크다운([우란티아 책.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paramony/The%20Urantia%20Book.md))으로 변환되고, 그 다음 JSON([우란티아 책](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/우란티아 책))으로 변환되고, 마지막으로 _우란티아피디아_에 로드되는 HTML로 변환됩니다. ([우란시아_책](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/ko/우란시아_책)) | :+1: |
UB_A | 문단 각주 | 기사(모든 위치) | Parallels 파일이 자동으로 생성됩니다([ub_paralells.tsv](https://github.com/JanHerca/urantiapedia/blob/master/input/txt/articles-en/ub_paralells.tsv)) | :+1: |
UB_S | 문단 각주 | 학습 자료의 장(모든 위치) | UB_A와 동일 | :+1: |
UB_O | 문단 각주 | 책의 장(특정 페이지) | Paralells 파일은 수동으로 생성됩니다([paralells.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/paralells.md)) | :+1: |
UB_TI | 문단 단어의 링크 | 백과사전 주제 페이지 | 참조를 포함하는 백과사전 TXT 파일이 사용됩니다([topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en)) | :+1: [1] |
UB_I | 이미지 삽입 [2] | - | 이미지 카탈로그가 사용됩니다([image_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/image_catalog.md)) | :+1: |
UB_D | 드롭다운 블록 [3] | 다이어그램 페이지 | 정의되지 않음 | :x: |
UB_P | 드롭다운 블록 | 프레젠테이션 또는 슬라이드 페이지 | 정의되지 않음 | :x: |
UB_M | 드롭다운 블록 | 지도 페이지 | 지도 카탈로그가 사용됩니다([map_catalog.md](https://github.com/JanHerca/urantiapedia/blob/master/input/markdown/en/map_catalog.md)) | :clock2: |
UB_3D | 확장 가능한 블록 | 3D 장면 페이지 | 정의되지 않음 | :x: |
UB_AU | 헤더의 오디오 제어 [4] | - | Urantiapedia 도구는 사용 가능한 언어로 오디오를 추가합니다.| :+1: |
UB_V | 확장 가능한 블록 | 내장된 YouTube 동영상 | 정의되지 않음 | :x: |

</div>

- [1] 링크 생성 알고리즘을 진행하여 생성되는 링크의 개수를 조절하고 있습니다.
- [2] 이미지는 실제로 링크가 아니지만, 이미지를 삽입하려면 이미지 카탈로그에 링크를 입력한 후 처리해야 합니다.
- [3] 드롭다운 블록은 문단 사이에 배치되어 확장되어 작은 이미지 크기의 요소를 표시하거나, 요소가 너무 큰 경우 해당 요소를 자세히 볼 수 있는 페이지로 연결되는 링크입니다.
- [4] _우란시아서_ 오디오는 실제로 링크가 아니지만, 이를 삽입하려면 사용 가능한 오디오 파일을 알려주는 소프트웨어 프로그램이 있으며, 이를 삽입하는 프로세스가 있습니다.

예:
- UB_B: https://urantiapedia.org/en/The_Urantia_Book/1#the-bible
- UB_A: https://urantiapedia.org/en/The_Urantia_Book/1#articles
- UB_S: https://urantiapedia.org/en/The_Urantia_Book/1#study-aids
- UB_O: https://urantiapedia.org/en/The_Urantia_Book/0#other-books
- UB_I: https://urantiapedia.org/en/The_Urantia_Book/11#p0_2 (이미지 예시)
- UB_M: https://urantiapedia.org/en/The_Urantia_Book/149#p0_1 (드롭다운 블록 예시)
- UB_AU: https://urantiapedia.org/en/The_Urantia_Book/10 (헤더 오디오 제어 예시)

<br>

### :closed_book: 성경

<div class="urantiapedia-table-wrapper">

코드 | 소스 | 목적지 | 프로시저 | 상태 |
--- | --- | --- | --- | --- |
B_UB | 구절 각주 | 우란시아 책(문단) | _파라모니_ ([bible-refs-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/bible-refs-en))가 마크다운([paramony](https://github.com/JanHerca/urantiapedia/tree/master/input/markdown/en/paramony))으로 변환된 다음 _우란티아페디아_([Bible](https://github.com/JanHerca/urantiapedia/tree/master/output/wikijs/en/Bible))에 로드되는 HTML로 변환됩니다. | 정의되지 않음 | :+1: |
B_A | 구절 각주 | 관사(모든 위치) | 정의되지 않음 | :x: |
B_S | 구절 각주 | 학습 자료의 장(모든 위치) | 정의되지 않음 | :x: |
B_O | 구절 각주 | 책의 장(모든 위치) | 정의되지 않음 | :x: |
B_TI | 시어 링크 | 백과사전 주제 페이지 | 정의되지 않음 | :x: |
B_I | 이미지 삽입 [1] | - | 정의되지 않음 | :x: |

</div>

- [1] _우란시아서_와 동일한 내용이 여기에 적용됩니다.
- [2] _우란시아서_와 동일한 내용이 여기에 적용됩니다.

예:
- B_UB: https://urantiapedia.org/en/Bible/Genesis/1#references

<br>

### :page_with_curl: 기사

<div class="urantiapedia-table-wrapper">

코드 | 소스 | 목적지 | 절차 | 상태 |
--- | --- | --- | --- | --- |
A_UB | 인용문이나 문단의 링크 | 우란시아 책(문단) | _책_에 대한 링크[1]를 수동으로 포함 | :+1: |
A_B | 인용문이나 문단의 링크 | 성경의 한 책(장의 한 구절) | A_UB와 동일 | :+1: |
A_A | 모든 링크 | 기사의 페이지 | A_UB와 동일 | :+1: |
A_S | 모든 링크 | 학습 자료의 페이지 | A_UB와 동일 | :+1: |
A_O | 모든 링크 | 책의 한 장(특정 페이지) | A_UB와 동일 | :+1: |
A_V | 모든 위치 | 내장된 YouTube 동영상 | 수동 링크 | :+1: |

</div>

예:
- A_UB: https://urantiapedia.org/en/article/A_Letter_to_Astronomers_and_Asphysicists (인용문 중 하나)
- A_B: https://urantiapedia.org/en/article/Sheila_Keene_Lund/Understanding_the_Relation_of_Love_to_the_Mind#love-defined (성경 고린도전서 링크)

<br>

### :노트북: 학습 보조 자료

<div class="urantiapedia-table-wrapper">

코드 | 출발지 | 도착지 | 절차 | 상태 |
--- | --- | --- | --- | --- |
S_UB | 인용문이나 문단 내 링크 | 우란시아서(문단) | A_UB와 동일 | :+1: |
S_B | 인용문이나 문단 내의 링크 | 성경의 한 권(한 장의 한 구절) | A_B와 동일 | :+1: |
S_A | 모든 링크 | 기사의 페이지 | A_A와 동일 | :+1: |
S_S | 모든 링크 | 학습 자료의 페이지 | A_S와 동일 | :+1: |
S_O | 모든 링크 | 책의 한 장(특정 페이지) | A_O와 동일 | :+1: |
S_V | 모든 위치 | 내장된 YouTube 동영상 | 수동 링크 | :+1: |

</div>

예:
- S_UB: https://urantiapedia.org/en/article/William_S_Sadler/Workbook_1_Foreword_and_Part_I/1#i-ub-101-the-universal-father-is
- S_B: https://urantiapedia.org/en/article/William_S_Sadler/Consideration_some_criticisms_Urantia_Book

<br>

### :books: 책

<div class="urantiapedia-table-wrapper">

코드 | 출발지 | 도착지 | 절차 | 상태 |
--- | --- | --- | --- | --- |
O_B | 인용문이나 문단 내의 링크 | 성경의 한 권(한 장의 한 구절) | A_B와 동일 | :x: |

</div>

<br>

### :card_index: 백과사전

<div class="urantiapedia-table-wrapper">

코드 | 소스 | 목적지 | 절차 | 상태 |
--- | --- | --- | --- | --- |
TI_UB | 문단 각주 또는 "참고" | 우란시아서(문단) | UB_TI와 동일하지만 역순입니다. _백과사전_의 TXT 파일을 사용하며, 이 파일에는 참조가 포함되어 있습니다. ([topic-index-en](https://github.com/JanHerca/urantiapedia/tree/master/input/txt/topic-index-en)) | :+1: |
TI_B | 문단 각주 | 성경의 한 책(장의 구절) | 정의되지 않음 | :x: |
TI_A | 문단 각주 | 문서의 페이지 | 정의되지 않음 | :x: |
TI_S | 문단 각주 | 학습 자료의 장 | 정의되지 않음 | :x: |
TI_TI | "참조" 섹션 | _백과사전_ 페이지의 다른 페이지 또는 섹션 | 위에 언급된 TXT 파일이 사용됩니다 | :+1: |
TI_I | 이미지 삽입 | - | 이미지에 대한 링크는 TXT 파일에 수동으로 포함됩니다 | :clock2: |
TI_D | 드롭다운 블록 | 다이어그램 페이지 | 정의되지 않음 | :x: |
TI_P | 드롭다운 블록 | 프레젠테이션 또는 슬라이드 페이지 | 정의되지 않음 | :x: |
TI_M | 드롭다운 블록 | 맵 페이지 | 정의되지 않음 | :x: |
TI_3D | 드롭다운 블록 | 3D 장면 페이지 | 정의되지 않음 | :x: |
TI_V | 모든 위치 | 내장된 YouTube 동영상 | 정의되지 않음 | :x: |

</div>

예:
- TI_UB: https://urantiapedia.org/en/topic/Abraham_(Old_Testament)#references

<br>

### :memo: 다이어그램

<div class="urantiapedia-table-wrapper">

코드 | 출발지 | 목적지 | 절차 | 주 |
--- | --- | --- | --- | --- |
D_UB | 다이어그램의 링크 | 우란시아서(단락) | 수동으로 추가된 링크 | :clock2: |

</div>

예:
- D_UB: https://urantiapedia.org/en/article/The_Kingdom_of_Heaven_Revelation_Nebadon_Chart (다이어그램 상자 중 하나)

<br>

### :bar_chart: 프레젠테이션

<div class="urantiapedia-table-wrapper">

코드 | 소스 | 목적지 | 절차 | 상태 |
--- | --- | --- | --- | --- |
P_UB | 슬라이드 링크 | 우란시아서(단락) | 정의되지 않았지만, 아마도 수동으로 링크를 추가할 것임 | :x: |

</div>

<br>

### :earth_americas: 지도

<div class="urantiapedia-table-wrapper">

코드 | 출발지 | 도착지 | 절차 | 상태 |
--- | --- | --- | --- | --- |
M_UB | 사이드바 링크 | 우란시아서(단락) | KML 파일 내의 수동 링크 | :x: |
M_TI | 사이드바 링크 | 백과사전 페이지 | KML 파일 내 수동 링크 | :x: |

</div>

예:
- M_TI: https://urantiapedia.org/en/map/The_Preaching_of_Jesus_Second_Galilee_Tour (아이콘을 클릭하면 링크가 있는 패널이 열립니다)

<br>

### :milky_way: 3D 장면

<div class="urantiapedia-table-wrapper">

코드 | 출발지 | 도착지 | 절차 | 상태 |
--- | --- | --- | --- | --- |
3D_UB | 3D 요소의 링크 | 우란시아서(문단) | 정의되지 않음 | :x: |

</div>

<br>

## 링크 복사 방법

모든 브라우저에서 링크를 마우스 오른쪽 버튼으로 클릭하거나 탭하여 복사할 수 있습니다. 페이지 자체를 복사하려면 주소 입력란에 입력하면 됩니다.

Urantiapedia에서는 잘 알려지지 않은 유용한 팁 중 하나는 페이지 헤더의 링크를 복사하는 것입니다. 헤더 위에 마우스를 올리면 오른쪽에 `¶` 기호가 나타나는데, 마우스 오른쪽 버튼을 클릭하면 해당 링크가 복사됩니다.

## 우란시아서에 대한 독특한 글로벌 참조 시스템

_우란시아서_가 1955년에 처음 출판된 이래, 이 영어 원문은 독자들의 저작물과 기사에서 수없이 인용되어 왔습니다. _우란시아서_를 인용하는 전통적인 방식은 초판(일반적으로 표준판이라고 함)의 페이지와 단락을 명시하는 것이었습니다. 인코딩은 `<페이지_번호>.<단락_순서>`였습니다.

_우란시아서_를 이렇게 인용하는 것은 이미 초기에 발견했어야 할 문제를 야기합니다. 번역본과 다양한 종이 판본에서 페이지 수와 단락의 위치가 일정하게 유지되지 않습니다. _우란시아서_를 읽는 전 세계 독자들에게 정확한 출처를 표시하기 위해 영어 초판을 제공하도록 강요하는 것은 합리적이지 않습니다.

이 책이 여러 판본으로 번역되고 출판됨에 따라, 문서 색인, 해당 절의 색인, 그리고 절 내 단락 색인을 기반으로 하는 _우란시아 책_에 대한 단일 글로벌 참조 체계를 구축해야 할 필요성이 대두되었습니다. 이러한 방식으로 각 단락에 고유 식별자가 부여되었으며, 이를 통해 누군가 인용하거나 참조한 내용으로 쉽고 빠르게 이동할 수 있습니다. 인코딩은 현재 일반적으로 `<문서>:<절>.<단락>` 형식으로 작성됩니다.

세월이 흘러도 많은 웹사이트와 출판사들이 여전히 기존의 참고문헌 체계를 고수하고 있다는 점은 놀랍습니다. 때로는 유일한 참고문헌으로, 때로는 새로운 참고문헌을 보완하는 용도로만 활용하기도 합니다. 이는 영어 사용에 지나치게 치중하는 출판사들이 여전히 많다는 것을 분명히 보여줍니다. 참고문헌을 중복해서 사용하면 더 많은 작업이 필요하고 특정 영어판 독자에게만 유용하기 때문입니다.

우란티아페디아의 기본 원칙 중 하나는 [세계화](/ko/help/principles#principle-i-multi-language)입니다. 이 웹사이트는 한 언어나 몇몇 언어만을 위해 설계되지 않았습니다. 이 웹사이트의 목적은 모든 콘텐츠를 원하는 모든 언어로 차별 없이 제공하는 것입니다. _우란시아서_를 인용할 때마다 두 개의 참고 문헌을 삽입하는 것은 불필요한 노력을 기울이는 것이며, 다국어 용량 원칙에도 어긋납니다. 이러한 이유로 우란티아페디아 이사회는 _우란시아서_에 대한 모든 링크에 현재 모델을 충실히 따르는 단일하고 통일된 참고 문헌 제공 시스템을 채택하기로 처음부터 결정했습니다. 동일한 방식으로 제공되지 않는 다른 언급이나 참고 문헌은 링크를 통일된 방식으로 유지하도록 수정되었습니다.

우리는 오래된 콘텐츠에 대한 이러한 수정이 전 세계 독자들에게 혼란을 줄이고 의견 교환을 용이하게 하는 단일 시스템을 제공하는 데 필요하다고 믿습니다.


<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/websites">참고 자료 웹사이트</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/projects">더 넓은 범위에서의 프로젝트 맥락</a></td>
      </tr>
    </tbody>
  </table>
</figure>