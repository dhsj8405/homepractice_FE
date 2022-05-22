
import React, { useState } from 'react';

import '../assets/css/layout.css';
import LoginIndex from '../components/LoginIndex';
import Header from '../components/Header';
import styles  from '../assets/css/layout.css';

const login = () => {
    return (
        <>
        <Header />
        <div className={styles.centerContent}>
            <LoginIndex />
        </div>
        </>
    );
};

export default login;