// axios.defaults.withCredentials = true;
import React from 'react';

import ChatContentsBox from './ChatContentsBox.js';
import ChatInputBox from './ChatInputBox.js';


const ChatRoom = ({messageList, client, loginUser}) => {
    

    return (
        <div>

            <ChatContentsBox   
                messageList={messageList}
            />
        
            <ChatInputBox
                client={client}
                loginUser = {loginUser}
            />
            
        </div>
    );
}

export default ChatRoom;