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
import Form from './component/Form';
import Dogs from './component/Dogs';
import Services from './component/Services'
  
  

function App() {
    return(
      <Router>
      <div>
      <nav className='nav-bar'>

      <Link id='link-home' to='/'>Home</Link>
      <Link id='link-mission'  to='/Mission'>Mission</Link>
      <Link id='link-breeds' to='/Breeds'>Breeds</Link>
      <Link id='form' to='/Form'>Form</Link>
      <Link id='services' to='/Services'>Services</Link>

      </nav>
      
      <Switch>
      
      <Route exact path='/' component={Home}/>
      <Route path='/Mission' component={Mission}/>
      <Route path='/Breeds' component={Dogs}/>
      <Route path='/Form' component={Form}/>
      <Route path='/Services' component={Services}/>
     
      <Redirect path='/'/>
      </Switch>
      
      </div>
    
     </Router>
  );
}

export default App;
