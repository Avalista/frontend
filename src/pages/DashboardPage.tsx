import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';
import { Header } from '../features/dashboard/Header';
import { MetricCard } from '../features/dashboard/MetricCard';
import { ProjectCard } from '../features/dashboard/ProjectCard';
import { AchievementItem } from '../features/dashboard/AchievementItem';
import { CategoryTable } from '../features/dashboard/CategoryTable';
import { mockUser, mockMetrics, mockProjects, mockAchievements, mockCategories } from '../mocks/dashboard.mocks';
import './DashboardPage.css';

export function DashboardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="loading-state"> Iniciando modo Avalista...</div>
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
              <MetricCard key={index} title={metric.title} value={metric.value} change={metric.change} isPositive={metric.isPositive} />
            ))}
          </div>
          
          <div className="projects-card">
            <div className="section-header">
              <h2 className="section-title">Meus Projetos</h2>
              <Link to="/projects/create" className="section-action-button">
                <Plus size={16} />
                Novo Projeto
              </Link>
            </div>
            <div className="projects-grid">
              {mockProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  progress={project.progress}
                  mainCategory={project.mainCategory}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="sidebar-column">
          <div className="achievements-card">
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