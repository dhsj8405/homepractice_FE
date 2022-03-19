import React, { useState } from 'react';

import styled from 'styled-components';

const ChatBoxStyle = styled.div`
width: 330px;
padding: 5px 5px 5px 5px ;
height: 35px;
border:1px solid #999;
`;

const ChatInputStyle = styled.input`
width: 285px;
height: 35px;
border: none;
:focus{outline:none;}
`;

const SendBtnStyle = styled.button`
width: 45px;
height: 35px;

background-color:#AFD7AF;
:hover {background-color: #AFC8AF}
float:right;
color: #929292;
border: none;
border-radius: 5px;
cursor: pointer;
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

    return (

        <>
        <ChatBoxStyle>
            <ChatInputStyle        
                type="text"
                value={inputMessage}
                onChange={inputMessageHandler}
                onKeyUp={(e) => sendEnter(e)}
                placeholder='내용을 입력해주세요'
            >
               
            </ChatInputStyle>
            <SendBtnStyle onClick={(e) => sendBtn(e)}>
                    전송
            </SendBtnStyle>
        </ChatBoxStyle>
        </>

    );
}

export default ChatInputBox;