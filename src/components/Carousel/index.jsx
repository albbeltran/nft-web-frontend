import React from 'react';
import { Container } from './Carousel';
import Angelou from '../../assets/behind-design/Angelou.png';
import Armstrong from '../../assets/behind-design/Armstrong.png';
import Chaplin from '../../assets/behind-design/Chaplin.png';
import DaikiMiyana1 from '../../assets/behind-design/Daiki-Miyama1.png';
import DaikiMiyana2 from '../../assets/behind-design/Daiki-Miyama2.png';
import Dali from '../../assets/behind-design/Dali.png';
import Jeanne from '../../assets/behind-design/Jeanne.png';
import KK from '../../assets/behind-design/KK.png';
import Lagerfield from '../../assets/behind-design/Lagerfield.png';
import Lee from '../../assets/behind-design/Lee.png';
import Mandera_ from '../../assets/behind-design/Mandera_.png';
import Marie from '../../assets/behind-design/Marie.png';
import MOM from '../../assets/behind-design/MOM.png';
import Mozart from '../../assets/behind-design/Mozart.png';

const Carousel = ({ setOpenModal }) => {


    return (
        <Container id="carouselDesign" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='row'>
                        <div className="col">
                            <a onClick={() => setOpenModal(true)}>
                                <img src={DaikiMiyana1} className="d-block w-100" alt="..."></img>
                            </a>
                        </div>
                        <div className="col">
                            <img src={DaikiMiyana2} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="col">
                            <img src={Mozart} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="col">
                            <img src={Jeanne} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="col">
                            <img src={Armstrong} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="col">
                            <img src={Chaplin} className="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='row'>
                        <div className="col">
                            <img src={Angelou} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="col">
                            <img src={Dali} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="col">
                            <img src={KK} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="col">
                            <img src={Lagerfield} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="col">
                            <img src={Lee} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="col">
                            <img src={Mandera_} className="d-block w-100" alt="..."></img>
                        </div>
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