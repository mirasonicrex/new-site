import React, { useState } from 'react';
import styles from './projectTile.module.css';

interface ProjectTileProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl: string;
  date: string;
}

export const ProjectTile: React.FC<ProjectTileProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  date,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`${styles.projectTile} ${isFlipped ? styles.flipped : ''}`} 
      onMouseEnter={() => setIsFlipped(true)} 
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={styles.projectTileInner}>
        <div className={styles.projectTileFront}>
          {imageUrl && <img src={imageUrl} alt={title} className={styles.projectImage} />}
        </div>
        <div className={styles.projectTileBack}>
          <h2>{title}</h2>
          <p>{description}</p>
          <ul className={styles.technologies}>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;