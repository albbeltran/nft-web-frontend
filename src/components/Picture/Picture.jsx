import React from 'react'
import styled from "styled-components";
import figure from '../../assets/figure-main.png';

const Picture = () => {
    return (
        <Figure src={figure} alt="logo" />
    )
}

const Figure = styled.img`
    margin-top: 4em;
    width: 90%;  
`;

export { Picture };