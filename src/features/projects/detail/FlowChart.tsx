import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import { HeuristicNode } from './HeuristicNode';

const initialNodes = [
  { id: 'cat-AF', type: 'heuristicNode', data: { label: 'Aspectos Funcionais' }, position: { x: 250, y: 5 } },
  { id: 'AF1', type: 'heuristicNode', data: { label: 'Funcionalidade' }, position: { x: 50, y: 100 } },
  { id: 'AF2', type: 'heuristicNode', data: { label: 'Flexibilidade de ação' }, position: { x: 450, y: 100 } },
  { id: 'cat-CO', type: 'heuristicNode', data: { label: 'Comunicação' }, position: { x: 250, y: 200 } },
  { id: 'CO1', type: 'heuristicNode', data: { label: 'Linguagem apropriada' }, position: { x: 50, y: 300 } },
  { id: 'CO2', type: 'heuristicNode', data: { label: 'Feedback adequado' }, position: { x: 450, y: 300 } },
];

const initialEdges = [
  { id: 'eAF-AF1', source: 'cat-AF', target: 'AF1' },
  { id: 'eAF-AF2', source: 'cat-AF', target: 'AF2' },
  { id: 'eCO-CO1', source: 'cat-CO', target: 'CO1' },
  { id: 'eCO-CO2', source: 'cat-CO', target: 'CO2' },
];

const nodeTypes = {
  heuristicNode: HeuristicNode,
};

export function FlowChart() {
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
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