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

export interface Project {
  id: string;
  name: string;
  description: string;
  screens: Screen[];
}

export interface CreateProjectPayload {
  name: string;
  description: string;
}