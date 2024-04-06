import React, { useState } from 'react';
import ProjectTile from './ProjectTile';
import { projectsData } from './projectData';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('Newest');

  // Extract unique technologies
  const uniqueTechnologies = Array.from(new Set(projectsData.flatMap(project => project.technologies)));
  uniqueTechnologies.unshift('All');

  // Filter projects based on the selected technology
  let filteredProjects = selectedTech === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.technologies.includes(selectedTech));

  // Sort filtered projects by date
  filteredProjects = filteredProjects.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === 'Newest' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
  });

  return (
    <div>
    <h1>Older Git Hub Projects</h1>
      <div className={styles.controls}>
        <select
          value={selectedTech}
          onChange={(e) => setSelectedTech(e.target.value)}
          className={styles.dropdown}
        >
          {uniqueTechnologies.map(tech => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className={styles.dropdown}
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>

      <div className={styles.dashboard}>
        {filteredProjects.map(project => (
          <ProjectTile
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            date={project.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;