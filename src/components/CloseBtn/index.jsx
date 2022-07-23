import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './CloseBtn.module.css';
import { useNavigate } from 'react-router-dom';

const CloseBtn = () => {
    
    const navigate = useNavigate();
    const handleOpenModal = () => {
        navigate('/home');
    }

    return (
        <AiOutlineCloseCircle className={styles.icon} onClick={handleOpenModal} />
    )
}

export { CloseBtn };