import { PlayerTeste } from "../../schemas/Player.js";
import { SkillDetail } from "./SkillDetail/SkillDetail.js";
import { SkillAddEdit } from "./SkillsAddEdit/SkillsAddEdit.js";
import { SkillsItem } from "./SkillsItem/SkillsItem.js";
import { SkillsList } from "./SkillsList/SkillsList.js";

export const Skills = {
  self: null,
};

Skills.create = () => {
  Skills.self = document.createElement("section");
  Skills.self.id = "skills-page";

  Skills.self.appendChild(SkillsList.create());
  
  const item = new SkillsItem();

  for (const skill of PlayerTeste.skills.data) {
    SkillsList.self.appendChild(item.create(skill));
    item.self.addEventListener("click", () => detailUpdate(skill));
  }

  Skills.self.appendChild(SkillAddEdit.create());

  const div = document.createElement("div");
  div.classList.add("detail-tree");
  Skills.self.appendChild(div);

  div.appendChild(SkillDetail.create());

  const treeArea = document.createElement("div");

  return Skills.self;
};

function detailUpdate (skill) {
  SkillDetail.update(skill);
}