import React, { useState, useEffect } from 'react';
import './Projects.css';
import { BsArrowRight } from 'react-icons/bs';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/mominjemal/repos?sort=updated&per_page=6');
                if (!response.ok) throw new Error('Failed to fetch projects');
                const data = await response.json();
                
                // Filter out forked repositories and sort by stars
                const filteredProjects = data
                    .filter(repo => !repo.fork)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count);
                
                setProjects(filteredProjects);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <div className="projects-container">Loading projects...</div>;
    if (error) return <div className="projects-container">Error: {error}</div>;

    return (
        <div id='projects' className="projects">
            <div className="projects-title">
                <h1>My Projects</h1>
                <div className="title-pattern"></div>
            </div>
            <div className="projects-container">
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <h3>{project.name}</h3>
                            <p>{project.description || 'No description available'}</p>
                            <div className="project-stats">
                                <span>⭐ {project.stargazers_count}</span>
                                <span>🔄 {project.forks_count}</span>
                            </div>
                            <div className="project-links">
                                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                    View on GitHub
                                </a>
                                {project.homepage && (
                                    <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="projects-showmore">
                <p>Show more</p>
                <BsArrowRight className="arrow-icon" />
            </div>
        </div>
    );
};

export default Projects;