import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';
import { ScreenEvaluation } from '../features/projects/detail/ScreenEvaluation';
import { Project } from '../types/project.types';
import { mockProjectDetail } from '../mocks/projects.mocks';
import './ProjectDetailPage.css';

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    setProject(mockProjectDetail);
  }, [projectId]);

  if (!project) {
    return <DashboardLayout><div>Carregando projeto...</div></DashboardLayout>;
  }

  return (
    <DashboardLayout>
      <div className="project-detail-header">
        <h1 className="project-detail-title">{project.name}</h1>
        <p className="project-detail-description">{project.description}</p>
      </div>
      <div className="screens-container">
        {project.screens.map(screen => (
          <ScreenEvaluation key={screen.id} screen={screen} />
        ))}
      </div>
    </DashboardLayout>
  );
}