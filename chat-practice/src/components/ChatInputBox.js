import React, { useState } from 'react';

import styled from 'styled-components';


const ChatInputStyle = styled.input`
width: 300px;
padding: 9px 9px 0px 9px ;
height: 30px;
`;

const ChatInputBox = ({setInputMessage, inputMessage, sendBtn, sendEnter }) => {
    // const [inputMessage, setInputMessage]= useState("");
     

/*
 * 메시지 입력 핸들러
 */
    const inputMessageHandler = (e) => {
        e.preventDefault();
        setInputMessage(e.target.value);
    }; 


/*
 * 메시지 전송 함수
 */
    //  const sendMessage = (msg) => {
    //     setInputMessage("");    //메시지 보낼때 인풋박스 비우기
    //     // stompClient.send('/app/chat/message', {}, JSON.stringify({ chatRoomNo: 1, msg: msg, send_user_no: 1 }));
    //     console.log("test")
        
    //     if(stompClient.disconnect){
    //         console.log("test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    //         // connect 돼있으면 알아서 Already ACTIVE, ignoring request to activate 라고 말해주면서 연결안하고 넘어감 
    //         // 연결이 끊기기전(메시지 빠르게연속으로보낼때)에 보내면 메시지 전송안되기때문에 밑에 else로 연결돼있을때도 메시지 보낼 수 있어야함
    //         stompClient.connect({}, ()=>{
    //             stompClient.publish({
    //                 destination: '/app/chat/message',
    //                 body: JSON.stringify({ chatMsgNo: 1, message: inputMessage, chatRoomNo: 1,sendUserNo: loginUser.id === "aaaa" ? 1 : 2 }),
    //                 header: {}
    //             });
    //         })
            
    //     }else{
    //         stompClient.publish({
    //             destination: '/app/chat/message',
    //             body: JSON.stringify({ chatMsgNo: 1, message: inputMessage, chatRoomNo: 1, sendUserNo: loginUser.id === "aaaa" ? 1 : 2  }),
    //             header: {}
    //         });
            
    //     }
        
    // }


    return (

        <>
            <ChatInputStyle        
                type="text"
                value={inputMessage}
                onChange={inputMessageHandler}
                onKeyUp={(e) => sendEnter(e)}
            />
            <button onClick={(e) => sendBtn(e)}>전송</button>
        </>

    );
}

export default ChatInputBox;