import axios from 'axios'
// axios.defaults.withCredentials = true;
import React, { useState, useEffect,useRef } from 'react';
// import * as Stomp from "webstomp-client";
import { Stomp } from '@stomp/stompjs';
// import { Stomp } from '@stomp/rx-stomp';
import SockJS from "sockjs-client";

import { Input } from 'reactstrap';
import styled from 'styled-components';
import ChatRoomList from './components/ChatRoomList'
import ChatRoom from './components/ChatRoom'

const ChatBoxStyle = styled.div`
  width: 300px;
  height : 200px;
  padding: 10px 10px 0px 10px ;
  border: 2px solid #F3F7F9;
  text-align: left;
`;

const ChatInputStyle = styled.input`
width: 300px;
padding: 9px 9px 0px 9px ;
height: 30px;
`;

const App = () => {
    const [ str, setStr ] = useState('');
    // const [ msg, setMsg] = useState('');
    // const [ receiveMsg, setReceiveMsg] = useState('');
    // const [enterStatus, setEnterStatus] = useState(false);
    const [content, setContent]= useState('');
    // const [inputMessage, setInputMessage]= useState('');
    const [users, setUsers] = useState('');
    const [inviteChat, setInviteChat] = useState([]);
    const [createChatRoomNO, setCreateChatRoomNO] = useState('');
    const [loginUser, setLoginUser] = useState({
        id: "",
        pwd: "",
    });
    const[chatRoomList, setChatRoomList] = useState([]);
    const[selectChatRoom, setSelectChatRoom] = useState();
    const[messageList, setMessageList] = useState([]);
    // var sock = new SockJS('http://localhost:9099/stomp/connect')
    // var client = Stomp.over(sock);
    
    //1. SockJS를 내부에 들고있는 stomp를 내어줌
    const client = Stomp.over( () => {
        return new SockJS('http://localhost:9099/stomp/connect')
    });


    
    
    // // 메시지 입력 핸들러
    // const inputMessageHandler = (e) => {
    //     e.preventDefault();
    //     setInputMessage(e.target.value);
    // }; 
    // // 메시지 엔터키 이벤트
    // function enterkey(e) {
    //     e.preventDefault();
    //     if (window.event.keyCode == 13) {
    //         console.log("들어오냐?")
    //         // 메시지 보내기
    //         sandMessage(inputMessage);
    //     }
    // }
    //  // 메시지 전송 함수
    //  var sandMessage = (msg) => {
    //     // client.send('/app/chat/message', {}, JSON.stringify({ chatRoomNo: 1, msg: msg, send_user_no: 1 }));
        
    //     if(client.disconnect){
    //         // connect 돼있으면 알아서 Already ACTIVE, ignoring request to activate 라고 말해주면서 연결안하고 넘어감 
    //         // 연결이 끊기기전(메시지 빠르게연속으로보낼때)에 보내면 메시지 전송안되기때문에 밑에 else로 연결돼있을때도 메시지 보낼 수 있어야함
    //         client.connect({}, ()=>{
    //             client.publish({
    //                 destination: '/app/chat/message',
    //                 body: JSON.stringify({ chatMsgNo: 1, message: inputMessage, chatRoomNo: 1,sendUserNo: loginUser.id === "aaaa" ? 1 : 2 }),
    //                 header: {}
    //             });
    //         })
    //     }else{
    //         client.publish({
    //             destination: '/app/chat/message',
    //             body: JSON.stringify({ chatMsgNo: 1, message: inputMessage, chatRoomNo: 1, sendUserNo: loginUser.id === "aaaa" ? 1 : 2  }),
    //             header: {}
    //         });
    //     }
    //     getMessageList();
    // }
    
    // 소켓연결
    var socketConn = () => {
        // setEnterStatus(true);
        
        //2. 소켓연결
        client.connect({}, ()=>{
            console.log(client.connect)
        console.log("++@@@@@@@@++")
            console.log("소켓연결"); 
            //4. subscribe(path, callback)으로 메세지를 받을 수 있음
            client.subscribe(`/topic/chat/room/${selectChatRoom.no}`,(chat)=>{
                console.log(chat.body)
                var content = JSON.parse(chat.body);
                console.log(content.message);
                setContent(content.message)
            })
            
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
            //3. send(path, header, message)로 메세지를 보낼 수 있음 / *채팅방에 참여 
            client.send('/app/chat/enter',{},JSON.stringify({messageNo: 1, message: "", chatRoomNo: selectChatRoom.no}));
            // client.activate();

        })

    }

    // 첫 렌더링에만 호출하기(매개변수로 빈배열)
    useEffect(() =>{
        axios({
            url: 'http://localhost:9099/main',
            method: 'GET'
        }).then((res)=> {
            //사람 목록 가져옴
            setUsers(res.data);
        })
    },[]);


    const onClickUserName = (user,e) => {
        // console.log(e.target)
        // console.log(user)
        // setInviteChat(Object.assign({}, inviteChat, user));
        setInviteChat([...inviteChat, user])
        
        console.log(inviteChat)
    }

    const onFocusUserName = (e) => {
        console.log("zz")
    }
    
    // 초대버튼
    const onClickInvite = (e,user) => {
        console.log(user)
        axios({
            url: 'http://localhost:9099/chat/invite',
            method: 'post',
            data: user
        }).then((res)=> {
            console.log(res);
            // setCreateChatRoomNO(res.data);
            openChatRoom(res.data);
        })

    }

    // // 친구선택후 초대버튼눌린후  방생성
    // const openChatRoom = (roomNo) =>{
    //     //소켓연결
    //     client.connect({}, ()=>{
    //         console.log("소켓연결");
            
    //         //subscribe(path, callback)으로 메세지를 받을 수 있음
    //         client.subscribe(`/topic/chat/room/${roomNo}`,(chat)=>{
    //             var content = JSON.parse(chat.body);
    //             console.log(content);
    //             console.log("z");
    //             setContent(content.name)
    //         })

    //         //send(path, header, message)로 메세지를 보낼 수 있음 / *채팅방에 참여 
    //         client.send('/app/chat/enter',{},JSON.stringify({no: roomNo, name: "<채팅방이름1>"}));
    //         // client.activate();

    //     })
    // }

    
    const onChangeInputId = (e) => {
        setLoginUser( Object.assign({}, loginUser, { id: e.target.value }))
    };

    const onChangeInputPwd = (e) => {
        setLoginUser( Object.assign({}, loginUser, { pwd: e.target.value }))
    }
    // 가라아이디비번으로 룸번호 가져오기
    const onClickLogin = (e,user) => {
        e.preventDefault();
        getChatRoomList();
        // getMessageList();
        // if(loginUser.id === "aaaa" || loginUser.id === "bbbb" ){
        //     axios({
        //         url: 'http://localhost:9099/chat/msgList',
        //         method: 'GET'
        //     }).then((res)=> {
        //         console.log(res.data.list[0].message);
        //         console.log(res.data.list);
        //         setMessageList(res.data.list);

        //         // setCreateChatRoomNO(res.data);
        //         // openChatRoom(res.data);
        //     })
        // }else{
        //     console.log("메시지리스트없음")
        // }

    }
    // 아이디에 해당되는 채팅방 가져옴
    const getChatRoomList = () => {
        if(loginUser.id === "aaaa" || loginUser.id === "bbbb" ){
            axios({
                url: 'http://localhost:9099/chat/chatRoomList',
                method: 'post',
                data: loginUser
            }).then((res)=> {
                
                console.log(res.data.list);
                setChatRoomList(res.data.list);
            })
        }else{
            console.log("채팅방없음")
        }
    }

    // 채팅방 클릭
    const onClickRoomEnter = (e,chatRoom) => {
        e.preventDefault();
        console.log(chatRoom);
        setSelectChatRoom(chatRoom);
        // 채팅방 들어왔으니 소켓 연결하기
    }
    // 채팅방 클릭이 됐을때(즉, 상태값에 클릭된 정보가 입력됐을때) 메시지리스트가져오기
    useEffect(() =>{
        if(selectChatRoom != undefined){
        socketConn();
        getMessageList(selectChatRoom);}
    },[selectChatRoom]);


    // 채팅방안 메시지 리스트 가져오기
    const getMessageList = (chatRoom) => {
        if(loginUser.id === "aaaa" || loginUser.id === "bbbb" ){
            axios({
                url: `http://localhost:9099/chat/msgList/${chatRoom.no}`,
                method: 'GET'
            }).then((res)=> {
                console.log(res.data.list[0].message);
                console.log(res.data.list);
                setMessageList(res.data.list);
                
                // setCreateChatRoomNO(res.data);
                // openChatRoom(res.data);
            })
        }else{
            console.log("메시지리스트없음")
        }
    } 


    return (
    <>
        {/* <h1>{str}</h1>              */}
        
        <td></td>
        <input
            placeholder="아이디"
            type="id"
            value={loginUser.id}
            onChange={onChangeInputId}
        />
                 
        <input
          placeholder="비번"
          type="password"
          value={loginUser.pwd}
          onChange={onChangeInputPwd}
        />
        <button onClick={(e)=> onClickLogin(e,loginUser)}>로그인하기</button>

        <h3>사람목록</h3><br/>
        {users.list && users.list.map((user)=>
            <td 
                onClick={(e) => onClickUserName(user,e)}
                style = {{cursor:'pointer'}}
            >{user.name}</td>
        )}
        <br/>
        
        <h3>채팅방 리스트</h3>
            <ChatRoomList
                chatRoomList = {chatRoomList}
                onClickRoomEnter = {onClickRoomEnter}
                // setSelectChatRoom = {setSelectChatRoom}
            />

        <br/><br/><h3>채팅 초대하기 </h3><br/>
        {
        inviteChat.length === 0
            ? <td></td>
            
            : inviteChat && inviteChat.map((user)=>
            <td >{user.name}</td>
            
            )
        }
        <button onClick={(e)=> onClickInvite(e,inviteChat)}>초대버튼</button>
        
        <br/><br/>
        <div>
        <ChatRoom
            selectChatRoom = {selectChatRoom}
            messageList = {messageList}
            client = {client}
            loginUser = {loginUser}
            getMessageList = {getMessageList} 
        />

        
        {/* <ChatBoxStyle>
        
            {messageList && messageList.map((list)=>
            <div>
            <td>{list.message}</td><br/>
            </div>
        )}
        </ChatBoxStyle>
         */}
        {/* <ChatInputStyle
                
                type="text"
                value={inputMessage}
                onChange={inputMessageHandler}
                onKeyUp={(e) => enterkey(e)}
        /> */}

        </div>
    </>
        
    );
}

export default App;