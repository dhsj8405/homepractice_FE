import React, { useState } from 'react';

import styled from 'styled-components';


const ChatInputStyle = styled.input`
width: 300px;
padding: 9px 9px 0px 9px ;
height: 30px;
`;

const ChatInputBox = ({client, loginUser, selectChatRoom}) => {
    const [inputMessage, setInputMessage]= useState("");

/*
 * 메시지 입력 핸들러
 */
    const inputMessageHandler = (e) => {
        e.preventDefault();
        setInputMessage(e.target.value);
    }; 

/*
 * 메시지 전송 버튼
 */
    // 엔터
    const sendEnter = (e) => {
        e.preventDefault();
        if (window.event.keyCode == 13) {
            console.log("들어오냐?")
            // 메시지 보내기
            sendMessage(inputMessage);
        }
    }
    // 버튼 
    const sendBtn = (e) => {
        e.preventDefault();
        sendMessage(inputMessage);
    }

/*
 * 메시지 전송 함수
 */
    //  const sendMessage = (msg) => {
    //     setInputMessage("");    //메시지 보낼때 인풋박스 비우기
    //     // client.send('/app/chat/message', {}, JSON.stringify({ chatRoomNo: 1, msg: msg, send_user_no: 1 }));
    //     console.log("test")
        
    //     if(client.disconnect){
    //         console.log("test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
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
        
    // }

    const sendMessage = (msg) => {
        console.log(client)
        console.log("2++@@@@@@@@++2")
        setInputMessage("");    //메시지 보낼때 인풋박스 비우기
        client.send('/app/chat/message', {}, JSON.stringify({ chatMsgNo: 1, message: msg, chatRoomNo: selectChatRoom.no,sendUserNo: loginUser.id === "aaaa" ? 1 : 2 }));
                // client.publish({
                //     destination: '/app/chat/message',
                //     body: JSON.stringify({ chatMsgNo: 1, message: msg, chatRoomNo: selectChatRoom.no,sendUserNo: loginUser.id === "aaaa" ? 1 : 2 }),
                //     header: {}
                // });      
    }
    return (

        <div>
            <ChatInputStyle        
                type="text"
                value={inputMessage}
                onChange={inputMessageHandler}
                onKeyUp={(e) => sendEnter(e)}
            />
            <button onClick={(e) => sendBtn(e)}>전송</button>
        </div>

    );
}

export default ChatInputBox;