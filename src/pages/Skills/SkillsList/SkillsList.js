import { SkillAddEdit } from "../SkillsAddEdit/SkillsAddEdit.js";

export const SkillsList = {
  self: null,
  data: [],
  show: () => {},
  hide: () => {},
  create: () => {},
  update: () => {},
};

SkillsList.show = () => {
  SkillsList.self.classList.remove("hide");
  SkillsList.update();
};

SkillsList.hide = () => {
  SkillsList.self.classList.add("hide");
};

SkillsList.create = () => {
  SkillsList.self = document.createElement("div");
  SkillsList.self.classList.add("hide");
  SkillsList.self.classList.add("skill-list");

  const buttonCreate = document.createElement("button");
  buttonCreate.addEventListener("click", () => SkillAddEdit.show());
  buttonCreate.classList.add("agree");
  buttonCreate.textContent = "Adicionar Habilidade";
  SkillsList.self.appendChild(buttonCreate);

  const list = document.createElement("div");
  list.classList.add("list");
  SkillsList.self.appendChild(list);
  
  SkillsList.update();
  
  return SkillsList.self;
};

SkillsList.update = (skillArray) => {
  if (!skillArray) return;
  const list = SkillsList.self.querySelector("div.list");
  for (const skill of skillArray) {
    const item = SkillItem.create();
    list.appendChild(item);
  }
};
