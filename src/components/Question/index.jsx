import React from 'react';
import { Container } from './Question';
import vector from '../../assets/Vector-Right.svg';

const Question = ({ question, answer }) => {
    return (
        <Container>
            <p>
                <a className="link" data-bs-toggle="collapse" href="#q1" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <img src={vector} className='vector' alt='right-arrow'></img>
                    &nbsp;{question}
                </a>
            </p>
            <div className="collapse box" id="q1">
                <div className="collapse-card" dangerouslySetInnerHTML={{__html:answer}}>
                </div>
            </div>
        </Container>
    )
}

export { Question };