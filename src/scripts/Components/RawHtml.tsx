import { h, Component } from "hyperapp";

export const RawHtml: Component<{ html: string }> = ({ html }) => {
  return <div oncreate={(el: Element) => (el.innerHTML = html)} />;
};
