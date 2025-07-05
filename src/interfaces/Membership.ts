export interface Membership {
  evaluatorId: string;
  projectId: string;
  evaluator: Evaluator;
  admin: boolean;
  joinedAt: string;
}