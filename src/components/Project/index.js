import React from 'react';
import {Card, Container} from 'react-bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Project(props){
    return (
        <div className="card bg-dark">
            <img className="card-img img-container" alt={props.title} src={props.image} />
            <div className="card-img-overlay">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.project_type}</p>
            </div>
        </div>
    );
}

export default Project;