import { h, Component } from "hyperapp";
import { RawHtml } from "../RawHtml";

export interface QiitaItem {
  rendered_body: string;
  body: string;
  created_at: string;
  id: string;
  likes_count: string;
  tags: Array<{ name: string; versions: string[] }>;
  title: string;
  updated_at: string;
  url: string;
}

interface State {
  item: QiitaItem;
}

export const ItemView: Component<State> = ({ item }) => {
  return (
    <RawHtml html={item.rendered_body}/>
  );
};
