---
title: JSON으로 Urantia Book에 각주 추가
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
        <td><a href="/ko/help/github_book_json">JSON으로 변환</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_book_to_wiki">우란시아서 변환</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> 이 작업은 현재 종료되었으며, 사용 가능한 28개 언어에 대해서는 닫혔습니다.
{.is-info}

## 이전 절차(폐기됨)

> 이 절차는 너무 번거로워서 업데이트되었습니다. 아래를 참조하세요.
{.is-warning}

*우란시아서*에 각주를 추가하려면 먼저 다음 작업을 완료해야 합니다.
- 영어에서 대상 언어로 *Paramony*를 번역합니다. 이 작업의 결과는 각 언어별 파일(`input / json / footnotes-book-xx.json`)입니다.
- 이전 작업으로 *우란시아서*를 HTML에서 각주 없는 JSON으로 변환했습니다. 이 작업의 결과로 각 언어별 폴더(`input / json / book-xx`)에 197개의 파일이 생성됩니다.

JSON 파일에 각주를 추가하려면 다음 단계를 따르세요.
- *우란티페디아 도구*를 엽니다.
- *진행 중*에서: 우란시아서의 성경 참조 업데이트(JSON)를 선택합니다.
- 폴더는 자동으로 채워집니다. *JSON 파일*의 경우 `input / json / book-xx`와 같은 폴더가 있습니다.
- *실행*을 클릭합니다.
- 모든 것이 정확하면 *변환이 성공적으로 실행되었습니다*라는 메시지가 표시됩니다. 오류가 있는 경우 오류 목록이 나타납니다. 이 경우 *개발자* 사용자에게 오류를 알리는 것이 좋습니다.

![](/image/help/upt_json_json.png)

출력 파일은 입력 파일과 다르게 저장되므로 문제 발생 시 사용할 수 없게 됩니다. 출력 파일은 `input / json / book-xx-footnotes` 폴더에 저장됩니다. 여기서 `xx`는 입력 폴더와 동일한 언어 코드입니다.

## 새로운 절차

*우란시아서*에 각주를 추가하려면 다음 작업을 완료해야 합니다.
- 영어에서 대상 언어로 *파라모니*를 번역합니다. 이 작업의 결과물은 각 언어별로 하나의 파일(`input/markdown/xx/paramony/The Urantia Book.md`)입니다.
- 각주 없는 HTML에서 JSON으로 *우란시아서*를 사전 변환합니다. 이 작업의 결과로 각 언어별 폴더(`input/json/book-xx`)에 197개의 파일이 생성됩니다.

JSON 파일에 각주를 추가하려면 다음 단계를 따르세요.
- *우란티페디아 도구*를 엽니다.
- *진행 중*에서 *우란시아서*의 성경 참조 업데이트(마크다운)를 선택합니다.
- 필요한 폴더가 자동으로 선택됩니다. *JSON 파일*의 경우 `input/json/book-xx`가 됩니다.
- *실행*을 클릭합니다.
- 모든 것이 정확하면 *변환이 성공적으로 완료되었습니다*라는 메시지가 나타납니다. 오류가 있는 경우 오류 목록이 나타납니다. 이 경우 소프트웨어에 문제가 있을 경우를 대비하여 "개발자" 사용자 중 한 명에게 알리는 것이 좋습니다.

출력 파일은 문제 발생 시 사용할 수 없게 되는 것을 방지하기 위해 입력 파일과 다릅니다. 출력 파일은 `input/json/book-xx-footnotes` 폴더에 저장되며, 여기서 `xx`는 입력 폴더로 사용된 언어 코드와 동일합니다.

![](/image/help/upt_md_json.png)

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
        <td><a href="/ko/help/github_book_json">JSON으로 변환</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_book_to_wiki">우란시아서 변환</a></td>
      </tr>
    </tbody>
  </table>
</figure>