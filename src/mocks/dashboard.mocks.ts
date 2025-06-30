export const mockUser = {
  name: 'Taylor',
  avatarUrl: 'https://i.pravatar.cc/150?u=taylor-swift',
};

export const mockMetrics = [
  { title: 'Projetos Ativos', value: '8', change: '+2', isPositive: true },
  { title: 'Avaliações Concluídas', value: '13', change: '+1', isPositive: true },
  { title: 'Pontos de Melhoria', value: '42', change: '+5', isPositive: true },
  { title: 'Nível de Avaliador', value: 'Sênior', change: '0', isPositive: true },
];


export const mockProjects = [
  { id: 1, name: 'The Tortured Poets Department', progress: 85, color: 'bg-gray' },
  { id: 2, name: 'Midnights', progress: 95, color: 'bg-indigo' },
  { id: 3, name: 'evermore', progress: 100, color: 'bg-amber' },
  { id: 4, name: 'folklore', progress: 100, color: 'bg-zinc' },
  { id: 5, name: 'Lover', progress: 60, color: 'bg-pink' },
  { id: 6, name: 'Reputation', progress: 100, color: 'bg-slate' },
  { id: 7, name: '1989 (Taylor\'s Version)', progress: 75, color: 'bg-sky' },
  { id: 8, name: 'Red (Taylor\'s Version)', progress: 90, color: 'bg-red' },
];

export const mockAchievements = [
  { id: 1, name: 'Primeira Avaliação', achieved: true },
  { id: 2, name: '10 Avaliações Concluídas', achieved: true },
  { id: 3, name: 'Mestre da Heurística', achieved: true },
  { id: 4, name: '50 Problemas Reportados', achieved: false },
  { id: 5, name: 'Avaliação Perfeita', achieved: false },
];

export const mockCategories = [
  { name: 'Usabilidade e UX', popularity: 85, sales: '+20%' },
  { name: 'Performance e Velocidade', popularity: 70, sales: '+5%' },
  { name: 'Acessibilidade (a11y)', popularity: 55, sales: '-2%' },
  { name: 'Design Visual', popularity: 90, sales: '+18%' },
];