import { Attributes } from "./pages/Attributes/Attributes.js";
import { PlayerTeste } from "./schemas/Player.js";

const body = document.querySelector("body");

function init () {
  loading();
};

init();

function loading() {
  const loadMessage = document.createElement("span");
  const player = PlayerTeste;
  body.appendChild(Attributes.create(player.attributes));
  //body.appendChild(Skills.create());
}