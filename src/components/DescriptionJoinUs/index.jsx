import React from 'react';
import { Content } from './Description';

const DescriptionJoinUs = ({ children }) => {
    return (
        <Content>
            {children[0]}
            <h1 className='title'>Join the Community</h1>
            <div className='container'>
                <p className='description'>
                    We welcome our holders to journey with us into a community filled with creativity,
                    diversity, and belonging.
                    <br></br><br></br>
                    A Metapolitan club in which networking is propelled into a whole other dimension…Literally.
                </p>
            </div>
            {children[1]}
        </Content>
    )
}

export { DescriptionJoinUs };