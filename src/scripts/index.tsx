import { h, app, View } from "hyperapp";
import { Items } from "./Components/Items";
import { State, state } from "./State";
import { Actions, action } from "./Action";
import { Header } from "./Components/Header";
import { Route, location } from "@hyperapp/router";
import { Home } from "./Components/Home";
import { persistence, Persistence } from "./Utils/Persistence";

const App: View<
  State & { location: typeof location.state },
  Actions & { location: typeof location.actions } & Persistence
> = (state, actions) => {
  actions.save(state);
  return (
    <div>
      <Header />
      <Route path="/" render={() => <Home />} />
      <Route
        parent
        path="/items"
        render={() => <Items {...state.items} {...actions.items} />}
      />
    </div>
  );
};

const main = app(
  {
    ...state,
    location: location.state
  },
  {
    ...action,
    ...persistence,
    location: location.actions
  },
  App,
  document.getElementById("app")
);

location.subscribe(main.location);
main.load();
main.items.fetchItems(state.items.page);
