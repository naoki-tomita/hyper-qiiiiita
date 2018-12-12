import { state as items, State as ItemsState } from "./Components/Items";

export interface State {
  items: ItemsState;
}

export const state: State = {
  items,
};