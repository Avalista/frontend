export const getLayoutedElements = (categories) => {
  const nodes = [];
  const edges = [];
  let yPos = 0;

  categories.forEach((category, index) => {
    const categoryNode = {
      id: category.id,
      type: 'heuristicNode',
      data: { label: category.name, type: 'category' },
      position: { x: 0, y: yPos },
    };
    nodes.push(categoryNode);

    yPos += 100;

    category.directives.forEach((directive, directiveIndex) => {
      const directiveNode = {
        id: directive.id,
        type: 'heuristicNode',
        data: { label: directive.name, type: 'directive' },
        position: { x: 250 + (directiveIndex % 3) * 200, y: yPos + Math.floor(directiveIndex / 3) * 60 },
      };
      nodes.push(directiveNode);

      const edge = {
        id: `e-${category.id}-${directive.id}`,
        source: category.id,
        target: directive.id,
        type: 'smoothstep',
      };
      edges.push(edge);
    });

    yPos += Math.ceil(category.directives.length / 3) * 60 + 100;
  });

  return { nodes, edges };
};