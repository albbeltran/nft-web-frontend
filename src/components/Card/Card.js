import styled from "styled-components";

const Container = styled.div`
    background-color: #2f324183;
    padding: 20px;
    border-radius: .6em 0.6em 0.6em 0.6em;
    width: 150px;
    margin: 20px 10px 30px 0;
    text-align: center;

    .socialMedia {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;

        .icon {
            width: 20px;
        }
    }
`

export { Container };