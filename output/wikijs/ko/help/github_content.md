---
title: Urantiapedia - GitHub 프로젝트 내용
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
        <td><a href="/ko/help/github_edit_local">PC에서 로컬로 작업하기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_initial_flow">언어별 초기 콘텐츠 생성 워크플로</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## *Urantiapedia* 프로젝트의 조직

GitHub Github에서 *Urantiapedia* 프로젝트를 구성하는 폴더는 다음과 같습니다.
- **.vscode**: *Urantiapedia Tools*의 개발 IDE인 Visual Studio Code의 구성 파일입니다.
- **app**: *Urantiapedia Tools* 애플리케이션의 JavaScript 소스 코드 파일입니다.
- **css**: 마크다운 파일을 더 잘 표시하기 위한 일부 CSS 파일입니다.
- **docs**: 프로젝트에 대한 일부 문서이지만 주요 도움말은 `output/wikijs/help`에 있습니다.
- **docs**: *우란티피아디아*의 여러 페이지를 생성하는 데 사용되는 입력 파일이 들어 있는 기본 폴더입니다.
  - **html**: HTML 형식의 파일이 있는 폴더입니다.
    - **book-xx**: *우란시아 재단*에서 얻은 원본 HTML 형식의 *우란시아 서*(`book-es`, `book-en` 등)
  - **json**: JSON 형식의 파일이 있는 폴더.
    - **book-xx**: JSON 형식의 *우란시아서*이지만 *파라모니*의 각주가 없습니다(`book-es`, `book-en` 등).
    - **book-xx-footnotes**: JSON 형식의 *우란시아서*의 다양한 번역본이지만, *파라모니*의 각주가 포함되어 있습니다(`book-es-footnotes`, `book-en-footnotes` 등).
    - **footnotes-book-xx.json** `더 이상 사용되지 않음`: JSON 형식의 *Paramony*의 이전 버전입니다.
  - **kml**: 지도를 생성하는 데 사용되는 KML 및 CSV 파일로, 각 파일은 언어별 폴더(`en`, `es` 등)에 들어 있습니다.
  - **markdown** / **xx** (`en`, `es` 등):  
    - **paramony**: 최신 버전의 Paramony가 포함되어 있습니다. 이전에는 JSON 파일을 사용했지만, 이제는 마크다운 파일을 사용합니다. 영어 파일에는 주요 표가 포함되어 있으며, 다른 언어 파일은 번역본입니다.
    - **기타 폴더**: PDF/DOCX 형식에서 변환하거나 스캔하여 얻은 기사 및 서적의 임시 마크다운 파일로, 각 언어(`en`, `es` 등)별 폴더 안에 들어 있습니다. 이 폴더의 내용은 수정되어 출력 폴더로 이동되므로 시간이 지나도 보존되지 않습니다.
    - **3dmodels_catalog\.md**: 3D 모델 카탈로그입니다. 영어 파일에는 주요 표가 포함되어 있으며, 다른 언어 파일은 번역본입니다.
    - **image_catalog\.md**: 이미지 카탈로그입니다. 영어 파일에는 주요 표가 포함되어 있으며, 다른 언어 파일은 번역본입니다.
    - **map_catalog\.md**: 지도 카탈로그입니다. 영어 파일에는 주요 표가 포함되어 있으며, 다른 언어 파일은 번역본입니다.
    - **paralells\.md** : _우란시아서_와 나머지 내용(기사, 성경, 다른 책 등) 간의 유사점을 정리한 일반 목록입니다.
  - **mediawiki** `사용 중단`: 미디어위키용 위키텍스트 형식의 이전 콘텐츠가 담긴 폴더입니다. *우란티아피디아*의 첫 번째 버전은 미디어위키로 제작되었지만, 현재 버전은 *Wiki.js*로 제작되었습니다.
    - **articles-xx**: 위키텍스트 형식의 문서 예시를 담은 더 이상 사용되지 않는 폴더입니다.
    - **main-pages-xx**: Wikitext 형식의 도움말 콘텐츠가 있는 더 이상 사용되지 않는 폴더입니다.
    - **modules**: MediaWiki 템플릿을 만드는 스크립팅 언어인 Lua로 작성된 모듈입니다.
    - **sample**: Wikitext 형식의 이전 샘플 콘텐츠입니다.
    - **templates**: 미디어위키 형식의 재사용 가능한 조각인 *Urantipedia*용 템플릿입니다.
  - **svg**: 일부 SVG 파일.
  - **tex**: LaTeX 형식의 파일이 있는 폴더입니다.
    - **bible-xx**: LaTeX 형식(`bible-es`, `bible-en` 등)으로 번역된 *성경*
  - **txt**: TXT 형식의 파일이 있는 폴더.
    - **articles-xx**: TXT 형식의 샘플 기사(`articles-es`,`articles-en` 등).
    - **bible-refs-xx** `더 이상 사용되지 않음`: TXT 형식의 _Paramony_ (_우란시아서_에 대한 성경 교차 참조)의 이전 버전(`bible-refs-es`, `bible-refs-en` 등).
    - **books-xx** : 우란티아페디아 도서관의 도서 목록입니다.
    - **topic-index-xx**: TXT 형식으로 각 언어로 번역된 *용어 색인* (`topic-index-es`, `topic-index-en` 등)  
