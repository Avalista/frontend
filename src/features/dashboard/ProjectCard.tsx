import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  name: string;
  progress: number;
  colorClass: string;
}

export function ProjectCard({ name, progress, colorClass }: ProjectCardProps) {
  return (
    <div className="project-card">
      <p className="project-name">{name}</p>
      <div className="progress-bar-container">
        <div className={`progress-bar ${colorClass}`} style={{ width: `${progress}%` }}></div>
      </div>
      <p className="project-progress-text">{progress}%</p>
    </div>
  );
}