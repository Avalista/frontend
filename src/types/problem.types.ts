export type ProblemSeverity = 'LOW' | 'MEDIUM' | 'HIGH';
export type ProblemEffort = 'LIGHT' | 'MODERATE' | 'HEAVY';

export interface AddProblemPayload {
  screenId: string;
  heuristicId: string;
  description: string;
  improvementSuggestions?: string;
  severity: ProblemSeverity;
  effort: ProblemEffort;
  priority: boolean;
  screenshots: string[];
}