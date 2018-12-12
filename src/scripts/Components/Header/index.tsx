import { h, Component } from "hyperapp";
import { Title } from "./Title";
import { Link } from "@hyperapp/router";

export const Header: Component = () => {
  return (
    <div>
      <Title />
      <Link to="./">Home</Link>
      <Link to="./items">Items</Link>
    </div>
  );
}