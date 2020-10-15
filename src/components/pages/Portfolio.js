import React, {useState} from 'react';
import Project from '../Project/index';
import projects from '../../project.json';
import {Card, Container, Col, Row} from 'react-bootstrap';
import Wrapper from '../Wrapper/index';





function Portfolio (){
    
    const [projectList, setProjectList] = useState(projects);

    return (
        <Wrapper>
        <h1 className="title">Project List</h1>
            { projectList.map(
                proj => (
                        <Project
                            key={proj.id}
                            id={proj.id}
                            title={proj.title}
                            image={proj.image}
                            project_type={proj.proj_type}
                        />
                )
              )
            }
        </Wrapper>
    );
}

export default Portfolio;