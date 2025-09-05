---
title: "Urantiapedia — PC에서 로컬로 작업하기"
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
        <td><a href="/ko/help/github_setting">GitHub 프로젝트 설정</a></td>
        <td><a href="/ko/help">Index</a></td>
        <td><a href="/ko/help/github_content">GitHub 프로젝트 콘텐츠</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## 로컬 사본을 변경하고 저장하세요.

로컬 저장소는 GitHub에 있는 프로젝트의 전체 사본이므로 변경 사항이 있을 때마다 로컬에 저장할 수 있습니다. 로컬에서 작업하면 수백 개의 파일을 한 번에 변경한 후 모든 파일을 한 번에 저장(_commit_)할 수 있습니다.

1. _소스 제어_ 버튼 아이콘에 숫자가 나타나면 변경 사항이 있는 것입니다.

![](/image/help/github_setting_6.png)

2. _소스 제어_를 클릭합니다.
3. _소스 제어_ 하위 패널에 수정된 파일 목록이 표시됩니다. 파일 위에 마우스를 올려놓으면 나타나는 _스테이지 변경_ 버튼을 클릭하세요.

![](/image/help/github_setting_7.png)

4. 변경 사항이 *스테이징*되면 *커밋* 메시지를 입력하고 _커밋_ 버튼을 클릭하세요. 변경 사항이 로컬 저장소에 추가됩니다.
5. 원격 GitHub 저장소에 변경 사항을 푸시하려면 새로운 *커밋*이 있을 때 나타나는 _변경 사항 동기화_ 버튼을 클릭하세요. 이렇게 하면 프로젝트의 로컬 복사본과 원격 복사본 간에 변경 사항이 *풀*(pull)*되고 *푸시*(push)됩니다.
6. Urantiapedia GitHub 페이지를 열어서 *커밋*이 올바르게 제출되었는지 확인할 수 있습니다.

## 두 Urantiapedia 프로젝트 간 변경 사항 동기화

*Urantiapedia* 프로젝트는 콘텐츠의 개발 및 운영 버전입니다. *Urantiapedia-backup* 프로젝트는 콘텐츠만 포함하고 웹사이트와 동기화되므로, 이 프로젝트에 변경 사항을 적용하는 것은 웹사이트에 대규모 변경을 적용하는 것과 같습니다. 단, 이러한 변경 사항은 관리자가 직접 적용하거나 변경 요청을 통해 관리자가 수락해야 합니다.

*Urantiapedia* 프로젝트에 대한 변경 사항에 콘텐츠(`/output/wikijs` 폴더)에 대한 변경 사항이 포함된 경우 동기화 유틸리티를 사용하거나 폴더 간에 복사하여 붙여넣는 것만으로 *Urantiapedia-backup* 프로젝트와 해당 변경 사항을 동기화해야 합니다.

두 프로젝트를 이렇게 중복하는 것은 약간 번거로울 수 있지만, 보안상의 이유로 이렇게 설계되었습니다.

## Urantiapedia 프로젝트에 대한 풀 리퀘스트 생성

Urantiapedia 프로젝트의 복사본(*포크*)에 충분한 수의 *커밋*을 제출하면 원본 프로젝트에 *풀 리퀘스트*를 제출하여 변경 사항을 검토하고 병합할 수 있습니다. 이를 GitHub 용어로 *풀 리퀘스트*라고 합니다.

1. GitHub에서 Urantiapedia 페이지를 각각 엽니다.
  - `https://github.com/<사용자 이름>/urantiapedia`
  - `https://github.com/<사용자 이름>/urantiapedia-backup`
2. _master_라는 메인 브랜치에 있는지 확인하세요. 해당 브랜치는 파일 목록 상단 메뉴에 나타납니다. 일반적으로 해당 브랜치만 있습니다.
3. 아래 _기여_ 메뉴를 선택한 다음 _풀 리퀘스트 열기_를 선택하세요. 메뉴에 _이 브랜치는 업스트림 마스터보다 앞서 있지 않습니다_라고 표시되면 먼저 메인 프로젝트를 가져와야 합니다. 아래를 참조하세요.

![](/image/help/github_setting_8.png)

4. 게시물에 제목을 추가하세요. 설명도 추가할 수 있습니다.
5. _풀 리퀘스트 생성_을 클릭하세요. 변경 사항이 있는 각 프로젝트에 대해 _풀 리퀘스트_를 생성하세요.

![](/image/help/github_edit_7.png)

