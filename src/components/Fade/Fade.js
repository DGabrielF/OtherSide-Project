export const Fade = {
  create: () => {},
};

Fade.create = () => {
  Fade.self = document.createElement("div");
  Fade.self.id = "fade";
  Fade.self.style.zIndex = 1;
  Fade.self.classList.add("hide")
  Fade.self.addEventListener("click", () => Fade.close());

  return Fade.self;
};

Fade.close = () => {
  Fade.hide();
  const aboveElements = getAboveElements();

  if (aboveElements.length >= 0) {
    for (const element of aboveElements) {
      element.classList.add("hide");
    }
  }
}

Fade.hide = () => {
  Fade.self.classList.add("hide");
}

Fade.show = () => {
  Fade.self.classList.remove("hide");
}

function getAboveElements(zIndex = Number(Fade.self.style.zIndex)) {  
  return ([...document.querySelectorAll("*")].filter( el => window.getComputedStyle(el).zIndex >= zIndex));
}