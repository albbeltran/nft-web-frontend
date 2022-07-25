import './App.css';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { useData } from './useData';
import { Modal } from '../../Modal/Section/Modal';
import { ModalArtist } from '../../Modal/Artist/ModalArtist';
import { Menu } from '../../components/Menu/index.jsx';
import { Logo } from '../../components/Logo/index.jsx';
import { Icons } from '../../components/Icons/index.jsx';
import { Main } from '../Main/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { Picture } from '../../components/Picture/index.jsx';
import { Navegation } from '../Navegation/index.jsx';
import { Description } from '../../components/Description';
import { CloseBtn } from '../../components/CloseBtn/index.jsx';
import { ProjectType } from '../ProjectType/index.jsx';
import { FooterTxt } from '../../components/FooterText/index.jsx';
import { Carousel } from '../../components/Carousel';
import { Artist } from '../../components/Artist';
import { Button } from '../../components/Button';
import { FAQSection } from '../../components/FAQSection/index.jsx';
import { Question } from '../../components/Question/index.jsx';
import { TeamSection } from '../../components/TeamSection';
import { Card } from '../../components/Card';
import { Alert } from '../../components/Alert/index.jsx';
import { MenuBtn } from '../../components/MenuBtn/index.jsx';

function App() {
  const {
    sectionAbout,
    sectionBehindDesign,
    sectionRoadmap,
    descAbout,
    descBehindDesign,
    descJoinUs,
    descRoadMap,
    behindDesingSet,
    team,
    FAQ,
    openModal,
    setOpenModal,
    artistData,
    setArtistData
  } = useData();

  const [path, setPath] = useState(window.location.pathname);

  return (
    <div>
      <Menu >
        <Logo setPath={setPath} />
        <Icons />
      </Menu>
      <Main path={path} >
        <Routes>
          <Route path="/" element={
            <>
              <Header >
                <MenuBtn setPath={setPath} />
              </Header>
              <Picture />
            </>
          } />
          <Route path="/home" element={
            <>
              <Header />
              <Navegation path={path} setPath={setPath} />
            </>
          } />
          <Route path="/about" element={
            <Modal >
              <div className='Modal--container'>
                <Description content={descAbout} link={true} >
                  <CloseBtn setPath={setPath} />
                </Description >
                <FooterTxt section={sectionAbout} />
              </div>
            </Modal >
          } />
          <Route path="/roadmap" element={
            <Modal >
              <div className='Modal--container'>
                <div className='Modal--content'>
                  <Description content={descRoadMap} link={false} >
                    <CloseBtn setPath={setPath} />
                  </Description>
                  <ProjectType />
                </div>
                <FooterTxt section={sectionRoadmap} />
              </div>
            </Modal >
          } />
          <Route path="/behind-design" element={
            <Modal >
              <div className='Modal--container'>
                <Description content={descBehindDesign} link={false} >
                  <CloseBtn setPath={setPath} />
                </Description >
                <Carousel
                  artists={behindDesingSet}
                  setOpenModal={setOpenModal}
                  setData={setArtistData}
                />
                <FooterTxt section={sectionBehindDesign} />
              </div>
            </Modal >
          } />
          <Route path="/join" element={
            <Modal >
              <Description content={descJoinUs} link={false} >
                <CloseBtn setPath={setPath} />
                <Button text='Join our Discord' classBtn='join' />
              </Description >
            </Modal >
          } />
          <Route path="/faq" element={
            <Modal >
              <FAQSection questions={FAQ}>
                <CloseBtn setPath={setPath} />
              </FAQSection>
            </Modal >
          } />
          <Route path="/team" element={
            <Modal >
              <TeamSection cards={team} >
                <CloseBtn setPath={setPath} />
              </TeamSection >
            </Modal >
          } />
        </Routes>
      </Main>

      {!!openModal && (
        <ModalArtist>
          <Artist
            setOpenModal={setOpenModal}
            artistData={artistData}
          >
            <CloseBtn section="artist" setOpenModal={setOpenModal} />
          </Artist>
        </ModalArtist>
      )}
    </div >
  );
}

export default App;
