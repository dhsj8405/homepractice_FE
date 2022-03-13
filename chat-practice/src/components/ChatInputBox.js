import React, { useState } from 'react';

import styled from 'styled-components';


const ChatInputStyle = styled.input`
width: 300px;
padding: 9px 9px 0px 9px ;
height: 30px;
`;

const ChatInputBox = ({client, loginUser}) => {
    
    const [inputMessage, setInputMessage]= useState('');

    // 메시지 입력 핸들러
    const inputMessageHandler = (e) => {
        e.preventDefault();
        setInputMessage(e.target.value);
    }; 
    // 메시지 엔터키 이벤트
    function enterkey(e) {
        e.preventDefault();
        if (window.event.keyCode == 13) {
            console.log("들어오냐?")
            // 메시지 보내기
            sandMessage(inputMessage);
        }
    }

     // 메시지 전송 함수
     var sandMessage = (msg) => {
        // client.send('/app/chat/message', {}, JSON.stringify({ chatRoomNo: 1, msg: msg, send_user_no: 1 }));
        
        if(client.disconnect){
            // connect 돼있으면 알아서 Already ACTIVE, ignoring request to activate 라고 말해주면서 연결안하고 넘어감 
            // 연결이 끊기기전(메시지 빠르게연속으로보낼때)에 보내면 메시지 전송안되기때문에 밑에 else로 연결돼있을때도 메시지 보낼 수 있어야함
            client.connect({}, ()=>{
                client.publish({
                    destination: '/app/chat/message',
                    body: JSON.stringify({ chatMsgNo: 1, message: inputMessage, chatRoomNo: 1,sendUserNo: loginUser.id === "aaaa" ? 1 : 2 }),
                    header: {}
                });
            })
            getMessageList();
        }else{
            client.publish({
                destination: '/app/chat/message',
                body: JSON.stringify({ chatMsgNo: 1, message: inputMessage, chatRoomNo: 1, sendUserNo: loginUser.id === "aaaa" ? 1 : 2  }),
                header: {}
            });
            getMessageList();
        }
        
        
    }

    return (

        <ChatInputStyle        
            type="text"
            value={inputMessage}
            onChange={inputMessageHandler}
            onKeyUp={(e) => enterkey(e)}
        />

    );
}

export default ChatInputBox;