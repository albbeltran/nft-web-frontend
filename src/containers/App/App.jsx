import './App.css';
import { Menu } from '../../components/Menu/Menu.jsx';
import { Logo } from '../../components/Logo/Logo.jsx';
import { Icons } from '../../components/Icons/Icons.jsx';
import { Content } from '../Content/Content.jsx';
import { Description } from '../../components/Description/Description.jsx';
import { Picture } from '../../components/Picture/Picture.jsx';

function App() {
  return (
    <div>
      <Menu >
        <Logo />
        <Icons />
      </Menu>
      <Content>
        <Description />
        <Picture />
      </Content>
    </div>
  );
}

export default App;
