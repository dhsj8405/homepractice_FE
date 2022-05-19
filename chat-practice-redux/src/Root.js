import React from 'react';
import App from './App.js';
import rootReducer from './module/rootReducer'; //여러개의 reducer를 감싸는root reducer
import { composeWithDevTools } from 'redux-devtools-extension'; //스토어 상태를 개발자 도구에서 조회가능하게하는 라이브러리
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools());

const Root = () => {
    return (
        <Provider store={store}>
                <App/>
        </Provider>
        
    );
};

export default Root;