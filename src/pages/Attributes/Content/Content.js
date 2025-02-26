import { Item } from "../Item/Item.js";

export const Content = {};

Content.create = () => {
  Content.self = document.createElement("div");
  Content.self.classList.add("attributes-content");

  Content.title = document.createElement("h1");
  Content.self.appendChild(Content.title);

  Content.attributeArea = document.createElement("div");
  Content.self.appendChild(Content.attributeArea);

  return Content.self;
};

Content.update = (attributes, core) => {
  Content.attributeArea.innerHTML = "";
  Content.title.textContent = core; 
  const attributeType = attributes[core];
  for (const attribute in attributeType) {
    const item = new Item(attributeType[attribute]);
    Content.attributeArea.appendChild(item.create());
  };
};