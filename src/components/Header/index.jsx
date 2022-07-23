import React from 'react';
import { HeaderContent } from './Header';

const lineHeight = { 'lineHeight': '25px' }

const Header = () => {
    return (
        <HeaderContent>
            <span>LAUNCHING SOON</span>
            <h1 className='title'>DES ARTS</h1>
            <span className='subtitle'>METAPOLITAN SOCIETY</span>
            <span style={lineHeight}>Building web 3.0 for the future,</span>
            <span>one unicorn at a time...</span>
        </HeaderContent>
    )
}

export { Header };