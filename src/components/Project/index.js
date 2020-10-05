import React from 'react';


function Project(props){
    return (
        <div class="card bg-dark">
            <img class="card-img" src={props.image} />
            <div class="card-img-overlay">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.project_type}</p>
            </div>
        </div>
    );
}

export default Project;