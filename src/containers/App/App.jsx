import './App.css';
import { Route, Routes } from "react-router-dom";
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

function App() {

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
                <FooterTxt />
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
                <FooterTxt />
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
                <FooterTxt />
              </div>
            </Modal >
          } />
        </Routes>
      </Main>
    </div >
  );
}

export default App;
