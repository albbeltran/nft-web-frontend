import React from 'react';
import { Container } from './Carousel';
import p1 from '../../assets/behind-design/Einstein.png';
import p2 from '../../assets/behind-design/DaVinci.png'
import p3 from '../../assets/behind-design/Mozart.png';
import p4 from '../../assets/behind-design/Jeanne.png';
import p5 from '../../assets/behind-design/Armstrong.png';
import p6 from '../../assets/behind-design/Chaplin.png';
import p7 from '../../assets/behind-design/Lee.png';
import p8 from '../../assets/behind-design/Mandela.png';
import p9 from '../../assets/behind-design/Angelou.png';
import p10 from '../../assets/behind-design/Lagerfield.png';
import p11 from '../../assets/behind-design/Miyazaki.png';
import p12 from '../../assets/behind-design/Mohammad.png';

const images = {
    p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12
}

const Carousel = ({ artists, setOpenModal, setData }) => {

    const sendData = (artist) => {
        setData(artist);
        setOpenModal(true);
    }

    return (
        <Container id="carouselDesign" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='row'>
                        {
                            artists ?
                                (
                                    artists.map((artist, index) => {
                                        if (index < 6) {
                                            return (
                                                <div className="col" key={index}>
                                                    <a onClick={() => sendData(artist)}>
                                                        <img src={images[artist.id]} className="d-block w-100" alt={artist.name}></img>
                                                    </a>
                                                </div>
                                            )
                                        }
                                    })
                                )
                                :
                                <p>Loading...</p>
                        }
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='row'>
                        {
                            artists ?
                                (
                                    artists.map((artist, index) => {
                                        if (index >= 6) {
                                            return (
                                                <div className="col" key={index}>
                                                    <a onClick={() => sendData(artist)}>
                                                        <img src={images[artist.id]} className="d-block w-100" alt={artist.name}></img>
                                                    </a>
                                                </div>
                                            )
                                        }
                                    })
                                )
                                :
                                <p>Loading...</p>
                        }
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselDesign" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselDesign" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </Container>
    )
}

export { Carousel };