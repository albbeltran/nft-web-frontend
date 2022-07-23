import './App.css';
import { Route, Routes } from "react-router-dom";
import { Modal } from '../../Modal/Modal.js';
import { Menu } from '../../components/Menu/Menu.jsx';
import { Logo } from '../../components/Logo/Logo.jsx';
import { Icons } from '../../components/Icons/Icons.jsx';
import { Main } from '../../components/Main/Main.jsx';
import { Header } from '../../components/Header/Header.jsx';
import { Picture } from '../../components/Picture/Picture.jsx';
import { Navegation } from '../Navegation/Navegation.jsx';
import { Description } from '../../components/Description/Description';
import { CloseButton } from '../../components/CloseButton/CloseButton.jsx';
import { DescriptionRM } from '../../components/DescriptionRM/DescriptionRM';
import { ArtRoadMap } from '../../components/ArtRoadMap/ArtRoadMap';

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
            <>
              <Modal >
                <Description >
                  <CloseButton />
                </Description >
              </Modal >
            </>
          } />
          <Route path="/roadmap" element={
            <>
              <Modal >
                <DescriptionRM >
                  <CloseButton />
                </DescriptionRM>
                <ArtRoadMap />
              </Modal >
            </>
          } />
        </Routes>
      </Main>
    </div >
  );
}

export default App;
