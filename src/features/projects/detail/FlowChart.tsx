import React, { useState, useEffect, useMemo } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import { HeuristicNode } from './HeuristicNode';
import { getEurecaData } from '../../../api/eurecaApi';
import { EurecaCategory } from '../../../types/eureca.types';
import { getLayoutedElements } from '../../../utils/layout.utils';

const nodeTypes = {
  heuristicNode: HeuristicNode,
};

export function FlowChart() {
  const [categories, setCategories] = useState<EurecaCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEurecaData()
      .then(data => setCategories(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  
  const { nodes, edges } = useMemo(() => getLayoutedElements(categories), [categories]);

  if (loading) {
    return <div style={{ height: '600px' }}>Carregando organograma...</div>;
  }

  return (
    <div style={{ height: '800px', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}