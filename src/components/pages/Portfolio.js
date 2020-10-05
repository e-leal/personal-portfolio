import React, {useState} from 'react';
import Project from '../Project/index';
import projects from '../../project.json';




function Portfolio (){
    
    const [projectList, setProjectList] = useState(projects);

    return (
        <div>
        <h1 className="title">Project List</h1>
      { projectList.map(proj => (
        <Project
          title={proj.title}
          image={proj.image}
          project_type={proj.proj_type}
          />
        )
        )
        }
        </div>
    );
}

export default Portfolio;