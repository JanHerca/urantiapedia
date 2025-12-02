---
title: Paramony의 번역
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
        <td><a href="/ko/help/web_html_editor">HTML 편집기 사용</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_bible">성경 얻기</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> 이 작업은 현재 종료되었으며, 사용 가능한 28개 언어에 대해서는 닫혔습니다.
{.is-info}

영어에서 *파라모니*를 *우란티아피디아*의 새로운 언어로 번역하는 데 필요한 단계를 설명합니다. 이는 "편집장"이 수행하는 작업입니다.

*파라모니*는 *성경*과 *우란시아서*를 상호 참조하는 파일입니다. 듀안 L. 포([파라모니](https://urantia-book.org/urantiabook/paramony/))가 개발한 상호 참조 관계를 사용하여 영어로 제작되었으며, 원래 TXT 형식에서 처리하기 쉬운 JSON 형식으로 변환되었습니다.

## 이전 절차(폐기됨)

> 이 절차는 너무 번거로워서 업데이트되었습니다. 아래를 참조하세요.
{.is-warning}

`input/json/footnotes-book-en.json`에 있는 *Paramony*의 영어 버전부터 시작합니다. 복사본을 만들고 이름을 대상 언어로 변경합니다.

*파라모니* 파일에는 각 *우란시아서* 문서에 포함될 각주(*성경*에 대한 참조 포함)가 들어 있습니다.

텍스트(`texts`)로 표시된 부분을 번역해야 하며, *성경* 책의 약어를 바꾸기 작업으로 업데이트해야 합니다.

JSON 파일의 구조는 3열 표입니다. *우란시아서*의 각 문서에는 문서 색인(`paperIndex`)을 포함하는 섹션과 세 개의 열을 포함하는 하위 섹션(`footnotes`)이 있습니다.
- 첫 번째는 각주에 나타나는 텍스트(`texts`)입니다.
- 두 번째는 각 텍스트에 해당하는 성경 참조(`bible_refs`)입니다.
- 세 번째는 *우란시아서*의 문단과 문단 내 문장에 대한 참조입니다(`위치`). 이러한 참조 패턴은 `x:yz#n`입니다. 여기서 `x:yz`는 문단 참조이고, `n`은 메모가 있는 문단 내 문장을 나타내며, 첫 번째 문장에서 시작하여 마침표로 끝나는 문장 0과 같은 방식입니다.

이런 방식으로 텍스트를 표시하면 텍스트를 Google Translator와 같은 번역기에 복사하여 붙여넣은 다음 번역 결과를 다시 붙여넣기가 더 간편해집니다.

스니펫의 예:

```json
{
    "content": [
        {
            "paperIndex": 0,
            "footnotes": {
                "texts" : [
                    [
                        "Spirit light"
                    ],
                    [
                        "Paradise Trinity",
                        "Paradise Trinity (Paul's early view)"
                    ]
                ],
                "bible_refs": [
                   [
                        "Ezk 7:55; Is 9:2; Mt 4:16; Mt 5:14-16; Lk 1:79; Lk 2:32; Jn 1:4-9; Jn 3:19-21; Jn 8:12; Jn 9:5; Jn 12:46; 1 Jn 1:5; 1 Jn 2:8"
                    ],
                    [
                        "Mt 28:19; Acts 2:32-33; 2 Co 13:14; 1 Jn 5:7",
                        "1 Co 12:4-6"
                    ]
                ],
                "locations": [
                    "0:6.9#0",
                    "0:12.2#0"
                ]
            }
        }
    ]
}
```

텍스트에 있는 따옴표를 정확하게 복사하도록 주의하십시오. 각 언어의 유효한 따옴표는 [따옴표](/ko/help/languages)에서 확인할 수 있습니다.

## 새로운 절차

*Paramony*의 기존 번역본, 예를 들어 스페인어 번역본(`input/markdown/es/paramony`)에서 시작합니다. 이 폴더의 복사본을 `input/markdown/xx` 폴더에 만들어야 합니다. 여기서 `xx`는 대상 언어 코드입니다. 예를 들어, 대상 언어가 아랍어인 경우 `paramony` 폴더를 `input/markdown/ar`로 복사해야 합니다.

*파라모니*에는 각 *우란시아 서* 문서에 반드시 포함되어야 하는 각주(*성경*에 대한 참조 포함)가 들어 있습니다.

`paramony` 폴더에는 두 개의 파일, `Bible.md`와 `The Urantia Book.md`가 있으며, 각각 *Paramony*의 *Bible*과 *The Urantia Book*에 대한 번역이 포함되어 있습니다. 각 파일은 Markdown 형식의 매우 간단한 2열 표 구조를 가지고 있습니다. 이 두 파일의 임시 복사본을 만들고 `translation` 열의 내용을 삭제하여 첫 번째 `text` 열과 슬래시 문자(`|`) 및 헤더만 남겨두기만 하면 됩니다. 즉, 줄로 구분된 영어 텍스트만 포함된 임시 파일을 만듭니다. 그런 다음 Google Translator와 같은 자동 번역기로 두 임시 파일을 번역한 다음 각 줄 뒤에 번역을 복사하면 됩니다. Visual Studio Code에는 이 작업을 매우 빠르게 만드는 텍스트를 선택하고 복사하는 옵션이 있지만 이러한 파일이 매우 길다는 점과 한 번에 1,000줄이 넘는 것을 복사하여 붙여 넣는 것은 좋지 않다는 점을 명심하세요.

최종 결과는 이 스니펫에 표시된 것과 같아야 합니다(예: 스페인어의 경우):

```md
| text                                        | translation                             |
| --------------------------------------------| ----------------------------------------|
| “Amen” as ritual                            | «Amen» como ritual                      |
| “Blind” man converted                       | La conversión del hombre «ciego»        |
| “Blind” man's speech                        | El discurso del hombre «ciego»          |
| “By what authority do you do these things?” | «¿Con qué autoridad haces estas cosas?» |
| “Children of light”                         | «Hijos de la luz»                       |
```
이 절차는 번역기가 JSON에서 일반적인 이상한 문자를 처리할 필요가 없다는 점에서 기존 절차에 비해 이점이 있습니다. 여기서 번역하는 것은 줄로 구분된 일반 텍스트뿐이므로 작업이 크게 용이해지고 속도가 빨라집니다.

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
        <td><a href="/ko/help/web_html_editor">HTML 편집기 사용</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_bible">성경 얻기</a></td>
      </tr>
    </tbody>
  </table>
</figure>