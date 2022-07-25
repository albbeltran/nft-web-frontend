import React from 'react';
import { MainContent } from './Main';

const Main = ({ children }) => {
    return (
        <MainContent>
            {children}
        </MainContent>
    )
}

export { Main };