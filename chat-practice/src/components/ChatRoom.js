// axios.defaults.withCredentials = true;
import React from 'react';

import ChatContentsBox from './ChatContentsBox.js';
import ChatInputBox from './ChatInputBox.js';


const ChatRoom = ({selectChatRoom, messageList, client, loginUser, getMessageList}) => {
    

    return (
        <>

            <ChatContentsBox  
                selectChatRoom = {selectChatRoom}
                messageList={messageList}
                getMessageList = {getMessageList}
            />
        
            <ChatInputBox
                client={client}
                loginUser = {loginUser}
                selectChatRoom = {selectChatRoom}

            />
            
        </>
    );
}

export default ChatRoom;