import React, { useState, useEffect,useRef } from 'react';

import {
    Form,
    Input,
    InputGroup,

} from 'reactstrap';
import axios from 'axios'


const LoginIndex = () => {
const [loginUser, setLoginUser] = useState({
    id: "",
    pwd: "",
});
const [userInfo, setUserInfo] = useState({
    id: "",
    pwd: "",
    name: "",

});
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
        <div className='center-content'>
  
     
            {/* <InputGroup className="input-group-alternative"> */}
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
            <button onClick={(e)=> onClickLogin(e,loginUser)}>로그인하기</button>
        </div>
    );
};

export default LoginIndex;