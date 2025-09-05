---
title: Urantiapedia의 인터페이스 및 기본 사용
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
        <td><a href="/ko/help/github_initial_flow">언어별 초기 콘텐츠 생성 워크플로</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/web_pages">페이지 관리</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## 인터페이스

![인터페이스](https://docs.requarks.io/assets/ui/ui-basics.jpg){.decor-radius .decor-shadow}

### 글로벌
- **글로벌 네비게이션** - 모든 페이지에 표시되는 영구적인 네비게이션 메뉴입니다. 일반적으로 중요한 페이지나 외부 웹사이트 링크로 구성됩니다.
- **전역 검색** - 검색을 수행하여 빠르게 페이지를 찾으세요.
- **새 페이지 만들기** - 새 페이지를 만듭니다.
- **사용자 메뉴** - 프로필 보기, 관리, 로그아웃 등 사용자별 작업.
{.grid-list .body-2}

### 페이지당
- **페이지 작업** - 편집, 이동, 삭제, 기록 등 현재 페이지에서 수행할 수 있는 작업 목록입니다.
- **브레드크럼** - 현재 페이지의 전체 경로입니다. 폴더 구조를 나타냅니다.
- **목차** - 현재 페이지의 섹션입니다. 콘텐츠의 헤더를 기준으로 합니다.
- **페이지 태그** - 현재 페이지와 관련된 태그입니다. 태그를 클릭하면 관련 페이지를 볼 수 있습니다.
- **작성자** - 페이지의 작성자와 마지막 수정 날짜를 확인합니다.
- **소셜 링크** - 현재 페이지에 대한 링크 공유/인쇄.
- **페이지 편집/페이지 작업** - 현재 페이지에서 편집하거나 다른 작업을 수행하기 위한 빠른 액세스 메뉴입니다.
{.grid-list .body-2}

## 기본 사항

### 새 페이지 만들기

새 페이지를 만들려면 페이지 오른쪽 상단에 있는 **새 페이지** 버튼을 클릭하세요.

다음 대화 상자가 나타납니다.
![새 페이지 대화 상자](https://docs.requarks.io/assets/ui/ui-newpage-dialog.png =600x){.elevation-3 .radius-5}

1. 페이지를 만들 언어를 선택합니다(현재 로케일이 기본적으로 선택되어 있음).
2. 만들고자 하는 페이지의 전체 경로를 입력하세요.
   - 경로에는 공백이 없어야 하며(대시를 대신 사용하세요)*, 마침표가 없어야 하며 URL 안전 문자로 구성되어야 합니다.
   - 맨 뒤에 슬래시를 **넣지 마세요**.
   - 폴더를 만들지 않아도 됩니다. 만들려는 전체 경로를 입력하면 폴더가 자동으로 생성됩니다. 예를 들어, `article/Ann_Bendall/Adam_and_Eve`를 입력하면 `article`과 `Ann_Bendall` 하위 폴더가 자동으로 생성됩니다.
3. 계속하려면 **선택**을 클릭하세요.

### 편집자 선택

새 페이지를 만들 때 다음 대화 상자가 표시됩니다.

![편집기 선택 대화 상자](https://docs.requarks.io/assets/ui/ui-selecteditor-dialog.png =600x){.elevation-3 .radius-5}

Urantiapedia는 작성하려는 콘텐츠 유형이나 사용자 선호도에 따라 다양한 편집기를 제공합니다. 기술적인 지식이 풍부한 사용자는 일반적으로 마크다운 편집기를 사용하는 반면, 기술 지식이 부족한 사용자는 시각적 편집기를 선호할 수 있습니다.

편집기의 전체 목록과 사용 방법은 다음을 참조하세요.
- [시각적 편집기 사용](/ko/help/web_visual_editor)
- [마크다운 편집기 사용하기](/ko/help/web_markdown_editor)
- [HTML 편집기 사용하기](/ko/help/web_html_editor)

### 페이지 메타데이터 입력

편집기를 선택하면 페이지 메타데이터 대화 상자가 표시됩니다.

![페이지 메타데이터 대화 상자](https://docs.requarks.io/assets/ui/ui-pageprops-dialog.png =600x){.elevation-3 .radius-5}

페이지의 **제목**, **설명**, **태그**를 입력하세요.

마지막으로 **확인**을 클릭하여 대화 상자를 닫고 글쓰기를 시작하세요!

> 나중에 언제든지 페이지 오른쪽 상단에 있는 **페이지** 버튼을 클릭하여 페이지 메타데이터 대화 상자로 돌아갈 수 있습니다.
{.is-info}

### 페이지 저장

페이지 오른쪽 상단에 있는 **만들기** 버튼을 누르기 전까지는 페이지가 생성되지 않습니다. 페이지가 저장되고 렌더링된 후 자동으로 최종 결과로 리디렉션됩니다. 편집 버튼을 클릭하면 편집 모드로 돌아갑니다! 다른 편집기를 사용하도록 지정하지 않으면 페이지는 항상 동일한 편집기로 다시 열립니다.


<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/github_initial_flow">언어별 초기 콘텐츠 생성 워크플로</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/web_pages">페이지 관리</a></td>
      </tr>
    </tbody>
  </table>
</figure>
