import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
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
        {
            id: 3,
            name: "Hobbit",
            tools: "Javascript, HTML, CSS",
            date: "2021",
            summary: "Habit tracking app for lifestyle changes",
            cover:
                 "https://i.imgur.com/Ui9mzAL.png",
            url: "https://github.com/ravil-96/hobbit"
        }, 
    ]);

    const history = useHistory();

    const renderProjects = () => {
        return project.map(p =>
          <ProjectCards project={p} key={p.id}/>
        );
      }
    
    function handleClick(e) {
    e.preventDefault()
    history.push("/bio");
    }

    function handleClick2(e) {
    e.preventDefault()
    history.push("/contact");
    }

    return (
        <>
        <h2>Projects</h2>
        <main aria-label="main" className="projects-container">
            <div className="row">
             { renderProjects ()}
            </div>
        </main>
        <a href="/" onClick={handleClick} className="portfolio-button"><img id="back-button" src="https://i.imgur.com/IIFrQH6.png" width='70px'/></a>
        <a href="/" onClick={handleClick2} className="portfolio-button"><img id="forward-button" src="https://i.imgur.com/S8uTPW6.png" width='70px'/></a>
        </>
    );
};

export default Projects;