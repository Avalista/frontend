export type CategoryKey = 'AF' | 'CO' | 'FM' | 'NA' | 'PU' | 'PD' | 'AC' | 'LGPD';

export interface EvaluationItem {
  id: string;
  status: 'NOT_REVIEWED' | 'REVIEWED_OK' | 'REVIEWED_ISSUE';
  reviewedAt: string | null;
  screen: Screen;
}

export interface EvaluationSession {
  id: string;
  startedAt: string;
  finishedAt: string | null;
  status: 'IN_PROGRESS' | 'COMPLETED';
  evaluationItems: EvaluationItem[];
}

export interface OrgNode {
  id: string;
  name: string;
  type: 'category' | 'directive';
}

export interface Screen {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  evaluationTree?: any;
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

export interface CreateProjectPayload {
  name: string;
  description: string;
}

export interface UserProfileUpdate {
  name?: string;
  bio?: string;
  avatarUrl?: string;
  funcao?: string;
}

export interface CreateScreenPayload {
  projectId: string;
  title: string;
  description: string;
  screenshot: File;
}

export interface StartEvaluationResponse {
  project: {
    id: string;
    name: string;
    description: string;
  };
  evaluator: {
    id: string;
    name: string;
    email: string;
  };
  evaluationSession: EvaluationSession;
}