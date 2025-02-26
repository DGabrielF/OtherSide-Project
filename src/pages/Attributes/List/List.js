import { Content } from "../Content/Content.js";

export const List = {};

List.create = (attributeGroups) => {
  List.self = document.createElement("div");
  List.self.classList.add("attribute-menu");

  for (const core in attributeGroups) {
    const option = document.createElement("div");
    option.addEventListener("click", () => Content.update(attributeGroups, core))
    option.textContent = core;
    List.self.appendChild(option);
  }

  return List.self;
};