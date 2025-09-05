---
title: "학습 자료 카탈로그 작성"
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
        <td><a href="/ko/help/github_articles_markdown">기사 받기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_studyaids_markdown">학습 자료 받기</a></td>
      </tr>
    </tbody>
  </table>
</figure>

_우란시아서_ 학습 자료 카탈로그를 만드는 방법은 다음과 같습니다.

기사와 학습 보조 자료의 차이점은 전자는 보통 잡지에 실리는 짧은 글인 반면, _우란티아피디아_에서는 웹 페이지 하나라는 점입니다. 반면 후자는 좀 더 완전한 글인데, _우란티아피디아_에서는 폴더(예: 책) 안에 한 페이지 또는 여러 페이지가 될 수 있으며, 무엇보다도 *우란시아서*의 복잡한 주제를 연구하고 이해하는 데 중점을 둡니다.

둘을 구분하지만, 나중에는 모두 프로젝트 내 같은 `/en/article` 폴더 아래, 다이어그램 옆에 저장됩니다. 콘텐츠 유형에 따라 구분이 다소 모호하고 인위적일 수 있습니다. 같은 저자가 작성한 책 이외의 모든 자료는 _Urantiapedia_의 같은 폴더 또는 섹션에 모아지도록 같은 위치에 저장됩니다.

## 프로세스

이 과정은 기사에 대해 설명된 과정과 동일합니다. [기사 카탈로그 만들기](/ko/help/github_articles_catalog)를 참조하세요. 학습 자료의 임시 목록은 [계획된 학습 자료](/en/index/study_aids)에서 확인할 수 있습니다.

해당 목록을 편집하려면 두 가지 방법이 있습니다.

- _Urantiapedia_에 로그인하세요. 학습 자료 목록으로 이동하세요: [계획된 학습 자료](/ko/index/study_aids). 오른쪽 상단 버튼 패널의 _페이지 작업 > 편집_ 메뉴에서 페이지를 편집하세요. 간단한 마크다운 편집기가 열리고 목록을 편집할 수 있습니다. (중요: 이 작업을 수행하려면 해당 페이지에 대한 편집 권한을 부여할 관리자가 필요합니다.)
- GitHub 프로젝트에서 이 파일을 수정하세요: `/output/wikijs/en/index/study_aids.html`. 수정하려면 GitHub에서 해당 파일이나 전체 프로젝트를 다운로드하면 됩니다. GitHub에서 항목을 다운로드하는 방법은 [보조 편집기 도움말](/ko/help/github_assistant)을 참조하세요.

이전 두 경우 모두, 편집할 파일은 매우 간단한 마크다운 파일이며, 각 학습 보조 자료에 대해 다음 내용이 표 형식으로 포함되어야 합니다.

- 학습 도구가 아직 생성되지 않았음을 나타내는 `:white_square_button:` 플래그입니다.
- 제목.
- 저자.
- 학습 자료를 분류하는 몇 가지 선택 라벨.
- 해당 도움말을 다운로드할 수 있는 URL입니다.

예를 들어:

```
| Status                | Title                             | Author                | Tags       | URL                                                           |
| ----------------------| ----------------------------------| ----------------------| ---------- | -------------------------------------------------------------- |
| :white_square_button: | "Study of the Master Universe"    | William S. Sadler Jr. | Astronomia | https://www.urantia.org/en/urantia-book/study-the-urantia-book |
```

## 파일 보내기

GitHub에 있는 파일의 목록을 수정한 경우 변경 사항을 적용하는 데는 두 가지 옵션이 있습니다. "편집장"인 경우 [편집장 도움말](/ko/help/github)에 자세히 설명된 대로 GitHub을 사용합니다. "보조 편집자"인 경우 수정된 Markdown 파일을 관리자의 이메일이나 urantiapedia@gmail.com으로 보내면 됩니다.

## 외부 링크

- [Urantiapedia 도구 - GitHub 프로젝트](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/github_articles_markdown">기사 받기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_studyaids_markdown">학습 자료 받기</a></td>
      </tr>
    </tbody>
  </table>
</figure>
