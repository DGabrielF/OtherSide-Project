import { ProgressBar } from "../../../components/ProgressBar/ProgressBar.js";

export const SkillDetail = {
  create: () => {},
  views: {},
  obj: {},
  data: {
    id: "00000",
    name: "Nenhuma habilidade selecionada",
    icon: {
      src: "src/assets/skill-icon-default.jpeg",
      alt: "none",
    },
    base: {
      offensive: 1,
      defensive: 1,
      cooldown: 1000,
      experience: 100,
    },
    cost: {
      mana: 1,
      stamina: 1,
      soul: 1,
      health: 1,
    },
    details: {
      description: "Selecione uma habilidade para visualizar mais detalhes", 
      type: "self",
      nature: "physical",
    },
    experience: {
      level: 1,
      experience: 0,
      usedPoints: 0,
      proeficiency: 1,
      executions: 0,
    },
    effects: [
      {
        name: "fratura",
        level: 1,
        rate: 0.08,
      }
    ],
    tree: [
      {name: "jab", degree: 1},
      {name: "direto", degree: 1},
      {name: "cruzado", degree: 1},
      {name: "upper", degree: 1},
      {name: "2 golpes", degree: 2},
      {name: "3 golpes", degree: 3},
      {name: "4 golpes", degree: 4}
    ],
  },
}

SkillDetail.update = (skill) => {
  if (skill) {
    SkillDetail.data = skill;
  }
  const SKILL = SkillDetail.data;
  // Icon
  SkillDetail.views.icon.src = SKILL.icon.src
  SkillDetail.views.icon.alt = SKILL.icon.alt
  // Name
  SkillDetail.views.name.textContent = SKILL.name;
  // Level
  SkillDetail.views.level.textContent = SKILL.experience.level;
  SkillDetail.obj.expBar.update(SKILL.experience.experience, SKILL.experience.level * 100)
  // Prof
  SkillDetail.views.proeficiency.textContent = SKILL.experience.proeficiency;
  SkillDetail.obj.executionBar.update(SKILL.experience.executions, SKILL.experience.level * 1000)
  // Description
  SkillDetail.views.description.textContent = SKILL.description;
  // Type
  SkillDetail.views.type.textContent = SKILL.details.type;
  // Nature
  SkillDetail.views.nature.textContent = SKILL.details.nature;
  // Base Attributes
  SkillDetail.views.offensive.textContent = SKILL.base.offensive;
  SkillDetail.views.defensive.textContent = SKILL.base.defensive;
  SkillDetail.views.cooldown.textContent = SKILL.base.cooldown;
  SkillDetail.views.experience.textContent = SKILL.base.experience;
  // Cost
  SkillDetail.views.mana.textContent = SKILL.cost.mana;
  SkillDetail.views.stamina.textContent = SKILL.cost.stamina;
  SkillDetail.views.soul.textContent = SKILL.cost.soul;
  SkillDetail.views.health.textContent = SKILL.cost.health;
}

