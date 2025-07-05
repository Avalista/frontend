export interface OrgNode {
  id: string;
  name: string;
  type: 'category' | 'directive';
}

export interface Screen {
  id: string;
  title: string;
  imageUrl: string;
  evaluationTree: {
    id: string;
    person: OrgNode;
    children: {
      id: string;
      person: OrgNode;
      children: any[];
    }[];
  };
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
  id: string | number;
  name: string;
  description: string;
  mainCategory: CategoryKey | null;
  status: 'active' | 'completed';
  progress: number;
  screens: Screen[];
  members: ProjectMember[];
  stats: ProjectStats;
}

export type CategoryKey = 'AF' | 'CO' | 'FM' | 'NA' | 'PU' | 'PD' | 'AC' | 'LGPD';

export interface CreateProjectPayload {
  name: string;
  description: string;
}

export interface CreateScreenPayload {
  projectId: string
  title: string;
  description: string;
  screenshot: string;
  // screenshot: File;
}