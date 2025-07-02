import { Project } from '../types/project.types';
import { eurecaCategories } from './eureca.mocks';

export const mockProjectDetail: Project = {
  id: 'proj-midnights',
  name: 'Midnights',
  description: 'Análise da interface do novo álbum promocional.',
  screens: [
    {
      id: 'screen-1',
      title: 'Página Inicial',
      imageUrl: 'https://i.imgur.com/3Q3pQ1m.png',
      evaluationTree: {
        id: 'root-1',
        person: { id: 'root-1', name: 'Tela Inicial', type: 'category' },
        children: Object.entries(eurecaCategories).map(([key, value]) => ({
          id: key,
          person: { id: key, name: value.name, type: 'category' },
          children: value.directives.map(d => ({
            id: d.id,
            person: { id: d.id, name: d.title, type: 'directive' },
            children: [],
          })),
        })),
      },
    },
    {
      id: 'screen-2',
      title: 'Página de Contato',
      imageUrl: 'https://i.imgur.com/rYucP3W.png',
      evaluationTree: {
        id: 'root-2',
        person: { id: 'root-2', name: 'Tela de Contato', type: 'category' },
        children: Object.entries(eurecaCategories).map(([key, value]) => ({
          id: key,
          person: { id: key, name: value.name, type: 'category' },
          children: value.directives.map(d => ({
            id: d.id,
            person: { id: d.id, name: d.title, type: 'directive' },
            children: [],
          })),
        })),
      },
    }
  ],
};