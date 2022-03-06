import React from 'react';

const App = function() {
    //const app = React.createElement('h1', null, 'Hello World');
    //return app;
    const message = "웹팩,바벨 설정 완료";
    return (
        //<div onClick =''></div>         //html에선 안좋은 표기방법이나 리액트에선 이걸 위에 createElement처럼 만들어줘서 써도됨
        <div>
        <h1>{message}</h1>              
        </div>
        

        // <h1>{message + '                '}</h1>
        // <h1>{`{message}              `}</h1>
    );
}

export { App }

