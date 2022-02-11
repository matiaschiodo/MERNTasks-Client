import React from 'react';
import Project from './Project'

const ProjectList = () => {

  const projects = [
    {name: 'Tienda Virtual'},
    {name: 'Internet'},
    {name: 'Sitio web'}
  ]

  return (
    <ul className="project-list">
      {projects.map(project => (
        <Project
          project={project}
          key={project.name}
        />
      ))}
    </ul>
  );
}

export default ProjectList;