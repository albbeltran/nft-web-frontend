import styled from "styled-components";

const Container = styled.div`
    font-size: 22px;

    p {
        margin-bottom: 0px;

        .link {
            font-weight: 450;
            display: inline-block;
            font-family: 'Fredoka', sans-serif; 
            color: #fff;
            font-size: 25px;
            text-decoration: none;
        }
    }

    .collapse {
        font-weight: 300;

        .collapse-card {
            background-color: transparent;
            font-weight: 300;

            strong {
                font-weight: 500;
            }
        }
    }
`

export { Container };