import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles  from '../assets/css/layout.css';


const StyledLink = styled(Link)`
    text-decoration : none;
    color: #C1C4DB;
    &:hover{
        color: black;
    }
`;
// const StyledLi = styled.li`
//     float: left;
//     list-style: none;
//     padding: 10px;
// `;
// const StyledUl = styled.ul`
//     float: right
//     width:100%;
//     display: inline-block
// `;

const Menu = () => {
    return (
        
        <div className={styles.headerLayout}>
            <div className = {styles.navLogo}>
                <Link className={styles.logoLink} to="/">로고</Link>
            </div>
            <div className={styles.navMenu}>
                <ul className={styles.navUl}>
                {/* <StyledUl> */}
                    {/* <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
                    <StyledLi><StyledLink to="/about">About</StyledLink></StyledLi>
                    <StyledLi><StyledLink to="/chat">채팅</StyledLink></StyledLi>
                    <StyledLi><StyledLink to="/login">로그인</StyledLink></StyledLi> */}
                {/* </StyledUl> */}
                
                    <li className={styles.navLi}><StyledLink to="/">Home</StyledLink></li>
                    <li className={styles.navLi}><StyledLink to="/about">About</StyledLink></li>
                    <li className={styles.navLi}><StyledLink to="/chat">채팅</StyledLink></li>
                    
                </ul>
            </div>
            <div className={styles.navUser}>
            <li className={styles.navLiUser}><StyledLink to="/login">로그인</StyledLink></li>
            </div>
        </div>
        
    );
};

export default Menu;