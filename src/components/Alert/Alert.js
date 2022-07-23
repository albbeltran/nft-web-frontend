import styled from "styled-components";

const Box = styled.div`
    position: fixed;
    left: 50%;
    transform: translate(-50%, -175%);
    background-color: orangered;
    text-align: center;
    width: 500px;
    padding: 0.75em 0em;
    border-radius: 5px;

    p {
        margin: 0;
    }
`

export { Box };