export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
  passwordConfirm: string;
}

export interface LoginSuccessResponse {
  access_token: string;
}

export interface ApiErrorResponse {
  statusCode: number;
  message: string[];
  error: string;
}

export type CategoryKey = 'AF' | 'CO' | 'FM' | 'NA' | 'PU' | 'PD' | 'AC' | 'LGPD';

export interface Screen {
  id: string;
  title: string;
  description: string;
  screenshot: string;
}

export interface ProjectMember {
  id: string;
  name: string;
  avatarUrl: string;
  isOwner: boolean;
}

export interface ProjectStats {
  problemsFound: number;
  categoryDistribution: { category: string; count: number }[];
  problemsSolved: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  mainCategory: CategoryKey | null;
  status: 'active' | 'completed';
  progress: number;
  screens: Screen[];
  members: ProjectMember[];
  stats: ProjectStats;
  currentUserEvaluationSession?: { id: string; status: string } | null;
}

export interface UserProfile extends ProjectMember {
  email: string;
  funcao: string;
  badges: {
    id: string;
    name: string;
    imageUrl: string;
  }[];
  bio: string;
  stats: {
    projectsEvaluated: number;
    averageRating: number;
  };
  recentActivity: {
    id: string;
    projectName: string;
    date: string;
  }[];
}

export type UserProfileUpdate = Partial<Pick<UserProfile, 'name' | 'bio' | 'avatarUrl' | 'funcao'>>;