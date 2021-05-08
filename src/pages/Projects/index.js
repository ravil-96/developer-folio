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
        },
        {
            id: 2,
            name: "Trivia Duck",
            tools: "Javascript, HTML, CSS",
            date: "2021",
            summary: "Family-friendly trivia game",
            cover:
                 "https://i.imgur.com/j7g7JjK.png",
            url: "https://github.com/ravil-96/trivia-quack"
        }, 
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