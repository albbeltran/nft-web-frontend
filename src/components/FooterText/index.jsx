import React from 'react';
import styled from "styled-components";

const FooterTxt = ({ section }) => {
    return (
        <Content>
            <p className='footerTxt'>\\ {section}
                <br></br>
                \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            </p>
        </Content>
    )
}

const Content = styled.div`
    margin-bottom: 2em;
    
    .footerTxt {
        display: block;
        font-family: 'Fredoka', sans-serif; 
        font-size: 10px;
        font-weight: 300;
        text-align: left;
    }
`

export { FooterTxt };