---
title: 페이지 관리
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
        <td><a href="/ko/help/web_basics">Urantiapedia의 인터페이스 및 기본 사용</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/web_editors">편집기 사용</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## 페이지 만들기

새로운 페이지를 만드는 방법은 여러 가지가 있습니다.

- 페이지 오른쪽 상단에 있는 **새 페이지** 버튼을 클릭하세요.
- 존재하지 않는 페이지를 가리키는 링크를 클릭합니다.
- 브라우저 주소창에 경로를 직접 입력하세요.

[Urantiapedia의 인터페이스 및 기본 사용](/ko/help/web_basics) 가이드를 확인하여 단계별로 첫 페이지를 만드는 방법을 알아보세요.


## 페이지 편집

모든 페이지의 오른쪽 하단에 있는 **연필** 아이콘을 클릭하거나 페이지 오른쪽 상단에 있는 **페이지 메뉴**를 사용하여 기존 페이지를 편집할 수 있습니다.

페이지를 처음 생성할 때 선택한 편집기가 자동으로 로드됩니다. 페이지를 생성한 후에는 [편집기 변경](/ko/help/web_editors)을 할 수 있습니다.

## 폴더

Urantiapedia는 페이지를 구성할 때 기존의 폴더 구조를 사용하지 않습니다. 대신, 페이지의 경로를 사용합니다.

예를 들어, 기존 시스템에서 `article/Ann_Bendall/Adam_and_Eve`라는 페이지를 만들려면 먼저 `article`이라는 폴더를 만든 다음, 이 폴더를 열고 `Ann_Bendall`이라는 이름의 하위 폴더를 만들어야 마지막으로 그 안에 `Adam_and_Eve`라는 이름의 페이지를 만들 수 있습니다.

Urantiapedia에서는 `article/Ann_Bendall/Adam_and_Eve` 경로에 페이지를 직접 생성할 수 있습니다. `article`과 `Ann_Bendall` 폴더는 자동으로 유추되지만, 페이지 경로 컨텍스트 외부에는 실제로 존재하지 않습니다. 따라서 폴더를 관리할 필요가 없으며, 페이지에 사용할 경로에만 집중할 수 있습니다.

이러한 이유로 폴더를 생성할 수 없습니다. 원하는 전체 경로를 입력하세요. 폴더는 생성 시 자동으로 추론됩니다.

## 명명 제한

다음 경로는 콘텐츠에 사용할 수 없으며 시스템에서만 사용할 수 있습니다.

### 단일 문자 페이지

**모든** 단일 문자 경로는 Urantiapedia의 다양한 부분에 액세스하기 위해 예약되어 있습니다.

- `a`: 관리 구역
- `c`: 주석
- `e`: 페이지 편집기
- `f`: 자산 관리자
- `h`: 페이지 기록
- `i`: ID로 페이지 탐색
- `p`: 사용자 프로필
- `s`: 페이지 소스
- `t`: 태그
- `u`: 엔드포인트 업로드 *(API)*
- `w`: 개인 위키
{.grid-list}

### IETF 언어 태그

아래 나열된 형식의 언어 태그는 사용할 로케일 네임스페이스를 지정하기 위해 예약되어 있습니다.

- 두 글자 언어 코드(예: `en`, `fr`)
- 국가별 로케일 코드(예: `en-us`, `fr-ca`)
{.grid-list}

### 예약어

경로는 아래 용어와 정확히 일치할 수 없으며 경로의 첫 번째 부분일 수 없습니다. 예를 들어 `register` 또는 `register/test`는 유효한 경로가 아니지만 `registering`은 가능합니다.

- _assets
- favicon *\[.ico]*
- graphql
- healthz
- home *(루트 홈페이지용으로 예약됨)*
- login
- logout
- register
{.grid-list}

### 불법 문자

경로에는 다음 문자가 포함될 수 없습니다.

- 공백 *(대시를 대신 사용하세요)*
- 마침표 *(파일 확장자용으로 예약됨)*
- 안전하지 않은 URL 문자*(예: 구두점, 따옴표, 수학 기호 등)*

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/web_basics">Urantiapedia의 인터페이스 및 기본 사용</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/web_editors">편집기 사용</a></td>
      </tr>
    </tbody>
  </table>
</figure>