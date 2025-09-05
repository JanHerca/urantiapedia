---
title: "기사 받기"
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
        <td><a href="/ko/help/github_articles_catalog">기사 카탈로그 생성</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_studyaids_catalog">학습 자료 카탈로그 만들기</a></td>
      </tr>
    </tbody>
  </table>
</figure>

여기에서는 _우란시아 서_와 관련된 독자의 기사를 얻는 방법과 [기사 카탈로그 만들기](/ko/help/github_articles_catalog) 작업에 따라 카탈로그화된 기사를 얻는 방법을 설명합니다.

## 프로세스

["소스" 책 얻기](/ko/help/github_sourcebooks_markdown)에서 책에 대해 설명한 모든 내용이 여기에도 적용됩니다. 기사는 이미 호스팅된 웹 페이지, 텍스트 없는 PDF 또는 텍스트가 있는 PDF 형식으로 제공됩니다. 또한 개별적으로 또는 잡지나 다른 기사와 함께 공동 출판물의 일부로 제공될 수도 있습니다. 어떤 경우든 첫 번째 단계는 해당 잡지를 마크다운 형식으로 변환하는 것입니다.

이 작업은 경우에 따라 다른 소프트웨어를 사용하여 수행되었으며, 이미 GitHub의 `/input/markdown/en/Innerface`와 `/input/markdown/en/Herald`에서 _우란시아서_와 관련된 두 유명 출판물인 *Innerface International*과 *Fellowship Herald*에 대한 훌륭한 기사 모음을 통해 부분적으로 수행되었습니다. 이 출판물들에 대한 기사 목록은 [계획된 기사](/en/index/articles)에서 이미 구축되어 있습니다.

이제 해야 할 일은 앞서 언급한 폴더의 내용을 활용하여 개별 기사를 작성하는 것입니다. 해당 폴더에는 완전한 잡지가 들어 있습니다.

### Urantiapedia의 문서 구조

"편집장"이시고 GitHub 플랫폼을 사용하시는 경우, 모든 문서는 다음 GitHub 프로젝트 폴더에 저장해야 합니다. 영어 문서의 경우 `/output/wikijs/en/article`, 스페인어 문서의 경우 `/output/wikijs/es/article` 등입니다. 이 폴더 안에 작성자 이름(공백은 밑줄로 대체)을 사용하여 새 폴더를 만듭니다(폴더가 없는 경우). 마지막으로, 작성자 폴더 안에 다음 기준에 따라 고유한 이름을 부여할 마크다운 파일을 만듭니다.
  - 이름은 기사 제목을 사용하지만 가능한 한 줄여서 적습니다.
  - 이름은 항상 영어로 작성되므로, 원본 기사가 영어가 아닌 경우 제목은 번역됩니다.
  - 공백은 밑줄로 대체됩니다.
  - 콜론이나 느낌표와 같은 특수 문자가 제거됩니다.
  - 예를 들어, 기사 제목이 *Time for More Change? Symbols, Cults, and The Urantia Book*인 경우, 파일 이름은 `Time_for_More_Change_Symbols_Cults.md`가 될 수 있습니다. 제목이 *Jerusalén en tiempos de Jesús*(스페인어)인 경우, 파일 이름은 `Jerusalem_in_Jesus_times.md`가 됩니다.

"보조 편집자"이고 GitHub 플랫폼을 사용하여 파일을 전송하지 않을 경우, PC에 작성한 문서를 저장할 폴더를 생성하기만 하면 됩니다. 그러면 작업물을 관리자에게 전송하면 관리자가 해당 폴더를 자동으로 생성합니다.

완성된 기사의 예는 `/output/wikijs/en/article/Ann_Bendall/Adam_an_Eve.md`에서 볼 수 있습니다.

### Urantiapedia 기사의 기본 형식

사용할 형식은 마크다운인데, 다른 대안에 비해 스타일을 적용하기가 매우 간단합니다.

"보조 편집자"는 텍스트를 검토하고 다음 내용을 추가해야 합니다.
- 각 파일에 헤더가 있습니다.
- 헤더 바로 아래에 작성자를 표시합니다.
- 기사 내의 섹션 기호.
- 문단을 수정하세요.
- 굵게, 기울임체.
- 인용문.
- 이미지.
- 이미지에 대한 참조.
- 각주.
- 테이블.
- 과학적 표기법으로 나타낸 수학 공식이나 문자.

이 모든 항목은 책 장의 형식을 지정하는 방법을 설명할 때 이미 설명되었습니다: ["소스" 책 가져오기](/ko/help/github_sourcebooks_markdown). 거기에 제공된 모든 힌트는 기사의 경우에도 적용됩니다.

## 파일 보내기

GitHub을 사용하는 "편집장"인 경우 [편집장 도움말](/ko/help/github)에 자세히 설명된 대로 문서를 제출할 수 있습니다. "보조 편집자"인 경우 Markdown 파일을 관리자의 이메일이나 urantiapedia@gmail.com으로 보내면 됩니다.

## 외부 링크

- [Urantiapedia 도구 - GitHub 프로젝트](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/github_articles_catalog">기사 카탈로그 생성</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_studyaids_catalog">학습 자료 카탈로그 만들기</a></td>
      </tr>
    </tbody>
  </table>
</figure>