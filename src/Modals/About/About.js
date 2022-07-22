import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
//import './Modal.css';

const About = ({ children }) => {
    return ReactDOM.createPortal(
        <Modal>
            {children}
        </Modal>,
        document.getElementById('about')
    )
}

const Modal = styled.div`

    background: rgba(32, 35, 41, .8);
    position: fixed;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 0;

`;

export { About };