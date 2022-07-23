import styled from "styled-components";

const Container = styled.div`
    font-size: 22px;

    p {
        .link {
            font-weight: 450;
            display: inline-block;
            font-family: 'Fredoka', sans-serif; 
            color: #fff;
            font-size: 25px;
            text-decoration: none;
        }
    }

    .collapse-box {
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