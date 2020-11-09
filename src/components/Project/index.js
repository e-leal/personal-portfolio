import React from 'react';
import {Card, Container} from 'react-bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Project({project}){
    const { title, image, project_type} = project;
    console.log("our project object is: ", project)

    return (
        <div className="project">
            <img className="project-bg" alt={`${title}`} src={require(`../../assets/${image}.png`) } />
            <div className="card-img-overlay">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{project_type}</p>
            </div>
        </div>
    );
}

export default Project;