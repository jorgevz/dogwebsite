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
  
  

function App() {
    return(
      <Router>
      <div>
      <nav className='nav-bar'>

      <Link id='link-home' to='/'>Home</Link>
      <Link id='link-mission'  to='/Mission'>Mission</Link>

      </nav>
      
      <Switch>
      
      <Route exact path='/' component={Home}/>
      <Route path='/Mission' component={Mission}/>
     
      <Redirect path='/'/>
      </Switch>
      
      </div>
    
     </Router>
  );
}

export default App;
