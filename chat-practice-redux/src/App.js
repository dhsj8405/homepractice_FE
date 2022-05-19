// axios.defaults.withCredentials = true;
import React from 'react';
// import * as Stomp from "webstomp-client";
import{BrowserRouter} from 'react-router-dom';

import { Route,Routes } from 'react-router-dom';
// import { Home, About } from './pages';
import Home from './pages/Home';
import About from './pages/About';
import Chat from './pages/Chat';

const App = () => {

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<Home/>} />
                <Route path='/about' element= {<About/>} />
                <Route path='/chat' element= {<Chat/>} />
                {/* <Route exact path='/' component={Home}/> */}
                {/* <Route path='/about' component={About}/> */}
            </Routes>
        </BrowserRouter>



    </>
        
    );
}

export default App;
