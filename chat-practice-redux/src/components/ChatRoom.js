// axios.defaults.withCredentials = true;
import React, { useState, useEffect, useRef } from 'react';

import ChatContentsBox from './ChatContentsBox.js';
import ChatInputBox from './ChatInputBox.js';
import axios from 'axios'
import styled from 'styled-components';


//stomp
import SockJS from 'sockjs-client';
// import { Stomp } from '@stomp/stompjs';
import { Stomp } from '@stomp/stompjs';
// import { Stomp } from '@stomp/rx-stomp';
// import webstomp from 'webstomp-client';
const ChatInputStyle = styled.input`
width: 300px;
padding: 9px 9px 0px 9px ;
height: 30px;
`;
const ChatRoom = ({selectChatRoom, loginUser, changeChatRoom}) => {

    const [content, setContent]= useState('');
    const[messageList, setMessageList] = useState([]);
    const [inputMessage, setInputMessage]= useState("");

/*
 *  클라이언트 객체 생성 
 *  1. SockJS를 내부에 들고있는 stomp를 내어줌
 */
    /**
     * !!!초기에 소켓 연결은 한번만~!!! 밑에 useEffect로 첫 랜더링시 한번만 실행되게 해놨음
     * =>밑의 const 변수 방식으로 선언하면
     * 채팅칠때 상태값변경 또는 메시지 리스트 없데이트될때 리랜더링으로 
     * stompClient는 다시 생성되지만 소켓 연결을 한번만해야하기때문에 소켓연결 정보는 사라진다(connect함수안의 stomphandler안에 publish가 메시지 send를 가능하게함)
     * useRef변수로 선언하면 리랜더링시에도 초기화가 안돼서 소켓 연결 유지할 수 있다.
     */
    const stompClient = useRef(
        Stomp.over( () => {
            return new SockJS('http://localhost:9099/stomp/connect')
        }) 
    );
    
    // const stompClient = Stomp.over( () => {
    //     return new SockJS('http://localhost:9099/stomp/connect')
    // });
    
    // 옛날 방식
    // const sock = new SockJS('http://localhost:9099/stomp/connect');
    // const stompClient = Stomp.over(sock);
    

/*
 * 소켓 
 */  
    // 연결된 소켓 해제 : 해제속도가 그리 빠르지 않아서 async await로 동기적으로 실행해야함
   const socketConn = async () => {
    console.log("또 들어오냐 ????")
    
            console.log("d?????")
            await stompClient.current.deactivate();
        
        
         //2. 소켓연결
        // useRef 변수는 .current로 접근할 수 있다
        stompClient.current.connect({},function(frame){
            console.log(stompClient.current)


            console.log("Connected: "+frame); 

            // 3. send(path, header, message)로 메세지를 보낼 수 있음 / *채팅방에 참여 
            stompClient.current.send('/app/chat/enter',{},JSON.stringify({messageNo: 1, message: "", chatRoomNo: selectChatRoom.no}));
            
            //4. subscribe(path, callback)으로 메세지를 받을 수 있음
            // stompClient.current.subscribe(`/topic/chat/room/${selectChatRoom.no}`,(chat)=>{
            //     console.log(chat.body)
            //     var content = JSON.parse(chat.body);
            //     console.log(content.message);
            //     setContent(content.message)
            //     getMessageList(selectChatRoom);
                // setMessageList([...messageList, content.message]);
            // });

         
        
        });
    
       
    
    }
    // const socketDisConn = async () => {
    //     if(stompClient.current !== null){
    //         console.log("d?????")
    //         await stompClient.current.deactivate();
    //     }        
    // }

    // 소켓연결은 한번만!!! useEffect 두번째 매개변수로 빈배열을 넣어주면 최초 랜더링시에만 실행
    useEffect(() =>{
        // socketDisConn();
        socketConn();
        console.log("소켓연결 왜 안들어옴 ?")
    },[changeChatRoom])

/*
 *  채팅방 
 */

    // 클릭된 채팅방의 메시지 리스트 가져오기 : ( 상태값(클릭된 채팅방)이 변경 되었을 때)
    useEffect(() =>{
        if(selectChatRoom != undefined){    // 제일 초기에 상태값 초기화 될때 useEffect실행 방지
        
        // 메시지 리스트 가져오기
        getMessageList(selectChatRoom);}
    },[selectChatRoom]);
  
    // 채팅방안 메시지 리스트 가져오기
    const getMessageList = (chatRoom) => {
        if(loginUser.id === "aaaa" || loginUser.id === "bbbb" ){
            axios({
                url: `http://localhost:9099/chat/msgList/${chatRoom.no}`,
                method: 'GET'
            }).then((res)=> {
                // console.log(res.data.list[0].message);
                // console.log(res.data.list);
                setMessageList(res.data.list);
                
                // setCreateChatRoomNO(res.data);
                // openChatRoom(res.data);
            })
        }else{
            console.log("메시지리스트없음")
        }
    }     

/*
 * 메시지 
 */
    // 메시지 입력 핸들러
    // const inputMessageHandler = (e) => {
    //     e.preventDefault();
    //     setInputMessage(e.target.value);
    // }; 

    // 메세지 전송
    const sendMessage = (msg) => {
        setInputMessage("");    //메시지 보낼때 인풋박스 비우기
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log(selectChatRoom)
            stompClient.current.send('/app/chat/message', {}, JSON.stringify({ chatMsgNo: 1, message: msg, chatRoomNo: selectChatRoom.no,sendUserNo: loginUser.id === "aaaa" ? 1 : 2 ,sendUserId : loginUser.id} ));
            // stompClient.current.send('/app/chat/message', {}, JSON.stringify({ chatMsgNo: 1, message: msg, chatRoomNo: selectChatRoom.no,sendUserNo: loginUser.id === "aaaa" ? 1 : 2 , sendUserId: loginUser.id} ));
            
            
            stompClient.current.subscribe(`/topic/chat/room/${selectChatRoom.no}`,(chat)=>{
                console.log("2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
                // console.log(chat.body)
                var content = JSON.parse(chat.body);
                console.log(content.message);
                // setContent(content.message);
                // console.log(messageList)
                setMessageList([...messageList, content]);
                // console.log(messageList)
                // getMessageList(selectChatRoom);
            });
    }    

    // 메시지 전송 버튼
    //1. 엔터
    const sendEnter = (e) => {
        e.preventDefault();
        if (window.event.keyCode == 13) {
            // 메시지 보내기
            if(inputMessage == "" || inputMessage == null || inputMessage.trim() == ""){

            }else{
                sendMessage(inputMessage);
            }
        }
    }
    //2. 버튼 
    const sendBtn = (e) => {
        e.preventDefault();
        if(inputMessage == "" || inputMessage == null || inputMessage.trim() == ""){

        }else{
            sendMessage(inputMessage);
        }
        
    }

    return (
        <>
          
                <>
                    <ChatContentsBox  
                        messageList={messageList}
                        loginUser = {loginUser}
                        selectChatRoomName = {selectChatRoom.name}
                    />
                
                    <ChatInputBox
                        // stompClient={stompClient}
                        // loginUser = {loginUser}
                        // selectChatRoom = {selectChatRoom}
                        // sendMessage = {sendMessage}
                        setInputMessage = {setInputMessage}
                        inputMessage ={inputMessage }

                        sendBtn = {sendBtn}
                        sendEnter = {sendEnter}
                    />
                    
                    {/* <ChatInputStyle        
                        type="text"
                        value={inputMessage}
                        onChange={inputMessageHandler}
                        onKeyUp={(e) => sendEnter(e)}
                    />
                    <button onClick={(e) => sendBtn(e)}>전송</button> */}
                </>
         
        </>
    );
}

export default ChatRoom;