# Mr.Great Dinner Service

미스터 대박 디너 서비스를 위한 프로젝트입니다.
소프트웨어공학 팀 프로젝트로 진행했습니다.

## 미스터 대박 디너 서비스 소개
미스터 대박 디너 서비스는 고객들에게 식사를 제공하는 서비스입니다. 배달 서비스를 상정하고 만들었습니다.
![image](https://user-images.githubusercontent.com/44166353/108871324-633d2900-763c-11eb-8dbd-d05f3b7fc6bc.png)

## 사용 기술
- Bootstrap
- 바닐라 js
- Node.js
  - Express.js


### 메뉴
- 발렌타인 디너 (10,000)
    - 작은 하트 모양 + 큐피드 장식
    - 냅킨
- 프렌치 디너 (20,000)
    - 커피 한 잔 (+4,000)
    - 와인 한 잔 (+8,000)
    - 샐러드 (+5,000)
    - 고기 (+15,000)
- 잉글리시 디너 (24,000)
    - 에그 스크램블 (+3,000)
    - 베이컨 (+8,000)
    - 빵 (+15,000)
    - 스테이크 (+20,000)
- 샴페인 축제 디너 (62,000)
    - 샴페인 한 병 (+25,000)
    - 바게트빵 4개 (+15,000)
    - 커피 한 포트 (+15,000)
    - (조건) 항상 2인 식사, grand 혹은 deluxe 스타일

### 규칙
- 주문은 여러 명이 각각 다른 메뉴를 주문할 수 있습니다.
    - 단 샴페인 축제 디너는 2인 단위로만 주문할 수 있습니다.
- 각 디너가 제공되는 스타일을 선택할 수 있습니다.
    - simple (+0)
        - 상자 접시, 냅킨, 플라스틱 쟁반, 플라스틱 잔
    - grand (+3,000)
        - 도자기 접시와 컵, 흰색 면 냅킨, 나무 쟁반
    - deluxe(+10,000)
        - 은 쟁반, 꽃병, 도자기 접시, 린넨 냅킨
- 샴페인 축제 디너는 grand 또는 deluxe 스타일로만 주문 가능합니다.

 
## 주요 기능

 - 직원
   - 새로운 주문 조회
   - 주문 상태 변경
 - 고객
   - 회원 가입 및 로그인
   - 메뉴 조회 및 주문
   - 결제 및 할인 시스템
   - 장바구니 확인