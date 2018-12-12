import { h, Component, ActionType } from "hyperapp";

export interface Actions {
  fetchItems: ActionType<State, Actions>;
  setItems: ActionType<State, Actions>;
}

export const actions: Actions = {
  fetchItems: () => async (_, actions) => {
    const fetchItemsResult = await fetch("https://qiita.com/api/v2/items");
    if (fetchItemsResult.ok) {
      const items = await fetchItemsResult.json();
      actions.setItems(items)
    }
  },
  setItems: (items) => _ => ({ items, }),
}

export interface State {
  items: any[];
}

export const state = {
  items: [],
}

export const Items: Component<State & Actions> = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => <div key={i}>{item.title}</div>)}
    </div>
  );
}