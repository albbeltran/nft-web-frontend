import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './CloseBtn.module.css';
import { useNavigate } from 'react-router-dom';

const CloseBtn = ({ section, setOpenModal }) => {

    const navigate = useNavigate();
    const handleOpenModal = () => {
        if (section && section === 'artist') {
            setOpenModal(false);
        } else {
            navigate('/home');
        }
    }

    return (
        <AiOutlineCloseCircle className={styles.icon} onClick={handleOpenModal} />
    )
}

export { CloseBtn };