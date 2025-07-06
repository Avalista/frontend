import React from 'react';
import './HeuristicNode.css';

interface NodeData {
  label: string;
  code: string;
  type: 'category' | 'directive';
}

export const HeuristicNode = ({ data }: { data: NodeData }) => {
  return (
    <div className={`heuristic-node node-type-${data.type}`}>
      <span className="node-code">{data.code}</span>
      <p className="node-name">{data.label}</p>
    </div>
  );
};