import React from 'react'
import logo from './logo.svg';
import styles from '../Menu/menu.module.css';

const Logo = () => {
    return (
        <img src={logo} className={styles.Logo} alt="logo" />
    )
}

export { Logo };