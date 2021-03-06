import React from "react";

const ProjectCards = ({ project }) => {
    return (
        <div className="card col-3">
          <img src={project.cover} className="card-img-top" alt="Project Image" />
          <div className="card-body">
          <h3 className="card-title">{project.name}</h3>
          <p className="card-text">Tools used: {project.tools}</p>
            <p className="card-text">Summary: {project.summary}</p>
            <a href={project.url} target="blank" className="card-link">Find here!</a>          
            </div>
        </div>
      );
    }

export default ProjectCards;