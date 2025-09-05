---
title: "다이어그램 카탈로그 만들기"
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
        <td><a href="/ko/help/github_topicindex_to_wiki">백과사전 변환</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_diagrams_svg">다이어그램 가져오기</a></td>
      </tr>
    </tbody>
  </table>
</figure>

_우란시아서_ 다이어그램 카탈로그를 만드는 방법은 다음과 같습니다.

## 프로세스

이 과정은 기사에 설명된 과정과 동일합니다. [기사 카탈로그 만들기](/ko/help/github_articles_catalog)를 참조하세요. 다이어그램의 임시 목록은 [계획된 다이어그램](/en/index/diagrams)에서 확인할 수 있습니다.

해당 목록을 편집하려면 두 가지 방법이 있습니다.

- _Urantiapedia_에 로그인하세요. 다이어그램 목록으로 이동하세요: [계획된 다이어그램](/ko/index/diagrams). 오른쪽 상단 버튼 패널의 _페이지 작업 > 편집_ 메뉴에서 페이지를 편집하세요. 간단한 마크다운 편집기가 열리고 목록을 편집할 수 있습니다. (중요: 이 작업을 수행하려면 해당 페이지에 대한 편집 권한을 부여할 관리자가 필요합니다.)
- GitHub 프로젝트에서 이 파일을 수정하세요: `/output/wikijs/en/index/diagrams.md`. 수정하려면 GitHub에서 해당 파일이나 전체 프로젝트를 다운로드하면 됩니다. GitHub에서 항목을 다운로드하는 방법은 [보조 편집기 도움말](/ko/help/github_assistant)을 참조하세요.

이전 두 경우 모두, 편집할 파일은 매우 간단한 마크다운 파일이며, 각 다이어그램에 대해 다음 내용이 표 형식으로 포함되어야 합니다.

- 다이어그램이 아직 생성되지 않았음을 나타내는 `:white_square_button:` 플래그입니다.
- 제목.
- 저자.
- 다이어그램을 분류하는 몇 가지 선택적 레이블입니다.
- 해당 다이어그램을 다운로드할 수 있는 URL입니다.

예를 들어:

```
| Status                | Title                              | Author  | Tags  | URL                               |
| ----------------------| -----------------------------------| --------| ----- | --------------------------------- |
| :white_square_button: | "The Kingdom of Heaven Revelation" |         |       | http://www.universalfather.info/  |
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
        <td><a href="/ko/help/github_topicindex_to_wiki">백과사전 변환</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_diagrams_svg">다이어그램 가져오기</a></td>
      </tr>
    </tbody>
  </table>
</figure>
