import React from 'react';
import { Content } from './Description';

const DescriptionBehind = ({ children }) => {
    return (
        <Content >
            {children}
            <h1 className='title'>Behind Design</h1>
            <div className='container'>
                <p className='description'>
                    Our collection presents influential individuals such as Aristotle, Einstein, Da Vinci,
                    and Jeanne D’Arc amongst many other remarkable personalities. These extraordinary characters
                    achieved the pinnacle of creativity through science, philosophy, and wisdom in their pursuit
                    of elevating human consciousness.
                    <br></br><br></br>
                    We at Des Arts recognize these individuals as the embodiment of Art: we do not categorize art
                    and we do not constrain the Artist.
                </p>
            </div>
        </Content >
    )
}

export { DescriptionBehind };