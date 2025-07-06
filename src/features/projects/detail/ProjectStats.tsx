import React from 'react';
import { ProjectStats as StatsType } from '../../../types/project.types';
import './ProjectStats.css';

export function ProjectStats({ stats }: { stats?: StatsType }) {
  if (!stats) {
    return (
      <div className="card">
        <h3 className="card-title">Métricas do Projeto</h3>
        <p className="stats-unavailable">As estatísticas para este projeto ainda não estão disponíveis.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="card-title">Métricas do Projeto</h3>
      <div className="stats-grid">
        <div className="stat-item-large">
          <span>{stats.problemsFound}</span>
          <label>Problemas Encontrados</label>
        </div>
        <div className="stat-item-large">
          <span>{stats.problemsSolved}</span>
          <label>Problemas Resolvidos</label>
        </div>
      </div>
      <h4 className="dist-title">Distribuição por Categoria</h4>
      <ul className="dist-list">
        {stats.categoryDistribution.map(cat => (
          <li key={cat.category}><span>{cat.category}</span><span>{cat.count}</span></li>
        ))}
      </ul>
    </div>
  );
}