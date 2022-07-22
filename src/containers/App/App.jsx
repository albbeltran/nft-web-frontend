//import './App.css';
import { Menu } from '../../components/Menu/Menu.js';
import { Content } from '../Content/Content.jsx';
import { Description } from '../../components/Description/Description.jsx';
import { Picture } from '../../components/Picture/Picture.jsx';

function App() {
  return (
    <div className="container">
      <Menu />
      <Content>
        <Description />
        <Picture />
      </Content>
    </div>
  );
}

export default App;
