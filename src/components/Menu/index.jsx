import React from 'react';
import styles from './menu.module.css';

const Menu = ({ children }) => {
    return (
        <header className={styles.Navbar}>
            { children }
        </header>
    )
}

export { Menu };