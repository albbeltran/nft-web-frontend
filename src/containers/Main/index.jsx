import React, { useState, useEffect } from 'react';
import { MainContent } from './Main';
import ImageMain from '../../assets/background-main.jpg';
import ImageStars from '../../assets/background-stars.jpg';

const Main = ({ children, path }) => {
    const [background, setBackground] = useState(ImageMain);

    useEffect(() => {
        if (path === '/') setBackground(ImageMain);
        else if (path === '/home') setBackground(ImageStars);
        else if (path === '/join') setBackground(ImageStars);
        else setBackground(ImageMain);
    }, [path])

    let backgroundImg = { 'backgroundImage': `url(${background})` }

    return (
        <MainContent style={backgroundImg}>
            {children}
        </MainContent>
    )
}

export { Main };