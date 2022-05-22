import React from 'react';
import ReactDOM from 'react-dom/client';           

import Root from './Root.js';
// import 'bootstrap/dist/css/bootstrap.css';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
    <Root />,
);

 
/**
 * ReactDOM.render is no longer supported in React 18. 
 * Use createRoot instead. 
 * Until you switch to the new API, your app will behave as if it's running React 17. 
 * Learn more: https://reactjs.org/link/switch-to-createroot
 */
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//     <Root />,
//     document.getElementById('root')    
//     );