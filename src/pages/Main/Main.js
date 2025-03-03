import { ActionMenu } from "./ActionMenu/ActionMenu.js";
import { ProfileMenu } from "./ProfileMenu/ProfileMenu.js";
import { TopMenu } from "./TopMenu/TopMenu.js";

export const Main = {
  create: () => {},
  show: () => {},
  hide: () => {},
};

Main.show = () => {
  Main.self.classList.remove("hide");
};

Main.hide = () => {
  Main.self.classList.add("hide");
};
Main.create = () => {
  Main.self = document.createElement("section");
  Main.self.id = "main-section";

  const viewPort = document.createElement("div");
  Main.self.appendChild(viewPort);
  const actionMenu = ActionMenu.create();
  Main.self.appendChild(actionMenu);
  const profileMenu = ProfileMenu.create();
  Main.self.appendChild(profileMenu);
  const topMenu = TopMenu.create();
  Main.self.appendChild(topMenu);
  const chat = document.createElement("div");  

  return Main.self;
};
