import React, { useState, useEffect,useRef } from 'react';

import axios from 'axios'
import ChatIndex from '../components/ChatIndex.js'
import Header from '../components/Header';
import styles  from '../assets/css/layout.css';
import {
    Form,
    Input,
    InputGroup,

} from 'reactstrap';
const Chat = () => {

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
    const [userInfo, setUserInfo] = useState({
        id: "",
        pwd: "",
        name: "",

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
        //유저 정보 가져오기
        getUserList();

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

const getUserList = () => {
    if(loginUser.id === "aaaa" || loginUser.id === "bbbb" ){
        axios({
            url: 'http://localhost:9099/user/userInfo',
            method: 'post',
            data: loginUser
        }).then((res)=> {
            
            console.log(res.data);
            setUserInfo(res.data)
        })
    }else{
        console.log("유저정보 없음")
    }
}



    return (
       <>
       <Header />
        
       <div className={styles.centerContent}>
       <Form className='login-form'>
                <InputGroup>
                    <Input 
                        type="id" 
                        value={loginUser.id} 
                        placeholder='아이디'
                        onChange={onChangeInputId}
                    />
                </InputGroup>
                <br/>
                <InputGroup>
                    <Input 
                        type="password" 
                        value={loginUser.pwd}
                        onChange={onChangeInputPwd}
                        placeholder='비밀번호' />
                </InputGroup>
            </Form>
            <br />
            <button onClick={(e)=> onClickLogin(e,loginUser)}>로그인하기</button>
        {/* <input
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
        <br/>
        <button onClick={(e)=> onClickLogin(e,loginUser)}>로그인하기</button> */}


        <ChatIndex
            users = {users}
            userInfo = {userInfo}
            chatRoomList = {chatRoomList}
        />
</div>
       </>
    );
};

export default Chat;