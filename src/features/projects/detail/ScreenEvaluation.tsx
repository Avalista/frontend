import React, { useState } from 'react';
import { Screen } from '../../../types/project.types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FlowChart } from './FlowChart';
import './ScreenEvaluation.css';

export const ScreenEvaluation = ({ screen }: { screen: Screen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card screen-evaluation-card">
      <div className="screen-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="screen-title">{screen.title}</h3>
        <button className="toggle-button">
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="screen-content">
          <img src={screen.imageUrl} alt={`Tela ${screen.title}`} className="screen-image" />
          <div className="org-chart-wrapper">
            <FlowChart />
          </div>
        </div>
      )}
    </div>
  );
};