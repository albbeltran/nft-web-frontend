import styled from "styled-components";

const HeaderContent = styled.div`
    padding: 9em 0em 5em 14em;
    color: white;
    font-family: 'Fredoka', sans-serif;

    span {
        display: block;
        font-size: 26px;
        font-weight: 400;
    }

    .title {
        font-weight: 700;
        font-size: 75px;
        margin: -10px 0 -15px 0;
        text-shadow:
            0 0 7px #ffffff,
            0 0 250px #e252ff
    }

    .subtitle {
        font-weight: 650;
        font-size: 40px;
    }

    .button {
        margin-top: 5em;
        margin-left:10em;
        font-weight: 450;
        display: inline-block;
        font-family: 'Fredoka', sans-serif; 
        font-size: 20px;
        color: #fff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export { HeaderContent };