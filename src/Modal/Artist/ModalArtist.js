import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ModalArtist.module.css';

function ModalArtist({ children }) {
    return ReactDOM.createPortal(
        <div className={styles.ModalBackground}>
            {children}
        </div>,
        document.getElementById('artist')
    );
}

export { ModalArtist };