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
    const fetchAndFilterProjects = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setError("ID do usuário não encontrado. Faça login novamente.");
        setLoading(false);
        return;
      }
      
      try {
        const allProjects = await getProjects();
        
        const myProjects = allProjects.filter(project => 
          project.members.some(member => member.id === userId)
        );
        
        setProjects(myProjects);
      } catch (err) {
        console.error(err);
        setError('Não foi possível carregar seus projetos.');
      } finally {
        setLoading(false);
      }
    };

    fetchAndFilterProjects();
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