import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './Modal';

const Roadmap = ({ children }) => {
    return ReactDOM.createPortal(
        <Modal>
            {children}
        </Modal>,
        document.getElementById('roadmap')
    )
}

export { Roadmap };