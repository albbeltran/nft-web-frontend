import React, { useState } from 'react'
import desartsProject from '../../assets/desarts-project-roadmap.png';
import regularProject from '../../assets/regular-project-roadmap.png';
import { Container } from './ProjectType';

const ProjectType = () => {
    const [desartsStatus, setDesartsState] = useState(false);
    let image = regularProject;
    let regularActive = true;
    let desartsActive = false;

    if (!desartsStatus) {
        image = regularProject;
        regularActive = true;
        desartsActive = false;
    } else {
        image = desartsProject;
        desartsActive = true;
        regularActive = false;
    }

    return (
        <Container>
            <img src={image} className='img' alt='project-type'></img>
            <span className='btnGroup'>
                <button className={regularActive ? 'btn regular active' : 'btn regular'} onClick={() => setDesartsState(false)}>Regular project</button>
                <button className={desartsActive ? 'btn desarts active' : 'btn desarts'} onClick={() => setDesartsState(true)}>Des Arts project</button>
            </span>
        </Container>
    )
}

export { ProjectType };