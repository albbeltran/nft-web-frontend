import React from 'react';
import styled from "styled-components";
import ImageMain from '../../assets/background-main.jpg'
import ImageStars from '../../assets/background-stars.jpg'

let background;
const path = window.location.pathname;

if(path === '/') background = { 'backgroundImage': `url(${ImageMain})` }
else if(path === '/home') background = { 'backgroundImage': `url(${ImageStars})` }
else if(path === '/about') background = { 'backgroundImage': `url(${ImageMain})` }

const Main = ({ children }) => {

    return (
        <Container style={background}>
            {children}
        </Container>
    )
}

const Container = styled.main`

    height: 696px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    
`;

export { Main };