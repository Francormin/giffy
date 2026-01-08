import { User } from "./user.ts";

export interface State {
  currentUser: User | null;
}
