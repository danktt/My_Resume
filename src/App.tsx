
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './Pages/AboutSection/about';
import Home from './Pages/Home';

import './styles/global.scss'
import './styles/stylesContent.scss';


function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
    </Router>
  );
}

export default App;



