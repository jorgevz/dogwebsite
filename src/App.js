import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
  } from 'react-router-dom'
  import Home from './component/Home';
  import Mission from './component/Mission';
import Breeds from './component/Akita';
  
  

function App() {
    return(
      <Router>
      <div>
      <nav className='nav-bar'>

      <Link id='link-home' to='/'>Home</Link>
      <Link id='link-mission'  to='/Mission'>Mission</Link>
      <Link id='Link-Allpages' to='/Breeds'>Breeds</Link>

      </nav>
      
      <Switch>
      
      <Route exact path='/' component={Home}/>
      <Route path='/Mission' component={Mission}/>
      <Route path='/Breeds' component={Breeds}/>
     
      <Redirect path='/'/>
      </Switch>
      
      </div>
    
     </Router>
  );
}

export default App;
