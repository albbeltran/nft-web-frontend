import React from 'react'
import desartsProject from '../../assets/desarts-project-roadmap.png';
import regularProject from '../../assets/regular-project-roadmap.png';
import styled from "styled-components";

const ArtRoadMap = () => {
    let btnActive;

    return (
        <Container>
            <img src={regularProject} className='img' alt='regular-project'></img>
            <span className='btnGroup'>
                <button className='btn regular active'>Regular project</button>
                <button className='btn desarts'>Des Arts project</button>
            </span>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Fredoka', sans-serif; 

    .img {
        width: 40%;
        margin: 0 auto;
        text-align: center;
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

            &:hover {
                background-color: transparent;
                color: #fff;
            }
        }
    }
`

export { ArtRoadMap };