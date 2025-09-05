---
title: "학습 자료 받기"
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
        <td><a href="/ko/help/github_studyaids_catalog">학습 자료 카탈로그 만들기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_religious_books_catalog">모든 종교에 관한 책 카탈로그 만들기</a></td>
      </tr>
    </tbody>
  </table>
</figure>

여기에서는 [학습 자료 카탈로그 만들기](/ko/help/github_studyaids_catalog) 작업에 따라 카탈로그화된 _우란시아 서_의 학습 자료를 얻는 방법을 설명합니다.

## 프로세스

[Get Articles](/ko/help/github_articles_markdown)에서 책에 대해 언급한 모든 내용이 여기에도 적용됩니다. 학습 자료는 일반적으로 기사 형태로, 이미 해당 자료를 호스팅하는 웹 페이지 형태로, 텍스트가 없는 PDF 파일 또는 텍스트가 있는 PDF 파일로 제공됩니다. 어떤 경우든 첫 번째 단계는 학습 자료를 마크다운 형식으로 변환하는 것입니다.

학습 자료 카탈로그는 여기에서 확인할 수 있습니다: [계획된 학습 자료](/ko/index/study_aids).

이제 해야 할 일은 학습 자료의 내용을 활용하여 필요한 마크다운 파일을 얻는 것입니다.

### Urantiapedia의 학습 도구 구조

"편집장"이면서 GitHub 플랫폼을 사용할 경우 학습 자료는 다음 GitHub 프로젝트 폴더에 저장해야 합니다. 영어 학습 자료의 경우 `/output/wikijs/en/article`에 저장하고, 스페인어 학습 자료의 경우 `/output/wikijs/es/article`에 저장합니다.

보시다시피, 저희는 논문과 학습 자료에 동일한 폴더를 사용합니다. 이는 같은 저자가 쓴 모든 작품(책 제외)을 같은 프로젝트 폴더에 모으기 위한 것입니다.

`article` 폴더 안에 기존 폴더가 없으면 저자 이름(공백은 밑줄로 대체)으로 새 폴더를 만듭니다. 마지막으로, `author` 폴더 안에 다음과 같이 학습 보조 자료를 만듭니다.
- 학습 자료가 기사 크기의 짧은 문서인 경우, 해당 자료에 대한 마크다운 파일이 생성됩니다.
- 학습 자료가 여러 부분으로 구성된 긴 세트, 거의 책과 같은 형태라면, 해당 자료를 위한 폴더가 생성되고, 개별 마크다운 파일이 그 안에 들어갑니다.


짧은 학습 보조 자료의 경우 Markdown 파일과 광범위한 학습 보조 자료의 경우 폴더 모두 다음 기준에 따라 고유한 이름이 지정됩니다.
- 이름은 학습 자료의 제목을 사용하지만 가능한 한 짧게 지어주세요.
- 이름은 항상 영어로 작성되므로, 원본 기사가 영어가 아닌 경우 제목은 번역됩니다.
- 공백은 밑줄로 대체됩니다.
- 콜론이나 느낌표와 같은 특수 문자가 제거됩니다.
- 예를 들어, 학습 자료의 제목이 *주요 우주 연구*라면, 가능한 이름은 `주요 우주 연구`가 될 수 있습니다. 제목이 *예수님의 가르침*(스페인어)이라면, 이름은 `예수님의 가르침`이 될 수 있습니다.

"보조 편집자"이고 GitHub 플랫폼을 사용하여 파일을 전송하지 않을 경우, PC에 학습 자료를 저장할 폴더를 생성하기만 하면 됩니다. 그러면 작업물을 관리자에게 전송하면 관리자가 적절한 폴더를 자동으로 생성합니다.


### Urantiapedia 학습 자료의 기본 형식

사용할 형식은 마크다운인데, 다른 대안에 비해 형식을 지정하는 것이 매우 간단합니다.

"보조 편집자"는 텍스트를 검토하고 다음 내용을 추가해야 합니다.
- 각 파일에 헤더가 있습니다.
- 헤더 바로 아래에 작성자를 표시합니다.
- 학습 자료를 구성하는 각 파일 내 섹션의 표시.
- 문단을 수정하세요.
- 굵게, 기울임체.
- 인용문.
- 이미지.
- 이미지에 대한 참조.
- 각주.
- 테이블.
- 과학적 표기법으로 나타낸 수학 공식이나 문자.

이러한 모든 요소는 책의 장을 구성하는 방법을 설명할 때 이미 설명되었습니다. ["소스" 책 가져오기](/ko/help/github_sourcebooks_markdown). 해당 문서에 제공된 모든 지침은 학습 자료의 경우에도 적용됩니다.

## 파일 보내기

GitHub을 사용하는 "편집장"인 경우 [편집장 도움말](/ko/help/github)에 자세히 설명된 대로 학습 자료를 제출할 수 있습니다. "보조 편집자"인 경우 Markdown 파일을 관리자의 이메일이나 urantiapedia@gmail.com으로 보내면 됩니다.

## 외부 링크

- [Urantiapedia 도구 - GitHub 프로젝트](https://github.com/JanHerca/urantiapedia)


<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/github_studyaids_catalog">학습 자료 카탈로그 만들기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_religious_books_catalog">모든 종교에 관한 책 카탈로그 만들기</a></td>
      </tr>
    </tbody>
  </table>
</figure>