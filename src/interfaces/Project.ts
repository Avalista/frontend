import { Membership } from "./Membership";
import { IScreen } from "./Screen";
import { Session } from "./Session";

export interface IProject {
  id: string;
  name: string;
  description: string;
  memberships: Membership[];
  screens: IScreen[];
  sessions: Session[];
  finalEvaluation: string | null;
}