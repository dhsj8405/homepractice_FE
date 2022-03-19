// axios.defaults.withCredentials = true;
import React, { useState, useEffect,useRef } from 'react';
// import * as Stomp from "webstomp-client";
import axios from 'axios'



import { Input } from 'reactstrap';
import styled from 'styled-components';
import ChatRoomList from './components/ChatRoomList'
import ChatRoom from './components/ChatRoom'

const ChatBoxStyle = styled.div`
  width: 300px;
  height : 200px;
  padding: 10px 10px 0px 10px ;
  border: 2px solid #F3F7F9;
  text-align: left;
`;

const ChatInputStyle = styled.input`
width: 300px;
padding: 9px 9px 0px 9px ;
height: 30px;
`;

const App = () => {
    const [ str, setStr ] = useState('');
    // const [ msg, setMsg] = useState('');
    // const [ receiveMsg, setReceiveMsg] = useState('');
    // const [enterStatus, setEnterStatus] = useState(false);
    // const [inputMessage, setInputMessage]= useState('');
    const [users, setUsers] = useState('');
    const [inviteChat, setInviteChat] = useState([]);
    const [createChatRoomNO, setCreateChatRoomNO] = useState('');
    const [loginUser, setLoginUser] = useState({
        id: "",
        pwd: "",
    });
    const[chatRoomList, setChatRoomList] = useState([]);
    const[selectChatRoom, setSelectChatRoom] = useState();
    
    const [openChatRoom, setOpenChatRoom] = useState(false);



    // 첫 렌더링에만 호출하기(매개변수로 빈배열)
    useEffect(() =>{
        axios({
            url: 'http://localhost:9099/main',
            method: 'GET'
        }).then((res)=> {
            //사람 목록 가져옴
            setUsers(res.data);
        })
    },[]);



/*
 *  채팅관련 
 */
    // 아이디에 해당되는 채팅방 리스트 가져옴
    const getChatRoomList = () => {
        if(loginUser.id === "aaaa" || loginUser.id === "bbbb" ){
            axios({
                url: 'http://localhost:9099/chat/chatRoomList',
                method: 'post',
                data: loginUser
            }).then((res)=> {
                
                console.log(res.data.list);
                setChatRoomList(res.data.list);
            })
        }else{
            console.log("채팅방없음")
        }
    }
    // 채팅방 클릭 핸들러
    const onClickRoomEnter = (e,chatRoom) => {
        e.preventDefault();
        console.log(chatRoom);
        setSelectChatRoom(chatRoom);
        setOpenChatRoom(true);
        // 채팅방 들어왔으니 소켓 연결하기
    }
//===============================================================================================


/*
 * 초대할 친구 선택후 방만들기 ( 구현중)
 */

    // 유저목록 클릭 핸들러
    const onClickUserName = (user,e) => {
        // console.log(e.target)
        // console.log(user)
        // setInviteChat(Object.assign({}, inviteChat, user));
        setInviteChat([...inviteChat, user])
        
        console.log(inviteChat)
    }

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
//===============================================================================================

/*
 *  아이디 비번 입력 
 */

    //아이디 입력 핸들러
    const onChangeInputId = (e) => {
        setLoginUser( Object.assign({}, loginUser, { id: e.target.value }))
    };
    //비밀번호 입력 핸들러
    const onChangeInputPwd = (e) => {
        setLoginUser( Object.assign({}, loginUser, { pwd: e.target.value }))
    }
     
    // 로그인 버튼 핸들러
    const onClickLogin = (e,user) => {
        e.preventDefault();
        //채팅방리스트 가져오기
        getChatRoomList();

    }
//===============================================================================================


    return (
    <>
        {/* <h1>{str}</h1>              */}
        
        <td></td>
        <input
            placeholder="아이디"
            type="id"
            value={loginUser.id}
            onChange={onChangeInputId}
        />
                 
        <input
          placeholder="비번"
          type="password"
          value={loginUser.pwd}
          onChange={onChangeInputPwd}
        />
        <button onClick={(e)=> onClickLogin(e,loginUser)}>로그인하기</button>

        <h3>사람목록</h3><br/>
        {users.list && users.list.map((user)=>
            <td 
                onClick={(e) => onClickUserName(user,e)}
                style = {{cursor:'pointer'}}
            >{user.name}</td>
        )}
        <br/>
        
        <h3>채팅방 리스트</h3>
            <ChatRoomList
                chatRoomList = {chatRoomList}
                onClickRoomEnter = {onClickRoomEnter}
                // setSelectChatRoom = {setSelectChatRoom}
            />

        <br/><br/><h3>채팅 초대하기 </h3><br/>
        {
        inviteChat.length === 0
            ? <td></td>
            
            : inviteChat && inviteChat.map((user)=>
            <td >{user.name}</td>
            
            )
        }
        <button onClick={(e)=> onClickInvite(e,inviteChat)}>초대버튼</button>
        
        <br/><br/>
        <div>
     

        
        {/* <ChatBoxStyle>
        
            {messageList && messageList.map((list)=>
            <div>
            <td>{list.message}</td><br/>
            </div>
        )}
        </ChatBoxStyle>
         */}
        {/* <ChatInputStyle
                
                type="text"
                value={inputMessage}
                onChange={inputMessageHandler}
                onKeyUp={(e) => enterkey(e)}
        /> */}
    {openChatRoom 
    ? 
        <ChatRoom
        selectChatRoom = {selectChatRoom}
        loginUser = {loginUser}
        />
    :
        <></>
    }
        </div>
    </>
        
    );
}

export default App;