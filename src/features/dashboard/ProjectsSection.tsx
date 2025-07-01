// src/features/dashboard/ProjectsSection.tsx
 import React from 'react';
 import { Plus } from 'lucide-react';
 import { ProjectCard } from './ProjectCard'; // Certifique-se que o caminho está correto
 import './ProjectsSection.css';
 
 interface ProjectsSectionProps {
  projects: {
  name: string;
  progress: number;
  mainCategory: 'AF' | 'CO' | 'FM' | 'NA' | 'PU' | 'PD' | 'AC' | 'LGPD' | null;
  }[]; // Adapte a estrutura dos seus projetos conforme necessário
 }
 
 export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
  <div className="projects-section-card">
  <div className="projects-header">
  <h2 className="projects-title">Meus Projetos</h2>
  <button className="add-project-button">
  <Plus size={16} />
  Adicionar Projeto
  </button>
  </div>
  <div className="projects-list">
  {projects.map((project) => (
  <ProjectCard
  key={project.name} 
  name={project.name}
  progress={project.progress}
  mainCategory={project.mainCategory}
  />
  ))}
  </div>
  </div>
  );
 }