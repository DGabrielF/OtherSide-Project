import { Fade } from "../../components/Fade/Fade.js";
import { Input } from "../../components/Input/Input.js";
import { Login } from "../Login/Login.js";

export const Register = {
  create: () => {},
  show: () => {},
  hide: () => {},
  icon: {
    eye: "src/assets/icons/eye.svg",
    eyeClosed: "src/assets/icons/eye-closed.svg",
  }
};

Register.create = () => {
  Register.self = document.createElement("div");
  Register.self.id = "register-box";
  Register.self.classList.add("hide");

  const title = document.createElement("h1");
  title.textContent = "Registrar";
  Register.self.appendChild(title);
  
  const nameInput = new Input({
    placeholder: "usuário",
    mandatory: true,
    types: "text",
  });
  Register.self.appendChild(nameInput.create());

  const passwordDiv = document.createElement("div");
  passwordDiv.classList.add("password")
  Register.self.appendChild(passwordDiv);

  const passwordInput = new Input({
    placeholder: "senha",
    mandatory: true,
    types: ["password", "text"],
    toggleIcons: [Register.icon.eyeClosed, Register.icon.eye]
  })
  Register.self.appendChild(passwordInput.create());


  const confirmPasswordInput = new Input({
    placeholder: "confirmar senha",
    mandatory: true,
    types: ["password", "text"],
    toggleIcons: [Register.icon.eyeClosed, Register.icon.eye]
  })
  Register.self.appendChild(confirmPasswordInput.create());

  const buttonArea = document.createElement("div");
  buttonArea.classList.add("button-area");
  Register.self.appendChild(buttonArea);

  const buttonConfirm = document.createElement("button");
  buttonConfirm.textContent = "Registrar";
  buttonConfirm.classList.add("agree");
  buttonArea.appendChild(buttonConfirm);
  
  const buttonLogin = document.createElement("button");
  buttonLogin.textContent = "entrar";
  buttonLogin.classList.add("switch");
  buttonLogin.dataset.from = "register-box";
  buttonLogin.dataset.to = "login-box";
  buttonArea.appendChild(buttonLogin);

  return Register.self;
};

Register.hide = () => {
  Fade.close();
};

Register.show = () => {
  Fade.show();
  Register.self.classList.remove("hide");
};