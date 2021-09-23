
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import Education from './Pages/Education/education';
import Experience from './Pages/Expirience/experience';
import Home from './Pages/Home';
import Services from './Pages/Services/services';



import './styles/global.scss'
import './styles/stylesContent.scss';


function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/services' component={Services}/>
      <Route path='/education' component={Education}/>
      <Route path='/experience' component={Experience}/>
      <Route path='/contact' component={Contact}/>
    </Router>
  );
}

export default App;



