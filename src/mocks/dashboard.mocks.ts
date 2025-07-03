// src/mocks/dashboard.mocks.ts

import { UserProfile } from '../types/auth.types'; // Importe o UserProfile se ainda não o fez

// Definimos o tipo para as chaves de categoria, para usar nos mocks
type CategoryKey = 'AF' | 'CO' | 'FM' | 'NA' | 'PU' | 'PD' | 'AC' | 'LGPD';

export const mockUser = {
  name: 'Taylor',
  avatarUrl: 'https://i.pravatar.cc/150?u=taylor-swift',
};

export const mockMetrics = [
  { title: 'Projetos Ativos', value: '8', change: '+2', isPositive: true },
  { title: 'Avaliações Concluídas', value: '13', change: '+1', isPositive: true },
  { title: 'Pontos de Melhoria', value: '42', change: '+5', isPositive: true },
  { title: 'Nível de Avaliador', value: 'Sênior', change: '0%', isPositive: true }, // Corrigi para '0%' para usar o ícone correto
];

export const mockProjects: { id: number; name: string; progress: number; mainCategory: CategoryKey | null }[] = [
  { id: 1, name: 'Midnights', progress: 85, mainCategory: 'AF' },
  { id: 2, name: 'Debut', progress: 30, mainCategory: 'CO' },
  { id: 3, name: 'evermore', progress: 100, mainCategory: 'NA' },
  { id: 4, name: 'folklore', progress: 100, mainCategory: 'AC' },
  { id: 5, name: 'Lover', progress: 60, mainCategory: 'PU' },
  { id: 6, name: 'Reputation', progress: 100, mainCategory: 'LGPD' },
  { id: 7, name: '1989 (Taylor\'s Version)', progress: 75, mainCategory: null },
  { id: 8, name: 'Red (Taylor\'s Version)', progress: 90, mainCategory: 'FM' },
];

export const mockAchievements = [
  { id: 'ach-1', name: 'Primeira Avaliação', achieved: true },
  { id: 'ach-2', name: '10 Avaliações Concluídas', achieved: true },
  { id: 'ach-3', name: 'Mestre da Heurística', achieved: true },
  { id: 'ach-4', name: '50 Problemas Reportados', achieved: false },
  { id: 'ach-5', name: 'Avaliação Perfeita', achieved: false },
];

export const mockCategories = [
  { name: 'Usabilidade e UX', popularity: 85, sales: '+20%' },
  { name: 'Performance e Velocidade', popularity: 70, sales: '+5%' },
  { name: 'Acessibilidade (a11y)', popularity: 55, sales: '-2%' },
  { name: 'Design Visual', popularity: 90, sales: '+18%' },
];