- **output**: *Urantipedia* 웹사이트에 대량으로 업로드될 출력 파일이 있는 폴더입니다.
  - **wikijs**: *Wiki.js*에서 지원하는 형식의 콘텐츠를 담고 있는 폴더입니다.
    - **xx**: 각 언어별 콘텐츠가 개별 폴더(`en`, `es` 등)에 있습니다. 각 언어의 구조는 동일하며 다음과 같습니다.
      - **3dmodel**: 미디어 라이브러리(3D 모델).
      - **article**: 신문 자료실(기사 및 학습 자료), 저자별 폴더로 정리. 일반적으로 마크다운 형식입니다.
      - **Bible**: 성경 내용. :경고: 중요: 이 폴더의 파일은 *편집해서는 안 됩니다*. 대신 `input` 폴더의 파일을 편집한 후 *우란티페디아 도구*를 사용하세요.
      - **book**: 저자별로 폴더로 정리된 도서 라이브러리입니다. 일반적으로 마크다운 형식입니다.
      - **help**: Urantiapedia 도움말 페이지. 마크다운 형식입니다.
      - **index**: 색인. :warning: 중요: 이 폴더의 일부 파일은 편집해서는 안 됩니다. 대신 *Urantiapedia Tools*를 사용하여 색인을 생성하세요.
      - **map**: 지도 라이브러리. 현재는 Google 지도를 가리키는 *iframe*을 포함한 마크다운 형식으로 제공되지만, 앞으로는 KML 파일만 저장될 예정입니다.
      - **news**: 마크다운 형식의 월별 프로젝트 업데이트.
      - **slides**: 미디어 라이브러리(프레젠테이션).
      - **tests**: 향후 콘텐츠를 테스트할 수 있는 페이지입니다.
      - **The_Urantia_Book** 및 **The_Urantia_Book_Multiple**: 우란시아 책 문서. :경고: 중요: 이 폴더의 파일은 *편집해서는 안 됩니다*. 대신 `input` 폴더의 파일을 편집한 후 *우란티아피디아 도구*를 사용하세요.
      - **topic**: 백과사전. :경고: 중요: 이 폴더의 파일은 *편집해서는 안 됩니다*. 대신 `input` 폴더의 파일을 편집한 후 *Urantiapedia 도구*를 사용하세요.
    - **image**: 사이트의 이미지입니다.
    - **tests**: 향후 콘텐츠를 테스트할 수 있는 페이지입니다.

*더 이상 사용되지 않음*으로 표시된 폴더는 더 이상 프로세스에 사용되지 않는 자료를 포함하고 있으며 향후 제거될 가능성이 높으므로 무시할 수 있습니다.

폴더에 사용되는 언어 코드는 각 언어에 대해 두 글자를 사용하는 ISO 639-1 표준을 따라야 합니다. https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

새 언어에 대한 콘텐츠를 생성할 때 고려해야 할 폴더는 다음과 같습니다.
- `input/html` 
- `input/json` 
- `input/markdown` 
- `input/tex` 
- `input/txt` 

현재 스페인어 번역본은 세 가지가 있다는 점을 기억해 두세요. 세 가지 번역본 모두 *우란티아피디아*에서 볼 수 있습니다. 따라서 다음 폴더가 있습니다.
- `book-es`2009년에 출판된 소위 유럽 번역본인 ;
- `book-es-1993`은 1993년에 처음으로 스페인어로 번역되었습니다.
- `book-es-2021`은 2021년에 새로운 번역이 완료되었습니다.

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
        <td><a href="/ko/help/github_edit_local">PC에서 로컬로 작업하기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_initial_flow">언어별 초기 콘텐츠 생성 워크플로</a></td>
      </tr>
    </tbody>
  </table>
</figure>