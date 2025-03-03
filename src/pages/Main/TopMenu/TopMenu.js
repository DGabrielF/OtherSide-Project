import { Fade } from "../../../components/Fade/Fade.js";

export const TopMenu = {
  create: () => {},
  data: [
    {
      name: "Atributos",
      shortcut: "A",
      slug: "attributes",
      icon: {
        src: "",
        alt: "",
      }
    },
    {
      name: "Habilidades",
      shortcut: "S",
      slug: "skills",
      icon: {
        src: "",
        alt: "",
      }
    },
    {
      name: "Inventário",
      shortcut: "I",
      slug: "inventory",
      icon: {
        src: "src/assets/menu/inventory.jpg",
        alt: "inventário",
      }
    },
    {
      name: "Bestiário",
      shortcut: "B",
      slug: "bestiaary",
      icon: {
        src: "src/assets/menu/bestiary.jpg",
        alt: "bestiário",
      }
    },
    {
      name: "Clã",
      shortcut: "C",
      slug: "clan",
      icon: {
        src: "src/assets/menu/clan.jpg",
        alt: "clã",
      }
    },
  ]
};

TopMenu.create = () => {
  TopMenu.self = document.createElement("div");
  TopMenu.self.id = "top-menu";

  for (const section of TopMenu.data) {
    const item = document.createElement("div");
    item.addEventListener("click", () => {
      Fade.show();
      const matchSection = document.querySelector(`${section.slug}-section`);
      console.log(matchSection)
      matchSection.classList.remove("hide");
    });
    TopMenu.self.appendChild(item);

    const text = document.createElement("span");
    text.textContent = section.name;
    item.appendChild(text);

    const icon = document.createElement("img");
    icon.src = section.icon.src;
    icon.alt = section.icon.alt;
    item.appendChild(icon);
  }

  return TopMenu.self;
};