import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Fredoka', sans-serif; 

    .img {
        margin: 0 auto;
        text-align: center;
        max-height: 400px;
    }

    .btnGroup {
        display: flex;
        flex-direction: row;

        .btn {
            font-size: 16px;
            color: #fff;
            border: 1px solid #fff;
            padding: 0.5em 0.9em;
            border-radius: 20px;
        }

        .regular {
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
        }

        .desarts {
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
        }

        .active {
            background-color: #fff;
            color: #000;
        }
    }
`

export { Container };