---
title: 백과사전의 번역 및 개정
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
        <td><a href="/ko/help/github_sourcebooks_markdown">계시자들이 사용했다고 주장하는 책 구하기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_topicindex_to_wiki">백과사전 변환</a></td>
      </tr>
    </tbody>
  </table>
</figure>

*백과사전*을 *우란티아피디아*의 모든 언어로 번역하고 검토하는 데 필요한 단계는 다음과 같습니다. 이 작업은 "편집장"이 수행합니다.

*백과사전*은 *우란시아 펠로우십*판 *우란시아 책*의 부록에서 파생된 TXT 파일 모음으로 구성되어 있습니다([주제 색인](https://urantia-book.org/urantiabook/topical_index/index.htm)).

> 중요: 이 작업을 실행하기 위해 현재 *우란티아피디아 도구*에서 *주제 색인 편집기*라는 개발이 진행 중입니다. 이 기능을 사용하면 편집이 더 쉽고 오류 발생 가능성이 줄어듭니다. 아래 섹션을 확인하세요.
{.is-info}

다른 언어로 새 백과사전을 만들려면 `input/txt/topic-index-en` 폴더에 있는 영어 버전의 백과사전부터 시작하세요. 해당 폴더를 복사하고 이름을 대상 언어로 변경하세요.

이 폴더에는 알파벳 각 글자(`a.txt`, `b.txt` 등)에 대한 파일과 숫자로 시작하는 항목들을 담은 `_.txt` 파일이 있습니다. 주제의 참조 순서는 항상 영어 순서와 같으므로, 각 파일에는 영어 첫 글자와 일치하는 주제들이 포함되어 있습니다. 예를 들어, 스페인어 주제 "Espíritu Infinito"는 영어 주제가 I("무한한 정신")로 시작하기 때문에 `i.txt` 파일에서 찾을 수 있습니다.

이 형식은 YAML 형식(https://en.wikipedia.org/wiki/YAML)과 약간 비슷하지만 편집하기가 매우 쉽도록 단순화되었습니다.

> 중요: 이 파일에는 탭이 포함되어 있으므로 탭 렌더링을 지원하는 텍스트 편집기로 편집해야 합니다. 권장 편집기는 Visual Studio Code(https://code.visualstudio.com/), Notepad++(https://notepad-plus-plus.org/) 또는 Sublime Text(https://www.sublimetext.com/)입니다.
{.is-info}

## 백과사전 TXT 형식

`a.txt` 파일의 발췌 부분은 다음과 같습니다.

```
<__________________________________________________________________________________
<
<                     A
< Urantia Book Uversa Press Topical index converted to text file
< Each entry has a previous blank line
< Entry = Name | Refs | See also | Category | OK (= revised)
< An entry can have one or several sub-entries (= the lines after entry)
< A sub-entry can have sub-sub-entries with tabs and so on
< Help: https://urantiapedia.org/ko/help/github_topicindex
<__________________________________________________________________________________

A-B-C the First; A-B-C the first | (77:8.2) | | PERSON | OK
it is the name of the first secondary midwayer of the first subgroup of eight subgroups that exists. Each subgroup are 248 brothers and sisters, childs of the same parents (77:6.4)

a priori assumptions | | doctrines | | OK
causation, duty, and worship constitute the a priori assumptions which make it possible for man to function as a rational and self-conscious personality (16:6.10)

Aaron (Old Testament); Aaron | | daughters of Aaron | PERSON | OK
Aaron was the older brother of Moses and the one who starred in the event of the golden calf, an idol with which the Israelites decided to represent Yahweh.
Peter talk about him in a preach (146:1.1)
> https://en.wikipedia.org/wiki/Aaron

...
```

각 파일은 다음으로 구성됩니다.
- `<`로 시작하는 줄의 내용을 설명하는 헤더. 파일 처리 시 이 줄은 무시됩니다.
- 주제 목록. 각 주제 앞에는 빈 줄이 있으며, 여러 줄로 구성됩니다.
    - 첫 번째 줄은 주제 설명과 `|`(세로 막대)로 구분된 값 또는 셀이 있는 짧은 표입니다. 값은 다음과 같습니다.
        - 주제 이름. 이름 뒤에 `;`로 구분된 하나 이상의 이름이 나타나는 경우, 해당 이름은 주제 이름 대신 *우란시아 서* 본문에서 검색될 별칭입니다. 첫 번째 이름은 항상 *우란티아백과*에서 해당 페이지의 제목으로 사용됩니다. `;`로 구분된 나머지 이름들은 첫 번째 이름에 더해져 *우란시아 서* 내에서 검색되어 해당 주제들로의 링크를 생성합니다.
        - 전체 주제의 *우란시아서*에 대한 일반 또는 전체 참조. 이 값은 비워둘 수 있습니다. 이러한 링크는 *우란티아백과*의 상단 "참고" 섹션에 링크 목록과 함께 표시됩니다.
        - 다른 주제로의 링크. 이 값은 비워둘 수 있습니다. 현재 주제와 관련된 하나 이상의 주제를 나타냅니다. 생성된 페이지 하단의 "링크" 섹션 목록에 나타납니다. 링크가 두 개 이상 있는 경우 `;`로 구분합니다. `:`를 사용하여 주제 내의 특정 섹션으로의 링크를 추가할 수 있습니다. 예를 들어 `baptism:Jesus baptism`은 주제 페이지 `baptism`을 가리키고, 그 안에는 예수 세례에 대한 섹션이 있는 링크입니다.
        - 주제 범주. 이 값은 비워둘 수 있습니다. 인물(PERSON), 장소(PLACE), 존재의 질서(ORDER), 종교(RELIGION), 인종(RACE)의 다섯 가지 범주가 있습니다. 이러한 범주를 사용하면 작업을 더 효율적으로 분리하고 색인을 생성하기 위해 해당 범주 중 하나만 선택하여 작업할 수 있습니다.
        - 상태. "편집장"은 주제 검토를 완료하면 `OK`라고 표시해야 합니다. 주제가 아직 검토 대기 중이면 비어 있게 됩니다.
    - 다음 줄이 있는 경우 주제 내용입니다. 이 줄들은 `|`(세로 막대)로 구분된 값이 있을 수도 있고 없을 수도 있는 짧은 표입니다. 표에는 두 가지 유형이 있습니다.
        - `|`(수직 막대)가 없는 단일 셀의 표: 이 표에는 *우란티아피디아* 페이지의 한 줄에 해당하는 텍스트가 포함되고, 텍스트 뒤에 괄호로 묶인 경우 *우란티아 책*의 문단에 대한 하나 이상의 참조가 포함됩니다.
        - `|` (수직 막대)로 구분된 두 개의 셀로 구성된 표. 첫 번째 셀은 단일 셀로 구성된 표와 동일한 내용을 담고 있고, 두 번째 셀은 `;`로 구분된 다른 주제로의 링크 목록을 담고 있습니다.
    - 주제 끝에 `>`로 시작하는 몇 개의 선택 줄을 추가합니다. 이 줄들은 다른 웹페이지로 연결되는 링크이며 "외부 링크" 섹션에 표시됩니다.

첫 번째 주제 이외의 각 줄에 대한 구성 규칙은 다음과 같습니다.
- 대문자로 시작하거나 마침표로 끝날 필요는 없습니다. 소프트웨어가 파일을 Wiki.js 형식으로 변환할 때 각 문장을 자동으로 대문자로 시작하고 마침표로 끝냅니다.
- 각 줄의 텍스트는 한 문장 또는 여러 문장일 수 있습니다. 여러 문장인 경우, 줄의 시작과 끝 부분만 수정되므로 중간에 마침표나 대문자를 넣어야 합니다.
- 각 줄의 텍스트에는 괄호가 포함되어서는 안 됩니다. 이 문자는 *우란시아서* 참조용으로 예약되어 있기 때문입니다.
- 각 줄의 시작 부분에 탭 문자를 사용할 수 있습니다. 각 탭 문자는 해당 줄이 탭 없이 바로 위에 있는 줄에 포함됨을 나타내며, 탭 문자는 섹션 또는 하위 섹션 제목 역할을 합니다.
- 줄은 `*` 또는 `#`로 시작하거나, 이 두 가지를 섞어서 번호 없는 목록, 번호 있는 목록, 그리고 혼합된 목록을 만들 수 있습니다. 아래 섹션을 참조하세요.

주제의 발췌 예시(파일 `a.txt`):
```
apostles of Jesus | (138) (145:4.1) (150:4) (158:0.2) (158:2.5) (172:5) (173:5.6) (184:2.2) (193:3.2) | apostleship | PERSON | OK
The apostles were the group of twelve followers with whom Jesus began his preaching
their names:
* Andrew | Andrew
* Simon Peter | Simon Peter
* James Zebedee | James Zebedee
* John Zebedee | John Zebedee
* Philip | Philip (Apostle)
* Nathaniel | Nathaniel (Apostle)
* Matthew Levi | Matthew Levi
* Thomas Didymus | Thomas Didymus
* James Alpheus | Alpheus twins
* Judas Alpheus
* Simon Zelotes | Simon Zelotes
* Judas Iscariot | Judas Iscariot
* Other known were Matthias and Paul, although the latest never met Jesus | Matthias; Paul
The Urantia Book gives detailed personal descriptions of each (139)
most were married, and some had several children (138:9.3)
all except the Alphaeus twins were graduates of synagogue schools (139:0.3-4)
most were rough fishermen (140:8.20)
they were not all the same in terms of schooling (139:0.3-4)
many carried swords (171:4.1) (172:0.3) (172:2.1) (172:5.2)
many were martyred | martyrs
organization
	their organization is detailed in The Urantia Book (138:10)
	Andrew was the chief (139:1.2)
	Peter, James, and John were Jesus' personal aids (138:10.3)
	Philip was the apostolic steward (139:5.3)
	Nathanael cared for the families of the apostles (139:6.7)
	the itinerary was managed by Thomas (139:8.5)
	Matthew was a fund-raiser (139:7.2)
	Simon was in charge of diversion and relaxation (139:11.2)
	The Alphaeus twins were the errand boys; those who took care of the multitudes (139:10.3)
	Judas Iscariot was treasurer (139:12.3)
	Matthias was chosen to take the place of Judas (192:0.2)
> https://en.wikipedia.org/wiki/Apostles_in_Christianity
```

이전 발췌문에서 우리는 다음을 볼 수 있습니다.
- [예수의 사도들](/ko/topic/apostles_of_Jesus) 주제와 관련된 콘텐츠입니다. 이 텍스트를 *Wiki.js*로 변환한 결과를 보려면 이 페이지로 이동하세요.
- 결과 페이지의 맨 위에 "참조"라는 표시가 추가되고, 그 뒤에 주제의 헤더에서 찾은 참조가 표시됩니다.
- 헤더에서 해당 주제에는 `사도직` 링크가 있고, 사도 목록이 있는 줄에는 `|` 기호와 사도들의 주제로 연결되는 링크가 있습니다. 이 링크들은 마지막에 추가된 "링크" 섹션에 있습니다.
- 주제의 유형은 사람(`PERSON`)과 관련이 있으며, 이 경우에는 예수의 사도들과 관련이 있습니다.
- `OK` 표시가 있는 것은 이 주제가 영어로 검토되었다는 것을 의미합니다.
- 순서 없는 목록을 만들려면 줄이 `*`로 시작해야 합니다.
- 많은 줄이 대문자로 시작하지 않거나 마침표로 끝나지 않는 점에 유의하세요. 이 문제는 페이지를 생성할 때 수정됩니다.
- 이 주제는 `조직`이라는 이름의 섹션을 생성합니다. 왜냐하면 그 줄 바로 아래 줄의 시작 부분에 탭 문자가 있기 때문입니다.
- `그들의 이름:`과 같은 줄은 단일 셀을 포함하고 참조를 포함하지 않는 줄입니다.
- `빌립은 사도적 집사였다(139:5.3)`와 같은 줄은 단일 셀로 구성된 줄이며 참조 내용이 하나 있습니다.
- `many were martyred | martyrs`와 같은 줄은 두 개의 셀로 구성된 줄이므로 두 번째 셀은 다른 주제로 연결되어야 합니다. 더 많은 주제를 사용하려면 `;`로 구분할 수 있습니다. 예를 들어 `many were martyred | martyrs; Simon Peter`와 같습니다.
- `매튜는 기금 모금자였다(139:7.2) | 매튜 레비`와 같은 줄(예시에 없는)은 두 개의 셀로 구성된 줄이 되는데, 첫 번째 셀은 참조를 담고 두 번째 셀은 링크입니다.
- 주제에 대한 외부 링크는 주제 끝에 추가되며, 각 줄의 시작 부분에 `>` 문자를 사용합니다. 위 예시는 사도에 대한 영어 위키백과로 링크를 연결하는 방법을 보여줍니다. `>` 문자로 시작하고 URL 앞에 공백을 두는 한 줄에 여러 링크를 추가할 수 있습니다.

> 중요: 줄의 텍스트에서 괄호 `(` `)`는 사용하지 마십시오. 괄호는 *우란시아서*에 대한 참조를 정의하는 데만 사용됩니다. 괄호 안에 내용을 표시해야 하는 경우, 쉼표 `,`를 사용하여 구분하는 텍스트로 변경하십시오.
{.is-info}

## 이름 및 별칭

헤더의 첫 번째 이름은 변환된 페이지의 주제 제목입니다. 이 이름이 참조되는 단락에 최대한 많이 나타나도록 하는 것이 중요합니다. 때로는 특정 이름이 *우란시아서*에서 여러 다른 표현으로 나타날 수 있습니다. 예를 들어 다음 헤더를 확인해 보세요.

```
absoluta; cosmic force; Cosmic force; space potency; Space potency; space energy; space-energy; mother force of space; space-force; force-charge of space; universal force-charge of space; force blanket; Primordial-force; Primordial force; space-force; universe force; space charge of universal force; force-charge of space; force-charge; power charge; cosmic-force; primal force | | | | OK
```

이 제목은 우주 에너지의 현현 중 하나인 `absoluta`에 관한 것입니다. 하지만 *우란시아서*에서는 이 명칭에 여러 가지 변형이 있습니다. 모든 변형은 기본 명칭 뒤에 `;`로 구분하여 추가되었습니다. 이 작업은 모든 *백과사전*에서 수행 및 검토되어야 합니다. 책에 대문자와 소문자로 이름이 나타나는 경우, 정확한 링크가 생성되도록 별칭 목록에 두 변형 모두 추가해야 합니다.

*주제 색인 편집기*는 이를 확인하는 데 큰 도움이 되는 도구입니다. 아래 섹션을 참조하세요.


## 목록

토픽 파일에 순서 없는 목록을 만들려면 각 줄의 시작 부분에 `*` 문자를 사용하세요. 순서 있는 목록의 경우 `#` 문자를 사용하세요. 혼합된 목록의 경우 두 문자를 함께 사용하세요. 몇 가지 예를 들면 다음과 같습니다.

```txt
Alexander the Great; Alexander | | | PERSON | OK
Facts about Alexander the Great mentioned in The Urantia Book
    * his campaign in Punjab introduced Aryan heritage to India (79:4.3)
    * his royal mausoleum at Alexandria was visited by Jesus (130:3.4)
    * The Samaritans assisted Alexander and that angered the Jews against them (143:4.2-3)
    * Alexander spread the Hellenistic civilization in the Middle East (195:1.7-10)
```
결과는 여기에서 확인하세요: [알렉산더 대왕](/ko/topic/Alexander_the_Great)

```
dual-origin beings | | Sons of God | ORDER | 
orders
    * A. descending orders
    *# Creator Sons
    *# Magisterial Sons
    *# Bright and Morning Stars
    *# Father Melchizedeks
    *# Melchizedek Sons
    *# Vorondadek Sons
    *# Lanonandek Sons
    *# Brilliant Evening Stars
    *# Archangels
    *# Life Carriers
    *# Unrevealed Universe Aids (30:1.41)
    *# Unrevealed Sons of God (30:1.42)
    * B. stationary orders
    *# abandonters
    *# susatia
    *# univitatia
    *# spironga
    *# unrevealed (30:1.48)
    * C. ascending orders
    *# ascending mortals
    *# Son-fused mortals
    *# Spirit-fused mortals
    *# translated midwayers | midwayers
    *# unrevealed ascenders (30:1.54)
```
결과는 여기에서 확인하세요: [이중 기원 존재](/ko/topic/dual-origin_beings)

목록은 섹션 헤더 아래에 있을 필요가 없으며, 시작 부분에 탭이 있어야 합니다. 위에서 사도 페이지 예시를 살펴보았습니다. 이 경우 목록은 이전 줄 아래에 생성됩니다.

## 모든 언어 동기화

모든 언어의 모든 파일을 동기화하여 같은 주제의 같은 줄이 모든 파일에서 같은 위치에 있도록 하는 것이 중요합니다. 한 언어로 된 파일에 콘텐츠를 추가할 때, 다른 모든 언어에서도 같은 콘텐츠가 같은 줄 번호에 있는지 확인하는 것이 중요합니다. 그렇지 않으면 Wiki.js로의 변환이 실패합니다.

VS Code처럼 여러 파일을 동시에 열 수 있는 텍스트 편집기에서 파일을 나란히 편집하는 것이 좋습니다. 흥미로운 VS Code 확장 프로그램으로는 *Sync Scroll*이 있는데, 이 확장 프로그램을 사용하면 여러 파일을 동시에 동기적으로 스크롤할 수 있습니다.

## 기여자는 무엇을 변경해야 합니까?

"편집장"의 경우 _백과사전_ 파일에서 변경할 수 있는 내용에 특별한 제한은 없습니다. 앞서 설명한 규칙을 따라야 하지만, 필요한 경우 어떤 변경이든 할 수 있습니다.

"보조 편집자"의 경우, 더 간단한 절차를 따르므로 몇 가지 제한 사항을 준수해야 합니다. "보조 편집자"는 다음 사항을 변경해서는 안 됩니다.
- 검토되지 않고 `OK` 표시가 없는 주제. 이 주제들은 그대로 두어야 합니다. 아직 작업이 필요할 수 있습니다. "편집장"이 주제를 검토하기 전까지는 "보조 편집자"가 해당 주제에 대한 작업을 수행해서는 안 됩니다.
- 주제의 첫 번째 줄에 글로벌 참조 또는 범주가 표시됩니다.
- 주제의 줄에 나타나는 *우란시아서*에 대한 참조나 다른 주제에 대한 참조.
- 줄의 순서.

"보조 편집자"가 이전 콘텐츠에서 오류를 발견하면 주제 파일과는 별도로 메모를 작성하여 보내야 합니다.

"보조 편집자"가 변경해야 하는 유일한 내용은 다음과 같습니다.
- 작업 언어가 영어와 스페인어가 아닌 경우, 주제의 첫 번째 줄에 나오는 이름이나 별칭. 영어와 스페인어 이름은 해당 언어에서 이미 검토되었습니다.
- 주제의 각 줄 내부의 텍스트.
- 위키피디아 페이지의 URL입니다.

Visual Studio Code를 사용하여 백과사전을 편집할 때 "보조 편집자"는 언어에 따라 두 가지 유형의 작업에 집중해야 합니다.
- 영어와 스페인어의 경우, 텍스트의 내용만 교정하면 됩니다.
- 다른 언어의 경우, 텍스트 번역. "편집자"는 기존 백과사전의 사본을 다른 언어, 가급적이면 영어로 작성하고, 번역 도구를 활용하여 텍스트를 최대한 빨리 번역해야 합니다.

## *주제 색인 편집기*

*주제 색인 편집기*는 개발 중인 도구이지만, 현재 상태에서는 _백과사전_ 검토 및 편집 작업에 도움이 됩니다. 이 소프트웨어는 설치가 필요하고 설정이 복잡하기 때문에 "보조 편집자"가 아닌 "편집장"에게만 제공됩니다. [GitHub 프로젝트 설정](/ko/help/github_setting)을 확인하세요.

접속 방법:
1. VS Code에서 프로젝트가 열린 상태에서 F5를 눌러 *Urantiapedia Tools*를 엽니다.
2. 두 개의 창이 열립니다. Dev Tools 인스턴스는 무시하세요. 디버깅을 위한 것입니다.
3. 사이드 패널에서 *주제 인덱스 편집*을 선택하세요.

![](/image/help/uptools_topic_editor.png)

*주제 색인 편집기*에는 4가지 주요 영역이 있습니다.
- 왼쪽에는 주제 목록이 있습니다.
- 원하는 언어를 설정하기 위한 선택기가 있습니다.
- 주제 콘텐츠 목록이 중앙에 있으며, 오류 메시지도 표시됩니다.
- 오른쪽에는 선택한 주제에서 참조하는 문단이 있는 *우란시아서* 내용이 표시됩니다.

앞으로 *주제 인덱스 편집기*를 사용하면 앱에서 바로 주제를 편집할 수 있게 되지만, 현재 제공되는 기능은 다음과 같습니다.
- 주어진 언어에 대한 주제 목록을 로드합니다.
- 주제를 범주, 첫 글자, 수정 여부, 오류가 있는지 여부로 필터링합니다.
- 주제의 내용을 보여줍니다.
- 주제의 주어진 줄에서 참조되는*우란시아서* 문단을 표시합니다.
- *우란시아서*에서 이름(또는 별칭)을 강조 표시하여 이름이 발견되는지 확인하세요.
- 주제에서 선택된 줄과 일치하는 *우란시아서*의 가장 좋은 문장을 강조 표시하고 복사를 허용합니다.

*주제 색인 편집기*를 사용하려면 다음 지침을 따르세요.
1. 상단 선택기 *주요 언어(수정)*에서 원하는 언어를 선택하세요. 보조 언어 선택기는 영어로 두세요. 몇 초 후에 주제가 로드됩니다.
2. 상단 선택기에서 *주제 글자*를 클릭하여 작업 중인 글자를 선택하세요. 해당 글자로 시작하는 영어 주제만 필터링되어 표시됩니다.
3. 목록에서 주제를 하나 선택하세요. 주제 줄이 있는 경우, 주제 콘텐츠 영역에 해당 줄이 채워집니다. 주제 줄은 선택한 두 언어로 상위 선택기에 나열되어 두 언어를 비교할 수 있습니다.
4. 주제에서 한 줄을 선택하세요. 해당 주제에서 참조하는 문단 목록이 *우란시아서* 콘텐츠 영역에 채워집니다.

*주제 색인 편집기*의 유용한 기능 중 하나는 주제에서 발견된 오류를 표시한다는 것입니다. 예를 들어, 아래 스냅샷에서 존재하지 않는 주제로 연결되는 링크가 발견되었습니다. 이제 VS Code로 이동하여 오류가 있는 파일을 확인하고 수정할 수 있습니다.

![](/image/help/uptools_topic_editor_2.png)

또 다른 유용한 기능은 *우란시아서* 텍스트에서 주제 이름이 강조 표시된다는 것입니다. 예를 들어, 주제 아래 스냅샷에서 영어로는 `인간의 형제애`, 스페인어로는 `인간의 형제들`이 발견되었지만, 스페인어 텍스트에서는 발견되지 않았습니다. 스페인어로 *우란시아서*에서 `인간의 형제들` 대신 `인간의 형제들`로 표기되어 있는 것을 확인할 수 있습니다. 두 단어는 같은 의미입니다. 따라서 이 문제를 해결하려면 주제에 `인간의 형제들`을 별칭으로 추가해야 합니다.

또한 유용한 기능은 선택한 짧은 줄(영어로는 `civilization encompased by love`, 스페인어로는 `civilización rodeada por el amor`)이 주제 줄에 참조된 *우란시아서* 단락에서 발견되었다는 것입니다. 단락에서 해당 줄과 가장 잘 일치하는 문장이 굵게 강조 표시되고 하단에 복사 버튼이 나타납니다. 이 버튼을 사용하여 문장을 클립보드에 복사한 후 VS Code에 붙여넣으면 주제의 텍스트를 더욱 설명적인 텍스트로 개선할 수 있습니다.

![](/image/help/uptools_topic_editor_3.png)

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
        <td><a href="/ko/help/github_sourcebooks_markdown">계시자들이 사용했다고 주장하는 책 구하기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_topicindex_to_wiki">백과사전 변환</a></td>
      </tr>
    </tbody>
  </table>
</figure>