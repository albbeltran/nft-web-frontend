import React from 'react';
import { Container } from './Question';
import vector from '../../assets/Vector-Right.svg';

const Question = () => {
    return (
        <Container>
            <p>
                <a className="link" data-bs-toggle="collapse" href="#q1" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <img src={vector} className='vector' alt='right-arrow'></img>
                    &nbsp;How can I join the Metapolitan Club?
                </a>
            </p>
            <div className="collapse box" id="q1">
                <div className="collapse-card">
                    You will be able to mint a Des Arts NFT on our website. <strong>Join our Discord</strong> to be the first to find out.
                </div>
            </div>
        </Container>
    )
}

export { Question };