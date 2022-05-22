import React from 'react';
import Header from '../components/Header';
import styles  from '../assets/css/layout.css';

const Home = () => {
    return (
        <>
        <Header />
        <div className={styles.centerContent}>
            메인화면
        </div>
      
    </>
    );
};

export default Home;