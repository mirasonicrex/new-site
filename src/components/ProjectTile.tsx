
interface ProjectTileProps {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    githubUrl: string;
    date: string;
  }
  
  // Functional component to display project information
export  const ProjectTile: React.FC<ProjectTileProps> = ({ 
    title, 
    description, 
    technologies, 
    imageUrl, 
    githubUrl, 
    date
  }) => {
    return (
      <div className="project-tile">
        {imageUrl && <img src={imageUrl} alt={title} className="project-image" />}
        <h2>{title}</h2>
        <p>{description}</p>
        <ul className="technologies">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    );
  };
  
  export default ProjectTile;