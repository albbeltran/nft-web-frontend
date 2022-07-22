import React from 'react';
import styles from '../Menu/menu.module.css';
import mail from './mail.svg';
import discord from './discord.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';

const Icons = () => {
    return (
        <div className='Icons'>
            <a href='#'>
                <img src={twitter} className={styles.Icon} alt="twitter" />
            </a>
            <a href='#'>
                <img src={discord} className={styles.Icon} alt="discord" />
            </a>
            <a href='#'>
                <img src={instagram} className={styles.Icon} alt="instagram" />
            </a>
            <a href='#'>
                <img src={mail} className={styles.Icon} alt="mail" />
            </a>
        </div>
    )
}

export { Icons };