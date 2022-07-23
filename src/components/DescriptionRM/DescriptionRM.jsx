import React from 'react';
import styled from "styled-components";

const DescriptionRM = ({ children }) => {
    return (
        <Div>
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
        </Div>
    )
}

const Div = styled.div`

    color: #fff;
    font-family: 'Fredoka', sans-serif; 
    width: 75%;
    text-align: left;

    .title {
        font-weight: 700;
        font-size: 75px;
        margin: -10px 0 -15px 0;
        text-shadow:
            0 0 7px #ffffff,
            0 0 250px #ffffff81
    }

    .container {
        margin: 0 auto;
        margin-top: 4.75em;
        margin-bottom: 4.25em;
        padding: 0;
    }

    .description {
        font-size: 25px;
        font-weight: 300;
    }
`;

export { DescriptionRM };