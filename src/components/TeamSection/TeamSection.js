import styled from "styled-components";

const Container = styled.div`
    margin-top: 4em;
    font-family: Fredoka;

    .title {
        font-size: 30px;
        font-weight: 500;
        line-height: 39px;
        letter-spacing: 0em;
        text-align: center;
    }

    .cards {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    p {
        text-align: center;
        font-weight: 300;
        font-size: 25px;
    }
`

export { Container };