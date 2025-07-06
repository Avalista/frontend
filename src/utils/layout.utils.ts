import { Node, Edge } from 'reactflow';
import { EurecaCategory } from '../types/eureca.types';

export const getLayoutedElements = (categories: EurecaCategory[]) => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  let yPos = 0;

  categories.forEach((category) => {
    const categoryNode = {
      id: category.id,
      type: 'heuristicNode',
      data: { code: category.code, label: category.name, type: 'category' },
      position: { x: 350, y: yPos },
    };
    nodes.push(categoryNode);

    const baseDirectiveY = yPos + 100;

    category.heuristics.forEach((heuristic, index) => {
      const directiveNode = {
        id: heuristic.id,
        type: 'heuristicNode',
        data: { code: heuristic.code, label: heuristic.name, type: 'directive' },
        position: { x: (index % 4) * 220, y: baseDirectiveY + Math.floor(index / 4) * 80 },
      };
      nodes.push(directiveNode);

      const edge = {
        id: `e-${category.id}-${heuristic.id}`,
        source: category.id,
        target: heuristic.id,
        type: 'smoothstep',
        animated: true,
      };
      edges.push(edge);
    });

    const rows = Math.ceil(category.heuristics.length / 4);
    yPos += 100 + (rows * 80);
  });

  return { nodes, edges };
};