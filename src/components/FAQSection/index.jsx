import React from 'react';
import styled from "styled-components";

const FAQSection = ({ children }) => {
    return (
        <Container className='Inner'>
            {children[1]}
            {children[0]}
            <h1 className='title faq'>FAQ</h1>
            <div className="questions">
                {children[2]}
            </div>
        </Container>
    )
}

const Container = styled.div`
    text-align: left;
    width: 75%;
    position: fixed;
    top: 150px;

    .title {
        font-weight: 800;
        font-size: 75px;
        margin: -10px 0 -15px 0;
        text-shadow:
            0 0 7px #ffffff,
            0 0 250px #ffffff81
    }

    .questions {
        margin-top: 2em;
        width: 50%;
    }
`

export { FAQSection };