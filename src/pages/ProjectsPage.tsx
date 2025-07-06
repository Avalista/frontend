import { useState, useEffect } from 'react';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';
import { ProjectList } from '../features/projects/ProjectList';
import { getProjects } from '../api/projectApi';
import { Project } from '../types/project.types';
import { LoadingScreen } from '../components/ui/LoadingScreen';

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProjects()
      .then(data => {
        setProjects(data);
      })
      .catch(() => {
        setError('Não foi possível carregar seus projetos.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <LoadingScreen />
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <p className="alert alert-error">{error}</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <ProjectList projects={projects} />
    </DashboardLayout>
  );
}