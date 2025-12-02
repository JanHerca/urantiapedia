---
title: 각주가 포함된 JSON에서 주제에 대한 참조를 포함한 Urantia Book을 Wiki.js로 변환
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
        <td><a href="/ko/help/github_footnotes">Paramony 각주 추가</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_bible_to_wiki">성경 변환</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> 이 작업은 현재 종료되었으며, 사용 가능한 28개 언어에 대해서는 닫혔습니다.
{.is-info}

*우란시아 책* 파일은 각주가 포함된 JSON 형식으로, 앞서 살펴본 바와 같이 *우란시아 책의 성경 참조 업데이트(JSON)* 도구를 사용하여 생성되며, 결과 파일은 `입력 폴더 /json / book-xx-footnotes`에 저장됩니다.

JSON 파일을 Wiki.js 형식으로 변환하려면 다음 단계를 따르세요.
- *우란티페디아 도구*를 엽니다.
- *진행 중*에서: Urantia Book(JSON) + Encyclopedia(TXT)를 Wiki.js로 변환을 선택합니다.
- 폴더는 자동으로 채워집니다. *TXT 파일*의 경우 `input / txt / topic-index-xx`와 같은 폴더, *JSON 파일*의 경우 `input / json / book-xx-footnotes`와 같은 폴더, *HTML 파일*의 경우 `output / wikijs / xx / The_Urantia_Book`와 같은 폴더가 생성됩니다(단, `xx` = `en`인 경우 생략). 출력 폴더가 있는 경우 프로젝트에 해당 경로를 생성하세요. 출력 폴더에 이미 Wiki.js 파일이 있는 경우 기존 파일은 덮어쓰여집니다.
- *주제 범주*에서 `모두`를 선택하면 변환 과정을 수행할 때 모든 범주의 모든 주제가 사용되고 *우란시아서*의 링크가 모든 주제에 추가됩니다. 또는 하나의 범주만 선택하여 해당 범주에 속하는 주제에 대한 링크만 생성합니다.
- *실행*을 클릭하세요.
- 모든 것이 정확하면 *변환이 성공적으로 실행되었습니다*라는 메시지가 표시됩니다. 오류가 있는 경우 오류 목록이 나타납니다. 이 경우 *개발자* 사용자에게 오류를 알리는 것이 좋습니다.

![](/image/help/upt_json_wiki.png)

출력 파일은 HTML 형식입니다. *우란시아서*의 각 문서에 대해 하나씩, 총 197개의 파일이 생성됩니다.

출력 파일은 이미 [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup) 프로젝트를 사용하여 *Urantiapedia*에 직접 업로드할 수 있는 형식으로 되어 있습니다. [Urantiapedia에 콘텐츠 대량 업로드](/ko/help/github_upload)를 확인하세요.

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
        <td><a href="/ko/help/github_footnotes">Paramony 각주 추가</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_bible_to_wiki">성경 변환</a></td>
      </tr>
    </tbody>
  </table>
</figure>