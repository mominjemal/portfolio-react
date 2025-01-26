import React from 'react'
import './Projects.css'
import { BsArrowRight } from 'react-icons/bs'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projectsData = [
    {
        title: "E-commerce Website",
        description: "A full-featured e-commerce platform built with React and Node.js",
        image: "https://via.placeholder.com/400x300",
        github: "https://github.com",
        live: "https://demo.com"
    },
    {
        title: "Task Management App",
        description: "A productivity app for managing daily tasks and projects",
        image: "https://via.placeholder.com/400x300",
        github: "https://github.com",
        live: "https://demo.com"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather information using weather API",
        image: "https://via.placeholder.com/400x300",
        github: "https://github.com",
        live: "https://demo.com"
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media metrics",
        image: "https://via.placeholder.com/400x300",
        github: "https://github.com",
        live: "https://demo.com"
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio website built with React",
        image: "https://via.placeholder.com/400x300",
        github: "https://github.com",
        live: "https://demo.com"
    },
    {
        title: "Blog Platform",
        description: "A full-stack blog platform with user authentication",
        image: "https://via.placeholder.com/400x300",
        github: "https://github.com",
        live: "https://demo.com"
    }
];

const Projects = () => {
    return (
        <div id='projects' className="projects">
            <div className="projects-title">
                <h1>My Projects</h1>
                <div className="title-pattern"></div>
            </div>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> Code
                                </a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="projects-showmore">
                <p>Show more</p>
                <BsArrowRight className="arrow-icon" />
            </div>
        </div>
    )
}

export default Projects