import { Project, ProjectMember } from '../types/project.types';
import { eurecaCategories } from './eureca.mocks';

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
      title: 'Página Inicial (Hero Section)',
      imageUrl: 'https://i.imgur.com/3Q3pQ1m.png',
      evaluationTree: { id: 'root-1', person: { id: 'r1', name: 'Tela Inicial', type: 'category' }, children: Object.entries(eurecaCategories).map(([k, v]) => ({ id: k, person: { id: k, name: v.name, type: 'category' }, children: v.directives.map(d => ({ id: d.id, person: { id: d.id, name: d.title, type: 'directive' }, children: [] }))})) },
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