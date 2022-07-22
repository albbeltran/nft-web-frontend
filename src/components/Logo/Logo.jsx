import React from 'react'
import logo from '../../assets/logo.svg';
import styles from '../Menu/menu.module.css';
import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to='/'>
            <img src={logo} className={styles.Logo} alt="logo" />
        </NavLink>
    )
}

export { Logo };