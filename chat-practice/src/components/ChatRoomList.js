import React from 'react';

const ChatRoomList = ({chatRoomList, onClickRoomEnter }) => {
    
    // const onClickRoomEnter = (e,chatRoom) => {
    //     e.preventDefault();
    //     console.log(chatRoom);
    //     setSelectChatRoom(chatRoom);
    // }

    return (

        <>
            {
                chatRoomList && chatRoomList.map((list)=>
                    <div>
                    <td onClick={(e) => onClickRoomEnter(e,list)}>{list.name}</td><br/>
                    </div>
                )
            }
       </>
    );
}

export default ChatRoomList;