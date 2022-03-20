import React from 'react';

const ChatRoomList = ({chatRoomList,setSelectChatRoom, setIsOpenChatRoom }) => {
    
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
    // 채팅방 들어왔으니 소켓 연결하기
}
    return (

        <>
            <h3>채팅방 리스트</h3>
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