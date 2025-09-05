---
title: 우란티아페디아 콘텐츠
description: 
published: true
date: 2021-12-08T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/principles">우란티아페디아를 지배하는 원칙</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/phases">프로젝트 이정표</a></td>
      </tr>
    </tbody>
  </table>
</figure>

*우란티피디아*에 기대되는 모든 유형의 콘텐츠에 대한 자세한 설명은 다음과 같습니다. 콘텐츠에 접근하는 방법, 구성하는 방법, 누가 변경할 수 있는지에 대한 설명입니다.

## 콘텐츠가 어떻게 구성되는지

[우란티아피디아](https://urantiapedia.org)의 다른 위키와 마찬가지로, 각 페이지에는 고유한 제목과 URL이 있습니다. 예를 들면 다음과 같습니다.
* https://urantiapedia.org/en/The_Urantia_Book/156은 영어로 된 우란시아서 156쪽의 URL입니다.
* https://urantiapedia.org/es/article/Norm_Duval/How_big_is_Orvonton은 스페인어로 된 오르본톤에 대한 기사가 있는 페이지의 URL입니다.
* https://urantiapedia.org/fr/topic/Andrew는 프랑스어로 된 사도 앤드류에 대한 페이지의 URL입니다.

각 페이지는 기사, 책의 장, 책의 색인 페이지, 다른 페이지로 연결되는 색인 그룹 링크 등일 수 있습니다. 페이지 구성은 사용자의 창의성에 달려 있으며, 필요에 따라 언제든지 수정할 수 있습니다. 하지만 페이지를 만든 후에는 영구적으로 유지하고 필요한 경우 리디렉션을 사용하는 것이 좋습니다.


## 사용자 그룹

이 표는 웹 내 사용자 그룹을 요약한 것입니다.

그룹 | 그룹의 사용자에 대한 설명
--- | ---
ADMIN | 모든 작업을 수행할 수 있는 사용자
편집자(1) | ADMIN 사용자가 요청이 검증되고 책, 기사 및 학습 자료, 슬라이드, 지도, 3D 모델 및 자산(이미지, 오디오, 비디오)을 편집하도록 권한을 부여한 사용자입니다.
AUTHOR(2) | 자신의 이름을 가진 그룹 내의 사용자로, 사용자가 작성한 책, 기사 등의 제한된 컬렉션에 대해서만 편집자 역할을 합니다.
검토자 | 페이지를 보고, 기록을 보고, 댓글을 남길 수 있는 사용자입니다.
사용자 | 등록되지 않은 모든 사용자. 페이지 보기 전용입니다.

(1) 프로젝트 초기 단계에서는 일부 콘텐츠 유형은 *Urantiapedia 도구*를 사용하여 *Urantiapedia* 웹 외부의 *편집자*라고 불리는 사용자만 편집할 수 있습니다. 프로젝트의 각 마일스톤에 초기 콘텐츠가 업로드되면 *Urantiapedia 도구*는 더 이상 사용되지 않으며, EDITOR 그룹의 사용자는 이 웹을 통해 콘텐츠를 편집할 수 있습니다.

(2) AUTHOR는 AUTHOR 유형의 그룹이 여러 개 있고, 각 그룹에는 해당 페이지의 작성자(또는 작성자에게 권한을 부여받은 사용자)가 포함된다는 것을 의미합니다. 예를 들어 Han Solo와 Obi Wan이라는 두 사용자가 작성자가 되고 싶어 하는 경우 HANSOLO와 OBIWAN이라는 쌍의 그룹이 있는데, 첫 번째 그룹은 Han Solo 사용자이고 두 번째 그룹은 Obi Wan 사용자입니다. 첫 번째 사용자는 `/en/article/hansolo/`(및 영어 이외의 다른 로케일), `/en/slides/hansolo` 등과 같은 경로에서 페이지를 편집할 수 있는 유일한 사용자입니다. 반면 Obi Wan 사용자는 `/en/article/obiwan/`, `/en/slides/obiwan/` 등과 같은 경로에서 페이지를 편집할 수 있습니다. 이렇게 하면 일부 사용자가 특정 페이지의 유일한 편집자가 됩니다.

링크가 끊어지지 않도록 페이지를 삭제할 수 있는 사용자는 ADMIN 또는 AUTHOR 사용자뿐입니다. 따라서 페이지 삭제 절차는 다음과 같습니다.
1. 창조:
  - EDITOR 또는 AUTHOR 사용자는 이 사이트에서 직접 페이지를 생성하거나
  - ADMIN 사용자는 대량 업로드 프로세스를 통해 한 번에 여러 페이지를 생성합니다(ADMIN 사용자는 GitHub를 사용하여 EDITOR 및 AUTHOR 사용자의 도움을 받을 수 있습니다)
2. 에디션:
  - EDITOR 또는 AUTHOR 사용자는 이 사이트에서 직접 페이지를 편집하거나
  - ADMIN 사용자는 대량 업로드 프로세스를 통해 여러 페이지를 한 번에 편집합니다(ADMIN 사용자는 GitHub를 사용하여 EDITOR 및 AUTHOR 사용자의 도움을 받을 수 있습니다)
3. 삭제 또는 이동(필요한 경우):
  - ADMIN 사용자는 링크된 모든 페이지가 업데이트되도록 페이지를 삭제하거나 이동합니다.
  - AUTHOR 사용자는 자신이 소유한 폴더 내에 있는 페이지를 삭제하거나 이동합니다.

## 페이지 유형

이 표는 페이지 유형을 요약한 것입니다. 표는 페이지 유형을 편집하는 데 필요한 최소 사용자 그룹을 보여줍니다. ADMIN 사용자는 모든 작업을 수행할 수 있으므로 표에 EDITOR 또는 AUTHOR라고 표시되면 ADMIN도 포함된다는 것을 의미합니다. AUTHOR 사용자라고 표시되면 해당 유형의 사용자가 여러 명 있으며, 각 사용자는 지정된 폴더 내의 페이지를 관리하고 편집 권한을 가진 유일한 사용자임을 의미합니다.

이 표는 영어 URL을 얻기 위해 [https://urantiapedia.org](https://urantiapedia.org) 도메인에 추가할 URL 경로를 보여줍니다. 다른 언어의 경우 언어 코드를 원하는 코드로 바꾸세요. 예를 들어, *우란시아서* 색인을 얻는 URL은 다음과 같습니다.
- 영어: https://urantiapedia.org/en/The_Urantia_Book/Index
- 스페인어: https://urantiapedia.org/es/The_Urantia_Book/Index

URL에 대한 자세한 내용은 아래 섹션을 참조하세요.

유형 | 설명 | 생성 | 수정 | 삭제 | URL
--- | --- | --- | --- | --- | ---
웹페이지 | 시작 페이지, 도움말 페이지, 로드맵과 같은 위키 자체 페이지 | 관리자 | 관리자 | 관리자 | /ko/help/
BOOK_UB | 우란시아 책 | 관리자 | 관리자 | 관리자 | /ko/우란시아_책/
BOOK_BIBLE | 성경 | 관리자 | 관리자 | 관리자 | /ko/성경/
BOOK_AUTHORED | 저자 사용자의 책 | AUTHOR | AUTHOR | AUTHOR | /ko/book/user_name/book_title/
BOOK_PUBLIC | 누구나 편집할 수 있는 책 | EDITOR | EDITOR | ADMIN | /ko/book/author/book_title/
주제 | 우란시아서에 언급된 용어, 주제 또는 개념 | 관리자 | 편집자 | 관리자 | /ko/topic/topic_name/
INDEX | 링크 모음이 있는 페이지 | 관리자 | 편집자 | 관리자 | /ko/index/index_name
ARTICLE_AUTHORED | 작성자 user의 기사 | AUTHOR | AUTHOR | AUTHOR | /ko/article/user_name/article_title
ARTICLE_PUBLIC | 누구나 편집할 수 있는 기사 | EDITOR | EDITOR | ADMIN | /ko/article/author/article_title
SLIDES_AUTHORED | 작성자의 슬라이드 | AUTHOR | AUTHOR | AUTHOR | /ko/slides/user_name/slides_title
SLIDES_PUBLIC | 누구나 편집할 수 있는 슬라이드 | EDITOR | EDITOR | ADMIN | /ko/slides/slides_title
MAPS_AUTHORED | 작성자의 지도(1) | AUTHOR | AUTHOR | AUTHOR | /ko/map/user_name/map_title
MAPS_PUBLIC | 누구나 편집할 수 있는 맵(1) | EDITOR | EDITOR | ADMIN | /ko/map/map_title
3DMODEL_AUTHORED | 작성자의 3D 모델 | AUTHOR | AUTHOR | AUTHOR | /ko/3dmodel/user_name/3dmodel_name
3DMODEL_PUBLIC | 공개 3D 모델 | EDITOR | EDITOR | ADMIN (2) | /ko/3dmodel/3dmodel_name
IMAGE | 그림이나 그래프 스키마 또는 일러스트레이션인 이미지 | 편집자 또는 작성자 | 편집자 또는 작성자 | 관리자(3) | /ko/image/image_name

1. 지도는 2D 또는 3D로 구성될 수 있으며 다음을 포함할 수 있습니다.
   - 위치를 보여주는 팝업이 있는 지점 표시. 팝업에는 위키 또는 외부 링크가 포함될 수 있습니다.
   - 경로: 여러 개의 경로 지점과 각 지점에 팝업이 표시되어 사람이 이동하는 모습을 보여줍니다. 이 경로는 애니메이션으로 표시할 수 있습니다.
   - 지역: 제국이나 국가처럼 구체적인 위치가 정해지지 않은 곳의 위치를 ​​보여주는 다각형입니다.
2. 3D 모델은 해당 모델에 링크된 다른 페이지가 없는 경우에만 삭제할 수 있습니다. 3D 모델 페이지, 즉 3D 모델을 업데이트할 수 있는 페이지는 해당 3D 모델을 사용하는 페이지 목록을 사용자에게 공개해야 합니다. 3D 모델은 특정 형식(가급적 glTF)과 최대 크기로만 업로드할 수 있습니다.
3. 이미지는 해당 이미지에 링크된 다른 페이지가 없는 경우에만 삭제할 수 있습니다. 이미지가 있는 페이지, 즉 이미지를 업데이트할 수 있는 페이지는 해당 이미지를 사용하는 페이지 목록을 제공해야 합니다. 이미지는 특정 형식과 최대 크기로만 업로드할 수 있습니다.


## 도움말 페이지

이 페이지들은 사용자 매뉴얼, 권장 사항, 정책 문서, 진행 상황 등 *우란티페디아* 자체에 대한 콘텐츠를 담고 있습니다. 이 페이지들의 URL 패턴은 다음과 같습니다: `https://urantiapedia.org/[lan]/help/[title]`


## 책

여기에는 모든 번역본의 *우란시아서*뿐만 아니라 성경과 계시자들이 사용한 자료로 추정되거나 *우란시아서*의 주제를 설명할 수 있는 내용을 담고 있는 모든 퍼블릭 도메인 서적이 포함됩니다. 또한 저자가 오픈 라이선스로 제공하고자 하는 *우란시아서*의 파생 저작물도 포함될 수 있습니다. 이 모든 것은 [위키문헌](https://wikisource.org/wiki/Main_Page)이나 [아카이브](https://archive.org/)와 같은 일종의 *우란시아 도서관*을 구성할 수 있지만, _우란시아서_와 관련된 모든 것을 포함합니다.

### 우란시아서

*우란시아서*에는 각 번역본에 제목, 저작권, 연도 등이 적힌 메인 페이지, 논문 색인 페이지, 확장판 색인 페이지, 그리고 각 논문에 대한 페이지가 있습니다. 영어판의 경우, 이러한 페이지의 몇 가지 예를 들면 다음과 같습니다.
- https://urantiapedia.org/ko/The_Urantia_Book
- https://urantiapedia.org/ko/The_Urantia_Book/Index
- https://urantiapedia.org/ko/The_Urantia_Book/Index_Extended
- https://urantiapedia.org/ko/The_Urantia_Book/147

*게시 명령*과 같은 다른 콘텐츠도 동일한 경로에 포함될 수 있습니다.

각 논문 페이지에는 섹션이 있는 내용 자체 외에도 몇 가지 추가 섹션이 있습니다.
- *참고문헌*에는 인용문이나 추정 인용문에 대한 링크가 포함되어 있습니다. *우란시아서*에서 저자는 기존의 인간 문서를 사용하여 계시자라기보다는 편찬자 역할을 하는 경우가 많다고 직접 언급합니다. 때로는 개발자가 따옴표를 사용하기 때문에 원문 그대로의 인용문이 암시되기도 합니다. 다른 경우에는 인용문이 미묘하고 감지하기 어려울 뿐입니다. 많은 독자가 시간이 지남에 따라 이러한 인용문을 발견했습니다. 인용문은 종종 *성경*의 구절이나 계시가 기록된 시대 또는 그 이전의 종교, 철학 또는 과학에 대한 책을 참조합니다. 이 *참고문헌* 섹션에는 계시자들이 사용한 성경 구절이나 다른 책에 대한 링크가 배치됩니다. *성경*과 다른 출처도 책이 퍼블릭 도메인인 한 *우란티아백과*에 포함되어 있으므로 책을 읽는 동안 계시자들의 가능한 출처를 읽을 수 있습니다.
- *링크*는 논문과 관련된 기사, 주제, 색인 또는 이미지에 대한 링크로, 논문을 명확히 설명하는 데 도움이 되는 내용을 제공합니다.
- 논문과 관련된 유용한 정보를 제공하는 다른 웹사이트로 연결되는 *외부 링크* 섹션도 있을 수 있습니다.

*참조*, *링크*, *외부 링크*가 있는 이 섹션은 대부분 *우란티아피디아* 페이지에서 공통적인 패턴이 될 것입니다.

### 성경

*성경*은 *우란시아서* 저자들이 대거 인용한 주요 책이기 때문에 짧은 경로를 가지고 있습니다. 성경의 각 권은 한 페이지씩, 각 장도 한 페이지씩 있습니다. 예를 들어, 창세기와 요한복음의 각 권과 장으로 연결되는 링크는 다음과 같습니다.
- https://urantiapedia.org/en/Bible/Genesis
- https://urantiapedia.org/en/Bible/Genesis/Index
- https://urantiapedia.org/ko/Bible/Genesis/2
- https://urantiapedia.org/en/Bible/John
- https://urantiapedia.org/en/Bible/John/Index
- https://urantiapedia.org/en/Bible/John/2

URL에 사용할 수 있는 유효한 책 이름:

 | | | | |
 --- | --- | --- | ---
Genesis | Exodus | Leviticus | Numbers 
Deuteronomy | Joshua | Judges | Ruth
1_Samuel | 2_Samuel | 1_Kings | 2_Kings
1_Chronicles | 2_Chronicles | Ezra | Nehemiah
Esther | 1_Maccabees | 2_Maccabees | Job
Psalms | Proverbs | Ecclesiastes | Song_of_Solomon
Sirach | Wisdom_of_Solomon | Isaiah | Jeremiah
Lamentations | Baruch | Ezekiel | Daniel
Hosea | Joel | Amos | Obadiah
Jonah | Micah | Nahum | Habakkuk
Zephaniah | Haggai | Zechariah | Malachi
Matthew | Mark | Luke | John
Acts_of_the_Apostles | Romans | 1_Corinthians | 2_Corinthians
Galatians | Ephesians | Philippians | Colossians
1_Thessalonians | 2_Thessalonians | 1_Timothy | 2_Timothy
Titus | Philemon | Hebrews | James
1_Peter | 2_Peter | 1_John | 2_John
3_John | Jude | Revelation | Bel_and_the_Dragon
Prayer_of_Manesseh | Tobit | Judith | Book_of_Enoch
Assumption_of_Moses

성경과 관련된 다른 비정경적인 책들도 *우란시아서*와 어떤 식으로든 관련이 있다면 같은 경로에 놓일 수 있습니다. 대표적인 예로는 우란시아서에 명시적으로 언급된 에녹서가 있습니다.

### 출처로 추정되는 다른 책들

성경 외에 *우란시아서*의 출처일 가능성이 있는 다른 책이 있다면, 책 제목, 저자, 저작권, 발행일을 위한 페이지 하나, 색인을 위한 페이지 하나, 그리고 각 장을 위한 페이지 하나를 `책` 경로에 추가할 수 있습니다. 오래된 책이고 스캔된 책의 경우, 스캔된 이미지와 본문을 모두 제공하는 것이 중요합니다. 이미지는 각 장 본문 하단의 *원본* 섹션에 링크된 이미지 모음으로 추가할 수 있습니다.

예를 들어, 매튜 블록은 https://urantiabooksources.com/에서 설명한 대로 *우란시아서*의 출처 자료를 찾는 데 큰 공헌을 한 독자입니다. 그가 계시록의 출처로 지목한 책 중 하나는 제임스 진스 경이 1930년에 출판한 *우리 주변의 우주*입니다. 이 책은 퍼블릭 도메인이 되었으므로 *우란티아피디아*에 추가할 수 있으며, 이 책으로 연결되는 링크는 다음과 같습니다.
- https://urantiapedia.org/en/book/Sir_James_Jeans/The_Universe_Around_Us
- https://urantiapedia.org/ko/book/Sir_James_Jeans/The_Universe_Around_Us/3

### 세계 주요 종교의 다른 책들

우란시아서의 저자들은 모든 종교의 경전을 숙지할 것을 권고합니다. 모든 경전에는 유익한 내용이 담겨 있기 때문입니다([UB 92:7.3](/ko/The_Urantia_Book/92#p7_3)). 또한 전 세계적인 형제애를 이루려면 다른 나라의 문헌에 대한 더 깊은 지식이 필요하기 때문입니다([UB 52:6.4](/ko/The_Urantia_Book/52#p6_4)). 이 원칙에 따라 우란시아페디아에서는 전 세계 주요 종교의 경전을 편찬할 것입니다.

이러한 책은 `book` 경로에 추가할 수 있습니다. 이 경로 내에는 다음과 같이 주요 종교별 폴더가 있습니다.
- `Bahaism`: 바하이 신앙의 책들.
- `Buddhism`: 불교의 책들.
- `Christianity`: 기독교의 서적.
- `Confucianism`: 유교에 관한 책.
- `Hinduism`: 힌두교에 관한 책.
- `Islam`: 이슬람에 관한 책.
- `Jainism`: 자이나교에 관한 책.
- `Judaism`: 유대교에 관한 책.
- `Shintoism`: 신토이즘에 관한 책.
- `Sikhism`: 시크교에 관한 책.
- `Taoism`: 도교에 관한 책.
- `Zoroastrianism`: 조로아스터교에 관한 책.

예를 들어:
- 스페인어로 된 바하이 책: https://urantiapedia.org/es/book/Bahaism/The_Splendour_of_God
- 영어로 된 불교 서적: https://urantiapedia.org/en/book/Buddhism/The_Gateless_Gate
- 프랑스어로 된 꾸란: https://urantiapedia.org/fr/book/Islam/Quran

### 독자들의 다른 책들

독자는 자신이 직접 쓴 책을 공공 라이선스로 공유하고 싶다면 *우란티피디아*에 추가할 수 있습니다. 다른 책과 마찬가지로 `book` 경로에 제목, 저자, 저작권 표시, 날짜에 대한 페이지 수를 한 페이지, 색인에 대한 페이지 수를 한 페이지, 그리고 각 장마다 한 페이지씩 추가합니다. 물론 책은 *우란티아 책*과 관련이 있어야 하며, 책을 이해하는 데 도움이 되는 내용을 제공해야 합니다. 소설이나 책과 거의 관련이 없는 영감받은 작품은 허용되지 않습니다.

이러한 책의 URL 패턴은 다음과 같습니다. 저자가 알려진 책의 경우 `https://urantiapedia.org/en/book/[author]/[book_title]`, 저자가 알려지지 않은 책의 경우 `https://urantiapedia.org/en/book/[book_title]`입니다. 책의 원문이 영어가 아니더라도 URL에 책 제목을 영어로 입력하는 것이 좋습니다. 자세한 내용은 아래 섹션을 참조하세요.


## 기사, 학습 자료 및 다이어그램

여기에는 *우란시아서*를 공부하고 이해하는 데 흥미로울 수 있는 모든 기사, 도움말 자료 및 의견 문서가 포함됩니다.

각 페이지는 섹션으로 구성됩니다. 공통 섹션인 *참고문헌*, *링크*, *외부 링크*를 포함하는 것이 좋습니다. 이미지는 각 항목별로 링크가 가능하도록 추가되어 여러 문서에서 동일한 이미지를 반복하지 않고 공유할 수 있습니다. *참고문헌*은 중요합니다. 많은 독자들이 우란시아 책이나 과학 논문에서 인용한 내용을 제대로 포함하지 않은 글을 작성했습니다. 가능하면 이러한 글에 누락된 참고문헌을 추가하도록 수정해야 합니다. 참고문헌이 없으면 정보는 사실이 아닙니다.

기사의 URL 패턴은 다음과 같습니다. 저자가 알려진 기사의 경우 `https://urantiapedia.org/en/article/[author]/[article_title]`, 익명 기사의 경우 `https://urantiapedia.org/en/article/[article_title]`입니다. 기사 제목은 저자가 작성한 원문 언어로 되어 있지만, 영어로 번역된 제목을 사용하는 것이 좋습니다. 이렇게 하면 URL 패턴이 일관될 수 있습니다.

예를 들어 보겠습니다. 스페인어 독자가 *예수 시대의 나사렛*이라는 제목의 기사를 작성했다고 가정해 보겠습니다. 이 기사를 *예수 시대의 나사렛*으로 번역할 수 있습니다. URL로 더 나은 선택은 다음과 같습니다.

https://urantiapedia.org/es/article/Jan_Herca/What_was_Nazareth_like_in_the_time_of_Jesus

대신에

https://urantiapedia.org/es/article/Jan_Herca/Cómo_fue_Nazaret_en_tiempos_de_Jesús

*우란티피디아*의 목적은 모든 사용자에게 다국어 콘텐츠를 제공하는 것이며, 업로드된 모든 페이지는 향후 모든 지원 언어로 번역될 예정입니다. 영어 제목은 URL을 식별하는 통일된 공통 방식을 제공합니다. 이는 페이지 제목에는 영향을 미치지 않으며, 항상 URL과 다른 값입니다. 이에 대한 자세한 내용은 아래 섹션에서 확인하세요.

이러한 유형의 콘텐츠에는 스키마 또는 도식이 포함된 도면도 포함됩니다. 현재 *우란티아피디아*에서 지원되는 다이어그램과 차트를 쉽게 생성할 수 있는 기술은 여러 가지가 있습니다. [Kroki](https://kroki.io/), [Mermaid](http://mermaid-js.github.io/mermaid/#/), [PlantUML](https://plantuml.com/)이 그 예입니다. 기존 다이어그램 생성기가 *우란티아서* 용도에 충분하지 않은 경우(주로 소프트웨어 개발용이기 때문에), 다이어그램, 스키마 또는 차트를 생성하는 데 가장 권장되는 형식인 [SVG 형식](https://developer.mozilla.org/en-US/docs/Web/SVG)의 콘텐츠를 사용할 수 있습니다.

<figure id="Sample_fig_1" class="image urantiapedia">
<img src="/image/help/sample_page_article.png">
<figcaption><em>기사 렌더링 샘플.</em></figcaption>
</figure>

## 주제

이것들은 *우란시아서*의 특정 주제와 관련된 글 유형입니다. 예를 들어, [절대성](/en/topic/absonity)과 같은 개념, [그랜드판다](/en/topic/Grandfanda)와 같은 사람, [사고 조절자](/en/topic/Thought_Adjusters)와 같은 존재 유형, [나사렛](/en/topic/Nazareth)이나 [오르본톤](/en/topic/Orvonton_(superuniverse))과 같은 장소, [아담과 이브의 도래](/en/topic/Adam#arrival-of-adam-and-eve)와 같은 사건 등이 있습니다.

각 주제에는 공통적인 섹션인 *참고문헌*과 *우란시아서* 링크, *우란티아백과*의 다른 페이지로 연결되는 *링크*, 그리고 페이지 외부 링크를 위한 *외부 링크* 섹션이 있습니다. 예를 들어, *나사렛* 페이지에는 나사렛에 대한 간략하고 기본적인 설명(나사렛의 위치, 중요성, 지리적 좌표 및 지도 링크)이 포함될 수 있지만, *링크* 섹션에는 독자가 예수 도시를 탐구하고, 예수 시대의 도시가 어떠했는지, 그리고 이 책의 주장을 뒷받침하거나 뒷받침하는 것으로 보이는 고고학적 발견에 대한 기사 링크가 포함될 수 있습니다.

주제의 URL 패턴은 `https://urantiapedia.org/en/topic/[topic_name]`입니다. 주제 이름은 항상 영어로 작성되지만, 페이지 제목은 해당 언어로 작성됩니다.


## 인덱스

여기에는 다양한 색인이 포함되어 있습니다. 색인에 포함된 요소의 수가 매우 많을 경우, 주요 섹션이 있는 메인 페이지와 그 아래에 보조 페이지가 있을 수 있습니다. 가능하다면 각 색인을 한 페이지로 구성하는 것이 좋습니다. 그러면 원하는 정보를 쉽게 찾을 수 있습니다.

다음은 일부 인덱스일 수 있습니다.

인덱스 | 설명 | 정렬 | 경로
--- | --- | --- | ---
인덱스 목록 | 모든 인덱스 목록 | 이 표와 같이 | /ko/index/index
주제 색인 | 용어집으로 알려짐 | 알파벳순 | /ko/index/topics
인물 색인 | 인물 또는 인물의 고유명사에 대한 용어집 하위 집합 | 알파벳순 | /ko/index/people
존재의 색인 | 우주의 존재 유형에 대한 용어집 하위 집합(1) | 알파벳순 | /ko/index/beings
장소 색인 | 우주 또는 지구상의 장소에 대한 용어집 하위 집합 | 알파벳순 | /ko/index/places
성경 색인 | 성경의 각 책에 대해 해당 구절이 있는 *우란시아서*로의 링크 | 성경 순서(창세기, 출애굽기 등)로 | /ko/index/biblical
참고문헌 색인 | *우란시아서*의 각 문서에 대한 모든 참고문헌(성경 또는 기타 책) | 책자별 | /ko/index/references
인용문 색인 | 책에서 상징적 문장에 대한 참조 목록 | 주제별(신, 우주, 천사, 예수 등) | /ko/index/quotes
지구 연대기 | 지구에서 일어난 사건들 (2) | 연대순 | /ko/index/earth_timeline
예수 생애 연대기 | 예수와 관련된 주요 사건 설명 및 책과의 연결 | 연도, 월, 일별 | /ko/index/Jesus_timeline

(1) 어떤 존재의 유형이 다른 이름을 받는 경우(예: *제3의 근원과 중심* = *공동 행위자*), 각 항목 옆에는 나머지 동등한 용어 목록이 표시됩니다.

(2) 연대기는 일종의 사건 색인으로 볼 수 있습니다. 이 경우, 지구의 진화적 발전 과정을 날짜순으로 정리한 연대기입니다. 책에 언급된 역사적 사건들을 포함할 수 있습니다.


## 이미지

이미지는 거의 대부분 다른 언어로 번역할 필요가 없기 때문에 특별한 콘텐츠입니다. 이러한 이유로 이미지는 전체 웹사이트의 공통 폴더인 루트(`https://urantiapedia.org/image/`)에 있습니다. 각 언어별로 별도의 폴더가 있는 것은 아닙니다.

이 폴더 내에서 이미지는 다음과 같이 하위 폴더로 구성됩니다.

* `article`: 신문 아카이브 이미지입니다. 모든 신문 이미지는 해당 신문의 특정 폴더에 보관하는 것이 좋습니다.
* `book`: 도서관 이미지입니다. 폴더 내 구조는 위에 표시된 `[language]/book` 폴더와 동일해야 합니다.
* `diagram`: 다이어그램. 책의 주제를 설명하고 명확하게 보여주는 인포그래픽이나 차트.
* `help`: Urantiapedia 도움말에 대한 이미지입니다.
* `map`: 지도. 정적 지도이지만
* `svg` 형식이거나 [HTML 이미지 맵](https://www.w3schools.com/html/html_images_imagemap.asp)을 사용하는 경우 링크가 포함될 수 있습니다.
* `The_Urantia_Book`: 우란시아_책을 설명하는 이미지입니다.

지원되는 이미지 형식은 다음과 같습니다: `jpg`, `jpeg`, `png`, `gif`, `webp`, `svg`.

## 지도

지도는 단순한 정적 이미지가 아닙니다. 이러한 유형의 지도는 이미지 섹션에 저장됩니다. 지도는 다음과 같은 기능을 제공하는 대화형 애플리케이션입니다.
- 이 옵션으로 설정된 경우 지도를 이동 및 확대/축소할 때 항상 일정 범위 내에서만 이동합니다.
- 지도를 콘텐츠의 중앙에 배치합니다.
- 지도 내의 요소를 클릭하면 다른 *우란티피디아* 페이지나 다른 웹사이트로 이동할 수 있는 링크가 나타나는 정보 패널을 얻을 수 있습니다.
- 설명이 담긴 애니메이션이 시작되는 가상 투어의 재생 버튼을 클릭하세요.

지도의 URL 패턴은 다음과 같습니다.
- 모든 편집자가 수정할 수 있는 공개 지도: `https://urantiapedia.org/en/map/[map_name]`
- 작성자 또는 권한이 있는 사람만 수정할 수 있는 작성자 맵: `https://urantiapedia.org/en/map/[user_name]/[map_name]`

지도는 매개변수(이름이나 좌표)를 통해 지도 내 특정 위치로 연결할 수 있습니다. 예를 들어, 예수님이 사도들과 함께 북쪽으로 도피하신 여정을 담은 지도 페이지를 상상해 보겠습니다. 이 지도의 URL은 다음과 같습니다.

https://urantiapedia.org/ko/map/Places_visited_by_Jesus_in_Palestine

이 유형의 지도가 완전히 작동하면 이 라마 중심 지도를 여는 두 가지 방법은 다음과 같습니다.
- `https://urantiapedia.org/ko/map/Places_visited_by_Jesus_in_Palestine?name=Ramah`
- `https://urantiapedia.org/ko/map/Places_visited_by_Jesus_in_Palestine?lonlat=32.936424,35.367742`

URL에 있는 지도의 이름은 영어로 작성되어야 한다는 것은 이미 설명되어 있습니다.

<figure id="Sample_fig_3" class="image urantiapedia">
<img src="/image/help/sample_page_map.jpg">
<figcaption><em>대화형 지도 렌더링 샘플.</em></figcaption>
</figure>


## 슬라이드

슬라이드는 페이지에 애니메이션 프레젠테이션으로 표시되는 텍스트 문서입니다. 기본적으로 기사와 같으며, 앞으로 또는 뒤로 키를 누르거나 터치 기기에서 손가락을 스크롤하여 한 슬라이드에서 다른 슬라이드로 이동할 수 있습니다.

슬라이드의 URL 패턴은 다음과 같습니다.
- 편집자가 수정할 수 있는 공개 프레젠테이션의 경우: `https://urantiapedia.org/en/slides/[slides_name]`
- 저자 또는 권한이 있는 사람만 수정할 수 있는 저자 프레젠테이션의 경우: `https://urantiapedia.org/en/slides/[user_name]/[slides_name]`

URL에는 주어진 슬라이드에서 열리는 매개변수가 있습니다.

<figure id="Sample_fig_4" class="image urantiapedia">
<img src="/image/help/sample_page_slides.png">
<figcaption><em>프레젠테이션 렌더링 샘플.</em></figcaption>
</figure>


## 3D 모델

3D 모델은 지도와 같은 애플리케이션입니다. 특정 범위 내에서 자유롭게 모델을 탐색하고, 전체 모델에 초점을 맞추고, 클릭 가능한 요소에 대한 정보 패널을 표시할 수 있습니다. 또한, 애니메이션을 표시하기 위해 독립적으로 실행 가능한 다양한 애니메이션을 포함할 수도 있습니다.

3D 모델의 URL 패턴은 다음과 같습니다.
- 모든 편집자가 수정할 수 있는 공개 3D 모델의 경우: `https://urantiapedia.org/en/3dmodel/[3dmodel_name]`
- 작성자 또는 권한이 있는 사람만 수정할 수 있는 작성된 3D 모델의 경우: `https://urantiapedia.org/en/3dmodel/[user_name]/[3dmodel_name]`

지도와 마찬가지로 3D 모델은 `https://urantiapedia.org/en/3dmodel/Jerusem?name=Mansonia_7`와 같이 이름을 사용하여 항목을 중심으로 배치할 수 있습니다.

<figure id="Sample_fig_5" class="image urantiapedia">
<img src="/image/help/sample_page_3d.jpg">
<figcaption><em>3D 모델 렌더링 샘플.</em></figcaption>
</figure>

## URL

*우란티에이피디아*의 각 페이지에는 제목과 URL이 모두 있습니다. 필요한 경우 사이트 전체에서 제목을 반복할 수 있지만, 각 URL은 고유해야 합니다. 이를 위해 URL은 다음과 같은 일반적인 패턴을 따라야 합니다.

`https://urantiapedia.org/[lan]/[경로]/[사용자 이름?]/[페이지 이름]`

- `[lan]`은 지원되는 언어의 코드이며, *우란시아서*에 대한 번역이 있는 언어입니다. [지원되는 언어](/ko/help/languages)를 확인하세요.
- `[path]`는 페이지 유형에 따라 달라지는 경로입니다.
	- 사이트 페이지 : `도움말`
	- *우란시아 책*: `우란시아 책`
	- *성경*: `성경`
	- 다른 책들 : `책`
	- 주제: `주제`
	- 인덱스 : `index`
	- 기사 : `기사`
	- 프레젠테이션 : `슬라이드`
	- 지도 : `지도`
	- 3D 모델 : `3dmodel`
- `[user_name]`이 있는 경우, 작성자 이름입니다. 작성자는 페이지를 수정할 수 있는 사용자 이름이거나 공개 작성자입니다. 작성하기 쉽도록 이름에 악센트 문자를 사용하지 않는 것이 좋습니다.
- `[페이지 이름]`은 URL에 나타나는 이름으로, 공백 대신 밑줄을 사용해야 합니다. 책의 경우 각 페이지는 장으로 구성되므로 `[페이지 이름]`은 장의 번호만 사용해야 합니다. 책에 서문이 있는 경우 해당 장의 번호는 0입니다.

`[책 제목]`과 `[페이지 이름]`은 가능하면 짧은 이름을 사용해야 하며, 가급적이면 영어로 작성해야 합니다. 사이트의 기본 언어는 영어입니다. 그 이유는 *우란시아서*가 영어로 작성되었고 오늘날 전 세계에서 사용되는 보편적인 언어이기 때문입니다. 언어별로 페이지 이름을 다르게 지정하면 언어 전환이 어려워지고, 형제 페이지를 연결하는 시스템이 필요합니다. 모든 번역에 고유한 페이지 이름을 사용하면 영어 페이지를 알게 되면 어떤 언어로 된 페이지든 쉽게 접근할 수 있습니다.

URL의 예:
- https://urantiapedia.org/de/help/start
- https://urantiapedia.org/ja/The_Urantia_Book
- https://urantiapedia.org/hu/The_Urantia_Book/Index
- https://urantiapedia.org/it/The_Urantia_Book/Index_Extended
- https://urantiapedia.org/ko/The_Urantia_Book/147
- https://urantiapedia.org/bg/Bible/Genesis
- https://urantiapedia.org/es/Bible/Genesis/Index
- https://urantiapedia.org/id/Bible/Genesis/2
- https://urantiapedia.org/lt/Bible/John
- https://urantiapedia.org/ro/Bible/John/Index
- https://urantiapedia.org/en/Bible/John/2
- https://urantiapedia.org/en/book/Sir_James_Jeans/The_Universe_Around_Us
- https://urantiapedia.org/ko/book/Sir_James_Jeans/The_Universe_Around_Us/3
- https://urantiapedia.org/fr/topic/Andrew
- https://urantiapedia.org/es/article/Jan_Herca/What_was_Nazareth_like_in_the_time_of_Jesus
- https://urantiapedia.org/es/article/Norm_Duval/How_big_is_Orvonton
- https://urantiapedia.org/ko/index/topics
- https://urantiapedia.org/ko/index/people
- https://urantiapedia.org/ru/image/Master_Universe
- https://urantiapedia.org/pt/slides/Part_II_Introduction
- https://urantiapedia.org/cs/map/Jesus_Second_Preaching_Tour
- https://urantiapedia.org/es/3dmodel/Isle_of_Paradise

URL이 일관된 방식으로 구성되고 기억하기 쉽도록 이러한 규칙을 유지하는 것이 좋습니다.


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
        <td><a href="/ko/help/principles">우란티아페디아를 지배하는 원칙</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/phases">프로젝트 이정표</a></td>
      </tr>
    </tbody>
  </table>
</figure>