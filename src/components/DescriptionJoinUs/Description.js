import styled from "styled-components";

const Content = styled.div`
    color: #fff;
    font-family: 'Fredoka', sans-serif; 
    text-align: left;
    width: 30%;
    margin: 0 auto 0 10em;

    .title {
        font-weight: 700;
        font-size: 90px;
        margin: -10px 0 -15px 0;
        text-shadow:
            0 0 7px #ffffff,
            0 0 250px #ffffff81
    }

    .container {
        margin: 0 auto;
        margin-top: 1.25em;
        margin-bottom: 4.25em;
        padding: 0;
    }

    .description {
        font-size: 25px;
        font-weight: 300;
    }
`;

export { Content };