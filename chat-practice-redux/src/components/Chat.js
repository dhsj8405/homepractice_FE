import React, { useState, useEffect,useRef } from 'react';
import ChatRoomList from './ChatRoomList.js'
import ChatRoom from './ChatRoom.js'
import ChatInvite from './ChatInvite.js'
import Friends from './Friends.js'

const Chat = ({users,loginUser,chatRoomList}) => {
    const [isOpenChatRoom, setIsOpenChatRoom] = useState(false);
    const[selectChatRoom, setSelectChatRoom] = useState();
    const [inviteList, setInviteList] = useState([]);
    //채팅방 변경 감지위한 상태
    const [changeChatRoom, setChangeChatRoom] = useState(false);

    /*
 *  채팅관련 
 */
    // 아이디에 해당되는 채팅방 리스트 가져옴
    // 임의로 App.js 에 가져다놓음 (로그인하기 버튼클릭시에 바로 가져와야해서 컴포넌트로 분할하려했는데 기능구현우선)
    // 추후에  Chat컴포넌트안에넣고 App.js에 채팅방리스트 라우터 만들어준 후 그거 클릭했을때 getChatRoomList실행되게하면됨)
    // const getChatRoomList = () => {
    //     if(loginUser.id === "aaaa" || loginUser.id === "bbbb" ){
    //         axios({
    //             url: 'http://localhost:9099/chat/chatRoomList',
    //             method: 'post',
    //             data: loginUser
    //         }).then((res)=> {
             
    //             console.log(res.data.list);
    //             setChatRoomList(res.data.list);
    //         })
    //     }else{
    //         console.log("채팅방없음")
    //     }
    // }

 
//===============================================================================================


    return (
        <>
            <Friends
                users = {users}
                inviteList = {inviteList}
                setInviteList = {setInviteList}
            />
       
            <ChatRoomList
                chatRoomList = {chatRoomList}
                setSelectChatRoom = {setSelectChatRoom}
                setIsOpenChatRoom = {setIsOpenChatRoom}
                changeChatRoom = {changeChatRoom}
                setChangeChatRoom = {setChangeChatRoom}
            />

            <ChatInvite
                inviteList = {inviteList}
                setInviteList = {setInviteList}
            />
            
            {isOpenChatRoom 
            ?
                <ChatRoom
                    selectChatRoom = {selectChatRoom}
                    loginUser = {loginUser}
                    changeChatRoom = {changeChatRoom}
                />
            :
                <></>
            }

        </>
    );
};

export default Chat;