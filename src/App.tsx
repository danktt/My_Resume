import { BrowserRouter} from 'react-router-dom'

import Routes from './Routes';
import './styles/global.scss'



function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;



