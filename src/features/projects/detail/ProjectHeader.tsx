import './ProjectHeader.css';

interface ProjectHeaderProps {
  name: string;
  description: string;
}

export function ProjectHeader({ name, description }: ProjectHeaderProps) {
  return (
    <div className="project-detail-header">
      <h1 className="project-detail-title">{name}</h1>
      <p className="project-detail-description">{description}</p>
    </div>
  );
}