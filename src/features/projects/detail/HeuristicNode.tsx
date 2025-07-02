import React from 'react';
import './HeuristicNode.css';

export const HeuristicNode = ({ data }: { data: { label: string } }) => {
  return (
    <div className="heuristic-node">
      <p className="node-name">{data.label}</p>
    </div>
  );
};