import styled from "styled-components";

const Container = styled.div`
    background-color: #2f324183;
    padding: 20px;
    border-radius: .6em 0.6em 0.6em 0.6em;
    width: 150px;
    margin-bottom: 15px;
    margin-right: 10px;
    text-align: center;

    .socialMedia {
        width: 80%;
        margin: 10px auto 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;

        .icon {
            cursor: pointer;
        }
    }
`

export { Container };