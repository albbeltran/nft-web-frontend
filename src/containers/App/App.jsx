import './App.css';
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
import { Description } from '../../components/Description';
import { CloseBtn } from '../../components/CloseBtn/index.jsx';
import { ProjectType } from '../ProjectType/index.jsx';
import { FooterTxt } from '../../components/FooterText/index.jsx';
import { Carousel } from '../../components/Carousel';
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
    FAQ
  } = useData();

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
              <Header>
                <MenuBtn />
              </Header>
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
                <Description content={descAbout} link={true} >
                  <CloseBtn />
                </Description >
                <FooterTxt section={sectionAbout} />
              </div>
            </Modal >
          } />
          <Route path="/roadmap" element={
            <Modal >
              <div className='Roadmap--container'>
                <div className='Roadmap--content'>
                  <Description content={descRoadMap} link={false} >
                    <CloseBtn />
                  </Description>
                  <ProjectType />
                </div>
                <FooterTxt section={sectionRoadmap} />
              </div>
            </Modal >
          } />
          <Route path="/behind-design" element={
            <Modal >
              <div className='Roadmap--container'>
                <Description content={descBehindDesign} link={false} >
                  <CloseBtn />
                </Description >
                <Carousel />
                <FooterTxt section={sectionBehindDesign} />
              </div>
            </Modal >
          } />
          <Route path="/join" element={
            <Modal >
              <Description content={descJoinUs} link={false} >
                <CloseBtn />
                <Button text='Join our Discord' classBtn='join' />
              </Description >
            </Modal >
          } />
          <Route path="/faq" element={
            <Modal >
              <FAQSection >
                <Alert text='This page is under construction, you are seeing a preview.' />
                <CloseBtn />
                <Question />
              </FAQSection>
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
