import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration : none;
    color: gray;
    &:hover{
        color: black;
    }
`;
const StyledLi = styled.li`
    float: left;
    list-style: none;
    padding: 10px;


`;
const StyledUl = styled.ul`
display: table-row;`;

const Menu = () => {
    return (
        
        <StyledUl>
            <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
            <StyledLi><StyledLink to="/about">About</StyledLink></StyledLi>
            <StyledLi><StyledLink to="/chat">Chat</StyledLink></StyledLi>
        </StyledUl>
        
    );
};

export default Menu;