import React from 'react';
import ImageMain from '../../assets/background-main.jpg';
import ImageStars from '../../assets/background-stars.jpg';
import { MainContent } from './Main';

let background;
const path = window.location.pathname;

if (path === '/') background = { 'backgroundImage': `url(${ImageMain})` }
else if (path === '/home') background = { 'backgroundImage': `url(${ImageStars})` }
else background = { 'backgroundImage': `url(${ImageMain})` }

const Main = ({ children }) => {
    return (
        <MainContent style={background}>
            {children}
        </MainContent>
    )
}

export { Main };