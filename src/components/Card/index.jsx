import React from 'react';
import { Container } from './Card';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import p1 from '../../assets/team/CEO.png';
import p2 from '../../assets/team/COO.png';
import p3 from '../../assets/team/CTO.png';
import p4 from '../../assets/team/CMO.png';
import p5 from '../../assets/team/MetaliaCEO.png';
import p6 from '../../assets/team/Investor.png';
import p7 from '../../assets/team/TBA.svg';

const images = {
    p1, p2, p3, p4, p5, p6, p7, p8: p7, p9: p7, p10: p7
}

const Card = ({ id, name, jobTitle, twitter, linkedin, instagram }) => {
    let disabled = { 'color': '#fff' };
    if (name === 'To Be Revealed') disabled = { 'color': '#000000' };

    return (
        <Container>
            <img src={images[id]}></img>
            <br></br>
            <span>{name}</span>
            <br></br>
            {
                jobTitle ? <span>{jobTitle}</span> : ''
            }
            {
                jobTitle ? <br></br> : ''
            }
            <div className="socialMedia">
                <a href={twitter}>
                    <FaTwitter size={20} className='icon' style={disabled} alt="twitter" />
                </a>
                <a href={linkedin}>
                    <FaLinkedin size={20} className='icon' style={disabled} alt="discord" />
                </a>
                <a href={instagram}>
                    <FaInstagram size={20} className='icon' style={disabled} alt="instagram" />
                </a>
            </div>
        </Container>
    )
}

export { Card };