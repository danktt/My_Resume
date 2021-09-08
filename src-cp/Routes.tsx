import { Switch, Route} from 'react-router-dom'
import Home from './pages'
import About from './pages/AboutSection/about'


const Routes = ()  => {
  return(
    
    <Switch>
        <Route exact path= "/">
          <Home />
        </Route>

        <Route exact path= "/about">
          <About />
        </Route>     
    </Switch>


  )
}

export default Routes