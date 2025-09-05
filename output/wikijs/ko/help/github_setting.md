---
title: "Urantiapedia — GitHub 프로젝트 설정"
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
        <td><a href="/ko/help/web_html_editor">GitHub 웹에서 직접 작업</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_content">PC에서 로컬로 작업하기</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## PC에서 로컬로 GitHub 작업하기

GitHub에서 작업하는 이 솔루션은 GitHub 웹사이트에서 직접 작업하는 이전 옵션보다 훨씬 복잡합니다. 따라서 Git과 GitHub에 대한 지식이 있는 사용자에게만 권장됩니다. Urantiapedia를 더 빠르고 광범위하게 편집할 수 있도록 하는 훨씬 더 유연하고 강력한 옵션입니다. 또한, 자동화된 작업을 매우 빠르게 수행하는 *Urantiapedia Tools*라는 도구를 실행할 수 있습니다.

이 옵션은 *관리자* 또는 *편집장* 사용자에게 가장 권장되는 옵션이며, GitHub 웹사이트에서 직접 작업하는 옵션은 *보조 편집자* 사용자에게 권장됩니다.

GitHub에서 로컬로 작업하기 위한 첫 번째 단계는 몇 가지 소프트웨어 설치를 수행하는 것입니다. 설치 과정에 대해 자세히 설명드리겠습니다. 그런 다음 몇 가지 구성 팁을 알려드리겠습니다.

:warning: 다음 단계를 따르기 전에 이미 GitHub 계정을 생성했고 Urantiapedia 프로젝트의 필요한 사본(_forks_)을 [GitHub에서의 첫 단계](/ko/help/github_fork)에 자세히 설명된 대로 계정에 만들었다고 가정합니다.

## PC에 Git 설치하기

