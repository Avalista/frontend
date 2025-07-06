export interface Heuristic {
  id: string;
  code: string;
  name: string;
  description: string;
}

export interface EurecaCategory {
  id: string;
  code: string;
  name: string;
  heuristics: Heuristic[];
}