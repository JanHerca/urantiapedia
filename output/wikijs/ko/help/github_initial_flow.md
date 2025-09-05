---
title: Urantiapedia - 언어로 초기 콘텐츠를 만드는 워크플로
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
        <td><a href="/ko/help/github_edit_local">GitHub 프로젝트 내용</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_paramony">파라모니 번역</a></td>
      </tr>
    </tbody>
  </table>
</figure>

*Urantiapedia*에 통합될 각 언어에 대해 다음을 시작점으로 사용합니다. _입력_:
- *우란시아서*의 공식 번역본 또는 HTML 형식의 영어 원본. 이 콘텐츠는 GitHub 프로젝트의 `input/html/book-xx` 폴더에 저장됩니다. 여기서 `xx`는 두 글자 언어 코드(`es` = 스페인어, `en` = 영어 등)입니다. 스페인어의 경우, 여러 번역본이 있으므로 `book-es`는 소위 유럽판, `book-es-1993`은 1993년판, `book-es-2021`은 2021년판 번역본을 포함합니다. 앞으로 다른 언어로 여러 번역본이 나오는 상황이 발생한다면, 이와 유사한 규칙을 적용할 것입니다.
- 해당 언어로 최대한 표준에 맞춰 번역된 *성경*의 로열티 프리 번역본입니다. 형식은 LaTeX이며, 파일은 GitHub 프로젝트의 `input/tex/bible-xx` 폴더에 저장됩니다. 여기서 `xx`는 언어 코드입니다.
- 스페인어로 된 *파라모니* 사본(스페인어 내용은 가장 중요하지 않으므로 번역 가이드 역할을 한다는 아이디어)은 `input/markdown/es/paramony`에 있습니다. *파라모니*는 `input/markdown/en/paramony`에 있는 *성경*과 *우란시아서* 사이의 일부 교차 참조입니다. 이것은 Duane L. Faw([파라모니](https://urantia-book.org/urantiabook/paramony/))가 개발한 교차 참조 관계를 사용하여 만들어졌으며, 원래 TXT 형식에서 처리하기 쉬운 마크다운 형식으로 변환되었습니다. 영어 폴더에는 모든 원본 정보가 있는 표가 있고, 나머지 언어 폴더에는 번역된 텍스트가 있는 표만 있습니다.
- 영어 *용어 색인* 사본. 이 색인은 `input/txt/topic-index-en` 폴더에 있는 파일 모음입니다. 이 TXT 파일은 *우란시아 서*의 *우란시아 펠로우십* 에디션 부록에서 가져왔습니다([주제 색인](https://urantia-book.org/urantiabook/topical_index/index.htm)). 이후 *용어 색인*으로 지칭합니다. 이 *용어 색인*은 알파벳의 각 글자에 해당하는 TXT 파일 세트로 변환되었으며, 각 영어 글자로 시작하는 용어가 포함되어 있습니다. 사본의 이름은 마지막 두 글자를 언어 코드로 변경하여 변경해야 합니다. 예를 들어 프랑스어의 경우 영어 폴더의 사본을 만들고 `input/txt/topic-index-fr`이라고 해야 합니다.

요약하자면, 프랑스어 예제의 경우 입력으로 생성될 콘텐츠는 다음과 같습니다.

```
input 
    html 
        book-fr 
            *.html 
    markdown 
        fr 
            paramony 
                *.md 
    tex 
        bible-fr 
            *.tex 
    txt 
        topic-index-fr 
            *.txt 
```
다른 언어의 경우에도 비슷한 방식으로 진행됩니다. 이 콘텐츠 중 일부는 현재 GitHub 프로젝트에서 이미 제공될 수 있습니다. 새로운 콘텐츠를 추가하기 전에 기존 콘텐츠를 검토하는 것이 좋습니다.

이전 프랑스어 콘텐츠의 결과는 다음과 같습니다.

```
output 
    wikijs 
        fr 
            Bible 
                (folders with the books of the Bible) 
                    *.html 
            index 
                *.html 
            The_Urantia_Book 
                *.html 
            The_Urantia_Book_Multiple
                *.html 
            topic 
                *.html 
```

폴더와 파일을 표시된 대로 정리한 후, 최종 파일을 만드는 데 필요한 각 작업은 *우란티피디아 도구*와 일부 수작업 편집을 사용하여 수행됩니다. 이 내용은 본 설명서의 다음 페이지에 자세히 설명되어 있습니다.

## 외부 연결

- [Urantiapedia 도구 - GitHub의 proyecto](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - proyecto en GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [유란시아 기초](https://www.urantia.org/)
- [블루 필즈](https://blue-fields.netlify.app/)
- [위키.js](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/github_edit_local">GitHub 프로젝트 내용</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_paramony">파라모니 번역</a></td>
      </tr>
    </tbody>
  </table>
</figure>