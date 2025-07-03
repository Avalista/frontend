import React from 'react';
import { Plus } from 'lucide-react';
import { Screen } from '../../../types/project.types';
import { ScreenEvaluation } from './ScreenEvaluation';

interface ScreenListProps {
  screens: Screen[];
  onAddScreenClick: () => void;
}

export function ScreenList({ screens, onAddScreenClick }: ScreenListProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div className="section-header">
        <h2 className="section-title">Telas e Avaliações</h2>
        <button className="btn btn-secondary" onClick={onAddScreenClick}>
          <Plus size={16} />
          Adicionar Tela
        </button>
      </div>
      {screens.map(screen => (
        <ScreenEvaluation key={screen.id} screen={screen} />
      ))}
    </div>
  );
}