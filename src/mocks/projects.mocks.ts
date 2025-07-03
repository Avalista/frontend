import { Project, ProjectMember } from '../types/project.types';
import { eurecaData } from './eureca.mocks';
import hubImage from '../assets/HUB prestador.jpg';

export const mockProjectDetail: Project = {
  id: 'proj-midnights',
  name: 'Midnights',
  description: 'Análise da interface do novo álbum promocional, focando na experiência mobile e na acessibilidade dos componentes de navegação.',
  mainCategory: 'AF',
  status: 'active',
  progress: 85,
  screens: [
    {
      id: 'screen-1',
      title: 'Página Inicial (hub sesc)',
      imageUrl: hubImage,
      evaluationTree: { 
        id: 'root-1', 
        person: { id: 'r1', name: 'Tela Inicial', type: 'category' }, 
        children: Object.entries(eurecaData).map(([key, value]) => ({ 
          id: key, 
          person: { id: key, name: value.name, type: 'category' }, 
          children: value.directives.map(d => ({ 
            id: d.id, 
            person: { id: d.id, name: d.name, type: 'directive' },
            children: [],
          }))
        })) 
      },
    },
  ],
  members: [
    { id: 'user-taylor', name: 'Taylor', avatarUrl: 'https://i.pravatar.cc/150?u=taylor-swift', isOwner: true },
    { id: 'user-ramon', name: 'Ramon', avatarUrl: 'https://i.pravatar.cc/150?u=ramon', isOwner: false },
  ],
  stats: {
    problemsFound: 42,
    categoryDistribution: [
      { category: 'Navegação (NA)', count: 18 },
      { category: 'Funcional (AF)', count: 12 },
      { category: 'Acessibilidade (AC)', count: 8 },
    ],
    problemsSolved: 25,
  },
};

export const mockAllUsers: ProjectMember[] = [
  { id: 'user-mila', name: 'Mila Designer', avatarUrl: 'https://i.pravatar.cc/150?u=mila-dev', isOwner: false },
  { id: 'user-john', name: 'John Doe', avatarUrl: 'https://i.pravatar.cc/150?u=john-doe', isOwner: false },
  { id: 'user-jane', name: 'Jane Smith', avatarUrl: 'https://i.pravatar.cc/150?u=jane-smith', isOwner: false },
];