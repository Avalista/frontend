import React from 'react';
import { Plus } from 'lucide-react';
import { Screen } from '../../../types/project.types';
import { ScreenEvaluation } from './ScreenEvaluation';
import './ScreenList.css';

interface ScreenListProps {
  screens: Screen[];
  onAddScreenClick: () => void;
}

export function ScreenList({ screens, onAddScreenClick }: ScreenListProps) {
  return (
    <div className="card">
      <div className="section-header">
        <h2 className="section-title">Telas e Avaliações</h2>
        <button className="btn btn-secondary" onClick={onAddScreenClick}>
          <Plus size={16} />
          Adicionar Tela
        </button>
      </div>

      <div className="screen-grid">
        {screens.map((screen) => (
          <ScreenEvaluation key={screen.id} screen={screen} />
        ))}
      </div>
    </div>
  );
}