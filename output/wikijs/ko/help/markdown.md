---
title: 마크다운 형식 도움말
description: 
published: true
date: 2022-09-06T09:08:14.892Z
tags: help
editor: markdown
dateCreated: 2022-08-01T19:59:13.093Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/web_markdown_editor">마크다운 편집기 사용</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/web_html_editor">HTML 편집기 사용</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## 개요

마크다운은 일반 텍스트 서식 구문을 사용하는 가벼운 마크업 언어입니다. GitHub과 같은 주요 코드 저장소에서 문서를 작성할 때 사실상 표준 구문으로 사용됩니다.

*Urantiapedia*는 전체 [CommonMark 사양](https://spec.commonmark.org/)을 지원하고, 몇 가지 유용한 확장 기능(Github Flavored Markdown 애드온 포함)을 추가합니다.

*우란티피디아*에서 지원되는 마크다운 마크업의 포괄적인 목록입니다. 지원되는 각 요소에는 편집기에서 사용하는 방법, 단축키(있는 경우), 마크업 및 결과 예시가 포함되어 있습니다. 어떤 페이지에서든 마크다운 형식을 사용하기 전에 사용 가능한 모든 옵션을 살펴보세요.

---

## 제목
### 탭 {.tabset}

#### 용법
텍스트 선택 영역 앞에 1~6개의 **해시태그** 기호를 넣고 공백을 넣습니다.

#### 단축키
- 원하는 줄에서 도구 모음의 ![헤더](https://docs.requarks.io/assets/ui/ui-markdown-headers.png =x30){.radius-4} 드롭다운 버튼을 클릭합니다.
- 원하는 줄에서 <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>오른쪽</kbd>을 눌러 헤더 수준을 높입니다.
- 원하는 줄에서 <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>왼쪽</kbd>을 눌러 헤더 수준을 낮춥니다.

#### 예

**가격 인하**
```
# h1 제목 8-)
## h2 제목
### h3 제목
#### h4 제목
##### h5 제목
###### h6 제목
```
**결과**
<div style="padding-bottom:5px;color: #1565c0; font-size: 2em;font-weight:bold;background:linear-gradient(90deg,#1976d2,rgba(25,118,210,0)) 왼쪽 하단 #fff0 no-repeat;;background-size:100% 3px;">h1 제목 <img src="/_assets/svg/twemoji/1f60e.svg" alt="😎" draggable="false" class="emoji"></div>
<div style="padding-bottom:5px;color: #424242; font-size: 1.5em;font-weight: bold;background:linear-gradient(90deg,#424242,rgba(25,118,210,0)) 왼쪽 하단 #fff0 no-repeat;;background-size:100% 1px;">h2 제목</div>
<div style="padding-bottom:5px;color: #616161; font-size: 1.17em;font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) 왼쪽 하단 #fff0 no-repeat;;background-size:100% 1px;">h3 제목</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) 왼쪽 하단 #fff0 no-repeat;;background-size:100% 1px;">h4 제목</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) 왼쪽 하단 #fff0 no-repeat;;background-size:100% 1px;">h5 제목</div>
<div style="padding-bottom:5px;color: #616161; font-weight: bold;background:linear-gradient(90deg,#616161,rgba(25,118,210,0)) 왼쪽 하단 #fff0 no-repeat;;background-size:100% 1px;">h6 제목</div>

지원되는 이모티콘 목록은 아래를 참조하세요.

## 수평선

### 탭 {.tabset}

#### 용법

전용 회선에서 **삼중 대시** 기호를 사용합니다.

#### 단축키
- 도구 모음에서 ![수평 규칙](https://docs.requarks.io/assets/ui/ui-markdown-hr.png =x30){.radius-4} 버튼을 클릭합니다.

#### 예시

**가격 인하**
```
___
---
***
```
**결과**
___
---
***

## 인쇄체 대체

### 탭 {.tabset}

#### 용법
평소처럼 텍스트를 입력하세요.

#### 예시

**가격 인하**
```
(c) (C) (r) (R) (tm) (TM) (p) (P) +-

테스트.. 테스트... 테스트..... 테스트?..... 테스트!....

!!!!!! ???? ,, -- ---

"똑똑한 사람들, 큰따옴표"와 "작은따옴표"
```
**결과**

© © ® ® ™ ™ § § ±

테스트… 테스트… 테스트… 테스트?.. 테스트!..

!!! ??? , –—

"똑똑한 사람들, 큰따옴표"와 "작은따옴표"

## 강조

### 탭 {.tabset}

#### 용법

이탤릭체: 텍스트 선택 영역 앞뒤에 **별표 하나**를 사용합니다.

굵게: 텍스트 선택 영역 앞뒤에 **별표 두 개** 기호를 사용합니다.

#### 단축키
- 텍스트를 선택한 다음 도구 모음에서 ![굵게](https://docs.requarks.io/assets/ui/ui-markdown-bold.png =x30){.radius-4} 버튼을 클릭합니다.
- 텍스트를 선택한 다음 <kbd>CTRL</kbd> + <kbd>B</kbd>를 누릅니다.

#### 예시

**가격 인하**
```
**이것은 굵은 글씨입니다**
__이것은 굵은 글씨입니다__
*이것은 이탤릭체 텍스트입니다*
_이것은 이탤릭체 텍스트입니다_
~~취소선~~
***굵게 & 기울임체***
```
**결과**
**이것은 굵은 글씨입니다**
__이것은 굵은 글씨입니다__
*이것은 이탤릭체 텍스트입니다*
_이것은 이탤릭체 텍스트입니다_
~~취소선~~
***굵게 & 기울임체***

## 인용구

### 탭 {.tabset}

#### 용법
각 줄의 텍스트 앞에 **보다 큼** 기호와 공백을 넣습니다.

#### 단축키
- 텍스트를 선택한 다음 도구 모음에서 ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-blockquotes.png =x30){.radius-4} 버튼을 클릭합니다.

#### 예제 1

**가격 인하**
```
> 인용문은 중첩될 수도 있습니다...
>> ... '보다 큼' 기호를 바로 옆에 붙여서...
> > > ...또는 화살표 사이에 공백을 넣어도 됩니다.
```
**결과**
> 인용문은 중첩될 수도 있습니다...
>> ... '보다 큼' 기호를 바로 옆에 붙여서...
> > > ...또는 화살표 사이에 공백을 넣어도 됩니다.

#### 예제 2

사용자 정의 블록 인용문
**가격 인하**
```
> 이것은 정보 블록 인용문입니다.
{.is-info}

> 이것은 성공적인 인용문입니다.
{.is-success}

> 이것은 경고 블록 인용문입니다.
{.is-warning}

> 이것은 오류 블록 인용문입니다.
{.is-danger}
```
**결과**
> 이것은 정보 블록 인용문입니다.
{.is-info}

> 이것은 성공적인 인용문입니다.
{.is-success}

> 이것은 경고 블록 인용문입니다.
{.is-warning}

> 이것은 오류 블록 인용문입니다.
{.is-danger}

## 순서 없는 목록

### 탭 {.tabset}

#### 용법

각 줄의 텍스트 앞에 **별표** 또는 **대시** 기호를 넣고 그 뒤에 공백을 넣습니다.

#### 단축키
- 텍스트를 선택한 다음 도구 모음에서 ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-ul.png =x30){.radius-4} 버튼을 클릭합니다.

#### 예시

**가격 인하**
```
+ `+`, `-` 또는 `*`로 줄을 시작하여 목록을 만듭니다.
+ 하위 목록은 2칸 들여쓰기로 만들어집니다.
  - 마커 문자 변경 시 새 목록이 시작됩니다.
    * Ac tristique libero volutpat at
    + 프레튬 니슬 알리케(pretium nisl aliquet)의 시설
    - Nulla volutpat aliquam velit
+ 매우 쉽습니다!
```
**결과**
+ `+`, `-` 또는 `*`로 줄을 시작하여 목록을 만듭니다.
+ 하위 목록은 2칸 들여쓰기로 만들어집니다.
  - 마커 문자 변경 시 새 목록이 시작됩니다.
    * Ac tristique libero volutpat at
    + 프레튬 니슬 알리케(pretium nisl aliquet)의 시설
    - Nulla volutpat aliquam velit
+ 매우 쉽습니다!

#### 스타일링

목록 뒤에 별도 줄에 클래스를 추가하면 목록의 모양을 변경할 수 있습니다.

- `링크 목록`
- `그리드 리스트`

**가격 인하**

```마크다운
- 그리드 항목 1
- 그리드 항목 2
- 그리드 항목 3
{.grid-list}

- [Lorem ipsum dolor sit amet *자막 설명은 여기에*](https://www.google.com)
- [Consectetur adipiscing elit *여기에 또 다른 자막 설명이 있습니다*](https://www.google.com)
- [Morbi vehicula aliquam *여기에 세 번째 자막 설명*](https://www.google.com)
{.links-list}
```
**결과**

- 그리드 항목 1
- 그리드 항목 2
- 그리드 항목 3
{.grid-list}

그리고:

- [링크 제목 1 *자막 설명은 여기에 있습니다*](https://www.google.com)
- [링크 제목 2 *여기에 또 다른 자막 설명이 있습니다*](https://www.google.com)
- [링크 제목 3 *세 번째 자막 설명은 여기에 있습니다*](https://www.google.com)
{.links-list}

> 이러한 스타일은 Urantiapedia에만 적용되며 다른 애플리케이션에서는 표준 목록 스타일로 대체됩니다.
{.is-경고}

## 순서 있는 목록

### 탭 {.tabset}

#### 용법

각 줄의 텍스트 앞에 **숫자** 다음에 **점** 기호, 공백을 넣습니다.

#### 단축키
- 텍스트를 선택한 다음 도구 모음에서 ![Blockquote](https://docs.requarks.io/assets/ui/ui-markdown-ol.png =x30){.radius-4} 버튼을 클릭합니다.

#### 예제 1

**가격 인하**
```
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing 엘리트
3. 마사의 정수 몰레스티 로렘


1. 순차적인 숫자를 사용할 수 있습니다.
1. ...또는 모든 숫자를 `1`로 유지합니다.
```
**결과**
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing 엘리트
3. 마사의 정수 몰레스티 로렘


1. 순차적인 숫자를 사용할 수 있습니다.
1. ...또는 모든 숫자를 `1`로 유지합니다.

#### 예제 2
오프셋으로 번호 매기기를 시작하세요:

**가격 인하**
```
1. 푸
2. 바
```
**결과**
57. 푸
1. 바

## 코드

### 인라인 코드

### 탭 {.tabset}

#### 용법

선택한 텍스트의 앞과 뒤에 **백틱**을 사용합니다.

#### 단축키
- 텍스트를 선택한 다음 도구 모음에서 ![인라인 코드](https://docs.requarks.io/assets/ui/ui-markdown-inlinecode.png =x30){.radius-4} 버튼을 클릭합니다.

#### 예시

**가격 인하**
```
인라인 `코드`

```
**결과**
인라인 `코드`

### 들여쓰기된 코드

### 탭 {.tabset}

#### 용법

각 줄 앞에 탭을 추가합니다.

#### 예시

**가격 인하**
```
    // 몇 가지 의견
    코드의 1번째 줄
    코드의 2번째 줄
    코드의 3번째 줄

```
**결과**
    // 몇 가지 의견
    코드의 1번째 줄
    코드의 2번째 줄
    코드의 3번째 줄

### 블록 코드 "펜스"

### 탭 {.tabset}

#### 용법

전용 줄에서는 텍스트 선택 앞뒤에 **세 개의 백틱 기호**를 사용합니다.

#### 단축키

- 왼쪽 도구 모음의 **코드 블록** 도구를 사용합니다.

#### 예시

**가격 인하**
~~~
```
샘플 텍스트는 다음과 같습니다...
```
~~~
**결과**
```
샘플 텍스트는 다음과 같습니다...
```

### 구문 강조

### 탭 {.tabset}

#### 용법

전용 줄에서는 텍스트 선택 앞과 뒤에 **세 개의 백틱 기호**를 사용하고, 그 다음에 프로그래밍 언어 코드(`js`, `html`, `css` 등)를 사용합니다.

#### 단축키
- 왼쪽 도구 모음의 **코드 블록** 도구를 사용합니다.

#### 예시

**가격 인하**
~~~
```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```
~~~
**결과**

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## 테이블

### 탭 {.tabset}

#### 용법

**수직 막대**를 사용하여 표의 셀을 구분합니다.

#### 예제 1

**가격 인하**

```
| 옵션 | 설명 |
| ------ | ----------- |
| 데이터 | 템플릿에 전달될 데이터를 제공하는 데이터 파일의 경로입니다. |
| 엔진 | 템플릿 처리에 사용할 엔진입니다. 기본값은 Handlebars입니다. |
| ext | dest 파일에 사용할 확장자입니다. |
```

**결과**

| 옵션 | 설명 |
| ------ | ----------- |
| 데이터 | 템플릿에 전달될 데이터를 제공하는 데이터 파일의 경로입니다. |
| 엔진 | 템플릿 처리에 사용할 엔진입니다. 기본값은 Handlebars입니다. |
| ext | dest 파일에 사용할 확장자입니다. |


#### 예제 2

오른쪽 정렬 열

**가격 인하**

```
| 옵션 | 설명 |
| ------:| -----------:|
| 데이터 | 템플릿에 전달될 데이터를 제공하는 데이터 파일의 경로입니다. |
| 엔진 | 템플릿 처리에 사용할 엔진입니다. 기본값은 Handlebars입니다. |
| ext | dest 파일에 사용할 확장자입니다. |
```

**결과**

| 옵션 | 설명 |
| ------:| -----------:|
| 데이터 | 템플릿에 전달될 데이터를 제공하는 데이터 파일의 경로입니다. |
| 엔진 | 템플릿 처리에 사용할 엔진입니다. 기본값은 Handlebars입니다. |
| ext | dest 파일에 사용할 확장자입니다. |

## 링크

### 탭 {.tabset}

#### 용법

`[링크 텍스트](링크 대상)` 구문을 사용합니다.

#### 입장
- 왼쪽 도구 모음의 **링크** 도구를 사용합니다.

#### 예시

**가격 인하**

```
[링크 텍스트](http://dev.nodeca.com)

[제목이 있는 링크](http://nodeca.github.io/pica/demo/ "제목 텍스트!")

자동 변환된 링크 https://github.com/nodeca/pica (linkify를 활성화하여 확인하세요)
```

**결과**

[링크 텍스트](http://dev.nodeca.com)

[제목이 있는 링크](http://nodeca.github.io/pica/demo/ "제목 텍스트!")

자동 변환된 링크 https://github.com/nodeca/pica (linkify를 활성화하여 확인하세요)


## 이미지

### 탭 {.tabset}

#### 용법

`![캡션 이미지](이미지 소스)` 구문을 사용합니다.

#### 입장
- 왼쪽 도구 모음의 **리소스** 도구를 사용합니다.

#### 예시

**가격 인하**
```
![미니언](https://octodex.github.com/images/minion.png =300x300)
![스톰트루포캣](https://octodex.github.com/images/stormtroopocat.jpg "스톰트루포캣" =300x300)
```

**결과**
![미니언](https://octodex.github.com/images/minion.png =300x300)
![스톰트루포캣](https://octodex.github.com/images/stormtroopocat.jpg "스톰트루포캣" =300x300)

#### 스타일링

링크와 마찬가지로 이미지에도 각주 스타일 구문이 있습니다.

**가격 인하**
```
![대체 텍스트][아이디]
```

**결과**

![대체 텍스트][아이디]

#### 참고문헌

문서 후반부에 URL 위치를 정의한 참조가 있습니다.

**가격 인하**
```
[id]: https://octodex.github.com/images/dojocat.jpg "도조캣" =300x300
```

**결과**

[id]: https://octodex.github.com/images/dojocat.jpg "도조캣"

#### 치수

때로는 이미지가 너무 크거나, 이미지가 사용 가능한 모든 공간을 차지하기를 원할 수도 있습니다.

다음 형식으로 이미지 경로의 끝에 있는 치수입니다.

```
![이미지](/link/to/image.jpg =100x50)
```

또한 값 중 하나를 생략하여 이미지 비율을 자동으로 유지할 수 있습니다.

```
![이미지](/link/to/image.jpg =100배)
![이미지](/link/to/image.jpg =x50)
```

%와 같은 다른 단위를 사용할 수도 있습니다. 이미지가 사용 가능한 모든 공간을 차지해야 할 때 유용합니다.

```
![이미지](/link/to/image.jpg =100%x)
```

## SVG

### 탭 {.tabset}

#### 용법

SVG는 브라우저에서 지원하는 다른 모든 콘텐츠로 포함될 수 있습니다.

#### 예시

**가격 인하**

```svg
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

**결과**

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

## 지도

### 탭 {.tabset}

#### 용법

지도 플랫폼에서 만든 지도를 가리키는 `iframe`을 통해. 이는 지도 편집기가 출시될 때까지 동적 지도를 추가하는 임시 방법입니다.

#### 예

**가격 인하**
```
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>
```
**결과**
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BmwnWua1TecE9a0-es5FFKCRO2ZmqYQ&ehbc=2E312F" width="640" height="480"></iframe>

## 이모티콘

### 탭 {.tabset}

#### 용법

`:identifier:` 구문 사용

[이모지 치트 시트](https://www.webfx.com/tools/emoji-cheat-sheet/)에서 지원되는 이모지를 확인하세요.
twemoji를 사용하여 [출력을 변경하는 방법](https://github.com/markdown-it/markdown-it-emoji#change-output)을 확인하세요.

https://github.com/markdown-it/markdown-it-이모지

#### 예시

**가격 인하**
```
> 클래식 마크업: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> 단축키(이모티콘): :-) :-( 8-) ;)
```

**결과**
> 클래식 마크업: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> 단축키(이모티콘): :-) :-( 8-) ;)

지원되는 이모티콘은 [이모지 치트 시트](https://www.webfx.com/tools/emoji-cheat-sheet/)에서 확인하세요.
twemoji를 사용하여 [출력을 변경하는 방법](https://github.com/markdown-it/markdown-it-emoji#change-output)을 확인하세요.


## 아래 첨자

### 탭 {.tabset}

#### 용법

텍스트 선택 앞뒤에 **간단한 틸드** 기호를 사용합니다.

https://github.com/markdown-it/markdown-it-sub

#### 단축키
- 텍스트를 선택한 다음 도구 모음에서 ![아래 첨자](https://docs.requarks.io/assets/ui/ui-markdown-sub.png =x30){.radius-4} 버튼을 클릭합니다.

#### 예시

**가격 인하**
```
- H~2~O
```

**결과**
- H~2~O

## 상위 첨자

### 탭 {.tabset}

#### 용법

텍스트 선택 앞뒤에 **고유한** 캐럿을 사용합니다.

https://github.com/markdown-it/markdown-it-sup

#### 단축키
- 텍스트를 선택한 다음 도구 모음에서 ![상위 첨자](https://docs.requarks.io/assets/ui/ui-markdown-sup.png =x30){.radius-4} 버튼을 클릭합니다.

#### 예시

**마크 다운**
```
- 19번째
```

**결과**
- 19번째

## 삽입된 텍스트

### 탭 {.tabset}

#### 용법

https://github.com/markdown-it/markdown-it-ins

#### 예시

**가격 인하**
```
++삽입된 텍스트++
```

**결과**
++삽입된 텍스트++

## 텍스트 표시

### 탭 {.tabset}

#### 용법

https://github.com/markdown-it/markdown-it-mark

#### 예시

**가격 인하**
```
==표시된 텍스트==
```

**결과**
==표시된 텍스트==

## 각주

### 탭 {.tabset}

#### 사용

본문에서 각주의 위치를 ​​지정할 때는 `[^1]` 구문을 사용하고, 실제 각주를 지정할 때는 `[^1]: 이것은 각주입니다` 구문을 사용하세요. 각주는 자동으로 페이지 하단 가로줄 아래에 표시됩니다.

https://github.com/markdown-it/markdown-it-footnote

#### 예시

**가격 인하**
```
각주 1 링크[^first].

각주 2 링크[^두 번째].

인라인 각주^[인라인 각주 텍스트] 정의.

중복된 각주 참조[^second].

[^first]: 각주 **마크업이 있을 수 있습니다**

    그리고 여러 문단으로 구성되어 있습니다.

[^second]: 각주 텍스트.
```

**결과**
각주 1 링크[^first].

각주 2 링크[^두 번째].

인라인 각주^[인라인 각주 텍스트] 정의.

중복된 각주 참조[^second].

[^first]: 각주 **마크업이 있을 수 있습니다**

    그리고 여러 문단으로 구성되어 있습니다.

[^second]: 각주 텍스트.

## 정의 목록

### 탭 {.tabset}

#### 사용

https://github.com/markdown-it/markdown-it-deflist

#### 예시

**가격 인하**
```
1학기

: 정의 1
게으른 연속으로.

*인라인 마크업*이 포함된 2학기

: 정의 2

        { 일부 코드, 정의 2의 일부 }

    정의의 세 번째 문단 2.
```

**결과**
1학기

: 정의 1
게으른 연속으로.

*인라인 마크업*이 포함된 2학기

: 정의 2

        { 일부 코드, 정의 2의 일부 }

    정의의 세 번째 문단 2.

#### 컴팩트한 스타일

**가격 인하**
```
1학기
  ~ 정의 1

2학기
  ~ 정의 2a
  ~ 정의 2b
```

**결과**
1학기
  ~ 정의 1

2학기
  ~ 정의 2a
  ~ 정의 2b

## 약어

### 탭 {.tabset}

#### 용법

https://github.com/markdown-it/markdown-it-abbr

#### 예시

이것은 HTML 약어의 예입니다.

"HTML"을 변환하지만 "xxxHTMLyyy" 등과 같은 부분 항목은 그대로 유지합니다.

**가격 인하**
```
*[HTML]: 하이퍼텍스트 마크업 언어
```

**결과**
*[HTML]: 하이퍼텍스트 마크업 언어

## 사용자 정의 컨테이너

### 탭 {.tabset}

#### 용법

https://github.com/markdown-it/markdown-it-컨테이너

#### 예시

**가격 인하**
```
::: 경고
*여기에 용이 있어요*
:::
```

**결과**
::: 경고
*여기에 용이 있어요*
:::

## 고급 테이블

### 탭 {.tabset}

#### 용법

https://github.com/RedBug312/markdown-it-multimd-table

#### 그룹화, 정렬 및 스케이핑 사용

**가격 인하**
```
| | 그룹화 ||
첫 번째 헤더 | 두 번째 헤더 | 세 번째 헤더 |
 ------------ | :-----------: | -----------: |
콘텐츠 | *긴 셀* ||
콘텐츠 | **셀** | 셀 |

새로운 섹션 | 더 보기 | 데이터 |
그리고 더 많은 것 | 탈출한 \| ||
[프로토타입 테이블]
```

**결과**
| | 그룹화 ||
첫 번째 헤더 | 두 번째 헤더 | 세 번째 헤더 |
 ------------ | :-----------: | -----------: |
콘텐츠 | *긴 셀* ||
콘텐츠 | **셀** | 셀 |

새로운 섹션 | 더 보기 | 데이터 |
그리고 더 많은 것 | 탈출한 \| ||
[프로토타입 테이블]

#### 여러 줄로

**가격 인하**
```
| 마크다운 | 렌더링된 HTML |
|--------------|-----|
| *기울임꼴* | *기울임꼴* | \
| | |
| - 항목 1 | - 항목 1 | \
| - 품목 2 | - 품목 2 |
| ```파이썬 | ```파이썬 \
| .1 + .2 | .1 + .2 \
| ``` | ``` |
```

**결과**
| 마크다운 | 렌더링된 HTML |
|--------------|-----|
| *기울임꼴* | *기울임꼴* | \
| | |
| - 항목 1 | - 항목 1 | \
| - 품목 2 | - 품목 2 |
| ```파이썬 | ```파이썬 \
| .1 + .2 | .1 + .2 \
| ``` | ``` |

#### rowspan을 사용하여

**가격 인하**
```
단계 | 직접 제품 | ATP 수율
----: | --------------: | ---------:
해당분해 | 2 ATP ||
^^ | 2 NADH | 3--5 ATP |
피루브산 산화 | 2 NADH | 5 ATP |
구연산 회로 | 2 ATP ||
^^ | 6 NADH | 15 ATP |
^^ | 2 FADH2 | 3 ATP |
**30--32** ATP |||
[헥소스당 순 ATP 수율]
```

**결과**
단계 | 직접 제품 | ATP 수율
----: | --------------: | ---------:
해당분해 | 2 ATP ||
^^ | 2 NADH | 3--5 ATP |
피루브산 산화 | 2 NADH | 5 ATP |
구연산 회로 | 2 ATP ||
^^ | 6 NADH | 15 ATP |
^^ | 2 FADH2 | 3 ATP |
**30--32** ATP |||
[헥소스당 순 ATP 수율]

#### 제목 그룹화

**가격 인하**
```
| 원형 ||
--- | ---
아담과 이브 | 믿음
루시퍼 | 예언
사탄 수호천사
멜기세덱 | 사후세계
세라핌 | 천국의 왕국
천국 | 사도들
지옥 | 예수님과 그분의 삶과 가르침에 대한 이야기
구원 | “재림”
```

**결과**
| 원형 ||
--- | ---
아담과 이브 | 믿음
루시퍼 | 예언
사탄 수호천사
멜기세덱 | 사후세계
세라핌 | 천국의 왕국
천국 | 사도들
지옥 | 예수님과 그분의 삶과 가르침에 대한 이야기
구원 | “재림”

## 수학 표현식(Mathjax)

### 탭 {.tabset}

#### 용법

Markdown에서 수학을 사용하는 방법에 대해 자세히 알아보려면 외부 링크를 참조하세요.

https://github.com/classeur/markdown-it-mathjax

#### 예제 1

TeX에서 표시되는 수학 처리

**가격 인하**
```
$$1 *2* 3$$

TeX 인라인 수학 $1 *2* 3$을 처리합니다.
```

**결과**
$$1 *2* 3$$

#### 예제 2

TeX 인라인 수학 $1 *2* 3$을 처리합니다.

**가격 인하**
```
$a \ne 0$일 때 $ax^2 + bx + c = 0$에 대한 두 가지 해가 존재하며 이는 다음과 같습니다.
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$


$$\frac{1}{\sqrt{x^2 + 1}}$$
```

**결과**
$a \ne 0$일 때 $ax^2 + bx + c = 0$에 대한 두 가지 해가 존재하며 이는 다음과 같습니다.
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

$$\frac{1}{\sqrt{x^2 + 1}}$$

#### 예제 3

**가격 인하**
```
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11^ O^12^__
```

**결과**
__O^1^ O^2^ O^3^ O^4^ O^5^ O^6^ O^7^ O^8^ O^9^ <u>O</u>^10^ O^11^ O^12^__


#### 예제 4

**가격 인하**
```
$$V = H_0 * D, $$
```

**결과**
$$V = H_0 * D, $$

#### 예제 5

**가격 인하**
```
대부분은 그렇습니다. 1/4에서는 그렇지 않습니다.
```

**결과**
대부분은 그렇습니다. 1/4에서는 그렇지 않습니다.

#### 예제 6

**가격 인하**
```
설명 | 코드 | 예제
--- | --- | ---
그리스 문자 | \alpha \beta \gamma \rho \sigma \delta \epsilon | $\alpha \beta \gamma \rho \sigma \delta \epsilon$
이진 연산자 | \times \otimes \oplus \cup \cap | $\times \otimes \oplus \cup \cap$
관계 연산자 | < > \subset \supset \subseteq \supseteq | $< > \subset \supset \subseteq \supseteq$
기타 | \int \oint \sum \prod | $\int \oint \sum \prod$
```

**결과**
설명 | 코드 | 예제
--- | --- | ---
그리스 문자 | \alpha \beta \gamma \rho \sigma \delta \epsilon | $\alpha \beta \gamma \rho \sigma \delta \epsilon$
이진 연산자 | \times \otimes \oplus \cup \cap | $\times \otimes \oplus \cup \cap$
관계 연산자 | < > \subset \supset \subseteq \supseteq | $< > \subset \supset \subseteq \supseteq$
기타 | \int \oint \sum \prod | $\int \oint \sum \prod$

#### 예제 7

**가격 인하**
```
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D \end{cases}$$
```

**결과**
$$ \max dS/dt = \pm \begin{cases} wR, R \leq D \\ wD, R \geq D \end{cases}$$

#### 예제 8

**가격 인하**
```
지구 질량 = $M^\odot$
```

**결과**
지구 질량 = $M^\odot$

## 콘텐츠 탭

### 탭 {.tabset}

#### 용법

헤더를 사용하고 메인 헤더에 `{.tabset}` 클래스를 추가하세요. 메인 헤더 텍스트는 최종 결과에 표시되지 않습니다.

자식 헤더가 한 단계 더 높은 경우 어떤 헤더 레벨이든 사용할 수 있습니다. 예를 들어, 기본 헤더가 `###` *(h3)*이면 탭 헤더는 `####` *(h4)*여야 합니다. 부모 헤더의 최대 헤더 레벨은 5이고 자식 헤더의 최대 헤더 레벨은 6입니다.

#### 예시

```
# 탭 {.tabset}
## 첫 번째 탭

여기의 모든 내용은 첫 번째 탭으로 이동합니다...

## 두 번째 탭

여기의 모든 내용은 두 번째 탭으로 이동합니다...

## 세 번째 탭

여기에 있는 모든 내용은 세 번째 탭으로 이동합니다...
```

## 키보드 키 표시

### 탭 {.tabset}

#### 용법

텍스트 선택 영역 앞에는 `<kbd>`를 사용하고, 선택 영역 뒤에는 `</kbd>`를 사용합니다.

#### 입장
- 텍스트를 선택한 다음 도구 모음에서 ![키보드 키](https://docs.requarks.io/assets/ui/ui-markdown-kbd.png =x30){.radius-4} 버튼을 클릭합니다.

#### 예시

```html
로렘 입숨 통증 <kbd>CTRL</kbd> + <kbd>C</kbd>
```

로렘 입숨 통증 <kbd>CTRL</kbd> + <kbd>C</kbd>

## 외부 링크

- [Urantiapedia 도구 - GitHub 프로젝트](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - GitHub 프로젝트](https://github.com/JanHerca/urantiapedia-backup)
- [우란시아 재단](https://www.urantia.org/)
- [블루 필즈](https://blue-fields.netlify.app/)
- [위키.js](https://js.wiki/)
- [MultiMarkdown 사용자 가이드](https://fletcher.github.io/MultiMarkdown-6/)
- [마크다운 사양](https://commonmark.org/)
- [마크다운 도움말](https://commonmark.org/help/)
- [마크다운 확장 구문](https://www.markdownguide.org/extended-syntax/)
- [마크다운 위키.js 도움말](https://docs.requarks.io/ko/editors/markdown)
- [이모티콘 치트 시트](https://www.webfx.com/tools/emoji-cheat-sheet/)
- [이모지 출력 변경](https://github.com/markdown-it/markdown-it-emoji#change-output)
- [매스잭스](https://www.mathjax.org/)
- [Mathjax 설명서](http://docs.mathjax.org/en/latest/index.html)
- [LaTeX 수학 표현식](https://www.overleaf.com/learn/latex/Mathematical_expressions)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/web_markdown_editor">마크다운 편집기 사용</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/web_html_editor">HTML 편집기 사용</a></td>
      </tr>
    </tbody>
  </table>
</figure>



