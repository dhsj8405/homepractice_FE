# Chat Application

`Front-end` React  
`Back-end` Spring Boot   
`Database` MariaDB  
`메시징 프로토콜` StompJS(+SockJs)
`상태관리` Redux

# 설치 및 추가해야햘것
- package.json 생성  
`npm init -y`

- yarn 설치  
`npm install -g yarn`
- 웹팩 라이브러리,로더, 바벨로더 설정  
`yarn add -D webpack webpack-cli webpack-dev-server babel-loader style-loader css-loader sass-loader node-sass @babel/core @babel/cli @babel/cli @babel/preset-env @babel/preset-react`
- react dom 사용  
`yarn add react react-dom`
- cross env 설치  
프로젝트에서 NODE_PATH 를 사용하여 절대경로로 파일을 불러오기 위하여 환경 변수를 설정 할 때 운영체제마다 방식이 다르므로 공통적인 방법으로 설정 할 수 있게 해주는 라이브러리  
`yarn add cross-env --dev`  
    - node_env 설정  
    package.json파일  
    ```
   "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "npx webpack serve --config config/webpack.config.js --progress --mode development",
        "dev": "cross-env NODE_ENV=development webpack serve --config config/webpack.config.js --mode development --progress"
    },
    ```

- 리액트 라우터 설치
`yarn add react-router-dom`
- axios 설치  
`yarn add axios`
- 스타일 컴포넌트 설치  
`yarn add styled-components`
- stomp 모듈,sockjs 설치  
`yarn add @stomp/stompjs sockjs-client`
- reactstrap 설치  
`yarn add reactstrap`  
- babel 플러그인에 폴리필 추가하기  
    async,await사용시 regeneratorRuntime 에러 발생  
    => 최신 문법 지원을 위해 바벨 폴리필  
    => ES6이상에서 몇가지 메서드들이 기존의 컴파일-타임의 코드변환으로는 해결이 어려움  
    (ES6이상에서 새롭게 추가된 Promise,Map,Set같은 전역 객체들이나 String.padStart등 전역 객체에 추가된 메서드등 )  
    => 런-타입에 필요한 기능을 주입하는 폴리필이 필요하다)   
    .config/babel.config.json  
    ```
    {
    "plugins": ["@babel/plugin-transform-runtime"]
    }
    ```
    `yarn add @babel/plugin-transform-runtime`
    `yarn add @babel/runtime`
- 리덕스 설치  
`yarn add redux react-redux`
- redux-devtools-extension라이브러리(스토어 상태를 개발자 도구에서 조회가능하게하는 라이브러리)  
`yarn add redux-devtools-extension`  
 [크롬에서 확장 프로그램 설치해야함](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## 기능  
로그인,사람목록,채팅초대,채팅

- 구현중  
    1. 로그인
        - 세션아니면 토큰으로 하기
    2. 채팅초대하기(위의 사람목록에서 사람 클릭해서 1명 또는 여러명 채팅방초대기능   
        - 유저리스트를 받아서 서버단(서비스)에서 한명한명 채팅방을 생성하는 방식을 생각중인데  한번에 생성하는 방법 없는지 이외에 효율적인 방법이 있는지 조금   더 생각해봐야할듯
    3. 실시간 일대일 채팅 기능
        - 시작시(새 채팅이 올 때) 스크롤바 맨아래 위치하게
    4. 일대다 채팅(사람목록,채팅초대하기 구현하면 바로 될듯)  

   
- 완성  
    1. 로그인   
        - 세션,토큰 아니고 그냥 db에서 id값 가져옴  
    2. 사람목록  
        - db에 임의 값, 사람목록들 넣어놓음  
    3. 채팅초대하기(위의 사람목록에서 사람 클릭해서 1명 또는 여러명 채팅방초대기능   
        1. 클릭시 상태값에 사람리스트(배열)담고 사람 리스트 출력됨  
        2. 취소하고싶은 사람 이름 클릭시 삭제  
        
    4. 실시간 일대일 채팅 기능  
        1. 실시간 다른 브라우저에서 1대1 채팅 기능 완성  
                (초대하기 기능 구현안돼서 1번유저2번유저가 참여한 채팅방을 임시로 db에 만들어놓음)    
        ![채팅영상](https://user-images.githubusercontent.com/60701130/159219500-6a4b8b83-f370-4f35-8e77-543a761184bf.gif)  
    5. Route 사용해서 리팩토링 완성

# chat-practice-redux 조직도  
```
chat-practice  
├── .vscode  
├── config
│   ├── babel.config.json  
│   └── webpack.config.js  
├── node_modules  
├── public  
│   └── index.html  
├── src  
│   ├── assets  
│   │   └── css  
│   │       └── chatstyle.css  
│   ├── components  
│   │   └── Chat.js  
│   │       ├── Friends.js  
│   │       ├── ChatRoomList.js  
│   │       ├── ChatInvite.js  
│   │       └── ChatRoom.js  
│   │           ├── ChatInputBox.js  
│   │           └── ChatContentsBox.js  
│   ├── module
│   │   ├── chatInputReducer.js
│   │   └── rootReducer.js
│   ├── App.js  
│   └── index.js  
├── package-lock.json  
├── package.json  
├── yarn-error.log  
└── yarn.lock  
```
