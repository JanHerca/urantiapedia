---
title: 계시자들이 사용했다고 추정되는 책 목록 작성
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
        <td><a href="/ko/help/github_religious_books_markdown">모든 종교의 책 얻기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_sourcebooks_markdown">계시자들이 사용했다고 주장하는 책 구하기</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> 이 작업은 현재 완료되어 닫혔지만, urantiapedia@gmail.com으로 이메일을 보내면 도서 목록을 변경할 수 있습니다.
{.is-info}

여기서는 *우란시아서*의 출처가 되거나 *우란시아서*와 어떤 관계가 있거나 평행한 서적의 카탈로그를 만드는 방법을 설명합니다.

## 문맥

*우란시아서* 자체는 그것을 준비하는 데 사용된 인간적인 자료에 대한 두 가지 명확한 징후를 제공합니다: ([유란 0:12.12](/ko/The_Urantia_Book/0#p12_12) 및 [유란 121:8.13](/ko/The_Urantia_Book/121#p8_13)). 이 모든 것 외에도, *우란시아서*는 종종 정경 외의 책을 포함하여 *성서*의 책들을 그대로 또는 암시적으로 인용한다는 점에 유의해야 합니다.

한동안 몇몇 저명한 독자들이 이러한 유사점들을 정리하는 작업을 해왔습니다. 독자 듀안 L. 포는 [파라모니](https://www.amazon.com/Paramony-Duane-L-Faw/dp/0965197255/ref=sr_1_2?crid=2FCT0LM14FRVT)라는 제목의 장편 책을 출간했는데, 이 책에서 그는 *우란시아서*와 *성경* 사이의 약 6만 개의 유사점을 상세히 기술했습니다. 또 다른 저명한 독자 매튜 블록은 *우란시아서*가 구상될 때까지 쓰인 비성경 서적들을 대상으로 수년간 [유사점 찾기 프로젝트](https://urantiabooksources.com/)를 진행해 왔으며, 저자들이 참고할 만한 잠재적 자료로 100권이 넘는 책을 찾아냈습니다.

## 프로세스

이 과제에서는 *우란시아서*와 유사하다고 판단되는 모든 비성경 서적 목록을 작성하고자 합니다. 이러한 목록을 얻는 데 매우 유용한 자료는 매튜 블록의 이전 웹사이트입니다.

임시 도서 목록은 여기에서 확인할 수 있습니다.

https://github.com/JanHerca/urantiapedia/blob/master/input/txt/books-en/Source_books.tsv

GitHub에서 이 파일을 수정하려면 [관리자](/ko/help/admin), [편집장](/ko/help/github) 또는 [보조 편집자](/ko/help/github_assistant) 사용자에게 제공된 지침을 따라야 합니다.

이 파일의 내용은 매우 간단합니다.

- 탭으로 구분된 텍스트가 있는 TSV 파일입니다.
- 각 줄은 책꽂이 하나, 책꽂이 안의 책 그룹 하나, 또는 개별 책을 나타냅니다.
- 목록은 계층 구조(선반, 그룹, 책)를 유지하므로 순서가 중요합니다.
- 모든 줄에는 탭으로 구분된 6개의 데이터 포인트가 있습니다.
- 선반에는 선반의 이름, 해당 선반의 색인이 있는 우란티아페디아의 경로가 있습니다. 나머지는 비어 있습니다.
- 그룹은 다음을 포함합니다: 그룹 이름; 태그 `<그룹>`; 나머지는 비어 있습니다.
- 책에는 다음이 포함됩니다: 저자; 제목(괄호 안의 판 포함); 관련 _우란시아 책_ 문서; 클라우드 저장소에서 책이 들어 있는 폴더의 이름. 디지털 판을 찾으려고 했지만 찾지 못한 경우 `FAILED`, 아직 디지털 판을 찾으려고 하지 않은 경우 비어 있음; 정상(디지털 사본이 있는 경우) 또는 비어 있음(그렇지 않은 경우); 이미 업로드된 경우 우란티아페디아의 경로.

> [Visual Studio Code](https://code.visualstudio.com/)를 사용하여 TSV 파일을 편집하고 [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv) 확장자를 추가하는 것이 좋습니다. 이를 통해 데이터와 기타 여러 항목에 색상을 지정할 수 있습니다.
{.is-info}

## 결과

이 파일을 사용하여 _우란티아피디아 도서관_ 색인과 각 서가 색인을 수동으로 생성했습니다(_replaces_ 사용). 결과는 [모든 도서 그룹 색인](/ko/index/books)에서 확인할 수 있습니다. 이 페이지는 웹사이트 왼쪽 사이드 메뉴의 `기타 도서 \ 색인` 옵션에서도 확인할 수 있습니다. 현재 이 페이지는 영어, 스페인어, 프랑스어로만 제공됩니다.

## 외부 링크

- [Urantiapedia 도구 - GitHub 프로젝트](https://github.com/JanHerca/urantiapedia)
- [파라모니](https://www.amazon.com/Paramony-Duane-L-Faw/dp/0965197255/ref=sr_1_2?crid=2FCT0LM14FRVT)
- [우란시아서의 출처](https://urantiabooksources.com/)

<br>


<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/github_religious_books_markdown">모든 종교의 책 얻기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_sourcebooks_markdown">계시자들이 사용했다고 주장하는 책 구하기</a></td>
      </tr>
    </tbody>
  </table>
</figure>