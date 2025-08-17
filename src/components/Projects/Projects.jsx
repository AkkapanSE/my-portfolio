import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');
  
  // Get unique title for filter
  const title = ['all', ...new Set(
    projects.flatMap(project => project.title)
  )];
  
  // Filter projects based on selected technology
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.title.includes(filter)
      );
  
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>
        
        {/* Filter Buttons */}
        <div className="project-filters">
          {title.map(tech => (
            <button
              key={tech}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for this technology.</p>
          </div>
        )}
      </div>
    </section>
  );
}



export default Projects;