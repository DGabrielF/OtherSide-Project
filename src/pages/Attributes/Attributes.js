import { Content } from "./Content/Content.js";
import { List } from "./List/List.js";

export const Attributes = {};

Attributes.create = (attributes) => {
  Attributes.self = document.createElement("section");
  Attributes.self.id = "attributes-page";

  Attributes.self.appendChild(List.create(attributes));
  Attributes.self.appendChild(Content.create());

  return Attributes.self;
}

