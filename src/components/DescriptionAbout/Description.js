import styled from "styled-components";

const Content = styled.div`
    color: #fff;
    font-family: 'Fredoka', sans-serif; 
    width: 80%;
    text-align: left;

    .title {
        font-weight: 700;
        font-size: 75px;
        margin: -10px 0 -15px 0;
        text-shadow:
            0 0 7px #ffffff,
            0 0 250px #ffffff81
    }

    .container {
        width: 95%;
        margin: 0 auto;
        margin-top: 4.75em;
        margin-bottom: 4.25em;
    }

    .description {
        font-size: 24px;
        font-weight: 350;
    }

    strong {
        font-weight: 500;
    }

    .vector {
        margin-right: 5px;
    }

    .link {
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

    .footerTxt {
        font-family: 'Fredoka', sans-serif; 
        font-size: 10px;
        font-weight: 300;
    }
`;

export { Content };