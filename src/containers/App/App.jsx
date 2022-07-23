import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { useData } from './useData';
import { Modal } from '../../Modal/Modal.js';
import { Menu } from '../../components/Menu/index.jsx';
import { Logo } from '../../components/Logo/index.jsx';
import { Icons } from '../../components/Icons/index.jsx';
import { Main } from '../../components/Main/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { Picture } from '../../components/Picture/index.jsx';
import { Navegation } from '../Navegation/index.jsx';
import { DescriptionAbout } from '../../components/DescriptionAbout';
import { CloseBtn } from '../../components/CloseBtn/index.jsx';
import { DescriptionRoadMap } from '../../components/DescriptionRoadMap';
import { ProjectType } from '../ProjectType/index.jsx';
import { FooterTxt } from '../../components/FooterText/index.jsx';
import { DescriptionBehind } from '../../components/DescripionBehind';
import { Carousel } from '../../components/Carousel';
import { DescriptionJoinUs } from '../../components/DescriptionJoinUs';
import { Button } from '../../components/Button';
import { FAQ } from '../../components/FAQ/index.jsx';
import { Question } from '../../components/Question/index.jsx';
import { TeamSection } from '../../components/TeamSection';
import { Card } from '../../components/Card';
import { Alert } from '../../components/Alert/index.jsx';

function App() {
  const {
    sectionAbout,
    sectionBehindDesign,
    sectionRoadmap
  } = useData();

  console.log(sectionAbout)

  return (
    <div>
      <Menu >
        <Logo />
        <Icons />
      </Menu>
      <Main >
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Picture />
            </>
          } />
          <Route path="/home" element={
            <>
              <Header />
              <Navegation />
            </>
          } />
          <Route path="/about" element={
            <Modal >
              <div className='Roadmap--container'>
                <DescriptionAbout >
                  <CloseBtn />
                </DescriptionAbout >
                <FooterTxt section={sectionAbout} />
              </div>
            </Modal >
          } />
          <Route path="/roadmap" element={
            <Modal >
              <div className='Roadmap--container'>
                <div className='Roadmap--content'>
                  <DescriptionRoadMap >
                    <CloseBtn />
                  </DescriptionRoadMap>
                  <ProjectType />
                </div>
                <FooterTxt section={sectionRoadmap} />
              </div>
            </Modal >
          } />
          <Route path="/behind-design" element={
            <Modal >
              <div className='Roadmap--container'>
                <DescriptionBehind >
                  <CloseBtn />
                </DescriptionBehind >
                <Carousel />
                <FooterTxt section={sectionBehindDesign} />
              </div>
            </Modal >
          } />
          <Route path="/join" element={
            <Modal >
              <DescriptionJoinUs >
                <CloseBtn />
                <Button text='Join our Discord' classBtn='join' />
              </DescriptionJoinUs >
            </Modal >
          } />
          <Route path="/faq" element={
            <Modal >
              <FAQ >
                <CloseBtn />
                <Question />
              </FAQ>
            </Modal >
          } />
          <Route path="/team" element={
            <Modal >
              <TeamSection >
                <Alert text='This page is under construction, you are seeing a preview.' />
                <CloseBtn />
                <Card />
              </TeamSection >
            </Modal >
          } />
        </Routes>
      </Main>
    </div >
  );
}

export default App;
