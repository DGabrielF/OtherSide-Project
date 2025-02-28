import { Fade } from "./components/Fade/Fade.js";
import { Login } from "./pages/Login/Login.js";
import { Opening } from "./pages/Opening/Opening.js";
import { Register } from "./pages/Register/Register.js";
import { PlayerTeste } from "./schemas/Player.js";

const body = document.querySelector("body");

function init () {
  loading();
};

init();

function loading() {
  const opening = Opening.create();
  body.appendChild(opening);

  Opening.update({ message: "Carregando dados de componentes: Fade.", value: 1, maxValue: 3 });
  const fade = Fade.create();
  body.appendChild(fade);

  Opening.update({ message: "Carregando dados conponentes da página de login.", value: 2, maxValue: 3 });
  const loginBox = Login.create();
  body.appendChild(loginBox);
  
  Opening.update({ message: "Carregando dados conponentes da página de registro.", value: 3, maxValue: 3 });
  const registerBox = Register.create();
  body.appendChild(registerBox);

  Opening.hide();
  Login.show();


  const loadMessage = document.createElement("span");
  const player = PlayerTeste;

  document.addEventListener("click", (e) => switchPage(e));
}

function switchPage(event) {
  const target = event.target;
  if (!target.classList.contains("switch")) return;
  if (!target.dataset.from) return;
  if (!target.dataset.to) return;
  const from = document.querySelector(`#${target.dataset.from}`);
  from.classList.add("hide");
  const to = document.querySelector(`#${target.dataset.to}`);
  to.classList.remove("hide");
}