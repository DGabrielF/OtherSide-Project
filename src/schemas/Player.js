class Player {
  constructor(
    {
      uid,
      name,
      attributes,
      skills,
    }
  ) {
    this.uid = uid;
    this.name = name;
    this.attributes = attributes;
    this.skills = skills;
  }
}

export const PlayerTeste = {
  personal: {
    name: "Kirito",
    uid: "0000000",
  },
  attributes: {
    base: {
      agility: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
      strenght: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
      intelligence: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
      spirituality: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
      resistance: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
    },
    battle: {
      physicalDamage: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
      magicDamage: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
      blockChance: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
      blockAmount: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
      magicResistance: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
      attackSpeed: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
      dodgeRate: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
      criticalRate: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
      criticalDamage: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
      counterAttackRate: {
        current: 0,
        equipmentBonus: 0,
        skillBonus: 0,
      },
    },
    adventure: {
      walkSpeed: {
        medium: 0,
        maximun: 0,
        costPerSpeedPerTime: 0,
      },
    }
  },
  experience: {
    level: 1,
    current: 0,
  },
  skills: {
    points: {
      current: 0,
      max: 5,
    },
    data: [
      {
        id: "00001",
        name: "soco",
        icon: {
          src: "src/assets/punch-skill-icon.jpg",
          alt: "punch",
        },
        base: {
          offensive: 4,
          defensive: 1,
          cooldown: 1000,
          experience: 100,
        },
        cost: {
          mana: 0,
          stamina: 10,
          soul: 0,
          health: 0,
        },
        details: {
          description: "Golpes desferidos com as mãos", 
          type: "target",
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
      {
        id: "00023",
        name: "barreira de água",
        icon: {
          src: "src/assets/water-wall.jpeg",
          alt: "punch",
        },
        base: {
          offensive: 4,
          defensive: 1,
          cooldown: 1000,
          experience: 100,
        },
        cost: {
          mana: 150,
          stamina: 10,
          soul: 0,
          health: 0,
        },
        details: {
          description: "Golpes desferidos com as mãos", 
          type: "target",
          nature: "water",
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
    ]
  }
}