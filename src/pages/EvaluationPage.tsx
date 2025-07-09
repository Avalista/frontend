import { useState } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';
import { EvaluationSession, Screen } from '../types/project.types';
import { ScreenEvaluation } from '../features/projects/detail/ScreenEvaluation';
import { AddProblemForm } from '../features/evaluation/AddProblemForm';
import { Modal } from '../components/ui/Modal';
import { Node } from 'reactflow';

export function EvaluationPage() {
  const location = useLocation();
  const { projectId } = useParams();
  const sessionData: EvaluationSession = location.state?.session;
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHeuristic, setSelectedHeuristic] = useState<{screenId: string, heuristicId: string} | null>(null);

  const handleNodeClick = (node: Node) => {
    if (node.data.type === 'directive') {
      const screenId = sessionData.evaluationItems.find(item => 
        item.screen.evaluationTree?.children.some((cat: any) => 
          cat.children.some((dir: any) => dir.id === node.id)
        )
      )?.screen.id;

      if (screenId) {
        setSelectedHeuristic({ screenId: screenId, heuristicId: node.id });
        setIsModalOpen(true);
      }
    }
  };

  const handleProblemAdded = () => {
    setIsModalOpen(false);
  };

  if (!sessionData) {
    return (
      <DashboardLayout>
        <div className="card">
          <p>Sessão de avaliação não encontrada. <Link to={`/projects/${projectId}`}>Voltar ao projeto</Link>.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <>
      <DashboardLayout>
        <div className="project-detail-header">
          <h1 className="project-detail-title">Avaliação em Andamento</h1>
          <p className="project-detail-description">
            Projeto: <strong>{sessionData.evaluationItems[0]?.screen.title || 'Projeto'}</strong>
          </p>
        </div>
        <div className="screens-container">
          {sessionData.evaluationItems.map(item => (
            <ScreenEvaluation key={item.id} screen={item.screen} onNodeClick={handleNodeClick} />
          ))}
        </div>
      </DashboardLayout>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Adicionar Problema">
        {selectedHeuristic && (
          <AddProblemForm 
            screenId={selectedHeuristic.screenId} 
            heuristicId={selectedHeuristic.heuristicId}
            onSuccess={handleProblemAdded} 
          />
        )}
      </Modal>
    </>
  );
}