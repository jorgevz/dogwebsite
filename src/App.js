import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from 'react-router-dom'
  import Home from './component/Home';
  
  

function App() {
    return(
      <Router>
      <div className='whole-app'>
      <nav>
      <ul>
      <li>
      <Link to='/'>Home</Link>
      </li>
      </ul>
      </nav>
      
      <Switch>
      
      <Route exact path='/' component={Home}/>
    
     
      </Switch>
      
      </div>
    
     </Router>
  );
}

export default App;
