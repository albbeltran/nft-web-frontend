import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './CloseButton.module.css';

const CloseButton = () => {
    return (
        <AiOutlineCloseCircle className={styles.icon} />
    )
}

export { CloseButton };