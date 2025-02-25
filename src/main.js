import { Skills } from "./pages/Skills/Skills.js";

const body = document.querySelector("body");

function init () {
  loading();
};

init();

function loading() {
  const loadMessage = document.createElement("span");
  
  body.appendChild(Skills.create());
}