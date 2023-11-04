# 플로키 프론트엔드

## 시작하는 법

레포지토리 코드를 클론받습니다.

```
git clone https://github.com/plocky11/plocky_frontend
```

의존성과 husky를 설치합니다.

```
yarn && yarn prepare
```

서버를 실행합니다. http://localhost:3000에 접속해볼 수 있습니다.

```
yarn dev
```

## 커밋 컨벤션

### Prefix

- build: 외부 의존성 설치나 빌드 시스템에 영향을 주는 변경사항(next.js config 수정 등)
- ci: CI 환경설정과 스크립트에 변화가 있는 경우
- docs: 문서, 주석 관련
- feat: 새로운 기능 추가
- fix: 버그 픽스
- refactor: 코드 리팩토링 관련
- chore: 버그 픽스 또는 기능 추가에 해당되지 않는 '자잘한' 변경사항(rename, remove 등)
- test: 테스트 관련 수정
- style: UI 변경사항

### 커밋 기준

- 각 커밋마다 커밋 메세지에 구체적이고 뚜렷하게 구분될 수 있는 양의 작업을 담는다.
- 커밋 제목을 보고 직관적으로 이해할 수 있도록 커밋을 잘게 나눈다.

## 브랜치 컨벤션

- 브랜치 네이밍은 `[커밋 prefix]/[작업 내용]` 패턴을 준수한다.
- 각 브랜치마다 브랜치명에 맞는 작업들만 포함되어야 한다.
- 각 브랜치를 분기할 때마다 알맞는 base를 기준으로 `git rebase [브랜치명]`한다.
  - 예) 특정 브랜치의 작업을 계승하는 새 브랜치를 분기할 때, main을 base로 두는 것이 아니라 해당 브랜치를 base로 `git rebase [해당 브랜치]` 한다. 그게 아니라면 origin/main을 base로 둔다.

## 플로키 프론트엔드 구성원

<table align="center">
    <tr align="center">
        <td style="min-width: 150px;">
          <img src="https://github.com/QRTaxi/QRTaxi_Web/assets/87803596/771a7c9f-a581-49f5-9163-977bbc9c6e0d" width="200">
          <br />
          <b>HiimKwak</b>
        </td>
        <td style="min-width: 150px;" background-color="white">
          <img src="![]()" width="200">
          <br />
          <b>pjh402941</b>
        </td>
        <td style="min-width: 150px;" background-color="white">  
          <img src="![Alt text](image.png)" width="200">
          <br />
          <b></b> 
        </td>
    </tr>
    <tr align="center">
        <td>
          <a href="https://github.com/HiimKwak">
            곽민규 <br/>
            Web FE
          </a>
      </td>
        <td>
          <a href="https://github.com/pjh402941">
            박주희 <br />
            Web FE
          </a> 
        </td>
        <td>
          <a href="">
            박해솔 <br />
            기획/디자인
          </a>
        </td>
    </tr>
</table>
