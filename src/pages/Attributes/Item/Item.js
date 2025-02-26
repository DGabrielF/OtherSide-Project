import { ProgressBar } from "../../../components/ProgressBar/ProgressBar.js";

export class Item {
  constructor({name, level, exp, expToUp, skillBonus, equipmentBonus}) {
    this.name = name;
    this.level = level;
    this.exp = exp;
    this.expToUp = expToUp;
    this.skillBonus = skillBonus;
    this.equipmentBonus = equipmentBonus;
  };

  create() {
    console.log(this)
    this.element = document.createElement("div");
    this.element.classList.add("attribute-item");

    const name = document.createElement("span");
    name.classList.add("name");
    name.textContent = this.name;
    this.element.appendChild(name);
    
    const level = document.createElement("span");
    level.textContent = this.level;
    this.element.appendChild(level);
    
    const progressBar = new ProgressBar(
      {
        value: this.exp, 
        maxValue: this.expToUp,
        showText: true,
      }
    );
    this.element.appendChild(progressBar.create());
    
    const upgradeButton = document.createElement("button");
    upgradeButton.textContent = "+";
    this.element.appendChild(upgradeButton);

    return this.element;
  };

  gainExp(value) {
    this.exp += value;
  }
};

