---
title: "기사 카탈로그 작성"
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
        <td><a href="/ko/help/github_upload">Urantiapedia에 대량 콘텐츠 업로드</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_articles_markdown">기사 받기</a></td>
      </tr>
    </tbody>
  </table>
</figure>

독자들이 _우란시아서_와 관련하여 쓴 기사 카탈로그를 만드는 방법은 다음과 같습니다.

## 프로세스

임시 기사 목록은 여기에서 확인할 수 있습니다: [계획된 기사](/en/index/articles).

현재 매우 광범위한 목록은 출처별로 정리되어 있습니다. 현재 사용 중인 출처는 다음과 같습니다.

- 우란시아 협회 웹사이트
- 잡지 _Innerface International_
- 잡지 _우란시안 저널_
- 저널 _펠로우십 저널_
- 펠로우십 헤럴드 잡지
- Halbert Katzen의 _UB Annotaded & UBTheNews_ 프로젝트 기사
- Jan Herca의 _나사렛 예수_ 프로젝트 기사

자료를 수집한 링크는 목록 마지막에 [참고문헌](/ko/index/articles#references)에 정리되어 있습니다. 독자의 논문을 수집한 다른 참고문헌도 이 목록에 포함되어야 합니다.

기사 목록을 편집하려면 두 가지 방법이 있습니다.

- _Urantiapedia_에 로그인하세요. [계획된 기사](/ko/index/articles) 목록으로 이동하세요. 오른쪽 상단 버튼 패널의 _페이지 작업 > 편집_ 메뉴에서 페이지를 편집하세요. 간단한 마크다운 편집기가 열리고 목록을 편집할 수 있습니다. (중요: 이 작업을 수행하려면 해당 페이지에 대한 편집 권한을 부여할 관리자가 필요합니다.)
- GitHub 프로젝트에서 이 파일을 수정하세요: `/output/wikijs/en/index/articles.md`. 수정하려면 GitHub에서 해당 파일이나 전체 프로젝트를 다운로드하면 됩니다. GitHub에서 항목을 다운로드하는 방법은 [보조 편집기 도움말](/ko/help/github_assistant)을 참조하세요.

이전 두 경우 모두, 편집할 파일은 매우 간단한 마크다운 파일이며, 각 기사에 대해 다음 내용이 표 형식으로 포함되어야 합니다.

- 문서가 아직 생성되지 않았음을 나타내는 `:white_square_button:` 표시가 있습니다.
- 사용된 소스의 선택적 식별자입니다.
- 기사가 잡지에 게재된 경우의 문제입니다.
- 제목.
- 저자.
- 기사를 분류하는 몇 가지 선택 라벨입니다.

예를 들어:

```
| Status                | Source | Issue        | Title                                                 | Author       | Tags     |
| ----------------------| ------ | ------------ | ------------------------------------------------------| -------------| -------- |
| :white_square_button: | Herald | Vol 01, No 1 | "48 Chromosomes - Are We Asking the Right Questions?" | Ken Glasziou | Biology  |
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
        <td><a href="/ko/help/github_upload">Urantiapedia에 대량 콘텐츠 업로드</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_articles_markdown">기사 받기</a></td>
      </tr>
    </tbody>
  </table>
</figure>
