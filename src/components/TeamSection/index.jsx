import React from 'react';
import { Container } from '../TeamSection/TeamSection';

const TeamSection = ({ children }) => {
    return (
        <Container>
            {children[0]}
            {children[1]}
            <h3 className='title'>Project Management team</h3>
            {children[2]}
            <h3 className='title'>Investors / VCs</h3>
        </Container>
    )
}

export { TeamSection };