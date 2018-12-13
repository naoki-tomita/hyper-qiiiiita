import { h, Component, ActionType } from "hyperapp";
import { QiitaItem, ItemView } from "./ItemView";
import { Route, Link } from "@hyperapp/router";

export interface Actions {
  fetchItems: ActionType<State, Actions>;
  setLoading: ActionType<State, Actions>;
  setItems: ActionType<State, Actions>;
  setPage: ActionType<State, Actions>;
  nextPage: ActionType<State, Actions>;
  prevPage: ActionType<State, Actions>;
}

export const actions: Actions = {
  fetchItems: (page: number) => async (_, { setItems, setLoading }) => {
    setLoading(true);
    const fetchItemsResult = await fetch(
      `https://qiita.com/api/v2/items?page=${page}`
    );
    if (fetchItemsResult.ok) {
      const items = await fetchItemsResult.json();
      setItems(items);
    }
    setLoading(false);
  },
  setLoading: (loading: boolean) => _ => ({ loading }),
  setItems: (items: QiitaItem[]) => _ => ({ items, loading: false }),
  setPage: (page: number) => (_, actions) => (
    actions.fetchItems(page), { page }
  ),
  nextPage: () => ({ page }, actions) => {
    actions.setPage(page + 1);
  },
  prevPage: () => ({ page }, actions) => {
    actions.setPage(page - 1);
  }
};

export interface State {
  items: QiitaItem[];
  page: number;
  loading: boolean;
  item?: QiitaItem;
}

export const state: State = {
  items: [],
  page: 1,
  loading: false,
  item: undefined
};

export const Items: Component<State & Actions> = state => {
  return (
    <div>
      <Route path="/items" render={() => <ItemsInner {...state} />} />
      <Route<{ id: string }>
        path="/items/:id"
        render={({ match }) => (
          <ItemView item={state.items.find(i => i.id === match.params.id)!} />
        )}
      />
    </div>
  );
};

export const ItemsInner: Component<State & Actions> = ({
  items,
  nextPage,
  prevPage,
  page,
  loading
}) => {
  return (
    <div>
      <div>{page}</div>
      {!loading ? (
        items.map((item, i) => (
          <div key={i}>
            <Link to={`/items/${item.id}`}>{item.title}</Link>
          </div>
        ))
      ) : (
        <div>loading</div>
      )}
      <button onclick={prevPage}>prev</button>
      <button onclick={nextPage}>next</button>
    </div>
  );
};
