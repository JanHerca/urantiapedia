---
title: 각주 없이 HTML에서 JSON으로 우란시아 책 변환
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
        <td><a href="/ko/help/github_bible">성경 얻기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_footnotes">Paramony 각주 추가</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> 이 작업은 현재 종료되었으며, 사용 가능한 27개 언어에 대해서는 닫혔습니다.
{.is-info}

HTML 형식의 입력 파일은 `input / html / book-xx` 폴더에 있어야 합니다. 여기서 `xx`는 언어의 두 글자입니다(`es` = 스페인어, `en` = 영어 등).

> 중요: [우란티아 재단](https://www.urantia.org/urantia-book/download-text-urantia-book) 공식 웹사이트에서 다운로드한 HTML 파일은 처리하는 데 약간의 문제가 있을 수 있으며 JSON 형식으로 변환하는 과정을 돕기 위해 약간의 변경이 필요할 수 있습니다.

*우란시아 재단* 웹사이트에서 파일을 다운로드하면 *우란시아 서* 문서별로 파일(.html)이 하나씩, 총 197개 생성됩니다. 각 문서의 파일 이름은 마지막 세 글자가 문서 번호(000~196)를 나타내는 패턴을 따라야 합니다. 이렇게 해야 나중에 변환 작업을 수행할 수 있습니다. 예를 들어, 프랑스어로 문서 1의 파일 이름은 `06-Fascicule001.html`이고, 불가리아어로는 `06-Документ001.html`입니다.

HTML 형식의 *우란시아서*는 문서 제목, 섹션 제목 등에 다양한 HTML 태그를 적용할 수 있으므로, 변환을 수행하는 앱에서 새 언어를 추가할 때 일부 변경 사항을 적용해야 할 수 있습니다. 이 작업은 *우란티아피디아 도구* 개발을 담당하는 *개발자* 사용자가 담당합니다. 이 소프트웨어는 자바스크립트로 개발되었으며, 코드는 프로젝트의 `app` 폴더에 있습니다.

현재 총 27개 언어의 파일을 사용할 수 있습니다. 아랍어(`book-ar`), 불가리아어(`book-bg`), 체코어(`book-cs`), 덴마크어(`book-da`), 독일어(`book-de`), 그리스어(`book-el`), 영어(`book-en`), 스페인어(`book-es`, `book-es-1993` 및 곧 출시될 `book-es-2021`), 에스토니아어(`book-et`), 페르시아어(`book-fa`), 핀란드어(`book-fi`), 프랑스어(`book-fr`), 히브리어(`book-he`), 헝가리어(`book-hu`), 인도네시아어(`book-id`), 이탈리아어(`book-it`), 일본어(`book-ja`), 한국어(`book-ko`), 리투아니아어(`book-lt`), 네덜란드어(`book-nl`), 폴란드어(`book-pl`), 포르투갈어(`book-pt`), 루마니아어(`book-ro`), 러시아어(` book-ru`), 스웨덴어(`book-sv`), 터키어(`book-tr`), 중국어(`book-zh`) 등이 있습니다. 이 파일들은 JSON 변환 프로그램이 정상적으로 작동하도록 이미 수정 및 처리되었으며, 생성된 JSON 파일도 사용할 수 있습니다.

현재 페르시아어 번역이 진행 중이므로 모든 문서를 이용할 수 있는 것은 아닙니다.

현재 스페인어 번역본은 세 가지가 있습니다. 세 가지 번역본 모두 *우란티아피디아*에서 볼 수 있습니다. 따라서 다음 폴더가 있습니다.
- `book-es`2009년에 출판된 소위 유럽 번역본인 ;
- `book-es-1993`은 1993년에 처음으로 스페인어로 번역되었습니다.
- `book-es-2021`은 2021년에 새로 번역된 책입니다.

각주 없이 HTML 파일을 JSON으로 변환하려면 다음 단계를 따르세요.
- *우란티피디아 도구*를 엽니다.
- *진행 중*에서: Urantia Book(HTML)을 JSON으로 변환을 선택합니다.
- 폴더는 자동으로 채워집니다. *HTML 파일*의 경우 `input / html / book-xx`와 같은 폴더가 있고, *JSON 파일*의 경우 `input / json / book-xx`와 같은 폴더가 있습니다.
- *실행*을 클릭합니다.
- 모든 것이 정확하면 *변환이 성공적으로 실행되었습니다*라는 메시지가 표시됩니다. 오류가 있는 경우 오류 목록이 나타납니다. 이 경우 *개발자* 사용자에게 오류를 알리는 것이 좋습니다.

![](/image/help/upt_html_json.png)

JSON 형식의 결과 파일은 `input / json / book-xx` 폴더에 저장됩니다. 여기서 `xx`는 언어의 두 글자입니다(`es` = 스페인어, `en` = 영어 등).

> 중요: 이 파일은 사용자가 직접 생성하거나 편집해서는 안 됩니다. 항상 HTML 형식에서 변환하여 생성해야 합니다.

각 *우란시아서* 문서마다 하나의 파일, 총 197개의 파일이 있습니다. 파일 이름은 `DocXXX.json`이며, `XXX`는 `000`에서 `196`까지의 문서 번호입니다.

이 파일의 형식은 JSON(https://en.wikipedia.org/wiki/JSON)입니다. *Urantiapedia Tools*에는 이 JSON 형식을 최종 Wiki.js 형식으로 변환해 주는 변환기가 있습니다.

JSON 파일의 구조는 다음과 같습니다.

```json
{
    "paper_index": "<용지 인덱스, 0~196>",
    "sections": [
        {
            "section_index": "<섹션 인덱스, N개까지 존재하면 0>",
            "section_ref": "<섹션 참조 텍스트, “0:0”으로>",
            "section_title": "<섹션 제목(0이 아닌 섹션)>",
            "pars": [
                {
                    "par_ref": "<par ref, “0:0.1”>",
                    "par_pageref": "<페이지 기준 par 참조, “1.1”>",
                    "par_content": "<par 콘텐츠. 아래 형식을 참조하세요>"
                },
                {

                }
            ]
        },
        {

        }
    ],
    "footnotes": [
        "<성경 참조가 있는 각주 배열>"
    ],
    "paper_title": "<논문 제목, 논문 X 없음, 제목만 있음>"
}
```
이 작업으로 생성된 JSON 파일에서 `footnotes` 섹션은 비어 있습니다. 이를 완료하려면 다음 작업을 실행해야 합니다.

JSON 파일에서 *우란시아서*에 나타나는 이상한 문자로 문단의 텍스트를 서식 지정하려면 다음과 같은 동일한 문자를 사용합니다.

문자 유형 | 작성 방법
--- | ---
이탤릭체 | * * (별표 사이)
소문자 | $ $ (달러 기호 사이)
밑줄(이탤릭체 옵션이 포함되지 않은 언어의 경우) | \| \| (파이프 사이)

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
        <td><a href="/ko/help/github_bible">성경 얻기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_footnotes">Paramony 각주 추가</a></td>
      </tr>
    </tbody>
  </table>
</figure>