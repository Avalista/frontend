import React, { useState } from 'react';
import { Screen } from '../../../types/project.types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FlowChart } from './FlowChart';
import './ScreenEvaluation.css';

export function ScreenEvaluation({ screen }: { screen: Screen }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="screen-card">
      <div className="screen-card-visible-content">
        <div className="screen-image-container">
          <img src={screen.screenshot} alt={`Tela ${screen.title}`} className="screen-image" />
        </div>
        <h3 className="screen-card-title">{screen.title}</h3>
        <p className="screen-card-description">{screen.description}</p>
      </div>

      <div className="screen-card-expander" onClick={() => setIsExpanded(!isExpanded)}>
        <span>{isExpanded ? 'Ocultar Avaliação' : 'Iniciar Avaliação'}</span>
        <button className="toggle-button">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="screen-content-expanded">
          <div className="org-chart-wrapper">
            <FlowChart />
          </div>
        </div>
      )}
    </div>
  );
};