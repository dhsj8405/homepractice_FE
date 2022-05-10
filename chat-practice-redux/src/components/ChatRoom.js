// axios.defaults.withCredentials = true;
import React, { useState, useEffect, useRef } from 'react';

import ChatContentsBox from './ChatContentsBox.js';
import ChatInputBox from './ChatInputBox.js';
import axios from 'axios'
import styled from 'styled-components';

import { useSelector } from 'react-redux';

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
const ChatRoom = ({selectChatRoom, userInfo, changeChatRoom}) => {

    const [content, setContent]= useState('');
    const[messageList, setMessageList] = useState([]);
    const inputMessage = useSelector(state => state.chatInputReducer.inputData.content);
    const a = '1234';
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
    //  - 방 나가거나 바꿀 때 마다 소켓 끊어줬다가 다시 연결
   const socketConn = async () => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!socketConn!!!!!!!!!!!!!!!!!!!!!!!!!!!")

        await stompClient.current.deactivate();
        
        
         //2. 소켓연결
        // useRef 변수는 .current로 접근할 수 있다
        stompClient.current.connect({},function(frame){
            console.log(stompClient.current)

            stompClient.current.subscribe(`/topic/chat/room/${selectChatRoom.no}`,(chat)=>{
                console.log("2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
                console.log(chat.body)
                setContent(JSON.parse(chat.body));
                // 스톰 subscribe안에서 callback함수안에있는 변수들은 초기값만 읽는 것같다 => 상태값이 변경되어도 초기값만 계속 불러옴
                // 그래서 setMessageList를 useEffect로 빼서 메시지 업데이트
            });

            console.log("Connected: "+frame); 
            // 3. send(path, header, message)로 메세지를 보낼 수 있음 
            // 선택된 방 번호 채팅방 참여
            stompClient.current.send('/app/chat/enter',{},JSON.stringify({messageNo: 1, message: "", chatRoomNo: selectChatRoom.no}));
        });
    }
    // 새로온 채팅 메시지를 기본 메시지 리스트에 병합
    useEffect(()=> {
        setMessageList([...messageList, content]);
    },[content])

/*
 *  채팅방 
 */

    // 클릭된 채팅방의 메시지 리스트 가져오기 : ( 상태값(클릭된 채팅방)이 변경 되었을 때)
    useEffect(() =>{
        
        if(selectChatRoom !== undefined){    // 제일 초기에 상태값 초기화 될때 useEffect실행 방지
            console.log('test:', a);
            // 메시지 리스트 가져오기
            getMessageList(selectChatRoom);
            socketConn();

        }
    },[selectChatRoom]);
  
    // 채팅방안 메시지 리스트 가져오기
    const getMessageList = async (chatRoom) => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!getMessageList!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        setMessageList([]);
        if(userInfo.id === "aaaa" || userInfo.id === "bbbb" ){
            await axios.get(`http://localhost:9099/chat/msgList/${chatRoom.no}`)
            .then((res)=> {

                setMessageList(res.data.list);
                // setCreateChatRoomNO(res.data);
                // openChatRoom(res.data);
                console.log(res.data.list)
            })
            .then(()=>{
                console.log(messageList)
            })

        }else{
            console.log("메시지리스트없음")
        }
    }     

/*
 * 메시지 
 */
    useEffect(()=>{
        console.log(inputMessage); 
        if(inputMessage !== ''){
            sendMessage(inputMessage);
        }
    },[inputMessage]);

    const sendMessage = (msg) => {

        console.log(selectChatRoom)
        console.log(messageList)
             stompClient.current.send('/app/chat/message', {}, JSON.stringify({ chatMsgNo: 1, message: msg, chatRoomNo: selectChatRoom.no,sendUserNo: userInfo.id === "aaaa" ? 1 : 2 ,sendUserId : userInfo.id, sendUserName: userInfo.name} ));
            //  stompClient.current.subscribe(`/topic/chat/room/${selectChatRoom.no}`,(chat)=>{
            //     console.log("2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
            //     var content = JSON.parse(chat.body);    
            //     console.log(content);
            //     // setContent(content.message);
            //     console.log(messageList)
            //     // setMessageList(Object.assign({},messageList,content));
            //     setMessageList([...messageList, content]);
            //     console.log(messageList)
            //     // getMessageList(selectChatRoom);
            // });
    }    

    return (
        <>
                <>
                    <ChatContentsBox  
                        messageList={messageList}
                        userInfo = {userInfo}
                        selectChatRoomName = {selectChatRoom.name}
                    />
                    <ChatInputBox/>
                    
                </>
         
        </>
    );
}

export default ChatRoom;