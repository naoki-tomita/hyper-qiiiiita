import { h, app, View } from "hyperapp";
import { Items } from "./Components/Items";
import { State, state } from"./State";
import { Actions, action } from "./Action";
import { Header } from "./Components/Header";
import { Route, location } from "@hyperapp/router";
import { Home } from "./Components/Home";

const App: View<
  State & { location: typeof location.state },
  Actions & { location: typeof location.actions }
> = (state, actions) => {
  return (
    <div>
      <Header />
      <Route path="/dist/" render={() => <Home />} />
      <Route path="/dist/items" render={() => <Items {...state.items} {...actions.items} />} />
    </div>
  );
}

const main = app({
  ...state,
  location: location.state,
}, {
  ...action,
  location: location.actions,
}, App, document.getElementById("app"));
location.subscribe(main.location);