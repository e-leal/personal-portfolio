import React, {useState, useEffect} from 'react';
import NavTabs from './NavTabs'
import Project from  './Project/index';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import '../App.css';
import Wrapper from './Wrapper/index';
import {Card, Container} from 'react-bootstrap';

function PortfolioContainer(){
    const  [currentTab, handleTabChange] = useState('About')

    const renderTab = () => {
        switch(currentTab){
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <Container>
            <NavTabs currentTab={currentTab} handleTabChange={handleTabChange} />
            <Wrapper>{renderTab(currentTab)}</Wrapper>
        </Container>
    );
}

export default PortfolioContainer;