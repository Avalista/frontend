import { useLocation, Link } from 'react-router-dom';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';
import { EvaluationSession } from '../types/project.types';
import { ScreenEvaluation } from '../features/projects/detail/ScreenEvaluation';

export function EvaluationPage() {
  const location = useLocation();
  const sessionData: EvaluationSession = location.state?.session;

  if (!sessionData) {
    return (
      <DashboardLayout>
        <div className="card">
          <h2 className="section-title">Erro</h2>
          <p>Não foi possível carregar a sessão de avaliação.</p>
          <Link to="/dashboard" className="btn btn-primary">Voltar ao Dashboard</Link>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="project-detail-header">
        <h1 className="project-detail-title">Avaliação em Andamento</h1>
        <p className="project-detail-description">
          Projeto: <strong>{sessionData.evaluationItems[0]?.screen.title || 'Projeto'}</strong>
        </p>
      </div>
      <div className="screens-container">
        {sessionData.evaluationItems.map(item => (
          <ScreenEvaluation key={item.id} screen={item.screen} />
        ))}
      </div>
    </DashboardLayout>
  );
}