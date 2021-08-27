import { Switch, Route} from 'react-router-dom'
import Home from './pages'
import About from './pages/AboutSection/about'
import Contact from './pages/ContactiSection'
import Education from './pages/EducationSection'
import Experience from './pages/ExperienceSection'
import Services from './pages/ServicesSection'

export default  ()  => {
  return(
    
    <Switch>
        <Route exact path= "/">
          <Home />
        </Route>

        <Route exact path= "/about">
          <About />
        </Route>

        <Route exact path= "/services">
          <Services />
        </Route>

        <Route exact path= "/education">
          <Education />
        </Route>

        <Route exact path= "/experience">
          <Experience />
        </Route>

        <Route exact path= "/contact">
          <Contact />
        </Route>

      
    </Switch>


  )
}