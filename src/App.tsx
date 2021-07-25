import { Navbar } from "./components/Navbar";
import { BrowserRouter as  Router} from 'react-router-dom'
import './styles/global.css'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;



