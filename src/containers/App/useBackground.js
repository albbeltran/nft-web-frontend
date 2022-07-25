import { useState, useEffect } from 'react';
import ImageMain from '../../assets/background-main.jpg';
import ImageStars from '../../assets/background-stars.jpg';
import { createGlobalStyle } from 'styled-components'

const useBackground = () => {
    const [path, setPath] = useState(window.location.pathname);
    const [background, setBackground] = useState(ImageMain);

    useEffect(() => {
        if (path === '/') setBackground(ImageMain);
        else if (path === '/home') setBackground(ImageStars);
        else if (path === '/join') setBackground(ImageStars);
        else setBackground(ImageMain);
    }, [path])

    const GlobalStyle = createGlobalStyle`
      body {
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
        background-attachment: fixed;
      }
    `

    return { setPath, setBackground, GlobalStyle }
}

export { useBackground };