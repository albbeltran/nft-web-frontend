import React from 'react';
import { Figure } from './Picture';
import figure from '../../assets/figure-main.png';

const Picture = () => {
    return (
        <Figure src={figure} alt="logo" />
    )
}

export { Picture };