# React , SpringBoot

StompJS + sockJS 사용 채팅

## 기능  
- 구현중  
    1. 채팅초대하기(위의 사람목록에서 사람 클릭해서 1명 또는 여러명 채팅방초대기능   
        - 완성  
            1. 클릭시 상태값에 사람리스트(배열)담고 사람 리스트 출력됨  
            2. 취소하고싶은 사람 이름 클릭시 삭제  
        - 구현중   
            유저리스트를 받아서 서버단(서비스)에서 한명한명 채팅방을 생성하는 방식을 생각중인데 조금   더 생각해봐야할듯
    2. 실시간 1대1 채팅 기능  
        - 완성  
            1. 실시간 다른 브라우저에서 1대1 채팅 기능 완성  
                (초대하기 기능 구현안돼서 1번유저2번유저가 참여한 채팅방을 가라로 db에 만들어놓음)  
        <img width="80%" src="![채팅영상](https://user-images.githubusercontent.com/60701130/159219500-6a4b8b83-f370-4f35-8e77-543a761184bf.gif)"/>    
   
    3. 일대다 채팅(사람목록,채팅초대하기 구현하면 바로 될듯)  
  
- 완성  
    1. 로그인   
        - 세션,토큰 아니고 그냥 db에 id값 가져옴  
    2. 사람목록  
        - db에 임의 값, 사람목록들 넣어놓음  



# chat-practice 조직도  
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
│   ├── App.js  
│   └── index.js  
├── package-lock.json  
├── package.json  
├── yarn-error.log  
└── yarn.lock  
```
