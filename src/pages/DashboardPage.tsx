import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';
import { Header } from '../features/dashboard/Header';
import { MetricCard } from '../features/dashboard/MetricCard';
import { ProjectCard } from '../features/dashboard/ProjectCard';
import { AchievementItem } from '../features/dashboard/AchievementItem';
import { CategoryTable } from '../features/dashboard/CategoryTable';
import { ProjectForm } from '../features/projects/ProjectForm';
import { Modal } from '../components/ui/Modal';
import { LoadingScreen } from '../components/ui/LoadingScreen';
import { mockUser, mockMetrics, mockProjects, mockAchievements, mockCategories } from '../mocks/dashboard.mocks';
import { useWindowSize } from '../hooks/useWindowSize';
import './DashboardPage.css';

export function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();
  const [isCreateProjectModalOpen, setCreateProjectModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const getVisibleProjectsCount = () => {
    if (width === undefined) return 8;
    if (width > 1440) return 8;
    if (width > 1024) return 6;
    return 4;
  };

  const visibleProjects = mockProjects.slice(0, getVisibleProjectsCount());

  const handleProjectCreated = () => {
    setCreateProjectModalOpen(false);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <LoadingScreen />
      </DashboardLayout>
    );
  }

  return (
    <>
      <DashboardLayout>
        <Header user={mockUser} />
        <div className="dashboard-grid-layout">
          <div className="main-column">
            <div className="metrics-grid">
              {mockMetrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
            <div className="card">
              <div className="section-header">
                <h2 className="section-title">Meus Projetos</h2>
                <button onClick={() => setCreateProjectModalOpen(true)} className="section-action-button">
                  <Plus size={18} strokeWidth={3} />
                  Novo Projeto
                </button>
              </div>
              <div className="projects-grid">
                {visibleProjects.map(project => (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    progress={project.progress}
                    mainCategory={project.mainCategory}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="sidebar-column">
            <div className="card achievements-card-layout">
              <h3 className="card-title">Conquistas</h3>
              <div className="achievements-list">
                {mockAchievements.map(achievement => <AchievementItem key={achievement.id} {...achievement} />)}
              </div>
            </div>
            <CategoryTable categories={mockCategories} />
          </div>
        </div>
      </DashboardLayout>
      
      <Modal
        isOpen={isCreateProjectModalOpen}
        onClose={() => setCreateProjectModalOpen(false)}
        title="Criar Novo Projeto"
      >
        <ProjectForm onSuccess={handleProjectCreated} />
      </Modal>
    </>
  );
}