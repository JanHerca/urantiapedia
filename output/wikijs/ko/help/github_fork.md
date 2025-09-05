---
title: "Urantiapedia — GitHub에서 시작하기"
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
        <td><a href="/ko/help/devs">개발자 도움말</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_edit_on_web.md">GitHub 웹사이트에서 직접 작업하기</a></td>
      </tr>
    </tbody>
  </table>
</figure>

GitHub에서 작업을 시작하기 전에 다음 단계를 따라야 합니다.

1. GitHub 계정이 필요합니다. https://github.com으로 이동하세요.
2. 이미 계정이 있는 경우 *로그인*을 클릭하고 로그인하세요.
3. 계정이 없으면 *가입*을 클릭하여 계정을 만드세요. 사용자 이름, 이메일 주소, 비밀번호를 입력하세요. 계정이 생성되면 해당 계정으로 GitHub에 로그인하세요.
4. GitHub에 처음 로그인하면 이메일을 통해 인증을 요청받게 됩니다. 인증이 완료되면 GitHub 홈페이지로 이동합니다.
5. *우란티아페디아* 프로젝트 페이지를 엽니다.
  - https://github.com/JanHerca/urantiapedia
  - https://github.com/JanHerca/urantiapedia-backup
6. 프로젝트의 *포크*를 만드세요. *포크*는 프로젝트를 자신의 계정으로 복사하는 것으로, 복사본의 변경 사항이 원본 프로젝트에 영향을 미치지 않습니다. *포크*하려면 모든 GitHub 프로젝트 페이지 오른쪽 상단에 있는 *포크* 버튼을 클릭하세요.

![](/image/help/github_fork_1.png)

7. 몇 초 안에 *Urantiapedia* 프로젝트의 사본이 GitHub 계정에 생성됩니다. 이 프로젝트는 원본 프로젝트에 영향을 주지 않고 필요한 대로 변경할 수 있는 새롭고 완전한 사본입니다. 사용자 메뉴를 클릭하고 _내 저장소_를 선택하여 계정으로 돌아가서 프로젝트가 있는지 확인하세요. 두 프로젝트가 모두 표시되고 _...에서 포크됨_이라는 메시지가 표시됩니다.

![](/image/help/github_fork_2.png)

![](/image/help/github_fork_3.png)

8. 여기에는 두 가지 옵션이 있습니다.
  - [GitHub 웹사이트에서 직접 작업](/ko/help/github_edit_on_web). 이 절차는 매우 간단하므로 권장됩니다.
  - PC에서 로컬로 작업하세요. 이 절차는 더 복잡하며, 더 많은 단계가 필요합니다.
    - [Urantiapedia GitHub 프로젝트 설정](/ko/help/github_setting)
    - [GitHub 워크플로우를 따르세요](/ko/help/github_edit_local)


## :경고: 중요: 사본을 최신 상태로 유지하는 방법

두 개의 *Urantiapedia* 프로젝트(*urantiapedia*와 *urantiapedia-backup*)의 *포크*는 GitHub에서 자동으로 업데이트되지 않는 복사본입니다. 포크를 생성하는 순간부터 다른 사용자가 원본 프로젝트를 변경하게 되며, 이러한 변경 사항은 프로젝트에 자동으로 반영되지 않습니다. 프로젝트는 **독립적인 복사본**이며, 복사본이나 원본에 적용된 변경 사항은 다른 프로젝트에 자동으로 동기화되지 않습니다.

**따라서 사본의 파일을 변경하기 전에 해당 변경 사항이 원본 프로젝트의 현재 상태와 동기화되었는지 확인하는 것이 매우 중요합니다.**

이를 위해 **모든 작업 세션 전에** (이 매뉴얼의 다음 단계에 자세히 설명되어 있음) **다음의 간단한 단계를 따라야 합니다**.

1. 각 프로젝트 사본을 클릭하고, 사본에서 _Sync fork_ 옵션을 클릭합니다. 원본 프로젝트에 저장(_commits_)되었지만 사본에는 없는 횟수를 나타내는 메뉴가 표시됩니다. 이미지에서 볼 수 있듯이, 현재 사본에 없는 저장이 4개 있으며, 따라서 사본이 최신 상태가 아닙니다(_This branch is out-of-date_). _Update branch_를 클릭하면 원본 프로젝트의 변경 사항이 사본에 적용됩니다.

![](/image/help/github_fork_4.png)

2. GitHub에서 복사본을 업데이트하는 동안 몇 초 정도 기다리세요. 완료되면 _Sync fork_를 다시 클릭하면 모든 것이 최신 상태로 업데이트되어 변경 사항이 원본보다 뒤처지지 않았음을 확인할 수 있습니다(_This branch is not behind the upstream_).

![](/image/help/github_fork_5.png)

변경 작업을 시작할 때마다 각 프로젝트마다 이 작업을 수행해야 합니다. 이 작업을 잊어버리면 어떻게 해야 할까요? 일반적으로 수정하려는 파일이 이미 수정되지 않은 한 아무 일도 일어나지 않습니다. 문제 없이 작업을 계속하고 설명서의 다음 단계에 나와 있는 모든 작업을 수행할 수 있지만, 편집하기 전에 이 단계를 실행하는 안전한 방법을 따르는 것이 좋습니다.

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ko/help/devs">개발자 도움말</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_edit_on_web.md">GitHub 웹사이트에서 직접 작업하기</a></td>
      </tr>
    </tbody>
  </table>
</figure>