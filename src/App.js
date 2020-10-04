import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import Project from  './components/Project';
import About from './components/pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <About />
      </header>
    </div>
  );
}

export default App;
