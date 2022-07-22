import React from 'react';
import styled from "styled-components";
import ImageMain from '../../assets/background-main.jpg'
import ImageStars from '../../assets/background-stars.jpg'

let background;

window.location.pathname === '/' ?
    background = { 'backgroundImage': `url(${ImageMain})` }
    : background = { 'backgroundImage': `url(${ImageStars})` }

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