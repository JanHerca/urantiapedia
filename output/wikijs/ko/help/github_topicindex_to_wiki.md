---
title: 백과사전을 TXT에서 Wiki.js로 변환
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
        <td><a href="/ko/help/github_topicindex">백과사전 개정판 번역</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_diagrams_catalog">다이어그램 카탈로그</a></td>
      </tr>
    </tbody>
  </table>
</figure>

TXT 형식의 *백과사전* 파일은 *편집장*이 작성하고 검토합니다. 이 파일들은 `input / txt / topic-index-xx`와 같은 폴더에 저장해야 합니다. 여기서 `xx`는 대상 언어의 코드입니다.

이러한 TXT 파일을 Wiki.js 형식으로 변환하려면 다음 단계를 따르세요.
- *우란티페디아 도구*를 엽니다.
- *진행 중*에서: 백과사전(TXT)을 Wiki.js로 변환을 선택합니다.
- 폴더는 자동으로 채워집니다. *TXT 파일*의 경우 `input / txt / topic-index-xx`와 같은 폴더가 있고, *HTML 파일*의 경우 `output / wikijs / xx / topic`과 같은 폴더가 있습니다(단, `xx` = `en`인 경우 생략). 출력 폴더가 있는 경우 프로젝트에 모든 경로를 생성합니다. 출력 폴더에 이미 Wiki.js 파일이 있는 경우 기존 파일은 덮어쓰여집니다.
- *주제 카테고리*에서 `모두`를 선택하면 모든 카테고리의 모든 주제가 처리되고, 반대로 하나의 카테고리만 선택하면 해당 카테고리에 속하는 주제만 생성됩니다.
- *실행*을 클릭합니다.
- 모든 것이 정확하면 *변환이 성공적으로 실행되었습니다*라는 메시지가 표시됩니다. 오류가 있는 경우 오류 목록이 나타납니다. 이 경우 *개발자* 사용자에게 오류를 알리는 것이 좋습니다.

![](/image/help/upt_txt_wiki.png)

출력 파일은 HTML 형식입니다. 각 주제별로 파일이 생성됩니다.

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
        <td><a href="/ko/help/github_topicindex">백과사전 개정판 번역</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_diagrams_catalog">다이어그램 카탈로그</a></td>
      </tr>
    </tbody>
  </table>
</figure>