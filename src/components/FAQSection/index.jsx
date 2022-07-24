import React from 'react';
import { Container } from './FAQ';

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

export { FAQSection };