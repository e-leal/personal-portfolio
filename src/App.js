import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import Project from  './components/Project';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import './App.css';
import Resume from './components/pages/Resume';
import PortfolioContainer from './components/PortfolioContainer';
import Wrapper from './components/Wrapper/index';

const App = () => <Wrapper><PortfolioContainer /></Wrapper>;

export default App;
