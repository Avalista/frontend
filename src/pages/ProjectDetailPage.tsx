import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Edit3 } from 'lucide-react';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';
import { Project, Screen } from '../types/project.types';
import { mockProjectDetail } from '../mocks/projects.mocks';
import { ProjectHeader } from '../features/projects/detail/ProjectHeader';
import { ProjectStats } from '../features/projects/detail/ProjectStats';
import { MembersList } from '../features/projects/detail/MembersList';
import { ScreenList } from '../features/projects/detail/ScreenList';
import { Modal } from '../components/ui/Modal';
import { ProjectForm } from '../features/projects/ProjectForm';
import { AddMemberForm } from '../features/projects/detail/AddMemberForm';
import { AddScreenForm } from '../features/projects/detail/AddScreenForm';
import './ProjectDetailPage.css';

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddMemberModalOpen, setAddMemberModalOpen] = useState(false);
  const [isAddScreenModalOpen, setAddScreenModalOpen] = useState(false);

  useEffect(() => {
    setProject(mockProjectDetail);
  }, [projectId]);

  const handleProjectUpdate = (updatedProject: Project) => {
    setProject(updatedProject);
    setEditModalOpen(false);
  };

  const handleAddMembers = (selectedIds: string[]) => {};

  const handleScreenAdded = (newScreen: Screen) => {
    if (project) {
      setProject({
        ...project,
        screens: [...project.screens, newScreen],
      });
    }
    setAddScreenModalOpen(false);
  };

  if (!project) {
    return <DashboardLayout><div>Carregando projeto...</div></DashboardLayout>;
  }

  return (
    <>
      <DashboardLayout>
        <div className="project-detail-header-container">
          <ProjectHeader name={project.name} description={project.description} />
          <button className="btn btn-secondary" onClick={() => setEditModalOpen(true)}>
            <Edit3 size={16}/>
            Editar Projeto
          </button>
        </div>
        <div className="project-detail-grid">
          <div className="project-detail-main">
            <ScreenList screens={project.screens} onAddScreenClick={() => setAddScreenModalOpen(true)} />
          </div>
          <div className="project-detail-sidebar">
            <ProjectStats stats={project.stats} />
            <MembersList members={project.members} onAddClick={() => setAddMemberModalOpen(true)} />
          </div>
        </div>
      </DashboardLayout>

      <Modal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)} title="Editar Projeto">
        <ProjectForm project={project} onSuccess={handleProjectUpdate} />
      </Modal>

      <Modal isOpen={isAddMemberModalOpen} onClose={() => setAddMemberModalOpen(false)} title="Adicionar Avaliadores">
        <AddMemberForm currentMembers={project.members} onAddMembers={handleAddMembers} />
      </Modal>
      
      <Modal isOpen={isAddScreenModalOpen} onClose={() => setAddScreenModalOpen(false)} title="Cadastrar Nova Tela">
        <AddScreenForm projectId={project.id} onSuccess={handleScreenAdded} />
      </Modal>
    </>
  );
}