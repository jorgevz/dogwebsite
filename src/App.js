import React from 'react';
import './App.css';
import Home from './component/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from 'react-router-dom'
  import Home from './component/Home';
  
  

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
