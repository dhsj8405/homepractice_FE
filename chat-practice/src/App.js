import axios from 'axios'
import React, { useState, useEffect } from 'react';
// import * as Stomp from "webstomp-client";
import { Stomp } from '@stomp/stompjs';
import * as SockJS from "sockjs-client";

const App = () => {
    const [ str, setStr ] = useState('');
    // const [ msg, setMsg] = useState('');
    // const [ receiveMsg, setReceiveMsg] = useState('');
    // const [enterStatus, setEnterStatus] = useState(false);
    const [content, setContent]= useState('');
    const [inputMessage, setInputMessage]= useState('');
    var sock = new SockJS('http://localhost:9099/chat')
    var client = Stomp.over(sock);
    
    // 메시지 입력 핸들러
    const inputMessageHandler = (e) => {
        e.preventDefault();
        setInputMessage(e.target.value);
    };
    // 메시지 엔터키 이벤트
    function enterkey(e) {
        e.preventDefault();
        if (window.event.keyCode == 13) {
            // 메시지 보내기
            sandMessage(inputMessage);
        }
    }
     // 메시지 전송 함수
     var sandMessage = (msg) => {
         console.log("메세지 전송함수까지 들어옴")
         console.log(msg)
        // client.send('/app/chat/enter',{},JSON.stringify({roomId: 1, roomName:"1번방",userNo : 1}));
        client.send('/app/chat/message', {}, JSON.stringify({ chatRoomNo: 1, msg: msg, send_user_no: 1 }));
    }
    
    // 소켓연결
    const socketConn = () => {
        // setEnterStatus(true);
       
       
        //소켓연결
        client.connect({}, ()=>{
            console.log("소켓연결");
            //subscribe(path, callback)으로 메세지를 받을 수 있음
            client.subscribe('/topic/chat/room/a',(chat)=>{
                var content = JSON.parse(chat.body);
                
                setContent(content.inputMessage)
            })
            
            //send(path, header, message)로 메세지를 보낼 수 있음 / *채팅방에 참여 
            client.send('/app/chat/enter',{},JSON.stringify({roomId: 1, roomName:"1번방",userNo : 1}));
        })
        

    }
    // 첫 렌더링에만 호출하기(매개변수로 빈배열)
    useEffect(() =>{
        axios({
            url: 'http://localhost:9099/main',
            method: 'GET'
        },{withCredentials: true}).then((res)=> {
            setStr(res.data);
        })
        socketConn();

    },[]);


    
    
 
    // const onClickOut = (e) => {
    //     setEnterStatus(false);

    // }
    return (
    <div>
        <h1>{str}</h1>             
        <td>{content}</td>
        <input
                
                type="text"
                value={inputMessage}
                onChange={inputMessageHandler}
                onKeyUp={(e) => enterkey(e)}
        />
    </div>
        
    );
}

export default App;