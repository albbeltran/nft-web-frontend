import styled from "styled-components";

let Modal = styled.div`

    background: rgba(0, 0, 0, .5);
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

export { Modal };