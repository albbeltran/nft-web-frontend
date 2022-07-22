import React from 'react';
import styled from "styled-components";
import Image from '../../assets/background-main.jpg'

const Main = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.main`

    height: 685px;
    background: url(${Image}) black;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    
`;

export { Main };