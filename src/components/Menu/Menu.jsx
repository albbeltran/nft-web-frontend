import React from 'react';
import styles from './menu.module.css';

const Menu = ({ children }) => {
    return (
        <div className={styles.Navbar}>
            { children }    
        </div>
    )
}

export { Menu };