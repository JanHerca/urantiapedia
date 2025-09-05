---
title: "Urantiapedia — GitHub 웹사이트에서 직접 작업"
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
        <td><a href="/ko/help/github_fork">GitHub 시작하기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_setting.md">Urantiapedia GitHub 프로젝트 설정</a></td>
      </tr>
    </tbody>
  </table>
</figure>

GitHub 웹사이트에서 직접 작업하는 것이 권장되는 절차입니다. PC에서 로컬로 작업하는 것보다 훨씬 간단하기 때문입니다. *보조 편집자* 사용자에게 권장되는 옵션입니다. *관리자* 또는 *수석 편집자* 사용자에게는 이 매뉴얼의 다음 페이지에 설명된 옵션을 권장합니다.

번역 오류가 있는 기사를 편집하는 예를 가정해 보겠습니다. 단계는 다음과 같습니다.

1. *Urantiapedia* 프로젝트의 *포크*를 입력하세요(`https://github.com/user-name/urantiapedia`, 여기서 _user-name_은 사용자 이름입니다).
2. 디렉터리 목록을 사용하여 수정하려는 파일로 이동합니다. 이 예시에서는 `urantiapedia / output / wikijs / en / article / Alain_Cyr / Our_Experience...` 폴더에 있는 파일의 오류를 수정합니다. 파일에 들어가면 이미지와 같이 _미리보기_ 모드에서 편안하게 읽을 수 있습니다. _pero las cuentas se perdieron_ (스페인어로 _하지만 개수가 사라졌습니다_)이라는 오류가 발견되었는데, _pero perdí la cuenta_ (스페인어로 _하지만 개수가 사라졌습니다_)와 같은 더 정확한 표현이 아닙니다.

![](/image/help/github_edit_1.png)

3. 연필 아이콘이 있는 상단 메뉴를 클릭하고 _제자리에서 편집_을 선택합니다.

![](/image/help/github_edit_2.png)

4. 편집 모드로 전환됩니다. 잘못된 텍스트를 찾아 수정하세요. 파일에 필요한 모든 변경 사항을 적용한 후 녹색 _변경 사항 적용..._ 버튼을 클릭하세요.

![](/image/help/github_edit_3.png)

5. 변경 사항을 저장할지 확인하는 메시지가 표시됩니다. 기본 메시지를 그대로 두거나 _Commit message_ 부분에 변경 사항에 대한 더 자세한 메시지를 입력하세요. _Commit direct to the master branch_ 옵션은 선택된 상태로 유지하세요(프로젝트 사본에서 작업하는 사람이 본인뿐이므로 걱정하지 마세요). 마지막으로 _Commit changes_를 클릭하세요.

![](/image/help/github_edit_4.png)

6. 이제 프로젝트 사본에서 변경한 내용을 원본 프로젝트로 전송하는 풀 리퀘스트를 생성하겠습니다. 이를 위해 GitHub 메인 메뉴에서 _풀 리퀘스트_ 옵션을 선택하세요. 처음이라면 아래 이미지와 같이 빈 목록이 표시됩니다.

![](/image/help/github_edit_5.png)

7. 녹색 _새 풀 리퀘스트_ 버튼을 클릭하여 새 풀 리퀘스트를 생성합니다. 변경 사항과 원본 프로젝트를 비교하는 화면이 나타납니다. 비교 결과 충돌이 발견되지 않으면 _병합 가능_ 메시지가 나타납니다. 녹색 _풀 리퀘스트 생성_ 버튼을 클릭하여 풀 리퀘스트를 생성합니다.

![](/image/help/github_edit_6.png)

8. 마지막 화면에서는 풀 리퀘스트의 제목과 설명을 입력할 수 있습니다. 마지막으로 녹색 _풀 리퀘스트 생성_ 버튼을 클릭하여 풀 리퀘스트를 생성합니다.

![](/image/help/github_edit_7.png)

9. 마지막 화면에서는 원본 프로젝트로 이동합니다(**참고**, 더 이상 프로젝트 사본 페이지가 아닙니다). 여기서 변경 요청이 전송되어 원본 프로젝트의 _풀 리퀘스트_에 추가된 것을 확인할 수 있습니다. 이제 *관리자*가 변경 사항을 수락할지 여부를 결정할 때까지 기다려야 합니다. 그러면 _풀 리퀘스트_ 목록에 수락 확인이 표시됩니다. 이 작업은 즉시 완료되지 않고 며칠이 걸릴 수 있지만, 그렇다고 해서 작업을 계속하고, 새로운 수정 및 변경 요청을 하고, 여기에 설명된 단계를 반복할 수 없다는 것은 아닙니다. _풀 리퀘스트_ 목록은 필요한 만큼 길어질 수 있습니다.

![](/image/help/github_edit_8.png)

> :warning: 중요: *urantiapedia* 프로젝트의 모든 단계는 사용자 이름을 변경 사항 작성자로 프로젝트에 반영하려는 경우 *urantiapedia-backup* 프로젝트에 다시 재현해야 합니다. 그렇지 않은 경우, *urantiapedia* 프로젝트에 변경 사항을 적용하기만 하면 관리자가 웹사이트와 동기화되는 *urantiapedia-backup* 프로젝트에 변경 사항을 적용해 드립니다. 두 번째 경우에는 변경 사항을 업로드한 *관리자* 사용자가 작성자로 표시됩니다.
> 이러한 복제는 번거로울 수 있지만 보안상의 이유로 필요합니다.
{.is-warning}

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/github_fork">GitHub 시작하기</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_setting.md">Urantiapedia GitHub 프로젝트 설정</a></td>
      </tr>
    </tbody>
  </table>
</figure>