import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Edit3, PlayCircle } from 'lucide-react';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';
import { Project, Screen, ProjectMember, UserProfileUpdate } from '../types/project.types';
import { ProjectHeader } from '../features/projects/detail/ProjectHeader';
import { ProjectStats } from '../features/projects/detail/ProjectStats';
import { MembersList } from '../features/projects/detail/MembersList';
import { ScreenList } from '../features/projects/detail/ScreenList';
import { Modal } from '../components/ui/Modal';
import { ProjectForm } from '../features/projects/ProjectForm';
import { AddMemberForm } from '../features/projects/detail/AddMemberForm';
import { AddScreenForm } from '../features/projects/detail/AddScreenForm';
import { startEvaluation, getProjectById, updateProject } from '../api/projectApi';
import { LoadingScreen } from '../components/ui/LoadingScreen';
import { mockAllUsers } from '../mocks/projects.mocks';
import './ProjectDetailPage.css';

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddMemberModalOpen, setAddMemberModalOpen] = useState(false);
  const [isAddScreenModalOpen, setAddScreenModalOpen] = useState(false);

  useEffect(() => {
    if (!projectId) {
      setError("ID do projeto não encontrado.");
      setLoading(false);
      return;
    }

    getProjectById(projectId)
      .then(data => {
        setProject(data);
      })
      .catch(() => {
        setError("Não foi possível carregar o projeto.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [projectId]);

  const handleProjectUpdate = (updatedProjectData: Project) => {
    setProject(updatedProjectData);
    setEditModalOpen(false);
  };

  const handleAddMembers = (selectedIds: string[]) => {
    if (!project) return;
    const newMembers = mockAllUsers.filter(user => selectedIds.includes(user.id));
    const updatedMembers = [...project.members, ...newMembers];
    
    setProject({ ...project, members: updatedMembers });
    alert(`${newMembers.length} avaliador(es) adicionados com sucesso (simulado).`);
    setAddMemberModalOpen(false);
  };

  const handleScreenAdded = (newScreen: Screen) => {
    if (project) {
      setProject({
        ...project,
        screens: [...project.screens, newScreen],
      });
    }
    setAddScreenModalOpen(false);
  };

  const handleStartEvaluation = async () => {
    if (!projectId) return;
    try {
      const sessionData = await startEvaluation(projectId);
      navigate(`/projects/${projectId}/evaluation`, { state: { session: sessionData } });
    } catch (err) {
      alert("Não foi possível iniciar a avaliação.");
    }
  };

  if (loading) {
    return <DashboardLayout><LoadingScreen /></DashboardLayout>;
  }

  if (error || !project) {
    return <DashboardLayout><p className="alert alert-error">{error || "Projeto não encontrado."}</p></DashboardLayout>;
  }

  return (
    <>
      <DashboardLayout>
        <div className="project-detail-header-container">
          <div className="project-details-wrapper">
            <ProjectHeader name={project.name} description={project.description} />
          </div>
          <div className="header-actions">
            <button className="btn btn-secondary" onClick={() => setEditModalOpen(true)}>
              <Edit3 size={16}/>
              Editar Projeto
            </button>
            <button className="btn btn-primary" onClick={handleStartEvaluation}>
              <PlayCircle size={16} />
              Iniciar Avaliação
            </button>
          </div>
        </div>
        <div className="project-detail-grid">
          <div className="project-detail-main">
            {project.screens && <ScreenList screens={project.screens} onAddScreenClick={() => setAddScreenModalOpen(true)} />}
          </div>
          <div className="project-detail-sidebar">
            {project.stats && <ProjectStats stats={project.stats} />}
            {project.members && <MembersList members={project.members} onAddClick={() => setAddMemberModalOpen(true)} />}
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