SkillDetail.create = () => {
  SkillDetail.self = document.createElement("div");
  SkillDetail.self.classList.add("skill-detail-area");

  const firstDiv = document.createElement("div");
  SkillDetail.self.appendChild(firstDiv);
  
  SkillDetail.views.icon = document.createElement("img");
  SkillDetail.views.icon.classList.add("icon");
  firstDiv.appendChild(SkillDetail.views.icon);

  const secondDiv = document.createElement("div");
  secondDiv.classList.add("name-nature");
  firstDiv.appendChild(secondDiv);
  
  SkillDetail.views.name = document.createElement("span");
  SkillDetail.views.name.classList.add("name");
  SkillDetail.views.name.style.textTransform = "uppercase";
  secondDiv.appendChild(SkillDetail.views.name);
  SkillDetail.views.type = document.createElement("span");
  SkillDetail.views.type.classList.add("type");
  secondDiv.appendChild(SkillDetail.views.type);
  
  SkillDetail.views.nature = document.createElement("span");
  SkillDetail.views.nature.classList.add("nature");
  secondDiv.appendChild(SkillDetail.views.nature);
  
  const levelDiv = document.createElement("div");
  firstDiv.appendChild(levelDiv);
  const levelLabel = document.createElement("span");
  levelLabel.textContent = "level: ";
  levelDiv.appendChild(levelLabel);
  SkillDetail.views.level = document.createElement("span");
  SkillDetail.views.level.classList.add("level");
  levelDiv.appendChild(SkillDetail.views.level);
  
  SkillDetail.obj.expBar = new ProgressBar(
    {
      value: SkillDetail.data.experience.experience, 
      maxValue: SkillDetail.data.experience.level * 100,
      showText: true,
    }
  );
  levelDiv.appendChild(SkillDetail.obj.expBar.create());

  const profDiv = document.createElement("div");
  firstDiv.appendChild(profDiv);
  const profLabel = document.createElement("span");
  profLabel.textContent = "maestria: ";
  profDiv.appendChild(profLabel);
  SkillDetail.views.proeficiency = document.createElement("span");
  SkillDetail.views.proeficiency.classList.add("proeficiency");
  profDiv.appendChild(SkillDetail.views.proeficiency);
  
  SkillDetail.obj.executionBar = new ProgressBar(
    {
      value: SkillDetail.data.experience.executions, 
      maxValue: SkillDetail.data.experience.level * 1000,
      showText: true,
    }
  );
  profDiv.appendChild(SkillDetail.obj.executionBar.create());
  
  SkillDetail.views.description = document.createElement("span");
  SkillDetail.views.description.classList.add("description");
  SkillDetail.self.appendChild(SkillDetail.views.description);

  const baseSpan = document.createElement("span");
  baseSpan.textContent = "Atributos Base";
  SkillDetail.self.appendChild(baseSpan);

  const base = document.createElement("div");
  SkillDetail.self.appendChild(base);

  const offensiveDiv = document.createElement("div");
  const offensiveSpan = document.createElement("img");
  offensiveSpan.classList.add("icon");
  offensiveSpan.classList.add("health");
  offensiveSpan.src = "src/assets/icons/sword.svg";
  offensiveDiv.appendChild(offensiveSpan);
  SkillDetail.views.offensive = document.createElement("span");
  offensiveDiv.appendChild(SkillDetail.views.offensive);
  base.appendChild(offensiveDiv);

  const defensiveDiv = document.createElement("div");
  const defensiveSpan = document.createElement("img");
  defensiveSpan.classList.add("icon");
  defensiveSpan.classList.add("health");
  defensiveSpan.src = "src/assets/icons/shield.svg";
  defensiveDiv.appendChild(defensiveSpan);
  SkillDetail.views.defensive = document.createElement("span");
  defensiveDiv.appendChild(SkillDetail.views.defensive);
  base.appendChild(defensiveDiv);

  const cooldownDiv = document.createElement("div");
  const cooldownSpan = document.createElement("img");
  cooldownSpan.classList.add("icon");
  cooldownSpan.classList.add("health");
  cooldownSpan.src = "src/assets/icons/clock.svg";
  cooldownDiv.appendChild(cooldownSpan);
  SkillDetail.views.cooldown = document.createElement("span");
  cooldownDiv.appendChild(SkillDetail.views.cooldown);
  base.appendChild(cooldownDiv);

  const experienceDiv = document.createElement("div");
  const experienceSpan = document.createElement("img");
  experienceSpan.classList.add("icon");
  experienceSpan.classList.add("health");
  experienceSpan.src = "src/assets/icons/exp.svg";
  experienceDiv.appendChild(experienceSpan);
  SkillDetail.views.experience = document.createElement("span");
  experienceDiv.appendChild(SkillDetail.views.experience);
  base.appendChild(experienceDiv);
  
  const costSpan = document.createElement("span");
  costSpan.textContent = "Custo de Execução";
  SkillDetail.self.appendChild(costSpan);

  const cost = document.createElement("div");
  SkillDetail.self.appendChild(cost);

  const manaDiv = document.createElement("div");
  const manaSpan = document.createElement("img");
  manaSpan.classList.add("icon");
  manaSpan.classList.add("health");
  manaSpan.src = "src/assets/icons/mana-1.jpg";
  manaDiv.appendChild(manaSpan);
  SkillDetail.views.mana = document.createElement("span");
  manaDiv.appendChild(SkillDetail.views.mana);
  cost.appendChild(manaDiv);

  const staminaDiv = document.createElement("div");
  const staminaSpan = document.createElement("img");
  staminaSpan.classList.add("icon");
  staminaSpan.classList.add("health");
  staminaSpan.src = "src/assets/icons/stamina-2.jpg";
  staminaDiv.appendChild(staminaSpan);
  SkillDetail.views.stamina = document.createElement("span");
  staminaDiv.appendChild(SkillDetail.views.stamina);
  cost.appendChild(staminaDiv);

  const soulDiv = document.createElement("div");
  const soulSpan = document.createElement("img");
  soulSpan.classList.add("icon");
  soulSpan.classList.add("health");
  soulSpan.src = "src/assets/icons/soul-2.jpg";
  soulDiv.appendChild(soulSpan);
  SkillDetail.views.soul = document.createElement("span");
  soulDiv.appendChild(SkillDetail.views.soul);
  cost.appendChild(soulDiv);

  const healthDiv = document.createElement("div");
  const healthSpan = document.createElement("img");
  healthSpan.classList.add("icon");
  healthSpan.classList.add("health");
  healthSpan.src = "src/assets/icons/health-1.jpg";
  healthDiv.appendChild(healthSpan);
  SkillDetail.views.health = document.createElement("span");
  healthDiv.appendChild(SkillDetail.views.health);
  cost.appendChild(healthDiv);

  SkillDetail.update();

  return SkillDetail.self;
}