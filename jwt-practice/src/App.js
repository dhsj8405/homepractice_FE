import axios from 'axios'
import React, { useState, useEffect } from 'react';

const App = () => {
    const [ str, setStr ] = useState('');

    // 첫 렌더링에만 호출하기(매개변수로 빈배열)
    useEffect(() =>{
        axios({
            url: 'http://localhost:9099/main',
            method: 'GET'
        }).then((res)=> {
            setStr(res.data);
        })
    },[]);
    
    return (
        <h1>{str}</h1>             
    );
}

export default App;