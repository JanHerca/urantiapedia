---
title: "모든 종교에 관한 책 카탈로그 만들기"
description:
published: true
date: 2024-10-10T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2024-10-10T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/github_studyaids_markdown">학습 자료 받기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_religious_books_markdown">모든 종교에 관한 책 구하기</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> 이 작업은 현재 완료되어 종료되었지만, 도서 목록을 변경하고자 하는 제안은 urantiapedia@gmail.com으로 이메일을 보내주시기 바랍니다.
{.is-info}

이는 [우란티피아피디아 프로젝트](/ko/help/phases)의 주요 구성 요소 중 하나인 [우란티피아피디아 라이브러리](/en/book)를 만드는 데 지침이 되는 전 세계 주요 종교에 대한 도서 카탈로그를 만드는 방법을 설명합니다.

## 문맥

[우란티아피디아 도서관](/ko/book)의 동기에서 설명한 대로, _우란시아 책_의 독자들이 전 세계 모든 종교의 종교적 기록, 특히 오랜 전통을 가진 종교나 창조주에 대한 신앙을 항상 받아들인 종교의 기록에 대해 배우고 이를 홍보하려고 노력하는 데에는 중요한 이유가 있습니다.

전 세계 모든 민족의 사상과 신앙에 대한 지식은 인종과 국가 간의 공감과 이해를 증진하고 평화와 형제애의 세상을 열망하는 데 중요합니다. _우란시아서_에는 예수님과 한 힌두교 학생이 당시 여러 종교의 경전을 익히는 모습을 보여주는 아름다운 삽화가 실려 있습니다. [UB 130:3.5](/en/The_Urantia_Book/130#p3_5) 이 책은 예수님의 삶에서 발췌한 미공개 영감 어린 구절로, 우리가 종교 서적을 더욱 다양하게 읽도록 동기를 부여하기 위한 의도가 분명합니다.

예수와 가니드가 알렉산드리아에서 종교적 저술을 편찬했던 것처럼, 우리도 우란티아페디아에서 그렇게 할 것입니다. 모든 독자가 쉽게 열람할 수 있는 온라인 디지털 도서관을 만들 것입니다. 뿐만 아니라, 이 모든 책들을 우란티아페디아의 다른 콘텐츠와 연결할 것입니다.

## 프로세스

이 작업에는 전 세계 모든 종교의 서적 목록을 만드는 것이 포함됩니다. 이 목록의 파일은 다음과 같습니다.

https://github.com/JanHerca/urantiapedia/blob/master/input/txt/books-en/Religious_books.tsv

GitHub에서 이 파일을 수정하려면 [관리자](/ko/help/admin), [수석 편집자](/ko/help/github) 또는 [보조 편집자](/ko/help/github_assistant) 사용자에게 제공된 지침을 따라야 합니다.

이 파일의 내용은 매우 간단합니다.

- 탭으로 구분된 텍스트가 있는 TSV 파일입니다.
- 각 줄은 책꽂이 하나, 책꽂이 내의 한 그룹, 이전 그룹 내의 하위 그룹, 또는 개별 책을 나타냅니다.
- 목록은 계층 구조(선반, 그룹, 하위 그룹, 책)를 유지하므로 순서가 중요합니다.
- 모든 줄에는 두 개의 탭으로 구분된 세 개의 데이터가 있습니다.
- 각 선반에는 선반 이름, 선반에 있는 책을 가져온 웹사이트나 책에 대한 참조, 해당 선반의 색인이 있는 우란티아페디아의 경로가 포함됩니다.
- 그룹은 다음을 포함합니다: 그룹 이름; 태그 `<그룹>`; 비어 있음.
- 하위 그룹은 다음을 가집니다: 하위 그룹의 이름; 태그 `<subgroup>`; 비어 있음.
- 책의 속성: 제목; Urantiapedia에서 해당 책으로 가는 경로(존재하는 경우); 정상(책이 업로드된 경우) 또는 비어 있음(업로드되지 않은 경우).

> [Visual Studio Code](https://code.visualstudio.com/)에서 [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv) 확장자를 추가하여 TSV 파일을 편집하는 것이 좋습니다. 이를 통해 데이터에 색상을 지정하는 등 다양한 작업이 가능합니다.
{.is-info}

## 결과

이 파일을 사용하여 _우란티아피디아 도서관_ 색인과 각 서가 색인을 수동으로 생성했습니다(_replaces_ 사용). 결과는 [모든 도서 그룹 색인](/ko/index/books)에서 확인할 수 있습니다. 이 페이지는 웹사이트 왼쪽 사이드 메뉴의 `기타 도서 \ 색인` 옵션에서도 확인할 수 있습니다. 현재 이 페이지는 영어, 스페인어, 프랑스어로만 제공됩니다.

## 외부 링크

- [Urantiapedia 도구 - GitHub 프로젝트](https://github.com/JanHerca/urantiapedia)

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/github_studyaids_markdown">학습 자료 받기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_religious_books_markdown">모든 종교에 관한 책 구하기</a></td>
      </tr>
    </tbody>
  </table>
</figure>