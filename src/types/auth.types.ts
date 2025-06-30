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

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
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

export type UserProfileUpdate = Partial<Pick<UserProfile, 'name' | 'bio' | 'avatarUrl'>>;