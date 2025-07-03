import React, { useMemo } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import { HeuristicNode } from './HeuristicNode';
import { eurecaData } from '../../../mocks/eureca.mocks';
import { getLayoutedElements } from '../../../utils/layout.utils';

const nodeTypes = {
  heuristicNode: HeuristicNode,
};

export function FlowChart() {
  const { nodes, edges } = useMemo(() => getLayoutedElements(eurecaData), []);

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