import React from 'react';

import styled from 'styled-components';
// import chatStyle from "assets/chatstyle.css";
import chatStyle from '../assets/css/chatstyle.css';

// const ChatBoxStyle = styled.div`
//   width: 300px;
//   height : 200px;
//   padding: 10px 10px 0px 10px ;
//   border: 2px solid #F3F7F9;
//   text-align: left;
// `;
const ChatWrap = styled.div`
border:1px 
solid #999; 
width:300px; 
padding:5px; 
font-size:13px; 
color:#333; 
height: 400px;
`;

const ChatHeader = styled.div`
font-size: 14px; 
padding: 15px 0; 
background: #F18C7E; 
color: white; 
text-align: center;
    
`;

const ChatUl = styled.ul`
width: 100%; 
list-style: none;
`;

const ChatLi = styled.div`
width: 100%; 
`;
const ChatLiLeft = styled.div`
text-align: left;
`;
const ChatLiRight = styled.div`
text-align: right;
`;

const Sender = styled.div`
margin: 10px 20px 0 20px; 
font-weight: bold;
`;
const Leftmsg = styled.div`
display: inline-block; 
word-break:break-all; 
margin: 5px 20px; 
max-width: 75%; 
border: 1px solid #888;
padding: 10px; 
border-radius: 5px; 
background-color: #FCFCFC; 
color: #555; 
text-align: left;
`;

const Rightmsg = styled.div`
display: inline-block; 
word-break:break-all; 
margin: 5px 20px; 
max-width: 75%; 
border: 1px solid #888;
padding: 10px; 
border-radius: 5px; 
background-color: #FFEB33; 
color: #555; 
text-align: left;
`;

const ChatContentsBox = ({messageList,loginUser}) => {
    
    return (
        
        <ChatWrap>
            <ChatHeader>
            
                채팅
            
            </ChatHeader>
           
            <ChatUl>
                <ChatLi>
                    {messageList && messageList.map((list)=>
                            <>
                                {loginUser.id == list.sendUserId
                                    ? 
                                        <ChatLiRight>
                                            <Rightmsg>
                                                {list.message}
                                            </Rightmsg>    
                                        </ChatLiRight>
                                    :
                                    
                                        <ChatLiLeft>
                                            <div className={chatStyle.other}>
                                                <Sender>
                                                    {list.sendUserName}
                                                </Sender>
                                                <Leftmsg>
                                                    {list.message}
                                                </Leftmsg>
                                            </div>
                                        </ChatLiLeft>
                                }
                                
                            </>
                    )}
                </ChatLi>
            </ChatUl>
                
            
           

            <>
                        
            </>
    </ChatWrap>
     );
}

export default ChatContentsBox;