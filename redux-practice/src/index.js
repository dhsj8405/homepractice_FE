import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createStore } from "redux";
import { Provider } from "react-redux"; 
import rootReducer from "./module/index";

const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
    
    )   
/*
    - Provider
    react-redux라이브러리 안에 있는 컴포넌트
    리액트 앱에 스토어를 쉽게 연결하기 위한 컴포넌트
 */