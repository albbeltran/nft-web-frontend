import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './Modal';

const About = ({ children }) => {
    return ReactDOM.createPortal(
        <Modal>
            {children}
        </Modal>,
        document.getElementById('about')
    )
}

export { About };