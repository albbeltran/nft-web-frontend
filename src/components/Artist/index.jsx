import React from 'react';
import { Container } from './Artist';
import Einstein from '../../assets/behind-design/Einstein.png';

const Artist = ({ children }) => {
    return (
        <Container>
            {children}
            <img src={Einstein} className="img" alt="Einstein"></img>
            <div className="description">
                <h3 className='title'>Einstein</h3>
                <p>All religions, arts and sciences are branches of the same tree. All these aspirations are directed toward enabling man's life, lifting it from the sphere of mere physical existence and leading the individual towards freedom” (Einstein)<br></br><br></br>If there is a single individual in which the spirit of multinationalism manifests itself, it would be Albert Einstein. He shared his knowledge of physics, not just as a science, but as an art. In the same way, Des Arts aims to be the tree which represents life, love, and inclusivity: from which infinite branches of possibilities sprout, and which brings together communities from all corners of the world.</p>
            </div>
        </Container>
    )
}

export { Artist };