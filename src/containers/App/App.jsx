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
              <DescriptionAbout >
                <CloseBtn />
              </DescriptionAbout >
            </Modal >
          } />
          <Route path="/roadmap" element={
            <Modal >
              <div className='Roadmap'>
                <DescriptionRoadMap >
                  <CloseBtn />
                </DescriptionRoadMap>
                <ProjectType />
              </div>
            </Modal >
          } />
        </Routes>
      </Main>
    </div >
  );
}

export default App;
