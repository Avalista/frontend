import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';
import { Project } from '../types/project.types';
import { mockProjectDetail } from '../mocks/projects.mocks';
import { ProjectHeader } from '../features/projects/detail/ProjectHeader';
import { ProjectStats } from '../features/projects/detail/ProjectStats';
import { MembersList } from '../features/projects/detail/MembersList';
import { ScreenList } from '../features/projects/detail/ScreenList';
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
      <ProjectHeader name={project.name} description={project.description} />
      <div className="project-detail-grid">
        <div className="project-detail-main">
          <ScreenList screens={project.screens} />
        </div>
        <div className="project-detail-sidebar">
          <ProjectStats stats={project.stats} />
          <MembersList members={project.members} />
        </div>
      </div>
    </DashboardLayout>
  );
}