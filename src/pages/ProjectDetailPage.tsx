import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';
import { Project } from '../types/project.types';
import { mockProjectDetail, mockAllUsers } from '../mocks/projects.mocks';
import { ProjectHeader } from '../features/projects/detail/ProjectHeader';
import { ProjectStats } from '../features/projects/detail/ProjectStats';
import { MembersList } from '../features/projects/detail/MembersList';
import { ScreenList } from '../features/projects/detail/ScreenList';
import { Modal } from '../components/ui/Modal';
import { ProjectForm } from '../features/projects/ProjectForm';
import { AddMemberForm } from '../features/projects/detail/AddMemberForm';
import { Edit3 } from 'lucide-react';
import './ProjectDetailPage.css';

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddMemberModalOpen, setAddMemberModalOpen] = useState(false);

  useEffect(() => {
    setProject(mockProjectDetail);
  }, [projectId]);

  const handleProjectUpdate = (updatedProject: Project) => {
    setProject(updatedProject);
    setEditModalOpen(false);
  };

  const handleAddMembers = (selectedIds: string[]) => {
    if (!project) return;
    const newMembers = mockAllUsers.filter(user => selectedIds.includes(user.id));
    const updatedMembers = [...project.members, ...newMembers];
    
    setProject({ ...project, members: updatedMembers });
    alert(`${newMembers.length} avaliador(es) adicionados com sucesso.`);
    setAddMemberModalOpen(false);
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
            <ScreenList screens={project.screens} />
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
    </>
  );
}