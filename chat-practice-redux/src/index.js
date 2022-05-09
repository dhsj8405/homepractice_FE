import React from 'react';
import ReactDOM from 'react-dom';           
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App.js';           
import rootReducer from './module/rootReducer'; //여러개의 reducer를 감싸는root reducer
import { composeWithDevTools } from 'redux-devtools-extension'; //스토어 상태를 개발자 도구에서 조회가능하게하는 라이브러리
// reducer 와 devTool 을 가진 store 생성
// 하나의 어플리케이션에서는 하나의 store 만 생성할 수 있으므로 여러개의 reducer 를 사용하기 위해 rootReducer.js 로 모든 리듀서를 감싸준다.

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    // Provider 는 자식 컴포넌트 App가 store 의 state 를 사용할 수 있도록 해준다.
    <Provider store={store}>
        <App />,
    </Provider>,
    
    document.getElementById('root')
    
    );