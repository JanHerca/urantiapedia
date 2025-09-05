---
title: 편집자 사용
description: 
published: true
date: 2022-09-06T09:19:18.947Z
tags: help
editor: markdown
dateCreated: 2022-09-02T14:21:26.328Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/web_pages">페이지 관리</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/web_visual_editor">시각적 편집기 사용</a></td>
      </tr>
    </tbody>
  </table>
</figure>

페이지를 만들 때 원하는 편집기를 사용할 수 있습니다. 마크다운으로 콘텐츠를 작성하는 것을 선호하는 사용자도 있고, 시각적인 편집기를 선호하는 사용자도 있습니다.

## 편집자 목록

- [비주얼 편집기 *서식 있는 텍스트 WYSIWYG*](/ko/help/web_visual_editor)
- [마크다운 *일반 텍스트 서식*](/ko/help/web_markdown_editor)
- [코드 *원시 HTML*](/ko/help/web_html_editor)
- [다국어 편집기 *번역 *(곧 제공)**](/ko/help/web_multi_editor)
- [Google Maps와 유사한 지도 편집기(곧 출시 예정)](/ko/help/web_map_editor)
- [슬라이드 편집기 *Google 슬라이드와 유사 *(곧 출시)**](/ko/help/web_map_editor)
- [3D 편집기 *캔버스와 유사한 *(곧 출시)**](/ko/help/web_3d_editor)
- [API 문서 *REST / GraphQL *(곧 제공)**](/ko/help/web_api)
- [블로그 *게시물 타임라인*(곧 제공)**](/ko/help/web_blog)
- [Tabular *Excel과 유사 *(곧 출시)**](/ko/help/web_tabular)

## 편집자 변경

**변환** 작업을 사용하여 모든 페이지에 사용되는 편집기를 변경할 수 있습니다. 이 작업을 수행하면 새로 선택한 편집기에서 사용할 수 있도록 콘텐츠가 변환됩니다. 예를 들어, 이전에 마크다운 편집기로 만든 페이지를 시각적 편집기에서 사용할 수 있도록 HTML로 변환할 수 있습니다.

**페이지 작업** 메뉴(오른쪽 상단과 하단 모서리에 있음)에서 **변환**을 선택하세요. 다음 대화 상자가 표시됩니다.

![ui-convert-page-dialog.png](https://docs.requarks.io/assets/ui/ui-convert-page-dialog.png =550x){.radius-5 .decor-shadow}

앞으로 사용할 편집기를 선택하고 **변환**을 클릭하세요.

> :경고: **중요**
> 
> 편집기/포맷 기능의 차이로 인해 일부 서식이나 렌더링되지 않은 콘텐츠는 변환 후 손실될 수 있습니다.
> 
> **변환 전에 자동으로 페이지 스냅샷이 촬영되며** **나중에 언제든지** 페이지 기록에서 이 버전을 되돌리거나 참조할 수 있습니다.**
> 
> _예시_
> 
> &#8727; 마크다운에서 HTML로 변환할 때 `draw.io` 다이어그램은 최종 렌더링된 이미지로 유지됩니다. 더 이상 다이어그램을 편집할 수 없습니다.
> &#8727; 마크다운에서 HTML로 전환할 경우 탭 세트는 표준 헤더와 문단으로 되돌아갑니다(마크다운 편집기에서 볼 수 있는 대로).
> &#8727; HTML에서 Markdown으로 전환할 때 Markdown 언어에 존재하지 않는 사용자 정의 CSS 클래스와 HTML 요소는 유지되지 않습니다.

참고로, 다음 형식 변환은 선택된 소스/대상 편집기에 따라 발생합니다.

| 소스 | 대상 | 형식 변환
| -- | -- | -- |
| 마크다운 | 시각적 편집기 | 마크다운 → HTML |
| 마크다운 | 원시 HTML | 마크다운 → HTML |
| 시각적 편집기 | 마크다운 | HTML & 마크다운 |
| 시각적 편집기 | 원시 HTML | *형식 변환 필요 없음*{.caption} |
| 원시 HTML | 마크다운 | HTML & 마크다운 |
| 원시 HTML | 시각적 편집기 | *형식 변환 필요 없음*{.caption} |



<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/web_pages">페이지 관리</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/web_visual_editor">시각적 편집기 사용</a></td>
      </tr>
    </tbody>
  </table>
</figure>