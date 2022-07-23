import React from 'react';
import { Content } from './Description';
import vector from '../../assets/Vector-Right.svg'

const DescriptionAbout = ({ children }) => {
    return (
        <Content >
            {children}
            <h1 className='title'>About Us</h1>
            <div className='container'>
                <p className='description'><strong>Des Arts is a NFT collection of 8,888 NFTs built on the Ethereum Blockchain.</strong>
                    <br></br>
                    The Metapolitan Society offers you the special opportunity to not only make new connections but also work towards building a prosperous future for the Metaverse in which art and entrepreneurialism are reinvented. As such, Des Arts brings a variety of backgrounds and unparalleled experiences to the art world, redefining conventional norms.
                </p>
                <a className='link' href='../../assets/Light_paper.pdf' target='_blank' download>
                    <img src={vector} className='vector' alt='right-arrow'></img>
                    White Paper
                </a>
            </div>
            {/* <p className='footerTxt'>\\ ABOUT US
                <br></br>
                \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            </p> */}
        </Content >
    )
}

export { DescriptionAbout };