import React from 'react';
import { Container } from './Card';
import CeoPicture from '../../assets/team/CEO.png'; 
import discord from '../../assets/discord.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const Card = () => {
    return (
        <Container>
            <img src={CeoPicture}></img>
            <br></br>
            <span>Patrick C.</span>
            <br></br>
            <span>CEO</span>
            <br></br>
            <div className="socialMedia">
                <a href='#'>
                    <img src={twitter} className='icon' alt="twitter" />
                </a>
                <a href='#'>
                    <img src={discord} className='icon' alt="discord" />
                </a>
                <a href='#'>
                    <img src={instagram} className='icon' alt="instagram" />
                </a>
            </div>
        </Container>
    )
}

export { Card };