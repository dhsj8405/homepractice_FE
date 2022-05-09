import React, { useState } from 'react';


const ChatInvite = ({inviteList,setInviteList}) => {

/*
 * 초대할 친구 선택후 방만들기 ( 구현중)
 */



    const onFocusUserName = (e) => {
        console.log("zz")
    }
    
    // 초대버튼 핸들러
    const onClickInvite = (e,user) => {
        console.log(user)
        axios({
            url: 'http://localhost:9099/chat/invite',
            method: 'post',
            data: user
        }).then((res)=> {
            console.log(res);
            // setCreateChatRoomNO(res.data);
            openChatRoom(res.data);
        })

    }
    //초대 취소 핸들러
    const onClickCancle = (e,selectUser) => {
        console.log("z")
        console.log(selectUser)
        setInviteList(inviteList.filter((user) => user !== selectUser));
    }

    // // 친구선택후 초대버튼눌린후  방생성
    // const openChatRoom = (roomNo) =>{
    //     //소켓연결
    //     stompClient.connect({}, ()=>{
    //         console.log("소켓연결");
            
    //         //subscribe(path, callback)으로 메세지를 받을 수 있음
    //         stompClient.subscribe(`/topic/chat/room/${roomNo}`,(chat)=>{
    //             var content = JSON.parse(chat.body);
    //             console.log(content);
    //             console.log("z");
    //             setContent(content.name)
    //         })

    //         //send(path, header, message)로 메세지를 보낼 수 있음 / *채팅방에 참여 
    //         stompClient.send('/app/chat/enter',{},JSON.stringify({no: roomNo, name: "<채팅방이름1>"}));
    //         // stompClient.activate();

    //     })
    // }

    return (
        <>
            <br/><br/><h3>채팅 초대하기 </h3><br/>
            {
            inviteList.length === 0
                ? <td></td>
                
                : inviteList && inviteList.map((user)=>
                <td onClick={(e)=>onClickCancle(e,user)} >{user.name}</td>
                
                )
            }
            <button onClick={(e)=> onClickInvite(e,inviteList)}>초대버튼</button>
        </>
    );
};

export default ChatInvite;