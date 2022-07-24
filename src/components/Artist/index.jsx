import React from 'react';
import { Container } from './Artist';
import DaikiMiyana1 from '../../assets/behind-design/Daiki-Miyama1.png';

const Artist = () => {
    return (
        <Container>
            <img src={DaikiMiyana1} className="img" alt="Daiki Miyana"></img>
            <div className="description">
                <h3>Daiki Miyana</h3>
                <p>As the original Renaissance Man, Leonardo Da Vinci has been given a plethora of labels for his many fields of expertise. He has since become an icon of intellectual curiosity, having created The Vitruvian Man, symbolizing the unification of all areas of knowledge. It is our aim to create a society that is a well-rounded trailblazer, and a platform that assembles together all the elite members of diverse fields— to emulate The Vitruvian Man in our own right.</p>
            </div>
        </Container>
    )
}

export { Artist };