import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 4fr;
    width: 80%;

    .img {
        width: 85%;
        border-radius: 20px;
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .description {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .title {
        font-weight: 800;
        font-size: 70px;
        margin: 0;
        margin-top: -20px;
        text-shadow:
            0 0 7px #ffffff,
            0 0 250px #ffffff81
    }

    p {
        width: 95%;
        font-size: 20px;
        margin-bottom: 0em;
        margin-top: 1em;
    }
`;

export { Container };