1. https://git-scm.com/으로 이동합니다.
2. 운영 체제에 맞는 설치 프로그램을 다운로드하세요. 다양한 OS에 설치하는 방법에 대한 자세한 내용은 [Git 설치](https://git-scm.com/book/ko/v2/Getting-Started-Installing-Git)에서 확인할 수 있습니다. Windows에서는 설치 프로그램을 사용하고 기본 옵션을 그대로 두세요.
3. 터미널에서 `git --version` 명령어를 실행하여 Git이 제대로 설치되었는지 확인하세요. 버전 번호가 반환되면 Git이 정상적으로 설치된 것입니다.
4. 터미널에서 다음 명령을 실행하세요(Git은 Git CMD라는 터미널을 설치하여 사용할 수 있습니다). 이름과 이메일을 사용하여 Git에서 신원을 설정하세요. 이는 Git에서 코드 기여자로 설정하는 데 필수적입니다.

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## PC에 Node.js 설치

*우란티피디아 도구*를 실행하려면 Node.js가 필요합니다. 실행할 계획이 없다면 이 단계를 건너뛸 수 있지만, 권장됩니다.
1. https://nodejs.org/로 이동합니다.
2. Node.js를 다운로드하세요. 현재 사용 가능한 LTS 버전을 사용하세요.
3. 기본 옵션으로 설치합니다.
4. Node.js가 제대로 설치되었는지 확인하세요. 터미널을 열고 `node -v`를 실행하세요. 버전 번호가 나타나면 Node.js가 제대로 설치된 것입니다.

## VS Code와 GitLens 설치

Visual Studio Code를 사용하는 것이 좋습니다.

1. https://code.visualstudio.com/으로 이동합니다.
2. 다운로드하여 설치하세요. Windows 사용자인 경우, 설치 과정에서 "디렉토리의 상황에 맞는 메뉴에 '코드로 열기' 동작 추가" 옵션을 선택하는 것이 좋습니다.
3. 열어 보세요. 처음 열면 몇 가지 옵션을 설정할 수 있습니다. 해당 옵션은 건너뛰세요.
4. VS Code에서 왼쪽 사이드바의 _확장 프로그램_ 버튼을 클릭하세요. "GitLens"라는 확장 프로그램을 설치하는 것이 좋습니다. 이 확장 프로그램은 일반적으로 가장 인기 있는 확장 프로그램 목록에 있습니다. 해당 확장 프로그램을 찾아 설치 버튼을 클릭하세요.
5. 이제 VS Code의 왼쪽 버튼 모음에 새로운 GitLens 버튼이 생성됩니다. 이 버튼을 클릭하고 _환영합니다(빠른 설정)_ 버튼을 클릭하세요. _환영합니다_ 페이지가 열립니다. _소스 제어 레이아웃_을 기본 뷰로 선택하는 것이 좋습니다. 이렇게 하면 GitLens가 VS Code의 기본 _소스 제어_ 패널과 병합됩니다.

## Urantiapedia 프로젝트 복제

1. GitHub 웹사이트를 열고 계정으로 이동합니다.
2. 생성했어야 할 Urantiapedia 프로젝트(_forks_) 사본을 엽니다.
3. 각 복사본의 메인 페이지에서 _코드_라는 녹색 메뉴를 클릭하고 거기에서 프로젝트 URL을 복사합니다. 예: `https://github.com/<username>/urantiapedia.git` 및 `https://github.com/<username>/urantiapedia-backup.git`.

![](/image/help/github_setting_1.png)

4. VS Code를 열고 _소스 제어_ 패널을 열고 _저장소 복제_를 클릭합니다.

![](/image/help/github_setting_2.png)

5. 나타나는 텍스트 상자에 앞서 복사한 경로를 입력하거나 붙여넣습니다.
6. _GitHub에서 복제_를 선택합니다.

![](/image/help/github_setting_3.png)

7. _GitHub 확장 프로그램에서 로그인 허용_을 클릭합니다.
8. GitHub에 접근하기 위해 VS Code 권한을 요청하는 웹 페이지가 나타납니다. _계속_을 클릭하세요.
9. _github 승인_을 클릭합니다.
10. 이제 새 웹 페이지로 리디렉션되고 메시지가 열립니다. _VS Code 열기_를 클릭하세요.
11. 이제 제공된 경로를 사용할 수 있도록 _열기_를 클릭하세요. 문제가 발생하면 4번부터 다시 시작하세요.
12. Urantiapedia 프로젝트 저장소 이름이 명령 센터에 표시되면 해당 저장소를 선택하세요. 폴더를 묻는 대화 상자가 나타납니다. 원하는 폴더를 선택하거나 프로젝트 폴더를 새로 만드세요.

![](/image/help/github_setting_4.png)

13. VS Code가 저장소를 복제할 때까지 몇 분 정도 기다립니다. 마지막으로 _저장소 열기_를 클릭합니다. _예, 작성자를 신뢰합니다_도 클릭합니다.
14. 프로젝트가 성공적으로 시작됩니다.
15. *urantiapedia*와 *urantiapedia-backup*의 각 프로젝트에 대해 이와 동일한 단계를 수행합니다.

## *Urantiapedia 도구* 설정하기

*Urantiapedia Tools*는 [Electron](https://www.electronjs.org/)을 사용하여 JavaScript로 개발된 데스크톱 애플리케이션입니다. 한 번에 수백 개의 페이지를 수정하는 매우 빠른 프로세스를 실행하는 데 사용됩니다. 사용하지 않을 경우 이 단계를 건너뛸 수 있습니다. 설치 및 실행 방법은 다음과 같습니다.

1. VS Code에서 *urantiapedia* 프로젝트를 엽니다. 두 가지 방법으로 열 수 있습니다.
  - VS Code를 엽니다. _파일 > 폴더 열기_를 선택합니다. `package.json` 파일이 있는 프로젝트의 루트 폴더를 선택합니다.
  - 선택적으로 Windows에서는 루트 폴더의 상황에 맞는 메뉴를 통해 프로젝트를 열고 _코드로 열기_를 선택할 수 있습니다.
2. _터미널 > 새 터미널_을 사용하여 터미널을 엽니다. 터미널이 프로젝트의 루트 폴더에 열려 있는지 확인하세요.
3. *Urantiapedia Tools* 종속성을 설치하려면 `npm install`을 실행하세요. 모든 종속성이 설치될 때까지 기다리세요.

![](/image/help/github_setting_5.png)

4. 프로젝트가 기본 실행 구성으로 설정되어 있습니다. F5 키를 눌러 애플리케이션을 실행하거나 터미널에서 `npm run start`를 실행하세요.
5. 애플리케이션이 열립니다. 기본적으로 디버깅을 위한 _개발자 도구_ 창이 열립니다. 개발 중이 아니라면 무시하거나 닫아도 됩니다.

![](/image/help/uptools.png)



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
        <td><a href="/ko/help/web_html_editor">GitHub 웹에서 직접 작업</a></td>
        <td><a href="/ko/help">색인</a></td>
        <td><a href="/ko/help/github_content">PC에서 로컬로 작업하기</a></td>
      </tr>
    </tbody>
  </table>
</figure>