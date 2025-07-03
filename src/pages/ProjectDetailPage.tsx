import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Edit3 } from 'lucide-react';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';
import { Project } from '../types/project.types';
import { mockProjectDetail } from '../mocks/projects.mocks';
import { ProjectHeader } from '../features/projects/detail/ProjectHeader';
import { ProjectStats } from '../features/projects/detail/ProjectStats';
import { MembersList } from '../features/projects/detail/MembersList';
import { ScreenList } from '../features/projects/detail/ScreenList';
import { Modal } from '../components/ui/Modal';
import { ProjectForm } from '../features/projects/ProjectForm';
import './ProjectDetailPage.css';

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    setProject(mockProjectDetail);
  }, [projectId]);

  const handleProjectUpdate = (updatedProject: Project) => {
    setProject(updatedProject);
    setEditModalOpen(false);
  };

  if (!project) {
    return <DashboardLayout><div>Carregando projeto...</div></DashboardLayout>;
  }

  return (
    <>
      <DashboardLayout>
        <div className="project-detail-header-container">
          <ProjectHeader name={project.name} description={project.description} />
          <button className="btn btn-secondary edit-project-button" onClick={() => setEditModalOpen(true)}>
            <Edit3 size={16}/>
            Editar Projeto
          </button>
        </div>
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

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        title="Editar Projeto"
      >
        <ProjectForm project={project} onSuccess={handleProjectUpdate} />
      </Modal>
    </>
  );
}