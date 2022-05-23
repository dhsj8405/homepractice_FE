# JWT 학습(redux)


## JWT란

- JWT(Json Web Token)는 웹표준 (RFC 7519)으로 JSON 포맷을 이용해 정보를 가볍고 안전하게 전송하기 위한 Claim 기반의 Web Token이다.  
- 서버만 알고 있는 Secret Key로 디지털 서명화되어있기 때문에 신뢰할 수 있다  
- 보통 Authorization (로그인, SSO) 또는 안전한 정보 교환을 위해 사용된다.  
- JWT에서는 토큰 자체에 유저 정보를 담아서 HTTP 헤더에 전달하기에 유저 세션을 유지할 필요가 없다.  

- 클레임(Claim)
    - 클레임(Claim)이란 사용자 정보나 데이터 속성 등을 의미한다.  
    - 클레임 기반 토큰 안에는 사용자의 id, pw 등의 개인 정보가 들어있다.  
        - Self-contained : 자체 포함, 토큰 자체가 정보  
    - JWT는 가장 대표적인 클레임 기반 토큰이다.  

## JWT의 필요성
- Session의 한계
    - Cookie는 정보를 클라이언트 측에 저장하고 Session은 정보를 서버측에 저장한다.
    - 따라서 유저의 수가 너무 많으면 서버 과부하
- Scale Out의 한계
    - 서버 확장(scale out)시 세션 정보 동기화 문제
- REST API는 Stateless를 지향
    - 사용자의 상태 정보를 저장하지 않는 형태 ex) 세션, 쿠키


# 개발과정

- 환경
`Front-end` React  
`Back-end` Spring Boot   
`Database` MariaDB  
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

- 리덕스 설치  
`yarn add redux react-redux`
- redux-devtools-extension라이브러리(스토어 상태를 개발자 도구에서 조회가능하게하는 라이브러리)  
`yarn add redux-devtools-extension`  
 [크롬에서 확장 프로그램 설치해야함](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)