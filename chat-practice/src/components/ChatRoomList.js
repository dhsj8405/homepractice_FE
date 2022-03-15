import React from 'react';

const ChatRoomList = ({chatRoomList, onClickRoomEnter , setSelectChatRoom}) => {
    
    // const onClickRoomEnter = (e,chatRoom) => {
    //     e.preventDefault();
    //     console.log(chatRoom);
    //     setSelectChatRoom(chatRoom);
    // }

    return (

        <div>
            {
                chatRoomList && chatRoomList.map((list)=>
                    <div>
                    <td onClick={(e) => onClickRoomEnter(e,list)}>{list.name}</td><br/>
                    </div>
                )
            }
       </div>
    );
}

export default ChatRoomList;