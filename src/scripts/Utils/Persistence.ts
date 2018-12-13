import { ActionType } from "hyperapp";

export interface Persistence {
  save: ActionType<any, Persistence>;
  load: ActionType<any, Persistence>;
}

export const persistence: Persistence = {
  save: state => localStorage.setItem("state", JSON.stringify(state)),
  load: () => JSON.parse(localStorage.getItem("state") || "{}")
};
