import React from 'react';
import{RecoilRoot} from 'recoil';
import Counter from './Counter';
const App = () => {
  
    return (
        <RecoilRoot>
            <Counter />
        </RecoilRoot>
        );
}

export default App;