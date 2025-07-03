import React from 'react';
import './HeuristicNode.css';

interface NodeData {
  label: string;
  type: 'category' | 'directive';
}

export const HeuristicNode = ({ data }: { data: NodeData }) => {
  return (
    <div className={`heuristic-node node-type-${data.type}`}>
      <p className="node-name">{data.label}</p>
    </div>
  );
};