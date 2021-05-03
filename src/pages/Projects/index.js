import React, { useState } from "react";
import { ProjectCards } from "../../components";

const Projects = () => {
    const [project, setProject] = useState([
        {
            id: 1,
            name: "Consoul Log",
            tools: "Javascript, HTML, CSS",
            date: "2021",
            summary: "Online journal for computer geeks",
            cover:
                 "https://i.imgur.com/FZBpMwN.jpg",
            url: "https://github.com/ravil-96/all-about-the-journal"
        } 
    ]);


    const renderProjects = () => {
        return project.map(p =>
          <ProjectCards project={p} key={p.id}/>
        );
      }

    return (
        <main aria-label="main" className="projects-container">
            <h2>Projects</h2>
            <div className="row">
             { renderProjects ()}
            </div>
        </main>
    );
};

export default Projects;