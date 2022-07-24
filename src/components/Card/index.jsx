import React from 'react';
import { Container } from './Card';
import twitterIcon from '../../assets/twitter.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import instagramIcon from '../../assets/instagram.svg';
import p1 from '../../assets/team/CEO.png';
import p2 from '../../assets/team/COO.png';
import p3 from '../../assets/team/CTO.png';
import p4 from '../../assets/team/CMO.png';
import p5 from '../../assets/team/MetaliaCEO.png';
import p6 from '../../assets/team/Investor.png';
import p7 from '../../assets/team/Anon.png';

const images = {
    p1, p2, p3, p4, p5, p6, p7, p8: p7, p9: p7, p10: p7
}

const Card = ({ id, name, jobTitle, twitter, linkedin, instagram }) => {
    return (
        <Container>
            <img src={images[id]}></img>
            <br></br>
            <span>{name}</span>
            <br></br>
            <span>{jobTitle}</span>
            <br></br>
            <div className="socialMedia">
                <a href={twitter}>
                    <img src={twitterIcon} className='icon' alt="twitter" />
                </a>
                <a href={linkedin}>
                    <img src={linkedinIcon} className='icon' alt="discord" />
                </a>
                <a href={instagram}>
                    <img src={instagramIcon} className='icon' alt="instagram" />
                </a>
            </div>
        </Container>
    )
}

export { Card };