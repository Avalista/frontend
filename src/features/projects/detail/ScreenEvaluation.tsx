import React, { useState } from 'react';
import { Screen } from '../../../types/project.types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FlowChart } from './FlowChart';
import { Node } from 'reactflow';
import './ScreenEvaluation.css';

interface ScreenEvaluationProps {
  screen: Screen;
  onNodeClick: (node: Node) => void;
}

export const ScreenEvaluation = ({ screen, onNodeClick }: ScreenEvaluationProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card screen-evaluation-card">
      <div className="screen-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="screen-title">{screen.title}</h3>
        <button className="toggle-button">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="screen-content-expanded">
          <div className="org-chart-wrapper">
            <FlowChart onNodeClick={onNodeClick} />
          </div>
        </div>
      )}
    </div>
  );
};