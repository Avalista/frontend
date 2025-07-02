import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';
import { Header } from '../features/dashboard/Header';
import { MetricCard } from '../features/dashboard/MetricCard';
import { ProjectCard } from '../features/dashboard/ProjectCard';
import { AchievementItem } from '../features/dashboard/AchievementItem';
import { CategoryTable } from '../features/dashboard/CategoryTable';
import { LoadingScreen } from '../components/ui/LoadingScreen';
import { mockUser, mockMetrics, mockProjects, mockAchievements, mockCategories } from '../mocks/dashboard.mocks';
import { useWindowSize } from '../hooks/useWindowSize';
import './DashboardPage.css';

export function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const getVisibleProjectsCount = () => {
    if (width === undefined) {
      return 8;
    }
    if (width > 1440) {
      return 8;
    }
    if (width > 1024) {
      return 6;
    }
    return 4;
  };

  const visibleProjects = mockProjects.slice(0, getVisibleProjectsCount());

  if (loading) {
    return (
      <DashboardLayout>
        <LoadingScreen />
      </DashboardLayout>
    );
  }

  return (
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
              <Link to="/projects/create" className="section-action-button">
                <Plus size={18} strokeWidth={3} />
                Novo Projeto
              </Link>
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
  );
}