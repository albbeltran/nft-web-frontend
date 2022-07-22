import React from 'react';
import styled from "styled-components";

const lineHeight = { 'lineHeight': '25px' }

const Header = () => {
    return (
        <Div>
            <span>LAUNCHING SOON</span>
            <h1 className='title'>DES ARTS</h1>
            <span className='subtitle'>METAPOLITAN SOCIETY</span>
            <span style={lineHeight}>Building web 3.0 for the future,</span>
            <span>one unicorn at a time...</span>
        </Div>
    )
}

const Div = styled.div`

    padding: 9em 0em 5em 14em;
    color: white;
    font-family: 'Fredoka', sans-serif;

    span {
        display: block;
        font-size: 26px;
        font-weight: 400;
    }

    .title {
        font-weight: 700;
        font-size: 75px;
        margin: -10px 0 -15px 0;
        text-shadow:
            0 0 7px #ffffff,
            0 0 250px #e252ff
    }

    .subtitle {
        font-weight: 650;
        font-size: 40px;
    }

`;

export { Header };