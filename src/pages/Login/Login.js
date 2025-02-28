import { Fade } from "../../components/Fade/Fade.js";
import { Input } from "../../components/Input/Input.js";
import { Register } from "../Register/Register.js";

export const Login = {
  create: () => {},
  show: () => {},
  hide: () => {},
  icon: {
    eye: "src/assets/icons/eye.svg",
    eyeClosed: "src/assets/icons/eye-closed.svg",
  }
};

Login.create = () => {
  Login.self = document.createElement("div");
  Login.self.id = "login-box";
  Login.self.classList.add("hide");

  const title = document.createElement("h1");
  title.textContent = "LOGIN";
  Login.self.appendChild(title);
  
  const nameInput = new Input({
    placeholder: "usuário",
    mandatory: true,
    types: "text",
  });
  Login.self.appendChild(nameInput.create());

  const passwordDiv = document.createElement("div");
  passwordDiv.classList.add("password")
  Login.self.appendChild(passwordDiv);

  const passwordInput = new Input({
    placeholder: "senha",
    mandatory: true,
    types: ["password", "text"],
    toggleIcons: [Login.icon.eyeClosed, Login.icon.eye]
  })
  passwordDiv.appendChild(passwordInput.create());

  const buttonArea = document.createElement("div");
  buttonArea.classList.add("button-area");
  Login.self.appendChild(buttonArea);

  const buttonConfirm = document.createElement("button");
  buttonConfirm.textContent = "Entrar"
  buttonConfirm.classList.add("agree");
  buttonArea.appendChild(buttonConfirm);
  
  const buttonRegister = document.createElement("button");
  buttonRegister.textContent = "Registrar"
  buttonRegister.classList.add("switch");
  buttonRegister.dataset.from = "login-box";
  buttonRegister.dataset.to = "register-box";
  buttonArea.appendChild(buttonRegister);

  return Login.self;
};

Login.hide = () => {
  Fade.close();
};

Login.show = () => {
  Fade.show();
  Login.self.classList.remove("hide")
};