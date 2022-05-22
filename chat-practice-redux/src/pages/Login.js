
import React, { useState } from 'react';

import '../assets/css/layout.css';
import LoginIndex from '../components/LoginIndex';
import Header from '../components/Header';

const login = () => {
    return (
        <>
        <Header />
        <LoginIndex />
        </>
    );
};

export default login;