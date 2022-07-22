import React from 'react';
import styled from "styled-components";
import vector from '../../assets/Vector-Right.svg'

const Description = () => {
    return (
        <Div>
            <h1 className='title'>About Us</h1>
            <div className='container'>
                <p className='description'><strong>Des Arts is a NFT collection of 8,888 NFTs built on the Ethereum Blockchain.</strong>
                    <br></br>
                    The Metapolitan Society offers you the special opportunity to not only make new connections but also work towards building a prosperous future for the Metaverse in which art and entrepreneurialism are reinvented. As such, Des Arts brings a variety of backgrounds and unparalleled experiences to the art world, redefining conventional norms.
                </p>
                <a className='link' href='../../assets/Light_paper.pdf'>
                    <img src={vector} className='vector' alt='right-arrow'></img>
                    White Paper
                </a>
            </div>
            <p className='text-footer'>\\ ABOUT US
                <br></br>
                \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</p>
        </Div>
    )
}

const Div = styled.div`

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
        width: 90%;
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
        display: inline-block;
        font-family: 'Fredoka', sans-serif; 
        font-size: 20px;
        color: #fff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .text-footer {
        font-family: 'Fredoka', sans-serif; 
        font-size: 10px;
        font-weight: 300;
    }

`;

export { Description };