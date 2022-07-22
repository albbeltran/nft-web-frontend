import './App.css';
import { NavLink, Route, Routes } from "react-router-dom";
import { Menu } from '../../components/Menu/Menu.jsx';
import { Logo } from '../../components/Logo/Logo.jsx';
import { Icons } from '../../components/Icons/Icons.jsx';
import { Main } from '../Main/Main.jsx';
import { Description } from '../../components/Description/Description.jsx';
import { Picture } from '../../components/Picture/Picture.jsx';
import { Navegation } from '../../components/Navegation/Navegation.jsx';

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
              <Description />
              <Picture />
            </>
          } />
          <Route path="/home" element={
            <>
              <Description />
              <Navegation />
            </>
          } />
        </Routes>
      </Main>
    </div >
  );
}

export default App;
