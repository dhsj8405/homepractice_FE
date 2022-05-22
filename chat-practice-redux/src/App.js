// axios.defaults.withCredentials = true;
import React from 'react';
// import * as Stomp from "webstomp-client";
import{BrowserRouter} from 'react-router-dom';

import { Route,Routes } from 'react-router-dom';
// import { Home, About, Chat, Login } from './pages';
import Home from './pages/Home';
import About from './pages/About';
import Chat from './pages/Chat';
import Login from './pages/Login';


const App = () => {

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<Home/>} />
                <Route path='/login' element= {<Login/>} />
                <Route path='/about' element= {<About/>} />
                <Route path='/chat' element= {<Chat/>} />
            </Routes>
        </BrowserRouter>



    </>
        
    );
}

export default App;
