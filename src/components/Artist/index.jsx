import React from 'react';
import { Container } from './Artist';
import p1 from '../../assets/behind-design/Einstein.png';
import p2 from '../../assets/behind-design/DaVinci.png'
import p3 from '../../assets/behind-design/Mozart.png';
import p4 from '../../assets/behind-design/Jeanne.png';
import p5 from '../../assets/behind-design/Armstrong.png';
import p6 from '../../assets/behind-design/Chaplin.png';
import p7 from '../../assets/behind-design/Lee.png';
import p8 from '../../assets/behind-design/Mandela.png';
import p9 from '../../assets/behind-design/Angelou.png';
import p10 from '../../assets/behind-design/Lagerfield.png';
import p11 from '../../assets/behind-design/Miyazaki.png';
import p12 from '../../assets/behind-design/Mohammad.png';

const images = {
    p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12
}

const Artist = ({ children, artistData = {} }) => {
    return (
        <Container>
            {children}
            <img src={images[artistData.id]} className="img" alt="Einstein"></img>
            <div className="description">
                <h3 className='title'>{artistData.name}</h3>
                <p dangerouslySetInnerHTML={{__html:artistData.description}}></p>
            </div>
        </Container>
    )
}

export { Artist };