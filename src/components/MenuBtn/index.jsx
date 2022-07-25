import React from 'react'
import { NavLink } from "react-router-dom";
import vector from '../../assets/Vector-Right.svg';
import styles from './Button.module.css';

const MenuBtn = ({ setPath }) => {
    return (
        <NavLink className={styles.button} to='/home' onClick={() => setPath('/home')}>
            <img src={vector} className='vector' alt='right-arrow'></img>
            &nbsp;Go to menu
        </NavLink>
    )
}

export { MenuBtn };