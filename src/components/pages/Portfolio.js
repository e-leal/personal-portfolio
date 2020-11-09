import React, {useState} from 'react';
import Project from '../Project/index';
import projects from '../../project.json';
import {Card, Container, Col, Row} from 'react-bootstrap';
import Wrapper from '../Wrapper/index';





function Portfolio (){
    
    const [projectList] = useState([
        {
            id: 1,
            title: "Red Bag",
            image: "RedBag-Screenshot",
            proj_type: "Express.js / Node.js"
          },
          {
            id: 2,
            title: "Worth My Time",
            image: "WorthMyTime_Screenshot",
            proj_type: "API"
          },
          {
            id: 3,
            title: "Book Search Engine",
            image: "WorthMyTime_Screenshot",
            proj_type: "MERN stack"
          },
          {
            id: 4,
            title: "Run Buddy",
            image: "RunBuddy-Screenshot",
            proj_type: "HTML / CSS"
          },
          {
            id: 5,
            title: "Horiseon",
            image: "Horiseon_Screenshot2",
            proj_type: "HTML / CSS"
          }
    ]);
        
    

    return (
        <Wrapper>
        <h1 className="title">Project List</h1>
            { projectList.map(
                proj => (
                        <Project key={proj.id} project={proj}/>
                )
              )
            }
        </Wrapper>
    );
}

export default Portfolio;