import './App.css';
import { NavLink, Route, Routes } from "react-router-dom";
import { About } from '../../Modals/About/About.js';
import { Menu } from '../../components/Menu/Menu.jsx';
import { Logo } from '../../components/Logo/Logo.jsx';
import { Icons } from '../../components/Icons/Icons.jsx';
import { Main } from '../../components/Main/Main.jsx';
import { Header } from '../../components/Header/Header.jsx';
import { Description } from '../../components/Description/Description';
import { Picture } from '../../components/Picture/Picture.jsx';
import { Navegation } from '../Navegation/Navegation.jsx';

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
              <About>
                <Description />
              </About>
            </>
          } />
        </Routes>
      </Main>
    </div >
  );
}

export default App;
