import React from 'react';
import { Screen } from '../../../types/project.types';
import { ScreenEvaluation } from './ScreenEvaluation';

export function ScreenList({ screens }: { screens: Screen[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 className="section-title">Telas e Avaliações</h2>
      {screens.map(screen => (
        <ScreenEvaluation key={screen.id} screen={screen} />
      ))}
    </div>
  );
}