6. 이렇게 하면 프로젝트 *관리자*에게 알림이 전송되고, 문제가 발견되지 않으면 변경 사항을 병합합니다.

## 프로젝트 사본(_포크_)을 동기화하세요

*우란티아피디아*는 팀 작업이므로, 언제든 *포크*가 원본 프로젝트와 동기화되지 않는 경우가 많습니다. _풀 리퀘스트_를 수행하기 전에 *포크*를 원본 프로젝트와 동기화하는 것이 좋습니다.

1. GitHub에서 Urantiapedia 프로젝트를 엽니다.
2. _Sync fork_ 옵션을 클릭합니다. 원본 프로젝트에 반영되었지만 복사본에는 없는 _커밋_ 개수를 나타내는 메뉴가 표시됩니다. 이미지에서 볼 수 있듯이 현재 복사본에는 없는 커밋이 4개 있으며, 따라서 복사본이 최신 상태가 아닙니다(_This branch is out-of-date_). _Update branch_를 클릭하면 원본 프로젝트의 변경 사항을 복사본으로 가져올 수 있습니다.

![](/image/help/github_fork_4.png)

3. GitHub에서 복사본을 업데이트하는 동안 몇 초 정도 기다리세요. 완료되면 _Sync fork_ 옵션을 다시 클릭하면 모든 것이 업데이트되어 변경 사항이 원본보다 이전 버전이 아님을 확인할 수 있습니다(_This branch is not behind the upstream_).

![](/image/help/github_fork_5.png)

4. VS Code로 이동합니다.
5. 이미 설명한 대로 프로젝트를 엽니다.
6. _소스 제어_ 패널에서 _커밋_ 하위 패널로 이동합니다. 작은 _가져오기_ 버튼을 클릭한 다음, 그 옆에 있는 _끌어오기_ 버튼을 클릭합니다. 이 작업을 수행하면 변경 사항을 가져오고 동시에 푸시하여 로컬 저장소와 동기화됩니다.

![](/image/help/github_setting_9.png)

7. *Urantiapedia Tools* 코드 변경은 종속성 변경을 의미할 수 있습니다. VS Code의 터미널에서 `npm install` 명령을 실행하여 새 종속성을 설치하거나 업데이트해야 합니다. 이렇게 하면 프로젝트의 종속성이 업데이트됩니다.


## 요약

요약하자면, GitHub의 프로세스는 다음과 같습니다(다이어그램 참조):
1. "수석 편집자"는 GitHub의 *Urantiapedia* 프로젝트인 *Urantiapedia*와 *Urantiapedia-backup*에 대한 사본(1)(*포크*)을 자체 계정에 생성합니다. 또한 _Sync fork_ 또는 _Fetch upstream_(1)을 통해 이러한 사본을 동기화합니다.
2. "수석 편집자"는 자신의 PC에 프로젝트의 로컬 복사본을 생성합니다. 이 작업은 VS Code의 *clone* 작업(2)을 통해 수행됩니다. 또한 VS Code의 *fetch* + *pull* 작업(2)을 통해 로컬 복사본을 동기화하여 변경 사항을 로컬 복사본에 다운로드합니다.
3. "편집장"은 프로젝트의 로컬 사본을 변경하고 로컬 사본에 *커밋*(3)하여 변경 사항을 저장합니다.
4. "수석 편집자"는 *푸시* 작업을 통해 GitHub 프로젝트에 변경 사항을 보냅니다(4).
5. 그런 다음 "편집장"은 GitHub 웹사이트에서 두 프로젝트(*Urantiapedia* 및 *Urantiapedia-backup*)에 대한 풀 요청(5)을 생성합니다.
6. "수석 편집자"의 풀 리퀘스트는 모든 올바른 변경 사항을 병합하는(6) 책임을 지는 "관리자"가 검토합니다. 올바르지 않은 변경 사항은 거부(6)되며, "수석 편집자"에게 수정을 요청하는 알림이 전달됩니다.
7. 변경 사항이 정확하면 원래 *urantiapedia-backup* 프로젝트로 병합하여 변경 사항이 웹사이트와 자동으로 동기화되고 몇 분 안에 업데이트된 상태로 표시됩니다. (7)

![](/image/help/github_workflow_version_2.png)

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
        <td><a href="/ko/help/github_setting">GitHub 프로젝트 설정</a></td>
        <td><a href="/ko/help">Index</a></td>
        <td><a href="/ko/help/github_content">GitHub 프로젝트 콘텐츠</a></td>
      </tr>
    </tbody>
  </table>
</figure>