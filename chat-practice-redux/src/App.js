// axios.defaults.withCredentials = true;
import React, { useState, useEffect,useRef } from 'react';
// import * as Stomp from "webstomp-client";
import axios from 'axios'



import { Input } from 'reactstrap';
import styled from 'styled-components';

import Chat from './components/Chat.js'

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
    
    const [createChatRoomNO, setCreateChatRoomNO] = useState('');
    const [loginUser, setLoginUser] = useState({
        id: "",
        pwd: "",
    });
    
    
    



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

const[chatRoomList, setChatRoomList] = useState([]);
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


        <Chat
            users = {users}
            loginUser = {loginUser}
            chatRoomList = {chatRoomList}
        />



    </>
        
    );
}

export default App;