import { State } from "./State";
import { ActionsType } from "hyperapp";
import { actions as items, Actions as ItemsActions } from "./Components/Items";

export interface Actions {
  items: ItemsActions;
}

export const action: ActionsType<State, Actions> = {
  items
};
