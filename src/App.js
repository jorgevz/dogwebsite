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
import Form from './component/Form';
  
  

function App() {
    return(
      <Router>
      <div>
      <nav className='nav-bar'>

      <Link id='link-home' to='/'>Home</Link>
      <Link id='link-mission'  to='/Mission'>Mission</Link>
      <Link id='Link-Allpages' to='/Breeds'>Breeds</Link>
      <Link id='Form' to='/Form'>Form</Link>

      </nav>
      
      <Switch>
      
      <Route exact path='/' component={Home}/>
      <Route path='/Mission' component={Mission}/>
      <Route path='/Breeds' component={Breeds}/>
      <Route path='/Form' component={Form}/>
     
      <Redirect path='/'/>
      </Switch>
      
      </div>
    
     </Router>
  );
}

export default App;
