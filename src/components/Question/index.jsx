import React from 'react';
import { Container } from './Question';
import vector from '../../assets/Vector-Right.svg';

const Question = ({ id, question, answer }) => {
    const hrefId = `#${id}`
    
    let idNumber = parseInt(id.slice(1,id.length));
    let marginTop = idNumber != 1 ? {'marginTop': '10px'} : {};

    return (
        <Container>
            <p>
                <a className="link" style={marginTop} data-bs-toggle="collapse" href={hrefId} role="button" aria-expanded="false" aria-controls="collapseExample">
                    <img src={vector} className='vector' alt='right-arrow'></img>
                    &nbsp;{question}
                </a>
            </p>
            <div className="collapse" id={id}>
                <div className="collapse-card" dangerouslySetInnerHTML={{__html:answer}}>
                </div>
            </div>
        </Container>
    )
}

export { Question };