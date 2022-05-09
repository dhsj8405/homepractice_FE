import React from 'react';

const ChatRoomList = ({chatRoomList,setSelectChatRoom, setIsOpenChatRoom,changeChatRoom,setChangeChatRoom }) => {
    
    // const onClickRoomEnter = (e,chatRoom) => {
    //     e.preventDefault();
    //     console.log(chatRoom);
    //     setSelectChatRoom(chatRoom);
    // }
   // 채팅방 클릭 핸들러
   const onClickRoomEnter = (e,chatRoom) => {
    e.preventDefault();
    console.log(chatRoom);
    setSelectChatRoom(chatRoom);
    setIsOpenChatRoom(true);
    setChangeChatRoom(!changeChatRoom);
    // 채팅방 들어왔으니 소켓 연결하기
}
    return (

        <>
            <h3>채팅방 리스트</h3>
            {
                chatRoomList && chatRoomList.map((chatRoom)=>
                    <div>
                    <td onClick={(e) => onClickRoomEnter(e,chatRoom)}>{chatRoom.name}</td><br/>
                    </div>
                )
            }
       </>
    );
}

export default ChatRoomList;