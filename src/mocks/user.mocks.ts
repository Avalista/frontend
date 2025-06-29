import { UserProfile } from '../types/auth.types';

export const mockUserProfile: UserProfile = {
  id: 'user-123',
  name: 'Mila Designer',
  email: 'mila@avalista.com',
  avatarUrl: 'https://i.pravatar.cc/150?u=mila-dev', // gerador de avatares aleatórios
  badges: [
    { id: 'badge-01', name: 'Pioneira', imageUrl: 'https://img.icons8.com/color/48/laurel-wreath.png' },
    { id: 'badge-02', name: 'Mestra do Código', imageUrl: 'https://img.icons8.com/color/48/code.png' },
    { id: 'badge-03', name: 'Caçadora de Bugs', imageUrl: 'https://img.icons8.com/color/48/bug.png' },
  ],

  bio: 'Designer de interfaces com paixão por usabilidade e sistemas de design. Foco em criar experiências que sejam intuitivas e visualmente agradáveis.',
  stats: {
    projectsEvaluated: 42,
    averageRating: 4.8,
  },
  recentActivity: [
    { id: 'act-1', projectName: 'Sistema de E-commerce V2', date: '25/06/2025' },
    { id: 'act-2', projectName: 'App Mobile de Finanças', date: '22/06/2025' },
    { id: 'act-3', projectName: 'Redesign da Landing Page', date: '19/06/2025' },
  ],
};