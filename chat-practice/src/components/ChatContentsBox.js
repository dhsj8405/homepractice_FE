import React from 'react';

import styled from 'styled-components';


const ChatBoxStyle = styled.div`
  width: 300px;
  height : 200px;
  padding: 10px 10px 0px 10px ;
  border: 2px solid #F3F7F9;
  text-align: left;
`;


const ChatContentsBox = ({messageList}) => {
    
    return (

        <ChatBoxStyle>
            {/* {content} */}
            {messageList && messageList.map((list)=>
            <div>
            <td>{list.message}</td><br/>
            </div>
        )}
        </ChatBoxStyle>

    );
}

export default ChatContentsBox;