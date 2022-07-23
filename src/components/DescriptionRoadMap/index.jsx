import React from 'react';
import { Content } from './Description';

const DescriptionRoadMap = ({ children }) => {
    return (
        <Content>
            {children}
            <h1 className='title'>Roadmap</h1>
            <div className='container'>
                <p className='description'>
                    We are all aware of the struggles coming into the Web 3.0 ecosystem.
                    Funding and Talent being at the core of these challenges. Des Arts is here
                    to provide the infrastructure and resources to build Web 3.0 for the future.
                    We want each of our holders to have direct access to what is needed to become
                    successful, in and out of the metaverse.

                    <br></br>
                    The current structures involve several intermediaries and procedures that have
                    proven to be difficult for the common Web 3.0 enthusiast.
                </p>
            </div>
        </Content>
    )
}

export { DescriptionRoadMap };